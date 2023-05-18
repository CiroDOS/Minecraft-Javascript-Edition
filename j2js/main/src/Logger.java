package j2js.main.src;
/*
 * This file is part of the project MinecraftJavascriptEdition
 * Project Link: <https://github.com/CiroDOS/MinecraftJavascriptEdition>
 * If you distribute this file, please, don't quit this copyright notes.
 * ¡Thank you for watching my code!
 */

public class Logger {
    public static void log(String message, java.util.Date timestamp, String type, String thread_name) {
        System.out.println("[ " + timestamp.getHours() + ":" + overwrite(timestamp) + timestamp.getMinutes() + " ] [ " + thread_name + "/" + type + " ]: " + message);
    }

    private static String overwrite(java.util.Date timestamp) {
        return String.valueOf(timestamp.getMinutes() >= 10 ? timestamp.getMinutes() : "0");
    }
}
