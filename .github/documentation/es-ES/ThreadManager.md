# ThreadManager.js
Esta clase es el manejador de instancias del juego.

# Variables:
`loaded`, Esta variable es un json, tiene 2 sub-variables:
- phase: Integer, valores posibles: 0, 1, 2:
    - 0: No inicializado
    - 1: Pantalla de carga cargada
    - 2: Aspecto del juego cargada
- comment: String, Comentarios acerca de la carga de componentes.

Windows, subvariables:
- id: Integer, identificador en integer de la ventana, normalmente, el identificador es un String, pero esta variable es implementada por comodidad
- htmlobj: Objeto HTML
- name: Nombre de la ventana en String
- title: Título de la ventana

menu_buttons: JSON, contiene el HTML de los botones de la pantalla principal

loadscreen_video: Video HTML, Reference to Mojang Animated logo charge.

## Functions
`SwitchToWindows(windowToSwitch)`, 'windowToSwitch': JSON Object, extends from variable `windows`

`disableAllWindowsExcept(except)`, 'except' es la ventana que no va a ser deshabilitada mientras las otras ventanas van a deshabilitarse

`enableWindow(a_window)`, 'a_window' es la ventana que va a ser habilitada

`disableWindow(a_window)`, deshabilita una ventana

`setTimestamp(timestamp)`, 'timestamp' es un objeto Date, esta función introduce una marca de tiempo en una variable llamada `timestamps`, esta variable es un array, esta marca de tiempo va a ser usada en depuración. * funciones de desarrollador be like xd *