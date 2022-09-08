console.log("Hello from Node.js");

//import from core modules
const fs = require("fs");

//method to write file to harddrive
//arguments: file name, content of file
fs.writeFileSync("hello.txt", "Hello from Node.js");

//Javascript on the Server:
//*users=>(client/browser: js, html, css)=> send request by entering url=> (server: ip+domain,Node.js: database, authentication, input validation, business logic: handle requests) => (response: css, html) => (client/browser) => users

//node.js(runtime server) is not limited to just the server: utility scripts, build tools...

//creates server and listens to server

//alternatives = python, php, ruby on rails, asp.net...

//REPL: Read(user input) Evaluate(user input) Print(output/results) Loop(wait for new input)