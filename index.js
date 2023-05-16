async function getFileContentAsText(file) {
    const response = await fetch(file);
    const fileContent = await response.text();
    return fileContent;
}

async function insertContentsFromFiles() {
    const tbl = document.querySelectorAll('[data-src]'); // get elements with the data attribute "data-src" 
    console.log(document)
    console.log(tbl.length);
    for (var i=0; i < tbl.length; i++) {
        tbl[i].innerHTML = await getFileContentAsText(tbl[i].dataset.src);
    } // loop over the elements contained in tbl
}

// dont forget to call the function to insert the files content into the elements
insertContentsFromFiles();