const  miPromesa = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const exito = true;
        if(exito){
            resolve( console.log("Operacion se genero") );
        }else{
            reject("Error en la operacion");
        }
    },1000);

});