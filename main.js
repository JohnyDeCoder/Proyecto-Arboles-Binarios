class Nodo {
    constructor(cifra) {
        this.cifra = cifra;
        this.sig = null;
        this.ant = null;
        this.hIzq = null;
        this.hDer = null;
    }
}

class ArbolBinario {
    constructor() {
        this.raiz = null;
        this.primero = null;
        this.ultimo = null;
    }

    separarExpresion(expresion) {
        let expresionVec = expresion.split('');

        for (let i = 0; i < expresionVec.length; i++) {
            this.agregarNodo(new Nodo(expresionVec[i]));
        }
    }

    agregarNodo(cifra) {
        if (!this.primero) {
            this.primero = cifra;
            this.ultimo = cifra;
        }
        else {
            this.ultimo.sig = cifra;
            cifra.ant = this.ultimo;
            this.ultimo = cifra;
        }
    }

    listar() {
        let lista = "", temp = this.primero;

        while (temp) {
            lista += temp.cifra + " ";
            temp = temp.sig;
        }
        return lista;
    }
}

let miArbol = new ArbolBinario();

miArbol.separarExpresion("1+2+3*4/2");
console.log(miArbol.listar());
console.log(miArbol.generar());
console.log(miArbol.listar());