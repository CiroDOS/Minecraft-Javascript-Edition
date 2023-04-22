class Logger {
    static log(message, timestamp, type, thread) {
        console.log(`[ ${timestamp.getHours()}:${timestamp.getMinutes().toString().padStart(2, "0")} ] [${thread}/${type}] ${message}`);
    }
}


