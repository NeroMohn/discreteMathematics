
let fs = require = ("fs");

function txtInput(){
let file = document.getElementById("file").files[0];

let groups = [];
let elements = [];
let values = [];


	  const fileReader = new FileReader();

	  fileReader.onload = function(fileLoadedEvent){
		  let textFromFileLoaded = fileLoadedEvent.target.result; //The event.result property contains the last/previous value returned by an event handler triggered by the specified event. From w3schools
		  document.getElementById("inputTextToSave").value = textFromFileLoaded;
	  }

	  fileReader.readAsText(file, "UTF-8");

	  console.log(fileReader);
    }
   
	/*
	function savefile(){
		var content = document.getElementById("inputTextToSave").value;
		uriContent = "data:application/octet-stream," + encodeURIComponent(content);
		document.getElementById("dlink").innerHTML = "<a href=" + uriContent + " download=\"savedfile.txt\">Here is the download link</a>";
		}
	*/	

	function setGroups(textFromFileLoaded){
		let textForUse;
		let enterRef = String.fromCharCode(13);
		textForUse = textFromFileLoaded.replace(" ","");
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