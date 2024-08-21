function InsertNode(Parent, Child) {
	Parent.appendChild(Child);
}

function InsertText(Parent, Child) {
	Parent.innerHTML = Child;
}

export function Insert(Parent, Child) {
	if(Child instanceof Node) InsertNode(Parent, Child);
	else InsertText(Parent, Child);
}