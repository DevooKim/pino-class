const LoggerFactory = require("../loggerFactory");

const destination = `./log/any.log`;

const logger = new LoggerFactory({ destination });
const childLogger = logger.child({ a2: "hello2" });

const info = (message) => {
    logger.info(`anyLogger: ${message}`);
};

const childInfo = () => {
    logger.child({ a: "hello" }).child({ b: "world" }).info("fin");
};

const childInfo2 = () => {
    childLogger.child({ b2: "world2" }).info("fin2");
};

module.exports = {
    info,
    childInfo,
    childInfo2,
};
