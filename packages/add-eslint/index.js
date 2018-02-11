#!/usr/bin/env node

const execa = require('execa')
const Listr = require('listr')
const split = require('split')
const { Observable } = require('rxjs')
const streamToObservable = require('stream-to-observable')
const fs = require('fs-extra')

const exec = (cmd, args) => {
  const cp = execa(cmd, args)
  return Observable.merge(
    streamToObservable(cp.stdout.pipe(split()), { await: cp }),
    streamToObservable(cp.stderr.pipe(split()), { await: cp }),
  ).filter(Boolean)
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
          extends: 'lemon',
        },
        { spaces: 2 },
      )
    },
  },
])

tasks.run().catch(() => {})
