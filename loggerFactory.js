const pino = require("pino");

class LoggerFactory {
    constructor({ destination }) {
        this.logger = pino(
            {
                formatters: {
                    level: (label) => {
                        return { level: label };
                    },
                },
            },
            pino.destination({
                dest: destination,
                mkdir: true,
            })
        );
    }

    child(message) {
        return this.logger.child(message);
    }

    info(message) {
        this.logger.info(message);
    }

    error(message) {
        this.logger.error(message);
    }
}

module.exports = LoggerFactory;
