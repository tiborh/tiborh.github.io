function item_write(elems,i,maxnu) {
    document.write("<li>" + elems[i].localName + "</li>\n");    
}

function wrapper_write(elems,i,maxnu,parent) {
    document.write("<ul>\n");
    item_write(elems,i,maxnu);
    list_write(elems,i+1,maxnu,elems[i+1].parentNode.localName);
    document.write("</ul>\n");    
}

function list_write(elems,i,maxnu,parent) {
    if (i == maxnu) {
	return;
    }
    console.log("i: " + i);
    console.log("node name: " + elems[i].localName);
    console.log("parent name: " + elems[i].parentNode.localName);
    console.log("parent arg: " + parent);
    console.log(elems[i].childNodes);
    if (i < maxnu-1 && elems[i].childNodes.length > 1)
	console.log(elems[i].childNodes[1].localName);
    if (i < maxnu && elems[i].childNodes.length > 1 && elems[i].childNodes[1].localName == elems[i+1].localName) {
	document.write("<ul>\n");
	item_write(elems,i,maxnu);
    } else {
	item_write(elems,i,maxnu);
	if (elems[i+1].parentNode != elems[i].parentNode)
	    document.write("</ul>\n");	
    }
    list_write(elems,i+1,maxnu,elems[i+1].parentNode.localName);
}

// see also: querySelectorAll() https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
const elems = document.getElementsByTagName("*"); 
const maxnu = elems.length;
console.log(elems);
let hc = 1;
let i = 0;
document.write("<h1>HTML Elements</h1>");
wrapper_write(elems,i,maxnu,undefined);
