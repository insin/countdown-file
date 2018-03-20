# countdown-file

Writes a countdown to a text file every second.

Useful for streaming tools like [OBS Studio](https://obsproject.com/), which has a text component which watches a file for contents.

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
