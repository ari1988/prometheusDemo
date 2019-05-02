import prom from 'promjs';

const registry = prom();
const pageRequestCounter = registry.create('counter', 'page_requests', 'A counter for page requests');

pageRequestCounter.inc();
console.log(registry.metrics());