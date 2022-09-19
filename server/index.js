const Koa = require("koa");
const Router = require("koa-router");
const serve = require("koa-static");
const axios = require("axios");

/**
 * Enable us to read from a .env file!
 *
 * This is where we can keep all our secrets...😉
 */
require("dotenv").config();

/**
 * Define our Koa app... this allows us to serve things using HTTP!
 */
const app = new Koa();

/**
 * Define our router... this allows us to specify routes e.g. /api/zoom, and methods e.g. get.
 */
const router = new Router();

/**
 * Define all our remote endpoint URIs. T
 *
 * his is a simple object shape.
 */
const remoteEndpoints = {
  zoom: `https://mocki.io/v1/67982ef9-3d10-4204-bcf0-7e228193cf85`,
};

/**
 * Use our router to make our first route!
 *
 * Define an API endpoint to serve our zoom API data.
 *
 * Notice the async/await style once again.
 */
router.get("/api/zoom", async (ctx) => {
  /**
   * Use axios to fetch our remote endpoint data... in this case from the Zoom API.
   */
  const response = await axios.get(remoteEndpoints.zoom);

  /**
   * A demonstration of how to access the enviroment secrets!
   *
   * In real life... perhaps you'd pass this secret in the axios GET request.
   */
  console.log(process.env.ZOOMSECRET);

  /**
   * `ctx` means Context, and its the term used to describe the whole entirely of a response from the server.
   *
   * Here we set the body of the response to an object,
   * containing a payload which is our from our earlier axios request.
   */
  ctx.body = { payload: response.data };
});

/**
 * Use our Koa app to define the core flow of how to handle a request.
 *
 * By awaiting next, we're calling on the next middleware in the chain.
 */
app.use(async (ctx, next) => {
  await next();
});

/**
 * Attach our router routes and allowed methods to our Koa app.
 */
app.use(router.routes()).use(router.allowedMethods());

/**
 * Serve our built react application at the index.
 */
app.use(serve("../build"));

/**
 * Finally... tell the Koa app to listen for HTTP requests on a given port!
 *
 * First... check the enviroment for a port, or else use 3000.
 */
app.listen(process.env.PORT | 3001);
