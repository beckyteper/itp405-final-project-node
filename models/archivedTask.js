var bookshelf = require('./../bookshelf');

var ArchivedTask = bookshelf.Model.extend({
  tableName: 'archived_tasks'
});

module.exports = ArchivedTask;
