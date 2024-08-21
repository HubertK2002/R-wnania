import * as Numbers from './Fractions.js';

export class Function {
	static parse(func) {
		if(func instanceof Function) return func;
		func = func.replace(/\s+/g, '').replace(/^\((.*)\)$/, (match, group1) => group1 || '');
		const sums = func.replace(/(?<!\([^)]*)-(?![^()]*\))/g, '+-').split(/(?<!\([^)]*)[+](?![^()]*\))/).filter(part => part.trim() !== "");
		if(sums.length > 1) return new Sum(sums);
		func = func.replace(/^-\(/, '-1*(');
		const factors = func.split(/(?<!\([^)]*)[*](?![^()]*\))/);
		if(factors.length > 1) return new Product(factors);
		const dividers = func.split(/(?<!\([^)]*)[/](?![^()]*\))/);
		if(dividers.length > 1) return new Division(dividers);
		const powers_elements = func.split(/(?<!\([^)]*)\^(?![^()]*\))/);
		if(powers_elements.length > 1) return new Exponentation(powers_elements);
		const parts = func.split(/(?<=^[a-zA-Z_]\w*)\(([^)]*)\)/);
		if(parts.length > 1) switch(parts[0]) {
			case 'sin': return new Sinus(parts[1]);
			case 'asin': return new Sinus(parts[1]);
			case 'cos': return new Cosinus(parts[1]);
			case 'acos': return new ACosinus(parts[1]);
			case 'tan': return new Tangens(parts[1]);
			case 'atan': return new ATangens(parts[1]);
			case 'ctan': case 'cotan': return new Cotangens(parts[1]);
			case 'actan': case 'acotan': return new ACotangens(parts[1]);
			case 'log': return new Logaritm(parts[1]);
		}
		if(func.match(/^\d+\.\d+$/)) return parseFloat(func);
		return func;
	}
}

export class Exponentation extends Function {
	constructor(powers_elements) {
		super();
		this.Basis = Function.parse(powers_elements.shift())
		if(powers_elements.length > 1) {
			this.Power = new Product(powers_elements);
		}
		else this.Power = Function.parse(powers_elements.shift());
	}
}

export class Sum extends Function{
	constructor(elements) {
		super();
		this.Addition = Array();
		elements.forEach(element => {
			this.Addition.push(Function.parse(element));
		});
	}
}

export class Product extends Function {
	constructor(elements) {
		super();
		this.Factors = Array();
		elements.forEach(element => {
			this.Factors.push(Function.parse(element));
		});
	}
}

export class Division extends Function {
	constructor(dividers) {
		super();
		let dividend = Function.parse(dividers.shift());
		let divider = Function.parse(dividers.shift());
		this.Fraction = new Fraction(dividend, divider);
		while(dividers.length > 0) {
			divider = Function.parse(dividers.shift());
			this.Fraction = new Fraction(this.Fraction, divider);
		}
	}
}

export class Fraction extends Function {
	constructor(dividend, divider) {
		super();
		this.dividend = Function.parse(dividend);
		this.divider = Function.parse(divider);
	}
}

export class Logaritm extends Function {
	constructor(func) {
		super();
		parts = func.split(/,\s*/);
		this.Expression = Function.parse(parts[0]);
		this.base = Function.parse(parts[1]);
	}
}

export class Trigonometric extends Function {
	constructor(func) {
		super();
		this.Expression = Function.parse(func);
	}
}

export class Sinus extends Trigonometric {
	constructor(func) {
		super(func);
	}
}

export class Cosinus extends Trigonometric {
	constructor(func) {
		super(func);
	}
}

export class ASinus extends Trigonometric {
	constructor(func) {
		super(func);
	}
}

export class ACosinus extends Trigonometric {
	constructor(func) {
		super(func);
	}
}

export class Tangens extends Trigonometric {
	constructor(func) {
		super(func);
	}
}

export class Cotangens extends Trigonometric {
	constructor(func) {
		super(func);
	}
}

export class ATangens extends Trigonometric {
	constructor(func) {
		super(func);
	}
}

export class ACotangens extends Trigonometric {
	constructor(func) {
		super(func);
	}
}



/*case 'sin':
	this.Function = new Sinus(this.parse(func));
	break;
case 'cos':
	break
case 'asin':
	break;
case 'acos':
	break;
case 'tan':
	break;
case 'ctan':
	break
case 'atan':
	break;
case 'actan':
	break;
default:
	throw new Error("Bad trigonometric function");
	break;*/