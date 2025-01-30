const addition = (myCode, currentLocation) => {
  myCode[myCode[currentLocation + 3]] =
    myCode[myCode[currentLocation + 1]] + myCode[myCode[currentLocation + 2]];

  return currentLocation + 4;
};

const multiplication = (myCode, currentLocation) => {
  myCode[myCode[currentLocation + 3]] =
    myCode[myCode[currentLocation + 1]] * myCode[myCode[currentLocation + 2]];
  return currentLocation + 4;
};

const runProgram = function (myCode) {
  const allInstructions = { 1: addition, 2: multiplication };

  let currentInstruction = myCode[0];
  let currentLocation = 0;
  while (currentInstruction !== 99) {
    currentLocation = allInstructions[currentInstruction](
      myCode,
      currentLocation
    );

    currentInstruction = myCode[currentLocation];
  }
  return myCode;
};

const nounVerbCombinations = function (code) {
  for (let noun = 1; noun <= 99; noun++) {
    for (let verb = 1; verb <= 99; verb++) {
      const myCode = [...code];
      myCode[1] = noun;
      myCode[2] = verb;
      if (runProgram([...myCode])[0] === 19690720) {
        return { noun, verb };
      }
    }
  }
};

const main = () => {
  const code = Deno.readTextFileSync("./1202ProgramAlarmData.txt")
    .split(",")
    .map(Number);
  const mycode = [...code];
  console.log(runProgram(mycode));
  console.log(nounVerbCombinations(code));
};

main();
