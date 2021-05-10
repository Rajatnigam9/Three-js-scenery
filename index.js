var express = require('express');
const app = require('express')();
const path = require('path');
const http = require('http').createServer(app);

app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');

});


app.get('/2', (req, res) => {
  res.sendFile(__dirname + '/interactive_two.html');

});

app.get('/3', (req, res) => {
  res.sendFile(__dirname + '/interactive_three.html');

});


app.get('/4', (req, res) => {
  res.sendFile(__dirname + '/interactive_four.html');

});

app.get('/5', (req, res) => {
  res.sendFile(__dirname + '/interactive_six.html');

});

app.get('/6', (req, res) => {
  res.sendFile(__dirname + '/interactive_six.html');

});




http.listen(3000, () => {
  console.log('listening on Port:3000');
});