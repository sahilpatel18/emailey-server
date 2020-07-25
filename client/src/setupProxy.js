const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = (app) => {
  console.log(app);
  app.use(
    ["/api", "/auth/google"],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};
