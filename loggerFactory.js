const pino = require("pino");

// destination의 dir이 없는 경우 에러처리..?

class LoggerFactory {
    constructor({ destination, sync }) {
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
                sync,
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
