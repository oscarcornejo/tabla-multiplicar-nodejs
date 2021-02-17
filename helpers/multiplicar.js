const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 1, listar = false, hasta = 10) => {
  try {
    let salida = '';
    let consola = '';

    for (let index = 1; index <= hasta; index++) {
      const element = base * index;
      salida += `${base} x ${index} = ${element}\n`;
      consola += `${base} ${'x'.green} ${index} ${'='.green} ${colors.blue(element)}\n`;
    }

    if (listar) {
      console.log('==================='.green);
      console.log(` Tabla del: ${colors.blue(base)}`.green);
      console.log('==================='.green);

      console.log(consola);
    }

    // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    //   if (err) throw err;
    //   console.log(`Archivo tabla-${base}.txt creado!!`);
    // });
    // console.log(salida);

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
