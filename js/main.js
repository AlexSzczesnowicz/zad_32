let num1 = 2;
let num2 = 5;
function sep(i,j){
    let k;
    if (i>j){
        k = i;
    } else {
        k = j;
    }
    return k;
}
console.log(sep(num1,num2));