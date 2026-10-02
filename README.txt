OCTUBRE: UN MES PARA TI, MI PRINCESA
Proyecto de José para Kadimy

ARCHIVOS PRINCIPALES
- index.html      -> bienvenida + calendario
- styles.css      -> diseño principal
- script.js       -> mensajes, claves, lógica de fechas y progreso
- cumple.html     -> pantalla especial del día 26
- cumple.css      -> diseño del día 26
- cumple.js       -> protección básica + confeti

CARPETAS
assets/img/       -> fotografías y versiones LEGO/cartoon
assets/video/     -> video del día 26
assets/audio/     -> audios opcionales

MODO DE PRUEBA
En script.js, al inicio:
const DEV_MODE = {
  enabled: false,
  day: 26
};

Cambiar enabled a true y day al día que quieras probar.
ANTES DE PUBLICAR: dejar enabled: false.

PROGRESO
Los días desbloqueados se guardan con localStorage en el navegador.
Desde la consola puedes usar:
__octubreDev.resetProgress()
__octubreDev.unlock(26)
__octubreDev.unlockAll()

MÚSICA
Al pulsar "Comenzar" se carga la playlist de Spotify y se intenta iniciar desde esa interacción.
En algunos navegadores móviles Spotify puede requerir tocar ▶ una vez dentro del reproductor.

FOTOS
Los campos para fotografías ya están preparados en script.js. Cuando seleccionemos las fotos,
se agregarán rutas como:
assets/img/dia06.jpg
assets/img/dia13_01.jpg
assets/img/dia26_lego_01.jpg

DÍA 26
La galería y el video actualmente muestran marcadores de posición. Los sustituiremos cuando
seleccionemos y editemos las fotografías finales.
