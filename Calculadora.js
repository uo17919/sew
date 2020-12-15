/* CalculadoraCientifica.js */
"use strict";

class CalculadoraRPN {
	constructor() {
		this.pantalla = "";
		this.pila = new Array();
	}

	digito(digito) {
		this.pantalla += digito;
		this.escribePantalla();
	}

	operador(op) {
		var op2 = parseFloat(this.pila.pop());
		var op1 = parseFloat(this.pila.pop());
		try {
			switch (op) {
				case "+":
					var res = op1 + op2;
					break;
				case "-":
					var res = op1 - op2;
					break;
				case "*":
					var res = op1 * op2;
					break;
				case "/":
					var res = op1 / op2;
					break;
			}
		} catch (err) {
			document.getElementById('pantalla').value = "Error";
			this.pantalla = "";
		}
		this.pila.push(res);
		this.escribePila();
	}

	borrar() {
		this.pantalla = this.pantalla.substring(0, this.pantalla.length - 1);
		this.escribePantalla();
	}

	botonC() {
		this.vaciarPila();
		this.pantalla = "";
		this.escribePantalla();
		
	}

	sin() {
		var op1 = parseFloat(this.pila.pop());
		var res = parseFloat(Math.sin(op1));
		this.pila.push(res);
		this.escribePila();
	}

	cos() {
		var op1 = parseFloat(this.pila.pop());
		var res = parseFloat(Math.cos(op1));
		this.pila.push(res);
		this.escribePila();
	}

	tan() {
		var op1 = parseFloat(this.pila.pop());
		var res = parseFloat(Math.tan(op1));
		this.pila.push(res);
		this.escribePila();
	}

	cuadrado() {
		var op1 = parseFloat(this.pila.pop());
		var res = parseFloat(Math.pow(op1, 2));
		this.pila.push(res);
		this.escribePila();
	}

	potenciaX() {
		var op2 = parseFloat(this.pila.pop());
		var op1 = parseFloat(this.pila.pop());
		var res = parseFloat(Math.pow(op1, op2));
		this.pila.push(res);
		this.escribePila();
	}

	ln() {
		var op1 = parseFloat(this.pila.pop());
		var res = parseFloat(Math.log(op1));
		this.pila.push(res);
		this.escribePila();
	}

	exponencial() {
		var op1 = parseFloat(this.pila.pop());
		var res = parseFloat(Math.pow(Math.E, op1));
		this.pila.push(res);
		this.escribePila();
	}

	masMenos() {
		this.pantalla = (-1) * this.pantalla;
		this.escribePantalla();
	}

	apilar() {
		this.pila.push(this.pantalla);
		this.escribePila();
		this.pantalla = "";
		document.getElementById('pantalla').value = this.pantalla;
	}

	vaciarPila() {
		for (var i = 0; i < this.pila.length; i++)
			this.pila.pop();
		this.escribePila();
	}
	
	escribePantalla() {
		document.getElementById('pantalla').value = this.pantalla;
	}

	escribePila() {
		var p = " ";
		for (var i = 0; i < this.pila.length; i++)
			p += " " + this.pila[i];
		document.getElementById('pila').value = p;
	}

}

var c = new CalculadoraRPN();
