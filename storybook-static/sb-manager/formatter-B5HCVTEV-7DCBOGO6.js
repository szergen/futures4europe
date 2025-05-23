import { __toESM, require_memoizerific } from './chunk-XP3HGWTR.js';
var import_memoizerific = __toESM(require_memoizerific(), 1),
  Ks = Object.defineProperty,
  Yr = (t8, e) => {
    for (var r in e) Ks(t8, r, { get: e[r], enumerable: !0 });
  },
  jr = (t8, e, r) => {
    if (!e.has(t8)) throw TypeError('Cannot ' + r);
  },
  Q = (t8, e, r) => (
    jr(t8, e, 'read from private field'), r ? r.call(t8) : e.get(t8)
  ),
  Kr = (t8, e, r) => {
    if (e.has(t8))
      throw TypeError('Cannot add the same private member more than once');
    e instanceof WeakSet ? e.add(t8) : e.set(t8, r);
  },
  Qr = (t8, e, r, n) => (
    jr(t8, e, 'write to private field'), n ? n.call(t8, r) : e.set(t8, r), r
  ),
  Ur = {};
Yr(Ur, {
  languages: () => zs,
  options: () => Ys,
  parsers: () => Hr,
  printers: () => To,
});
var Qs = (t8, e, r, n) => {
    if (!(t8 && e == null))
      return e.replaceAll
        ? e.replaceAll(r, n)
        : r.global
        ? e.replace(r, n)
        : e.split(r).join(n);
  },
  v = Qs,
  we = 'string',
  be = 'array',
  Te = 'cursor',
  oe = 'indent',
  ue = 'align',
  xe = 'trim',
  ee = 'group',
  le = 'fill',
  ce = 'if-break',
  pe = 'indent-if-break',
  ke = 'line-suffix',
  Be = 'line-suffix-boundary',
  G = 'line',
  Le = 'label',
  he = 'break-parent',
  ft = new Set([Te, oe, ue, xe, ee, le, ce, pe, ke, Be, G, Le, he]);
function Xs(t8) {
  if (typeof t8 == 'string') return we;
  if (Array.isArray(t8)) return be;
  if (!t8) return;
  let { type: e } = t8;
  if (ft.has(e)) return e;
}
var Fe = Xs,
  Js = (t8) => new Intl.ListFormat('en-US', { type: 'disjunction' }).format(t8);
function Zs(t8) {
  let e = t8 === null ? 'null' : typeof t8;
  if (e !== 'string' && e !== 'object')
    return `Unexpected doc '${e}', 
Expected it to be 'string' or 'object'.`;
  if (Fe(t8)) throw new Error('doc is valid.');
  let r = Object.prototype.toString.call(t8);
  if (r !== '[object Object]') return `Unexpected doc '${r}'.`;
  let n = Js([...ft].map((s) => `'${s}'`));
  return `Unexpected doc.type '${t8.type}'.
Expected it to be ${n}.`;
}
var rr = class extends Error {
    name = 'InvalidDocError';
    constructor(e) {
      super(Zs(e)), (this.doc = e);
    }
  },
  mt = rr,
  Xr = () => {},
  dt = Xr;
function R(t8) {
  return { type: oe, contents: t8 };
}
function Jr(t8, e) {
  return { type: ue, contents: e, n: t8 };
}
function E(t8, e = {}) {
  return (
    dt(e.expandedStates),
    {
      type: ee,
      id: e.id,
      contents: t8,
      break: !!e.shouldBreak,
      expandedStates: e.expandedStates,
    }
  );
}
function Zr(t8) {
  return Jr(Number.NEGATIVE_INFINITY, t8);
}
function en(t8) {
  return Jr({ type: 'root' }, t8);
}
function gt(t8) {
  return { type: le, parts: t8 };
}
function fe(t8, e = '', r = {}) {
  return { type: ce, breakContents: t8, flatContents: e, groupId: r.groupId };
}
function tn(t8, e) {
  return { type: pe, contents: t8, groupId: e.groupId, negate: e.negate };
}
var re = { type: he },
  ei = { type: G, hard: !0 },
  ti = { type: G, hard: !0, literal: !0 },
  A = { type: G },
  b = { type: G, soft: !0 },
  S = [ei, re],
  rn = [ti, re];
function Y(t8, e) {
  let r = [];
  for (let n = 0; n < e.length; n++) n !== 0 && r.push(t8), r.push(e[n]);
  return r;
}
var ri = (t8, e, r) => {
    if (!(t8 && e == null))
      return Array.isArray(e) || typeof e == 'string'
        ? e[r < 0 ? e.length + r : r]
        : e.at(r);
  },
  me = ri;
function Ct(t8, e) {
  if (typeof t8 == 'string') return e(t8);
  let r = new Map();
  return n(t8);
  function n(i) {
    if (r.has(i)) return r.get(i);
    let a = s(i);
    return r.set(i, a), a;
  }
  function s(i) {
    switch (Fe(i)) {
      case be:
        return e(i.map(n));
      case le:
        return e({ ...i, parts: i.parts.map(n) });
      case ce:
        return e({
          ...i,
          breakContents: n(i.breakContents),
          flatContents: n(i.flatContents),
        });
      case ee: {
        let { expandedStates: a, contents: o } = i;
        return (
          a ? ((a = a.map(n)), (o = a[0])) : (o = n(o)),
          e({ ...i, contents: o, expandedStates: a })
        );
      }
      case ue:
      case oe:
      case pe:
      case Le:
      case ke:
        return e({ ...i, contents: n(i.contents) });
      case we:
      case Te:
      case xe:
      case Be:
      case G:
      case he:
        return e(i);
      default:
        throw new mt(i);
    }
  }
}
function ni(t8) {
  switch (Fe(t8)) {
    case le:
      if (t8.parts.every((e) => e === '')) return '';
      break;
    case ee:
      if (!t8.contents && !t8.id && !t8.break && !t8.expandedStates) return '';
      if (
        t8.contents.type === ee &&
        t8.contents.id === t8.id &&
        t8.contents.break === t8.break &&
        t8.contents.expandedStates === t8.expandedStates
      )
        return t8.contents;
      break;
    case ue:
    case oe:
    case pe:
    case ke:
      if (!t8.contents) return '';
      break;
    case ce:
      if (!t8.flatContents && !t8.breakContents) return '';
      break;
    case be: {
      let e = [];
      for (let r of t8) {
        if (!r) continue;
        let [n, ...s] = Array.isArray(r) ? r : [r];
        typeof n == 'string' && typeof me(!1, e, -1) == 'string'
          ? (e[e.length - 1] += n)
          : e.push(n),
          e.push(...s);
      }
      return e.length === 0 ? '' : e.length === 1 ? e[0] : e;
    }
    case we:
    case Te:
    case xe:
    case Be:
    case G:
    case Le:
    case he:
      break;
    default:
      throw new mt(t8);
  }
  return t8;
}
function nn(t8) {
  return Ct(t8, (e) => ni(e));
}
function T(t8, e = rn) {
  return Ct(t8, (r) =>
    typeof r == 'string'
      ? Y(
          e,
          r.split(`
`)
        )
      : r
  );
}
var nr = class extends Error {
    name = 'UnexpectedNodeError';
    constructor(e, r, n = 'type') {
      super(`Unexpected ${r} node ${n}: ${JSON.stringify(e[n])}.`),
        (this.node = e);
    }
  },
  sn = nr,
  St = "'",
  an = '"';
function si(t8, e) {
  let r = e === !0 || e === St ? St : an,
    n = r === St ? an : St,
    s = 0,
    i = 0;
  for (let a of t8) a === r ? s++ : a === n && i++;
  return s > i ? n : r;
}
var on = si;
function sr(t8) {
  if (typeof t8 != 'string') throw new TypeError('Expected a string');
  return t8.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');
}
var O,
  ir = class {
    constructor(e) {
      Kr(this, O, void 0), Qr(this, O, new Set(e));
    }
    getLeadingWhitespaceCount(e) {
      let r = Q(this, O),
        n = 0;
      for (let s = 0; s < e.length && r.has(e.charAt(s)); s++) n++;
      return n;
    }
    getTrailingWhitespaceCount(e) {
      let r = Q(this, O),
        n = 0;
      for (let s = e.length - 1; s >= 0 && r.has(e.charAt(s)); s--) n++;
      return n;
    }
    getLeadingWhitespace(e) {
      let r = this.getLeadingWhitespaceCount(e);
      return e.slice(0, r);
    }
    getTrailingWhitespace(e) {
      let r = this.getTrailingWhitespaceCount(e);
      return e.slice(e.length - r);
    }
    hasLeadingWhitespace(e) {
      return Q(this, O).has(e.charAt(0));
    }
    hasTrailingWhitespace(e) {
      return Q(this, O).has(me(!1, e, -1));
    }
    trimStart(e) {
      let r = this.getLeadingWhitespaceCount(e);
      return e.slice(r);
    }
    trimEnd(e) {
      let r = this.getTrailingWhitespaceCount(e);
      return e.slice(0, e.length - r);
    }
    trim(e) {
      return this.trimEnd(this.trimStart(e));
    }
    split(e, r = !1) {
      let n = `[${sr([...Q(this, O)].join(''))}]+`,
        s = new RegExp(r ? `(${n})` : n);
      return e.split(s);
    }
    hasWhitespaceCharacter(e) {
      let r = Q(this, O);
      return Array.prototype.some.call(e, (n) => r.has(n));
    }
    hasNonWhitespaceCharacter(e) {
      let r = Q(this, O);
      return Array.prototype.some.call(e, (n) => !r.has(n));
    }
    isWhitespaceOnly(e) {
      let r = Q(this, O);
      return Array.prototype.every.call(e, (n) => r.has(n));
    }
  };
O = new WeakMap();
var un = ir,
  ii = [
    '	',
    `
`,
    '\f',
    '\r',
    ' ',
  ],
  ai = new un(ii),
  H = ai;
function oi(t8) {
  return t8?.type === 'front-matter';
}
var Pe = oi,
  ui = new Set([
    'sourceSpan',
    'startSourceSpan',
    'endSourceSpan',
    'nameSpan',
    'valueSpan',
    'keySpan',
    'tagDefinition',
    'tokens',
    'valueTokens',
  ]),
  li = new Set(['if', 'else if', 'for', 'switch', 'case']);
function ln(t8, e) {
  var r;
  if (
    t8.type === 'text' ||
    t8.type === 'comment' ||
    Pe(t8) ||
    t8.type === 'yaml' ||
    t8.type === 'toml'
  )
    return null;
  if (
    (t8.type === 'attribute' && delete e.value,
    t8.type === 'docType' && delete e.value,
    t8.type === 'angularControlFlowBlock' &&
      (r = e.parameters) != null &&
      r.children)
  )
    for (let n of e.parameters.children)
      li.has(t8.name)
        ? delete n.expression
        : (n.expression = n.expression.trim());
}
ln.ignoredProperties = ui;
var cn = ln,
  ci = (t8) => String(t8).split(/[/\\]/).pop();
function pn(t8, e) {
  if (!e) return;
  let r = ci(e).toLowerCase();
  return t8.find((n) => {
    var s, i;
    return (
      ((s = n.extensions) == null ? void 0 : s.some((a) => r.endsWith(a))) ||
      ((i = n.filenames) == null
        ? void 0
        : i.some((a) => a.toLowerCase() === r))
    );
  });
}
function pi(t8, e) {
  if (e)
    return (
      t8.find(({ name: r }) => r.toLowerCase() === e) ??
      t8.find(({ aliases: r }) => r?.includes(e)) ??
      t8.find(({ extensions: r }) => r?.includes(`.${e}`))
    );
}
function hi(t8, e) {
  let r = t8.plugins.flatMap((s) => s.languages ?? []);
  return (
    pi(r, e.language) ??
    pn(r, e.physicalFile) ??
    pn(r, e.file) ??
    (e.physicalFile, void 0)
  )?.parsers[0];
}
var Ne = hi,
  hn = 'inline',
  fn = {
    area: 'none',
    base: 'none',
    basefont: 'none',
    datalist: 'none',
    head: 'none',
    link: 'none',
    meta: 'none',
    noembed: 'none',
    noframes: 'none',
    param: 'block',
    rp: 'none',
    script: 'block',
    style: 'none',
    template: 'inline',
    title: 'none',
    html: 'block',
    body: 'block',
    address: 'block',
    blockquote: 'block',
    center: 'block',
    dialog: 'block',
    div: 'block',
    figure: 'block',
    figcaption: 'block',
    footer: 'block',
    form: 'block',
    header: 'block',
    hr: 'block',
    legend: 'block',
    listing: 'block',
    main: 'block',
    p: 'block',
    plaintext: 'block',
    pre: 'block',
    search: 'block',
    xmp: 'block',
    slot: 'contents',
    ruby: 'ruby',
    rt: 'ruby-text',
    article: 'block',
    aside: 'block',
    h1: 'block',
    h2: 'block',
    h3: 'block',
    h4: 'block',
    h5: 'block',
    h6: 'block',
    hgroup: 'block',
    nav: 'block',
    section: 'block',
    dir: 'block',
    dd: 'block',
    dl: 'block',
    dt: 'block',
    menu: 'block',
    ol: 'block',
    ul: 'block',
    li: 'list-item',
    table: 'table',
    caption: 'table-caption',
    colgroup: 'table-column-group',
    col: 'table-column',
    thead: 'table-header-group',
    tbody: 'table-row-group',
    tfoot: 'table-footer-group',
    tr: 'table-row',
    td: 'table-cell',
    th: 'table-cell',
    input: 'inline-block',
    button: 'inline-block',
    fieldset: 'block',
    marquee: 'inline-block',
    source: 'block',
    track: 'block',
    details: 'block',
    summary: 'block',
    meter: 'inline-block',
    progress: 'inline-block',
    object: 'inline-block',
    video: 'inline-block',
    audio: 'inline-block',
    select: 'inline-block',
    option: 'block',
    optgroup: 'block',
  },
  mn = 'normal',
  dn = {
    listing: 'pre',
    plaintext: 'pre',
    pre: 'pre',
    xmp: 'pre',
    nobr: 'nowrap',
    table: 'initial',
    textarea: 'pre-wrap',
  };
function fi(t8) {
  return (
    t8.type === 'element' &&
    !t8.hasExplicitNamespace &&
    !['html', 'svg'].includes(t8.namespace)
  );
}
var de = fi,
  mi = (t8) => v(!1, t8, /^[\t\f\r ]*\n/g, ''),
  ar = (t8) => mi(H.trimEnd(t8)),
  gn = (t8) => {
    let e = t8,
      r = H.getLeadingWhitespace(e);
    r && (e = e.slice(r.length));
    let n = H.getTrailingWhitespace(e);
    return (
      n && (e = e.slice(0, -n.length)),
      { leadingWhitespace: r, trailingWhitespace: n, text: e }
    );
  };
function _t(t8, e) {
  return !!(
    (t8.type === 'ieConditionalComment' &&
      t8.lastChild &&
      !t8.lastChild.isSelfClosing &&
      !t8.lastChild.endSourceSpan) ||
    (t8.type === 'ieConditionalComment' && !t8.complete) ||
    (ge(t8) &&
      t8.children.some(
        (r) => r.type !== 'text' && r.type !== 'interpolation'
      )) ||
    (Dt(t8, e) && !V(t8) && t8.type !== 'interpolation')
  );
}
function Ge(t8) {
  return t8.type === 'attribute' || !t8.parent || !t8.prev ? !1 : di(t8.prev);
}
function di(t8) {
  return t8.type === 'comment' && t8.value.trim() === 'prettier-ignore';
}
function N(t8) {
  return t8.type === 'text' || t8.type === 'comment';
}
function V(t8) {
  return (
    t8.type === 'element' &&
    (t8.fullName === 'script' ||
      t8.fullName === 'style' ||
      t8.fullName === 'svg:style' ||
      t8.fullName === 'svg:script' ||
      (de(t8) && (t8.name === 'script' || t8.name === 'style')))
  );
}
function Cn(t8) {
  return t8.children && !V(t8);
}
function Sn(t8) {
  return V(t8) || t8.type === 'interpolation' || or(t8);
}
function or(t8) {
  return kn(t8).startsWith('pre');
}
function _n(t8, e) {
  var s, i;
  let r = n();
  if (
    r &&
    !t8.prev &&
    (i = (s = t8.parent) == null ? void 0 : s.tagDefinition) != null &&
    i.ignoreFirstLf
  )
    return t8.type === 'interpolation';
  return r;
  function n() {
    return Pe(t8) || t8.type === 'angularControlFlowBlock'
      ? !1
      : (t8.type === 'text' || t8.type === 'interpolation') &&
        t8.prev &&
        (t8.prev.type === 'text' || t8.prev.type === 'interpolation')
      ? !0
      : !t8.parent || t8.parent.cssDisplay === 'none'
      ? !1
      : ge(t8.parent)
      ? !0
      : !(
          (!t8.prev &&
            (t8.parent.type === 'root' ||
              (ge(t8) && t8.parent) ||
              V(t8.parent) ||
              Ke(t8.parent, e) ||
              !Ai(t8.parent.cssDisplay))) ||
          (t8.prev && !yi(t8.prev.cssDisplay))
        );
  }
}
function En(t8, e) {
  return Pe(t8) || t8.type === 'angularControlFlowBlock'
    ? !1
    : (t8.type === 'text' || t8.type === 'interpolation') &&
      t8.next &&
      (t8.next.type === 'text' || t8.next.type === 'interpolation')
    ? !0
    : !t8.parent || t8.parent.cssDisplay === 'none'
    ? !1
    : ge(t8.parent)
    ? !0
    : !(
        (!t8.next &&
          (t8.parent.type === 'root' ||
            (ge(t8) && t8.parent) ||
            V(t8.parent) ||
            Ke(t8.parent, e) ||
            !Di(t8.parent.cssDisplay))) ||
        (t8.next && !vi(t8.next.cssDisplay))
      );
}
function An(t8) {
  return wi(t8.cssDisplay) && !V(t8);
}
function Ye(t8) {
  return (
    Pe(t8) ||
    (t8.next &&
      t8.sourceSpan.end &&
      t8.sourceSpan.end.line + 1 < t8.next.sourceSpan.start.line)
  );
}
function Dn(t8) {
  return (
    ur(t8) ||
    (t8.type === 'element' &&
      t8.children.length > 0 &&
      (['body', 'script', 'style'].includes(t8.name) ||
        t8.children.some((e) => Ci(e)))) ||
    (t8.firstChild &&
      t8.firstChild === t8.lastChild &&
      t8.firstChild.type !== 'text' &&
      yn(t8.firstChild) &&
      (!t8.lastChild.isTrailingSpaceSensitive || wn(t8.lastChild)))
  );
}
function ur(t8) {
  return (
    t8.type === 'element' &&
    t8.children.length > 0 &&
    (['html', 'head', 'ul', 'ol', 'select'].includes(t8.name) ||
      (t8.cssDisplay.startsWith('table') && t8.cssDisplay !== 'table-cell'))
  );
}
function Et(t8) {
  return bn(t8) || (t8.prev && gi(t8.prev)) || vn(t8);
}
function gi(t8) {
  return bn(t8) || (t8.type === 'element' && t8.fullName === 'br') || vn(t8);
}
function vn(t8) {
  return yn(t8) && wn(t8);
}
function yn(t8) {
  return (
    t8.hasLeadingSpaces &&
    (t8.prev
      ? t8.prev.sourceSpan.end.line < t8.sourceSpan.start.line
      : t8.parent.type === 'root' ||
        t8.parent.startSourceSpan.end.line < t8.sourceSpan.start.line)
  );
}
function wn(t8) {
  return (
    t8.hasTrailingSpaces &&
    (t8.next
      ? t8.next.sourceSpan.start.line > t8.sourceSpan.end.line
      : t8.parent.type === 'root' ||
        (t8.parent.endSourceSpan &&
          t8.parent.endSourceSpan.start.line > t8.sourceSpan.end.line))
  );
}
function bn(t8) {
  switch (t8.type) {
    case 'ieConditionalComment':
    case 'comment':
    case 'directive':
      return !0;
    case 'element':
      return ['script', 'select'].includes(t8.name);
  }
  return !1;
}
function At(t8) {
  return t8.lastChild ? At(t8.lastChild) : t8;
}
function Ci(t8) {
  var e;
  return (e = t8.children) == null ? void 0 : e.some((r) => r.type !== 'text');
}
function Tn(t8) {
  if (t8)
    switch (t8) {
      case 'module':
      case 'text/javascript':
      case 'text/babel':
      case 'application/javascript':
        return 'babel';
      case 'application/x-typescript':
        return 'typescript';
      case 'text/markdown':
        return 'markdown';
      case 'text/html':
        return 'html';
      case 'text/x-handlebars-template':
        return 'glimmer';
      default:
        if (
          t8.endsWith('json') ||
          t8.endsWith('importmap') ||
          t8 === 'speculationrules'
        )
          return 'json';
    }
}
function Si(t8, e) {
  let { name: r, attrMap: n } = t8;
  if (r !== 'script' || Object.prototype.hasOwnProperty.call(n, 'src')) return;
  let { type: s, lang: i } = t8.attrMap;
  return !i && !s ? 'babel' : Ne(e, { language: i }) ?? Tn(s);
}
function _i(t8, e) {
  if (!Dt(t8, e)) return;
  let { attrMap: r } = t8;
  if (Object.prototype.hasOwnProperty.call(r, 'src')) return;
  let { type: n, lang: s } = r;
  return Ne(e, { language: s }) ?? Tn(n);
}
function Ei(t8, e) {
  if (t8.name !== 'style') return;
  let { lang: r } = t8.attrMap;
  return r ? Ne(e, { language: r }) : 'css';
}
function lr(t8, e) {
  return Si(t8, e) ?? Ei(t8, e) ?? _i(t8, e);
}
function je(t8) {
  return t8 === 'block' || t8 === 'list-item' || t8.startsWith('table');
}
function Ai(t8) {
  return !je(t8) && t8 !== 'inline-block';
}
function Di(t8) {
  return !je(t8) && t8 !== 'inline-block';
}
function vi(t8) {
  return !je(t8);
}
function yi(t8) {
  return !je(t8);
}
function wi(t8) {
  return !je(t8) && t8 !== 'inline-block';
}
function ge(t8) {
  return kn(t8).startsWith('pre');
}
function bi(t8, e) {
  let r = t8;
  for (; r; ) {
    if (e(r)) return !0;
    r = r.parent;
  }
  return !1;
}
function xn(t8, e) {
  var n;
  if (Ce(t8, e)) return 'block';
  if (((n = t8.prev) == null ? void 0 : n.type) === 'comment') {
    let s = t8.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/);
    if (s) return s[1];
  }
  let r = !1;
  if (t8.type === 'element' && t8.namespace === 'svg')
    if (bi(t8, (s) => s.fullName === 'svg:foreignObject')) r = !0;
    else return t8.name === 'svg' ? 'inline-block' : 'block';
  switch (e.htmlWhitespaceSensitivity) {
    case 'strict':
      return 'inline';
    case 'ignore':
      return 'block';
    default:
      return (
        (t8.type === 'element' &&
          (!t8.namespace || r || de(t8)) &&
          fn[t8.name]) ||
        hn
      );
  }
}
function kn(t8) {
  return (
    (t8.type === 'element' && (!t8.namespace || de(t8)) && dn[t8.name]) || mn
  );
}
function Ti(t8) {
  let e = Number.POSITIVE_INFINITY;
  for (let r of t8.split(`
`)) {
    if (r.length === 0) continue;
    let n = H.getLeadingWhitespaceCount(r);
    if (n === 0) return 0;
    r.length !== n && n < e && (e = n);
  }
  return e === Number.POSITIVE_INFINITY ? 0 : e;
}
function cr(t8, e = Ti(t8)) {
  return e === 0
    ? t8
    : t8
        .split(
          `
`
        )
        .map((r) => r.slice(e)).join(`
`);
}
function pr(t8) {
  return v(!1, v(!1, t8, '&apos;', "'"), '&quot;', '"');
}
function L(t8) {
  return pr(t8.value);
}
var xi = new Set(['template', 'style', 'script']);
function Ke(t8, e) {
  return Ce(t8, e) && !xi.has(t8.fullName);
}
function Ce(t8, e) {
  return (
    e.parser === 'vue' &&
    t8.type === 'element' &&
    t8.parent.type === 'root' &&
    t8.fullName.toLowerCase() !== 'html'
  );
}
function Dt(t8, e) {
  return (
    Ce(t8, e) && (Ke(t8, e) || (t8.attrMap.lang && t8.attrMap.lang !== 'html'))
  );
}
function Bn(t8) {
  let e = t8.fullName;
  return (
    e.charAt(0) === '#' ||
    e === 'slot-scope' ||
    e === 'v-slot' ||
    e.startsWith('v-slot:')
  );
}
function Ln(t8, e) {
  let r = t8.parent;
  if (!Ce(r, e)) return !1;
  let n = r.fullName,
    s = t8.fullName;
  return (n === 'script' && s === 'setup') || (n === 'style' && s === 'vars');
}
function vt(t8, e = t8.value) {
  return t8.parent.isWhitespaceSensitive
    ? t8.parent.isIndentationSensitive
      ? T(e)
      : T(cr(ar(e)), S)
    : Y(A, H.split(e));
}
function yt(t8, e) {
  return Ce(t8, e) && t8.name === 'script';
}
function wt(t8) {
  return (t8 >= 9 && t8 <= 32) || t8 == 160;
}
function hr(t8) {
  return 48 <= t8 && t8 <= 57;
}
function bt(t8) {
  return (t8 >= 97 && t8 <= 122) || (t8 >= 65 && t8 <= 90);
}
function Fn(t8) {
  return (t8 >= 97 && t8 <= 102) || (t8 >= 65 && t8 <= 70) || hr(t8);
}
function fr(t8) {
  return t8 === 10 || t8 === 13;
}
function mr(t8) {
  return 48 <= t8 && t8 <= 55;
}
function dr(t8) {
  return t8 === 39 || t8 === 34 || t8 === 96;
}
var ki = /-+([a-z0-9])/g;
function Nn(t8) {
  return t8.replace(ki, (...e) => e[1].toUpperCase());
}
var ne = class t {
    constructor(e, r, n, s) {
      (this.file = e), (this.offset = r), (this.line = n), (this.col = s);
    }
    toString() {
      return this.offset != null
        ? `${this.file.url}@${this.line}:${this.col}`
        : this.file.url;
    }
    moveBy(e) {
      let r = this.file.content,
        n = r.length,
        s = this.offset,
        i = this.line,
        a = this.col;
      for (; s > 0 && e < 0; )
        if ((s--, e++, r.charCodeAt(s) == 10)) {
          i--;
          let u = r.substring(0, s - 1).lastIndexOf(`
`);
          a = u > 0 ? s - u : s;
        } else a--;
      for (; s < n && e > 0; ) {
        let o = r.charCodeAt(s);
        s++, e--, o == 10 ? (i++, (a = 0)) : a++;
      }
      return new t(this.file, s, i, a);
    }
    getContext(e, r) {
      let n = this.file.content,
        s = this.offset;
      if (s != null) {
        s > n.length - 1 && (s = n.length - 1);
        let i = s,
          a = 0,
          o = 0;
        for (
          ;
          a < e &&
          s > 0 &&
          (s--,
          a++,
          !(
            n[s] ==
              `
` && ++o == r
          ));

        );
        for (
          a = 0, o = 0;
          a < e &&
          i < n.length - 1 &&
          (i++,
          a++,
          !(
            n[i] ==
              `
` && ++o == r
          ));

        );
        return {
          before: n.substring(s, this.offset),
          after: n.substring(this.offset, i + 1),
        };
      }
      return null;
    }
  },
  Se = class {
    constructor(e, r) {
      (this.content = e), (this.url = r);
    }
  },
  f = class {
    constructor(e, r, n = e, s = null) {
      (this.start = e),
        (this.end = r),
        (this.fullStart = n),
        (this.details = s);
    }
    toString() {
      return this.start.file.content.substring(
        this.start.offset,
        this.end.offset
      );
    }
  },
  Tt;
(function (t8) {
  (t8[(t8.WARNING = 0)] = 'WARNING'), (t8[(t8.ERROR = 1)] = 'ERROR');
})(Tt || (Tt = {}));
var Re = class {
    constructor(e, r, n = Tt.ERROR) {
      (this.span = e), (this.msg = r), (this.level = n);
    }
    contextualMessage() {
      let e = this.span.start.getContext(100, 3);
      return e
        ? `${this.msg} ("${e.before}[${Tt[this.level]} ->]${e.after}")`
        : this.msg;
    }
    toString() {
      let e = this.span.details ? `, ${this.span.details}` : '';
      return `${this.contextualMessage()}: ${this.span.start}${e}`;
    }
  },
  Bi = [Fi, Pi, Ii, $i, Oi, Hi, Mi, qi, Vi, Ri];
function Li(t8, e) {
  for (let r of Bi) r(t8, e);
  return t8;
}
function Fi(t8) {
  t8.walk((e) => {
    if (
      e.type === 'element' &&
      e.tagDefinition.ignoreFirstLf &&
      e.children.length > 0 &&
      e.children[0].type === 'text' &&
      e.children[0].value[0] ===
        `
`
    ) {
      let r = e.children[0];
      r.value.length === 1 ? e.removeChild(r) : (r.value = r.value.slice(1));
    }
  });
}
function Pi(t8) {
  let e = (r) => {
    var n, s;
    return (
      r.type === 'element' &&
      ((n = r.prev) == null ? void 0 : n.type) ===
        'ieConditionalStartComment' &&
      r.prev.sourceSpan.end.offset === r.startSourceSpan.start.offset &&
      ((s = r.firstChild) == null ? void 0 : s.type) ===
        'ieConditionalEndComment' &&
      r.firstChild.sourceSpan.start.offset === r.startSourceSpan.end.offset
    );
  };
  t8.walk((r) => {
    if (r.children)
      for (let n = 0; n < r.children.length; n++) {
        let s = r.children[n];
        if (!e(s)) continue;
        let i = s.prev,
          a = s.firstChild;
        r.removeChild(i), n--;
        let o = new f(i.sourceSpan.start, a.sourceSpan.end),
          u = new f(o.start, s.sourceSpan.end);
        (s.condition = i.condition),
          (s.sourceSpan = u),
          (s.startSourceSpan = o),
          s.removeChild(a);
      }
  });
}
function Ni(t8, e, r) {
  t8.walk((n) => {
    if (n.children)
      for (let s = 0; s < n.children.length; s++) {
        let i = n.children[s];
        if (i.type !== 'text' && !e(i)) continue;
        i.type !== 'text' && ((i.type = 'text'), (i.value = r(i)));
        let a = i.prev;
        !a ||
          a.type !== 'text' ||
          ((a.value += i.value),
          (a.sourceSpan = new f(a.sourceSpan.start, i.sourceSpan.end)),
          n.removeChild(i),
          s--);
      }
  });
}
function Ii(t8) {
  return Ni(
    t8,
    (e) => e.type === 'cdata',
    (e) => `<![CDATA[${e.value}]]>`
  );
}
function Ri(t8) {
  let e = (r) => {
    var n, s;
    return (
      r.type === 'element' &&
      r.attrs.length === 0 &&
      r.children.length === 1 &&
      r.firstChild.type === 'text' &&
      !H.hasWhitespaceCharacter(r.children[0].value) &&
      !r.firstChild.hasLeadingSpaces &&
      !r.firstChild.hasTrailingSpaces &&
      r.isLeadingSpaceSensitive &&
      !r.hasLeadingSpaces &&
      r.isTrailingSpaceSensitive &&
      !r.hasTrailingSpaces &&
      ((n = r.prev) == null ? void 0 : n.type) === 'text' &&
      ((s = r.next) == null ? void 0 : s.type) === 'text'
    );
  };
  t8.walk((r) => {
    if (r.children)
      for (let n = 0; n < r.children.length; n++) {
        let s = r.children[n];
        if (!e(s)) continue;
        let i = s.prev,
          a = s.next;
        (i.value +=
          `<${s.rawName}>` + s.firstChild.value + `</${s.rawName}>` + a.value),
          (i.sourceSpan = new f(i.sourceSpan.start, a.sourceSpan.end)),
          (i.isTrailingSpaceSensitive = a.isTrailingSpaceSensitive),
          (i.hasTrailingSpaces = a.hasTrailingSpaces),
          r.removeChild(s),
          n--,
          r.removeChild(a);
      }
  });
}
function $i(t8, e) {
  if (e.parser === 'html') return;
  let r = /{{(.+?)}}/s;
  t8.walk((n) => {
    if (Cn(n))
      for (let s of n.children) {
        if (s.type !== 'text') continue;
        let i = s.sourceSpan.start,
          a = null,
          o = s.value.split(r);
        for (let u = 0; u < o.length; u++, i = a) {
          let p = o[u];
          if (u % 2 === 0) {
            (a = i.moveBy(p.length)),
              p.length > 0 &&
                n.insertChildBefore(s, {
                  type: 'text',
                  value: p,
                  sourceSpan: new f(i, a),
                });
            continue;
          }
          (a = i.moveBy(p.length + 4)),
            n.insertChildBefore(s, {
              type: 'interpolation',
              sourceSpan: new f(i, a),
              children:
                p.length === 0
                  ? []
                  : [
                      {
                        type: 'text',
                        value: p,
                        sourceSpan: new f(i.moveBy(2), a.moveBy(-2)),
                      },
                    ],
            });
        }
        n.removeChild(s);
      }
  });
}
function Oi(t8) {
  t8.walk((e) => {
    if (!e.children) return;
    if (
      e.children.length === 0 ||
      (e.children.length === 1 &&
        e.children[0].type === 'text' &&
        H.trim(e.children[0].value).length === 0)
    ) {
      (e.hasDanglingSpaces = e.children.length > 0), (e.children = []);
      return;
    }
    let r = Sn(e),
      n = or(e);
    if (!r)
      for (let s = 0; s < e.children.length; s++) {
        let i = e.children[s];
        if (i.type !== 'text') continue;
        let {
            leadingWhitespace: a,
            text: o,
            trailingWhitespace: u,
          } = gn(i.value),
          p = i.prev,
          l = i.next;
        o
          ? ((i.value = o),
            (i.sourceSpan = new f(
              i.sourceSpan.start.moveBy(a.length),
              i.sourceSpan.end.moveBy(-u.length)
            )),
            a && (p && (p.hasTrailingSpaces = !0), (i.hasLeadingSpaces = !0)),
            u && ((i.hasTrailingSpaces = !0), l && (l.hasLeadingSpaces = !0)))
          : (e.removeChild(i),
            s--,
            (a || u) &&
              (p && (p.hasTrailingSpaces = !0),
              l && (l.hasLeadingSpaces = !0)));
      }
    (e.isWhitespaceSensitive = r), (e.isIndentationSensitive = n);
  });
}
function Mi(t8) {
  t8.walk((e) => {
    e.isSelfClosing =
      !e.children ||
      (e.type === 'element' &&
        (e.tagDefinition.isVoid ||
          (e.endSourceSpan &&
            e.startSourceSpan.start === e.endSourceSpan.start &&
            e.startSourceSpan.end === e.endSourceSpan.end)));
  });
}
function qi(t8, e) {
  t8.walk((r) => {
    r.type === 'element' &&
      (r.hasHtmComponentClosingTag =
        r.endSourceSpan &&
        /^<\s*\/\s*\/\s*>$/.test(
          e.originalText.slice(
            r.endSourceSpan.start.offset,
            r.endSourceSpan.end.offset
          )
        ));
  });
}
function Hi(t8, e) {
  t8.walk((r) => {
    r.cssDisplay = xn(r, e);
  });
}
function Vi(t8, e) {
  t8.walk((r) => {
    let { children: n } = r;
    if (n) {
      if (n.length === 0) {
        r.isDanglingSpaceSensitive = An(r);
        return;
      }
      for (let s of n)
        (s.isLeadingSpaceSensitive = _n(s, e)),
          (s.isTrailingSpaceSensitive = En(s, e));
      for (let s = 0; s < n.length; s++) {
        let i = n[s];
        (i.isLeadingSpaceSensitive =
          (s === 0 || i.prev.isTrailingSpaceSensitive) &&
          i.isLeadingSpaceSensitive),
          (i.isTrailingSpaceSensitive =
            (s === n.length - 1 || i.next.isLeadingSpaceSensitive) &&
            i.isTrailingSpaceSensitive);
      }
    }
  });
}
var In = Li;
function Rn(t8) {
  return /^\s*<!--\s*@(?:format|prettier)\s*-->/.test(t8);
}
function $n(t8) {
  return (
    `<!-- @format -->

` + t8
  );
}
function se(t8) {
  return t8.sourceSpan.start.offset;
}
function ie(t8) {
  return t8.sourceSpan.end.offset;
}
async function Ui(t8, e) {
  if (t8.lang === 'yaml') {
    let r = t8.value.trim(),
      n = r ? await e(r, { parser: 'yaml' }) : '';
    return en([t8.startDelimiter, S, n, n ? S : '', t8.endDelimiter]);
  }
}
var On = Ui,
  Mn = new Proxy(() => {}, { get: () => Mn }),
  gr = Mn;
function Wi(t8) {
  return Array.isArray(t8) && t8.length > 0;
}
var xt = Wi;
function Qe(t8, e) {
  return [t8.isSelfClosing ? '' : zi(t8, e), Xe(t8, e)];
}
function zi(t8, e) {
  return t8.lastChild && Ae(t8.lastChild) ? '' : [Gi(t8, e), kt(t8, e)];
}
function Xe(t8, e) {
  return (t8.next ? j(t8.next) : Ee(t8.parent)) ? '' : [_e(t8, e), U(t8, e)];
}
function Gi(t8, e) {
  return Ee(t8) ? _e(t8.lastChild, e) : '';
}
function U(t8, e) {
  return Ae(t8) ? kt(t8.parent, e) : Je(t8) ? Bt(t8.next) : '';
}
function kt(t8, e) {
  if ((gr(!t8.isSelfClosing), qn(t8, e))) return '';
  switch (t8.type) {
    case 'ieConditionalComment':
      return '<!';
    case 'element':
      if (t8.hasHtmComponentClosingTag) return '<//';
    default:
      return `</${t8.rawName}`;
  }
}
function _e(t8, e) {
  if (qn(t8, e)) return '';
  switch (t8.type) {
    case 'ieConditionalComment':
    case 'ieConditionalEndComment':
      return '[endif]-->';
    case 'ieConditionalStartComment':
      return ']><!-->';
    case 'interpolation':
      return '}}';
    case 'element':
      if (t8.isSelfClosing) return '/>';
    default:
      return '>';
  }
}
function qn(t8, e) {
  return !t8.isSelfClosing && !t8.endSourceSpan && (Ge(t8) || _t(t8.parent, e));
}
function j(t8) {
  return (
    t8.prev &&
    t8.prev.type !== 'docType' &&
    t8.type !== 'angularControlFlowBlock' &&
    !N(t8.prev) &&
    t8.isLeadingSpaceSensitive &&
    !t8.hasLeadingSpaces
  );
}
function Ee(t8) {
  var e;
  return (
    ((e = t8.lastChild) == null ? void 0 : e.isTrailingSpaceSensitive) &&
    !t8.lastChild.hasTrailingSpaces &&
    !N(At(t8.lastChild)) &&
    !ge(t8)
  );
}
function Ae(t8) {
  return (
    !t8.next &&
    !t8.hasTrailingSpaces &&
    t8.isTrailingSpaceSensitive &&
    N(At(t8))
  );
}
function Je(t8) {
  return (
    t8.next &&
    !N(t8.next) &&
    N(t8) &&
    t8.isTrailingSpaceSensitive &&
    !t8.hasTrailingSpaces
  );
}
function Yi(t8) {
  let e = t8.trim().match(/^prettier-ignore-attribute(?:\s+(.+))?$/s);
  return e ? (e[1] ? e[1].split(/\s+/) : !0) : !1;
}
function Ze(t8) {
  return !t8.prev && t8.isLeadingSpaceSensitive && !t8.hasLeadingSpaces;
}
function ji(t8, e, r) {
  var m;
  let { node: n } = t8;
  if (!xt(n.attrs)) return n.isSelfClosing ? ' ' : '';
  let s =
      ((m = n.prev) == null ? void 0 : m.type) === 'comment' &&
      Yi(n.prev.value),
    i =
      typeof s == 'boolean'
        ? () => s
        : Array.isArray(s)
        ? (d) => s.includes(d.rawName)
        : () => !1,
    a = t8.map(
      ({ node: d }) => (i(d) ? T(e.originalText.slice(se(d), ie(d))) : r()),
      'attrs'
    ),
    o =
      n.type === 'element' &&
      n.fullName === 'script' &&
      n.attrs.length === 1 &&
      n.attrs[0].fullName === 'src' &&
      n.children.length === 0,
    p = e.singleAttributePerLine && n.attrs.length > 1 && !Ce(n, e) ? S : A,
    l = [R([o ? ' ' : A, Y(p, a)])];
  return (
    (n.firstChild && Ze(n.firstChild)) || (n.isSelfClosing && Ee(n.parent)) || o
      ? l.push(n.isSelfClosing ? ' ' : '')
      : l.push(
          e.bracketSameLine
            ? n.isSelfClosing
              ? ' '
              : ''
            : n.isSelfClosing
            ? A
            : b
        ),
    l
  );
}
function Ki(t8) {
  return t8.firstChild && Ze(t8.firstChild) ? '' : Lt(t8);
}
function et(t8, e, r) {
  let { node: n } = t8;
  return [tt(n, e), ji(t8, e, r), n.isSelfClosing ? '' : Ki(n)];
}
function tt(t8, e) {
  return t8.prev && Je(t8.prev) ? '' : [W(t8, e), Bt(t8)];
}
function W(t8, e) {
  return Ze(t8) ? Lt(t8.parent) : j(t8) ? _e(t8.prev, e) : '';
}
function Bt(t8) {
  switch (t8.type) {
    case 'ieConditionalComment':
    case 'ieConditionalStartComment':
      return `<!--[if ${t8.condition}`;
    case 'ieConditionalEndComment':
      return '<!--<!';
    case 'interpolation':
      return '{{';
    case 'docType':
      return t8.value === 'html' ? '<!doctype' : '<!DOCTYPE';
    case 'element':
      if (t8.condition) return `<!--[if ${t8.condition}]><!--><${t8.rawName}`;
    default:
      return `<${t8.rawName}`;
  }
}
function Lt(t8) {
  switch ((gr(!t8.isSelfClosing), t8.type)) {
    case 'ieConditionalComment':
      return ']>';
    case 'element':
      if (t8.condition) return '><!--<![endif]-->';
    default:
      return '>';
  }
}
var Cr = new WeakMap();
function Qi(t8, e) {
  let { root: r } = t8;
  return (
    Cr.has(r) ||
      Cr.set(
        r,
        r.children.some(
          (n) => yt(n, e) && ['ts', 'typescript'].includes(n.attrMap.lang)
        )
      ),
    Cr.get(r)
  );
}
var $e = Qi;
function Xi(t8, e) {
  if (!t8.endSourceSpan) return '';
  let r = t8.startSourceSpan.end.offset;
  t8.firstChild && Ze(t8.firstChild) && (r -= Lt(t8).length);
  let n = t8.endSourceSpan.start.offset;
  return (
    t8.lastChild && Ae(t8.lastChild)
      ? (n += kt(t8, e).length)
      : Ee(t8) && (n -= _e(t8.lastChild, e).length),
    e.originalText.slice(r, n)
  );
}
var Ft = Xi;
function Hn(t8) {
  return (
    t8 === '	' ||
    t8 ===
      `
` ||
    t8 === '\f' ||
    t8 === '\r' ||
    t8 === ' '
  );
}
var Ji = /^[ \t\n\r\u000c]+/,
  Zi = /^[, \t\n\r\u000c]+/,
  ea = /^[^ \t\n\r\u000c]+/,
  ta = /[,]+$/,
  Vn = /^\d+$/,
  ra = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;
function na(t8) {
  let e = t8.length,
    r,
    n,
    s,
    i,
    a,
    o = 0,
    u;
  function p(C) {
    let _2,
      D = C.exec(t8.substring(o));
    if (D) return ([_2] = D), (o += _2.length), _2;
  }
  let l = [];
  for (;;) {
    if ((p(Zi), o >= e)) {
      if (l.length === 0)
        throw new Error('Must contain one or more image candidate strings.');
      return l;
    }
    (u = o),
      (r = p(ea)),
      (n = []),
      r.slice(-1) === ',' ? ((r = r.replace(ta, '')), d()) : m();
  }
  function m() {
    for (p(Ji), s = '', i = 'in descriptor'; ; ) {
      if (((a = t8.charAt(o)), i === 'in descriptor'))
        if (Hn(a)) s && (n.push(s), (s = ''), (i = 'after descriptor'));
        else if (a === ',') {
          (o += 1), s && n.push(s), d();
          return;
        } else if (a === '(') (s += a), (i = 'in parens');
        else if (a === '') {
          s && n.push(s), d();
          return;
        } else s += a;
      else if (i === 'in parens')
        if (a === ')') (s += a), (i = 'in descriptor');
        else if (a === '') {
          n.push(s), d();
          return;
        } else s += a;
      else if (i === 'after descriptor' && !Hn(a))
        if (a === '') {
          d();
          return;
        } else (i = 'in descriptor'), (o -= 1);
      o += 1;
    }
  }
  function d() {
    let C = !1,
      _2,
      D,
      P2,
      B,
      c = {},
      g,
      y2,
      $,
      w2,
      q2;
    for (B = 0; B < n.length; B++)
      (g = n[B]),
        (y2 = g[g.length - 1]),
        ($ = g.substring(0, g.length - 1)),
        (w2 = parseInt($, 10)),
        (q2 = parseFloat($)),
        Vn.test($) && y2 === 'w'
          ? ((_2 || D) && (C = !0), w2 === 0 ? (C = !0) : (_2 = w2))
          : ra.test($) && y2 === 'x'
          ? ((_2 || D || P2) && (C = !0), q2 < 0 ? (C = !0) : (D = q2))
          : Vn.test($) && y2 === 'h'
          ? ((P2 || D) && (C = !0), w2 === 0 ? (C = !0) : (P2 = w2))
          : (C = !0);
    if (!C)
      (c.source = { value: r, startOffset: u }),
        _2 && (c.width = { value: _2 }),
        D && (c.density = { value: D }),
        P2 && (c.height = { value: P2 }),
        l.push(c);
    else
      throw new Error(`Invalid srcset descriptor found in "${t8}" at "${g}".`);
  }
}
var Un = na;
function De(t8, e = !0) {
  return [R([b, t8]), e ? b : ''];
}
function K(t8, e) {
  let r =
    t8.type === 'NGRoot'
      ? t8.node.type === 'NGMicrosyntax' &&
        t8.node.body.length === 1 &&
        t8.node.body[0].type === 'NGMicrosyntaxExpression'
        ? t8.node.body[0].expression
        : t8.node
      : t8.type === 'JsExpressionRoot'
      ? t8.node
      : t8;
  return (
    r &&
    (r.type === 'ObjectExpression' ||
      r.type === 'ArrayExpression' ||
      ((e.parser === '__vue_expression' ||
        e.parser === '__vue_ts_expression') &&
        (r.type === 'TemplateLiteral' || r.type === 'StringLiteral')))
  );
}
async function x(t8, e, r, n) {
  r = { __isInHtmlAttribute: !0, __embeddedInHtml: !0, ...r };
  let s = !0;
  n &&
    (r.__onHtmlBindingRoot = (a, o) => {
      s = n(a, o);
    });
  let i = await e(t8, r, e);
  return s ? E(i) : De(i);
}
function sa(t8) {
  if (
    t8.node.fullName === 'srcset' &&
    (t8.parent.fullName === 'img' || t8.parent.fullName === 'source')
  )
    return () => aa(L(t8.node));
}
var Wn = { width: 'w', height: 'h', density: 'x' },
  ia = Object.keys(Wn);
function aa(t8) {
  let e = Un(t8),
    r = ia.filter((l) =>
      e.some((m) => Object.prototype.hasOwnProperty.call(m, l))
    );
  if (r.length > 1)
    throw new Error('Mixed descriptor in srcset is not supported');
  let [n] = r,
    s = Wn[n],
    i = e.map((l) => l.source.value),
    a = Math.max(...i.map((l) => l.length)),
    o = e.map((l) => (l[n] ? String(l[n].value) : '')),
    u = o.map((l) => {
      let m = l.indexOf('.');
      return m === -1 ? l.length : m;
    }),
    p = Math.max(...u);
  return De(
    Y(
      [',', A],
      i.map((l, m) => {
        let d = [l],
          C = o[m];
        if (C) {
          let _2 = a - l.length + 1,
            D = p - u[m],
            P2 = ' '.repeat(_2 + D);
          d.push(fe(P2, ' '), C + s);
        }
        return d;
      })
    )
  );
}
var zn = sa;
function oa(t8, e) {
  let { node: r } = t8,
    n = L(r);
  if (r.fullName === 'class' && !e.parentParser && !n.includes('{{'))
    return () => n.trim().split(/\s+/).join(' ');
}
var Gn = oa;
function Yn(t8, e) {
  let { node: r } = t8,
    n = L(t8.node).trim();
  if (r.fullName === 'style' && !e.parentParser && !n.includes('{{'))
    return async (s) =>
      De(await s(n, { parser: 'css', __isHTMLStyleAttribute: !0 }));
}
async function jn(t8, e, r, n) {
  let s = L(r.node),
    { left: i, operator: a, right: o } = ua(s),
    u = $e(r, n);
  return [
    E(
      await x(`function _(${i}) {}`, t8, {
        parser: u ? 'babel-ts' : 'babel',
        __isVueForBindingLeft: !0,
      })
    ),
    ' ',
    a,
    ' ',
    await x(o, t8, { parser: u ? '__ts_expression' : '__js_expression' }),
  ];
}
function ua(t8) {
  let e = /(.*?)\s+(in|of)\s+(.*)/s,
    r = /,([^,\]}]*)(?:,([^,\]}]*))?$/,
    n = /^\(|\)$/g,
    s = t8.match(e);
  if (!s) return;
  let i = {};
  if (((i.for = s[3].trim()), !i.for)) return;
  let a = v(!1, s[1].trim(), n, ''),
    o = a.match(r);
  o
    ? ((i.alias = a.replace(r, '')),
      (i.iterator1 = o[1].trim()),
      o[2] && (i.iterator2 = o[2].trim()))
    : (i.alias = a);
  let u = [i.alias, i.iterator1, i.iterator2];
  if (!u.some((p, l) => !p && (l === 0 || u.slice(l + 1).some(Boolean))))
    return { left: u.filter(Boolean).join(','), operator: s[2], right: i.for };
}
function Kn(t8, e, r) {
  let { node: n } = r,
    s = L(n);
  return x(
    `type T<${s}> = any`,
    t8,
    { parser: 'babel-ts', __isEmbeddedTypescriptGenericParameters: !0 },
    K
  );
}
function Qn(t8, e, { parseWithTs: r }) {
  return x(`function _(${t8}) {}`, e, {
    parser: r ? 'babel-ts' : 'babel',
    __isVueBindings: !0,
  });
}
function Xn(t8) {
  let e = /^(?:[\w$]+|\([^)]*\))\s*=>|^function\s*\(/,
    r =
      /^[$_a-z][\w$]*(?:\.[$_a-z][\w$]*|\['[^']*']|\["[^"]*"]|\[\d+]|\[[$_a-z][\w$]*])*$/i,
    n = t8.trim();
  return e.test(n) || r.test(n);
}
function la(t8, e) {
  if (e.parser !== 'vue') return;
  let { node: r } = t8,
    n = r.fullName;
  if (n === 'v-for') return jn;
  if (n === 'generic' && yt(r.parent, e)) return Kn;
  let s = L(r),
    i = $e(t8, e);
  if (Bn(r) || Ln(r, e)) return (a) => Qn(s, a, { parseWithTs: i });
  if (n.startsWith('@') || n.startsWith('v-on:'))
    return (a) => ca(s, a, { parseWithTs: i });
  if (n.startsWith(':') || n.startsWith('v-bind:'))
    return (a) => pa(s, a, { parseWithTs: i });
  if (n.startsWith('v-')) return (a) => Jn(s, a, { parseWithTs: i });
}
function ca(t8, e, { parseWithTs: r }) {
  return Xn(t8)
    ? Jn(t8, e, { parseWithTs: r })
    : x(
        t8,
        e,
        { parser: r ? '__vue_ts_event_binding' : '__vue_event_binding' },
        K
      );
}
function pa(t8, e, { parseWithTs: r }) {
  return x(
    t8,
    e,
    { parser: r ? '__vue_ts_expression' : '__vue_expression' },
    K
  );
}
function Jn(t8, e, { parseWithTs: r }) {
  return x(t8, e, { parser: r ? '__ts_expression' : '__js_expression' }, K);
}
var Zn = la,
  Sr = /{{(.+?)}}/s;
async function es(t8, e) {
  let r = [];
  for (let [n, s] of t8.split(Sr).entries())
    if (n % 2 === 0) r.push(T(s));
    else
      try {
        r.push(
          E([
            '{{',
            R([
              A,
              await x(s, e, {
                parser: '__ng_interpolation',
                __isInHtmlInterpolation: !0,
                trailingComma: 'none',
              }),
            ]),
            A,
            '}}',
          ])
        );
      } catch {
        r.push('{{', T(s), '}}');
      }
  return r;
}
function _r({ parser: t8 }) {
  return (e, r, n) => x(L(n.node), e, { parser: t8, trailingComma: 'none' }, K);
}
var ha = _r({ parser: '__ng_action' }),
  fa = _r({ parser: '__ng_binding' }),
  ma = _r({ parser: '__ng_directive' });
function da(t8, e) {
  if (e.parser !== 'angular') return;
  let { node: r } = t8,
    n = r.fullName;
  if ((n.startsWith('(') && n.endsWith(')')) || n.startsWith('on-')) return ha;
  if (
    (n.startsWith('[') && n.endsWith(']')) ||
    /^bind(?:on)?-/.test(n) ||
    /^ng-(?:if|show|hide|class|style)$/.test(n)
  )
    return fa;
  if (n.startsWith('*')) return ma;
  let s = L(r);
  if (/^i18n(?:-.+)?$/.test(n))
    return () => De(gt(vt(r, s.trim())), !s.includes('@@'));
  if (Sr.test(s)) return (i) => es(s, i);
}
var ts = da;
function ga(t8, e) {
  let { node: r } = t8;
  if (r.value) {
    if (
      /^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/.test(
        e.originalText.slice(r.valueSpan.start.offset, r.valueSpan.end.offset)
      ) ||
      (e.parser === 'lwc' && r.value.startsWith('{') && r.value.endsWith('}'))
    )
      return [r.rawName, '=', r.value];
    for (let n of [zn, Yn, Gn, Zn, ts]) {
      let s = n(t8, e);
      if (s) return Ca(s);
    }
  }
}
function Ca(t8) {
  return async (e, r, n, s) => {
    let i = await t8(e, r, n, s);
    if (i)
      return (
        (i = Ct(i, (a) =>
          typeof a == 'string' ? v(!1, a, '"', '&quot;') : a
        )),
        [n.node.rawName, '="', E(i), '"']
      );
  };
}
var rs = ga;
function Sa(t8, e, r, n) {
  let { node: s } = r,
    i = n.originalText.slice(
      s.sourceSpan.start.offset,
      s.sourceSpan.end.offset
    );
  return /^\s*$/.test(i)
    ? ''
    : x(
        i,
        t8,
        {
          parser: '__ng_directive',
          __isInHtmlAttribute: !1,
          trailingComma: 'none',
        },
        K
      );
}
var ns = Sa,
  _a = new Set(['if', 'else if', 'for', 'switch', 'case']);
function Ea(t8, e) {
  let { node: r } = t8;
  switch (r.type) {
    case 'element':
      if (V(r) || r.type === 'interpolation') return;
      if (!r.isSelfClosing && Dt(r, e)) {
        let n = lr(r, e);
        return n
          ? async (s, i) => {
              let a = Ft(r, e),
                o = /^\s*$/.test(a),
                u = '';
              return (
                o ||
                  ((u = await s(ar(a), { parser: n, __embeddedInHtml: !0 })),
                  (o = u === '')),
                [
                  W(r, e),
                  E(et(t8, e, i)),
                  o ? '' : S,
                  u,
                  o ? '' : S,
                  Qe(r, e),
                  U(r, e),
                ]
              );
            }
          : void 0;
      }
      break;
    case 'text':
      if (V(r.parent)) {
        let n = lr(r.parent, e);
        if (n)
          return async (s) => {
            let i =
                n === 'markdown'
                  ? cr(r.value.replace(/^[^\S\n]*\n/, ''))
                  : r.value,
              a = { parser: n, __embeddedInHtml: !0 };
            if (e.parser === 'html' && n === 'babel') {
              let o = 'script',
                { attrMap: u } = r.parent;
              u &&
                (u.type === 'module' ||
                  (u.type === 'text/babel' && u['data-type'] === 'module')) &&
                (o = 'module'),
                (a.__babelSourceType = o);
            }
            return [
              re,
              W(r, e),
              await s(i, a, { stripTrailingHardline: !0 }),
              U(r, e),
            ];
          };
      } else if (r.parent.type === 'interpolation')
        return async (n) => {
          let s = { __isInHtmlInterpolation: !0, __embeddedInHtml: !0 };
          return (
            e.parser === 'angular'
              ? ((s.parser = '__ng_interpolation'), (s.trailingComma = 'none'))
              : e.parser === 'vue'
              ? (s.parser = $e(t8, e)
                  ? '__vue_ts_expression'
                  : '__vue_expression')
              : (s.parser = '__js_expression'),
            [
              R([A, await n(r.value, s)]),
              r.parent.next && j(r.parent.next) ? ' ' : A,
            ]
          );
        };
      break;
    case 'attribute':
      return rs(t8, e);
    case 'front-matter':
      return (n) => On(r, n);
    case 'angularControlFlowBlockParameters':
      return _a.has(t8.parent.name) ? ns : void 0;
  }
}
var ss = Ea;
function rt(t8, e, r) {
  let n = t8.node;
  return Ge(n)
    ? [
        W(n, e),
        T(
          e.originalText.slice(
            se(n) + (n.prev && Je(n.prev) ? Bt(n).length : 0),
            ie(n) - (n.next && j(n.next) ? _e(n, e).length : 0)
          )
        ),
        U(n, e),
      ]
    : r();
}
function Pt(t8, e) {
  return N(t8) && N(e)
    ? t8.isTrailingSpaceSensitive
      ? t8.hasTrailingSpaces
        ? Et(e)
          ? S
          : A
        : ''
      : Et(e)
      ? S
      : b
    : (Je(t8) &&
        (Ge(e) ||
          e.firstChild ||
          e.isSelfClosing ||
          (e.type === 'element' && e.attrs.length > 0))) ||
      (t8.type === 'element' && t8.isSelfClosing && j(e))
    ? ''
    : !e.isLeadingSpaceSensitive ||
      Et(e) ||
      (j(e) &&
        t8.lastChild &&
        Ae(t8.lastChild) &&
        t8.lastChild.lastChild &&
        Ae(t8.lastChild.lastChild))
    ? S
    : e.hasLeadingSpaces
    ? A
    : b;
}
function Oe(t8, e, r) {
  let { node: n } = t8;
  if (ur(n))
    return [
      re,
      ...t8.map((i) => {
        let a = i.node,
          o = a.prev ? Pt(a.prev, a) : '';
        return [o ? [o, Ye(a.prev) ? S : ''] : '', rt(i, e, r)];
      }, 'children'),
    ];
  let s = n.children.map(() => Symbol(''));
  return t8.map((i, a) => {
    let o = i.node;
    if (N(o)) {
      if (o.prev && N(o.prev)) {
        let _2 = Pt(o.prev, o);
        if (_2) return Ye(o.prev) ? [S, S, rt(i, e, r)] : [_2, rt(i, e, r)];
      }
      return rt(i, e, r);
    }
    let u = [],
      p = [],
      l = [],
      m = [],
      d = o.prev ? Pt(o.prev, o) : '',
      C = o.next ? Pt(o, o.next) : '';
    return (
      d &&
        (Ye(o.prev)
          ? u.push(S, S)
          : d === S
          ? u.push(S)
          : N(o.prev)
          ? p.push(d)
          : p.push(fe('', b, { groupId: s[a - 1] }))),
      C &&
        (Ye(o)
          ? N(o.next) && m.push(S, S)
          : C === S
          ? N(o.next) && m.push(S)
          : l.push(C)),
      [...u, E([...p, E([rt(i, e, r), ...l], { id: s[a] })]), ...m]
    );
  }, 'children');
}
function is(t8, e, r) {
  let { node: n } = t8;
  if (_t(n, e))
    return [W(n, e), E(et(t8, e, r)), T(Ft(n, e)), ...Qe(n, e), U(n, e)];
  let s =
      n.children.length === 1 &&
      n.firstChild.type === 'interpolation' &&
      n.firstChild.isLeadingSpaceSensitive &&
      !n.firstChild.hasLeadingSpaces &&
      n.lastChild.isTrailingSpaceSensitive &&
      !n.lastChild.hasTrailingSpaces,
    i = Symbol('element-attr-group-id'),
    a = (l) => E([E(et(t8, e, r), { id: i }), l, Qe(n, e)]),
    o = (l) =>
      s
        ? tn(l, { groupId: i })
        : (V(n) || Ke(n, e)) &&
          n.parent.type === 'root' &&
          e.parser === 'vue' &&
          !e.vueIndentScriptAndStyle
        ? l
        : R(l),
    u = () =>
      s
        ? fe(b, '', { groupId: i })
        : n.firstChild.hasLeadingSpaces && n.firstChild.isLeadingSpaceSensitive
        ? A
        : n.firstChild.type === 'text' &&
          n.isWhitespaceSensitive &&
          n.isIndentationSensitive
        ? Zr(b)
        : b,
    p = () =>
      (n.next ? j(n.next) : Ee(n.parent))
        ? n.lastChild.hasTrailingSpaces && n.lastChild.isTrailingSpaceSensitive
          ? ' '
          : ''
        : s
        ? fe(b, '', { groupId: i })
        : n.lastChild.hasTrailingSpaces && n.lastChild.isTrailingSpaceSensitive
        ? A
        : (n.lastChild.type === 'comment' ||
            (n.lastChild.type === 'text' &&
              n.isWhitespaceSensitive &&
              n.isIndentationSensitive)) &&
          new RegExp(
            `\\n[\\t ]{${e.tabWidth * (t8.ancestors.length - 1)}}$`
          ).test(n.lastChild.value)
        ? ''
        : b;
  return n.children.length === 0
    ? a(n.hasDanglingSpaces && n.isDanglingSpaceSensitive ? A : '')
    : a([Dn(n) ? re : '', o([u(), Oe(t8, e, r)]), p()]);
}
var as = new Map([
  ['if', new Set(['else if', 'else'])],
  ['else if', new Set(['else if', 'else'])],
  ['for', new Set(['empty'])],
  ['defer', new Set(['placeholder', 'error', 'loading'])],
  ['placeholder', new Set(['placeholder', 'error', 'loading'])],
  ['error', new Set(['placeholder', 'error', 'loading'])],
  ['loading', new Set(['placeholder', 'error', 'loading'])],
]);
function os(t8, e, r) {
  let { node: n } = t8,
    s = [];
  Aa(t8) && s.push('} '),
    s.push('@', n.name),
    n.parameters && s.push(' (', E(r('parameters')), ')'),
    s.push(' {');
  let i = us(n);
  return (
    n.children.length > 0
      ? ((n.firstChild.hasLeadingSpaces = !0),
        (n.lastChild.hasTrailingSpaces = !0),
        s.push(R([S, Oe(t8, e, r)])),
        i && s.push(S, '}'))
      : i && s.push('}'),
    E(s, { shouldBreak: !0 })
  );
}
function us(t8) {
  var e, r;
  return !(
    ((e = t8.next) == null ? void 0 : e.type) === 'angularControlFlowBlock' &&
    (r = as.get(t8.name)) != null &&
    r.has(t8.next.name)
  );
}
function Aa(t8) {
  let { previous: e } = t8;
  return e?.type === 'angularControlFlowBlock' && !us(t8.previous);
}
function ls(t8, e, r) {
  return [R([b, Y([';', A], t8.map(r, 'children'))]), b];
}
var nt = null;
function st(t8) {
  if (nt !== null && typeof nt.property) {
    let e = nt;
    return (nt = st.prototype = null), e;
  }
  return (nt = st.prototype = t8 ?? Object.create(null)), new st();
}
var Da = 10;
for (let t8 = 0; t8 <= Da; t8++) st();
function Er(t8) {
  return st(t8);
}
function va(t8, e = 'type') {
  Er(t8);
  function r(n) {
    let s = n[e],
      i = t8[s];
    if (!Array.isArray(i))
      throw Object.assign(new Error(`Missing visitor keys for '${s}'.`), {
        node: n,
      });
    return i;
  }
  return r;
}
var cs = va,
  ya = {
    'front-matter': [],
    root: ['children'],
    element: ['attrs', 'children'],
    ieConditionalComment: ['children'],
    ieConditionalStartComment: [],
    ieConditionalEndComment: [],
    interpolation: ['children'],
    text: ['children'],
    docType: [],
    comment: [],
    attribute: [],
    cdata: [],
    angularControlFlowBlock: ['children', 'parameters'],
    angularControlFlowBlockParameters: ['children'],
    angularControlFlowBlockParameter: [],
  },
  ps = ya,
  wa = cs(ps),
  hs = wa;
function ba(t8, e, r) {
  let { node: n } = t8;
  switch (n.type) {
    case 'front-matter':
      return T(n.raw);
    case 'root':
      return e.__onHtmlRoot && e.__onHtmlRoot(n), [E(Oe(t8, e, r)), S];
    case 'element':
    case 'ieConditionalComment':
      return is(t8, e, r);
    case 'angularControlFlowBlock':
      return os(t8, e, r);
    case 'angularControlFlowBlockParameters':
      return ls(t8, e, r);
    case 'angularControlFlowBlockParameter':
      return H.trim(n.expression);
    case 'ieConditionalStartComment':
    case 'ieConditionalEndComment':
      return [tt(n), Xe(n)];
    case 'interpolation':
      return [tt(n, e), ...t8.map(r, 'children'), Xe(n, e)];
    case 'text': {
      if (n.parent.type === 'interpolation') {
        let i = /\n[^\S\n]*$/,
          a = i.test(n.value),
          o = a ? n.value.replace(i, '') : n.value;
        return [T(o), a ? S : ''];
      }
      let s = nn([W(n, e), ...vt(n), U(n, e)]);
      return Array.isArray(s) ? gt(s) : s;
    }
    case 'docType':
      return [
        E([
          tt(n, e),
          ' ',
          v(!1, n.value.replace(/^html\b/i, 'html'), /\s+/g, ' '),
        ]),
        Xe(n, e),
      ];
    case 'comment':
      return [W(n, e), T(e.originalText.slice(se(n), ie(n))), U(n, e)];
    case 'attribute': {
      if (n.value === null) return n.rawName;
      let s = pr(n.value),
        i = on(s, '"');
      return [
        n.rawName,
        '=',
        i,
        T(i === '"' ? v(!1, s, '"', '&quot;') : v(!1, s, "'", '&apos;')),
        i,
      ];
    }
    case 'cdata':
    default:
      throw new sn(n, 'HTML');
  }
}
var Ta = {
    preprocess: In,
    print: ba,
    insertPragma: $n,
    massageAstNode: cn,
    embed: ss,
    getVisitorKeys: hs,
  },
  fs = Ta,
  Hr = {};
Yr(Hr, { angular: () => vo, html: () => Do, lwc: () => wo, vue: () => yo });
var ms;
(function (t8) {
  (t8[(t8.Emulated = 0)] = 'Emulated'),
    (t8[(t8.None = 2)] = 'None'),
    (t8[(t8.ShadowDom = 3)] = 'ShadowDom');
})(ms || (ms = {}));
var ds;
(function (t8) {
  (t8[(t8.OnPush = 0)] = 'OnPush'), (t8[(t8.Default = 1)] = 'Default');
})(ds || (ds = {}));
var Ar = { name: 'custom-elements' },
  Dr = { name: 'no-errors-schema' },
  X;
(function (t8) {
  (t8[(t8.NONE = 0)] = 'NONE'),
    (t8[(t8.HTML = 1)] = 'HTML'),
    (t8[(t8.STYLE = 2)] = 'STYLE'),
    (t8[(t8.SCRIPT = 3)] = 'SCRIPT'),
    (t8[(t8.URL = 4)] = 'URL'),
    (t8[(t8.RESOURCE_URL = 5)] = 'RESOURCE_URL');
})(X || (X = {}));
var gs;
(function (t8) {
  (t8[(t8.Error = 0)] = 'Error'),
    (t8[(t8.Warning = 1)] = 'Warning'),
    (t8[(t8.Ignore = 2)] = 'Ignore');
})(gs || (gs = {}));
var F;
(function (t8) {
  (t8[(t8.RAW_TEXT = 0)] = 'RAW_TEXT'),
    (t8[(t8.ESCAPABLE_RAW_TEXT = 1)] = 'ESCAPABLE_RAW_TEXT'),
    (t8[(t8.PARSABLE_DATA = 2)] = 'PARSABLE_DATA');
})(F || (F = {}));
function it(t8) {
  if (t8[0] != ':') return [null, t8];
  let e = t8.indexOf(':', 1);
  if (e === -1)
    throw new Error(`Unsupported format "${t8}" expecting ":namespace:name"`);
  return [t8.slice(1, e), t8.slice(e + 1)];
}
function vr(t8) {
  return it(t8)[1] === 'ng-container';
}
function yr(t8) {
  return it(t8)[1] === 'ng-content';
}
function Me(t8) {
  return t8 === null ? null : it(t8)[0];
}
function qe(t8, e) {
  return t8 ? `:${t8}:${e}` : e;
}
var It;
function wr() {
  return (
    It ||
      ((It = {}),
      Nt(X.HTML, ['iframe|srcdoc', '*|innerHTML', '*|outerHTML']),
      Nt(X.STYLE, ['*|style']),
      Nt(X.URL, [
        '*|formAction',
        'area|href',
        'area|ping',
        'audio|src',
        'a|href',
        'a|ping',
        'blockquote|cite',
        'body|background',
        'del|cite',
        'form|action',
        'img|src',
        'input|src',
        'ins|cite',
        'q|cite',
        'source|src',
        'track|src',
        'video|poster',
        'video|src',
      ]),
      Nt(X.RESOURCE_URL, [
        'applet|code',
        'applet|codebase',
        'base|href',
        'embed|src',
        'frame|src',
        'head|profile',
        'html|manifest',
        'iframe|src',
        'link|href',
        'media|src',
        'object|codebase',
        'object|data',
        'script|src',
      ])),
    It
  );
}
function Nt(t8, e) {
  for (let r of e) It[r.toLowerCase()] = t8;
}
var Rt = class {},
  xa = 'boolean',
  ka = 'number',
  Ba = 'string',
  La = 'object',
  Fa = [
    '[Element]|textContent,%ariaAtomic,%ariaAutoComplete,%ariaBusy,%ariaChecked,%ariaColCount,%ariaColIndex,%ariaColSpan,%ariaCurrent,%ariaDescription,%ariaDisabled,%ariaExpanded,%ariaHasPopup,%ariaHidden,%ariaKeyShortcuts,%ariaLabel,%ariaLevel,%ariaLive,%ariaModal,%ariaMultiLine,%ariaMultiSelectable,%ariaOrientation,%ariaPlaceholder,%ariaPosInSet,%ariaPressed,%ariaReadOnly,%ariaRelevant,%ariaRequired,%ariaRoleDescription,%ariaRowCount,%ariaRowIndex,%ariaRowSpan,%ariaSelected,%ariaSetSize,%ariaSort,%ariaValueMax,%ariaValueMin,%ariaValueNow,%ariaValueText,%classList,className,elementTiming,id,innerHTML,*beforecopy,*beforecut,*beforepaste,*fullscreenchange,*fullscreenerror,*search,*webkitfullscreenchange,*webkitfullscreenerror,outerHTML,%part,#scrollLeft,#scrollTop,slot,*message,*mozfullscreenchange,*mozfullscreenerror,*mozpointerlockchange,*mozpointerlockerror,*webglcontextcreationerror,*webglcontextlost,*webglcontextrestored',
    '[HTMLElement]^[Element]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy',
    'abbr,address,article,aside,b,bdi,bdo,cite,content,code,dd,dfn,dt,em,figcaption,figure,footer,header,hgroup,i,kbd,main,mark,nav,noscript,rb,rp,rt,rtc,ruby,s,samp,section,small,strong,sub,sup,u,var,wbr^[HTMLElement]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy',
    'media^[HTMLElement]|!autoplay,!controls,%controlsList,%crossOrigin,#currentTime,!defaultMuted,#defaultPlaybackRate,!disableRemotePlayback,!loop,!muted,*encrypted,*waitingforkey,#playbackRate,preload,!preservesPitch,src,%srcObject,#volume',
    ':svg:^[HTMLElement]|!autofocus,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,%style,#tabIndex',
    ':svg:graphics^:svg:|',
    ':svg:animation^:svg:|*begin,*end,*repeat',
    ':svg:geometry^:svg:|',
    ':svg:componentTransferFunction^:svg:|',
    ':svg:gradient^:svg:|',
    ':svg:textContent^:svg:graphics|',
    ':svg:textPositioning^:svg:textContent|',
    'a^[HTMLElement]|charset,coords,download,hash,host,hostname,href,hreflang,name,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,rev,search,shape,target,text,type,username',
    'area^[HTMLElement]|alt,coords,download,hash,host,hostname,href,!noHref,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,search,shape,target,username',
    'audio^media|',
    'br^[HTMLElement]|clear',
    'base^[HTMLElement]|href,target',
    'body^[HTMLElement]|aLink,background,bgColor,link,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,text,vLink',
    'button^[HTMLElement]|!disabled,formAction,formEnctype,formMethod,!formNoValidate,formTarget,name,type,value',
    'canvas^[HTMLElement]|#height,#width',
    'content^[HTMLElement]|select',
    'dl^[HTMLElement]|!compact',
    'data^[HTMLElement]|value',
    'datalist^[HTMLElement]|',
    'details^[HTMLElement]|!open',
    'dialog^[HTMLElement]|!open,returnValue',
    'dir^[HTMLElement]|!compact',
    'div^[HTMLElement]|align',
    'embed^[HTMLElement]|align,height,name,src,type,width',
    'fieldset^[HTMLElement]|!disabled,name',
    'font^[HTMLElement]|color,face,size',
    'form^[HTMLElement]|acceptCharset,action,autocomplete,encoding,enctype,method,name,!noValidate,target',
    'frame^[HTMLElement]|frameBorder,longDesc,marginHeight,marginWidth,name,!noResize,scrolling,src',
    'frameset^[HTMLElement]|cols,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,rows',
    'hr^[HTMLElement]|align,color,!noShade,size,width',
    'head^[HTMLElement]|',
    'h1,h2,h3,h4,h5,h6^[HTMLElement]|align',
    'html^[HTMLElement]|version',
    'iframe^[HTMLElement]|align,allow,!allowFullscreen,!allowPaymentRequest,csp,frameBorder,height,loading,longDesc,marginHeight,marginWidth,name,referrerPolicy,%sandbox,scrolling,src,srcdoc,width',
    'img^[HTMLElement]|align,alt,border,%crossOrigin,decoding,#height,#hspace,!isMap,loading,longDesc,lowsrc,name,referrerPolicy,sizes,src,srcset,useMap,#vspace,#width',
    'input^[HTMLElement]|accept,align,alt,autocomplete,!checked,!defaultChecked,defaultValue,dirName,!disabled,%files,formAction,formEnctype,formMethod,!formNoValidate,formTarget,#height,!incremental,!indeterminate,max,#maxLength,min,#minLength,!multiple,name,pattern,placeholder,!readOnly,!required,selectionDirection,#selectionEnd,#selectionStart,#size,src,step,type,useMap,value,%valueAsDate,#valueAsNumber,#width',
    'li^[HTMLElement]|type,#value',
    'label^[HTMLElement]|htmlFor',
    'legend^[HTMLElement]|align',
    'link^[HTMLElement]|as,charset,%crossOrigin,!disabled,href,hreflang,imageSizes,imageSrcset,integrity,media,referrerPolicy,rel,%relList,rev,%sizes,target,type',
    'map^[HTMLElement]|name',
    'marquee^[HTMLElement]|behavior,bgColor,direction,height,#hspace,#loop,#scrollAmount,#scrollDelay,!trueSpeed,#vspace,width',
    'menu^[HTMLElement]|!compact',
    'meta^[HTMLElement]|content,httpEquiv,media,name,scheme',
    'meter^[HTMLElement]|#high,#low,#max,#min,#optimum,#value',
    'ins,del^[HTMLElement]|cite,dateTime',
    'ol^[HTMLElement]|!compact,!reversed,#start,type',
    'object^[HTMLElement]|align,archive,border,code,codeBase,codeType,data,!declare,height,#hspace,name,standby,type,useMap,#vspace,width',
    'optgroup^[HTMLElement]|!disabled,label',
    'option^[HTMLElement]|!defaultSelected,!disabled,label,!selected,text,value',
    'output^[HTMLElement]|defaultValue,%htmlFor,name,value',
    'p^[HTMLElement]|align',
    'param^[HTMLElement]|name,type,value,valueType',
    'picture^[HTMLElement]|',
    'pre^[HTMLElement]|#width',
    'progress^[HTMLElement]|#max,#value',
    'q,blockquote,cite^[HTMLElement]|',
    'script^[HTMLElement]|!async,charset,%crossOrigin,!defer,event,htmlFor,integrity,!noModule,%referrerPolicy,src,text,type',
    'select^[HTMLElement]|autocomplete,!disabled,#length,!multiple,name,!required,#selectedIndex,#size,value',
    'slot^[HTMLElement]|name',
    'source^[HTMLElement]|#height,media,sizes,src,srcset,type,#width',
    'span^[HTMLElement]|',
    'style^[HTMLElement]|!disabled,media,type',
    'caption^[HTMLElement]|align',
    'th,td^[HTMLElement]|abbr,align,axis,bgColor,ch,chOff,#colSpan,headers,height,!noWrap,#rowSpan,scope,vAlign,width',
    'col,colgroup^[HTMLElement]|align,ch,chOff,#span,vAlign,width',
    'table^[HTMLElement]|align,bgColor,border,%caption,cellPadding,cellSpacing,frame,rules,summary,%tFoot,%tHead,width',
    'tr^[HTMLElement]|align,bgColor,ch,chOff,vAlign',
    'tfoot,thead,tbody^[HTMLElement]|align,ch,chOff,vAlign',
    'template^[HTMLElement]|',
    'textarea^[HTMLElement]|autocomplete,#cols,defaultValue,dirName,!disabled,#maxLength,#minLength,name,placeholder,!readOnly,!required,#rows,selectionDirection,#selectionEnd,#selectionStart,value,wrap',
    'time^[HTMLElement]|dateTime',
    'title^[HTMLElement]|text',
    'track^[HTMLElement]|!default,kind,label,src,srclang',
    'ul^[HTMLElement]|!compact,type',
    'unknown^[HTMLElement]|',
    'video^media|!disablePictureInPicture,#height,*enterpictureinpicture,*leavepictureinpicture,!playsInline,poster,#width',
    ':svg:a^:svg:graphics|',
    ':svg:animate^:svg:animation|',
    ':svg:animateMotion^:svg:animation|',
    ':svg:animateTransform^:svg:animation|',
    ':svg:circle^:svg:geometry|',
    ':svg:clipPath^:svg:graphics|',
    ':svg:defs^:svg:graphics|',
    ':svg:desc^:svg:|',
    ':svg:discard^:svg:|',
    ':svg:ellipse^:svg:geometry|',
    ':svg:feBlend^:svg:|',
    ':svg:feColorMatrix^:svg:|',
    ':svg:feComponentTransfer^:svg:|',
    ':svg:feComposite^:svg:|',
    ':svg:feConvolveMatrix^:svg:|',
    ':svg:feDiffuseLighting^:svg:|',
    ':svg:feDisplacementMap^:svg:|',
    ':svg:feDistantLight^:svg:|',
    ':svg:feDropShadow^:svg:|',
    ':svg:feFlood^:svg:|',
    ':svg:feFuncA^:svg:componentTransferFunction|',
    ':svg:feFuncB^:svg:componentTransferFunction|',
    ':svg:feFuncG^:svg:componentTransferFunction|',
    ':svg:feFuncR^:svg:componentTransferFunction|',
    ':svg:feGaussianBlur^:svg:|',
    ':svg:feImage^:svg:|',
    ':svg:feMerge^:svg:|',
    ':svg:feMergeNode^:svg:|',
    ':svg:feMorphology^:svg:|',
    ':svg:feOffset^:svg:|',
    ':svg:fePointLight^:svg:|',
    ':svg:feSpecularLighting^:svg:|',
    ':svg:feSpotLight^:svg:|',
    ':svg:feTile^:svg:|',
    ':svg:feTurbulence^:svg:|',
    ':svg:filter^:svg:|',
    ':svg:foreignObject^:svg:graphics|',
    ':svg:g^:svg:graphics|',
    ':svg:image^:svg:graphics|decoding',
    ':svg:line^:svg:geometry|',
    ':svg:linearGradient^:svg:gradient|',
    ':svg:mpath^:svg:|',
    ':svg:marker^:svg:|',
    ':svg:mask^:svg:|',
    ':svg:metadata^:svg:|',
    ':svg:path^:svg:geometry|',
    ':svg:pattern^:svg:|',
    ':svg:polygon^:svg:geometry|',
    ':svg:polyline^:svg:geometry|',
    ':svg:radialGradient^:svg:gradient|',
    ':svg:rect^:svg:geometry|',
    ':svg:svg^:svg:graphics|#currentScale,#zoomAndPan',
    ':svg:script^:svg:|type',
    ':svg:set^:svg:animation|',
    ':svg:stop^:svg:|',
    ':svg:style^:svg:|!disabled,media,title,type',
    ':svg:switch^:svg:graphics|',
    ':svg:symbol^:svg:|',
    ':svg:tspan^:svg:textPositioning|',
    ':svg:text^:svg:textPositioning|',
    ':svg:textPath^:svg:textContent|',
    ':svg:title^:svg:|',
    ':svg:use^:svg:graphics|',
    ':svg:view^:svg:|#zoomAndPan',
    'data^[HTMLElement]|value',
    'keygen^[HTMLElement]|!autofocus,challenge,!disabled,form,keytype,name',
    'menuitem^[HTMLElement]|type,label,icon,!disabled,!checked,radiogroup,!default',
    'summary^[HTMLElement]|',
    'time^[HTMLElement]|dateTime',
    ':svg:cursor^:svg:|',
  ],
  Cs = new Map(
    Object.entries({
      class: 'className',
      for: 'htmlFor',
      formaction: 'formAction',
      innerHtml: 'innerHTML',
      readonly: 'readOnly',
      tabindex: 'tabIndex',
    })
  ),
  Pa = Array.from(Cs).reduce((t8, [e, r]) => (t8.set(e, r), t8), new Map()),
  $t = class extends Rt {
    constructor() {
      super(),
        (this._schema = new Map()),
        (this._eventSchema = new Map()),
        Fa.forEach((e) => {
          let r = new Map(),
            n = new Set(),
            [s, i] = e.split('|'),
            a = i.split(','),
            [o, u] = s.split('^');
          o.split(',').forEach((l) => {
            this._schema.set(l.toLowerCase(), r),
              this._eventSchema.set(l.toLowerCase(), n);
          });
          let p = u && this._schema.get(u.toLowerCase());
          if (p) {
            for (let [l, m] of p) r.set(l, m);
            for (let l of this._eventSchema.get(u.toLowerCase())) n.add(l);
          }
          a.forEach((l) => {
            if (l.length > 0)
              switch (l[0]) {
                case '*':
                  n.add(l.substring(1));
                  break;
                case '!':
                  r.set(l.substring(1), xa);
                  break;
                case '#':
                  r.set(l.substring(1), ka);
                  break;
                case '%':
                  r.set(l.substring(1), La);
                  break;
                default:
                  r.set(l, Ba);
              }
          });
        });
    }
    hasProperty(e, r, n) {
      if (n.some((i) => i.name === Dr.name)) return !0;
      if (e.indexOf('-') > -1) {
        if (vr(e) || yr(e)) return !1;
        if (n.some((i) => i.name === Ar.name)) return !0;
      }
      return (
        this._schema.get(e.toLowerCase()) || this._schema.get('unknown')
      ).has(r);
    }
    hasElement(e, r) {
      return r.some((n) => n.name === Dr.name) ||
        (e.indexOf('-') > -1 &&
          (vr(e) || yr(e) || r.some((n) => n.name === Ar.name)))
        ? !0
        : this._schema.has(e.toLowerCase());
    }
    securityContext(e, r, n) {
      n && (r = this.getMappedPropName(r)),
        (e = e.toLowerCase()),
        (r = r.toLowerCase());
      let s = wr()[e + '|' + r];
      return s || ((s = wr()['*|' + r]), s || X.NONE);
    }
    getMappedPropName(e) {
      return Cs.get(e) ?? e;
    }
    getDefaultComponentElementName() {
      return 'ng-component';
    }
    validateProperty(e) {
      return e.toLowerCase().startsWith('on')
        ? {
            error: !0,
            msg: `Binding to event property '${e}' is disallowed for security reasons, please use (${e.slice(
              2
            )})=...
If '${e}' is a directive input, make sure the directive is imported by the current module.`,
          }
        : { error: !1 };
    }
    validateAttribute(e) {
      return e.toLowerCase().startsWith('on')
        ? {
            error: !0,
            msg: `Binding to event attribute '${e}' is disallowed for security reasons, please use (${e.slice(
              2
            )})=...`,
          }
        : { error: !1 };
    }
    allKnownElementNames() {
      return Array.from(this._schema.keys());
    }
    allKnownAttributesOfElement(e) {
      let r = this._schema.get(e.toLowerCase()) || this._schema.get('unknown');
      return Array.from(r.keys()).map((n) => Pa.get(n) ?? n);
    }
    allKnownEventsOfElement(e) {
      return Array.from(this._eventSchema.get(e.toLowerCase()) ?? []);
    }
    normalizeAnimationStyleProperty(e) {
      return Nn(e);
    }
    normalizeAnimationStyleValue(e, r, n) {
      let s = '',
        i = n.toString().trim(),
        a = null;
      if (Na(e) && n !== 0 && n !== '0')
        if (typeof n == 'number') s = 'px';
        else {
          let o = n.match(/^[+-]?[\d\.]+([a-z]*)$/);
          o &&
            o[1].length == 0 &&
            (a = `Please provide a CSS unit value for ${r}:${n}`);
        }
      return { error: a, value: i + s };
    }
  };
function Na(t8) {
  switch (t8) {
    case 'width':
    case 'height':
    case 'minWidth':
    case 'minHeight':
    case 'maxWidth':
    case 'maxHeight':
    case 'left':
    case 'top':
    case 'bottom':
    case 'right':
    case 'fontSize':
    case 'outlineWidth':
    case 'outlineOffset':
    case 'paddingTop':
    case 'paddingLeft':
    case 'paddingBottom':
    case 'paddingRight':
    case 'marginTop':
    case 'marginLeft':
    case 'marginBottom':
    case 'marginRight':
    case 'borderRadius':
    case 'borderWidth':
    case 'borderTopWidth':
    case 'borderLeftWidth':
    case 'borderRightWidth':
    case 'borderBottomWidth':
    case 'textIndent':
      return !0;
    default:
      return !1;
  }
}
var h = class {
    constructor({
      closedByChildren: e,
      implicitNamespacePrefix: r,
      contentType: n = F.PARSABLE_DATA,
      closedByParent: s = !1,
      isVoid: i = !1,
      ignoreFirstLf: a = !1,
      preventNamespaceInheritance: o = !1,
      canSelfClose: u = !1,
    } = {}) {
      (this.closedByChildren = {}),
        (this.closedByParent = !1),
        e && e.length > 0 && e.forEach((p) => (this.closedByChildren[p] = !0)),
        (this.isVoid = i),
        (this.closedByParent = s || i),
        (this.implicitNamespacePrefix = r || null),
        (this.contentType = n),
        (this.ignoreFirstLf = a),
        (this.preventNamespaceInheritance = o),
        (this.canSelfClose = u ?? i);
    }
    isClosedByChild(e) {
      return this.isVoid || e.toLowerCase() in this.closedByChildren;
    }
    getContentType(e) {
      return typeof this.contentType == 'object'
        ? (e === void 0 ? void 0 : this.contentType[e]) ??
            this.contentType.default
        : this.contentType;
    }
  },
  Ss,
  at;
function He(t8) {
  return (
    at ||
      ((Ss = new h({ canSelfClose: !0 })),
      (at = Object.assign(Object.create(null), {
        base: new h({ isVoid: !0 }),
        meta: new h({ isVoid: !0 }),
        area: new h({ isVoid: !0 }),
        embed: new h({ isVoid: !0 }),
        link: new h({ isVoid: !0 }),
        img: new h({ isVoid: !0 }),
        input: new h({ isVoid: !0 }),
        param: new h({ isVoid: !0 }),
        hr: new h({ isVoid: !0 }),
        br: new h({ isVoid: !0 }),
        source: new h({ isVoid: !0 }),
        track: new h({ isVoid: !0 }),
        wbr: new h({ isVoid: !0 }),
        p: new h({
          closedByChildren: [
            'address',
            'article',
            'aside',
            'blockquote',
            'div',
            'dl',
            'fieldset',
            'footer',
            'form',
            'h1',
            'h2',
            'h3',
            'h4',
            'h5',
            'h6',
            'header',
            'hgroup',
            'hr',
            'main',
            'nav',
            'ol',
            'p',
            'pre',
            'section',
            'table',
            'ul',
          ],
          closedByParent: !0,
        }),
        thead: new h({ closedByChildren: ['tbody', 'tfoot'] }),
        tbody: new h({
          closedByChildren: ['tbody', 'tfoot'],
          closedByParent: !0,
        }),
        tfoot: new h({ closedByChildren: ['tbody'], closedByParent: !0 }),
        tr: new h({ closedByChildren: ['tr'], closedByParent: !0 }),
        td: new h({ closedByChildren: ['td', 'th'], closedByParent: !0 }),
        th: new h({ closedByChildren: ['td', 'th'], closedByParent: !0 }),
        col: new h({ isVoid: !0 }),
        svg: new h({ implicitNamespacePrefix: 'svg' }),
        foreignObject: new h({
          implicitNamespacePrefix: 'svg',
          preventNamespaceInheritance: !0,
        }),
        math: new h({ implicitNamespacePrefix: 'math' }),
        li: new h({ closedByChildren: ['li'], closedByParent: !0 }),
        dt: new h({ closedByChildren: ['dt', 'dd'] }),
        dd: new h({ closedByChildren: ['dt', 'dd'], closedByParent: !0 }),
        rb: new h({
          closedByChildren: ['rb', 'rt', 'rtc', 'rp'],
          closedByParent: !0,
        }),
        rt: new h({
          closedByChildren: ['rb', 'rt', 'rtc', 'rp'],
          closedByParent: !0,
        }),
        rtc: new h({
          closedByChildren: ['rb', 'rtc', 'rp'],
          closedByParent: !0,
        }),
        rp: new h({
          closedByChildren: ['rb', 'rt', 'rtc', 'rp'],
          closedByParent: !0,
        }),
        optgroup: new h({ closedByChildren: ['optgroup'], closedByParent: !0 }),
        option: new h({
          closedByChildren: ['option', 'optgroup'],
          closedByParent: !0,
        }),
        pre: new h({ ignoreFirstLf: !0 }),
        listing: new h({ ignoreFirstLf: !0 }),
        style: new h({ contentType: F.RAW_TEXT }),
        script: new h({ contentType: F.RAW_TEXT }),
        title: new h({
          contentType: { default: F.ESCAPABLE_RAW_TEXT, svg: F.PARSABLE_DATA },
        }),
        textarea: new h({
          contentType: F.ESCAPABLE_RAW_TEXT,
          ignoreFirstLf: !0,
        }),
      })),
      new $t().allKnownElementNames().forEach((e) => {
        !at[e] && Me(e) === null && (at[e] = new h({ canSelfClose: !1 }));
      })),
    at[t8] ?? Ss
  );
}
var ve = class {
    constructor(e, r) {
      (this.sourceSpan = e), (this.i18n = r);
    }
  },
  Ot = class extends ve {
    constructor(e, r, n, s) {
      super(r, s), (this.value = e), (this.tokens = n), (this.type = 'text');
    }
    visit(e, r) {
      return e.visitText(this, r);
    }
  },
  Mt = class extends ve {
    constructor(e, r, n, s) {
      super(r, s), (this.value = e), (this.tokens = n), (this.type = 'cdata');
    }
    visit(e, r) {
      return e.visitCdata(this, r);
    }
  },
  qt = class extends ve {
    constructor(e, r, n, s, i, a) {
      super(s, a),
        (this.switchValue = e),
        (this.type = r),
        (this.cases = n),
        (this.switchValueSourceSpan = i);
    }
    visit(e, r) {
      return e.visitExpansion(this, r);
    }
  },
  Ht = class {
    constructor(e, r, n, s, i) {
      (this.value = e),
        (this.expression = r),
        (this.sourceSpan = n),
        (this.valueSourceSpan = s),
        (this.expSourceSpan = i);
    }
    visit(e, r) {
      return e.visitExpansionCase(this, r);
    }
  },
  Vt = class extends ve {
    constructor(e, r, n, s, i, a, o) {
      super(n, o),
        (this.name = e),
        (this.value = r),
        (this.keySpan = s),
        (this.valueSpan = i),
        (this.valueTokens = a),
        (this.type = 'attribute');
    }
    visit(e, r) {
      return e.visitAttribute(this, r);
    }
    get nameSpan() {
      return this.keySpan;
    }
  },
  z = class extends ve {
    constructor(e, r, n, s, i, a = null, o = null, u) {
      super(s, u),
        (this.name = e),
        (this.attrs = r),
        (this.children = n),
        (this.startSourceSpan = i),
        (this.endSourceSpan = a),
        (this.nameSpan = o),
        (this.type = 'element');
    }
    visit(e, r) {
      return e.visitElement(this, r);
    }
  },
  Ut = class {
    constructor(e, r) {
      (this.value = e), (this.sourceSpan = r), (this.type = 'comment');
    }
    visit(e, r) {
      return e.visitComment(this, r);
    }
  },
  Wt = class {
    constructor(e, r) {
      (this.value = e), (this.sourceSpan = r), (this.type = 'docType');
    }
    visit(e, r) {
      return e.visitDocType(this, r);
    }
  },
  J = class {
    constructor(e, r, n, s, i, a = null) {
      (this.name = e),
        (this.parameters = r),
        (this.children = n),
        (this.sourceSpan = s),
        (this.startSourceSpan = i),
        (this.endSourceSpan = a),
        (this.type = 'block');
    }
    visit(e, r) {
      return e.visitBlock(this, r);
    }
  },
  ot = class {
    constructor(e, r) {
      (this.expression = e),
        (this.sourceSpan = r),
        (this.type = 'blockParameter'),
        (this.startSourceSpan = null),
        (this.endSourceSpan = null);
    }
    visit(e, r) {
      return e.visitBlockParameter(this, r);
    }
  };
function zt(t8, e, r = null) {
  let n = [],
    s = t8.visit
      ? (i) => t8.visit(i, r) || i.visit(t8, r)
      : (i) => i.visit(t8, r);
  return (
    e.forEach((i) => {
      let a = s(i);
      a && n.push(a);
    }),
    n
  );
}
var ut = class {
    constructor() {}
    visitElement(e, r) {
      this.visitChildren(r, (n) => {
        n(e.attrs), n(e.children);
      });
    }
    visitAttribute(e, r) {}
    visitText(e, r) {}
    visitCdata(e, r) {}
    visitComment(e, r) {}
    visitDocType(e, r) {}
    visitExpansion(e, r) {
      return this.visitChildren(r, (n) => {
        n(e.cases);
      });
    }
    visitExpansionCase(e, r) {}
    visitBlock(e, r) {
      this.visitChildren(r, (n) => {
        n(e.parameters), n(e.children);
      });
    }
    visitBlockParameter(e, r) {}
    visitChildren(e, r) {
      let n = [],
        s = this;
      function i(a) {
        a && n.push(zt(s, a, e));
      }
      return r(i), Array.prototype.concat.apply([], n);
    }
  },
  Ve = {
    AElig: '\xC6',
    AMP: '&',
    amp: '&',
    Aacute: '\xC1',
    Abreve: '\u0102',
    Acirc: '\xC2',
    Acy: '\u0410',
    Afr: '\u{1D504}',
    Agrave: '\xC0',
    Alpha: '\u0391',
    Amacr: '\u0100',
    And: '\u2A53',
    Aogon: '\u0104',
    Aopf: '\u{1D538}',
    ApplyFunction: '\u2061',
    af: '\u2061',
    Aring: '\xC5',
    angst: '\xC5',
    Ascr: '\u{1D49C}',
    Assign: '\u2254',
    colone: '\u2254',
    coloneq: '\u2254',
    Atilde: '\xC3',
    Auml: '\xC4',
    Backslash: '\u2216',
    setminus: '\u2216',
    setmn: '\u2216',
    smallsetminus: '\u2216',
    ssetmn: '\u2216',
    Barv: '\u2AE7',
    Barwed: '\u2306',
    doublebarwedge: '\u2306',
    Bcy: '\u0411',
    Because: '\u2235',
    becaus: '\u2235',
    because: '\u2235',
    Bernoullis: '\u212C',
    Bscr: '\u212C',
    bernou: '\u212C',
    Beta: '\u0392',
    Bfr: '\u{1D505}',
    Bopf: '\u{1D539}',
    Breve: '\u02D8',
    breve: '\u02D8',
    Bumpeq: '\u224E',
    HumpDownHump: '\u224E',
    bump: '\u224E',
    CHcy: '\u0427',
    COPY: '\xA9',
    copy: '\xA9',
    Cacute: '\u0106',
    Cap: '\u22D2',
    CapitalDifferentialD: '\u2145',
    DD: '\u2145',
    Cayleys: '\u212D',
    Cfr: '\u212D',
    Ccaron: '\u010C',
    Ccedil: '\xC7',
    Ccirc: '\u0108',
    Cconint: '\u2230',
    Cdot: '\u010A',
    Cedilla: '\xB8',
    cedil: '\xB8',
    CenterDot: '\xB7',
    centerdot: '\xB7',
    middot: '\xB7',
    Chi: '\u03A7',
    CircleDot: '\u2299',
    odot: '\u2299',
    CircleMinus: '\u2296',
    ominus: '\u2296',
    CirclePlus: '\u2295',
    oplus: '\u2295',
    CircleTimes: '\u2297',
    otimes: '\u2297',
    ClockwiseContourIntegral: '\u2232',
    cwconint: '\u2232',
    CloseCurlyDoubleQuote: '\u201D',
    rdquo: '\u201D',
    rdquor: '\u201D',
    CloseCurlyQuote: '\u2019',
    rsquo: '\u2019',
    rsquor: '\u2019',
    Colon: '\u2237',
    Proportion: '\u2237',
    Colone: '\u2A74',
    Congruent: '\u2261',
    equiv: '\u2261',
    Conint: '\u222F',
    DoubleContourIntegral: '\u222F',
    ContourIntegral: '\u222E',
    conint: '\u222E',
    oint: '\u222E',
    Copf: '\u2102',
    complexes: '\u2102',
    Coproduct: '\u2210',
    coprod: '\u2210',
    CounterClockwiseContourIntegral: '\u2233',
    awconint: '\u2233',
    Cross: '\u2A2F',
    Cscr: '\u{1D49E}',
    Cup: '\u22D3',
    CupCap: '\u224D',
    asympeq: '\u224D',
    DDotrahd: '\u2911',
    DJcy: '\u0402',
    DScy: '\u0405',
    DZcy: '\u040F',
    Dagger: '\u2021',
    ddagger: '\u2021',
    Darr: '\u21A1',
    Dashv: '\u2AE4',
    DoubleLeftTee: '\u2AE4',
    Dcaron: '\u010E',
    Dcy: '\u0414',
    Del: '\u2207',
    nabla: '\u2207',
    Delta: '\u0394',
    Dfr: '\u{1D507}',
    DiacriticalAcute: '\xB4',
    acute: '\xB4',
    DiacriticalDot: '\u02D9',
    dot: '\u02D9',
    DiacriticalDoubleAcute: '\u02DD',
    dblac: '\u02DD',
    DiacriticalGrave: '`',
    grave: '`',
    DiacriticalTilde: '\u02DC',
    tilde: '\u02DC',
    Diamond: '\u22C4',
    diam: '\u22C4',
    diamond: '\u22C4',
    DifferentialD: '\u2146',
    dd: '\u2146',
    Dopf: '\u{1D53B}',
    Dot: '\xA8',
    DoubleDot: '\xA8',
    die: '\xA8',
    uml: '\xA8',
    DotDot: '\u20DC',
    DotEqual: '\u2250',
    doteq: '\u2250',
    esdot: '\u2250',
    DoubleDownArrow: '\u21D3',
    Downarrow: '\u21D3',
    dArr: '\u21D3',
    DoubleLeftArrow: '\u21D0',
    Leftarrow: '\u21D0',
    lArr: '\u21D0',
    DoubleLeftRightArrow: '\u21D4',
    Leftrightarrow: '\u21D4',
    hArr: '\u21D4',
    iff: '\u21D4',
    DoubleLongLeftArrow: '\u27F8',
    Longleftarrow: '\u27F8',
    xlArr: '\u27F8',
    DoubleLongLeftRightArrow: '\u27FA',
    Longleftrightarrow: '\u27FA',
    xhArr: '\u27FA',
    DoubleLongRightArrow: '\u27F9',
    Longrightarrow: '\u27F9',
    xrArr: '\u27F9',
    DoubleRightArrow: '\u21D2',
    Implies: '\u21D2',
    Rightarrow: '\u21D2',
    rArr: '\u21D2',
    DoubleRightTee: '\u22A8',
    vDash: '\u22A8',
    DoubleUpArrow: '\u21D1',
    Uparrow: '\u21D1',
    uArr: '\u21D1',
    DoubleUpDownArrow: '\u21D5',
    Updownarrow: '\u21D5',
    vArr: '\u21D5',
    DoubleVerticalBar: '\u2225',
    par: '\u2225',
    parallel: '\u2225',
    shortparallel: '\u2225',
    spar: '\u2225',
    DownArrow: '\u2193',
    ShortDownArrow: '\u2193',
    darr: '\u2193',
    downarrow: '\u2193',
    DownArrowBar: '\u2913',
    DownArrowUpArrow: '\u21F5',
    duarr: '\u21F5',
    DownBreve: '\u0311',
    DownLeftRightVector: '\u2950',
    DownLeftTeeVector: '\u295E',
    DownLeftVector: '\u21BD',
    leftharpoondown: '\u21BD',
    lhard: '\u21BD',
    DownLeftVectorBar: '\u2956',
    DownRightTeeVector: '\u295F',
    DownRightVector: '\u21C1',
    rhard: '\u21C1',
    rightharpoondown: '\u21C1',
    DownRightVectorBar: '\u2957',
    DownTee: '\u22A4',
    top: '\u22A4',
    DownTeeArrow: '\u21A7',
    mapstodown: '\u21A7',
    Dscr: '\u{1D49F}',
    Dstrok: '\u0110',
    ENG: '\u014A',
    ETH: '\xD0',
    Eacute: '\xC9',
    Ecaron: '\u011A',
    Ecirc: '\xCA',
    Ecy: '\u042D',
    Edot: '\u0116',
    Efr: '\u{1D508}',
    Egrave: '\xC8',
    Element: '\u2208',
    in: '\u2208',
    isin: '\u2208',
    isinv: '\u2208',
    Emacr: '\u0112',
    EmptySmallSquare: '\u25FB',
    EmptyVerySmallSquare: '\u25AB',
    Eogon: '\u0118',
    Eopf: '\u{1D53C}',
    Epsilon: '\u0395',
    Equal: '\u2A75',
    EqualTilde: '\u2242',
    eqsim: '\u2242',
    esim: '\u2242',
    Equilibrium: '\u21CC',
    rightleftharpoons: '\u21CC',
    rlhar: '\u21CC',
    Escr: '\u2130',
    expectation: '\u2130',
    Esim: '\u2A73',
    Eta: '\u0397',
    Euml: '\xCB',
    Exists: '\u2203',
    exist: '\u2203',
    ExponentialE: '\u2147',
    ee: '\u2147',
    exponentiale: '\u2147',
    Fcy: '\u0424',
    Ffr: '\u{1D509}',
    FilledSmallSquare: '\u25FC',
    FilledVerySmallSquare: '\u25AA',
    blacksquare: '\u25AA',
    squarf: '\u25AA',
    squf: '\u25AA',
    Fopf: '\u{1D53D}',
    ForAll: '\u2200',
    forall: '\u2200',
    Fouriertrf: '\u2131',
    Fscr: '\u2131',
    GJcy: '\u0403',
    GT: '>',
    gt: '>',
    Gamma: '\u0393',
    Gammad: '\u03DC',
    Gbreve: '\u011E',
    Gcedil: '\u0122',
    Gcirc: '\u011C',
    Gcy: '\u0413',
    Gdot: '\u0120',
    Gfr: '\u{1D50A}',
    Gg: '\u22D9',
    ggg: '\u22D9',
    Gopf: '\u{1D53E}',
    GreaterEqual: '\u2265',
    ge: '\u2265',
    geq: '\u2265',
    GreaterEqualLess: '\u22DB',
    gel: '\u22DB',
    gtreqless: '\u22DB',
    GreaterFullEqual: '\u2267',
    gE: '\u2267',
    geqq: '\u2267',
    GreaterGreater: '\u2AA2',
    GreaterLess: '\u2277',
    gl: '\u2277',
    gtrless: '\u2277',
    GreaterSlantEqual: '\u2A7E',
    geqslant: '\u2A7E',
    ges: '\u2A7E',
    GreaterTilde: '\u2273',
    gsim: '\u2273',
    gtrsim: '\u2273',
    Gscr: '\u{1D4A2}',
    Gt: '\u226B',
    NestedGreaterGreater: '\u226B',
    gg: '\u226B',
    HARDcy: '\u042A',
    Hacek: '\u02C7',
    caron: '\u02C7',
    Hat: '^',
    Hcirc: '\u0124',
    Hfr: '\u210C',
    Poincareplane: '\u210C',
    HilbertSpace: '\u210B',
    Hscr: '\u210B',
    hamilt: '\u210B',
    Hopf: '\u210D',
    quaternions: '\u210D',
    HorizontalLine: '\u2500',
    boxh: '\u2500',
    Hstrok: '\u0126',
    HumpEqual: '\u224F',
    bumpe: '\u224F',
    bumpeq: '\u224F',
    IEcy: '\u0415',
    IJlig: '\u0132',
    IOcy: '\u0401',
    Iacute: '\xCD',
    Icirc: '\xCE',
    Icy: '\u0418',
    Idot: '\u0130',
    Ifr: '\u2111',
    Im: '\u2111',
    image: '\u2111',
    imagpart: '\u2111',
    Igrave: '\xCC',
    Imacr: '\u012A',
    ImaginaryI: '\u2148',
    ii: '\u2148',
    Int: '\u222C',
    Integral: '\u222B',
    int: '\u222B',
    Intersection: '\u22C2',
    bigcap: '\u22C2',
    xcap: '\u22C2',
    InvisibleComma: '\u2063',
    ic: '\u2063',
    InvisibleTimes: '\u2062',
    it: '\u2062',
    Iogon: '\u012E',
    Iopf: '\u{1D540}',
    Iota: '\u0399',
    Iscr: '\u2110',
    imagline: '\u2110',
    Itilde: '\u0128',
    Iukcy: '\u0406',
    Iuml: '\xCF',
    Jcirc: '\u0134',
    Jcy: '\u0419',
    Jfr: '\u{1D50D}',
    Jopf: '\u{1D541}',
    Jscr: '\u{1D4A5}',
    Jsercy: '\u0408',
    Jukcy: '\u0404',
    KHcy: '\u0425',
    KJcy: '\u040C',
    Kappa: '\u039A',
    Kcedil: '\u0136',
    Kcy: '\u041A',
    Kfr: '\u{1D50E}',
    Kopf: '\u{1D542}',
    Kscr: '\u{1D4A6}',
    LJcy: '\u0409',
    LT: '<',
    lt: '<',
    Lacute: '\u0139',
    Lambda: '\u039B',
    Lang: '\u27EA',
    Laplacetrf: '\u2112',
    Lscr: '\u2112',
    lagran: '\u2112',
    Larr: '\u219E',
    twoheadleftarrow: '\u219E',
    Lcaron: '\u013D',
    Lcedil: '\u013B',
    Lcy: '\u041B',
    LeftAngleBracket: '\u27E8',
    lang: '\u27E8',
    langle: '\u27E8',
    LeftArrow: '\u2190',
    ShortLeftArrow: '\u2190',
    larr: '\u2190',
    leftarrow: '\u2190',
    slarr: '\u2190',
    LeftArrowBar: '\u21E4',
    larrb: '\u21E4',
    LeftArrowRightArrow: '\u21C6',
    leftrightarrows: '\u21C6',
    lrarr: '\u21C6',
    LeftCeiling: '\u2308',
    lceil: '\u2308',
    LeftDoubleBracket: '\u27E6',
    lobrk: '\u27E6',
    LeftDownTeeVector: '\u2961',
    LeftDownVector: '\u21C3',
    dharl: '\u21C3',
    downharpoonleft: '\u21C3',
    LeftDownVectorBar: '\u2959',
    LeftFloor: '\u230A',
    lfloor: '\u230A',
    LeftRightArrow: '\u2194',
    harr: '\u2194',
    leftrightarrow: '\u2194',
    LeftRightVector: '\u294E',
    LeftTee: '\u22A3',
    dashv: '\u22A3',
    LeftTeeArrow: '\u21A4',
    mapstoleft: '\u21A4',
    LeftTeeVector: '\u295A',
    LeftTriangle: '\u22B2',
    vartriangleleft: '\u22B2',
    vltri: '\u22B2',
    LeftTriangleBar: '\u29CF',
    LeftTriangleEqual: '\u22B4',
    ltrie: '\u22B4',
    trianglelefteq: '\u22B4',
    LeftUpDownVector: '\u2951',
    LeftUpTeeVector: '\u2960',
    LeftUpVector: '\u21BF',
    uharl: '\u21BF',
    upharpoonleft: '\u21BF',
    LeftUpVectorBar: '\u2958',
    LeftVector: '\u21BC',
    leftharpoonup: '\u21BC',
    lharu: '\u21BC',
    LeftVectorBar: '\u2952',
    LessEqualGreater: '\u22DA',
    leg: '\u22DA',
    lesseqgtr: '\u22DA',
    LessFullEqual: '\u2266',
    lE: '\u2266',
    leqq: '\u2266',
    LessGreater: '\u2276',
    lessgtr: '\u2276',
    lg: '\u2276',
    LessLess: '\u2AA1',
    LessSlantEqual: '\u2A7D',
    leqslant: '\u2A7D',
    les: '\u2A7D',
    LessTilde: '\u2272',
    lesssim: '\u2272',
    lsim: '\u2272',
    Lfr: '\u{1D50F}',
    Ll: '\u22D8',
    Lleftarrow: '\u21DA',
    lAarr: '\u21DA',
    Lmidot: '\u013F',
    LongLeftArrow: '\u27F5',
    longleftarrow: '\u27F5',
    xlarr: '\u27F5',
    LongLeftRightArrow: '\u27F7',
    longleftrightarrow: '\u27F7',
    xharr: '\u27F7',
    LongRightArrow: '\u27F6',
    longrightarrow: '\u27F6',
    xrarr: '\u27F6',
    Lopf: '\u{1D543}',
    LowerLeftArrow: '\u2199',
    swarr: '\u2199',
    swarrow: '\u2199',
    LowerRightArrow: '\u2198',
    searr: '\u2198',
    searrow: '\u2198',
    Lsh: '\u21B0',
    lsh: '\u21B0',
    Lstrok: '\u0141',
    Lt: '\u226A',
    NestedLessLess: '\u226A',
    ll: '\u226A',
    Map: '\u2905',
    Mcy: '\u041C',
    MediumSpace: '\u205F',
    Mellintrf: '\u2133',
    Mscr: '\u2133',
    phmmat: '\u2133',
    Mfr: '\u{1D510}',
    MinusPlus: '\u2213',
    mnplus: '\u2213',
    mp: '\u2213',
    Mopf: '\u{1D544}',
    Mu: '\u039C',
    NJcy: '\u040A',
    Nacute: '\u0143',
    Ncaron: '\u0147',
    Ncedil: '\u0145',
    Ncy: '\u041D',
    NegativeMediumSpace: '\u200B',
    NegativeThickSpace: '\u200B',
    NegativeThinSpace: '\u200B',
    NegativeVeryThinSpace: '\u200B',
    ZeroWidthSpace: '\u200B',
    NewLine: `
`,
    Nfr: '\u{1D511}',
    NoBreak: '\u2060',
    NonBreakingSpace: '\xA0',
    nbsp: '\xA0',
    Nopf: '\u2115',
    naturals: '\u2115',
    Not: '\u2AEC',
    NotCongruent: '\u2262',
    nequiv: '\u2262',
    NotCupCap: '\u226D',
    NotDoubleVerticalBar: '\u2226',
    npar: '\u2226',
    nparallel: '\u2226',
    nshortparallel: '\u2226',
    nspar: '\u2226',
    NotElement: '\u2209',
    notin: '\u2209',
    notinva: '\u2209',
    NotEqual: '\u2260',
    ne: '\u2260',
    NotEqualTilde: '\u2242\u0338',
    nesim: '\u2242\u0338',
    NotExists: '\u2204',
    nexist: '\u2204',
    nexists: '\u2204',
    NotGreater: '\u226F',
    ngt: '\u226F',
    ngtr: '\u226F',
    NotGreaterEqual: '\u2271',
    nge: '\u2271',
    ngeq: '\u2271',
    NotGreaterFullEqual: '\u2267\u0338',
    ngE: '\u2267\u0338',
    ngeqq: '\u2267\u0338',
    NotGreaterGreater: '\u226B\u0338',
    nGtv: '\u226B\u0338',
    NotGreaterLess: '\u2279',
    ntgl: '\u2279',
    NotGreaterSlantEqual: '\u2A7E\u0338',
    ngeqslant: '\u2A7E\u0338',
    nges: '\u2A7E\u0338',
    NotGreaterTilde: '\u2275',
    ngsim: '\u2275',
    NotHumpDownHump: '\u224E\u0338',
    nbump: '\u224E\u0338',
    NotHumpEqual: '\u224F\u0338',
    nbumpe: '\u224F\u0338',
    NotLeftTriangle: '\u22EA',
    nltri: '\u22EA',
    ntriangleleft: '\u22EA',
    NotLeftTriangleBar: '\u29CF\u0338',
    NotLeftTriangleEqual: '\u22EC',
    nltrie: '\u22EC',
    ntrianglelefteq: '\u22EC',
    NotLess: '\u226E',
    nless: '\u226E',
    nlt: '\u226E',
    NotLessEqual: '\u2270',
    nle: '\u2270',
    nleq: '\u2270',
    NotLessGreater: '\u2278',
    ntlg: '\u2278',
    NotLessLess: '\u226A\u0338',
    nLtv: '\u226A\u0338',
    NotLessSlantEqual: '\u2A7D\u0338',
    nleqslant: '\u2A7D\u0338',
    nles: '\u2A7D\u0338',
    NotLessTilde: '\u2274',
    nlsim: '\u2274',
    NotNestedGreaterGreater: '\u2AA2\u0338',
    NotNestedLessLess: '\u2AA1\u0338',
    NotPrecedes: '\u2280',
    npr: '\u2280',
    nprec: '\u2280',
    NotPrecedesEqual: '\u2AAF\u0338',
    npre: '\u2AAF\u0338',
    npreceq: '\u2AAF\u0338',
    NotPrecedesSlantEqual: '\u22E0',
    nprcue: '\u22E0',
    NotReverseElement: '\u220C',
    notni: '\u220C',
    notniva: '\u220C',
    NotRightTriangle: '\u22EB',
    nrtri: '\u22EB',
    ntriangleright: '\u22EB',
    NotRightTriangleBar: '\u29D0\u0338',
    NotRightTriangleEqual: '\u22ED',
    nrtrie: '\u22ED',
    ntrianglerighteq: '\u22ED',
    NotSquareSubset: '\u228F\u0338',
    NotSquareSubsetEqual: '\u22E2',
    nsqsube: '\u22E2',
    NotSquareSuperset: '\u2290\u0338',
    NotSquareSupersetEqual: '\u22E3',
    nsqsupe: '\u22E3',
    NotSubset: '\u2282\u20D2',
    nsubset: '\u2282\u20D2',
    vnsub: '\u2282\u20D2',
    NotSubsetEqual: '\u2288',
    nsube: '\u2288',
    nsubseteq: '\u2288',
    NotSucceeds: '\u2281',
    nsc: '\u2281',
    nsucc: '\u2281',
    NotSucceedsEqual: '\u2AB0\u0338',
    nsce: '\u2AB0\u0338',
    nsucceq: '\u2AB0\u0338',
    NotSucceedsSlantEqual: '\u22E1',
    nsccue: '\u22E1',
    NotSucceedsTilde: '\u227F\u0338',
    NotSuperset: '\u2283\u20D2',
    nsupset: '\u2283\u20D2',
    vnsup: '\u2283\u20D2',
    NotSupersetEqual: '\u2289',
    nsupe: '\u2289',
    nsupseteq: '\u2289',
    NotTilde: '\u2241',
    nsim: '\u2241',
    NotTildeEqual: '\u2244',
    nsime: '\u2244',
    nsimeq: '\u2244',
    NotTildeFullEqual: '\u2247',
    ncong: '\u2247',
    NotTildeTilde: '\u2249',
    nap: '\u2249',
    napprox: '\u2249',
    NotVerticalBar: '\u2224',
    nmid: '\u2224',
    nshortmid: '\u2224',
    nsmid: '\u2224',
    Nscr: '\u{1D4A9}',
    Ntilde: '\xD1',
    Nu: '\u039D',
    OElig: '\u0152',
    Oacute: '\xD3',
    Ocirc: '\xD4',
    Ocy: '\u041E',
    Odblac: '\u0150',
    Ofr: '\u{1D512}',
    Ograve: '\xD2',
    Omacr: '\u014C',
    Omega: '\u03A9',
    ohm: '\u03A9',
    Omicron: '\u039F',
    Oopf: '\u{1D546}',
    OpenCurlyDoubleQuote: '\u201C',
    ldquo: '\u201C',
    OpenCurlyQuote: '\u2018',
    lsquo: '\u2018',
    Or: '\u2A54',
    Oscr: '\u{1D4AA}',
    Oslash: '\xD8',
    Otilde: '\xD5',
    Otimes: '\u2A37',
    Ouml: '\xD6',
    OverBar: '\u203E',
    oline: '\u203E',
    OverBrace: '\u23DE',
    OverBracket: '\u23B4',
    tbrk: '\u23B4',
    OverParenthesis: '\u23DC',
    PartialD: '\u2202',
    part: '\u2202',
    Pcy: '\u041F',
    Pfr: '\u{1D513}',
    Phi: '\u03A6',
    Pi: '\u03A0',
    PlusMinus: '\xB1',
    plusmn: '\xB1',
    pm: '\xB1',
    Popf: '\u2119',
    primes: '\u2119',
    Pr: '\u2ABB',
    Precedes: '\u227A',
    pr: '\u227A',
    prec: '\u227A',
    PrecedesEqual: '\u2AAF',
    pre: '\u2AAF',
    preceq: '\u2AAF',
    PrecedesSlantEqual: '\u227C',
    prcue: '\u227C',
    preccurlyeq: '\u227C',
    PrecedesTilde: '\u227E',
    precsim: '\u227E',
    prsim: '\u227E',
    Prime: '\u2033',
    Product: '\u220F',
    prod: '\u220F',
    Proportional: '\u221D',
    prop: '\u221D',
    propto: '\u221D',
    varpropto: '\u221D',
    vprop: '\u221D',
    Pscr: '\u{1D4AB}',
    Psi: '\u03A8',
    QUOT: '"',
    quot: '"',
    Qfr: '\u{1D514}',
    Qopf: '\u211A',
    rationals: '\u211A',
    Qscr: '\u{1D4AC}',
    RBarr: '\u2910',
    drbkarow: '\u2910',
    REG: '\xAE',
    circledR: '\xAE',
    reg: '\xAE',
    Racute: '\u0154',
    Rang: '\u27EB',
    Rarr: '\u21A0',
    twoheadrightarrow: '\u21A0',
    Rarrtl: '\u2916',
    Rcaron: '\u0158',
    Rcedil: '\u0156',
    Rcy: '\u0420',
    Re: '\u211C',
    Rfr: '\u211C',
    real: '\u211C',
    realpart: '\u211C',
    ReverseElement: '\u220B',
    SuchThat: '\u220B',
    ni: '\u220B',
    niv: '\u220B',
    ReverseEquilibrium: '\u21CB',
    leftrightharpoons: '\u21CB',
    lrhar: '\u21CB',
    ReverseUpEquilibrium: '\u296F',
    duhar: '\u296F',
    Rho: '\u03A1',
    RightAngleBracket: '\u27E9',
    rang: '\u27E9',
    rangle: '\u27E9',
    RightArrow: '\u2192',
    ShortRightArrow: '\u2192',
    rarr: '\u2192',
    rightarrow: '\u2192',
    srarr: '\u2192',
    RightArrowBar: '\u21E5',
    rarrb: '\u21E5',
    RightArrowLeftArrow: '\u21C4',
    rightleftarrows: '\u21C4',
    rlarr: '\u21C4',
    RightCeiling: '\u2309',
    rceil: '\u2309',
    RightDoubleBracket: '\u27E7',
    robrk: '\u27E7',
    RightDownTeeVector: '\u295D',
    RightDownVector: '\u21C2',
    dharr: '\u21C2',
    downharpoonright: '\u21C2',
    RightDownVectorBar: '\u2955',
    RightFloor: '\u230B',
    rfloor: '\u230B',
    RightTee: '\u22A2',
    vdash: '\u22A2',
    RightTeeArrow: '\u21A6',
    map: '\u21A6',
    mapsto: '\u21A6',
    RightTeeVector: '\u295B',
    RightTriangle: '\u22B3',
    vartriangleright: '\u22B3',
    vrtri: '\u22B3',
    RightTriangleBar: '\u29D0',
    RightTriangleEqual: '\u22B5',
    rtrie: '\u22B5',
    trianglerighteq: '\u22B5',
    RightUpDownVector: '\u294F',
    RightUpTeeVector: '\u295C',
    RightUpVector: '\u21BE',
    uharr: '\u21BE',
    upharpoonright: '\u21BE',
    RightUpVectorBar: '\u2954',
    RightVector: '\u21C0',
    rharu: '\u21C0',
    rightharpoonup: '\u21C0',
    RightVectorBar: '\u2953',
    Ropf: '\u211D',
    reals: '\u211D',
    RoundImplies: '\u2970',
    Rrightarrow: '\u21DB',
    rAarr: '\u21DB',
    Rscr: '\u211B',
    realine: '\u211B',
    Rsh: '\u21B1',
    rsh: '\u21B1',
    RuleDelayed: '\u29F4',
    SHCHcy: '\u0429',
    SHcy: '\u0428',
    SOFTcy: '\u042C',
    Sacute: '\u015A',
    Sc: '\u2ABC',
    Scaron: '\u0160',
    Scedil: '\u015E',
    Scirc: '\u015C',
    Scy: '\u0421',
    Sfr: '\u{1D516}',
    ShortUpArrow: '\u2191',
    UpArrow: '\u2191',
    uarr: '\u2191',
    uparrow: '\u2191',
    Sigma: '\u03A3',
    SmallCircle: '\u2218',
    compfn: '\u2218',
    Sopf: '\u{1D54A}',
    Sqrt: '\u221A',
    radic: '\u221A',
    Square: '\u25A1',
    squ: '\u25A1',
    square: '\u25A1',
    SquareIntersection: '\u2293',
    sqcap: '\u2293',
    SquareSubset: '\u228F',
    sqsub: '\u228F',
    sqsubset: '\u228F',
    SquareSubsetEqual: '\u2291',
    sqsube: '\u2291',
    sqsubseteq: '\u2291',
    SquareSuperset: '\u2290',
    sqsup: '\u2290',
    sqsupset: '\u2290',
    SquareSupersetEqual: '\u2292',
    sqsupe: '\u2292',
    sqsupseteq: '\u2292',
    SquareUnion: '\u2294',
    sqcup: '\u2294',
    Sscr: '\u{1D4AE}',
    Star: '\u22C6',
    sstarf: '\u22C6',
    Sub: '\u22D0',
    Subset: '\u22D0',
    SubsetEqual: '\u2286',
    sube: '\u2286',
    subseteq: '\u2286',
    Succeeds: '\u227B',
    sc: '\u227B',
    succ: '\u227B',
    SucceedsEqual: '\u2AB0',
    sce: '\u2AB0',
    succeq: '\u2AB0',
    SucceedsSlantEqual: '\u227D',
    sccue: '\u227D',
    succcurlyeq: '\u227D',
    SucceedsTilde: '\u227F',
    scsim: '\u227F',
    succsim: '\u227F',
    Sum: '\u2211',
    sum: '\u2211',
    Sup: '\u22D1',
    Supset: '\u22D1',
    Superset: '\u2283',
    sup: '\u2283',
    supset: '\u2283',
    SupersetEqual: '\u2287',
    supe: '\u2287',
    supseteq: '\u2287',
    THORN: '\xDE',
    TRADE: '\u2122',
    trade: '\u2122',
    TSHcy: '\u040B',
    TScy: '\u0426',
    Tab: '	',
    Tau: '\u03A4',
    Tcaron: '\u0164',
    Tcedil: '\u0162',
    Tcy: '\u0422',
    Tfr: '\u{1D517}',
    Therefore: '\u2234',
    there4: '\u2234',
    therefore: '\u2234',
    Theta: '\u0398',
    ThickSpace: '\u205F\u200A',
    ThinSpace: '\u2009',
    thinsp: '\u2009',
    Tilde: '\u223C',
    sim: '\u223C',
    thicksim: '\u223C',
    thksim: '\u223C',
    TildeEqual: '\u2243',
    sime: '\u2243',
    simeq: '\u2243',
    TildeFullEqual: '\u2245',
    cong: '\u2245',
    TildeTilde: '\u2248',
    ap: '\u2248',
    approx: '\u2248',
    asymp: '\u2248',
    thickapprox: '\u2248',
    thkap: '\u2248',
    Topf: '\u{1D54B}',
    TripleDot: '\u20DB',
    tdot: '\u20DB',
    Tscr: '\u{1D4AF}',
    Tstrok: '\u0166',
    Uacute: '\xDA',
    Uarr: '\u219F',
    Uarrocir: '\u2949',
    Ubrcy: '\u040E',
    Ubreve: '\u016C',
    Ucirc: '\xDB',
    Ucy: '\u0423',
    Udblac: '\u0170',
    Ufr: '\u{1D518}',
    Ugrave: '\xD9',
    Umacr: '\u016A',
    UnderBar: '_',
    lowbar: '_',
    UnderBrace: '\u23DF',
    UnderBracket: '\u23B5',
    bbrk: '\u23B5',
    UnderParenthesis: '\u23DD',
    Union: '\u22C3',
    bigcup: '\u22C3',
    xcup: '\u22C3',
    UnionPlus: '\u228E',
    uplus: '\u228E',
    Uogon: '\u0172',
    Uopf: '\u{1D54C}',
    UpArrowBar: '\u2912',
    UpArrowDownArrow: '\u21C5',
    udarr: '\u21C5',
    UpDownArrow: '\u2195',
    updownarrow: '\u2195',
    varr: '\u2195',
    UpEquilibrium: '\u296E',
    udhar: '\u296E',
    UpTee: '\u22A5',
    bot: '\u22A5',
    bottom: '\u22A5',
    perp: '\u22A5',
    UpTeeArrow: '\u21A5',
    mapstoup: '\u21A5',
    UpperLeftArrow: '\u2196',
    nwarr: '\u2196',
    nwarrow: '\u2196',
    UpperRightArrow: '\u2197',
    nearr: '\u2197',
    nearrow: '\u2197',
    Upsi: '\u03D2',
    upsih: '\u03D2',
    Upsilon: '\u03A5',
    Uring: '\u016E',
    Uscr: '\u{1D4B0}',
    Utilde: '\u0168',
    Uuml: '\xDC',
    VDash: '\u22AB',
    Vbar: '\u2AEB',
    Vcy: '\u0412',
    Vdash: '\u22A9',
    Vdashl: '\u2AE6',
    Vee: '\u22C1',
    bigvee: '\u22C1',
    xvee: '\u22C1',
    Verbar: '\u2016',
    Vert: '\u2016',
    VerticalBar: '\u2223',
    mid: '\u2223',
    shortmid: '\u2223',
    smid: '\u2223',
    VerticalLine: '|',
    verbar: '|',
    vert: '|',
    VerticalSeparator: '\u2758',
    VerticalTilde: '\u2240',
    wr: '\u2240',
    wreath: '\u2240',
    VeryThinSpace: '\u200A',
    hairsp: '\u200A',
    Vfr: '\u{1D519}',
    Vopf: '\u{1D54D}',
    Vscr: '\u{1D4B1}',
    Vvdash: '\u22AA',
    Wcirc: '\u0174',
    Wedge: '\u22C0',
    bigwedge: '\u22C0',
    xwedge: '\u22C0',
    Wfr: '\u{1D51A}',
    Wopf: '\u{1D54E}',
    Wscr: '\u{1D4B2}',
    Xfr: '\u{1D51B}',
    Xi: '\u039E',
    Xopf: '\u{1D54F}',
    Xscr: '\u{1D4B3}',
    YAcy: '\u042F',
    YIcy: '\u0407',
    YUcy: '\u042E',
    Yacute: '\xDD',
    Ycirc: '\u0176',
    Ycy: '\u042B',
    Yfr: '\u{1D51C}',
    Yopf: '\u{1D550}',
    Yscr: '\u{1D4B4}',
    Yuml: '\u0178',
    ZHcy: '\u0416',
    Zacute: '\u0179',
    Zcaron: '\u017D',
    Zcy: '\u0417',
    Zdot: '\u017B',
    Zeta: '\u0396',
    Zfr: '\u2128',
    zeetrf: '\u2128',
    Zopf: '\u2124',
    integers: '\u2124',
    Zscr: '\u{1D4B5}',
    aacute: '\xE1',
    abreve: '\u0103',
    ac: '\u223E',
    mstpos: '\u223E',
    acE: '\u223E\u0333',
    acd: '\u223F',
    acirc: '\xE2',
    acy: '\u0430',
    aelig: '\xE6',
    afr: '\u{1D51E}',
    agrave: '\xE0',
    alefsym: '\u2135',
    aleph: '\u2135',
    alpha: '\u03B1',
    amacr: '\u0101',
    amalg: '\u2A3F',
    and: '\u2227',
    wedge: '\u2227',
    andand: '\u2A55',
    andd: '\u2A5C',
    andslope: '\u2A58',
    andv: '\u2A5A',
    ang: '\u2220',
    angle: '\u2220',
    ange: '\u29A4',
    angmsd: '\u2221',
    measuredangle: '\u2221',
    angmsdaa: '\u29A8',
    angmsdab: '\u29A9',
    angmsdac: '\u29AA',
    angmsdad: '\u29AB',
    angmsdae: '\u29AC',
    angmsdaf: '\u29AD',
    angmsdag: '\u29AE',
    angmsdah: '\u29AF',
    angrt: '\u221F',
    angrtvb: '\u22BE',
    angrtvbd: '\u299D',
    angsph: '\u2222',
    angzarr: '\u237C',
    aogon: '\u0105',
    aopf: '\u{1D552}',
    apE: '\u2A70',
    apacir: '\u2A6F',
    ape: '\u224A',
    approxeq: '\u224A',
    apid: '\u224B',
    apos: "'",
    aring: '\xE5',
    ascr: '\u{1D4B6}',
    ast: '*',
    midast: '*',
    atilde: '\xE3',
    auml: '\xE4',
    awint: '\u2A11',
    bNot: '\u2AED',
    backcong: '\u224C',
    bcong: '\u224C',
    backepsilon: '\u03F6',
    bepsi: '\u03F6',
    backprime: '\u2035',
    bprime: '\u2035',
    backsim: '\u223D',
    bsim: '\u223D',
    backsimeq: '\u22CD',
    bsime: '\u22CD',
    barvee: '\u22BD',
    barwed: '\u2305',
    barwedge: '\u2305',
    bbrktbrk: '\u23B6',
    bcy: '\u0431',
    bdquo: '\u201E',
    ldquor: '\u201E',
    bemptyv: '\u29B0',
    beta: '\u03B2',
    beth: '\u2136',
    between: '\u226C',
    twixt: '\u226C',
    bfr: '\u{1D51F}',
    bigcirc: '\u25EF',
    xcirc: '\u25EF',
    bigodot: '\u2A00',
    xodot: '\u2A00',
    bigoplus: '\u2A01',
    xoplus: '\u2A01',
    bigotimes: '\u2A02',
    xotime: '\u2A02',
    bigsqcup: '\u2A06',
    xsqcup: '\u2A06',
    bigstar: '\u2605',
    starf: '\u2605',
    bigtriangledown: '\u25BD',
    xdtri: '\u25BD',
    bigtriangleup: '\u25B3',
    xutri: '\u25B3',
    biguplus: '\u2A04',
    xuplus: '\u2A04',
    bkarow: '\u290D',
    rbarr: '\u290D',
    blacklozenge: '\u29EB',
    lozf: '\u29EB',
    blacktriangle: '\u25B4',
    utrif: '\u25B4',
    blacktriangledown: '\u25BE',
    dtrif: '\u25BE',
    blacktriangleleft: '\u25C2',
    ltrif: '\u25C2',
    blacktriangleright: '\u25B8',
    rtrif: '\u25B8',
    blank: '\u2423',
    blk12: '\u2592',
    blk14: '\u2591',
    blk34: '\u2593',
    block: '\u2588',
    bne: '=\u20E5',
    bnequiv: '\u2261\u20E5',
    bnot: '\u2310',
    bopf: '\u{1D553}',
    bowtie: '\u22C8',
    boxDL: '\u2557',
    boxDR: '\u2554',
    boxDl: '\u2556',
    boxDr: '\u2553',
    boxH: '\u2550',
    boxHD: '\u2566',
    boxHU: '\u2569',
    boxHd: '\u2564',
    boxHu: '\u2567',
    boxUL: '\u255D',
    boxUR: '\u255A',
    boxUl: '\u255C',
    boxUr: '\u2559',
    boxV: '\u2551',
    boxVH: '\u256C',
    boxVL: '\u2563',
    boxVR: '\u2560',
    boxVh: '\u256B',
    boxVl: '\u2562',
    boxVr: '\u255F',
    boxbox: '\u29C9',
    boxdL: '\u2555',
    boxdR: '\u2552',
    boxdl: '\u2510',
    boxdr: '\u250C',
    boxhD: '\u2565',
    boxhU: '\u2568',
    boxhd: '\u252C',
    boxhu: '\u2534',
    boxminus: '\u229F',
    minusb: '\u229F',
    boxplus: '\u229E',
    plusb: '\u229E',
    boxtimes: '\u22A0',
    timesb: '\u22A0',
    boxuL: '\u255B',
    boxuR: '\u2558',
    boxul: '\u2518',
    boxur: '\u2514',
    boxv: '\u2502',
    boxvH: '\u256A',
    boxvL: '\u2561',
    boxvR: '\u255E',
    boxvh: '\u253C',
    boxvl: '\u2524',
    boxvr: '\u251C',
    brvbar: '\xA6',
    bscr: '\u{1D4B7}',
    bsemi: '\u204F',
    bsol: '\\',
    bsolb: '\u29C5',
    bsolhsub: '\u27C8',
    bull: '\u2022',
    bullet: '\u2022',
    bumpE: '\u2AAE',
    cacute: '\u0107',
    cap: '\u2229',
    capand: '\u2A44',
    capbrcup: '\u2A49',
    capcap: '\u2A4B',
    capcup: '\u2A47',
    capdot: '\u2A40',
    caps: '\u2229\uFE00',
    caret: '\u2041',
    ccaps: '\u2A4D',
    ccaron: '\u010D',
    ccedil: '\xE7',
    ccirc: '\u0109',
    ccups: '\u2A4C',
    ccupssm: '\u2A50',
    cdot: '\u010B',
    cemptyv: '\u29B2',
    cent: '\xA2',
    cfr: '\u{1D520}',
    chcy: '\u0447',
    check: '\u2713',
    checkmark: '\u2713',
    chi: '\u03C7',
    cir: '\u25CB',
    cirE: '\u29C3',
    circ: '\u02C6',
    circeq: '\u2257',
    cire: '\u2257',
    circlearrowleft: '\u21BA',
    olarr: '\u21BA',
    circlearrowright: '\u21BB',
    orarr: '\u21BB',
    circledS: '\u24C8',
    oS: '\u24C8',
    circledast: '\u229B',
    oast: '\u229B',
    circledcirc: '\u229A',
    ocir: '\u229A',
    circleddash: '\u229D',
    odash: '\u229D',
    cirfnint: '\u2A10',
    cirmid: '\u2AEF',
    cirscir: '\u29C2',
    clubs: '\u2663',
    clubsuit: '\u2663',
    colon: ':',
    comma: ',',
    commat: '@',
    comp: '\u2201',
    complement: '\u2201',
    congdot: '\u2A6D',
    copf: '\u{1D554}',
    copysr: '\u2117',
    crarr: '\u21B5',
    cross: '\u2717',
    cscr: '\u{1D4B8}',
    csub: '\u2ACF',
    csube: '\u2AD1',
    csup: '\u2AD0',
    csupe: '\u2AD2',
    ctdot: '\u22EF',
    cudarrl: '\u2938',
    cudarrr: '\u2935',
    cuepr: '\u22DE',
    curlyeqprec: '\u22DE',
    cuesc: '\u22DF',
    curlyeqsucc: '\u22DF',
    cularr: '\u21B6',
    curvearrowleft: '\u21B6',
    cularrp: '\u293D',
    cup: '\u222A',
    cupbrcap: '\u2A48',
    cupcap: '\u2A46',
    cupcup: '\u2A4A',
    cupdot: '\u228D',
    cupor: '\u2A45',
    cups: '\u222A\uFE00',
    curarr: '\u21B7',
    curvearrowright: '\u21B7',
    curarrm: '\u293C',
    curlyvee: '\u22CE',
    cuvee: '\u22CE',
    curlywedge: '\u22CF',
    cuwed: '\u22CF',
    curren: '\xA4',
    cwint: '\u2231',
    cylcty: '\u232D',
    dHar: '\u2965',
    dagger: '\u2020',
    daleth: '\u2138',
    dash: '\u2010',
    hyphen: '\u2010',
    dbkarow: '\u290F',
    rBarr: '\u290F',
    dcaron: '\u010F',
    dcy: '\u0434',
    ddarr: '\u21CA',
    downdownarrows: '\u21CA',
    ddotseq: '\u2A77',
    eDDot: '\u2A77',
    deg: '\xB0',
    delta: '\u03B4',
    demptyv: '\u29B1',
    dfisht: '\u297F',
    dfr: '\u{1D521}',
    diamondsuit: '\u2666',
    diams: '\u2666',
    digamma: '\u03DD',
    gammad: '\u03DD',
    disin: '\u22F2',
    div: '\xF7',
    divide: '\xF7',
    divideontimes: '\u22C7',
    divonx: '\u22C7',
    djcy: '\u0452',
    dlcorn: '\u231E',
    llcorner: '\u231E',
    dlcrop: '\u230D',
    dollar: '$',
    dopf: '\u{1D555}',
    doteqdot: '\u2251',
    eDot: '\u2251',
    dotminus: '\u2238',
    minusd: '\u2238',
    dotplus: '\u2214',
    plusdo: '\u2214',
    dotsquare: '\u22A1',
    sdotb: '\u22A1',
    drcorn: '\u231F',
    lrcorner: '\u231F',
    drcrop: '\u230C',
    dscr: '\u{1D4B9}',
    dscy: '\u0455',
    dsol: '\u29F6',
    dstrok: '\u0111',
    dtdot: '\u22F1',
    dtri: '\u25BF',
    triangledown: '\u25BF',
    dwangle: '\u29A6',
    dzcy: '\u045F',
    dzigrarr: '\u27FF',
    eacute: '\xE9',
    easter: '\u2A6E',
    ecaron: '\u011B',
    ecir: '\u2256',
    eqcirc: '\u2256',
    ecirc: '\xEA',
    ecolon: '\u2255',
    eqcolon: '\u2255',
    ecy: '\u044D',
    edot: '\u0117',
    efDot: '\u2252',
    fallingdotseq: '\u2252',
    efr: '\u{1D522}',
    eg: '\u2A9A',
    egrave: '\xE8',
    egs: '\u2A96',
    eqslantgtr: '\u2A96',
    egsdot: '\u2A98',
    el: '\u2A99',
    elinters: '\u23E7',
    ell: '\u2113',
    els: '\u2A95',
    eqslantless: '\u2A95',
    elsdot: '\u2A97',
    emacr: '\u0113',
    empty: '\u2205',
    emptyset: '\u2205',
    emptyv: '\u2205',
    varnothing: '\u2205',
    emsp13: '\u2004',
    emsp14: '\u2005',
    emsp: '\u2003',
    eng: '\u014B',
    ensp: '\u2002',
    eogon: '\u0119',
    eopf: '\u{1D556}',
    epar: '\u22D5',
    eparsl: '\u29E3',
    eplus: '\u2A71',
    epsi: '\u03B5',
    epsilon: '\u03B5',
    epsiv: '\u03F5',
    straightepsilon: '\u03F5',
    varepsilon: '\u03F5',
    equals: '=',
    equest: '\u225F',
    questeq: '\u225F',
    equivDD: '\u2A78',
    eqvparsl: '\u29E5',
    erDot: '\u2253',
    risingdotseq: '\u2253',
    erarr: '\u2971',
    escr: '\u212F',
    eta: '\u03B7',
    eth: '\xF0',
    euml: '\xEB',
    euro: '\u20AC',
    excl: '!',
    fcy: '\u0444',
    female: '\u2640',
    ffilig: '\uFB03',
    fflig: '\uFB00',
    ffllig: '\uFB04',
    ffr: '\u{1D523}',
    filig: '\uFB01',
    fjlig: 'fj',
    flat: '\u266D',
    fllig: '\uFB02',
    fltns: '\u25B1',
    fnof: '\u0192',
    fopf: '\u{1D557}',
    fork: '\u22D4',
    pitchfork: '\u22D4',
    forkv: '\u2AD9',
    fpartint: '\u2A0D',
    frac12: '\xBD',
    half: '\xBD',
    frac13: '\u2153',
    frac14: '\xBC',
    frac15: '\u2155',
    frac16: '\u2159',
    frac18: '\u215B',
    frac23: '\u2154',
    frac25: '\u2156',
    frac34: '\xBE',
    frac35: '\u2157',
    frac38: '\u215C',
    frac45: '\u2158',
    frac56: '\u215A',
    frac58: '\u215D',
    frac78: '\u215E',
    frasl: '\u2044',
    frown: '\u2322',
    sfrown: '\u2322',
    fscr: '\u{1D4BB}',
    gEl: '\u2A8C',
    gtreqqless: '\u2A8C',
    gacute: '\u01F5',
    gamma: '\u03B3',
    gap: '\u2A86',
    gtrapprox: '\u2A86',
    gbreve: '\u011F',
    gcirc: '\u011D',
    gcy: '\u0433',
    gdot: '\u0121',
    gescc: '\u2AA9',
    gesdot: '\u2A80',
    gesdoto: '\u2A82',
    gesdotol: '\u2A84',
    gesl: '\u22DB\uFE00',
    gesles: '\u2A94',
    gfr: '\u{1D524}',
    gimel: '\u2137',
    gjcy: '\u0453',
    glE: '\u2A92',
    gla: '\u2AA5',
    glj: '\u2AA4',
    gnE: '\u2269',
    gneqq: '\u2269',
    gnap: '\u2A8A',
    gnapprox: '\u2A8A',
    gne: '\u2A88',
    gneq: '\u2A88',
    gnsim: '\u22E7',
    gopf: '\u{1D558}',
    gscr: '\u210A',
    gsime: '\u2A8E',
    gsiml: '\u2A90',
    gtcc: '\u2AA7',
    gtcir: '\u2A7A',
    gtdot: '\u22D7',
    gtrdot: '\u22D7',
    gtlPar: '\u2995',
    gtquest: '\u2A7C',
    gtrarr: '\u2978',
    gvertneqq: '\u2269\uFE00',
    gvnE: '\u2269\uFE00',
    hardcy: '\u044A',
    harrcir: '\u2948',
    harrw: '\u21AD',
    leftrightsquigarrow: '\u21AD',
    hbar: '\u210F',
    hslash: '\u210F',
    planck: '\u210F',
    plankv: '\u210F',
    hcirc: '\u0125',
    hearts: '\u2665',
    heartsuit: '\u2665',
    hellip: '\u2026',
    mldr: '\u2026',
    hercon: '\u22B9',
    hfr: '\u{1D525}',
    hksearow: '\u2925',
    searhk: '\u2925',
    hkswarow: '\u2926',
    swarhk: '\u2926',
    hoarr: '\u21FF',
    homtht: '\u223B',
    hookleftarrow: '\u21A9',
    larrhk: '\u21A9',
    hookrightarrow: '\u21AA',
    rarrhk: '\u21AA',
    hopf: '\u{1D559}',
    horbar: '\u2015',
    hscr: '\u{1D4BD}',
    hstrok: '\u0127',
    hybull: '\u2043',
    iacute: '\xED',
    icirc: '\xEE',
    icy: '\u0438',
    iecy: '\u0435',
    iexcl: '\xA1',
    ifr: '\u{1D526}',
    igrave: '\xEC',
    iiiint: '\u2A0C',
    qint: '\u2A0C',
    iiint: '\u222D',
    tint: '\u222D',
    iinfin: '\u29DC',
    iiota: '\u2129',
    ijlig: '\u0133',
    imacr: '\u012B',
    imath: '\u0131',
    inodot: '\u0131',
    imof: '\u22B7',
    imped: '\u01B5',
    incare: '\u2105',
    infin: '\u221E',
    infintie: '\u29DD',
    intcal: '\u22BA',
    intercal: '\u22BA',
    intlarhk: '\u2A17',
    intprod: '\u2A3C',
    iprod: '\u2A3C',
    iocy: '\u0451',
    iogon: '\u012F',
    iopf: '\u{1D55A}',
    iota: '\u03B9',
    iquest: '\xBF',
    iscr: '\u{1D4BE}',
    isinE: '\u22F9',
    isindot: '\u22F5',
    isins: '\u22F4',
    isinsv: '\u22F3',
    itilde: '\u0129',
    iukcy: '\u0456',
    iuml: '\xEF',
    jcirc: '\u0135',
    jcy: '\u0439',
    jfr: '\u{1D527}',
    jmath: '\u0237',
    jopf: '\u{1D55B}',
    jscr: '\u{1D4BF}',
    jsercy: '\u0458',
    jukcy: '\u0454',
    kappa: '\u03BA',
    kappav: '\u03F0',
    varkappa: '\u03F0',
    kcedil: '\u0137',
    kcy: '\u043A',
    kfr: '\u{1D528}',
    kgreen: '\u0138',
    khcy: '\u0445',
    kjcy: '\u045C',
    kopf: '\u{1D55C}',
    kscr: '\u{1D4C0}',
    lAtail: '\u291B',
    lBarr: '\u290E',
    lEg: '\u2A8B',
    lesseqqgtr: '\u2A8B',
    lHar: '\u2962',
    lacute: '\u013A',
    laemptyv: '\u29B4',
    lambda: '\u03BB',
    langd: '\u2991',
    lap: '\u2A85',
    lessapprox: '\u2A85',
    laquo: '\xAB',
    larrbfs: '\u291F',
    larrfs: '\u291D',
    larrlp: '\u21AB',
    looparrowleft: '\u21AB',
    larrpl: '\u2939',
    larrsim: '\u2973',
    larrtl: '\u21A2',
    leftarrowtail: '\u21A2',
    lat: '\u2AAB',
    latail: '\u2919',
    late: '\u2AAD',
    lates: '\u2AAD\uFE00',
    lbarr: '\u290C',
    lbbrk: '\u2772',
    lbrace: '{',
    lcub: '{',
    lbrack: '[',
    lsqb: '[',
    lbrke: '\u298B',
    lbrksld: '\u298F',
    lbrkslu: '\u298D',
    lcaron: '\u013E',
    lcedil: '\u013C',
    lcy: '\u043B',
    ldca: '\u2936',
    ldrdhar: '\u2967',
    ldrushar: '\u294B',
    ldsh: '\u21B2',
    le: '\u2264',
    leq: '\u2264',
    leftleftarrows: '\u21C7',
    llarr: '\u21C7',
    leftthreetimes: '\u22CB',
    lthree: '\u22CB',
    lescc: '\u2AA8',
    lesdot: '\u2A7F',
    lesdoto: '\u2A81',
    lesdotor: '\u2A83',
    lesg: '\u22DA\uFE00',
    lesges: '\u2A93',
    lessdot: '\u22D6',
    ltdot: '\u22D6',
    lfisht: '\u297C',
    lfr: '\u{1D529}',
    lgE: '\u2A91',
    lharul: '\u296A',
    lhblk: '\u2584',
    ljcy: '\u0459',
    llhard: '\u296B',
    lltri: '\u25FA',
    lmidot: '\u0140',
    lmoust: '\u23B0',
    lmoustache: '\u23B0',
    lnE: '\u2268',
    lneqq: '\u2268',
    lnap: '\u2A89',
    lnapprox: '\u2A89',
    lne: '\u2A87',
    lneq: '\u2A87',
    lnsim: '\u22E6',
    loang: '\u27EC',
    loarr: '\u21FD',
    longmapsto: '\u27FC',
    xmap: '\u27FC',
    looparrowright: '\u21AC',
    rarrlp: '\u21AC',
    lopar: '\u2985',
    lopf: '\u{1D55D}',
    loplus: '\u2A2D',
    lotimes: '\u2A34',
    lowast: '\u2217',
    loz: '\u25CA',
    lozenge: '\u25CA',
    lpar: '(',
    lparlt: '\u2993',
    lrhard: '\u296D',
    lrm: '\u200E',
    lrtri: '\u22BF',
    lsaquo: '\u2039',
    lscr: '\u{1D4C1}',
    lsime: '\u2A8D',
    lsimg: '\u2A8F',
    lsquor: '\u201A',
    sbquo: '\u201A',
    lstrok: '\u0142',
    ltcc: '\u2AA6',
    ltcir: '\u2A79',
    ltimes: '\u22C9',
    ltlarr: '\u2976',
    ltquest: '\u2A7B',
    ltrPar: '\u2996',
    ltri: '\u25C3',
    triangleleft: '\u25C3',
    lurdshar: '\u294A',
    luruhar: '\u2966',
    lvertneqq: '\u2268\uFE00',
    lvnE: '\u2268\uFE00',
    mDDot: '\u223A',
    macr: '\xAF',
    strns: '\xAF',
    male: '\u2642',
    malt: '\u2720',
    maltese: '\u2720',
    marker: '\u25AE',
    mcomma: '\u2A29',
    mcy: '\u043C',
    mdash: '\u2014',
    mfr: '\u{1D52A}',
    mho: '\u2127',
    micro: '\xB5',
    midcir: '\u2AF0',
    minus: '\u2212',
    minusdu: '\u2A2A',
    mlcp: '\u2ADB',
    models: '\u22A7',
    mopf: '\u{1D55E}',
    mscr: '\u{1D4C2}',
    mu: '\u03BC',
    multimap: '\u22B8',
    mumap: '\u22B8',
    nGg: '\u22D9\u0338',
    nGt: '\u226B\u20D2',
    nLeftarrow: '\u21CD',
    nlArr: '\u21CD',
    nLeftrightarrow: '\u21CE',
    nhArr: '\u21CE',
    nLl: '\u22D8\u0338',
    nLt: '\u226A\u20D2',
    nRightarrow: '\u21CF',
    nrArr: '\u21CF',
    nVDash: '\u22AF',
    nVdash: '\u22AE',
    nacute: '\u0144',
    nang: '\u2220\u20D2',
    napE: '\u2A70\u0338',
    napid: '\u224B\u0338',
    napos: '\u0149',
    natur: '\u266E',
    natural: '\u266E',
    ncap: '\u2A43',
    ncaron: '\u0148',
    ncedil: '\u0146',
    ncongdot: '\u2A6D\u0338',
    ncup: '\u2A42',
    ncy: '\u043D',
    ndash: '\u2013',
    neArr: '\u21D7',
    nearhk: '\u2924',
    nedot: '\u2250\u0338',
    nesear: '\u2928',
    toea: '\u2928',
    nfr: '\u{1D52B}',
    nharr: '\u21AE',
    nleftrightarrow: '\u21AE',
    nhpar: '\u2AF2',
    nis: '\u22FC',
    nisd: '\u22FA',
    njcy: '\u045A',
    nlE: '\u2266\u0338',
    nleqq: '\u2266\u0338',
    nlarr: '\u219A',
    nleftarrow: '\u219A',
    nldr: '\u2025',
    nopf: '\u{1D55F}',
    not: '\xAC',
    notinE: '\u22F9\u0338',
    notindot: '\u22F5\u0338',
    notinvb: '\u22F7',
    notinvc: '\u22F6',
    notnivb: '\u22FE',
    notnivc: '\u22FD',
    nparsl: '\u2AFD\u20E5',
    npart: '\u2202\u0338',
    npolint: '\u2A14',
    nrarr: '\u219B',
    nrightarrow: '\u219B',
    nrarrc: '\u2933\u0338',
    nrarrw: '\u219D\u0338',
    nscr: '\u{1D4C3}',
    nsub: '\u2284',
    nsubE: '\u2AC5\u0338',
    nsubseteqq: '\u2AC5\u0338',
    nsup: '\u2285',
    nsupE: '\u2AC6\u0338',
    nsupseteqq: '\u2AC6\u0338',
    ntilde: '\xF1',
    nu: '\u03BD',
    num: '#',
    numero: '\u2116',
    numsp: '\u2007',
    nvDash: '\u22AD',
    nvHarr: '\u2904',
    nvap: '\u224D\u20D2',
    nvdash: '\u22AC',
    nvge: '\u2265\u20D2',
    nvgt: '>\u20D2',
    nvinfin: '\u29DE',
    nvlArr: '\u2902',
    nvle: '\u2264\u20D2',
    nvlt: '<\u20D2',
    nvltrie: '\u22B4\u20D2',
    nvrArr: '\u2903',
    nvrtrie: '\u22B5\u20D2',
    nvsim: '\u223C\u20D2',
    nwArr: '\u21D6',
    nwarhk: '\u2923',
    nwnear: '\u2927',
    oacute: '\xF3',
    ocirc: '\xF4',
    ocy: '\u043E',
    odblac: '\u0151',
    odiv: '\u2A38',
    odsold: '\u29BC',
    oelig: '\u0153',
    ofcir: '\u29BF',
    ofr: '\u{1D52C}',
    ogon: '\u02DB',
    ograve: '\xF2',
    ogt: '\u29C1',
    ohbar: '\u29B5',
    olcir: '\u29BE',
    olcross: '\u29BB',
    olt: '\u29C0',
    omacr: '\u014D',
    omega: '\u03C9',
    omicron: '\u03BF',
    omid: '\u29B6',
    oopf: '\u{1D560}',
    opar: '\u29B7',
    operp: '\u29B9',
    or: '\u2228',
    vee: '\u2228',
    ord: '\u2A5D',
    order: '\u2134',
    orderof: '\u2134',
    oscr: '\u2134',
    ordf: '\xAA',
    ordm: '\xBA',
    origof: '\u22B6',
    oror: '\u2A56',
    orslope: '\u2A57',
    orv: '\u2A5B',
    oslash: '\xF8',
    osol: '\u2298',
    otilde: '\xF5',
    otimesas: '\u2A36',
    ouml: '\xF6',
    ovbar: '\u233D',
    para: '\xB6',
    parsim: '\u2AF3',
    parsl: '\u2AFD',
    pcy: '\u043F',
    percnt: '%',
    period: '.',
    permil: '\u2030',
    pertenk: '\u2031',
    pfr: '\u{1D52D}',
    phi: '\u03C6',
    phiv: '\u03D5',
    straightphi: '\u03D5',
    varphi: '\u03D5',
    phone: '\u260E',
    pi: '\u03C0',
    piv: '\u03D6',
    varpi: '\u03D6',
    planckh: '\u210E',
    plus: '+',
    plusacir: '\u2A23',
    pluscir: '\u2A22',
    plusdu: '\u2A25',
    pluse: '\u2A72',
    plussim: '\u2A26',
    plustwo: '\u2A27',
    pointint: '\u2A15',
    popf: '\u{1D561}',
    pound: '\xA3',
    prE: '\u2AB3',
    prap: '\u2AB7',
    precapprox: '\u2AB7',
    precnapprox: '\u2AB9',
    prnap: '\u2AB9',
    precneqq: '\u2AB5',
    prnE: '\u2AB5',
    precnsim: '\u22E8',
    prnsim: '\u22E8',
    prime: '\u2032',
    profalar: '\u232E',
    profline: '\u2312',
    profsurf: '\u2313',
    prurel: '\u22B0',
    pscr: '\u{1D4C5}',
    psi: '\u03C8',
    puncsp: '\u2008',
    qfr: '\u{1D52E}',
    qopf: '\u{1D562}',
    qprime: '\u2057',
    qscr: '\u{1D4C6}',
    quatint: '\u2A16',
    quest: '?',
    rAtail: '\u291C',
    rHar: '\u2964',
    race: '\u223D\u0331',
    racute: '\u0155',
    raemptyv: '\u29B3',
    rangd: '\u2992',
    range: '\u29A5',
    raquo: '\xBB',
    rarrap: '\u2975',
    rarrbfs: '\u2920',
    rarrc: '\u2933',
    rarrfs: '\u291E',
    rarrpl: '\u2945',
    rarrsim: '\u2974',
    rarrtl: '\u21A3',
    rightarrowtail: '\u21A3',
    rarrw: '\u219D',
    rightsquigarrow: '\u219D',
    ratail: '\u291A',
    ratio: '\u2236',
    rbbrk: '\u2773',
    rbrace: '}',
    rcub: '}',
    rbrack: ']',
    rsqb: ']',
    rbrke: '\u298C',
    rbrksld: '\u298E',
    rbrkslu: '\u2990',
    rcaron: '\u0159',
    rcedil: '\u0157',
    rcy: '\u0440',
    rdca: '\u2937',
    rdldhar: '\u2969',
    rdsh: '\u21B3',
    rect: '\u25AD',
    rfisht: '\u297D',
    rfr: '\u{1D52F}',
    rharul: '\u296C',
    rho: '\u03C1',
    rhov: '\u03F1',
    varrho: '\u03F1',
    rightrightarrows: '\u21C9',
    rrarr: '\u21C9',
    rightthreetimes: '\u22CC',
    rthree: '\u22CC',
    ring: '\u02DA',
    rlm: '\u200F',
    rmoust: '\u23B1',
    rmoustache: '\u23B1',
    rnmid: '\u2AEE',
    roang: '\u27ED',
    roarr: '\u21FE',
    ropar: '\u2986',
    ropf: '\u{1D563}',
    roplus: '\u2A2E',
    rotimes: '\u2A35',
    rpar: ')',
    rpargt: '\u2994',
    rppolint: '\u2A12',
    rsaquo: '\u203A',
    rscr: '\u{1D4C7}',
    rtimes: '\u22CA',
    rtri: '\u25B9',
    triangleright: '\u25B9',
    rtriltri: '\u29CE',
    ruluhar: '\u2968',
    rx: '\u211E',
    sacute: '\u015B',
    scE: '\u2AB4',
    scap: '\u2AB8',
    succapprox: '\u2AB8',
    scaron: '\u0161',
    scedil: '\u015F',
    scirc: '\u015D',
    scnE: '\u2AB6',
    succneqq: '\u2AB6',
    scnap: '\u2ABA',
    succnapprox: '\u2ABA',
    scnsim: '\u22E9',
    succnsim: '\u22E9',
    scpolint: '\u2A13',
    scy: '\u0441',
    sdot: '\u22C5',
    sdote: '\u2A66',
    seArr: '\u21D8',
    sect: '\xA7',
    semi: ';',
    seswar: '\u2929',
    tosa: '\u2929',
    sext: '\u2736',
    sfr: '\u{1D530}',
    sharp: '\u266F',
    shchcy: '\u0449',
    shcy: '\u0448',
    shy: '\xAD',
    sigma: '\u03C3',
    sigmaf: '\u03C2',
    sigmav: '\u03C2',
    varsigma: '\u03C2',
    simdot: '\u2A6A',
    simg: '\u2A9E',
    simgE: '\u2AA0',
    siml: '\u2A9D',
    simlE: '\u2A9F',
    simne: '\u2246',
    simplus: '\u2A24',
    simrarr: '\u2972',
    smashp: '\u2A33',
    smeparsl: '\u29E4',
    smile: '\u2323',
    ssmile: '\u2323',
    smt: '\u2AAA',
    smte: '\u2AAC',
    smtes: '\u2AAC\uFE00',
    softcy: '\u044C',
    sol: '/',
    solb: '\u29C4',
    solbar: '\u233F',
    sopf: '\u{1D564}',
    spades: '\u2660',
    spadesuit: '\u2660',
    sqcaps: '\u2293\uFE00',
    sqcups: '\u2294\uFE00',
    sscr: '\u{1D4C8}',
    star: '\u2606',
    sub: '\u2282',
    subset: '\u2282',
    subE: '\u2AC5',
    subseteqq: '\u2AC5',
    subdot: '\u2ABD',
    subedot: '\u2AC3',
    submult: '\u2AC1',
    subnE: '\u2ACB',
    subsetneqq: '\u2ACB',
    subne: '\u228A',
    subsetneq: '\u228A',
    subplus: '\u2ABF',
    subrarr: '\u2979',
    subsim: '\u2AC7',
    subsub: '\u2AD5',
    subsup: '\u2AD3',
    sung: '\u266A',
    sup1: '\xB9',
    sup2: '\xB2',
    sup3: '\xB3',
    supE: '\u2AC6',
    supseteqq: '\u2AC6',
    supdot: '\u2ABE',
    supdsub: '\u2AD8',
    supedot: '\u2AC4',
    suphsol: '\u27C9',
    suphsub: '\u2AD7',
    suplarr: '\u297B',
    supmult: '\u2AC2',
    supnE: '\u2ACC',
    supsetneqq: '\u2ACC',
    supne: '\u228B',
    supsetneq: '\u228B',
    supplus: '\u2AC0',
    supsim: '\u2AC8',
    supsub: '\u2AD4',
    supsup: '\u2AD6',
    swArr: '\u21D9',
    swnwar: '\u292A',
    szlig: '\xDF',
    target: '\u2316',
    tau: '\u03C4',
    tcaron: '\u0165',
    tcedil: '\u0163',
    tcy: '\u0442',
    telrec: '\u2315',
    tfr: '\u{1D531}',
    theta: '\u03B8',
    thetasym: '\u03D1',
    thetav: '\u03D1',
    vartheta: '\u03D1',
    thorn: '\xFE',
    times: '\xD7',
    timesbar: '\u2A31',
    timesd: '\u2A30',
    topbot: '\u2336',
    topcir: '\u2AF1',
    topf: '\u{1D565}',
    topfork: '\u2ADA',
    tprime: '\u2034',
    triangle: '\u25B5',
    utri: '\u25B5',
    triangleq: '\u225C',
    trie: '\u225C',
    tridot: '\u25EC',
    triminus: '\u2A3A',
    triplus: '\u2A39',
    trisb: '\u29CD',
    tritime: '\u2A3B',
    trpezium: '\u23E2',
    tscr: '\u{1D4C9}',
    tscy: '\u0446',
    tshcy: '\u045B',
    tstrok: '\u0167',
    uHar: '\u2963',
    uacute: '\xFA',
    ubrcy: '\u045E',
    ubreve: '\u016D',
    ucirc: '\xFB',
    ucy: '\u0443',
    udblac: '\u0171',
    ufisht: '\u297E',
    ufr: '\u{1D532}',
    ugrave: '\xF9',
    uhblk: '\u2580',
    ulcorn: '\u231C',
    ulcorner: '\u231C',
    ulcrop: '\u230F',
    ultri: '\u25F8',
    umacr: '\u016B',
    uogon: '\u0173',
    uopf: '\u{1D566}',
    upsi: '\u03C5',
    upsilon: '\u03C5',
    upuparrows: '\u21C8',
    uuarr: '\u21C8',
    urcorn: '\u231D',
    urcorner: '\u231D',
    urcrop: '\u230E',
    uring: '\u016F',
    urtri: '\u25F9',
    uscr: '\u{1D4CA}',
    utdot: '\u22F0',
    utilde: '\u0169',
    uuml: '\xFC',
    uwangle: '\u29A7',
    vBar: '\u2AE8',
    vBarv: '\u2AE9',
    vangrt: '\u299C',
    varsubsetneq: '\u228A\uFE00',
    vsubne: '\u228A\uFE00',
    varsubsetneqq: '\u2ACB\uFE00',
    vsubnE: '\u2ACB\uFE00',
    varsupsetneq: '\u228B\uFE00',
    vsupne: '\u228B\uFE00',
    varsupsetneqq: '\u2ACC\uFE00',
    vsupnE: '\u2ACC\uFE00',
    vcy: '\u0432',
    veebar: '\u22BB',
    veeeq: '\u225A',
    vellip: '\u22EE',
    vfr: '\u{1D533}',
    vopf: '\u{1D567}',
    vscr: '\u{1D4CB}',
    vzigzag: '\u299A',
    wcirc: '\u0175',
    wedbar: '\u2A5F',
    wedgeq: '\u2259',
    weierp: '\u2118',
    wp: '\u2118',
    wfr: '\u{1D534}',
    wopf: '\u{1D568}',
    wscr: '\u{1D4CC}',
    xfr: '\u{1D535}',
    xi: '\u03BE',
    xnis: '\u22FB',
    xopf: '\u{1D569}',
    xscr: '\u{1D4CD}',
    yacute: '\xFD',
    yacy: '\u044F',
    ycirc: '\u0177',
    ycy: '\u044B',
    yen: '\xA5',
    yfr: '\u{1D536}',
    yicy: '\u0457',
    yopf: '\u{1D56A}',
    yscr: '\u{1D4CE}',
    yucy: '\u044E',
    yuml: '\xFF',
    zacute: '\u017A',
    zcaron: '\u017E',
    zcy: '\u0437',
    zdot: '\u017C',
    zeta: '\u03B6',
    zfr: '\u{1D537}',
    zhcy: '\u0436',
    zigrarr: '\u21DD',
    zopf: '\u{1D56B}',
    zscr: '\u{1D4CF}',
    zwj: '\u200D',
    zwnj: '\u200C',
  },
  Ra = '\uE500';
Ve.ngsp = Ra;
var $a = [/^\s*$/, /[<>]/, /^[{}]$/, /&(#|[a-z])/i, /^\/\//];
function _s(t8, e) {
  if (e != null && !(Array.isArray(e) && e.length == 2))
    throw new Error(`Expected '${t8}' to be an array, [start, end].`);
  if (e != null) {
    let r = e[0],
      n = e[1];
    $a.forEach((s) => {
      if (s.test(r) || s.test(n))
        throw new Error(
          `['${r}', '${n}'] contains unusable interpolation symbol.`
        );
    });
  }
}
var br = class t2 {
    static fromArray(e) {
      return e ? (_s('interpolation', e), new t2(e[0], e[1])) : Tr;
    }
    constructor(e, r) {
      (this.start = e), (this.end = r);
    }
  },
  Tr = new br('{{', '}}'),
  ct = class extends Re {
    constructor(e, r, n) {
      super(n, e), (this.tokenType = r);
    }
  },
  Fr = class {
    constructor(e, r, n) {
      (this.tokens = e),
        (this.errors = r),
        (this.nonNormalizedIcuExpressions = n);
    }
  };
function Ps(t8, e, r, n = {}) {
  let s = new Pr(new Se(t8, e), r, n);
  return (
    s.tokenize(), new Fr(lo(s.tokens), s.errors, s.nonNormalizedIcuExpressions)
  );
}
var ro = /\r\n?/g;
function Ue(t8) {
  return `Unexpected character "${t8 === 0 ? 'EOF' : String.fromCharCode(t8)}"`;
}
function ws(t8) {
  return `Unknown entity "${t8}" - use the "&#<decimal>;" or  "&#x<hex>;" syntax`;
}
function no(t8, e) {
  return `Unable to parse entity "${e}" - ${t8} character reference entities must end with ";"`;
}
var jt;
(function (t8) {
  (t8.HEX = 'hexadecimal'), (t8.DEC = 'decimal');
})(jt || (jt = {}));
var pt = class {
    constructor(e) {
      this.error = e;
    }
  },
  Pr = class {
    constructor(e, r, n) {
      (this._getTagContentType = r),
        (this._currentTokenStart = null),
        (this._currentTokenType = null),
        (this._expansionCaseStack = []),
        (this._inInterpolation = !1),
        (this._fullNameStack = []),
        (this.tokens = []),
        (this.errors = []),
        (this.nonNormalizedIcuExpressions = []),
        (this._tokenizeIcu = n.tokenizeExpansionForms || !1),
        (this._interpolationConfig = n.interpolationConfig || Tr),
        (this._leadingTriviaCodePoints =
          n.leadingTriviaChars &&
          n.leadingTriviaChars.map((i) => i.codePointAt(0) || 0)),
        (this._canSelfClose = n.canSelfClose || !1),
        (this._allowHtmComponentClosingTags =
          n.allowHtmComponentClosingTags || !1);
      let s = n.range || {
        endPos: e.content.length,
        startPos: 0,
        startLine: 0,
        startCol: 0,
      };
      (this._cursor = n.escapedString ? new Nr(e, s) : new Kt(e, s)),
        (this._preserveLineEndings = n.preserveLineEndings || !1),
        (this._i18nNormalizeLineEndingsInICUs =
          n.i18nNormalizeLineEndingsInICUs || !1),
        (this._tokenizeBlocks = n.tokenizeBlocks ?? !0);
      try {
        this._cursor.init();
      } catch (i) {
        this.handleError(i);
      }
    }
    _processCarriageReturns(e) {
      return this._preserveLineEndings
        ? e
        : e.replace(
            ro,
            `
`
          );
    }
    tokenize() {
      for (; this._cursor.peek() !== 0; ) {
        let e = this._cursor.clone();
        try {
          if (this._attemptCharCode(60))
            if (this._attemptCharCode(33))
              this._attemptStr('[CDATA[')
                ? this._consumeCdata(e)
                : this._attemptStr('--')
                ? this._consumeComment(e)
                : this._attemptStrCaseInsensitive('doctype')
                ? this._consumeDocType(e)
                : this._consumeBogusComment(e);
            else if (this._attemptCharCode(47)) this._consumeTagClose(e);
            else {
              let r = this._cursor.clone();
              this._attemptCharCode(63)
                ? ((this._cursor = r), this._consumeBogusComment(e))
                : this._consumeTagOpen(e);
            }
          else
            this._tokenizeBlocks && this._attemptCharCode(64)
              ? this._consumeBlockStart(e)
              : this._tokenizeBlocks &&
                !this._inInterpolation &&
                !this._isInExpansionCase() &&
                !this._isInExpansionForm() &&
                this._attemptCharCode(125)
              ? this._consumeBlockEnd(e)
              : (this._tokenizeIcu && this._tokenizeExpansionForm()) ||
                this._consumeWithInterpolation(
                  5,
                  8,
                  () => this._isTextEnd(),
                  () => this._isTagStart()
                );
        } catch (r) {
          this.handleError(r);
        }
      }
      this._beginToken(30), this._endToken([]);
    }
    _getBlockName() {
      let e = !1,
        r = this._cursor.clone();
      return (
        this._attemptCharCodeUntilFn((n) =>
          wt(n) ? !e : xs(n) ? ((e = !0), !1) : !0
        ),
        this._cursor.getChars(r).trim()
      );
    }
    _consumeBlockStart(e) {
      this._beginToken(25, e);
      let r = this._endToken([this._getBlockName()]);
      if (this._cursor.peek() === 40)
        if (
          (this._cursor.advance(),
          this._consumeBlockParameters(),
          this._attemptCharCodeUntilFn(k),
          this._attemptCharCode(41))
        )
          this._attemptCharCodeUntilFn(k);
        else {
          r.type = 29;
          return;
        }
      this._attemptCharCode(123)
        ? (this._beginToken(26), this._endToken([]))
        : (r.type = 29);
    }
    _consumeBlockEnd(e) {
      this._beginToken(27, e), this._endToken([]);
    }
    _consumeBlockParameters() {
      for (
        this._attemptCharCodeUntilFn(ks);
        this._cursor.peek() !== 41 && this._cursor.peek() !== 0;

      ) {
        this._beginToken(28);
        let e = this._cursor.clone(),
          r = null,
          n = 0;
        for (
          ;
          (this._cursor.peek() !== 59 && this._cursor.peek() !== 0) ||
          r !== null;

        ) {
          let s = this._cursor.peek();
          if (s === 92) this._cursor.advance();
          else if (s === r) r = null;
          else if (r === null && dr(s)) r = s;
          else if (s === 40 && r === null) n++;
          else if (s === 41 && r === null) {
            if (n === 0) break;
            n > 0 && n--;
          }
          this._cursor.advance();
        }
        this._endToken([this._cursor.getChars(e)]),
          this._attemptCharCodeUntilFn(ks);
      }
    }
    _tokenizeExpansionForm() {
      if (this.isExpansionFormStart())
        return this._consumeExpansionFormStart(), !0;
      if (oo(this._cursor.peek()) && this._isInExpansionForm())
        return this._consumeExpansionCaseStart(), !0;
      if (this._cursor.peek() === 125) {
        if (this._isInExpansionCase())
          return this._consumeExpansionCaseEnd(), !0;
        if (this._isInExpansionForm())
          return this._consumeExpansionFormEnd(), !0;
      }
      return !1;
    }
    _beginToken(e, r = this._cursor.clone()) {
      (this._currentTokenStart = r), (this._currentTokenType = e);
    }
    _endToken(e, r) {
      if (this._currentTokenStart === null)
        throw new ct(
          'Programming error - attempted to end a token when there was no start to the token',
          this._currentTokenType,
          this._cursor.getSpan(r)
        );
      if (this._currentTokenType === null)
        throw new ct(
          'Programming error - attempted to end a token which has no token type',
          null,
          this._cursor.getSpan(this._currentTokenStart)
        );
      let n = {
        type: this._currentTokenType,
        parts: e,
        sourceSpan: (r ?? this._cursor).getSpan(
          this._currentTokenStart,
          this._leadingTriviaCodePoints
        ),
      };
      return (
        this.tokens.push(n),
        (this._currentTokenStart = null),
        (this._currentTokenType = null),
        n
      );
    }
    _createError(e, r) {
      this._isInExpansionForm() &&
        (e += ` (Do you have an unescaped "{" in your template? Use "{{ '{' }}") to escape it.)`);
      let n = new ct(e, this._currentTokenType, r);
      return (
        (this._currentTokenStart = null),
        (this._currentTokenType = null),
        new pt(n)
      );
    }
    handleError(e) {
      if (
        (e instanceof ht &&
          (e = this._createError(e.msg, this._cursor.getSpan(e.cursor))),
        e instanceof pt)
      )
        this.errors.push(e.error);
      else throw e;
    }
    _attemptCharCode(e) {
      return this._cursor.peek() === e ? (this._cursor.advance(), !0) : !1;
    }
    _attemptCharCodeCaseInsensitive(e) {
      return uo(this._cursor.peek(), e) ? (this._cursor.advance(), !0) : !1;
    }
    _requireCharCode(e) {
      let r = this._cursor.clone();
      if (!this._attemptCharCode(e))
        throw this._createError(
          Ue(this._cursor.peek()),
          this._cursor.getSpan(r)
        );
    }
    _attemptStr(e) {
      let r = e.length;
      if (this._cursor.charsLeft() < r) return !1;
      let n = this._cursor.clone();
      for (let s = 0; s < r; s++)
        if (!this._attemptCharCode(e.charCodeAt(s)))
          return (this._cursor = n), !1;
      return !0;
    }
    _attemptStrCaseInsensitive(e) {
      for (let r = 0; r < e.length; r++)
        if (!this._attemptCharCodeCaseInsensitive(e.charCodeAt(r))) return !1;
      return !0;
    }
    _requireStr(e) {
      let r = this._cursor.clone();
      if (!this._attemptStr(e))
        throw this._createError(
          Ue(this._cursor.peek()),
          this._cursor.getSpan(r)
        );
    }
    _requireStrCaseInsensitive(e) {
      let r = this._cursor.clone();
      if (!this._attemptStrCaseInsensitive(e))
        throw this._createError(
          Ue(this._cursor.peek()),
          this._cursor.getSpan(r)
        );
    }
    _attemptCharCodeUntilFn(e) {
      for (; !e(this._cursor.peek()); ) this._cursor.advance();
    }
    _requireCharCodeUntilFn(e, r) {
      let n = this._cursor.clone();
      if ((this._attemptCharCodeUntilFn(e), this._cursor.diff(n) < r))
        throw this._createError(
          Ue(this._cursor.peek()),
          this._cursor.getSpan(n)
        );
    }
    _attemptUntilChar(e) {
      for (; this._cursor.peek() !== e; ) this._cursor.advance();
    }
    _readChar() {
      let e = String.fromCodePoint(this._cursor.peek());
      return this._cursor.advance(), e;
    }
    _consumeEntity(e) {
      this._beginToken(9);
      let r = this._cursor.clone();
      if ((this._cursor.advance(), this._attemptCharCode(35))) {
        let n = this._attemptCharCode(120) || this._attemptCharCode(88),
          s = this._cursor.clone();
        if ((this._attemptCharCodeUntilFn(io), this._cursor.peek() != 59)) {
          this._cursor.advance();
          let a = n ? jt.HEX : jt.DEC;
          throw this._createError(
            no(a, this._cursor.getChars(r)),
            this._cursor.getSpan()
          );
        }
        let i = this._cursor.getChars(s);
        this._cursor.advance();
        try {
          let a = parseInt(i, n ? 16 : 10);
          this._endToken([String.fromCharCode(a), this._cursor.getChars(r)]);
        } catch {
          throw this._createError(
            ws(this._cursor.getChars(r)),
            this._cursor.getSpan()
          );
        }
      } else {
        let n = this._cursor.clone();
        if ((this._attemptCharCodeUntilFn(ao), this._cursor.peek() != 59))
          this._beginToken(e, r), (this._cursor = n), this._endToken(['&']);
        else {
          let s = this._cursor.getChars(n);
          this._cursor.advance();
          let i = Ve[s];
          if (!i) throw this._createError(ws(s), this._cursor.getSpan(r));
          this._endToken([i, `&${s};`]);
        }
      }
    }
    _consumeRawText(e, r) {
      this._beginToken(e ? 6 : 7);
      let n = [];
      for (;;) {
        let s = this._cursor.clone(),
          i = r();
        if (((this._cursor = s), i)) break;
        e && this._cursor.peek() === 38
          ? (this._endToken([this._processCarriageReturns(n.join(''))]),
            (n.length = 0),
            this._consumeEntity(6),
            this._beginToken(6))
          : n.push(this._readChar());
      }
      this._endToken([this._processCarriageReturns(n.join(''))]);
    }
    _consumeComment(e) {
      this._beginToken(10, e),
        this._endToken([]),
        this._consumeRawText(!1, () => this._attemptStr('-->')),
        this._beginToken(11),
        this._requireStr('-->'),
        this._endToken([]);
    }
    _consumeBogusComment(e) {
      this._beginToken(10, e),
        this._endToken([]),
        this._consumeRawText(!1, () => this._cursor.peek() === 62),
        this._beginToken(11),
        this._cursor.advance(),
        this._endToken([]);
    }
    _consumeCdata(e) {
      this._beginToken(12, e),
        this._endToken([]),
        this._consumeRawText(!1, () => this._attemptStr(']]>')),
        this._beginToken(13),
        this._requireStr(']]>'),
        this._endToken([]);
    }
    _consumeDocType(e) {
      this._beginToken(18, e),
        this._endToken([]),
        this._consumeRawText(!1, () => this._cursor.peek() === 62),
        this._beginToken(19),
        this._cursor.advance(),
        this._endToken([]);
    }
    _consumePrefixAndName() {
      let e = this._cursor.clone(),
        r = '';
      for (; this._cursor.peek() !== 58 && !so(this._cursor.peek()); )
        this._cursor.advance();
      let n;
      this._cursor.peek() === 58
        ? ((r = this._cursor.getChars(e)),
          this._cursor.advance(),
          (n = this._cursor.clone()))
        : (n = e),
        this._requireCharCodeUntilFn(bs, r === '' ? 0 : 1);
      let s = this._cursor.getChars(n);
      return [r, s];
    }
    _consumeTagOpen(e) {
      let r,
        n,
        s,
        i = [];
      try {
        if (!bt(this._cursor.peek()))
          throw this._createError(
            Ue(this._cursor.peek()),
            this._cursor.getSpan(e)
          );
        for (
          s = this._consumeTagOpenStart(e),
            n = s.parts[0],
            r = s.parts[1],
            this._attemptCharCodeUntilFn(k);
          this._cursor.peek() !== 47 &&
          this._cursor.peek() !== 62 &&
          this._cursor.peek() !== 60 &&
          this._cursor.peek() !== 0;

        ) {
          let [o, u] = this._consumeAttributeName();
          if ((this._attemptCharCodeUntilFn(k), this._attemptCharCode(61))) {
            this._attemptCharCodeUntilFn(k);
            let p = this._consumeAttributeValue();
            i.push({ prefix: o, name: u, value: p });
          } else i.push({ prefix: o, name: u });
          this._attemptCharCodeUntilFn(k);
        }
        this._consumeTagOpenEnd();
      } catch (o) {
        if (o instanceof pt) {
          s ? (s.type = 4) : (this._beginToken(5, e), this._endToken(['<']));
          return;
        }
        throw o;
      }
      if (this._canSelfClose && this.tokens[this.tokens.length - 1].type === 2)
        return;
      let a = this._getTagContentType(r, n, this._fullNameStack.length > 0, i);
      this._handleFullNameStackForTagOpen(n, r),
        a === F.RAW_TEXT
          ? this._consumeRawTextWithTagClose(n, r, !1)
          : a === F.ESCAPABLE_RAW_TEXT &&
            this._consumeRawTextWithTagClose(n, r, !0);
    }
    _consumeRawTextWithTagClose(e, r, n) {
      this._consumeRawText(n, () =>
        !this._attemptCharCode(60) ||
        !this._attemptCharCode(47) ||
        (this._attemptCharCodeUntilFn(k),
        !this._attemptStrCaseInsensitive(e ? `${e}:${r}` : r))
          ? !1
          : (this._attemptCharCodeUntilFn(k), this._attemptCharCode(62))
      ),
        this._beginToken(3),
        this._requireCharCodeUntilFn((s) => s === 62, 3),
        this._cursor.advance(),
        this._endToken([e, r]),
        this._handleFullNameStackForTagClose(e, r);
    }
    _consumeTagOpenStart(e) {
      this._beginToken(0, e);
      let r = this._consumePrefixAndName();
      return this._endToken(r);
    }
    _consumeAttributeName() {
      let e = this._cursor.peek();
      if (e === 39 || e === 34)
        throw this._createError(Ue(e), this._cursor.getSpan());
      this._beginToken(14);
      let r = this._consumePrefixAndName();
      return this._endToken(r), r;
    }
    _consumeAttributeValue() {
      let e;
      if (this._cursor.peek() === 39 || this._cursor.peek() === 34) {
        let r = this._cursor.peek();
        this._consumeQuote(r);
        let n = () => this._cursor.peek() === r;
        (e = this._consumeWithInterpolation(16, 17, n, n)),
          this._consumeQuote(r);
      } else {
        let r = () => bs(this._cursor.peek());
        e = this._consumeWithInterpolation(16, 17, r, r);
      }
      return e;
    }
    _consumeQuote(e) {
      this._beginToken(15),
        this._requireCharCode(e),
        this._endToken([String.fromCodePoint(e)]);
    }
    _consumeTagOpenEnd() {
      let e = this._attemptCharCode(47) ? 2 : 1;
      this._beginToken(e), this._requireCharCode(62), this._endToken([]);
    }
    _consumeTagClose(e) {
      if (
        (this._beginToken(3, e),
        this._attemptCharCodeUntilFn(k),
        this._allowHtmComponentClosingTags && this._attemptCharCode(47))
      )
        this._attemptCharCodeUntilFn(k),
          this._requireCharCode(62),
          this._endToken([]);
      else {
        let [r, n] = this._consumePrefixAndName();
        this._attemptCharCodeUntilFn(k),
          this._requireCharCode(62),
          this._endToken([r, n]),
          this._handleFullNameStackForTagClose(r, n);
      }
    }
    _consumeExpansionFormStart() {
      this._beginToken(20),
        this._requireCharCode(123),
        this._endToken([]),
        this._expansionCaseStack.push(20),
        this._beginToken(7);
      let e = this._readUntil(44),
        r = this._processCarriageReturns(e);
      if (this._i18nNormalizeLineEndingsInICUs) this._endToken([r]);
      else {
        let s = this._endToken([e]);
        r !== e && this.nonNormalizedIcuExpressions.push(s);
      }
      this._requireCharCode(44),
        this._attemptCharCodeUntilFn(k),
        this._beginToken(7);
      let n = this._readUntil(44);
      this._endToken([n]),
        this._requireCharCode(44),
        this._attemptCharCodeUntilFn(k);
    }
    _consumeExpansionCaseStart() {
      this._beginToken(21);
      let e = this._readUntil(123).trim();
      this._endToken([e]),
        this._attemptCharCodeUntilFn(k),
        this._beginToken(22),
        this._requireCharCode(123),
        this._endToken([]),
        this._attemptCharCodeUntilFn(k),
        this._expansionCaseStack.push(22);
    }
    _consumeExpansionCaseEnd() {
      this._beginToken(23),
        this._requireCharCode(125),
        this._endToken([]),
        this._attemptCharCodeUntilFn(k),
        this._expansionCaseStack.pop();
    }
    _consumeExpansionFormEnd() {
      this._beginToken(24),
        this._requireCharCode(125),
        this._endToken([]),
        this._expansionCaseStack.pop();
    }
    _consumeWithInterpolation(e, r, n, s) {
      this._beginToken(e);
      let i = [];
      for (; !n(); ) {
        let o = this._cursor.clone();
        this._interpolationConfig &&
        this._attemptStr(this._interpolationConfig.start)
          ? (this._endToken([this._processCarriageReturns(i.join(''))], o),
            (i.length = 0),
            this._consumeInterpolation(r, o, s),
            this._beginToken(e))
          : this._cursor.peek() === 38
          ? (this._endToken([this._processCarriageReturns(i.join(''))]),
            (i.length = 0),
            this._consumeEntity(e),
            this._beginToken(e))
          : i.push(this._readChar());
      }
      this._inInterpolation = !1;
      let a = this._processCarriageReturns(i.join(''));
      return this._endToken([a]), a;
    }
    _consumeInterpolation(e, r, n) {
      let s = [];
      this._beginToken(e, r), s.push(this._interpolationConfig.start);
      let i = this._cursor.clone(),
        a = null,
        o = !1;
      for (; this._cursor.peek() !== 0 && (n === null || !n()); ) {
        let u = this._cursor.clone();
        if (this._isTagStart()) {
          (this._cursor = u),
            s.push(this._getProcessedChars(i, u)),
            this._endToken(s);
          return;
        }
        if (a === null)
          if (this._attemptStr(this._interpolationConfig.end)) {
            s.push(this._getProcessedChars(i, u)),
              s.push(this._interpolationConfig.end),
              this._endToken(s);
            return;
          } else this._attemptStr('//') && (o = !0);
        let p = this._cursor.peek();
        this._cursor.advance(),
          p === 92
            ? this._cursor.advance()
            : p === a
            ? (a = null)
            : !o && a === null && dr(p) && (a = p);
      }
      s.push(this._getProcessedChars(i, this._cursor)), this._endToken(s);
    }
    _getProcessedChars(e, r) {
      return this._processCarriageReturns(r.getChars(e));
    }
    _isTextEnd() {
      return !!(
        this._isTagStart() ||
        this._cursor.peek() === 0 ||
        (this._tokenizeIcu &&
          !this._inInterpolation &&
          (this.isExpansionFormStart() ||
            (this._cursor.peek() === 125 && this._isInExpansionCase()))) ||
        (this._tokenizeBlocks &&
          !this._inInterpolation &&
          !this._isInExpansion() &&
          (this._isBlockStart() || this._cursor.peek() === 125))
      );
    }
    _isTagStart() {
      if (this._cursor.peek() === 60) {
        let e = this._cursor.clone();
        e.advance();
        let r = e.peek();
        if (
          (97 <= r && r <= 122) ||
          (65 <= r && r <= 90) ||
          r === 47 ||
          r === 33
        )
          return !0;
      }
      return !1;
    }
    _isBlockStart() {
      if (this._tokenizeBlocks && this._cursor.peek() === 64) {
        let e = this._cursor.clone();
        if ((e.advance(), xs(e.peek()))) return !0;
      }
      return !1;
    }
    _readUntil(e) {
      let r = this._cursor.clone();
      return this._attemptUntilChar(e), this._cursor.getChars(r);
    }
    _isInExpansion() {
      return this._isInExpansionCase() || this._isInExpansionForm();
    }
    _isInExpansionCase() {
      return (
        this._expansionCaseStack.length > 0 &&
        this._expansionCaseStack[this._expansionCaseStack.length - 1] === 22
      );
    }
    _isInExpansionForm() {
      return (
        this._expansionCaseStack.length > 0 &&
        this._expansionCaseStack[this._expansionCaseStack.length - 1] === 20
      );
    }
    isExpansionFormStart() {
      if (this._cursor.peek() !== 123) return !1;
      if (this._interpolationConfig) {
        let e = this._cursor.clone(),
          r = this._attemptStr(this._interpolationConfig.start);
        return (this._cursor = e), !r;
      }
      return !0;
    }
    _handleFullNameStackForTagOpen(e, r) {
      let n = qe(e, r);
      (this._fullNameStack.length === 0 ||
        this._fullNameStack[this._fullNameStack.length - 1] === n) &&
        this._fullNameStack.push(n);
    }
    _handleFullNameStackForTagClose(e, r) {
      let n = qe(e, r);
      this._fullNameStack.length !== 0 &&
        this._fullNameStack[this._fullNameStack.length - 1] === n &&
        this._fullNameStack.pop();
    }
  };
function k(t8) {
  return !wt(t8) || t8 === 0;
}
function bs(t8) {
  return (
    wt(t8) ||
    t8 === 62 ||
    t8 === 60 ||
    t8 === 47 ||
    t8 === 39 ||
    t8 === 34 ||
    t8 === 61 ||
    t8 === 0
  );
}
function so(t8) {
  return (t8 < 97 || 122 < t8) && (t8 < 65 || 90 < t8) && (t8 < 48 || t8 > 57);
}
function io(t8) {
  return t8 === 59 || t8 === 0 || !Fn(t8);
}
function ao(t8) {
  return t8 === 59 || t8 === 0 || !bt(t8);
}
function oo(t8) {
  return t8 !== 125;
}
function uo(t8, e) {
  return Ts(t8) === Ts(e);
}
function Ts(t8) {
  return t8 >= 97 && t8 <= 122 ? t8 - 97 + 65 : t8;
}
function xs(t8) {
  return bt(t8) || hr(t8) || t8 === 95;
}
function ks(t8) {
  return t8 !== 59 && k(t8);
}
function lo(t8) {
  let e = [],
    r;
  for (let n = 0; n < t8.length; n++) {
    let s = t8[n];
    (r && r.type === 5 && s.type === 5) || (r && r.type === 16 && s.type === 16)
      ? ((r.parts[0] += s.parts[0]), (r.sourceSpan.end = s.sourceSpan.end))
      : ((r = s), e.push(r));
  }
  return e;
}
var Kt = class t3 {
    constructor(e, r) {
      if (e instanceof t3) {
        (this.file = e.file), (this.input = e.input), (this.end = e.end);
        let n = e.state;
        this.state = {
          peek: n.peek,
          offset: n.offset,
          line: n.line,
          column: n.column,
        };
      } else {
        if (!r)
          throw new Error(
            'Programming error: the range argument must be provided with a file argument.'
          );
        (this.file = e),
          (this.input = e.content),
          (this.end = r.endPos),
          (this.state = {
            peek: -1,
            offset: r.startPos,
            line: r.startLine,
            column: r.startCol,
          });
      }
    }
    clone() {
      return new t3(this);
    }
    peek() {
      return this.state.peek;
    }
    charsLeft() {
      return this.end - this.state.offset;
    }
    diff(e) {
      return this.state.offset - e.state.offset;
    }
    advance() {
      this.advanceState(this.state);
    }
    init() {
      this.updatePeek(this.state);
    }
    getSpan(e, r) {
      e = e || this;
      let n = e;
      if (r)
        for (; this.diff(e) > 0 && r.indexOf(e.peek()) !== -1; )
          n === e && (e = e.clone()), e.advance();
      let s = this.locationFromCursor(e),
        i = this.locationFromCursor(this),
        a = n !== e ? this.locationFromCursor(n) : s;
      return new f(s, i, a);
    }
    getChars(e) {
      return this.input.substring(e.state.offset, this.state.offset);
    }
    charAt(e) {
      return this.input.charCodeAt(e);
    }
    advanceState(e) {
      if (e.offset >= this.end)
        throw ((this.state = e), new ht('Unexpected character "EOF"', this));
      let r = this.charAt(e.offset);
      r === 10 ? (e.line++, (e.column = 0)) : fr(r) || e.column++,
        e.offset++,
        this.updatePeek(e);
    }
    updatePeek(e) {
      e.peek = e.offset >= this.end ? 0 : this.charAt(e.offset);
    }
    locationFromCursor(e) {
      return new ne(e.file, e.state.offset, e.state.line, e.state.column);
    }
  },
  Nr = class t4 extends Kt {
    constructor(e, r) {
      e instanceof t4
        ? (super(e), (this.internalState = { ...e.internalState }))
        : (super(e, r), (this.internalState = this.state));
    }
    advance() {
      (this.state = this.internalState),
        super.advance(),
        this.processEscapeSequence();
    }
    init() {
      super.init(), this.processEscapeSequence();
    }
    clone() {
      return new t4(this);
    }
    getChars(e) {
      let r = e.clone(),
        n = '';
      for (; r.internalState.offset < this.internalState.offset; )
        (n += String.fromCodePoint(r.peek())), r.advance();
      return n;
    }
    processEscapeSequence() {
      let e = () => this.internalState.peek;
      if (e() === 92)
        if (
          ((this.internalState = { ...this.state }),
          this.advanceState(this.internalState),
          e() === 110)
        )
          this.state.peek = 10;
        else if (e() === 114) this.state.peek = 13;
        else if (e() === 118) this.state.peek = 11;
        else if (e() === 116) this.state.peek = 9;
        else if (e() === 98) this.state.peek = 8;
        else if (e() === 102) this.state.peek = 12;
        else if (e() === 117)
          if ((this.advanceState(this.internalState), e() === 123)) {
            this.advanceState(this.internalState);
            let r = this.clone(),
              n = 0;
            for (; e() !== 125; ) this.advanceState(this.internalState), n++;
            this.state.peek = this.decodeHexDigits(r, n);
          } else {
            let r = this.clone();
            this.advanceState(this.internalState),
              this.advanceState(this.internalState),
              this.advanceState(this.internalState),
              (this.state.peek = this.decodeHexDigits(r, 4));
          }
        else if (e() === 120) {
          this.advanceState(this.internalState);
          let r = this.clone();
          this.advanceState(this.internalState),
            (this.state.peek = this.decodeHexDigits(r, 2));
        } else if (mr(e())) {
          let r = '',
            n = 0,
            s = this.clone();
          for (; mr(e()) && n < 3; )
            (s = this.clone()),
              (r += String.fromCodePoint(e())),
              this.advanceState(this.internalState),
              n++;
          (this.state.peek = parseInt(r, 8)),
            (this.internalState = s.internalState);
        } else
          fr(this.internalState.peek)
            ? (this.advanceState(this.internalState),
              (this.state = this.internalState))
            : (this.state.peek = this.internalState.peek);
    }
    decodeHexDigits(e, r) {
      let n = this.input.slice(
          e.internalState.offset,
          e.internalState.offset + r
        ),
        s = parseInt(n, 16);
      if (isNaN(s))
        throw (
          ((e.state = e.internalState),
          new ht('Invalid hexadecimal escape sequence', e))
        );
      return s;
    }
  },
  ht = class {
    constructor(e, r) {
      (this.msg = e), (this.cursor = r);
    }
  },
  I = class t5 extends Re {
    static create(e, r, n) {
      return new t5(e, r, n);
    }
    constructor(e, r, n) {
      super(r, n), (this.elementName = e);
    }
  },
  $r = class {
    constructor(e, r) {
      (this.rootNodes = e), (this.errors = r);
    }
  },
  Qt = class {
    constructor(e) {
      this.getTagDefinition = e;
    }
    parse(e, r, n, s = !1, i) {
      let a =
          (D) =>
          (P2, ...B) =>
            D(P2.toLowerCase(), ...B),
        o = s ? this.getTagDefinition : a(this.getTagDefinition),
        u = (D) => o(D).getContentType(),
        p = s ? i : a(i),
        m = Ps(
          e,
          r,
          i
            ? (D, P2, B, c) => {
                let g = p(D, P2, B, c);
                return g !== void 0 ? g : u(D);
              }
            : u,
          n
        ),
        d = (n && n.canSelfClose) || !1,
        C = (n && n.allowHtmComponentClosingTags) || !1,
        _2 = new Or(m.tokens, o, d, C, s);
      return _2.build(), new $r(_2.rootNodes, m.errors.concat(_2.errors));
    }
  },
  Or = class t6 {
    constructor(e, r, n, s, i) {
      (this.tokens = e),
        (this.getTagDefinition = r),
        (this.canSelfClose = n),
        (this.allowHtmComponentClosingTags = s),
        (this.isTagNameCaseSensitive = i),
        (this._index = -1),
        (this._containerStack = []),
        (this.rootNodes = []),
        (this.errors = []),
        this._advance();
    }
    build() {
      for (; this._peek.type !== 30; )
        this._peek.type === 0 || this._peek.type === 4
          ? this._consumeStartTag(this._advance())
          : this._peek.type === 3
          ? (this._closeVoidElement(), this._consumeEndTag(this._advance()))
          : this._peek.type === 12
          ? (this._closeVoidElement(), this._consumeCdata(this._advance()))
          : this._peek.type === 10
          ? (this._closeVoidElement(), this._consumeComment(this._advance()))
          : this._peek.type === 5 ||
            this._peek.type === 7 ||
            this._peek.type === 6
          ? (this._closeVoidElement(), this._consumeText(this._advance()))
          : this._peek.type === 20
          ? this._consumeExpansion(this._advance())
          : this._peek.type === 25
          ? (this._closeVoidElement(), this._consumeBlockOpen(this._advance()))
          : this._peek.type === 27
          ? (this._closeVoidElement(), this._consumeBlockClose(this._advance()))
          : this._peek.type === 29
          ? (this._closeVoidElement(),
            this._consumeIncompleteBlock(this._advance()))
          : this._peek.type === 18
          ? this._consumeDocType(this._advance())
          : this._advance();
      for (let e of this._containerStack)
        e instanceof J &&
          this.errors.push(
            I.create(e.name, e.sourceSpan, `Unclosed block "${e.name}"`)
          );
    }
    _advance() {
      let e = this._peek;
      return (
        this._index < this.tokens.length - 1 && this._index++,
        (this._peek = this.tokens[this._index]),
        e
      );
    }
    _advanceIf(e) {
      return this._peek.type === e ? this._advance() : null;
    }
    _consumeCdata(e) {
      let r = this._advance(),
        n = this._getText(r),
        s = this._advanceIf(13);
      this._addToParent(
        new Mt(n, new f(e.sourceSpan.start, (s || r).sourceSpan.end), [r])
      );
    }
    _consumeComment(e) {
      let r = this._advanceIf(7),
        n = this._advanceIf(11),
        s = r != null ? r.parts[0].trim() : null,
        i = new f(e.sourceSpan.start, (n || r || e).sourceSpan.end);
      this._addToParent(new Ut(s, i));
    }
    _consumeDocType(e) {
      let r = this._advanceIf(7),
        n = this._advanceIf(19),
        s = r != null ? r.parts[0].trim() : null,
        i = new f(e.sourceSpan.start, (n || r || e).sourceSpan.end);
      this._addToParent(new Wt(s, i));
    }
    _consumeExpansion(e) {
      let r = this._advance(),
        n = this._advance(),
        s = [];
      for (; this._peek.type === 21; ) {
        let a = this._parseExpansionCase();
        if (!a) return;
        s.push(a);
      }
      if (this._peek.type !== 24) {
        this.errors.push(
          I.create(
            null,
            this._peek.sourceSpan,
            "Invalid ICU message. Missing '}'."
          )
        );
        return;
      }
      let i = new f(
        e.sourceSpan.start,
        this._peek.sourceSpan.end,
        e.sourceSpan.fullStart
      );
      this._addToParent(new qt(r.parts[0], n.parts[0], s, i, r.sourceSpan)),
        this._advance();
    }
    _parseExpansionCase() {
      let e = this._advance();
      if (this._peek.type !== 22)
        return (
          this.errors.push(
            I.create(
              null,
              this._peek.sourceSpan,
              "Invalid ICU message. Missing '{'."
            )
          ),
          null
        );
      let r = this._advance(),
        n = this._collectExpansionExpTokens(r);
      if (!n) return null;
      let s = this._advance();
      n.push({ type: 30, parts: [], sourceSpan: s.sourceSpan });
      let i = new t6(
        n,
        this.getTagDefinition,
        this.canSelfClose,
        this.allowHtmComponentClosingTags,
        this.isTagNameCaseSensitive
      );
      if ((i.build(), i.errors.length > 0))
        return (this.errors = this.errors.concat(i.errors)), null;
      let a = new f(
          e.sourceSpan.start,
          s.sourceSpan.end,
          e.sourceSpan.fullStart
        ),
        o = new f(r.sourceSpan.start, s.sourceSpan.end, r.sourceSpan.fullStart);
      return new Ht(e.parts[0], i.rootNodes, a, e.sourceSpan, o);
    }
    _collectExpansionExpTokens(e) {
      let r = [],
        n = [22];
      for (;;) {
        if (
          ((this._peek.type === 20 || this._peek.type === 22) &&
            n.push(this._peek.type),
          this._peek.type === 23)
        )
          if (Ns(n, 22)) {
            if ((n.pop(), n.length === 0)) return r;
          } else
            return (
              this.errors.push(
                I.create(
                  null,
                  e.sourceSpan,
                  "Invalid ICU message. Missing '}'."
                )
              ),
              null
            );
        if (this._peek.type === 24)
          if (Ns(n, 20)) n.pop();
          else
            return (
              this.errors.push(
                I.create(
                  null,
                  e.sourceSpan,
                  "Invalid ICU message. Missing '}'."
                )
              ),
              null
            );
        if (this._peek.type === 30)
          return (
            this.errors.push(
              I.create(null, e.sourceSpan, "Invalid ICU message. Missing '}'.")
            ),
            null
          );
        r.push(this._advance());
      }
    }
    _getText(e) {
      let r = e.parts[0];
      if (
        r.length > 0 &&
        r[0] ==
          `
`
      ) {
        let n = this._getClosestParentElement();
        n != null &&
          n.children.length == 0 &&
          this.getTagDefinition(n.name).ignoreFirstLf &&
          (r = r.substring(1));
      }
      return r;
    }
    _consumeText(e) {
      let r = [e],
        n = e.sourceSpan,
        s = e.parts[0];
      if (
        s.length > 0 &&
        s[0] ===
          `
`
      ) {
        let i = this._getContainer();
        i != null &&
          i.children.length === 0 &&
          this.getTagDefinition(i.name).ignoreFirstLf &&
          ((s = s.substring(1)),
          (r[0] = { type: e.type, sourceSpan: e.sourceSpan, parts: [s] }));
      }
      for (
        ;
        this._peek.type === 8 || this._peek.type === 5 || this._peek.type === 9;

      )
        (e = this._advance()),
          r.push(e),
          e.type === 8
            ? (s += e.parts.join('').replace(/&([^;]+);/g, Is))
            : e.type === 9
            ? (s += e.parts[0])
            : (s += e.parts.join(''));
      if (s.length > 0) {
        let i = e.sourceSpan;
        this._addToParent(
          new Ot(s, new f(n.start, i.end, n.fullStart, n.details), r)
        );
      }
    }
    _closeVoidElement() {
      let e = this._getContainer();
      e instanceof z &&
        this.getTagDefinition(e.name).isVoid &&
        this._containerStack.pop();
    }
    _consumeStartTag(e) {
      let [r, n] = e.parts,
        s = [];
      for (; this._peek.type === 14; )
        s.push(this._consumeAttr(this._advance()));
      let i = this._getElementFullName(r, n, this._getClosestParentElement()),
        a = !1;
      if (this._peek.type === 2) {
        this._advance(), (a = !0);
        let C = this.getTagDefinition(i);
        this.canSelfClose ||
          C.canSelfClose ||
          Me(i) !== null ||
          C.isVoid ||
          this.errors.push(
            I.create(
              i,
              e.sourceSpan,
              `Only void, custom and foreign elements can be self closed "${e.parts[1]}"`
            )
          );
      } else this._peek.type === 1 && (this._advance(), (a = !1));
      let o = this._peek.sourceSpan.fullStart,
        u = new f(e.sourceSpan.start, o, e.sourceSpan.fullStart),
        p = new f(e.sourceSpan.start, o, e.sourceSpan.fullStart),
        l = new f(e.sourceSpan.start.moveBy(1), e.sourceSpan.end),
        m = new z(i, s, [], u, p, void 0, l),
        d = this._getContainer();
      this._pushContainer(
        m,
        d instanceof z && this.getTagDefinition(d.name).isClosedByChild(m.name)
      ),
        a
          ? this._popContainer(i, z, u)
          : e.type === 4 &&
            (this._popContainer(i, z, null),
            this.errors.push(
              I.create(i, u, `Opening tag "${i}" not terminated.`)
            ));
    }
    _pushContainer(e, r) {
      r && this._containerStack.pop(),
        this._addToParent(e),
        this._containerStack.push(e);
    }
    _consumeEndTag(e) {
      let r =
        this.allowHtmComponentClosingTags && e.parts.length === 0
          ? null
          : this._getElementFullName(
              e.parts[0],
              e.parts[1],
              this._getClosestParentElement()
            );
      if (r && this.getTagDefinition(r).isVoid)
        this.errors.push(
          I.create(
            r,
            e.sourceSpan,
            `Void elements do not have end tags "${e.parts[1]}"`
          )
        );
      else if (!this._popContainer(r, z, e.sourceSpan)) {
        let n = `Unexpected closing tag "${r}". It may happen when the tag has already been closed by another tag. For more info see https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags`;
        this.errors.push(I.create(r, e.sourceSpan, n));
      }
    }
    _popContainer(e, r, n) {
      let s = !1;
      for (let i = this._containerStack.length - 1; i >= 0; i--) {
        let a = this._containerStack[i];
        if (
          Me(a.name)
            ? a.name === e
            : (e == null || a.name.toLowerCase() === e.toLowerCase()) &&
              a instanceof r
        )
          return (
            (a.endSourceSpan = n),
            (a.sourceSpan.end = n !== null ? n.end : a.sourceSpan.end),
            this._containerStack.splice(i, this._containerStack.length - i),
            !s
          );
        (a instanceof J ||
          (a instanceof z && !this.getTagDefinition(a.name).closedByParent)) &&
          (s = !0);
      }
      return !1;
    }
    _consumeAttr(e) {
      let r = qe(e.parts[0], e.parts[1]),
        n = e.sourceSpan.end,
        s;
      this._peek.type === 15 && (s = this._advance());
      let i = '',
        a = [],
        o,
        u;
      if (this._peek.type === 16)
        for (
          o = this._peek.sourceSpan, u = this._peek.sourceSpan.end;
          this._peek.type === 16 ||
          this._peek.type === 17 ||
          this._peek.type === 9;

        ) {
          let m = this._advance();
          a.push(m),
            m.type === 17
              ? (i += m.parts.join('').replace(/&([^;]+);/g, Is))
              : m.type === 9
              ? (i += m.parts[0])
              : (i += m.parts.join('')),
            (u = n = m.sourceSpan.end);
        }
      this._peek.type === 15 && (u = n = this._advance().sourceSpan.end);
      let l =
        o &&
        u &&
        new f(
          s?.sourceSpan.start ?? o.start,
          u,
          s?.sourceSpan.fullStart ?? o.fullStart
        );
      return new Vt(
        r,
        i,
        new f(e.sourceSpan.start, n, e.sourceSpan.fullStart),
        e.sourceSpan,
        l,
        a.length > 0 ? a : void 0,
        void 0
      );
    }
    _consumeBlockOpen(e) {
      let r = [];
      for (; this._peek.type === 28; ) {
        let o = this._advance();
        r.push(new ot(o.parts[0], o.sourceSpan));
      }
      this._peek.type === 26 && this._advance();
      let n = this._peek.sourceSpan.fullStart,
        s = new f(e.sourceSpan.start, n, e.sourceSpan.fullStart),
        i = new f(e.sourceSpan.start, n, e.sourceSpan.fullStart),
        a = new J(e.parts[0], r, [], s, i);
      this._pushContainer(a, !1);
    }
    _consumeBlockClose(e) {
      this._popContainer(null, J, e.sourceSpan) ||
        this.errors.push(
          I.create(
            null,
            e.sourceSpan,
            'Unexpected closing block. The block may have been closed earlier. If you meant to write the } character, you should use the "&#125;" HTML entity instead.'
          )
        );
    }
    _consumeIncompleteBlock(e) {
      let r = [];
      for (; this._peek.type === 28; ) {
        let o = this._advance();
        r.push(new ot(o.parts[0], o.sourceSpan));
      }
      let n = this._peek.sourceSpan.fullStart,
        s = new f(e.sourceSpan.start, n, e.sourceSpan.fullStart),
        i = new f(e.sourceSpan.start, n, e.sourceSpan.fullStart),
        a = new J(e.parts[0], r, [], s, i);
      this._pushContainer(a, !1),
        this._popContainer(null, J, null),
        this.errors.push(
          I.create(
            e.parts[0],
            s,
            `Incomplete block "${e.parts[0]}". If you meant to write the @ character, you should use the "&#64;" HTML entity instead.`
          )
        );
    }
    _getContainer() {
      return this._containerStack.length > 0
        ? this._containerStack[this._containerStack.length - 1]
        : null;
    }
    _getClosestParentElement() {
      for (let e = this._containerStack.length - 1; e > -1; e--)
        if (this._containerStack[e] instanceof z)
          return this._containerStack[e];
      return null;
    }
    _addToParent(e) {
      let r = this._getContainer();
      r === null ? this.rootNodes.push(e) : r.children.push(e);
    }
    _getElementFullName(e, r, n) {
      if (
        e === '' &&
        ((e = this.getTagDefinition(r).implicitNamespacePrefix || ''),
        e === '' && n != null)
      ) {
        let s = it(n.name)[1];
        this.getTagDefinition(s).preventNamespaceInheritance ||
          (e = Me(n.name));
      }
      return qe(e, r);
    }
  };
function Ns(t8, e) {
  return t8.length > 0 && t8[t8.length - 1] === e;
}
function Is(t8, e) {
  return Ve[e] !== void 0
    ? Ve[e] || t8
    : /^#x[a-f0-9]+$/i.test(e)
    ? String.fromCodePoint(parseInt(e.slice(2), 16))
    : /^#\d+$/.test(e)
    ? String.fromCodePoint(parseInt(e.slice(1), 10))
    : t8;
}
var Xt = class extends Qt {
    constructor() {
      super(He);
    }
    parse(e, r, n, s = !1, i) {
      return super.parse(e, r, n, s, i);
    }
  },
  Mr = null,
  co = () => (Mr || (Mr = new Xt()), Mr);
function qr(t8, e = {}) {
  let {
    canSelfClose: r = !1,
    allowHtmComponentClosingTags: n = !1,
    isTagNameCaseSensitive: s = !1,
    getTagContentType: i,
    tokenizeAngularBlocks: a = !1,
  } = e;
  return co().parse(
    t8,
    'angular-html-parser',
    {
      tokenizeExpansionForms: !1,
      interpolationConfig: void 0,
      canSelfClose: r,
      allowHtmComponentClosingTags: n,
      tokenizeBlocks: a,
    },
    s,
    i
  );
}
var po = new RegExp(
  '^(?<startDelimiter>-{3}|\\+{3})(?<language>[^\\n]*)\\n(?:|(?<value>.*?)\\n)(?<endDelimiter>\\k<startDelimiter>|\\.{3})[^\\S\\n]*(?:\\n|$)',
  's'
);
function ho(t8) {
  let e = t8.match(po);
  if (!e) return { content: t8 };
  let {
      startDelimiter: r,
      language: n,
      value: s = '',
      endDelimiter: i,
    } = e.groups,
    a = n.trim() || 'yaml';
  if ((r === '+++' && (a = 'toml'), a !== 'yaml' && r !== i))
    return { content: t8 };
  let [o] = e;
  return {
    frontMatter: {
      type: 'front-matter',
      lang: a,
      value: s,
      startDelimiter: r,
      endDelimiter: i,
      raw: o.replace(/\n$/, ''),
    },
    content: v(!1, o, /[^\n]/g, ' ') + t8.slice(o.length),
  };
}
var Rs = ho;
function fo(t8, e) {
  let r = new SyntaxError(
    t8 + ' (' + e.loc.start.line + ':' + e.loc.start.column + ')'
  );
  return Object.assign(r, e);
}
var $s = fo,
  Os = new Set([
    'a',
    'abbr',
    'acronym',
    'address',
    'applet',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'basefont',
    'bdi',
    'bdo',
    'bgsound',
    'big',
    'blink',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'center',
    'cite',
    'code',
    'col',
    'colgroup',
    'command',
    'content',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'dir',
    'div',
    'dl',
    'dt',
    'element',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'font',
    'footer',
    'form',
    'frame',
    'frameset',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'image',
    'img',
    'input',
    'ins',
    'isindex',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'listing',
    'main',
    'map',
    'mark',
    'marquee',
    'math',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'multicol',
    'nav',
    'nextid',
    'nobr',
    'noembed',
    'noframes',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'plaintext',
    'pre',
    'progress',
    'q',
    'rb',
    'rbc',
    'rp',
    'rt',
    'rtc',
    'ruby',
    's',
    'samp',
    'script',
    'search',
    'section',
    'select',
    'shadow',
    'slot',
    'small',
    'source',
    'spacer',
    'span',
    'strike',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'svg',
    'table',
    'tbody',
    'td',
    'template',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'tt',
    'u',
    'ul',
    'var',
    'video',
    'wbr',
    'xmp',
  ]),
  Jt = new Map([
    [
      '*',
      new Set([
        'accesskey',
        'autocapitalize',
        'autofocus',
        'class',
        'contenteditable',
        'dir',
        'draggable',
        'enterkeyhint',
        'hidden',
        'id',
        'inert',
        'inputmode',
        'is',
        'itemid',
        'itemprop',
        'itemref',
        'itemscope',
        'itemtype',
        'lang',
        'nonce',
        'popover',
        'slot',
        'spellcheck',
        'style',
        'tabindex',
        'title',
        'translate',
      ]),
    ],
    [
      'a',
      new Set([
        'charset',
        'coords',
        'download',
        'href',
        'hreflang',
        'name',
        'ping',
        'referrerpolicy',
        'rel',
        'rev',
        'shape',
        'target',
        'type',
      ]),
    ],
    [
      'applet',
      new Set([
        'align',
        'alt',
        'archive',
        'code',
        'codebase',
        'height',
        'hspace',
        'name',
        'object',
        'vspace',
        'width',
      ]),
    ],
    [
      'area',
      new Set([
        'alt',
        'coords',
        'download',
        'href',
        'hreflang',
        'nohref',
        'ping',
        'referrerpolicy',
        'rel',
        'shape',
        'target',
        'type',
      ]),
    ],
    [
      'audio',
      new Set([
        'autoplay',
        'controls',
        'crossorigin',
        'loop',
        'muted',
        'preload',
        'src',
      ]),
    ],
    ['base', new Set(['href', 'target'])],
    ['basefont', new Set(['color', 'face', 'size'])],
    ['blockquote', new Set(['cite'])],
    [
      'body',
      new Set(['alink', 'background', 'bgcolor', 'link', 'text', 'vlink']),
    ],
    ['br', new Set(['clear'])],
    [
      'button',
      new Set([
        'disabled',
        'form',
        'formaction',
        'formenctype',
        'formmethod',
        'formnovalidate',
        'formtarget',
        'name',
        'popovertarget',
        'popovertargetaction',
        'type',
        'value',
      ]),
    ],
    ['canvas', new Set(['height', 'width'])],
    ['caption', new Set(['align'])],
    ['col', new Set(['align', 'char', 'charoff', 'span', 'valign', 'width'])],
    [
      'colgroup',
      new Set(['align', 'char', 'charoff', 'span', 'valign', 'width']),
    ],
    ['data', new Set(['value'])],
    ['del', new Set(['cite', 'datetime'])],
    ['details', new Set(['name', 'open'])],
    ['dialog', new Set(['open'])],
    ['dir', new Set(['compact'])],
    ['div', new Set(['align'])],
    ['dl', new Set(['compact'])],
    ['embed', new Set(['height', 'src', 'type', 'width'])],
    ['fieldset', new Set(['disabled', 'form', 'name'])],
    ['font', new Set(['color', 'face', 'size'])],
    [
      'form',
      new Set([
        'accept',
        'accept-charset',
        'action',
        'autocomplete',
        'enctype',
        'method',
        'name',
        'novalidate',
        'target',
      ]),
    ],
    [
      'frame',
      new Set([
        'frameborder',
        'longdesc',
        'marginheight',
        'marginwidth',
        'name',
        'noresize',
        'scrolling',
        'src',
      ]),
    ],
    ['frameset', new Set(['cols', 'rows'])],
    ['h1', new Set(['align'])],
    ['h2', new Set(['align'])],
    ['h3', new Set(['align'])],
    ['h4', new Set(['align'])],
    ['h5', new Set(['align'])],
    ['h6', new Set(['align'])],
    ['head', new Set(['profile'])],
    ['hr', new Set(['align', 'noshade', 'size', 'width'])],
    ['html', new Set(['manifest', 'version'])],
    [
      'iframe',
      new Set([
        'align',
        'allow',
        'allowfullscreen',
        'allowpaymentrequest',
        'allowusermedia',
        'frameborder',
        'height',
        'loading',
        'longdesc',
        'marginheight',
        'marginwidth',
        'name',
        'referrerpolicy',
        'sandbox',
        'scrolling',
        'src',
        'srcdoc',
        'width',
      ]),
    ],
    [
      'img',
      new Set([
        'align',
        'alt',
        'border',
        'crossorigin',
        'decoding',
        'fetchpriority',
        'height',
        'hspace',
        'ismap',
        'loading',
        'longdesc',
        'name',
        'referrerpolicy',
        'sizes',
        'src',
        'srcset',
        'usemap',
        'vspace',
        'width',
      ]),
    ],
    [
      'input',
      new Set([
        'accept',
        'align',
        'alt',
        'autocomplete',
        'checked',
        'dirname',
        'disabled',
        'form',
        'formaction',
        'formenctype',
        'formmethod',
        'formnovalidate',
        'formtarget',
        'height',
        'ismap',
        'list',
        'max',
        'maxlength',
        'min',
        'minlength',
        'multiple',
        'name',
        'pattern',
        'placeholder',
        'popovertarget',
        'popovertargetaction',
        'readonly',
        'required',
        'size',
        'src',
        'step',
        'type',
        'usemap',
        'value',
        'width',
      ]),
    ],
    ['ins', new Set(['cite', 'datetime'])],
    ['isindex', new Set(['prompt'])],
    ['label', new Set(['for', 'form'])],
    ['legend', new Set(['align'])],
    ['li', new Set(['type', 'value'])],
    [
      'link',
      new Set([
        'as',
        'blocking',
        'charset',
        'color',
        'crossorigin',
        'disabled',
        'fetchpriority',
        'href',
        'hreflang',
        'imagesizes',
        'imagesrcset',
        'integrity',
        'media',
        'referrerpolicy',
        'rel',
        'rev',
        'sizes',
        'target',
        'type',
      ]),
    ],
    ['map', new Set(['name'])],
    ['menu', new Set(['compact'])],
    [
      'meta',
      new Set(['charset', 'content', 'http-equiv', 'media', 'name', 'scheme']),
    ],
    ['meter', new Set(['high', 'low', 'max', 'min', 'optimum', 'value'])],
    [
      'object',
      new Set([
        'align',
        'archive',
        'border',
        'classid',
        'codebase',
        'codetype',
        'data',
        'declare',
        'form',
        'height',
        'hspace',
        'name',
        'standby',
        'type',
        'typemustmatch',
        'usemap',
        'vspace',
        'width',
      ]),
    ],
    ['ol', new Set(['compact', 'reversed', 'start', 'type'])],
    ['optgroup', new Set(['disabled', 'label'])],
    ['option', new Set(['disabled', 'label', 'selected', 'value'])],
    ['output', new Set(['for', 'form', 'name'])],
    ['p', new Set(['align'])],
    ['param', new Set(['name', 'type', 'value', 'valuetype'])],
    ['pre', new Set(['width'])],
    ['progress', new Set(['max', 'value'])],
    ['q', new Set(['cite'])],
    [
      'script',
      new Set([
        'async',
        'blocking',
        'charset',
        'crossorigin',
        'defer',
        'fetchpriority',
        'integrity',
        'language',
        'nomodule',
        'referrerpolicy',
        'src',
        'type',
      ]),
    ],
    [
      'select',
      new Set([
        'autocomplete',
        'disabled',
        'form',
        'multiple',
        'name',
        'required',
        'size',
      ]),
    ],
    ['slot', new Set(['name'])],
    [
      'source',
      new Set(['height', 'media', 'sizes', 'src', 'srcset', 'type', 'width']),
    ],
    ['style', new Set(['blocking', 'media', 'type'])],
    [
      'table',
      new Set([
        'align',
        'bgcolor',
        'border',
        'cellpadding',
        'cellspacing',
        'frame',
        'rules',
        'summary',
        'width',
      ]),
    ],
    ['tbody', new Set(['align', 'char', 'charoff', 'valign'])],
    [
      'td',
      new Set([
        'abbr',
        'align',
        'axis',
        'bgcolor',
        'char',
        'charoff',
        'colspan',
        'headers',
        'height',
        'nowrap',
        'rowspan',
        'scope',
        'valign',
        'width',
      ]),
    ],
    ['template', new Set(['shadowrootdelegatesfocus', 'shadowrootmode'])],
    [
      'textarea',
      new Set([
        'autocomplete',
        'cols',
        'dirname',
        'disabled',
        'form',
        'maxlength',
        'minlength',
        'name',
        'placeholder',
        'readonly',
        'required',
        'rows',
        'wrap',
      ]),
    ],
    ['tfoot', new Set(['align', 'char', 'charoff', 'valign'])],
    [
      'th',
      new Set([
        'abbr',
        'align',
        'axis',
        'bgcolor',
        'char',
        'charoff',
        'colspan',
        'headers',
        'height',
        'nowrap',
        'rowspan',
        'scope',
        'valign',
        'width',
      ]),
    ],
    ['thead', new Set(['align', 'char', 'charoff', 'valign'])],
    ['time', new Set(['datetime'])],
    ['tr', new Set(['align', 'bgcolor', 'char', 'charoff', 'valign'])],
    ['track', new Set(['default', 'kind', 'label', 'src', 'srclang'])],
    ['ul', new Set(['compact', 'type'])],
    [
      'video',
      new Set([
        'autoplay',
        'controls',
        'crossorigin',
        'height',
        'loop',
        'muted',
        'playsinline',
        'poster',
        'preload',
        'src',
        'width',
      ]),
    ],
  ]),
  Zt = { attrs: !0, children: !0 },
  Ms = new Set(['parent']),
  er = class t7 {
    constructor(e = {}) {
      for (let r of new Set([...Ms, ...Object.keys(e)]))
        this.setProperty(r, e[r]);
    }
    setProperty(e, r) {
      if (this[e] !== r) {
        if ((e in Zt && (r = r.map((n) => this.createChild(n))), !Ms.has(e))) {
          this[e] = r;
          return;
        }
        Object.defineProperty(this, e, {
          value: r,
          enumerable: !1,
          configurable: !0,
        });
      }
    }
    map(e) {
      let r;
      for (let n in Zt) {
        let s = this[n];
        if (s) {
          let i = mo(s, (a) => a.map(e));
          r !== s &&
            (r || (r = new t7({ parent: this.parent })), r.setProperty(n, i));
        }
      }
      if (r) for (let n in this) n in Zt || (r[n] = this[n]);
      return e(r || this);
    }
    walk(e) {
      for (let r in Zt) {
        let n = this[r];
        if (n) for (let s = 0; s < n.length; s++) n[s].walk(e);
      }
      e(this);
    }
    createChild(e) {
      let r = e instanceof t7 ? e.clone() : new t7(e);
      return r.setProperty('parent', this), r;
    }
    insertChildBefore(e, r) {
      this.children.splice(this.children.indexOf(e), 0, this.createChild(r));
    }
    removeChild(e) {
      this.children.splice(this.children.indexOf(e), 1);
    }
    replaceChild(e, r) {
      this.children[this.children.indexOf(e)] = this.createChild(r);
    }
    clone() {
      return new t7(this);
    }
    get firstChild() {
      var e;
      return (e = this.children) == null ? void 0 : e[0];
    }
    get lastChild() {
      var e;
      return (e = this.children) == null ? void 0 : e[this.children.length - 1];
    }
    get prev() {
      var e;
      return (e = this.parent) == null
        ? void 0
        : e.children[this.parent.children.indexOf(this) - 1];
    }
    get next() {
      var e;
      return (e = this.parent) == null
        ? void 0
        : e.children[this.parent.children.indexOf(this) + 1];
    }
    get rawName() {
      return this.hasExplicitNamespace ? this.fullName : this.name;
    }
    get fullName() {
      return this.namespace ? this.namespace + ':' + this.name : this.name;
    }
    get attrMap() {
      return Object.fromEntries(this.attrs.map((e) => [e.fullName, e.value]));
    }
  };
function mo(t8, e) {
  let r = t8.map(e);
  return r.some((n, s) => n !== t8[s]) ? r : t8;
}
var go = [
  { regex: /^(\[if([^\]]*)]>)(.*?)<!\s*\[endif]$/s, parse: Co },
  { regex: /^\[if([^\]]*)]><!$/, parse: So },
  { regex: /^<!\s*\[endif]$/, parse: _o },
];
function qs(t8, e) {
  if (t8.value)
    for (let { regex: r, parse: n } of go) {
      let s = t8.value.match(r);
      if (s) return n(t8, e, s);
    }
  return null;
}
function Co(t8, e, r) {
  let [, n, s, i] = r,
    a = 4 + n.length,
    o = t8.sourceSpan.start.moveBy(a),
    u = o.moveBy(i.length),
    [p, l] = (() => {
      try {
        return [!0, e(i, o).children];
      } catch {
        return [!1, [{ type: 'text', value: i, sourceSpan: new f(o, u) }]];
      }
    })();
  return {
    type: 'ieConditionalComment',
    complete: p,
    children: l,
    condition: v(!1, s.trim(), /\s+/g, ' '),
    sourceSpan: t8.sourceSpan,
    startSourceSpan: new f(t8.sourceSpan.start, o),
    endSourceSpan: new f(u, t8.sourceSpan.end),
  };
}
function So(t8, e, r) {
  let [, n] = r;
  return {
    type: 'ieConditionalStartComment',
    condition: v(!1, n.trim(), /\s+/g, ' '),
    sourceSpan: t8.sourceSpan,
  };
}
function _o(t8) {
  return { type: 'ieConditionalEndComment', sourceSpan: t8.sourceSpan };
}
function Eo(t8) {
  if (t8.type === 'block') {
    if (
      ((t8.name = v(!1, t8.name.toLowerCase(), /\s+/g, ' ').trim()),
      (t8.type = 'angularControlFlowBlock'),
      !xt(t8.parameters))
    ) {
      delete t8.parameters;
      return;
    }
    for (let e of t8.parameters) e.type = 'angularControlFlowBlockParameter';
    t8.parameters = {
      type: 'angularControlFlowBlockParameters',
      children: t8.parameters,
      sourceSpan: new f(
        t8.parameters[0].sourceSpan.start,
        me(!1, t8.parameters, -1).sourceSpan.end
      ),
    };
  }
}
function Vs(t8, e, r) {
  let {
      name: n,
      canSelfClose: s = !0,
      normalizeTagName: i = !1,
      normalizeAttributeName: a = !1,
      allowHtmComponentClosingTags: o = !1,
      isTagNameCaseSensitive: u = !1,
      shouldParseAsRawText: p,
    } = e,
    { rootNodes: l, errors: m } = qr(t8, {
      canSelfClose: s,
      allowHtmComponentClosingTags: o,
      isTagNameCaseSensitive: u,
      getTagContentType: p ? (...c) => (p(...c) ? F.RAW_TEXT : void 0) : void 0,
      tokenizeAngularBlocks: n === 'angular' ? !0 : void 0,
    });
  if (n === 'vue') {
    if (
      l.some(
        (w2) =>
          (w2.type === 'docType' && w2.value === 'html') ||
          (w2.type === 'element' && w2.name.toLowerCase() === 'html')
      )
    )
      return Vs(t8, Ws, r);
    let g,
      y2 = () =>
        g ??
        (g = qr(t8, {
          canSelfClose: s,
          allowHtmComponentClosingTags: o,
          isTagNameCaseSensitive: u,
        })),
      $ = (w2) =>
        y2().rootNodes.find(
          ({ startSourceSpan: q2 }) =>
            q2 && q2.start.offset === w2.startSourceSpan.start.offset
        ) ?? w2;
    for (let [w2, q2] of l.entries()) {
      let { endSourceSpan: Wr2, startSourceSpan: js } = q2;
      if (Wr2 === null) (m = y2().errors), (l[w2] = $(q2));
      else if (Ao(q2, r)) {
        let zr2 = y2().errors.find(
          (Gr2) =>
            Gr2.span.start.offset > js.start.offset &&
            Gr2.span.start.offset < Wr2.end.offset
        );
        zr2 && Hs(zr2), (l[w2] = $(q2));
      }
    }
  }
  m.length > 0 && Hs(m[0]);
  let d = (c) => {
      let g = c.name.startsWith(':') ? c.name.slice(1).split(':')[0] : null,
        y2 = c.nameSpan.toString(),
        $ = g !== null && y2.startsWith(`${g}:`),
        w2 = $ ? y2.slice(g.length + 1) : y2;
      (c.name = w2), (c.namespace = g), (c.hasExplicitNamespace = $);
    },
    C = (c) => {
      switch (c.type) {
        case 'element':
          d(c);
          for (let g of c.attrs)
            d(g),
              g.valueSpan
                ? ((g.value = g.valueSpan.toString()),
                  /["']/.test(g.value[0]) && (g.value = g.value.slice(1, -1)))
                : (g.value = null);
          break;
        case 'comment':
          c.value = c.sourceSpan.toString().slice(4, -3);
          break;
        case 'text':
          c.value = c.sourceSpan.toString();
          break;
      }
    },
    _2 = (c, g) => {
      let y2 = c.toLowerCase();
      return g(y2) ? y2 : c;
    },
    D = (c) => {
      if (
        c.type === 'element' &&
        (i &&
          (!c.namespace ||
            c.namespace === c.tagDefinition.implicitNamespacePrefix ||
            de(c)) &&
          (c.name = _2(c.name, (g) => Os.has(g))),
        a)
      )
        for (let g of c.attrs)
          g.namespace ||
            (g.name = _2(
              g.name,
              (y2) =>
                Jt.has(c.name) &&
                (Jt.get('*').has(y2) || Jt.get(c.name).has(y2))
            ));
    },
    P2 = (c) => {
      c.sourceSpan &&
        c.endSourceSpan &&
        (c.sourceSpan = new f(c.sourceSpan.start, c.endSourceSpan.end));
    },
    B = (c) => {
      if (c.type === 'element') {
        let g = He(u ? c.name : c.name.toLowerCase());
        !c.namespace || c.namespace === g.implicitNamespacePrefix || de(c)
          ? (c.tagDefinition = g)
          : (c.tagDefinition = He(''));
      }
    };
  return (
    zt(
      new (class extends ut {
        visit(c) {
          C(c), B(c), D(c), P2(c);
        }
      })(),
      l
    ),
    l
  );
}
function Ao(t8, e) {
  var n;
  if (t8.type !== 'element' || t8.name !== 'template') return !1;
  let r =
    (n = t8.attrs.find((s) => s.name === 'lang')) == null ? void 0 : n.value;
  return !r || Ne(e, { language: r }) === 'html';
}
function Hs(t8) {
  let {
    msg: e,
    span: { start: r, end: n },
  } = t8;
  throw $s(e, {
    loc: {
      start: { line: r.line + 1, column: r.col + 1 },
      end: { line: n.line + 1, column: n.col + 1 },
    },
    cause: t8,
  });
}
function Us(t8, e, r = {}, n = !0) {
  let { frontMatter: s, content: i } = n
      ? Rs(t8)
      : { frontMatter: null, content: t8 },
    a = new Se(t8, r.filepath),
    o = new ne(a, 0, 0, 0),
    u = o.moveBy(t8.length),
    p = { type: 'root', sourceSpan: new f(o, u), children: Vs(i, e, r) };
  if (s) {
    let d = new ne(a, 0, 0, 0),
      C = d.moveBy(s.raw.length);
    (s.sourceSpan = new f(d, C)), p.children.unshift(s);
  }
  let l = new er(p),
    m = (d, C) => {
      let { offset: _2 } = C,
        D = v(!1, t8.slice(0, _2), /[^\n\r]/g, ' '),
        B = Us(D + d, e, r, !1);
      B.sourceSpan = new f(C, me(!1, B.children, -1).sourceSpan.end);
      let c = B.children[0];
      return (
        c.length === _2
          ? B.children.shift()
          : ((c.sourceSpan = new f(
              c.sourceSpan.start.moveBy(_2),
              c.sourceSpan.end
            )),
            (c.value = c.value.slice(_2))),
        B
      );
    };
  return (
    l.walk((d) => {
      if (d.type === 'comment') {
        let C = qs(d, m);
        C && d.parent.replaceChild(d, C);
      }
      Eo(d);
    }),
    l
  );
}
function tr(t8) {
  return {
    parse: (e, r) => Us(e, t8, r),
    hasPragma: Rn,
    astFormat: 'html',
    locStart: se,
    locEnd: ie,
  };
}
var Ws = {
    name: 'html',
    normalizeTagName: !0,
    normalizeAttributeName: !0,
    allowHtmComponentClosingTags: !0,
  },
  Do = tr(Ws),
  vo = tr({ name: 'angular' }),
  yo = tr({
    name: 'vue',
    isTagNameCaseSensitive: !0,
    shouldParseAsRawText(t8, e, r, n) {
      return (
        t8.toLowerCase() !== 'html' &&
        !r &&
        (t8 !== 'template' ||
          n.some(
            ({ name: s, value: i }) =>
              s === 'lang' && i !== 'html' && i !== '' && i !== void 0
          ))
      );
    },
  }),
  wo = tr({ name: 'lwc', canSelfClose: !1 }),
  zs = [
    {
      linguistLanguageId: 146,
      name: 'Angular',
      type: 'markup',
      tmScope: 'text.html.basic',
      aceMode: 'html',
      codemirrorMode: 'htmlmixed',
      codemirrorMimeType: 'text/html',
      color: '#e34c26',
      aliases: ['xhtml'],
      extensions: ['.component.html'],
      parsers: ['angular'],
      vscodeLanguageIds: ['html'],
      filenames: [],
    },
    {
      linguistLanguageId: 146,
      name: 'HTML',
      type: 'markup',
      tmScope: 'text.html.basic',
      aceMode: 'html',
      codemirrorMode: 'htmlmixed',
      codemirrorMimeType: 'text/html',
      color: '#e34c26',
      aliases: ['xhtml'],
      extensions: [
        '.html',
        '.hta',
        '.htm',
        '.html.hl',
        '.inc',
        '.xht',
        '.xhtml',
        '.mjml',
      ],
      parsers: ['html'],
      vscodeLanguageIds: ['html'],
    },
    {
      linguistLanguageId: 146,
      name: 'Lightning Web Components',
      type: 'markup',
      tmScope: 'text.html.basic',
      aceMode: 'html',
      codemirrorMode: 'htmlmixed',
      codemirrorMimeType: 'text/html',
      color: '#e34c26',
      aliases: ['xhtml'],
      extensions: [],
      parsers: ['lwc'],
      vscodeLanguageIds: ['html'],
      filenames: [],
    },
    {
      linguistLanguageId: 391,
      name: 'Vue',
      type: 'markup',
      color: '#41b883',
      extensions: ['.vue'],
      tmScope: 'text.html.vue',
      aceMode: 'html',
      parsers: ['vue'],
      vscodeLanguageIds: ['vue'],
    },
  ],
  Vr = {
    bracketSpacing: {
      category: 'Common',
      type: 'boolean',
      default: !0,
      description: 'Print spaces between brackets.',
      oppositeDescription: 'Do not print spaces between brackets.',
    },
    singleQuote: {
      category: 'Common',
      type: 'boolean',
      default: !1,
      description: 'Use single quotes instead of double quotes.',
    },
    proseWrap: {
      category: 'Common',
      type: 'choice',
      default: 'preserve',
      description: 'How to wrap prose.',
      choices: [
        {
          value: 'always',
          description: 'Wrap prose if it exceeds the print width.',
        },
        { value: 'never', description: 'Do not wrap prose.' },
        { value: 'preserve', description: 'Wrap prose as-is.' },
      ],
    },
    bracketSameLine: {
      category: 'Common',
      type: 'boolean',
      default: !1,
      description:
        'Put > of opening tags on the last line instead of on a new line.',
    },
    singleAttributePerLine: {
      category: 'Common',
      type: 'boolean',
      default: !1,
      description: 'Enforce single attribute per line in HTML, Vue and JSX.',
    },
  },
  Gs = 'HTML',
  bo = {
    bracketSameLine: Vr.bracketSameLine,
    htmlWhitespaceSensitivity: {
      category: Gs,
      type: 'choice',
      default: 'css',
      description: 'How to handle whitespaces in HTML.',
      choices: [
        {
          value: 'css',
          description: 'Respect the default value of CSS display property.',
        },
        {
          value: 'strict',
          description: 'Whitespaces are considered sensitive.',
        },
        {
          value: 'ignore',
          description: 'Whitespaces are considered insensitive.',
        },
      ],
    },
    singleAttributePerLine: Vr.singleAttributePerLine,
    vueIndentScriptAndStyle: {
      category: Gs,
      type: 'boolean',
      default: !1,
      description: 'Indent script and style tags in Vue files.',
    },
  },
  Ys = bo,
  To = { html: fs },
  dh = Ur,
  lu = Object.create,
  $e2 = Object.defineProperty,
  fu = Object.getOwnPropertyDescriptor,
  Fu = Object.getOwnPropertyNames,
  pu = Object.getPrototypeOf,
  du = Object.prototype.hasOwnProperty,
  mu = (e, t8) => () => (e && (t8 = e((e = 0))), t8),
  Me2 = (e, t8) => () => (
    t8 || e((t8 = { exports: {} }).exports, t8), t8.exports
  ),
  We = (e, t8) => {
    for (var r in t8) $e2(e, r, { get: t8[r], enumerable: !0 });
  },
  nr2 = (e, t8, r, n) => {
    if ((t8 && typeof t8 == 'object') || typeof t8 == 'function')
      for (let o of Fu(t8))
        !du.call(e, o) &&
          o !== r &&
          $e2(e, o, {
            get: () => t8[o],
            enumerable: !(n = fu(t8, o)) || n.enumerable,
          });
    return e;
  },
  he2 = (e, t8, r) => (
    (r = e != null ? lu(pu(e)) : {}),
    nr2(
      t8 || !e || !e.__esModule
        ? $e2(r, 'default', { value: e, enumerable: !0 })
        : r,
      e
    )
  ),
  Eu = (e) => nr2($e2({}, '__esModule', { value: !0 }), e),
  Cu = (e, t8, r) => {
    if (!t8.has(e)) throw TypeError('Cannot ' + r);
  },
  ht2 = (e, t8, r) => {
    if (t8.has(e))
      throw TypeError('Cannot add the same private member more than once');
    t8 instanceof WeakSet ? t8.add(e) : t8.set(e, r);
  },
  ce2 = (e, t8, r) => (Cu(e, t8, 'access private method'), r),
  or2 = Me2((gt2) => {
    Object.defineProperty(gt2, '__esModule', { value: !0 }),
      (gt2.default = ur2);
    function ur2() {}
    ur2.prototype = {
      diff: function (t8, r) {
        var n =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
          o = n.callback;
        typeof n == 'function' && ((o = n), (n = {})), (this.options = n);
        var u = this;
        function i(F2) {
          return o
            ? (setTimeout(function () {
                o(void 0, F2);
              }, 0),
              !0)
            : F2;
        }
        (t8 = this.castInput(t8)),
          (r = this.castInput(r)),
          (t8 = this.removeEmpty(this.tokenize(t8))),
          (r = this.removeEmpty(this.tokenize(r)));
        var s = r.length,
          D = t8.length,
          a = 1,
          c = s + D;
        n.maxEditLength && (c = Math.min(c, n.maxEditLength));
        var d = [{ newPos: -1, components: [] }],
          f2 = this.extractCommon(d[0], r, t8, 0);
        if (d[0].newPos + 1 >= s && f2 + 1 >= D)
          return i([{ value: this.join(r), count: r.length }]);
        function p() {
          for (var F2 = -1 * a; F2 <= a; F2 += 2) {
            var m = void 0,
              E2 = d[F2 - 1],
              C = d[F2 + 1],
              g = (C ? C.newPos : 0) - F2;
            E2 && (d[F2 - 1] = void 0);
            var h2 = E2 && E2.newPos + 1 < s,
              B = C && 0 <= g && g < D;
            if (!h2 && !B) {
              d[F2] = void 0;
              continue;
            }
            if (
              (!h2 || (B && E2.newPos < C.newPos)
                ? ((m = yu(C)), u.pushComponent(m.components, void 0, !0))
                : ((m = E2),
                  m.newPos++,
                  u.pushComponent(m.components, !0, void 0)),
              (g = u.extractCommon(m, r, t8, F2)),
              m.newPos + 1 >= s && g + 1 >= D)
            )
              return i(gu(u, m.components, r, t8, u.useLongestToken));
            d[F2] = m;
          }
          a++;
        }
        if (o)
          (function F2() {
            setTimeout(function () {
              if (a > c) return o();
              p() || F2();
            }, 0);
          })();
        else
          for (; a <= c; ) {
            var l = p();
            if (l) return l;
          }
      },
      pushComponent: function (t8, r, n) {
        var o = t8[t8.length - 1];
        o && o.added === r && o.removed === n
          ? (t8[t8.length - 1] = { count: o.count + 1, added: r, removed: n })
          : t8.push({ count: 1, added: r, removed: n });
      },
      extractCommon: function (t8, r, n, o) {
        for (
          var u = r.length, i = n.length, s = t8.newPos, D = s - o, a = 0;
          s + 1 < u && D + 1 < i && this.equals(r[s + 1], n[D + 1]);

        )
          s++, D++, a++;
        return a && t8.components.push({ count: a }), (t8.newPos = s), D;
      },
      equals: function (t8, r) {
        return this.options.comparator
          ? this.options.comparator(t8, r)
          : t8 === r ||
              (this.options.ignoreCase && t8.toLowerCase() === r.toLowerCase());
      },
      removeEmpty: function (t8) {
        for (var r = [], n = 0; n < t8.length; n++) t8[n] && r.push(t8[n]);
        return r;
      },
      castInput: function (t8) {
        return t8;
      },
      tokenize: function (t8) {
        return t8.split('');
      },
      join: function (t8) {
        return t8.join('');
      },
    };
    function gu(e, t8, r, n, o) {
      for (var u = 0, i = t8.length, s = 0, D = 0; u < i; u++) {
        var a = t8[u];
        if (a.removed) {
          if (
            ((a.value = e.join(n.slice(D, D + a.count))),
            (D += a.count),
            u && t8[u - 1].added)
          ) {
            var d = t8[u - 1];
            (t8[u - 1] = t8[u]), (t8[u] = d);
          }
        } else {
          if (!a.added && o) {
            var c = r.slice(s, s + a.count);
            (c = c.map(function (p, l) {
              var F2 = n[D + l];
              return F2.length > p.length ? F2 : p;
            })),
              (a.value = e.join(c));
          } else a.value = e.join(r.slice(s, s + a.count));
          (s += a.count), a.added || (D += a.count);
        }
      }
      var f2 = t8[i - 1];
      return (
        i > 1 &&
          typeof f2.value == 'string' &&
          (f2.added || f2.removed) &&
          e.equals('', f2.value) &&
          ((t8[i - 2].value += f2.value), t8.pop()),
        t8
      );
    }
    function yu(e) {
      return { newPos: e.newPos, components: e.components.slice(0) };
    }
  }),
  ir2 = Me2((ye) => {
    Object.defineProperty(ye, '__esModule', { value: !0 }),
      (ye.diffArrays = _u),
      (ye.arrayDiff = void 0);
    var Au = Bu(or2());
    function Bu(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var ge2 = new Au.default();
    (ye.arrayDiff = ge2),
      (ge2.tokenize = function (e) {
        return e.slice();
      }),
      (ge2.join = ge2.removeEmpty =
        function (e) {
          return e;
        });
    function _u(e, t8, r) {
      return ge2.diff(e, t8, r);
    }
  }),
  Pe2 = Me2((ps2, jr2) => {
    var Yr2 = new Proxy(String, { get: () => Yr2 });
    jr2.exports = Yr2;
  }),
  Fn2 = {};
We(Fn2, { default: () => uo2, shouldHighlight: () => no2 });
var no2,
  uo2,
  pn2 = mu(() => {
    (no2 = () => !1), (uo2 = String);
  }),
  yn2 = Me2((Ft2) => {
    Object.defineProperty(Ft2, '__esModule', { value: !0 }),
      (Ft2.codeFrameColumns = gn2),
      (Ft2.default = ao2);
    var dn2 = (pn2(), Eu(Fn2)),
      mn2 = oo2(Pe2(), !0);
    function hn2(e) {
      if (typeof WeakMap != 'function') return null;
      var t8 = new WeakMap(),
        r = new WeakMap();
      return (hn2 = function (n) {
        return n ? r : t8;
      })(e);
    }
    function oo2(e, t8) {
      if (!t8 && e && e.__esModule) return e;
      if (e === null || (typeof e != 'object' && typeof e != 'function'))
        return { default: e };
      var r = hn2(t8);
      if (r && r.has(e)) return r.get(e);
      var n = { __proto__: null },
        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var u in e)
        if (u !== 'default' && Object.prototype.hasOwnProperty.call(e, u)) {
          var i = o ? Object.getOwnPropertyDescriptor(e, u) : null;
          i && (i.get || i.set)
            ? Object.defineProperty(n, u, i)
            : (n[u] = e[u]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    var jt2;
    function io2(e) {
      return e
        ? (jt2 != null ||
            (jt2 = new mn2.default.constructor({ enabled: !0, level: 1 })),
          jt2)
        : mn2.default;
    }
    var En2 = !1;
    function so2(e) {
      return { gutter: e.grey, marker: e.red.bold, message: e.red.bold };
    }
    var Cn2 = /\r\n|[\n\r\u2028\u2029]/;
    function Do2(e, t8, r) {
      let n = Object.assign({ column: 0, line: -1 }, e.start),
        o = Object.assign({}, n, e.end),
        { linesAbove: u = 2, linesBelow: i = 3 } = r || {},
        s = n.line,
        D = n.column,
        a = o.line,
        c = o.column,
        d = Math.max(s - (u + 1), 0),
        f2 = Math.min(t8.length, a + i);
      s === -1 && (d = 0), a === -1 && (f2 = t8.length);
      let p = a - s,
        l = {};
      if (p)
        for (let F2 = 0; F2 <= p; F2++) {
          let m = F2 + s;
          if (!D) l[m] = !0;
          else if (F2 === 0) {
            let E2 = t8[m - 1].length;
            l[m] = [D, E2 - D + 1];
          } else if (F2 === p) l[m] = [0, c];
          else {
            let E2 = t8[m - F2].length;
            l[m] = [0, E2];
          }
        }
      else D === c ? (D ? (l[s] = [D, 0]) : (l[s] = !0)) : (l[s] = [D, c - D]);
      return { start: d, end: f2, markerLines: l };
    }
    function gn2(e, t8, r = {}) {
      let n = (r.highlightCode || r.forceColor) && (0, dn2.shouldHighlight)(r),
        o = io2(r.forceColor),
        u = so2(o),
        i = (F2, m) => (n ? F2(m) : m),
        s = e.split(Cn2),
        { start: D, end: a, markerLines: c } = Do2(t8, s, r),
        d = t8.start && typeof t8.start.column == 'number',
        f2 = String(a).length,
        l = (n ? (0, dn2.default)(e, r) : e)
          .split(Cn2, a)
          .slice(D, a)
          .map((F2, m) => {
            let E2 = D + 1 + m,
              g = ` ${` ${E2}`.slice(-f2)} |`,
              h2 = c[E2],
              B = !c[E2 + 1];
            if (h2) {
              let Z = '';
              if (Array.isArray(h2)) {
                let $ = F2.slice(0, Math.max(h2[0] - 1, 0)).replace(
                    /[^\t]/g,
                    ' '
                  ),
                  Q2 = h2[1] || 1;
                (Z = [
                  `
 `,
                  i(u.gutter, g.replace(/\d/g, ' ')),
                  ' ',
                  $,
                  i(u.marker, '^').repeat(Q2),
                ].join('')),
                  B && r.message && (Z += ' ' + i(u.message, r.message));
              }
              return [
                i(u.marker, '>'),
                i(u.gutter, g),
                F2.length > 0 ? ` ${F2}` : '',
                Z,
              ].join('');
            } else return ` ${i(u.gutter, g)}${F2.length > 0 ? ` ${F2}` : ''}`;
          }).join(`
`);
      return (
        r.message &&
          !d &&
          (l = `${' '.repeat(f2 + 1)}${r.message}
${l}`),
        n ? o.reset(l) : l
      );
    }
    function ao2(e, t8, r, n = {}) {
      if (!En2) {
        En2 = !0;
        let u =
          'Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.';
        {
          let i = new Error(u);
          (i.name = 'DeprecationWarning'), console.warn(new Error(u));
        }
      }
      return (
        (r = Math.max(r, 0)), gn2(e, { start: { column: r, line: t8 } }, n)
      );
    }
  }),
  tr2 = {};
We(tr2, {
  __debug: () => ri2,
  check: () => ei2,
  doc: () => er2,
  format: () => cu,
  formatWithCursor: () => au,
  getSupportInfo: () => ti2,
  util: () => Qt2,
  version: () => Du,
});
var hu = (e, t8, r, n) => {
    if (!(e && t8 == null))
      return t8.replaceAll
        ? t8.replaceAll(r, n)
        : r.global
        ? t8.replace(r, n)
        : t8.split(r).join(n);
  },
  ee2 = hu,
  Kn2 = he2(ir2(), 1),
  M = 'string',
  j2 = 'array',
  W2 = 'cursor',
  T2 = 'indent',
  S2 = 'align',
  v2 = 'trim',
  _ = 'group',
  k2 = 'fill',
  x2 = 'if-break',
  P = 'indent-if-break',
  L2 = 'line-suffix',
  I2 = 'line-suffix-boundary',
  A2 = 'line',
  O2 = 'label',
  b2 = 'break-parent',
  Ue2 = new Set([W2, T2, S2, v2, _, k2, x2, P, L2, I2, A2, O2, b2]);
function xu(e) {
  if (typeof e == 'string') return M;
  if (Array.isArray(e)) return j2;
  if (!e) return;
  let { type: t8 } = e;
  if (Ue2.has(t8)) return t8;
}
var U2 = xu,
  ku = (e) => new Intl.ListFormat('en-US', { type: 'disjunction' }).format(e);
function bu(e) {
  let t8 = e === null ? 'null' : typeof e;
  if (t8 !== 'string' && t8 !== 'object')
    return `Unexpected doc '${t8}', 
Expected it to be 'string' or 'object'.`;
  if (U2(e)) throw new Error('doc is valid.');
  let r = Object.prototype.toString.call(e);
  if (r !== '[object Object]') return `Unexpected doc '${r}'.`;
  let n = ku([...Ue2].map((o) => `'${o}'`));
  return `Unexpected doc.type '${e.type}'.
Expected it to be ${n}.`;
}
var yt2 = class extends Error {
    name = 'InvalidDocError';
    constructor(t8) {
      super(bu(t8)), (this.doc = t8);
    }
  },
  q = yt2,
  sr2 = {};
function wu(e, t8, r, n) {
  let o = [e];
  for (; o.length > 0; ) {
    let u = o.pop();
    if (u === sr2) {
      r(o.pop());
      continue;
    }
    r && o.push(u, sr2);
    let i = U2(u);
    if (!i) throw new q(u);
    if (t8?.(u) !== !1)
      switch (i) {
        case j2:
        case k2: {
          let s = i === j2 ? u : u.parts;
          for (let D = s.length, a = D - 1; a >= 0; --a) o.push(s[a]);
          break;
        }
        case x2:
          o.push(u.flatContents, u.breakContents);
          break;
        case _:
          if (n && u.expandedStates)
            for (let s = u.expandedStates.length, D = s - 1; D >= 0; --D)
              o.push(u.expandedStates[D]);
          else o.push(u.contents);
          break;
        case S2:
        case T2:
        case P:
        case O2:
        case L2:
          o.push(u.contents);
          break;
        case M:
        case W2:
        case v2:
        case I2:
        case A2:
        case b2:
          break;
        default:
          throw new q(u);
      }
  }
}
var Ae2 = wu,
  Dr2 = () => {},
  ze = Dr2;
function ie2(e) {
  return { type: T2, contents: e };
}
function oe2(e, t8) {
  return { type: S2, contents: t8, n: e };
}
function At2(e, t8 = {}) {
  return (
    ze(t8.expandedStates),
    {
      type: _,
      id: t8.id,
      contents: e,
      break: !!t8.shouldBreak,
      expandedStates: t8.expandedStates,
    }
  );
}
function ar2(e) {
  return oe2(Number.NEGATIVE_INFINITY, e);
}
function cr2(e) {
  return oe2({ type: 'root' }, e);
}
function lr2(e) {
  return oe2(-1, e);
}
function fr2(e, t8) {
  return At2(e[0], { ...t8, expandedStates: e });
}
function Ge2(e) {
  return { type: k2, parts: e };
}
function Fr2(e, t8 = '', r = {}) {
  return { type: x2, breakContents: e, flatContents: t8, groupId: r.groupId };
}
function pr2(e, t8) {
  return { type: P, contents: e, groupId: t8.groupId, negate: t8.negate };
}
function Be2(e) {
  return { type: L2, contents: e };
}
var dr2 = { type: I2 },
  le2 = { type: b2 },
  mr2 = { type: v2 },
  _e2 = { type: A2, hard: !0 },
  Bt2 = { type: A2, hard: !0, literal: !0 },
  Ke2 = { type: A2 },
  Er2 = { type: A2, soft: !0 },
  G2 = [_e2, le2],
  He2 = [Bt2, le2],
  xe2 = { type: W2 };
function ke2(e, t8) {
  let r = [];
  for (let n = 0; n < t8.length; n++) n !== 0 && r.push(e), r.push(t8[n]);
  return r;
}
function qe2(e, t8, r) {
  let n = e;
  if (t8 > 0) {
    for (let o = 0; o < Math.floor(t8 / r); ++o) n = ie2(n);
    (n = oe2(t8 % r, n)), (n = oe2(Number.NEGATIVE_INFINITY, n));
  }
  return n;
}
function Cr2(e, t8) {
  return e ? { type: O2, label: e, contents: t8 } : t8;
}
var Ou = (e, t8, r) => {
    if (!(e && t8 == null))
      return Array.isArray(t8) || typeof t8 == 'string'
        ? t8[r < 0 ? t8.length + r : r]
        : t8.at(r);
  },
  y = Ou;
function hr2(e) {
  let t8 = e.indexOf('\r');
  return t8 >= 0
    ? e.charAt(t8 + 1) ===
      `
`
      ? 'crlf'
      : 'cr'
    : 'lf';
}
function be2(e) {
  switch (e) {
    case 'cr':
      return '\r';
    case 'crlf':
      return `\r
`;
    default:
      return `
`;
  }
}
function _t2(e, t8) {
  let r;
  switch (t8) {
    case `
`:
      r = /\n/g;
      break;
    case '\r':
      r = /\r/g;
      break;
    case `\r
`:
      r = /\r\n/g;
      break;
    default:
      throw new Error(`Unexpected "eol" ${JSON.stringify(t8)}.`);
  }
  let n = e.match(r);
  return n ? n.length : 0;
}
function gr2(e) {
  return ee2(
    !1,
    e,
    /\r\n?/g,
    `
`
  );
}
var yr2 = () =>
  /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
function Ar2(e) {
  return (
    e === 12288 || (e >= 65281 && e <= 65376) || (e >= 65504 && e <= 65510)
  );
}
function Br(e) {
  return (
    (e >= 4352 && e <= 4447) ||
    e === 8986 ||
    e === 8987 ||
    e === 9001 ||
    e === 9002 ||
    (e >= 9193 && e <= 9196) ||
    e === 9200 ||
    e === 9203 ||
    e === 9725 ||
    e === 9726 ||
    e === 9748 ||
    e === 9749 ||
    (e >= 9800 && e <= 9811) ||
    e === 9855 ||
    e === 9875 ||
    e === 9889 ||
    e === 9898 ||
    e === 9899 ||
    e === 9917 ||
    e === 9918 ||
    e === 9924 ||
    e === 9925 ||
    e === 9934 ||
    e === 9940 ||
    e === 9962 ||
    e === 9970 ||
    e === 9971 ||
    e === 9973 ||
    e === 9978 ||
    e === 9981 ||
    e === 9989 ||
    e === 9994 ||
    e === 9995 ||
    e === 10024 ||
    e === 10060 ||
    e === 10062 ||
    (e >= 10067 && e <= 10069) ||
    e === 10071 ||
    (e >= 10133 && e <= 10135) ||
    e === 10160 ||
    e === 10175 ||
    e === 11035 ||
    e === 11036 ||
    e === 11088 ||
    e === 11093 ||
    (e >= 11904 && e <= 11929) ||
    (e >= 11931 && e <= 12019) ||
    (e >= 12032 && e <= 12245) ||
    (e >= 12272 && e <= 12287) ||
    (e >= 12289 && e <= 12350) ||
    (e >= 12353 && e <= 12438) ||
    (e >= 12441 && e <= 12543) ||
    (e >= 12549 && e <= 12591) ||
    (e >= 12593 && e <= 12686) ||
    (e >= 12688 && e <= 12771) ||
    (e >= 12783 && e <= 12830) ||
    (e >= 12832 && e <= 12871) ||
    (e >= 12880 && e <= 19903) ||
    (e >= 19968 && e <= 42124) ||
    (e >= 42128 && e <= 42182) ||
    (e >= 43360 && e <= 43388) ||
    (e >= 44032 && e <= 55203) ||
    (e >= 63744 && e <= 64255) ||
    (e >= 65040 && e <= 65049) ||
    (e >= 65072 && e <= 65106) ||
    (e >= 65108 && e <= 65126) ||
    (e >= 65128 && e <= 65131) ||
    (e >= 94176 && e <= 94180) ||
    e === 94192 ||
    e === 94193 ||
    (e >= 94208 && e <= 100343) ||
    (e >= 100352 && e <= 101589) ||
    (e >= 101632 && e <= 101640) ||
    (e >= 110576 && e <= 110579) ||
    (e >= 110581 && e <= 110587) ||
    e === 110589 ||
    e === 110590 ||
    (e >= 110592 && e <= 110882) ||
    e === 110898 ||
    (e >= 110928 && e <= 110930) ||
    e === 110933 ||
    (e >= 110948 && e <= 110951) ||
    (e >= 110960 && e <= 111355) ||
    e === 126980 ||
    e === 127183 ||
    e === 127374 ||
    (e >= 127377 && e <= 127386) ||
    (e >= 127488 && e <= 127490) ||
    (e >= 127504 && e <= 127547) ||
    (e >= 127552 && e <= 127560) ||
    e === 127568 ||
    e === 127569 ||
    (e >= 127584 && e <= 127589) ||
    (e >= 127744 && e <= 127776) ||
    (e >= 127789 && e <= 127797) ||
    (e >= 127799 && e <= 127868) ||
    (e >= 127870 && e <= 127891) ||
    (e >= 127904 && e <= 127946) ||
    (e >= 127951 && e <= 127955) ||
    (e >= 127968 && e <= 127984) ||
    e === 127988 ||
    (e >= 127992 && e <= 128062) ||
    e === 128064 ||
    (e >= 128066 && e <= 128252) ||
    (e >= 128255 && e <= 128317) ||
    (e >= 128331 && e <= 128334) ||
    (e >= 128336 && e <= 128359) ||
    e === 128378 ||
    e === 128405 ||
    e === 128406 ||
    e === 128420 ||
    (e >= 128507 && e <= 128591) ||
    (e >= 128640 && e <= 128709) ||
    e === 128716 ||
    (e >= 128720 && e <= 128722) ||
    (e >= 128725 && e <= 128727) ||
    (e >= 128732 && e <= 128735) ||
    e === 128747 ||
    e === 128748 ||
    (e >= 128756 && e <= 128764) ||
    (e >= 128992 && e <= 129003) ||
    e === 129008 ||
    (e >= 129292 && e <= 129338) ||
    (e >= 129340 && e <= 129349) ||
    (e >= 129351 && e <= 129535) ||
    (e >= 129648 && e <= 129660) ||
    (e >= 129664 && e <= 129672) ||
    (e >= 129680 && e <= 129725) ||
    (e >= 129727 && e <= 129733) ||
    (e >= 129742 && e <= 129755) ||
    (e >= 129760 && e <= 129768) ||
    (e >= 129776 && e <= 129784) ||
    (e >= 131072 && e <= 196605) ||
    (e >= 196608 && e <= 262141)
  );
}
var _r2 = (e) => !(Ar2(e) || Br(e)),
  Nu = /[^\x20-\x7F]/;
function Tu(e) {
  if (!e) return 0;
  if (!Nu.test(e)) return e.length;
  e = e.replace(yr2(), '  ');
  let t8 = 0;
  for (let r of e) {
    let n = r.codePointAt(0);
    n <= 31 ||
      (n >= 127 && n <= 159) ||
      (n >= 768 && n <= 879) ||
      (t8 += _r2(n) ? 1 : 2);
  }
  return t8;
}
var we2 = Tu,
  br2 = (e) => {
    if (Array.isArray(e)) return e;
    if (e.type !== k2) throw new Error(`Expect doc to be 'array' or '${k2}'.`);
    return e.parts;
  };
function Ne2(e, t8) {
  if (typeof e == 'string') return t8(e);
  let r = new Map();
  return n(e);
  function n(u) {
    if (r.has(u)) return r.get(u);
    let i = o(u);
    return r.set(u, i), i;
  }
  function o(u) {
    switch (U2(u)) {
      case j2:
        return t8(u.map(n));
      case k2:
        return t8({ ...u, parts: u.parts.map(n) });
      case x2:
        return t8({
          ...u,
          breakContents: n(u.breakContents),
          flatContents: n(u.flatContents),
        });
      case _: {
        let { expandedStates: i, contents: s } = u;
        return (
          i ? ((i = i.map(n)), (s = i[0])) : (s = n(s)),
          t8({ ...u, contents: s, expandedStates: i })
        );
      }
      case S2:
      case T2:
      case P:
      case O2:
      case L2:
        return t8({ ...u, contents: n(u.contents) });
      case M:
      case W2:
      case v2:
      case I2:
      case A2:
      case b2:
        return t8(u);
      default:
        throw new q(u);
    }
  }
}
function Je2(e, t8, r) {
  let n = r,
    o = !1;
  function u(i) {
    if (o) return !1;
    let s = t8(i);
    s !== void 0 && ((o = !0), (n = s));
  }
  return Ae2(e, u), n;
}
function Su(e) {
  if ((e.type === _ && e.break) || (e.type === A2 && e.hard) || e.type === b2)
    return !0;
}
function wr2(e) {
  return Je2(e, Su, !1);
}
function xr(e) {
  if (e.length > 0) {
    let t8 = y(!1, e, -1);
    !t8.expandedStates && !t8.break && (t8.break = 'propagated');
  }
  return null;
}
function Or2(e) {
  let t8 = new Set(),
    r = [];
  function n(u) {
    if ((u.type === b2 && xr(r), u.type === _)) {
      if ((r.push(u), t8.has(u))) return !1;
      t8.add(u);
    }
  }
  function o(u) {
    u.type === _ && r.pop().break && xr(r);
  }
  Ae2(e, n, o, !0);
}
function vu(e) {
  return e.type === A2 && !e.hard
    ? e.soft
      ? ''
      : ' '
    : e.type === x2
    ? e.flatContents
    : e;
}
function Nr2(e) {
  return Ne2(e, vu);
}
function kr(e) {
  for (
    e = [...e];
    e.length >= 2 && y(!1, e, -2).type === A2 && y(!1, e, -1).type === b2;

  )
    e.length -= 2;
  if (e.length > 0) {
    let t8 = Oe2(y(!1, e, -1));
    e[e.length - 1] = t8;
  }
  return e;
}
function Oe2(e) {
  switch (U2(e)) {
    case S2:
    case T2:
    case P:
    case _:
    case L2:
    case O2: {
      let t8 = Oe2(e.contents);
      return { ...e, contents: t8 };
    }
    case x2:
      return {
        ...e,
        breakContents: Oe2(e.breakContents),
        flatContents: Oe2(e.flatContents),
      };
    case k2:
      return { ...e, parts: kr(e.parts) };
    case j2:
      return kr(e);
    case M:
      return e.replace(/[\n\r]*$/, '');
    case W2:
    case v2:
    case I2:
    case A2:
    case b2:
      break;
    default:
      throw new q(e);
  }
  return e;
}
function Xe2(e) {
  return Oe2(Lu(e));
}
function Pu(e) {
  switch (U2(e)) {
    case k2:
      if (e.parts.every((t8) => t8 === '')) return '';
      break;
    case _:
      if (!e.contents && !e.id && !e.break && !e.expandedStates) return '';
      if (
        e.contents.type === _ &&
        e.contents.id === e.id &&
        e.contents.break === e.break &&
        e.contents.expandedStates === e.expandedStates
      )
        return e.contents;
      break;
    case S2:
    case T2:
    case P:
    case L2:
      if (!e.contents) return '';
      break;
    case x2:
      if (!e.flatContents && !e.breakContents) return '';
      break;
    case j2: {
      let t8 = [];
      for (let r of e) {
        if (!r) continue;
        let [n, ...o] = Array.isArray(r) ? r : [r];
        typeof n == 'string' && typeof y(!1, t8, -1) == 'string'
          ? (t8[t8.length - 1] += n)
          : t8.push(n),
          t8.push(...o);
      }
      return t8.length === 0 ? '' : t8.length === 1 ? t8[0] : t8;
    }
    case M:
    case W2:
    case v2:
    case I2:
    case A2:
    case O2:
    case b2:
      break;
    default:
      throw new q(e);
  }
  return e;
}
function Lu(e) {
  return Ne2(e, (t8) => Pu(t8));
}
function Tr2(e, t8 = He2) {
  return Ne2(e, (r) =>
    typeof r == 'string'
      ? ke2(
          t8,
          r.split(`
`)
        )
      : r
  );
}
function Iu(e) {
  if (e.type === A2) return !0;
}
function Sr2(e) {
  return Je2(e, Iu, !1);
}
function Ze2(e, t8) {
  return e.type === O2 ? { ...e, contents: t8(e.contents) } : t8(e);
}
var R2 = Symbol('MODE_BREAK'),
  K2 = Symbol('MODE_FLAT'),
  Te2 = Symbol('cursor');
function vr2() {
  return { value: '', length: 0, queue: [] };
}
function Ru(e, t8) {
  return xt2(e, { type: 'indent' }, t8);
}
function Yu(e, t8, r) {
  return t8 === Number.NEGATIVE_INFINITY
    ? e.root || vr2()
    : t8 < 0
    ? xt2(e, { type: 'dedent' }, r)
    : t8
    ? t8.type === 'root'
      ? { ...e, root: e }
      : xt2(
          e,
          {
            type: typeof t8 == 'string' ? 'stringAlign' : 'numberAlign',
            n: t8,
          },
          r
        )
    : e;
}
function xt2(e, t8, r) {
  let n = t8.type === 'dedent' ? e.queue.slice(0, -1) : [...e.queue, t8],
    o = '',
    u = 0,
    i = 0,
    s = 0;
  for (let l of n)
    switch (l.type) {
      case 'indent':
        c(), r.useTabs ? D(1) : a(r.tabWidth);
        break;
      case 'stringAlign':
        c(), (o += l.n), (u += l.n.length);
        break;
      case 'numberAlign':
        (i += 1), (s += l.n);
        break;
      default:
        throw new Error(`Unexpected type '${l.type}'`);
    }
  return f2(), { ...e, value: o, length: u, queue: n };
  function D(l) {
    (o += '	'.repeat(l)), (u += r.tabWidth * l);
  }
  function a(l) {
    (o += ' '.repeat(l)), (u += l);
  }
  function c() {
    r.useTabs ? d() : f2();
  }
  function d() {
    i > 0 && D(i), p();
  }
  function f2() {
    s > 0 && a(s), p();
  }
  function p() {
    (i = 0), (s = 0);
  }
}
function kt2(e) {
  let t8 = 0,
    r = 0,
    n = e.length;
  e: for (; n--; ) {
    let o = e[n];
    if (o === Te2) {
      r++;
      continue;
    }
    for (let u = o.length - 1; u >= 0; u--) {
      let i = o[u];
      if (i === ' ' || i === '	') t8++;
      else {
        e[n] = o.slice(0, u + 1);
        break e;
      }
    }
  }
  if (t8 > 0 || r > 0) for (e.length = n + 1; r-- > 0; ) e.push(Te2);
  return t8;
}
function Qe2(e, t8, r, n, o, u) {
  if (r === Number.POSITIVE_INFINITY) return !0;
  let i = t8.length,
    s = [e],
    D = [];
  for (; r >= 0; ) {
    if (s.length === 0) {
      if (i === 0) return !0;
      s.push(t8[--i]);
      continue;
    }
    let { mode: a, doc: c } = s.pop();
    switch (U2(c)) {
      case M:
        D.push(c), (r -= we2(c));
        break;
      case j2:
      case k2: {
        let d = br2(c);
        for (let f2 = d.length - 1; f2 >= 0; f2--)
          s.push({ mode: a, doc: d[f2] });
        break;
      }
      case T2:
      case S2:
      case P:
      case O2:
        s.push({ mode: a, doc: c.contents });
        break;
      case v2:
        r += kt2(D);
        break;
      case _: {
        if (u && c.break) return !1;
        let d = c.break ? R2 : a,
          f2 =
            c.expandedStates && d === R2
              ? y(!1, c.expandedStates, -1)
              : c.contents;
        s.push({ mode: d, doc: f2 });
        break;
      }
      case x2: {
        let f2 =
          (c.groupId ? o[c.groupId] || K2 : a) === R2
            ? c.breakContents
            : c.flatContents;
        f2 && s.push({ mode: a, doc: f2 });
        break;
      }
      case A2:
        if (a === R2 || c.hard) return !0;
        c.soft || (D.push(' '), r--);
        break;
      case L2:
        n = !0;
        break;
      case I2:
        if (n) return !1;
        break;
    }
  }
  return !1;
}
function fe2(e, t8) {
  let r = {},
    n = t8.printWidth,
    o = be2(t8.endOfLine),
    u = 0,
    i = [{ ind: vr2(), mode: R2, doc: e }],
    s = [],
    D = !1,
    a = [],
    c = 0;
  for (Or2(e); i.length > 0; ) {
    let { ind: f2, mode: p, doc: l } = i.pop();
    switch (U2(l)) {
      case M: {
        let F2 =
          o !==
          `
`
            ? ee2(
                !1,
                l,
                `
`,
                o
              )
            : l;
        s.push(F2), i.length > 0 && (u += we2(F2));
        break;
      }
      case j2:
        for (let F2 = l.length - 1; F2 >= 0; F2--)
          i.push({ ind: f2, mode: p, doc: l[F2] });
        break;
      case W2:
        if (c >= 2) throw new Error("There are too many 'cursor' in doc.");
        s.push(Te2), c++;
        break;
      case T2:
        i.push({ ind: Ru(f2, t8), mode: p, doc: l.contents });
        break;
      case S2:
        i.push({ ind: Yu(f2, l.n, t8), mode: p, doc: l.contents });
        break;
      case v2:
        u -= kt2(s);
        break;
      case _:
        switch (p) {
          case K2:
            if (!D) {
              i.push({ ind: f2, mode: l.break ? R2 : K2, doc: l.contents });
              break;
            }
          case R2: {
            D = !1;
            let F2 = { ind: f2, mode: K2, doc: l.contents },
              m = n - u,
              E2 = a.length > 0;
            if (!l.break && Qe2(F2, i, m, E2, r)) i.push(F2);
            else if (l.expandedStates) {
              let C = y(!1, l.expandedStates, -1);
              if (l.break) {
                i.push({ ind: f2, mode: R2, doc: C });
                break;
              } else
                for (let g = 1; g < l.expandedStates.length + 1; g++)
                  if (g >= l.expandedStates.length) {
                    i.push({ ind: f2, mode: R2, doc: C });
                    break;
                  } else {
                    let h2 = l.expandedStates[g],
                      B = { ind: f2, mode: K2, doc: h2 };
                    if (Qe2(B, i, m, E2, r)) {
                      i.push(B);
                      break;
                    }
                  }
            } else i.push({ ind: f2, mode: R2, doc: l.contents });
            break;
          }
        }
        l.id && (r[l.id] = y(!1, i, -1).mode);
        break;
      case k2: {
        let F2 = n - u,
          { parts: m } = l;
        if (m.length === 0) break;
        let [E2, C] = m,
          g = { ind: f2, mode: K2, doc: E2 },
          h2 = { ind: f2, mode: R2, doc: E2 },
          B = Qe2(g, [], F2, a.length > 0, r, !0);
        if (m.length === 1) {
          B ? i.push(g) : i.push(h2);
          break;
        }
        let Z = { ind: f2, mode: K2, doc: C },
          $ = { ind: f2, mode: R2, doc: C };
        if (m.length === 2) {
          B ? i.push(Z, g) : i.push($, h2);
          break;
        }
        m.splice(0, 2);
        let Q2 = { ind: f2, mode: p, doc: Ge2(m) },
          rr2 = m[0];
        Qe2(
          { ind: f2, mode: K2, doc: [E2, C, rr2] },
          [],
          F2,
          a.length > 0,
          r,
          !0
        )
          ? i.push(Q2, Z, g)
          : B
          ? i.push(Q2, $, g)
          : i.push(Q2, $, h2);
        break;
      }
      case x2:
      case P: {
        let F2 = l.groupId ? r[l.groupId] : p;
        if (F2 === R2) {
          let m =
            l.type === x2
              ? l.breakContents
              : l.negate
              ? l.contents
              : ie2(l.contents);
          m && i.push({ ind: f2, mode: p, doc: m });
        }
        if (F2 === K2) {
          let m =
            l.type === x2
              ? l.flatContents
              : l.negate
              ? ie2(l.contents)
              : l.contents;
          m && i.push({ ind: f2, mode: p, doc: m });
        }
        break;
      }
      case L2:
        a.push({ ind: f2, mode: p, doc: l.contents });
        break;
      case I2:
        a.length > 0 && i.push({ ind: f2, mode: p, doc: _e2 });
        break;
      case A2:
        switch (p) {
          case K2:
            if (l.hard) D = !0;
            else {
              l.soft || (s.push(' '), (u += 1));
              break;
            }
          case R2:
            if (a.length > 0) {
              i.push({ ind: f2, mode: p, doc: l }, ...a.reverse()),
                (a.length = 0);
              break;
            }
            l.literal
              ? f2.root
                ? (s.push(o, f2.root.value), (u = f2.root.length))
                : (s.push(o), (u = 0))
              : ((u -= kt2(s)), s.push(o + f2.value), (u = f2.length));
            break;
        }
        break;
      case O2:
        i.push({ ind: f2, mode: p, doc: l.contents });
        break;
      case b2:
        break;
      default:
        throw new q(l);
    }
    i.length === 0 && a.length > 0 && (i.push(...a.reverse()), (a.length = 0));
  }
  let d = s.indexOf(Te2);
  if (d !== -1) {
    let f2 = s.indexOf(Te2, d + 1),
      p = s.slice(0, d).join(''),
      l = s.slice(d + 1, f2).join(''),
      F2 = s.slice(f2 + 1).join('');
    return {
      formatted: p + l + F2,
      cursorNodeStart: p.length,
      cursorNodeText: l,
    };
  }
  return { formatted: s.join('') };
}
function J2(e) {
  var t8;
  if (!e) return '';
  if (Array.isArray(e)) {
    let r = [];
    for (let n of e)
      if (Array.isArray(n)) r.push(...J2(n));
      else {
        let o = J2(n);
        o !== '' && r.push(o);
      }
    return r;
  }
  return e.type === x2
    ? {
        ...e,
        breakContents: J2(e.breakContents),
        flatContents: J2(e.flatContents),
      }
    : e.type === _
    ? {
        ...e,
        contents: J2(e.contents),
        expandedStates: (t8 = e.expandedStates) == null ? void 0 : t8.map(J2),
      }
    : e.type === k2
    ? { type: 'fill', parts: e.parts.map(J2) }
    : e.contents
    ? { ...e, contents: J2(e.contents) }
    : e;
}
function Pr2(e) {
  let t8 = Object.create(null),
    r = new Set();
  return n(J2(e));
  function n(u, i, s) {
    var D, a;
    if (typeof u == 'string') return JSON.stringify(u);
    if (Array.isArray(u)) {
      let c = u.map(n).filter(Boolean);
      return c.length === 1 ? c[0] : `[${c.join(', ')}]`;
    }
    if (u.type === A2) {
      let c = ((D = s?.[i + 1]) == null ? void 0 : D.type) === b2;
      return u.literal
        ? c
          ? 'literalline'
          : 'literallineWithoutBreakParent'
        : u.hard
        ? c
          ? 'hardline'
          : 'hardlineWithoutBreakParent'
        : u.soft
        ? 'softline'
        : 'line';
    }
    if (u.type === b2)
      return ((a = s?.[i - 1]) == null ? void 0 : a.type) === A2 &&
        s[i - 1].hard
        ? void 0
        : 'breakParent';
    if (u.type === v2) return 'trim';
    if (u.type === T2) return 'indent(' + n(u.contents) + ')';
    if (u.type === S2)
      return u.n === Number.NEGATIVE_INFINITY
        ? 'dedentToRoot(' + n(u.contents) + ')'
        : u.n < 0
        ? 'dedent(' + n(u.contents) + ')'
        : u.n.type === 'root'
        ? 'markAsRoot(' + n(u.contents) + ')'
        : 'align(' + JSON.stringify(u.n) + ', ' + n(u.contents) + ')';
    if (u.type === x2)
      return (
        'ifBreak(' +
        n(u.breakContents) +
        (u.flatContents ? ', ' + n(u.flatContents) : '') +
        (u.groupId
          ? (u.flatContents ? '' : ', ""') + `, { groupId: ${o(u.groupId)} }`
          : '') +
        ')'
      );
    if (u.type === P) {
      let c = [];
      u.negate && c.push('negate: true'),
        u.groupId && c.push(`groupId: ${o(u.groupId)}`);
      let d = c.length > 0 ? `, { ${c.join(', ')} }` : '';
      return `indentIfBreak(${n(u.contents)}${d})`;
    }
    if (u.type === _) {
      let c = [];
      u.break && u.break !== 'propagated' && c.push('shouldBreak: true'),
        u.id && c.push(`id: ${o(u.id)}`);
      let d = c.length > 0 ? `, { ${c.join(', ')} }` : '';
      return u.expandedStates
        ? `conditionalGroup([${u.expandedStates
            .map((f2) => n(f2))
            .join(',')}]${d})`
        : `group(${n(u.contents)}${d})`;
    }
    if (u.type === k2) return `fill([${u.parts.map((c) => n(c)).join(', ')}])`;
    if (u.type === L2) return 'lineSuffix(' + n(u.contents) + ')';
    if (u.type === I2) return 'lineSuffixBoundary';
    if (u.type === O2)
      return `label(${JSON.stringify(u.label)}, ${n(u.contents)})`;
    throw new Error('Unknown doc type ' + u.type);
  }
  function o(u) {
    if (typeof u != 'symbol') return JSON.stringify(String(u));
    if (u in t8) return t8[u];
    let i = u.description || 'symbol';
    for (let s = 0; ; s++) {
      let D = i + (s > 0 ? ` #${s}` : '');
      if (!r.has(D))
        return r.add(D), (t8[u] = `Symbol.for(${JSON.stringify(D)})`);
    }
  }
}
function ju(e, t8, r = 0) {
  let n = 0;
  for (let o = r; o < e.length; ++o)
    e[o] === '	' ? (n = n + t8 - (n % t8)) : n++;
  return n;
}
var Fe2 = ju,
  Se2 = class extends Error {
    name = 'ConfigError';
  },
  ve2 = class extends Error {
    name = 'UndefinedParserError';
  },
  Lr = {
    cursorOffset: {
      category: 'Special',
      type: 'int',
      default: -1,
      range: { start: -1, end: 1 / 0, step: 1 },
      description:
        'Print (to stderr) where a cursor at the given position would move to after formatting.',
      cliCategory: 'Editor',
    },
    endOfLine: {
      category: 'Global',
      type: 'choice',
      default: 'lf',
      description: 'Which end of line characters to apply.',
      choices: [
        {
          value: 'lf',
          description:
            'Line Feed only (\\n), common on Linux and macOS as well as inside git repos',
        },
        {
          value: 'crlf',
          description:
            'Carriage Return + Line Feed characters (\\r\\n), common on Windows',
        },
        {
          value: 'cr',
          description: 'Carriage Return character only (\\r), used very rarely',
        },
        {
          value: 'auto',
          description: `Maintain existing
(mixed values within one file are normalised by looking at what's used after the first line)`,
        },
      ],
    },
    filepath: {
      category: 'Special',
      type: 'path',
      description:
        'Specify the input filepath. This will be used to do parser inference.',
      cliName: 'stdin-filepath',
      cliCategory: 'Other',
      cliDescription: 'Path to the file to pretend that stdin comes from.',
    },
    insertPragma: {
      category: 'Special',
      type: 'boolean',
      default: !1,
      description: "Insert @format pragma into file's first docblock comment.",
      cliCategory: 'Other',
    },
    parser: {
      category: 'Global',
      type: 'choice',
      default: void 0,
      description: 'Which parser to use.',
      exception: (e) => typeof e == 'string' || typeof e == 'function',
      choices: [
        { value: 'flow', description: 'Flow' },
        { value: 'babel', description: 'JavaScript' },
        { value: 'babel-flow', description: 'Flow' },
        { value: 'babel-ts', description: 'TypeScript' },
        { value: 'typescript', description: 'TypeScript' },
        { value: 'acorn', description: 'JavaScript' },
        { value: 'espree', description: 'JavaScript' },
        { value: 'meriyah', description: 'JavaScript' },
        { value: 'css', description: 'CSS' },
        { value: 'less', description: 'Less' },
        { value: 'scss', description: 'SCSS' },
        { value: 'json', description: 'JSON' },
        { value: 'json5', description: 'JSON5' },
        { value: 'json-stringify', description: 'JSON.stringify' },
        { value: 'graphql', description: 'GraphQL' },
        { value: 'markdown', description: 'Markdown' },
        { value: 'mdx', description: 'MDX' },
        { value: 'vue', description: 'Vue' },
        { value: 'yaml', description: 'YAML' },
        { value: 'glimmer', description: 'Ember / Handlebars' },
        { value: 'html', description: 'HTML' },
        { value: 'angular', description: 'Angular' },
        { value: 'lwc', description: 'Lightning Web Components' },
      ],
    },
    plugins: {
      type: 'path',
      array: !0,
      default: [{ value: [] }],
      category: 'Global',
      description:
        'Add a plugin. Multiple plugins can be passed as separate `--plugin`s.',
      exception: (e) => typeof e == 'string' || typeof e == 'object',
      cliName: 'plugin',
      cliCategory: 'Config',
    },
    printWidth: {
      category: 'Global',
      type: 'int',
      default: 80,
      description: 'The line length where Prettier will try wrap.',
      range: { start: 0, end: 1 / 0, step: 1 },
    },
    rangeEnd: {
      category: 'Special',
      type: 'int',
      default: 1 / 0,
      range: { start: 0, end: 1 / 0, step: 1 },
      description: `Format code ending at a given character offset (exclusive).
The range will extend forwards to the end of the selected statement.`,
      cliCategory: 'Editor',
    },
    rangeStart: {
      category: 'Special',
      type: 'int',
      default: 0,
      range: { start: 0, end: 1 / 0, step: 1 },
      description: `Format code starting at a given character offset.
The range will extend backwards to the start of the first line containing the selected statement.`,
      cliCategory: 'Editor',
    },
    requirePragma: {
      category: 'Special',
      type: 'boolean',
      default: !1,
      description: `Require either '@prettier' or '@format' to be present in the file's first docblock comment
in order for it to be formatted.`,
      cliCategory: 'Other',
    },
    tabWidth: {
      type: 'int',
      category: 'Global',
      default: 2,
      description: 'Number of spaces per indentation level.',
      range: { start: 0, end: 1 / 0, step: 1 },
    },
    useTabs: {
      category: 'Global',
      type: 'boolean',
      default: !1,
      description: 'Indent with tabs instead of spaces.',
    },
    embeddedLanguageFormatting: {
      category: 'Global',
      type: 'choice',
      default: 'auto',
      description:
        'Control how Prettier formats quoted code embedded in the file.',
      choices: [
        {
          value: 'auto',
          description:
            'Format embedded code if Prettier can automatically identify it.',
        },
        {
          value: 'off',
          description: 'Never automatically format embedded code.',
        },
      ],
    },
  };
function et2({ plugins: e = [], showDeprecated: t8 = !1 } = {}) {
  let r = e.flatMap((o) => o.languages ?? []),
    n = [];
  for (let o of $u(Object.assign({}, ...e.map(({ options: u }) => u), Lr)))
    (!t8 && o.deprecated) ||
      (Array.isArray(o.choices) &&
        (t8 || (o.choices = o.choices.filter((u) => !u.deprecated)),
        o.name === 'parser' &&
          (o.choices = [...o.choices, ...Vu(o.choices, r, e)])),
      (o.pluginDefaults = Object.fromEntries(
        e
          .filter((u) => {
            var i;
            return (
              ((i = u.defaultOptions) == null ? void 0 : i[o.name]) !== void 0
            );
          })
          .map((u) => [u.name, u.defaultOptions[o.name]])
      )),
      n.push(o));
  return { languages: r, options: n };
}
function* Vu(e, t8, r) {
  let n = new Set(e.map((o) => o.value));
  for (let o of t8)
    if (o.parsers) {
      for (let u of o.parsers)
        if (!n.has(u)) {
          n.add(u);
          let i = r.find(
              (D) =>
                D.parsers && Object.prototype.hasOwnProperty.call(D.parsers, u)
            ),
            s = o.name;
          i != null && i.name && (s += ` (plugin: ${i.name})`),
            yield { value: u, description: s };
        }
    }
}
function $u(e) {
  let t8 = [];
  for (let [r, n] of Object.entries(e)) {
    let o = { name: r, ...n };
    Array.isArray(o.default) && (o.default = y(!1, o.default, -1).value),
      t8.push(o);
  }
  return t8;
}
var Mu = (e) => String(e).split(/[/\\]/).pop();
function Ir(e, t8) {
  if (!t8) return;
  let r = Mu(t8).toLowerCase();
  return e.find((n) => {
    var o, u;
    return (
      ((o = n.extensions) == null ? void 0 : o.some((i) => r.endsWith(i))) ||
      ((u = n.filenames) == null
        ? void 0
        : u.some((i) => i.toLowerCase() === r))
    );
  });
}
function Wu(e, t8) {
  if (t8)
    return (
      e.find(({ name: r }) => r.toLowerCase() === t8) ??
      e.find(({ aliases: r }) => r?.includes(t8)) ??
      e.find(({ extensions: r }) => r?.includes(`.${t8}`))
    );
}
function Uu(e, t8) {
  let r = e.plugins.flatMap((o) => o.languages ?? []);
  return (
    Wu(r, t8.language) ??
    Ir(r, t8.physicalFile) ??
    Ir(r, t8.file) ??
    (t8.physicalFile, void 0)
  )?.parsers[0];
}
var Rr = Uu,
  te2 = {
    key: (e) => (/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(e) ? e : JSON.stringify(e)),
    value(e) {
      if (e === null || typeof e != 'object') return JSON.stringify(e);
      if (Array.isArray(e)) return `[${e.map((r) => te2.value(r)).join(', ')}]`;
      let t8 = Object.keys(e);
      return t8.length === 0
        ? '{}'
        : `{ ${t8
            .map((r) => `${te2.key(r)}: ${te2.value(e[r])}`)
            .join(', ')} }`;
    },
    pair: ({ key: e, value: t8 }) => te2.value({ [e]: t8 }),
  },
  bt2 = he2(Pe2(), 1),
  Vr2 = (e, t8, { descriptor: r }) => {
    let n = [
      `${bt2.default.yellow(
        typeof e == 'string' ? r.key(e) : r.pair(e)
      )} is deprecated`,
    ];
    return (
      t8 &&
        n.push(
          `we now treat it as ${bt2.default.blue(
            typeof t8 == 'string' ? r.key(t8) : r.pair(t8)
          )}`
        ),
      n.join('; ') + '.'
    );
  },
  se2 = he2(Pe2(), 1),
  tt2 = Symbol.for('vnopts.VALUE_NOT_EXIST'),
  pe2 = Symbol.for('vnopts.VALUE_UNCHANGED'),
  $r2 = ' '.repeat(2),
  Wr = (e, t8, r) => {
    let { text: n, list: o } = r.normalizeExpectedResult(
        r.schemas[e].expected(r)
      ),
      u = [];
    return (
      n && u.push(Mr2(e, t8, n, r.descriptor)),
      o &&
        u.push(
          [Mr2(e, t8, o.title, r.descriptor)].concat(
            o.values.map((i) => Ur2(i, r.loggerPrintWidth))
          ).join(`
`)
        ),
      zr(u, r.loggerPrintWidth)
    );
  };
function Mr2(e, t8, r, n) {
  return [
    `Invalid ${se2.default.red(n.key(e))} value.`,
    `Expected ${se2.default.blue(r)},`,
    `but received ${
      t8 === tt2 ? se2.default.gray('nothing') : se2.default.red(n.value(t8))
    }.`,
  ].join(' ');
}
function Ur2({ text: e, list: t8 }, r) {
  let n = [];
  return (
    e && n.push(`- ${se2.default.blue(e)}`),
    t8 &&
      n.push(
        [`- ${se2.default.blue(t8.title)}:`].concat(
          t8.values.map((o) =>
            Ur2(o, r - $r2.length).replace(/^|\n/g, `$&${$r2}`)
          )
        ).join(`
`)
      ),
    zr(n, r)
  );
}
function zr(e, t8) {
  if (e.length === 1) return e[0];
  let [r, n] = e,
    [o, u] = e.map(
      (i) =>
        i.split(
          `
`,
          1
        )[0].length
    );
  return o > t8 && o > u ? n : r;
}
var Nt2 = he2(Pe2(), 1),
  wt2 = [],
  Gr = [];
function Ot2(e, t8) {
  if (e === t8) return 0;
  let r = e;
  e.length > t8.length && ((e = t8), (t8 = r));
  let n = e.length,
    o = t8.length;
  for (; n > 0 && e.charCodeAt(~-n) === t8.charCodeAt(~-o); ) n--, o--;
  let u = 0;
  for (; u < n && e.charCodeAt(u) === t8.charCodeAt(u); ) u++;
  if (((n -= u), (o -= u), n === 0)) return o;
  let i,
    s,
    D,
    a,
    c = 0,
    d = 0;
  for (; c < n; ) (Gr[c] = e.charCodeAt(u + c)), (wt2[c] = ++c);
  for (; d < o; )
    for (i = t8.charCodeAt(u + d), D = d++, s = d, c = 0; c < n; c++)
      (a = i === Gr[c] ? D : D + 1),
        (D = wt2[c]),
        (s = wt2[c] = D > s ? (a > s ? s + 1 : a) : a > D ? D + 1 : a);
  return s;
}
var rt2 = (e, t8, { descriptor: r, logger: n, schemas: o }) => {
    let u = [
        `Ignored unknown option ${Nt2.default.yellow(
          r.pair({ key: e, value: t8 })
        )}.`,
      ],
      i = Object.keys(o)
        .sort()
        .find((s) => Ot2(e, s) < 3);
    i && u.push(`Did you mean ${Nt2.default.blue(r.key(i))}?`),
      n.warn(u.join(' '));
  },
  zu = [
    'default',
    'expected',
    'validate',
    'deprecated',
    'forward',
    'redirect',
    'overlap',
    'preprocess',
    'postprocess',
  ];
function Gu(e, t8) {
  let r = new e(t8),
    n = Object.create(r);
  for (let o of zu) o in t8 && (n[o] = Ku(t8[o], r, w.prototype[o].length));
  return n;
}
var w = class {
  static create(t8) {
    return Gu(this, t8);
  }
  constructor(t8) {
    this.name = t8.name;
  }
  default(t8) {}
  expected(t8) {
    return 'nothing';
  }
  validate(t8, r) {
    return !1;
  }
  deprecated(t8, r) {
    return !1;
  }
  forward(t8, r) {}
  redirect(t8, r) {}
  overlap(t8, r, n) {
    return t8;
  }
  preprocess(t8, r) {
    return t8;
  }
  postprocess(t8, r) {
    return pe2;
  }
};
function Ku(e, t8, r) {
  return typeof e == 'function'
    ? (...n) => e(...n.slice(0, r - 1), t8, ...n.slice(r - 1))
    : () => e;
}
var nt2 = class extends w {
    constructor(t8) {
      super(t8), (this._sourceName = t8.sourceName);
    }
    expected(t8) {
      return t8.schemas[this._sourceName].expected(t8);
    }
    validate(t8, r) {
      return r.schemas[this._sourceName].validate(t8, r);
    }
    redirect(t8, r) {
      return this._sourceName;
    }
  },
  ut2 = class extends w {
    expected() {
      return 'anything';
    }
    validate() {
      return !0;
    }
  },
  ot2 = class extends w {
    constructor({ valueSchema: t8, name: r = t8.name, ...n }) {
      super({ ...n, name: r }), (this._valueSchema = t8);
    }
    expected(t8) {
      let { text: r, list: n } = t8.normalizeExpectedResult(
        this._valueSchema.expected(t8)
      );
      return {
        text: r && `an array of ${r}`,
        list: n && {
          title: 'an array of the following values',
          values: [{ list: n }],
        },
      };
    }
    validate(t8, r) {
      if (!Array.isArray(t8)) return !1;
      let n = [];
      for (let o of t8) {
        let u = r.normalizeValidateResult(this._valueSchema.validate(o, r), o);
        u !== !0 && n.push(u.value);
      }
      return n.length === 0 ? !0 : { value: n };
    }
    deprecated(t8, r) {
      let n = [];
      for (let o of t8) {
        let u = r.normalizeDeprecatedResult(
          this._valueSchema.deprecated(o, r),
          o
        );
        u !== !1 && n.push(...u.map(({ value: i }) => ({ value: [i] })));
      }
      return n;
    }
    forward(t8, r) {
      let n = [];
      for (let o of t8) {
        let u = r.normalizeForwardResult(this._valueSchema.forward(o, r), o);
        n.push(...u.map(Kr2));
      }
      return n;
    }
    redirect(t8, r) {
      let n = [],
        o = [];
      for (let u of t8) {
        let i = r.normalizeRedirectResult(this._valueSchema.redirect(u, r), u);
        'remain' in i && n.push(i.remain), o.push(...i.redirect.map(Kr2));
      }
      return n.length === 0 ? { redirect: o } : { redirect: o, remain: n };
    }
    overlap(t8, r) {
      return t8.concat(r);
    }
  };
function Kr2({ from: e, to: t8 }) {
  return { from: [e], to: t8 };
}
var it2 = class extends w {
  expected() {
    return 'true or false';
  }
  validate(t8) {
    return typeof t8 == 'boolean';
  }
};
function qr2(e, t8) {
  let r = Object.create(null);
  for (let n of e) {
    let o = n[t8];
    if (r[o]) throw new Error(`Duplicate ${t8} ${JSON.stringify(o)}`);
    r[o] = n;
  }
  return r;
}
function Jr2(e, t8) {
  let r = new Map();
  for (let n of e) {
    let o = n[t8];
    if (r.has(o)) throw new Error(`Duplicate ${t8} ${JSON.stringify(o)}`);
    r.set(o, n);
  }
  return r;
}
function Xr2() {
  let e = Object.create(null);
  return (t8) => {
    let r = JSON.stringify(t8);
    return e[r] ? !0 : ((e[r] = !0), !1);
  };
}
function Zr2(e, t8) {
  let r = [],
    n = [];
  for (let o of e) t8(o) ? r.push(o) : n.push(o);
  return [r, n];
}
function Qr2(e) {
  return e === Math.floor(e);
}
function en2(e, t8) {
  if (e === t8) return 0;
  let r = typeof e,
    n = typeof t8,
    o = ['undefined', 'object', 'boolean', 'number', 'string'];
  return r !== n
    ? o.indexOf(r) - o.indexOf(n)
    : r !== 'string'
    ? Number(e) - Number(t8)
    : e.localeCompare(t8);
}
function tn2(e) {
  return (...t8) => {
    let r = e(...t8);
    return typeof r == 'string' ? new Error(r) : r;
  };
}
function Tt2(e) {
  return e === void 0 ? {} : e;
}
function St2(e) {
  if (typeof e == 'string') return { text: e };
  let { text: t8, list: r } = e;
  return (
    Hu(
      (t8 || r) !== void 0,
      'Unexpected `expected` result, there should be at least one field.'
    ),
    r
      ? { text: t8, list: { title: r.title, values: r.values.map(St2) } }
      : { text: t8 }
  );
}
function vt2(e, t8) {
  return e === !0 ? !0 : e === !1 ? { value: t8 } : e;
}
function Pt2(e, t8, r = !1) {
  return e === !1
    ? !1
    : e === !0
    ? r
      ? !0
      : [{ value: t8 }]
    : 'value' in e
    ? [e]
    : e.length === 0
    ? !1
    : e;
}
function Hr2(e, t8) {
  return typeof e == 'string' || 'key' in e
    ? { from: t8, to: e }
    : 'from' in e
    ? { from: e.from, to: e.to }
    : { from: t8, to: e.to };
}
function st2(e, t8) {
  return e === void 0
    ? []
    : Array.isArray(e)
    ? e.map((r) => Hr2(r, t8))
    : [Hr2(e, t8)];
}
function Lt2(e, t8) {
  let r = st2(typeof e == 'object' && 'redirect' in e ? e.redirect : e, t8);
  return r.length === 0
    ? { remain: t8, redirect: r }
    : typeof e == 'object' && 'remain' in e
    ? { remain: e.remain, redirect: r }
    : { redirect: r };
}
function Hu(e, t8) {
  if (!e) throw new Error(t8);
}
var Dt2 = class extends w {
    constructor(t8) {
      super(t8),
        (this._choices = Jr2(
          t8.choices.map((r) => (r && typeof r == 'object' ? r : { value: r })),
          'value'
        ));
    }
    expected({ descriptor: t8 }) {
      let r = Array.from(this._choices.keys())
          .map((i) => this._choices.get(i))
          .filter(({ hidden: i }) => !i)
          .map((i) => i.value)
          .sort(en2)
          .map(t8.value),
        n = r.slice(0, -2),
        o = r.slice(-2);
      return {
        text: n.concat(o.join(' or ')).join(', '),
        list: { title: 'one of the following values', values: r },
      };
    }
    validate(t8) {
      return this._choices.has(t8);
    }
    deprecated(t8) {
      let r = this._choices.get(t8);
      return r && r.deprecated ? { value: t8 } : !1;
    }
    forward(t8) {
      let r = this._choices.get(t8);
      return r ? r.forward : void 0;
    }
    redirect(t8) {
      let r = this._choices.get(t8);
      return r ? r.redirect : void 0;
    }
  },
  at2 = class extends w {
    expected() {
      return 'a number';
    }
    validate(t8, r) {
      return typeof t8 == 'number';
    }
  },
  ct2 = class extends at2 {
    expected() {
      return 'an integer';
    }
    validate(t8, r) {
      return (
        r.normalizeValidateResult(super.validate(t8, r), t8) === !0 && Qr2(t8)
      );
    }
  },
  Le2 = class extends w {
    expected() {
      return 'a string';
    }
    validate(t8) {
      return typeof t8 == 'string';
    }
  },
  rn2 = te2,
  nn2 = rt2,
  un2 = Wr,
  on2 = Vr2,
  lt = class {
    constructor(t8, r) {
      let {
        logger: n = console,
        loggerPrintWidth: o = 80,
        descriptor: u = rn2,
        unknown: i = nn2,
        invalid: s = un2,
        deprecated: D = on2,
        missing: a = () => !1,
        required: c = () => !1,
        preprocess: d = (p) => p,
        postprocess: f2 = () => pe2,
      } = r || {};
      (this._utils = {
        descriptor: u,
        logger: n || { warn: () => {} },
        loggerPrintWidth: o,
        schemas: qr2(t8, 'name'),
        normalizeDefaultResult: Tt2,
        normalizeExpectedResult: St2,
        normalizeDeprecatedResult: Pt2,
        normalizeForwardResult: st2,
        normalizeRedirectResult: Lt2,
        normalizeValidateResult: vt2,
      }),
        (this._unknownHandler = i),
        (this._invalidHandler = tn2(s)),
        (this._deprecatedHandler = D),
        (this._identifyMissing = (p, l) => !(p in l) || a(p, l)),
        (this._identifyRequired = c),
        (this._preprocess = d),
        (this._postprocess = f2),
        this.cleanHistory();
    }
    cleanHistory() {
      this._hasDeprecationWarned = Xr2();
    }
    normalize(t8) {
      let r = {},
        o = [this._preprocess(t8, this._utils)],
        u = () => {
          for (; o.length !== 0; ) {
            let i = o.shift(),
              s = this._applyNormalization(i, r);
            o.push(...s);
          }
        };
      u();
      for (let i of Object.keys(this._utils.schemas)) {
        let s = this._utils.schemas[i];
        if (!(i in r)) {
          let D = Tt2(s.default(this._utils));
          'value' in D && o.push({ [i]: D.value });
        }
      }
      u();
      for (let i of Object.keys(this._utils.schemas)) {
        if (!(i in r)) continue;
        let s = this._utils.schemas[i],
          D = r[i],
          a = s.postprocess(D, this._utils);
        a !== pe2 && (this._applyValidation(a, i, s), (r[i] = a));
      }
      return this._applyPostprocess(r), this._applyRequiredCheck(r), r;
    }
    _applyNormalization(t8, r) {
      let n = [],
        { knownKeys: o, unknownKeys: u } = this._partitionOptionKeys(t8);
      for (let i of o) {
        let s = this._utils.schemas[i],
          D = s.preprocess(t8[i], this._utils);
        this._applyValidation(D, i, s);
        let a = ({ from: p, to: l }) => {
            n.push(typeof l == 'string' ? { [l]: p } : { [l.key]: l.value });
          },
          c = ({ value: p, redirectTo: l }) => {
            let F2 = Pt2(s.deprecated(p, this._utils), D, !0);
            if (F2 !== !1)
              if (F2 === !0)
                this._hasDeprecationWarned(i) ||
                  this._utils.logger.warn(
                    this._deprecatedHandler(i, l, this._utils)
                  );
              else
                for (let { value: m } of F2) {
                  let E2 = { key: i, value: m };
                  if (!this._hasDeprecationWarned(E2)) {
                    let C = typeof l == 'string' ? { key: l, value: m } : l;
                    this._utils.logger.warn(
                      this._deprecatedHandler(E2, C, this._utils)
                    );
                  }
                }
          };
        st2(s.forward(D, this._utils), D).forEach(a);
        let f2 = Lt2(s.redirect(D, this._utils), D);
        if ((f2.redirect.forEach(a), 'remain' in f2)) {
          let p = f2.remain;
          (r[i] = i in r ? s.overlap(r[i], p, this._utils) : p),
            c({ value: p });
        }
        for (let { from: p, to: l } of f2.redirect)
          c({ value: p, redirectTo: l });
      }
      for (let i of u) {
        let s = t8[i];
        this._applyUnknownHandler(i, s, r, (D, a) => {
          n.push({ [D]: a });
        });
      }
      return n;
    }
    _applyRequiredCheck(t8) {
      for (let r of Object.keys(this._utils.schemas))
        if (this._identifyMissing(r, t8) && this._identifyRequired(r))
          throw this._invalidHandler(r, tt2, this._utils);
    }
    _partitionOptionKeys(t8) {
      let [r, n] = Zr2(
        Object.keys(t8).filter((o) => !this._identifyMissing(o, t8)),
        (o) => o in this._utils.schemas
      );
      return { knownKeys: r, unknownKeys: n };
    }
    _applyValidation(t8, r, n) {
      let o = vt2(n.validate(t8, this._utils), t8);
      if (o !== !0) throw this._invalidHandler(r, o.value, this._utils);
    }
    _applyUnknownHandler(t8, r, n, o) {
      let u = this._unknownHandler(t8, r, this._utils);
      if (u)
        for (let i of Object.keys(u)) {
          if (this._identifyMissing(i, u)) continue;
          let s = u[i];
          i in this._utils.schemas ? o(i, s) : (n[i] = s);
        }
    }
    _applyPostprocess(t8) {
      let r = this._postprocess(t8, this._utils);
      if (r !== pe2) {
        if (r.delete) for (let n of r.delete) delete t8[n];
        if (r.override) {
          let { knownKeys: n, unknownKeys: o } = this._partitionOptionKeys(
            r.override
          );
          for (let u of n) {
            let i = r.override[u];
            this._applyValidation(i, u, this._utils.schemas[u]), (t8[u] = i);
          }
          for (let u of o) {
            let i = r.override[u];
            this._applyUnknownHandler(u, i, t8, (s, D) => {
              let a = this._utils.schemas[s];
              this._applyValidation(D, s, a), (t8[s] = D);
            });
          }
        }
      }
    }
  },
  It2;
function Ju(
  e,
  t8,
  {
    logger: r = !1,
    isCLI: n = !1,
    passThrough: o = !1,
    FlagSchema: u,
    descriptor: i,
  } = {}
) {
  if (n) {
    if (!u) throw new Error("'FlagSchema' option is required.");
    if (!i) throw new Error("'descriptor' option is required.");
  } else i = te2;
  let s = o
      ? Array.isArray(o)
        ? (f2, p) => (o.includes(f2) ? { [f2]: p } : void 0)
        : (f2, p) => ({ [f2]: p })
      : (f2, p, l) => {
          let { _: F2, ...m } = l.schemas;
          return rt2(f2, p, { ...l, schemas: m });
        },
    D = Xu(t8, { isCLI: n, FlagSchema: u }),
    a = new lt(D, { logger: r, unknown: s, descriptor: i }),
    c = r !== !1;
  c && It2 && (a._hasDeprecationWarned = It2);
  let d = a.normalize(e);
  return c && (It2 = a._hasDeprecationWarned), d;
}
function Xu(e, { isCLI: t8, FlagSchema: r }) {
  let n = [];
  t8 && n.push(ut2.create({ name: '_' }));
  for (let o of e)
    n.push(Zu(o, { isCLI: t8, optionInfos: e, FlagSchema: r })),
      o.alias &&
        t8 &&
        n.push(nt2.create({ name: o.alias, sourceName: o.name }));
  return n;
}
function Zu(e, { isCLI: t8, optionInfos: r, FlagSchema: n }) {
  let { name: o } = e,
    u = { name: o },
    i,
    s = {};
  switch (e.type) {
    case 'int':
      (i = ct2), t8 && (u.preprocess = Number);
      break;
    case 'string':
      i = Le2;
      break;
    case 'choice':
      (i = Dt2),
        (u.choices = e.choices.map((D) =>
          D != null && D.redirect
            ? { ...D, redirect: { to: { key: e.name, value: D.redirect } } }
            : D
        ));
      break;
    case 'boolean':
      i = it2;
      break;
    case 'flag':
      (i = n),
        (u.flags = r.flatMap((D) =>
          [
            D.alias,
            D.description && D.name,
            D.oppositeDescription && `no-${D.name}`,
          ].filter(Boolean)
        ));
      break;
    case 'path':
      i = Le2;
      break;
    default:
      throw new Error(`Unexpected type ${e.type}`);
  }
  if (
    (e.exception
      ? (u.validate = (D, a, c) => e.exception(D) || a.validate(D, c))
      : (u.validate = (D, a, c) => D === void 0 || a.validate(D, c)),
    e.redirect &&
      (s.redirect = (D) =>
        D
          ? { to: { key: e.redirect.option, value: e.redirect.value } }
          : void 0),
    e.deprecated && (s.deprecated = !0),
    t8 && !e.array)
  ) {
    let D = u.preprocess || ((a) => a);
    u.preprocess = (a, c, d) =>
      c.preprocess(D(Array.isArray(a) ? y(!1, a, -1) : a), d);
  }
  return e.array
    ? ot2.create({
        ...(t8 ? { preprocess: (D) => (Array.isArray(D) ? D : [D]) } : {}),
        ...s,
        valueSchema: i.create(u),
      })
    : i.create({ ...u, ...s });
}
var sn2 = Ju;
function Rt2(e, t8) {
  if (!t8) throw new Error('parserName is required.');
  for (let n = e.length - 1; n >= 0; n--) {
    let o = e[n];
    if (o.parsers && Object.prototype.hasOwnProperty.call(o.parsers, t8))
      return o;
  }
  let r = `Couldn't resolve parser "${t8}".`;
  throw (
    ((r += ' Plugins must be explicitly added to the standalone bundle.'),
    new Se2(r))
  );
}
function Dn2(e, t8) {
  if (!t8) throw new Error('astFormat is required.');
  for (let n = e.length - 1; n >= 0; n--) {
    let o = e[n];
    if (o.printers && Object.prototype.hasOwnProperty.call(o.printers, t8))
      return o;
  }
  let r = `Couldn't find plugin for AST format "${t8}".`;
  throw (
    ((r += ' Plugins must be explicitly added to the standalone bundle.'),
    new Se2(r))
  );
}
function ft2({ plugins: e, parser: t8 }) {
  let r = Rt2(e, t8);
  return Yt(r, t8);
}
function Yt(e, t8) {
  let r = e.parsers[t8];
  return typeof r == 'function' ? r() : r;
}
function an2(e, t8) {
  let r = e.printers[t8];
  return typeof r == 'function' ? r() : r;
}
var cn2 = {
  astFormat: 'estree',
  printer: {},
  originalText: void 0,
  locStart: null,
  locEnd: null,
};
async function Qu(e, t8 = {}) {
  var d;
  let r = { ...e };
  if (!r.parser)
    if (r.filepath) {
      if (((r.parser = Rr(r, { physicalFile: r.filepath })), !r.parser))
        throw new ve2(`No parser could be inferred for file "${r.filepath}".`);
    } else
      throw new ve2(
        "No parser and no file path given, couldn't infer a parser."
      );
  let n = et2({ plugins: e.plugins, showDeprecated: !0 }).options,
    o = {
      ...cn2,
      ...Object.fromEntries(
        n
          .filter((f2) => f2.default !== void 0)
          .map((f2) => [f2.name, f2.default])
      ),
    },
    u = Rt2(r.plugins, r.parser),
    i = await Yt(u, r.parser);
  (r.astFormat = i.astFormat), (r.locEnd = i.locEnd), (r.locStart = i.locStart);
  let s =
      (d = u.printers) != null && d[i.astFormat]
        ? u
        : Dn2(r.plugins, i.astFormat),
    D = await an2(s, i.astFormat);
  r.printer = D;
  let a = s.defaultOptions
      ? Object.fromEntries(
          Object.entries(s.defaultOptions).filter(([, f2]) => f2 !== void 0)
        )
      : {},
    c = { ...o, ...a };
  for (let [f2, p] of Object.entries(c))
    (r[f2] === null || r[f2] === void 0) && (r[f2] = p);
  return (
    r.parser === 'json' && (r.trailingComma = 'none'),
    sn2(r, n, { passThrough: Object.keys(cn2), ...t8 })
  );
}
var re2 = Qu,
  ln2 = new Set([
    'tokens',
    'comments',
    'parent',
    'enclosingNode',
    'precedingNode',
    'followingNode',
  ]),
  eo = (e) => Object.keys(e).filter((t8) => !ln2.has(t8));
function to(e) {
  return e ? (t8) => e(t8, ln2) : eo;
}
var H2 = to;
function ro2(e, t8) {
  let {
    printer: { massageAstNode: r, getVisitorKeys: n },
  } = t8;
  if (!r) return e;
  let o = H2(n),
    u = r.ignoredProperties ?? new Set();
  return i(e);
  function i(s, D) {
    if (!(s !== null && typeof s == 'object')) return s;
    if (Array.isArray(s)) return s.map((f2) => i(f2, D)).filter(Boolean);
    let a = {},
      c = new Set(o(s));
    for (let f2 in s)
      !Object.prototype.hasOwnProperty.call(s, f2) ||
        u.has(f2) ||
        (c.has(f2) ? (a[f2] = i(s[f2], s)) : (a[f2] = s[f2]));
    let d = r(s, a, D);
    if (d !== null) return d ?? a;
  }
}
var fn2 = ro2,
  An2 = he2(yn2(), 1);
async function co2(e, t8) {
  let r = await ft2(t8),
    n = r.preprocess ? r.preprocess(e, t8) : e;
  t8.originalText = n;
  let o;
  try {
    o = await r.parse(n, t8, t8);
  } catch (u) {
    lo2(u, e);
  }
  return { text: n, ast: o };
}
function lo2(e, t8) {
  let { loc: r } = e;
  if (r) {
    let n = (0, An2.codeFrameColumns)(t8, r, { highlightCode: !0 });
    throw (
      ((e.message +=
        `
` + n),
      (e.codeFrame = n),
      e)
    );
  }
  throw e;
}
var De2 = co2,
  Ie,
  $t2,
  de2,
  pt2,
  Vt2 = class {
    constructor(t8) {
      ht2(this, Ie), ht2(this, de2), (this.stack = [t8]);
    }
    get key() {
      let { stack: t8, siblings: r } = this;
      return y(!1, t8, r === null ? -2 : -4) ?? null;
    }
    get index() {
      return this.siblings === null ? null : y(!1, this.stack, -2);
    }
    get node() {
      return y(!1, this.stack, -1);
    }
    get parent() {
      return this.getNode(1);
    }
    get grandparent() {
      return this.getNode(2);
    }
    get isInArray() {
      return this.siblings !== null;
    }
    get siblings() {
      let { stack: t8 } = this,
        r = y(!1, t8, -3);
      return Array.isArray(r) ? r : null;
    }
    get next() {
      let { siblings: t8 } = this;
      return t8 === null ? null : t8[this.index + 1];
    }
    get previous() {
      let { siblings: t8 } = this;
      return t8 === null ? null : t8[this.index - 1];
    }
    get isFirst() {
      return this.index === 0;
    }
    get isLast() {
      let { siblings: t8, index: r } = this;
      return t8 !== null && r === t8.length - 1;
    }
    get isRoot() {
      return this.stack.length === 1;
    }
    get root() {
      return this.stack[0];
    }
    get ancestors() {
      return [...ce2(this, de2, pt2).call(this)];
    }
    getName() {
      let { stack: t8 } = this,
        { length: r } = t8;
      return r > 1 ? y(!1, t8, -2) : null;
    }
    getValue() {
      return y(!1, this.stack, -1);
    }
    getNode(t8 = 0) {
      let r = ce2(this, Ie, $t2).call(this, t8);
      return r === -1 ? null : this.stack[r];
    }
    getParentNode(t8 = 0) {
      return this.getNode(t8 + 1);
    }
    call(t8, ...r) {
      let { stack: n } = this,
        { length: o } = n,
        u = y(!1, n, -1);
      for (let i of r) (u = u[i]), n.push(i, u);
      try {
        return t8(this);
      } finally {
        n.length = o;
      }
    }
    callParent(t8, r = 0) {
      let n = ce2(this, Ie, $t2).call(this, r + 1),
        o = this.stack.splice(n + 1);
      try {
        return t8(this);
      } finally {
        this.stack.push(...o);
      }
    }
    each(t8, ...r) {
      let { stack: n } = this,
        { length: o } = n,
        u = y(!1, n, -1);
      for (let i of r) (u = u[i]), n.push(i, u);
      try {
        for (let i = 0; i < u.length; ++i)
          n.push(i, u[i]), t8(this, i, u), (n.length -= 2);
      } finally {
        n.length = o;
      }
    }
    map(t8, ...r) {
      let n = [];
      return (
        this.each((o, u, i) => {
          n[u] = t8(o, u, i);
        }, ...r),
        n
      );
    }
    match(...t8) {
      let r = this.stack.length - 1,
        n = null,
        o = this.stack[r--];
      for (let u of t8) {
        if (o === void 0) return !1;
        let i = null;
        if (
          (typeof n == 'number' &&
            ((i = n), (n = this.stack[r--]), (o = this.stack[r--])),
          u && !u(o, n, i))
        )
          return !1;
        (n = this.stack[r--]), (o = this.stack[r--]);
      }
      return !0;
    }
    findAncestor(t8) {
      for (let r of ce2(this, de2, pt2).call(this)) if (t8(r)) return r;
    }
    hasAncestor(t8) {
      for (let r of ce2(this, de2, pt2).call(this)) if (t8(r)) return !0;
      return !1;
    }
  };
(Ie = new WeakSet()),
  ($t2 = function (t8) {
    let { stack: r } = this;
    for (let n = r.length - 1; n >= 0; n -= 2)
      if (!Array.isArray(r[n]) && --t8 < 0) return n;
    return -1;
  }),
  (de2 = new WeakSet()),
  (pt2 = function* () {
    let { stack: t8 } = this;
    for (let r = t8.length - 3; r >= 0; r -= 2) {
      let n = t8[r];
      Array.isArray(n) || (yield n);
    }
  });
var Bn2 = Vt2,
  _n2 = new Proxy(() => {}, { get: () => _n2 }),
  Re2 = _n2;
function me2(e) {
  return (t8, r, n) => {
    let o = !!(n != null && n.backwards);
    if (r === !1) return !1;
    let { length: u } = t8,
      i = r;
    for (; i >= 0 && i < u; ) {
      let s = t8.charAt(i);
      if (e instanceof RegExp) {
        if (!e.test(s)) return i;
      } else if (!e.includes(s)) return i;
      o ? i-- : i++;
    }
    return i === -1 || i === u ? i : !1;
  };
}
var xn2 = me2(/\s/),
  N2 = me2(' 	'),
  dt2 = me2(',; 	'),
  mt2 = me2(/[^\n\r]/);
function fo2(e, t8, r) {
  let n = !!(r != null && r.backwards);
  if (t8 === !1) return !1;
  let o = e.charAt(t8);
  if (n) {
    if (
      e.charAt(t8 - 1) === '\r' &&
      o ===
        `
`
    )
      return t8 - 2;
    if (
      o ===
        `
` ||
      o === '\r' ||
      o === '\u2028' ||
      o === '\u2029'
    )
      return t8 - 1;
  } else {
    if (
      o === '\r' &&
      e.charAt(t8 + 1) ===
        `
`
    )
      return t8 + 2;
    if (
      o ===
        `
` ||
      o === '\r' ||
      o === '\u2028' ||
      o === '\u2029'
    )
      return t8 + 1;
  }
  return t8;
}
var Y2 = fo2;
function Fo(e, t8, r = {}) {
  let n = N2(e, r.backwards ? t8 - 1 : t8, r),
    o = Y2(e, n, r);
  return n !== o;
}
var V2 = Fo;
function po2(e) {
  return Array.isArray(e) && e.length > 0;
}
var Mt2 = po2;
function mo2(e) {
  return e !== null && typeof e == 'object';
}
var kn2 = mo2;
function* Wt2(e, t8) {
  let { getVisitorKeys: r, filter: n = () => !0 } = t8,
    o = (u) => kn2(u) && n(u);
  for (let u of r(e)) {
    let i = e[u];
    if (Array.isArray(i)) for (let s of i) o(s) && (yield s);
    else o(i) && (yield i);
  }
}
function* bn2(e, t8) {
  let r = [e];
  for (let n = 0; n < r.length; n++) {
    let o = r[n];
    for (let u of Wt2(o, t8)) yield u, r.push(u);
  }
}
function Eo2(e) {
  let t8 = e.type || e.kind || '(unknown type)',
    r = String(
      e.name ||
        (e.id && (typeof e.id == 'object' ? e.id.name : e.id)) ||
        (e.key && (typeof e.key == 'object' ? e.key.name : e.key)) ||
        (e.value && (typeof e.value == 'object' ? '' : String(e.value))) ||
        e.operator ||
        ''
    );
  return (
    r.length > 20 && (r = r.slice(0, 19) + '\u2026'), t8 + (r ? ' ' + r : '')
  );
}
function Ut2(e, t8) {
  (e.comments ?? (e.comments = [])).push(t8),
    (t8.printed = !1),
    (t8.nodeDescription = Eo2(e));
}
function ne2(e, t8) {
  (t8.leading = !0), (t8.trailing = !1), Ut2(e, t8);
}
function X2(e, t8, r) {
  (t8.leading = !1), (t8.trailing = !1), r && (t8.marker = r), Ut2(e, t8);
}
function ue2(e, t8) {
  (t8.leading = !1), (t8.trailing = !0), Ut2(e, t8);
}
var zt2 = new WeakMap();
function Et2(e, t8) {
  if (zt2.has(e)) return zt2.get(e);
  let {
    printer: {
      getCommentChildNodes: r,
      canAttachComment: n,
      getVisitorKeys: o,
    },
    locStart: u,
    locEnd: i,
  } = t8;
  if (!n) return [];
  let s = (r?.(e, t8) ?? [...Wt2(e, { getVisitorKeys: H2(o) })]).flatMap((D) =>
    n(D) ? [D] : Et2(D, t8)
  );
  return s.sort((D, a) => u(D) - u(a) || i(D) - i(a)), zt2.set(e, s), s;
}
function On2(e, t8, r, n) {
  let { locStart: o, locEnd: u } = r,
    i = o(t8),
    s = u(t8),
    D = Et2(e, r),
    a,
    c,
    d = 0,
    f2 = D.length;
  for (; d < f2; ) {
    let p = (d + f2) >> 1,
      l = D[p],
      F2 = o(l),
      m = u(l);
    if (F2 <= i && s <= m) return On2(l, t8, r, l);
    if (m <= i) {
      (a = l), (d = p + 1);
      continue;
    }
    if (s <= F2) {
      (c = l), (f2 = p);
      continue;
    }
    throw new Error('Comment location overlaps with node location');
  }
  if (n?.type === 'TemplateLiteral') {
    let { quasis: p } = n,
      l = Kt2(p, t8, r);
    a && Kt2(p, a, r) !== l && (a = null),
      c && Kt2(p, c, r) !== l && (c = null);
  }
  return { enclosingNode: n, precedingNode: a, followingNode: c };
}
var Gt = () => !1;
function Nn2(e, t8) {
  let { comments: r } = e;
  if ((delete e.comments, !Mt2(r) || !t8.printer.canAttachComment)) return;
  let n = [],
    {
      locStart: o,
      locEnd: u,
      printer: {
        experimentalFeatures: { avoidAstMutation: i = !1 } = {},
        handleComments: s = {},
      },
      originalText: D,
    } = t8,
    { ownLine: a = Gt, endOfLine: c = Gt, remaining: d = Gt } = s,
    f2 = r.map((p, l) => ({
      ...On2(e, p, t8),
      comment: p,
      text: D,
      options: t8,
      ast: e,
      isLastComment: r.length - 1 === l,
    }));
  for (let [p, l] of f2.entries()) {
    let {
      comment: F2,
      precedingNode: m,
      enclosingNode: E2,
      followingNode: C,
      text: g,
      options: h2,
      ast: B,
      isLastComment: Z,
    } = l;
    if (
      h2.parser === 'json' ||
      h2.parser === 'json5' ||
      h2.parser === '__js_expression' ||
      h2.parser === '__ts_expression' ||
      h2.parser === '__vue_expression' ||
      h2.parser === '__vue_ts_expression'
    ) {
      if (o(F2) - o(B) <= 0) {
        ne2(B, F2);
        continue;
      }
      if (u(F2) - u(B) >= 0) {
        ue2(B, F2);
        continue;
      }
    }
    let $;
    if (
      (i
        ? ($ = [l])
        : ((F2.enclosingNode = E2),
          (F2.precedingNode = m),
          (F2.followingNode = C),
          ($ = [F2, g, h2, B, Z])),
      Co2(g, h2, f2, p))
    )
      (F2.placement = 'ownLine'),
        a(...$) || (C ? ne2(C, F2) : m ? ue2(m, F2) : X2(E2 || B, F2));
    else if (ho2(g, h2, f2, p))
      (F2.placement = 'endOfLine'),
        c(...$) || (m ? ue2(m, F2) : C ? ne2(C, F2) : X2(E2 || B, F2));
    else if (((F2.placement = 'remaining'), !d(...$)))
      if (m && C) {
        let Q2 = n.length;
        Q2 > 0 && n[Q2 - 1].followingNode !== C && wn2(n, h2), n.push(l);
      } else m ? ue2(m, F2) : C ? ne2(C, F2) : X2(E2 || B, F2);
  }
  if ((wn2(n, t8), !i))
    for (let p of r)
      delete p.precedingNode, delete p.enclosingNode, delete p.followingNode;
}
var Tn2 = (e) => !/[\S\n\u2028\u2029]/.test(e);
function Co2(e, t8, r, n) {
  let { comment: o, precedingNode: u } = r[n],
    { locStart: i, locEnd: s } = t8,
    D = i(o);
  if (u)
    for (let a = n - 1; a >= 0; a--) {
      let { comment: c, precedingNode: d } = r[a];
      if (d !== u || !Tn2(e.slice(s(c), D))) break;
      D = i(c);
    }
  return V2(e, D, { backwards: !0 });
}
function ho2(e, t8, r, n) {
  let { comment: o, followingNode: u } = r[n],
    { locStart: i, locEnd: s } = t8,
    D = s(o);
  if (u)
    for (let a = n + 1; a < r.length; a++) {
      let { comment: c, followingNode: d } = r[a];
      if (d !== u || !Tn2(e.slice(D, i(c)))) break;
      D = s(c);
    }
  return V2(e, D);
}
function wn2(e, t8) {
  var s, D;
  let r = e.length;
  if (r === 0) return;
  let { precedingNode: n, followingNode: o } = e[0],
    u = t8.locStart(o),
    i;
  for (i = r; i > 0; --i) {
    let { comment: a, precedingNode: c, followingNode: d } = e[i - 1];
    Re2.strictEqual(c, n), Re2.strictEqual(d, o);
    let f2 = t8.originalText.slice(t8.locEnd(a), u);
    if (
      ((D = (s = t8.printer).isGap) == null ? void 0 : D.call(s, f2, t8)) ??
      /^[\s(]*$/.test(f2)
    )
      u = t8.locStart(a);
    else break;
  }
  for (let [a, { comment: c }] of e.entries()) a < i ? ue2(n, c) : ne2(o, c);
  for (let a of [n, o])
    a.comments &&
      a.comments.length > 1 &&
      a.comments.sort((c, d) => t8.locStart(c) - t8.locStart(d));
  e.length = 0;
}
function Kt2(e, t8, r) {
  let n = r.locStart(t8) - 1;
  for (let o = 1; o < e.length; ++o) if (n < r.locStart(e[o])) return o - 1;
  return 0;
}
function go2(e, t8) {
  let r = t8 - 1;
  (r = N2(e, r, { backwards: !0 })),
    (r = Y2(e, r, { backwards: !0 })),
    (r = N2(e, r, { backwards: !0 }));
  let n = Y2(e, r, { backwards: !0 });
  return r !== n;
}
var Ye2 = go2;
function Sn2(e, t8) {
  let r = e.node;
  return (r.printed = !0), t8.printer.printComment(e, t8);
}
function yo2(e, t8) {
  var c;
  let r = e.node,
    n = [Sn2(e, t8)],
    { printer: o, originalText: u, locStart: i, locEnd: s } = t8;
  if ((c = o.isBlockComment) != null && c.call(o, r)) {
    let d = V2(u, s(r)) ? (V2(u, i(r), { backwards: !0 }) ? G2 : Ke2) : ' ';
    n.push(d);
  } else n.push(G2);
  let a = Y2(u, N2(u, s(r)));
  return a !== !1 && V2(u, a) && n.push(G2), n;
}
function Ao2(e, t8, r) {
  var a;
  let n = e.node,
    o = Sn2(e, t8),
    { printer: u, originalText: i, locStart: s } = t8,
    D = (a = u.isBlockComment) == null ? void 0 : a.call(u, n);
  if (
    (r != null && r.hasLineSuffix && !(r != null && r.isBlock)) ||
    V2(i, s(n), { backwards: !0 })
  ) {
    let c = Ye2(i, s(n));
    return { doc: Be2([G2, c ? G2 : '', o]), isBlock: D, hasLineSuffix: !0 };
  }
  return !D || (r != null && r.hasLineSuffix)
    ? { doc: [Be2([' ', o]), le2], isBlock: D, hasLineSuffix: !0 }
    : { doc: [' ', o], isBlock: D, hasLineSuffix: !1 };
}
function Bo(e, t8) {
  let r = e.node;
  if (!r) return {};
  let n = t8[Symbol.for('printedComments')];
  if ((r.comments || []).filter((D) => !n.has(D)).length === 0)
    return { leading: '', trailing: '' };
  let u = [],
    i = [],
    s;
  return (
    e.each(() => {
      let D = e.node;
      if (n != null && n.has(D)) return;
      let { leading: a, trailing: c } = D;
      a ? u.push(yo2(e, t8)) : c && ((s = Ao2(e, t8, s)), i.push(s.doc));
    }, 'comments'),
    { leading: u, trailing: i }
  );
}
function vn2(e, t8, r) {
  let { leading: n, trailing: o } = Bo(e, r);
  return !n && !o ? t8 : Ze2(t8, (u) => [n, u, o]);
}
function Pn(e) {
  let { [Symbol.for('comments')]: t8, [Symbol.for('printedComments')]: r } = e;
  for (let n of t8) {
    if (!n.printed && !r.has(n))
      throw new Error(
        'Comment "' +
          n.value.trim() +
          '" was not printed. Please report this error!'
      );
    delete n.printed;
  }
}
async function Ln2(e, t8, r, n, o) {
  let {
    embeddedLanguageFormatting: u,
    printer: { embed: i, hasPrettierIgnore: s = () => !1, getVisitorKeys: D },
  } = r;
  if (!i || u !== 'auto') return;
  if (i.length > 2)
    throw new Error(
      'printer.embed has too many parameters. The API changed in Prettier v3. Please update your plugin. See https://prettier.io/docs/en/plugins.html#optional-embed'
    );
  let a = H2(i.getVisitorKeys ?? D),
    c = [];
  p();
  let d = e.stack;
  for (let { print: l, node: F2, pathStack: m } of c)
    try {
      e.stack = m;
      let E2 = await l(f2, t8, e, r);
      E2 && o.set(F2, E2);
    } catch (E2) {
      if (globalThis.PRETTIER_DEBUG) throw E2;
    }
  e.stack = d;
  function f2(l, F2) {
    return _o2(l, F2, r, n);
  }
  function p() {
    let { node: l } = e;
    if (l === null || typeof l != 'object' || s(e)) return;
    for (let m of a(l)) Array.isArray(l[m]) ? e.each(p, m) : e.call(p, m);
    let F2 = i(e, r);
    if (F2) {
      if (typeof F2 == 'function') {
        c.push({ print: F2, node: l, pathStack: [...e.stack] });
        return;
      }
      o.set(l, F2);
    }
  }
}
async function _o2(e, t8, r, n) {
  let o = await re2(
      { ...r, ...t8, parentParser: r.parser, originalText: e },
      { passThrough: !0 }
    ),
    { ast: u } = await De2(e, o),
    i = await n(u, o);
  return Xe2(i);
}
function ko(e, t8) {
  let {
      originalText: r,
      [Symbol.for('comments')]: n,
      locStart: o,
      locEnd: u,
      [Symbol.for('printedComments')]: i,
    } = t8,
    { node: s } = e,
    D = o(s),
    a = u(s);
  for (let c of n) o(c) >= D && u(c) <= a && i.add(c);
  return r.slice(D, a);
}
var Rn2 = ko;
async function je2(e, t8) {
  ({ ast: e } = await Ht2(e, t8));
  let r = new Map(),
    n = new Bn2(e),
    u = new Map();
  await Ln2(n, s, t8, je2, u);
  let i = await Yn2(n, t8, s, void 0, u);
  return Pn(t8), i;
  function s(a, c) {
    return a === void 0 || a === n
      ? D(c)
      : Array.isArray(a)
      ? n.call(() => D(c), ...a)
      : n.call(() => D(c), a);
  }
  function D(a) {
    let c = n.node;
    if (c == null) return '';
    let d = c && typeof c == 'object' && a === void 0;
    if (d && r.has(c)) return r.get(c);
    let f2 = Yn2(n, t8, s, a, u);
    return d && r.set(c, f2), f2;
  }
}
function Yn2(e, t8, r, n, o) {
  var D;
  let { node: u } = e,
    { printer: i } = t8,
    s;
  return (
    (D = i.hasPrettierIgnore) != null && D.call(i, e)
      ? (s = Rn2(e, t8))
      : o.has(u)
      ? (s = o.get(u))
      : (s = i.print(e, t8, r, n)),
    u === t8.cursorNode && (s = Ze2(s, (a) => [xe2, a, xe2])),
    i.printComment &&
      (!i.willPrintOwnComments || !i.willPrintOwnComments(e, t8)) &&
      (s = vn2(e, s, t8)),
    s
  );
}
async function Ht2(e, t8) {
  let r = e.comments ?? [];
  (t8[Symbol.for('comments')] = r),
    (t8[Symbol.for('tokens')] = e.tokens ?? []),
    (t8[Symbol.for('printedComments')] = new Set()),
    Nn2(e, t8);
  let {
    printer: { preprocess: n },
  } = t8;
  return (e = n ? await n(e, t8) : e), { ast: e, comments: r };
}
var bo2 = ({ parser: e }) =>
  e === 'json' || e === 'json5' || e === 'json-stringify';
function wo2(e, t8) {
  let r = [e.node, ...e.parentNodes],
    n = new Set([t8.node, ...t8.parentNodes]);
  return r.find((o) => $n2.has(o.type) && n.has(o));
}
function jn2(e) {
  let t8 = e.length - 1;
  for (;;) {
    let r = e[t8];
    if (r?.type === 'Program' || r?.type === 'File') t8--;
    else break;
  }
  return e.slice(0, t8 + 1);
}
function Oo(e, t8, { locStart: r, locEnd: n }) {
  let o = e.node,
    u = t8.node;
  if (o === u) return { startNode: o, endNode: u };
  let i = r(e.node);
  for (let D of jn2(t8.parentNodes))
    if (r(D) >= i) u = D;
    else break;
  let s = n(t8.node);
  for (let D of jn2(e.parentNodes)) {
    if (n(D) <= s) o = D;
    else break;
    if (o === u) break;
  }
  return { startNode: o, endNode: u };
}
function qt2(e, t8, r, n, o = [], u) {
  let { locStart: i, locEnd: s } = r,
    D = i(e),
    a = s(e);
  if (
    !(
      t8 > a ||
      t8 < D ||
      (u === 'rangeEnd' && t8 === D) ||
      (u === 'rangeStart' && t8 === a)
    )
  ) {
    for (let c of Et2(e, r)) {
      let d = qt2(c, t8, r, n, [e, ...o], u);
      if (d) return d;
    }
    if (!n || n(e, o[0])) return { node: e, parentNodes: o };
  }
}
function No(e, t8) {
  return (
    t8 !== 'DeclareExportDeclaration' &&
    e !== 'TypeParameterDeclaration' &&
    (e === 'Directive' ||
      e === 'TypeAlias' ||
      e === 'TSExportAssignment' ||
      e.startsWith('Declare') ||
      e.startsWith('TSDeclare') ||
      e.endsWith('Statement') ||
      e.endsWith('Declaration'))
  );
}
var $n2 = new Set([
    'JsonRoot',
    'ObjectExpression',
    'ArrayExpression',
    'StringLiteral',
    'NumericLiteral',
    'BooleanLiteral',
    'NullLiteral',
    'UnaryExpression',
    'TemplateLiteral',
  ]),
  To2 = new Set([
    'OperationDefinition',
    'FragmentDefinition',
    'VariableDefinition',
    'TypeExtensionDefinition',
    'ObjectTypeDefinition',
    'FieldDefinition',
    'DirectiveDefinition',
    'EnumTypeDefinition',
    'EnumValueDefinition',
    'InputValueDefinition',
    'InputObjectTypeDefinition',
    'SchemaDefinition',
    'OperationTypeDefinition',
    'InterfaceTypeDefinition',
    'UnionTypeDefinition',
    'ScalarTypeDefinition',
  ]);
function Vn2(e, t8, r) {
  if (!t8) return !1;
  switch (e.parser) {
    case 'flow':
    case 'babel':
    case 'babel-flow':
    case 'babel-ts':
    case 'typescript':
    case 'acorn':
    case 'espree':
    case 'meriyah':
    case '__babel_estree':
      return No(t8.type, r?.type);
    case 'json':
    case 'json5':
    case 'json-stringify':
      return $n2.has(t8.type);
    case 'graphql':
      return To2.has(t8.kind);
    case 'vue':
      return t8.tag !== 'root';
  }
  return !1;
}
function Mn2(e, t8, r) {
  let { rangeStart: n, rangeEnd: o, locStart: u, locEnd: i } = t8;
  Re2.ok(o > n);
  let s = e.slice(n, o).search(/\S/),
    D = s === -1;
  if (!D) for (n += s; o > n && !/\S/.test(e[o - 1]); --o);
  let a = qt2(r, n, t8, (p, l) => Vn2(t8, p, l), [], 'rangeStart'),
    c = D ? a : qt2(r, o, t8, (p) => Vn2(t8, p), [], 'rangeEnd');
  if (!a || !c) return { rangeStart: 0, rangeEnd: 0 };
  let d, f2;
  if (bo2(t8)) {
    let p = wo2(a, c);
    (d = p), (f2 = p);
  } else ({ startNode: d, endNode: f2 } = Oo(a, c, t8));
  return { rangeStart: Math.min(u(d), u(f2)), rangeEnd: Math.max(i(d), i(f2)) };
}
function So2(e, t8) {
  let { cursorOffset: r, locStart: n, locEnd: o } = t8,
    u = H2(t8.printer.getVisitorKeys),
    i = (D) => n(D) <= r && o(D) >= r,
    s = e;
  for (let D of bn2(e, { getVisitorKeys: u, filter: i })) s = D;
  return s;
}
var Wn2 = So2,
  Hn2 = '\uFEFF',
  Un2 = Symbol('cursor');
async function qn2(e, t8, r = 0) {
  if (!e || e.trim().length === 0)
    return { formatted: '', cursorOffset: -1, comments: [] };
  let { ast: n, text: o } = await De2(e, t8);
  t8.cursorOffset >= 0 && (t8.cursorNode = Wn2(n, t8));
  let u = await je2(n, t8);
  r > 0 && (u = qe2([G2, u], r, t8.tabWidth));
  let i = fe2(u, t8);
  if (r > 0) {
    let D = i.formatted.trim();
    i.cursorNodeStart !== void 0 &&
      (i.cursorNodeStart -= i.formatted.indexOf(D)),
      (i.formatted = D + be2(t8.endOfLine));
  }
  let s = t8[Symbol.for('comments')];
  if (t8.cursorOffset >= 0) {
    let D, a, c, d, f2;
    if (
      (t8.cursorNode && i.cursorNodeText
        ? ((D = t8.locStart(t8.cursorNode)),
          (a = o.slice(D, t8.locEnd(t8.cursorNode))),
          (c = t8.cursorOffset - D),
          (d = i.cursorNodeStart),
          (f2 = i.cursorNodeText))
        : ((D = 0),
          (a = o),
          (c = t8.cursorOffset),
          (d = 0),
          (f2 = i.formatted)),
      a === f2)
    )
      return { formatted: i.formatted, cursorOffset: d + c, comments: s };
    let p = a.split('');
    p.splice(c, 0, Un2);
    let l = f2.split(''),
      F2 = (0, Kn2.diffArrays)(p, l),
      m = d;
    for (let E2 of F2)
      if (E2.removed) {
        if (E2.value.includes(Un2)) break;
      } else m += E2.count;
    return { formatted: i.formatted, cursorOffset: m, comments: s };
  }
  return { formatted: i.formatted, cursorOffset: -1, comments: s };
}
async function vo2(e, t8) {
  let { ast: r, text: n } = await De2(e, t8),
    { rangeStart: o, rangeEnd: u } = Mn2(n, t8, r),
    i = n.slice(o, u),
    s = Math.min(
      o,
      n.lastIndexOf(
        `
`,
        o
      ) + 1
    ),
    D = n.slice(s, o).match(/^\s*/)[0],
    a = Fe2(D, t8.tabWidth),
    c = await qn2(
      i,
      {
        ...t8,
        rangeStart: 0,
        rangeEnd: Number.POSITIVE_INFINITY,
        cursorOffset:
          t8.cursorOffset > o && t8.cursorOffset <= u
            ? t8.cursorOffset - o
            : -1,
        endOfLine: 'lf',
      },
      a
    ),
    d = c.formatted.trimEnd(),
    { cursorOffset: f2 } = t8;
  f2 > u
    ? (f2 += d.length - i.length)
    : c.cursorOffset >= 0 && (f2 = c.cursorOffset + o);
  let p = n.slice(0, o) + d + n.slice(u);
  if (t8.endOfLine !== 'lf') {
    let l = be2(t8.endOfLine);
    f2 >= 0 &&
      l ===
        `\r
` &&
      (f2 += _t2(
        p.slice(0, f2),
        `
`
      )),
      (p = ee2(
        !1,
        p,
        `
`,
        l
      ));
  }
  return { formatted: p, cursorOffset: f2, comments: c.comments };
}
function Jt2(e, t8, r) {
  return typeof t8 != 'number' || Number.isNaN(t8) || t8 < 0 || t8 > e.length
    ? r
    : t8;
}
function zn2(e, t8) {
  let { cursorOffset: r, rangeStart: n, rangeEnd: o } = t8;
  return (
    (r = Jt2(e, r, -1)),
    (n = Jt2(e, n, 0)),
    (o = Jt2(e, o, e.length)),
    { ...t8, cursorOffset: r, rangeStart: n, rangeEnd: o }
  );
}
function Jn2(e, t8) {
  let {
      cursorOffset: r,
      rangeStart: n,
      rangeEnd: o,
      endOfLine: u,
    } = zn2(e, t8),
    i = e.charAt(0) === Hn2;
  if (
    (i && ((e = e.slice(1)), r--, n--, o--),
    u === 'auto' && (u = hr2(e)),
    e.includes('\r'))
  ) {
    let s = (D) =>
      _t2(
        e.slice(0, Math.max(D, 0)),
        `\r
`
      );
    (r -= s(r)), (n -= s(n)), (o -= s(o)), (e = gr2(e));
  }
  return {
    hasBOM: i,
    text: e,
    options: zn2(e, {
      ...t8,
      cursorOffset: r,
      rangeStart: n,
      rangeEnd: o,
      endOfLine: u,
    }),
  };
}
async function Gn2(e, t8) {
  let r = await ft2(t8);
  return !r.hasPragma || r.hasPragma(e);
}
async function Xt2(e, t8) {
  let { hasBOM: r, text: n, options: o } = Jn2(e, await re2(t8));
  if (
    (o.rangeStart >= o.rangeEnd && n !== '') ||
    (o.requirePragma && !(await Gn2(n, o)))
  )
    return { formatted: e, cursorOffset: t8.cursorOffset, comments: [] };
  let u;
  return (
    o.rangeStart > 0 || o.rangeEnd < n.length
      ? (u = await vo2(n, o))
      : (!o.requirePragma &&
          o.insertPragma &&
          o.printer.insertPragma &&
          !(await Gn2(n, o)) &&
          (n = o.printer.insertPragma(n)),
        (u = await qn2(n, o))),
    r &&
      ((u.formatted = Hn2 + u.formatted),
      u.cursorOffset >= 0 && u.cursorOffset++),
    u
  );
}
async function Xn2(e, t8, r) {
  let { text: n, options: o } = Jn2(e, await re2(t8)),
    u = await De2(n, o);
  return (
    r &&
      (r.preprocessForPrint && (u.ast = await Ht2(u.ast, o)),
      r.massage && (u.ast = fn2(u.ast, o))),
    u
  );
}
async function Zn2(e, t8) {
  t8 = await re2(t8);
  let r = await je2(e, t8);
  return fe2(r, t8);
}
async function Qn2(e, t8) {
  let r = Pr2(e),
    { formatted: n } = await Xt2(r, { ...t8, parser: '__js_expression' });
  return n;
}
async function eu(e, t8) {
  t8 = await re2(t8);
  let { ast: r } = await De2(e, t8);
  return je2(r, t8);
}
async function tu(e, t8) {
  return fe2(e, await re2(t8));
}
var Qt2 = {};
We(Qt2, {
  addDanglingComment: () => X2,
  addLeadingComment: () => ne2,
  addTrailingComment: () => ue2,
  getAlignmentSize: () => Fe2,
  getIndentSize: () => nu,
  getMaxContinuousCount: () => ru,
  getNextNonSpaceNonCommentCharacter: () => iu,
  getNextNonSpaceNonCommentCharacterIndex: () => Go,
  getStringWidth: () => we2,
  hasNewline: () => V2,
  hasNewlineInRange: () => uu,
  hasSpaces: () => ou,
  isNextLineEmpty: () => Jo,
  isNextLineEmptyAfterIndex: () => Ct2,
  isPreviousLineEmpty: () => Ho,
  makeString: () => su,
  skip: () => me2,
  skipEverythingButNewLine: () => mt2,
  skipInlineComment: () => Ee2,
  skipNewline: () => Y2,
  skipSpaces: () => N2,
  skipToLineEnd: () => dt2,
  skipTrailingComment: () => Ce2,
  skipWhitespace: () => xn2,
});
function Lo(e, t8) {
  if (t8 === !1) return !1;
  if (e.charAt(t8) === '/' && e.charAt(t8 + 1) === '*') {
    for (let r = t8 + 2; r < e.length; ++r)
      if (e.charAt(r) === '*' && e.charAt(r + 1) === '/') return r + 2;
  }
  return t8;
}
var Ee2 = Lo;
function Io(e, t8) {
  return t8 === !1
    ? !1
    : e.charAt(t8) === '/' && e.charAt(t8 + 1) === '/'
    ? mt2(e, t8)
    : t8;
}
var Ce2 = Io;
function Ro(e, t8) {
  let r = null,
    n = t8;
  for (; n !== r; )
    (r = n), (n = N2(e, n)), (n = Ee2(e, n)), (n = Ce2(e, n)), (n = Y2(e, n));
  return n;
}
var Ve2 = Ro;
function Yo(e, t8) {
  let r = null,
    n = t8;
  for (; n !== r; ) (r = n), (n = dt2(e, n)), (n = Ee2(e, n)), (n = N2(e, n));
  return (n = Ce2(e, n)), (n = Y2(e, n)), n !== !1 && V2(e, n);
}
var Ct2 = Yo;
function Zt2(e) {
  if (typeof e != 'string') throw new TypeError('Expected a string');
  return e.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');
}
function jo(e, t8) {
  let r = e.match(new RegExp(`(${Zt2(t8)})+`, 'g'));
  return r === null
    ? 0
    : r.reduce((n, o) => Math.max(n, o.length / t8.length), 0);
}
var ru = jo;
function Vo(e, t8) {
  let r = e.lastIndexOf(`
`);
  return r === -1 ? 0 : Fe2(e.slice(r + 1).match(/^[\t ]*/)[0], t8);
}
var nu = Vo;
function $o(e, t8, r) {
  for (let n = t8; n < r; ++n)
    if (
      e.charAt(n) ===
      `
`
    )
      return !0;
  return !1;
}
var uu = $o;
function Mo(e, t8, r = {}) {
  return N2(e, r.backwards ? t8 - 1 : t8, r) !== t8;
}
var ou = Mo;
function Wo(e, t8) {
  let r = Ve2(e, t8);
  return r === !1 ? '' : e.charAt(r);
}
var iu = Wo;
function Uo(e, t8, r) {
  let n = t8 === '"' ? "'" : '"',
    u = ee2(!1, e, /\\(.)|(["'])/gs, (i, s, D) =>
      s === n
        ? s
        : D === t8
        ? '\\' + D
        : D ||
          (r && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(s) ? s : '\\' + s)
    );
  return t8 + u + t8;
}
var su = Uo;
function zo(e, t8, r) {
  return Ve2(e, r(t8));
}
function Go(e, t8) {
  return arguments.length === 2 || typeof t8 == 'number'
    ? Ve2(e, t8)
    : zo(...arguments);
}
function Ko(e, t8, r) {
  return Ye2(e, r(t8));
}
function Ho(e, t8) {
  return arguments.length === 2 || typeof t8 == 'number'
    ? Ye2(e, t8)
    : Ko(...arguments);
}
function qo(e, t8, r) {
  return Ct2(e, r(t8));
}
function Jo(e, t8) {
  return arguments.length === 2 || typeof t8 == 'number'
    ? Ct2(e, t8)
    : qo(...arguments);
}
var er2 = {};
We(er2, { builders: () => Xo, printer: () => Zo, utils: () => Qo });
var Xo = {
    join: ke2,
    line: Ke2,
    softline: Er2,
    hardline: G2,
    literalline: He2,
    group: At2,
    conditionalGroup: fr2,
    fill: Ge2,
    lineSuffix: Be2,
    lineSuffixBoundary: dr2,
    cursor: xe2,
    breakParent: le2,
    ifBreak: Fr2,
    trim: mr2,
    indent: ie2,
    indentIfBreak: pr2,
    align: oe2,
    addAlignmentToDoc: qe2,
    markAsRoot: cr2,
    dedentToRoot: ar2,
    dedent: lr2,
    hardlineWithoutBreakParent: _e2,
    literallineWithoutBreakParent: Bt2,
    label: Cr2,
    concat: (e) => e,
  },
  Zo = { printDocToString: fe2 },
  Qo = {
    willBreak: wr2,
    traverseDoc: Ae2,
    findInDoc: Je2,
    mapDoc: Ne2,
    removeLines: Nr2,
    stripTrailingHardline: Xe2,
    replaceEndOfLine: Tr2,
    canBreak: Sr2,
  },
  Du = '3.1.1';
function ae(e, t8 = 1) {
  return async (...r) => {
    let n = r[t8] ?? {},
      o = n.plugins ?? [];
    return (
      (r[t8] = { ...n, plugins: Array.isArray(o) ? o : Object.values(o) }),
      e(...r)
    );
  };
}
var au = ae(Xt2);
async function cu(e, t8) {
  let { formatted: r } = await au(e, { ...t8, cursorOffset: -1 });
  return r;
}
async function ei2(e, t8) {
  return (await cu(e, t8)) === e;
}
var ti2 = ae(et2, 0),
  ri2 = {
    parse: ae(Xn2),
    formatAST: ae(Zn2),
    formatDoc: ae(Qn2),
    printToDoc: ae(eu),
    printDocToString: ae(tu),
  },
  qc = tr2;
function dedent(templ) {
  for (var values = [], _i2 = 1; _i2 < arguments.length; _i2++)
    values[_i2 - 1] = arguments[_i2];
  var strings = Array.from(typeof templ == 'string' ? [templ] : templ);
  strings[strings.length - 1] = strings[strings.length - 1].replace(
    /\r?\n([\t ]*)$/,
    ''
  );
  var indentLengths = strings.reduce(function (arr, str) {
    var matches = str.match(/\n([\t ]+|(?!\s).)/g);
    return matches
      ? arr.concat(
          matches.map(function (match) {
            var _a2, _b;
            return (_b =
              (_a2 = match.match(/[\t ]/g)) === null || _a2 === void 0
                ? void 0
                : _a2.length) !== null && _b !== void 0
              ? _b
              : 0;
          })
        )
      : arr;
  }, []);
  if (indentLengths.length) {
    var pattern_1 = new RegExp(
      `
[	 ]{` +
        Math.min.apply(Math, indentLengths) +
        '}',
      'g'
    );
    strings = strings.map(function (str) {
      return str.replace(
        pattern_1,
        `
`
      );
    });
  }
  strings[0] = strings[0].replace(/^\r?\n/, '');
  var string = strings[0];
  return (
    values.forEach(function (value, i) {
      var endentations = string.match(/(?:^|\n)( *)$/),
        endentation = endentations ? endentations[1] : '',
        indentedValue = value;
      typeof value == 'string' &&
        value.includes(`
`) &&
        (indentedValue = String(value)
          .split(
            `
`
          )
          .map(function (str, i2) {
            return i2 === 0 ? str : '' + endentation + str;
          }).join(`
`)),
        (string += indentedValue + strings[i + 1]);
    }),
    string
  );
}
var formatter = (0, import_memoizerific.default)(2)(async (type, source) =>
  type === !1
    ? source
    : type === 'dedent' || type === !0
    ? dedent(source)
    : (
        await qc.format(source, {
          parser: type,
          plugins: [dh],
          htmlWhitespaceSensitivity: 'ignore',
        })
      ).trim()
);
export { formatter };
