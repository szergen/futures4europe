try {
  (() => {
    var n = __REACT__,
      {
        Children: le,
        Component: ne,
        Fragment: se,
        Profiler: ie,
        PureComponent: ue,
        StrictMode: ce,
        Suspense: pe,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: me,
        cloneElement: de,
        createContext: be,
        createElement: Se,
        createFactory: Te,
        createRef: ye,
        forwardRef: _e,
        isValidElement: fe,
        lazy: Ce,
        memo: Ie,
        startTransition: ve,
        unstable_act: Oe,
        useCallback: I,
        useContext: Ee,
        useDebugValue: xe,
        useDeferredValue: ge,
        useEffect: x,
        useId: he,
        useImperativeHandle: ke,
        useInsertionEffect: Ae,
        useLayoutEffect: Le,
        useMemo: Re,
        useReducer: Be,
        useRef: L,
        useState: R,
        useSyncExternalStore: Pe,
        useTransition: Me,
        version: Ne,
      } = __REACT__;
    var Fe = __STORYBOOK_API__,
      {
        ActiveTabs: We,
        Consumer: Ge,
        ManagerContext: Ke,
        Provider: Ye,
        addons: g,
        combineParameters: $e,
        controlOrMetaKey: ze,
        controlOrMetaSymbol: Ue,
        eventMatchesShortcut: je,
        eventToShortcut: qe,
        isMacLike: Ze,
        isShortcutTaken: Je,
        keyToSymbol: Qe,
        merge: Xe,
        mockChannel: et,
        optionOrAltSymbol: tt,
        shortcutMatchesShortcut: ot,
        shortcutToHumanString: rt,
        types: B,
        useAddonState: at,
        useArgTypes: lt,
        useArgs: nt,
        useChannel: st,
        useGlobalTypes: P,
        useGlobals: h,
        useParameter: it,
        useSharedState: ut,
        useStoryPrepared: ct,
        useStorybookApi: M,
        useStorybookState: pt,
      } = __STORYBOOK_API__;
    var Tt = __STORYBOOK_COMPONENTS__,
      {
        A: yt,
        ActionBar: _t,
        AddonPanel: ft,
        Badge: Ct,
        Bar: It,
        Blockquote: vt,
        Button: Ot,
        ClipboardCode: Et,
        Code: xt,
        DL: gt,
        Div: ht,
        DocumentWrapper: kt,
        EmptyTabContent: At,
        ErrorFormatter: Lt,
        FlexBar: Rt,
        Form: Bt,
        H1: Pt,
        H2: Mt,
        H3: Nt,
        H4: wt,
        H5: Vt,
        H6: Dt,
        HR: Ht,
        IconButton: N,
        IconButtonSkeleton: Ft,
        Icons: k,
        Img: Wt,
        LI: Gt,
        Link: Kt,
        ListItem: Yt,
        Loader: $t,
        OL: zt,
        P: Ut,
        Placeholder: jt,
        Pre: qt,
        ResetWrapper: Zt,
        ScrollArea: Jt,
        Separator: w,
        Spaced: Qt,
        Span: Xt,
        StorybookIcon: eo,
        StorybookLogo: to,
        Symbols: oo,
        SyntaxHighlighter: ro,
        TT: ao,
        TabBar: lo,
        TabButton: no,
        TabWrapper: so,
        Table: io,
        Tabs: uo,
        TabsState: co,
        TooltipLinkList: V,
        TooltipMessage: po,
        TooltipNote: mo,
        UL: bo,
        WithTooltip: D,
        WithTooltipPure: So,
        Zoom: To,
        codeCommon: yo,
        components: _o,
        createCopyToClipboardFunction: fo,
        getStoryHref: Co,
        icons: Io,
        interleaveSeparators: vo,
        nameSpaceClassNames: Oo,
        resetComponents: Eo,
        withReset: xo,
      } = __STORYBOOK_COMPONENTS__;
    var W = ({ active: o, title: t, icon: e, description: r, onClick: a }) =>
        n.createElement(
          N,
          { active: o, title: r, onClick: a },
          e &&
            n.createElement(k, { icon: e, __suppressDeprecationWarning: !0 }),
          t ? `\xA0${t}` : null
        ),
      G = ['reset'],
      K = (o) => o.filter((t) => !G.includes(t.type)).map((t) => t.value),
      b = 'addon-toolbars',
      Y = async (o, t, e) => {
        e &&
          e.next &&
          (await o.setAddonShortcut(b, {
            label: e.next.label,
            defaultShortcut: e.next.keys,
            actionName: `${t}:next`,
            action: e.next.action,
          })),
          e &&
            e.previous &&
            (await o.setAddonShortcut(b, {
              label: e.previous.label,
              defaultShortcut: e.previous.keys,
              actionName: `${t}:previous`,
              action: e.previous.action,
            })),
          e &&
            e.reset &&
            (await o.setAddonShortcut(b, {
              label: e.reset.label,
              defaultShortcut: e.reset.keys,
              actionName: `${t}:reset`,
              action: e.reset.action,
            }));
      },
      $ = (o) => (t) => {
        let {
            id: e,
            toolbar: { items: r, shortcuts: a },
          } = t,
          d = M(),
          [S, s] = h(),
          l = L([]),
          p = S[e],
          v = I(() => {
            s({ [e]: '' });
          }, [s]),
          O = I(() => {
            let m = l.current,
              i = m.indexOf(p),
              c = i === m.length - 1 ? 0 : i + 1,
              T = l.current[c];
            s({ [e]: T });
          }, [l, p, s]),
          u = I(() => {
            let m = l.current,
              i = m.indexOf(p),
              c = i > -1 ? i : 0,
              T = c === 0 ? m.length - 1 : c - 1,
              y = l.current[T];
            s({ [e]: y });
          }, [l, p, s]);
        return (
          x(() => {
            a &&
              Y(d, e, {
                next: { ...a.next, action: O },
                previous: { ...a.previous, action: u },
                reset: { ...a.reset, action: v },
              });
          }, [d, e, a, O, u, v]),
          x(() => {
            l.current = K(r);
          }, []),
          n.createElement(o, { cycleValues: l.current, ...t })
        );
      },
      H = ({ currentValue: o, items: t }) =>
        o != null && t.find((e) => e.value === o && e.type !== 'reset'),
      z = ({ currentValue: o, items: t }) => {
        let e = H({ currentValue: o, items: t });
        if (e) return e.icon;
      },
      U = ({ currentValue: o, items: t }) => {
        let e = H({ currentValue: o, items: t });
        if (e) return e.title;
      },
      j = ({
        right: o,
        title: t,
        value: e,
        icon: r,
        hideIcon: a,
        onClick: d,
        currentValue: S,
      }) => {
        let s = r && n.createElement(k, { style: { opacity: 1 }, icon: r }),
          l = {
            id: e ?? '_reset',
            active: S === e,
            right: o,
            title: t,
            icon: r,
            onClick: d,
          };
        return r && !a && (l.icon = s), l;
      },
      q = $(
        ({
          id: o,
          name: t,
          description: e,
          toolbar: {
            icon: r,
            items: a,
            title: d,
            preventDynamicIcon: S,
            dynamicTitle: s,
          },
        }) => {
          let [l, p] = h(),
            [v, O] = R(!1),
            u = l[o],
            m = !!u,
            i = r,
            c = d;
          S || (i = z({ currentValue: u, items: a }) || i),
            s && (c = U({ currentValue: u, items: a }) || c),
            !c && !i && console.warn(`Toolbar '${t}' has no title or icon`);
          let T = I(
            (y) => {
              p({ [o]: y });
            },
            [u, p]
          );
          return n.createElement(
            D,
            {
              placement: 'top',
              tooltip: ({ onHide: y }) => {
                let F = a
                  .filter(({ type: E }) => {
                    let A = !0;
                    return E === 'reset' && !u && (A = !1), A;
                  })
                  .map((E) =>
                    j({
                      ...E,
                      currentValue: u,
                      onClick: () => {
                        T(E.value), y();
                      },
                    })
                  );
                return n.createElement(V, { links: F });
              },
              closeOnOutsideClick: !0,
              onVisibleChange: O,
            },
            n.createElement(W, {
              active: v || m,
              description: e || '',
              icon: i,
              title: c || '',
            })
          );
        }
      ),
      Z = { type: 'item', value: '' },
      J = (o, t) => ({
        ...t,
        name: t.name || o,
        description: t.description || o,
        toolbar: {
          ...t.toolbar,
          items: t.toolbar.items.map((e) => {
            let r = typeof e == 'string' ? { value: e, title: e } : e;
            return (
              r.type === 'reset' &&
                t.toolbar.icon &&
                ((r.icon = t.toolbar.icon), (r.hideIcon = !0)),
              { ...Z, ...r }
            );
          }),
        },
      }),
      Q = () => {
        let o = P(),
          t = Object.keys(o).filter((e) => !!o[e].toolbar);
        return t.length
          ? n.createElement(
              n.Fragment,
              null,
              n.createElement(w, null),
              t.map((e) => {
                let r = J(e, o[e]);
                return n.createElement(q, { key: e, id: e, ...r });
              })
            )
          : null;
      };
    g.register(b, () =>
      g.add(b, {
        title: b,
        type: B.TOOL,
        match: ({ tabId: o }) => !o,
        render: () => n.createElement(Q, null),
      })
    );
  })();
} catch (e) {
  console.error(
    '[Storybook] One of your manager-entries failed: ' + import.meta.url,
    e
  );
}
