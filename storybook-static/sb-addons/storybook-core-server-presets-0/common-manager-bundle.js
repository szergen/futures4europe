try {
  (() => {
    var u = Object.defineProperty;
    var T = Object.getOwnPropertyDescriptor;
    var h = Object.getOwnPropertyNames;
    var v = Object.prototype.hasOwnProperty;
    var i = (e, t) => () => (e && (t = e((e = 0))), t);
    var P = (e, t) => () => (
        t || e((t = { exports: {} }).exports, t), t.exports
      ),
      w = (e, t) => {
        for (var r in t) u(e, r, { get: t[r], enumerable: !0 });
      },
      x = (e, t, r, a) => {
        if ((t && typeof t == 'object') || typeof t == 'function')
          for (let o of h(t))
            !v.call(e, o) &&
              o !== r &&
              u(e, o, {
                get: () => t[o],
                enumerable: !(a = T(t, o)) || a.enumerable,
              });
        return e;
      };
    var A = (e) => x(u({}, '__esModule', { value: !0 }), e);
    var s = i(() => {});
    var l = i(() => {});
    var n = i(() => {});
    var d = {};
    w(d, {
      ActiveTabs: () => M,
      Consumer: () => j,
      ManagerContext: () => C,
      Provider: () => I,
      addons: () => F,
      combineParameters: () => G,
      controlOrMetaKey: () => K,
      controlOrMetaSymbol: () => N,
      default: () => k,
      eventMatchesShortcut: () => R,
      eventToShortcut: () => q,
      isMacLike: () => B,
      isShortcutTaken: () => D,
      keyToSymbol: () => L,
      merge: () => Y,
      mockChannel: () => E,
      optionOrAltSymbol: () => H,
      shortcutMatchesShortcut: () => J,
      shortcutToHumanString: () => z,
      types: () => Q,
      useAddonState: () => U,
      useArgTypes: () => V,
      useArgs: () => W,
      useChannel: () => X,
      useGlobalTypes: () => Z,
      useGlobals: () => $,
      useParameter: () => ee,
      useSharedState: () => te,
      useStoryPrepared: () => re,
      useStorybookApi: () => oe,
      useStorybookState: () => ae,
    });
    var k,
      M,
      j,
      C,
      I,
      F,
      G,
      K,
      N,
      R,
      q,
      B,
      D,
      L,
      Y,
      E,
      H,
      J,
      z,
      Q,
      U,
      V,
      W,
      X,
      Z,
      $,
      ee,
      te,
      re,
      oe,
      ae,
      g = i(() => {
        s();
        l();
        n();
        (k = __STORYBOOK_API__),
          ({
            ActiveTabs: M,
            Consumer: j,
            ManagerContext: C,
            Provider: I,
            addons: F,
            combineParameters: G,
            controlOrMetaKey: K,
            controlOrMetaSymbol: N,
            eventMatchesShortcut: R,
            eventToShortcut: q,
            isMacLike: B,
            isShortcutTaken: D,
            keyToSymbol: L,
            merge: Y,
            mockChannel: E,
            optionOrAltSymbol: H,
            shortcutMatchesShortcut: J,
            shortcutToHumanString: z,
            types: Q,
            useAddonState: U,
            useArgTypes: V,
            useArgs: W,
            useChannel: X,
            useGlobalTypes: Z,
            useGlobals: $,
            useParameter: ee,
            useSharedState: te,
            useStoryPrepared: re,
            useStorybookApi: oe,
            useStorybookState: ae,
          } = __STORYBOOK_API__);
      });
    var O = P((Pe, f) => {
      'use strict';
      s();
      l();
      n();
      var b = Object.defineProperty,
        se = Object.getOwnPropertyDescriptor,
        le = Object.getOwnPropertyNames,
        ne = Object.prototype.hasOwnProperty,
        ie = (e, t) => {
          for (var r in t) b(e, r, { get: t[r], enumerable: !0 });
        },
        ue = (e, t, r, a) => {
          if ((t && typeof t == 'object') || typeof t == 'function')
            for (let o of le(t))
              !ne.call(e, o) &&
                o !== r &&
                b(e, o, {
                  get: () => t[o],
                  enumerable: !(a = se(t, o)) || a.enumerable,
                });
          return e;
        },
        pe = (e) => ue(b({}, '__esModule', { value: !0 }), e),
        y = {};
      ie(y, { global: () => _e });
      f.exports = pe(y);
      var _e = (() => {
        let e;
        return (
          typeof window < 'u'
            ? (e = window)
            : typeof globalThis < 'u'
            ? (e = globalThis)
            : typeof window < 'u'
            ? (e = window)
            : typeof self < 'u'
            ? (e = self)
            : (e = {}),
          e
        );
      })();
    });
    s();
    l();
    n();
    s();
    l();
    n();
    var ce = (g(), A(d)),
      be = O(),
      S = 'static-filter';
    ce.addons.register(S, (e) => {
      let t = Object.entries(be.global.TAGS_OPTIONS ?? {}).reduce((r, a) => {
        let [o, m] = a;
        return m.excludeFromSidebar && (r[o] = !0), r;
      }, {});
      e.experimental_setFilter(
        S,
        (r) => (r.tags || []).filter((a) => t[a]).length === 0
      );
    });
  })();
} catch (e) {
  console.error(
    '[Storybook] One of your manager-entries failed: ' + import.meta.url,
    e
  );
}
