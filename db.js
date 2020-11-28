//11/27 updated
const mongoose = require('mongoose');
const db = mongoose.connection;
const Schema = mongoose.Schema;
mongoose.connect('mongodb://3.35.94.99:27017/idinfo');
db.on('error', function(){
  console.log('Connection Failed!');
});
db.once('open', function(){
  console.log('Connected');
});

var userSchema = mongoose.Schema({
    userid: 'string',
    userpw: 'string'
});

var bucketSchema = mongoose.Schema({
    id: 'string',
    content: 'string'
});

var todoSchema = mongoose.Schema({
    id: 'string',
    content: 'string',
    semester: 'number'
});

var User = mongoose.model('User', userSchema);
var Bucket = mongoose.model('Bucket', bucketSchema);
var Todo = mongoose.model('Todo', todoSchema);
/*
var eun1 = new User({
  userid : 'eun1',
  userpw: 'aaa'
});
var eun2 = new User({
  userid : 'eun2',
  userpw: 'bbb'
});
*/