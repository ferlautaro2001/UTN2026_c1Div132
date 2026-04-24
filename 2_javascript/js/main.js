/*=========================
    Control de flujo
===========================

El control de flujo determina como se ejecutan las instrucciones de un programa.
Cuando diseñamos un programa, es importante estbalecer que partes del codigo se ejcutan y bajo que condiciones. Esto lo logramos con estructuras de contorl que permiten ejecutar secuencias de codigo basadas en decisiones, repeticiones o condiciones especificas

1. Condicionales
    - if, else if, else
    - Operadores logicos: &&, ||, !
    - Operadores ternarios

2. Bucles
    for, while, do...while

3. Control de flujo avanzado
    - break
    - continue
    - switch
*/

/*
let edad = parseInt(prompt("Introduci tu edad"));
console.log(typeof edad);

let tieneLicencia = confirm("Tenes carnet, pibe?");

if (edad >= 18) {
    console.log("Sos mayor de edad");
    
} else if (edad < 18 && edad > 0) {
    console.log("Sos menor de edad");
    
} else {
    console.log("Edad invalida");
}

if(edad >= 18 && tieneLicencia) {
    console.log("Podes manejar, anda nomas maquina");
}

if(edad < 18 || !tieneLicencia) {
    console.log("Para pichon, no podes manejar");
}
*/

// Ejemplo de toggle o "alternador"
let estado = true;

function alternarEstado() {
    estado = !estado; // Invertimos el valor de "estado"
    console.log("Nuevo estado:", estado);
}

alternarEstado(); // false
alternarEstado(); // true
alternarEstado(); // false


// Operador ternario: Una forma mas compacta de escribir una condicion if...else
let edad = 20;

let mensaje = (edad >= 18) ? "Sos mayor de edad" : "Sos menor de edad";
console.log(mensaje);


/*===============
    Bucles
=================

Bucle for: Se usa cuando conocemos de antemano el numero de iteraciones

    for (inicializacion; condicion; incremento) {
        // Codigo a ejecutar en cada iteracion
    }



Bucle while: Ejecuta el bloque de codigo mientras la condicion sea verdadera
    while (condicion) {
        // Codigo a ejecutar mientras la condicion sea verdadera
    }


Bucle do.. while: Similar al while, pero la condicion se evalua despues de ejecutar el bloque de codigo, lo que garantiza que el codigo se ejecutara al menos una vez

    do {
        // Codigo a ejecutar
    } while (condicion)

*/

for (let i = 0; i < 5; i++) {
    console.log("Iteracion: ", i);
}

// EJERCICIO 1
// Practica sugerida! Creen un bucle anidado para hacer una tabla de multiplicacion del 5


let i = 0;
while (i < 5) {
    console.log("Iteracion while: ", i);
    i++;
}


let x = 0;

do {
    console.log("Iteracion do while: ", x);
    x++;

} while (x < 5);


/*==============================
    Control de flujo avanzado
================================

break: Para salir inmediatamente de un bucle o estructura de control

continue: Salta a la siguiente iteracion del bucle, omitiendo el codigo restante dentro del bucle para esa iteracion

switch: Permite evaluar una expresion y ejecutar el bloque de codigo correspondiente al caso que coincide

    switch (expresion) {
        case valor1:
            // Codigo que se ejecuta si la expresion es igual a valor1
            break;

        case valor2:
            // Codigo que se ejecuta si la expresion es igual a valor2
            break;

        default:
            // Codigo que se ejecuta si ninguno de los casos coincide
    }
*/

for(let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Salimos del bucle cuando i es 5
    }

    console.log("Iteracion: ", i);
}


for(let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // Salta las iteraciones en las que i es par
    }

    console.log("Numero impar: ", i);
}


// EJERCICIO 2
// Practica sugerida! Usando prompt para recibir input, pidan el dia de la semana y devuelvan: "Lunes", "Martes", "Miercoles", "Jueves", "Viernes" o "Fin de Semana"



// EJERCICIO 3
// Hagan una calculadora del IMC, Indice de masa corporal y devuelvan las categorias que tienen abajo, pueden devolverlo por consola con console.log() o devolver el resultado con un alert()

/* Data sobre el IMC
Índice de Masa Corporal

El **Índice de Masa Corporal (IMC)** es un indicador matemático que relaciona el peso y la altura de una persona para estimar su composición corporal y clasificar el riesgo de salud. Se calcula dividiendo el peso en kilogramos entre la altura en metros al cuadrado ($$IMC = \frac{peso (kg)}{altura (m)^2}$$).

Según los estándares de la **Organización Mundial de la Salud (OMS)** para adultos, las categorías son:

*   **Bajo peso:** IMC inferior a **18.5**.
*   **Peso normal:** IMC entre **18.5 y 24.9**.
*   **Sobrepeso:** IMC entre **25.0 y 29.9**.
*   **Obesidad:** IMC igual o superior a **30.0** (clasificada en clases I, II y III según los rangos 30-34.9, 35-39.9 y >40, respectivamente).

El IMC es una herramienta de **cribado** útil para identificar riesgos de enfermedades cardiovasculares, diabetes tipo 2 y hipertensión, pero **no mide directamente la grasa corporal**. Tiene limitaciones importantes: no distingue entre masa muscular y grasa, por lo que puede sobreestimar el riesgo en atletas o personas con gran musculatura, y no considera la distribución de la grasa, la edad, el sexo o la etnia. Por esta razón, no es aplicable directamente a niños, adolescentes, embarazadas o personas con alta masa muscular sin ajustes específicos.
*/