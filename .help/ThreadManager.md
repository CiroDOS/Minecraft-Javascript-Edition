# ThreadManager.js
This class is the instancer manager of the game,

**Variables**:
* `loaded`, This variable is a json, has 2 sub-variables:
    * phase: Integer, possible values: 0, 1, 2:
        * 0: Not initialized
        * 1: Loaded loadscreen
        * 2: Loaded game aspect
    * comment: String, Comments about loading components.
* Windows, subvariables:
    * id: Integer, identificator in integer of the window, normally, the identificator is an String, but this variable is implemented for comodity
    * htmlobj: Object HTML, Examples: loadscreen =
        ```html
        <div id="loadscreen">
            <video>...</video>
        </div>
        ```
    * name: Name of the windows in String
    * title: Title of Web page (game), when on window.
* menu_buttons: JSON, contains the html of some html necesary elements, Examples:
    * btn_Settings =
    ```html
    <button id="btn_Settings">...</button>
    ```
* loadscreen_video: Video HTML, Reference to Mojang Animated logo charge.

**Functions**
* `window.switchTo(windowToSwitch, options)`, 'options' is a json, that can contains some values:
    * changeTitle: Boolean, If it's true, the name of the actual window will be replaced with next window title; 'windowToSwitch': JSON Object, extends from variable `windows`
* `disableAllExcept(except)`, 'except' is the window that not be disables, while other windows will be disabled.
* `enable(a_window)`, 'a_window' is the window that will be enabled, (not switched to him, enabled, the function for switch windows is `window.switchTo(windowToSwitch, options)`).
* `disable(a_window)`, disables a window.
* `setTimestamp(timestamp)`, 'timestamp' is a Date object, this function pushes a timestamp in a variable called `timestamps`, this variable is an array, this timestamp will be usable in debugging. * developer functions be like xd *