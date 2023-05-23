# Minecraft Javascript Edition
Esta edición de Minecraft está hecha en HTML, CSS y Javascript.
Esta edición tiene: pantallas de carga animadas y un gameplay completamente funcional, puede no ser la mejor copia pero tiene una interfaz pulida basada en Minecraft Bedrock, pero a la vez el gameplay esta inspirado en Minecraft Java Edition.

La adición de modificaciones es algo complejo, es más facil programar las modificaciones que emplearlas en el juego, ahora vamos a explicar mas a detalle el código fuente del juego y para que sirve.

Clases y sus propósitos:

* CalcThread.js
Esta clase incluye, entre sus funciones, nuevas funciones al javascript nativo comos:
`Math.calcPercentage(percentage, num)` Devuelve el porcentaje de un número
`Math.extractPercentage(mahornum, minornum)` Devuelve el porcentaje de un número en otro

* WebAspect.js
Esta clase contiene la apariencia del juego, textos, imágenes, videos, etc...
Functiones:
`showSplashes()` Muestra textos en pantalla, puedes cambiar los textos generando otros aleatoriamente, Ejemplos:
![Prefiero Minecraft Javascript Feedback antes que Minecraft Java Feedback](https://i.imgur.com/d9t64Fm.png "Antes")
`showSplashes();`
![10 PRINT "Hello World!"](https://i.imgur.com/mXncRS9.png "Después")
Entre otros, este script también contiene sus propias clases:
	* WebAspect
	Esta clase tiene varias funciones:
	`load()` Esta función ejecuta los componentes necesarios para la correcta visualización del juego.
* ThreadManager.js
	Y, por último, ThreadManager, como el nombre dice, este script maneja un montón del juego. Es un controlador de instancias. El archivo es como el juego en sí, todas las funciones y él inicializan el programa, él controla todo, entonces si este script fuese corrompido o eliminado, vamos a rendirnos para siempre. Este tiene varias funciones y algunos componentes necesarios que no vamos a entrar a detalle ahora. Si tú quieres más información acerca de esta clase, ve al archivo de ThreadManager.md, él explicará todo lo que hace este script en detalle.