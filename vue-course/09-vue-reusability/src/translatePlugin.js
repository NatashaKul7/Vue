export default {
  install(app, option) {
    let current = "ua";

    const changeLanguage = (name) => {
      current = name;
    };

    app.config.globalProperties.$alert = (text) => {
      window.alert(text);
    };

    app.config.globalProperties.$i18n = (key) => {
      // app.title -> [app, title]
      return key.split(".").reduce((words, k) => {
        return words[k] || "===UNKNOWN===";
      }, option[current]);
    };

    app.provide("changeI18n", changeLanguage);
  },
};
