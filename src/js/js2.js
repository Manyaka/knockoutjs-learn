// Class to represent a row in the seat reservations grid
function SeatReservation(name, initialMeal) {
  let self = this;
  self.name = name;
  self.meal = ko.observable(initialMeal);
}

// Overall viewmodel for this screen, along with initial state
function ReservationsViewModel() {
  let self = this;

  // Non-editable catalog data - would come from the server
  self.availableMeals = [
    { mealName: "Стандартное (бутерброд)", price: 0 },
    { mealName: "Премиум (лобстер)", price: 34.95 },
    { mealName: "Ультимейт (целая зебра)", price: 290 }
  ];

  // Editable data
  self.seats = ko.observableArray([
    new SeatReservation("Маша", self.availableMeals[0]),
    new SeatReservation("Таня", self.availableMeals[0])
  ]);
}

ko.applyBindings(new ReservationsViewModel());
