# UTN 2026 c1 Div 132

## Proxima clase
- **Modularizacion con el patron MVC**
- Setup para EJS

---

## Videos recomendados
### [Clase 2hs / Protocolo HTTP y lenguaje HTML](https://www.youtube.com/watch?v=l6oF_RpBf64)

### [Playlist de Cliente-Servidor, HTTP y JSON de TodoCode](https://www.youtube.com/watch?v=lC6JOQLIgp0&list=PLQxX2eiEaqbxx6Ds5bd1F6LZJo7_OnZhV)

### [Boom de la IA y tendencias de recontrataciones para 2027](https://www.youtube.com/watch?v=OFmxKgaLN80)

### [Columna de IA / Emi Garzon](https://www.youtube.com/watch?v=xKS307CE9mY)

---

## PRACTICAS
### Practica maquetacion grupal, [pagina apple](https://www.apple.com/)
- [GDB Apple I](https://onlinegdb.com/RntbijQO1)


---


## Cronograma frontend
- HTML I hasta html forms
- HTML II desde forms hasta CSS basico (box model)
    - *live coding*

- CSS II desde box model hasta
    - uds absolutas y relativas
    - combinadores
    - pseudoclases
    - position
    - *live coding*

- CSS III
    - continuamos avanzando css w3schools
    - Estilos avanzados
    - flexbox
    - media queries
    - *live coding*

#### Ejercicio sugerido 1, armen una pagina de recetas con HTML

#### Ejercicio sugerido 2, armen su CV con HTML

---

## Cronograma backend
Fases para desarrollar nuestro TP Integrador

1. **Version basica y funcional**: API Rest + Vistas en HTML, CSS y JS
2. **Version optimizada**: Validaciones, mas repuestas, etc
3. **Modularizar patron MVC**: Organizamos nuestro codigo y separamos la logica en distintos archivos y carpetas
4. **Usar un motor de plantillas**: Nuestro back nos enviara todo el HTML desde el servidor con `EJS`

---

#### Hasta acá tenemos los fundamentos del TP y de la materia

---

5. **Login con `bcrypt`**: Protegemos nuestras rutas y gestionaremos peticiones de usuarios
6. **`Multer`**: Subida de archivos estaticos al servidor
7. **Descarga de excels**: Vamos a poder obtener en formato excel los datos que necesitemos
8. **Paginacion**: Para ordenar en distintas paginas los resultados


---

#### [Guia Markdown](https://dillinger.io/)
#### [Documentacion Básica Markdown](https://www.markdownguide.org/basic-syntax/)

## Recursos Frontend
- [W3Schools HTML](https://www.w3schools.com/html/default.asp)
- [W3Schools CSS](https://www.w3schools.com/css/default.asp)

- [Guia Flexbox CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Guia Grid CSS Tricks](https://css-tricks.com/complete-guide-css-grid-layout/)

- [Jueguito rana flexbox](https://flexboxfroggy.com/#es)
- [Jueguito grid garden](https://cssgridgarden.com/#es)

- [Ejemplos de boxshadow](https://getcssscan.com/css-box-shadow-examples)
- [Plantilla simple para practicar flexbox](https://onlinegdb.com/Zyi4V7ajp)
- [CSS Gradient para crear degradados personalizados](https://cssgradient.io/)
- [Iconos](https://heroicons.com/)

---

## Backend
### [Clase 2hs Protocolo HTTP y lenguaje HTML](https://www.youtube.com/watch?v=l6oF_RpBf64)
### [Trailer documental Node.js](https://www.youtube.com/watch?v=SfWPqr04srM)


### Pasos para nuestro TP Integrador

1. **API Rest** basica con vistas `HTML`, `CSS` y `JS`
2. **Optimizar** nuestra **API Rest**
3. **Modularizar** nuestra app con el patron **MVC**
4. Instalaremos un motor de plantillas `EJS` para servir vistas desde el servidor
5. **Login** y `bcrypt`

---

6. Serviremos archivos estaticos con `Multer`
7. Descarga excels
8. Paginacion


---

## Nombres de los simbolos de programacion en ingles

Los símbolos de programación tienen nombres específicos en inglés que son fundamentales para la comunicación técnica y la lectura de código. A continuación se detallan los nombres más comunes utilizados en la industria:

*   **~**: Tilde
*   **#**: Hash
*   **^** Caret
*   **\***: Asterisk
*   **&**: Ampersand
*   **:**: Colon
*   **;** Semicolon
*   **/**: Slash
*   **\\**: Backslash
*   **|**: Pipe
*   **-**: Minus
*   **_**: Underscore
*   **'**: Apostrophe
*   **"**: Quotation Marks
*   **`**: Grave accent
*   **@**: At
*   **()**: Parentheses
*   **[]**: Square brackets
*   **{}**: Curly brackets
*   **<**: Less than
*   **>**: Greater than
*   **+**: Plus
*   **=**: Equal
*   **$**: Dollar sign
*   **%**: Percent
*   **!**: Exclamation mark


---


## Codigos de estado HTTP
Los códigos de estado HTTP son respuestas de tres dígitos que indican el resultado de una solicitud entre un cliente y un servidor, organizados en cinco categorías principales según su primer dígito.

**1xx Informativo**: El servidor recibió la solicitud y continúa el proceso (ej. **100 Continue**).

**2xx Éxito**: La solicitud fue recibida, comprendida y aceptada correctamente.
*   **200 OK**: Éxito estándar.
*   **201 Created**: Recurso creado exitosamente.
*   **204 No Content**: Éxito sin contenido en la respuesta.

**3xx Redirección**: Se requiere una acción adicional para completar la solicitud, generalmente una redirección.
*   **301 Moved Permanently**: Redirección permanente.
*   **302 Found**: Redirección temporal.
*   **304 Not Modified**: El recurso no ha cambiado, usar caché.

**4xx Error del Cliente**: La solicitud contiene sintaxis incorrecta o no puede cumplirse por error del usuario.
*   **400 Bad Request**: Solicitud incorrecta o malformada.
*   **401 Unauthorized**: Se requiere autenticación.
*   **403 Forbidden**: Acceso denegado por permisos.
*   **404 Not Found**: Recurso no encontrado.

**5xx Error del Servidor**: El servidor falló al procesar una solicitud aparentemente válida.
*   **500 Internal Server Error**: Error genérico del servidor.
*   **502 Bad Gateway**: Puerta de enlace o proxy inválido.
*   **503 Service Unavailable**: Servicio no disponible (sobrecarga/mantenimiento).