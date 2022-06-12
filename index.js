const { analyzeLogger, anyLogger } = require("./logger");

analyzeLogger.info();
analyzeLogger.error();

anyLogger.info("hello anyLogger");
anyLogger.childInfo();
anyLogger.childInfo2();
