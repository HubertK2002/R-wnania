import {Function, Sum, Product, Division, Logaritm} from 'MathFunctions.js';
import {Trigonometric, Sinus, ASinus, Cosinus, ACosinus, Tangens, ATangens, Cotangens, ACotangens} from 'TrigonometricFunctions';

export class Parser {
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
		const parts = str.split(/(?<=^[a-zA-Z_]\w*)\(([^)]*)\)/);
		if(parts > 1) switch(parts[0]) {
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