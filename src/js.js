// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {
  this.firstName = "Маша";
  this.lastName = "Наг";
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());
