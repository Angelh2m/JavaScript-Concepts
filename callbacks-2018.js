/* *
 *  Callback first example
 */

let getUsuariobyId = (id, callback) => {

    let usuario = {
        nombre: 'Angel',
        id
    }

    // Start declaring the error from the callback
    if (id == 20) {
        return callback(`usuario con id ${ id } no existe`);
    }
    //Callback default first argument error
    callback(null, usuario);
}

// The Result
// getUsuariobyId(1, (err, usuario) => {
//     if (err) {
//         return console.log(err);
//     }
//     console.log(usuario);
// });


/* *
 *  CallBack Second example
 */

let empleados = [{
    id: 1,
    nombre: 'Fernando'
}, {
    id: 2,
    nombre: 'Angel'
}, {
    id: 3,
    nombre: 'Robert'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}, {
    id: 3,
    salario: 3000
}];

let getEmpleado = (id, callback) => {

    let empladoDB = empleados.find(empleado => {
        return empleado.id == id;
    });

    if (!empladoDB) {
        callback(`no existe un empleado con el ID ${id}`)
    } else {
        callback(null, empladoDB)
    }

}

// The result
// getEmpleado(20, (err, empleado) => {
//     if (err) {
//         return console.log("Call back error ::: ", err);
//     }
//     console.log(empleado);
// });




/* *
 *  Callback third example
 */

let getSalario = (empleado, callback) => {

    let salarioDB = salarios.find(salario => salario.id == empleado.id);

    if (!salarioDB) {
        return callback(`No se encontro un salario para el usuario ${empleado.nombre} `);
    }

    callback(null, {
        nombre: empleado.nombre,
        salario: salarioDB.salario,
        id: empleado.id
    });

}

// The result
getEmpleado(3, (err, empleado) => {

    if (err) {
        return console.log("Call back error ::: ", err);
    }

    getSalario(empleado, (err, resp) => {

        if (err) {
            return console.log(err);
        }

        console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);
    });

})