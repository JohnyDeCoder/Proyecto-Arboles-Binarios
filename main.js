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

    generar() {
        let temp = this.primero;

        while (temp) {
            if (temp.cifra === "*" || temp.cifra === "/") {
                console.log(`Se encontró un ${temp.cifra}`);

                temp.hIzq = temp.ant;
                console.log(`El término ${temp.ant.cifra} ahora es hijo IZQUIERDO de ${temp.cifra}`);
                temp.hDer = temp.sig;
                console.log(`El término ${temp.sig.cifra} ahora es hijo DERECHO de ${temp.cifra}`);

                if (temp.hIzq.cifra === this.primero.cifra || temp.hDer.cifra === this.primero.cifra) {
                    this.primero = temp;
                }

                if (temp.sig.sig != null) {
                    temp.sig.sig.ant = temp;
                    temp.sig = temp.sig.sig;
                }
                else {
                    temp.sig = null;
                }

                if (temp.ant.ant != null) {
                    temp.ant.ant.sig = temp;
                    temp.ant = temp.ant.ant;
                }
                else {
                    temp.ant = null;
                }

                console.log(`El hijo IZQUIERDO de ${temp.cifra} es ${temp.hIzq.cifra}`);
                console.log(`El hijo DERECHO de ${temp.cifra} es ${temp.hDer.cifra}`);
            }
            temp = temp.sig;
        }

        temp = this.primero;

        while (temp) {
            if (temp.cifra === "+" || temp.cifra === "-") {
                console.log(`Se encontró un ${temp.cifra}`);

                temp.hIzq = temp.ant;
                console.log(`El término ${temp.ant.cifra} ahora es hijo IZQUIERDO de ${temp.cifra}`);
                temp.hDer = temp.sig;
                console.log(`El término ${temp.sig.cifra} ahora es hijo DERECHO de ${temp.cifra}`);

                if (temp.hIzq.cifra === this.primero.cifra || temp.hDer.cifra === this.primero.cifra) {
                    this.primero = temp;
                }

                if (temp.sig.sig != null) {
                    temp.sig.sig.ant = temp;
                    temp.sig = temp.sig.sig;
                }
                else {
                    temp.sig = null;
                }

                if (temp.ant.ant != null) {
                    temp.ant.ant.sig = temp;
                    temp.ant = temp.ant.ant;
                }
                else {
                    temp.ant = null;
                }

                console.log(`El hijo IZQUIERDO de ${temp.cifra} es ${temp.hIzq.cifra}`);
                console.log(`El hijo DERECHO de ${temp.cifra} es ${temp.hDer.cifra}`);
            }
            temp = temp.sig;
        }

        this.raiz = this.primero;
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