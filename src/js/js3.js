function Task(data) {
  this.title = ko.observable(data.title);
  this.isDone = ko.observable(data.completed);
}

function TaskListViewModel() {
  // Data
  let self = this;
  self.tasks = ko.observableArray([]);
  self.newTaskText = ko.observable();

  self.incompleteTasks = ko.computed(function() {
    return ko.utils.arrayFilter(self.tasks(), function(task) { return !task.isDone() });
  });

  // Operations
  self.addTask = function() {
    self.tasks.push(new Task({ title: this.newTaskText() }));
    self.newTaskText("");
  };

  self.removeTask = function(task) { self.tasks.remove(task) };

  // Load initial state from server, convert it to Task instances, then populate self.tasks
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let mappedTasks = data.slice(0, 10).map(function(item) { return new Task(item) });
      self.tasks(mappedTasks);
    });
}

ko.applyBindings(new TaskListViewModel());
