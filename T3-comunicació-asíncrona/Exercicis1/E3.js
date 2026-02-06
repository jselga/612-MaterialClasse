function transformarText(text) {
    return new Promise((resolve, reject) => {
        if (!text || typeof text !== 'string') {
            reject('Text no vàlid');
        } else {
            resolve(text.toUpperCase());
        }
    });
}
function afegirInfo(text) {
    return new Promise(resolve => {
        resolve(`${text} - PROCESSAT`);
    });
}
// const text=true;
// const text=6;
const text = 'Hi Everybody';
transformarText(text)
    .then(resultat => afegirInfo(resultat))
    .then(final => console.log(final))
    .catch(error => console.error('Error:', error))
    .finally(() => console.log('Procés finalitzat'));
