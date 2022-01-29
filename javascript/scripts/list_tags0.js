function elem_info(elems,i) {
    console.log("i: " + i);
    console.log("\tnode name: " + elems[i].localName);
    console.log("\tparent name: " + elems[i].parentNode.localName);
    //console.log("\tparent arg: " + parent);
}

function children_list(children,len) {
    document.write("<ol start=\"0\">\n");
    for(let i = 0; i < len; ++i) {
	if (children[i].localName !== undefined)
	    document.write("<li>" + children[i].localName + "</li>");
    }
    document.write("</ol>\n");
}

function children_write(elems,i) {
    const children = elems[i].childNodes;
    const len = children.length;
    document.write("<li>Children length: " + len + "</li>");
    if (len > 0)
	children_list(children,len);
}

function parent_write(elems,i) {
    document.write("<ul>");
    document.write("<li>Parent: " + elems[i].parentNode.localName + "</li>");
    children_write(elems,i);
    document.write("</ul>");
}

function elem_write(elems,i) {
    document.write("<li>" + elems[i].localName + "</li>\n");
    parent_write(elems,i);
}

const elems = document.getElementsByTagName("*"); 
const maxnu = elems.length;

document.write("<h1>HTML Elements</h1>");

document.write("<ol start=\"0\">\n");
for(let i = 0; i < maxnu; ++i) {
    elem_info(elems,i);
    elem_write(elems,i);
}
document.write("</ol>\n");
