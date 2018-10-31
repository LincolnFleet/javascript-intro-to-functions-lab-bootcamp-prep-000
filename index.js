var string = "Hi."

function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  string.toUpperCase()
  console.log(string)
}

function logWhisper(string) {
  string.toLowerCase()
  console.log(string)
}

function sayHiToGrandma(string) {
  if  '${string}' === string.toLowerCase()
  console.log("I can't hear you!")
  elseif '${string}' === string.toUpperCase()
  console.log("YES INDEED!")
  else console.log("I love you, too!")
}
