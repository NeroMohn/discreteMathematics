
let fs = require = ("fs");
let textFromFileLoadedGlobal;
let groups = [];
let elements = [];
let values = [];

function txtInput(){
let file = document.getElementById("file").files[0];

	  const fileReader = new FileReader();

	  fileReader.onload = function(fileLoadedEvent){
		  let textFromFileLoaded = fileLoadedEvent.target.result; //The event.result property contains the last/previous value returned by an event handler triggered by the specified event. From w3schools

		  textFromFileLoadedGlobal = textFromFileLoaded;

		  document.getElementById("inputTextToSave").value = textFromFileLoadedGlobal;
	  }

	  fileReader.readAsText(file, "UTF-8");

    }

	function confereGrupo(caractere){
		switch (caractere){
			case "a" || "b" || "c"|| "d"|| "e"|| "f"||
			 "g"|| "h"|| "i"|| "j"|| "k"|| "l"|| "m"||
			  "n"|| "o"|| "p"|| "q"|| "r"|| "s"|| "t"||
			   "u"|| "v"|| "w"|| "x"|| "y"|| "z":
			return true;
			default:
			return false;
		}
		
	}

	function setGroups(){

		let textForUse;
		
		textForUse = textFromFileLoadedGlobal;
		textForUse = textForUse.replace(/ /g,"");
		textForUse = textForUse.replace( /\n/g,"");
		let count1 = 0;
		let end = textForUse.toString();
		let j = 0;
		count1 = end.length;
		i=0;
		while(i < count1){
			if(textForUse.charAt(i) == textForUse.charAt(i).toUpperCase() && confereGrupo(textForUse.charAt(i))){
				console.log(textForUse.charAt(i));
				groups.push(textForUse.charAt(i));
				let subArray = new Array();
				while(textForUse.charAt(i)!="}"){
					if(textForUse.charAt(i)!="," && textForUse.charAt(i)!="{"){
						subArray.push(textForUse.charAt(i));
						console.log("oi "+i);
					}
					i++;
				}
				Array.prototype.splice(j, subArray, values);
				j++;
				i++;
			}
			i++;
			//console.log(groups);
		}

	document.getElementById("inputGroups").value = groups;
	}