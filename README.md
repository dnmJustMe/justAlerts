# Bienvenido a justAlerts

Made by justMe (20/04/2021).

## ¿Qué es justAlerts?

![justAlerts Logo]([url_del_logo](https://dnmjustme.github.io/justAlerts/img/justMe-free-file.png))

`justAlerts` es una librería JavaScript desarrollada por Daniel Navarro Machín (dnmJustMe) con jQuery, de código eficiente y minimalista.

Para su uso se necesita un conocimiento básico de la sintaxis de JS y tener incluido en el proyecto la librería jQuery (preferiblemente una versión mayor que la v3.4.1). [Pulsa aquí para descargar jQuery.](https://jquery.com/)

## Estructura de archivos:

La librería incluye entre sus archivos uno CSS (`alertas.min.css`) donde se declaran los estilos de las notificaciones y otro JavaScript (`alertas.min.js`) donde se encuentra toda la lógica, que permite funcionar las alertas.

## Empecemos:

Para declarar una `justAlert` debemos invocarla llamando la función `alerta()`.

La función `alerta()` recibe 6 parámetros:

1. **Tipo (string):**
   - success
   - danger
   - warning
   - info

2. **Mensaje (string):** Lo que se desee que ponga la alerta. Para un funcionamiento óptimo, límite recomendado de 150 a 200 caracteres. El mensaje puede contener código HTML.

3. **X (string):** left/right.

4. **Y (string):** top/bottom.

5. **Tiempo (int):** Tiempo en desaparecer las alertas (1000 equivale a 1s).

6. **Distancia (int):** La distancia en px del top/bottom del primer elemento hasta lo más alto/bajo de la pantalla. Se recomienda poner la misma distancia a alertas con los mismos valores X-Y, por defecto se comienza a partir de los 52px por el botón de cerrar todas las notificaciones.

Las notificaciones se acumulan organizadas por orden de aparición, de más nuevas a más antiguas. Se acumulan en correspondencia con los valores X-Y de los elementos.

En presencia de más de una alerta, aparecerá un botón para cerrarlas todas, este asumirá los valores X-Y de la primera alerta emitida.
