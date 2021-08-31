import Vue from 'vue'
import HoneybadgerVue from '@honeybadger-io/vue'

const config = {
  apiKey: 'hbp_onqKNm4CHBhskrtm2xsTxg2vBuRV0a1bddy0',
  environment: 'production',
}

Vue.use(HoneybadgerVue, config)
