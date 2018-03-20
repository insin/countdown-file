#!/usr/bin/env node
const fs = require('fs')

const HOURS_MS = 60 * 60 * 1000
const MINUTES_MS = 60 * 1000

let [time, outputFile, doneText = ''] = process.argv.slice(2)

if (!time || !outputFile) {
  console.log('Usage: countdown <time> <output_file> [done_text]')
  console.log('')
  console.log('Arguments:')
  console.log('  time         number of minutes or a time in mm:ss format')
  console.log('  output_file  file to write the countdown into')
  console.log('  done_text    (optional) text to display when the countdown is complete')
  console.log('               defaults to displaying nothing, hiding the countdown')
  process.exit(1)
}
if (!/^\d+(:\d{1,2})?$/.test(time)) {
  console.error('countdown: time must be a number of minutes or mm:ss format')
  process.exit(1)
}

let [minutes, seconds = '0'] = time.split(':')
let milliseconds = Number(minutes) * MINUTES_MS + Number(seconds) * 1000

function millisecondsToTime(ms) {
  let hours = Math.floor(ms / HOURS_MS)
  let minutes = Math.floor((ms % HOURS_MS) / MINUTES_MS)
  let seconds = Math.floor((ms % MINUTES_MS) / 1000)
  let parts = [String(seconds).padStart(2, '0')]
  if (hours > 0) {
    parts.unshift(hours, String(minutes).padStart(2, '0'))
  }
  else {
    parts.unshift(minutes)
  }
  return parts.join(':')
}

function tick() {
  if (milliseconds > 0) {
    fs.writeFileSync(outputFile, millisecondsToTime(milliseconds))
    milliseconds -= 1000
    setTimeout(tick, 1000)
  }
  else {
    fs.writeFileSync(outputFile, doneText)
  }
}

tick()
