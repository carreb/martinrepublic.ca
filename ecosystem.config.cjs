module.exports = {
  apps: [
    {
      name: "MartinRepublic",
      port: "8899",
      exec_mode: "cluster",
      instances: 1,
      script: "./.output/server/index.mjs",
    },
  ],
};
