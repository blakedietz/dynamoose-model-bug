const dynamoose = require("dynamoose");

dynamoose.AWS.config.update({
  region: process.env.DYNAMODB_REGION
});

const setup = () => {
  if (process.env.NODE_ENV === "LOCAL") {
    dynamoose.local(process.env.DYNAMODB_HOST);
  }
};

module.exports = { setup };
