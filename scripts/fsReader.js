
let fs = require = ("fs");

function txtInput(){        //.txt file reader
   // let text = fs.readFileSync(textDir).toString*('utf-8');


let file = document.getElementById("file").files[0];

	  const fileReader = new FileReader();

	  fileReader.onload = function(fileLoadedEvent){
		  let textFromFileLoaded = fileLoadedEvent.target.result; //The event.result property contains the last/previous value returned by an event handler triggered by the specified event. From w3schools
		  document.getElementById("inputTextToSave").value = textFromFileLoaded;
	  };

	  fileReader.readAsText(file, "UTF-8");

	  console.log(fileReader);
    }
    
	function savefile(){
		var content = document.getElementById("inputTextToSave").value;
		uriContent = "data:application/octet-stream," + encodeURIComponent(content);
		document.getElementById("dlink").innerHTML = "<a href=" + uriContent + " download=\"savedfile.txt\">Here is the download link</a>";
    }