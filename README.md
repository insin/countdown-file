# countdown-file

[![npm package][npm-badge]][npm]

Writes a countdown to a text file every second.

Useful for streaming tools like [OBS Studio](https://obsproject.com/), which has a text component which watches a file for contents.

## Install

Installing globally gives you a `countdown` command:

```sh
npm install --global countdown-file
```

## Usage

```
Usage: countdown <time> <output_file> [done_text]

Arguments:
  time         number of minutes or a time in mm:ss format
  output_file  file to write the countdown into
  done_text    (optional) text to display when the countdown is complete
               defaults to displaying nothing, hiding the countdown
```

## MIT Licensed

[npm-badge]: https://img.shields.io/npm/v/countdown-file.svg
[npm]: https://www.npmjs.org/package/countdown-file
