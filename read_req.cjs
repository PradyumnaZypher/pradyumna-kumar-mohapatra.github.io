const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\Hp\\.gemini\\antigravity-ide\\brain\\205036e6-4a1e-40cc-83c9-6c2370b4a0fd\\.system_generated\\logs\\transcript_full.jsonl', 'utf-8');
const lines = content.split('\n');
const req = lines.find(l => l.includes('You are an expert frontend developer'));
if(req) {
    const data = JSON.parse(req);
    console.log(data.content);
}
