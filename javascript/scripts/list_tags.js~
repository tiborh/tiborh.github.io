function set_title(txt) {
    const theTitle = document.querySelector('title');
    theTitle.textContent = txt;
}

function set_hello(elem,txt,num) {
    elem.textContent = txt + num;
}

const txt = 'Hello world!';
set_title(txt);
const elems = document.getElementsByTagName("*"); // see also: querySelectorAll()
const maxnu = elems.length;
document.write("<ul>\n");
console.log(elems);
let hc = 1;
for(let i = 0; i < maxnu; ++i) {
    document.write("<li>" + elems[i].localName + "</li>\n");
    if (elems[i].localName == "h1")
	set_hello(elems[i],txt,hc++);
    //console.log(elems[i]);
}
document.write("</ul>\n");
