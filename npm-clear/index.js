#!/usr/bin/env node

const program = require('commander');

const helpOptions = require('./lib/core/help');
const clearModules = require('./lib/utils/clear');

program.version(require('./package.json').version);

helpOptions();

program.parse(process.argv);

clearModules();
