let promesa1 = user => new Promise((res, rej) => {
    res(user);
});

let promesa2 = user=> new Promise((res, rej) => {
    res(user + ', We are!');
});


promesa1('MonkeyDLuffy')
    .then(user => promesa2(user))
    .then(data => console.log(data)
    )
