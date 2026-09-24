// Register all engines with the sandbox registry.
// main.js imports this once.

import { SandboxRegistry } from '../core/sandbox.js';
import { wordEngine } from './word-engine.js';
import { excelEngine } from './excel-engine.js';
import { pptEngine } from './ppt-engine.js';

SandboxRegistry.register('word', wordEngine);
SandboxRegistry.register('excel', excelEngine);
SandboxRegistry.register('ppt', pptEngine);