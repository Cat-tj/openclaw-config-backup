import PDFParser from 'pdf2json';
const parser = new PDFParser();
parser.on('pdfParser_dataReady', (d) => {
  const texts = [];
  for (const page of d.Pages) {
    for (const text of page.Texts) {
      const runs = text.R.map(r => decodeURIComponent(r.T)).join('');
      texts.push(runs);
    }
    texts.push('\n---PAGE BREAK---\n');
  }
  console.log(texts.join('\n'));
});
parser.on('pdfParser_dataError', (e) => console.error(e));
parser.loadPDF(process.argv[2]);
