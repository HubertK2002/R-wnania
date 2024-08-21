import * as NodeOperations from "./NodeOperations.js";

export class Fraction extends HTMLDivElement {
	constructor() {
		super();
		this.NumeratorContainer = document.createElement("div");
		this.NumeratorContainer.style.textAlign = "center";
		this.DenominatorContainer = document.createElement("div");
		this.DenominatorContainer.style.borderTop = "1px solid #000";
		this.DenominatorContainer.style.textAlign = "center";
		this.style.width = "fit-content";
		this.style.border = "1px outset lightgray";
		this.style.padding = "3px";
	}
	connectedCallback() {
		const numerator = this.getAttribute("numerator");
		const denominator = this.getAttribute("denominator");
		
		NodeOperations.Insert(this.NumeratorContainer, numerator);
		NodeOperations.Insert(this.DenominatorContainer, denominator);
		
		this.appendChild(this.NumeratorContainer);
		this.appendChild(this.DenominatorContainer);
	}
}

export class DecimalNumber extends HTMLDivElement {
	constructor() {
		super();
		this.style.width = "fit-content";
		this.style.padding = "3px";
	}
	
	connectedCallback() {
		const number = this.getAttribute("value");
		this.innerText = number;
	}
}

customElements.define("fraction-standard", Fraction, {extends: "div"});
customElements.define("number-decimal", DecimalNumber, {extends: "div"});