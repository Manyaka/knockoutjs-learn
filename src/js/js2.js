// Class to represent a row in the seat reservations grid
function SeatReservation(name, initialMeal) {
  let self = this;
  self.name = name;
  self.meal = ko.observable(initialMeal);

  self.formattedPrice = ko.computed(function () {
    let price = self.meal().price;
    return price ? price.toFixed(2) + "₽" : "Бесплатно";
  });
}

// Overall viewmodel for this screen, along with initial state
function ReservationsViewModel() {
  let self = this;

  // Non-editable catalog data - would come from the server
  self.availableMeals = [
    {mealName: "Стандартное (бутерброд)", price: 0},
    {mealName: "Премиум (лобстер)", price: 34.95},
    {mealName: "Ультимейт (целая зебра)", price: 290}
  ];

  // Editable data
  self.seats = ko.observableArray([
    new SeatReservation("Маша", self.availableMeals[1]),
    new SeatReservation("Таня", self.availableMeals[2])
  ]);

  self.totalSurcharge = ko.computed(function () {
    let total = 0;

    for (let i = 0; i < self.seats().length; i++) {
      total += self.seats()[i].meal().price;
    }

    return total;
  });

  // Operations
  self.addSeat = function () {
    self.seats.push(new SeatReservation("", self.availableMeals[0]));
  }
  self.removeSeat = function (seat) {
    self.seats.remove(seat);
  }
}

ko.applyBindings(new ReservationsViewModel());
