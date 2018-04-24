// Async es como una promesa
let getNombre = async() => {
    // throw new Error('No existe nombre de este usuario')
    return 'Angel'
};

let saludo = async() => {

    let nombre = await getNombre();

    return `Hola ${nombre}`
}

saludo()
    .then(mensaje => {
        console.log(mensaje);
    })
    .catch(err => {
        console.log(' ==== Error ====', err);

    })


getNombre()
    .then(nombre => {
        console.log(nombre);
    })
    .catch(err => {
        console.log(' ==== Error ====', err);

    })