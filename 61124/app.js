

const operacion = (numero1, numero2, callback)=>{
    return setTimeout(()=>{
        callback (numero1,numero2);
    },800);
}

operacion (1,3,(a,b)=>{
    console.log(a+b);
});