import * as Fractions from "./Fractions";

class SumEquation extends HTMLDivElement {
	constructor() {
		super();
	}
	connectedCallback() {
		const equation = this.getAttribute("equation");
		let parts = equation.match(/[+-]?\s*\d+\s*[a-zA-Z]?/g);
		this.parts.map(part => part.replace(/\s+/g, ''));
	}
}

class Equation extends HTMLDivElement {
	constructor() {
		super();
	}
	connectedCallback() {
		
	}
}

function separate_variables_and_numbers(elements) {
	let numbers = [];
	let variables = [];
	
		elements.forEach(element => {
		if (/[\p{L}]/u.test(element)) {
			variables.push(element);
		} else {
			numbers.push(element);
		}
		});
	
	return { numbers, variables };
}