let car ={
    nameCar: "tayota corolla",
    make: "toyota",
    model: "corolla",
    year: 2020,
    start: function(){
        console.log("the car has started in", this.year)
    }
}
console.log(car.start())

