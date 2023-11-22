/*FUNÇAO PARA PAR OU IMPAR
function parinpar(n){
    if(n% 2 == 0){
    return 'PAR!'
    } else {
    return 'IMPAR!'
    }
}


console.log(parinpar(7 ))*/

/*FUNÇAO PARA SOMA
function soma(n1, n2){
    return n1 + n2
}
console.log(soma(7))*/

function fatorial(n){
    let fat= 1
    for(let c = n; c > 1 ; c--){
     fat *= c   
    }

    return fat
}
console.log(fatorial(5))


