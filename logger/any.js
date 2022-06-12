const LoggerFactory = require("../loggerFactory");

const destination = `./log/any.log`;

const logger = new LoggerFactory({ destination });

// child는 약간의 성능 페널티가 있음
const childLogger = logger.child({ child: "test" });

const info = (message) => {
    logger.info(`anyLogger: ${message}`);
};

const childInfo = () => {
    childLogger.info("test");
};

module.exports = {
    info,
    childInfo,
};
