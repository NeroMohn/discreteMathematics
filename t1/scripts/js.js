
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

	function setGroups(){

		let textForUse;
		
		textForUse = textFromFileLoadedGlobal;
		textForUse = textForUse.replace(/ /g,"");
		textForUse = textForUse.replace(/FIM/g,"");
		console.log(textForUse);
		let reg = /\n/;
		let regGroup = /[a-zA-Z]/;	
		textForUse = textForUse.split(reg);	
		textForUse.pop();
		console.log(textForUse);

		for(i=0; i<textForUse.length;i++){
			groups.push(textForUse[i].match(regGroup));
		}
		for(i=0; i<textForUse.length;i++){
			groups.push(textForUse[i].match(regGroup));
		}
		console.log(groups)


	document.getElementById("inputGroups").value = groups;
	}