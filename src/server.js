const fastify = require("fastify")({
  logger: true,
  ignoreTrailingSlash: true
});

const {ProductModel} = require("./models");

async function routes(fastify) {
  fastify.get("/product", async () => {
    const allProducts = await ProductModel.query('sortKey').using('globalSecondaryIndex-1').eq('PRODUCT').exec();
    return allProducts;
  });

  fastify.post("/product", async ({ body: {product} }) => {
    const newProduct = await ProductModel.create(product);
    return newProduct;
  });
}

fastify.register(routes);
module.exports = fastify;
