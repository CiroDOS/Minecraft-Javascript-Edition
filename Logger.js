class Logger {
    static log(message, timestamp, type, thread) {
        console.log(`[ ${timestamp.getHours()}:${timestamp.getMinutes().override(2, '0')} ] [${thread}/${type}] ${message}`);
    }
}


