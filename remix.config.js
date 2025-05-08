/** @type {import('@remix-run/dev').AppConfig} */
export default {
  appDirectory: "app",
  server: "./server.ts",
  serverBuildTarget: "vercel",
  ignoredRouteFiles: ["**/.*"],
  future: {
    v3_routeConvention: true
  }
};
