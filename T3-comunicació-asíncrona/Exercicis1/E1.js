const promesa = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Promesa resolta després d’1 segon');
  }, 1000);
});

promesa.then(resultat => {
  console.log(resultat);
});
