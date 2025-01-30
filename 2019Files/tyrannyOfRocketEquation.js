const fuelPart1 = function (data) {
  return data
    .map((element) => Math.floor(element / 3) - 2)
    .reduce((sum, fuel) => sum + fuel, 0);
};

const getFuelData = function (fuel) {
  let sum = 0;
  let RemainingFuel = fuel;
  while (RemainingFuel > 0) {
    RemainingFuel = Math.floor(RemainingFuel / 3) - 2;

    sum += RemainingFuel;
  }
  return sum;
};

const fuelPart2 = function (data) {
  return data.map(getFuelData).reduce((sum, fuel) => sum + fuel, 0);
};

const main = () => {
  const data = Deno.readTextFileSync("./tyrannyOfRocketEquationData.txt").split(
    "\n"
  );
  console.log(fuelPart1(data));
  console.log(fuelPart2(data));
};

main();
