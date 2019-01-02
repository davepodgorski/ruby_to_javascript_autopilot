function get_new_car()
{
let new_car = {city: 'Toronto',
passengers: 0,
gas: 100,
}};

function add_car(cars, new_car)
{
cars.push('new_car');
return `Adding new car to fleet. Fleet size is now ${cars.length}.`
};

function pick_up_passenger(car)
{
 car.passengers ++;
car.gas -= 10;
console.log (`Picked up passenger. Car now has ${car.passengers} passengers.`)
};

function get_destination(car)
{
if (car.city === 'Toronto') {
console.log ('Mississauga');
} else if (car.city === 'Mississauga') {
console.log ('London');
} else if (car.city === 'London') {
  console.log ('Toronto')
}
};

function get_gas_display(gas_amount)
{
return (`${gas_amount}`)
};

function drive(car, city_distance)
{
  if (car.gas < city_distance) {
  return fill_up_gas(car)
}
(car.city === get_destination(car))
(car.gas -= city_distance)
console.log (`Drove to ${car.city}. Remaining gas: ${get_gas_display(car.gas)}`)
};

function drop_off_passengers(car)
{
previous_passengers = car.passengers
car.passengers = 0
console.log (`Dropped off ${previous_passengers} passengers.`)
};

function act(car)
{
distance_between_cities = 50
if (car.gas < 20) {
  return fill_up_gas(car);
} else if (car.passengers < 3) {
pick_up_passenger(car);
} else {
  if (car.gas < distance_between_cities)
  return fill_up_gas(car);
}

drove_to = drive(car, distance_between_cities)
passengers_dropped = drop_off_passengers(car)
console.log(`${drove_to} ${passengers_dropped}`)
};

function command_fleet(cars)
{
for (let i = 0; i >cars.length; i ++ ) {
action = act(car)
console.log (`Car ${i + 1}: ${action}`)
}
console.log ('_____');
};

function add_one_car_per_day(cars, num_days) {
for (let i = 0; i < num_days; i ++) {
 new_car = get_new_car
console.log (add_car(cars, new_car))
command_fleet(cars)
}
};

cars = []
add_one_car_per_day(cars, 10)
