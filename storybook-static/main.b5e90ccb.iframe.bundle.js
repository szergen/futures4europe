(self.webpackChunkwix_cms_nextjs_template =
  self.webpackChunkwix_cms_nextjs_template || []).push([
  [792],
  {
    './app/shared-components lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/app\\/shared-components(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var map = {
          './Tooltip/Tooltip.stories': [
            './app/shared-components/Tooltip/Tooltip.stories.tsx',
            426,
          ],
          './Tooltip/Tooltip.stories.tsx': [
            './app/shared-components/Tooltip/Tooltip.stories.tsx',
            426,
          ],
        };
        function webpackAsyncContext(req) {
          if (!__webpack_require__.o(map, req))
            return Promise.resolve().then(() => {
              var e = new Error("Cannot find module '" + req + "'");
              throw ((e.code = 'MODULE_NOT_FOUND'), e);
            });
          var ids = map[req],
            id = ids[0];
          return __webpack_require__
            .e(ids[1])
            .then(() => __webpack_require__(id));
        }
        (webpackAsyncContext.keys = () => Object.keys(map)),
          (webpackAsyncContext.id =
            './app/shared-components lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/app\\/shared-components(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$'),
          (module.exports = webpackAsyncContext);
      },
    './node_modules/@storybook/instrumenter/dist sync recursive': (module) => {
      function webpackEmptyContext(req) {
        var e = new Error("Cannot find module '" + req + "'");
        throw ((e.code = 'MODULE_NOT_FOUND'), e);
      }
      (webpackEmptyContext.keys = () => []),
        (webpackEmptyContext.resolve = webpackEmptyContext),
        (webpackEmptyContext.id =
          './node_modules/@storybook/instrumenter/dist sync recursive'),
        (module.exports = webpackEmptyContext);
    },
    './.storybook/preview.ts': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      const __WEBPACK_DEFAULT_EXPORT__ = {
        parameters: {
          controls: {
            matchers: { color: /(background|color)$/i, date: /Date$/i },
          },
        },
      };
    },
    './storybook-config-entry.js': (
      __unused_webpack_module,
      __unused_webpack___webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      var external_STORYBOOK_MODULE_GLOBAL_ =
          __webpack_require__('@storybook/global'),
        external_STORYBOOK_MODULE_PREVIEW_API_ = __webpack_require__(
          '@storybook/preview-api'
        ),
        external_STORYBOOK_MODULE_CHANNELS_ = __webpack_require__(
          '@storybook/channels'
        );
      const importers = [
        async (path) => {
          if (
            !/^\.[\\/](?:stories(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.mdx)$/.exec(
              path
            )
          )
            return;
          const pathRemainder = path.substring(10);
          return __webpack_require__(
            './stories lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$'
          )('./' + pathRemainder);
        },
        async (path) => {
          if (
            !/^\.[\\/](?:stories(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(js|jsx|mjs|ts|tsx))$/.exec(
              path
            )
          )
            return;
          const pathRemainder = path.substring(10);
          return __webpack_require__(
            './stories lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$'
          )('./' + pathRemainder);
        },
        async (path) => {
          if (
            !/^\.[\\/](?:app\/shared-components(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(js|jsx|mjs|ts|tsx))$/.exec(
              path
            )
          )
            return;
          const pathRemainder = path.substring(24);
          return __webpack_require__(
            './app/shared-components lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/app\\/shared-components(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$'
          )('./' + pathRemainder);
        },
      ];
      const channel = (0,
      external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({
        page: 'preview',
      });
      external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),
        'DEVELOPMENT' ===
          external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE &&
          (window.__STORYBOOK_SERVER_CHANNEL__ = channel);
      const preview = new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb(
        async function importFn(path) {
          for (let i = 0; i < importers.length; i++) {
            const moduleExports = await ((x = () => importers[i](path)), x());
            if (moduleExports) return moduleExports;
          }
          var x;
        },
        () =>
          (0, external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([
            __webpack_require__(
              './node_modules/@storybook/react/dist/entry-preview.mjs'
            ),
            __webpack_require__(
              './node_modules/@storybook/react/dist/entry-preview-docs.mjs'
            ),
            __webpack_require__(
              './node_modules/@storybook/nextjs/dist/preview.mjs'
            ),
            __webpack_require__(
              './node_modules/@storybook/addon-links/dist/preview.js'
            ),
            __webpack_require__(
              './node_modules/@storybook/addon-essentials/dist/docs/preview.js'
            ),
            __webpack_require__(
              './node_modules/@storybook/addon-essentials/dist/actions/preview.js'
            ),
            __webpack_require__(
              './node_modules/@storybook/addon-essentials/dist/backgrounds/preview.js'
            ),
            __webpack_require__(
              './node_modules/@storybook/addon-essentials/dist/viewport/preview.js'
            ),
            __webpack_require__(
              './node_modules/@storybook/addon-essentials/dist/measure/preview.js'
            ),
            __webpack_require__(
              './node_modules/@storybook/addon-essentials/dist/outline/preview.js'
            ),
            __webpack_require__(
              './node_modules/@storybook/addon-essentials/dist/highlight/preview.js'
            ),
            __webpack_require__(
              './node_modules/@storybook/addon-interactions/dist/preview.js'
            ),
            __webpack_require__('./.storybook/preview.ts'),
          ])
      );
      (window.__STORYBOOK_PREVIEW__ = preview),
        (window.__STORYBOOK_STORY_STORE__ = preview.storyStore),
        (window.__STORYBOOK_ADDONS_CHANNEL__ = channel);
    },
    './node_modules/@storybook/test/dist sync recursive': (module) => {
      function webpackEmptyContext(req) {
        var e = new Error("Cannot find module '" + req + "'");
        throw ((e.code = 'MODULE_NOT_FOUND'), e);
      }
      (webpackEmptyContext.keys = () => []),
        (webpackEmptyContext.resolve = webpackEmptyContext),
        (webpackEmptyContext.id =
          './node_modules/@storybook/test/dist sync recursive'),
        (module.exports = webpackEmptyContext);
    },
    './stories lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var map = {
          './Configure.mdx': ['./stories/Configure.mdx', 3, 958, 707],
        };
        function webpackAsyncContext(req) {
          if (!__webpack_require__.o(map, req))
            return Promise.resolve().then(() => {
              var e = new Error("Cannot find module '" + req + "'");
              throw ((e.code = 'MODULE_NOT_FOUND'), e);
            });
          var ids = map[req],
            id = ids[0];
          return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() =>
            __webpack_require__(id)
          );
        }
        (webpackAsyncContext.keys = () => Object.keys(map)),
          (webpackAsyncContext.id =
            './stories lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$'),
          (module.exports = webpackAsyncContext);
      },
    './stories lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var map = {
          './Button.stories': ['./stories/Button.stories.ts', 303],
          './Button.stories.ts': ['./stories/Button.stories.ts', 303],
          './Header.stories': ['./stories/Header.stories.ts', 384],
          './Header.stories.ts': ['./stories/Header.stories.ts', 384],
          './Page.stories': ['./stories/Page.stories.ts', 679, 226],
          './Page.stories.ts': ['./stories/Page.stories.ts', 679, 226],
        };
        function webpackAsyncContext(req) {
          if (!__webpack_require__.o(map, req))
            return Promise.resolve().then(() => {
              var e = new Error("Cannot find module '" + req + "'");
              throw ((e.code = 'MODULE_NOT_FOUND'), e);
            });
          var ids = map[req],
            id = ids[0];
          return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() =>
            __webpack_require__(id)
          );
        }
        (webpackAsyncContext.keys = () => Object.keys(map)),
          (webpackAsyncContext.id =
            './stories lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$'),
          (module.exports = webpackAsyncContext);
      },
    '@storybook/channels': (module) => {
      'use strict';
      module.exports = __STORYBOOK_MODULE_CHANNELS__;
    },
    '@storybook/client-logger': (module) => {
      'use strict';
      module.exports = __STORYBOOK_MODULE_CLIENT_LOGGER__;
    },
    '@storybook/core-events/preview-errors': (module) => {
      'use strict';
      module.exports = __STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;
    },
    '@storybook/core-events': (module) => {
      'use strict';
      module.exports = __STORYBOOK_MODULE_CORE_EVENTS__;
    },
    '@storybook/global': (module) => {
      'use strict';
      module.exports = __STORYBOOK_MODULE_GLOBAL__;
    },
    '@storybook/preview-api': (module) => {
      'use strict';
      module.exports = __STORYBOOK_MODULE_PREVIEW_API__;
    },
  },
  (__webpack_require__) => {
    __webpack_require__.O(0, [542], () => {
      return (
        (moduleId = './storybook-config-entry.js'),
        __webpack_require__((__webpack_require__.s = moduleId))
      );
      var moduleId;
    });
    __webpack_require__.O();
  },
]);
