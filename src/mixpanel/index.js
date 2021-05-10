import mixpanel from 'mixpanel-browser'

export default {
  install: (app, options) => {
    let config = {}
    if ('config' in options) {
      config = options.config
    }

    app.config.globalProperties.$mixpanel = mixpanel
    app.config.globalProperties.$mixpanel.init(options.token, config, '')
  }
}
