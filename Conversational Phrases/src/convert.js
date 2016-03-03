const fs = require('fs');

const raw = fs.readFileSync('./data/Conversational Phrases.txt', { encoding: 'utf8' });

const lines = raw.trim().split('\n');

const phraseData = lines.slice(1).map(str => str.trim());

const headers = ['start', 'end', 'mix', 'spa', 'eng'];

const phrases = phraseData.map(data => {
  data = data.split('\t').map(str => str.trim());
  const phrase = {};
  headers.forEach((header, i) => phrase[header] = data[i]);
  return phrase;
});

fs.writeFileSync('./data/conversational-phrases.json', JSON.stringify(phrases, null, 2), 'utf8');
