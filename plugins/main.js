import Vue from 'vue';
import Cookie from 'js-cookie'
import moment from 'moment'
import Config from '../assets/js/config'

Vue.prototype.$Cookie = Cookie;
Vue.prototype.$Moment = moment;
Vue.prototype.$Config = Config;
