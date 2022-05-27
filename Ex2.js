

// function check(a, obj) {
//     for (var i = 0; i < a.length; i++) {
//         if (a[i] === obj) {
//             return true;
//         }
//     }
//     return false;
// }

// console.log(check('4', ['66']));

let add = (array) =>{
    let newOne=[];
    array.forEach((item, index) =>{
        newOne.push(item * (index + 1));

});
let newTwo =
    newOne.reduce((paramone , paramtwo) => paramone + paramtwo)/
    array.reduce(( paramone, paramtwo) => paramone + paramtwo);
    return (paramone*(paramtwo*(2(paramone)-1)));}