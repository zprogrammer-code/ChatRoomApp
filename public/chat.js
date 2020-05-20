// make connection

const socket = io.connect("http://localhost:4000")

const message = document.getElementById('Message')
const handle = document.getElementById('Handle')
const button = document.getElementById('send')
const output = document.getElementById('output')