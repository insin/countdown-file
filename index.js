#!/usr/bin/env node
const fs = require('fs')

const MINUTES_MS = 60 * 1000

let [time, outputFile, doneText] = process.argv.slice(2)
let [minutes, seconds] = time.split(':')
let milliseconds = Number(minutes) * MINUTES_MS + Number(seconds) * 1000

function millisecondsToTime(ms) {
  let minutes = Math.floor(ms / MINUTES_MS)
  let seconds = Math.floor((ms % MINUTES_MS) / 1000)
  return `${minutes}:${String(seconds).padStart(2, '0')}`
}

function tick() {
  fs.writeFileSync(outputFile, millisecondsToTime(milliseconds))
  milliseconds -= 1000
  if (milliseconds >= 0) {
    setTimeout(tick, 1000)
  }
  else if (doneText) {
    fs.writeFileSync(outputFile, doneText)
  }
}

tick()
