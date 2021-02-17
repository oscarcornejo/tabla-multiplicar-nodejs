const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

// console.log('Base yargs', argv.base);
// console.log(argv.listar);
// const base = argv.base;

crearArchivo(argv.base, argv.listar, argv.hasta)
  .then((resp) => console.log(`El Archivo ${colors.green(resp)} ha sido creado`))
  .catch((err) => console.log(err));
