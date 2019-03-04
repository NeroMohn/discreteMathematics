
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

	  console.log(fileReader);


    }
   

	function setGroups(){

		let textForUse;
		let enterRef = String.fromCharCode(13);
		document.getElementById("inputGroups").value = textFromFileLoadedGlobal;
		textForUse = textFromFileLoadedGlobal;
		textForUse = textForUse.replace(" ","");
		textForUse = textForUse.replace(enterRef,"");
		//console.log(textForUse);
		let j = 0;

		for (let i=0; i<textForUse.lenght;i++){
			if(textForUse.charAt(i) == textForUse.charAt(toUpperCase())){
				groups.push(textFromFileLoaded.charAt(i));
				i+=2;
				while(textForUse.charAt(i)!="}"){
					values[j].push(textFromFileLoaded.charAt(i));
				}
			j++;	
			}
		}
	document.getElementById("inputGroups").value = groups;
	}