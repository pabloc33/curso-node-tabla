const fs = require("fs");
var colors = require("colors");

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = "";
    let consola = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${i} x ${base} = ${base * i}\n`;
      consola += `${i} ${"x".green} ${base} ${"=".green} ${base * i}\n`;
    }

    if (listar) {
      console.log("================".green);
      console.log(" Tabla del:".green, colors.blue(base));
      console.log("================".green);

      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
