require('dotenv').config();
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var ActiveTask = require('./models/activeTask');
var ArchivedTask = require('./models/archivedTask');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//return list of all active tasks
app.get('/all-active-tasks', function(request, response) {
  ActiveTask.fetchAll().then(function(activeTasks) {
    response.json(activeTasks);
  });
});

//return a single active task
app.get('/single-active-task/:id', function(request, response) {
  ActiveTask.where('id', request.params.id)
  .fetch({ require: true })
  .then(function(activeTask) {
    response.json(activeTask)
  }, function() {
    response.json({
      error: {
        message: 'Active task not found'
      }
    });
  });
});

//create a new active task
app.post('/all-active-tasks', function(request, response) {
  var activeTask = new ActiveTask({
    title: request.body.title,
    body: request.body.body,
    due_date: request.body.due_date,
    user_id: request.body.user_id
  });

  activeTask.save().then(function() {
    response.json(activeTask);
  });
});


app.listen(8000);
