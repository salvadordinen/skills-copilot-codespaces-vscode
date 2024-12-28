// Create web server
const express = require('express')
const app = express()
const port = 3000
// Import comments data
const comments = require('./data/comments')
// Import posts data
const posts = require('./data/posts')