const header_text = "HTML Elements";

function print_children(children,list) {
    const numlist = create_olist();
    children.forEach((item)=>{
	if (item.localName !== undefined) {
	    write_elem(item,numlist);
	    proc_children(item,numlist);
	}
    });
    list.appendChild(numlist);
}

function proc_children(elem,list) {
    const children = elem.childNodes;
    if (children.length > 0)
	print_children(children,list);
}

function write_elem(elem,list) {
    const list_item = document.createElement("li");
    list_item.innerText = elem.localName;
    list.appendChild(list_item);
}

function create_olist() {
    const numlist = document.createElement("ol");
    numlist.setAttribute("start","0");
    return(numlist);
}

function proc_wrapper(elems,list_target) {
    numlist = create_olist();
    write_elem(elems[0],numlist);
    proc_children(elems[0],numlist);
    list_target.appendChild(numlist);
}

function write_header(target,header_tag="h1") {
    const header = document.createElement(header_tag);
    header.innerText = header_text;
    target.appendChild(header);
}

function start_proc() {
    const elems = document.getElementsByTagName("*");
    const list_target = document.querySelector("body");
    write_header(list_target);
    proc_wrapper(elems,list_target);
}

