
function formatDoc(cmd, value=null) {
	if(value) {
		document.execCommand(cmd, false, value);
	} else {
		document.execCommand(cmd);
	}
}

/*FUNCIÓN PARA AGREGAR LINK*/
function addLink() {
	const url = prompt('Insert url');
	formatDoc('createLink', url);
}

/*FUNCIÓN PARA GURDAR COMO TXT*/
function saveTextAsFile() {
    const textToSave = document.getElementById('content').innerText;
    const textToSaveAsBlob = new Blob([textToSave], { type: 'text/plain' });
    const textToSaveAsURL = URL.createObjectURL(textToSaveAsBlob);
    const fileName = document.getElementById('filename').value + '.txt';

    const downloadLink = document.createElement('a');
    downloadLink.download = fileName;
    downloadLink.innerHTML = 'Download File';
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);

    downloadLink.click();
}

function destroyClickedElement(event) {
    document.body.removeChild(event.target);
}

/*FUNCIÓN PARA GUARDAR PDF*/
function saveTextAsPDF() {
    const doc = new jsPDF();
    const textToSave = document.getElementById('content').innerText;
    
    doc.text(textToSave, 10, 10);
    doc.save(document.getElementById('filename').value + '.pdf');
}

/*FUNCIÓN CONDICIÓN SEGÚN SELECCIÓN*/
function handleFileSave(fileType) {
    if (fileType === 'txt') {
        saveTextAsFile();
    } else if (fileType === 'pdf') {
        saveTextAsPDF();
    }
}

/*OPEN LINK IN NEW TAB*/

function openLinkInNewTab() {
    var select = document.getElementById("mySelect");
    var url = select.value;
    if (url) {
      window.open(url, '_blank');
    }
  }