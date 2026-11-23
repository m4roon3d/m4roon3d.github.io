'use strict';
const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const html = fs.readFileSync('index.html', 'utf8');
const metadata = fs.readFileSync('project-metadata.js', 'utf8');

// Syntax-check the metadata and every executable inline script.
new vm.Script(metadata, { filename: 'project-metadata.js' });
const scripts = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)];
assert.ok(scripts.length, 'No script tags found');
for (const [i, script] of scripts.entries()) {
  if (!/\bsrc\s*=/.test(script[1]) && script[2].trim()) {
    new vm.Script(script[2], { filename: 'index.html:inline-' + i });
  }
}
assert.match(html, /src="project-metadata\.js\?v=[^"]+"/, 'Missing cache-busted metadata script');
const context = { window: {} };
vm.runInNewContext(metadata, context, { filename: 'project-metadata.js' });
const registry = context.window.PORTFOLIO_PROJECTS;
assert.ok(registry, 'Metadata did not initialize');
const names = Object.keys(registry.details);
assert.ok(names.length >= 13, 'Unexpected project count');
for (const name of names) {
  for (const section of ['details', 'topology', 'architectures', 'caseStudies']) {
    assert.ok(registry[section]?.[name], name + ': missing ' + section);
  }
  const graph = registry.topology[name];
  assert.ok(Array.isArray(graph.nodes) && graph.nodes.length, name + ': missing nodes');
  for (const [from, to] of graph.edges) {
    assert.ok(Number.isInteger(from) && Number.isInteger(to) &&
      from >= 0 && to >= 0 && from < graph.nodes.length && to < graph.nodes.length,
      name + ': invalid architecture edge');
  }
  assert.ok(registry.details[name].description?.length > 25, name + ': missing overview');
  assert.ok(registry.architectures[name].length, name + ': missing architecture');
  const c = registry.caseStudies[name];
  assert.ok(c.problem && c.decision && c.tradeoff, name + ': incomplete decisions');
}
for (const name of ['tradeprint', 'reachloop', 'annotated', 'trove', 'done-and-dusted', 'repwise', 'skyband']) {
  assert.ok(names.includes(name), 'Required project missing: ' + name);
}
assert.ok(Array.isArray(registry.visibility?.hidden), 'Visibility.hidden must be an array');
assert.equal(new Set(registry.visibility.hidden).size, registry.visibility.hidden.length, 'Duplicate hidden project');
assert.ok(registry.visibility.hidden.every(n => typeof n === 'string' && n.length), 'Invalid hidden project name');
assert.match(html, /hiddenProjects\.has\(r\.name\)/, 'Site-wide visibility filter missing');
assert.match(html, /function all\(\)/, 'Project listing renderer missing');
assert.match(html, /render\(\);/, 'Initial project render missing');
console.log('Showcase validation passed: ' + names.length + ' complete project profiles and inline script syntax.');
