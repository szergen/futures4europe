try {
  (() => {
    var ie = Object.create;
    var H = Object.defineProperty;
    var ce = Object.getOwnPropertyDescriptor;
    var ae = Object.getOwnPropertyNames;
    var le = Object.getPrototypeOf,
      se = Object.prototype.hasOwnProperty;
    var O = ((e) =>
      typeof require < 'u'
        ? require
        : typeof Proxy < 'u'
        ? new Proxy(e, {
            get: (t, r) => (typeof require < 'u' ? require : t)[r],
          })
        : e)(function (e) {
      if (typeof require < 'u') return require.apply(this, arguments);
      throw Error('Dynamic require of "' + e + '" is not supported');
    });
    var P = (e, t) => () => (e && (t = e((e = 0))), t);
    var Ie = (e, t) => () => (
      t || e((t = { exports: {} }).exports, t), t.exports
    );
    var ue = (e, t, r, l) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let a of ae(t))
          !se.call(e, a) &&
            a !== r &&
            H(e, a, {
              get: () => t[a],
              enumerable: !(l = ce(t, a)) || l.enumerable,
            });
      return e;
    };
    var pe = (e, t, r) => (
      (r = e != null ? ie(le(e)) : {}),
      ue(
        t || !e || !e.__esModule
          ? H(r, 'default', { value: e, enumerable: !0 })
          : r,
        e
      )
    );
    var d = P(() => {});
    var h = P(() => {});
    var m = P(() => {});
    var $ = Ie((Z, D) => {
      d();
      h();
      m();
      (function (e) {
        if (typeof Z == 'object' && typeof D < 'u') D.exports = e();
        else if (typeof define == 'function' && define.amd) define([], e);
        else {
          var t;
          typeof window < 'u' || typeof window < 'u'
            ? (t = window)
            : typeof self < 'u'
            ? (t = self)
            : (t = this),
            (t.memoizerific = e());
        }
      })(function () {
        var e, t, r;
        return (function l(a, S, u) {
          function i(c, I) {
            if (!S[c]) {
              if (!a[c]) {
                var s = typeof O == 'function' && O;
                if (!I && s) return s(c, !0);
                if (o) return o(c, !0);
                var g = new Error("Cannot find module '" + c + "'");
                throw ((g.code = 'MODULE_NOT_FOUND'), g);
              }
              var n = (S[c] = { exports: {} });
              a[c][0].call(
                n.exports,
                function (p) {
                  var b = a[c][1][p];
                  return i(b || p);
                },
                n,
                n.exports,
                l,
                a,
                S,
                u
              );
            }
            return S[c].exports;
          }
          for (var o = typeof O == 'function' && O, f = 0; f < u.length; f++)
            i(u[f]);
          return i;
        })(
          {
            1: [
              function (l, a, S) {
                a.exports = function (u) {
                  if (typeof Map != 'function' || u) {
                    var i = l('./similar');
                    return new i();
                  } else return new Map();
                };
              },
              { './similar': 2 },
            ],
            2: [
              function (l, a, S) {
                function u() {
                  return (
                    (this.list = []),
                    (this.lastItem = void 0),
                    (this.size = 0),
                    this
                  );
                }
                (u.prototype.get = function (i) {
                  var o;
                  if (this.lastItem && this.isEqual(this.lastItem.key, i))
                    return this.lastItem.val;
                  if (((o = this.indexOf(i)), o >= 0))
                    return (this.lastItem = this.list[o]), this.list[o].val;
                }),
                  (u.prototype.set = function (i, o) {
                    var f;
                    return this.lastItem && this.isEqual(this.lastItem.key, i)
                      ? ((this.lastItem.val = o), this)
                      : ((f = this.indexOf(i)),
                        f >= 0
                          ? ((this.lastItem = this.list[f]),
                            (this.list[f].val = o),
                            this)
                          : ((this.lastItem = { key: i, val: o }),
                            this.list.push(this.lastItem),
                            this.size++,
                            this));
                  }),
                  (u.prototype.delete = function (i) {
                    var o;
                    if (
                      (this.lastItem &&
                        this.isEqual(this.lastItem.key, i) &&
                        (this.lastItem = void 0),
                      (o = this.indexOf(i)),
                      o >= 0)
                    )
                      return this.size--, this.list.splice(o, 1)[0];
                  }),
                  (u.prototype.has = function (i) {
                    var o;
                    return this.lastItem && this.isEqual(this.lastItem.key, i)
                      ? !0
                      : ((o = this.indexOf(i)),
                        o >= 0 ? ((this.lastItem = this.list[o]), !0) : !1);
                  }),
                  (u.prototype.forEach = function (i, o) {
                    var f;
                    for (f = 0; f < this.size; f++)
                      i.call(
                        o || this,
                        this.list[f].val,
                        this.list[f].key,
                        this
                      );
                  }),
                  (u.prototype.indexOf = function (i) {
                    var o;
                    for (o = 0; o < this.size; o++)
                      if (this.isEqual(this.list[o].key, i)) return o;
                    return -1;
                  }),
                  (u.prototype.isEqual = function (i, o) {
                    return i === o || (i !== i && o !== o);
                  }),
                  (a.exports = u);
              },
              {},
            ],
            3: [
              function (l, a, S) {
                var u = l('map-or-similar');
                a.exports = function (c) {
                  var I = new u(!1),
                    s = [];
                  return function (g) {
                    var n = function () {
                      var p = I,
                        b,
                        R,
                        y = arguments.length - 1,
                        E = Array(y + 1),
                        x = !0,
                        C;
                      if ((n.numArgs || n.numArgs === 0) && n.numArgs !== y + 1)
                        throw new Error(
                          'Memoizerific functions should always be called with the same number of arguments'
                        );
                      for (C = 0; C < y; C++) {
                        if (
                          ((E[C] = { cacheItem: p, arg: arguments[C] }),
                          p.has(arguments[C]))
                        ) {
                          p = p.get(arguments[C]);
                          continue;
                        }
                        (x = !1),
                          (b = new u(!1)),
                          p.set(arguments[C], b),
                          (p = b);
                      }
                      return (
                        x &&
                          (p.has(arguments[y])
                            ? (R = p.get(arguments[y]))
                            : (x = !1)),
                        x ||
                          ((R = g.apply(null, arguments)),
                          p.set(arguments[y], R)),
                        c > 0 &&
                          ((E[y] = { cacheItem: p, arg: arguments[y] }),
                          x ? i(s, E) : s.push(E),
                          s.length > c && o(s.shift())),
                        (n.wasMemoized = x),
                        (n.numArgs = y + 1),
                        R
                      );
                    };
                    return (
                      (n.limit = c),
                      (n.wasMemoized = !1),
                      (n.cache = I),
                      (n.lru = s),
                      n
                    );
                  };
                };
                function i(c, I) {
                  var s = c.length,
                    g = I.length,
                    n,
                    p,
                    b;
                  for (p = 0; p < s; p++) {
                    for (n = !0, b = 0; b < g; b++)
                      if (!f(c[p][b].arg, I[b].arg)) {
                        n = !1;
                        break;
                      }
                    if (n) break;
                  }
                  c.push(c.splice(p, 1)[0]);
                }
                function o(c) {
                  var I = c.length,
                    s = c[I - 1],
                    g,
                    n;
                  for (
                    s.cacheItem.delete(s.arg), n = I - 2;
                    n >= 0 &&
                    ((s = c[n]), (g = s.cacheItem.get(s.arg)), !g || !g.size);
                    n--
                  )
                    s.cacheItem.delete(s.arg);
                }
                function f(c, I) {
                  return c === I || (c !== c && I !== I);
                }
              },
              { 'map-or-similar': 1 },
            ],
          },
          {},
          [3]
        )(3);
      });
    });
    d();
    h();
    m();
    d();
    h();
    m();
    d();
    h();
    m();
    d();
    h();
    m();
    var w = __REACT__,
      {
        Children: De,
        Component: Ve,
        Fragment: U,
        Profiler: Ne,
        PureComponent: He,
        StrictMode: Ue,
        Suspense: ze,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Fe,
        cloneElement: Ge,
        createContext: qe,
        createElement: z,
        createFactory: We,
        createRef: Ye,
        forwardRef: je,
        isValidElement: Ke,
        lazy: Ze,
        memo: F,
        startTransition: $e,
        unstable_act: Je,
        useCallback: Qe,
        useContext: Xe,
        useDebugValue: et,
        useDeferredValue: tt,
        useEffect: L,
        useId: ot,
        useImperativeHandle: nt,
        useInsertionEffect: rt,
        useLayoutEffect: it,
        useMemo: ct,
        useReducer: at,
        useRef: G,
        useState: q,
        useSyncExternalStore: lt,
        useTransition: st,
        version: It,
      } = __REACT__;
    d();
    h();
    m();
    var ht = __STORYBOOK_API__,
      {
        ActiveTabs: mt,
        Consumer: ft,
        ManagerContext: gt,
        Provider: St,
        addons: M,
        combineParameters: wt,
        controlOrMetaKey: bt,
        controlOrMetaSymbol: yt,
        eventMatchesShortcut: Ct,
        eventToShortcut: vt,
        isMacLike: Tt,
        isShortcutTaken: _t,
        keyToSymbol: xt,
        merge: Ot,
        mockChannel: At,
        optionOrAltSymbol: kt,
        shortcutMatchesShortcut: Rt,
        shortcutToHumanString: Et,
        types: W,
        useAddonState: Lt,
        useArgTypes: Bt,
        useArgs: Pt,
        useChannel: Mt,
        useGlobalTypes: Dt,
        useGlobals: Y,
        useParameter: j,
        useSharedState: Vt,
        useStoryPrepared: Nt,
        useStorybookApi: K,
        useStorybookState: Ht,
      } = __STORYBOOK_API__;
    var N = pe($());
    d();
    h();
    m();
    var Kt = __STORYBOOK_THEMING__,
      {
        CacheProvider: Zt,
        ClassNames: $t,
        Global: J,
        ThemeProvider: Jt,
        background: Qt,
        color: Xt,
        convert: eo,
        create: to,
        createCache: oo,
        createGlobal: no,
        createReset: ro,
        css: io,
        darken: co,
        ensure: ao,
        ignoreSsrWarning: lo,
        isPropValid: so,
        jsx: Io,
        keyframes: uo,
        lighten: po,
        styled: A,
        themes: ho,
        typography: mo,
        useTheme: fo,
        withTheme: Q,
      } = __STORYBOOK_THEMING__;
    d();
    h();
    m();
    var yo = __STORYBOOK_COMPONENTS__,
      {
        A: Co,
        ActionBar: vo,
        AddonPanel: To,
        Badge: _o,
        Bar: xo,
        Blockquote: Oo,
        Button: Ao,
        ClipboardCode: ko,
        Code: Ro,
        DL: Eo,
        Div: Lo,
        DocumentWrapper: Bo,
        EmptyTabContent: Po,
        ErrorFormatter: Mo,
        FlexBar: Do,
        Form: Vo,
        H1: No,
        H2: Ho,
        H3: Uo,
        H4: zo,
        H5: Fo,
        H6: Go,
        HR: qo,
        IconButton: V,
        IconButtonSkeleton: Wo,
        Icons: Yo,
        Img: jo,
        LI: Ko,
        Link: Zo,
        ListItem: $o,
        Loader: Jo,
        OL: Qo,
        P: Xo,
        Placeholder: en,
        Pre: tn,
        ResetWrapper: on,
        ScrollArea: nn,
        Separator: rn,
        Spaced: cn,
        Span: an,
        StorybookIcon: ln,
        StorybookLogo: sn,
        Symbols: In,
        SyntaxHighlighter: un,
        TT: pn,
        TabBar: dn,
        TabButton: hn,
        TabWrapper: mn,
        Table: fn,
        Tabs: gn,
        TabsState: Sn,
        TooltipLinkList: X,
        TooltipMessage: wn,
        TooltipNote: bn,
        UL: yn,
        WithTooltip: ee,
        WithTooltipPure: Cn,
        Zoom: vn,
        codeCommon: Tn,
        components: _n,
        createCopyToClipboardFunction: xn,
        getStoryHref: On,
        icons: An,
        interleaveSeparators: kn,
        nameSpaceClassNames: Rn,
        resetComponents: En,
        withReset: Ln,
      } = __STORYBOOK_COMPONENTS__;
    d();
    h();
    m();
    var Vn = __STORYBOOK_ICONS__,
      {
        AccessibilityAltIcon: Nn,
        AccessibilityIcon: Hn,
        AddIcon: Un,
        AdminIcon: zn,
        AlertAltIcon: Fn,
        AlertIcon: Gn,
        AlignLeftIcon: qn,
        AlignRightIcon: Wn,
        AppleIcon: Yn,
        ArrowDownIcon: jn,
        ArrowLeftIcon: Kn,
        ArrowRightIcon: Zn,
        ArrowSolidDownIcon: $n,
        ArrowSolidLeftIcon: Jn,
        ArrowSolidRightIcon: Qn,
        ArrowSolidUpIcon: Xn,
        ArrowUpIcon: er,
        AzureDevOpsIcon: tr,
        BackIcon: or,
        BasketIcon: nr,
        BatchAcceptIcon: rr,
        BatchDenyIcon: ir,
        BeakerIcon: cr,
        BellIcon: ar,
        BitbucketIcon: lr,
        BoldIcon: sr,
        BookIcon: Ir,
        BookmarkHollowIcon: ur,
        BookmarkIcon: pr,
        BottomBarIcon: dr,
        BottomBarToggleIcon: hr,
        BoxIcon: mr,
        BranchIcon: fr,
        BrowserIcon: gr,
        ButtonIcon: Sr,
        CPUIcon: wr,
        CalendarIcon: br,
        CameraIcon: yr,
        CategoryIcon: Cr,
        CertificateIcon: vr,
        ChangedIcon: Tr,
        ChatIcon: _r,
        CheckIcon: xr,
        ChevronDownIcon: Or,
        ChevronLeftIcon: Ar,
        ChevronRightIcon: kr,
        ChevronSmallDownIcon: Rr,
        ChevronSmallLeftIcon: Er,
        ChevronSmallRightIcon: Lr,
        ChevronSmallUpIcon: Br,
        ChevronUpIcon: Pr,
        ChromaticIcon: Mr,
        ChromeIcon: Dr,
        CircleHollowIcon: Vr,
        CircleIcon: Nr,
        ClearIcon: Hr,
        CloseAltIcon: Ur,
        CloseIcon: zr,
        CloudHollowIcon: Fr,
        CloudIcon: Gr,
        CogIcon: qr,
        CollapseIcon: Wr,
        CommandIcon: Yr,
        CommentAddIcon: jr,
        CommentIcon: Kr,
        CommentsIcon: Zr,
        CommitIcon: $r,
        CompassIcon: Jr,
        ComponentDrivenIcon: Qr,
        ComponentIcon: Xr,
        ContrastIcon: ei,
        ControlsIcon: ti,
        CopyIcon: oi,
        CreditIcon: ni,
        CrossIcon: ri,
        DashboardIcon: ii,
        DatabaseIcon: ci,
        DeleteIcon: ai,
        DiamondIcon: li,
        DirectionIcon: si,
        DiscordIcon: Ii,
        DocChartIcon: ui,
        DocListIcon: pi,
        DocumentIcon: di,
        DownloadIcon: hi,
        DragIcon: mi,
        EditIcon: fi,
        EllipsisIcon: gi,
        EmailIcon: Si,
        ExpandAltIcon: wi,
        ExpandIcon: bi,
        EyeCloseIcon: yi,
        EyeIcon: Ci,
        FaceHappyIcon: vi,
        FaceNeutralIcon: Ti,
        FaceSadIcon: _i,
        FacebookIcon: xi,
        FailedIcon: Oi,
        FastForwardIcon: Ai,
        FigmaIcon: ki,
        FilterIcon: Ri,
        FlagIcon: Ei,
        FolderIcon: Li,
        FormIcon: Bi,
        GDriveIcon: Pi,
        GithubIcon: Mi,
        GitlabIcon: Di,
        GlobeIcon: Vi,
        GoogleIcon: Ni,
        GraphBarIcon: Hi,
        GraphLineIcon: Ui,
        GraphqlIcon: zi,
        GridAltIcon: Fi,
        GridIcon: Gi,
        GrowIcon: te,
        HeartHollowIcon: qi,
        HeartIcon: Wi,
        HomeIcon: Yi,
        HourglassIcon: ji,
        InfoIcon: Ki,
        ItalicIcon: Zi,
        JumpToIcon: $i,
        KeyIcon: Ji,
        LightningIcon: Qi,
        LightningOffIcon: Xi,
        LinkBrokenIcon: ec,
        LinkIcon: tc,
        LinkedinIcon: oc,
        LinuxIcon: nc,
        ListOrderedIcon: rc,
        ListUnorderedIcon: ic,
        LocationIcon: cc,
        LockIcon: ac,
        MarkdownIcon: lc,
        MarkupIcon: sc,
        MediumIcon: Ic,
        MemoryIcon: uc,
        MenuIcon: pc,
        MergeIcon: dc,
        MirrorIcon: hc,
        MobileIcon: mc,
        MoonIcon: fc,
        NutIcon: gc,
        OutboxIcon: Sc,
        OutlineIcon: wc,
        PaintBrushIcon: bc,
        PaperClipIcon: yc,
        ParagraphIcon: Cc,
        PassedIcon: vc,
        PhoneIcon: Tc,
        PhotoDragIcon: _c,
        PhotoIcon: xc,
        PinAltIcon: Oc,
        PinIcon: Ac,
        PlayBackIcon: kc,
        PlayIcon: Rc,
        PlayNextIcon: Ec,
        PlusIcon: Lc,
        PointerDefaultIcon: Bc,
        PointerHandIcon: Pc,
        PowerIcon: Mc,
        PrintIcon: Dc,
        ProceedIcon: Vc,
        ProfileIcon: Nc,
        PullRequestIcon: Hc,
        QuestionIcon: Uc,
        RSSIcon: zc,
        RedirectIcon: Fc,
        ReduxIcon: Gc,
        RefreshIcon: qc,
        ReplyIcon: Wc,
        RepoIcon: Yc,
        RequestChangeIcon: jc,
        RewindIcon: Kc,
        RulerIcon: Zc,
        SearchIcon: $c,
        ShareAltIcon: Jc,
        ShareIcon: Qc,
        ShieldIcon: Xc,
        SideBySideIcon: ea,
        SidebarAltIcon: ta,
        SidebarAltToggleIcon: oa,
        SidebarIcon: na,
        SidebarToggleIcon: ra,
        SpeakerIcon: ia,
        StackedIcon: ca,
        StarHollowIcon: aa,
        StarIcon: la,
        StickerIcon: sa,
        StopAltIcon: Ia,
        StopIcon: ua,
        StorybookIcon: pa,
        StructureIcon: da,
        SubtractIcon: ha,
        SunIcon: ma,
        SupportIcon: fa,
        SwitchAltIcon: ga,
        SyncIcon: Sa,
        TabletIcon: wa,
        ThumbsUpIcon: ba,
        TimeIcon: ya,
        TimerIcon: Ca,
        TransferIcon: oe,
        TrashIcon: va,
        TwitterIcon: Ta,
        TypeIcon: _a,
        UbuntuIcon: xa,
        UndoIcon: Oa,
        UnfoldIcon: Aa,
        UnlockIcon: ka,
        UnpinIcon: Ra,
        UploadIcon: Ea,
        UserAddIcon: La,
        UserAltIcon: Ba,
        UserIcon: Pa,
        UsersIcon: Ma,
        VSCodeIcon: Da,
        VerifiedIcon: Va,
        VideoIcon: Na,
        WandIcon: Ha,
        WatchIcon: Ua,
        WindowsIcon: za,
        WrenchIcon: Fa,
        YoutubeIcon: Ga,
        ZoomIcon: qa,
        ZoomOutIcon: Wa,
        ZoomResetIcon: Ya,
        iconList: ja,
      } = __STORYBOOK_ICONS__;
    var k = 'storybook/viewport',
      he = 'viewport',
      me = { viewport: 'reset', viewportRotated: !1 },
      re = (e, t) => e.indexOf(t),
      fe = (e, t) => {
        let r = re(e, t);
        return r === e.length - 1 ? e[0] : e[r + 1];
      },
      ge = (e, t) => {
        let r = re(e, t);
        return r < 1 ? e[e.length - 1] : e[r - 1];
      },
      Se = async (e, t, r, l) => {
        await e.setAddonShortcut(k, {
          label: 'Previous viewport',
          defaultShortcut: ['alt', 'shift', 'V'],
          actionName: 'previous',
          action: () => {
            r({ viewport: ge(l, t.viewport) });
          },
        }),
          await e.setAddonShortcut(k, {
            label: 'Next viewport',
            defaultShortcut: ['alt', 'V'],
            actionName: 'next',
            action: () => {
              r({ viewport: fe(l, t.viewport) });
            },
          }),
          await e.setAddonShortcut(k, {
            label: 'Reset viewport',
            defaultShortcut: ['alt', 'control', 'V'],
            actionName: 'reset',
            action: () => {
              r(me);
            },
          });
      },
      we = {
        mobile1: {
          name: 'Small mobile',
          styles: { height: '568px', width: '320px' },
          type: 'mobile',
        },
        mobile2: {
          name: 'Large mobile',
          styles: { height: '896px', width: '414px' },
          type: 'mobile',
        },
        tablet: {
          name: 'Tablet',
          styles: { height: '1112px', width: '834px' },
          type: 'tablet',
        },
      },
      be = (0, N.default)(50)((e) => [
        ...ye,
        ...Object.entries(e).map(([t, { name: r, ...l }]) => ({
          ...l,
          id: t,
          title: r,
        })),
      ]),
      B = { id: 'reset', title: 'Reset viewport', styles: null, type: 'other' },
      ye = [B],
      Ce = (0, N.default)(50)((e, t, r, l) =>
        e
          .filter((a) => a.id !== B.id || t.id !== a.id)
          .map((a) => ({
            ...a,
            onClick: () => {
              r({ viewport: a.id }), l();
            },
          }))
      ),
      ve = ({ width: e, height: t, ...r }) => ({ ...r, height: e, width: t }),
      Te = A.div(() => ({ display: 'inline-flex' })),
      ne = A.div(({ theme: e }) => ({
        display: 'inline-block',
        textDecoration: 'none',
        padding: 10,
        fontWeight: e.typography.weight.bold,
        fontSize: e.typography.size.s2 - 1,
        lineHeight: '1',
        height: 40,
        border: 'none',
        borderTop: '3px solid transparent',
        borderBottom: '3px solid transparent',
        background: 'transparent',
      })),
      _e = A(V)(() => ({ display: 'inline-flex', alignItems: 'center' })),
      xe = A.div(({ theme: e }) => ({
        fontSize: e.typography.size.s2 - 1,
        marginLeft: 10,
      })),
      Oe = (e, t, r) => {
        if (t === null) return;
        let l = typeof t == 'function' ? t(e) : t;
        return r ? ve(l) : l;
      },
      Ae = F(
        Q(({ theme: e }) => {
          let [t, r] = Y(),
            {
              viewports: l = we,
              defaultOrientation: a,
              defaultViewport: S,
              disable: u,
            } = j(he, {}),
            i = be(l),
            o = K(),
            [f, c] = q(!1);
          S &&
            !i.find((n) => n.id === S) &&
            console.warn(
              `Cannot find "defaultViewport" of "${S}" in addon-viewport configs, please check the "viewports" setting in the configuration.`
            ),
            L(() => {
              Se(o, t, r, Object.keys(l));
            }, [l, t, t.viewport, r, o]),
            L(() => {
              let n = a === 'landscape';
              ((S && t.viewport !== S) || (a && t.viewportRotated !== n)) &&
                r({ viewport: S, viewportRotated: n });
            }, [a, S, r]);
          let I =
              i.find((n) => n.id === t.viewport) ||
              i.find((n) => n.id === S) ||
              i.find((n) => n.default) ||
              B,
            s = G(),
            g = Oe(s.current, I.styles, t.viewportRotated);
          return (
            L(() => {
              s.current = g;
            }, [I]),
            u || Object.entries(l).length === 0
              ? null
              : w.createElement(
                  U,
                  null,
                  w.createElement(
                    ee,
                    {
                      placement: 'top',
                      tooltip: ({ onHide: n }) =>
                        w.createElement(X, { links: Ce(i, I, r, n) }),
                      closeOnOutsideClick: !0,
                      onVisibleChange: c,
                    },
                    w.createElement(
                      _e,
                      {
                        key: 'viewport',
                        title: 'Change the size of the preview',
                        active: f || !!g,
                        onDoubleClick: () => {
                          r({ viewport: B.id });
                        },
                      },
                      w.createElement(te, null),
                      g
                        ? w.createElement(
                            xe,
                            null,
                            t.viewportRotated
                              ? `${I.title} (L)`
                              : `${I.title} (P)`
                          )
                        : null
                    )
                  ),
                  g
                    ? w.createElement(
                        Te,
                        null,
                        w.createElement(J, {
                          styles: {
                            'iframe[data-is-storybook="true"]': {
                              ...(g || { width: '100%', height: '100%' }),
                            },
                          },
                        }),
                        w.createElement(
                          ne,
                          { title: 'Viewport width' },
                          g.width.replace('px', '')
                        ),
                        w.createElement(
                          V,
                          {
                            key: 'viewport-rotate',
                            title: 'Rotate viewport',
                            onClick: () => {
                              r({ viewportRotated: !t.viewportRotated });
                            },
                          },
                          w.createElement(oe, null)
                        ),
                        w.createElement(
                          ne,
                          { title: 'Viewport height' },
                          g.height.replace('px', '')
                        )
                      )
                    : null
                )
          );
        })
      );
    M.register(k, () => {
      M.add(k, {
        title: 'viewport / media-queries',
        type: W.TOOL,
        match: ({ viewMode: e, tabId: t }) => e === 'story' && !t,
        render: () => z(Ae, null),
      });
    });
  })();
} catch (e) {
  console.error(
    '[Storybook] One of your manager-entries failed: ' + import.meta.url,
    e
  );
}
