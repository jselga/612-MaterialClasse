// function pas1() {
//     return Promise.resolve('Primer pas');
// }
async function pas1() {
    return 'Primer pas';
}
function pas2(text) {
    return Promise.resolve(`${text} → Segon pas`);
}

function pas3(text) {
    return Promise.resolve(`${text} → Tercer pas`);
}

async function main() {
    try {
        const a = await pas1();
        console.log(a);

        const b = await pas2(a);
        console.log(b);

        const c = await pas3(b);
        console.log(c);
    } catch (error) {
        console.error('Error:', error);
    }
}
console.log(pas1() instanceof Promise);
console.log(pas2() instanceof Promise);

main();

