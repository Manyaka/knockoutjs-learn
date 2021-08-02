// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {
  this.firstName = ko.observable("Маша");
  this.lastName = ko.observable("Наг");

  this.fullName = ko.computed(function () {
    return this.lastName() + " " + this.firstName();
  }, this);

  this.capitalizeLastName = function () {
    let currentVal = this.lastName();        // Read the current value
    this.lastName(currentVal.toUpperCase()); // Write back a modified value
  };
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());
