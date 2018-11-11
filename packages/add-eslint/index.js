#!/usr/bin/env node

const { argv } = require('yargs')
  .strict()
  .option('ts', { desc: 'TypeScript linting' })
  .boolean('ts')

const execa = require('execa')
const Listr = require('listr')
const split = require('split')
const streamToObservable = require('stream-to-observable')
const fs = require('fs-extra')

const exec = (cmd, args) => {
  const cp = execa(cmd, args)
  return streamToObservable(cp.stdout.pipe(split()), { await: cp }).filter(
    Boolean,
  )
}

const tasks = new Listr([
  {
    title: 'Install dependencies',
    task: () => exec('yarn', ['add', '-D', 'eslint-config-lemon']),
  },
  {
    title: 'Create configuration files',
    task: async () => {
      await fs.writeJSON(
        '.eslintrc',
        {
          extends: argv.ts ? 'lemon/ts' : 'lemon',
        },
        { spaces: 2 },
      )
    },
  },
])

tasks.run().catch(() => {})
