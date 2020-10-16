
function start(){

	var car = {
  name: "bmw",
  model: "m5",
  horsespeed: 400,
}

  console.log(String("name:" + car.name));
  console.log(String("model:" + car.model));
  console.log(String("horsespeed:" + car.horsespeed));


  console.log(Boolean("name:" + car.name));
  console.log(Boolean("model:" + car.model));
  console.log(Boolean("horsespeed:" + car.horsespeed));

  console.log(Number(car.num));
  console.log(Number(car.model));
  console.log(Number(car.horsespeed));


  if (car.name = car.name)
  console.log("True!");
else if(car.name = car.model)
  console.log("False!");
else if (car.name = car.speed)
  console.log("False!");
else if(car.model = car.name)
  console.log("False!");
else if(car.model = car.model)
  console.log("True!");
else if (car.model = car.speed)
  console.log("False!");
else if(car.horsespeed = car.name)
  console.log("False!");
else if(car.horsespeed = car.model)
  console.log("False!");
else if (car.horsespeed = car.horsespeed)
  console.log("True");



}
