// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {
  this.firstName = ko.observable("Маша");
  this.lastName = ko.observable("Наг");

  this.fullName = ko.computed(function () {
    return this.lastName() + " " + this.firstName();
  }, this);
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());
