function transformarText(text) {
  return new Promise(resolve => {
    resolve(text.toUpperCase());
  });
}

function afegirInfo(text) {
  return new Promise(resolve => {
    resolve(`${text} - PROCESSAT`);
  });
}

transformarText('hola')
  .then(resultat => afegirInfo(resultat))
  .then(final => console.log(final));
