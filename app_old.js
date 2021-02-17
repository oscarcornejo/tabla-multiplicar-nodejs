const { crearArchivo } = require('./helpers/multiplicar');

console.clear();

// Argumentos que vienen desde la consola
console.log(process.argv);
const [, , arg3 = 'base=1'] = process.argv;

const [baseName, baseNum = 1] = arg3.split('=');

console.log(baseName);
console.log(parseInt(baseNum));

const base = baseNum;

crearArchivo(base)
  .then((resp) => console.log(resp, 'Creado!'))
  .catch((err) => console.log(err));
