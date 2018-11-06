const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

const todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('tiny'));
app.use('/api/todos', todoRoutes);

app.use(function(req, res, next) {
    let err = new Error("404 Not Found");
    err.status = 404;
    next(err);
})

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send({
        message: err.message,
        error: err
    });
})

app.listen(8000, function() {
    console.log("Server starting on port 8000.");
})
