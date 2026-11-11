const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = path.join(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'project-metadata.js'), 'utf8');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const context = { window: {} };
vm.runInNewContext(source, context, { filename: 'project-metadata.js' });
for (const match of html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)) {
  new vm.Script(match[1], { filename: 'index.html inline script' });
}
const { details, topology, architectures, caseStudies } = context.window.PORTFOLIO_PROJECTS;
assert.equal(Object.keys(details).length, 7);
for (const name of Object.keys(details)) {
  assert.ok(details[name].description && details[name].stack.length, name);
  assert.ok(architectures[name].length, name);
  for (const key of ['problem', 'decision', 'tradeoff']) assert.ok(caseStudies[name][key], name + ': ' + key);
  assert.ok(topology[name].nodes.length, name);
  for (const edge of topology[name].edges) {
    assert.equal(edge.length, 2);
    for (const index of edge) assert.ok(Number.isInteger(index) && topology[name].nodes[index], name + ': invalid edge');
  }
}
console.log('PASS: JavaScript syntax, registry runtime, all 7 project records and topology edges');
