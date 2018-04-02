
    let obs = new Observable(observer => {

      let contador = 1;

      let intervalo = setInterval(() => {

        contador += 1;
        // Notificar cada vez que el contador incremente
        observer.next(contador);

        if (contador === 3) {
          clearInterval(intervalo);
          observer.complete();
        }

      }, 1000);
    });

    obs.subscribe(
      numero => console.log('Subs', numero),
      error => console.error('Error en el obs', error),
      () => console.log('El observador termno!')
    );
