OCTUBRE: UN MES PARA TI, MI PRINCESA — V2
===========================================

Estado de esta versión
----------------------
- 31 mensajes y 31 contraseñas integrados.
- Control por fecha real + modo de prueba en script.js.
- Progreso guardado con localStorage.
- Playlist K integrada.
- Marcianito integrado en el modal de contraseña.
- Fotos optimizadas e integradas en los días 3, 6, 7, 9, 10, 11, 13, 14, 15, 17, 22, 25, 28 y 29.
- Las fotos pueden tocarse para abrirse a pantalla completa.
- Día 26 enlazado a cumple.html, todavía pendiente de diseño multimedia final.
- Los candidatos seleccionados para el Día 26 están en assets/img/dia26_candidates/.

Modo de prueba
--------------
En script.js cambia:

const DEV_MODE = {
  enabled: false,
  day: 26
};

A enabled: true y coloca el número de día que quieras probar.
Antes de publicar, vuelve a enabled: false.

Herramientas de consola
-----------------------
__octubreDev.resetProgress()
__octubreDev.unlock(7)
__octubreDev.unlockAll()

Estructura multimedia
---------------------
assets/img/dias/              Fotos web optimizadas ya enlazadas al calendario.
assets/img/dia26_candidates/  Fotos preseleccionadas para diseñar el cumpleaños.
assets/img/marcianitos.png     Personaje del modal.
assets/video/                  Aquí irá dia26.mp4 más adelante.

Recomendación
-------------
Abrir con VS Code + Live Server para probar el proyecto. Aunque también puede abrirse de forma local,
Live Server evita diferencias de comportamiento entre navegadores al cargar recursos.
