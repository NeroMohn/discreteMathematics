let conjuntoA;
let conjuntoB
let groupA = new Array();
let groupB = new Array();
let groupALength;
let groupBLength;

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
    let resultado =new  Array();
    for(i=0;i<groupA.length;i++){
        for(j=0; j<groupB.length;j++){
            if(groupA[i]>groupB[j]){
                let resultadoHolder = [groupA[i],groupB[j]]
                resultado.push(resultadoHolder);
            }
        }
    }
    for(i=0;i<resultado.length;i++){
    document.getElementById("maiorQue").value +="("+resultado[i]+")";
    }
return resultado;
}

function menorQue(){
    let resultado =new  Array();
    for(i=0;i<groupA.length;i++){
        for(j=0; j<groupB.length;j++){
            if(groupA[i]<groupB[j]){
                let resultadoHolder = [groupA[i],groupB[j]]
                resultado.push(resultadoHolder);
            }
        }
    }
    for(i=0;i<resultado.length;i++){
    document.getElementById("menorQue").value +="("+resultado[i]+")";
    }
return resultado;
}

function igualA(){
    let resultado =new  Array();
    for(i=0;i<groupA.length;i++){
        for(j=0; j<groupB.length;j++){
            if(groupA[i]==groupB[j]){
                let resultadoHolder = [groupA[i],groupB[j]]
                resultado.push(resultadoHolder);
            }
        }
    }
    for(i=0;i<resultado.length;i++){
    document.getElementById("igualA").value +="("+resultado[i]+")";
    }
return resultado;
}

function quadradoDe(){
    let resultado =new  Array();
    for(i=0;i<groupA.length;i++){
        for(j=0; j<groupB.length;j++){
            if((groupA[i]*groupA[i])==groupB[j]){
                let resultadoHolder = [groupA[i],groupB[j]]
                resultado.push(resultadoHolder);
            }
        }
    }
    for(i=0;i<resultado.length;i++){
    document.getElementById("quadradoDe").value +="("+resultado[i]+")";
    }
return resultado;
}

function raizQuadradaDe(){
    let resultado =new  Array();
    for(i=0;i<groupA.length;i++){
        for(j=0; j<groupB.length;j++){
            if(Math.sqrt(groupA[i])==groupB[j]){
                let resultadoHolder = [groupA[i],groupB[j]]
                resultado.push(resultadoHolder);
            }
        }
    }
    for(i=0;i<resultado.length;i++){
    document.getElementById("raizQuadradoDe").value +="("+resultado[i]+")";
    }
return resultado;
}
