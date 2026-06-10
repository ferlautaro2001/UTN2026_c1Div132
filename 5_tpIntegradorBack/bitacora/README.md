# Bitacora

### Que hace el middleware `app.use(express.json())`?
*Por que si no uso app.use(express.json()); me devuelve undefined el req.body?*

**Express no parsea automáticamente el cuerpo de las peticiones** porque su diseño es minimalista; desconoce si los datos entrantes son JSON, formularios o archivos binarios.

Sin la middleware `express.json()`, la propiedad `req.body` permanece como **undefined** porque nadie procesa el flujo de datos del cliente. Para solucionarlo, debes agregar `app.use(express.json());` antes de definir tus rutas, lo que permite que Express identifique el tipo `application/json` y convierta el cuerpo en un objeto accesible.

*   En **Express 4.16.0+**, `express.json()` está integrado nativamente.
*   En versiones anteriores, requería instalar el paquete externo `body-parser`.
*   Si envías formularios HTML en lugar de JSON, necesitarías `express.urlencoded({ extended: true })`.


---

### Que es el `FormData` en JavaScript?

**FormData** es una interfaz nativa de JavaScript que permite construir y gestionar conjuntos de pares clave-valor para representar datos de formularios HTML. Su función principal es facilitar el envío de información, **incluyendo archivos y binarios**, mediante solicitudes AJAX o fetch sin recargar la página.

A diferencia de los objetos JSON, FormData utiliza el formato **multipart/form-data**, lo que permite adjuntar archivos nativamente y configurar automáticamente los encabezados HTTP necesarios (como el boundary). Esto simplifica el manejo de formularios complejos, ya que puede capturar automáticamente todos los campos de un elemento `<form>` o construirse manualmente mediante métodos como `append()`.

### Características clave:
*   **Envío de archivos:** Soporta tipos `File`, `Blob` y cadenas, ideal para cargas de imágenes o documentos.
*   **Integración con Fetch/XMLHttpRequest:** Se pasa directamente como cuerpo (`body`) de la petición, permitiendo que el navegador gestione la codificación correcta.
*   **Manipulación dinámica:** Permite agregar, eliminar o modificar campos antes del envío usando métodos como `formData.append()`, `formData.get()` y `formData.delete()`.

### Ejemplo básico de uso:

```javascript
// Crear FormData desde un formulario HTML existente
const formElement = document.querySelector('form');
const formData = new FormData(formElement);

// O crear uno manualmente y agregar datos
const manualData = new FormData();
manualData.append('nombre', 'Juan');
manualData.append('archivo', fileInput.files[0]);

// Enviar con fetch
fetch('/endpoint', {
  method: 'POST',
  body: formData
  // No configurar 'Content-Type' manualmente; el navegador lo hace automáticamente
})
.then(response => response.json())
.then(data => console.log(data));
```


---


### Que significa `payload` cuando devolvemos datos de una BBDD?
**La convención payload** se refiere principalmente a dos conceptos distintos según el contexto técnico:

*   **En programación y APIs:** Es una convención que denomina **payload** al **conjunto de datos o información relevante** transmitidos dentro de un mensaje (como JSON, XML o una solicitud HTTP), excluyendo los encabezados y metadatos de control. Por ejemplo, en una solicitud POST, el payload contiene la información necesaria para crear o actualizar un objeto.
*   **En ciberseguridad (Metasploit):** Es una convención de **nomenclatura de payloads** que indica su estructura y tipo mediante el uso de guiones bajos o barras diagonales:
    *   **Payload Individual (Singles):** Utiliza un guion bajo (`_`) en su nombre; está diseñado para ejecutarse de forma autónoma sin necesidad de conexión externa adicional.
    *   **Payload Montable (Stager/Stages):** Utiliza una barra diagonal (`/`) entre el tipo y el payload; actúa como una primera etapa que establece la conexión para descargar y ejecutar un payload más complejo.

---

### Que puertos solemos usar en el desarrollo de servidores

En el desarrollo de servidores, la elección de puertos depende del entorno y la tecnología, priorizando la **evitación de conflictos** con servicios del sistema y otras aplicaciones locales.

*   **Entorno de Producción**: Se utilizan exclusivamente los **puertos 80 (HTTP)** y **443 (HTTPS)**, ya que son los estándares para el tráfico web público.
*   **Desarrollo Local (JavaScript/Node.js)**: Es predominante el uso del **puerto 3000**, seguido del **3001** para APIs o servicios adicionales en arquitecturas de microservicios.
*   **Desarrollo Local (Python)**: Comúnmente se emplea el **puerto 8000**, que es el valor predeterminado en herramientas como Django o `http.server`.
*   **Desarrollo Local (Java/Apache Tomcat)**: El **puerto 8080** es la convención estándar para evitar conflictos con el puerto 80 y facilitar la simulación de servidores web.
*   **Otros Frameworks**: **Angular** usa por defecto el **puerto 4200**, mientras que desarrolladores suelen usar rangos personalizados (como **9900-9999** o secuencias como **3001, 3002**) para proyectos paralelos.

Es crucial verificar que el puerto elegido no esté en uso por otro servicio del sistema operativo (especialmente en el rango **0-1023**, que requiere permisos de administrador) antes de iniciar el servidor.

---

### Que hace y significa localhost

**Localhost** es el nombre de dominio reservado que se utiliza para referirse a la **interfaz de loopback** de una computadora, permitiendo que el dispositivo se comunique consigo mismo. Técnicamente, este alias resuelve la dirección IP **127.0.0.1** (en IPv4) o **::1** (en IPv6), creando un circuito virtual interno donde los datos nunca salen de la máquina.

Su función principal es actuar como un **servidor local** o anfitrión propio, lo que resulta esencial en el desarrollo de software y administración de sistemas por las siguientes razones:

*   **Desarrollo y Pruebas:** Permite a los programadores ejecutar servidores web (como Apache o Nginx), bases de datos y aplicaciones en su equipo local para probar código sin necesidad de conexión a Internet ni de publicar en un servidor externo.
*   **Seguridad y Control:** Al mantener el tráfico dentro del dispositivo, se elimina la exposición a amenazas externas y se reduce la latencia, ofreciendo un entorno aislado y rápido para depurar errores.
*   **Comunicación Interna:** Facilita la interacción entre diferentes programas o servicios que residen en el mismo equipo, simulando una red sin requerir hardware adicional.

En resumen, localhost significa **"esta computadora"** en el contexto de redes, funcionando como un espacio de trabajo privado y autónomo antes de implementar cualquier proyecto en producción.