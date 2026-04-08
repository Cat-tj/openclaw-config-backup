const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const os = require('os');
const cors = require('cors');
const multer = require('multer');

const app = express();
const PORT = 3001;
const WORKSPACE = path.join(os.homedir(), '.openclaw', 'workspace-rafael');
const UPLOADS = path.join(WORKSPACE, 'uploads');

// Ensure uploads directory exists
fs.mkdir(UPLOADS, { recursive: true }).catch(console.error);

// Configure multer for file uploads
const upload = multer({ dest: UPLOADS });

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use('/uploads', express.static(UPLOADS));

app.use(cors());
app.use(express.json());

// List all files in workspace
app.get('/api/files', async (req, res) => {
  try {
    const files = await fs.readdir(WORKSPACE);
    const fileList = await Promise.all(
      files.map(async (file) => {
        const filePath = path.join(WORKSPACE, file);
        const stat = await fs.stat(filePath);
        return {
          name: file,
          path: file,
          isDirectory: stat.isDirectory(),
          size: stat.size,
          modified: stat.mtime
        };
      })
    );
    res.json(fileList.sort((a, b) => a.name.localeCompare(b.name)));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Read file contents
app.get('/api/file/:path(*)', async (req, res) => {
  try {
    const filePath = path.join(WORKSPACE, req.params.path);
    
    // Security: prevent directory traversal
    if (!filePath.startsWith(WORKSPACE)) {
      return res.status(403).json({ error: 'Access denied' });
    }
    
    const content = await fs.readFile(filePath, 'utf8');
    res.json({ content, path: req.params.path });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// In-memory message store (replace with database later)
const messages = {};
const sessions = {};

// Get or create chat session
app.get('/api/chat/:agentId', async (req, res) => {
  try {
    const { agentId } = req.params;
    if (!messages[agentId]) {
      messages[agentId] = [];
    }
    res.json({ messages: messages[agentId], agentId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Send message to agent
app.post('/api/messages', async (req, res) => {
  try {
    const { agentId, message, mode } = req.body;
    
    if (!agentId || !message) {
      return res.status(400).json({ error: 'Missing agentId or message' });
    }

    if (!messages[agentId]) {
      messages[agentId] = [];
    }

    // Add user message
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: message,
      timestamp: new Date(),
      agentId,
      mode
    };
    messages[agentId].push(userMsg);

    // Simulate agent response (integrate with OpenClaw later)
    const agentResponse = {
      id: Date.now() + 1,
      sender: agentId,
      text: `[${agentId}] Processing: "${message}"`,
      timestamp: new Date(),
      agentId,
      mode
    };
    messages[agentId].push(agentResponse);

    res.json({ 
      userMessage: userMsg, 
      agentMessage: agentResponse,
      totalMessages: messages[agentId].length 
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all messages for agent
app.get('/api/messages/:agentId', async (req, res) => {
  try {
    const { agentId } = req.params;
    res.json({ 
      messages: messages[agentId] || [],
      agentId 
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Clear messages (for testing)
app.delete('/api/messages/:agentId', async (req, res) => {
  try {
    const { agentId } = req.params;
    messages[agentId] = [];
    res.json({ cleared: true, agentId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Upload file or image
app.post('/api/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file provided' });
    }

    const fileUrl = `/uploads/${req.file.filename}`;
    const message = {
      id: Date.now(),
      sender: 'system',
      type: 'file',
      filename: req.file.originalname,
      mimetype: req.file.mimetype,
      url: fileUrl,
      size: req.file.size,
      timestamp: new Date()
    };

    res.json({ 
      success: true,
      file: message
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

app.listen(PORT, () => {
  console.log(`Council Room backend running on http://localhost:${PORT}`);
  console.log(`- Files: GET /api/files`);
  console.log(`- Chat: GET /api/messages/:agentId`);
  console.log(`- Send: POST /api/messages`);
  console.log(`- Upload: POST /api/upload`);
});
