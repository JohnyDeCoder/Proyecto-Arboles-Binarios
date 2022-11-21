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
        let expresionVec = expresion.split(''); // Separación de la expresión por espacios vacíos

        for (let i = 0; i < expresionVec.length; i++) {
            this._agregarNodo(new Nodo(expresionVec[i]));
        }
    }

    _agregarNodo(cifra) {
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

                console.log("-> " + miArbol.listar());
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

                console.log("-> " + miArbol.listar());
            }
            temp = temp.sig;
        }

        this.raiz = this.primero;
    }

    inOrder() { // IRD
        if (!this.raiz) {
            return ".";
        }
        else {
            return inOrderRec(this.raiz, new Array());
        }

        function inOrderRec(nodoX, array) {
            if (nodoX == null) {
                return; // Recursividad cortado
            }

            if (nodoX.hIzq) { // I
                inOrderRec(nodoX.hIzq, array);
            }

            array.push(nodoX.cifra); // R

            if (nodoX.hDer) { // D
                inOrderRec(nodoX.hDer, array);
            }

            return array;
        }
    }

    preOrder() { // RID
        if (!this.raiz) {
            return ".";
        }
        else {
            return preOrderRec(this.raiz, new Array());
        }

        function preOrderRec(nodoX, array) {
            if (nodoX == null) {
                return; // Recursividad cortado
            }

            array.push(nodoX.cifra); // R

            if (nodoX.hIzq) { // I
                preOrderRec(nodoX.hIzq, array);
            }

            if (nodoX.hDer) { // D
                preOrderRec(nodoX.hDer, array);
            }

            return array;
        }
    }

    postOrder() { // IDR
        if (!this.raiz) {
            return ".";
        }
        else {
            return postOrderRec(this.raiz, new Array());
        }

        function postOrderRec(nodoX, array) {
            if (nodoX == null) {
                return; // Recursividad cortado
            }

            if (nodoX.hIzq) { // I
                postOrderRec(nodoX.hIzq, array);
            }

            if (nodoX.hDer) { // D
                postOrderRec(nodoX.hDer, array);
            }

            array.push(nodoX.cifra); // R

            return array;
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

    generarResultadoPreOrder() {
        let preOrderVec = this.preOrder(), procVec = new Array();

        for (let i = preOrderVec.length - 1; i > -1; i--) {
            switch (preOrderVec[i]) {
                case "+":
                    console.log("Suma encontrada");
                    console.log(`El resultado de ${parseInt(procVec[procVec.length - 1])} + ${parseInt(procVec[procVec.length - 2])} = ` + (parseInt(procVec[procVec.length - 1]) + parseInt(procVec[procVec.length - 2])));
                    procVec[procVec.length - 2] = parseInt(procVec[procVec.length - 1]) + parseInt(procVec[procVec.length - 2]);
                    
                    procVec.pop();
                    break;
                case "-":
                    console.log("Resta encontrada");
                    console.log(`El resultado de ${parseInt(procVec[procVec.length - 1])} - ${parseInt(procVec[procVec.length - 2])} = ` + (parseInt(procVec[procVec.length - 1]) - parseInt(procVec[procVec.length - 2])));
                    procVec[procVec.length - 2] = parseInt(procVec[procVec.length - 1]) - parseInt(procVec[procVec.length - 2]);

                    procVec.pop();
                    break;
                case "*":
                    console.log("Multiplicación encontrada");
                    console.log(`El resultado de ${parseInt(procVec[procVec.length - 1])} * ${parseInt(procVec[procVec.length - 2])} = ` + (parseInt(procVec[procVec.length - 1]) * parseInt(procVec[procVec.length - 2])));
                    procVec[procVec.length - 2] = parseInt(procVec[procVec.length - 1]) * parseInt(procVec[procVec.length - 2]);

                    procVec.pop();
                    break;
                case "/":
                    console.log("División encontrada");
                    console.log(`El resultado de ${parseInt(procVec[procVec.length - 1])} / ${parseInt(procVec[procVec.length - 2])} = ` + (parseInt(procVec[procVec.length - 1]) / parseInt(procVec[procVec.length - 2])));
                    procVec[procVec.length - 2] = parseInt(procVec[procVec.length - 1]) / parseInt(procVec[procVec.length - 2]);

                    procVec.pop();
                    break;
                default:
                    console.log("Se detectó un número...");
                    procVec.push(preOrderVec[i]);
                    break;
            }
            console.log("Ciclando...");
        }
        return procVec[0];
    }

    generarResultadoPostOrder() {
        let postOrderVec = this.postOrder(), procVec = new Array();

        for (let i = 0; i < postOrderVec.length; i++) {
            switch (postOrderVec[i]) {
                case "+":
                    console.log("Suma encontrada");
                    console.log(`El resultado de ${parseInt(procVec[procVec.length - 2])} + ${parseInt(procVec[procVec.length - 1])} = ` + (parseInt(procVec[procVec.length - 2]) + parseInt(procVec[procVec.length - 1])));
                    procVec[procVec.length - 2] = parseInt(procVec[procVec.length - 2]) + parseInt(procVec[procVec.length - 1]);
                    
                    procVec.pop();
                    break;
                case "-":
                    console.log("Resta encontrada");
                    console.log(`El resultado de ${parseInt(procVec[procVec.length - 2])} - ${parseInt(procVec[procVec.length - 1])} = ` + (parseInt(procVec[procVec.length - 2]) - parseInt(procVec[procVec.length - 1])));
                    procVec[procVec.length - 2] = parseInt(procVec[procVec.length - 2]) - parseInt(procVec[procVec.length - 1]);

                    procVec.pop();
                    break;
                case "*":
                    console.log("Multiplicación encontrada");
                    console.log(`El resultado de ${parseInt(procVec[procVec.length - 2])} * ${parseInt(procVec[procVec.length - 1])} = ` + (parseInt(procVec[procVec.length - 2]) * parseInt(procVec[procVec.length - 1])));
                    procVec[procVec.length - 2] = parseInt(procVec[procVec.length - 2]) * parseInt(procVec[procVec.length - 1]);

                    procVec.pop();
                    break;
                case "/":
                    console.log("División encontrada");
                    console.log(`El resultado de ${parseInt(procVec[procVec.length - 2])} / ${parseInt(procVec[procVec.length - 1])} = ` + (parseInt(procVec[procVec.length - 2]) / parseInt(procVec[procVec.length - 1])));
                    procVec[procVec.length - 2] = parseInt(procVec[procVec.length - 2]) / parseInt(procVec[procVec.length - 1]);

                    procVec.pop();
                    break;
                default:
                    console.log("Se detectó un número...");
                    procVec.push(postOrderVec[i]);
                    break;
            }
            console.log("Ciclando...");
        }
        return procVec[0];
    }
}

let miArbol = new ArbolBinario();

miArbol.separarExpresion("4-2+3*5-8*3/6");
// miArbol.separarExpresion("1+2+3*4/2");
console.log(miArbol.listar());
console.log(miArbol.generar());
console.log(`InOrder : ${miArbol.inOrder().toString()}`);
console.log(`PreOrder : ${miArbol.preOrder().toString()}`);
console.log(`PostOrder : ${miArbol.postOrder().toString()}`);
console.log(`El resultado de la expresión por PreOrder es: ${miArbol.generarResultadoPreOrder()}`);
// console.log(`El resultado de la expresión por PostOrder es: ${miArbol.generarResultadoPostOrder()}`);