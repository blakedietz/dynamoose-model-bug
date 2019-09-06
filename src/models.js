const dynamoose = require("dynamoose");
const uuid = require("uuid/v4");
const { Schema } = dynamoose;

const ProductSchema = new Schema(
  {
    testData: String,
    dataKey: {
      type: String,
      default: model =>
        `product-${model.id}`
    },
    id: {
      type: String,
      default: uuid
    },
    model: String,
    partitionKey: {
      type: String,
      hashKey: true,
      default: model => `product-${model.id}`
    },
    sortKey: {
      type: String,
      index: {
        global: true,
        name: "globalSecondaryIndex-1",
        rangeKey: "dataKey",
        project: true
      },
      default: "PRODUCT"
    },
  },
  {
    timestamps: true
  }
);

const ProductModel = dynamoose.model(
  'Product',
  ProductSchema,
  {
    tableName: process.env.DYNAMODB_TABLE
  }
);


module.exports = {
  ProductModel
};
