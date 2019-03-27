let conjuntoA;
let conjuntoB
let groupA = new Array();
let groupB = new Array();
let injetora;
let sobrejetora;
let total;
let monomorfismo;
let epimorfismo;
let isomorfismo;
let funcional;

function nullFilter(value) {
	return value != null;
}

function txtInput() {
    conjuntoA = document.getElementById("textA").value;
    conjuntoB = document.getElementById("textB").value;
    setGroups();
}

function setGroups() {

    let textForUseA;
    let textForUseB;

    textForUseA = conjuntoA;
    textForUseB = conjuntoB;
    textForUseA = textForUseA.replace(/ /g, "");
    textForUseB = textForUseB.replace(/ /g, "");
    groupA = textForUseA.split(/,/);
    groupB = textForUseB.split(/,/);


    document.getElementById("inputGroupsA").value = groupA;
    document.getElementById("inputGroupsB").value = groupB;

}

function returnValueA(index) {
	return groupA[index];
}
function returnValueB(index) {
	return groupB[index];
}

function maiorQue(){
    funcional="1"
     injetora="1";
     sobrejetora="1";
     total="1";
     monomorfismo="1";
     epimorfismo="1";
     isomorfismo="1";
     resultado =new  Array();
    for(i=0;i<groupA.length;i++){
        for(j=0; j<groupB.length;j++){
            if(groupA[i]>groupB[j]){
                let resultadoHolder = [groupA[i],groupB[j]]
                resultado.push(resultadoHolder);
            }
        }
    }

 /*   let controle=0;
    for(i=0;i<groupB.length;i++){
        for(j=0;j<resultado.length;j++){
            if(groupB[i]!=resultado[j][1]){
                sobrejetora = 0;
            }
        }
    }

    for(i=0;i<groupB.length;i++){
        for(j=0;j<resultado.length;j++){
            if(groupB[i]==resultado[j][1]){
                controle++;
            }
            if(controle>1)
                injetora=0;
            controle=0;
        }
    }



    if(injetora == 1)
        document.getElementById("maiorQueClassificacao").value +="|Injetora| ";
    if(sobrejetora == 1)
        document.getElementById("maiorQueClassificacao").value +="|Sobrejetora| ";
    if(sobrejetora == 1 && injetora ==1)
        document.getElementById("maiorQueClassificacao").value +="|Total| ";
*/
        for(i=0;i<resultado.length;i++){
            document.getElementById("maiorQue").value +="("+resultado[i]+")";
            }
return resultado;
}

function menorQue(){
    funcional="1"
    injetora="";
    sobrejetora="";
    total="";
    monomorfismo="";
    epimorfismo="";
    isomorfismo="";
    let resultado =new  Array();
    for(i=0;i<groupA.length;i++){
        for(j=0; j<groupB.length;j++){
            if(groupA[i]<groupB[j]){
                let resultadoHolder = [groupA[i],groupB[j]]
                resultado.push(resultadoHolder);
            }
        }
    }
    /*let controle=0;
    for(i=0;i<groupB.length;i++){
        for(j=0;j<resultado.length;j++){
            if(groupB[i]!=resultado[j][1]){
                sobrejetora = 0;
            }
        }
    }

    for(i=0;i<groupB.length;i++){
        for(j=0;j<resultado.length;j++){
            if(groupB[i]==resultado[j][1]){
                controle++;
            }
            if(controle>1)
                injetora=0;
            controle=0;
        }
    }



    if(injetora == 1)
        document.getElementById("menorQueClassificacao").value +="|Injetora| ";
    if(sobrejetora == 1)
        document.getElementById("menorQueClassificacao").value +="|Sobrejetora| ";
    if(sobrejetora == 1 && injetora ==1)
        document.getElementById("menorQueClassificacao").value +="|Total| ";

*/
    for(i=0;i<resultado.length;i++){
    document.getElementById("menorQue").value +="("+resultado[i]+")";
    }

    
return resultado;
}

function igualA(){
    funcional="1"
    injetora="";
    sobrejetora="";
    total="";
    monomorfismo="";
    epimorfismo="";
    isomorfismo="";
    let resultado =new  Array();
    for(i=0;i<groupA.length;i++){
        for(j=0; j<groupB.length;j++){
            if(groupA[i]==groupB[j]){
                let resultadoHolder = [groupA[i],groupB[j]]
                resultado.push(resultadoHolder);
            }
        }
    }
    /*let controle=0;
    for(i=0;i<groupB.length;i++){
        for(j=0;j<resultado.length;j++){
            if(groupB[i]!=resultado[j][1]){
                sobrejetora = 0;
            }
        }
    }

    for(i=0;i<groupB.length;i++){
        for(j=0;j<resultado.length;j++){
            if(groupB[i]==resultado[j][1]){
                controle++;
            }
            if(controle>1)
                injetora=0;
            controle=0;
        }
    }



    if(injetora == 1)
        document.getElementById("igualAClassificacao").value +="|Injetora| ";
    if(sobrejetora == 1)
        document.getElementById("igualAClassificacao").value +="|Sobrejetora| ";
    if(sobrejetora == 1 && injetora ==1)
        document.getElementById("igualAClassificacao").value +="|Total| ";

*/
    for(i=0;i<resultado.length;i++){
    document.getElementById("igualA").value +="("+resultado[i]+")";
    }
return resultado;
}

function quadradoDe(){
    funcional="1"
    injetora="";
    sobrejetora="";
    total="";
    monomorfismo="";
    epimorfismo="";
    isomorfismo="";
    let resultado =new  Array();
    for(i=0;i<groupA.length;i++){
        for(j=0; j<groupB.length;j++){
            if((groupA[i]*groupA[i])==groupB[j]){
                let resultadoHolder = [groupA[i],groupB[j]]
                resultado.push(resultadoHolder);
            }
        }
    }
    /*let controle=0;
    for(i=0;i<groupB.length;i++){
        for(j=0;j<resultado.length;j++){
            if(groupB[i]!=resultado[j][1]){
                sobrejetora = 0;
            }
        }
    }

    for(i=0;i<groupB.length;i++){
        for(j=0;j<resultado.length;j++){
            if(groupB[i]==resultado[j][1]){
                controle++;
            }
            if(controle>1)
                injetora=0;
            controle=0;
        }
    }



    if(injetora == 1)
        document.getElementById("quadradoDeClassificacao").value +="|Injetora| ";
    if(sobrejetora == 1)
        document.getElementById("quadradoDeClassificacao").value +="|Sobrejetora| ";
    if(sobrejetora == 1 && injetora ==1)
        document.getElementById("quadradoDeClassificacao").value +="|Total| ";

*/
    for(i=0;i<resultado.length;i++){
    document.getElementById("quadradoDe").value +="("+resultado[i]+")";
    }
return resultado;
}

function raizQuadradaDe(){
    funcional="1"
    injetora="";
    sobrejetora="";
    total="";
    monomorfismo="";
    epimorfismo="";
    isomorfismo="";
    let resultado =new  Array();
    for(i=0;i<groupA.length;i++){
        for(j=0; j<groupB.length;j++){
            if(Math.sqrt(groupA[i])==groupB[j]){
                let resultadoHolder = [groupA[i],groupB[j]]
                resultado.push(resultadoHolder);
            }
        }
    }
   /* let controle=0;
    for(i=0;i<groupB.length;i++){
        for(j=0;j<resultado.length;j++){
            if(groupB[i]!=resultado[j][1]){
                sobrejetora = 0;
            }
        }
    }

    for(i=0;i<groupB.length;i++){
        for(j=0;j<resultado.length;j++){
            if(groupB[i]==resultado[j][1]){
                controle++;
            }
            if(controle>1)
                injetora=0;
            controle=0;
        }
    }



    if(injetora == 1)
        document.getElementById("raizQuadradaDeClassificacao").value +="|Injetora| ";
    if(sobrejetora == 1)
        document.getElementById("raizQuadradaDeClassificacao").value +="|Sobrejetora| ";
    if(sobrejetora == 1 && injetora ==1)
        document.getElementById("raizQuadradaDeClassificacao").value +="|Total| ";
*/
    for(i=0;i<resultado.length;i++){
    document.getElementById("raizQuadradoDe").value +="("+resultado[i]+")";
    }
return resultado;
}
