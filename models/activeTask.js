var bookshelf = require('./../bookshelf');

var ActiveTask = bookshelf.Model.extend({
  tableName: 'active_tasks'
});

module.exports = ActiveTask;
