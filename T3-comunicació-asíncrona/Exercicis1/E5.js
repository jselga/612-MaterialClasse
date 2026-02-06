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
async function executar() {
    const text=6;
    // const text = 'Hi Everybody';
    try {
        const r1 = await transformarText(text);
        const r2 = await afegirInfo(r1);
        console.log(r2);
    } catch (error) {
        console.error(error);
    }
}

executar();
