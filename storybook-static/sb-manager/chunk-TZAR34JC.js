import {
  _extends,
  _objectWithoutPropertiesLoose,
  logger,
  newStyled,
  require_react,
  require_react_dom,
  scope,
} from './chunk-UOBNU442.js';
import {
  __commonJS2 as __commonJS,
  __toESM,
  __toESM2,
  require_memoizerific,
} from './chunk-XP3HGWTR.js';
var require_markdown = __commonJS({
  '../../node_modules/refractor/lang/markdown.js'(exports, module) {
    (module.exports = markdown),
      (markdown.displayName = 'markdown'),
      (markdown.aliases = ['md']);
    function markdown(Prism) {
      (function (Prism2) {
        var inner = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
        function createInline(pattern) {
          return (
            (pattern = pattern.replace(/<inner>/g, function () {
              return inner;
            })),
            RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + '(?:' + pattern + ')')
          );
        }
        var tableCell =
            /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,
          tableRow =
            /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(
              /__/g,
              function () {
                return tableCell;
              }
            ),
          tableLine =
            /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/
              .source;
        (Prism2.languages.markdown = Prism2.languages.extend('markup', {})),
          Prism2.languages.insertBefore('markdown', 'prolog', {
            'front-matter-block': {
              pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
              lookbehind: !0,
              greedy: !0,
              inside: {
                punctuation: /^---|---$/,
                'front-matter': {
                  pattern: /\S+(?:\s+\S+)*/,
                  alias: ['yaml', 'language-yaml'],
                  inside: Prism2.languages.yaml,
                },
              },
            },
            blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: 'punctuation' },
            table: {
              pattern: RegExp(
                '^' + tableRow + tableLine + '(?:' + tableRow + ')*',
                'm'
              ),
              inside: {
                'table-data-rows': {
                  pattern: RegExp(
                    '^(' + tableRow + tableLine + ')(?:' + tableRow + ')*$'
                  ),
                  lookbehind: !0,
                  inside: {
                    'table-data': {
                      pattern: RegExp(tableCell),
                      inside: Prism2.languages.markdown,
                    },
                    punctuation: /\|/,
                  },
                },
                'table-line': {
                  pattern: RegExp('^(' + tableRow + ')' + tableLine + '$'),
                  lookbehind: !0,
                  inside: { punctuation: /\||:?-{3,}:?/ },
                },
                'table-header-row': {
                  pattern: RegExp('^' + tableRow + '$'),
                  inside: {
                    'table-header': {
                      pattern: RegExp(tableCell),
                      alias: 'important',
                      inside: Prism2.languages.markdown,
                    },
                    punctuation: /\|/,
                  },
                },
              },
            },
            code: [
              {
                pattern:
                  /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
                lookbehind: !0,
                alias: 'keyword',
              },
              {
                pattern: /^```[\s\S]*?^```$/m,
                greedy: !0,
                inside: {
                  'code-block': {
                    pattern:
                      /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
                    lookbehind: !0,
                  },
                  'code-language': { pattern: /^(```).+/, lookbehind: !0 },
                  punctuation: /```/,
                },
              },
            ],
            title: [
              {
                pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
                alias: 'important',
                inside: { punctuation: /==+$|--+$/ },
              },
              {
                pattern: /(^\s*)#.+/m,
                lookbehind: !0,
                alias: 'important',
                inside: { punctuation: /^#+|#+$/ },
              },
            ],
            hr: {
              pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
              lookbehind: !0,
              alias: 'punctuation',
            },
            list: {
              pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
              lookbehind: !0,
              alias: 'punctuation',
            },
            'url-reference': {
              pattern:
                /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
              inside: {
                variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
                string:
                  /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                punctuation: /^[\[\]!:]|[<>]/,
              },
              alias: 'url',
            },
            bold: {
              pattern: createInline(
                /\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/
                  .source
              ),
              lookbehind: !0,
              greedy: !0,
              inside: {
                content: {
                  pattern: /(^..)[\s\S]+(?=..$)/,
                  lookbehind: !0,
                  inside: {},
                },
                punctuation: /\*\*|__/,
              },
            },
            italic: {
              pattern: createInline(
                /\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/
                  .source
              ),
              lookbehind: !0,
              greedy: !0,
              inside: {
                content: {
                  pattern: /(^.)[\s\S]+(?=.$)/,
                  lookbehind: !0,
                  inside: {},
                },
                punctuation: /[*_]/,
              },
            },
            strike: {
              pattern: createInline(/(~~?)(?:(?!~)<inner>)+\2/.source),
              lookbehind: !0,
              greedy: !0,
              inside: {
                content: {
                  pattern: /(^~~?)[\s\S]+(?=\1$)/,
                  lookbehind: !0,
                  inside: {},
                },
                punctuation: /~~?/,
              },
            },
            'code-snippet': {
              pattern:
                /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
              lookbehind: !0,
              greedy: !0,
              alias: ['code', 'keyword'],
            },
            url: {
              pattern: createInline(
                /!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/
                  .source
              ),
              lookbehind: !0,
              greedy: !0,
              inside: {
                operator: /^!/,
                content: {
                  pattern: /(^\[)[^\]]+(?=\])/,
                  lookbehind: !0,
                  inside: {},
                },
                variable: {
                  pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
                  lookbehind: !0,
                },
                url: { pattern: /(^\]\()[^\s)]+/, lookbehind: !0 },
                string: {
                  pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
                  lookbehind: !0,
                },
              },
            },
          }),
          ['url', 'bold', 'italic', 'strike'].forEach(function (token) {
            ['url', 'bold', 'italic', 'strike', 'code-snippet'].forEach(
              function (inside) {
                token !== inside &&
                  (Prism2.languages.markdown[token].inside.content.inside[
                    inside
                  ] = Prism2.languages.markdown[inside]);
              }
            );
          }),
          Prism2.hooks.add('after-tokenize', function (env) {
            if (env.language !== 'markdown' && env.language !== 'md') return;
            function walkTokens(tokens) {
              if (!(!tokens || typeof tokens == 'string'))
                for (var i = 0, l = tokens.length; i < l; i++) {
                  var token = tokens[i];
                  if (token.type !== 'code') {
                    walkTokens(token.content);
                    continue;
                  }
                  var codeLang = token.content[1],
                    codeBlock = token.content[3];
                  if (
                    codeLang &&
                    codeBlock &&
                    codeLang.type === 'code-language' &&
                    codeBlock.type === 'code-block' &&
                    typeof codeLang.content == 'string'
                  ) {
                    var lang = codeLang.content
                      .replace(/\b#/g, 'sharp')
                      .replace(/\b\+\+/g, 'pp');
                    lang = (/[a-z][\w-]*/i.exec(lang) || [''])[0].toLowerCase();
                    var alias = 'language-' + lang;
                    codeBlock.alias
                      ? typeof codeBlock.alias == 'string'
                        ? (codeBlock.alias = [codeBlock.alias, alias])
                        : codeBlock.alias.push(alias)
                      : (codeBlock.alias = [alias]);
                  }
                }
            }
            walkTokens(env.tokens);
          }),
          Prism2.hooks.add('wrap', function (env) {
            if (env.type === 'code-block') {
              for (
                var codeLang = '', i = 0, l = env.classes.length;
                i < l;
                i++
              ) {
                var cls = env.classes[i],
                  match = /language-(.+)/.exec(cls);
                if (match) {
                  codeLang = match[1];
                  break;
                }
              }
              var grammar = Prism2.languages[codeLang];
              if (grammar)
                env.content = Prism2.highlight(
                  textContent(env.content.value),
                  grammar,
                  codeLang
                );
              else if (
                codeLang &&
                codeLang !== 'none' &&
                Prism2.plugins.autoloader
              ) {
                var id =
                  'md-' +
                  new Date().valueOf() +
                  '-' +
                  Math.floor(Math.random() * 1e16);
                (env.attributes.id = id),
                  Prism2.plugins.autoloader.loadLanguages(
                    codeLang,
                    function () {
                      var ele = document.getElementById(id);
                      ele &&
                        (ele.innerHTML = Prism2.highlight(
                          ele.textContent,
                          Prism2.languages[codeLang],
                          codeLang
                        ));
                    }
                  );
              }
            }
          });
        var tagPattern = RegExp(
            Prism2.languages.markup.tag.pattern.source,
            'gi'
          ),
          KNOWN_ENTITY_NAMES = { amp: '&', lt: '<', gt: '>', quot: '"' },
          fromCodePoint = String.fromCodePoint || String.fromCharCode;
        function textContent(html) {
          var text = html.replace(tagPattern, '');
          return (
            (text = text.replace(
              /&(\w{1,8}|#x?[\da-f]{1,8});/gi,
              function (m, code) {
                if (((code = code.toLowerCase()), code[0] === '#')) {
                  var value;
                  return (
                    code[1] === 'x'
                      ? (value = parseInt(code.slice(2), 16))
                      : (value = Number(code.slice(1))),
                    fromCodePoint(value)
                  );
                } else {
                  var known = KNOWN_ENTITY_NAMES[code];
                  return known || m;
                }
              }
            )),
            text
          );
        }
        Prism2.languages.md = Prism2.languages.markdown;
      })(Prism);
    }
  },
});
var require_yaml = __commonJS({
  '../../node_modules/refractor/lang/yaml.js'(exports, module) {
    (module.exports = yaml),
      (yaml.displayName = 'yaml'),
      (yaml.aliases = ['yml']);
    function yaml(Prism) {
      (function (Prism2) {
        var anchorOrAlias = /[*&][^\s[\]{},]+/,
          tag =
            /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
          properties =
            '(?:' +
            tag.source +
            '(?:[ 	]+' +
            anchorOrAlias.source +
            ')?|' +
            anchorOrAlias.source +
            '(?:[ 	]+' +
            tag.source +
            ')?)',
          plainKey =
            /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(
              /<PLAIN>/g,
              function () {
                return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/
                  .source;
              }
            ),
          string = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
        function createValuePattern(value, flags) {
          flags = (flags || '').replace(/m/g, '') + 'm';
          var pattern =
            /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source
              .replace(/<<prop>>/g, function () {
                return properties;
              })
              .replace(/<<value>>/g, function () {
                return value;
              });
          return RegExp(pattern, flags);
        }
        (Prism2.languages.yaml = {
          scalar: {
            pattern: RegExp(
              /([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(
                /<<prop>>/g,
                function () {
                  return properties;
                }
              )
            ),
            lookbehind: !0,
            alias: 'string',
          },
          comment: /#.*/,
          key: {
            pattern: RegExp(
              /((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source
                .replace(/<<prop>>/g, function () {
                  return properties;
                })
                .replace(/<<key>>/g, function () {
                  return '(?:' + plainKey + '|' + string + ')';
                })
            ),
            lookbehind: !0,
            greedy: !0,
            alias: 'atrule',
          },
          directive: {
            pattern: /(^[ \t]*)%.+/m,
            lookbehind: !0,
            alias: 'important',
          },
          datetime: {
            pattern: createValuePattern(
              /\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/
                .source
            ),
            lookbehind: !0,
            alias: 'number',
          },
          boolean: {
            pattern: createValuePattern(/false|true/.source, 'i'),
            lookbehind: !0,
            alias: 'important',
          },
          null: {
            pattern: createValuePattern(/null|~/.source, 'i'),
            lookbehind: !0,
            alias: 'important',
          },
          string: {
            pattern: createValuePattern(string),
            lookbehind: !0,
            greedy: !0,
          },
          number: {
            pattern: createValuePattern(
              /[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/
                .source,
              'i'
            ),
            lookbehind: !0,
          },
          tag,
          important: anchorOrAlias,
          punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
        }),
          (Prism2.languages.yml = Prism2.languages.yaml);
      })(Prism);
    }
  },
});
var require_typescript = __commonJS({
  '../../node_modules/refractor/lang/typescript.js'(exports, module) {
    (module.exports = typescript),
      (typescript.displayName = 'typescript'),
      (typescript.aliases = ['ts']);
    function typescript(Prism) {
      (function (Prism2) {
        (Prism2.languages.typescript = Prism2.languages.extend('javascript', {
          'class-name': {
            pattern:
              /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
            lookbehind: !0,
            greedy: !0,
            inside: null,
          },
          builtin:
            /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/,
        })),
          Prism2.languages.typescript.keyword.push(
            /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
            /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
            /\btype\b(?=\s*(?:[\{*]|$))/
          ),
          delete Prism2.languages.typescript.parameter,
          delete Prism2.languages.typescript['literal-property'];
        var typeInside = Prism2.languages.extend('typescript', {});
        delete typeInside['class-name'],
          (Prism2.languages.typescript['class-name'].inside = typeInside),
          Prism2.languages.insertBefore('typescript', 'function', {
            decorator: {
              pattern: /@[$\w\xA0-\uFFFF]+/,
              inside: {
                at: { pattern: /^@/, alias: 'operator' },
                function: /^[\s\S]+/,
              },
            },
            'generic-function': {
              pattern:
                /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
              greedy: !0,
              inside: {
                function:
                  /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
                generic: {
                  pattern: /<[\s\S]+/,
                  alias: 'class-name',
                  inside: typeInside,
                },
              },
            },
          }),
          (Prism2.languages.ts = Prism2.languages.typescript);
      })(Prism);
    }
  },
});
var require_jsx = __commonJS({
  '../../node_modules/refractor/lang/jsx.js'(exports, module) {
    (module.exports = jsx), (jsx.displayName = 'jsx'), (jsx.aliases = []);
    function jsx(Prism) {
      (function (Prism2) {
        var javascript = Prism2.util.clone(Prism2.languages.javascript),
          space = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,
          braces = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,
          spread = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
        function re(source, flags) {
          return (
            (source = source
              .replace(/<S>/g, function () {
                return space;
              })
              .replace(/<BRACES>/g, function () {
                return braces;
              })
              .replace(/<SPREAD>/g, function () {
                return spread;
              })),
            RegExp(source, flags)
          );
        }
        (spread = re(spread).source),
          (Prism2.languages.jsx = Prism2.languages.extend(
            'markup',
            javascript
          )),
          (Prism2.languages.jsx.tag.pattern = re(
            /<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/
              .source
          )),
          (Prism2.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/),
          (Prism2.languages.jsx.tag.inside['attr-value'].pattern =
            /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/),
          (Prism2.languages.jsx.tag.inside.tag.inside['class-name'] =
            /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
          (Prism2.languages.jsx.tag.inside.comment = javascript.comment),
          Prism2.languages.insertBefore(
            'inside',
            'attr-name',
            {
              spread: {
                pattern: re(/<SPREAD>/.source),
                inside: Prism2.languages.jsx,
              },
            },
            Prism2.languages.jsx.tag
          ),
          Prism2.languages.insertBefore(
            'inside',
            'special-attr',
            {
              script: {
                pattern: re(/=<BRACES>/.source),
                alias: 'language-javascript',
                inside: {
                  'script-punctuation': {
                    pattern: /^=(?=\{)/,
                    alias: 'punctuation',
                  },
                  rest: Prism2.languages.jsx,
                },
              },
            },
            Prism2.languages.jsx.tag
          );
        var stringifyToken = function (token) {
            return token
              ? typeof token == 'string'
                ? token
                : typeof token.content == 'string'
                ? token.content
                : token.content.map(stringifyToken).join('')
              : '';
          },
          walkTokens = function (tokens) {
            for (var openedTags = [], i = 0; i < tokens.length; i++) {
              var token = tokens[i],
                notTagNorBrace = !1;
              if (
                (typeof token != 'string' &&
                  (token.type === 'tag' &&
                  token.content[0] &&
                  token.content[0].type === 'tag'
                    ? token.content[0].content[0].content === '</'
                      ? openedTags.length > 0 &&
                        openedTags[openedTags.length - 1].tagName ===
                          stringifyToken(token.content[0].content[1]) &&
                        openedTags.pop()
                      : token.content[token.content.length - 1].content ===
                          '/>' ||
                        openedTags.push({
                          tagName: stringifyToken(token.content[0].content[1]),
                          openedBraces: 0,
                        })
                    : openedTags.length > 0 &&
                      token.type === 'punctuation' &&
                      token.content === '{'
                    ? openedTags[openedTags.length - 1].openedBraces++
                    : openedTags.length > 0 &&
                      openedTags[openedTags.length - 1].openedBraces > 0 &&
                      token.type === 'punctuation' &&
                      token.content === '}'
                    ? openedTags[openedTags.length - 1].openedBraces--
                    : (notTagNorBrace = !0)),
                (notTagNorBrace || typeof token == 'string') &&
                  openedTags.length > 0 &&
                  openedTags[openedTags.length - 1].openedBraces === 0)
              ) {
                var plainText = stringifyToken(token);
                i < tokens.length - 1 &&
                  (typeof tokens[i + 1] == 'string' ||
                    tokens[i + 1].type === 'plain-text') &&
                  ((plainText += stringifyToken(tokens[i + 1])),
                  tokens.splice(i + 1, 1)),
                  i > 0 &&
                    (typeof tokens[i - 1] == 'string' ||
                      tokens[i - 1].type === 'plain-text') &&
                    ((plainText = stringifyToken(tokens[i - 1]) + plainText),
                    tokens.splice(i - 1, 1),
                    i--),
                  (tokens[i] = new Prism2.Token(
                    'plain-text',
                    plainText,
                    null,
                    plainText
                  ));
              }
              token.content &&
                typeof token.content != 'string' &&
                walkTokens(token.content);
            }
          };
        Prism2.hooks.add('after-tokenize', function (env) {
          (env.language !== 'jsx' && env.language !== 'tsx') ||
            walkTokens(env.tokens);
        });
      })(Prism);
    }
  },
});
var require_tsx = __commonJS({
  '../../node_modules/refractor/lang/tsx.js'(exports, module) {
    var refractorJsx = require_jsx(),
      refractorTypescript = require_typescript();
    (module.exports = tsx), (tsx.displayName = 'tsx'), (tsx.aliases = []);
    function tsx(Prism) {
      Prism.register(refractorJsx),
        Prism.register(refractorTypescript),
        (function (Prism2) {
          var typescript = Prism2.util.clone(Prism2.languages.typescript);
          (Prism2.languages.tsx = Prism2.languages.extend('jsx', typescript)),
            delete Prism2.languages.tsx.parameter,
            delete Prism2.languages.tsx['literal-property'];
          var tag = Prism2.languages.tsx.tag;
          (tag.pattern = RegExp(
            /(^|[^\w$]|(?=<\/))/.source + '(?:' + tag.pattern.source + ')',
            tag.pattern.flags
          )),
            (tag.lookbehind = !0);
        })(Prism);
    }
  },
});
var require_clike = __commonJS({
  '../../node_modules/refractor/lang/clike.js'(exports, module) {
    (module.exports = clike),
      (clike.displayName = 'clike'),
      (clike.aliases = []);
    function clike(Prism) {
      Prism.languages.clike = {
        comment: [
          {
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
            lookbehind: !0,
            greedy: !0,
          },
          { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
        ],
        string: {
          pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
          greedy: !0,
        },
        'class-name': {
          pattern:
            /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
          lookbehind: !0,
          inside: { punctuation: /[.\\]/ },
        },
        keyword:
          /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
        boolean: /\b(?:false|true)\b/,
        function: /\b\w+(?=\()/,
        number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
        operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
        punctuation: /[{}[\];(),.:]/,
      };
    }
  },
});
var require_javascript = __commonJS({
  '../../node_modules/refractor/lang/javascript.js'(exports, module) {
    (module.exports = javascript),
      (javascript.displayName = 'javascript'),
      (javascript.aliases = ['js']);
    function javascript(Prism) {
      (Prism.languages.javascript = Prism.languages.extend('clike', {
        'class-name': [
          Prism.languages.clike['class-name'],
          {
            pattern:
              /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
            lookbehind: !0,
          },
        ],
        keyword: [
          { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
          {
            pattern:
              /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
            lookbehind: !0,
          },
        ],
        function:
          /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
        number: {
          pattern: RegExp(
            /(^|[^\w$])/.source +
              '(?:' +
              (/NaN|Infinity/.source +
                '|' +
                /0[bB][01]+(?:_[01]+)*n?/.source +
                '|' +
                /0[oO][0-7]+(?:_[0-7]+)*n?/.source +
                '|' +
                /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
                '|' +
                /\d+(?:_\d+)*n/.source +
                '|' +
                /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/
                  .source) +
              ')' +
              /(?![\w$])/.source
          ),
          lookbehind: !0,
        },
        operator:
          /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
      })),
        (Prism.languages.javascript['class-name'][0].pattern =
          /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
        Prism.languages.insertBefore('javascript', 'keyword', {
          regex: {
            pattern:
              /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
            lookbehind: !0,
            greedy: !0,
            inside: {
              'regex-source': {
                pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                lookbehind: !0,
                alias: 'language-regex',
                inside: Prism.languages.regex,
              },
              'regex-delimiter': /^\/|\/$/,
              'regex-flags': /^[a-z]+$/,
            },
          },
          'function-variable': {
            pattern:
              /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
            alias: 'function',
          },
          parameter: [
            {
              pattern:
                /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
              lookbehind: !0,
              inside: Prism.languages.javascript,
            },
            {
              pattern:
                /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
              lookbehind: !0,
              inside: Prism.languages.javascript,
            },
            {
              pattern:
                /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
              lookbehind: !0,
              inside: Prism.languages.javascript,
            },
            {
              pattern:
                /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
              lookbehind: !0,
              inside: Prism.languages.javascript,
            },
          ],
          constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
        }),
        Prism.languages.insertBefore('javascript', 'string', {
          hashbang: { pattern: /^#!.*/, greedy: !0, alias: 'comment' },
          'template-string': {
            pattern:
              /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
            greedy: !0,
            inside: {
              'template-punctuation': { pattern: /^`|`$/, alias: 'string' },
              interpolation: {
                pattern:
                  /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                lookbehind: !0,
                inside: {
                  'interpolation-punctuation': {
                    pattern: /^\$\{|\}$/,
                    alias: 'punctuation',
                  },
                  rest: Prism.languages.javascript,
                },
              },
              string: /[\s\S]+/,
            },
          },
          'string-property': {
            pattern:
              /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
            lookbehind: !0,
            greedy: !0,
            alias: 'property',
          },
        }),
        Prism.languages.insertBefore('javascript', 'operator', {
          'literal-property': {
            pattern:
              /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
            lookbehind: !0,
            alias: 'property',
          },
        }),
        Prism.languages.markup &&
          (Prism.languages.markup.tag.addInlined('script', 'javascript'),
          Prism.languages.markup.tag.addAttribute(
            /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
              .source,
            'javascript'
          )),
        (Prism.languages.js = Prism.languages.javascript);
    }
  },
});
var require_css = __commonJS({
  '../../node_modules/refractor/lang/css.js'(exports, module) {
    (module.exports = css), (css.displayName = 'css'), (css.aliases = []);
    function css(Prism) {
      (function (Prism2) {
        var string =
          /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
        (Prism2.languages.css = {
          comment: /\/\*[\s\S]*?\*\//,
          atrule: {
            pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
            inside: {
              rule: /^@[\w-]+/,
              'selector-function-argument': {
                pattern:
                  /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                lookbehind: !0,
                alias: 'selector',
              },
              keyword: {
                pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                lookbehind: !0,
              },
            },
          },
          url: {
            pattern: RegExp(
              '\\burl\\((?:' +
                string.source +
                '|' +
                /(?:[^\\\r\n()"']|\\[\s\S])*/.source +
                ')\\)',
              'i'
            ),
            greedy: !0,
            inside: {
              function: /^url/i,
              punctuation: /^\(|\)$/,
              string: {
                pattern: RegExp('^' + string.source + '$'),
                alias: 'url',
              },
            },
          },
          selector: {
            pattern: RegExp(
              `(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` +
                string.source +
                ')*(?=\\s*\\{)'
            ),
            lookbehind: !0,
          },
          string: { pattern: string, greedy: !0 },
          property: {
            pattern:
              /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
            lookbehind: !0,
          },
          important: /!important\b/i,
          function: {
            pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
            lookbehind: !0,
          },
          punctuation: /[(){};:,]/,
        }),
          (Prism2.languages.css.atrule.inside.rest = Prism2.languages.css);
        var markup = Prism2.languages.markup;
        markup &&
          (markup.tag.addInlined('style', 'css'),
          markup.tag.addAttribute('style', 'css'));
      })(Prism);
    }
  },
});
var require_markup = __commonJS({
  '../../node_modules/refractor/lang/markup.js'(exports, module) {
    (module.exports = markup),
      (markup.displayName = 'markup'),
      (markup.aliases = [
        'html',
        'mathml',
        'svg',
        'xml',
        'ssml',
        'atom',
        'rss',
      ]);
    function markup(Prism) {
      (Prism.languages.markup = {
        comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
        prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
        doctype: {
          pattern:
            /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
          greedy: !0,
          inside: {
            'internal-subset': {
              pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
              lookbehind: !0,
              greedy: !0,
              inside: null,
            },
            string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
            punctuation: /^<!|>$|[[\]]/,
            'doctype-tag': /^DOCTYPE/i,
            name: /[^\s<>'"]+/,
          },
        },
        cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
        tag: {
          pattern:
            /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
          greedy: !0,
          inside: {
            tag: {
              pattern: /^<\/?[^\s>\/]+/,
              inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
            },
            'special-attr': [],
            'attr-value': {
              pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
              inside: {
                punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/],
              },
            },
            punctuation: /\/?>/,
            'attr-name': {
              pattern: /[^\s>\/]+/,
              inside: { namespace: /^[^\s>\/:]+:/ },
            },
          },
        },
        entity: [
          { pattern: /&[\da-z]{1,8};/i, alias: 'named-entity' },
          /&#x?[\da-f]{1,8};/i,
        ],
      }),
        (Prism.languages.markup.tag.inside['attr-value'].inside.entity =
          Prism.languages.markup.entity),
        (Prism.languages.markup.doctype.inside['internal-subset'].inside =
          Prism.languages.markup),
        Prism.hooks.add('wrap', function (env) {
          env.type === 'entity' &&
            (env.attributes.title = env.content.value.replace(/&amp;/, '&'));
        }),
        Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
          value: function (tagName, lang) {
            var includedCdataInside = {};
            (includedCdataInside['language-' + lang] = {
              pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
              lookbehind: !0,
              inside: Prism.languages[lang],
            }),
              (includedCdataInside.cdata = /^<!\[CDATA\[|\]\]>$/i);
            var inside = {
              'included-cdata': {
                pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                inside: includedCdataInside,
              },
            };
            inside['language-' + lang] = {
              pattern: /[\s\S]+/,
              inside: Prism.languages[lang],
            };
            var def = {};
            (def[tagName] = {
              pattern: RegExp(
                /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
                  /__/g,
                  function () {
                    return tagName;
                  }
                ),
                'i'
              ),
              lookbehind: !0,
              greedy: !0,
              inside,
            }),
              Prism.languages.insertBefore('markup', 'cdata', def);
          },
        }),
        Object.defineProperty(Prism.languages.markup.tag, 'addAttribute', {
          value: function (attrName, lang) {
            Prism.languages.markup.tag.inside['special-attr'].push({
              pattern: RegExp(
                /(^|["'\s])/.source +
                  '(?:' +
                  attrName +
                  ')' +
                  /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
                'i'
              ),
              lookbehind: !0,
              inside: {
                'attr-name': /^[^\s=]+/,
                'attr-value': {
                  pattern: /=[\s\S]+/,
                  inside: {
                    value: {
                      pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                      lookbehind: !0,
                      alias: [lang, 'language-' + lang],
                      inside: Prism.languages[lang],
                    },
                    punctuation: [
                      { pattern: /^=/, alias: 'attr-equals' },
                      /"|'/,
                    ],
                  },
                },
              },
            });
          },
        }),
        (Prism.languages.html = Prism.languages.markup),
        (Prism.languages.mathml = Prism.languages.markup),
        (Prism.languages.svg = Prism.languages.markup),
        (Prism.languages.xml = Prism.languages.extend('markup', {})),
        (Prism.languages.ssml = Prism.languages.xml),
        (Prism.languages.atom = Prism.languages.xml),
        (Prism.languages.rss = Prism.languages.xml);
    }
  },
});
var require_immutable = __commonJS({
    '../../node_modules/xtend/immutable.js'(exports, module) {
      module.exports = extend;
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      function extend() {
        for (var target = {}, i = 0; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source)
            hasOwnProperty.call(source, key) && (target[key] = source[key]);
        }
        return target;
      }
    },
  }),
  require_schema = __commonJS({
    '../../node_modules/hastscript/node_modules/property-information/lib/util/schema.js'(
      exports,
      module
    ) {
      module.exports = Schema;
      var proto = Schema.prototype;
      (proto.space = null), (proto.normal = {}), (proto.property = {});
      function Schema(property, normal, space) {
        (this.property = property),
          (this.normal = normal),
          space && (this.space = space);
      }
    },
  }),
  require_merge = __commonJS({
    '../../node_modules/hastscript/node_modules/property-information/lib/util/merge.js'(
      exports,
      module
    ) {
      var xtend = require_immutable(),
        Schema = require_schema();
      module.exports = merge;
      function merge(definitions) {
        for (
          var length = definitions.length,
            property = [],
            normal = [],
            index = -1,
            info,
            space;
          ++index < length;

        )
          (info = definitions[index]),
            property.push(info.property),
            normal.push(info.normal),
            (space = info.space);
        return new Schema(
          xtend.apply(null, property),
          xtend.apply(null, normal),
          space
        );
      }
    },
  }),
  require_normalize = __commonJS({
    '../../node_modules/hastscript/node_modules/property-information/normalize.js'(
      exports,
      module
    ) {
      module.exports = normalize;
      function normalize(value) {
        return value.toLowerCase();
      }
    },
  }),
  require_info = __commonJS({
    '../../node_modules/hastscript/node_modules/property-information/lib/util/info.js'(
      exports,
      module
    ) {
      module.exports = Info;
      var proto = Info.prototype;
      (proto.space = null),
        (proto.attribute = null),
        (proto.property = null),
        (proto.boolean = !1),
        (proto.booleanish = !1),
        (proto.overloadedBoolean = !1),
        (proto.number = !1),
        (proto.commaSeparated = !1),
        (proto.spaceSeparated = !1),
        (proto.commaOrSpaceSeparated = !1),
        (proto.mustUseProperty = !1),
        (proto.defined = !1);
      function Info(property, attribute) {
        (this.property = property), (this.attribute = attribute);
      }
    },
  }),
  require_types = __commonJS({
    '../../node_modules/hastscript/node_modules/property-information/lib/util/types.js'(
      exports
    ) {
      var powers = 0;
      (exports.boolean = increment()),
        (exports.booleanish = increment()),
        (exports.overloadedBoolean = increment()),
        (exports.number = increment()),
        (exports.spaceSeparated = increment()),
        (exports.commaSeparated = increment()),
        (exports.commaOrSpaceSeparated = increment());
      function increment() {
        return Math.pow(2, ++powers);
      }
    },
  }),
  require_defined_info = __commonJS({
    '../../node_modules/hastscript/node_modules/property-information/lib/util/defined-info.js'(
      exports,
      module
    ) {
      var Info = require_info(),
        types = require_types();
      (module.exports = DefinedInfo),
        (DefinedInfo.prototype = new Info()),
        (DefinedInfo.prototype.defined = !0);
      var checks = [
          'boolean',
          'booleanish',
          'overloadedBoolean',
          'number',
          'commaSeparated',
          'spaceSeparated',
          'commaOrSpaceSeparated',
        ],
        checksLength = checks.length;
      function DefinedInfo(property, attribute, mask, space) {
        var index = -1,
          check;
        for (
          mark(this, 'space', space), Info.call(this, property, attribute);
          ++index < checksLength;

        )
          (check = checks[index]),
            mark(this, check, (mask & types[check]) === types[check]);
      }
      function mark(values, key, value) {
        value && (values[key] = value);
      }
    },
  }),
  require_create = __commonJS({
    '../../node_modules/hastscript/node_modules/property-information/lib/util/create.js'(
      exports,
      module
    ) {
      var normalize = require_normalize(),
        Schema = require_schema(),
        DefinedInfo = require_defined_info();
      module.exports = create;
      function create(definition) {
        var space = definition.space,
          mustUseProperty = definition.mustUseProperty || [],
          attributes = definition.attributes || {},
          props = definition.properties,
          transform = definition.transform,
          property = {},
          normal = {},
          prop,
          info;
        for (prop in props)
          (info = new DefinedInfo(
            prop,
            transform(attributes, prop),
            props[prop],
            space
          )),
            mustUseProperty.indexOf(prop) !== -1 && (info.mustUseProperty = !0),
            (property[prop] = info),
            (normal[normalize(prop)] = prop),
            (normal[normalize(info.attribute)] = prop);
        return new Schema(property, normal, space);
      }
    },
  }),
  require_xlink = __commonJS({
    '../../node_modules/hastscript/node_modules/property-information/lib/xlink.js'(
      exports,
      module
    ) {
      var create = require_create();
      module.exports = create({
        space: 'xlink',
        transform: xlinkTransform,
        properties: {
          xLinkActuate: null,
          xLinkArcRole: null,
          xLinkHref: null,
          xLinkRole: null,
          xLinkShow: null,
          xLinkTitle: null,
          xLinkType: null,
        },
      });
      function xlinkTransform(_, prop) {
        return 'xlink:' + prop.slice(5).toLowerCase();
      }
    },
  }),
  require_xml = __commonJS({
    '../../node_modules/hastscript/node_modules/property-information/lib/xml.js'(
      exports,
      module
    ) {
      var create = require_create();
      module.exports = create({
        space: 'xml',
        transform: xmlTransform,
        properties: { xmlLang: null, xmlBase: null, xmlSpace: null },
      });
      function xmlTransform(_, prop) {
        return 'xml:' + prop.slice(3).toLowerCase();
      }
    },
  }),
  require_case_sensitive_transform = __commonJS({
    '../../node_modules/hastscript/node_modules/property-information/lib/util/case-sensitive-transform.js'(
      exports,
      module
    ) {
      module.exports = caseSensitiveTransform;
      function caseSensitiveTransform(attributes, attribute) {
        return attribute in attributes ? attributes[attribute] : attribute;
      }
    },
  }),
  require_case_insensitive_transform = __commonJS({
    '../../node_modules/hastscript/node_modules/property-information/lib/util/case-insensitive-transform.js'(
      exports,
      module
    ) {
      var caseSensitiveTransform = require_case_sensitive_transform();
      module.exports = caseInsensitiveTransform;
      function caseInsensitiveTransform(attributes, property) {
        return caseSensitiveTransform(attributes, property.toLowerCase());
      }
    },
  }),
  require_xmlns = __commonJS({
    '../../node_modules/hastscript/node_modules/property-information/lib/xmlns.js'(
      exports,
      module
    ) {
      var create = require_create(),
        caseInsensitiveTransform = require_case_insensitive_transform();
      module.exports = create({
        space: 'xmlns',
        attributes: { xmlnsxlink: 'xmlns:xlink' },
        transform: caseInsensitiveTransform,
        properties: { xmlns: null, xmlnsXLink: null },
      });
    },
  }),
  require_aria = __commonJS({
    '../../node_modules/hastscript/node_modules/property-information/lib/aria.js'(
      exports,
      module
    ) {
      var types = require_types(),
        create = require_create(),
        booleanish = types.booleanish,
        number = types.number,
        spaceSeparated = types.spaceSeparated;
      module.exports = create({
        transform: ariaTransform,
        properties: {
          ariaActiveDescendant: null,
          ariaAtomic: booleanish,
          ariaAutoComplete: null,
          ariaBusy: booleanish,
          ariaChecked: booleanish,
          ariaColCount: number,
          ariaColIndex: number,
          ariaColSpan: number,
          ariaControls: spaceSeparated,
          ariaCurrent: null,
          ariaDescribedBy: spaceSeparated,
          ariaDetails: null,
          ariaDisabled: booleanish,
          ariaDropEffect: spaceSeparated,
          ariaErrorMessage: null,
          ariaExpanded: booleanish,
          ariaFlowTo: spaceSeparated,
          ariaGrabbed: booleanish,
          ariaHasPopup: null,
          ariaHidden: booleanish,
          ariaInvalid: null,
          ariaKeyShortcuts: null,
          ariaLabel: null,
          ariaLabelledBy: spaceSeparated,
          ariaLevel: number,
          ariaLive: null,
          ariaModal: booleanish,
          ariaMultiLine: booleanish,
          ariaMultiSelectable: booleanish,
          ariaOrientation: null,
          ariaOwns: spaceSeparated,
          ariaPlaceholder: null,
          ariaPosInSet: number,
          ariaPressed: booleanish,
          ariaReadOnly: booleanish,
          ariaRelevant: null,
          ariaRequired: booleanish,
          ariaRoleDescription: spaceSeparated,
          ariaRowCount: number,
          ariaRowIndex: number,
          ariaRowSpan: number,
          ariaSelected: booleanish,
          ariaSetSize: number,
          ariaSort: null,
          ariaValueMax: number,
          ariaValueMin: number,
          ariaValueNow: number,
          ariaValueText: null,
          role: null,
        },
      });
      function ariaTransform(_, prop) {
        return prop === 'role' ? prop : 'aria-' + prop.slice(4).toLowerCase();
      }
    },
  }),
  require_html = __commonJS({
    '../../node_modules/hastscript/node_modules/property-information/lib/html.js'(
      exports,
      module
    ) {
      var types = require_types(),
        create = require_create(),
        caseInsensitiveTransform = require_case_insensitive_transform(),
        boolean = types.boolean,
        overloadedBoolean = types.overloadedBoolean,
        booleanish = types.booleanish,
        number = types.number,
        spaceSeparated = types.spaceSeparated,
        commaSeparated = types.commaSeparated;
      module.exports = create({
        space: 'html',
        attributes: {
          acceptcharset: 'accept-charset',
          classname: 'class',
          htmlfor: 'for',
          httpequiv: 'http-equiv',
        },
        transform: caseInsensitiveTransform,
        mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
        properties: {
          abbr: null,
          accept: commaSeparated,
          acceptCharset: spaceSeparated,
          accessKey: spaceSeparated,
          action: null,
          allow: null,
          allowFullScreen: boolean,
          allowPaymentRequest: boolean,
          allowUserMedia: boolean,
          alt: null,
          as: null,
          async: boolean,
          autoCapitalize: null,
          autoComplete: spaceSeparated,
          autoFocus: boolean,
          autoPlay: boolean,
          capture: boolean,
          charSet: null,
          checked: boolean,
          cite: null,
          className: spaceSeparated,
          cols: number,
          colSpan: null,
          content: null,
          contentEditable: booleanish,
          controls: boolean,
          controlsList: spaceSeparated,
          coords: number | commaSeparated,
          crossOrigin: null,
          data: null,
          dateTime: null,
          decoding: null,
          default: boolean,
          defer: boolean,
          dir: null,
          dirName: null,
          disabled: boolean,
          download: overloadedBoolean,
          draggable: booleanish,
          encType: null,
          enterKeyHint: null,
          form: null,
          formAction: null,
          formEncType: null,
          formMethod: null,
          formNoValidate: boolean,
          formTarget: null,
          headers: spaceSeparated,
          height: number,
          hidden: boolean,
          high: number,
          href: null,
          hrefLang: null,
          htmlFor: spaceSeparated,
          httpEquiv: spaceSeparated,
          id: null,
          imageSizes: null,
          imageSrcSet: commaSeparated,
          inputMode: null,
          integrity: null,
          is: null,
          isMap: boolean,
          itemId: null,
          itemProp: spaceSeparated,
          itemRef: spaceSeparated,
          itemScope: boolean,
          itemType: spaceSeparated,
          kind: null,
          label: null,
          lang: null,
          language: null,
          list: null,
          loading: null,
          loop: boolean,
          low: number,
          manifest: null,
          max: null,
          maxLength: number,
          media: null,
          method: null,
          min: null,
          minLength: number,
          multiple: boolean,
          muted: boolean,
          name: null,
          nonce: null,
          noModule: boolean,
          noValidate: boolean,
          onAbort: null,
          onAfterPrint: null,
          onAuxClick: null,
          onBeforePrint: null,
          onBeforeUnload: null,
          onBlur: null,
          onCancel: null,
          onCanPlay: null,
          onCanPlayThrough: null,
          onChange: null,
          onClick: null,
          onClose: null,
          onContextMenu: null,
          onCopy: null,
          onCueChange: null,
          onCut: null,
          onDblClick: null,
          onDrag: null,
          onDragEnd: null,
          onDragEnter: null,
          onDragExit: null,
          onDragLeave: null,
          onDragOver: null,
          onDragStart: null,
          onDrop: null,
          onDurationChange: null,
          onEmptied: null,
          onEnded: null,
          onError: null,
          onFocus: null,
          onFormData: null,
          onHashChange: null,
          onInput: null,
          onInvalid: null,
          onKeyDown: null,
          onKeyPress: null,
          onKeyUp: null,
          onLanguageChange: null,
          onLoad: null,
          onLoadedData: null,
          onLoadedMetadata: null,
          onLoadEnd: null,
          onLoadStart: null,
          onMessage: null,
          onMessageError: null,
          onMouseDown: null,
          onMouseEnter: null,
          onMouseLeave: null,
          onMouseMove: null,
          onMouseOut: null,
          onMouseOver: null,
          onMouseUp: null,
          onOffline: null,
          onOnline: null,
          onPageHide: null,
          onPageShow: null,
          onPaste: null,
          onPause: null,
          onPlay: null,
          onPlaying: null,
          onPopState: null,
          onProgress: null,
          onRateChange: null,
          onRejectionHandled: null,
          onReset: null,
          onResize: null,
          onScroll: null,
          onSecurityPolicyViolation: null,
          onSeeked: null,
          onSeeking: null,
          onSelect: null,
          onSlotChange: null,
          onStalled: null,
          onStorage: null,
          onSubmit: null,
          onSuspend: null,
          onTimeUpdate: null,
          onToggle: null,
          onUnhandledRejection: null,
          onUnload: null,
          onVolumeChange: null,
          onWaiting: null,
          onWheel: null,
          open: boolean,
          optimum: number,
          pattern: null,
          ping: spaceSeparated,
          placeholder: null,
          playsInline: boolean,
          poster: null,
          preload: null,
          readOnly: boolean,
          referrerPolicy: null,
          rel: spaceSeparated,
          required: boolean,
          reversed: boolean,
          rows: number,
          rowSpan: number,
          sandbox: spaceSeparated,
          scope: null,
          scoped: boolean,
          seamless: boolean,
          selected: boolean,
          shape: null,
          size: number,
          sizes: null,
          slot: null,
          span: number,
          spellCheck: booleanish,
          src: null,
          srcDoc: null,
          srcLang: null,
          srcSet: commaSeparated,
          start: number,
          step: null,
          style: null,
          tabIndex: number,
          target: null,
          title: null,
          translate: null,
          type: null,
          typeMustMatch: boolean,
          useMap: null,
          value: booleanish,
          width: number,
          wrap: null,
          align: null,
          aLink: null,
          archive: spaceSeparated,
          axis: null,
          background: null,
          bgColor: null,
          border: number,
          borderColor: null,
          bottomMargin: number,
          cellPadding: null,
          cellSpacing: null,
          char: null,
          charOff: null,
          classId: null,
          clear: null,
          code: null,
          codeBase: null,
          codeType: null,
          color: null,
          compact: boolean,
          declare: boolean,
          event: null,
          face: null,
          frame: null,
          frameBorder: null,
          hSpace: number,
          leftMargin: number,
          link: null,
          longDesc: null,
          lowSrc: null,
          marginHeight: number,
          marginWidth: number,
          noResize: boolean,
          noHref: boolean,
          noShade: boolean,
          noWrap: boolean,
          object: null,
          profile: null,
          prompt: null,
          rev: null,
          rightMargin: number,
          rules: null,
          scheme: null,
          scrolling: booleanish,
          standby: null,
          summary: null,
          text: null,
          topMargin: number,
          valueType: null,
          version: null,
          vAlign: null,
          vLink: null,
          vSpace: number,
          allowTransparency: null,
          autoCorrect: null,
          autoSave: null,
          disablePictureInPicture: boolean,
          disableRemotePlayback: boolean,
          prefix: null,
          property: null,
          results: number,
          security: null,
          unselectable: null,
        },
      });
    },
  }),
  require_html2 = __commonJS({
    '../../node_modules/hastscript/node_modules/property-information/html.js'(
      exports,
      module
    ) {
      var merge = require_merge(),
        xlink = require_xlink(),
        xml = require_xml(),
        xmlns = require_xmlns(),
        aria = require_aria(),
        html = require_html();
      module.exports = merge([xml, xlink, xmlns, aria, html]);
    },
  }),
  require_find = __commonJS({
    '../../node_modules/hastscript/node_modules/property-information/find.js'(
      exports,
      module
    ) {
      var normalize = require_normalize(),
        DefinedInfo = require_defined_info(),
        Info = require_info(),
        data = 'data';
      module.exports = find;
      var valid = /^data[-\w.:]+$/i,
        dash = /-[a-z]/g,
        cap = /[A-Z]/g;
      function find(schema, value) {
        var normal = normalize(value),
          prop = value,
          Type = Info;
        return normal in schema.normal
          ? schema.property[schema.normal[normal]]
          : (normal.length > 4 &&
              normal.slice(0, 4) === data &&
              valid.test(value) &&
              (value.charAt(4) === '-'
                ? (prop = datasetToProperty(value))
                : (value = datasetToAttribute(value)),
              (Type = DefinedInfo)),
            new Type(prop, value));
      }
      function datasetToProperty(attribute) {
        var value = attribute.slice(5).replace(dash, camelcase);
        return data + value.charAt(0).toUpperCase() + value.slice(1);
      }
      function datasetToAttribute(property) {
        var value = property.slice(4);
        return dash.test(value)
          ? property
          : ((value = value.replace(cap, kebab)),
            value.charAt(0) !== '-' && (value = '-' + value),
            data + value);
      }
      function kebab($0) {
        return '-' + $0.toLowerCase();
      }
      function camelcase($0) {
        return $0.charAt(1).toUpperCase();
      }
    },
  }),
  require_hast_util_parse_selector = __commonJS({
    '../../node_modules/hast-util-parse-selector/index.js'(exports, module) {
      module.exports = parse;
      var search = /[#.]/g;
      function parse(selector, defaultTagName) {
        for (
          var value = selector || '',
            name = defaultTagName || 'div',
            props = {},
            start = 0,
            subvalue,
            previous,
            match;
          start < value.length;

        )
          (search.lastIndex = start),
            (match = search.exec(value)),
            (subvalue = value.slice(start, match ? match.index : value.length)),
            subvalue &&
              (previous
                ? previous === '#'
                  ? (props.id = subvalue)
                  : props.className
                  ? props.className.push(subvalue)
                  : (props.className = [subvalue])
                : (name = subvalue),
              (start += subvalue.length)),
            match && ((previous = match[0]), start++);
        return {
          type: 'element',
          tagName: name,
          properties: props,
          children: [],
        };
      }
    },
  }),
  require_space_separated_tokens = __commonJS({
    '../../node_modules/hastscript/node_modules/space-separated-tokens/index.js'(
      exports
    ) {
      (exports.parse = parse), (exports.stringify = stringify);
      var empty = '',
        space = ' ',
        whiteSpace = /[ \t\n\r\f]+/g;
      function parse(value) {
        var input = String(value || empty).trim();
        return input === empty ? [] : input.split(whiteSpace);
      }
      function stringify(values) {
        return values.join(space).trim();
      }
    },
  }),
  require_comma_separated_tokens = __commonJS({
    '../../node_modules/hastscript/node_modules/comma-separated-tokens/index.js'(
      exports
    ) {
      (exports.parse = parse), (exports.stringify = stringify);
      var comma = ',',
        space = ' ',
        empty = '';
      function parse(value) {
        for (
          var values = [],
            input = String(value || empty),
            index = input.indexOf(comma),
            lastIndex = 0,
            end = !1,
            val;
          !end;

        )
          index === -1 && ((index = input.length), (end = !0)),
            (val = input.slice(lastIndex, index).trim()),
            (val || !end) && values.push(val),
            (lastIndex = index + 1),
            (index = input.indexOf(comma, lastIndex));
        return values;
      }
      function stringify(values, options) {
        var settings = options || {},
          left = settings.padLeft === !1 ? empty : space,
          right = settings.padRight ? space : empty;
        return (
          values[values.length - 1] === empty &&
            (values = values.concat(empty)),
          values.join(right + comma + left).trim()
        );
      }
    },
  }),
  require_factory = __commonJS({
    '../../node_modules/hastscript/factory.js'(exports, module) {
      var find = require_find(),
        normalize = require_normalize(),
        parseSelector = require_hast_util_parse_selector(),
        spaces = require_space_separated_tokens().parse,
        commas = require_comma_separated_tokens().parse;
      module.exports = factory;
      var own = {}.hasOwnProperty;
      function factory(schema, defaultTagName, caseSensitive) {
        var adjust = caseSensitive ? createAdjustMap(caseSensitive) : null;
        return h;
        function h(selector, properties) {
          var node = parseSelector(selector, defaultTagName),
            children = Array.prototype.slice.call(arguments, 2),
            name = node.tagName.toLowerCase(),
            property;
          if (
            ((node.tagName =
              adjust && own.call(adjust, name) ? adjust[name] : name),
            properties &&
              isChildren(properties, node) &&
              (children.unshift(properties), (properties = null)),
            properties)
          )
            for (property in properties)
              addProperty(node.properties, property, properties[property]);
          return (
            addChild(node.children, children),
            node.tagName === 'template' &&
              ((node.content = { type: 'root', children: node.children }),
              (node.children = [])),
            node
          );
        }
        function addProperty(properties, key, value) {
          var info, property, result;
          value == null ||
            value !== value ||
            ((info = find(schema, key)),
            (property = info.property),
            (result = value),
            typeof result == 'string' &&
              (info.spaceSeparated
                ? (result = spaces(result))
                : info.commaSeparated
                ? (result = commas(result))
                : info.commaOrSpaceSeparated &&
                  (result = spaces(commas(result).join(' ')))),
            property === 'style' &&
              typeof value != 'string' &&
              (result = style(result)),
            property === 'className' &&
              properties.className &&
              (result = properties.className.concat(result)),
            (properties[property] = parsePrimitives(info, property, result)));
        }
      }
      function isChildren(value, node) {
        return (
          typeof value == 'string' ||
          'length' in value ||
          isNode(node.tagName, value)
        );
      }
      function isNode(tagName, value) {
        var type = value.type;
        return tagName === 'input' || !type || typeof type != 'string'
          ? !1
          : typeof value.children == 'object' && 'length' in value.children
          ? !0
          : ((type = type.toLowerCase()),
            tagName === 'button'
              ? type !== 'menu' &&
                type !== 'submit' &&
                type !== 'reset' &&
                type !== 'button'
              : 'value' in value);
      }
      function addChild(nodes, value) {
        var index, length;
        if (typeof value == 'string' || typeof value == 'number') {
          nodes.push({ type: 'text', value: String(value) });
          return;
        }
        if (typeof value == 'object' && 'length' in value) {
          for (index = -1, length = value.length; ++index < length; )
            addChild(nodes, value[index]);
          return;
        }
        if (typeof value != 'object' || !('type' in value))
          throw new Error(
            'Expected node, nodes, or string, got `' + value + '`'
          );
        nodes.push(value);
      }
      function parsePrimitives(info, name, value) {
        var index, length, result;
        if (typeof value != 'object' || !('length' in value))
          return parsePrimitive(info, name, value);
        for (length = value.length, index = -1, result = []; ++index < length; )
          result[index] = parsePrimitive(info, name, value[index]);
        return result;
      }
      function parsePrimitive(info, name, value) {
        var result = value;
        return (
          info.number || info.positiveNumber
            ? !isNaN(result) && result !== '' && (result = Number(result))
            : (info.boolean || info.overloadedBoolean) &&
              typeof result == 'string' &&
              (result === '' || normalize(value) === normalize(name)) &&
              (result = !0),
          result
        );
      }
      function style(value) {
        var result = [],
          key;
        for (key in value) result.push([key, value[key]].join(': '));
        return result.join('; ');
      }
      function createAdjustMap(values) {
        for (
          var length = values.length, index = -1, result = {}, value;
          ++index < length;

        )
          (value = values[index]), (result[value.toLowerCase()] = value);
        return result;
      }
    },
  }),
  require_html3 = __commonJS({
    '../../node_modules/hastscript/html.js'(exports, module) {
      var schema = require_html2(),
        factory = require_factory(),
        html = factory(schema, 'div');
      (html.displayName = 'html'), (module.exports = html);
    },
  }),
  require_hastscript = __commonJS({
    '../../node_modules/hastscript/index.js'(exports, module) {
      module.exports = require_html3();
    },
  }),
  require_character_entities_legacy = __commonJS({
    '../../node_modules/refractor/node_modules/character-entities-legacy/index.json'(
      exports,
      module
    ) {
      module.exports = {
        AElig: '\xC6',
        AMP: '&',
        Aacute: '\xC1',
        Acirc: '\xC2',
        Agrave: '\xC0',
        Aring: '\xC5',
        Atilde: '\xC3',
        Auml: '\xC4',
        COPY: '\xA9',
        Ccedil: '\xC7',
        ETH: '\xD0',
        Eacute: '\xC9',
        Ecirc: '\xCA',
        Egrave: '\xC8',
        Euml: '\xCB',
        GT: '>',
        Iacute: '\xCD',
        Icirc: '\xCE',
        Igrave: '\xCC',
        Iuml: '\xCF',
        LT: '<',
        Ntilde: '\xD1',
        Oacute: '\xD3',
        Ocirc: '\xD4',
        Ograve: '\xD2',
        Oslash: '\xD8',
        Otilde: '\xD5',
        Ouml: '\xD6',
        QUOT: '"',
        REG: '\xAE',
        THORN: '\xDE',
        Uacute: '\xDA',
        Ucirc: '\xDB',
        Ugrave: '\xD9',
        Uuml: '\xDC',
        Yacute: '\xDD',
        aacute: '\xE1',
        acirc: '\xE2',
        acute: '\xB4',
        aelig: '\xE6',
        agrave: '\xE0',
        amp: '&',
        aring: '\xE5',
        atilde: '\xE3',
        auml: '\xE4',
        brvbar: '\xA6',
        ccedil: '\xE7',
        cedil: '\xB8',
        cent: '\xA2',
        copy: '\xA9',
        curren: '\xA4',
        deg: '\xB0',
        divide: '\xF7',
        eacute: '\xE9',
        ecirc: '\xEA',
        egrave: '\xE8',
        eth: '\xF0',
        euml: '\xEB',
        frac12: '\xBD',
        frac14: '\xBC',
        frac34: '\xBE',
        gt: '>',
        iacute: '\xED',
        icirc: '\xEE',
        iexcl: '\xA1',
        igrave: '\xEC',
        iquest: '\xBF',
        iuml: '\xEF',
        laquo: '\xAB',
        lt: '<',
        macr: '\xAF',
        micro: '\xB5',
        middot: '\xB7',
        nbsp: '\xA0',
        not: '\xAC',
        ntilde: '\xF1',
        oacute: '\xF3',
        ocirc: '\xF4',
        ograve: '\xF2',
        ordf: '\xAA',
        ordm: '\xBA',
        oslash: '\xF8',
        otilde: '\xF5',
        ouml: '\xF6',
        para: '\xB6',
        plusmn: '\xB1',
        pound: '\xA3',
        quot: '"',
        raquo: '\xBB',
        reg: '\xAE',
        sect: '\xA7',
        shy: '\xAD',
        sup1: '\xB9',
        sup2: '\xB2',
        sup3: '\xB3',
        szlig: '\xDF',
        thorn: '\xFE',
        times: '\xD7',
        uacute: '\xFA',
        ucirc: '\xFB',
        ugrave: '\xF9',
        uml: '\xA8',
        uuml: '\xFC',
        yacute: '\xFD',
        yen: '\xA5',
        yuml: '\xFF',
      };
    },
  }),
  require_character_reference_invalid = __commonJS({
    '../../node_modules/refractor/node_modules/character-reference-invalid/index.json'(
      exports,
      module
    ) {
      module.exports = {
        0: '\uFFFD',
        128: '\u20AC',
        130: '\u201A',
        131: '\u0192',
        132: '\u201E',
        133: '\u2026',
        134: '\u2020',
        135: '\u2021',
        136: '\u02C6',
        137: '\u2030',
        138: '\u0160',
        139: '\u2039',
        140: '\u0152',
        142: '\u017D',
        145: '\u2018',
        146: '\u2019',
        147: '\u201C',
        148: '\u201D',
        149: '\u2022',
        150: '\u2013',
        151: '\u2014',
        152: '\u02DC',
        153: '\u2122',
        154: '\u0161',
        155: '\u203A',
        156: '\u0153',
        158: '\u017E',
        159: '\u0178',
      };
    },
  }),
  require_is_decimal = __commonJS({
    '../../node_modules/refractor/node_modules/is-decimal/index.js'(
      exports,
      module
    ) {
      module.exports = decimal;
      function decimal(character) {
        var code =
          typeof character == 'string' ? character.charCodeAt(0) : character;
        return code >= 48 && code <= 57;
      }
    },
  }),
  require_is_hexadecimal = __commonJS({
    '../../node_modules/refractor/node_modules/is-hexadecimal/index.js'(
      exports,
      module
    ) {
      module.exports = hexadecimal;
      function hexadecimal(character) {
        var code =
          typeof character == 'string' ? character.charCodeAt(0) : character;
        return (
          (code >= 97 && code <= 102) ||
          (code >= 65 && code <= 70) ||
          (code >= 48 && code <= 57)
        );
      }
    },
  }),
  require_is_alphabetical = __commonJS({
    '../../node_modules/refractor/node_modules/is-alphabetical/index.js'(
      exports,
      module
    ) {
      module.exports = alphabetical;
      function alphabetical(character) {
        var code =
          typeof character == 'string' ? character.charCodeAt(0) : character;
        return (code >= 97 && code <= 122) || (code >= 65 && code <= 90);
      }
    },
  }),
  require_is_alphanumerical = __commonJS({
    '../../node_modules/refractor/node_modules/is-alphanumerical/index.js'(
      exports,
      module
    ) {
      var alphabetical = require_is_alphabetical(),
        decimal = require_is_decimal();
      module.exports = alphanumerical;
      function alphanumerical(character) {
        return alphabetical(character) || decimal(character);
      }
    },
  }),
  require_decode_entity_browser = __commonJS({
    '../../node_modules/refractor/node_modules/parse-entities/decode-entity.browser.js'(
      exports,
      module
    ) {
      var el,
        semicolon = 59;
      module.exports = decodeEntity;
      function decodeEntity(characters) {
        var entity = '&' + characters + ';',
          char;
        return (
          (el = el || document.createElement('i')),
          (el.innerHTML = entity),
          (char = el.textContent),
          (char.charCodeAt(char.length - 1) === semicolon &&
            characters !== 'semi') ||
          char === entity
            ? !1
            : char
        );
      }
    },
  }),
  require_parse_entities = __commonJS({
    '../../node_modules/refractor/node_modules/parse-entities/index.js'(
      exports,
      module
    ) {
      var legacy = require_character_entities_legacy(),
        invalid = require_character_reference_invalid(),
        decimal = require_is_decimal(),
        hexadecimal = require_is_hexadecimal(),
        alphanumerical = require_is_alphanumerical(),
        decodeEntity = require_decode_entity_browser();
      module.exports = parseEntities;
      var own = {}.hasOwnProperty,
        fromCharCode = String.fromCharCode,
        noop = Function.prototype,
        defaults = {
          warning: null,
          reference: null,
          text: null,
          warningContext: null,
          referenceContext: null,
          textContext: null,
          position: {},
          additional: null,
          attribute: !1,
          nonTerminated: !0,
        },
        tab = 9,
        lineFeed = 10,
        formFeed = 12,
        space = 32,
        ampersand = 38,
        semicolon = 59,
        lessThan = 60,
        equalsTo = 61,
        numberSign = 35,
        uppercaseX = 88,
        lowercaseX = 120,
        replacementCharacter = 65533,
        name = 'named',
        hexa = 'hexadecimal',
        deci = 'decimal',
        bases = {};
      (bases[hexa] = 16), (bases[deci] = 10);
      var tests = {};
      (tests[name] = alphanumerical),
        (tests[deci] = decimal),
        (tests[hexa] = hexadecimal);
      var namedNotTerminated = 1,
        numericNotTerminated = 2,
        namedEmpty = 3,
        numericEmpty = 4,
        namedUnknown = 5,
        numericDisallowed = 6,
        numericProhibited = 7,
        messages = {};
      (messages[namedNotTerminated] =
        'Named character references must be terminated by a semicolon'),
        (messages[numericNotTerminated] =
          'Numeric character references must be terminated by a semicolon'),
        (messages[namedEmpty] = 'Named character references cannot be empty'),
        (messages[numericEmpty] =
          'Numeric character references cannot be empty'),
        (messages[namedUnknown] = 'Named character references must be known'),
        (messages[numericDisallowed] =
          'Numeric character references cannot be disallowed'),
        (messages[numericProhibited] =
          'Numeric character references cannot be outside the permissible Unicode range');
      function parseEntities(value, options) {
        var settings = {},
          option,
          key;
        options || (options = {});
        for (key in defaults)
          (option = options[key]), (settings[key] = option ?? defaults[key]);
        return (
          (settings.position.indent || settings.position.start) &&
            ((settings.indent = settings.position.indent || []),
            (settings.position = settings.position.start)),
          parse(value, settings)
        );
      }
      function parse(value, settings) {
        var additional = settings.additional,
          nonTerminated = settings.nonTerminated,
          handleText = settings.text,
          handleReference = settings.reference,
          handleWarning = settings.warning,
          textContext = settings.textContext,
          referenceContext = settings.referenceContext,
          warningContext = settings.warningContext,
          pos = settings.position,
          indent = settings.indent || [],
          length = value.length,
          index = 0,
          lines = -1,
          column = pos.column || 1,
          line = pos.line || 1,
          queue = '',
          result = [],
          entityCharacters,
          namedEntity,
          terminated,
          characters,
          character,
          reference,
          following,
          warning,
          reason,
          output,
          entity,
          begin,
          start,
          type,
          test,
          prev,
          next,
          diff,
          end;
        for (
          typeof additional == 'string' &&
            (additional = additional.charCodeAt(0)),
            prev = now(),
            warning = handleWarning ? parseError : noop,
            index--,
            length++;
          ++index < length;

        )
          if (
            (character === lineFeed && (column = indent[lines] || 1),
            (character = value.charCodeAt(index)),
            character === ampersand)
          ) {
            if (
              ((following = value.charCodeAt(index + 1)),
              following === tab ||
                following === lineFeed ||
                following === formFeed ||
                following === space ||
                following === ampersand ||
                following === lessThan ||
                following !== following ||
                (additional && following === additional))
            ) {
              (queue += fromCharCode(character)), column++;
              continue;
            }
            for (
              start = index + 1,
                begin = start,
                end = start,
                following === numberSign
                  ? ((end = ++begin),
                    (following = value.charCodeAt(end)),
                    following === uppercaseX || following === lowercaseX
                      ? ((type = hexa), (end = ++begin))
                      : (type = deci))
                  : (type = name),
                entityCharacters = '',
                entity = '',
                characters = '',
                test = tests[type],
                end--;
              ++end < length &&
              ((following = value.charCodeAt(end)), !!test(following));

            )
              (characters += fromCharCode(following)),
                type === name &&
                  own.call(legacy, characters) &&
                  ((entityCharacters = characters),
                  (entity = legacy[characters]));
            (terminated = value.charCodeAt(end) === semicolon),
              terminated &&
                (end++,
                (namedEntity = type === name ? decodeEntity(characters) : !1),
                namedEntity &&
                  ((entityCharacters = characters), (entity = namedEntity))),
              (diff = 1 + end - start),
              (!terminated && !nonTerminated) ||
                (characters
                  ? type === name
                    ? (terminated && !entity
                        ? warning(namedUnknown, 1)
                        : (entityCharacters !== characters &&
                            ((end = begin + entityCharacters.length),
                            (diff = 1 + end - begin),
                            (terminated = !1)),
                          terminated ||
                            ((reason = entityCharacters
                              ? namedNotTerminated
                              : namedEmpty),
                            settings.attribute
                              ? ((following = value.charCodeAt(end)),
                                following === equalsTo
                                  ? (warning(reason, diff), (entity = null))
                                  : alphanumerical(following)
                                  ? (entity = null)
                                  : warning(reason, diff))
                              : warning(reason, diff))),
                      (reference = entity))
                    : (terminated || warning(numericNotTerminated, diff),
                      (reference = parseInt(characters, bases[type])),
                      prohibited(reference)
                        ? (warning(numericProhibited, diff),
                          (reference = fromCharCode(replacementCharacter)))
                        : reference in invalid
                        ? (warning(numericDisallowed, diff),
                          (reference = invalid[reference]))
                        : ((output = ''),
                          disallowed(reference) &&
                            warning(numericDisallowed, diff),
                          reference > 65535 &&
                            ((reference -= 65536),
                            (output += fromCharCode(
                              (reference >>> 10) | 55296
                            )),
                            (reference = 56320 | (reference & 1023))),
                          (reference = output + fromCharCode(reference))))
                  : type !== name && warning(numericEmpty, diff)),
              reference
                ? (flush(),
                  (prev = now()),
                  (index = end - 1),
                  (column += end - start + 1),
                  result.push(reference),
                  (next = now()),
                  next.offset++,
                  handleReference &&
                    handleReference.call(
                      referenceContext,
                      reference,
                      { start: prev, end: next },
                      value.slice(start - 1, end)
                    ),
                  (prev = next))
                : ((characters = value.slice(start - 1, end)),
                  (queue += characters),
                  (column += characters.length),
                  (index = end - 1));
          } else
            character === 10 && (line++, lines++, (column = 0)),
              character === character
                ? ((queue += fromCharCode(character)), column++)
                : flush();
        return result.join('');
        function now() {
          return { line, column, offset: index + (pos.offset || 0) };
        }
        function parseError(code, offset) {
          var position = now();
          (position.column += offset),
            (position.offset += offset),
            handleWarning.call(warningContext, messages[code], position, code);
        }
        function flush() {
          queue &&
            (result.push(queue),
            handleText &&
              handleText.call(textContext, queue, { start: prev, end: now() }),
            (queue = ''));
        }
      }
      function prohibited(code) {
        return (code >= 55296 && code <= 57343) || code > 1114111;
      }
      function disallowed(code) {
        return (
          (code >= 1 && code <= 8) ||
          code === 11 ||
          (code >= 13 && code <= 31) ||
          (code >= 127 && code <= 159) ||
          (code >= 64976 && code <= 65007) ||
          (code & 65535) === 65535 ||
          (code & 65535) === 65534
        );
      }
    },
  }),
  require_prism_core = __commonJS({
    '../../node_modules/refractor/node_modules/prismjs/components/prism-core.js'(
      exports,
      module
    ) {
      var _self =
          typeof window < 'u'
            ? window
            : typeof WorkerGlobalScope < 'u' &&
              self instanceof WorkerGlobalScope
            ? self
            : {},
        Prism = (function (_self2) {
          var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
            uniqueId = 0,
            plainTextGrammar = {},
            _ = {
              manual: _self2.Prism && _self2.Prism.manual,
              disableWorkerMessageHandler:
                _self2.Prism && _self2.Prism.disableWorkerMessageHandler,
              util: {
                encode: function encode(tokens) {
                  return tokens instanceof Token
                    ? new Token(
                        tokens.type,
                        encode(tokens.content),
                        tokens.alias
                      )
                    : Array.isArray(tokens)
                    ? tokens.map(encode)
                    : tokens
                        .replace(/&/g, '&amp;')
                        .replace(/</g, '&lt;')
                        .replace(/\u00a0/g, ' ');
                },
                type: function (o) {
                  return Object.prototype.toString.call(o).slice(8, -1);
                },
                objId: function (obj) {
                  return (
                    obj.__id ||
                      Object.defineProperty(obj, '__id', { value: ++uniqueId }),
                    obj.__id
                  );
                },
                clone: function deepClone(o, visited) {
                  visited = visited || {};
                  var clone, id;
                  switch (_.util.type(o)) {
                    case 'Object':
                      if (((id = _.util.objId(o)), visited[id]))
                        return visited[id];
                      (clone = {}), (visited[id] = clone);
                      for (var key in o)
                        o.hasOwnProperty(key) &&
                          (clone[key] = deepClone(o[key], visited));
                      return clone;
                    case 'Array':
                      return (
                        (id = _.util.objId(o)),
                        visited[id]
                          ? visited[id]
                          : ((clone = []),
                            (visited[id] = clone),
                            o.forEach(function (v, i) {
                              clone[i] = deepClone(v, visited);
                            }),
                            clone)
                      );
                    default:
                      return o;
                  }
                },
                getLanguage: function (element) {
                  for (; element; ) {
                    var m = lang.exec(element.className);
                    if (m) return m[1].toLowerCase();
                    element = element.parentElement;
                  }
                  return 'none';
                },
                setLanguage: function (element, language) {
                  (element.className = element.className.replace(
                    RegExp(lang, 'gi'),
                    ''
                  )),
                    element.classList.add('language-' + language);
                },
                currentScript: function () {
                  if (typeof document > 'u') return null;
                  if ('currentScript' in document)
                    return document.currentScript;
                  try {
                    throw new Error();
                  } catch (err) {
                    var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(
                      err.stack
                    ) || [])[1];
                    if (src) {
                      var scripts = document.getElementsByTagName('script');
                      for (var i in scripts)
                        if (scripts[i].src == src) return scripts[i];
                    }
                    return null;
                  }
                },
                isActive: function (element, className, defaultActivation) {
                  for (var no = 'no-' + className; element; ) {
                    var classList = element.classList;
                    if (classList.contains(className)) return !0;
                    if (classList.contains(no)) return !1;
                    element = element.parentElement;
                  }
                  return !!defaultActivation;
                },
              },
              languages: {
                plain: plainTextGrammar,
                plaintext: plainTextGrammar,
                text: plainTextGrammar,
                txt: plainTextGrammar,
                extend: function (id, redef) {
                  var lang2 = _.util.clone(_.languages[id]);
                  for (var key in redef) lang2[key] = redef[key];
                  return lang2;
                },
                insertBefore: function (inside, before, insert, root) {
                  root = root || _.languages;
                  var grammar = root[inside],
                    ret = {};
                  for (var token in grammar)
                    if (grammar.hasOwnProperty(token)) {
                      if (token == before)
                        for (var newToken in insert)
                          insert.hasOwnProperty(newToken) &&
                            (ret[newToken] = insert[newToken]);
                      insert.hasOwnProperty(token) ||
                        (ret[token] = grammar[token]);
                    }
                  var old = root[inside];
                  return (
                    (root[inside] = ret),
                    _.languages.DFS(_.languages, function (key, value) {
                      value === old && key != inside && (this[key] = ret);
                    }),
                    ret
                  );
                },
                DFS: function DFS(o, callback, type, visited) {
                  visited = visited || {};
                  var objId = _.util.objId;
                  for (var i in o)
                    if (o.hasOwnProperty(i)) {
                      callback.call(o, i, o[i], type || i);
                      var property = o[i],
                        propertyType = _.util.type(property);
                      propertyType === 'Object' && !visited[objId(property)]
                        ? ((visited[objId(property)] = !0),
                          DFS(property, callback, null, visited))
                        : propertyType === 'Array' &&
                          !visited[objId(property)] &&
                          ((visited[objId(property)] = !0),
                          DFS(property, callback, i, visited));
                    }
                },
              },
              plugins: {},
              highlightAll: function (async, callback) {
                _.highlightAllUnder(document, async, callback);
              },
              highlightAllUnder: function (container, async, callback) {
                var env = {
                  callback,
                  container,
                  selector:
                    'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
                };
                _.hooks.run('before-highlightall', env),
                  (env.elements = Array.prototype.slice.apply(
                    env.container.querySelectorAll(env.selector)
                  )),
                  _.hooks.run('before-all-elements-highlight', env);
                for (var i = 0, element; (element = env.elements[i++]); )
                  _.highlightElement(element, async === !0, env.callback);
              },
              highlightElement: function (element, async, callback) {
                var language = _.util.getLanguage(element),
                  grammar = _.languages[language];
                _.util.setLanguage(element, language);
                var parent = element.parentElement;
                parent &&
                  parent.nodeName.toLowerCase() === 'pre' &&
                  _.util.setLanguage(parent, language);
                var code = element.textContent,
                  env = { element, language, grammar, code };
                function insertHighlightedCode(highlightedCode) {
                  (env.highlightedCode = highlightedCode),
                    _.hooks.run('before-insert', env),
                    (env.element.innerHTML = env.highlightedCode),
                    _.hooks.run('after-highlight', env),
                    _.hooks.run('complete', env),
                    callback && callback.call(env.element);
                }
                if (
                  (_.hooks.run('before-sanity-check', env),
                  (parent = env.element.parentElement),
                  parent &&
                    parent.nodeName.toLowerCase() === 'pre' &&
                    !parent.hasAttribute('tabindex') &&
                    parent.setAttribute('tabindex', '0'),
                  !env.code)
                ) {
                  _.hooks.run('complete', env),
                    callback && callback.call(env.element);
                  return;
                }
                if ((_.hooks.run('before-highlight', env), !env.grammar)) {
                  insertHighlightedCode(_.util.encode(env.code));
                  return;
                }
                if (async && _self2.Worker) {
                  var worker = new Worker(_.filename);
                  (worker.onmessage = function (evt) {
                    insertHighlightedCode(evt.data);
                  }),
                    worker.postMessage(
                      JSON.stringify({
                        language: env.language,
                        code: env.code,
                        immediateClose: !0,
                      })
                    );
                } else
                  insertHighlightedCode(
                    _.highlight(env.code, env.grammar, env.language)
                  );
              },
              highlight: function (text, grammar, language) {
                var env = { code: text, grammar, language };
                if ((_.hooks.run('before-tokenize', env), !env.grammar))
                  throw new Error(
                    'The language "' + env.language + '" has no grammar.'
                  );
                return (
                  (env.tokens = _.tokenize(env.code, env.grammar)),
                  _.hooks.run('after-tokenize', env),
                  Token.stringify(_.util.encode(env.tokens), env.language)
                );
              },
              tokenize: function (text, grammar) {
                var rest = grammar.rest;
                if (rest) {
                  for (var token in rest) grammar[token] = rest[token];
                  delete grammar.rest;
                }
                var tokenList = new LinkedList();
                return (
                  addAfter(tokenList, tokenList.head, text),
                  matchGrammar(text, tokenList, grammar, tokenList.head, 0),
                  toArray(tokenList)
                );
              },
              hooks: {
                all: {},
                add: function (name, callback) {
                  var hooks = _.hooks.all;
                  (hooks[name] = hooks[name] || []), hooks[name].push(callback);
                },
                run: function (name, env) {
                  var callbacks = _.hooks.all[name];
                  if (!(!callbacks || !callbacks.length))
                    for (var i = 0, callback; (callback = callbacks[i++]); )
                      callback(env);
                },
              },
              Token,
            };
          _self2.Prism = _;
          function Token(type, content, alias, matchedStr) {
            (this.type = type),
              (this.content = content),
              (this.alias = alias),
              (this.length = (matchedStr || '').length | 0);
          }
          Token.stringify = function stringify(o, language) {
            if (typeof o == 'string') return o;
            if (Array.isArray(o)) {
              var s = '';
              return (
                o.forEach(function (e) {
                  s += stringify(e, language);
                }),
                s
              );
            }
            var env = {
                type: o.type,
                content: stringify(o.content, language),
                tag: 'span',
                classes: ['token', o.type],
                attributes: {},
                language,
              },
              aliases = o.alias;
            aliases &&
              (Array.isArray(aliases)
                ? Array.prototype.push.apply(env.classes, aliases)
                : env.classes.push(aliases)),
              _.hooks.run('wrap', env);
            var attributes = '';
            for (var name in env.attributes)
              attributes +=
                ' ' +
                name +
                '="' +
                (env.attributes[name] || '').replace(/"/g, '&quot;') +
                '"';
            return (
              '<' +
              env.tag +
              ' class="' +
              env.classes.join(' ') +
              '"' +
              attributes +
              '>' +
              env.content +
              '</' +
              env.tag +
              '>'
            );
          };
          function matchPattern(pattern, pos, text, lookbehind) {
            pattern.lastIndex = pos;
            var match = pattern.exec(text);
            if (match && lookbehind && match[1]) {
              var lookbehindLength = match[1].length;
              (match.index += lookbehindLength),
                (match[0] = match[0].slice(lookbehindLength));
            }
            return match;
          }
          function matchGrammar(
            text,
            tokenList,
            grammar,
            startNode,
            startPos,
            rematch
          ) {
            for (var token in grammar)
              if (!(!grammar.hasOwnProperty(token) || !grammar[token])) {
                var patterns = grammar[token];
                patterns = Array.isArray(patterns) ? patterns : [patterns];
                for (var j = 0; j < patterns.length; ++j) {
                  if (rematch && rematch.cause == token + ',' + j) return;
                  var patternObj = patterns[j],
                    inside = patternObj.inside,
                    lookbehind = !!patternObj.lookbehind,
                    greedy = !!patternObj.greedy,
                    alias = patternObj.alias;
                  if (greedy && !patternObj.pattern.global) {
                    var flags = patternObj.pattern
                      .toString()
                      .match(/[imsuy]*$/)[0];
                    patternObj.pattern = RegExp(
                      patternObj.pattern.source,
                      flags + 'g'
                    );
                  }
                  for (
                    var pattern = patternObj.pattern || patternObj,
                      currentNode = startNode.next,
                      pos = startPos;
                    currentNode !== tokenList.tail &&
                    !(rematch && pos >= rematch.reach);
                    pos += currentNode.value.length,
                      currentNode = currentNode.next
                  ) {
                    var str = currentNode.value;
                    if (tokenList.length > text.length) return;
                    if (!(str instanceof Token)) {
                      var removeCount = 1,
                        match;
                      if (greedy) {
                        if (
                          ((match = matchPattern(
                            pattern,
                            pos,
                            text,
                            lookbehind
                          )),
                          !match || match.index >= text.length)
                        )
                          break;
                        var from = match.index,
                          to = match.index + match[0].length,
                          p = pos;
                        for (p += currentNode.value.length; from >= p; )
                          (currentNode = currentNode.next),
                            (p += currentNode.value.length);
                        if (
                          ((p -= currentNode.value.length),
                          (pos = p),
                          currentNode.value instanceof Token)
                        )
                          continue;
                        for (
                          var k = currentNode;
                          k !== tokenList.tail &&
                          (p < to || typeof k.value == 'string');
                          k = k.next
                        )
                          removeCount++, (p += k.value.length);
                        removeCount--,
                          (str = text.slice(pos, p)),
                          (match.index -= pos);
                      } else if (
                        ((match = matchPattern(pattern, 0, str, lookbehind)),
                        !match)
                      )
                        continue;
                      var from = match.index,
                        matchStr = match[0],
                        before = str.slice(0, from),
                        after = str.slice(from + matchStr.length),
                        reach = pos + str.length;
                      rematch &&
                        reach > rematch.reach &&
                        (rematch.reach = reach);
                      var removeFrom = currentNode.prev;
                      before &&
                        ((removeFrom = addAfter(tokenList, removeFrom, before)),
                        (pos += before.length)),
                        removeRange(tokenList, removeFrom, removeCount);
                      var wrapped = new Token(
                        token,
                        inside ? _.tokenize(matchStr, inside) : matchStr,
                        alias,
                        matchStr
                      );
                      if (
                        ((currentNode = addAfter(
                          tokenList,
                          removeFrom,
                          wrapped
                        )),
                        after && addAfter(tokenList, currentNode, after),
                        removeCount > 1)
                      ) {
                        var nestedRematch = { cause: token + ',' + j, reach };
                        matchGrammar(
                          text,
                          tokenList,
                          grammar,
                          currentNode.prev,
                          pos,
                          nestedRematch
                        ),
                          rematch &&
                            nestedRematch.reach > rematch.reach &&
                            (rematch.reach = nestedRematch.reach);
                      }
                    }
                  }
                }
              }
          }
          function LinkedList() {
            var head = { value: null, prev: null, next: null },
              tail = { value: null, prev: head, next: null };
            (head.next = tail),
              (this.head = head),
              (this.tail = tail),
              (this.length = 0);
          }
          function addAfter(list, node, value) {
            var next = node.next,
              newNode = { value, prev: node, next };
            return (
              (node.next = newNode),
              (next.prev = newNode),
              list.length++,
              newNode
            );
          }
          function removeRange(list, node, count) {
            for (
              var next = node.next, i = 0;
              i < count && next !== list.tail;
              i++
            )
              next = next.next;
            (node.next = next), (next.prev = node), (list.length -= i);
          }
          function toArray(list) {
            for (var array = [], node = list.head.next; node !== list.tail; )
              array.push(node.value), (node = node.next);
            return array;
          }
          if (!_self2.document)
            return (
              _self2.addEventListener &&
                (_.disableWorkerMessageHandler ||
                  _self2.addEventListener(
                    'message',
                    function (evt) {
                      var message = JSON.parse(evt.data),
                        lang2 = message.language,
                        code = message.code,
                        immediateClose = message.immediateClose;
                      _self2.postMessage(
                        _.highlight(code, _.languages[lang2], lang2)
                      ),
                        immediateClose && _self2.close();
                    },
                    !1
                  )),
              _
            );
          var script = _.util.currentScript();
          script &&
            ((_.filename = script.src),
            script.hasAttribute('data-manual') && (_.manual = !0));
          function highlightAutomaticallyCallback() {
            _.manual || _.highlightAll();
          }
          if (!_.manual) {
            var readyState = document.readyState;
            readyState === 'loading' ||
            (readyState === 'interactive' && script && script.defer)
              ? document.addEventListener(
                  'DOMContentLoaded',
                  highlightAutomaticallyCallback
                )
              : window.requestAnimationFrame
              ? window.requestAnimationFrame(highlightAutomaticallyCallback)
              : window.setTimeout(highlightAutomaticallyCallback, 16);
          }
          return _;
        })(_self);
      typeof module < 'u' && module.exports && (module.exports = Prism),
        typeof global < 'u' && (global.Prism = Prism);
    },
  }),
  require_core = __commonJS({
    '../../node_modules/refractor/core.js'(exports, module) {
      var ctx =
          typeof globalThis == 'object'
            ? globalThis
            : typeof self == 'object'
            ? self
            : typeof window == 'object'
            ? window
            : typeof global == 'object'
            ? global
            : {},
        restore = capture();
      ctx.Prism = { manual: !0, disableWorkerMessageHandler: !0 };
      var h = require_hastscript(),
        decode = require_parse_entities(),
        Prism = require_prism_core(),
        markup = require_markup(),
        css = require_css(),
        clike = require_clike(),
        js = require_javascript();
      restore();
      var own = {}.hasOwnProperty;
      function Refractor() {}
      Refractor.prototype = Prism;
      var refract = new Refractor();
      (module.exports = refract),
        (refract.highlight = highlight),
        (refract.register = register),
        (refract.alias = alias),
        (refract.registered = registered),
        (refract.listLanguages = listLanguages),
        register(markup),
        register(css),
        register(clike),
        register(js),
        (refract.util.encode = encode),
        (refract.Token.stringify = stringify);
      function register(grammar) {
        if (typeof grammar != 'function' || !grammar.displayName)
          throw new Error(
            'Expected `function` for `grammar`, got `' + grammar + '`'
          );
        refract.languages[grammar.displayName] === void 0 && grammar(refract);
      }
      function alias(name, alias2) {
        var languages = refract.languages,
          map = name,
          key,
          list,
          length,
          index;
        alias2 && ((map = {}), (map[name] = alias2));
        for (key in map)
          for (
            list = map[key],
              list = typeof list == 'string' ? [list] : list,
              length = list.length,
              index = -1;
            ++index < length;

          )
            languages[list[index]] = languages[key];
      }
      function highlight(value, name) {
        var sup = Prism.highlight,
          grammar;
        if (typeof value != 'string')
          throw new Error('Expected `string` for `value`, got `' + value + '`');
        if (refract.util.type(name) === 'Object')
          (grammar = name), (name = null);
        else {
          if (typeof name != 'string')
            throw new Error('Expected `string` for `name`, got `' + name + '`');
          if (own.call(refract.languages, name))
            grammar = refract.languages[name];
          else
            throw new Error(
              'Unknown language: `' + name + '` is not registered'
            );
        }
        return sup.call(this, value, grammar, name);
      }
      function registered(language) {
        if (typeof language != 'string')
          throw new Error(
            'Expected `string` for `language`, got `' + language + '`'
          );
        return own.call(refract.languages, language);
      }
      function listLanguages() {
        var languages = refract.languages,
          list = [],
          language;
        for (language in languages)
          own.call(languages, language) &&
            typeof languages[language] == 'object' &&
            list.push(language);
        return list;
      }
      function stringify(value, language, parent) {
        var env;
        return typeof value == 'string'
          ? { type: 'text', value }
          : refract.util.type(value) === 'Array'
          ? stringifyAll(value, language)
          : ((env = {
              type: value.type,
              content: refract.Token.stringify(value.content, language, parent),
              tag: 'span',
              classes: ['token', value.type],
              attributes: {},
              language,
              parent,
            }),
            value.alias && (env.classes = env.classes.concat(value.alias)),
            refract.hooks.run('wrap', env),
            h(
              env.tag + '.' + env.classes.join('.'),
              attributes(env.attributes),
              env.content
            ));
      }
      function stringifyAll(values, language) {
        for (
          var result = [], length = values.length, index = -1, value;
          ++index < length;

        )
          (value = values[index]),
            value !== '' &&
              value !== null &&
              value !== void 0 &&
              result.push(value);
        for (index = -1, length = result.length; ++index < length; )
          (value = result[index]),
            (result[index] = refract.Token.stringify(value, language, result));
        return result;
      }
      function encode(tokens) {
        return tokens;
      }
      function attributes(attrs) {
        var key;
        for (key in attrs) attrs[key] = decode(attrs[key]);
        return attrs;
      }
      function capture() {
        var defined = 'Prism' in ctx,
          current = defined ? ctx.Prism : void 0;
        return restore2;
        function restore2() {
          defined ? (ctx.Prism = current) : delete ctx.Prism,
            (defined = void 0),
            (current = void 0);
        }
      }
    },
  });
var require_bash = __commonJS({
  '../../node_modules/refractor/lang/bash.js'(exports, module) {
    (module.exports = bash),
      (bash.displayName = 'bash'),
      (bash.aliases = ['shell']);
    function bash(Prism) {
      (function (Prism2) {
        var envVars =
            '\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b',
          commandAfterHeredoc = {
            pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
            lookbehind: !0,
            alias: 'punctuation',
            inside: null,
          },
          insideString = {
            bash: commandAfterHeredoc,
            environment: {
              pattern: RegExp('\\$' + envVars),
              alias: 'constant',
            },
            variable: [
              {
                pattern: /\$?\(\([\s\S]+?\)\)/,
                greedy: !0,
                inside: {
                  variable: [
                    { pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 },
                    /^\$\(\(/,
                  ],
                  number:
                    /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
                  operator:
                    /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
                  punctuation: /\(\(?|\)\)?|,|;/,
                },
              },
              {
                pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
                greedy: !0,
                inside: { variable: /^\$\(|^`|\)$|`$/ },
              },
              {
                pattern: /\$\{[^}]+\}/,
                greedy: !0,
                inside: {
                  operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
                  punctuation: /[\[\]]/,
                  environment: {
                    pattern: RegExp('(\\{)' + envVars),
                    lookbehind: !0,
                    alias: 'constant',
                  },
                },
              },
              /\$(?:\w+|[#?*!@$])/,
            ],
            entity:
              /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/,
          };
        (Prism2.languages.bash = {
          shebang: { pattern: /^#!\s*\/.*/, alias: 'important' },
          comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 },
          'function-name': [
            {
              pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
              lookbehind: !0,
              alias: 'function',
            },
            { pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/, alias: 'function' },
          ],
          'for-or-select': {
            pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
            alias: 'variable',
            lookbehind: !0,
          },
          'assign-left': {
            pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
            inside: {
              environment: {
                pattern: RegExp('(^|[\\s;|&]|[<>]\\()' + envVars),
                lookbehind: !0,
                alias: 'constant',
              },
            },
            alias: 'variable',
            lookbehind: !0,
          },
          string: [
            {
              pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
              lookbehind: !0,
              greedy: !0,
              inside: insideString,
            },
            {
              pattern:
                /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
              lookbehind: !0,
              greedy: !0,
              inside: { bash: commandAfterHeredoc },
            },
            {
              pattern:
                /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
              lookbehind: !0,
              greedy: !0,
              inside: insideString,
            },
            { pattern: /(^|[^$\\])'[^']*'/, lookbehind: !0, greedy: !0 },
            {
              pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
              greedy: !0,
              inside: { entity: insideString.entity },
            },
          ],
          environment: { pattern: RegExp('\\$?' + envVars), alias: 'constant' },
          variable: insideString.variable,
          function: {
            pattern:
              /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
            lookbehind: !0,
          },
          keyword: {
            pattern:
              /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
            lookbehind: !0,
          },
          builtin: {
            pattern:
              /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
            lookbehind: !0,
            alias: 'class-name',
          },
          boolean: {
            pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
            lookbehind: !0,
          },
          'file-descriptor': { pattern: /\B&\d\b/, alias: 'important' },
          operator: {
            pattern:
              /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
            inside: {
              'file-descriptor': { pattern: /^\d/, alias: 'important' },
            },
          },
          punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
          number: {
            pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
            lookbehind: !0,
          },
        }),
          (commandAfterHeredoc.inside = Prism2.languages.bash);
        for (
          var toBeCopied = [
              'comment',
              'function-name',
              'for-or-select',
              'assign-left',
              'string',
              'environment',
              'function',
              'keyword',
              'builtin',
              'boolean',
              'file-descriptor',
              'operator',
              'punctuation',
              'number',
            ],
            inside = insideString.variable[1].inside,
            i = 0;
          i < toBeCopied.length;
          i++
        )
          inside[toBeCopied[i]] = Prism2.languages.bash[toBeCopied[i]];
        Prism2.languages.shell = Prism2.languages.bash;
      })(Prism);
    }
  },
});
var require_js_extras = __commonJS({
  '../../node_modules/refractor/lang/js-extras.js'(exports, module) {
    (module.exports = jsExtras),
      (jsExtras.displayName = 'jsExtras'),
      (jsExtras.aliases = []);
    function jsExtras(Prism) {
      (function (Prism2) {
        Prism2.languages.insertBefore('javascript', 'function-variable', {
          'method-variable': {
            pattern: RegExp(
              '(\\.\\s*)' +
                Prism2.languages.javascript['function-variable'].pattern.source
            ),
            lookbehind: !0,
            alias: [
              'function-variable',
              'method',
              'function',
              'property-access',
            ],
          },
        }),
          Prism2.languages.insertBefore('javascript', 'function', {
            method: {
              pattern: RegExp(
                '(\\.\\s*)' + Prism2.languages.javascript.function.source
              ),
              lookbehind: !0,
              alias: ['function', 'property-access'],
            },
          }),
          Prism2.languages.insertBefore('javascript', 'constant', {
            'known-class-name': [
              {
                pattern:
                  /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
                alias: 'class-name',
              },
              { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: 'class-name' },
            ],
          });
        function withId(source, flags) {
          return RegExp(
            source.replace(/<ID>/g, function () {
              return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/
                .source;
            }),
            flags
          );
        }
        Prism2.languages.insertBefore('javascript', 'keyword', {
          imports: {
            pattern: withId(
              /(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/
                .source
            ),
            lookbehind: !0,
            inside: Prism2.languages.javascript,
          },
          exports: {
            pattern: withId(
              /(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/
                .source
            ),
            lookbehind: !0,
            inside: Prism2.languages.javascript,
          },
        }),
          Prism2.languages.javascript.keyword.unshift(
            {
              pattern: /\b(?:as|default|export|from|import)\b/,
              alias: 'module',
            },
            {
              pattern:
                /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
              alias: 'control-flow',
            },
            { pattern: /\bnull\b/, alias: ['null', 'nil'] },
            { pattern: /\bundefined\b/, alias: 'nil' }
          ),
          Prism2.languages.insertBefore('javascript', 'operator', {
            spread: { pattern: /\.{3}/, alias: 'operator' },
            arrow: { pattern: /=>/, alias: 'operator' },
          }),
          Prism2.languages.insertBefore('javascript', 'punctuation', {
            'property-access': {
              pattern: withId(/(\.\s*)#?<ID>/.source),
              lookbehind: !0,
            },
            'maybe-class-name': {
              pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
              lookbehind: !0,
            },
            dom: {
              pattern:
                /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
              alias: 'variable',
            },
            console: { pattern: /\bconsole(?=\s*\.)/, alias: 'class-name' },
          });
        for (
          var maybeClassNameTokens = [
              'function',
              'function-variable',
              'method',
              'method-variable',
              'property-access',
            ],
            i = 0;
          i < maybeClassNameTokens.length;
          i++
        ) {
          var token = maybeClassNameTokens[i],
            value = Prism2.languages.javascript[token];
          Prism2.util.type(value) === 'RegExp' &&
            (value = Prism2.languages.javascript[token] = { pattern: value });
          var inside = value.inside || {};
          (value.inside = inside),
            (inside['maybe-class-name'] = /^[A-Z][\s\S]*/);
        }
      })(Prism);
    }
  },
});
var require_json = __commonJS({
  '../../node_modules/refractor/lang/json.js'(exports, module) {
    (module.exports = json),
      (json.displayName = 'json'),
      (json.aliases = ['webmanifest']);
    function json(Prism) {
      (Prism.languages.json = {
        property: {
          pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
          lookbehind: !0,
          greedy: !0,
        },
        string: {
          pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
          lookbehind: !0,
          greedy: !0,
        },
        comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
        number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
        punctuation: /[{}[\],]/,
        operator: /:/,
        boolean: /\b(?:false|true)\b/,
        null: { pattern: /\bnull\b/, alias: 'keyword' },
      }),
        (Prism.languages.webmanifest = Prism.languages.json);
    }
  },
});
var require_graphql = __commonJS({
  '../../node_modules/refractor/lang/graphql.js'(exports, module) {
    (module.exports = graphql),
      (graphql.displayName = 'graphql'),
      (graphql.aliases = []);
    function graphql(Prism) {
      (Prism.languages.graphql = {
        comment: /#.*/,
        description: {
          pattern:
            /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
          greedy: !0,
          alias: 'string',
          inside: {
            'language-markdown': {
              pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
              lookbehind: !0,
              inside: Prism.languages.markdown,
            },
          },
        },
        string: {
          pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
          greedy: !0,
        },
        number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
        boolean: /\b(?:false|true)\b/,
        variable: /\$[a-z_]\w*/i,
        directive: { pattern: /@[a-z_]\w*/i, alias: 'function' },
        'attr-name': {
          pattern:
            /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
          greedy: !0,
        },
        'atom-input': { pattern: /\b[A-Z]\w*Input\b/, alias: 'class-name' },
        scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
        constant: /\b[A-Z][A-Z_\d]*\b/,
        'class-name': {
          pattern:
            /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
          lookbehind: !0,
        },
        fragment: {
          pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
          lookbehind: !0,
          alias: 'function',
        },
        'definition-mutation': {
          pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
          lookbehind: !0,
          alias: 'function',
        },
        'definition-query': {
          pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
          lookbehind: !0,
          alias: 'function',
        },
        keyword:
          /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
        operator: /[!=|&]|\.{3}/,
        'property-query': /\w+(?=\s*\()/,
        object: /\w+(?=\s*\{)/,
        punctuation: /[!(){}\[\]:=,]/,
        property: /\w+/,
      }),
        Prism.hooks.add('after-tokenize', function (env) {
          if (env.language !== 'graphql') return;
          var validTokens = env.tokens.filter(function (token) {
              return (
                typeof token != 'string' &&
                token.type !== 'comment' &&
                token.type !== 'scalar'
              );
            }),
            currentIndex = 0;
          function getToken(offset) {
            return validTokens[currentIndex + offset];
          }
          function isTokenType(types, offset) {
            offset = offset || 0;
            for (var i2 = 0; i2 < types.length; i2++) {
              var token = getToken(i2 + offset);
              if (!token || token.type !== types[i2]) return !1;
            }
            return !0;
          }
          function findClosingBracket(open, close) {
            for (
              var stackHeight = 1, i2 = currentIndex;
              i2 < validTokens.length;
              i2++
            ) {
              var token = validTokens[i2],
                content = token.content;
              if (token.type === 'punctuation' && typeof content == 'string') {
                if (open.test(content)) stackHeight++;
                else if (
                  close.test(content) &&
                  (stackHeight--, stackHeight === 0)
                )
                  return i2;
              }
            }
            return -1;
          }
          function addAlias(token, alias) {
            var aliases = token.alias;
            aliases
              ? Array.isArray(aliases) || (token.alias = aliases = [aliases])
              : (token.alias = aliases = []),
              aliases.push(alias);
          }
          for (; currentIndex < validTokens.length; ) {
            var startToken = validTokens[currentIndex++];
            if (
              startToken.type === 'keyword' &&
              startToken.content === 'mutation'
            ) {
              var inputVariables = [];
              if (
                isTokenType(['definition-mutation', 'punctuation']) &&
                getToken(1).content === '('
              ) {
                currentIndex += 2;
                var definitionEnd = findClosingBracket(/^\($/, /^\)$/);
                if (definitionEnd === -1) continue;
                for (; currentIndex < definitionEnd; currentIndex++) {
                  var t = getToken(0);
                  t.type === 'variable' &&
                    (addAlias(t, 'variable-input'),
                    inputVariables.push(t.content));
                }
                currentIndex = definitionEnd + 1;
              }
              if (
                isTokenType(['punctuation', 'property-query']) &&
                getToken(0).content === '{' &&
                (currentIndex++,
                addAlias(getToken(0), 'property-mutation'),
                inputVariables.length > 0)
              ) {
                var mutationEnd = findClosingBracket(/^\{$/, /^\}$/);
                if (mutationEnd === -1) continue;
                for (var i = currentIndex; i < mutationEnd; i++) {
                  var varToken = validTokens[i];
                  varToken.type === 'variable' &&
                    inputVariables.indexOf(varToken.content) >= 0 &&
                    addAlias(varToken, 'variable-input');
                }
              }
            }
          }
        });
    }
  },
});
var import_react3 = __toESM(require_react(), 1);
var import_memoizerific = __toESM(require_memoizerific(), 1),
  import_react_dom = __toESM(require_react_dom(), 1);
function _extends2() {
  return (
    (_extends2 = Object.assign
      ? Object.assign.bind()
      : function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source)
              Object.prototype.hasOwnProperty.call(source, key) &&
                (target[key] = source[key]);
          }
          return target;
        }),
    _extends2.apply(this, arguments)
  );
}
var import_react2 = __toESM(require_react(), 1);
var import_react = __toESM(require_react(), 1);
function $6ed0406888f73fc4$var$setRef(ref, value) {
  typeof ref == 'function' ? ref(value) : ref != null && (ref.current = value);
}
function $6ed0406888f73fc4$export$43e446d32b3d21af(...refs) {
  return (node) =>
    refs.forEach((ref) => $6ed0406888f73fc4$var$setRef(ref, node));
}
var $5e63c961fc1ce211$export$8c6ed5c666ac1360 = (0, import_react2.forwardRef)(
  (props, forwardedRef) => {
    let { children, ...slotProps } = props,
      childrenArray = import_react2.Children.toArray(children),
      slottable = childrenArray.find($5e63c961fc1ce211$var$isSlottable);
    if (slottable) {
      let newElement = slottable.props.children,
        newChildren = childrenArray.map((child) =>
          child === slottable
            ? import_react2.Children.count(newElement) > 1
              ? import_react2.Children.only(null)
              : (0, import_react2.isValidElement)(newElement)
              ? newElement.props.children
              : null
            : child
        );
      return (0, import_react2.createElement)(
        $5e63c961fc1ce211$var$SlotClone,
        _extends2({}, slotProps, { ref: forwardedRef }),
        (0, import_react2.isValidElement)(newElement)
          ? (0, import_react2.cloneElement)(newElement, void 0, newChildren)
          : null
      );
    }
    return (0, import_react2.createElement)(
      $5e63c961fc1ce211$var$SlotClone,
      _extends2({}, slotProps, { ref: forwardedRef }),
      children
    );
  }
);
$5e63c961fc1ce211$export$8c6ed5c666ac1360.displayName = 'Slot';
var $5e63c961fc1ce211$var$SlotClone = (0, import_react2.forwardRef)(
  (props, forwardedRef) => {
    let { children, ...slotProps } = props;
    return (0, import_react2.isValidElement)(children)
      ? (0, import_react2.cloneElement)(children, {
          ...$5e63c961fc1ce211$var$mergeProps(slotProps, children.props),
          ref: forwardedRef
            ? $6ed0406888f73fc4$export$43e446d32b3d21af(
                forwardedRef,
                children.ref
              )
            : children.ref,
        })
      : import_react2.Children.count(children) > 1
      ? import_react2.Children.only(null)
      : null;
  }
);
$5e63c961fc1ce211$var$SlotClone.displayName = 'SlotClone';
var $5e63c961fc1ce211$export$d9f1ccf0bdb05d45 = ({ children }) =>
  (0, import_react2.createElement)(import_react2.Fragment, null, children);
function $5e63c961fc1ce211$var$isSlottable(child) {
  return (
    (0, import_react2.isValidElement)(child) &&
    child.type === $5e63c961fc1ce211$export$d9f1ccf0bdb05d45
  );
}
function $5e63c961fc1ce211$var$mergeProps(slotProps, childProps) {
  let overrideProps = { ...childProps };
  for (let propName in childProps) {
    let slotPropValue = slotProps[propName],
      childPropValue = childProps[propName];
    /^on[A-Z]/.test(propName)
      ? slotPropValue && childPropValue
        ? (overrideProps[propName] = (...args) => {
            childPropValue(...args), slotPropValue(...args);
          })
        : slotPropValue && (overrideProps[propName] = slotPropValue)
      : propName === 'style'
      ? (overrideProps[propName] = { ...slotPropValue, ...childPropValue })
      : propName === 'className' &&
        (overrideProps[propName] = [slotPropValue, childPropValue]
          .filter(Boolean)
          .join(' '));
  }
  return { ...slotProps, ...overrideProps };
}
var import_jsx = __toESM2(require_jsx()),
  jsx_default = import_jsx.default,
  import_bash = __toESM2(require_bash()),
  bash_default = import_bash.default,
  import_css = __toESM2(require_css()),
  css_default = import_css.default,
  import_js_extras = __toESM2(require_js_extras()),
  js_extras_default = import_js_extras.default,
  import_json = __toESM2(require_json()),
  json_default = import_json.default,
  import_graphql = __toESM2(require_graphql()),
  graphql_default = import_graphql.default,
  import_markup = __toESM2(require_markup()),
  markup_default = import_markup.default,
  import_markdown = __toESM2(require_markdown()),
  markdown_default = import_markdown.default,
  import_yaml = __toESM2(require_yaml()),
  yaml_default = import_yaml.default,
  import_tsx = __toESM2(require_tsx()),
  tsx_default = import_tsx.default,
  import_typescript = __toESM2(require_typescript()),
  typescript_default = import_typescript.default;
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded),
    key,
    i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++)
      (key = sourceSymbolKeys[i]),
        !(excluded.indexOf(key) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(source, key) &&
          (target[key] = source[key]);
  }
  return target;
}
function _arrayLikeToArray(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (
    (typeof Symbol < 'u' && iter[Symbol.iterator] != null) ||
    iter['@@iterator'] != null
  )
    return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (o) {
    if (typeof o == 'string') return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (
      (n === 'Object' && o.constructor && (n = o.constructor.name),
      n === 'Map' || n === 'Set')
    )
      return Array.from(o);
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  }
}
function _nonIterableSpread() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) ||
    _nonIterableSpread()
  );
}
function _typeof(o) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (o2) {
            return typeof o2;
          }
        : function (o2) {
            return o2 &&
              typeof Symbol == 'function' &&
              o2.constructor === Symbol &&
              o2 !== Symbol.prototype
              ? 'symbol'
              : typeof o2;
          }),
    _typeof(o)
  );
}
function toPrimitive(t, r) {
  if (_typeof(t) != 'object' || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(t, r || 'default');
    if (_typeof(i) != 'object') return i;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (r === 'string' ? String : Number)(t);
}
function toPropertyKey(t) {
  var i = toPrimitive(t, 'string');
  return _typeof(i) == 'symbol' ? i : String(i);
}
function _defineProperty(obj, key, value) {
  return (
    (key = toPropertyKey(key)),
    key in obj
      ? Object.defineProperty(obj, key, {
          value,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (obj[key] = value),
    obj
  );
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), !0).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(
          target,
          Object.getOwnPropertyDescriptors(source)
        )
      : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key)
          );
        });
  }
  return target;
}
function powerSetPermutations(arr) {
  var arrLength = arr.length;
  if (arrLength === 0 || arrLength === 1) return arr;
  if (arrLength === 2)
    return [
      arr[0],
      arr[1],
      ''.concat(arr[0], '.').concat(arr[1]),
      ''.concat(arr[1], '.').concat(arr[0]),
    ];
  if (arrLength === 3)
    return [
      arr[0],
      arr[1],
      arr[2],
      ''.concat(arr[0], '.').concat(arr[1]),
      ''.concat(arr[0], '.').concat(arr[2]),
      ''.concat(arr[1], '.').concat(arr[0]),
      ''.concat(arr[1], '.').concat(arr[2]),
      ''.concat(arr[2], '.').concat(arr[0]),
      ''.concat(arr[2], '.').concat(arr[1]),
      ''.concat(arr[0], '.').concat(arr[1], '.').concat(arr[2]),
      ''.concat(arr[0], '.').concat(arr[2], '.').concat(arr[1]),
      ''.concat(arr[1], '.').concat(arr[0], '.').concat(arr[2]),
      ''.concat(arr[1], '.').concat(arr[2], '.').concat(arr[0]),
      ''.concat(arr[2], '.').concat(arr[0], '.').concat(arr[1]),
      ''.concat(arr[2], '.').concat(arr[1], '.').concat(arr[0]),
    ];
  if (arrLength >= 4)
    return [
      arr[0],
      arr[1],
      arr[2],
      arr[3],
      ''.concat(arr[0], '.').concat(arr[1]),
      ''.concat(arr[0], '.').concat(arr[2]),
      ''.concat(arr[0], '.').concat(arr[3]),
      ''.concat(arr[1], '.').concat(arr[0]),
      ''.concat(arr[1], '.').concat(arr[2]),
      ''.concat(arr[1], '.').concat(arr[3]),
      ''.concat(arr[2], '.').concat(arr[0]),
      ''.concat(arr[2], '.').concat(arr[1]),
      ''.concat(arr[2], '.').concat(arr[3]),
      ''.concat(arr[3], '.').concat(arr[0]),
      ''.concat(arr[3], '.').concat(arr[1]),
      ''.concat(arr[3], '.').concat(arr[2]),
      ''.concat(arr[0], '.').concat(arr[1], '.').concat(arr[2]),
      ''.concat(arr[0], '.').concat(arr[1], '.').concat(arr[3]),
      ''.concat(arr[0], '.').concat(arr[2], '.').concat(arr[1]),
      ''.concat(arr[0], '.').concat(arr[2], '.').concat(arr[3]),
      ''.concat(arr[0], '.').concat(arr[3], '.').concat(arr[1]),
      ''.concat(arr[0], '.').concat(arr[3], '.').concat(arr[2]),
      ''.concat(arr[1], '.').concat(arr[0], '.').concat(arr[2]),
      ''.concat(arr[1], '.').concat(arr[0], '.').concat(arr[3]),
      ''.concat(arr[1], '.').concat(arr[2], '.').concat(arr[0]),
      ''.concat(arr[1], '.').concat(arr[2], '.').concat(arr[3]),
      ''.concat(arr[1], '.').concat(arr[3], '.').concat(arr[0]),
      ''.concat(arr[1], '.').concat(arr[3], '.').concat(arr[2]),
      ''.concat(arr[2], '.').concat(arr[0], '.').concat(arr[1]),
      ''.concat(arr[2], '.').concat(arr[0], '.').concat(arr[3]),
      ''.concat(arr[2], '.').concat(arr[1], '.').concat(arr[0]),
      ''.concat(arr[2], '.').concat(arr[1], '.').concat(arr[3]),
      ''.concat(arr[2], '.').concat(arr[3], '.').concat(arr[0]),
      ''.concat(arr[2], '.').concat(arr[3], '.').concat(arr[1]),
      ''.concat(arr[3], '.').concat(arr[0], '.').concat(arr[1]),
      ''.concat(arr[3], '.').concat(arr[0], '.').concat(arr[2]),
      ''.concat(arr[3], '.').concat(arr[1], '.').concat(arr[0]),
      ''.concat(arr[3], '.').concat(arr[1], '.').concat(arr[2]),
      ''.concat(arr[3], '.').concat(arr[2], '.').concat(arr[0]),
      ''.concat(arr[3], '.').concat(arr[2], '.').concat(arr[1]),
      ''
        .concat(arr[0], '.')
        .concat(arr[1], '.')
        .concat(arr[2], '.')
        .concat(arr[3]),
      ''
        .concat(arr[0], '.')
        .concat(arr[1], '.')
        .concat(arr[3], '.')
        .concat(arr[2]),
      ''
        .concat(arr[0], '.')
        .concat(arr[2], '.')
        .concat(arr[1], '.')
        .concat(arr[3]),
      ''
        .concat(arr[0], '.')
        .concat(arr[2], '.')
        .concat(arr[3], '.')
        .concat(arr[1]),
      ''
        .concat(arr[0], '.')
        .concat(arr[3], '.')
        .concat(arr[1], '.')
        .concat(arr[2]),
      ''
        .concat(arr[0], '.')
        .concat(arr[3], '.')
        .concat(arr[2], '.')
        .concat(arr[1]),
      ''
        .concat(arr[1], '.')
        .concat(arr[0], '.')
        .concat(arr[2], '.')
        .concat(arr[3]),
      ''
        .concat(arr[1], '.')
        .concat(arr[0], '.')
        .concat(arr[3], '.')
        .concat(arr[2]),
      ''
        .concat(arr[1], '.')
        .concat(arr[2], '.')
        .concat(arr[0], '.')
        .concat(arr[3]),
      ''
        .concat(arr[1], '.')
        .concat(arr[2], '.')
        .concat(arr[3], '.')
        .concat(arr[0]),
      ''
        .concat(arr[1], '.')
        .concat(arr[3], '.')
        .concat(arr[0], '.')
        .concat(arr[2]),
      ''
        .concat(arr[1], '.')
        .concat(arr[3], '.')
        .concat(arr[2], '.')
        .concat(arr[0]),
      ''
        .concat(arr[2], '.')
        .concat(arr[0], '.')
        .concat(arr[1], '.')
        .concat(arr[3]),
      ''
        .concat(arr[2], '.')
        .concat(arr[0], '.')
        .concat(arr[3], '.')
        .concat(arr[1]),
      ''
        .concat(arr[2], '.')
        .concat(arr[1], '.')
        .concat(arr[0], '.')
        .concat(arr[3]),
      ''
        .concat(arr[2], '.')
        .concat(arr[1], '.')
        .concat(arr[3], '.')
        .concat(arr[0]),
      ''
        .concat(arr[2], '.')
        .concat(arr[3], '.')
        .concat(arr[0], '.')
        .concat(arr[1]),
      ''
        .concat(arr[2], '.')
        .concat(arr[3], '.')
        .concat(arr[1], '.')
        .concat(arr[0]),
      ''
        .concat(arr[3], '.')
        .concat(arr[0], '.')
        .concat(arr[1], '.')
        .concat(arr[2]),
      ''
        .concat(arr[3], '.')
        .concat(arr[0], '.')
        .concat(arr[2], '.')
        .concat(arr[1]),
      ''
        .concat(arr[3], '.')
        .concat(arr[1], '.')
        .concat(arr[0], '.')
        .concat(arr[2]),
      ''
        .concat(arr[3], '.')
        .concat(arr[1], '.')
        .concat(arr[2], '.')
        .concat(arr[0]),
      ''
        .concat(arr[3], '.')
        .concat(arr[2], '.')
        .concat(arr[0], '.')
        .concat(arr[1]),
      ''
        .concat(arr[3], '.')
        .concat(arr[2], '.')
        .concat(arr[1], '.')
        .concat(arr[0]),
    ];
}
var classNameCombinations = {};
function getClassNameCombinations(classNames) {
  if (classNames.length === 0 || classNames.length === 1) return classNames;
  var key = classNames.join('.');
  return (
    classNameCombinations[key] ||
      (classNameCombinations[key] = powerSetPermutations(classNames)),
    classNameCombinations[key]
  );
}
function createStyleObject(classNames) {
  var elementStyle =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    stylesheet = arguments.length > 2 ? arguments[2] : void 0,
    nonTokenClassNames = classNames.filter(function (className) {
      return className !== 'token';
    }),
    classNamesCombinations = getClassNameCombinations(nonTokenClassNames);
  return classNamesCombinations.reduce(function (styleObject, className) {
    return _objectSpread(_objectSpread({}, styleObject), stylesheet[className]);
  }, elementStyle);
}
function createClassNameString(classNames) {
  return classNames.join(' ');
}
function createChildren(stylesheet, useInlineStyles) {
  var childrenCount = 0;
  return function (children) {
    return (
      (childrenCount += 1),
      children.map(function (child, i) {
        return createElement({
          node: child,
          stylesheet,
          useInlineStyles,
          key: 'code-segment-'.concat(childrenCount, '-').concat(i),
        });
      })
    );
  };
}
function createElement(_ref) {
  var node = _ref.node,
    stylesheet = _ref.stylesheet,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    useInlineStyles = _ref.useInlineStyles,
    key = _ref.key,
    properties = node.properties,
    type = node.type,
    TagName = node.tagName,
    value = node.value;
  if (type === 'text') return value;
  if (TagName) {
    var childrenCreator = createChildren(stylesheet, useInlineStyles),
      props;
    if (!useInlineStyles)
      props = _objectSpread(
        _objectSpread({}, properties),
        {},
        { className: createClassNameString(properties.className) }
      );
    else {
      var allStylesheetSelectors = Object.keys(stylesheet).reduce(function (
          classes,
          selector
        ) {
          return (
            selector.split('.').forEach(function (className2) {
              classes.includes(className2) || classes.push(className2);
            }),
            classes
          );
        },
        []),
        startingClassName =
          properties.className && properties.className.includes('token')
            ? ['token']
            : [],
        className =
          properties.className &&
          startingClassName.concat(
            properties.className.filter(function (className2) {
              return !allStylesheetSelectors.includes(className2);
            })
          );
      props = _objectSpread(
        _objectSpread({}, properties),
        {},
        {
          className: createClassNameString(className) || void 0,
          style: createStyleObject(
            properties.className,
            Object.assign({}, properties.style, style),
            stylesheet
          ),
        }
      );
    }
    var children = childrenCreator(node.children);
    return import_react3.default.createElement(
      TagName,
      _extends({ key }, props),
      children
    );
  }
}
var checkForListedLanguage_default = function (astGenerator, language) {
    var langs = astGenerator.listLanguages();
    return langs.indexOf(language) !== -1;
  },
  _excluded = [
    'language',
    'children',
    'style',
    'customStyle',
    'codeTagProps',
    'useInlineStyles',
    'showLineNumbers',
    'showInlineLineNumbers',
    'startingLineNumber',
    'lineNumberContainerStyle',
    'lineNumberStyle',
    'wrapLines',
    'wrapLongLines',
    'lineProps',
    'renderer',
    'PreTag',
    'CodeTag',
    'code',
    'astGenerator',
  ];
function ownKeys2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2
      ? ownKeys2(Object(source), !0).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(
          target,
          Object.getOwnPropertyDescriptors(source)
        )
      : ownKeys2(Object(source)).forEach(function (key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key)
          );
        });
  }
  return target;
}
var newLineRegex = /\n/g;
function getNewLines(str) {
  return str.match(newLineRegex);
}
function getAllLineNumbers(_ref) {
  var lines = _ref.lines,
    startingLineNumber = _ref.startingLineNumber,
    style = _ref.style;
  return lines.map(function (_, i) {
    var number = i + startingLineNumber;
    return import_react3.default.createElement(
      'span',
      {
        key: 'line-'.concat(i),
        className: 'react-syntax-highlighter-line-number',
        style: typeof style == 'function' ? style(number) : style,
      },
      ''.concat(
        number,
        `
`
      )
    );
  });
}
function AllLineNumbers(_ref2) {
  var codeString = _ref2.codeString,
    codeStyle = _ref2.codeStyle,
    _ref2$containerStyle = _ref2.containerStyle,
    containerStyle =
      _ref2$containerStyle === void 0
        ? { float: 'left', paddingRight: '10px' }
        : _ref2$containerStyle,
    _ref2$numberStyle = _ref2.numberStyle,
    numberStyle = _ref2$numberStyle === void 0 ? {} : _ref2$numberStyle,
    startingLineNumber = _ref2.startingLineNumber;
  return import_react3.default.createElement(
    'code',
    { style: Object.assign({}, codeStyle, containerStyle) },
    getAllLineNumbers({
      lines: codeString.replace(/\n$/, '').split(`
`),
      style: numberStyle,
      startingLineNumber,
    })
  );
}
function getEmWidthOfNumber(num) {
  return ''.concat(num.toString().length, '.25em');
}
function getInlineLineNumber(lineNumber, inlineLineNumberStyle) {
  return {
    type: 'element',
    tagName: 'span',
    properties: {
      key: 'line-number--'.concat(lineNumber),
      className: [
        'comment',
        'linenumber',
        'react-syntax-highlighter-line-number',
      ],
      style: inlineLineNumberStyle,
    },
    children: [{ type: 'text', value: lineNumber }],
  };
}
function assembleLineNumberStyles(
  lineNumberStyle,
  lineNumber,
  largestLineNumber
) {
  var defaultLineNumberStyle = {
      display: 'inline-block',
      minWidth: getEmWidthOfNumber(largestLineNumber),
      paddingRight: '1em',
      textAlign: 'right',
      userSelect: 'none',
    },
    customLineNumberStyle =
      typeof lineNumberStyle == 'function'
        ? lineNumberStyle(lineNumber)
        : lineNumberStyle,
    assembledStyle = _objectSpread2(
      _objectSpread2({}, defaultLineNumberStyle),
      customLineNumberStyle
    );
  return assembledStyle;
}
function createLineElement(_ref3) {
  var children = _ref3.children,
    lineNumber = _ref3.lineNumber,
    lineNumberStyle = _ref3.lineNumberStyle,
    largestLineNumber = _ref3.largestLineNumber,
    showInlineLineNumbers = _ref3.showInlineLineNumbers,
    _ref3$lineProps = _ref3.lineProps,
    lineProps = _ref3$lineProps === void 0 ? {} : _ref3$lineProps,
    _ref3$className = _ref3.className,
    className = _ref3$className === void 0 ? [] : _ref3$className,
    showLineNumbers = _ref3.showLineNumbers,
    wrapLongLines = _ref3.wrapLongLines,
    properties =
      typeof lineProps == 'function' ? lineProps(lineNumber) : lineProps;
  if (
    ((properties.className = className), lineNumber && showInlineLineNumbers)
  ) {
    var inlineLineNumberStyle = assembleLineNumberStyles(
      lineNumberStyle,
      lineNumber,
      largestLineNumber
    );
    children.unshift(getInlineLineNumber(lineNumber, inlineLineNumberStyle));
  }
  return (
    wrapLongLines & showLineNumbers &&
      (properties.style = _objectSpread2(
        _objectSpread2({}, properties.style),
        {},
        { display: 'flex' }
      )),
    { type: 'element', tagName: 'span', properties, children }
  );
}
function flattenCodeTree(tree) {
  for (
    var className =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
      newTree =
        arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [],
      i = 0;
    i < tree.length;
    i++
  ) {
    var node = tree[i];
    if (node.type === 'text')
      newTree.push(
        createLineElement({
          children: [node],
          className: _toConsumableArray(new Set(className)),
        })
      );
    else if (node.children) {
      var classNames = className.concat(node.properties.className);
      flattenCodeTree(node.children, classNames).forEach(function (i2) {
        return newTree.push(i2);
      });
    }
  }
  return newTree;
}
function processLines(
  codeTree,
  wrapLines,
  lineProps,
  showLineNumbers,
  showInlineLineNumbers,
  startingLineNumber,
  largestLineNumber,
  lineNumberStyle,
  wrapLongLines
) {
  var _ref4,
    tree = flattenCodeTree(codeTree.value),
    newTree = [],
    lastLineBreakIndex = -1,
    index = 0;
  function createWrappedLine(children2, lineNumber2) {
    var className =
      arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return createLineElement({
      children: children2,
      lineNumber: lineNumber2,
      lineNumberStyle,
      largestLineNumber,
      showInlineLineNumbers,
      lineProps,
      className,
      showLineNumbers,
      wrapLongLines,
    });
  }
  function createUnwrappedLine(children2, lineNumber2) {
    if (showLineNumbers && lineNumber2 && showInlineLineNumbers) {
      var inlineLineNumberStyle = assembleLineNumberStyles(
        lineNumberStyle,
        lineNumber2,
        largestLineNumber
      );
      children2.unshift(
        getInlineLineNumber(lineNumber2, inlineLineNumberStyle)
      );
    }
    return children2;
  }
  function createLine(children2, lineNumber2) {
    var className =
      arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return wrapLines || className.length > 0
      ? createWrappedLine(children2, lineNumber2, className)
      : createUnwrappedLine(children2, lineNumber2);
  }
  for (
    var _loop = function () {
      var node = tree[index],
        value = node.children[0].value,
        newLines = getNewLines(value);
      if (newLines) {
        var splitValue = value.split(`
`);
        splitValue.forEach(function (text, i) {
          var lineNumber2 =
              showLineNumbers && newTree.length + startingLineNumber,
            newChild = {
              type: 'text',
              value: ''.concat(
                text,
                `
`
              ),
            };
          if (i === 0) {
            var _children = tree.slice(lastLineBreakIndex + 1, index).concat(
                createLineElement({
                  children: [newChild],
                  className: node.properties.className,
                })
              ),
              _line = createLine(_children, lineNumber2);
            newTree.push(_line);
          } else if (i === splitValue.length - 1) {
            var stringChild =
                tree[index + 1] &&
                tree[index + 1].children &&
                tree[index + 1].children[0],
              lastLineInPreviousSpan = { type: 'text', value: ''.concat(text) };
            if (stringChild) {
              var newElem = createLineElement({
                children: [lastLineInPreviousSpan],
                className: node.properties.className,
              });
              tree.splice(index + 1, 0, newElem);
            } else {
              var _children2 = [lastLineInPreviousSpan],
                _line2 = createLine(
                  _children2,
                  lineNumber2,
                  node.properties.className
                );
              newTree.push(_line2);
            }
          } else {
            var _children3 = [newChild],
              _line3 = createLine(
                _children3,
                lineNumber2,
                node.properties.className
              );
            newTree.push(_line3);
          }
        }),
          (lastLineBreakIndex = index);
      }
      index++;
    };
    index < tree.length;

  )
    _loop();
  if (lastLineBreakIndex !== tree.length - 1) {
    var children = tree.slice(lastLineBreakIndex + 1, tree.length);
    if (children && children.length) {
      var lineNumber = showLineNumbers && newTree.length + startingLineNumber,
        line = createLine(children, lineNumber);
      newTree.push(line);
    }
  }
  return wrapLines ? newTree : (_ref4 = []).concat.apply(_ref4, newTree);
}
function defaultRenderer(_ref5) {
  var rows = _ref5.rows,
    stylesheet = _ref5.stylesheet,
    useInlineStyles = _ref5.useInlineStyles;
  return rows.map(function (node, i) {
    return createElement({
      node,
      stylesheet,
      useInlineStyles,
      key: 'code-segement'.concat(i),
    });
  });
}
function isHighlightJs(astGenerator) {
  return astGenerator && typeof astGenerator.highlightAuto < 'u';
}
function getCodeTree(_ref6) {
  var astGenerator = _ref6.astGenerator,
    language = _ref6.language,
    code = _ref6.code,
    defaultCodeValue = _ref6.defaultCodeValue;
  if (isHighlightJs(astGenerator)) {
    var hasLanguage = checkForListedLanguage_default(astGenerator, language);
    return language === 'text'
      ? { value: defaultCodeValue, language: 'text' }
      : hasLanguage
      ? astGenerator.highlight(language, code)
      : astGenerator.highlightAuto(code);
  }
  try {
    return language && language !== 'text'
      ? { value: astGenerator.highlight(code, language) }
      : { value: defaultCodeValue };
  } catch {
    return { value: defaultCodeValue };
  }
}
function highlight_default(defaultAstGenerator, defaultStyle) {
  return function (_ref7) {
    var language = _ref7.language,
      children = _ref7.children,
      _ref7$style = _ref7.style,
      style = _ref7$style === void 0 ? defaultStyle : _ref7$style,
      _ref7$customStyle = _ref7.customStyle,
      customStyle = _ref7$customStyle === void 0 ? {} : _ref7$customStyle,
      _ref7$codeTagProps = _ref7.codeTagProps,
      codeTagProps =
        _ref7$codeTagProps === void 0
          ? {
              className: language ? 'language-'.concat(language) : void 0,
              style: _objectSpread2(
                _objectSpread2({}, style['code[class*="language-"]']),
                style['code[class*="language-'.concat(language, '"]')]
              ),
            }
          : _ref7$codeTagProps,
      _ref7$useInlineStyles = _ref7.useInlineStyles,
      useInlineStyles =
        _ref7$useInlineStyles === void 0 ? !0 : _ref7$useInlineStyles,
      _ref7$showLineNumbers = _ref7.showLineNumbers,
      showLineNumbers =
        _ref7$showLineNumbers === void 0 ? !1 : _ref7$showLineNumbers,
      _ref7$showInlineLineN = _ref7.showInlineLineNumbers,
      showInlineLineNumbers =
        _ref7$showInlineLineN === void 0 ? !0 : _ref7$showInlineLineN,
      _ref7$startingLineNum = _ref7.startingLineNumber,
      startingLineNumber =
        _ref7$startingLineNum === void 0 ? 1 : _ref7$startingLineNum,
      lineNumberContainerStyle = _ref7.lineNumberContainerStyle,
      _ref7$lineNumberStyle = _ref7.lineNumberStyle,
      lineNumberStyle =
        _ref7$lineNumberStyle === void 0 ? {} : _ref7$lineNumberStyle,
      wrapLines = _ref7.wrapLines,
      _ref7$wrapLongLines = _ref7.wrapLongLines,
      wrapLongLines = _ref7$wrapLongLines === void 0 ? !1 : _ref7$wrapLongLines,
      _ref7$lineProps = _ref7.lineProps,
      lineProps = _ref7$lineProps === void 0 ? {} : _ref7$lineProps,
      renderer = _ref7.renderer,
      _ref7$PreTag = _ref7.PreTag,
      PreTag = _ref7$PreTag === void 0 ? 'pre' : _ref7$PreTag,
      _ref7$CodeTag = _ref7.CodeTag,
      CodeTag = _ref7$CodeTag === void 0 ? 'code' : _ref7$CodeTag,
      _ref7$code = _ref7.code,
      code =
        _ref7$code === void 0
          ? (Array.isArray(children) ? children[0] : children) || ''
          : _ref7$code,
      astGenerator = _ref7.astGenerator,
      rest = _objectWithoutProperties(_ref7, _excluded);
    astGenerator = astGenerator || defaultAstGenerator;
    var allLineNumbers = showLineNumbers
        ? import_react3.default.createElement(AllLineNumbers, {
            containerStyle: lineNumberContainerStyle,
            codeStyle: codeTagProps.style || {},
            numberStyle: lineNumberStyle,
            startingLineNumber,
            codeString: code,
          })
        : null,
      defaultPreStyle = style.hljs ||
        style['pre[class*="language-"]'] || { backgroundColor: '#fff' },
      generatorClassName = isHighlightJs(astGenerator) ? 'hljs' : 'prismjs',
      preProps = useInlineStyles
        ? Object.assign({}, rest, {
            style: Object.assign({}, defaultPreStyle, customStyle),
          })
        : Object.assign({}, rest, {
            className: rest.className
              ? ''.concat(generatorClassName, ' ').concat(rest.className)
              : generatorClassName,
            style: Object.assign({}, customStyle),
          });
    if (
      (wrapLongLines
        ? (codeTagProps.style = _objectSpread2(
            _objectSpread2({}, codeTagProps.style),
            {},
            { whiteSpace: 'pre-wrap' }
          ))
        : (codeTagProps.style = _objectSpread2(
            _objectSpread2({}, codeTagProps.style),
            {},
            { whiteSpace: 'pre' }
          )),
      !astGenerator)
    )
      return import_react3.default.createElement(
        PreTag,
        preProps,
        allLineNumbers,
        import_react3.default.createElement(CodeTag, codeTagProps, code)
      );
    ((wrapLines === void 0 && renderer) || wrapLongLines) && (wrapLines = !0),
      (renderer = renderer || defaultRenderer);
    var defaultCodeValue = [{ type: 'text', value: code }],
      codeTree = getCodeTree({
        astGenerator,
        language,
        code,
        defaultCodeValue,
      });
    codeTree.language === null && (codeTree.value = defaultCodeValue);
    var largestLineNumber = codeTree.value.length + startingLineNumber,
      rows = processLines(
        codeTree,
        wrapLines,
        lineProps,
        showLineNumbers,
        showInlineLineNumbers,
        startingLineNumber,
        largestLineNumber,
        lineNumberStyle,
        wrapLongLines
      );
    return import_react3.default.createElement(
      PreTag,
      preProps,
      import_react3.default.createElement(
        CodeTag,
        codeTagProps,
        !showInlineLineNumbers && allLineNumbers,
        renderer({ rows, stylesheet: style, useInlineStyles })
      )
    );
  };
}
var import_core = __toESM2(require_core()),
  SyntaxHighlighter = highlight_default(import_core.default, {});
SyntaxHighlighter.registerLanguage = function (_, language) {
  return import_core.default.register(language);
};
SyntaxHighlighter.alias = function (name, aliases) {
  return import_core.default.alias(name, aliases);
};
var prism_light_default = SyntaxHighlighter,
  Container = newStyled.div(({ theme }) => ({
    position: 'absolute',
    bottom: 0,
    right: 0,
    maxWidth: '100%',
    display: 'flex',
    background: theme.background.content,
    zIndex: 1,
  })),
  ActionButton = newStyled.button(
    ({ theme }) => ({
      margin: 0,
      border: '0 none',
      padding: '4px 10px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      color: theme.color.defaultText,
      background: theme.background.content,
      fontSize: 12,
      lineHeight: '16px',
      fontFamily: theme.typography.fonts.base,
      fontWeight: theme.typography.weight.bold,
      borderTop: `1px solid ${theme.appBorderColor}`,
      borderLeft: `1px solid ${theme.appBorderColor}`,
      marginLeft: -1,
      borderRadius: '4px 0 0 0',
      '&:not(:last-child)': {
        borderRight: `1px solid ${theme.appBorderColor}`,
      },
      '& + *': {
        borderLeft: `1px solid ${theme.appBorderColor}`,
        borderRadius: 0,
      },
      '&:focus': {
        boxShadow: `${theme.color.secondary} 0 -3px 0 0 inset`,
        outline: '0 none',
      },
    }),
    ({ disabled }) => disabled && { cursor: 'not-allowed', opacity: 0.5 }
  );
ActionButton.displayName = 'ActionButton';
var ActionBar = ({ actionItems, ...props }) =>
    import_react3.default.createElement(
      Container,
      { ...props },
      actionItems.map(({ title, className, onClick, disabled }, index) =>
        import_react3.default.createElement(
          ActionButton,
          { key: index, className, onClick, disabled },
          title
        )
      )
    ),
  $8927f6f2acc4f386$var$NODES = [
    'a',
    'button',
    'div',
    'form',
    'h2',
    'h3',
    'img',
    'input',
    'label',
    'li',
    'nav',
    'ol',
    'p',
    'span',
    'svg',
    'ul',
  ],
  $8927f6f2acc4f386$export$250ffa63cdc0d034 =
    $8927f6f2acc4f386$var$NODES.reduce((primitive, node) => {
      let Node = (0, import_react3.forwardRef)((props, forwardedRef) => {
        let { asChild, ...primitiveProps } = props,
          Comp = asChild ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : node;
        return (
          (0, import_react3.useEffect)(() => {
            window[Symbol.for('radix-ui')] = !0;
          }, []),
          (0, import_react3.createElement)(
            Comp,
            _extends({}, primitiveProps, { ref: forwardedRef })
          )
        );
      });
      return (
        (Node.displayName = `Primitive.${node}`), { ...primitive, [node]: Node }
      );
    }, {});
function $6ed0406888f73fc4$var$setRef2(ref, value) {
  typeof ref == 'function' ? ref(value) : ref != null && (ref.current = value);
}
function $6ed0406888f73fc4$export$43e446d32b3d21af2(...refs) {
  return (node) =>
    refs.forEach((ref) => $6ed0406888f73fc4$var$setRef2(ref, node));
}
function $6ed0406888f73fc4$export$c7b2cbe3552a0d05(...refs) {
  return (0, import_react3.useCallback)(
    $6ed0406888f73fc4$export$43e446d32b3d21af2(...refs),
    refs
  );
}
var $9f79659886946c16$export$e5c5a5f917a5871c = globalThis?.document
  ? import_react3.useLayoutEffect
  : () => {};
function $fe963b355347cc68$export$3e6543de14f8614f(initialState, machine) {
  return (0, import_react3.useReducer)(
    (state, event) => machine[state][event] ?? state,
    initialState
  );
}
var $921a889cee6df7e8$export$99c2b779aa4e8b8b = (props) => {
  let { present, children } = props,
    presence = $921a889cee6df7e8$var$usePresence(present),
    child =
      typeof children == 'function'
        ? children({ present: presence.isPresent })
        : import_react3.Children.only(children),
    ref = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(presence.ref, child.ref);
  return typeof children == 'function' || presence.isPresent
    ? (0, import_react3.cloneElement)(child, { ref })
    : null;
};
$921a889cee6df7e8$export$99c2b779aa4e8b8b.displayName = 'Presence';
function $921a889cee6df7e8$var$usePresence(present) {
  let [node1, setNode] = (0, import_react3.useState)(),
    stylesRef = (0, import_react3.useRef)({}),
    prevPresentRef = (0, import_react3.useRef)(present),
    prevAnimationNameRef = (0, import_react3.useRef)('none'),
    initialState = present ? 'mounted' : 'unmounted',
    [state, send] = $fe963b355347cc68$export$3e6543de14f8614f(initialState, {
      mounted: { UNMOUNT: 'unmounted', ANIMATION_OUT: 'unmountSuspended' },
      unmountSuspended: { MOUNT: 'mounted', ANIMATION_END: 'unmounted' },
      unmounted: { MOUNT: 'mounted' },
    });
  return (
    (0, import_react3.useEffect)(() => {
      let currentAnimationName = $921a889cee6df7e8$var$getAnimationName(
        stylesRef.current
      );
      prevAnimationNameRef.current =
        state === 'mounted' ? currentAnimationName : 'none';
    }, [state]),
    $9f79659886946c16$export$e5c5a5f917a5871c(() => {
      let styles = stylesRef.current,
        wasPresent = prevPresentRef.current;
      if (wasPresent !== present) {
        let prevAnimationName = prevAnimationNameRef.current,
          currentAnimationName = $921a889cee6df7e8$var$getAnimationName(styles);
        present
          ? send('MOUNT')
          : currentAnimationName === 'none' || styles?.display === 'none'
          ? send('UNMOUNT')
          : send(
              wasPresent && prevAnimationName !== currentAnimationName
                ? 'ANIMATION_OUT'
                : 'UNMOUNT'
            ),
          (prevPresentRef.current = present);
      }
    }, [present, send]),
    $9f79659886946c16$export$e5c5a5f917a5871c(() => {
      if (node1) {
        let handleAnimationEnd = (event) => {
            let isCurrentAnimation = $921a889cee6df7e8$var$getAnimationName(
              stylesRef.current
            ).includes(event.animationName);
            event.target === node1 &&
              isCurrentAnimation &&
              (0, import_react_dom.flushSync)(() => send('ANIMATION_END'));
          },
          handleAnimationStart = (event) => {
            event.target === node1 &&
              (prevAnimationNameRef.current =
                $921a889cee6df7e8$var$getAnimationName(stylesRef.current));
          };
        return (
          node1.addEventListener('animationstart', handleAnimationStart),
          node1.addEventListener('animationcancel', handleAnimationEnd),
          node1.addEventListener('animationend', handleAnimationEnd),
          () => {
            node1.removeEventListener('animationstart', handleAnimationStart),
              node1.removeEventListener('animationcancel', handleAnimationEnd),
              node1.removeEventListener('animationend', handleAnimationEnd);
          }
        );
      } else send('ANIMATION_END');
    }, [node1, send]),
    {
      isPresent: ['mounted', 'unmountSuspended'].includes(state),
      ref: (0, import_react3.useCallback)((node) => {
        node && (stylesRef.current = getComputedStyle(node)), setNode(node);
      }, []),
    }
  );
}
function $921a889cee6df7e8$var$getAnimationName(styles) {
  return styles?.animationName || 'none';
}
function $c512c27ab02ef895$export$50c7b4e9d9f19c1(
  scopeName,
  createContextScopeDeps = []
) {
  let defaultContexts = [];
  function $c512c27ab02ef895$export$fd42f52fd3ae1109(
    rootComponentName,
    defaultContext
  ) {
    let BaseContext = (0, import_react3.createContext)(defaultContext),
      index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    function Provider(props) {
      let { scope: scope2, children, ...context } = props,
        Context = scope2?.[scopeName][index] || BaseContext,
        value = (0, import_react3.useMemo)(
          () => context,
          Object.values(context)
        );
      return (0, import_react3.createElement)(
        Context.Provider,
        { value },
        children
      );
    }
    function useContext$1(consumerName, scope2) {
      let Context = scope2?.[scopeName][index] || BaseContext,
        context = (0, import_react3.useContext)(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(
        `\`${consumerName}\` must be used within \`${rootComponentName}\``
      );
    }
    return (
      (Provider.displayName = rootComponentName + 'Provider'),
      [Provider, useContext$1]
    );
  }
  let createScope = () => {
    let scopeContexts = defaultContexts.map((defaultContext) =>
      (0, import_react3.createContext)(defaultContext)
    );
    return function (scope2) {
      let contexts = scope2?.[scopeName] || scopeContexts;
      return (0, import_react3.useMemo)(
        () => ({
          [`__scope${scopeName}`]: { ...scope2, [scopeName]: contexts },
        }),
        [scope2, contexts]
      );
    };
  };
  return (
    (createScope.scopeName = scopeName),
    [
      $c512c27ab02ef895$export$fd42f52fd3ae1109,
      $c512c27ab02ef895$var$composeContextScopes(
        createScope,
        ...createContextScopeDeps
      ),
    ]
  );
}
function $c512c27ab02ef895$var$composeContextScopes(...scopes) {
  let baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  let createScope1 = () => {
    let scopeHooks = scopes.map((createScope) => ({
      useScope: createScope(),
      scopeName: createScope.scopeName,
    }));
    return function (overrideScopes) {
      let nextScopes1 = scopeHooks.reduce(
        (nextScopes, { useScope, scopeName }) => {
          let currentScope = useScope(overrideScopes)[`__scope${scopeName}`];
          return { ...nextScopes, ...currentScope };
        },
        {}
      );
      return (0, import_react3.useMemo)(
        () => ({ [`__scope${baseScope.scopeName}`]: nextScopes1 }),
        [nextScopes1]
      );
    };
  };
  return (createScope1.scopeName = baseScope.scopeName), createScope1;
}
function $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(callback) {
  let callbackRef = (0, import_react3.useRef)(callback);
  return (
    (0, import_react3.useEffect)(() => {
      callbackRef.current = callback;
    }),
    (0, import_react3.useMemo)(
      () =>
        (...args) => {
          var _callbackRef$current;
          return (_callbackRef$current = callbackRef.current) === null ||
            _callbackRef$current === void 0
            ? void 0
            : _callbackRef$current.call(callbackRef, ...args);
        },
      []
    )
  );
}
var $f631663db3294ace$var$DirectionContext = (0, import_react3.createContext)(
  void 0
);
function $f631663db3294ace$export$b39126d51d94e6f3(localDir) {
  let globalDir = (0, import_react3.useContext)(
    $f631663db3294ace$var$DirectionContext
  );
  return localDir || globalDir || 'ltr';
}
function $ae6933e535247d3d$export$7d15b64cf5a3a4c4(value, [min, max]) {
  return Math.min(max, Math.max(min, value));
}
function $e42e1063c40fb3ef$export$b9ecd428b558ff10(
  originalEventHandler,
  ourEventHandler,
  { checkForDefaultPrevented = !0 } = {}
) {
  return function (event) {
    if (
      (originalEventHandler?.(event),
      checkForDefaultPrevented === !1 || !event.defaultPrevented)
    )
      return ourEventHandler?.(event);
  };
}
function $6c2e24571c90391f$export$3e6543de14f8614f(initialState, machine) {
  return (0, import_react3.useReducer)(
    (state, event) => machine[state][event] ?? state,
    initialState
  );
}
var $57acba87d6e25586$var$SCROLL_AREA_NAME = 'ScrollArea',
  [
    $57acba87d6e25586$var$createScrollAreaContext,
    $57acba87d6e25586$export$488468afe3a6f2b1,
  ] = $c512c27ab02ef895$export$50c7b4e9d9f19c1(
    $57acba87d6e25586$var$SCROLL_AREA_NAME
  ),
  [
    $57acba87d6e25586$var$ScrollAreaProvider,
    $57acba87d6e25586$var$useScrollAreaContext,
  ] = $57acba87d6e25586$var$createScrollAreaContext(
    $57acba87d6e25586$var$SCROLL_AREA_NAME
  ),
  $57acba87d6e25586$export$ccf8d8d7bbf3c2cc = (0, import_react3.forwardRef)(
    (props, forwardedRef) => {
      let {
          __scopeScrollArea,
          type = 'hover',
          dir,
          scrollHideDelay = 600,
          ...scrollAreaProps
        } = props,
        [scrollArea, setScrollArea] = (0, import_react3.useState)(null),
        [viewport, setViewport] = (0, import_react3.useState)(null),
        [content, setContent] = (0, import_react3.useState)(null),
        [scrollbarX, setScrollbarX] = (0, import_react3.useState)(null),
        [scrollbarY, setScrollbarY] = (0, import_react3.useState)(null),
        [cornerWidth, setCornerWidth] = (0, import_react3.useState)(0),
        [cornerHeight, setCornerHeight] = (0, import_react3.useState)(0),
        [scrollbarXEnabled, setScrollbarXEnabled] = (0, import_react3.useState)(
          !1
        ),
        [scrollbarYEnabled, setScrollbarYEnabled] = (0, import_react3.useState)(
          !1
        ),
        composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
          forwardedRef,
          (node) => setScrollArea(node)
        ),
        direction = $f631663db3294ace$export$b39126d51d94e6f3(dir);
      return (0, import_react3.createElement)(
        $57acba87d6e25586$var$ScrollAreaProvider,
        {
          scope: __scopeScrollArea,
          type,
          dir: direction,
          scrollHideDelay,
          scrollArea,
          viewport,
          onViewportChange: setViewport,
          content,
          onContentChange: setContent,
          scrollbarX,
          onScrollbarXChange: setScrollbarX,
          scrollbarXEnabled,
          onScrollbarXEnabledChange: setScrollbarXEnabled,
          scrollbarY,
          onScrollbarYChange: setScrollbarY,
          scrollbarYEnabled,
          onScrollbarYEnabledChange: setScrollbarYEnabled,
          onCornerWidthChange: setCornerWidth,
          onCornerHeightChange: setCornerHeight,
        },
        (0, import_react3.createElement)(
          $8927f6f2acc4f386$export$250ffa63cdc0d034.div,
          _extends({ dir: direction }, scrollAreaProps, {
            ref: composedRefs,
            style: {
              position: 'relative',
              '--radix-scroll-area-corner-width': cornerWidth + 'px',
              '--radix-scroll-area-corner-height': cornerHeight + 'px',
              ...props.style,
            },
          })
        )
      );
    }
  ),
  $57acba87d6e25586$var$VIEWPORT_NAME = 'ScrollAreaViewport',
  $57acba87d6e25586$export$a21cbf9f11fca853 = (0, import_react3.forwardRef)(
    (props, forwardedRef) => {
      let { __scopeScrollArea, children, ...viewportProps } = props,
        context = $57acba87d6e25586$var$useScrollAreaContext(
          $57acba87d6e25586$var$VIEWPORT_NAME,
          __scopeScrollArea
        ),
        ref = (0, import_react3.useRef)(null),
        composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
          forwardedRef,
          ref,
          context.onViewportChange
        );
      return (0, import_react3.createElement)(
        import_react3.Fragment,
        null,
        (0, import_react3.createElement)('style', {
          dangerouslySetInnerHTML: {
            __html:
              '[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}',
          },
        }),
        (0, import_react3.createElement)(
          $8927f6f2acc4f386$export$250ffa63cdc0d034.div,
          _extends({ 'data-radix-scroll-area-viewport': '' }, viewportProps, {
            ref: composedRefs,
            style: {
              overflowX: context.scrollbarXEnabled ? 'scroll' : 'hidden',
              overflowY: context.scrollbarYEnabled ? 'scroll' : 'hidden',
              ...props.style,
            },
          }),
          (0, import_react3.createElement)(
            'div',
            {
              ref: context.onContentChange,
              style: { minWidth: '100%', display: 'table' },
            },
            children
          )
        )
      );
    }
  ),
  $57acba87d6e25586$var$SCROLLBAR_NAME = 'ScrollAreaScrollbar',
  $57acba87d6e25586$export$2fabd85d0eba3c57 = (0, import_react3.forwardRef)(
    (props, forwardedRef) => {
      let { forceMount, ...scrollbarProps } = props,
        context = $57acba87d6e25586$var$useScrollAreaContext(
          $57acba87d6e25586$var$SCROLLBAR_NAME,
          props.__scopeScrollArea
        ),
        { onScrollbarXEnabledChange, onScrollbarYEnabledChange } = context,
        isHorizontal = props.orientation === 'horizontal';
      return (
        (0, import_react3.useEffect)(
          () => (
            isHorizontal
              ? onScrollbarXEnabledChange(!0)
              : onScrollbarYEnabledChange(!0),
            () => {
              isHorizontal
                ? onScrollbarXEnabledChange(!1)
                : onScrollbarYEnabledChange(!1);
            }
          ),
          [isHorizontal, onScrollbarXEnabledChange, onScrollbarYEnabledChange]
        ),
        context.type === 'hover'
          ? (0, import_react3.createElement)(
              $57acba87d6e25586$var$ScrollAreaScrollbarHover,
              _extends({}, scrollbarProps, { ref: forwardedRef, forceMount })
            )
          : context.type === 'scroll'
          ? (0, import_react3.createElement)(
              $57acba87d6e25586$var$ScrollAreaScrollbarScroll,
              _extends({}, scrollbarProps, { ref: forwardedRef, forceMount })
            )
          : context.type === 'auto'
          ? (0, import_react3.createElement)(
              $57acba87d6e25586$var$ScrollAreaScrollbarAuto,
              _extends({}, scrollbarProps, { ref: forwardedRef, forceMount })
            )
          : context.type === 'always'
          ? (0, import_react3.createElement)(
              $57acba87d6e25586$var$ScrollAreaScrollbarVisible,
              _extends({}, scrollbarProps, { ref: forwardedRef })
            )
          : null
      );
    }
  ),
  $57acba87d6e25586$var$ScrollAreaScrollbarHover = (0,
  import_react3.forwardRef)((props, forwardedRef) => {
    let { forceMount, ...scrollbarProps } = props,
      context = $57acba87d6e25586$var$useScrollAreaContext(
        $57acba87d6e25586$var$SCROLLBAR_NAME,
        props.__scopeScrollArea
      ),
      [visible, setVisible] = (0, import_react3.useState)(!1);
    return (
      (0, import_react3.useEffect)(() => {
        let scrollArea = context.scrollArea,
          hideTimer = 0;
        if (scrollArea) {
          let handlePointerEnter = () => {
              window.clearTimeout(hideTimer), setVisible(!0);
            },
            handlePointerLeave = () => {
              hideTimer = window.setTimeout(
                () => setVisible(!1),
                context.scrollHideDelay
              );
            };
          return (
            scrollArea.addEventListener('pointerenter', handlePointerEnter),
            scrollArea.addEventListener('pointerleave', handlePointerLeave),
            () => {
              window.clearTimeout(hideTimer),
                scrollArea.removeEventListener(
                  'pointerenter',
                  handlePointerEnter
                ),
                scrollArea.removeEventListener(
                  'pointerleave',
                  handlePointerLeave
                );
            }
          );
        }
      }, [context.scrollArea, context.scrollHideDelay]),
      (0, import_react3.createElement)(
        $921a889cee6df7e8$export$99c2b779aa4e8b8b,
        { present: forceMount || visible },
        (0, import_react3.createElement)(
          $57acba87d6e25586$var$ScrollAreaScrollbarAuto,
          _extends(
            { 'data-state': visible ? 'visible' : 'hidden' },
            scrollbarProps,
            { ref: forwardedRef }
          )
        )
      )
    );
  }),
  $57acba87d6e25586$var$ScrollAreaScrollbarScroll = (0,
  import_react3.forwardRef)((props, forwardedRef) => {
    let { forceMount, ...scrollbarProps } = props,
      context = $57acba87d6e25586$var$useScrollAreaContext(
        $57acba87d6e25586$var$SCROLLBAR_NAME,
        props.__scopeScrollArea
      ),
      isHorizontal = props.orientation === 'horizontal',
      debounceScrollEnd = $57acba87d6e25586$var$useDebounceCallback(
        () => send('SCROLL_END'),
        100
      ),
      [state, send] = $6c2e24571c90391f$export$3e6543de14f8614f('hidden', {
        hidden: { SCROLL: 'scrolling' },
        scrolling: { SCROLL_END: 'idle', POINTER_ENTER: 'interacting' },
        interacting: { SCROLL: 'interacting', POINTER_LEAVE: 'idle' },
        idle: {
          HIDE: 'hidden',
          SCROLL: 'scrolling',
          POINTER_ENTER: 'interacting',
        },
      });
    return (
      (0, import_react3.useEffect)(() => {
        if (state === 'idle') {
          let hideTimer = window.setTimeout(
            () => send('HIDE'),
            context.scrollHideDelay
          );
          return () => window.clearTimeout(hideTimer);
        }
      }, [state, context.scrollHideDelay, send]),
      (0, import_react3.useEffect)(() => {
        let viewport = context.viewport,
          scrollDirection = isHorizontal ? 'scrollLeft' : 'scrollTop';
        if (viewport) {
          let prevScrollPos = viewport[scrollDirection],
            handleScroll = () => {
              let scrollPos = viewport[scrollDirection];
              prevScrollPos !== scrollPos &&
                (send('SCROLL'), debounceScrollEnd()),
                (prevScrollPos = scrollPos);
            };
          return (
            viewport.addEventListener('scroll', handleScroll),
            () => viewport.removeEventListener('scroll', handleScroll)
          );
        }
      }, [context.viewport, isHorizontal, send, debounceScrollEnd]),
      (0, import_react3.createElement)(
        $921a889cee6df7e8$export$99c2b779aa4e8b8b,
        { present: forceMount || state !== 'hidden' },
        (0, import_react3.createElement)(
          $57acba87d6e25586$var$ScrollAreaScrollbarVisible,
          _extends(
            { 'data-state': state === 'hidden' ? 'hidden' : 'visible' },
            scrollbarProps,
            {
              ref: forwardedRef,
              onPointerEnter: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                props.onPointerEnter,
                () => send('POINTER_ENTER')
              ),
              onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                props.onPointerLeave,
                () => send('POINTER_LEAVE')
              ),
            }
          )
        )
      )
    );
  }),
  $57acba87d6e25586$var$ScrollAreaScrollbarAuto = (0, import_react3.forwardRef)(
    (props, forwardedRef) => {
      let context = $57acba87d6e25586$var$useScrollAreaContext(
          $57acba87d6e25586$var$SCROLLBAR_NAME,
          props.__scopeScrollArea
        ),
        { forceMount, ...scrollbarProps } = props,
        [visible, setVisible] = (0, import_react3.useState)(!1),
        isHorizontal = props.orientation === 'horizontal',
        handleResize = $57acba87d6e25586$var$useDebounceCallback(() => {
          if (context.viewport) {
            let isOverflowX =
                context.viewport.offsetWidth < context.viewport.scrollWidth,
              isOverflowY =
                context.viewport.offsetHeight < context.viewport.scrollHeight;
            setVisible(isHorizontal ? isOverflowX : isOverflowY);
          }
        }, 10);
      return (
        $57acba87d6e25586$var$useResizeObserver(context.viewport, handleResize),
        $57acba87d6e25586$var$useResizeObserver(context.content, handleResize),
        (0, import_react3.createElement)(
          $921a889cee6df7e8$export$99c2b779aa4e8b8b,
          { present: forceMount || visible },
          (0, import_react3.createElement)(
            $57acba87d6e25586$var$ScrollAreaScrollbarVisible,
            _extends(
              { 'data-state': visible ? 'visible' : 'hidden' },
              scrollbarProps,
              { ref: forwardedRef }
            )
          )
        )
      );
    }
  ),
  $57acba87d6e25586$var$ScrollAreaScrollbarVisible = (0,
  import_react3.forwardRef)((props, forwardedRef) => {
    let { orientation = 'vertical', ...scrollbarProps } = props,
      context = $57acba87d6e25586$var$useScrollAreaContext(
        $57acba87d6e25586$var$SCROLLBAR_NAME,
        props.__scopeScrollArea
      ),
      thumbRef = (0, import_react3.useRef)(null),
      pointerOffsetRef = (0, import_react3.useRef)(0),
      [sizes, setSizes] = (0, import_react3.useState)({
        content: 0,
        viewport: 0,
        scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 },
      }),
      thumbRatio = $57acba87d6e25586$var$getThumbRatio(
        sizes.viewport,
        sizes.content
      ),
      commonProps = {
        ...scrollbarProps,
        sizes,
        onSizesChange: setSizes,
        hasThumb: thumbRatio > 0 && thumbRatio < 1,
        onThumbChange: (thumb) => (thumbRef.current = thumb),
        onThumbPointerUp: () => (pointerOffsetRef.current = 0),
        onThumbPointerDown: (pointerPos) =>
          (pointerOffsetRef.current = pointerPos),
      };
    function getScrollPosition(pointerPos, dir) {
      return $57acba87d6e25586$var$getScrollPositionFromPointer(
        pointerPos,
        pointerOffsetRef.current,
        sizes,
        dir
      );
    }
    return orientation === 'horizontal'
      ? (0, import_react3.createElement)(
          $57acba87d6e25586$var$ScrollAreaScrollbarX,
          _extends({}, commonProps, {
            ref: forwardedRef,
            onThumbPositionChange: () => {
              if (context.viewport && thumbRef.current) {
                let scrollPos = context.viewport.scrollLeft,
                  offset = $57acba87d6e25586$var$getThumbOffsetFromScroll(
                    scrollPos,
                    sizes,
                    context.dir
                  );
                thumbRef.current.style.transform = `translate3d(${offset}px, 0, 0)`;
              }
            },
            onWheelScroll: (scrollPos) => {
              context.viewport && (context.viewport.scrollLeft = scrollPos);
            },
            onDragScroll: (pointerPos) => {
              context.viewport &&
                (context.viewport.scrollLeft = getScrollPosition(
                  pointerPos,
                  context.dir
                ));
            },
          })
        )
      : orientation === 'vertical'
      ? (0, import_react3.createElement)(
          $57acba87d6e25586$var$ScrollAreaScrollbarY,
          _extends({}, commonProps, {
            ref: forwardedRef,
            onThumbPositionChange: () => {
              if (context.viewport && thumbRef.current) {
                let scrollPos = context.viewport.scrollTop,
                  offset = $57acba87d6e25586$var$getThumbOffsetFromScroll(
                    scrollPos,
                    sizes
                  );
                thumbRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
              }
            },
            onWheelScroll: (scrollPos) => {
              context.viewport && (context.viewport.scrollTop = scrollPos);
            },
            onDragScroll: (pointerPos) => {
              context.viewport &&
                (context.viewport.scrollTop = getScrollPosition(pointerPos));
            },
          })
        )
      : null;
  }),
  $57acba87d6e25586$var$ScrollAreaScrollbarX = (0, import_react3.forwardRef)(
    (props, forwardedRef) => {
      let { sizes, onSizesChange, ...scrollbarProps } = props,
        context = $57acba87d6e25586$var$useScrollAreaContext(
          $57acba87d6e25586$var$SCROLLBAR_NAME,
          props.__scopeScrollArea
        ),
        [computedStyle, setComputedStyle] = (0, import_react3.useState)(),
        ref = (0, import_react3.useRef)(null),
        composeRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
          forwardedRef,
          ref,
          context.onScrollbarXChange
        );
      return (
        (0, import_react3.useEffect)(() => {
          ref.current && setComputedStyle(getComputedStyle(ref.current));
        }, [ref]),
        (0, import_react3.createElement)(
          $57acba87d6e25586$var$ScrollAreaScrollbarImpl,
          _extends({ 'data-orientation': 'horizontal' }, scrollbarProps, {
            ref: composeRefs,
            sizes,
            style: {
              bottom: 0,
              left:
                context.dir === 'rtl'
                  ? 'var(--radix-scroll-area-corner-width)'
                  : 0,
              right:
                context.dir === 'ltr'
                  ? 'var(--radix-scroll-area-corner-width)'
                  : 0,
              '--radix-scroll-area-thumb-width':
                $57acba87d6e25586$var$getThumbSize(sizes) + 'px',
              ...props.style,
            },
            onThumbPointerDown: (pointerPos) =>
              props.onThumbPointerDown(pointerPos.x),
            onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.x),
            onWheelScroll: (event, maxScrollPos) => {
              if (context.viewport) {
                let scrollPos = context.viewport.scrollLeft + event.deltaX;
                props.onWheelScroll(scrollPos),
                  $57acba87d6e25586$var$isScrollingWithinScrollbarBounds(
                    scrollPos,
                    maxScrollPos
                  ) && event.preventDefault();
              }
            },
            onResize: () => {
              ref.current &&
                context.viewport &&
                computedStyle &&
                onSizesChange({
                  content: context.viewport.scrollWidth,
                  viewport: context.viewport.offsetWidth,
                  scrollbar: {
                    size: ref.current.clientWidth,
                    paddingStart: $57acba87d6e25586$var$toInt(
                      computedStyle.paddingLeft
                    ),
                    paddingEnd: $57acba87d6e25586$var$toInt(
                      computedStyle.paddingRight
                    ),
                  },
                });
            },
          })
        )
      );
    }
  ),
  $57acba87d6e25586$var$ScrollAreaScrollbarY = (0, import_react3.forwardRef)(
    (props, forwardedRef) => {
      let { sizes, onSizesChange, ...scrollbarProps } = props,
        context = $57acba87d6e25586$var$useScrollAreaContext(
          $57acba87d6e25586$var$SCROLLBAR_NAME,
          props.__scopeScrollArea
        ),
        [computedStyle, setComputedStyle] = (0, import_react3.useState)(),
        ref = (0, import_react3.useRef)(null),
        composeRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
          forwardedRef,
          ref,
          context.onScrollbarYChange
        );
      return (
        (0, import_react3.useEffect)(() => {
          ref.current && setComputedStyle(getComputedStyle(ref.current));
        }, [ref]),
        (0, import_react3.createElement)(
          $57acba87d6e25586$var$ScrollAreaScrollbarImpl,
          _extends({ 'data-orientation': 'vertical' }, scrollbarProps, {
            ref: composeRefs,
            sizes,
            style: {
              top: 0,
              right: context.dir === 'ltr' ? 0 : void 0,
              left: context.dir === 'rtl' ? 0 : void 0,
              bottom: 'var(--radix-scroll-area-corner-height)',
              '--radix-scroll-area-thumb-height':
                $57acba87d6e25586$var$getThumbSize(sizes) + 'px',
              ...props.style,
            },
            onThumbPointerDown: (pointerPos) =>
              props.onThumbPointerDown(pointerPos.y),
            onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.y),
            onWheelScroll: (event, maxScrollPos) => {
              if (context.viewport) {
                let scrollPos = context.viewport.scrollTop + event.deltaY;
                props.onWheelScroll(scrollPos),
                  $57acba87d6e25586$var$isScrollingWithinScrollbarBounds(
                    scrollPos,
                    maxScrollPos
                  ) && event.preventDefault();
              }
            },
            onResize: () => {
              ref.current &&
                context.viewport &&
                computedStyle &&
                onSizesChange({
                  content: context.viewport.scrollHeight,
                  viewport: context.viewport.offsetHeight,
                  scrollbar: {
                    size: ref.current.clientHeight,
                    paddingStart: $57acba87d6e25586$var$toInt(
                      computedStyle.paddingTop
                    ),
                    paddingEnd: $57acba87d6e25586$var$toInt(
                      computedStyle.paddingBottom
                    ),
                  },
                });
            },
          })
        )
      );
    }
  ),
  [
    $57acba87d6e25586$var$ScrollbarProvider,
    $57acba87d6e25586$var$useScrollbarContext,
  ] = $57acba87d6e25586$var$createScrollAreaContext(
    $57acba87d6e25586$var$SCROLLBAR_NAME
  ),
  $57acba87d6e25586$var$ScrollAreaScrollbarImpl = (0, import_react3.forwardRef)(
    (props, forwardedRef) => {
      let {
          __scopeScrollArea,
          sizes,
          hasThumb,
          onThumbChange,
          onThumbPointerUp,
          onThumbPointerDown,
          onThumbPositionChange,
          onDragScroll,
          onWheelScroll,
          onResize,
          ...scrollbarProps
        } = props,
        context = $57acba87d6e25586$var$useScrollAreaContext(
          $57acba87d6e25586$var$SCROLLBAR_NAME,
          __scopeScrollArea
        ),
        [scrollbar, setScrollbar] = (0, import_react3.useState)(null),
        composeRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
          forwardedRef,
          (node) => setScrollbar(node)
        ),
        rectRef = (0, import_react3.useRef)(null),
        prevWebkitUserSelectRef = (0, import_react3.useRef)(''),
        viewport = context.viewport,
        maxScrollPos = sizes.content - sizes.viewport,
        handleWheelScroll =
          $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onWheelScroll),
        handleThumbPositionChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(
          onThumbPositionChange
        ),
        handleResize = $57acba87d6e25586$var$useDebounceCallback(onResize, 10);
      function handleDragScroll(event) {
        if (rectRef.current) {
          let x = event.clientX - rectRef.current.left,
            y = event.clientY - rectRef.current.top;
          onDragScroll({ x, y });
        }
      }
      return (
        (0, import_react3.useEffect)(() => {
          let handleWheel = (event) => {
            let element = event.target;
            scrollbar?.contains(element) &&
              handleWheelScroll(event, maxScrollPos);
          };
          return (
            document.addEventListener('wheel', handleWheel, { passive: !1 }),
            () =>
              document.removeEventListener('wheel', handleWheel, {
                passive: !1,
              })
          );
        }, [viewport, scrollbar, maxScrollPos, handleWheelScroll]),
        (0, import_react3.useEffect)(handleThumbPositionChange, [
          sizes,
          handleThumbPositionChange,
        ]),
        $57acba87d6e25586$var$useResizeObserver(scrollbar, handleResize),
        $57acba87d6e25586$var$useResizeObserver(context.content, handleResize),
        (0, import_react3.createElement)(
          $57acba87d6e25586$var$ScrollbarProvider,
          {
            scope: __scopeScrollArea,
            scrollbar,
            hasThumb,
            onThumbChange:
              $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onThumbChange),
            onThumbPointerUp:
              $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onThumbPointerUp),
            onThumbPositionChange: handleThumbPositionChange,
            onThumbPointerDown:
              $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onThumbPointerDown),
          },
          (0, import_react3.createElement)(
            $8927f6f2acc4f386$export$250ffa63cdc0d034.div,
            _extends({}, scrollbarProps, {
              ref: composeRefs,
              style: { position: 'absolute', ...scrollbarProps.style },
              onPointerDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                props.onPointerDown,
                (event) => {
                  event.button === 0 &&
                    (event.target.setPointerCapture(event.pointerId),
                    (rectRef.current = scrollbar.getBoundingClientRect()),
                    (prevWebkitUserSelectRef.current =
                      document.body.style.webkitUserSelect),
                    (document.body.style.webkitUserSelect = 'none'),
                    context.viewport &&
                      (context.viewport.style.scrollBehavior = 'auto'),
                    handleDragScroll(event));
                }
              ),
              onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                props.onPointerMove,
                handleDragScroll
              ),
              onPointerUp: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                props.onPointerUp,
                (event) => {
                  let element = event.target;
                  element.hasPointerCapture(event.pointerId) &&
                    element.releasePointerCapture(event.pointerId),
                    (document.body.style.webkitUserSelect =
                      prevWebkitUserSelectRef.current),
                    context.viewport &&
                      (context.viewport.style.scrollBehavior = ''),
                    (rectRef.current = null);
                }
              ),
            })
          )
        )
      );
    }
  ),
  $57acba87d6e25586$var$THUMB_NAME = 'ScrollAreaThumb',
  $57acba87d6e25586$export$9fba1154677d7cd2 = (0, import_react3.forwardRef)(
    (props, forwardedRef) => {
      let { forceMount, ...thumbProps } = props,
        scrollbarContext = $57acba87d6e25586$var$useScrollbarContext(
          $57acba87d6e25586$var$THUMB_NAME,
          props.__scopeScrollArea
        );
      return (0, import_react3.createElement)(
        $921a889cee6df7e8$export$99c2b779aa4e8b8b,
        { present: forceMount || scrollbarContext.hasThumb },
        (0, import_react3.createElement)(
          $57acba87d6e25586$var$ScrollAreaThumbImpl,
          _extends({ ref: forwardedRef }, thumbProps)
        )
      );
    }
  ),
  $57acba87d6e25586$var$ScrollAreaThumbImpl = (0, import_react3.forwardRef)(
    (props, forwardedRef) => {
      let { __scopeScrollArea, style, ...thumbProps } = props,
        scrollAreaContext = $57acba87d6e25586$var$useScrollAreaContext(
          $57acba87d6e25586$var$THUMB_NAME,
          __scopeScrollArea
        ),
        scrollbarContext = $57acba87d6e25586$var$useScrollbarContext(
          $57acba87d6e25586$var$THUMB_NAME,
          __scopeScrollArea
        ),
        { onThumbPositionChange } = scrollbarContext,
        composedRef = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
          forwardedRef,
          (node) => scrollbarContext.onThumbChange(node)
        ),
        removeUnlinkedScrollListenerRef = (0, import_react3.useRef)(),
        debounceScrollEnd = $57acba87d6e25586$var$useDebounceCallback(() => {
          removeUnlinkedScrollListenerRef.current &&
            (removeUnlinkedScrollListenerRef.current(),
            (removeUnlinkedScrollListenerRef.current = void 0));
        }, 100);
      return (
        (0, import_react3.useEffect)(() => {
          let viewport = scrollAreaContext.viewport;
          if (viewport) {
            let handleScroll = () => {
              if (
                (debounceScrollEnd(), !removeUnlinkedScrollListenerRef.current)
              ) {
                let listener = $57acba87d6e25586$var$addUnlinkedScrollListener(
                  viewport,
                  onThumbPositionChange
                );
                (removeUnlinkedScrollListenerRef.current = listener),
                  onThumbPositionChange();
              }
            };
            return (
              onThumbPositionChange(),
              viewport.addEventListener('scroll', handleScroll),
              () => viewport.removeEventListener('scroll', handleScroll)
            );
          }
        }, [
          scrollAreaContext.viewport,
          debounceScrollEnd,
          onThumbPositionChange,
        ]),
        (0, import_react3.createElement)(
          $8927f6f2acc4f386$export$250ffa63cdc0d034.div,
          _extends(
            { 'data-state': scrollbarContext.hasThumb ? 'visible' : 'hidden' },
            thumbProps,
            {
              ref: composedRef,
              style: {
                width: 'var(--radix-scroll-area-thumb-width)',
                height: 'var(--radix-scroll-area-thumb-height)',
                ...style,
              },
              onPointerDownCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                props.onPointerDownCapture,
                (event) => {
                  let thumbRect = event.target.getBoundingClientRect(),
                    x = event.clientX - thumbRect.left,
                    y = event.clientY - thumbRect.top;
                  scrollbarContext.onThumbPointerDown({ x, y });
                }
              ),
              onPointerUp: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                props.onPointerUp,
                scrollbarContext.onThumbPointerUp
              ),
            }
          )
        )
      );
    }
  ),
  $57acba87d6e25586$var$CORNER_NAME = 'ScrollAreaCorner',
  $57acba87d6e25586$export$56969d565df7cc4b = (0, import_react3.forwardRef)(
    (props, forwardedRef) => {
      let context = $57acba87d6e25586$var$useScrollAreaContext(
          $57acba87d6e25586$var$CORNER_NAME,
          props.__scopeScrollArea
        ),
        hasBothScrollbarsVisible = !!(context.scrollbarX && context.scrollbarY);
      return context.type !== 'scroll' && hasBothScrollbarsVisible
        ? (0, import_react3.createElement)(
            $57acba87d6e25586$var$ScrollAreaCornerImpl,
            _extends({}, props, { ref: forwardedRef })
          )
        : null;
    }
  ),
  $57acba87d6e25586$var$ScrollAreaCornerImpl = (0, import_react3.forwardRef)(
    (props, forwardedRef) => {
      let { __scopeScrollArea, ...cornerProps } = props,
        context = $57acba87d6e25586$var$useScrollAreaContext(
          $57acba87d6e25586$var$CORNER_NAME,
          __scopeScrollArea
        ),
        [width1, setWidth] = (0, import_react3.useState)(0),
        [height1, setHeight] = (0, import_react3.useState)(0),
        hasSize = !!(width1 && height1);
      return (
        $57acba87d6e25586$var$useResizeObserver(context.scrollbarX, () => {
          var _context$scrollbarX;
          let height =
            ((_context$scrollbarX = context.scrollbarX) === null ||
            _context$scrollbarX === void 0
              ? void 0
              : _context$scrollbarX.offsetHeight) || 0;
          context.onCornerHeightChange(height), setHeight(height);
        }),
        $57acba87d6e25586$var$useResizeObserver(context.scrollbarY, () => {
          var _context$scrollbarY;
          let width =
            ((_context$scrollbarY = context.scrollbarY) === null ||
            _context$scrollbarY === void 0
              ? void 0
              : _context$scrollbarY.offsetWidth) || 0;
          context.onCornerWidthChange(width), setWidth(width);
        }),
        hasSize
          ? (0, import_react3.createElement)(
              $8927f6f2acc4f386$export$250ffa63cdc0d034.div,
              _extends({}, cornerProps, {
                ref: forwardedRef,
                style: {
                  width: width1,
                  height: height1,
                  position: 'absolute',
                  right: context.dir === 'ltr' ? 0 : void 0,
                  left: context.dir === 'rtl' ? 0 : void 0,
                  bottom: 0,
                  ...props.style,
                },
              })
            )
          : null
      );
    }
  );
function $57acba87d6e25586$var$toInt(value) {
  return value ? parseInt(value, 10) : 0;
}
function $57acba87d6e25586$var$getThumbRatio(viewportSize, contentSize) {
  let ratio = viewportSize / contentSize;
  return isNaN(ratio) ? 0 : ratio;
}
function $57acba87d6e25586$var$getThumbSize(sizes) {
  let ratio = $57acba87d6e25586$var$getThumbRatio(
      sizes.viewport,
      sizes.content
    ),
    scrollbarPadding =
      sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd,
    thumbSize = (sizes.scrollbar.size - scrollbarPadding) * ratio;
  return Math.max(thumbSize, 18);
}
function $57acba87d6e25586$var$getScrollPositionFromPointer(
  pointerPos,
  pointerOffset,
  sizes,
  dir = 'ltr'
) {
  let thumbSizePx = $57acba87d6e25586$var$getThumbSize(sizes),
    thumbCenter = thumbSizePx / 2,
    offset = pointerOffset || thumbCenter,
    thumbOffsetFromEnd = thumbSizePx - offset,
    minPointerPos = sizes.scrollbar.paddingStart + offset,
    maxPointerPos =
      sizes.scrollbar.size - sizes.scrollbar.paddingEnd - thumbOffsetFromEnd,
    maxScrollPos = sizes.content - sizes.viewport,
    scrollRange = dir === 'ltr' ? [0, maxScrollPos] : [maxScrollPos * -1, 0];
  return $57acba87d6e25586$var$linearScale(
    [minPointerPos, maxPointerPos],
    scrollRange
  )(pointerPos);
}
function $57acba87d6e25586$var$getThumbOffsetFromScroll(
  scrollPos,
  sizes,
  dir = 'ltr'
) {
  let thumbSizePx = $57acba87d6e25586$var$getThumbSize(sizes),
    scrollbarPadding =
      sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd,
    scrollbar = sizes.scrollbar.size - scrollbarPadding,
    maxScrollPos = sizes.content - sizes.viewport,
    maxThumbPos = scrollbar - thumbSizePx,
    scrollClampRange =
      dir === 'ltr' ? [0, maxScrollPos] : [maxScrollPos * -1, 0],
    scrollWithoutMomentum = $ae6933e535247d3d$export$7d15b64cf5a3a4c4(
      scrollPos,
      scrollClampRange
    );
  return $57acba87d6e25586$var$linearScale(
    [0, maxScrollPos],
    [0, maxThumbPos]
  )(scrollWithoutMomentum);
}
function $57acba87d6e25586$var$linearScale(input, output) {
  return (value) => {
    if (input[0] === input[1] || output[0] === output[1]) return output[0];
    let ratio = (output[1] - output[0]) / (input[1] - input[0]);
    return output[0] + ratio * (value - input[0]);
  };
}
function $57acba87d6e25586$var$isScrollingWithinScrollbarBounds(
  scrollPos,
  maxScrollPos
) {
  return scrollPos > 0 && scrollPos < maxScrollPos;
}
var $57acba87d6e25586$var$addUnlinkedScrollListener = (
  node,
  handler = () => {}
) => {
  let prevPosition = { left: node.scrollLeft, top: node.scrollTop },
    rAF = 0;
  return (
    (function loop() {
      let position = { left: node.scrollLeft, top: node.scrollTop },
        isHorizontalScroll = prevPosition.left !== position.left,
        isVerticalScroll = prevPosition.top !== position.top;
      (isHorizontalScroll || isVerticalScroll) && handler(),
        (prevPosition = position),
        (rAF = window.requestAnimationFrame(loop));
    })(),
    () => window.cancelAnimationFrame(rAF)
  );
};
function $57acba87d6e25586$var$useDebounceCallback(callback, delay) {
  let handleCallback = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(callback),
    debounceTimerRef = (0, import_react3.useRef)(0);
  return (
    (0, import_react3.useEffect)(
      () => () => window.clearTimeout(debounceTimerRef.current),
      []
    ),
    (0, import_react3.useCallback)(() => {
      window.clearTimeout(debounceTimerRef.current),
        (debounceTimerRef.current = window.setTimeout(handleCallback, delay));
    }, [handleCallback, delay])
  );
}
function $57acba87d6e25586$var$useResizeObserver(element, onResize) {
  let handleResize = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onResize);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    let rAF = 0;
    if (element) {
      let resizeObserver = new ResizeObserver(() => {
        cancelAnimationFrame(rAF),
          (rAF = window.requestAnimationFrame(handleResize));
      });
      return (
        resizeObserver.observe(element),
        () => {
          window.cancelAnimationFrame(rAF), resizeObserver.unobserve(element);
        }
      );
    }
  }, [element, handleResize]);
}
var $57acba87d6e25586$export$be92b6f5f03c0fe9 =
    $57acba87d6e25586$export$ccf8d8d7bbf3c2cc,
  $57acba87d6e25586$export$d5c6c08dc2d3ca7 =
    $57acba87d6e25586$export$a21cbf9f11fca853,
  $57acba87d6e25586$export$9a4e88b92edfce6b =
    $57acba87d6e25586$export$2fabd85d0eba3c57,
  $57acba87d6e25586$export$6521433ed15a34db =
    $57acba87d6e25586$export$9fba1154677d7cd2,
  $57acba87d6e25586$export$ac61190d9fc311a9 =
    $57acba87d6e25586$export$56969d565df7cc4b,
  ScrollAreaRoot = newStyled($57acba87d6e25586$export$be92b6f5f03c0fe9)(
    ({ scrollbarsize, offset }) => ({
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      '--scrollbar-size': `${scrollbarsize + offset}px`,
      '--radix-scroll-area-thumb-width': `${scrollbarsize}px`,
    })
  ),
  ScrollAreaViewport = newStyled($57acba87d6e25586$export$d5c6c08dc2d3ca7)({
    width: '100%',
    height: '100%',
  }),
  ScrollAreaScrollbar = newStyled($57acba87d6e25586$export$9a4e88b92edfce6b)(
    ({ offset, horizontal, vertical }) => ({
      display: 'flex',
      userSelect: 'none',
      touchAction: 'none',
      background: 'transparent',
      transition: 'all 0.2s ease-out',
      borderRadius: 'var(--scrollbar-size)',
      '&[data-orientation="vertical"]': {
        width: 'var(--scrollbar-size)',
        paddingRight: offset,
        marginTop: offset,
        marginBottom: horizontal === 'true' && vertical === 'true' ? 0 : offset,
      },
      '&[data-orientation="horizontal"]': {
        flexDirection: 'column',
        height: 'var(--scrollbar-size)',
        paddingBottom: offset,
        marginLeft: offset,
        marginRight: horizontal === 'true' && vertical === 'true' ? 0 : offset,
      },
    })
  ),
  ScrollAreaThumb = newStyled($57acba87d6e25586$export$6521433ed15a34db)(
    ({ theme }) => ({
      flex: 1,
      background: theme.textMutedColor,
      opacity: 0.5,
      borderRadius: 'var(--scrollbar-size)',
      position: 'relative',
      transition: 'opacity 0.2s ease-out',
      '&:hover': { opacity: 0.8 },
      '::before': {
        content: '""',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        width: '100%',
        height: '100%',
      },
    })
  ),
  ScrollArea = ({
    children,
    horizontal = !1,
    vertical = !1,
    offset = 2,
    scrollbarSize = 6,
    className,
  }) =>
    import_react3.default.createElement(
      ScrollAreaRoot,
      { scrollbarsize: scrollbarSize, offset, className },
      import_react3.default.createElement(ScrollAreaViewport, null, children),
      horizontal &&
        import_react3.default.createElement(
          ScrollAreaScrollbar,
          {
            orientation: 'horizontal',
            offset,
            horizontal: horizontal.toString(),
            vertical: vertical.toString(),
          },
          import_react3.default.createElement(ScrollAreaThumb, null)
        ),
      vertical &&
        import_react3.default.createElement(
          ScrollAreaScrollbar,
          {
            orientation: 'vertical',
            offset,
            horizontal: horizontal.toString(),
            vertical: vertical.toString(),
          },
          import_react3.default.createElement(ScrollAreaThumb, null)
        ),
      horizontal &&
        vertical &&
        import_react3.default.createElement(
          $57acba87d6e25586$export$ac61190d9fc311a9,
          null
        )
    ),
  { navigator, document: document2, window: globalWindow } = scope,
  supportedLanguages = {
    jsextra: js_extras_default,
    jsx: jsx_default,
    json: json_default,
    yml: yaml_default,
    md: markdown_default,
    bash: bash_default,
    css: css_default,
    html: markup_default,
    tsx: tsx_default,
    typescript: typescript_default,
    graphql: graphql_default,
  };
Object.entries(supportedLanguages).forEach(([key, val]) => {
  prism_light_default.registerLanguage(key, val);
});
var themedSyntax = (0, import_memoizerific.default)(2)((theme) =>
    Object.entries(theme.code || {}).reduce(
      (acc, [key, val]) => ({ ...acc, [`* .${key}`]: val }),
      {}
    )
  ),
  copyToClipboard = createCopyToClipboardFunction();
function createCopyToClipboardFunction() {
  return navigator?.clipboard
    ? (text) => navigator.clipboard.writeText(text)
    : async (text) => {
        let tmp = document2.createElement('TEXTAREA'),
          focus = document2.activeElement;
        (tmp.value = text),
          document2.body.appendChild(tmp),
          tmp.select(),
          document2.execCommand('copy'),
          document2.body.removeChild(tmp),
          focus.focus();
      };
}
var Wrapper = newStyled.div(
    ({ theme }) => ({
      position: 'relative',
      overflow: 'hidden',
      color: theme.color.defaultText,
    }),
    ({ theme, bordered }) =>
      bordered
        ? {
            border: `1px solid ${theme.appBorderColor}`,
            borderRadius: theme.borderRadius,
            background: theme.background.content,
          }
        : {},
    ({ showLineNumbers }) =>
      showLineNumbers
        ? {
            '.react-syntax-highlighter-line-number::before': {
              content: 'attr(data-line-number)',
            },
          }
        : {}
  ),
  UnstyledScroller = ({ children, className }) =>
    import_react3.default.createElement(
      ScrollArea,
      { horizontal: !0, vertical: !0, className },
      children
    ),
  Scroller = newStyled(UnstyledScroller)(
    { position: 'relative' },
    ({ theme }) => themedSyntax(theme)
  ),
  Pre = newStyled.pre(({ theme, padded }) => ({
    display: 'flex',
    justifyContent: 'flex-start',
    margin: 0,
    padding: padded ? theme.layoutMargin : 0,
  })),
  Code = newStyled.div(({ theme }) => ({
    flex: 1,
    paddingLeft: 2,
    paddingRight: theme.layoutMargin,
    opacity: 1,
    fontFamily: theme.typography.fonts.mono,
  })),
  processLineNumber = (row) => {
    let children = [...row.children],
      lineNumberNode = children[0],
      lineNumber = lineNumberNode.children[0].value,
      processedLineNumberNode = {
        ...lineNumberNode,
        children: [],
        properties: {
          ...lineNumberNode.properties,
          'data-line-number': lineNumber,
          style: { ...lineNumberNode.properties.style, userSelect: 'auto' },
        },
      };
    return (children[0] = processedLineNumberNode), { ...row, children };
  },
  defaultRenderer2 = ({ rows, stylesheet, useInlineStyles }) =>
    rows.map((node, i) =>
      createElement({
        node: processLineNumber(node),
        stylesheet,
        useInlineStyles,
        key: `code-segement${i}`,
      })
    ),
  wrapRenderer = (renderer, showLineNumbers) =>
    showLineNumbers
      ? renderer
        ? ({ rows, ...rest }) =>
            renderer({
              rows: rows.map((row) => processLineNumber(row)),
              ...rest,
            })
        : defaultRenderer2
      : renderer,
  SyntaxHighlighter2 = ({
    children,
    language = 'jsx',
    copyable = !1,
    bordered = !1,
    padded = !1,
    format = !0,
    formatter = null,
    className = null,
    showLineNumbers = !1,
    ...rest
  }) => {
    if (typeof children != 'string' || !children.trim()) return null;
    let [highlightableCode, setHighlightableCode] = (0, import_react3.useState)(
      ''
    );
    (0, import_react3.useEffect)(() => {
      formatter
        ? formatter(format, children).then(setHighlightableCode)
        : setHighlightableCode(children.trim());
    }, [children, format, formatter]);
    let [copied, setCopied] = (0, import_react3.useState)(!1),
      onClick = (0, import_react3.useCallback)(
        (e) => {
          e.preventDefault(),
            copyToClipboard(highlightableCode)
              .then(() => {
                setCopied(!0),
                  globalWindow.setTimeout(() => setCopied(!1), 1500);
              })
              .catch(logger.error);
        },
        [highlightableCode]
      ),
      renderer = wrapRenderer(rest.renderer, showLineNumbers);
    return import_react3.default.createElement(
      Wrapper,
      { bordered, padded, showLineNumbers, className },
      import_react3.default.createElement(
        Scroller,
        null,
        import_react3.default.createElement(
          prism_light_default,
          {
            padded: padded || bordered,
            language,
            showLineNumbers,
            showInlineLineNumbers: showLineNumbers,
            useInlineStyles: !1,
            PreTag: Pre,
            CodeTag: Code,
            lineNumberContainerStyle: {},
            ...rest,
            renderer,
          },
          highlightableCode
        )
      ),
      copyable
        ? import_react3.default.createElement(ActionBar, {
            actionItems: [{ title: copied ? 'Copied' : 'Copy', onClick }],
          })
        : null
    );
  };
SyntaxHighlighter2.registerLanguage = (...args) =>
  prism_light_default.registerLanguage(...args);
var syntaxhighlighter_default = SyntaxHighlighter2;
export {
  _extends2 as _extends,
  $5e63c961fc1ce211$export$8c6ed5c666ac1360,
  ActionBar,
  ScrollArea,
  supportedLanguages,
  createCopyToClipboardFunction,
  SyntaxHighlighter2,
  syntaxhighlighter_default,
};
