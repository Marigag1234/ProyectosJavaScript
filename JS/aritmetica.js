function verificar () {
    let valor1= document. getElementById("numero"). value;
    let valor2= document. getElementById("numerodos"). value;
    let verificar= document. getElementById("verificar");

   let resultadosuma= parseFloat(valor1)+parseFloat(valor2);

    console.log(numero);

    if(valor1==" " ||  valor2==" "){
        alert("debes escribir algun numero")
    }
    
    else{
        resultado.innerHTML="la suma es: " + resultadosuma;
    }

}