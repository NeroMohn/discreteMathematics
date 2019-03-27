let conjuntoA;
let conjuntoB;
let conjuntoC;
let groupA = new Array();
let groupB = new Array();
let groupC = new Array();


function nullFilter(value) {
    return value != null;
}

function txtInput() {
    conjuntoA = document.getElementById("textA").value;
    conjuntoB = document.getElementById("textB").value;
    conjuntoC = document.getElementById("textC").value;
    setGroups();
}

function setGroups() {

    let textForUseA;
    let textForUseB;
    let textForUseC;
    textForUseA = conjuntoA;
    textForUseB = conjuntoB;
    textForUseC = conjuntoC;
    textForUseA = textForUseA.replace(/ /g, "");
    textForUseB = textForUseB.replace(/ /g, "");
    textForUseC = textForUseC.replace(/ /g, "");
    groupA = textForUseA.split(/,/);
    groupB = textForUseB.split(/,/);
    groupC = textForUseC.split(/,/);


    document.getElementById("inputGroupsA").value = groupA;
    document.getElementById("inputGroupsB").value = groupB;
    document.getElementById("inputGroupsC").value = groupC;

}

function maiorQue() {

    let resultado = new Array();
    let resultado2 = new Array();
    let resultado3 = new Array();
    for (i = 0; i < groupA.length; i++) {
        for (j = 0; j < groupB.length; j++) {
            if (groupA[i] > groupB[j]) {
                let resultadoHolder = [groupA[i], groupB[j]];
                resultado.push(resultadoHolder);
                for (k = 0; k < groupC.length; k++) {
                    if (groupB[j] > groupC[k]) {
                        let resultadoHolder = [groupB[j], groupC[k]];
                        resultado2.push(resultadoHolder);
                        let resultadoHolder2 = [groupA[i], groupC[k]];
                        resultado3.push(resultadoHolder2);
                    }
                }
            }
        }
    }
    console.log(resultado);
    console.log(resultado2);

    for (i = 0; i < resultado.length; i++) {
        document.getElementById("maiorQue").value += "(" + resultado[i] + ")";
    }
    for (i = 0; i < resultado2.length; i++) {
        document.getElementById("maiorQue2").value += "(" + resultado2[i] + ")";
    }
    for (i = 0; i < resultado2.length; i++) {
        document.getElementById("maiorQueSor").value += "(" + resultado3[i] + ")";
    }

}

function menorQue() {

    let resultado = new Array();
    let resultado2 = new Array();
    let resultado3 = new Array();
    for (i = 0; i < groupA.length; i++) {
        for (j = 0; j < groupB.length; j++) {
            if (groupA[i] < groupB[j]) {
                let resultadoHolder = [groupA[i], groupB[j]]
                resultado.push(resultadoHolder);
                for (k = 0; k < groupC.length; k++) {
                    if (groupB[j] < groupC[k]) {
                        let resultadoHolder2 = [groupB[j], groupC[k]];
                        resultado2.push(resultadoHolder2);
                        let resultadoHolder3 = [groupA[i], groupC[k]];
                        resultado3.push(resultadoHolder3);
                    }
                }
            }
        }

        for (i = 0; i < resultado.length; i++) {
            document.getElementById("menorQue").value += "(" + resultado[i] + ")";
        }
        for (i = 0; i < resultado2.length; i++) {
            document.getElementById("menorQue2").value += "(" + resultado2[i] + ")";
        }
        for (i = 0; i < resultado2.length; i++) {
            document.getElementById("menorQueSor").value += "(" + resultado3[i] + ")";
        }
    }
}

function igualA() {

    let resultado = new Array();
    let resultado2 = new Array();
    let resultado3 = new Array();
    for (i = 0; i < groupA.length; i++) {
        for (j = 0; j < groupB.length; j++) {
            if (groupA[i] == groupB[j]) {
                let resultadoHolder = [groupA[i], groupB[j]]
                resultado.push(resultadoHolder);
                for (k = 0; k < groupC.length; k++) {
                    if (groupB[j] == groupC[k]) {
                        let resultadoHolder = [groupB[j], groupC[k]];
                        resultado2.push(resultadoHolder);
                        let resultadoHolder2 = [groupA[i], groupC[k]];
                        resultado3.push(resultadoHolder2);
                    }
                }
            }
        }
    }

    for (i = 0; i < resultado.length; i++) {
        document.getElementById("igualA").value += "(" + resultado[i] + ")";
    }
    for (i = 0; i < resultado2.length; i++) {
        document.getElementById("igualA2").value += "(" + resultado2[i] + ")";
    }
    for (i = 0; i < resultado2.length; i++) {
        document.getElementById("igualASor").value += "(" + resultado3[i] + ")";
    }
}

function quadradoDe() {

    let resultado = new Array();
    let resultado2 = new Array();
    let resultado3 = new Array();
    for (i = 0; i < groupA.length; i++) {
        for (j = 0; j < groupB.length; j++) {
            if ((groupA[i] * groupA[i]) == groupB[j]) {
                let resultadoHolder = [groupA[i], groupB[j]]
                resultado.push(resultadoHolder);
                for (k = 0; k < groupC.length; k++) {
                    if (groupB[j] * groupB[j] == groupC[k]) {
                        let resultadoHolder = [groupB[j], groupC[k]];
                        resultado2.push(resultadoHolder);
                        let resultadoHolder2 = [groupA[i], groupC[k]];
                        resultado3.push(resultadoHolder2);
                    }
                }
            }
        }
    }

    for (i = 0; i < resultado.length; i++) {
        document.getElementById("quadradoDe").value += "(" + resultado[i] + ")";
    }
    for (i = 0; i < resultado2.length; i++) {
        document.getElementById("quadradoDe2").value += "(" + resultado2[i] + ")";
    }
    for (i = 0; i < resultado2.length; i++) {
        document.getElementById("quadradoDeSor").value += "(" + resultado3[i] + ")";
    }
}

function raizQuadradaDe() {

    let resultado = new Array();
    let resultado2 = new Array();
    let resultado3 = new Array();
    for (i = 0; i < groupA.length; i++) {
        for (j = 0; j < groupB.length; j++) {
            if (Math.sqrt(groupA[i]) == groupB[j]) {
                let resultadoHolder = [groupA[i], groupB[j]]
                resultado.push(resultadoHolder);
                for (k = 0; k < groupC.length; k++) {
                    if (Math.sqrt(groupB[j]) == groupC[k]) {
                        let resultadoHolder = [groupB[j], groupC[k]];
                        resultado2.push(resultadoHolder);
                        let resultadoHolder2 = [groupA[i], groupC[k]];
                        resultado3.push(resultadoHolder2);
                    }
                }
            }
        }
    }

    for (i = 0; i < resultado.length; i++) {
        document.getElementById("raizQuadradoDe").value += "(" + resultado[i] + ")";
    }
    for (i = 0; i < resultado2.length; i++) {
        document.getElementById("raizQuadradoDe2").value += "(" + resultado2[i] + ")";
    }
    for (i = 0; i < resultado2.length; i++) {
        document.getElementById("raizQuadradaDeSor").value += "(" + resultado3[i] + ")";
    }
}