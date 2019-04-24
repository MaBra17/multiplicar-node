const argv = require('yargs')
                .command('listar', 'Imprime por consola la tabla.', {
                    base: {
                        demand: true,
                        alias: 'b'
                    },
                    limite: {
                        alias: 'l',
                        default: 10
                    }
                })
                .command('crear', 'Crea un archivo con la tabla ', {
                    base: {
                        demand: true,
                        alias: 'b'
                    },
                    limite: {
                        alias: 'l',
                        default: 10
                    }
                })
                .help()
                .argv;

const { crearArchivo, listarTabla } = require('./Multiplicar/multiplicar');

    let comando = argv._[0];

    switch( comando) {
        
        case 'listar':
            listarTabla(argv.base, argv.limite);
        break;

        case 'crear':
            crearArchivo(argv.base, argv.limite)
                .then(archivo => console.log('Archivo Creado!'))
                .catch(e => console.log(e));
        break;

        default:
        console.log('comando no reconocido');
        
    }

//console.log(process.argv);

// let argv2 = process.argv;

// console.log(argv);

//let parametro = argv[2];
//let base = parametro.split('=')[1];


