import {
  TELEMETRY_ERROR,
  UncaughtManagerError,
  dist_exports as dist_exports2,
  dist_exports2 as dist_exports3,
  dist_exports3 as dist_exports4,
  dist_exports4 as dist_exports5,
  dist_exports5 as dist_exports6,
  dist_exports6 as dist_exports7,
  dist_exports7 as dist_exports9,
  manager_errors_exports,
} from './chunk-KCJCJECS.js';
import './chunk-TZAR34JC.js';
import './chunk-VMGB76WP.js';
import {
  dist_exports,
  dist_exports2 as dist_exports8,
  require_react,
  require_react_dom,
  scope,
} from './chunk-UOBNU442.js';
import { __commonJS, __toESM } from './chunk-XP3HGWTR.js';
var require_browser_dtector_umd_min = __commonJS({
  '../../node_modules/browser-dtector/browser-dtector.umd.min.js'(
    exports,
    module
  ) {
    (function (e, o) {
      typeof exports == 'object' && typeof module < 'u'
        ? (module.exports = o())
        : typeof define == 'function' && define.amd
        ? define(o)
        : ((e =
            typeof globalThis < 'u' ? globalThis : e || self).BrowserDetector =
            o());
    })(exports, function () {
      'use strict';
      function e(e2, o2) {
        for (var r2 = 0; r2 < o2.length; r2++) {
          var n2 = o2[r2];
          (n2.enumerable = n2.enumerable || !1),
            (n2.configurable = !0),
            'value' in n2 && (n2.writable = !0),
            Object.defineProperty(
              e2,
              ((i2 = n2.key),
              (t2 = void 0),
              typeof (t2 = (function (e3, o3) {
                if (typeof e3 != 'object' || e3 === null) return e3;
                var r3 = e3[Symbol.toPrimitive];
                if (r3 !== void 0) {
                  var n3 = r3.call(e3, o3 || 'default');
                  if (typeof n3 != 'object') return n3;
                  throw new TypeError(
                    '@@toPrimitive must return a primitive value.'
                  );
                }
                return (o3 === 'string' ? String : Number)(e3);
              })(i2, 'string')) == 'symbol'
                ? t2
                : String(t2)),
              n2
            );
        }
        var i2, t2;
      }
      var o = {
          chrome: 'Google Chrome',
          brave: 'Brave',
          crios: 'Google Chrome',
          edge: 'Microsoft Edge',
          edg: 'Microsoft Edge',
          edgios: 'Microsoft Edge',
          fennec: 'Mozilla Firefox',
          jsdom: 'JsDOM',
          mozilla: 'Mozilla Firefox',
          fxios: 'Mozilla Firefox',
          msie: 'Microsoft Internet Explorer',
          opera: 'Opera',
          opios: 'Opera',
          opr: 'Opera',
          opt: 'Opera',
          rv: 'Microsoft Internet Explorer',
          safari: 'Safari',
          samsungbrowser: 'Samsung Browser',
          electron: 'Electron',
        },
        r = {
          android: 'Android',
          androidTablet: 'Android Tablet',
          cros: 'Chrome OS',
          fennec: 'Android Tablet',
          ipad: 'IPad',
          iphone: 'IPhone',
          jsdom: 'JsDOM',
          linux: 'Linux',
          mac: 'Macintosh',
          tablet: 'Android Tablet',
          win: 'Windows',
          'windows phone': 'Windows Phone',
          xbox: 'Microsoft Xbox',
        },
        n = function (e2) {
          var o2 = new RegExp(
              '^-?\\d+(?:.\\d{0,'.concat(
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : -1,
                '})?'
              )
            ),
            r2 = Number(e2).toString().match(o2);
          return r2 ? r2[0] : null;
        },
        i = function () {
          return typeof window < 'u' ? window.navigator : null;
        },
        t = (function () {
          function t2(e2) {
            var o2;
            (function (e3, o3) {
              if (!(e3 instanceof o3))
                throw new TypeError('Cannot call a class as a function');
            })(this, t2),
              (this.userAgent =
                e2 ||
                ((o2 = i()) === null || o2 === void 0
                  ? void 0
                  : o2.userAgent) ||
                null);
          }
          var a, l, s;
          return (
            (a = t2),
            (l = [
              {
                key: 'parseUserAgent',
                value: function (e2) {
                  var t3,
                    a2,
                    l2,
                    s2 = {},
                    c = e2 || this.userAgent || '',
                    d = c.toLowerCase().replace(/\s\s+/g, ' '),
                    u =
                      /(edge)\/([\w.]+)/.exec(d) ||
                      /(edg)[/]([\w.]+)/.exec(d) ||
                      /(opr)[/]([\w.]+)/.exec(d) ||
                      /(opt)[/]([\w.]+)/.exec(d) ||
                      /(fxios)[/]([\w.]+)/.exec(d) ||
                      /(edgios)[/]([\w.]+)/.exec(d) ||
                      /(jsdom)[/]([\w.]+)/.exec(d) ||
                      /(samsungbrowser)[/]([\w.]+)/.exec(d) ||
                      /(electron)[/]([\w.]+)/.exec(d) ||
                      /(chrome)[/]([\w.]+)/.exec(d) ||
                      /(crios)[/]([\w.]+)/.exec(d) ||
                      /(opios)[/]([\w.]+)/.exec(d) ||
                      /(version)(applewebkit)[/]([\w.]+).*(safari)[/]([\w.]+)/.exec(
                        d
                      ) ||
                      /(webkit)[/]([\w.]+).*(version)[/]([\w.]+).*(safari)[/]([\w.]+)/.exec(
                        d
                      ) ||
                      /(applewebkit)[/]([\w.]+).*(safari)[/]([\w.]+)/.exec(d) ||
                      /(webkit)[/]([\w.]+)/.exec(d) ||
                      /(opera)(?:.*version|)[/]([\w.]+)/.exec(d) ||
                      /(msie) ([\w.]+)/.exec(d) ||
                      /(fennec)[/]([\w.]+)/.exec(d) ||
                      (d.indexOf('trident') >= 0 &&
                        /(rv)(?::| )([\w.]+)/.exec(d)) ||
                      (d.indexOf('compatible') < 0 &&
                        /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(d)) ||
                      [],
                    f =
                      /(ipad)/.exec(d) ||
                      /(ipod)/.exec(d) ||
                      /(iphone)/.exec(d) ||
                      /(jsdom)/.exec(d) ||
                      /(windows phone)/.exec(d) ||
                      /(xbox)/.exec(d) ||
                      /(win)/.exec(d) ||
                      /(tablet)/.exec(d) ||
                      (/(android)/.test(d) &&
                        /(mobile)/.test(d) === !1 && ['androidTablet']) ||
                      /(android)/.exec(d) ||
                      /(mac)/.exec(d) ||
                      /(linux)/.exec(d) ||
                      /(cros)/.exec(d) ||
                      [],
                    p = u[5] || u[3] || u[1] || null,
                    w = f[0] || null,
                    x = u[4] || u[2] || null,
                    b = i();
                  p === 'chrome' &&
                    typeof (b == null ||
                    (t3 = b.brave) === null ||
                    t3 === void 0
                      ? void 0
                      : t3.isBrave) == 'function' &&
                    (p = 'brave'),
                    p && (s2[p] = !0),
                    w && (s2[w] = !0);
                  var v = !!(s2.tablet || s2.android || s2.androidTablet),
                    m = !!(s2.ipad || s2.tablet || s2.androidTablet),
                    g = !!(
                      s2.android ||
                      s2.androidTablet ||
                      s2.tablet ||
                      s2.ipad ||
                      s2.ipod ||
                      s2.iphone ||
                      s2['windows phone']
                    ),
                    h = !!(s2.cros || s2.mac || s2.linux || s2.win),
                    y = !!(
                      s2.brave ||
                      s2.chrome ||
                      s2.crios ||
                      s2.opr ||
                      s2.safari ||
                      s2.edg ||
                      s2.electron
                    ),
                    A = !!(s2.msie || s2.rv);
                  return {
                    name: (a2 = o[p]) !== null && a2 !== void 0 ? a2 : null,
                    platform: (l2 = r[w]) !== null && l2 !== void 0 ? l2 : null,
                    userAgent: c,
                    version: x,
                    shortVersion: x ? n(parseFloat(x), 2) : null,
                    isAndroid: v,
                    isTablet: m,
                    isMobile: g,
                    isDesktop: h,
                    isWebkit: y,
                    isIE: A,
                  };
                },
              },
              {
                key: 'getBrowserInfo',
                value: function () {
                  var e2 = this.parseUserAgent();
                  return {
                    name: e2.name,
                    platform: e2.platform,
                    userAgent: e2.userAgent,
                    version: e2.version,
                    shortVersion: e2.shortVersion,
                  };
                },
              },
            ]),
            (s = [
              {
                key: 'VERSION',
                get: function () {
                  return '3.4.0';
                },
              },
            ]),
            l && e(a.prototype, l),
            s && e(a, s),
            Object.defineProperty(a, 'prototype', { writable: !1 }),
            t2
          );
        })();
      return t;
    });
  },
});
var REACT = __toESM(require_react()),
  REACT_DOM = __toESM(require_react_dom());
var globalsNameValueMap = {
  react: REACT,
  'react-dom': REACT_DOM,
  '@storybook/components': dist_exports9,
  '@storybook/channels': dist_exports6,
  '@storybook/core-events': dist_exports3,
  '@storybook/core-events/manager-errors': manager_errors_exports,
  '@storybook/router': dist_exports2,
  '@storybook/theming': dist_exports8,
  '@storybook/icons': dist_exports5,
  '@storybook/manager-api': dist_exports7,
  '@storybook/client-logger': dist_exports,
  '@storybook/types': dist_exports4,
};
var globalsNameReferenceMap = {
    react: '__REACT__',
    'react-dom': '__REACT_DOM__',
    '@storybook/components': '__STORYBOOK_COMPONENTS__',
    '@storybook/channels': '__STORYBOOK_CHANNELS__',
    '@storybook/core-events': '__STORYBOOK_CORE_EVENTS__',
    '@storybook/core-events/manager-errors':
      '__STORYBOOK_CORE_EVENTS_MANAGER_ERRORS__',
    '@storybook/router': '__STORYBOOK_ROUTER__',
    '@storybook/theming': '__STORYBOOK_THEMING__',
    '@storybook/icons': '__STORYBOOK_ICONS__',
    '@storybook/manager-api': '__STORYBOOK_API__',
    '@storybook/client-logger': '__STORYBOOK_CLIENT_LOGGER__',
    '@storybook/types': '__STORYBOOK_TYPES__',
  },
  globalPackages = Object.keys(globalsNameReferenceMap);
var import_browser_dtector = __toESM(require_browser_dtector_umd_min()),
  browserInfo;
function getBrowserInfo() {
  return (
    browserInfo ||
      (browserInfo = new import_browser_dtector.default(
        scope.navigator?.userAgent
      ).getBrowserInfo()),
    browserInfo
  );
}
var errorMessages = [
    'ResizeObserver loop completed with undelivered notifications.',
    'ResizeObserver loop limit exceeded',
    'Script error.',
  ],
  shouldSkipError = (error) => errorMessages.includes(error?.message);
function prepareForTelemetry(originalError) {
  let error = originalError;
  return (
    (originalError.target === scope ||
      originalError.currentTarget === scope ||
      originalError.srcElement === scope) &&
      ((error = new Error(originalError.message)),
      (error.name = originalError.name || error.name)),
    originalError.fromStorybook ||
      (error = new UncaughtManagerError({ error })),
    (error.browserInfo = getBrowserInfo()),
    error
  );
}
globalPackages.forEach((key) => {
  scope[globalsNameReferenceMap[key]] = globalsNameValueMap[key];
});
scope.sendTelemetryError = (error) => {
  shouldSkipError(error) ||
    scope.__STORYBOOK_ADDONS_CHANNEL__.emit(
      TELEMETRY_ERROR,
      prepareForTelemetry(error)
    );
};
scope.addEventListener('error', (args) => {
  let error = args.error || args;
  scope.sendTelemetryError(error);
});
scope.addEventListener('unhandledrejection', ({ reason }) => {
  scope.sendTelemetryError(reason);
});
