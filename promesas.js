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

/* *
 *  First promise
 */

let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {

        let empleadoDB = empleados.find(empleado => {
            return empleado.id == id;
        });

        if (!empleadoDB) {
            reject(`no existe un empleado con el ID ${id}`)
        } else {
            resolve(empleadoDB);
        }
    });
}


/* *
 *  Second comment
 */

let getSalario = (empleado) => {

    return new Promise((resolve, reject) => {

        let salarioDB = salarios.find(salario => {
            return salario.id == empleado.id;
        });

        if (!salarioDB) {
            reject(`no existe un empleado con el ID ${empleado.nombre}`)
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }
    });
}

getEmpleado(3).then(empleado => {
    console.log(`Empleado de base de datos`, empleado);

    getSalario(empleado).then(resp => {
        console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);
    });

}, (err) => {
    console.log(err);
});


getEmpleado(3).then(empleado => {
    console.log(`Empleado de base de datos`, empleado);

    getSalario(empleado).then(resp => {
        console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);
    });

}, (err) => {
    console.log(err);
});

/* *
 *  Promesas en cadena
 */

getEmpleado(10).then(empleado => {
        return getSalario(empleado)
    })
    .then(resp => {
        console.log(`** El salario de ${resp.nombre } es de ${resp.salario}`);
    })
    .catch(err => {
        console.log(err);
    })