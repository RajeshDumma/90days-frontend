
/* Convert an array of objects representing temperatures in Celsius ([{ city: "Delhi", tempC: 30 }, 
    ..]) to Fahrenheit.
 */
const cities = [
    { city: "Delhi", tempC: 30 },
    { city: "Mumbai", tempC: 32 },
    { city: "Bangalore", tempC: 25 },
    { city: "Chennai", tempC: 34 },
    { city: "Kolkata", tempC: 31 },
    { city: "Hyderabad", tempC: 29 },
    { city: "Pune", tempC: 26 },
    { city: "Ahmedabad", tempC: 33 },
    { city: "Jaipur", tempC: 28 },
    { city: "Lucknow", tempC: 27 }
];
const FahrenheitValue = cities.map(city => ({
    city:city.city,
    tempC:city.tempC,
    tempF: (city.tempC * 9/5) + 32
}))
console.log(FahrenheitValue);
