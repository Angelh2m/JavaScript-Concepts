// =================================
// |||      Promises          |||
// =================================

let promise = new Promise((resolve, reject) => {
  contador = 0;

  let intervalo = setInterval(() => {
    contador += 1;

    console.log(contador);

    if (contador === 3) {
      resolve();
      clearInterval(intervalo);
    }
  }, 1000);
});

promise.then(() => console.log("termino")).catch(() => console.log("Error"));

// =================================
// |||      Promises          |||
// =================================

//// Define the primise
const isMomHappy = true;

const willIGetNewPhone = new Promise((resolve, reject) => {
  if (isMomHappy) {
    const phone = {
      brand: "Samsung",
      color: "black"
    };
    resolve(phone);
  } else {
    const reason = new Error("mom is not happy");
    reject(reason);
  }
});

const showOff = function(phone) {
  const message =
    "Hey friend, I have a new " + phone.color + " " + phone.brand + " phone";
  return Promise.resolve(message);
};

// =================================
// |||      call our promise       |||
// =================================

const askMom = function() {
  willIGetNewPhone
    .then(showOff)
    .then(fulfilled => console.log(fulfilled)) // fat arrow
    .catch(error => console.log(error.message)); // fat arrow
};

askMom();
