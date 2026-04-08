# Council Operational Manual

## The Council of Archangels — DataFloat Mission

**Principal:** Lucy
**Mission:** DataFloat — 30-day validation sprint, recruit 20 bookkeepers

---

## Council Members & Responsibilities

| Agent   | Archetype        | Model                | Soul File                          |
|---------|------------------|----------------------|------------------------------------|
| Rafael  | The Guide        | claude-sonnet-3-5    | souls/rafael/SOUL.md               |
| Uriel   | God's Fire       | claude-sonnet-3-5    | souls/uriel/SOUL.md                |
| Michael | The Wise Advisor | claude-sonnet-3-5    | souls/michael/SOUL.md              |
| Gabriel | The Voice        | claude-sonnet-3-5    | souls/gabriel/SOUL.md              |
| Raguel  | The Friend       | claude-sonnet-3-5    | souls/raguel/SOUL.md               |

---

## Daily Operating Rhythm

### Morning Standup (8:00 AM)
Each agent reports:
1. **Yesterday** — what was accomplished
2. **Today** — what they're working on
3. **Blockers** — anything that needs resolution

Rafael synthesizes and sends summary to Lucy.

### Decision Flow
1. Rafael identifies a decision or direction
2. Uriel validates with evidence/data
3. Michael assesses risk and enables safe execution
4. Gabriel shapes the communication
5. Raguel handles relationship touchpoints
6. Lucy approves anything significant before external action

### Escalation to Lucy
Escalate immediately when:
- Decision involves financial commitment
- Reputational risk is involved
- Agents are in disagreement on a critical issue
- Something unexpected arises in the bookkeeper pipeline

---

## DataFloat Validation Sprint — 30 Days

### Goal
Validate DataFloat with 20 bookkeepers who will actively use and provide feedback on the product.

### Sprint Phases

**Week 1 — Foundation**
- Rafael: Set strategic targets and success metrics
- Uriel: Research bookkeeper landscape, define ideal profile
- Michael: Risk-assess outreach and onboarding approach
- Gabriel: Draft outreach messaging and pitch materials
- Raguel: Identify and begin warm outreach to first 5 prospects

**Week 2 — Pipeline**
- Raguel: First conversations, qualify interest
- Gabriel: Iterate messaging based on early feedback
- Uriel: Track responses, identify patterns
- Michael: Review any agreements or commitments
- Rafael: Adjust strategy based on Week 1 learnings

**Week 3 — Validation**
- Target: 10+ bookkeepers in active conversation
- Raguel: Deepen relationships, move toward commitment
- Uriel: Gather product feedback, synthesize insights
- Gabriel: Refine value proposition based on real conversations
- Michael: Validate that commitments are solid and sustainable

**Week 4 — Close**
- Target: 20 bookkeepers committed
- Raguel: Finalize onboarding for all 20
- Rafael: Report sprint results to Lucy
- Uriel: Document learnings for next phase
- Michael: Sign-off on all commitments and agreements

### Weekly Reporting to Lucy
Every Friday: Rafael sends a sprint status report including:
- Bookkeepers in pipeline (by stage)
- Key learnings from conversations
- Adjustments to approach
- Risks or concerns flagged by Michael
- Next week's targets

---

## Inter-Agent Communication Protocols

### Standard Channels
- Agents communicate through Lucy's OpenClaw workspace
- Each agent can message others through the session system
- All significant decisions logged to `memory/YYYY-MM-DD.md`

### When Agents Consult Each Other
- **Rafael → all:** Direction changes, strategic pivots
- **Uriel → Rafael + Michael:** Data findings that affect strategy or risk
- **Michael → all:** Risk flags that require attention before proceeding
- **Gabriel → Rafael + Michael:** Before sending external communications
- **Raguel → Gabriel:** Before major outreach or relationship moments

### Conflict Resolution
1. Agents state their position clearly
2. Uriel provides relevant facts
3. Michael assesses risk profile of each option
4. Rafael makes the call
5. Lucy has final say on anything significant

---

## Workspace File Structure

```
workspace/
├── SOUL.md                    # Michael's active soul (main agent)
├── IDENTITY.md                # Michael's identity
├── USER.md                    # Lucy's profile
├── MEMORY.md                  # Long-term memory (main session)
├── HEARTBEAT.md               # Periodic check tasks
├── COUNCIL_OPERATIONAL_MANUAL.md  # This file
├── souls/
│   ├── COUNCIL.md             # Council structure overview
│   ├── rafael/SOUL.md
│   ├── uriel/SOUL.md
│   ├── michael/SOUL.md
│   ├── gabriel/SOUL.md
│   └── raguel/SOUL.md
├── datafloat/                 # DataFloat sprint materials
│   ├── SPRINT.md              # Sprint tracker
│   ├── pipeline.md            # Bookkeeper pipeline
│   └── messaging/             # Gabriel's outreach templates
└── memory/
    └── YYYY-MM-DD.md          # Daily logs
```

---

## Deployment Instructions

### To Deploy a Council Agent in OpenClaw

Each agent needs its own OpenClaw agent configuration. On the host:

```bash
# Example: deploy Rafael
openclaw agent create \
  --name "Rafael" \
  --model "claude-sonnet-3-5" \
  --soul /root/.openclaw/workspace/souls/rafael/SOUL.md \
  --workspace /root/.openclaw/workspace

# Repeat for each agent
```

> ⚠️ Exact CLI syntax depends on your OpenClaw version. Run `openclaw agent --help` to confirm.

### Startup Checklist
- [ ] All 5 soul files present in `souls/`
- [ ] Each agent assigned to claude-sonnet-3-5
- [ ] Morning standup scheduled (8:00 AM cron or heartbeat)
- [ ] DataFloat sprint tracker created (`datafloat/SPRINT.md`)
- [ ] Bookkeeper pipeline doc initialized (`datafloat/pipeline.md`)
- [ ] All agents acknowledge Lucy as principal

---

## Success Criteria — 30-Day Sprint

- ✅ All 5 agents operational
- ✅ Morning standup running daily
- ✅ 20 bookkeepers committed to DataFloat
- ✅ Product feedback documented
- ✅ Agents communicating and coordinating effectively
- ✅ Lucy informed and in control throughout
