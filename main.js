/*Ejercicio 1
class Nodo {
    constructor(dato) {
        this.dato = dato; // Dato almacenado en el nodo
        this.siguiente = null; // Puntero al siguiente nodo
    }
}

class ListaEnlazada {
    constructor() {
        this.cabeza = null; // Nodo inicial de la lista
    }

    insertarUnico(dato) {
        // Verificar si el dato ya está en la lista
        if (this.existe(dato)) {
            console.log(`El dato "${dato}" ya está en la lista. No se permite duplicados.`);
            return;
        }

        // Crear un nuevo nodo
        const nuevoNodo = new Nodo(dato);

        // Si la lista está vacía, el nuevo nodo será la cabeza
        if (this.cabeza === null) {
            this.cabeza = nuevoNodo;
        } else {
            // Recorrer hasta el último nodo
            let actual = this.cabeza;
            while (actual.siguiente !== null) {
                actual = actual.siguiente;
            }
            // Enlazar el nuevo nodo al final de la lista
            actual.siguiente = nuevoNodo;
        }

        console.log(`Dato "${dato}" insertado con éxito.`);
    }

    existe(dato) {
        let actual = this.cabeza;
        while (actual !== null) {
            if (actual.dato === dato) {
                return true; // El dato ya existe en la lista
            }
            actual = actual.siguiente;
        }
        return false; // El dato no se encuentra en la lista
    }

    mostrarLista() {
        let actual = this.cabeza;
        const elementos = [];
        while (actual !== null) {
            elementos.push(actual.dato);
            actual = actual.siguiente;
        }
        console.log("Lista actual:", elementos);
    }
}

// Ejemplo de uso
const lista = new ListaEnlazada();

lista.insertarUnico(10);
lista.insertarUnico(20);
lista.insertarUnico(10); // Intento de duplicado
lista.insertarUnico(30);
lista.insertarUnico(20); // Intento de duplicado

lista.mostrarLista();*/

class Nodo {
    constructor(dato) {
        this.dato = dato; // Dato del nodo
        this.siguiente = null; // Referencia al siguiente nodo
    }
}

class ListaEnlazada {
    constructor() {
        this.cabeza = null; // Nodo inicial de la lista
    }

    insertarAlFinal(dato) {
        const nuevoNodo = new Nodo(dato);

        if (this.cabeza === null) {
            // La lista está vacía, el nuevo nodo será la cabeza
            this.cabeza = nuevoNodo;
        } else {
            // Encontrar el último nodo y enlazarlo
            let actual = this.cabeza;
            while (actual.siguiente !== null) {
                actual = actual.siguiente;
            }
            actual.siguiente = nuevoNodo;
        }
    }

    mostrarTodos() {
        let actual = this.cabeza;
        const elementos = [];
        while (actual !== null) {
            elementos.push(actual.dato);
            actual = actual.siguiente;
        }
        console.log("Lista completa:", elementos);
    }

    mostrarSuperioresA(valor) {
        let actual = this.cabeza;
        const elementosSuperiores = [];
        while (actual !== null) {
            if (actual.dato > valor) {
                elementosSuperiores.push(actual.dato);
            }
            actual = actual.siguiente;
        }
        console.log(`Nodos con valor mayor a ${valor}:`, elementosSuperiores);
    }
}

// Función para generar números aleatorios entre un rango
function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Crear listas y agregar números al azar
function crearListaAleatoria(longitud, minValor, maxValor) {
    const lista = new ListaEnlazada();
    for (let i = 0; i < longitud; i++) {
        const numero = generarNumeroAleatorio(minValor, maxValor);
        lista.insertarAlFinal(numero);
    }
    return lista;
}

// Ejemplo de uso
const lista1 = crearListaAleatoria(10, 1, 100); // Crear una lista de 10 números entre 1 y 100
const lista2 = crearListaAleatoria(5, 50, 150); // Crear otra lista de 5 números entre 50 y 150

console.log("Lista 1:");
lista1.mostrarTodos();
console.log("Lista 2:");
lista2.mostrarTodos();

// Mostrar nodos superiores a un valor determinado
const valorFiltro = 50;
console.log(`\nEn la Lista 1:`);
lista1.mostrarSuperioresA(valorFiltro);

console.log(`\nEn la Lista 2:`);
lista2.mostrarSuperioresA(valorFiltro);

