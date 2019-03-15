
// ================================================ Slide 2 =======================================

/*
const http = require('http');
const fs = require('fs');
const url = require('url')


function rf(path) {
// read file, reject if err, resolve data otherwise
    return new Promise((resolve, reject)=>{
        fs.readFile(path, {encoding:"utf-8"},(err, data)=>{
            err ? reject(err) : resolve(data)
        })
    })
}

async function readFile(path) {
    var s = await rf(path)
    return s
}

http.createServer(function(req, res){
    if (url.parse(req.url).pathname == '/') {
        console.log('on home screen')
        res.writeHead(200, {"Content-Type":"text/plain"})
        readFile('./demo.js').then((value)=>{
            res.end(value)
        })
    }else{
        console.log("Woah, why are you here?")
        res.writeHead(404, {"Content-Type":"application/msword"})
        res.end(url.parse(req.url).pathname)
        return
    }
}).listen(5000)
console.log(`Server listening on http://localhost:5000/`)
*/

// ==================================================================================================

// ============================================= App On QAF =========================================

// Code courtesy of ayoisaiah: Check out on GitHub: https://github.com/ayoisaiah/

// the require statements are the same as import in Python
const express = require('express')
const people = require('./people.json')
const app = express()

// sets the app to use PUG files, another of using HTML files
app.set('view engine', 'pug')

// uses the static folder called '/public'
app.use(express.static(__dirname + '/public'))

// runs server on address and port
const server = app.listen(5000, "127.0.0.1", ()=>{
    console.log(`Express server running -> http://${server.address().address}:${server.address().port}/`)
})

// home route, renders template inside of 'views' folder
app.get('/', (req, res)=>{
    res.render('index', {
        header : "My First Node.js App",
        people : people.profiles
    })
})

// displays the individual profiles of the people listed in people.json
app.get('/profile', (req, res)=>{
    var person = people.profiles.find(p => p.id == req.query.id)
    res.render('profile', {
        header : `About ${person.firstname} ${person.lastname}`,
        person,
    })
})

// ==================================================================================================

// ============================================= Callbacks ==========================================
/*
// Waits 2 seconds (2000 ms) and then prints 'done'
// in console.
var waits2Seconds = function() {
    setTimeout(function() {
        console.log('done')
    }, 2000)
}

// Does the function and prints out the string.
// In what order do you think it happens?
var something = (string, callback)=>{
    callback()
    console.log(string)
}

something("Hello world", waits2Seconds )
*/
// ==================================================================================================

// ============================================= Callback Hell ======================================
/*

// Mini Callback hell. Nasty ones can easily have chains of up to 30
// or 40 callbacks
var hell = function one() {
    setTimeout(function() {
        console.log('1. First thing setting up second thing');
        setTimeout(function() {
            console.log('2. Second thing setting up third thing');
            setTimeout(function() {
                console.log('3. Third thing setting up fourth thing');
                setTimeout(function() {
                    console.log('4. Fourth thing');
                }, 2000);
            }, 2000);
        }, 2000);
    }, 2000);
};

// very true
hell()
*/

// ==================================================================================================

// ====================================== Promises & Async===========================================
/*

const fs = require('fs')
function rf(string) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("done")
        }, 2000)
    })
}

async function waitToFinishAsync(string) {
    var s = await rf(string)
    console.log(s)
}

function waitToFinish(string) {
    rf(string).then((value) => {
        console.log(value)
    })
}
waitToFinish('./demo.js')
waitToFinishAsync('./demo.js')

*/
// ==================================================================================================
