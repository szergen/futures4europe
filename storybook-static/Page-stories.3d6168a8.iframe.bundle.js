'use strict';
(self.webpackChunkwix_cms_nextjs_template =
  self.webpackChunkwix_cms_nextjs_template || []).push([
  [226],
  {
    './stories/Page.stories.ts': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          LoggedIn: () => LoggedIn,
          LoggedOut: () => LoggedOut,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Page_stories,
        });
      var asyncToGenerator = __webpack_require__(
          './node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js'
        ),
        regenerator = __webpack_require__(
          './node_modules/@babel/runtime/regenerator/index.js'
        ),
        regenerator_default = __webpack_require__.n(regenerator),
        dist = __webpack_require__(
          './node_modules/@storybook/test/dist/index.mjs'
        ),
        slicedToArray = __webpack_require__(
          './node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js'
        ),
        react = __webpack_require__(
          './node_modules/next/dist/compiled/react/index.js'
        ),
        Header = __webpack_require__('./stories/Header.tsx'),
        injectStylesIntoStyleTag = __webpack_require__(
          './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag
        ),
        styleDomAPI = __webpack_require__(
          './node_modules/style-loader/dist/runtime/styleDomAPI.js'
        ),
        styleDomAPI_default = __webpack_require__.n(styleDomAPI),
        insertBySelector = __webpack_require__(
          './node_modules/style-loader/dist/runtime/insertBySelector.js'
        ),
        insertBySelector_default = __webpack_require__.n(insertBySelector),
        setAttributesWithoutAttributes = __webpack_require__(
          './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js'
        ),
        setAttributesWithoutAttributes_default = __webpack_require__.n(
          setAttributesWithoutAttributes
        ),
        insertStyleElement = __webpack_require__(
          './node_modules/style-loader/dist/runtime/insertStyleElement.js'
        ),
        insertStyleElement_default = __webpack_require__.n(insertStyleElement),
        styleTagTransform = __webpack_require__(
          './node_modules/style-loader/dist/runtime/styleTagTransform.js'
        ),
        styleTagTransform_default = __webpack_require__.n(styleTagTransform),
        page = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/@storybook/nextjs/node_modules/postcss-loader/dist/cjs.js!./stories/page.css'
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, 'head')),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(page.A, options);
      page.A && page.A.locals && page.A.locals;
      var __jsx = react.createElement,
        Page = function Page() {
          var _React$useState = react.useState(),
            _React$useState2 = (0, slicedToArray.A)(_React$useState, 2),
            user = _React$useState2[0],
            setUser = _React$useState2[1];
          return __jsx(
            'article',
            null,
            __jsx(Header.Y, {
              user,
              onLogin: function onLogin() {
                return setUser({ name: 'Jane Doe' });
              },
              onLogout: function onLogout() {
                return setUser(void 0);
              },
              onCreateAccount: function onCreateAccount() {
                return setUser({ name: 'Jane Doe' });
              },
            }),
            __jsx(
              'section',
              { className: 'storybook-page' },
              __jsx('h2', null, 'Pages in Storybook'),
              __jsx(
                'p',
                null,
                'We recommend building UIs with a',
                ' ',
                __jsx(
                  'a',
                  {
                    href: 'https://componentdriven.org',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  },
                  __jsx('strong', null, 'component-driven')
                ),
                ' ',
                'process starting with atomic components and ending with pages.'
              ),
              __jsx(
                'p',
                null,
                'Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:'
              ),
              __jsx(
                'ul',
                null,
                __jsx(
                  'li',
                  null,
                  'Use a higher-level connected component. Storybook helps you compose such data from the "args" of child component stories'
                ),
                __jsx(
                  'li',
                  null,
                  'Assemble data in the page component from your services. You can mock these services out using Storybook.'
                )
              ),
              __jsx(
                'p',
                null,
                'Get a guided tutorial on component-driven development at',
                ' ',
                __jsx(
                  'a',
                  {
                    href: 'https://storybook.js.org/tutorials/',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  },
                  'Storybook tutorials'
                ),
                '. Read more in the',
                ' ',
                __jsx(
                  'a',
                  {
                    href: 'https://storybook.js.org/docs',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  },
                  'docs'
                ),
                '.'
              ),
              __jsx(
                'div',
                { className: 'tip-wrapper' },
                __jsx('span', { className: 'tip' }, 'Tip'),
                ' Adjust the width of the canvas with the',
                ' ',
                __jsx(
                  'svg',
                  {
                    width: '10',
                    height: '10',
                    viewBox: '0 0 12 12',
                    xmlns: 'http://www.w3.org/2000/svg',
                  },
                  __jsx(
                    'g',
                    { fill: 'none', fillRule: 'evenodd' },
                    __jsx('path', {
                      d: 'M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z',
                      id: 'a',
                      fill: '#999',
                    })
                  )
                ),
                'Viewports addon in the toolbar'
              )
            )
          );
        };
      Page.__docgenInfo = { description: '', methods: [], displayName: 'Page' };
      const Page_stories = {
        title: 'Example/Page',
        component: Page,
        parameters: { layout: 'fullscreen' },
      };
      var _play,
        LoggedOut = {},
        LoggedIn = {
          play:
            ((_play = (0, asyncToGenerator.A)(
              regenerator_default().mark(function _callee(_ref) {
                var canvasElement, canvas, loginButton, logoutButton;
                return regenerator_default().wrap(function _callee$(_context) {
                  for (;;)
                    switch ((_context.prev = _context.next)) {
                      case 0:
                        return (
                          (canvasElement = _ref.canvasElement),
                          (canvas = (0, dist.ux)(canvasElement)),
                          (loginButton = canvas.getByRole('button', {
                            name: /Log in/i,
                          })),
                          (_context.next = 5),
                          (0, dist.E3)(loginButton).toBeInTheDocument()
                        );
                      case 5:
                        return (_context.next = 7), dist.Q4.click(loginButton);
                      case 7:
                        return (
                          (_context.next = 9),
                          (0, dist.E3)(loginButton).not.toBeInTheDocument()
                        );
                      case 9:
                        return (
                          (logoutButton = canvas.getByRole('button', {
                            name: /Log out/i,
                          })),
                          (_context.next = 12),
                          (0, dist.E3)(logoutButton).toBeInTheDocument()
                        );
                      case 12:
                      case 'end':
                        return _context.stop();
                    }
                }, _callee);
              })
            )),
            function play(_x) {
              return _play.apply(this, arguments);
            }),
        };
      (LoggedOut.parameters = {
        ...LoggedOut.parameters,
        docs: {
          ...LoggedOut.parameters?.docs,
          source: {
            originalSource: '{}',
            ...LoggedOut.parameters?.docs?.source,
          },
        },
      }),
        (LoggedIn.parameters = {
          ...LoggedIn.parameters,
          docs: {
            ...LoggedIn.parameters?.docs,
            source: {
              originalSource:
                "{\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const loginButton = canvas.getByRole('button', {\n      name: /Log in/i\n    });\n    await expect(loginButton).toBeInTheDocument();\n    await userEvent.click(loginButton);\n    await expect(loginButton).not.toBeInTheDocument();\n    const logoutButton = canvas.getByRole('button', {\n      name: /Log out/i\n    });\n    await expect(logoutButton).toBeInTheDocument();\n  }\n}",
              ...LoggedIn.parameters?.docs?.source,
            },
          },
        });
      const __namedExportsOrder = ['LoggedOut', 'LoggedIn'];
    },
    './stories/Button.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { $: () => Button });
      var esm_extends = __webpack_require__(
          './node_modules/next/dist/compiled/@babel/runtime/helpers/esm/extends.js'
        ),
        objectWithoutProperties = __webpack_require__(
          './node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        style = __webpack_require__('./node_modules/styled-jsx/style.js'),
        style_default = __webpack_require__.n(style),
        react = __webpack_require__(
          './node_modules/next/dist/compiled/react/index.js'
        ),
        injectStylesIntoStyleTag = __webpack_require__(
          './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag
        ),
        styleDomAPI = __webpack_require__(
          './node_modules/style-loader/dist/runtime/styleDomAPI.js'
        ),
        styleDomAPI_default = __webpack_require__.n(styleDomAPI),
        insertBySelector = __webpack_require__(
          './node_modules/style-loader/dist/runtime/insertBySelector.js'
        ),
        insertBySelector_default = __webpack_require__.n(insertBySelector),
        setAttributesWithoutAttributes = __webpack_require__(
          './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js'
        ),
        setAttributesWithoutAttributes_default = __webpack_require__.n(
          setAttributesWithoutAttributes
        ),
        insertStyleElement = __webpack_require__(
          './node_modules/style-loader/dist/runtime/insertStyleElement.js'
        ),
        insertStyleElement_default = __webpack_require__.n(insertStyleElement),
        styleTagTransform = __webpack_require__(
          './node_modules/style-loader/dist/runtime/styleTagTransform.js'
        ),
        styleTagTransform_default = __webpack_require__.n(styleTagTransform),
        cjs_js_stories_button = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/@storybook/nextjs/node_modules/postcss-loader/dist/cjs.js!./stories/button.css'
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, 'head')),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(cjs_js_stories_button.A, options);
      cjs_js_stories_button.A &&
        cjs_js_stories_button.A.locals &&
        cjs_js_stories_button.A.locals;
      var _excluded = ['primary', 'size', 'backgroundColor', 'label'],
        __jsx = react.createElement,
        Button = function Button(_ref) {
          var _ref$primary = _ref.primary,
            primary = void 0 !== _ref$primary && _ref$primary,
            _ref$size = _ref.size,
            size = void 0 === _ref$size ? 'medium' : _ref$size,
            backgroundColor = _ref.backgroundColor,
            label = _ref.label,
            props = (0, objectWithoutProperties.A)(_ref, _excluded),
            mode = primary
              ? 'storybook-button--primary'
              : 'storybook-button--secondary';
          return __jsx(
            'button',
            (0, esm_extends.A)({ type: 'button' }, props, {
              className:
                style_default().dynamic([['2054451296', [backgroundColor]]]) +
                ' ' +
                ((props && null != props.className && props.className) ||
                  [
                    'storybook-button',
                    'storybook-button--'.concat(size),
                    mode,
                  ].join(' ') ||
                  ''),
            }),
            label,
            __jsx(
              style_default(),
              { id: '2054451296', dynamic: [backgroundColor] },
              [
                'button.__jsx-style-dynamic-selector{background-color:'.concat(
                  backgroundColor,
                  ';}'
                ),
              ]
            )
          );
        };
      Button.__docgenInfo = {
        description: 'Primary UI component for user interaction',
        methods: [],
        displayName: 'Button',
        props: {
          primary: {
            required: !1,
            tsType: { name: 'boolean' },
            description: 'Is this the principal call to action on the page?',
            defaultValue: { value: 'false', computed: !1 },
          },
          backgroundColor: {
            required: !1,
            tsType: { name: 'string' },
            description: 'What background color to use',
          },
          size: {
            required: !1,
            tsType: {
              name: 'union',
              raw: "'small' | 'medium' | 'large'",
              elements: [
                { name: 'literal', value: "'small'" },
                { name: 'literal', value: "'medium'" },
                { name: 'literal', value: "'large'" },
              ],
            },
            description: 'How large should the button be?',
            defaultValue: { value: "'medium'", computed: !1 },
          },
          label: {
            required: !0,
            tsType: { name: 'string' },
            description: 'Button contents',
          },
          onClick: {
            required: !1,
            tsType: {
              name: 'signature',
              type: 'function',
              raw: '() => void',
              signature: { arguments: [], return: { name: 'void' } },
            },
            description: 'Optional click handler',
          },
        },
      };
    },
    './stories/Header.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { Y: () => Header });
      var react = __webpack_require__(
          './node_modules/next/dist/compiled/react/index.js'
        ),
        Button = __webpack_require__('./stories/Button.tsx'),
        injectStylesIntoStyleTag = __webpack_require__(
          './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag
        ),
        styleDomAPI = __webpack_require__(
          './node_modules/style-loader/dist/runtime/styleDomAPI.js'
        ),
        styleDomAPI_default = __webpack_require__.n(styleDomAPI),
        insertBySelector = __webpack_require__(
          './node_modules/style-loader/dist/runtime/insertBySelector.js'
        ),
        insertBySelector_default = __webpack_require__.n(insertBySelector),
        setAttributesWithoutAttributes = __webpack_require__(
          './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js'
        ),
        setAttributesWithoutAttributes_default = __webpack_require__.n(
          setAttributesWithoutAttributes
        ),
        insertStyleElement = __webpack_require__(
          './node_modules/style-loader/dist/runtime/insertStyleElement.js'
        ),
        insertStyleElement_default = __webpack_require__.n(insertStyleElement),
        styleTagTransform = __webpack_require__(
          './node_modules/style-loader/dist/runtime/styleTagTransform.js'
        ),
        styleTagTransform_default = __webpack_require__.n(styleTagTransform),
        header = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/@storybook/nextjs/node_modules/postcss-loader/dist/cjs.js!./stories/header.css'
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, 'head')),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(header.A, options);
      header.A && header.A.locals && header.A.locals;
      var __jsx = react.createElement,
        Header = function Header(_ref) {
          var user = _ref.user,
            onLogin = _ref.onLogin,
            onLogout = _ref.onLogout,
            onCreateAccount = _ref.onCreateAccount;
          return __jsx(
            'header',
            null,
            __jsx(
              'div',
              { className: 'storybook-header' },
              __jsx(
                'div',
                null,
                __jsx(
                  'svg',
                  {
                    width: '32',
                    height: '32',
                    viewBox: '0 0 32 32',
                    xmlns: 'http://www.w3.org/2000/svg',
                  },
                  __jsx(
                    'g',
                    { fill: 'none', fillRule: 'evenodd' },
                    __jsx('path', {
                      d: 'M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z',
                      fill: '#FFF',
                    }),
                    __jsx('path', {
                      d: 'M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z',
                      fill: '#555AB9',
                    }),
                    __jsx('path', {
                      d: 'M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z',
                      fill: '#91BAF8',
                    })
                  )
                ),
                __jsx('h1', null, 'Acme')
              ),
              __jsx(
                'div',
                null,
                user
                  ? __jsx(
                      react.Fragment,
                      null,
                      __jsx(
                        'span',
                        { className: 'welcome' },
                        'Welcome, ',
                        __jsx('b', null, user.name),
                        '!'
                      ),
                      __jsx(Button.$, {
                        size: 'small',
                        onClick: onLogout,
                        label: 'Log out',
                      })
                    )
                  : __jsx(
                      react.Fragment,
                      null,
                      __jsx(Button.$, {
                        size: 'small',
                        onClick: onLogin,
                        label: 'Log in',
                      }),
                      __jsx(Button.$, {
                        primary: !0,
                        size: 'small',
                        onClick: onCreateAccount,
                        label: 'Sign up',
                      })
                    )
              )
            )
          );
        };
      Header.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Header',
        props: {
          user: {
            required: !1,
            tsType: {
              name: 'signature',
              type: 'object',
              raw: '{\n  name: string;\n}',
              signature: {
                properties: [
                  { key: 'name', value: { name: 'string', required: !0 } },
                ],
              },
            },
            description: '',
          },
          onLogin: {
            required: !1,
            tsType: {
              name: 'signature',
              type: 'function',
              raw: '() => void',
              signature: { arguments: [], return: { name: 'void' } },
            },
            description: '',
          },
          onLogout: {
            required: !1,
            tsType: {
              name: 'signature',
              type: 'function',
              raw: '() => void',
              signature: { arguments: [], return: { name: 'void' } },
            },
            description: '',
          },
          onCreateAccount: {
            required: !1,
            tsType: {
              name: 'signature',
              type: 'function',
              raw: '() => void',
              signature: { arguments: [], return: { name: 'void' } },
            },
            description: '',
          },
        },
      };
    },
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/@storybook/nextjs/node_modules/postcss-loader/dist/cjs.js!./stories/button.css':
      (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/sourceMaps.js'
            ),
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/api.js'
            ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          )()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".storybook-button {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n}\n.storybook-button--primary {\n  color: white;\n  background-color: #1ea7fd;\n}\n.storybook-button--secondary {\n  color: #333;\n  background-color: transparent;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n}\n.storybook-button--small {\n  font-size: 12px;\n  padding: 10px 16px;\n}\n.storybook-button--medium {\n  font-size: 14px;\n  padding: 11px 20px;\n}\n.storybook-button--large {\n  font-size: 16px;\n  padding: 12px 24px;\n}\n",
          '',
          {
            version: 3,
            sources: ['webpack://./stories/button.css'],
            names: [],
            mappings:
              'AAAA;EACE,0EAA0E;EAC1E,gBAAgB;EAChB,SAAS;EACT,kBAAkB;EAClB,eAAe;EACf,qBAAqB;EACrB,cAAc;AAChB;AACA;EACE,YAAY;EACZ,yBAAyB;AAC3B;AACA;EACE,WAAW;EACX,6BAA6B;EAC7B,qDAAqD;AACvD;AACA;EACE,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,kBAAkB;AACpB',
            sourcesContent: [
              ".storybook-button {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n}\n.storybook-button--primary {\n  color: white;\n  background-color: #1ea7fd;\n}\n.storybook-button--secondary {\n  color: #333;\n  background-color: transparent;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n}\n.storybook-button--small {\n  font-size: 12px;\n  padding: 10px 16px;\n}\n.storybook-button--medium {\n  font-size: 14px;\n  padding: 11px 20px;\n}\n.storybook-button--large {\n  font-size: 16px;\n  padding: 12px 24px;\n}\n",
            ],
            sourceRoot: '',
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/@storybook/nextjs/node_modules/postcss-loader/dist/cjs.js!./stories/header.css':
      (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/sourceMaps.js'
            ),
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/api.js'
            ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          )()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".storybook-header {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 15px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.storybook-header svg {\n  display: inline-block;\n  vertical-align: top;\n}\n\n.storybook-header h1 {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 1;\n  margin: 6px 0 6px 10px;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.storybook-header button + button {\n  margin-left: 10px;\n}\n\n.storybook-header .welcome {\n  color: #333;\n  font-size: 14px;\n  margin-right: 10px;\n}\n",
          '',
          {
            version: 3,
            sources: ['webpack://./stories/header.css'],
            names: [],
            mappings:
              'AAAA;EACE,0EAA0E;EAC1E,2CAA2C;EAC3C,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,cAAc;EACd,sBAAsB;EACtB,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,eAAe;EACf,kBAAkB;AACpB',
            sourcesContent: [
              ".storybook-header {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 15px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.storybook-header svg {\n  display: inline-block;\n  vertical-align: top;\n}\n\n.storybook-header h1 {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 1;\n  margin: 6px 0 6px 10px;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.storybook-header button + button {\n  margin-left: 10px;\n}\n\n.storybook-header .welcome {\n  color: #333;\n  font-size: 14px;\n  margin-right: 10px;\n}\n",
            ],
            sourceRoot: '',
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/@storybook/nextjs/node_modules/postcss-loader/dist/cjs.js!./stories/page.css':
      (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/sourceMaps.js'
            ),
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/api.js'
            ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          )()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".storybook-page {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 24px;\n  padding: 48px 20px;\n  margin: 0 auto;\n  max-width: 600px;\n  color: #333;\n}\n\n.storybook-page h2 {\n  font-weight: 700;\n  font-size: 32px;\n  line-height: 1;\n  margin: 0 0 4px;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.storybook-page p {\n  margin: 1em 0;\n}\n\n.storybook-page a {\n  text-decoration: none;\n  color: #1ea7fd;\n}\n\n.storybook-page ul {\n  padding-left: 30px;\n  margin: 1em 0;\n}\n\n.storybook-page li {\n  margin-bottom: 8px;\n}\n\n.storybook-page .tip {\n  display: inline-block;\n  border-radius: 1em;\n  font-size: 11px;\n  line-height: 12px;\n  font-weight: 700;\n  background: #e7fdd8;\n  color: #66bf3c;\n  padding: 4px 12px;\n  margin-right: 10px;\n  vertical-align: top;\n}\n\n.storybook-page .tip-wrapper {\n  font-size: 13px;\n  line-height: 20px;\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n\n.storybook-page .tip-wrapper svg {\n  display: inline-block;\n  height: 12px;\n  width: 12px;\n  margin-right: 4px;\n  vertical-align: top;\n  margin-top: 3px;\n}\n\n.storybook-page .tip-wrapper svg path {\n  fill: #1ea7fd;\n}\n",
          '',
          {
            version: 3,
            sources: ['webpack://./stories/page.css'],
            names: [],
            mappings:
              'AAAA;EACE,0EAA0E;EAC1E,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,cAAc;EACd,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,cAAc;EACd,eAAe;EACf,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;EACnB,cAAc;EACd,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,YAAY;EACZ,WAAW;EACX,iBAAiB;EACjB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,aAAa;AACf',
            sourcesContent: [
              ".storybook-page {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 24px;\n  padding: 48px 20px;\n  margin: 0 auto;\n  max-width: 600px;\n  color: #333;\n}\n\n.storybook-page h2 {\n  font-weight: 700;\n  font-size: 32px;\n  line-height: 1;\n  margin: 0 0 4px;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.storybook-page p {\n  margin: 1em 0;\n}\n\n.storybook-page a {\n  text-decoration: none;\n  color: #1ea7fd;\n}\n\n.storybook-page ul {\n  padding-left: 30px;\n  margin: 1em 0;\n}\n\n.storybook-page li {\n  margin-bottom: 8px;\n}\n\n.storybook-page .tip {\n  display: inline-block;\n  border-radius: 1em;\n  font-size: 11px;\n  line-height: 12px;\n  font-weight: 700;\n  background: #e7fdd8;\n  color: #66bf3c;\n  padding: 4px 12px;\n  margin-right: 10px;\n  vertical-align: top;\n}\n\n.storybook-page .tip-wrapper {\n  font-size: 13px;\n  line-height: 20px;\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n\n.storybook-page .tip-wrapper svg {\n  display: inline-block;\n  height: 12px;\n  width: 12px;\n  margin-right: 4px;\n  vertical-align: top;\n  margin-top: 3px;\n}\n\n.storybook-page .tip-wrapper svg path {\n  fill: #1ea7fd;\n}\n",
            ],
            sourceRoot: '',
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
  },
]);
