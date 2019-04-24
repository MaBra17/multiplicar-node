// Requireds
const fs = require('fs');

let base = 6;
let data = '';

for( let i = 1; i <= 10; i++ ){
    data += `${ base } * ${ i } = ${base * i}\n`;
}

fs.writeFile(`Tablas/tabla-${ base }.txt`, data, (err) => {
    
    if (err) throw err;
    
    console.log('El archivo a sido creado!');
  })
  