const LoggerFactory = require("../loggerFactory");

const destination = `./log/analyze.log`;

const logger = new LoggerFactory({ destination });

const info = () => {
    logger.info("analyze test");
};

const error = () => {
    logger.error("analyze error");
};

module.exports = {
    info,
    error,
};
