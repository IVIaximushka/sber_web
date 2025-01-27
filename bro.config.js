const pkg = require("./package");

module.exports = {
  apiPath: "stubs/api",
  webpackConfig: {
    output: {
      publicPath: `/static/${pkg.name}/${process.env.VERSION || pkg.version}/`,
    },
  },
  /* use https://admin.bro-js.ru/ to create config, navigations and features */
  navigations: {
    "sber_web.main": "/sber_web",
    "sber_web.detail": "/sber_web/detail",
    "sber_web.edit": "/sber_web/edit",
  },
  features: {
    "sber_web": {
      // add your features here in the format [featureName]: { value: string }
    },
  },
  config: {
    "sber_web.api": "/api",
    "sber_web.questions_api": "http://www.db.chgk.info",
  },
};
