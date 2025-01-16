import chalk from "chalk";
const names = ["yahya", "teddy", "melissa", "oceane"];

function tab(array) {
  let yahia = [];
  let teddy = [];
  let melissa = [];
  let oceane = [];

  yahia = console.log(chalk.blue(array[0]));
  teddy = console.log(chalk.red(array[1]));
  melissa = console.log(chalk.green(array[2]));
  oceane = console.log(chalk.yellow(array[3]));

  return yahia, teddy, melissa, oceane;
}

// console.log(tab(names));
tab(names)
