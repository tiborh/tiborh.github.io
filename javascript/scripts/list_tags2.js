const doNotTag = "_doNotProcess_";

function print_children(children,len) {
    document.write("<ol start=\"0\">\n");
    for(let i = 0; i < len; ++i) {
	if (children[i].localName !== undefined) {
	    document.write("<li>" + children[i].localName + "</li>");
	    if (children[i].id == doNotTag) // to avoid infinite loop
		console.log("not processed");
	    else
		proc_children(children[i]);
	}
    }
    document.write("</ol>\n");
}

function proc_children(elem) {
    const children = elem.childNodes;
    const len = children.length;
    if (len > 0)
	print_children(children,len);
}

function write_elem(elem) {
    document.write("<li>" + elem.localName + "</li>\n");
}

function proc_wrapper(elems) {
    document.write("<ol start=\"0\" id=\"" + doNotTag + "\">\n"); // to avoid infinite loop
    write_elem(elems[0]);
    proc_children(elems[0]);
    document.write("</ol>\n");
}

function start_proc() {
    const elems = document.getElementsByTagName("*"); 
    //const maxnu = elems.length;
    document.write("<h1>HTML Elements</h1>");
    proc_wrapper(elems);
}

start_proc();
