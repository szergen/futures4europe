try {
  (() => {
    var mu = Object.defineProperty;
    var Ve = (e, t) => () => (e && (t = e((e = 0))), t);
    var gu = (e, t) => {
      for (var n in t) mu(e, n, { get: t[n], enumerable: !0 });
    };
    var ce = Ve(() => {});
    var ue = Ve(() => {});
    var de = Ve(() => {});
    var ut,
      Bb,
      on,
      _b,
      zb,
      Nr,
      Ub,
      Wb,
      Hb,
      Ei,
      Yb,
      Ti,
      Gb,
      _n = Ve(() => {
        ce();
        ue();
        de();
        (ut = __REACT_DOM__),
          ({
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Bb,
            createPortal: on,
            createRoot: _b,
            findDOMNode: zb,
            flushSync: Nr,
            hydrate: Ub,
            hydrateRoot: Wb,
            render: Hb,
            unmountComponentAtNode: Ei,
            unstable_batchedUpdates: Yb,
            unstable_renderSubtreeIntoContainer: Ti,
            version: Gb,
          } = __REACT_DOM__);
      });
    var g,
      Ye,
      nt,
      dt,
      Xb,
      Qb,
      Zb,
      Si,
      Jb,
      jt,
      Be,
      O,
      e1,
      Pi,
      se,
      Vt,
      Oi,
      t1,
      n1,
      r1,
      ye,
      me,
      o1,
      i1,
      U,
      zn,
      a1,
      Ci,
      Bt,
      Se,
      Ai,
      ee,
      ne,
      s1,
      l1,
      c1,
      Un = Ve(() => {
        ce();
        ue();
        de();
        (g = __REACT__),
          ({
            Children: Ye,
            Component: nt,
            Fragment: dt,
            Profiler: Xb,
            PureComponent: Qb,
            StrictMode: Zb,
            Suspense: Si,
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Jb,
            cloneElement: jt,
            createContext: Be,
            createElement: O,
            createFactory: e1,
            createRef: Pi,
            forwardRef: se,
            isValidElement: Vt,
            lazy: Oi,
            memo: t1,
            startTransition: n1,
            unstable_act: r1,
            useCallback: ye,
            useContext: me,
            useDebugValue: o1,
            useDeferredValue: i1,
            useEffect: U,
            useId: zn,
            useImperativeHandle: a1,
            useInsertionEffect: Ci,
            useLayoutEffect: Bt,
            useMemo: Se,
            useReducer: Ai,
            useRef: ee,
            useState: ne,
            useSyncExternalStore: s1,
            useTransition: l1,
            version: c1,
          } = __REACT__);
      });
    var h1,
      f1,
      m1,
      g1,
      y1,
      Wn,
      v1,
      b1,
      x1,
      w1,
      E1,
      T1,
      S1,
      P1,
      O1,
      C1,
      A1,
      R1,
      I1,
      k1,
      M1,
      D1,
      L1,
      N1,
      F1,
      j1,
      V1,
      B1,
      _1,
      z1,
      U1,
      Fr = Ve(() => {
        ce();
        ue();
        de();
        (h1 = __STORYBOOK_API__),
          ({
            ActiveTabs: f1,
            Consumer: m1,
            ManagerContext: g1,
            Provider: y1,
            addons: Wn,
            combineParameters: v1,
            controlOrMetaKey: b1,
            controlOrMetaSymbol: x1,
            eventMatchesShortcut: w1,
            eventToShortcut: E1,
            isMacLike: T1,
            isShortcutTaken: S1,
            keyToSymbol: P1,
            merge: O1,
            mockChannel: C1,
            optionOrAltSymbol: A1,
            shortcutMatchesShortcut: R1,
            shortcutToHumanString: I1,
            types: k1,
            useAddonState: M1,
            useArgTypes: D1,
            useArgs: L1,
            useChannel: N1,
            useGlobalTypes: F1,
            useGlobals: j1,
            useParameter: V1,
            useSharedState: B1,
            useStoryPrepared: _1,
            useStorybookApi: z1,
            useStorybookState: U1,
          } = __STORYBOOK_API__);
      });
    var q1,
      $1,
      K1,
      X1,
      Q1,
      Z1,
      J1,
      ex,
      tx,
      nx,
      rx,
      ox,
      ix,
      ax,
      sx,
      lx,
      cx,
      ux,
      dx,
      px,
      hx,
      fx,
      mx,
      gx,
      yx,
      vx,
      bx,
      xx,
      wx,
      Ex,
      Tx,
      Sx,
      Px,
      jr,
      Ox,
      Cx,
      Ri,
      Ax,
      Ii,
      Rx,
      Ix,
      kx,
      Mx,
      Dx,
      Lx,
      Nx,
      ki,
      Vr = Ve(() => {
        ce();
        ue();
        de();
        (q1 = __STORYBOOK_CORE_EVENTS__),
          ({
            CHANNEL_CREATED: $1,
            CHANNEL_WS_DISCONNECT: K1,
            CONFIG_ERROR: X1,
            CURRENT_STORY_WAS_SET: Q1,
            DOCS_PREPARED: Z1,
            DOCS_RENDERED: J1,
            FORCE_REMOUNT: ex,
            FORCE_RE_RENDER: tx,
            GLOBALS_UPDATED: nx,
            NAVIGATE_URL: rx,
            PLAY_FUNCTION_THREW_EXCEPTION: ox,
            PRELOAD_ENTRIES: ix,
            PREVIEW_BUILDER_PROGRESS: ax,
            PREVIEW_KEYDOWN: sx,
            REGISTER_SUBSCRIPTION: lx,
            REQUEST_WHATS_NEW_DATA: cx,
            RESET_STORY_ARGS: ux,
            RESULT_WHATS_NEW_DATA: dx,
            SELECT_STORY: px,
            SET_CONFIG: hx,
            SET_CURRENT_STORY: fx,
            SET_GLOBALS: mx,
            SET_INDEX: gx,
            SET_STORIES: yx,
            SET_WHATS_NEW_CACHE: vx,
            SHARED_STATE_CHANGED: bx,
            SHARED_STATE_SET: xx,
            STORIES_COLLAPSE_ALL: wx,
            STORIES_EXPAND_ALL: Ex,
            STORY_ARGS_UPDATED: Tx,
            STORY_CHANGED: Sx,
            STORY_ERRORED: Px,
            STORY_INDEX_INVALIDATED: jr,
            STORY_MISSING: Ox,
            STORY_PREPARED: Cx,
            STORY_RENDERED: Ri,
            STORY_RENDER_PHASE_CHANGED: Ax,
            STORY_SPECIFIED: Ii,
            STORY_THREW_EXCEPTION: Rx,
            STORY_UNCHANGED: Ix,
            TELEMETRY_ERROR: kx,
            TOGGLE_WHATS_NEW_NOTIFICATIONS: Mx,
            UNHANDLED_ERRORS_WHILE_PLAYING: Dx,
            UPDATE_GLOBALS: Lx,
            UPDATE_QUERY_PARAMS: Nx,
            UPDATE_STORY_ARGS: ki,
          } = __STORYBOOK_CORE_EVENTS__);
      });
    var _x,
      zx,
      Ux,
      Wx,
      Br,
      Hx,
      Yx,
      Mi,
      Gx,
      qx,
      $x,
      Kx,
      Di,
      Xx,
      Li,
      Qx,
      Zx,
      Jx,
      St,
      ew,
      B,
      Ni,
      tw,
      _r,
      nw,
      Fi = Ve(() => {
        ce();
        ue();
        de();
        (_x = __STORYBOOK_THEMING__),
          ({
            CacheProvider: zx,
            ClassNames: Ux,
            Global: Wx,
            ThemeProvider: Br,
            background: Hx,
            color: Yx,
            convert: Mi,
            create: Gx,
            createCache: qx,
            createGlobal: $x,
            createReset: Kx,
            css: Di,
            darken: Xx,
            ensure: Li,
            ignoreSsrWarning: Qx,
            isPropValid: Zx,
            jsx: Jx,
            keyframes: St,
            lighten: ew,
            styled: B,
            themes: Ni,
            typography: tw,
            useTheme: _r,
            withTheme: nw,
          } = __STORYBOOK_THEMING__);
      });
    var sw,
      lw,
      cw,
      uw,
      dw,
      pw,
      hw,
      fw,
      mw,
      gw,
      yw,
      vw,
      ji,
      bw,
      xw,
      ww,
      Ew,
      Tw,
      Sw,
      Pw,
      Ow,
      Cw,
      Aw,
      Rw,
      Iw,
      kw,
      Mw,
      Dw,
      Vi,
      Lw,
      Nw,
      Fw,
      jw,
      Vw,
      Bw,
      _w,
      zw,
      Uw,
      Ww,
      Hw,
      Yw,
      Gw,
      qw,
      Bi,
      $w,
      Kw,
      Xw,
      Qw,
      Zw,
      Jw,
      eE,
      tE,
      nE,
      rE,
      oE,
      iE,
      aE,
      sE,
      lE,
      cE,
      uE,
      dE,
      pE,
      hE,
      fE,
      mE,
      gE,
      yE,
      vE,
      bE,
      xE,
      wE,
      EE,
      TE,
      SE,
      _i,
      PE,
      OE,
      CE,
      AE,
      RE,
      IE,
      kE,
      ME,
      DE,
      LE,
      NE,
      FE,
      jE,
      VE,
      BE,
      _E,
      zE,
      UE,
      WE,
      HE,
      YE,
      GE,
      qE,
      $E,
      KE,
      XE,
      QE,
      ZE,
      JE,
      eT,
      tT,
      nT,
      rT,
      oT,
      iT,
      aT,
      sT,
      lT,
      cT,
      uT,
      dT,
      pT,
      hT,
      fT,
      mT,
      gT,
      yT,
      vT,
      bT,
      xT,
      wT,
      ET,
      TT,
      ST,
      PT,
      OT,
      CT,
      AT,
      RT,
      IT,
      kT,
      MT,
      DT,
      LT,
      NT,
      FT,
      jT,
      VT,
      BT,
      _T,
      zT,
      UT,
      WT,
      HT,
      YT,
      GT,
      qT,
      $T,
      KT,
      XT,
      QT,
      ZT,
      JT,
      eS,
      tS,
      nS,
      rS,
      oS,
      iS,
      aS,
      sS,
      lS,
      cS,
      uS,
      dS,
      pS,
      hS,
      fS,
      mS,
      gS,
      yS,
      vS,
      bS,
      xS,
      wS,
      ES,
      TS,
      SS,
      PS,
      OS,
      CS,
      AS,
      RS,
      IS,
      kS,
      MS,
      DS,
      LS,
      NS,
      FS,
      jS,
      VS,
      BS,
      _S,
      zS,
      US,
      WS,
      HS,
      YS,
      GS,
      qS,
      $S,
      KS,
      XS,
      QS,
      ZS,
      JS,
      eP,
      tP,
      nP,
      rP,
      oP,
      iP,
      aP,
      sP,
      lP,
      cP,
      uP,
      dP,
      pP,
      hP,
      fP,
      mP,
      zi = Ve(() => {
        ce();
        ue();
        de();
        (sw = __STORYBOOK_ICONS__),
          ({
            AccessibilityAltIcon: lw,
            AccessibilityIcon: cw,
            AddIcon: uw,
            AdminIcon: dw,
            AlertAltIcon: pw,
            AlertIcon: hw,
            AlignLeftIcon: fw,
            AlignRightIcon: mw,
            AppleIcon: gw,
            ArrowDownIcon: yw,
            ArrowLeftIcon: vw,
            ArrowRightIcon: ji,
            ArrowSolidDownIcon: bw,
            ArrowSolidLeftIcon: xw,
            ArrowSolidRightIcon: ww,
            ArrowSolidUpIcon: Ew,
            ArrowUpIcon: Tw,
            AzureDevOpsIcon: Sw,
            BackIcon: Pw,
            BasketIcon: Ow,
            BatchAcceptIcon: Cw,
            BatchDenyIcon: Aw,
            BeakerIcon: Rw,
            BellIcon: Iw,
            BitbucketIcon: kw,
            BoldIcon: Mw,
            BookIcon: Dw,
            BookmarkHollowIcon: Vi,
            BookmarkIcon: Lw,
            BottomBarIcon: Nw,
            BottomBarToggleIcon: Fw,
            BoxIcon: jw,
            BranchIcon: Vw,
            BrowserIcon: Bw,
            ButtonIcon: _w,
            CPUIcon: zw,
            CalendarIcon: Uw,
            CameraIcon: Ww,
            CategoryIcon: Hw,
            CertificateIcon: Yw,
            ChangedIcon: Gw,
            ChatIcon: qw,
            CheckIcon: Bi,
            ChevronDownIcon: $w,
            ChevronLeftIcon: Kw,
            ChevronRightIcon: Xw,
            ChevronSmallDownIcon: Qw,
            ChevronSmallLeftIcon: Zw,
            ChevronSmallRightIcon: Jw,
            ChevronSmallUpIcon: eE,
            ChevronUpIcon: tE,
            ChromaticIcon: nE,
            ChromeIcon: rE,
            CircleHollowIcon: oE,
            CircleIcon: iE,
            ClearIcon: aE,
            CloseAltIcon: sE,
            CloseIcon: lE,
            CloudHollowIcon: cE,
            CloudIcon: uE,
            CogIcon: dE,
            CollapseIcon: pE,
            CommandIcon: hE,
            CommentAddIcon: fE,
            CommentIcon: mE,
            CommentsIcon: gE,
            CommitIcon: yE,
            CompassIcon: vE,
            ComponentDrivenIcon: bE,
            ComponentIcon: xE,
            ContrastIcon: wE,
            ControlsIcon: EE,
            CopyIcon: TE,
            CreditIcon: SE,
            CrossIcon: _i,
            DashboardIcon: PE,
            DatabaseIcon: OE,
            DeleteIcon: CE,
            DiamondIcon: AE,
            DirectionIcon: RE,
            DiscordIcon: IE,
            DocChartIcon: kE,
            DocListIcon: ME,
            DocumentIcon: DE,
            DownloadIcon: LE,
            DragIcon: NE,
            EditIcon: FE,
            EllipsisIcon: jE,
            EmailIcon: VE,
            ExpandAltIcon: BE,
            ExpandIcon: _E,
            EyeCloseIcon: zE,
            EyeIcon: UE,
            FaceHappyIcon: WE,
            FaceNeutralIcon: HE,
            FaceSadIcon: YE,
            FacebookIcon: GE,
            FailedIcon: qE,
            FastForwardIcon: $E,
            FigmaIcon: KE,
            FilterIcon: XE,
            FlagIcon: QE,
            FolderIcon: ZE,
            FormIcon: JE,
            GDriveIcon: eT,
            GithubIcon: tT,
            GitlabIcon: nT,
            GlobeIcon: rT,
            GoogleIcon: oT,
            GraphBarIcon: iT,
            GraphLineIcon: aT,
            GraphqlIcon: sT,
            GridAltIcon: lT,
            GridIcon: cT,
            GrowIcon: uT,
            HeartHollowIcon: dT,
            HeartIcon: pT,
            HomeIcon: hT,
            HourglassIcon: fT,
            InfoIcon: mT,
            ItalicIcon: gT,
            JumpToIcon: yT,
            KeyIcon: vT,
            LightningIcon: bT,
            LightningOffIcon: xT,
            LinkBrokenIcon: wT,
            LinkIcon: ET,
            LinkedinIcon: TT,
            LinuxIcon: ST,
            ListOrderedIcon: PT,
            ListUnorderedIcon: OT,
            LocationIcon: CT,
            LockIcon: AT,
            MarkdownIcon: RT,
            MarkupIcon: IT,
            MediumIcon: kT,
            MemoryIcon: MT,
            MenuIcon: DT,
            MergeIcon: LT,
            MirrorIcon: NT,
            MobileIcon: FT,
            MoonIcon: jT,
            NutIcon: VT,
            OutboxIcon: BT,
            OutlineIcon: _T,
            PaintBrushIcon: zT,
            PaperClipIcon: UT,
            ParagraphIcon: WT,
            PassedIcon: HT,
            PhoneIcon: YT,
            PhotoDragIcon: GT,
            PhotoIcon: qT,
            PinAltIcon: $T,
            PinIcon: KT,
            PlayBackIcon: XT,
            PlayIcon: QT,
            PlayNextIcon: ZT,
            PlusIcon: JT,
            PointerDefaultIcon: eS,
            PointerHandIcon: tS,
            PowerIcon: nS,
            PrintIcon: rS,
            ProceedIcon: oS,
            ProfileIcon: iS,
            PullRequestIcon: aS,
            QuestionIcon: sS,
            RSSIcon: lS,
            RedirectIcon: cS,
            ReduxIcon: uS,
            RefreshIcon: dS,
            ReplyIcon: pS,
            RepoIcon: hS,
            RequestChangeIcon: fS,
            RewindIcon: mS,
            RulerIcon: gS,
            SearchIcon: yS,
            ShareAltIcon: vS,
            ShareIcon: bS,
            ShieldIcon: xS,
            SideBySideIcon: wS,
            SidebarAltIcon: ES,
            SidebarAltToggleIcon: TS,
            SidebarIcon: SS,
            SidebarToggleIcon: PS,
            SpeakerIcon: OS,
            StackedIcon: CS,
            StarHollowIcon: AS,
            StarIcon: RS,
            StickerIcon: IS,
            StopAltIcon: kS,
            StopIcon: MS,
            StorybookIcon: DS,
            StructureIcon: LS,
            SubtractIcon: NS,
            SunIcon: FS,
            SupportIcon: jS,
            SwitchAltIcon: VS,
            SyncIcon: BS,
            TabletIcon: _S,
            ThumbsUpIcon: zS,
            TimeIcon: US,
            TimerIcon: WS,
            TransferIcon: HS,
            TrashIcon: YS,
            TwitterIcon: GS,
            TypeIcon: qS,
            UbuntuIcon: $S,
            UndoIcon: KS,
            UnfoldIcon: XS,
            UnlockIcon: QS,
            UnpinIcon: ZS,
            UploadIcon: JS,
            UserAddIcon: eP,
            UserAltIcon: tP,
            UserIcon: nP,
            UsersIcon: rP,
            VSCodeIcon: oP,
            VerifiedIcon: iP,
            VideoIcon: aP,
            WandIcon: sP,
            WatchIcon: lP,
            WindowsIcon: cP,
            WrenchIcon: uP,
            YoutubeIcon: dP,
            ZoomIcon: pP,
            ZoomOutIcon: hP,
            ZoomResetIcon: fP,
            iconList: mP,
          } = __STORYBOOK_ICONS__);
      });
    var xP,
      wP,
      EP,
      TP,
      SP,
      PP,
      OP,
      CP,
      AP,
      RP,
      IP,
      kP,
      MP,
      DP,
      LP,
      NP,
      FP,
      jP,
      VP,
      BP,
      _P,
      zP,
      UP,
      WP,
      HP,
      YP,
      GP,
      qP,
      $P,
      KP,
      XP,
      QP,
      ZP,
      JP,
      eO,
      tO,
      nO,
      rO,
      oO,
      iO,
      aO,
      sO,
      lO,
      cO,
      an,
      uO,
      dO,
      pO,
      hO,
      fO,
      mO,
      gO,
      yO,
      vO,
      bO,
      xO,
      wO,
      EO,
      TO,
      SO,
      PO,
      OO,
      CO,
      AO,
      RO,
      IO,
      kO,
      MO,
      Ui = Ve(() => {
        ce();
        ue();
        de();
        (xP = __STORYBOOK_COMPONENTS__),
          ({
            A: wP,
            ActionBar: EP,
            AddonPanel: TP,
            Badge: SP,
            Bar: PP,
            Blockquote: OP,
            Button: CP,
            ClipboardCode: AP,
            Code: RP,
            DL: IP,
            Div: kP,
            DocumentWrapper: MP,
            EmptyTabContent: DP,
            ErrorFormatter: LP,
            FlexBar: NP,
            Form: FP,
            H1: jP,
            H2: VP,
            H3: BP,
            H4: _P,
            H5: zP,
            H6: UP,
            HR: WP,
            IconButton: HP,
            IconButtonSkeleton: YP,
            Icons: GP,
            Img: qP,
            LI: $P,
            Link: KP,
            ListItem: XP,
            Loader: QP,
            OL: ZP,
            P: JP,
            Placeholder: eO,
            Pre: tO,
            ResetWrapper: nO,
            ScrollArea: rO,
            Separator: oO,
            Spaced: iO,
            Span: aO,
            StorybookIcon: sO,
            StorybookLogo: lO,
            Symbols: cO,
            SyntaxHighlighter: an,
            TT: uO,
            TabBar: dO,
            TabButton: pO,
            TabWrapper: hO,
            Table: fO,
            Tabs: mO,
            TabsState: gO,
            TooltipLinkList: yO,
            TooltipMessage: vO,
            TooltipNote: bO,
            UL: xO,
            WithTooltip: wO,
            WithTooltipPure: EO,
            Zoom: TO,
            codeCommon: SO,
            components: PO,
            createCopyToClipboardFunction: OO,
            getStoryHref: CO,
            icons: AO,
            interleaveSeparators: RO,
            nameSpaceClassNames: IO,
            resetComponents: kO,
            withReset: MO,
          } = __STORYBOOK_COMPONENTS__);
      });
    var hu = {};
    gu(hu, { default: () => Ib });
    function Nu(e) {
      var t = {};
      return function (n) {
        return t[n] === void 0 && (t[n] = e(n)), t[n];
      };
    }
    function qs(e) {
      return (t) => typeof t === e;
    }
    function zu(e, t) {
      let { length: n } = e;
      if (n !== t.length) return !1;
      for (let r = n; r-- !== 0; ) if (!Pe(e[r], t[r])) return !1;
      return !0;
    }
    function Uu(e, t) {
      if (e.byteLength !== t.byteLength) return !1;
      let n = new DataView(e.buffer),
        r = new DataView(t.buffer),
        o = e.byteLength;
      for (; o--; ) if (n.getUint8(o) !== r.getUint8(o)) return !1;
      return !0;
    }
    function Wu(e, t) {
      if (e.size !== t.size) return !1;
      for (let n of e.entries()) if (!t.has(n[0])) return !1;
      for (let n of e.entries()) if (!Pe(n[1], t.get(n[0]))) return !1;
      return !0;
    }
    function Hu(e, t) {
      if (e.size !== t.size) return !1;
      for (let n of e.entries()) if (!t.has(n[0])) return !1;
      return !0;
    }
    function Pe(e, t) {
      if (e === t) return !0;
      if (e && Gi(e) && t && Gi(t)) {
        if (e.constructor !== t.constructor) return !1;
        if (Array.isArray(e) && Array.isArray(t)) return zu(e, t);
        if (e instanceof Map && t instanceof Map) return Wu(e, t);
        if (e instanceof Set && t instanceof Set) return Hu(e, t);
        if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) return Uu(e, t);
        if (Yi(e) && Yi(t)) return e.source === t.source && e.flags === t.flags;
        if (e.valueOf !== Object.prototype.valueOf)
          return e.valueOf() === t.valueOf();
        if (e.toString !== Object.prototype.toString)
          return e.toString() === t.toString();
        let n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (let o = n.length; o-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(t, n[o])) return !1;
        for (let o = n.length; o-- !== 0; ) {
          let i = n[o];
          if (!(i === '_owner' && e.$$typeof) && !Pe(e[i], t[i])) return !1;
        }
        return !0;
      }
      return Number.isNaN(e) && Number.isNaN(t) ? !0 : e === t;
    }
    function Tr(e) {
      let t = Object.prototype.toString.call(e).slice(8, -1);
      if (/HTML\w+Element/.test(t)) return 'HTMLElement';
      if (qu(t)) return t;
    }
    function Ue(e) {
      return (t) => Tr(t) === e;
    }
    function qu(e) {
      return Yu.includes(e);
    }
    function Jt(e) {
      return (t) => typeof t === e;
    }
    function $u(e) {
      return Gu.includes(e);
    }
    function A(e) {
      if (e === null) return 'null';
      switch (typeof e) {
        case 'bigint':
          return 'bigint';
        case 'boolean':
          return 'boolean';
        case 'number':
          return 'number';
        case 'string':
          return 'string';
        case 'symbol':
          return 'symbol';
        case 'undefined':
          return 'undefined';
      }
      return A.array(e)
        ? 'Array'
        : A.plainFunction(e)
        ? 'Function'
        : Tr(e) || 'Object';
    }
    function Xu(...e) {
      return e.every((t) => I.string(t) || I.array(t) || I.plainObject(t));
    }
    function Qu(e, t, n) {
      return $s(e, t)
        ? [e, t].every(I.array)
          ? !e.some(Qi(n)) && t.some(Qi(n))
          : [e, t].every(I.plainObject)
          ? !Object.entries(e).some(Xi(n)) && Object.entries(t).some(Xi(n))
          : t === n
        : !1;
    }
    function qi(e, t, n) {
      let { actual: r, key: o, previous: i, type: a } = n,
        s = $e(e, o),
        c = $e(t, o),
        l = [s, c].every(I.number) && (a === 'increased' ? s < c : s > c);
      return (
        I.undefined(r) || (l = l && c === r),
        I.undefined(i) || (l = l && s === i),
        l
      );
    }
    function $i(e, t, n) {
      let { key: r, type: o, value: i } = n,
        a = $e(e, r),
        s = $e(t, r),
        c = o === 'added' ? a : s,
        l = o === 'added' ? s : a;
      if (!I.nullOrUndefined(i)) {
        if (I.defined(c)) {
          if (I.array(c) || I.plainObject(c)) return Qu(c, l, i);
        } else return Pe(l, i);
        return !1;
      }
      return [a, s].every(I.array)
        ? !l.every(zo(c))
        : [a, s].every(I.plainObject)
        ? Zu(Object.keys(c), Object.keys(l))
        : ![a, s].every((u) => I.primitive(u) && I.defined(u)) &&
          (o === 'added'
            ? !I.defined(a) && I.defined(s)
            : I.defined(a) && !I.defined(s));
    }
    function Ki(e, t, { key: n } = {}) {
      let r = $e(e, n),
        o = $e(t, n);
      if (!$s(r, o)) throw new TypeError('Inputs have different types');
      if (!Xu(r, o)) throw new TypeError("Inputs don't have length");
      return (
        [r, o].every(I.plainObject) &&
          ((r = Object.keys(r)), (o = Object.keys(o))),
        [r, o]
      );
    }
    function Xi(e) {
      return ([t, n]) =>
        I.array(e)
          ? Pe(e, n) || e.some((r) => Pe(r, n) || (I.array(n) && zo(n)(r)))
          : I.plainObject(e) && e[t]
          ? !!e[t] && Pe(e[t], n)
          : Pe(e, n);
    }
    function Zu(e, t) {
      return t.some((n) => !e.includes(n));
    }
    function Qi(e) {
      return (t) =>
        I.array(e)
          ? e.some((n) => Pe(n, t) || (I.array(t) && zo(t)(n)))
          : Pe(e, t);
    }
    function sn(e, t) {
      return I.array(e) ? e.some((n) => Pe(n, t)) : Pe(e, t);
    }
    function zo(e) {
      return (t) => e.some((n) => Pe(n, t));
    }
    function $s(...e) {
      return (
        e.every(I.array) ||
        e.every(I.number) ||
        e.every(I.plainObject) ||
        e.every(I.string)
      );
    }
    function $e(e, t) {
      return I.plainObject(e) || I.array(e)
        ? I.string(t)
          ? t.split('.').reduce((n, r) => n && n[r], e)
          : I.number(t)
          ? e[t]
          : e
        : e;
    }
    function lr(e, t) {
      if ([e, t].some(I.nullOrUndefined))
        throw new Error('Missing required parameters');
      if (![e, t].every((n) => I.plainObject(n) || I.array(n)))
        throw new Error('Expected plain objects or array');
      return {
        added: (n, r) => {
          try {
            return $i(e, t, { key: n, type: 'added', value: r });
          } catch {
            return !1;
          }
        },
        changed: (n, r, o) => {
          try {
            let i = $e(e, n),
              a = $e(t, n),
              s = I.defined(r),
              c = I.defined(o);
            if (s || c) {
              let l = c ? sn(o, i) : !sn(r, i),
                u = sn(r, a);
              return l && u;
            }
            return [i, a].every(I.array) || [i, a].every(I.plainObject)
              ? !Pe(i, a)
              : i !== a;
          } catch {
            return !1;
          }
        },
        changedFrom: (n, r, o) => {
          if (!I.defined(n)) return !1;
          try {
            let i = $e(e, n),
              a = $e(t, n),
              s = I.defined(o);
            return sn(r, i) && (s ? sn(o, a) : !s);
          } catch {
            return !1;
          }
        },
        decreased: (n, r, o) => {
          if (!I.defined(n)) return !1;
          try {
            return qi(e, t, {
              key: n,
              actual: r,
              previous: o,
              type: 'decreased',
            });
          } catch {
            return !1;
          }
        },
        emptied: (n) => {
          try {
            let [r, o] = Ki(e, t, { key: n });
            return !!r.length && !o.length;
          } catch {
            return !1;
          }
        },
        filled: (n) => {
          try {
            let [r, o] = Ki(e, t, { key: n });
            return !r.length && !!o.length;
          } catch {
            return !1;
          }
        },
        increased: (n, r, o) => {
          if (!I.defined(n)) return !1;
          try {
            return qi(e, t, {
              key: n,
              actual: r,
              previous: o,
              type: 'increased',
            });
          } catch {
            return !1;
          }
        },
        removed: (n, r) => {
          try {
            return $i(e, t, { key: n, type: 'removed', value: r });
          } catch {
            return !1;
          }
        },
      };
    }
    function ed(e) {
      return Object.keys(e);
    }
    function Xs(e, ...t) {
      if (!I.plainObject(e)) throw new TypeError('Expected an object');
      let n = {};
      for (let r in e)
        ({}).hasOwnProperty.call(e, r) && (t.includes(r) || (n[r] = e[r]));
      return n;
    }
    function td(e, ...t) {
      if (!I.plainObject(e)) throw new TypeError('Expected an object');
      if (!t.length) return e;
      let n = {};
      for (let r in e)
        ({}).hasOwnProperty.call(e, r) && t.includes(r) && (n[r] = e[r]);
      return n;
    }
    function rd(e) {
      var t = !1;
      return function () {
        t ||
          ((t = !0),
          window.Promise.resolve().then(function () {
            (t = !1), e();
          }));
      };
    }
    function od(e) {
      var t = !1;
      return function () {
        t ||
          ((t = !0),
          setTimeout(function () {
            (t = !1), e();
          }, nd));
      };
    }
    function Qs(e) {
      var t = {};
      return e && t.toString.call(e) === '[object Function]';
    }
    function Dt(e, t) {
      if (e.nodeType !== 1) return [];
      var n = e.ownerDocument.defaultView,
        r = n.getComputedStyle(e, null);
      return t ? r[t] : r;
    }
    function Uo(e) {
      return e.nodeName === 'HTML' ? e : e.parentNode || e.host;
    }
    function Cn(e) {
      if (!e) return document.body;
      switch (e.nodeName) {
        case 'HTML':
        case 'BODY':
          return e.ownerDocument.body;
        case '#document':
          return e.body;
      }
      var t = Dt(e),
        n = t.overflow,
        r = t.overflowX,
        o = t.overflowY;
      return /(auto|scroll|overlay)/.test(n + o + r) ? e : Cn(Uo(e));
    }
    function Zs(e) {
      return e && e.referenceNode ? e.referenceNode : e;
    }
    function en(e) {
      return e === 11 ? Zi : e === 10 ? Ji : Zi || Ji;
    }
    function qt(e) {
      if (!e) return document.documentElement;
      for (
        var t = en(10) ? document.body : null, n = e.offsetParent || null;
        n === t && e.nextElementSibling;

      )
        n = (e = e.nextElementSibling).offsetParent;
      var r = n && n.nodeName;
      return !r || r === 'BODY' || r === 'HTML'
        ? e
          ? e.ownerDocument.documentElement
          : document.documentElement
        : ['TH', 'TD', 'TABLE'].indexOf(n.nodeName) !== -1 &&
          Dt(n, 'position') === 'static'
        ? qt(n)
        : n;
    }
    function sd(e) {
      var t = e.nodeName;
      return t === 'BODY' ? !1 : t === 'HTML' || qt(e.firstElementChild) === e;
    }
    function fo(e) {
      return e.parentNode !== null ? fo(e.parentNode) : e;
    }
    function cr(e, t) {
      if (!e || !e.nodeType || !t || !t.nodeType)
        return document.documentElement;
      var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
        r = n ? e : t,
        o = n ? t : e,
        i = document.createRange();
      i.setStart(r, 0), i.setEnd(o, 0);
      var a = i.commonAncestorContainer;
      if ((e !== a && t !== a) || r.contains(o)) return sd(a) ? a : qt(a);
      var s = fo(e);
      return s.host ? cr(s.host, t) : cr(e, fo(t).host);
    }
    function $t(e) {
      var t =
          arguments.length > 1 && arguments[1] !== void 0
            ? arguments[1]
            : 'top',
        n = t === 'top' ? 'scrollTop' : 'scrollLeft',
        r = e.nodeName;
      if (r === 'BODY' || r === 'HTML') {
        var o = e.ownerDocument.documentElement,
          i = e.ownerDocument.scrollingElement || o;
        return i[n];
      }
      return e[n];
    }
    function ld(e, t) {
      var n =
          arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
        r = $t(t, 'top'),
        o = $t(t, 'left'),
        i = n ? -1 : 1;
      return (
        (e.top += r * i),
        (e.bottom += r * i),
        (e.left += o * i),
        (e.right += o * i),
        e
      );
    }
    function ea(e, t) {
      var n = t === 'x' ? 'Left' : 'Top',
        r = n === 'Left' ? 'Right' : 'Bottom';
      return (
        parseFloat(e['border' + n + 'Width']) +
        parseFloat(e['border' + r + 'Width'])
      );
    }
    function ta(e, t, n, r) {
      return Math.max(
        t['offset' + e],
        t['scroll' + e],
        n['client' + e],
        n['offset' + e],
        n['scroll' + e],
        en(10)
          ? parseInt(n['offset' + e]) +
              parseInt(r['margin' + (e === 'Height' ? 'Top' : 'Left')]) +
              parseInt(r['margin' + (e === 'Height' ? 'Bottom' : 'Right')])
          : 0
      );
    }
    function Js(e) {
      var t = e.body,
        n = e.documentElement,
        r = en(10) && getComputedStyle(n);
      return { height: ta('Height', t, n, r), width: ta('Width', t, n, r) };
    }
    function bt(e) {
      return Fe({}, e, { right: e.left + e.width, bottom: e.top + e.height });
    }
    function mo(e) {
      var t = {};
      try {
        if (en(10)) {
          t = e.getBoundingClientRect();
          var n = $t(e, 'top'),
            r = $t(e, 'left');
          (t.top += n), (t.left += r), (t.bottom += n), (t.right += r);
        } else t = e.getBoundingClientRect();
      } catch {}
      var o = {
          left: t.left,
          top: t.top,
          width: t.right - t.left,
          height: t.bottom - t.top,
        },
        i = e.nodeName === 'HTML' ? Js(e.ownerDocument) : {},
        a = i.width || e.clientWidth || o.width,
        s = i.height || e.clientHeight || o.height,
        c = e.offsetWidth - a,
        l = e.offsetHeight - s;
      if (c || l) {
        var u = Dt(e);
        (c -= ea(u, 'x')), (l -= ea(u, 'y')), (o.width -= c), (o.height -= l);
      }
      return bt(o);
    }
    function Wo(e, t) {
      var n =
          arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
        r = en(10),
        o = t.nodeName === 'HTML',
        i = mo(e),
        a = mo(t),
        s = Cn(e),
        c = Dt(t),
        l = parseFloat(c.borderTopWidth),
        u = parseFloat(c.borderLeftWidth);
      n && o && ((a.top = Math.max(a.top, 0)), (a.left = Math.max(a.left, 0)));
      var d = bt({
        top: i.top - a.top - l,
        left: i.left - a.left - u,
        width: i.width,
        height: i.height,
      });
      if (((d.marginTop = 0), (d.marginLeft = 0), !r && o)) {
        var p = parseFloat(c.marginTop),
          h = parseFloat(c.marginLeft);
        (d.top -= l - p),
          (d.bottom -= l - p),
          (d.left -= u - h),
          (d.right -= u - h),
          (d.marginTop = p),
          (d.marginLeft = h);
      }
      return (
        (r && !n ? t.contains(s) : t === s && s.nodeName !== 'BODY') &&
          (d = ld(d, t)),
        d
      );
    }
    function dd(e) {
      var t =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
        n = e.ownerDocument.documentElement,
        r = Wo(e, n),
        o = Math.max(n.clientWidth, window.innerWidth || 0),
        i = Math.max(n.clientHeight, window.innerHeight || 0),
        a = t ? 0 : $t(n),
        s = t ? 0 : $t(n, 'left'),
        c = {
          top: a - r.top + r.marginTop,
          left: s - r.left + r.marginLeft,
          width: o,
          height: i,
        };
      return bt(c);
    }
    function el(e) {
      var t = e.nodeName;
      if (t === 'BODY' || t === 'HTML') return !1;
      if (Dt(e, 'position') === 'fixed') return !0;
      var n = Uo(e);
      return n ? el(n) : !1;
    }
    function tl(e) {
      if (!e || !e.parentElement || en()) return document.documentElement;
      for (var t = e.parentElement; t && Dt(t, 'transform') === 'none'; )
        t = t.parentElement;
      return t || document.documentElement;
    }
    function Ho(e, t, n, r) {
      var o =
          arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1,
        i = { top: 0, left: 0 },
        a = o ? tl(e) : cr(e, Zs(t));
      if (r === 'viewport') i = dd(a, o);
      else {
        var s = void 0;
        r === 'scrollParent'
          ? ((s = Cn(Uo(t))),
            s.nodeName === 'BODY' && (s = e.ownerDocument.documentElement))
          : r === 'window'
          ? (s = e.ownerDocument.documentElement)
          : (s = r);
        var c = Wo(s, a, o);
        if (s.nodeName === 'HTML' && !el(a)) {
          var l = Js(e.ownerDocument),
            u = l.height,
            d = l.width;
          (i.top += c.top - c.marginTop),
            (i.bottom = u + c.top),
            (i.left += c.left - c.marginLeft),
            (i.right = d + c.left);
        } else i = c;
      }
      n = n || 0;
      var p = typeof n == 'number';
      return (
        (i.left += p ? n : n.left || 0),
        (i.top += p ? n : n.top || 0),
        (i.right -= p ? n : n.right || 0),
        (i.bottom -= p ? n : n.bottom || 0),
        i
      );
    }
    function pd(e) {
      var t = e.width,
        n = e.height;
      return t * n;
    }
    function nl(e, t, n, r, o) {
      var i =
        arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
      if (e.indexOf('auto') === -1) return e;
      var a = Ho(n, r, i, o),
        s = {
          top: { width: a.width, height: t.top - a.top },
          right: { width: a.right - t.right, height: a.height },
          bottom: { width: a.width, height: a.bottom - t.bottom },
          left: { width: t.left - a.left, height: a.height },
        },
        c = Object.keys(s)
          .map(function (p) {
            return Fe({ key: p }, s[p], { area: pd(s[p]) });
          })
          .sort(function (p, h) {
            return h.area - p.area;
          }),
        l = c.filter(function (p) {
          var h = p.width,
            f = p.height;
          return h >= n.clientWidth && f >= n.clientHeight;
        }),
        u = l.length > 0 ? l[0].key : c[0].key,
        d = e.split('-')[1];
      return u + (d ? '-' + d : '');
    }
    function rl(e, t, n) {
      var r =
          arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null,
        o = r ? tl(t) : cr(t, Zs(n));
      return Wo(n, o, r);
    }
    function ol(e) {
      var t = e.ownerDocument.defaultView,
        n = t.getComputedStyle(e),
        r = parseFloat(n.marginTop || 0) + parseFloat(n.marginBottom || 0),
        o = parseFloat(n.marginLeft || 0) + parseFloat(n.marginRight || 0),
        i = { width: e.offsetWidth + o, height: e.offsetHeight + r };
      return i;
    }
    function ur(e) {
      var t = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
      return e.replace(/left|right|bottom|top/g, function (n) {
        return t[n];
      });
    }
    function il(e, t, n) {
      n = n.split('-')[0];
      var r = ol(e),
        o = { width: r.width, height: r.height },
        i = ['right', 'left'].indexOf(n) !== -1,
        a = i ? 'top' : 'left',
        s = i ? 'left' : 'top',
        c = i ? 'height' : 'width',
        l = i ? 'width' : 'height';
      return (
        (o[a] = t[a] + t[c] / 2 - r[c] / 2),
        n === s ? (o[s] = t[s] - r[l]) : (o[s] = t[ur(s)]),
        o
      );
    }
    function An(e, t) {
      return Array.prototype.find ? e.find(t) : e.filter(t)[0];
    }
    function hd(e, t, n) {
      if (Array.prototype.findIndex)
        return e.findIndex(function (o) {
          return o[t] === n;
        });
      var r = An(e, function (o) {
        return o[t] === n;
      });
      return e.indexOf(r);
    }
    function al(e, t, n) {
      var r = n === void 0 ? e : e.slice(0, hd(e, 'name', n));
      return (
        r.forEach(function (o) {
          o.function &&
            console.warn(
              '`modifier.function` is deprecated, use `modifier.fn`!'
            );
          var i = o.function || o.fn;
          o.enabled &&
            Qs(i) &&
            ((t.offsets.popper = bt(t.offsets.popper)),
            (t.offsets.reference = bt(t.offsets.reference)),
            (t = i(t, o)));
        }),
        t
      );
    }
    function fd() {
      if (!this.state.isDestroyed) {
        var e = {
          instance: this,
          styles: {},
          arrowStyles: {},
          attributes: {},
          flipped: !1,
          offsets: {},
        };
        (e.offsets.reference = rl(
          this.state,
          this.popper,
          this.reference,
          this.options.positionFixed
        )),
          (e.placement = nl(
            this.options.placement,
            e.offsets.reference,
            this.popper,
            this.reference,
            this.options.modifiers.flip.boundariesElement,
            this.options.modifiers.flip.padding
          )),
          (e.originalPlacement = e.placement),
          (e.positionFixed = this.options.positionFixed),
          (e.offsets.popper = il(
            this.popper,
            e.offsets.reference,
            e.placement
          )),
          (e.offsets.popper.position = this.options.positionFixed
            ? 'fixed'
            : 'absolute'),
          (e = al(this.modifiers, e)),
          this.state.isCreated
            ? this.options.onUpdate(e)
            : ((this.state.isCreated = !0), this.options.onCreate(e));
      }
    }
    function sl(e, t) {
      return e.some(function (n) {
        var r = n.name,
          o = n.enabled;
        return o && r === t;
      });
    }
    function Yo(e) {
      for (
        var t = [!1, 'ms', 'Webkit', 'Moz', 'O'],
          n = e.charAt(0).toUpperCase() + e.slice(1),
          r = 0;
        r < t.length;
        r++
      ) {
        var o = t[r],
          i = o ? '' + o + n : e;
        if (typeof document.body.style[i] < 'u') return i;
      }
      return null;
    }
    function md() {
      return (
        (this.state.isDestroyed = !0),
        sl(this.modifiers, 'applyStyle') &&
          (this.popper.removeAttribute('x-placement'),
          (this.popper.style.position = ''),
          (this.popper.style.top = ''),
          (this.popper.style.left = ''),
          (this.popper.style.right = ''),
          (this.popper.style.bottom = ''),
          (this.popper.style.willChange = ''),
          (this.popper.style[Yo('transform')] = '')),
        this.disableEventListeners(),
        this.options.removeOnDestroy &&
          this.popper.parentNode.removeChild(this.popper),
        this
      );
    }
    function ll(e) {
      var t = e.ownerDocument;
      return t ? t.defaultView : window;
    }
    function cl(e, t, n, r) {
      var o = e.nodeName === 'BODY',
        i = o ? e.ownerDocument.defaultView : e;
      i.addEventListener(t, n, { passive: !0 }),
        o || cl(Cn(i.parentNode), t, n, r),
        r.push(i);
    }
    function gd(e, t, n, r) {
      (n.updateBound = r),
        ll(e).addEventListener('resize', n.updateBound, { passive: !0 });
      var o = Cn(e);
      return (
        cl(o, 'scroll', n.updateBound, n.scrollParents),
        (n.scrollElement = o),
        (n.eventsEnabled = !0),
        n
      );
    }
    function yd() {
      this.state.eventsEnabled ||
        (this.state = gd(
          this.reference,
          this.options,
          this.state,
          this.scheduleUpdate
        ));
    }
    function vd(e, t) {
      return (
        ll(e).removeEventListener('resize', t.updateBound),
        t.scrollParents.forEach(function (n) {
          n.removeEventListener('scroll', t.updateBound);
        }),
        (t.updateBound = null),
        (t.scrollParents = []),
        (t.scrollElement = null),
        (t.eventsEnabled = !1),
        t
      );
    }
    function bd() {
      this.state.eventsEnabled &&
        (cancelAnimationFrame(this.scheduleUpdate),
        (this.state = vd(this.reference, this.state)));
    }
    function Go(e) {
      return e !== '' && !isNaN(parseFloat(e)) && isFinite(e);
    }
    function go(e, t) {
      Object.keys(t).forEach(function (n) {
        var r = '';
        ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(n) !==
          -1 &&
          Go(t[n]) &&
          (r = 'px'),
          (e.style[n] = t[n] + r);
      });
    }
    function xd(e, t) {
      Object.keys(t).forEach(function (n) {
        var r = t[n];
        r !== !1 ? e.setAttribute(n, t[n]) : e.removeAttribute(n);
      });
    }
    function wd(e) {
      return (
        go(e.instance.popper, e.styles),
        xd(e.instance.popper, e.attributes),
        e.arrowElement &&
          Object.keys(e.arrowStyles).length &&
          go(e.arrowElement, e.arrowStyles),
        e
      );
    }
    function Ed(e, t, n, r, o) {
      var i = rl(o, t, e, n.positionFixed),
        a = nl(
          n.placement,
          i,
          t,
          e,
          n.modifiers.flip.boundariesElement,
          n.modifiers.flip.padding
        );
      return (
        t.setAttribute('x-placement', a),
        go(t, { position: n.positionFixed ? 'fixed' : 'absolute' }),
        n
      );
    }
    function Td(e, t) {
      var n = e.offsets,
        r = n.popper,
        o = n.reference,
        i = Math.round,
        a = Math.floor,
        s = function (x) {
          return x;
        },
        c = i(o.width),
        l = i(r.width),
        u = ['left', 'right'].indexOf(e.placement) !== -1,
        d = e.placement.indexOf('-') !== -1,
        p = c % 2 === l % 2,
        h = c % 2 === 1 && l % 2 === 1,
        f = t ? (u || d || p ? i : a) : s,
        m = t ? i : s;
      return {
        left: f(h && !d && t ? r.left - 1 : r.left),
        top: m(r.top),
        bottom: m(r.bottom),
        right: f(r.right),
      };
    }
    function Pd(e, t) {
      var n = t.x,
        r = t.y,
        o = e.offsets.popper,
        i = An(e.instance.modifiers, function (y) {
          return y.name === 'applyStyle';
        }).gpuAcceleration;
      i !== void 0 &&
        console.warn(
          'WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!'
        );
      var a = i !== void 0 ? i : t.gpuAcceleration,
        s = qt(e.instance.popper),
        c = mo(s),
        l = { position: o.position },
        u = Td(e, window.devicePixelRatio < 2 || !Sd),
        d = n === 'bottom' ? 'top' : 'bottom',
        p = r === 'right' ? 'left' : 'right',
        h = Yo('transform'),
        f = void 0,
        m = void 0;
      if (
        (d === 'bottom'
          ? s.nodeName === 'HTML'
            ? (m = -s.clientHeight + u.bottom)
            : (m = -c.height + u.bottom)
          : (m = u.top),
        p === 'right'
          ? s.nodeName === 'HTML'
            ? (f = -s.clientWidth + u.right)
            : (f = -c.width + u.right)
          : (f = u.left),
        a && h)
      )
        (l[h] = 'translate3d(' + f + 'px, ' + m + 'px, 0)'),
          (l[d] = 0),
          (l[p] = 0),
          (l.willChange = 'transform');
      else {
        var x = d === 'bottom' ? -1 : 1,
          v = p === 'right' ? -1 : 1;
        (l[d] = m * x), (l[p] = f * v), (l.willChange = d + ', ' + p);
      }
      var b = { 'x-placement': e.placement };
      return (
        (e.attributes = Fe({}, b, e.attributes)),
        (e.styles = Fe({}, l, e.styles)),
        (e.arrowStyles = Fe({}, e.offsets.arrow, e.arrowStyles)),
        e
      );
    }
    function ul(e, t, n) {
      var r = An(e, function (s) {
          var c = s.name;
          return c === t;
        }),
        o =
          !!r &&
          e.some(function (s) {
            return s.name === n && s.enabled && s.order < r.order;
          });
      if (!o) {
        var i = '`' + t + '`',
          a = '`' + n + '`';
        console.warn(
          a +
            ' modifier is required by ' +
            i +
            ' modifier in order to work, be sure to include it before ' +
            i +
            '!'
        );
      }
      return o;
    }
    function Od(e, t) {
      var n;
      if (!ul(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
      var r = t.element;
      if (typeof r == 'string') {
        if (((r = e.instance.popper.querySelector(r)), !r)) return e;
      } else if (!e.instance.popper.contains(r))
        return (
          console.warn(
            'WARNING: `arrow.element` must be child of its popper element!'
          ),
          e
        );
      var o = e.placement.split('-')[0],
        i = e.offsets,
        a = i.popper,
        s = i.reference,
        c = ['left', 'right'].indexOf(o) !== -1,
        l = c ? 'height' : 'width',
        u = c ? 'Top' : 'Left',
        d = u.toLowerCase(),
        p = c ? 'left' : 'top',
        h = c ? 'bottom' : 'right',
        f = ol(r)[l];
      s[h] - f < a[d] && (e.offsets.popper[d] -= a[d] - (s[h] - f)),
        s[d] + f > a[h] && (e.offsets.popper[d] += s[d] + f - a[h]),
        (e.offsets.popper = bt(e.offsets.popper));
      var m = s[d] + s[l] / 2 - f / 2,
        x = Dt(e.instance.popper),
        v = parseFloat(x['margin' + u]),
        b = parseFloat(x['border' + u + 'Width']),
        y = m - e.offsets.popper[d] - v - b;
      return (
        (y = Math.max(Math.min(a[l] - f, y), 0)),
        (e.arrowElement = r),
        (e.offsets.arrow =
          ((n = {}), Kt(n, d, Math.round(y)), Kt(n, p, ''), n)),
        e
      );
    }
    function Cd(e) {
      return e === 'end' ? 'start' : e === 'start' ? 'end' : e;
    }
    function na(e) {
      var t =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
        n = Ur.indexOf(e),
        r = Ur.slice(n + 1).concat(Ur.slice(0, n));
      return t ? r.reverse() : r;
    }
    function Ad(e, t) {
      if (
        sl(e.instance.modifiers, 'inner') ||
        (e.flipped && e.placement === e.originalPlacement)
      )
        return e;
      var n = Ho(
          e.instance.popper,
          e.instance.reference,
          t.padding,
          t.boundariesElement,
          e.positionFixed
        ),
        r = e.placement.split('-')[0],
        o = ur(r),
        i = e.placement.split('-')[1] || '',
        a = [];
      switch (t.behavior) {
        case Wr.FLIP:
          a = [r, o];
          break;
        case Wr.CLOCKWISE:
          a = na(r);
          break;
        case Wr.COUNTERCLOCKWISE:
          a = na(r, !0);
          break;
        default:
          a = t.behavior;
      }
      return (
        a.forEach(function (s, c) {
          if (r !== s || a.length === c + 1) return e;
          (r = e.placement.split('-')[0]), (o = ur(r));
          var l = e.offsets.popper,
            u = e.offsets.reference,
            d = Math.floor,
            p =
              (r === 'left' && d(l.right) > d(u.left)) ||
              (r === 'right' && d(l.left) < d(u.right)) ||
              (r === 'top' && d(l.bottom) > d(u.top)) ||
              (r === 'bottom' && d(l.top) < d(u.bottom)),
            h = d(l.left) < d(n.left),
            f = d(l.right) > d(n.right),
            m = d(l.top) < d(n.top),
            x = d(l.bottom) > d(n.bottom),
            v =
              (r === 'left' && h) ||
              (r === 'right' && f) ||
              (r === 'top' && m) ||
              (r === 'bottom' && x),
            b = ['top', 'bottom'].indexOf(r) !== -1,
            y =
              !!t.flipVariations &&
              ((b && i === 'start' && h) ||
                (b && i === 'end' && f) ||
                (!b && i === 'start' && m) ||
                (!b && i === 'end' && x)),
            w =
              !!t.flipVariationsByContent &&
              ((b && i === 'start' && f) ||
                (b && i === 'end' && h) ||
                (!b && i === 'start' && x) ||
                (!b && i === 'end' && m)),
            E = y || w;
          (p || v || E) &&
            ((e.flipped = !0),
            (p || v) && (r = a[c + 1]),
            E && (i = Cd(i)),
            (e.placement = r + (i ? '-' + i : '')),
            (e.offsets.popper = Fe(
              {},
              e.offsets.popper,
              il(e.instance.popper, e.offsets.reference, e.placement)
            )),
            (e = al(e.instance.modifiers, e, 'flip')));
        }),
        e
      );
    }
    function Rd(e) {
      var t = e.offsets,
        n = t.popper,
        r = t.reference,
        o = e.placement.split('-')[0],
        i = Math.floor,
        a = ['top', 'bottom'].indexOf(o) !== -1,
        s = a ? 'right' : 'bottom',
        c = a ? 'left' : 'top',
        l = a ? 'width' : 'height';
      return (
        n[s] < i(r[c]) && (e.offsets.popper[c] = i(r[c]) - n[l]),
        n[c] > i(r[s]) && (e.offsets.popper[c] = i(r[s])),
        e
      );
    }
    function Id(e, t, n, r) {
      var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
        i = +o[1],
        a = o[2];
      if (!i) return e;
      if (a.indexOf('%') === 0) {
        var s = void 0;
        switch (a) {
          case '%p':
            s = n;
            break;
          case '%':
          case '%r':
          default:
            s = r;
        }
        var c = bt(s);
        return (c[t] / 100) * i;
      } else if (a === 'vh' || a === 'vw') {
        var l = void 0;
        return (
          a === 'vh'
            ? (l = Math.max(
                document.documentElement.clientHeight,
                window.innerHeight || 0
              ))
            : (l = Math.max(
                document.documentElement.clientWidth,
                window.innerWidth || 0
              )),
          (l / 100) * i
        );
      } else return i;
    }
    function kd(e, t, n, r) {
      var o = [0, 0],
        i = ['right', 'left'].indexOf(r) !== -1,
        a = e.split(/(\+|\-)/).map(function (u) {
          return u.trim();
        }),
        s = a.indexOf(
          An(a, function (u) {
            return u.search(/,|\s/) !== -1;
          })
        );
      a[s] &&
        a[s].indexOf(',') === -1 &&
        console.warn(
          'Offsets separated by white space(s) are deprecated, use a comma (,) instead.'
        );
      var c = /\s*,\s*|\s+/,
        l =
          s !== -1
            ? [
                a.slice(0, s).concat([a[s].split(c)[0]]),
                [a[s].split(c)[1]].concat(a.slice(s + 1)),
              ]
            : [a];
      return (
        (l = l.map(function (u, d) {
          var p = (d === 1 ? !i : i) ? 'height' : 'width',
            h = !1;
          return u
            .reduce(function (f, m) {
              return f[f.length - 1] === '' && ['+', '-'].indexOf(m) !== -1
                ? ((f[f.length - 1] = m), (h = !0), f)
                : h
                ? ((f[f.length - 1] += m), (h = !1), f)
                : f.concat(m);
            }, [])
            .map(function (f) {
              return Id(f, p, t, n);
            });
        })),
        l.forEach(function (u, d) {
          u.forEach(function (p, h) {
            Go(p) && (o[d] += p * (u[h - 1] === '-' ? -1 : 1));
          });
        }),
        o
      );
    }
    function Md(e, t) {
      var n = t.offset,
        r = e.placement,
        o = e.offsets,
        i = o.popper,
        a = o.reference,
        s = r.split('-')[0],
        c = void 0;
      return (
        Go(+n) ? (c = [+n, 0]) : (c = kd(n, i, a, s)),
        s === 'left'
          ? ((i.top += c[0]), (i.left -= c[1]))
          : s === 'right'
          ? ((i.top += c[0]), (i.left += c[1]))
          : s === 'top'
          ? ((i.left += c[0]), (i.top -= c[1]))
          : s === 'bottom' && ((i.left += c[0]), (i.top += c[1])),
        (e.popper = i),
        e
      );
    }
    function Dd(e, t) {
      var n = t.boundariesElement || qt(e.instance.popper);
      e.instance.reference === n && (n = qt(n));
      var r = Yo('transform'),
        o = e.instance.popper.style,
        i = o.top,
        a = o.left,
        s = o[r];
      (o.top = ''), (o.left = ''), (o[r] = '');
      var c = Ho(
        e.instance.popper,
        e.instance.reference,
        t.padding,
        n,
        e.positionFixed
      );
      (o.top = i), (o.left = a), (o[r] = s), (t.boundaries = c);
      var l = t.priority,
        u = e.offsets.popper,
        d = {
          primary: function (p) {
            var h = u[p];
            return (
              u[p] < c[p] &&
                !t.escapeWithReference &&
                (h = Math.max(u[p], c[p])),
              Kt({}, p, h)
            );
          },
          secondary: function (p) {
            var h = p === 'right' ? 'left' : 'top',
              f = u[h];
            return (
              u[p] > c[p] &&
                !t.escapeWithReference &&
                (f = Math.min(
                  u[h],
                  c[p] - (p === 'right' ? u.width : u.height)
                )),
              Kt({}, h, f)
            );
          },
        };
      return (
        l.forEach(function (p) {
          var h = ['left', 'top'].indexOf(p) !== -1 ? 'primary' : 'secondary';
          u = Fe({}, u, d[h](p));
        }),
        (e.offsets.popper = u),
        e
      );
    }
    function Ld(e) {
      var t = e.placement,
        n = t.split('-')[0],
        r = t.split('-')[1];
      if (r) {
        var o = e.offsets,
          i = o.reference,
          a = o.popper,
          s = ['bottom', 'top'].indexOf(n) !== -1,
          c = s ? 'left' : 'top',
          l = s ? 'width' : 'height',
          u = { start: Kt({}, c, i[c]), end: Kt({}, c, i[c] + i[l] - a[l]) };
        e.offsets.popper = Fe({}, a, u[r]);
      }
      return e;
    }
    function Nd(e) {
      if (!ul(e.instance.modifiers, 'hide', 'preventOverflow')) return e;
      var t = e.offsets.reference,
        n = An(e.instance.modifiers, function (r) {
          return r.name === 'preventOverflow';
        }).boundaries;
      if (
        t.bottom < n.top ||
        t.left > n.right ||
        t.top > n.bottom ||
        t.right < n.left
      ) {
        if (e.hide === !0) return e;
        (e.hide = !0), (e.attributes['x-out-of-boundaries'] = '');
      } else {
        if (e.hide === !1) return e;
        (e.hide = !1), (e.attributes['x-out-of-boundaries'] = !1);
      }
      return e;
    }
    function Fd(e) {
      var t = e.placement,
        n = t.split('-')[0],
        r = e.offsets,
        o = r.popper,
        i = r.reference,
        a = ['left', 'right'].indexOf(n) !== -1,
        s = ['top', 'left'].indexOf(n) === -1;
      return (
        (o[a ? 'left' : 'top'] = i[n] - (s ? o[a ? 'width' : 'height'] : 0)),
        (e.placement = ur(t)),
        (e.offsets.popper = bt(o)),
        e
      );
    }
    function Pr(e) {
      var t = Object.prototype.toString.call(e).slice(8, -1);
      if (/HTML\w+Element/.test(t)) return 'HTMLElement';
      if (Ud(t)) return t;
    }
    function We(e) {
      return function (t) {
        return Pr(t) === e;
      };
    }
    function Ud(e) {
      return _d.includes(e);
    }
    function tn(e) {
      return function (t) {
        return typeof t === e;
      };
    }
    function Wd(e) {
      return zd.includes(e);
    }
    function R(e) {
      if (e === null) return 'null';
      switch (typeof e) {
        case 'bigint':
          return 'bigint';
        case 'boolean':
          return 'boolean';
        case 'number':
          return 'number';
        case 'string':
          return 'string';
        case 'symbol':
          return 'symbol';
        case 'undefined':
          return 'undefined';
      }
      if (R.array(e)) return 'Array';
      if (R.plainFunction(e)) return 'Function';
      var t = Pr(e);
      return t || 'Object';
    }
    function pl(e) {
      return function (t) {
        return typeof t === e;
      };
    }
    function qd(e, t) {
      var n = e.length;
      if (n !== t.length) return !1;
      for (var r = n; r-- !== 0; ) if (!Oe(e[r], t[r])) return !1;
      return !0;
    }
    function $d(e, t) {
      if (e.byteLength !== t.byteLength) return !1;
      for (
        var n = new DataView(e.buffer),
          r = new DataView(t.buffer),
          o = e.byteLength;
        o--;

      )
        if (n.getUint8(o) !== r.getUint8(o)) return !1;
      return !0;
    }
    function Kd(e, t) {
      var n, r, o, i;
      if (e.size !== t.size) return !1;
      try {
        for (var a = vo(e.entries()), s = a.next(); !s.done; s = a.next()) {
          var c = s.value;
          if (!t.has(c[0])) return !1;
        }
      } catch (d) {
        n = { error: d };
      } finally {
        try {
          s && !s.done && (r = a.return) && r.call(a);
        } finally {
          if (n) throw n.error;
        }
      }
      try {
        for (var l = vo(e.entries()), u = l.next(); !u.done; u = l.next()) {
          var c = u.value;
          if (!Oe(c[1], t.get(c[0]))) return !1;
        }
      } catch (d) {
        o = { error: d };
      } finally {
        try {
          u && !u.done && (i = l.return) && i.call(l);
        } finally {
          if (o) throw o.error;
        }
      }
      return !0;
    }
    function Xd(e, t) {
      var n, r;
      if (e.size !== t.size) return !1;
      try {
        for (var o = vo(e.entries()), i = o.next(); !i.done; i = o.next()) {
          var a = i.value;
          if (!t.has(a[0])) return !1;
        }
      } catch (s) {
        n = { error: s };
      } finally {
        try {
          i && !i.done && (r = o.return) && r.call(o);
        } finally {
          if (n) throw n.error;
        }
      }
      return !0;
    }
    function Oe(e, t) {
      if (e === t) return !0;
      if (e && ia(e) && t && ia(t)) {
        if (e.constructor !== t.constructor) return !1;
        if (Array.isArray(e) && Array.isArray(t)) return qd(e, t);
        if (e instanceof Map && t instanceof Map) return Kd(e, t);
        if (e instanceof Set && t instanceof Set) return Xd(e, t);
        if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) return $d(e, t);
        if (oa(e) && oa(t)) return e.source === t.source && e.flags === t.flags;
        if (e.valueOf !== Object.prototype.valueOf)
          return e.valueOf() === t.valueOf();
        if (e.toString !== Object.prototype.toString)
          return e.toString() === t.toString();
        var n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (var o = n.length; o-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(t, n[o])) return !1;
        for (var o = n.length; o-- !== 0; ) {
          var i = n[o];
          if (!(i === '_owner' && e.$$typeof) && !Oe(e[i], t[i])) return !1;
        }
        return !0;
      }
      return Number.isNaN(e) && Number.isNaN(t) ? !0 : e === t;
    }
    function Qd() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return e.every(function (n) {
        return L.string(n) || L.array(n) || L.plainObject(n);
      });
    }
    function Zd(e, t, n) {
      return hl(e, t)
        ? [e, t].every(L.array)
          ? !e.some(ua(n)) && t.some(ua(n))
          : [e, t].every(L.plainObject)
          ? !Object.entries(e).some(ca(n)) && Object.entries(t).some(ca(n))
          : t === n
        : !1;
    }
    function aa(e, t, n) {
      var r = n.actual,
        o = n.key,
        i = n.previous,
        a = n.type,
        s = Ke(e, o),
        c = Ke(t, o),
        l = [s, c].every(L.number) && (a === 'increased' ? s < c : s > c);
      return (
        L.undefined(r) || (l = l && c === r),
        L.undefined(i) || (l = l && s === i),
        l
      );
    }
    function sa(e, t, n) {
      var r = n.key,
        o = n.type,
        i = n.value,
        a = Ke(e, r),
        s = Ke(t, r),
        c = o === 'added' ? a : s,
        l = o === 'added' ? s : a;
      if (!L.nullOrUndefined(i)) {
        if (L.defined(c)) {
          if (L.array(c) || L.plainObject(c)) return Zd(c, l, i);
        } else return Oe(l, i);
        return !1;
      }
      return [a, s].every(L.array)
        ? !l.every(qo(c))
        : [a, s].every(L.plainObject)
        ? Jd(Object.keys(c), Object.keys(l))
        : ![a, s].every(function (u) {
            return L.primitive(u) && L.defined(u);
          }) &&
          (o === 'added'
            ? !L.defined(a) && L.defined(s)
            : L.defined(a) && !L.defined(s));
    }
    function la(e, t, n) {
      var r = n === void 0 ? {} : n,
        o = r.key,
        i = Ke(e, o),
        a = Ke(t, o);
      if (!hl(i, a)) throw new TypeError('Inputs have different types');
      if (!Qd(i, a)) throw new TypeError("Inputs don't have length");
      return (
        [i, a].every(L.plainObject) &&
          ((i = Object.keys(i)), (a = Object.keys(a))),
        [i, a]
      );
    }
    function ca(e) {
      return function (t) {
        var n = t[0],
          r = t[1];
        return L.array(e)
          ? Oe(e, r) ||
              e.some(function (o) {
                return Oe(o, r) || (L.array(r) && qo(r)(o));
              })
          : L.plainObject(e) && e[n]
          ? !!e[n] && Oe(e[n], r)
          : Oe(e, r);
      };
    }
    function Jd(e, t) {
      return t.some(function (n) {
        return !e.includes(n);
      });
    }
    function ua(e) {
      return function (t) {
        return L.array(e)
          ? e.some(function (n) {
              return Oe(n, t) || (L.array(t) && qo(t)(n));
            })
          : Oe(e, t);
      };
    }
    function ln(e, t) {
      return L.array(e)
        ? e.some(function (n) {
            return Oe(n, t);
          })
        : Oe(e, t);
    }
    function qo(e) {
      return function (t) {
        return e.some(function (n) {
          return Oe(n, t);
        });
      };
    }
    function hl() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return (
        e.every(L.array) ||
        e.every(L.number) ||
        e.every(L.plainObject) ||
        e.every(L.string)
      );
    }
    function Ke(e, t) {
      if (L.plainObject(e) || L.array(e)) {
        if (L.string(t)) {
          var n = t.split('.');
          return n.reduce(function (r, o) {
            return r && r[o];
          }, e);
        }
        return L.number(t) ? e[t] : e;
      }
      return e;
    }
    function ep(e, t) {
      if ([e, t].some(L.nullOrUndefined))
        throw new Error('Missing required parameters');
      if (
        ![e, t].every(function (d) {
          return L.plainObject(d) || L.array(d);
        })
      )
        throw new Error('Expected plain objects or array');
      var n = function (d, p) {
          try {
            return sa(e, t, { key: d, type: 'added', value: p });
          } catch {
            return !1;
          }
        },
        r = function (d, p, h) {
          try {
            var f = Ke(e, d),
              m = Ke(t, d),
              x = L.defined(p),
              v = L.defined(h);
            if (x || v) {
              var b = v ? ln(h, f) : !ln(p, f),
                y = ln(p, m);
              return b && y;
            }
            return [f, m].every(L.array) || [f, m].every(L.plainObject)
              ? !Oe(f, m)
              : f !== m;
          } catch {
            return !1;
          }
        },
        o = function (d, p, h) {
          if (!L.defined(d)) return !1;
          try {
            var f = Ke(e, d),
              m = Ke(t, d),
              x = L.defined(h);
            return ln(p, f) && (x ? ln(h, m) : !x);
          } catch {
            return !1;
          }
        },
        i = function (d, p) {
          return L.defined(d)
            ? (console.warn(
                '`changedTo` is deprecated! Replace it with `change`'
              ),
              r(d, p))
            : !1;
        },
        a = function (d, p, h) {
          if (!L.defined(d)) return !1;
          try {
            return aa(e, t, {
              key: d,
              actual: p,
              previous: h,
              type: 'decreased',
            });
          } catch {
            return !1;
          }
        },
        s = function (d) {
          try {
            var p = la(e, t, { key: d }),
              h = p[0],
              f = p[1];
            return !!h.length && !f.length;
          } catch {
            return !1;
          }
        },
        c = function (d) {
          try {
            var p = la(e, t, { key: d }),
              h = p[0],
              f = p[1];
            return !h.length && !!f.length;
          } catch {
            return !1;
          }
        },
        l = function (d, p, h) {
          if (!L.defined(d)) return !1;
          try {
            return aa(e, t, {
              key: d,
              actual: p,
              previous: h,
              type: 'increased',
            });
          } catch {
            return !1;
          }
        },
        u = function (d, p) {
          try {
            return sa(e, t, { key: d, type: 'removed', value: p });
          } catch {
            return !1;
          }
        };
      return {
        added: n,
        changed: r,
        changedFrom: o,
        changedTo: i,
        decreased: a,
        emptied: s,
        filled: c,
        increased: l,
        removed: u,
      };
    }
    function da(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (o) {
            return Object.getOwnPropertyDescriptor(e, o).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function re(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2
          ? da(Object(n), !0).forEach(function (r) {
              Ee(e, r, n[r]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : da(Object(n)).forEach(function (r) {
              Object.defineProperty(
                e,
                r,
                Object.getOwnPropertyDescriptor(n, r)
              );
            });
      }
      return e;
    }
    function Rn(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function pa(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(e, ml(r.key), r);
      }
    }
    function In(e, t, n) {
      return (
        t && pa(e.prototype, t),
        n && pa(e, n),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        e
      );
    }
    function Ee(e, t, n) {
      return (
        (t = ml(t)),
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function kn(e, t) {
      if (typeof t != 'function' && t !== null)
        throw new TypeError(
          'Super expression must either be null or a function'
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        t && bo(e, t);
    }
    function dr(e) {
      return (
        (dr = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            }),
        dr(e)
      );
    }
    function bo(e, t) {
      return (
        (bo = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (n, r) {
              return (n.__proto__ = r), n;
            }),
        bo(e, t)
      );
    }
    function tp() {
      if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == 'function') return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          ),
          !0
        );
      } catch {
        return !1;
      }
    }
    function np(e, t) {
      if (e == null) return {};
      var n = {},
        r = Object.keys(e),
        o,
        i;
      for (i = 0; i < r.length; i++)
        (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
      return n;
    }
    function fl(e, t) {
      if (e == null) return {};
      var n = np(e, t),
        r,
        o;
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (o = 0; o < i.length; o++)
          (r = i[o]),
            !(t.indexOf(r) >= 0) &&
              Object.prototype.propertyIsEnumerable.call(e, r) &&
              (n[r] = e[r]);
      }
      return n;
    }
    function rt(e) {
      if (e === void 0)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function rp(e, t) {
      if (t && (typeof t == 'object' || typeof t == 'function')) return t;
      if (t !== void 0)
        throw new TypeError(
          'Derived constructors may only return object or undefined'
        );
      return rt(e);
    }
    function Mn(e) {
      var t = tp();
      return function () {
        var n = dr(e),
          r;
        if (t) {
          var o = dr(this).constructor;
          r = Reflect.construct(n, arguments, o);
        } else r = n.apply(this, arguments);
        return rp(this, r);
      };
    }
    function op(e, t) {
      if (typeof e != 'object' || e === null) return e;
      var n = e[Symbol.toPrimitive];
      if (n !== void 0) {
        var r = n.call(e, t || 'default');
        if (typeof r != 'object') return r;
        throw new TypeError('@@toPrimitive must return a primitive value.');
      }
      return (t === 'string' ? String : Number)(e);
    }
    function ml(e) {
      var t = op(e, 'string');
      return typeof t == 'symbol' ? t : String(t);
    }
    function lp(e, t, n, r) {
      return typeof e == 'boolean'
        ? e
        : typeof e == 'function'
        ? e(t, n, r)
        : e
        ? !!e
        : !1;
    }
    function cp(e, t) {
      return Object.hasOwnProperty.call(e, t);
    }
    function up(e, t, n, r) {
      return r
        ? new Error(r)
        : new Error(
            'Required '
              .concat(e[t], ' `')
              .concat(t, '` was not specified in `')
              .concat(n, '`.')
          );
    }
    function dp(e, t) {
      if (typeof e != 'function') throw new TypeError(ap);
      if (t && typeof t != 'string') throw new TypeError(sp);
    }
    function ha(e, t, n) {
      return (
        dp(e, n),
        function (r, o, i) {
          for (
            var a = arguments.length, s = new Array(a > 3 ? a - 3 : 0), c = 3;
            c < a;
            c++
          )
            s[c - 3] = arguments[c];
          return lp(t, r, o, i)
            ? cp(r, o)
              ? e.apply(void 0, [r, o, i].concat(s))
              : up(r, o, i, n)
            : e.apply(void 0, [r, o, i].concat(s));
        }
      );
    }
    function Ge() {
      return !!(
        typeof window < 'u' &&
        window.document &&
        window.document.createElement
      );
    }
    function Hr() {
      return 'ontouchstart' in window && /Mobi/.test(navigator.userAgent);
    }
    function Yn(e) {
      var t = e.title,
        n = e.data,
        r = e.warn,
        o = r === void 0 ? !1 : r,
        i = e.debug,
        a = i === void 0 ? !1 : i,
        s = o ? console.warn || console.error : console.log;
      a &&
        t &&
        n &&
        (console.groupCollapsed(
          '%creact-floater: '.concat(t),
          'color: #9b00ff; font-weight: bold; font-size: 12px;'
        ),
        Array.isArray(n)
          ? n.forEach(function (c) {
              L.plainObject(c) && c.key
                ? s.apply(console, [c.key, c.value])
                : s.apply(console, [c]);
            })
          : s.apply(console, [n]),
        console.groupEnd());
    }
    function pp(e, t, n) {
      var r =
        arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      e.addEventListener(t, n, r);
    }
    function hp(e, t, n) {
      var r =
        arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      e.removeEventListener(t, n, r);
    }
    function fp(e, t, n) {
      var r =
          arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1,
        o;
      (o = function (i) {
        n(i), hp(e, t, o);
      }),
        pp(e, t, o, r);
    }
    function fa() {}
    function vl(e) {
      var t = e.handleClick,
        n = e.styles,
        r = n.color,
        o = n.height,
        i = n.width,
        a = fl(n, mp);
      return g.createElement(
        'button',
        { 'aria-label': 'close', onClick: t, style: a, type: 'button' },
        g.createElement(
          'svg',
          {
            width: ''.concat(i, 'px'),
            height: ''.concat(o, 'px'),
            viewBox: '0 0 18 18',
            version: '1.1',
            xmlns: 'http://www.w3.org/2000/svg',
            preserveAspectRatio: 'xMidYMid',
          },
          g.createElement(
            'g',
            null,
            g.createElement('path', {
              d: 'M8.13911129,9.00268191 L0.171521827,17.0258467 C-0.0498027049,17.248715 -0.0498027049,17.6098394 0.171521827,17.8327545 C0.28204354,17.9443526 0.427188206,17.9998706 0.572051765,17.9998706 C0.71714958,17.9998706 0.862013139,17.9443526 0.972581703,17.8327545 L9.0000937,9.74924618 L17.0276057,17.8327545 C17.1384085,17.9443526 17.2832721,17.9998706 17.4281356,17.9998706 C17.5729992,17.9998706 17.718097,17.9443526 17.8286656,17.8327545 C18.0499901,17.6098862 18.0499901,17.2487618 17.8286656,17.0258467 L9.86135722,9.00268191 L17.8340066,0.973848225 C18.0553311,0.750979934 18.0553311,0.389855532 17.8340066,0.16694039 C17.6126821,-0.0556467968 17.254037,-0.0556467968 17.0329467,0.16694039 L9.00042166,8.25611765 L0.967006424,0.167268345 C0.745681892,-0.0553188426 0.387317931,-0.0553188426 0.165993399,0.167268345 C-0.0553311331,0.390136635 -0.0553311331,0.751261038 0.165993399,0.974176179 L8.13920499,9.00268191 L8.13911129,9.00268191 Z',
              fill: r,
            })
          )
        )
      );
    }
    function bl(e) {
      var t = e.content,
        n = e.footer,
        r = e.handleClick,
        o = e.open,
        i = e.positionWrapper,
        a = e.showCloseButton,
        s = e.title,
        c = e.styles,
        l = {
          content: g.isValidElement(t)
            ? t
            : g.createElement(
                'div',
                { className: '__floater__content', style: c.content },
                t
              ),
        };
      return (
        s &&
          (l.title = g.isValidElement(s)
            ? s
            : g.createElement(
                'div',
                { className: '__floater__title', style: c.title },
                s
              )),
        n &&
          (l.footer = g.isValidElement(n)
            ? n
            : g.createElement(
                'div',
                { className: '__floater__footer', style: c.footer },
                n
              )),
        (a || i) &&
          !L.boolean(o) &&
          (l.close = g.createElement(vl, { styles: c.close, handleClick: r })),
        g.createElement(
          'div',
          { className: '__floater__container', style: c.container },
          l.close,
          l.title,
          l.content,
          l.footer
        )
      );
    }
    function yp(e) {
      var t = (0, yo.default)(gp, e.options || {});
      return {
        wrapper: {
          cursor: 'help',
          display: 'inline-flex',
          flexDirection: 'column',
          zIndex: t.zIndex,
        },
        wrapperPosition: {
          left: -1e3,
          position: 'absolute',
          top: -1e3,
          visibility: 'hidden',
        },
        floater: {
          display: 'inline-block',
          filter: 'drop-shadow(0 0 3px rgba(0, 0, 0, 0.3))',
          maxWidth: 300,
          opacity: 0,
          position: 'relative',
          transition: 'opacity 0.3s',
          visibility: 'hidden',
          zIndex: t.zIndex,
        },
        floaterOpening: { opacity: 1, visibility: 'visible' },
        floaterWithAnimation: {
          opacity: 1,
          transition: 'opacity 0.3s, transform 0.2s',
          visibility: 'visible',
        },
        floaterWithComponent: { maxWidth: '100%' },
        floaterClosing: { opacity: 0, visibility: 'visible' },
        floaterCentered: {
          left: '50%',
          position: 'fixed',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        },
        container: {
          backgroundColor: '#fff',
          color: '#666',
          minHeight: 60,
          minWidth: 200,
          padding: 20,
          position: 'relative',
          zIndex: 10,
        },
        title: {
          borderBottom: '1px solid #555',
          color: '#555',
          fontSize: 18,
          marginBottom: 5,
          paddingBottom: 6,
          paddingRight: 18,
        },
        content: { fontSize: 15 },
        close: {
          backgroundColor: 'transparent',
          border: 0,
          borderRadius: 0,
          color: '#555',
          fontSize: 0,
          height: 15,
          outline: 'none',
          padding: 10,
          position: 'absolute',
          right: 0,
          top: 0,
          width: 15,
          WebkitAppearance: 'none',
        },
        footer: {
          borderTop: '1px solid #ccc',
          fontSize: 13,
          marginTop: 10,
          paddingTop: 5,
        },
        arrow: {
          color: '#fff',
          display: 'inline-flex',
          length: 16,
          margin: 8,
          position: 'absolute',
          spread: 32,
        },
        options: t,
      };
    }
    function mt() {
      return !!(
        typeof window < 'u' &&
        window.document &&
        window.document.createElement
      );
    }
    function El(e) {
      return e ? e.getBoundingClientRect() : null;
    }
    function Tp() {
      let { body: e, documentElement: t } = document;
      return !e || !t
        ? 0
        : Math.max(
            e.scrollHeight,
            e.offsetHeight,
            t.clientHeight,
            t.scrollHeight,
            t.offsetHeight
          );
    }
    function yt(e) {
      return typeof e == 'string' ? document.querySelector(e) : e;
    }
    function Sp(e) {
      return !e || e.nodeType !== 1 ? null : getComputedStyle(e);
    }
    function Or(e, t, n) {
      if (!e) return At();
      let r = (0, Ks.default)(e);
      if (r) {
        if (r.isSameNode(At())) return n ? document : At();
        if (!(r.scrollHeight > r.offsetHeight) && !t)
          return (r.style.overflow = 'initial'), At();
      }
      return r;
    }
    function Dn(e, t) {
      if (!e) return !1;
      let n = Or(e, t);
      return n ? !n.isSameNode(At()) : !1;
    }
    function Pp(e) {
      return e.offsetParent !== document.body;
    }
    function En(e, t = 'fixed') {
      if (!e || !(e instanceof HTMLElement)) return !1;
      let { nodeName: n } = e,
        r = Sp(e);
      return n === 'BODY' || n === 'HTML'
        ? !1
        : r && r.position === t
        ? !0
        : e.parentNode
        ? En(e.parentNode, t)
        : !1;
    }
    function Op(e) {
      var t;
      if (!e) return !1;
      let n = e;
      for (; n && n !== document.body; ) {
        if (n instanceof HTMLElement) {
          let { display: r, visibility: o } = getComputedStyle(n);
          if (r === 'none' || o === 'hidden') return !1;
        }
        n = (t = n.parentElement) != null ? t : null;
      }
      return !0;
    }
    function Cp(e, t, n) {
      var r;
      let o = El(e),
        i = Or(e, n),
        a = Dn(e, n),
        s = 0,
        c = (r = o?.top) != null ? r : 0;
      return (
        i instanceof HTMLElement &&
          ((s = i.scrollTop),
          !a && !En(e) && (c += s),
          i.isSameNode(At()) || (c += At().scrollTop)),
        Math.floor(c - t)
      );
    }
    function Ap(e, t, n) {
      var r;
      if (!e) return 0;
      let { offsetTop: o = 0, scrollTop: i = 0 } =
          (r = (0, Ks.default)(e)) != null ? r : {},
        a = e.getBoundingClientRect().top + i;
      o && (Dn(e, n) || Pp(e)) && (a -= o);
      let s = Math.floor(a - t);
      return s < 0 ? 0 : s;
    }
    function At() {
      var e;
      return (e = document.scrollingElement) != null
        ? e
        : document.documentElement;
    }
    function Rp(e, t) {
      let { duration: n, element: r } = t;
      return new Promise((o, i) => {
        let { scrollTop: a } = r,
          s = e > a ? e - a : a - e;
        Ju.default.top(r, e, { duration: s < 100 ? 50 : n }, (c) =>
          c && c.message !== 'Element already at target scroll position'
            ? i(c)
            : o()
        );
      });
    }
    function Tl(e = navigator.userAgent) {
      let t = e;
      return (
        typeof window > 'u'
          ? (t = 'node')
          : document.documentMode
          ? (t = 'ie')
          : /Edge/.test(e)
          ? (t = 'edge')
          : window.opera || e.includes(' OPR/')
          ? (t = 'opera')
          : typeof window.InstallTrigger < 'u'
          ? (t = 'firefox')
          : window.chrome
          ? (t = 'chrome')
          : /(Version\/([\d._]+).*Safari|CriOS|FxiOS| Mobile\/)/.test(e) &&
            (t = 'safari'),
        t
      );
    }
    function gt(e) {
      let t = [],
        n = (r) => {
          if (typeof r == 'string' || typeof r == 'number') t.push(r);
          else if (Array.isArray(r)) r.forEach((o) => n(o));
          else if (Vt(r)) {
            let { children: o } = r.props;
            Array.isArray(o) ? o.forEach((i) => n(i)) : n(o);
          }
        };
      return n(e), t.join(' ').trim();
    }
    function Ip(e, t) {
      return !I.plainObject(e) || !I.array(t)
        ? !1
        : Object.keys(e).every((n) => t.includes(n));
    }
    function kp(e) {
      let t = /^#?([\da-f])([\da-f])([\da-f])$/i,
        n = e.replace(t, (o, i, a, s) => i + i + a + a + s + s),
        r = /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i.exec(n);
      return r
        ? [parseInt(r[1], 16), parseInt(r[2], 16), parseInt(r[3], 16)]
        : [];
    }
    function ma(e) {
      return e.disableBeacon || e.placement === 'center';
    }
    function ga() {
      return !['chrome', 'safari', 'firefox', 'opera'].includes(Tl());
    }
    function xt({ data: e, debug: t = !1, title: n, warn: r = !1 }) {
      let o = r ? console.warn || console.error : console.log;
      t &&
        (n && e
          ? (console.groupCollapsed(
              `%creact-joyride: ${n}`,
              'color: #ff0044; font-weight: bold; font-size: 12px;'
            ),
            Array.isArray(e)
              ? e.forEach((i) => {
                  I.plainObject(i) && i.key
                    ? o.apply(console, [i.key, i.value])
                    : o.apply(console, [i]);
                })
              : o.apply(console, [e]),
            console.groupEnd())
          : console.error('Missing title or data props'));
    }
    function Mp(e) {
      let {
        isFirstStep: t,
        lifecycle: n,
        previousLifecycle: r,
        scrollToFirstStep: o,
        step: i,
        target: a,
      } = e;
      return (
        !i.disableScrolling &&
        (!t || o || n === _.TOOLTIP) &&
        i.placement !== 'center' &&
        (!i.isFixed || !En(a)) &&
        r !== n &&
        [_.BEACON, _.TOOLTIP].includes(n)
      );
    }
    function jp(e, t) {
      var n, r, o, i;
      let { floaterProps: a, styles: s } = e,
        c = (0, zr.default)(s ?? {}, (n = t?.styles) != null ? n : {}),
        l = (0, zr.default)(Fp, c.options || {}),
        { width: u } = l;
      window.innerWidth > 480 && (u = 380),
        'width' in l &&
          (u =
            typeof l.width == 'number' && window.innerWidth < l.width
              ? window.innerWidth - 30
              : l.width);
      let d = {
          bottom: 0,
          left: 0,
          overflow: 'hidden',
          position: 'absolute',
          right: 0,
          top: 0,
          zIndex: l.zIndex,
        },
        p = {
          beacon: {
            ...dn,
            display: 'inline-block',
            height: l.beaconSize,
            position: 'relative',
            width: l.beaconSize,
            zIndex: l.zIndex,
          },
          beaconInner: {
            animation: 'joyride-beacon-inner 1.2s infinite ease-in-out',
            backgroundColor: l.primaryColor,
            borderRadius: '50%',
            display: 'block',
            height: '50%',
            left: '50%',
            opacity: 0.7,
            position: 'absolute',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '50%',
          },
          beaconOuter: {
            animation: 'joyride-beacon-outer 1.2s infinite ease-in-out',
            backgroundColor: `rgba(${kp(l.primaryColor).join(',')}, 0.2)`,
            border: `2px solid ${l.primaryColor}`,
            borderRadius: '50%',
            boxSizing: 'border-box',
            display: 'block',
            height: '100%',
            left: 0,
            opacity: 0.9,
            position: 'absolute',
            top: 0,
            transformOrigin: 'center',
            width: '100%',
          },
          tooltip: {
            backgroundColor: l.backgroundColor,
            borderRadius: 5,
            boxSizing: 'border-box',
            color: l.textColor,
            fontSize: 16,
            maxWidth: '100%',
            padding: 15,
            position: 'relative',
            width: u,
          },
          tooltipContainer: { lineHeight: 1.4, textAlign: 'center' },
          tooltipTitle: { fontSize: 18, margin: 0 },
          tooltipContent: { padding: '20px 10px' },
          tooltipFooter: {
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: 15,
          },
          tooltipFooterSpacer: { flex: 1 },
          buttonNext: {
            ...dn,
            backgroundColor: l.primaryColor,
            borderRadius: 4,
            color: '#fff',
          },
          buttonBack: {
            ...dn,
            color: l.primaryColor,
            marginLeft: 'auto',
            marginRight: 5,
          },
          buttonClose: {
            ...dn,
            color: l.textColor,
            height: 14,
            padding: 15,
            position: 'absolute',
            right: 0,
            top: 0,
            width: 14,
          },
          buttonSkip: { ...dn, color: l.textColor, fontSize: 14 },
          overlay: {
            ...d,
            backgroundColor: l.overlayColor,
            mixBlendMode: 'hard-light',
          },
          overlayLegacy: { ...d },
          overlayLegacyCenter: { ...d, backgroundColor: l.overlayColor },
          spotlight: { ...ya, backgroundColor: 'gray' },
          spotlightLegacy: {
            ...ya,
            boxShadow: `0 0 0 9999px ${l.overlayColor}, ${l.spotlightShadow}`,
          },
          floaterStyles: {
            arrow: {
              color:
                (i =
                  (o = (r = a?.styles) == null ? void 0 : r.arrow) == null
                    ? void 0
                    : o.color) != null
                  ? i
                  : l.arrowColor,
            },
            options: { zIndex: l.zIndex + 100 },
          },
          options: l,
        };
      return (0, zr.default)(p, c);
    }
    function Vp(e) {
      return td(
        e,
        'beaconComponent',
        'disableCloseOnEsc',
        'disableOverlay',
        'disableOverlayClose',
        'disableScrolling',
        'disableScrollParentFix',
        'floaterProps',
        'hideBackButton',
        'hideCloseButton',
        'locale',
        'showProgress',
        'showSkipButton',
        'spotlightClicks',
        'spotlightPadding',
        'styles',
        'tooltipComponent'
      );
    }
    function pn(e, t) {
      var n, r, o, i, a, s;
      let c = e ?? {},
        l = Hn.default.all([Lp, Vp(t), c], {
          isMergeableObject: I.plainObject,
        }),
        u = jp(t, l),
        d = Dn(yt(l.target), l.disableScrollParentFix),
        p = Hn.default.all([
          Dp,
          (n = t.floaterProps) != null ? n : {},
          (r = l.floaterProps) != null ? r : {},
        ]);
      return (
        (p.offset = l.offset),
        (p.styles = (0, Hn.default)(
          (o = p.styles) != null ? o : {},
          u.floaterStyles
        )),
        (p.offset +=
          (a = (i = t.spotlightPadding) != null ? i : l.spotlightPadding) !=
          null
            ? a
            : 0),
        l.placementBeacon &&
          p.wrapperOptions &&
          (p.wrapperOptions.placement = l.placementBeacon),
        d &&
          p.options.preventOverflow &&
          (p.options.preventOverflow.boundariesElement = 'window'),
        {
          ...l,
          locale: Hn.default.all([
            Sl,
            (s = t.locale) != null ? s : {},
            l.locale || {},
          ]),
          floaterProps: p,
          styles: Xs(u, 'floaterStyles'),
        }
      );
    }
    function Pl(e, t = !1) {
      return I.plainObject(e)
        ? e.target
          ? !0
          : (xt({
              title: 'validateStep',
              data: 'target is missing from the step',
              warn: !0,
              debug: t,
            }),
            !1)
        : (xt({
            title: 'validateStep',
            data: 'step must be an object',
            warn: !0,
            debug: t,
          }),
          !1);
    }
    function va(e, t = !1) {
      return I.array(e)
        ? e.every((n) => Pl(n, t))
        : (xt({
            title: 'validateSteps',
            data: 'steps must be an array',
            warn: !0,
            debug: t,
          }),
          !1);
    }
    function _p(e) {
      return new Bp(e);
    }
    function Wp({ styles: e }) {
      return O('div', {
        key: 'JoyrideSpotlight',
        className: 'react-joyride__spotlight',
        'data-test-id': 'spotlight',
        style: e,
      });
    }
    function qp({ styles: e, ...t }) {
      let { color: n, height: r, width: o, ...i } = e;
      return g.createElement(
        'button',
        { style: i, type: 'button', ...t },
        g.createElement(
          'svg',
          {
            height: typeof r == 'number' ? `${r}px` : r,
            preserveAspectRatio: 'xMidYMid',
            version: '1.1',
            viewBox: '0 0 18 18',
            width: typeof o == 'number' ? `${o}px` : o,
            xmlns: 'http://www.w3.org/2000/svg',
          },
          g.createElement(
            'g',
            null,
            g.createElement('path', {
              d: 'M8.13911129,9.00268191 L0.171521827,17.0258467 C-0.0498027049,17.248715 -0.0498027049,17.6098394 0.171521827,17.8327545 C0.28204354,17.9443526 0.427188206,17.9998706 0.572051765,17.9998706 C0.71714958,17.9998706 0.862013139,17.9443526 0.972581703,17.8327545 L9.0000937,9.74924618 L17.0276057,17.8327545 C17.1384085,17.9443526 17.2832721,17.9998706 17.4281356,17.9998706 C17.5729992,17.9998706 17.718097,17.9443526 17.8286656,17.8327545 C18.0499901,17.6098862 18.0499901,17.2487618 17.8286656,17.0258467 L9.86135722,9.00268191 L17.8340066,0.973848225 C18.0553311,0.750979934 18.0553311,0.389855532 17.8340066,0.16694039 C17.6126821,-0.0556467968 17.254037,-0.0556467968 17.0329467,0.16694039 L9.00042166,8.25611765 L0.967006424,0.167268345 C0.745681892,-0.0553188426 0.387317931,-0.0553188426 0.165993399,0.167268345 C-0.0553311331,0.390136635 -0.0553311331,0.751261038 0.165993399,0.974176179 L8.13920499,9.00268191 L8.13911129,9.00268191 Z',
              fill: n,
            })
          )
        )
      );
    }
    function Kp(e) {
      let {
          backProps: t,
          closeProps: n,
          continuous: r,
          index: o,
          isLastStep: i,
          primaryProps: a,
          size: s,
          skipProps: c,
          step: l,
          tooltipProps: u,
        } = e,
        {
          content: d,
          hideBackButton: p,
          hideCloseButton: h,
          hideFooter: f,
          locale: m,
          showProgress: x,
          showSkipButton: v,
          styles: b,
          title: y,
        } = l,
        { back: w, close: E, last: j, next: D, skip: P } = m,
        N = { primary: E };
      return (
        r &&
          ((N.primary = i ? j : D),
          x &&
            (N.primary = O('span', null, N.primary, ' (', o + 1, '/', s, ')'))),
        v &&
          !i &&
          (N.skip = O(
            'button',
            {
              'aria-live': 'off',
              'data-test-id': 'button-skip',
              style: b.buttonSkip,
              type: 'button',
              ...c,
            },
            P
          )),
        !p &&
          o > 0 &&
          (N.back = O(
            'button',
            {
              'data-test-id': 'button-back',
              style: b.buttonBack,
              type: 'button',
              ...t,
            },
            w
          )),
        (N.close =
          !h &&
          O($p, {
            'data-test-id': 'button-close',
            styles: b.buttonClose,
            ...n,
          })),
        O(
          'div',
          {
            key: 'JoyrideTooltip',
            'aria-label': gt(y) || gt(d),
            className: 'react-joyride__tooltip',
            style: b.tooltip,
            ...u,
          },
          O(
            'div',
            { style: b.tooltipContainer },
            y && O('h1', { 'aria-label': gt(y), style: b.tooltipTitle }, y),
            O('div', { style: b.tooltipContent }, d)
          ),
          !f &&
            O(
              'div',
              { style: b.tooltipFooter },
              O('div', { style: b.tooltipFooterSpacer }, N.skip),
              N.back,
              O(
                'button',
                {
                  'data-test-id': 'button-primary',
                  style: b.buttonNext,
                  type: 'button',
                  ...a,
                },
                N.primary
              )
            ),
          N.close
        )
      );
    }
    function eh({ targetSelector: e }) {
      return (
        U(() => {
          let t = document.querySelector(e);
          if (t) {
            (t.style.animation = 'pulsate 3s infinite'),
              (t.style.transformOrigin = 'center'),
              (t.style.animationTimingFunction = 'ease-in-out');
            let n = `
        @keyframes pulsate {
          0% {
            box-shadow: 0 0 0 0 rgba(2, 156, 253, 0.7), 0 0 0 0 rgba(2, 156, 253, 0.4);
          }
          50% {
            box-shadow: 0 0 0 20px rgba(2, 156, 253, 0), 0 0 0 40px rgba(2, 156, 253, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(2, 156, 253, 0), 0 0 0 0 rgba(2, 156, 253, 0);
          }
        }
      `,
              r = document.createElement('style');
            (r.id = 'sb-onboarding-pulsating-effect'),
              (r.innerHTML = n),
              document.head.appendChild(r);
          }
          return () => {
            let n = document.querySelector('#sb-onboarding-pulsating-effect');
            n && n.remove(), t && (t.style.animation = 'auto');
          };
        }, [e]),
        null
      );
    }
    function nh(e) {
      return (e * Math.PI) / 180;
    }
    function Ie(e, t) {
      return e + Math.random() * (t - e);
    }
    function rh(e, t) {
      return Math.floor(e + Math.random() * (t - e + 1));
    }
    function Yr(e) {
      let t = {},
        n = {},
        r = {},
        o = [
          ...Object.keys(Ko),
          'confettiSource',
          'drawShape',
          'onConfettiComplete',
        ],
        i = ['canvasRef'];
      for (let a in e) {
        let s = e[a];
        o.includes(a) ? (t[a] = s) : i.includes(a) ? (i[a] = s) : (r[a] = s);
      }
      return [t, r, n];
    }
    function Al({
      top: e = 0,
      left: t = 0,
      width: n = window.innerWidth,
      height: r = window.innerHeight,
      colors: o = [
        '#CA90FF',
        '#FC521F',
        '#66BF3C',
        '#FF4785',
        '#FFAE00',
        '#1EA7FD',
      ],
      ...i
    }) {
      let [a] = ne(() => {
        let s = document.createElement('div');
        return (
          s.setAttribute('id', 'confetti-container'),
          s.setAttribute(
            'style',
            'position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 9999;'
          ),
          s
        );
      });
      return (
        U(
          () => (
            document.body.appendChild(a),
            () => {
              document.body.removeChild(a);
            }
          ),
          []
        ),
        on(
          g.createElement(
            uh,
            { top: e, left: t, width: n, height: r },
            g.createElement(ch, { colors: o, drawShape: ph, ...i })
          ),
          a
        )
      );
    }
    function dh(e, t) {
      return Math.floor(Math.random() * (t - e)) + e;
    }
    function ph(e) {
      switch (((this.shape = this.shape || dh(1, 6)), this.shape)) {
        case 2: {
          let t = this.w / 2,
            n = this.h / 2;
          e.moveTo(-t + 2, -n),
            e.lineTo(t - 2, -n),
            e.arcTo(t, -n, t, -n + 2, 2),
            e.lineTo(t, n - 2),
            e.arcTo(t, n, t - 2, n, 2),
            e.lineTo(-t + 2, n),
            e.arcTo(-t, n, -t, n - 2, 2),
            e.lineTo(-t, -n + 2),
            e.arcTo(-t, -n, -t + 2, -n, 2);
          break;
        }
        case 3: {
          e.rect(-4, -4, 8, 16), e.rect(-12, -4, 24, 8);
          break;
        }
        case 4: {
          e.rect(-4, -4, 8, 16), e.rect(-4, -4, 24, 8);
          break;
        }
        case 1: {
          e.arc(0, 0, this.radius, 0, 2 * Math.PI);
          break;
        }
        case 5: {
          e.moveTo(16, 4), e.lineTo(4, 24), e.lineTo(24, 24);
          break;
        }
        case 6: {
          e.arc(4, -4, 4, -Math.PI / 2, 0), e.lineTo(4, 0);
          break;
        }
      }
      e.closePath(), e.fill();
    }
    function Dh({
      api: e,
      isFinalStep: t,
      onFirstTourDone: n,
      onLastTourDone: r,
      codeSnippets: o,
    }) {
      let [i, a] = ne(),
        s = _r();
      U(() => {
        e.once(ki, () => {
          a(3);
        });
      }, []);
      let c = Se(
          () =>
            document.querySelector('#root div[role=main]') ||
            document.querySelector('#storybook-panel-root'),
          []
        ),
        l = t
          ? [
              {
                target: '#example-button--warning',
                title: 'Congratulations!',
                content: g.createElement(
                  g.Fragment,
                  null,
                  'You just created your first story. Continue setting up your project to write stories for your own components.'
                ),
                placement: 'right',
                disableOverlay: !0,
                disableBeacon: !0,
                floaterProps: { disableAnimation: !0 },
                onNextButtonClick() {
                  r();
                },
              },
            ]
          : [
              {
                target: '#storybook-explorer-tree > div',
                title: 'Storybook is built from stories',
                content: g.createElement(
                  g.Fragment,
                  null,
                  'Storybook stories represent the key states of each of your components.',
                  g.createElement('br', null),
                  g.createElement('br', null),
                  o?.filename &&
                    g.createElement(
                      g.Fragment,
                      null,
                      'We automatically added four stories for this Button component in this example file:',
                      g.createElement('br', null),
                      g.createElement(nr, null, o.filename)
                    )
                ),
                placement: 'right',
                disableBeacon: !0,
                styles: { spotlight: { transform: 'translateY(30px)' } },
                floaterProps: { disableAnimation: !0 },
              },
              {
                target: '#storybook-preview-iframe',
                title: 'Storybook previews are interactive',
                content:
                  'Whenever you modify code or stories, Storybook automatically updates how it previews your components.',
                placement: 'bottom',
                styles: { spotlight: { borderRadius: 0 } },
              },
              {
                target: c,
                title: 'Interactive story playground',
                content: g.createElement(
                  g.Fragment,
                  null,
                  'See how a story renders with different data and state without touching code.',
                  g.createElement('br', null),
                  g.createElement('br', null),
                  'Try it out by pressing this button.',
                  g.createElement(eh, { targetSelector: '#control-primary' })
                ),
                placement: 'right',
                spotlightClicks: !0,
                floaterProps: {
                  target: '#control-primary',
                  options: { preventOverflow: { boundariesElement: 'window' } },
                },
                hideNextButton: !0,
              },
              {
                target: '#control-primary',
                title: 'Congratulations!',
                content: g.createElement(
                  g.Fragment,
                  null,
                  "You learned how to control your stories interactively. Now let's explore how to write your first story.",
                  g.createElement(Al, {
                    numberOfPieces: 800,
                    recycle: !1,
                    tweenDuration: 2e4,
                  })
                ),
                placement: 'right',
                floaterProps: {
                  options: { preventOverflow: { boundariesElement: 'window' } },
                },
                disableOverlay: !0,
              },
            ];
      return g.createElement(Jp, {
        steps: l,
        continuous: !0,
        stepIndex: i,
        spotlightPadding: 0,
        hideBackButton: !0,
        disableCloseOnEsc: !0,
        disableOverlayClose: !0,
        disableScrolling: !0,
        hideCloseButton: !0,
        callback: (u) => {
          !t && u.status === G.FINISHED && n();
        },
        floaterProps: {
          options: { offset: { offset: '0, 6' } },
          styles: {
            floater: {
              padding: 0,
              paddingLeft: 8,
              paddingTop: 8,
              filter:
                s.base === 'light'
                  ? 'drop-shadow(0px 5px 5px rgba(0,0,0,0.05)) drop-shadow(0 1px 3px rgba(0,0,0,0.1))'
                  : 'drop-shadow(#fff5 0px 0px 0.5px) drop-shadow(#fff5 0px 0px 0.5px)',
            },
          },
        },
        tooltipComponent: bh,
        styles: {
          overlay: { mixBlendMode: 'unset', backgroundColor: 'none' },
          spotlight: {
            backgroundColor: 'none',
            border: `solid 2px ${s.color.secondary}`,
            boxShadow: '0px 0px 0px 9999px rgba(0,0,0,0.4)',
          },
          options: {
            zIndex: 1e4,
            primaryColor: s.color.secondary,
            arrowColor: s.base === 'dark' ? '#292A2C' : s.color.lightest,
          },
        },
      });
    }
    function ge() {
      return (
        (ge = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        ge.apply(this, arguments)
      );
    }
    function It(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
      return function (r) {
        if ((e?.(r), n === !1 || !r.defaultPrevented)) return t?.(r);
      };
    }
    function Lh(e, t) {
      typeof e == 'function' ? e(t) : e != null && (e.current = t);
    }
    function Rl(...e) {
      return (t) => e.forEach((n) => Lh(n, t));
    }
    function Ln(...e) {
      return ye(Rl(...e), e);
    }
    function Nh(e, t) {
      let n = Be(t);
      function r(i) {
        let { children: a, ...s } = i,
          c = Se(() => s, Object.values(s));
        return O(n.Provider, { value: c }, a);
      }
      function o(i) {
        let a = me(n);
        if (a) return a;
        if (t !== void 0) return t;
        throw new Error(`\`${i}\` must be used within \`${e}\``);
      }
      return (r.displayName = e + 'Provider'), [r, o];
    }
    function Fh(e, t = []) {
      let n = [];
      function r(i, a) {
        let s = Be(a),
          c = n.length;
        n = [...n, a];
        function l(d) {
          let { scope: p, children: h, ...f } = d,
            m = p?.[e][c] || s,
            x = Se(() => f, Object.values(f));
          return O(m.Provider, { value: x }, h);
        }
        function u(d, p) {
          let h = p?.[e][c] || s,
            f = me(h);
          if (f) return f;
          if (a !== void 0) return a;
          throw new Error(`\`${d}\` must be used within \`${i}\``);
        }
        return (l.displayName = i + 'Provider'), [l, u];
      }
      let o = () => {
        let i = n.map((a) => Be(a));
        return function (a) {
          let s = a?.[e] || i;
          return Se(() => ({ [`__scope${e}`]: { ...a, [e]: s } }), [a, s]);
        };
      };
      return (o.scopeName = e), [r, jh(o, ...t)];
    }
    function jh(...e) {
      let t = e[0];
      if (e.length === 1) return t;
      let n = () => {
        let r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
        return function (o) {
          let i = r.reduce((a, { useScope: s, scopeName: c }) => {
            let l = s(o)[`__scope${c}`];
            return { ...a, ...l };
          }, {});
          return Se(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
        };
      };
      return (n.scopeName = t.scopeName), n;
    }
    function qr(e) {
      let [t, n] = ne(Vh());
      return (
        wo(() => {
          e || n((r) => r ?? String(Bh++));
        }, [e]),
        e || (t ? `radix-${t}` : '')
      );
    }
    function Mt(e) {
      let t = ee(e);
      return (
        U(() => {
          t.current = e;
        }),
        Se(
          () =>
            (...n) => {
              var r;
              return (r = t.current) === null || r === void 0
                ? void 0
                : r.call(t, ...n);
            },
          []
        )
      );
    }
    function _h({ prop: e, defaultProp: t, onChange: n = () => {} }) {
      let [r, o] = zh({ defaultProp: t, onChange: n }),
        i = e !== void 0,
        a = i ? e : r,
        s = Mt(n),
        c = ye(
          (l) => {
            if (i) {
              let u = typeof l == 'function' ? l(e) : l;
              u !== e && s(u);
            } else o(l);
          },
          [i, e, o, s]
        );
      return [a, c];
    }
    function zh({ defaultProp: e, onChange: t }) {
      let n = ne(e),
        [r] = n,
        o = ee(r),
        i = Mt(t);
      return (
        U(() => {
          o.current !== r && (i(r), (o.current = r));
        }, [r, o, i]),
        n
      );
    }
    function Wh(e) {
      return Vt(e) && e.type === Uh;
    }
    function Hh(e, t) {
      let n = { ...t };
      for (let r in t) {
        let o = e[r],
          i = t[r];
        /^on[A-Z]/.test(r)
          ? o && i
            ? (n[r] = (...a) => {
                i(...a), o(...a);
              })
            : o && (n[r] = o)
          : r === 'style'
          ? (n[r] = { ...o, ...i })
          : r === 'className' && (n[r] = [o, i].filter(Boolean).join(' '));
      }
      return { ...e, ...n };
    }
    function Gh(e, t) {
      e && Nr(() => e.dispatchEvent(t));
    }
    function qh(e, t = globalThis?.document) {
      let n = Mt(e);
      U(() => {
        let r = (o) => {
          o.key === 'Escape' && n(o);
        };
        return (
          t.addEventListener('keydown', r),
          () => t.removeEventListener('keydown', r)
        );
      }, [n, t]);
    }
    function Zh(e, t = globalThis?.document) {
      let n = Mt(e),
        r = ee(!1),
        o = ee(() => {});
      return (
        U(() => {
          let i = (s) => {
              if (s.target && !r.current) {
                let c = function () {
                    Il($h, n, l, { discrete: !0 });
                  },
                  l = { originalEvent: s };
                s.pointerType === 'touch'
                  ? (t.removeEventListener('click', o.current),
                    (o.current = c),
                    t.addEventListener('click', o.current, { once: !0 }))
                  : c();
              } else t.removeEventListener('click', o.current);
              r.current = !1;
            },
            a = window.setTimeout(() => {
              t.addEventListener('pointerdown', i);
            }, 0);
          return () => {
            window.clearTimeout(a),
              t.removeEventListener('pointerdown', i),
              t.removeEventListener('click', o.current);
          };
        }, [t, n]),
        { onPointerDownCapture: () => (r.current = !0) }
      );
    }
    function Jh(e, t = globalThis?.document) {
      let n = Mt(e),
        r = ee(!1);
      return (
        U(() => {
          let o = (i) => {
            i.target &&
              !r.current &&
              Il(Kh, n, { originalEvent: i }, { discrete: !1 });
          };
          return (
            t.addEventListener('focusin', o),
            () => t.removeEventListener('focusin', o)
          );
        }, [t, n]),
        {
          onFocusCapture: () => (r.current = !0),
          onBlurCapture: () => (r.current = !1),
        }
      );
    }
    function wa() {
      let e = new CustomEvent(To);
      document.dispatchEvent(e);
    }
    function Il(e, t, n, { discrete: r }) {
      let o = n.originalEvent.target,
        i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
      t && o.addEventListener(e, t, { once: !0 }),
        r ? Gh(o, i) : o.dispatchEvent(i);
    }
    function tf(e, { select: t = !1 } = {}) {
      let n = document.activeElement;
      for (let r of e)
        if ((pt(r, { select: t }), document.activeElement !== n)) return;
    }
    function nf(e) {
      let t = kl(e),
        n = Ta(t, e),
        r = Ta(t.reverse(), e);
      return [n, r];
    }
    function kl(e) {
      let t = [],
        n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
          acceptNode: (r) => {
            let o = r.tagName === 'INPUT' && r.type === 'hidden';
            return r.disabled || r.hidden || o
              ? NodeFilter.FILTER_SKIP
              : r.tabIndex >= 0
              ? NodeFilter.FILTER_ACCEPT
              : NodeFilter.FILTER_SKIP;
          },
        });
      for (; n.nextNode(); ) t.push(n.currentNode);
      return t;
    }
    function Ta(e, t) {
      for (let n of e) if (!rf(n, { upTo: t })) return n;
    }
    function rf(e, { upTo: t }) {
      if (getComputedStyle(e).visibility === 'hidden') return !0;
      for (; e; ) {
        if (t !== void 0 && e === t) return !1;
        if (getComputedStyle(e).display === 'none') return !0;
        e = e.parentElement;
      }
      return !1;
    }
    function of(e) {
      return e instanceof HTMLInputElement && 'select' in e;
    }
    function pt(e, { select: t = !1 } = {}) {
      if (e && e.focus) {
        let n = document.activeElement;
        e.focus({ preventScroll: !0 }), e !== n && of(e) && t && e.select();
      }
    }
    function af() {
      let e = [];
      return {
        add(t) {
          let n = e[0];
          t !== n && n?.pause(), (e = Pa(e, t)), e.unshift(t);
        },
        remove(t) {
          var n;
          (e = Pa(e, t)), (n = e[0]) === null || n === void 0 || n.resume();
        },
      };
    }
    function Pa(e, t) {
      let n = [...e],
        r = n.indexOf(t);
      return r !== -1 && n.splice(r, 1), n;
    }
    function sf(e) {
      return e.filter((t) => t.tagName !== 'A');
    }
    function cf(e, t) {
      return Ai((n, r) => t[n][r] ?? n, e);
    }
    function uf(e) {
      let [t, n] = ne(),
        r = ee({}),
        o = ee(e),
        i = ee('none'),
        a = e ? 'mounted' : 'unmounted',
        [s, c] = cf(a, {
          mounted: { UNMOUNT: 'unmounted', ANIMATION_OUT: 'unmountSuspended' },
          unmountSuspended: { MOUNT: 'mounted', ANIMATION_END: 'unmounted' },
          unmounted: { MOUNT: 'mounted' },
        });
      return (
        U(() => {
          let l = qn(r.current);
          i.current = s === 'mounted' ? l : 'none';
        }, [s]),
        wo(() => {
          let l = r.current,
            u = o.current;
          if (u !== e) {
            let d = i.current,
              p = qn(l);
            e
              ? c('MOUNT')
              : p === 'none' || l?.display === 'none'
              ? c('UNMOUNT')
              : c(u && d !== p ? 'ANIMATION_OUT' : 'UNMOUNT'),
              (o.current = e);
          }
        }, [e, c]),
        wo(() => {
          if (t) {
            let l = (d) => {
                let p = qn(r.current).includes(d.animationName);
                d.target === t && p && Nr(() => c('ANIMATION_END'));
              },
              u = (d) => {
                d.target === t && (i.current = qn(r.current));
              };
            return (
              t.addEventListener('animationstart', u),
              t.addEventListener('animationcancel', l),
              t.addEventListener('animationend', l),
              () => {
                t.removeEventListener('animationstart', u),
                  t.removeEventListener('animationcancel', l),
                  t.removeEventListener('animationend', l);
              }
            );
          } else c('ANIMATION_END');
        }, [t, c]),
        {
          isPresent: ['mounted', 'unmountSuspended'].includes(s),
          ref: ye((l) => {
            l && (r.current = getComputedStyle(l)), n(l);
          }, []),
        }
      );
    }
    function qn(e) {
      return e?.animationName || 'none';
    }
    function df() {
      U(() => {
        var e, t;
        let n = document.querySelectorAll('[data-radix-focus-guard]');
        return (
          document.body.insertAdjacentElement(
            'afterbegin',
            (e = n[0]) !== null && e !== void 0 ? e : Oa()
          ),
          document.body.insertAdjacentElement(
            'beforeend',
            (t = n[1]) !== null && t !== void 0 ? t : Oa()
          ),
          Xr++,
          () => {
            Xr === 1 &&
              document
                .querySelectorAll('[data-radix-focus-guard]')
                .forEach((r) => r.remove()),
              Xr--;
          }
        );
      }, []);
    }
    function Oa() {
      let e = document.createElement('span');
      return (
        e.setAttribute('data-radix-focus-guard', ''),
        (e.tabIndex = 0),
        (e.style.cssText =
          'outline: none; opacity: 0; position: fixed; pointer-events: none'),
        e
      );
    }
    function Ml(e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
            (n[r[o]] = e[r[o]]);
      return n;
    }
    function pf(e, t, n) {
      if (n || arguments.length === 2)
        for (var r = 0, o = t.length, i; r < o; r++)
          (i || !(r in t)) &&
            (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
      return e.concat(i || Array.prototype.slice.call(t));
    }
    function Qr(e, t) {
      return typeof e == 'function' ? e(t) : e && (e.current = t), e;
    }
    function mf(e, t) {
      var n = ne(function () {
        return {
          value: e,
          callback: t,
          facade: {
            get current() {
              return n.value;
            },
            set current(r) {
              var o = n.value;
              o !== r && ((n.value = r), n.callback(r, o));
            },
          },
        };
      })[0];
      return (n.callback = t), n.facade;
    }
    function gf(e, t) {
      var n = mf(t || null, function (r) {
        return e.forEach(function (o) {
          return Qr(o, r);
        });
      });
      return (
        Bt(
          function () {
            var r = Ca.get(n);
            if (r) {
              var o = new Set(r),
                i = new Set(e),
                a = n.current;
              o.forEach(function (s) {
                i.has(s) || Qr(s, null);
              }),
                i.forEach(function (s) {
                  o.has(s) || Qr(s, a);
                });
            }
            Ca.set(n, e);
          },
          [e]
        ),
        n
      );
    }
    function yf(e) {
      return e;
    }
    function vf(e, t) {
      t === void 0 && (t = yf);
      var n = [],
        r = !1,
        o = {
          read: function () {
            if (r)
              throw new Error(
                'Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.'
              );
            return n.length ? n[n.length - 1] : e;
          },
          useMedium: function (i) {
            var a = t(i, r);
            return (
              n.push(a),
              function () {
                n = n.filter(function (s) {
                  return s !== a;
                });
              }
            );
          },
          assignSyncMedium: function (i) {
            for (r = !0; n.length; ) {
              var a = n;
              (n = []), a.forEach(i);
            }
            n = {
              push: function (s) {
                return i(s);
              },
              filter: function () {
                return n;
              },
            };
          },
          assignMedium: function (i) {
            r = !0;
            var a = [];
            if (n.length) {
              var s = n;
              (n = []), s.forEach(i), (a = n);
            }
            var c = function () {
                var u = a;
                (a = []), u.forEach(i);
              },
              l = function () {
                return Promise.resolve().then(c);
              };
            l(),
              (n = {
                push: function (u) {
                  a.push(u), l();
                },
                filter: function (u) {
                  return (a = a.filter(u)), n;
                },
              });
          },
        };
      return o;
    }
    function bf(e) {
      e === void 0 && (e = {});
      var t = vf(null);
      return (t.options = qe({ async: !0, ssr: !1 }, e)), t;
    }
    function xf(e, t) {
      return e.useMedium(t), Dl;
    }
    function Ef() {
      if (!document) return null;
      var e = document.createElement('style');
      e.type = 'text/css';
      var t = wf();
      return t && e.setAttribute('nonce', t), e;
    }
    function Tf(e, t) {
      e.styleSheet
        ? (e.styleSheet.cssText = t)
        : e.appendChild(document.createTextNode(t));
    }
    function Sf(e) {
      var t = document.head || document.getElementsByTagName('head')[0];
      t.appendChild(e);
    }
    function Wf(e) {
      var t = ee([]),
        n = ee([0, 0]),
        r = ee(),
        o = ne(Uf++)[0],
        i = ne(function () {
          return Nl();
        })[0],
        a = ee(e);
      U(
        function () {
          a.current = e;
        },
        [e]
      ),
        U(
          function () {
            if (e.inert) {
              document.body.classList.add('block-interactivity-'.concat(o));
              var m = pf(
                [e.lockRef.current],
                (e.shards || []).map(Ia),
                !0
              ).filter(Boolean);
              return (
                m.forEach(function (x) {
                  return x.classList.add('allow-interactivity-'.concat(o));
                }),
                function () {
                  document.body.classList.remove(
                    'block-interactivity-'.concat(o)
                  ),
                    m.forEach(function (x) {
                      return x.classList.remove(
                        'allow-interactivity-'.concat(o)
                      );
                    });
                }
              );
            }
          },
          [e.inert, e.lockRef.current, e.shards]
        );
      var s = ye(function (m, x) {
          if ('touches' in m && m.touches.length === 2)
            return !a.current.allowPinchZoom;
          var v = $n(m),
            b = n.current,
            y = 'deltaX' in m ? m.deltaX : b[0] - v[0],
            w = 'deltaY' in m ? m.deltaY : b[1] - v[1],
            E,
            j = m.target,
            D = Math.abs(y) > Math.abs(w) ? 'h' : 'v';
          if ('touches' in m && D === 'h' && j.type === 'range') return !1;
          var P = Aa(D, j);
          if (!P) return !0;
          if ((P ? (E = D) : ((E = D === 'v' ? 'h' : 'v'), (P = Aa(D, j))), !P))
            return !1;
          if (
            (!r.current && 'changedTouches' in m && (y || w) && (r.current = E),
            !E)
          )
            return !0;
          var N = r.current || E;
          return Bf(N, x, m, N === 'h' ? y : w, !0);
        }, []),
        c = ye(function (m) {
          var x = m;
          if (!(!zt.length || zt[zt.length - 1] !== i)) {
            var v = 'deltaY' in x ? Ra(x) : $n(x),
              b = t.current.filter(function (E) {
                return (
                  E.name === x.type && E.target === x.target && _f(E.delta, v)
                );
              })[0];
            if (b && b.should) {
              x.cancelable && x.preventDefault();
              return;
            }
            if (!b) {
              var y = (a.current.shards || [])
                  .map(Ia)
                  .filter(Boolean)
                  .filter(function (E) {
                    return E.contains(x.target);
                  }),
                w = y.length > 0 ? s(x, y[0]) : !a.current.noIsolation;
              w && x.cancelable && x.preventDefault();
            }
          }
        }, []),
        l = ye(function (m, x, v, b) {
          var y = { name: m, delta: x, target: v, should: b };
          t.current.push(y),
            setTimeout(function () {
              t.current = t.current.filter(function (w) {
                return w !== y;
              });
            }, 1);
        }, []),
        u = ye(function (m) {
          (n.current = $n(m)), (r.current = void 0);
        }, []),
        d = ye(function (m) {
          l(m.type, Ra(m), m.target, s(m, e.lockRef.current));
        }, []),
        p = ye(function (m) {
          l(m.type, $n(m), m.target, s(m, e.lockRef.current));
        }, []);
      U(function () {
        return (
          zt.push(i),
          e.setCallbacks({
            onScrollCapture: d,
            onWheelCapture: d,
            onTouchMoveCapture: p,
          }),
          document.addEventListener('wheel', c, _t),
          document.addEventListener('touchmove', c, _t),
          document.addEventListener('touchstart', u, _t),
          function () {
            (zt = zt.filter(function (m) {
              return m !== i;
            })),
              document.removeEventListener('wheel', c, _t),
              document.removeEventListener('touchmove', c, _t),
              document.removeEventListener('touchstart', u, _t);
          }
        );
      }, []);
      var h = e.removeScrollBar,
        f = e.inert;
      return O(
        dt,
        null,
        f ? O(i, { styles: zf(o) }) : null,
        h ? O(Mf, { gapMode: 'margin' }) : null
      );
    }
    function ql(e) {
      return e ? 'open' : 'closed';
    }
    function $l({
      children: e,
      width: t,
      height: n,
      onEscapeKeyDown: r,
      onInteractOutside: o = (a) => a.preventDefault(),
      ...i
    }) {
      return g.createElement(
        dm,
        { ...i },
        g.createElement(
          pm,
          null,
          g.createElement(hm, { asChild: !0 }, g.createElement(vm, null)),
          g.createElement(
            xm,
            { width: t, height: n, onInteractOutside: o, onEscapeKeyDown: r },
            e({ Title: mm, Description: gm, Close: ym })
          )
        )
      );
    }
    function wm() {
      return g.createElement(
        'svg',
        {
          width: '32px',
          height: '40px',
          viewBox: '0 0 256 319',
          preserveAspectRatio: 'xMidYMid',
        },
        g.createElement(
          'defs',
          null,
          g.createElement('path', {
            d: 'M9.87245893,293.324145 L0.0114611411,30.5732167 C-0.314208957,21.8955842 6.33948896,14.5413918 15.0063196,13.9997149 L238.494389,0.0317105427 C247.316188,-0.519651867 254.914637,6.18486163 255.466,15.0066607 C255.486773,15.339032 255.497167,15.6719708 255.497167,16.0049907 L255.497167,302.318596 C255.497167,311.157608 248.331732,318.323043 239.492719,318.323043 C239.253266,318.323043 239.013844,318.317669 238.774632,318.306926 L25.1475605,308.712253 C16.8276309,308.338578 10.1847994,301.646603 9.87245893,293.324145 L9.87245893,293.324145 Z',
            id: 'path-1',
          })
        ),
        g.createElement(
          'g',
          null,
          g.createElement(
            'mask',
            { id: 'mask-2', fill: 'white' },
            g.createElement('use', { xlinkHref: '#path-1' })
          ),
          g.createElement('use', {
            fill: '#FF4785',
            fillRule: 'nonzero',
            xlinkHref: '#path-1',
          }),
          g.createElement('path', {
            d: 'M188.665358,39.126973 L190.191903,2.41148534 L220.883535,0 L222.205755,37.8634126 C222.251771,39.1811466 221.22084,40.2866846 219.903106,40.3327009 C219.338869,40.3524045 218.785907,40.1715096 218.342409,39.8221376 L206.506729,30.4984116 L192.493574,41.1282444 C191.443077,41.9251106 189.945493,41.7195021 189.148627,40.6690048 C188.813185,40.2267976 188.6423,39.6815326 188.665358,39.126973 Z M149.413703,119.980309 C149.413703,126.206975 191.355678,123.222696 196.986019,118.848893 C196.986019,76.4467826 174.234041,54.1651411 132.57133,54.1651411 C90.9086182,54.1651411 67.5656805,76.7934542 67.5656805,110.735941 C67.5656805,169.85244 147.345341,170.983856 147.345341,203.229219 C147.345341,212.280549 142.913138,217.654777 133.162291,217.654777 C120.456641,217.654777 115.433477,211.165914 116.024438,189.103298 C116.024438,184.317101 67.5656805,182.824962 66.0882793,189.103298 C62.3262146,242.56887 95.6363019,257.990394 133.753251,257.990394 C170.688279,257.990394 199.645341,238.303123 199.645341,202.663511 C199.645341,139.304202 118.683759,141.001326 118.683759,109.604526 C118.683759,96.8760922 128.139127,95.178968 133.753251,95.178968 C139.662855,95.178968 150.300143,96.2205679 149.413703,119.980309 Z',
            fill: '#FFFFFF',
            fillRule: 'nonzero',
            mask: 'url(#mask-2)',
          })
        )
      );
    }
    function Fm(e) {
      let {
          debounce: t,
          scroll: n,
          polyfill: r,
          offsetSize: o,
        } = e === void 0 ? { debounce: 0, scroll: !1, offsetSize: !1 } : e,
        i = r || (typeof window > 'u' ? class {} : window.ResizeObserver);
      if (!i)
        throw new Error(
          'This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills'
        );
      let [a, s] = ne({
          left: 0,
          top: 0,
          width: 0,
          height: 0,
          bottom: 0,
          right: 0,
          x: 0,
          y: 0,
        }),
        c = ee({
          element: null,
          scrollContainers: null,
          resizeObserver: null,
          lastBounds: a,
        }),
        l = t ? (typeof t == 'number' ? t : t.scroll) : null,
        u = t ? (typeof t == 'number' ? t : t.resize) : null,
        d = ee(!1);
      U(() => ((d.current = !0), () => void (d.current = !1)));
      let [p, h, f] = Se(() => {
        let b = () => {
          if (!c.current.element) return;
          let {
              left: y,
              top: w,
              width: E,
              height: j,
              bottom: D,
              right: P,
              x: N,
              y: te,
            } = c.current.element.getBoundingClientRect(),
            le = {
              left: y,
              top: w,
              width: E,
              height: j,
              bottom: D,
              right: P,
              x: N,
              y: te,
            };
          c.current.element instanceof HTMLElement &&
            o &&
            ((le.height = c.current.element.offsetHeight),
            (le.width = c.current.element.offsetWidth)),
            Object.freeze(le),
            d.current &&
              !_m(c.current.lastBounds, le) &&
              s((c.current.lastBounds = le));
        };
        return [
          b,
          u ? (0, ka.default)(b, u) : b,
          l ? (0, ka.default)(b, l) : b,
        ];
      }, [s, o, l, u]);
      function m() {
        c.current.scrollContainers &&
          (c.current.scrollContainers.forEach((b) =>
            b.removeEventListener('scroll', f, !0)
          ),
          (c.current.scrollContainers = null)),
          c.current.resizeObserver &&
            (c.current.resizeObserver.disconnect(),
            (c.current.resizeObserver = null));
      }
      function x() {
        c.current.element &&
          ((c.current.resizeObserver = new i(f)),
          c.current.resizeObserver.observe(c.current.element),
          n &&
            c.current.scrollContainers &&
            c.current.scrollContainers.forEach((b) =>
              b.addEventListener('scroll', f, { capture: !0, passive: !0 })
            ));
      }
      let v = (b) => {
        !b ||
          b === c.current.element ||
          (m(),
          (c.current.element = b),
          (c.current.scrollContainers = Kl(b)),
          x());
      };
      return (
        Vm(f, !!n),
        jm(h),
        U(() => {
          m(), x();
        }, [n, f, h]),
        U(() => m, []),
        [v, a, p]
      );
    }
    function jm(e) {
      U(() => {
        let t = e;
        return (
          window.addEventListener('resize', t),
          () => void window.removeEventListener('resize', t)
        );
      }, [e]);
    }
    function Vm(e, t) {
      U(() => {
        if (t) {
          let n = e;
          return (
            window.addEventListener('scroll', n, { capture: !0, passive: !0 }),
            () => void window.removeEventListener('scroll', n, !0)
          );
        }
      }, [e, t]);
    }
    function Kl(e) {
      let t = [];
      if (!e || e === document.body) return t;
      let {
        overflow: n,
        overflowX: r,
        overflowY: o,
      } = window.getComputedStyle(e);
      return (
        [n, r, o].some((i) => i === 'auto' || i === 'scroll') && t.push(e),
        [...t, ...Kl(e.parentElement)]
      );
    }
    function Wm(e) {
      let t = new Ma(),
        n = new Ma(),
        r = 0,
        o = !1,
        i = !1,
        a = new WeakSet(),
        s = {
          schedule: (c, l = !1, u = !1) => {
            let d = u && o,
              p = d ? t : n;
            return l && a.add(c), p.add(c) && d && o && (r = t.order.length), c;
          },
          cancel: (c) => {
            n.remove(c), a.delete(c);
          },
          process: (c) => {
            if (o) {
              i = !0;
              return;
            }
            if (
              ((o = !0), ([t, n] = [n, t]), n.clear(), (r = t.order.length), r)
            )
              for (let l = 0; l < r; l++) {
                let u = t.order[l];
                a.has(u) && (s.schedule(u), e()), u(c);
              }
            (o = !1), i && ((i = !1), s.process(c));
          },
        };
      return s;
    }
    function ec(e, t) {
      let n = !1,
        r = !0,
        o = { delta: 0, timestamp: 0, isProcessing: !1 },
        i = Qn.reduce((l, u) => ((l[u] = Wm(() => (n = !0))), l), {}),
        a = (l) => {
          i[l].process(o);
        },
        s = () => {
          let l = performance.now();
          (n = !1),
            (o.delta = r
              ? 1e3 / 60
              : Math.max(Math.min(l - o.timestamp, Hm), 1)),
            (o.timestamp = l),
            (o.isProcessing = !0),
            Qn.forEach(a),
            (o.isProcessing = !1),
            n && t && ((r = !1), e(s));
        },
        c = () => {
          (n = !0), (r = !0), o.isProcessing || e(s);
        };
      return {
        schedule: Qn.reduce((l, u) => {
          let d = i[u];
          return (
            (l[u] = (p, h = !1, f = !1) => (n || c(), d.schedule(p, h, f))), l
          );
        }, {}),
        cancel: (l) => Qn.forEach((u) => i[u].cancel(l)),
        state: o,
        steps: i,
      };
    }
    function Ym(e, t, n, r) {
      let { visualElement: o } = me(Rr),
        i = me(Ql),
        a = me(Qo),
        s = me(Xl).reducedMotion,
        c = ee();
      (r = r || i.renderer),
        !c.current &&
          r &&
          (c.current = r(e, {
            visualState: t,
            parent: o,
            props: n,
            presenceContext: a,
            blockInitialAnimation: a ? a.initial === !1 : !1,
            reducedMotionConfig: s,
          }));
      let l = c.current;
      Ci(() => {
        l && l.update(n, a);
      });
      let u = ee(!!(n[Zl] && !window.HandoffComplete));
      return (
        zm(() => {
          l &&
            (Jo.postRender(l.render),
            u.current && l.animationState && l.animationState.animateChanges());
        }),
        U(() => {
          l &&
            (l.updateFeatures(),
            !u.current && l.animationState && l.animationState.animateChanges(),
            u.current && ((u.current = !1), (window.HandoffComplete = !0)));
        }),
        l
      );
    }
    function Wt(e) {
      return (
        e &&
        typeof e == 'object' &&
        Object.prototype.hasOwnProperty.call(e, 'current')
      );
    }
    function Gm(e, t, n) {
      return ye(
        (r) => {
          r && e.mount && e.mount(r),
            t && (r ? t.mount(r) : t.unmount()),
            n && (typeof n == 'function' ? n(r) : Wt(n) && (n.current = r));
        },
        [t]
      );
    }
    function Tn(e) {
      return typeof e == 'string' || Array.isArray(e);
    }
    function kr(e) {
      return e !== null && typeof e == 'object' && typeof e.start == 'function';
    }
    function Mr(e) {
      return kr(e.animate) || ti.some((t) => Tn(e[t]));
    }
    function tc(e) {
      return !!(Mr(e) || e.variants);
    }
    function qm(e, t) {
      if (Mr(e)) {
        let { initial: n, animate: r } = e;
        return {
          initial: n === !1 || Tn(n) ? n : void 0,
          animate: Tn(r) ? r : void 0,
        };
      }
      return e.inherit !== !1 ? t : {};
    }
    function $m(e) {
      let { initial: t, animate: n } = qm(e, me(Rr));
      return Se(() => ({ initial: t, animate: n }), [Da(t), Da(n)]);
    }
    function Da(e) {
      return Array.isArray(e) ? e.join(' ') : e;
    }
    function Km(e) {
      for (let t in e) Sn[t] = { ...Sn[t], ...e[t] };
    }
    function Qm({
      preloadedFeatures: e,
      createVisualElement: t,
      useRender: n,
      useVisualState: r,
      Component: o,
    }) {
      e && Km(e);
      function i(s, c) {
        let l,
          u = { ...me(Xl), ...s, layoutId: Zm(s) },
          { isStatic: d } = u,
          p = $m(s),
          h = r(s, d);
        if (!d && Ir) {
          p.visualElement = Ym(o, h, u, t);
          let f = me(rc),
            m = me(Ql).strict;
          p.visualElement && (l = p.visualElement.loadFeatures(u, m, e, f));
        }
        return O(
          Rr.Provider,
          { value: p },
          l && p.visualElement
            ? O(l, { visualElement: p.visualElement, ...u })
            : null,
          n(o, s, Gm(h, p.visualElement, c), h, d, p.visualElement)
        );
      }
      let a = se(i);
      return (a[Xm] = o), a;
    }
    function Zm({ layoutId: e }) {
      let t = me(nc).id;
      return t && e !== void 0 ? t + '-' + e : e;
    }
    function Jm(e) {
      function t(r, o = {}) {
        return Qm(e(r, o));
      }
      if (typeof Proxy > 'u') return t;
      let n = new Map();
      return new Proxy(t, {
        get: (r, o) => (n.has(o) || n.set(o, t(o)), n.get(o)),
      });
    }
    function ni(e) {
      return typeof e != 'string' || e.includes('-')
        ? !1
        : !!(eg.indexOf(e) > -1 || /[A-Z]/.test(e));
    }
    function tg(e) {
      Object.assign(hr, e);
    }
    function oc(e, { layout: t, layoutId: n }) {
      return (
        Nt.has(e) ||
        e.startsWith('origin') ||
        ((t || n !== void 0) && (!!hr[e] || e === 'opacity'))
      );
    }
    function og(
      e,
      { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
      r,
      o
    ) {
      let i = '';
      for (let a = 0; a < rg; a++) {
        let s = Nn[a];
        if (e[s] !== void 0) {
          let c = ng[s] || s;
          i += `${c}(${e[s]}) `;
        }
      }
      return (
        t && !e.z && (i += 'translateZ(0)'),
        (i = i.trim()),
        o ? (i = o(e, r ? '' : i)) : n && r && (i = 'none'),
        i
      );
    }
    function Fn(e) {
      return typeof e == 'string';
    }
    function oi(e, t, n, r) {
      let { style: o, vars: i, transform: a, transformOrigin: s } = e,
        c = !1,
        l = !1,
        u = !0;
      for (let d in t) {
        let p = t[d];
        if (ac(d)) {
          i[d] = p;
          continue;
        }
        let h = sc[d],
          f = sg(p, h);
        if (Nt.has(d)) {
          if (((c = !0), (a[d] = f), !u)) continue;
          p !== (h.default || 0) && (u = !1);
        } else d.startsWith('origin') ? ((l = !0), (s[d] = f)) : (o[d] = f);
      }
      if (
        (t.transform ||
          (c || r
            ? (o.transform = og(e.transform, n, u, r))
            : o.transform && (o.transform = 'none')),
        l)
      ) {
        let { originX: d = '50%', originY: p = '50%', originZ: h = 0 } = s;
        o.transformOrigin = `${d} ${p} ${h}`;
      }
    }
    function lc(e, t, n) {
      for (let r in t) !Ce(t[r]) && !oc(r, n) && (e[r] = t[r]);
    }
    function pg({ transformTemplate: e }, t, n) {
      return Se(() => {
        let r = ii();
        return (
          oi(r, t, { enableHardwareAcceleration: !n }, e),
          Object.assign({}, r.vars, r.style)
        );
      }, [t]);
    }
    function hg(e, t, n) {
      let r = e.style || {},
        o = {};
      return lc(o, r, e), Object.assign(o, pg(e, t, n)), o;
    }
    function fg(e, t, n) {
      let r = {},
        o = hg(e, t, n);
      return (
        e.drag &&
          e.dragListener !== !1 &&
          ((r.draggable = !1),
          (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = 'none'),
          (o.touchAction =
            e.drag === !0 ? 'none' : `pan-${e.drag === 'x' ? 'y' : 'x'}`)),
        e.tabIndex === void 0 &&
          (e.onTap || e.onTapStart || e.whileTap) &&
          (r.tabIndex = 0),
        (r.style = o),
        r
      );
    }
    function mr(e) {
      return (
        e.startsWith('while') ||
        (e.startsWith('drag') && e !== 'draggable') ||
        e.startsWith('layout') ||
        e.startsWith('onTap') ||
        e.startsWith('onPan') ||
        e.startsWith('onLayout') ||
        mg.has(e)
      );
    }
    function gg(e) {
      e && (cc = (t) => (t.startsWith('on') ? !mr(t) : e(t)));
    }
    function yg(e, t, n) {
      let r = {};
      for (let o in e)
        (o === 'values' && typeof e.values == 'object') ||
          ((cc(o) ||
            (n === !0 && mr(o)) ||
            (!t && !mr(o)) ||
            (e.draggable && o.startsWith('onDrag'))) &&
            (r[o] = e[o]));
      return r;
    }
    function ja(e, t, n) {
      return typeof e == 'string' ? e : F.transform(t + n * e);
    }
    function vg(e, t, n) {
      let r = ja(t, e.x, e.width),
        o = ja(n, e.y, e.height);
      return `${r} ${o}`;
    }
    function wg(e, t, n = 1, r = 0, o = !0) {
      e.pathLength = 1;
      let i = o ? bg : xg;
      e[i.offset] = F.transform(-r);
      let a = F.transform(t),
        s = F.transform(n);
      e[i.array] = `${a} ${s}`;
    }
    function ai(
      e,
      {
        attrX: t,
        attrY: n,
        attrScale: r,
        originX: o,
        originY: i,
        pathLength: a,
        pathSpacing: s = 1,
        pathOffset: c = 0,
        ...l
      },
      u,
      d,
      p
    ) {
      if ((oi(e, l, u, p), d)) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return;
      }
      (e.attrs = e.style), (e.style = {});
      let { attrs: h, style: f, dimensions: m } = e;
      h.transform && (m && (f.transform = h.transform), delete h.transform),
        m &&
          (o !== void 0 || i !== void 0 || f.transform) &&
          (f.transformOrigin = vg(
            m,
            o !== void 0 ? o : 0.5,
            i !== void 0 ? i : 0.5
          )),
        t !== void 0 && (h.x = t),
        n !== void 0 && (h.y = n),
        r !== void 0 && (h.scale = r),
        a !== void 0 && wg(h, a, s, c, !1);
    }
    function Eg(e, t, n, r) {
      let o = Se(() => {
        let i = uc();
        return (
          ai(
            i,
            t,
            { enableHardwareAcceleration: !1 },
            si(r),
            e.transformTemplate
          ),
          { ...i.attrs, style: { ...i.style } }
        );
      }, [t]);
      if (e.style) {
        let i = {};
        lc(i, e.style, e), (o.style = { ...i, ...o.style });
      }
      return o;
    }
    function Tg(e = !1) {
      return (t, n, r, { latestValues: o }, i) => {
        let a = (ni(t) ? Eg : fg)(n, o, i, t),
          s = yg(n, typeof t == 'string', e),
          c = t !== dt ? { ...s, ...a, ref: r } : {},
          { children: l } = n,
          u = Se(() => (Ce(l) ? l.get() : l), [l]);
        return O(t, { ...c, children: u });
      };
    }
    function dc(e, { style: t, vars: n }, r, o) {
      Object.assign(e.style, t, o && o.getProjectionStyles(r));
      for (let i in n) e.style.setProperty(i, n[i]);
    }
    function hc(e, t, n, r) {
      dc(e, t, void 0, r);
      for (let o in t.attrs) e.setAttribute(pc.has(o) ? o : Zo(o), t.attrs[o]);
    }
    function li(e, t) {
      let { style: n } = e,
        r = {};
      for (let o in n)
        (Ce(n[o]) || (t.style && Ce(t.style[o])) || oc(o, e)) && (r[o] = n[o]);
      return r;
    }
    function fc(e, t) {
      let n = li(e, t);
      for (let r in e)
        if (Ce(e[r]) || Ce(t[r])) {
          let o =
            Nn.indexOf(r) !== -1
              ? 'attr' + r.charAt(0).toUpperCase() + r.substring(1)
              : r;
          n[o] = e[r];
        }
      return n;
    }
    function ci(e, t, n, r = {}, o = {}) {
      return (
        typeof t == 'function' && (t = t(n !== void 0 ? n : e.custom, r, o)),
        typeof t == 'string' && (t = e.variants && e.variants[t]),
        typeof t == 'function' && (t = t(n !== void 0 ? n : e.custom, r, o)),
        t
      );
    }
    function Sg(e) {
      let t = ee(null);
      return t.current === null && (t.current = e()), t.current;
    }
    function ir(e) {
      let t = Ce(e) ? e.get() : e;
      return Pg(t) ? t.toValue() : t;
    }
    function Cg(
      { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
      r,
      o,
      i
    ) {
      let a = { latestValues: Ag(r, o, i, e), renderState: t() };
      return n && (a.mount = (s) => n(r, s, a)), a;
    }
    function Ag(e, t, n, r) {
      let o = {},
        i = r(e, {});
      for (let p in i) o[p] = ir(i[p]);
      let { initial: a, animate: s } = e,
        c = Mr(e),
        l = tc(e);
      t &&
        l &&
        !c &&
        e.inherit !== !1 &&
        (a === void 0 && (a = t.initial), s === void 0 && (s = t.animate));
      let u = n ? n.initial === !1 : !1;
      u = u || a === !1;
      let d = u ? s : a;
      return (
        d &&
          typeof d != 'boolean' &&
          !kr(d) &&
          (Array.isArray(d) ? d : [d]).forEach((p) => {
            let h = ci(e, p);
            if (!h) return;
            let { transitionEnd: f, transition: m, ...x } = h;
            for (let v in x) {
              let b = x[v];
              if (Array.isArray(b)) {
                let y = u ? b.length - 1 : 0;
                b = b[y];
              }
              b !== null && (o[v] = b);
            }
            for (let v in f) o[v] = f[v];
          }),
        o
      );
    }
    function kg(e, { forwardMotionProps: t = !1 }, n, r) {
      return {
        ...(ni(e) ? Rg : Ig),
        preloadedFeatures: n,
        useRender: Tg(t),
        createVisualElement: r,
        Component: e,
      };
    }
    function ot(e, t, n, r = { passive: !0 }) {
      return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
    }
    function Dr(e, t = 'page') {
      return { point: { x: e[t + 'X'], y: e[t + 'Y'] } };
    }
    function it(e, t, n, r) {
      return ot(e, t, Mg(n), r);
    }
    function yc(e) {
      let t = null;
      return () => {
        let n = () => {
          t = null;
        };
        return t === null ? ((t = e), n) : !1;
      };
    }
    function vc(e) {
      let t = !1;
      if (e === 'y') t = Ba();
      else if (e === 'x') t = Va();
      else {
        let n = Va(),
          r = Ba();
        n && r
          ? (t = () => {
              n(), r();
            })
          : (n && n(), r && r());
      }
      return t;
    }
    function bc() {
      let e = vc(!0);
      return e ? (e(), !1) : !0;
    }
    function _a(e, t) {
      let n = 'pointer' + (t ? 'enter' : 'leave'),
        r = 'onHover' + (t ? 'Start' : 'End'),
        o = (i, a) => {
          if (i.pointerType === 'touch' || bc()) return;
          let s = e.getProps();
          e.animationState &&
            s.whileHover &&
            e.animationState.setActive('whileHover', t),
            s[r] && ie.update(() => s[r](i, a));
        };
      return it(e.current, n, o, { passive: !e.getProps()[r] });
    }
    function no(e, t) {
      if (!t) return;
      let n = new PointerEvent('pointer' + e);
      t(n, Dr(n));
    }
    function Bg({ root: e, ...t }) {
      let n = e || document;
      ro.has(n) || ro.set(n, {});
      let r = ro.get(n),
        o = JSON.stringify(t);
      return (
        r[o] || (r[o] = new IntersectionObserver(Vg, { root: e, ...t })), r[o]
      );
    }
    function _g(e, t, n) {
      let r = Bg(t);
      return (
        Oo.set(e, n),
        r.observe(e),
        () => {
          Oo.delete(e), r.unobserve(e);
        }
      );
    }
    function Wg({ viewport: e = {} }, { viewport: t = {} } = {}) {
      return (n) => e[n] !== t[n];
    }
    function wc(e, t) {
      if (!Array.isArray(t)) return !1;
      let n = t.length;
      if (n !== e.length) return !1;
      for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
      return !0;
    }
    function Yg(e) {
      let t = {};
      return e.values.forEach((n, r) => (t[r] = n.get())), t;
    }
    function Gg(e) {
      let t = {};
      return e.values.forEach((n, r) => (t[r] = n.getVelocity())), t;
    }
    function Lr(e, t, n) {
      let r = e.getProps();
      return ci(r, t, n !== void 0 ? n : r.custom, Yg(e), Gg(e));
    }
    function Tc(e) {
      return !!(
        !e ||
        (typeof e == 'string' && Sc[e]) ||
        Ec(e) ||
        (Array.isArray(e) && e.every(Tc))
      );
    }
    function Pc(e) {
      if (e) return Ec(e) ? gn(e) : Array.isArray(e) ? e.map(Pc) : Sc[e];
    }
    function $g(
      e,
      t,
      n,
      {
        delay: r = 0,
        duration: o,
        repeat: i = 0,
        repeatType: a = 'loop',
        ease: s,
        times: c,
      } = {}
    ) {
      let l = { [t]: n };
      c && (l.offset = c);
      let u = Pc(s);
      return (
        Array.isArray(u) && (l.easing = u),
        e.animate(l, {
          delay: r,
          duration: o,
          easing: Array.isArray(u) ? 'linear' : u,
          fill: 'both',
          iterations: i + 1,
          direction: a === 'reverse' ? 'alternate' : 'normal',
        })
      );
    }
    function Kg(e, { repeat: t, repeatType: n = 'loop' }) {
      let r = t && n !== 'loop' && t % 2 === 1 ? 0 : e.length - 1;
      return e[r];
    }
    function Zg(e, t, n, r, o) {
      let i,
        a,
        s = 0;
      do
        (a = t + (n - t) / 2), (i = Oc(a, r, o) - e), i > 0 ? (n = a) : (t = a);
      while (Math.abs(i) > Xg && ++s < Qg);
      return a;
    }
    function Bn(e, t, n, r) {
      if (e === t && n === r) return he;
      let o = (i) => Zg(i, 0, 1, e, n);
      return (i) => (i === 0 || i === 1 ? i : Oc(o(i), t, r));
    }
    function oo(e, t, n) {
      return (
        n < 0 && (n += 1),
        n > 1 && (n -= 1),
        n < 1 / 6
          ? e + (t - e) * 6 * n
          : n < 1 / 2
          ? t
          : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
      );
    }
    function iy({ hue: e, saturation: t, lightness: n, alpha: r }) {
      (e /= 360), (t /= 100), (n /= 100);
      let o = 0,
        i = 0,
        a = 0;
      if (!t) o = i = a = n;
      else {
        let s = n < 0.5 ? n * (1 + t) : n + t - n * t,
          c = 2 * n - s;
        (o = oo(c, s, e + 1 / 3)), (i = oo(c, s, e)), (a = oo(c, s, e - 1 / 3));
      }
      return {
        red: Math.round(o * 255),
        green: Math.round(i * 255),
        blue: Math.round(a * 255),
        alpha: r,
      };
    }
    function sy(e) {
      let t = '',
        n = '',
        r = '',
        o = '';
      return (
        e.length > 5
          ? ((t = e.substring(1, 3)),
            (n = e.substring(3, 5)),
            (r = e.substring(5, 7)),
            (o = e.substring(7, 9)))
          : ((t = e.substring(1, 2)),
            (n = e.substring(2, 3)),
            (r = e.substring(3, 4)),
            (o = e.substring(4, 5)),
            (t += t),
            (n += n),
            (r += r),
            (o += o)),
        {
          red: parseInt(t, 16),
          green: parseInt(n, 16),
          blue: parseInt(r, 16),
          alpha: o ? parseInt(o, 16) / 255 : 1,
        }
      );
    }
    function Wa(e) {
      let t = cy(e);
      ze(
        !!t,
        `'${e}' is not an animatable color. Use the equivalent color code instead.`
      );
      let n = t.parse(e);
      return t === Ht && (n = iy(n)), n;
    }
    function uy(e) {
      var t, n;
      return (
        isNaN(e) &&
        Fn(e) &&
        (((t = e.match(ri)) === null || t === void 0 ? void 0 : t.length) ||
          0) +
          (((n = e.match(lg)) === null || n === void 0 ? void 0 : n.length) ||
            0) >
          0
      );
    }
    function yr(e) {
      let t = e.toString(),
        n = t.match(Ga) || [],
        r = [],
        o = { color: [], number: [], var: [] },
        i = [];
      for (let s = 0; s < n.length; s++) {
        let c = n[s];
        we.test(c)
          ? (o.color.push(s), i.push(Lc), r.push(we.parse(c)))
          : c.startsWith(py)
          ? (o.var.push(s), i.push(dy), r.push(c))
          : (o.number.push(s), i.push(Dc), r.push(parseFloat(c)));
      }
      let a = t.replace(Ga, Ya).split(Ya);
      return { values: r, split: a, indexes: o, types: i };
    }
    function Nc(e) {
      return yr(e).values;
    }
    function Fc(e) {
      let { split: t, types: n } = yr(e),
        r = t.length;
      return (o) => {
        let i = '';
        for (let a = 0; a < r; a++)
          if (((i += t[a]), o[a] !== void 0)) {
            let s = n[a];
            s === Dc
              ? (i += bn(o[a]))
              : s === Lc
              ? (i += we.transform(o[a]))
              : (i += o[a]);
          }
        return i;
      };
    }
    function fy(e) {
      let t = Nc(e);
      return Fc(e)(t.map(hy));
    }
    function Ao(e, t) {
      return (n) => (n > 0 ? t : e);
    }
    function my(e, t) {
      return (n) => oe(e, t, n);
    }
    function hi(e) {
      return typeof e == 'number'
        ? my
        : typeof e == 'string'
        ? fr(e)
          ? Ao
          : we.test(e)
          ? Ha
          : vy
        : Array.isArray(e)
        ? jc
        : typeof e == 'object'
        ? we.test(e)
          ? Ha
          : gy
        : Ao;
    }
    function jc(e, t) {
      let n = [...e],
        r = n.length,
        o = e.map((i, a) => hi(i)(i, t[a]));
      return (i) => {
        for (let a = 0; a < r; a++) n[a] = o[a](i);
        return n;
      };
    }
    function gy(e, t) {
      let n = { ...e, ...t },
        r = {};
      for (let o in n)
        e[o] !== void 0 && t[o] !== void 0 && (r[o] = hi(e[o])(e[o], t[o]));
      return (o) => {
        for (let i in r) n[i] = r[i](o);
        return n;
      };
    }
    function yy(e, t) {
      var n;
      let r = [],
        o = { color: 0, var: 0, number: 0 };
      for (let i = 0; i < t.values.length; i++) {
        let a = t.types[i],
          s = e.indexes[a][o[a]],
          c = (n = e.values[s]) !== null && n !== void 0 ? n : 0;
        (r[i] = c), o[a]++;
      }
      return r;
    }
    function Vc(e, t, n) {
      return typeof e == 'number' &&
        typeof t == 'number' &&
        typeof n == 'number'
        ? oe(e, t, n)
        : hi(e)(e, t);
    }
    function by(e, t, n) {
      let r = [],
        o = n || Vc,
        i = e.length - 1;
      for (let a = 0; a < i; a++) {
        let s = o(e[a], e[a + 1]);
        if (t) {
          let c = Array.isArray(t) ? t[a] || he : t;
          s = at(c, s);
        }
        r.push(s);
      }
      return r;
    }
    function xy(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
      let i = e.length;
      if (
        (ze(
          i === t.length,
          'Both input and output ranges must be the same length'
        ),
        i === 1)
      )
        return () => t[0];
      e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
      let a = by(t, r, o),
        s = a.length,
        c = (l) => {
          let u = 0;
          if (s > 1) for (; u < e.length - 2 && !(l < e[u + 1]); u++);
          let d = Pn(e[u], e[u + 1], l);
          return a[u](d);
        };
      return n ? (l) => c(wt(e[0], e[i - 1], l)) : c;
    }
    function wy(e, t) {
      let n = e[e.length - 1];
      for (let r = 1; r <= t; r++) {
        let o = Pn(0, t, r);
        e.push(oe(n, 1, o));
      }
    }
    function Ey(e) {
      let t = [0];
      return wy(t, e.length - 1), t;
    }
    function Ty(e, t) {
      return e.map((n) => n * t);
    }
    function Sy(e, t) {
      return e.map(() => t || Cc).splice(0, e.length - 1);
    }
    function vr({
      duration: e = 300,
      keyframes: t,
      times: n,
      ease: r = 'easeInOut',
    }) {
      let o = ty(r) ? r.map(Ua) : Ua(r),
        i = { done: !1, value: t[0] },
        a = Ty(n && n.length === t.length ? n : Ey(t), e),
        s = xy(a, t, { ease: Array.isArray(o) ? o : Sy(t, o) });
      return {
        calculatedDuration: e,
        next: (c) => ((i.value = s(c)), (i.done = c >= e), i),
      };
    }
    function Bc(e, t) {
      return t ? e * (1e3 / t) : 0;
    }
    function _c(e, t, n) {
      let r = Math.max(t - Py, 0);
      return Bc(n - e(r), t - r);
    }
    function Ry({
      duration: e = 800,
      bounce: t = 0.25,
      velocity: n = 0,
      mass: r = 1,
    }) {
      let o, i;
      Vn(e <= vt(qa), 'Spring duration must be 10 seconds or less');
      let a = 1 - t;
      (a = wt(Cy, Ay, a)),
        (e = wt(Oy, qa, st(e))),
        a < 1
          ? ((o = (l) => {
              let u = l * a,
                d = u * e,
                p = u - n,
                h = Ro(l, a),
                f = Math.exp(-d);
              return so - (p / h) * f;
            }),
            (i = (l) => {
              let u = l * a * e,
                d = u * n + n,
                p = Math.pow(a, 2) * Math.pow(l, 2) * e,
                h = Math.exp(-u),
                f = Ro(Math.pow(l, 2), a);
              return ((-o(l) + so > 0 ? -1 : 1) * ((d - p) * h)) / f;
            }))
          : ((o = (l) => {
              let u = Math.exp(-l * e),
                d = (l - n) * e + 1;
              return -so + u * d;
            }),
            (i = (l) => {
              let u = Math.exp(-l * e),
                d = (n - l) * (e * e);
              return u * d;
            }));
      let s = 5 / e,
        c = ky(o, i, s);
      if (((e = vt(e)), isNaN(c)))
        return { stiffness: 100, damping: 10, duration: e };
      {
        let l = Math.pow(c, 2) * r;
        return { stiffness: l, damping: a * 2 * Math.sqrt(r * l), duration: e };
      }
    }
    function ky(e, t, n) {
      let r = n;
      for (let o = 1; o < Iy; o++) r = r - e(r) / t(r);
      return r;
    }
    function Ro(e, t) {
      return e * Math.sqrt(1 - t * t);
    }
    function $a(e, t) {
      return t.some((n) => e[n] !== void 0);
    }
    function Ly(e) {
      let t = {
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: !1,
        ...e,
      };
      if (!$a(e, Dy) && $a(e, My)) {
        let n = Ry(e);
        (t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
      }
      return t;
    }
    function zc({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
      let o = e[0],
        i = e[e.length - 1],
        a = { done: !1, value: o },
        {
          stiffness: s,
          damping: c,
          mass: l,
          duration: u,
          velocity: d,
          isResolvedFromDuration: p,
        } = Ly({ ...r, velocity: -st(r.velocity || 0) }),
        h = d || 0,
        f = c / (2 * Math.sqrt(s * l)),
        m = i - o,
        x = st(Math.sqrt(s / l)),
        v = Math.abs(m) < 5;
      n || (n = v ? 0.01 : 2), t || (t = v ? 0.005 : 0.5);
      let b;
      if (f < 1) {
        let y = Ro(x, f);
        b = (w) => {
          let E = Math.exp(-f * x * w);
          return (
            i -
            E * (((h + f * x * m) / y) * Math.sin(y * w) + m * Math.cos(y * w))
          );
        };
      } else if (f === 1)
        b = (y) => i - Math.exp(-x * y) * (m + (h + x * m) * y);
      else {
        let y = x * Math.sqrt(f * f - 1);
        b = (w) => {
          let E = Math.exp(-f * x * w),
            j = Math.min(y * w, 300);
          return (
            i -
            (E * ((h + f * x * m) * Math.sinh(j) + y * m * Math.cosh(j))) / y
          );
        };
      }
      return {
        calculatedDuration: (p && u) || null,
        next: (y) => {
          let w = b(y);
          if (p) a.done = y >= u;
          else {
            let E = h;
            y !== 0 && (f < 1 ? (E = _c(b, y, w)) : (E = 0));
            let j = Math.abs(E) <= n,
              D = Math.abs(i - w) <= t;
            a.done = j && D;
          }
          return (a.value = a.done ? i : w), a;
        },
      };
    }
    function Ka({
      keyframes: e,
      velocity: t = 0,
      power: n = 0.8,
      timeConstant: r = 325,
      bounceDamping: o = 10,
      bounceStiffness: i = 500,
      modifyTarget: a,
      min: s,
      max: c,
      restDelta: l = 0.5,
      restSpeed: u,
    }) {
      let d = e[0],
        p = { done: !1, value: d },
        h = (P) => (s !== void 0 && P < s) || (c !== void 0 && P > c),
        f = (P) =>
          s === void 0
            ? c
            : c === void 0 || Math.abs(s - P) < Math.abs(c - P)
            ? s
            : c,
        m = n * t,
        x = d + m,
        v = a === void 0 ? x : a(x);
      v !== x && (m = v - d);
      let b = (P) => -m * Math.exp(-P / r),
        y = (P) => v + b(P),
        w = (P) => {
          let N = b(P),
            te = y(P);
          (p.done = Math.abs(N) <= l), (p.value = p.done ? v : te);
        },
        E,
        j,
        D = (P) => {
          h(p.value) &&
            ((E = P),
            (j = zc({
              keyframes: [p.value, f(p.value)],
              velocity: _c(y, P, p.value),
              damping: o,
              stiffness: i,
              restDelta: l,
              restSpeed: u,
            })));
        };
      return (
        D(0),
        {
          calculatedDuration: null,
          next: (P) => {
            let N = !1;
            return (
              !j && E === void 0 && ((N = !0), w(P), D(P)),
              E !== void 0 && P > E ? j.next(P - E) : (!N && w(P), p)
            );
          },
        }
      );
    }
    function Ny() {
      ar = void 0;
    }
    function Xa(e) {
      let t = 0,
        n = 50,
        r = e.next(t);
      for (; !r.done && t < 2e4; ) (t += n), (r = e.next(t));
      return t >= 2e4 ? 1 / 0 : t;
    }
    function br({
      autoplay: e = !0,
      delay: t = 0,
      driver: n = Fy,
      keyframes: r,
      type: o = 'keyframes',
      repeat: i = 0,
      repeatDelay: a = 0,
      repeatType: s = 'loop',
      onPlay: c,
      onStop: l,
      onComplete: u,
      onUpdate: d,
      ...p
    }) {
      let h = 1,
        f = !1,
        m,
        x,
        v = () => {
          x = new Promise((J) => {
            m = J;
          });
        };
      v();
      let b,
        y = jy[o] || vr,
        w;
      y !== vr &&
        typeof r[0] != 'number' &&
        (ze(
          r.length === 2,
          `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${r}`
        ),
        (w = at(Vy, Vc(r[0], r[1]))),
        (r = [0, 100]));
      let E = y({ ...p, keyframes: r }),
        j;
      s === 'mirror' &&
        (j = y({
          ...p,
          keyframes: [...r].reverse(),
          velocity: -(p.velocity || 0),
        }));
      let D = 'idle',
        P = null,
        N = null,
        te = null;
      E.calculatedDuration === null && i && (E.calculatedDuration = Xa(E));
      let { calculatedDuration: le } = E,
        Me = 1 / 0,
        Re = 1 / 0;
      le !== null && ((Me = le + a), (Re = Me * (i + 1) - a));
      let fe = 0,
        ae = (J) => {
          if (N === null) return;
          h > 0 && (N = Math.min(N, J)),
            h < 0 && (N = Math.min(J - Re / h, N)),
            P !== null ? (fe = P) : (fe = Math.round(J - N) * h);
          let T = fe - t * (h >= 0 ? 1 : -1),
            k = h >= 0 ? T < 0 : T > Re;
          (fe = Math.max(T, 0)), D === 'finished' && P === null && (fe = Re);
          let Y = fe,
            W = E;
          if (i) {
            let z = Math.min(fe, Re) / Me,
              q = Math.floor(z),
              $ = z % 1;
            !$ && z >= 1 && ($ = 1),
              $ === 1 && q--,
              (q = Math.min(q, i + 1)),
              q % 2 &&
                (s === 'reverse'
                  ? (($ = 1 - $), a && ($ -= a / Me))
                  : s === 'mirror' && (W = j)),
              (Y = wt(0, 1, $) * Me);
          }
          let V = k ? { done: !1, value: r[0] } : W.next(Y);
          w && (V.value = w(V.value));
          let { done: K } = V;
          !k && le !== null && (K = h >= 0 ? fe >= Re : fe <= 0);
          let H = P === null && (D === 'finished' || (D === 'running' && K));
          return d && d(V.value), H && be(), V;
        },
        Te = () => {
          b && b.stop(), (b = void 0);
        },
        He = () => {
          (D = 'idle'), Te(), m(), v(), (N = te = null);
        },
        be = () => {
          (D = 'finished'), u && u(), Te(), m();
        },
        je = () => {
          if (f) return;
          b || (b = n(ae));
          let J = b.now();
          c && c(),
            P !== null ? (N = J - P) : (!N || D === 'finished') && (N = J),
            D === 'finished' && v(),
            (te = N),
            (P = null),
            (D = 'running'),
            b.start();
        };
      e && je();
      let Ft = {
        then(J, T) {
          return x.then(J, T);
        },
        get time() {
          return st(fe);
        },
        set time(J) {
          (J = vt(J)),
            (fe = J),
            P !== null || !b || h === 0 ? (P = J) : (N = b.now() - J / h);
        },
        get duration() {
          let J = E.calculatedDuration === null ? Xa(E) : E.calculatedDuration;
          return st(J);
        },
        get speed() {
          return h;
        },
        set speed(J) {
          J === h || !b || ((h = J), (Ft.time = st(fe)));
        },
        get state() {
          return D;
        },
        play: je,
        pause: () => {
          (D = 'paused'), (P = fe);
        },
        stop: () => {
          (f = !0), D !== 'idle' && ((D = 'idle'), l && l(), He());
        },
        cancel: () => {
          te !== null && ae(te), He();
        },
        complete: () => {
          D = 'finished';
        },
        sample: (J) => ((N = 0), ae(J)),
      };
      return Ft;
    }
    function By(e) {
      let t;
      return () => (t === void 0 && (t = e()), t);
    }
    function Hy(e, t, { onUpdate: n, onComplete: r, ...o }) {
      if (
        !(
          _y() &&
          zy.has(t) &&
          !o.repeatDelay &&
          o.repeatType !== 'mirror' &&
          o.damping !== 0 &&
          o.type !== 'inertia'
        )
      )
        return !1;
      let i = !1,
        a,
        s,
        c = !1,
        l = () => {
          s = new Promise((v) => {
            a = v;
          });
        };
      l();
      let { keyframes: u, duration: d = 300, ease: p, times: h } = o;
      if (Wy(t, o)) {
        let v = br({ ...o, repeat: 0, delay: 0 }),
          b = { done: !1, value: u[0] },
          y = [],
          w = 0;
        for (; !b.done && w < Uy; )
          (b = v.sample(w)), y.push(b.value), (w += Jn);
        (h = void 0), (u = y), (d = w - Jn), (p = 'linear');
      }
      let f = $g(e.owner.current, t, u, {
          ...o,
          duration: d,
          ease: p,
          times: h,
        }),
        m = () => {
          (c = !1), f.cancel();
        },
        x = () => {
          (c = !0), ie.update(m), a(), l();
        };
      return (
        (f.onfinish = () => {
          c || (e.set(Kg(u, o)), r && r(), x());
        }),
        {
          then(v, b) {
            return s.then(v, b);
          },
          attachTimeline(v) {
            return (f.timeline = v), (f.onfinish = null), he;
          },
          get time() {
            return st(f.currentTime || 0);
          },
          set time(v) {
            f.currentTime = vt(v);
          },
          get speed() {
            return f.playbackRate;
          },
          set speed(v) {
            f.playbackRate = v;
          },
          get duration() {
            return st(d);
          },
          play: () => {
            i || (f.play(), lt(m));
          },
          pause: () => f.pause(),
          stop: () => {
            if (((i = !0), f.playState === 'idle')) return;
            let { currentTime: v } = f;
            if (v) {
              let b = br({ ...o, autoplay: !1 });
              e.setWithVelocity(b.sample(v - Jn).value, b.sample(v).value, Jn);
            }
            x();
          },
          complete: () => {
            c || f.finish();
          },
          cancel: x,
        }
      );
    }
    function Yy({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
      let o = () => (
        n && n(e[e.length - 1]),
        r && r(),
        {
          time: 0,
          speed: 1,
          duration: 0,
          play: he,
          pause: he,
          stop: he,
          then: (i) => (i(), Promise.resolve()),
          cancel: he,
          complete: he,
        }
      );
      return t
        ? br({ keyframes: [0, 1], duration: 0, delay: t, onComplete: o })
        : o();
    }
    function Zy(e) {
      let [t, n] = e.slice(0, -1).split('(');
      if (t === 'drop-shadow') return e;
      let [r] = n.match(ri) || [];
      if (!r) return e;
      let o = n.replace(r, ''),
        i = Qy.has(t) ? 1 : 0;
      return r !== n && (i *= 100), t + '(' + i + o + ')';
    }
    function Uc(e, t) {
      let n = fi(e);
      return (
        n !== ko && (n = Et),
        n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
      );
    }
    function tv(e) {
      if (typeof e == 'number') return e === 0;
      if (e !== null) return e === 'none' || e === '0' || Wc(e);
    }
    function nv(e, t, n, r) {
      let o = Io(t, n),
        i;
      Array.isArray(n) ? (i = [...n]) : (i = [null, n]);
      let a = r.from !== void 0 ? r.from : e.get(),
        s,
        c = [];
      for (let l = 0; l < i.length; l++)
        i[l] === null && (i[l] = l === 0 ? a : i[l - 1]),
          tv(i[l]) && c.push(l),
          typeof i[l] == 'string' &&
            i[l] !== 'none' &&
            i[l] !== '0' &&
            (s = i[l]);
      if (o && c.length && s)
        for (let l = 0; l < c.length; l++) {
          let u = c[l];
          i[u] = Uc(t, s);
        }
      return i;
    }
    function rv({
      when: e,
      delay: t,
      delayChildren: n,
      staggerChildren: r,
      staggerDirection: o,
      repeat: i,
      repeatType: a,
      repeatDelay: s,
      from: c,
      elapsed: l,
      ...u
    }) {
      return !!Object.keys(u).length;
    }
    function mi(e, t) {
      return e[t] || e.default || e;
    }
    function xr(e) {
      return !!(Ce(e) && e.add);
    }
    function yi(e, t) {
      e.indexOf(t) === -1 && e.push(t);
    }
    function vi(e, t) {
      let n = e.indexOf(t);
      n > -1 && e.splice(n, 1);
    }
    function xi(e, t, n) {
      e || Qa.has(t) || (console.warn(t), n && console.warn(n), Qa.add(t));
    }
    function Qt(e, t) {
      return new iv(e, t);
    }
    function cv(e, t, n) {
      e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Qt(n));
    }
    function uv(e, t) {
      let n = Lr(e, t),
        {
          transitionEnd: r = {},
          transition: o = {},
          ...i
        } = n ? e.makeTargetAnimatable(n, !1) : {};
      i = { ...i, ...r };
      for (let a in i) {
        let s = Og(i[a]);
        cv(e, a, s);
      }
    }
    function dv(e, t, n) {
      var r, o;
      let i = Object.keys(t).filter((s) => !e.hasValue(s)),
        a = i.length;
      if (a)
        for (let s = 0; s < a; s++) {
          let c = i[s],
            l = t[c],
            u = null;
          Array.isArray(l) && (u = l[0]),
            u === null &&
              (u =
                (o =
                  (r = n[c]) !== null && r !== void 0 ? r : e.readValue(c)) !==
                  null && o !== void 0
                  ? o
                  : t[c]),
            u != null &&
              (typeof u == 'string' && (Hc(u) || Wc(u))
                ? (u = parseFloat(u))
                : !lv(u) && Et.test(l) && (u = Uc(c, l)),
              e.addValue(c, Qt(u, { owner: e })),
              n[c] === void 0 && (n[c] = u),
              u !== null && e.setBaseTarget(c, u));
        }
    }
    function pv(e, t) {
      return t ? (t[e] || t.default || t).from : void 0;
    }
    function hv(e, t, n) {
      let r = {};
      for (let o in e) {
        let i = pv(o, t);
        if (i !== void 0) r[o] = i;
        else {
          let a = n.getValue(o);
          a && (r[o] = a.get());
        }
      }
      return r;
    }
    function fv({ protectedKeys: e, needsAnimating: t }, n) {
      let r = e.hasOwnProperty(n) && t[n] !== !0;
      return (t[n] = !1), r;
    }
    function mv(e, t) {
      let n = e.get();
      if (Array.isArray(t)) {
        for (let r = 0; r < t.length; r++) if (t[r] !== n) return !0;
      } else return n !== t;
    }
    function qc(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
      let {
          transition: i = e.getDefaultTransition(),
          transitionEnd: a,
          ...s
        } = e.makeTargetAnimatable(t),
        c = e.getValue('willChange');
      r && (i = r);
      let l = [],
        u = o && e.animationState && e.animationState.getState()[o];
      for (let d in s) {
        let p = e.getValue(d),
          h = s[d];
        if (!p || h === void 0 || (u && fv(u, d))) continue;
        let f = { delay: n, elapsed: 0, ...mi(i || {}, d) };
        if (window.HandoffAppearAnimations) {
          let v = e.getProps()[Zl];
          if (v) {
            let b = window.HandoffAppearAnimations(v, d, p, ie);
            b !== null && ((f.elapsed = b), (f.isHandoff = !0));
          }
        }
        let m = !f.isHandoff && !mv(p, h);
        if (
          (f.type === 'spring' && (p.getVelocity() || f.velocity) && (m = !1),
          p.animation && (m = !1),
          m)
        )
          continue;
        p.start(
          gi(d, p, h, e.shouldReduceMotion && Nt.has(d) ? { type: !1 } : f)
        );
        let x = p.animation;
        xr(c) && (c.add(d), x.then(() => c.remove(d))), l.push(x);
      }
      return (
        a &&
          Promise.all(l).then(() => {
            a && uv(e, a);
          }),
        l
      );
    }
    function Mo(e, t, n = {}) {
      let r = Lr(e, t, n.custom),
        { transition: o = e.getDefaultTransition() || {} } = r || {};
      n.transitionOverride && (o = n.transitionOverride);
      let i = r ? () => Promise.all(qc(e, r, n)) : () => Promise.resolve(),
        a =
          e.variantChildren && e.variantChildren.size
            ? (c = 0) => {
                let {
                  delayChildren: l = 0,
                  staggerChildren: u,
                  staggerDirection: d,
                } = o;
                return gv(e, t, l + c, u, d, n);
              }
            : () => Promise.resolve(),
        { when: s } = o;
      if (s) {
        let [c, l] = s === 'beforeChildren' ? [i, a] : [a, i];
        return c().then(() => l());
      } else return Promise.all([i(), a(n.delay)]);
    }
    function gv(e, t, n = 0, r = 0, o = 1, i) {
      let a = [],
        s = (e.variantChildren.size - 1) * r,
        c = o === 1 ? (l = 0) => l * r : (l = 0) => s - l * r;
      return (
        Array.from(e.variantChildren)
          .sort(yv)
          .forEach((l, u) => {
            l.notify('AnimationStart', t),
              a.push(
                Mo(l, t, { ...i, delay: n + c(u) }).then(() =>
                  l.notify('AnimationComplete', t)
                )
              );
          }),
        Promise.all(a)
      );
    }
    function yv(e, t) {
      return e.sortNodePosition(t);
    }
    function vv(e, t, n = {}) {
      e.notify('AnimationStart', t);
      let r;
      if (Array.isArray(t)) {
        let o = t.map((i) => Mo(e, i, n));
        r = Promise.all(o);
      } else if (typeof t == 'string') r = Mo(e, t, n);
      else {
        let o = typeof t == 'function' ? Lr(e, t, n.custom) : t;
        r = Promise.all(qc(e, o, n));
      }
      return r.then(() => e.notify('AnimationComplete', t));
    }
    function wv(e) {
      return (t) =>
        Promise.all(t.map(({ animation: n, options: r }) => vv(e, n, r)));
    }
    function Ev(e) {
      let t = wv(e),
        n = Sv(),
        r = !0,
        o = (c, l) => {
          let u = Lr(e, l);
          if (u) {
            let { transition: d, transitionEnd: p, ...h } = u;
            c = { ...c, ...h, ...p };
          }
          return c;
        };
      function i(c) {
        t = c(e);
      }
      function a(c, l) {
        let u = e.getProps(),
          d = e.getVariantContext(!0) || {},
          p = [],
          h = new Set(),
          f = {},
          m = 1 / 0;
        for (let v = 0; v < xv; v++) {
          let b = bv[v],
            y = n[b],
            w = u[b] !== void 0 ? u[b] : d[b],
            E = Tn(w),
            j = b === l ? y.isActive : null;
          j === !1 && (m = v);
          let D = w === d[b] && w !== u[b] && E;
          if (
            (D && r && e.manuallyAnimateOnMount && (D = !1),
            (y.protectedKeys = { ...f }),
            (!y.isActive && j === null) ||
              (!w && !y.prevProp) ||
              kr(w) ||
              typeof w == 'boolean')
          )
            continue;
          let P =
              Tv(y.prevProp, w) ||
              (b === l && y.isActive && !D && E) ||
              (v > m && E),
            N = !1,
            te = Array.isArray(w) ? w : [w],
            le = te.reduce(o, {});
          j === !1 && (le = {});
          let { prevResolvedValues: Me = {} } = y,
            Re = { ...Me, ...le },
            fe = (ae) => {
              (P = !0),
                h.has(ae) && ((N = !0), h.delete(ae)),
                (y.needsAnimating[ae] = !0);
            };
          for (let ae in Re) {
            let Te = le[ae],
              He = Me[ae];
            if (f.hasOwnProperty(ae)) continue;
            let be = !1;
            gr(Te) && gr(He) ? (be = !wc(Te, He)) : (be = Te !== He),
              be
                ? Te !== void 0
                  ? fe(ae)
                  : h.add(ae)
                : Te !== void 0 && h.has(ae)
                ? fe(ae)
                : (y.protectedKeys[ae] = !0);
          }
          (y.prevProp = w),
            (y.prevResolvedValues = le),
            y.isActive && (f = { ...f, ...le }),
            r && e.blockInitialAnimation && (P = !1),
            P &&
              (!D || N) &&
              p.push(
                ...te.map((ae) => ({
                  animation: ae,
                  options: { type: b, ...c },
                }))
              );
        }
        if (h.size) {
          let v = {};
          h.forEach((b) => {
            let y = e.getBaseTarget(b);
            y !== void 0 && (v[b] = y);
          }),
            p.push({ animation: v });
        }
        let x = !!p.length;
        return (
          r &&
            (u.initial === !1 || u.initial === u.animate) &&
            !e.manuallyAnimateOnMount &&
            (x = !1),
          (r = !1),
          x ? t(p) : Promise.resolve()
        );
      }
      function s(c, l, u) {
        var d;
        if (n[c].isActive === l) return Promise.resolve();
        (d = e.variantChildren) === null ||
          d === void 0 ||
          d.forEach((h) => {
            var f;
            return (f = h.animationState) === null || f === void 0
              ? void 0
              : f.setActive(c, l);
          }),
          (n[c].isActive = l);
        let p = a(u, c);
        for (let h in n) n[h].protectedKeys = {};
        return p;
      }
      return {
        animateChanges: a,
        setActive: s,
        setAnimateFunction: i,
        getState: () => n,
      };
    }
    function Tv(e, t) {
      return typeof t == 'string' ? t !== e : Array.isArray(t) ? !wc(t, e) : !1;
    }
    function Pt(e = !1) {
      return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {},
      };
    }
    function Sv() {
      return {
        animate: Pt(!0),
        whileInView: Pt(),
        whileHover: Pt(),
        whileTap: Pt(),
        whileDrag: Pt(),
        whileFocus: Pt(),
        exit: Pt(),
      };
    }
    function Rv(e, t) {
      let n = Ja(e.x, t.x),
        r = Ja(e.y, t.y);
      return Math.sqrt(n ** 2 + r ** 2);
    }
    function lo(e, t) {
      return t ? { point: t(e.point) } : e;
    }
    function es(e, t) {
      return { x: e.x - t.x, y: e.y - t.y };
    }
    function co({ point: e }, t) {
      return {
        point: e,
        delta: es(e, Kc(t)),
        offset: es(e, Iv(t)),
        velocity: kv(t, 0.1),
      };
    }
    function Iv(e) {
      return e[0];
    }
    function Kc(e) {
      return e[e.length - 1];
    }
    function kv(e, t) {
      if (e.length < 2) return { x: 0, y: 0 };
      let n = e.length - 1,
        r = null,
        o = Kc(e);
      for (; n >= 0 && ((r = e[n]), !(o.timestamp - r.timestamp > vt(t))); )
        n--;
      if (!r) return { x: 0, y: 0 };
      let i = st(o.timestamp - r.timestamp);
      if (i === 0) return { x: 0, y: 0 };
      let a = { x: (o.x - r.x) / i, y: (o.y - r.y) / i };
      return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
    }
    function ke(e) {
      return e.max - e.min;
    }
    function Do(e, t = 0, n = 0.01) {
      return Math.abs(e - t) <= n;
    }
    function ts(e, t, n, r = 0.5) {
      (e.origin = r),
        (e.originPoint = oe(t.min, t.max, e.origin)),
        (e.scale = ke(n) / ke(t)),
        (Do(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
        (e.translate = oe(n.min, n.max, e.origin) - e.originPoint),
        (Do(e.translate) || isNaN(e.translate)) && (e.translate = 0);
    }
    function xn(e, t, n, r) {
      ts(e.x, t.x, n.x, r ? r.originX : void 0),
        ts(e.y, t.y, n.y, r ? r.originY : void 0);
    }
    function ns(e, t, n) {
      (e.min = n.min + t.min), (e.max = e.min + ke(t));
    }
    function Mv(e, t, n) {
      ns(e.x, t.x, n.x), ns(e.y, t.y, n.y);
    }
    function rs(e, t, n) {
      (e.min = t.min - n.min), (e.max = e.min + ke(t));
    }
    function wn(e, t, n) {
      rs(e.x, t.x, n.x), rs(e.y, t.y, n.y);
    }
    function Dv(e, { min: t, max: n }, r) {
      return (
        t !== void 0 && e < t
          ? (e = r ? oe(t, e, r.min) : Math.max(e, t))
          : n !== void 0 && e > n && (e = r ? oe(n, e, r.max) : Math.min(e, n)),
        e
      );
    }
    function os(e, t, n) {
      return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
      };
    }
    function Lv(e, { top: t, left: n, bottom: r, right: o }) {
      return { x: os(e.x, n, o), y: os(e.y, t, r) };
    }
    function is(e, t) {
      let n = t.min - e.min,
        r = t.max - e.max;
      return (
        t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r }
      );
    }
    function Nv(e, t) {
      return { x: is(e.x, t.x), y: is(e.y, t.y) };
    }
    function Fv(e, t) {
      let n = 0.5,
        r = ke(e),
        o = ke(t);
      return (
        o > r
          ? (n = Pn(t.min, t.max - r, e.min))
          : r > o && (n = Pn(e.min, e.max - o, t.min)),
        wt(0, 1, n)
      );
    }
    function jv(e, t) {
      let n = {};
      return (
        t.min !== void 0 && (n.min = t.min - e.min),
        t.max !== void 0 && (n.max = t.max - e.min),
        n
      );
    }
    function Vv(e = Lo) {
      return (
        e === !1 ? (e = 0) : e === !0 && (e = Lo),
        { x: as(e, 'left', 'right'), y: as(e, 'top', 'bottom') }
      );
    }
    function as(e, t, n) {
      return { min: ss(e, t), max: ss(e, n) };
    }
    function ss(e, t) {
      return typeof e == 'number' ? e : e[t] || 0;
    }
    function Ne(e) {
      return [e('x'), e('y')];
    }
    function Xc({ top: e, left: t, right: n, bottom: r }) {
      return { x: { min: t, max: n }, y: { min: e, max: r } };
    }
    function Bv({ x: e, y: t }) {
      return { top: t.min, right: e.max, bottom: t.max, left: e.min };
    }
    function _v(e, t) {
      if (!t) return e;
      let n = t({ x: e.left, y: e.top }),
        r = t({ x: e.right, y: e.bottom });
      return { top: n.y, left: n.x, bottom: r.y, right: r.x };
    }
    function uo(e) {
      return e === void 0 || e === 1;
    }
    function No({ scale: e, scaleX: t, scaleY: n }) {
      return !uo(e) || !uo(t) || !uo(n);
    }
    function Ot(e) {
      return No(e) || Qc(e) || e.z || e.rotate || e.rotateX || e.rotateY;
    }
    function Qc(e) {
      return us(e.x) || us(e.y);
    }
    function us(e) {
      return e && e !== '0%';
    }
    function wr(e, t, n) {
      let r = e - n,
        o = t * r;
      return n + o;
    }
    function ds(e, t, n, r, o) {
      return o !== void 0 && (e = wr(e, o, r)), wr(e, n, r) + t;
    }
    function Fo(e, t = 0, n = 1, r, o) {
      (e.min = ds(e.min, t, n, r, o)), (e.max = ds(e.max, t, n, r, o));
    }
    function Zc(e, { x: t, y: n }) {
      Fo(e.x, t.translate, t.scale, t.originPoint),
        Fo(e.y, n.translate, n.scale, n.originPoint);
    }
    function zv(e, t, n, r = !1) {
      let o = n.length;
      if (!o) return;
      t.x = t.y = 1;
      let i, a;
      for (let s = 0; s < o; s++) {
        (i = n[s]), (a = i.projectionDelta);
        let c = i.instance;
        (c && c.style && c.style.display === 'contents') ||
          (r &&
            i.options.layoutScroll &&
            i.scroll &&
            i !== i.root &&
            Gt(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
          a && ((t.x *= a.x.scale), (t.y *= a.y.scale), Zc(e, a)),
          r && Ot(i.latestValues) && Gt(e, i.latestValues));
      }
      (t.x = ps(t.x)), (t.y = ps(t.y));
    }
    function ps(e) {
      return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
        ? e
        : 1;
    }
    function ft(e, t) {
      (e.min = e.min + t), (e.max = e.max + t);
    }
    function hs(e, t, [n, r, o]) {
      let i = t[o] !== void 0 ? t[o] : 0.5,
        a = oe(e.min, e.max, i);
      Fo(e, t[n], t[r], a, t.scale);
    }
    function Gt(e, t) {
      hs(e.x, t, Uv), hs(e.y, t, Wv);
    }
    function Jc(e, t) {
      return Xc(_v(e.getBoundingClientRect(), t));
    }
    function Hv(e, t, n) {
      let r = Jc(e, n),
        { scroll: o } = t;
      return o && (ft(r.x, o.offset.x), ft(r.y, o.offset.y)), r;
    }
    function er(e, t, n) {
      return (t === !0 || t === e) && (n === null || n === e);
    }
    function qv(e, t = 10) {
      let n = null;
      return Math.abs(e.y) > t ? (n = 'y') : Math.abs(e.x) > t && (n = 'x'), n;
    }
    function Xv() {
      let e = me(Qo);
      if (e === null) return [!0, null];
      let { isPresent: t, onExitComplete: n, register: r } = e,
        o = zn();
      return U(() => r(o), []), !t && n ? [!1, () => n && n(o)] : [!0];
    }
    function ms(e, t) {
      return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
    }
    function tu(e) {
      let [t, n] = Xv(),
        r = me(nc);
      return g.createElement(Zv, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: me(rc),
        isPresent: t,
        safeToRemove: n,
      });
    }
    function t0(e, t, n, r, o, i) {
      o
        ? ((e.opacity = oe(0, n.opacity !== void 0 ? n.opacity : 1, n0(r))),
          (e.opacityExit = oe(t.opacity !== void 0 ? t.opacity : 1, 0, r0(r))))
        : i &&
          (e.opacity = oe(
            t.opacity !== void 0 ? t.opacity : 1,
            n.opacity !== void 0 ? n.opacity : 1,
            r
          ));
      for (let a = 0; a < e0; a++) {
        let s = `border${nu[a]}Radius`,
          c = vs(t, s),
          l = vs(n, s);
        (c === void 0 && l === void 0) ||
          (c || (c = 0),
          l || (l = 0),
          c === 0 || l === 0 || ys(c) === ys(l)
            ? ((e[s] = Math.max(oe(gs(c), gs(l), r), 0)),
              (Xe.test(l) || Xe.test(c)) && (e[s] += '%'))
            : (e[s] = l));
      }
      (t.rotate || n.rotate) &&
        (e.rotate = oe(t.rotate || 0, n.rotate || 0, r));
    }
    function vs(e, t) {
      return e[t] !== void 0 ? e[t] : e.borderRadius;
    }
    function ru(e, t, n) {
      return (r) => (r < e ? 0 : r > t ? 1 : n(Pn(e, t, r)));
    }
    function bs(e, t) {
      (e.min = t.min), (e.max = t.max);
    }
    function De(e, t) {
      bs(e.x, t.x), bs(e.y, t.y);
    }
    function xs(e, t, n, r, o) {
      return (
        (e -= t),
        (e = wr(e, 1 / n, r)),
        o !== void 0 && (e = wr(e, 1 / o, r)),
        e
      );
    }
    function o0(e, t = 0, n = 1, r = 0.5, o, i = e, a = e) {
      if (
        (Xe.test(t) &&
          ((t = parseFloat(t)), (t = oe(a.min, a.max, t / 100) - a.min)),
        typeof t != 'number')
      )
        return;
      let s = oe(i.min, i.max, r);
      e === i && (s -= t),
        (e.min = xs(e.min, t, n, s, o)),
        (e.max = xs(e.max, t, n, s, o));
    }
    function ws(e, t, [n, r, o], i, a) {
      o0(e, t[n], t[r], t[o], t.scale, i, a);
    }
    function Es(e, t, n, r) {
      ws(e.x, t, i0, n ? n.x : void 0, r ? r.x : void 0),
        ws(e.y, t, a0, n ? n.y : void 0, r ? r.y : void 0);
    }
    function Ts(e) {
      return e.translate === 0 && e.scale === 1;
    }
    function ou(e) {
      return Ts(e.x) && Ts(e.y);
    }
    function s0(e, t) {
      return (
        e.x.min === t.x.min &&
        e.x.max === t.x.max &&
        e.y.min === t.y.min &&
        e.y.max === t.y.max
      );
    }
    function iu(e, t) {
      return (
        Math.round(e.x.min) === Math.round(t.x.min) &&
        Math.round(e.x.max) === Math.round(t.x.max) &&
        Math.round(e.y.min) === Math.round(t.y.min) &&
        Math.round(e.y.max) === Math.round(t.y.max)
      );
    }
    function Ss(e) {
      return ke(e.x) / ke(e.y);
    }
    function Ps(e, t, n) {
      let r = '',
        o = e.x.translate / t.x,
        i = e.y.translate / t.y;
      if (
        ((o || i) && (r = `translate3d(${o}px, ${i}px, 0) `),
        (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
        n)
      ) {
        let { rotate: c, rotateX: l, rotateY: u } = n;
        c && (r += `rotate(${c}deg) `),
          l && (r += `rotateX(${l}deg) `),
          u && (r += `rotateY(${u}deg) `);
      }
      let a = e.x.scale * t.x,
        s = e.y.scale * t.y;
      return (a !== 1 || s !== 1) && (r += `scale(${a}, ${s})`), r || 'none';
    }
    function d0(e, t) {
      let n = kt.now(),
        r = ({ timestamp: o }) => {
          let i = o - n;
          i >= t && (lt(r), e(i - t));
        };
      return ie.read(r, !0), () => lt(r);
    }
    function p0(e) {
      window.MotionDebug && window.MotionDebug.record(e);
    }
    function h0(e) {
      return e instanceof SVGElement && e.tagName !== 'svg';
    }
    function f0(e, t, n) {
      let r = Ce(e) ? e : Qt(e);
      return r.start(gi('', r, t, n)), r.animation;
    }
    function au({
      attachResizeListener: e,
      defaultParent: t,
      measureScroll: n,
      checkIsScrollRoot: r,
      resetTransform: o,
    }) {
      return class {
        constructor(i = {}, a = t?.()) {
          (this.id = g0++),
            (this.animationId = 0),
            (this.children = new Set()),
            (this.options = {}),
            (this.isTreeAnimating = !1),
            (this.isAnimationBlocked = !1),
            (this.isLayoutDirty = !1),
            (this.isProjectionDirty = !1),
            (this.isSharedProjectionDirty = !1),
            (this.isTransformDirty = !1),
            (this.updateManuallyBlocked = !1),
            (this.updateBlockedByResize = !1),
            (this.isUpdating = !1),
            (this.isSVG = !1),
            (this.needsReset = !1),
            (this.shouldResetTransform = !1),
            (this.treeScale = { x: 1, y: 1 }),
            (this.eventHandlers = new Map()),
            (this.hasTreeAnimated = !1),
            (this.updateScheduled = !1),
            (this.projectionUpdateScheduled = !1),
            (this.checkUpdateFailed = () => {
              this.isUpdating &&
                ((this.isUpdating = !1), this.clearAllSnapshots());
            }),
            (this.updateProjection = () => {
              (this.projectionUpdateScheduled = !1),
                (Ct.totalNodes =
                  Ct.resolvedTargetDeltas =
                  Ct.recalculatedProjection =
                    0),
                this.nodes.forEach(b0),
                this.nodes.forEach(S0),
                this.nodes.forEach(P0),
                this.nodes.forEach(x0),
                p0(Ct);
            }),
            (this.hasProjected = !1),
            (this.isVisible = !0),
            (this.animationProgress = 0),
            (this.sharedNodes = new Map()),
            (this.latestValues = i),
            (this.root = a ? a.root || a : this),
            (this.path = a ? [...a.path, a] : []),
            (this.parent = a),
            (this.depth = a ? a.depth + 1 : 0);
          for (let s = 0; s < this.path.length; s++)
            this.path[s].shouldResetTransform = !0;
          this.root === this && (this.nodes = new u0());
        }
        addEventListener(i, a) {
          return (
            this.eventHandlers.has(i) || this.eventHandlers.set(i, new bi()),
            this.eventHandlers.get(i).add(a)
          );
        }
        notifyListeners(i, ...a) {
          let s = this.eventHandlers.get(i);
          s && s.notify(...a);
        }
        hasListeners(i) {
          return this.eventHandlers.has(i);
        }
        mount(i, a = this.root.hasTreeAnimated) {
          if (this.instance) return;
          (this.isSVG = h0(i)), (this.instance = i);
          let { layoutId: s, layout: c, visualElement: l } = this.options;
          if (
            (l && !l.current && l.mount(i),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            a && (c || s) && (this.isLayoutDirty = !0),
            e)
          ) {
            let u,
              d = () => (this.root.updateBlockedByResize = !1);
            e(i, () => {
              (this.root.updateBlockedByResize = !0),
                u && u(),
                (u = d0(d, 250)),
                sr.hasAnimatedSinceResize &&
                  ((sr.hasAnimatedSinceResize = !1), this.nodes.forEach(Rs));
            });
          }
          s && this.root.registerSharedNode(s, this),
            this.options.animate !== !1 &&
              l &&
              (s || c) &&
              this.addEventListener(
                'didUpdate',
                ({
                  delta: u,
                  hasLayoutChanged: d,
                  hasRelativeTargetChanged: p,
                  layout: h,
                }) => {
                  if (this.isTreeAnimationBlocked()) {
                    (this.target = void 0), (this.relativeTarget = void 0);
                    return;
                  }
                  let f =
                      this.options.transition || l.getDefaultTransition() || I0,
                    {
                      onLayoutAnimationStart: m,
                      onLayoutAnimationComplete: x,
                    } = l.getProps(),
                    v = !this.targetLayout || !iu(this.targetLayout, h) || p,
                    b = !d && p;
                  if (
                    this.options.layoutRoot ||
                    (this.resumeFrom && this.resumeFrom.instance) ||
                    b ||
                    (d && (v || !this.currentAnimation))
                  ) {
                    this.resumeFrom &&
                      ((this.resumingFrom = this.resumeFrom),
                      (this.resumingFrom.resumingFrom = void 0)),
                      this.setAnimationOrigin(u, b);
                    let y = { ...mi(f, 'layout'), onPlay: m, onComplete: x };
                    (l.shouldReduceMotion || this.options.layoutRoot) &&
                      ((y.delay = 0), (y.type = !1)),
                      this.startAnimation(y);
                  } else
                    d || Rs(this),
                      this.isLead() &&
                        this.options.onExitComplete &&
                        this.options.onExitComplete();
                  this.targetLayout = h;
                }
              );
        }
        unmount() {
          this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
          let i = this.getStack();
          i && i.remove(this),
            this.parent && this.parent.children.delete(this),
            (this.instance = void 0),
            lt(this.updateProjection);
        }
        blockUpdate() {
          this.updateManuallyBlocked = !0;
        }
        unblockUpdate() {
          this.updateManuallyBlocked = !1;
        }
        isUpdateBlocked() {
          return this.updateManuallyBlocked || this.updateBlockedByResize;
        }
        isTreeAnimationBlocked() {
          return (
            this.isAnimationBlocked ||
            (this.parent && this.parent.isTreeAnimationBlocked()) ||
            !1
          );
        }
        startUpdate() {
          this.isUpdateBlocked() ||
            ((this.isUpdating = !0),
            this.nodes && this.nodes.forEach(O0),
            this.animationId++);
        }
        getTransformTemplate() {
          let { visualElement: i } = this.options;
          return i && i.getProps().transformTemplate;
        }
        willUpdate(i = !0) {
          if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
            this.options.onExitComplete && this.options.onExitComplete();
            return;
          }
          if (
            (!this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
          )
            return;
          this.isLayoutDirty = !0;
          for (let l = 0; l < this.path.length; l++) {
            let u = this.path[l];
            (u.shouldResetTransform = !0),
              u.updateScroll('snapshot'),
              u.options.layoutRoot && u.willUpdate(!1);
          }
          let { layoutId: a, layout: s } = this.options;
          if (a === void 0 && !s) return;
          let c = this.getTransformTemplate();
          (this.prevTransformTemplateValue = c
            ? c(this.latestValues, '')
            : void 0),
            this.updateSnapshot(),
            i && this.notifyListeners('willUpdate');
        }
        update() {
          if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
            this.unblockUpdate(),
              this.clearAllSnapshots(),
              this.nodes.forEach(As);
            return;
          }
          this.isUpdating || this.nodes.forEach(E0),
            (this.isUpdating = !1),
            this.nodes.forEach(T0),
            this.nodes.forEach(y0),
            this.nodes.forEach(v0),
            this.clearAllSnapshots();
          let i = kt.now();
          (ve.delta = wt(0, 1e3 / 60, i - ve.timestamp)),
            (ve.timestamp = i),
            (ve.isProcessing = !0),
            to.update.process(ve),
            to.preRender.process(ve),
            to.render.process(ve),
            (ve.isProcessing = !1);
        }
        didUpdate() {
          this.updateScheduled ||
            ((this.updateScheduled = !0), Jo.read(() => this.update()));
        }
        clearAllSnapshots() {
          this.nodes.forEach(w0), this.sharedNodes.forEach(C0);
        }
        scheduleUpdateProjection() {
          this.projectionUpdateScheduled ||
            ((this.projectionUpdateScheduled = !0),
            ie.preRender(this.updateProjection, !1, !0));
        }
        scheduleCheckAfterUnmount() {
          ie.postRender(() => {
            this.isLayoutDirty
              ? this.root.didUpdate()
              : this.root.checkUpdateFailed();
          });
        }
        updateSnapshot() {
          this.snapshot || !this.instance || (this.snapshot = this.measure());
        }
        updateLayout() {
          if (
            !this.instance ||
            (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) &&
              !this.isLayoutDirty)
          )
            return;
          if (this.resumeFrom && !this.resumeFrom.instance)
            for (let s = 0; s < this.path.length; s++)
              this.path[s].updateScroll();
          let i = this.layout;
          (this.layout = this.measure(!1)),
            (this.layoutCorrected = pe()),
            (this.isLayoutDirty = !1),
            (this.projectionDelta = void 0),
            this.notifyListeners('measure', this.layout.layoutBox);
          let { visualElement: a } = this.options;
          a &&
            a.notify(
              'LayoutMeasure',
              this.layout.layoutBox,
              i ? i.layoutBox : void 0
            );
        }
        updateScroll(i = 'measure') {
          let a = !!(this.options.layoutScroll && this.instance);
          this.scroll &&
            this.scroll.animationId === this.root.animationId &&
            this.scroll.phase === i &&
            (a = !1),
            a &&
              (this.scroll = {
                animationId: this.root.animationId,
                phase: i,
                isRoot: r(this.instance),
                offset: n(this.instance),
              });
        }
        resetTransform() {
          if (!o) return;
          let i = this.isLayoutDirty || this.shouldResetTransform,
            a = this.projectionDelta && !ou(this.projectionDelta),
            s = this.getTransformTemplate(),
            c = s ? s(this.latestValues, '') : void 0,
            l = c !== this.prevTransformTemplateValue;
          i &&
            (a || Ot(this.latestValues) || l) &&
            (o(this.instance, c),
            (this.shouldResetTransform = !1),
            this.scheduleRender());
        }
        measure(i = !0) {
          let a = this.measurePageBox(),
            s = this.removeElementScroll(a);
          return (
            i && (s = this.removeTransform(s)),
            k0(s),
            {
              animationId: this.root.animationId,
              measuredBox: a,
              layoutBox: s,
              latestValues: {},
              source: this.id,
            }
          );
        }
        measurePageBox() {
          let { visualElement: i } = this.options;
          if (!i) return pe();
          let a = i.measureViewportBox(),
            { scroll: s } = this.root;
          return s && (ft(a.x, s.offset.x), ft(a.y, s.offset.y)), a;
        }
        removeElementScroll(i) {
          let a = pe();
          De(a, i);
          for (let s = 0; s < this.path.length; s++) {
            let c = this.path[s],
              { scroll: l, options: u } = c;
            if (c !== this.root && l && u.layoutScroll) {
              if (l.isRoot) {
                De(a, i);
                let { scroll: d } = this.root;
                d && (ft(a.x, -d.offset.x), ft(a.y, -d.offset.y));
              }
              ft(a.x, l.offset.x), ft(a.y, l.offset.y);
            }
          }
          return a;
        }
        applyTransform(i, a = !1) {
          let s = pe();
          De(s, i);
          for (let c = 0; c < this.path.length; c++) {
            let l = this.path[c];
            !a &&
              l.options.layoutScroll &&
              l.scroll &&
              l !== l.root &&
              Gt(s, { x: -l.scroll.offset.x, y: -l.scroll.offset.y }),
              Ot(l.latestValues) && Gt(s, l.latestValues);
          }
          return Ot(this.latestValues) && Gt(s, this.latestValues), s;
        }
        removeTransform(i) {
          let a = pe();
          De(a, i);
          for (let s = 0; s < this.path.length; s++) {
            let c = this.path[s];
            if (!c.instance || !Ot(c.latestValues)) continue;
            No(c.latestValues) && c.updateSnapshot();
            let l = pe(),
              u = c.measurePageBox();
            De(l, u),
              Es(
                a,
                c.latestValues,
                c.snapshot ? c.snapshot.layoutBox : void 0,
                l
              );
          }
          return Ot(this.latestValues) && Es(a, this.latestValues), a;
        }
        setTargetDelta(i) {
          (this.targetDelta = i),
            this.root.scheduleUpdateProjection(),
            (this.isProjectionDirty = !0);
        }
        setOptions(i) {
          this.options = {
            ...this.options,
            ...i,
            crossfade: i.crossfade !== void 0 ? i.crossfade : !0,
          };
        }
        clearMeasurements() {
          (this.scroll = void 0),
            (this.layout = void 0),
            (this.snapshot = void 0),
            (this.prevTransformTemplateValue = void 0),
            (this.targetDelta = void 0),
            (this.target = void 0),
            (this.isLayoutDirty = !1);
        }
        forceRelativeParentToResolveTarget() {
          this.relativeParent &&
            this.relativeParent.resolvedRelativeTargetAt !== ve.timestamp &&
            this.relativeParent.resolveTargetDelta(!0);
        }
        resolveTargetDelta(i = !1) {
          var a;
          let s = this.getLead();
          this.isProjectionDirty ||
            (this.isProjectionDirty = s.isProjectionDirty),
            this.isTransformDirty ||
              (this.isTransformDirty = s.isTransformDirty),
            this.isSharedProjectionDirty ||
              (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
          let c = !!this.resumingFrom || this !== s;
          if (
            !(
              i ||
              (c && this.isSharedProjectionDirty) ||
              this.isProjectionDirty ||
              (!((a = this.parent) === null || a === void 0) &&
                a.isProjectionDirty) ||
              this.attemptToResolveRelativeTarget
            )
          )
            return;
          let { layout: l, layoutId: u } = this.options;
          if (!(!this.layout || !(l || u))) {
            if (
              ((this.resolvedRelativeTargetAt = ve.timestamp),
              !this.targetDelta && !this.relativeTarget)
            ) {
              let d = this.getClosestProjectingParent();
              d && d.layout && this.animationProgress !== 1
                ? ((this.relativeParent = d),
                  this.forceRelativeParentToResolveTarget(),
                  (this.relativeTarget = pe()),
                  (this.relativeTargetOrigin = pe()),
                  wn(
                    this.relativeTargetOrigin,
                    this.layout.layoutBox,
                    d.layout.layoutBox
                  ),
                  De(this.relativeTarget, this.relativeTargetOrigin))
                : (this.relativeParent = this.relativeTarget = void 0);
            }
            if (!(!this.relativeTarget && !this.targetDelta)) {
              if (
                (this.target ||
                  ((this.target = pe()), (this.targetWithTransforms = pe())),
                this.relativeTarget &&
                this.relativeTargetOrigin &&
                this.relativeParent &&
                this.relativeParent.target
                  ? (this.forceRelativeParentToResolveTarget(),
                    Mv(
                      this.target,
                      this.relativeTarget,
                      this.relativeParent.target
                    ))
                  : this.targetDelta
                  ? (this.resumingFrom
                      ? (this.target = this.applyTransform(
                          this.layout.layoutBox
                        ))
                      : De(this.target, this.layout.layoutBox),
                    Zc(this.target, this.targetDelta))
                  : De(this.target, this.layout.layoutBox),
                this.attemptToResolveRelativeTarget)
              ) {
                this.attemptToResolveRelativeTarget = !1;
                let d = this.getClosestProjectingParent();
                d &&
                !!d.resumingFrom == !!this.resumingFrom &&
                !d.options.layoutScroll &&
                d.target &&
                this.animationProgress !== 1
                  ? ((this.relativeParent = d),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = pe()),
                    (this.relativeTargetOrigin = pe()),
                    wn(this.relativeTargetOrigin, this.target, d.target),
                    De(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              Ct.resolvedTargetDeltas++;
            }
          }
        }
        getClosestProjectingParent() {
          if (
            !(
              !this.parent ||
              No(this.parent.latestValues) ||
              Qc(this.parent.latestValues)
            )
          )
            return this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
        }
        isProjecting() {
          return !!(
            (this.relativeTarget ||
              this.targetDelta ||
              this.options.layoutRoot) &&
            this.layout
          );
        }
        calcProjection() {
          var i;
          let a = this.getLead(),
            s = !!this.resumingFrom || this !== a,
            c = !0;
          if (
            ((this.isProjectionDirty ||
              (!((i = this.parent) === null || i === void 0) &&
                i.isProjectionDirty)) &&
              (c = !1),
            s &&
              (this.isSharedProjectionDirty || this.isTransformDirty) &&
              (c = !1),
            this.resolvedRelativeTargetAt === ve.timestamp && (c = !1),
            c)
          )
            return;
          let { layout: l, layoutId: u } = this.options;
          if (
            ((this.isTreeAnimating = !!(
              (this.parent && this.parent.isTreeAnimating) ||
              this.currentAnimation ||
              this.pendingAnimation
            )),
            this.isTreeAnimating ||
              (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(l || u))
          )
            return;
          De(this.layoutCorrected, this.layout.layoutBox);
          let d = this.treeScale.x,
            p = this.treeScale.y;
          zv(this.layoutCorrected, this.treeScale, this.path, s),
            a.layout &&
              !a.target &&
              (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
              ((a.target = a.layout.layoutBox),
              (a.targetWithTransforms = pe()));
          let { target: h } = a;
          if (!h) {
            this.projectionTransform &&
              ((this.projectionDelta = Yt()),
              (this.projectionTransform = 'none'),
              this.scheduleRender());
            return;
          }
          this.projectionDelta ||
            ((this.projectionDelta = Yt()),
            (this.projectionDeltaWithTransform = Yt()));
          let f = this.projectionTransform;
          xn(this.projectionDelta, this.layoutCorrected, h, this.latestValues),
            (this.projectionTransform = Ps(
              this.projectionDelta,
              this.treeScale
            )),
            (this.projectionTransform !== f ||
              this.treeScale.x !== d ||
              this.treeScale.y !== p) &&
              ((this.hasProjected = !0),
              this.scheduleRender(),
              this.notifyListeners('projectionUpdate', h)),
            Ct.recalculatedProjection++;
        }
        hide() {
          this.isVisible = !1;
        }
        show() {
          this.isVisible = !0;
        }
        scheduleRender(i = !0) {
          if (
            (this.options.scheduleRender && this.options.scheduleRender(), i)
          ) {
            let a = this.getStack();
            a && a.scheduleRender();
          }
          this.resumingFrom &&
            !this.resumingFrom.instance &&
            (this.resumingFrom = void 0);
        }
        setAnimationOrigin(i, a = !1) {
          let s = this.snapshot,
            c = s ? s.latestValues : {},
            l = { ...this.latestValues },
            u = Yt();
          (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
            (this.relativeTarget = this.relativeTargetOrigin = void 0),
            (this.attemptToResolveRelativeTarget = !a);
          let d = pe(),
            p = s ? s.source : void 0,
            h = this.layout ? this.layout.source : void 0,
            f = p !== h,
            m = this.getStack(),
            x = !m || m.members.length <= 1,
            v = !!(
              f &&
              !x &&
              this.options.crossfade === !0 &&
              !this.path.some(R0)
            );
          this.animationProgress = 0;
          let b;
          (this.mixTargetDelta = (y) => {
            let w = y / 1e3;
            Is(u.x, i.x, w),
              Is(u.y, i.y, w),
              this.setTargetDelta(u),
              this.relativeTarget &&
                this.relativeTargetOrigin &&
                this.layout &&
                this.relativeParent &&
                this.relativeParent.layout &&
                (wn(
                  d,
                  this.layout.layoutBox,
                  this.relativeParent.layout.layoutBox
                ),
                A0(this.relativeTarget, this.relativeTargetOrigin, d, w),
                b &&
                  s0(this.relativeTarget, b) &&
                  (this.isProjectionDirty = !1),
                b || (b = pe()),
                De(b, this.relativeTarget)),
              f &&
                ((this.animationValues = l),
                t0(l, c, this.latestValues, w, v, x)),
              this.root.scheduleUpdateProjection(),
              this.scheduleRender(),
              (this.animationProgress = w);
          }),
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
        }
        startAnimation(i) {
          this.notifyListeners('animationStart'),
            this.currentAnimation && this.currentAnimation.stop(),
            this.resumingFrom &&
              this.resumingFrom.currentAnimation &&
              this.resumingFrom.currentAnimation.stop(),
            this.pendingAnimation &&
              (lt(this.pendingAnimation), (this.pendingAnimation = void 0)),
            (this.pendingAnimation = ie.update(() => {
              (sr.hasAnimatedSinceResize = !0),
                (this.currentAnimation = f0(0, Cs, {
                  ...i,
                  onUpdate: (a) => {
                    this.mixTargetDelta(a), i.onUpdate && i.onUpdate(a);
                  },
                  onComplete: () => {
                    i.onComplete && i.onComplete(), this.completeAnimation();
                  },
                })),
                this.resumingFrom &&
                  (this.resumingFrom.currentAnimation = this.currentAnimation),
                (this.pendingAnimation = void 0);
            }));
        }
        completeAnimation() {
          this.resumingFrom &&
            ((this.resumingFrom.currentAnimation = void 0),
            (this.resumingFrom.preserveOpacity = void 0));
          let i = this.getStack();
          i && i.exitAnimationComplete(),
            (this.resumingFrom =
              this.currentAnimation =
              this.animationValues =
                void 0),
            this.notifyListeners('animationComplete');
        }
        finishAnimation() {
          this.currentAnimation &&
            (this.mixTargetDelta && this.mixTargetDelta(Cs),
            this.currentAnimation.stop()),
            this.completeAnimation();
        }
        applyTransformsToTarget() {
          let i = this.getLead(),
            {
              targetWithTransforms: a,
              target: s,
              layout: c,
              latestValues: l,
            } = i;
          if (!(!a || !s || !c)) {
            if (
              this !== i &&
              this.layout &&
              c &&
              su(this.options.animationType, this.layout.layoutBox, c.layoutBox)
            ) {
              s = this.target || pe();
              let u = ke(this.layout.layoutBox.x);
              (s.x.min = i.target.x.min), (s.x.max = s.x.min + u);
              let d = ke(this.layout.layoutBox.y);
              (s.y.min = i.target.y.min), (s.y.max = s.y.min + d);
            }
            De(a, s),
              Gt(a, l),
              xn(this.projectionDeltaWithTransform, this.layoutCorrected, a, l);
          }
        }
        registerSharedNode(i, a) {
          this.sharedNodes.has(i) || this.sharedNodes.set(i, new l0()),
            this.sharedNodes.get(i).add(a);
          let s = a.options.initialPromotionConfig;
          a.promote({
            transition: s ? s.transition : void 0,
            preserveFollowOpacity:
              s && s.shouldPreserveFollowOpacity
                ? s.shouldPreserveFollowOpacity(a)
                : void 0,
          });
        }
        isLead() {
          let i = this.getStack();
          return i ? i.lead === this : !0;
        }
        getLead() {
          var i;
          let { layoutId: a } = this.options;
          return a
            ? ((i = this.getStack()) === null || i === void 0
                ? void 0
                : i.lead) || this
            : this;
        }
        getPrevLead() {
          var i;
          let { layoutId: a } = this.options;
          return a
            ? (i = this.getStack()) === null || i === void 0
              ? void 0
              : i.prevLead
            : void 0;
        }
        getStack() {
          let { layoutId: i } = this.options;
          if (i) return this.root.sharedNodes.get(i);
        }
        promote({
          needsReset: i,
          transition: a,
          preserveFollowOpacity: s,
        } = {}) {
          let c = this.getStack();
          c && c.promote(this, s),
            i && ((this.projectionDelta = void 0), (this.needsReset = !0)),
            a && this.setOptions({ transition: a });
        }
        relegate() {
          let i = this.getStack();
          return i ? i.relegate(this) : !1;
        }
        resetRotation() {
          let { visualElement: i } = this.options;
          if (!i) return;
          let a = !1,
            { latestValues: s } = i;
          if (
            ((s.rotate || s.rotateX || s.rotateY || s.rotateZ) && (a = !0), !a)
          )
            return;
          let c = {};
          for (let l = 0; l < Os.length; l++) {
            let u = 'rotate' + Os[l];
            s[u] && ((c[u] = s[u]), i.setStaticValue(u, 0));
          }
          i.render();
          for (let l in c) i.setStaticValue(l, c[l]);
          i.scheduleRender();
        }
        getProjectionStyles(i) {
          var a, s;
          if (!this.instance || this.isSVG) return;
          if (!this.isVisible) return m0;
          let c = { visibility: '' },
            l = this.getTransformTemplate();
          if (this.needsReset)
            return (
              (this.needsReset = !1),
              (c.opacity = ''),
              (c.pointerEvents = ir(i?.pointerEvents) || ''),
              (c.transform = l ? l(this.latestValues, '') : 'none'),
              c
            );
          let u = this.getLead();
          if (!this.projectionDelta || !this.layout || !u.target) {
            let f = {};
            return (
              this.options.layoutId &&
                ((f.opacity =
                  this.latestValues.opacity !== void 0
                    ? this.latestValues.opacity
                    : 1),
                (f.pointerEvents = ir(i?.pointerEvents) || '')),
              this.hasProjected &&
                !Ot(this.latestValues) &&
                ((f.transform = l ? l({}, '') : 'none'),
                (this.hasProjected = !1)),
              f
            );
          }
          let d = u.animationValues || u.latestValues;
          this.applyTransformsToTarget(),
            (c.transform = Ps(
              this.projectionDeltaWithTransform,
              this.treeScale,
              d
            )),
            l && (c.transform = l(d, c.transform));
          let { x: p, y: h } = this.projectionDelta;
          (c.transformOrigin = `${p.origin * 100}% ${h.origin * 100}% 0`),
            u.animationValues
              ? (c.opacity =
                  u === this
                    ? (s =
                        (a = d.opacity) !== null && a !== void 0
                          ? a
                          : this.latestValues.opacity) !== null && s !== void 0
                      ? s
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : d.opacityExit)
              : (c.opacity =
                  u === this
                    ? d.opacity !== void 0
                      ? d.opacity
                      : ''
                    : d.opacityExit !== void 0
                    ? d.opacityExit
                    : 0);
          for (let f in hr) {
            if (d[f] === void 0) continue;
            let { correct: m, applyTo: x } = hr[f],
              v = c.transform === 'none' ? d[f] : m(d[f], u);
            if (x) {
              let b = x.length;
              for (let y = 0; y < b; y++) c[x[y]] = v;
            } else c[f] = v;
          }
          return (
            this.options.layoutId &&
              (c.pointerEvents =
                u === this ? ir(i?.pointerEvents) || '' : 'none'),
            c
          );
        }
        clearSnapshot() {
          this.resumeFrom = this.snapshot = void 0;
        }
        resetTree() {
          this.root.nodes.forEach((i) => {
            var a;
            return (a = i.currentAnimation) === null || a === void 0
              ? void 0
              : a.stop();
          }),
            this.root.nodes.forEach(As),
            this.root.sharedNodes.clear();
        }
      };
    }
    function y0(e) {
      e.updateLayout();
    }
    function v0(e) {
      var t;
      let n =
        ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
        e.snapshot;
      if (e.isLead() && e.layout && n && e.hasListeners('didUpdate')) {
        let { layoutBox: r, measuredBox: o } = e.layout,
          { animationType: i } = e.options,
          a = n.source !== e.layout.source;
        i === 'size'
          ? Ne((d) => {
              let p = a ? n.measuredBox[d] : n.layoutBox[d],
                h = ke(p);
              (p.min = r[d].min), (p.max = p.min + h);
            })
          : su(i, n.layoutBox, r) &&
            Ne((d) => {
              let p = a ? n.measuredBox[d] : n.layoutBox[d],
                h = ke(r[d]);
              (p.max = p.min + h),
                e.relativeTarget &&
                  !e.currentAnimation &&
                  ((e.isProjectionDirty = !0),
                  (e.relativeTarget[d].max = e.relativeTarget[d].min + h));
            });
        let s = Yt();
        xn(s, r, n.layoutBox);
        let c = Yt();
        a
          ? xn(c, e.applyTransform(o, !0), n.measuredBox)
          : xn(c, r, n.layoutBox);
        let l = !ou(s),
          u = !1;
        if (!e.resumeFrom) {
          let d = e.getClosestProjectingParent();
          if (d && !d.resumeFrom) {
            let { snapshot: p, layout: h } = d;
            if (p && h) {
              let f = pe();
              wn(f, n.layoutBox, p.layoutBox);
              let m = pe();
              wn(m, r, h.layoutBox),
                iu(f, m) || (u = !0),
                d.options.layoutRoot &&
                  ((e.relativeTarget = m),
                  (e.relativeTargetOrigin = f),
                  (e.relativeParent = d));
            }
          }
        }
        e.notifyListeners('didUpdate', {
          layout: r,
          snapshot: n,
          delta: c,
          layoutDelta: s,
          hasLayoutChanged: l,
          hasRelativeTargetChanged: u,
        });
      } else if (e.isLead()) {
        let { onExitComplete: r } = e.options;
        r && r();
      }
      e.options.transition = void 0;
    }
    function b0(e) {
      Ct.totalNodes++,
        e.parent &&
          (e.isProjecting() ||
            (e.isProjectionDirty = e.parent.isProjectionDirty),
          e.isSharedProjectionDirty ||
            (e.isSharedProjectionDirty = !!(
              e.isProjectionDirty ||
              e.parent.isProjectionDirty ||
              e.parent.isSharedProjectionDirty
            )),
          e.isTransformDirty ||
            (e.isTransformDirty = e.parent.isTransformDirty));
    }
    function x0(e) {
      e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
    }
    function w0(e) {
      e.clearSnapshot();
    }
    function As(e) {
      e.clearMeasurements();
    }
    function E0(e) {
      e.isLayoutDirty = !1;
    }
    function T0(e) {
      let { visualElement: t } = e.options;
      t &&
        t.getProps().onBeforeLayoutMeasure &&
        t.notify('BeforeLayoutMeasure'),
        e.resetTransform();
    }
    function Rs(e) {
      e.finishAnimation(),
        (e.targetDelta = e.relativeTarget = e.target = void 0),
        (e.isProjectionDirty = !0);
    }
    function S0(e) {
      e.resolveTargetDelta();
    }
    function P0(e) {
      e.calcProjection();
    }
    function O0(e) {
      e.resetRotation();
    }
    function C0(e) {
      e.removeLeadSnapshot();
    }
    function Is(e, t, n) {
      (e.translate = oe(t.translate, 0, n)),
        (e.scale = oe(t.scale, 1, n)),
        (e.origin = t.origin),
        (e.originPoint = t.originPoint);
    }
    function ks(e, t, n, r) {
      (e.min = oe(t.min, n.min, r)), (e.max = oe(t.max, n.max, r));
    }
    function A0(e, t, n, r) {
      ks(e.x, t.x, n.x, r), ks(e.y, t.y, n.y, r);
    }
    function R0(e) {
      return e.animationValues && e.animationValues.opacityExit !== void 0;
    }
    function Ls(e) {
      (e.min = Ds(e.min)), (e.max = Ds(e.max));
    }
    function k0(e) {
      Ls(e.x), Ls(e.y);
    }
    function su(e, t, n) {
      return (
        e === 'position' || (e === 'preserve-aspect' && !Do(Ss(t), Ss(n), 0.2))
      );
    }
    function N0(e) {
      let t = L0.exec(e);
      if (!t) return [,];
      let [, n, r] = t;
      return [n, r];
    }
    function jo(e, t, n = 1) {
      ze(
        n <= F0,
        `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
      );
      let [r, o] = N0(e);
      if (!r) return;
      let i = window.getComputedStyle(t).getPropertyValue(r);
      if (i) {
        let a = i.trim();
        return Hc(a) ? parseFloat(a) : a;
      } else return fr(o) ? jo(o, t, n + 1) : o;
    }
    function j0(e, { ...t }, n) {
      let r = e.current;
      if (!(r instanceof Element)) return { target: t, transitionEnd: n };
      n && (n = { ...n }),
        e.values.forEach((o) => {
          let i = o.get();
          if (!fr(i)) return;
          let a = jo(i, r);
          a && o.set(a);
        });
      for (let o in t) {
        let i = t[o];
        if (!fr(i)) continue;
        let a = jo(i, r);
        a && ((t[o] = a), n || (n = {}), n[o] === void 0 && (n[o] = i));
      }
      return { target: t, transitionEnd: n };
    }
    function U0(e) {
      let t = [];
      return (
        z0.forEach((n) => {
          let r = e.getValue(n);
          r !== void 0 &&
            (t.push([n, r.get()]), r.set(n.startsWith('scale') ? 1 : 0));
        }),
        t.length && e.render(),
        t
      );
    }
    function Y0(e, t, n, r) {
      return B0(t) ? H0(e, t, n, r) : { target: t, transitionEnd: r };
    }
    function q0() {
      if (((uu.current = !0), !!Ir))
        if (window.matchMedia) {
          let e = window.matchMedia('(prefers-reduced-motion)'),
            t = () => (Vo.current = e.matches);
          e.addListener(t), t();
        } else Vo.current = !1;
    }
    function $0(e, t, n) {
      let { willChange: r } = t;
      for (let o in t) {
        let i = t[o],
          a = n[o];
        if (Ce(i))
          e.addValue(o, i),
            xr(r) && r.add(o),
            xi(
              i.version === '11.0.6',
              `Attempting to mix Framer Motion versions ${i.version} with 11.0.6 may not work as expected.`
            );
        else if (Ce(a))
          e.addValue(o, Qt(i, { owner: e })), xr(r) && r.remove(o);
        else if (a !== i)
          if (e.hasValue(o)) {
            let s = e.getValue(o);
            !s.hasAnimated && s.set(i);
          } else {
            let s = e.getStaticValue(o);
            e.addValue(o, Qt(s !== void 0 ? s : i, { owner: e }));
          }
      }
      for (let o in n) t[o] === void 0 && e.removeValue(o);
      return t;
    }
    function Z0(e) {
      return window.getComputedStyle(e);
    }
    function yb() {
      let [e, t] = ne(null);
      return (
        U(() => {
          (async () => {
            try {
              let n = (await (await fetch('/index.json')).json()).entries[
                'example-button--primary'
              ].importPath;
              t({ data: n, error: null });
            } catch (n) {
              t({ data: null, error: n });
            }
          })();
        }, []),
        e
      );
    }
    function Ab() {
      let [e, t] = ne({ data: null, error: null });
      return (
        U(() => {
          (async () => {
            try {
              let n =
                (await (await fetch('/project.json')).json())?.language ===
                'javascript'
                  ? Pb
                  : Cb;
              t({ data: n, error: null });
            } catch (n) {
              t({ data: null, error: n });
            }
          })();
        }, []),
        e
      );
    }
    function Ib({ api: e }) {
      let [t, n] = ne(!0),
        [r, o] = ne(!1),
        [i, a] = ne('1:Welcome'),
        { data: s } = Ab(),
        c = ye(() => {
          let l = new URL(window.location.href),
            u = decodeURIComponent(l.searchParams.get('path'));
          (l.search = `?path=${u}&onboarding=false`),
            history.replaceState({}, '', l.href),
            e.setQueryParams({ onboarding: 'false' }),
            n(!1);
        }, [n, e]);
      return (
        U(() => {
          e.emit(yn, { step: '1:Welcome', type: 'telemetry' });
        }, []),
        U(() => {
          i !== '1:Welcome' && e.emit(yn, { step: i, type: 'telemetry' });
        }, [e, i]),
        U(() => {
          let l;
          return (
            i === '4:VisitNewStory' &&
              (o(!0),
              (l = window.setTimeout(() => {
                a('5:ConfigureYourProject');
              }, 2e3))),
            () => {
              clearTimeout(l);
            }
          );
        }, [i]),
        U(() => {
          let l = e.getCurrentStoryData()?.id;
          if (
            (e.setQueryParams({ onboarding: 'true' }),
            l !== 'example-button--primary')
          )
            try {
              e.selectStory('example-button--primary', void 0, { ref: void 0 });
            } catch {}
        }, []),
        t
          ? g.createElement(
              Br,
              { theme: Rb },
              t &&
                r &&
                g.createElement(Al, {
                  numberOfPieces: 800,
                  recycle: !1,
                  tweenDuration: 2e4,
                  onConfettiComplete: (l) => {
                    l?.reset(), o(!1);
                  },
                }),
              t &&
                i === '1:Welcome' &&
                g.createElement(Nm, {
                  onProceed: () => {
                    a('2:StorybookTour');
                  },
                  skipOnboarding: () => {
                    c(),
                      e.emit(yn, {
                        step: 'X:SkippedOnboarding',
                        where: 'WelcomeModal',
                        type: 'telemetry',
                      });
                  },
                }),
              t &&
                (i === '2:StorybookTour' || i === '5:ConfigureYourProject') &&
                g.createElement(Dh, {
                  api: e,
                  isFinalStep: i === '5:ConfigureYourProject',
                  onFirstTourDone: () => {
                    a('3:WriteYourStory');
                  },
                  codeSnippets: s || void 0,
                  onLastTourDone: () => {
                    try {
                      e.selectStory('configure-your-project--docs');
                    } catch {}
                    e.emit(yn, {
                      step: '6:FinishedOnboarding',
                      type: 'telemetry',
                    }),
                      c();
                  },
                }),
              t &&
                i === '3:WriteYourStory' &&
                s &&
                g.createElement(Tb, {
                  api: e,
                  codeSnippets: s,
                  addonsStore: Wn,
                  onFinish: () => {
                    e.selectStory('example-button--warning'),
                      a('4:VisitNewStory');
                  },
                  skipOnboarding: c,
                })
            )
          : null
      );
    }
    var bu,
      Er,
      xu,
      Bo,
      wu,
      Eu,
      Bs,
      Ae,
      Tu,
      _s,
      ct,
      Su,
      Pu,
      Ou,
      _o,
      Cu,
      zs,
      Au,
      Us,
      Ws,
      Ru,
      Iu,
      ku,
      Mu,
      Du,
      Lu,
      Hs,
      Fu,
      Ys,
      Wi,
      Hi,
      Gs,
      ju,
      Vu,
      Bu,
      Yi,
      Gi,
      _u,
      Yu,
      Gu,
      Ku,
      I,
      Ju,
      Ks,
      Hn,
      zr,
      S,
      On,
      nd,
      id,
      ad,
      Zi,
      Ji,
      cd,
      ud,
      Kt,
      Fe,
      Sd,
      dl,
      Ur,
      Wr,
      jd,
      Vd,
      Sr,
      ra,
      yo,
      Bd,
      _d,
      zd,
      L,
      Hd,
      Yd,
      oa,
      ia,
      Gd,
      vo,
      ip,
      ap,
      sp,
      X,
      cn,
      gl,
      yl,
      mp,
      xl,
      wl,
      gp,
      vp,
      bp,
      $o,
      xp,
      wp,
      Ep,
      M,
      Z,
      _e,
      _,
      G,
      un,
      Dp,
      Sl,
      Lp,
      Np,
      Fp,
      dn,
      ya,
      Ol,
      ba,
      Bp,
      zp,
      Up,
      Hp,
      Yp,
      Gp,
      $p,
      Xp,
      Qp,
      Zp,
      Cl,
      Jp,
      th,
      oh,
      ih,
      Ko,
      ah,
      sh,
      lh,
      xo,
      ch,
      uh,
      hh,
      Le,
      fh,
      mh,
      gh,
      yh,
      vh,
      bh,
      xh,
      wh,
      Eh,
      Th,
      Sh,
      nr,
      Gr,
      Ph,
      Oh,
      Ch,
      Ah,
      Rh,
      Ih,
      kh,
      Gn,
      Mh,
      wo,
      Vh,
      Bh,
      Xo,
      Eo,
      Uh,
      Yh,
      Lt,
      To,
      $h,
      Kh,
      xa,
      Xh,
      Qh,
      $r,
      Kr,
      Ea,
      ef,
      Sa,
      lf,
      Cr,
      Xr,
      qe,
      rr,
      or,
      hf,
      ff,
      Ca,
      Dl,
      Ll,
      Zr,
      Ar,
      wf,
      Pf,
      Of,
      Nl,
      Cf,
      Jr,
      Af,
      Rf,
      If,
      pr,
      kf,
      Mf,
      So,
      hn,
      _t,
      Df,
      Fl,
      Lf,
      Nf,
      Aa,
      Ff,
      jf,
      jl,
      Vl,
      Vf,
      Bf,
      $n,
      Ra,
      Ia,
      _f,
      zf,
      Uf,
      zt,
      Hf,
      Bl,
      Yf,
      Gf,
      Ut,
      Kn,
      Xn,
      eo,
      _l,
      qf,
      $f,
      Kf,
      zl,
      Ul,
      HO,
      Xf,
      Qe,
      Qf,
      Wl,
      Zf,
      Hl,
      Jf,
      Po,
      em,
      tm,
      Xt,
      nm,
      rm,
      om,
      Yl,
      Gl,
      im,
      am,
      sm,
      lm,
      cm,
      um,
      dm,
      pm,
      hm,
      fm,
      mm,
      gm,
      ym,
      vm,
      bm,
      xm,
      Em,
      Tm,
      Sm,
      Pm,
      Om,
      Cm,
      Am,
      Rm,
      Im,
      km,
      Mm,
      Dm,
      Lm,
      Nm,
      ka,
      Bm,
      _m,
      Xl,
      Rr,
      Qo,
      Ir,
      zm,
      Ql,
      Zo,
      Um,
      Zl,
      Jl,
      Ma,
      Qn,
      Hm,
      Jo,
      YO,
      ei,
      ti,
      La,
      Sn,
      nc,
      rc,
      Xm,
      eg,
      hr,
      Nn,
      Nt,
      Ce,
      ng,
      rg,
      ic,
      ac,
      ig,
      fr,
      ag,
      sg,
      wt,
      nn,
      vn,
      Zn,
      bn,
      ri,
      lg,
      cg,
      jn,
      ht,
      Xe,
      F,
      ug,
      dg,
      Na,
      Fa,
      sc,
      ii,
      mg,
      cc,
      bg,
      xg,
      uc,
      si,
      pc,
      gr,
      Pg,
      Og,
      mc,
      he,
      ie,
      lt,
      ve,
      to,
      Rg,
      Ig,
      gc,
      Mg,
      Dg,
      at,
      Va,
      Ba,
      Tt,
      Lg,
      Ng,
      xc,
      Fg,
      Oo,
      ro,
      jg,
      Vg,
      zg,
      Ug,
      Hg,
      Vn,
      ze,
      vt,
      st,
      qg,
      Ec,
      gn,
      Sc,
      Oc,
      Xg,
      Qg,
      Jg,
      ey,
      Cc,
      ty,
      Ac,
      Rc,
      ui,
      Ic,
      ny,
      kc,
      di,
      ry,
      oy,
      za,
      Ua,
      Pn,
      oe,
      pi,
      Mc,
      ay,
      io,
      Rt,
      Co,
      Ht,
      ao,
      ly,
      cy,
      Ha,
      we,
      Dc,
      Lc,
      dy,
      py,
      Ya,
      Ga,
      hy,
      Et,
      vy,
      Py,
      so,
      Oy,
      qa,
      Cy,
      Ay,
      Iy,
      My,
      Dy,
      ar,
      kt,
      Fy,
      jy,
      Vy,
      _y,
      zy,
      Jn,
      Uy,
      Wy,
      Gy,
      qy,
      $y,
      Ky,
      Xy,
      Io,
      Qy,
      Jy,
      ko,
      ev,
      fi,
      Wc,
      gi,
      Hc,
      bi,
      Qa,
      Za,
      ov,
      iv,
      Yc,
      av,
      Gc,
      fn,
      sv,
      lv,
      bv,
      xv,
      Pv,
      Ov,
      Cv,
      Av,
      Ja,
      $c,
      Lo,
      ls,
      Yt,
      cs,
      pe,
      Uv,
      Wv,
      eu,
      Yv,
      Gv,
      $v,
      fs,
      Kv,
      sr,
      mn,
      Qv,
      Zv,
      Jv,
      nu,
      e0,
      gs,
      ys,
      n0,
      r0,
      i0,
      a0,
      l0,
      c0,
      u0,
      Os,
      m0,
      Cs,
      g0,
      Ct,
      I0,
      Ms,
      Ds,
      M0,
      po,
      lu,
      D0,
      L0,
      F0,
      V0,
      cu,
      B0,
      tr,
      Ns,
      Fs,
      _0,
      z0,
      Zt,
      W0,
      H0,
      G0,
      Vo,
      uu,
      js,
      du,
      K0,
      Vs,
      X0,
      Q0,
      pu,
      J0,
      eb,
      tb,
      nb,
      rb,
      rn,
      ob,
      ib,
      ab,
      sb,
      lb,
      cb,
      ub,
      db,
      pb,
      hb,
      fb,
      mb,
      gb,
      ho,
      vb,
      bb,
      xb,
      wb,
      Eb,
      yn,
      Tb,
      Sb,
      Pb,
      Ob,
      Cb,
      Rb,
      fu = Ve(() => {
        ce();
        ue();
        de();
        Un();
        Un();
        Fi();
        Fr();
        _n();
        _n();
        Vr();
        zi();
        Ui();
        (bu = Object.create),
          (Er = Object.defineProperty),
          (xu = Object.getOwnPropertyDescriptor),
          (Bo = Object.getOwnPropertyNames),
          (wu = Object.getPrototypeOf),
          (Eu = Object.prototype.hasOwnProperty),
          (Bs = (e, t) =>
            function () {
              return e && (t = (0, e[Bo(e)[0]])((e = 0))), t;
            }),
          (Ae = (e, t) =>
            function () {
              return (
                t || (0, e[Bo(e)[0]])((t = { exports: {} }).exports, t),
                t.exports
              );
            }),
          (Tu = (e, t) => {
            for (var n in t) Er(e, n, { get: t[n], enumerable: !0 });
          }),
          (_s = (e, t, n, r) => {
            if ((t && typeof t == 'object') || typeof t == 'function')
              for (let o of Bo(t))
                !Eu.call(e, o) &&
                  o !== n &&
                  Er(e, o, {
                    get: () => t[o],
                    enumerable: !(r = xu(t, o)) || r.enumerable,
                  });
            return e;
          }),
          (ct = (e, t, n) => (
            (n = e != null ? bu(wu(e)) : {}),
            _s(
              t || !e || !e.__esModule
                ? Er(n, 'default', { value: e, enumerable: !0 })
                : n,
              e
            )
          )),
          (Su = (e) => _s(Er({}, '__esModule', { value: !0 }), e)),
          (Pu = Ae({
            '../../node_modules/scroll/index.js'(e, t) {
              var n = new Error('Element already at target scroll position'),
                r = new Error('Scroll cancelled'),
                o = Math.min,
                i = Date.now;
              t.exports = { left: a('scrollLeft'), top: a('scrollTop') };
              function a(l) {
                return function (u, d, p, h) {
                  (p = p || {}),
                    typeof p == 'function' && ((h = p), (p = {})),
                    typeof h != 'function' && (h = c);
                  var f = i(),
                    m = u[l],
                    x = p.ease || s,
                    v = isNaN(p.duration) ? 350 : +p.duration,
                    b = !1;
                  return m === d ? h(n, u[l]) : requestAnimationFrame(w), y;
                  function y() {
                    b = !0;
                  }
                  function w(E) {
                    if (b) return h(r, u[l]);
                    var j = i(),
                      D = o(1, (j - f) / v),
                      P = x(D);
                    (u[l] = P * (d - m) + m),
                      D < 1
                        ? requestAnimationFrame(w)
                        : requestAnimationFrame(function () {
                            h(null, u[l]);
                          });
                  }
                };
              }
              function s(l) {
                return 0.5 * (1 - Math.cos(Math.PI * l));
              }
              function c() {}
            },
          })),
          (Ou = Ae({
            '../../node_modules/scrollparent/scrollparent.js'(e, t) {
              (function (n, r) {
                typeof define == 'function' && define.amd
                  ? define([], r)
                  : typeof t == 'object' && t.exports
                  ? (t.exports = r())
                  : (n.Scrollparent = r());
              })(e, function () {
                function n(o) {
                  var i = getComputedStyle(o, null).getPropertyValue(
                    'overflow'
                  );
                  return i.indexOf('scroll') > -1 || i.indexOf('auto') > -1;
                }
                function r(o) {
                  if (o instanceof HTMLElement || o instanceof SVGElement) {
                    for (var i = o.parentNode; i.parentNode; ) {
                      if (n(i)) return i;
                      i = i.parentNode;
                    }
                    return (
                      document.scrollingElement || document.documentElement
                    );
                  }
                }
                return r;
              });
            },
          })),
          (_o = Ae({
            '../../node_modules/deepmerge/dist/cjs.js'(e, t) {
              var n = function (y) {
                return r(y) && !o(y);
              };
              function r(y) {
                return !!y && typeof y == 'object';
              }
              function o(y) {
                var w = Object.prototype.toString.call(y);
                return w === '[object RegExp]' || w === '[object Date]' || s(y);
              }
              var i = typeof Symbol == 'function' && Symbol.for,
                a = i ? Symbol.for('react.element') : 60103;
              function s(y) {
                return y.$$typeof === a;
              }
              function c(y) {
                return Array.isArray(y) ? [] : {};
              }
              function l(y, w) {
                return w.clone !== !1 && w.isMergeableObject(y)
                  ? v(c(y), y, w)
                  : y;
              }
              function u(y, w, E) {
                return y.concat(w).map(function (j) {
                  return l(j, E);
                });
              }
              function d(y, w) {
                if (!w.customMerge) return v;
                var E = w.customMerge(y);
                return typeof E == 'function' ? E : v;
              }
              function p(y) {
                return Object.getOwnPropertySymbols
                  ? Object.getOwnPropertySymbols(y).filter(function (w) {
                      return Object.propertyIsEnumerable.call(y, w);
                    })
                  : [];
              }
              function h(y) {
                return Object.keys(y).concat(p(y));
              }
              function f(y, w) {
                try {
                  return w in y;
                } catch {
                  return !1;
                }
              }
              function m(y, w) {
                return (
                  f(y, w) &&
                  !(
                    Object.hasOwnProperty.call(y, w) &&
                    Object.propertyIsEnumerable.call(y, w)
                  )
                );
              }
              function x(y, w, E) {
                var j = {};
                return (
                  E.isMergeableObject(y) &&
                    h(y).forEach(function (D) {
                      j[D] = l(y[D], E);
                    }),
                  h(w).forEach(function (D) {
                    m(y, D) ||
                      (f(y, D) && E.isMergeableObject(w[D])
                        ? (j[D] = d(D, E)(y[D], w[D], E))
                        : (j[D] = l(w[D], E)));
                  }),
                  j
                );
              }
              function v(y, w, E) {
                (E = E || {}),
                  (E.arrayMerge = E.arrayMerge || u),
                  (E.isMergeableObject = E.isMergeableObject || n),
                  (E.cloneUnlessOtherwiseSpecified = l);
                var j = Array.isArray(w),
                  D = Array.isArray(y),
                  P = j === D;
                return P ? (j ? E.arrayMerge(y, w, E) : x(y, w, E)) : l(w, E);
              }
              v.all = function (y, w) {
                if (!Array.isArray(y))
                  throw new Error('first argument should be an array');
                return y.reduce(function (E, j) {
                  return v(E, j, w);
                }, {});
              };
              var b = v;
              t.exports = b;
            },
          })),
          (Cu = Ae({
            '../../node_modules/react-is/cjs/react-is.development.js'(e) {
              (function () {
                var t = typeof Symbol == 'function' && Symbol.for,
                  n = t ? Symbol.for('react.element') : 60103,
                  r = t ? Symbol.for('react.portal') : 60106,
                  o = t ? Symbol.for('react.fragment') : 60107,
                  i = t ? Symbol.for('react.strict_mode') : 60108,
                  a = t ? Symbol.for('react.profiler') : 60114,
                  s = t ? Symbol.for('react.provider') : 60109,
                  c = t ? Symbol.for('react.context') : 60110,
                  l = t ? Symbol.for('react.async_mode') : 60111,
                  u = t ? Symbol.for('react.concurrent_mode') : 60111,
                  d = t ? Symbol.for('react.forward_ref') : 60112,
                  p = t ? Symbol.for('react.suspense') : 60113,
                  h = t ? Symbol.for('react.suspense_list') : 60120,
                  f = t ? Symbol.for('react.memo') : 60115,
                  m = t ? Symbol.for('react.lazy') : 60116,
                  x = t ? Symbol.for('react.block') : 60121,
                  v = t ? Symbol.for('react.fundamental') : 60117,
                  b = t ? Symbol.for('react.responder') : 60118,
                  y = t ? Symbol.for('react.scope') : 60119;
                function w(C) {
                  return (
                    typeof C == 'string' ||
                    typeof C == 'function' ||
                    C === o ||
                    C === u ||
                    C === a ||
                    C === i ||
                    C === p ||
                    C === h ||
                    (typeof C == 'object' &&
                      C !== null &&
                      (C.$$typeof === m ||
                        C.$$typeof === f ||
                        C.$$typeof === s ||
                        C.$$typeof === c ||
                        C.$$typeof === d ||
                        C.$$typeof === v ||
                        C.$$typeof === b ||
                        C.$$typeof === y ||
                        C.$$typeof === x))
                  );
                }
                function E(C) {
                  if (typeof C == 'object' && C !== null) {
                    var xe = C.$$typeof;
                    switch (xe) {
                      case n:
                        var Ze = C.type;
                        switch (Ze) {
                          case l:
                          case u:
                          case o:
                          case a:
                          case i:
                          case p:
                            return Ze;
                          default:
                            var wi = Ze && Ze.$$typeof;
                            switch (wi) {
                              case c:
                              case d:
                              case m:
                              case f:
                              case s:
                                return wi;
                              default:
                                return xe;
                            }
                        }
                      case r:
                        return xe;
                    }
                  }
                }
                var j = l,
                  D = u,
                  P = c,
                  N = s,
                  te = n,
                  le = d,
                  Me = o,
                  Re = m,
                  fe = f,
                  ae = r,
                  Te = a,
                  He = i,
                  be = p,
                  je = !1;
                function Ft(C) {
                  return (
                    je ||
                      ((je = !0),
                      console.warn(
                        'The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.'
                      )),
                    J(C) || E(C) === l
                  );
                }
                function J(C) {
                  return E(C) === u;
                }
                function T(C) {
                  return E(C) === c;
                }
                function k(C) {
                  return E(C) === s;
                }
                function Y(C) {
                  return typeof C == 'object' && C !== null && C.$$typeof === n;
                }
                function W(C) {
                  return E(C) === d;
                }
                function V(C) {
                  return E(C) === o;
                }
                function K(C) {
                  return E(C) === m;
                }
                function H(C) {
                  return E(C) === f;
                }
                function z(C) {
                  return E(C) === r;
                }
                function q(C) {
                  return E(C) === a;
                }
                function $(C) {
                  return E(C) === i;
                }
                function Q(C) {
                  return E(C) === p;
                }
                (e.AsyncMode = j),
                  (e.ConcurrentMode = D),
                  (e.ContextConsumer = P),
                  (e.ContextProvider = N),
                  (e.Element = te),
                  (e.ForwardRef = le),
                  (e.Fragment = Me),
                  (e.Lazy = Re),
                  (e.Memo = fe),
                  (e.Portal = ae),
                  (e.Profiler = Te),
                  (e.StrictMode = He),
                  (e.Suspense = be),
                  (e.isAsyncMode = Ft),
                  (e.isConcurrentMode = J),
                  (e.isContextConsumer = T),
                  (e.isContextProvider = k),
                  (e.isElement = Y),
                  (e.isForwardRef = W),
                  (e.isFragment = V),
                  (e.isLazy = K),
                  (e.isMemo = H),
                  (e.isPortal = z),
                  (e.isProfiler = q),
                  (e.isStrictMode = $),
                  (e.isSuspense = Q),
                  (e.isValidElementType = w),
                  (e.typeOf = E);
              })();
            },
          })),
          (zs = Ae({
            '../../node_modules/react-is/index.js'(e, t) {
              t.exports = Cu();
            },
          })),
          (Au = Ae({
            '../../node_modules/object-assign/index.js'(e, t) {
              var n = Object.getOwnPropertySymbols,
                r = Object.prototype.hasOwnProperty,
                o = Object.prototype.propertyIsEnumerable;
              function i(s) {
                if (s == null)
                  throw new TypeError(
                    'Object.assign cannot be called with null or undefined'
                  );
                return Object(s);
              }
              function a() {
                try {
                  if (!Object.assign) return !1;
                  var s = new String('abc');
                  if (((s[5] = 'de'), Object.getOwnPropertyNames(s)[0] === '5'))
                    return !1;
                  for (var c = {}, l = 0; l < 10; l++)
                    c['_' + String.fromCharCode(l)] = l;
                  var u = Object.getOwnPropertyNames(c).map(function (p) {
                    return c[p];
                  });
                  if (u.join('') !== '0123456789') return !1;
                  var d = {};
                  return (
                    'abcdefghijklmnopqrst'.split('').forEach(function (p) {
                      d[p] = p;
                    }),
                    Object.keys(Object.assign({}, d)).join('') ===
                      'abcdefghijklmnopqrst'
                  );
                } catch {
                  return !1;
                }
              }
              t.exports = a()
                ? Object.assign
                : function (s, c) {
                    for (var l, u = i(s), d, p = 1; p < arguments.length; p++) {
                      l = Object(arguments[p]);
                      for (var h in l) r.call(l, h) && (u[h] = l[h]);
                      if (n) {
                        d = n(l);
                        for (var f = 0; f < d.length; f++)
                          o.call(l, d[f]) && (u[d[f]] = l[d[f]]);
                      }
                    }
                    return u;
                  };
            },
          })),
          (Us = Ae({
            '../../node_modules/prop-types/lib/ReactPropTypesSecret.js'(e, t) {
              var n = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
              t.exports = n;
            },
          })),
          (Ws = Ae({
            '../../node_modules/prop-types/lib/has.js'(e, t) {
              t.exports = Function.call.bind(Object.prototype.hasOwnProperty);
            },
          })),
          (Ru = Ae({
            '../../node_modules/prop-types/checkPropTypes.js'(e, t) {
              var n = function () {};
              (r = Us()),
                (o = {}),
                (i = Ws()),
                (n = function (s) {
                  var c = 'Warning: ' + s;
                  typeof console < 'u' && console.error(c);
                  try {
                    throw new Error(c);
                  } catch {}
                });
              var r, o, i;
              function a(s, c, l, u, d) {
                for (var p in s)
                  if (i(s, p)) {
                    var h;
                    try {
                      if (typeof s[p] != 'function') {
                        var f = Error(
                          (u || 'React class') +
                            ': ' +
                            l +
                            ' type `' +
                            p +
                            '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                            typeof s[p] +
                            '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
                        );
                        throw ((f.name = 'Invariant Violation'), f);
                      }
                      h = s[p](c, p, u, l, null, r);
                    } catch (x) {
                      h = x;
                    }
                    if (
                      (h &&
                        !(h instanceof Error) &&
                        n(
                          (u || 'React class') +
                            ': type specification of ' +
                            l +
                            ' `' +
                            p +
                            '` is invalid; the type checker function must return `null` or an `Error` but returned a ' +
                            typeof h +
                            '. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).'
                        ),
                      h instanceof Error && !(h.message in o))
                    ) {
                      o[h.message] = !0;
                      var m = d ? d() : '';
                      n('Failed ' + l + ' type: ' + h.message + (m ?? ''));
                    }
                  }
              }
              (a.resetWarningCache = function () {
                o = {};
              }),
                (t.exports = a);
            },
          })),
          (Iu = Ae({
            '../../node_modules/prop-types/factoryWithTypeCheckers.js'(e, t) {
              var n = zs(),
                r = Au(),
                o = Us(),
                i = Ws(),
                a = Ru(),
                s = function () {};
              s = function (l) {
                var u = 'Warning: ' + l;
                typeof console < 'u' && console.error(u);
                try {
                  throw new Error(u);
                } catch {}
              };
              function c() {
                return null;
              }
              t.exports = function (l, u) {
                var d = typeof Symbol == 'function' && Symbol.iterator,
                  p = '@@iterator';
                function h(T) {
                  var k = T && ((d && T[d]) || T[p]);
                  if (typeof k == 'function') return k;
                }
                var f = '<<anonymous>>',
                  m = {
                    array: y('array'),
                    bigint: y('bigint'),
                    bool: y('boolean'),
                    func: y('function'),
                    number: y('number'),
                    object: y('object'),
                    string: y('string'),
                    symbol: y('symbol'),
                    any: w(),
                    arrayOf: E,
                    element: j(),
                    elementType: D(),
                    instanceOf: P,
                    node: Me(),
                    objectOf: te,
                    oneOf: N,
                    oneOfType: le,
                    shape: fe,
                    exact: ae,
                  };
                function x(T, k) {
                  return T === k
                    ? T !== 0 || 1 / T === 1 / k
                    : T !== T && k !== k;
                }
                function v(T, k) {
                  (this.message = T),
                    (this.data = k && typeof k == 'object' ? k : {}),
                    (this.stack = '');
                }
                v.prototype = Error.prototype;
                function b(T) {
                  var k = {},
                    Y = 0;
                  function W(K, H, z, q, $, Q, C) {
                    if (((q = q || f), (Q = Q || z), C !== o)) {
                      if (u) {
                        var xe = new Error(
                          'Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types'
                        );
                        throw ((xe.name = 'Invariant Violation'), xe);
                      } else if (typeof console < 'u') {
                        var Ze = q + ':' + z;
                        !k[Ze] &&
                          Y < 3 &&
                          (s(
                            'You are manually calling a React.PropTypes validation function for the `' +
                              Q +
                              '` prop on `' +
                              q +
                              '`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.'
                          ),
                          (k[Ze] = !0),
                          Y++);
                      }
                    }
                    return H[z] == null
                      ? K
                        ? H[z] === null
                          ? new v(
                              'The ' +
                                $ +
                                ' `' +
                                Q +
                                '` is marked as required ' +
                                ('in `' + q + '`, but its value is `null`.')
                            )
                          : new v(
                              'The ' +
                                $ +
                                ' `' +
                                Q +
                                '` is marked as required in ' +
                                ('`' + q + '`, but its value is `undefined`.')
                            )
                        : null
                      : T(H, z, q, $, Q);
                  }
                  var V = W.bind(null, !1);
                  return (V.isRequired = W.bind(null, !0)), V;
                }
                function y(T) {
                  function k(Y, W, V, K, H, z) {
                    var q = Y[W],
                      $ = be(q);
                    if ($ !== T) {
                      var Q = je(q);
                      return new v(
                        'Invalid ' +
                          K +
                          ' `' +
                          H +
                          '` of type ' +
                          ('`' + Q + '` supplied to `' + V + '`, expected ') +
                          ('`' + T + '`.'),
                        { expectedType: T }
                      );
                    }
                    return null;
                  }
                  return b(k);
                }
                function w() {
                  return b(c);
                }
                function E(T) {
                  function k(Y, W, V, K, H) {
                    if (typeof T != 'function')
                      return new v(
                        'Property `' +
                          H +
                          '` of component `' +
                          V +
                          '` has invalid PropType notation inside arrayOf.'
                      );
                    var z = Y[W];
                    if (!Array.isArray(z)) {
                      var q = be(z);
                      return new v(
                        'Invalid ' +
                          K +
                          ' `' +
                          H +
                          '` of type ' +
                          ('`' +
                            q +
                            '` supplied to `' +
                            V +
                            '`, expected an array.')
                      );
                    }
                    for (var $ = 0; $ < z.length; $++) {
                      var Q = T(z, $, V, K, H + '[' + $ + ']', o);
                      if (Q instanceof Error) return Q;
                    }
                    return null;
                  }
                  return b(k);
                }
                function j() {
                  function T(k, Y, W, V, K) {
                    var H = k[Y];
                    if (!l(H)) {
                      var z = be(H);
                      return new v(
                        'Invalid ' +
                          V +
                          ' `' +
                          K +
                          '` of type ' +
                          ('`' +
                            z +
                            '` supplied to `' +
                            W +
                            '`, expected a single ReactElement.')
                      );
                    }
                    return null;
                  }
                  return b(T);
                }
                function D() {
                  function T(k, Y, W, V, K) {
                    var H = k[Y];
                    if (!n.isValidElementType(H)) {
                      var z = be(H);
                      return new v(
                        'Invalid ' +
                          V +
                          ' `' +
                          K +
                          '` of type ' +
                          ('`' +
                            z +
                            '` supplied to `' +
                            W +
                            '`, expected a single ReactElement type.')
                      );
                    }
                    return null;
                  }
                  return b(T);
                }
                function P(T) {
                  function k(Y, W, V, K, H) {
                    if (!(Y[W] instanceof T)) {
                      var z = T.name || f,
                        q = J(Y[W]);
                      return new v(
                        'Invalid ' +
                          K +
                          ' `' +
                          H +
                          '` of type ' +
                          ('`' + q + '` supplied to `' + V + '`, expected ') +
                          ('instance of `' + z + '`.')
                      );
                    }
                    return null;
                  }
                  return b(k);
                }
                function N(T) {
                  if (!Array.isArray(T))
                    return (
                      arguments.length > 1
                        ? s(
                            'Invalid arguments supplied to oneOf, expected an array, got ' +
                              arguments.length +
                              ' arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
                          )
                        : s(
                            'Invalid argument supplied to oneOf, expected an array.'
                          ),
                      c
                    );
                  function k(Y, W, V, K, H) {
                    for (var z = Y[W], q = 0; q < T.length; q++)
                      if (x(z, T[q])) return null;
                    var $ = JSON.stringify(T, function (Q, C) {
                      var xe = je(C);
                      return xe === 'symbol' ? String(C) : C;
                    });
                    return new v(
                      'Invalid ' +
                        K +
                        ' `' +
                        H +
                        '` of value `' +
                        String(z) +
                        '` ' +
                        ('supplied to `' + V + '`, expected one of ' + $ + '.')
                    );
                  }
                  return b(k);
                }
                function te(T) {
                  function k(Y, W, V, K, H) {
                    if (typeof T != 'function')
                      return new v(
                        'Property `' +
                          H +
                          '` of component `' +
                          V +
                          '` has invalid PropType notation inside objectOf.'
                      );
                    var z = Y[W],
                      q = be(z);
                    if (q !== 'object')
                      return new v(
                        'Invalid ' +
                          K +
                          ' `' +
                          H +
                          '` of type ' +
                          ('`' +
                            q +
                            '` supplied to `' +
                            V +
                            '`, expected an object.')
                      );
                    for (var $ in z)
                      if (i(z, $)) {
                        var Q = T(z, $, V, K, H + '.' + $, o);
                        if (Q instanceof Error) return Q;
                      }
                    return null;
                  }
                  return b(k);
                }
                function le(T) {
                  if (!Array.isArray(T))
                    return (
                      s(
                        'Invalid argument supplied to oneOfType, expected an instance of array.'
                      ),
                      c
                    );
                  for (var k = 0; k < T.length; k++) {
                    var Y = T[k];
                    if (typeof Y != 'function')
                      return (
                        s(
                          'Invalid argument supplied to oneOfType. Expected an array of check functions, but received ' +
                            Ft(Y) +
                            ' at index ' +
                            k +
                            '.'
                        ),
                        c
                      );
                  }
                  function W(V, K, H, z, q) {
                    for (var $ = [], Q = 0; Q < T.length; Q++) {
                      var C = T[Q],
                        xe = C(V, K, H, z, q, o);
                      if (xe == null) return null;
                      xe.data &&
                        i(xe.data, 'expectedType') &&
                        $.push(xe.data.expectedType);
                    }
                    var Ze =
                      $.length > 0
                        ? ', expected one of type [' + $.join(', ') + ']'
                        : '';
                    return new v(
                      'Invalid ' +
                        z +
                        ' `' +
                        q +
                        '` supplied to ' +
                        ('`' + H + '`' + Ze + '.')
                    );
                  }
                  return b(W);
                }
                function Me() {
                  function T(k, Y, W, V, K) {
                    return Te(k[Y])
                      ? null
                      : new v(
                          'Invalid ' +
                            V +
                            ' `' +
                            K +
                            '` supplied to ' +
                            ('`' + W + '`, expected a ReactNode.')
                        );
                  }
                  return b(T);
                }
                function Re(T, k, Y, W, V) {
                  return new v(
                    (T || 'React class') +
                      ': ' +
                      k +
                      ' type `' +
                      Y +
                      '.' +
                      W +
                      '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                      V +
                      '`.'
                  );
                }
                function fe(T) {
                  function k(Y, W, V, K, H) {
                    var z = Y[W],
                      q = be(z);
                    if (q !== 'object')
                      return new v(
                        'Invalid ' +
                          K +
                          ' `' +
                          H +
                          '` of type `' +
                          q +
                          '` ' +
                          ('supplied to `' + V + '`, expected `object`.')
                      );
                    for (var $ in T) {
                      var Q = T[$];
                      if (typeof Q != 'function') return Re(V, K, H, $, je(Q));
                      var C = Q(z, $, V, K, H + '.' + $, o);
                      if (C) return C;
                    }
                    return null;
                  }
                  return b(k);
                }
                function ae(T) {
                  function k(Y, W, V, K, H) {
                    var z = Y[W],
                      q = be(z);
                    if (q !== 'object')
                      return new v(
                        'Invalid ' +
                          K +
                          ' `' +
                          H +
                          '` of type `' +
                          q +
                          '` ' +
                          ('supplied to `' + V + '`, expected `object`.')
                      );
                    var $ = r({}, Y[W], T);
                    for (var Q in $) {
                      var C = T[Q];
                      if (i(T, Q) && typeof C != 'function')
                        return Re(V, K, H, Q, je(C));
                      if (!C)
                        return new v(
                          'Invalid ' +
                            K +
                            ' `' +
                            H +
                            '` key `' +
                            Q +
                            '` supplied to `' +
                            V +
                            '`.\nBad object: ' +
                            JSON.stringify(Y[W], null, '  ') +
                            `
Valid keys: ` +
                            JSON.stringify(Object.keys(T), null, '  ')
                        );
                      var xe = C(z, Q, V, K, H + '.' + Q, o);
                      if (xe) return xe;
                    }
                    return null;
                  }
                  return b(k);
                }
                function Te(T) {
                  switch (typeof T) {
                    case 'number':
                    case 'string':
                    case 'undefined':
                      return !0;
                    case 'boolean':
                      return !T;
                    case 'object':
                      if (Array.isArray(T)) return T.every(Te);
                      if (T === null || l(T)) return !0;
                      var k = h(T);
                      if (k) {
                        var Y = k.call(T),
                          W;
                        if (k !== T.entries) {
                          for (; !(W = Y.next()).done; )
                            if (!Te(W.value)) return !1;
                        } else
                          for (; !(W = Y.next()).done; ) {
                            var V = W.value;
                            if (V && !Te(V[1])) return !1;
                          }
                      } else return !1;
                      return !0;
                    default:
                      return !1;
                  }
                }
                function He(T, k) {
                  return T === 'symbol'
                    ? !0
                    : k
                    ? k['@@toStringTag'] === 'Symbol' ||
                      (typeof Symbol == 'function' && k instanceof Symbol)
                    : !1;
                }
                function be(T) {
                  var k = typeof T;
                  return Array.isArray(T)
                    ? 'array'
                    : T instanceof RegExp
                    ? 'object'
                    : He(k, T)
                    ? 'symbol'
                    : k;
                }
                function je(T) {
                  if (typeof T > 'u' || T === null) return '' + T;
                  var k = be(T);
                  if (k === 'object') {
                    if (T instanceof Date) return 'date';
                    if (T instanceof RegExp) return 'regexp';
                  }
                  return k;
                }
                function Ft(T) {
                  var k = je(T);
                  switch (k) {
                    case 'array':
                    case 'object':
                      return 'an ' + k;
                    case 'boolean':
                    case 'date':
                    case 'regexp':
                      return 'a ' + k;
                    default:
                      return k;
                  }
                }
                function J(T) {
                  return !T.constructor || !T.constructor.name
                    ? f
                    : T.constructor.name;
                }
                return (
                  (m.checkPropTypes = a),
                  (m.resetWarningCache = a.resetWarningCache),
                  (m.PropTypes = m),
                  m
                );
              };
            },
          })),
          (ku = Ae({
            '../../node_modules/prop-types/index.js'(e, t) {
              (n = zs()), (r = !0), (t.exports = Iu()(n.isElement, r));
              var n, r;
            },
          })),
          (Mu = Ae({
            '../../node_modules/react-innertext/index.js'(e, t) {
              var n = function (i) {
                  return Object.prototype.hasOwnProperty.call(i, 'props');
                },
                r = function (i, a) {
                  return i + o(a);
                },
                o = function (i) {
                  return i === null || typeof i == 'boolean' || typeof i > 'u'
                    ? ''
                    : typeof i == 'number'
                    ? i.toString()
                    : typeof i == 'string'
                    ? i
                    : Array.isArray(i)
                    ? i.reduce(r, '')
                    : n(i) &&
                      Object.prototype.hasOwnProperty.call(i.props, 'children')
                    ? o(i.props.children)
                    : '';
                };
              (o.default = o), (t.exports = o);
            },
          })),
          (Du = Ae({
            '../../node_modules/tween-functions/index.js'(e, t) {
              var n = {
                linear: function (r, o, i, a) {
                  var s = i - o;
                  return (s * r) / a + o;
                },
                easeInQuad: function (r, o, i, a) {
                  var s = i - o;
                  return s * (r /= a) * r + o;
                },
                easeOutQuad: function (r, o, i, a) {
                  var s = i - o;
                  return -s * (r /= a) * (r - 2) + o;
                },
                easeInOutQuad: function (r, o, i, a) {
                  var s = i - o;
                  return (r /= a / 2) < 1
                    ? (s / 2) * r * r + o
                    : (-s / 2) * (--r * (r - 2) - 1) + o;
                },
                easeInCubic: function (r, o, i, a) {
                  var s = i - o;
                  return s * (r /= a) * r * r + o;
                },
                easeOutCubic: function (r, o, i, a) {
                  var s = i - o;
                  return s * ((r = r / a - 1) * r * r + 1) + o;
                },
                easeInOutCubic: function (r, o, i, a) {
                  var s = i - o;
                  return (r /= a / 2) < 1
                    ? (s / 2) * r * r * r + o
                    : (s / 2) * ((r -= 2) * r * r + 2) + o;
                },
                easeInQuart: function (r, o, i, a) {
                  var s = i - o;
                  return s * (r /= a) * r * r * r + o;
                },
                easeOutQuart: function (r, o, i, a) {
                  var s = i - o;
                  return -s * ((r = r / a - 1) * r * r * r - 1) + o;
                },
                easeInOutQuart: function (r, o, i, a) {
                  var s = i - o;
                  return (r /= a / 2) < 1
                    ? (s / 2) * r * r * r * r + o
                    : (-s / 2) * ((r -= 2) * r * r * r - 2) + o;
                },
                easeInQuint: function (r, o, i, a) {
                  var s = i - o;
                  return s * (r /= a) * r * r * r * r + o;
                },
                easeOutQuint: function (r, o, i, a) {
                  var s = i - o;
                  return s * ((r = r / a - 1) * r * r * r * r + 1) + o;
                },
                easeInOutQuint: function (r, o, i, a) {
                  var s = i - o;
                  return (r /= a / 2) < 1
                    ? (s / 2) * r * r * r * r * r + o
                    : (s / 2) * ((r -= 2) * r * r * r * r + 2) + o;
                },
                easeInSine: function (r, o, i, a) {
                  var s = i - o;
                  return -s * Math.cos((r / a) * (Math.PI / 2)) + s + o;
                },
                easeOutSine: function (r, o, i, a) {
                  var s = i - o;
                  return s * Math.sin((r / a) * (Math.PI / 2)) + o;
                },
                easeInOutSine: function (r, o, i, a) {
                  var s = i - o;
                  return (-s / 2) * (Math.cos((Math.PI * r) / a) - 1) + o;
                },
                easeInExpo: function (r, o, i, a) {
                  var s = i - o;
                  return r == 0 ? o : s * Math.pow(2, 10 * (r / a - 1)) + o;
                },
                easeOutExpo: function (r, o, i, a) {
                  var s = i - o;
                  return r == a
                    ? o + s
                    : s * (-Math.pow(2, (-10 * r) / a) + 1) + o;
                },
                easeInOutExpo: function (r, o, i, a) {
                  var s = i - o;
                  return r === 0
                    ? o
                    : r === a
                    ? o + s
                    : (r /= a / 2) < 1
                    ? (s / 2) * Math.pow(2, 10 * (r - 1)) + o
                    : (s / 2) * (-Math.pow(2, -10 * --r) + 2) + o;
                },
                easeInCirc: function (r, o, i, a) {
                  var s = i - o;
                  return -s * (Math.sqrt(1 - (r /= a) * r) - 1) + o;
                },
                easeOutCirc: function (r, o, i, a) {
                  var s = i - o;
                  return s * Math.sqrt(1 - (r = r / a - 1) * r) + o;
                },
                easeInOutCirc: function (r, o, i, a) {
                  var s = i - o;
                  return (r /= a / 2) < 1
                    ? (-s / 2) * (Math.sqrt(1 - r * r) - 1) + o
                    : (s / 2) * (Math.sqrt(1 - (r -= 2) * r) + 1) + o;
                },
                easeInElastic: function (r, o, i, a) {
                  var s = i - o,
                    c,
                    l,
                    u;
                  return (
                    (u = 1.70158),
                    (l = 0),
                    (c = s),
                    r === 0
                      ? o
                      : (r /= a) === 1
                      ? o + s
                      : (l || (l = a * 0.3),
                        c < Math.abs(s)
                          ? ((c = s), (u = l / 4))
                          : (u = (l / (2 * Math.PI)) * Math.asin(s / c)),
                        -(
                          c *
                          Math.pow(2, 10 * (r -= 1)) *
                          Math.sin(((r * a - u) * (2 * Math.PI)) / l)
                        ) + o)
                  );
                },
                easeOutElastic: function (r, o, i, a) {
                  var s = i - o,
                    c,
                    l,
                    u;
                  return (
                    (u = 1.70158),
                    (l = 0),
                    (c = s),
                    r === 0
                      ? o
                      : (r /= a) === 1
                      ? o + s
                      : (l || (l = a * 0.3),
                        c < Math.abs(s)
                          ? ((c = s), (u = l / 4))
                          : (u = (l / (2 * Math.PI)) * Math.asin(s / c)),
                        c *
                          Math.pow(2, -10 * r) *
                          Math.sin(((r * a - u) * (2 * Math.PI)) / l) +
                          s +
                          o)
                  );
                },
                easeInOutElastic: function (r, o, i, a) {
                  var s = i - o,
                    c,
                    l,
                    u;
                  return (
                    (u = 1.70158),
                    (l = 0),
                    (c = s),
                    r === 0
                      ? o
                      : (r /= a / 2) === 2
                      ? o + s
                      : (l || (l = a * 0.44999999999999996),
                        c < Math.abs(s)
                          ? ((c = s), (u = l / 4))
                          : (u = (l / (2 * Math.PI)) * Math.asin(s / c)),
                        r < 1
                          ? -0.5 *
                              (c *
                                Math.pow(2, 10 * (r -= 1)) *
                                Math.sin(((r * a - u) * (2 * Math.PI)) / l)) +
                            o
                          : c *
                              Math.pow(2, -10 * (r -= 1)) *
                              Math.sin(((r * a - u) * (2 * Math.PI)) / l) *
                              0.5 +
                            s +
                            o)
                  );
                },
                easeInBack: function (r, o, i, a, s) {
                  var c = i - o;
                  return (
                    s === void 0 && (s = 1.70158),
                    c * (r /= a) * r * ((s + 1) * r - s) + o
                  );
                },
                easeOutBack: function (r, o, i, a, s) {
                  var c = i - o;
                  return (
                    s === void 0 && (s = 1.70158),
                    c * ((r = r / a - 1) * r * ((s + 1) * r + s) + 1) + o
                  );
                },
                easeInOutBack: function (r, o, i, a, s) {
                  var c = i - o;
                  return (
                    s === void 0 && (s = 1.70158),
                    (r /= a / 2) < 1
                      ? (c / 2) * (r * r * (((s *= 1.525) + 1) * r - s)) + o
                      : (c / 2) *
                          ((r -= 2) * r * (((s *= 1.525) + 1) * r + s) + 2) +
                        o
                  );
                },
                easeInBounce: function (r, o, i, a) {
                  var s = i - o,
                    c;
                  return (c = n.easeOutBounce(a - r, 0, s, a)), s - c + o;
                },
                easeOutBounce: function (r, o, i, a) {
                  var s = i - o;
                  return (r /= a) < 0.36363636363636365
                    ? s * (7.5625 * r * r) + o
                    : r < 0.7272727272727273
                    ? s * (7.5625 * (r -= 0.5454545454545454) * r + 0.75) + o
                    : r < 0.9090909090909091
                    ? s * (7.5625 * (r -= 0.8181818181818182) * r + 0.9375) + o
                    : s * (7.5625 * (r -= 0.9545454545454546) * r + 0.984375) +
                      o;
                },
                easeInOutBounce: function (r, o, i, a) {
                  var s = i - o,
                    c;
                  return r < a / 2
                    ? ((c = n.easeInBounce(r * 2, 0, s, a)), c * 0.5 + o)
                    : ((c = n.easeOutBounce(r * 2 - a, 0, s, a)),
                      c * 0.5 + s * 0.5 + o);
                },
              };
              t.exports = n;
            },
          })),
          (Lu = Ae({
            '../../node_modules/debounce/index.js'(e, t) {
              function n(r, o, i) {
                var a, s, c, l, u;
                o == null && (o = 100);
                function d() {
                  var h = Date.now() - l;
                  h < o && h >= 0
                    ? (a = setTimeout(d, o - h))
                    : ((a = null), i || ((u = r.apply(c, s)), (c = s = null)));
                }
                var p = function () {
                  (c = this), (s = arguments), (l = Date.now());
                  var h = i && !a;
                  return (
                    a || (a = setTimeout(d, o)),
                    h && ((u = r.apply(c, s)), (c = s = null)),
                    u
                  );
                };
                return (
                  (p.clear = function () {
                    a && (clearTimeout(a), (a = null));
                  }),
                  (p.flush = function () {
                    a &&
                      ((u = r.apply(c, s)),
                      (c = s = null),
                      clearTimeout(a),
                      (a = null));
                  }),
                  p
                );
              }
              (n.debounce = n), (t.exports = n);
            },
          }));
        (Fu = Bs({
          '../../node_modules/framer-motion/node_modules/@emotion/memoize/dist/memoize.browser.esm.js'() {
            Hs = Nu;
          },
        })),
          (Ys = {});
        Tu(Ys, { default: () => Gs });
        ju = Bs({
          '../../node_modules/framer-motion/node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js'() {
            Fu(),
              (Wi =
                /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/),
              (Hi = Hs(function (e) {
                return (
                  Wi.test(e) ||
                  (e.charCodeAt(0) === 111 &&
                    e.charCodeAt(1) === 110 &&
                    e.charCodeAt(2) < 91)
                );
              })),
              (Gs = Hi);
          },
        });
        (Vu = qs('function')),
          (Bu = (e) => e === null),
          (Yi = (e) =>
            Object.prototype.toString.call(e).slice(8, -1) === 'RegExp'),
          (Gi = (e) => !_u(e) && !Bu(e) && (Vu(e) || typeof e == 'object')),
          (_u = qs('undefined'));
        (Yu = [
          'Array',
          'ArrayBuffer',
          'AsyncFunction',
          'AsyncGenerator',
          'AsyncGeneratorFunction',
          'Date',
          'Error',
          'Function',
          'Generator',
          'GeneratorFunction',
          'HTMLElement',
          'Map',
          'Object',
          'Promise',
          'RegExp',
          'Set',
          'WeakMap',
          'WeakSet',
        ]),
          (Gu = [
            'bigint',
            'boolean',
            'null',
            'number',
            'string',
            'symbol',
            'undefined',
          ]);
        Ku = ['innerHTML', 'ownerDocument', 'style', 'attributes', 'nodeValue'];
        A.array = Array.isArray;
        A.arrayOf = (e, t) =>
          !A.array(e) && !A.function(t) ? !1 : e.every((n) => t(n));
        A.asyncGeneratorFunction = (e) => Tr(e) === 'AsyncGeneratorFunction';
        A.asyncFunction = Ue('AsyncFunction');
        A.bigint = Jt('bigint');
        A.boolean = (e) => e === !0 || e === !1;
        A.date = Ue('Date');
        A.defined = (e) => !A.undefined(e);
        A.domElement = (e) =>
          A.object(e) &&
          !A.plainObject(e) &&
          e.nodeType === 1 &&
          A.string(e.nodeName) &&
          Ku.every((t) => t in e);
        A.empty = (e) =>
          (A.string(e) && e.length === 0) ||
          (A.array(e) && e.length === 0) ||
          (A.object(e) &&
            !A.map(e) &&
            !A.set(e) &&
            Object.keys(e).length === 0) ||
          (A.set(e) && e.size === 0) ||
          (A.map(e) && e.size === 0);
        A.error = Ue('Error');
        A.function = Jt('function');
        A.generator = (e) =>
          A.iterable(e) && A.function(e.next) && A.function(e.throw);
        A.generatorFunction = Ue('GeneratorFunction');
        A.instanceOf = (e, t) =>
          !e || !t ? !1 : Object.getPrototypeOf(e) === t.prototype;
        A.iterable = (e) =>
          !A.nullOrUndefined(e) && A.function(e[Symbol.iterator]);
        A.map = Ue('Map');
        A.nan = (e) => Number.isNaN(e);
        A.null = (e) => e === null;
        A.nullOrUndefined = (e) => A.null(e) || A.undefined(e);
        A.number = (e) => Jt('number')(e) && !A.nan(e);
        A.numericString = (e) =>
          A.string(e) && e.length > 0 && !Number.isNaN(Number(e));
        A.object = (e) =>
          !A.nullOrUndefined(e) && (A.function(e) || typeof e == 'object');
        A.oneOf = (e, t) => (A.array(e) ? e.indexOf(t) > -1 : !1);
        A.plainFunction = Ue('Function');
        A.plainObject = (e) => {
          if (Tr(e) !== 'Object') return !1;
          let t = Object.getPrototypeOf(e);
          return t === null || t === Object.getPrototypeOf({});
        };
        A.primitive = (e) => A.null(e) || $u(typeof e);
        A.promise = Ue('Promise');
        A.propertyOf = (e, t, n) => {
          if (!A.object(e) || !t) return !1;
          let r = e[t];
          return A.function(n) ? n(r) : A.defined(r);
        };
        A.regexp = Ue('RegExp');
        A.set = Ue('Set');
        A.string = Jt('string');
        A.symbol = Jt('symbol');
        A.undefined = Jt('undefined');
        A.weakMap = Ue('WeakMap');
        A.weakSet = Ue('WeakSet');
        I = A;
        (Ju = ct(Pu(), 1)), (Ks = ct(Ou(), 1));
        (Hn = ct(_o(), 1)),
          (zr = ct(_o(), 1)),
          (S = ct(ku())),
          (On =
            typeof window < 'u' &&
            typeof document < 'u' &&
            typeof navigator < 'u'),
          (nd = (function () {
            for (
              var e = ['Edge', 'Trident', 'Firefox'], t = 0;
              t < e.length;
              t += 1
            )
              if (On && navigator.userAgent.indexOf(e[t]) >= 0) return 1;
            return 0;
          })());
        (id = On && window.Promise), (ad = id ? rd : od);
        (Zi = On && !!(window.MSInputMethodContext && document.documentMode)),
          (Ji = On && /MSIE 10/.test(navigator.userAgent));
        (cd = function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }),
          (ud = (function () {
            function e(t, n) {
              for (var r = 0; r < n.length; r++) {
                var o = n[r];
                (o.enumerable = o.enumerable || !1),
                  (o.configurable = !0),
                  'value' in o && (o.writable = !0),
                  Object.defineProperty(t, o.key, o);
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })()),
          (Kt = function (e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }),
          (Fe =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            });
        Sd = On && /Firefox/i.test(navigator.userAgent);
        (dl = [
          'auto-start',
          'auto',
          'auto-end',
          'top-start',
          'top',
          'top-end',
          'right-start',
          'right',
          'right-end',
          'bottom-end',
          'bottom',
          'bottom-start',
          'left-end',
          'left',
          'left-start',
        ]),
          (Ur = dl.slice(3));
        Wr = {
          FLIP: 'flip',
          CLOCKWISE: 'clockwise',
          COUNTERCLOCKWISE: 'counterclockwise',
        };
        (jd = {
          shift: { order: 100, enabled: !0, fn: Ld },
          offset: { order: 200, enabled: !0, fn: Md, offset: 0 },
          preventOverflow: {
            order: 300,
            enabled: !0,
            fn: Dd,
            priority: ['left', 'right', 'top', 'bottom'],
            padding: 5,
            boundariesElement: 'scrollParent',
          },
          keepTogether: { order: 400, enabled: !0, fn: Rd },
          arrow: { order: 500, enabled: !0, fn: Od, element: '[x-arrow]' },
          flip: {
            order: 600,
            enabled: !0,
            fn: Ad,
            behavior: 'flip',
            padding: 5,
            boundariesElement: 'viewport',
            flipVariations: !1,
            flipVariationsByContent: !1,
          },
          inner: { order: 700, enabled: !1, fn: Fd },
          hide: { order: 800, enabled: !0, fn: Nd },
          computeStyle: {
            order: 850,
            enabled: !0,
            fn: Pd,
            gpuAcceleration: !0,
            x: 'bottom',
            y: 'right',
          },
          applyStyle: {
            order: 900,
            enabled: !0,
            fn: wd,
            onLoad: Ed,
            gpuAcceleration: void 0,
          },
        }),
          (Vd = {
            placement: 'bottom',
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function () {},
            onUpdate: function () {},
            modifiers: jd,
          }),
          (Sr = (function () {
            function e(t, n) {
              var r = this,
                o =
                  arguments.length > 2 && arguments[2] !== void 0
                    ? arguments[2]
                    : {};
              cd(this, e),
                (this.scheduleUpdate = function () {
                  return requestAnimationFrame(r.update);
                }),
                (this.update = ad(this.update.bind(this))),
                (this.options = Fe({}, e.Defaults, o)),
                (this.state = {
                  isDestroyed: !1,
                  isCreated: !1,
                  scrollParents: [],
                }),
                (this.reference = t && t.jquery ? t[0] : t),
                (this.popper = n && n.jquery ? n[0] : n),
                (this.options.modifiers = {}),
                Object.keys(Fe({}, e.Defaults.modifiers, o.modifiers)).forEach(
                  function (a) {
                    r.options.modifiers[a] = Fe(
                      {},
                      e.Defaults.modifiers[a] || {},
                      o.modifiers ? o.modifiers[a] : {}
                    );
                  }
                ),
                (this.modifiers = Object.keys(this.options.modifiers)
                  .map(function (a) {
                    return Fe({ name: a }, r.options.modifiers[a]);
                  })
                  .sort(function (a, s) {
                    return a.order - s.order;
                  })),
                this.modifiers.forEach(function (a) {
                  a.enabled &&
                    Qs(a.onLoad) &&
                    a.onLoad(r.reference, r.popper, r.options, a, r.state);
                }),
                this.update();
              var i = this.options.eventsEnabled;
              i && this.enableEventListeners(), (this.state.eventsEnabled = i);
            }
            return (
              ud(e, [
                {
                  key: 'update',
                  value: function () {
                    return fd.call(this);
                  },
                },
                {
                  key: 'destroy',
                  value: function () {
                    return md.call(this);
                  },
                },
                {
                  key: 'enableEventListeners',
                  value: function () {
                    return yd.call(this);
                  },
                },
                {
                  key: 'disableEventListeners',
                  value: function () {
                    return bd.call(this);
                  },
                },
              ]),
              e
            );
          })());
        Sr.Utils = window.PopperUtils;
        Sr.placements = dl;
        Sr.Defaults = Vd;
        (ra = Sr),
          (yo = ct(_o())),
          (Bd = [
            'innerHTML',
            'ownerDocument',
            'style',
            'attributes',
            'nodeValue',
          ]),
          (_d = [
            'Array',
            'ArrayBuffer',
            'AsyncFunction',
            'AsyncGenerator',
            'AsyncGeneratorFunction',
            'Date',
            'Error',
            'Function',
            'Generator',
            'GeneratorFunction',
            'HTMLElement',
            'Map',
            'Object',
            'Promise',
            'RegExp',
            'Set',
            'WeakMap',
            'WeakSet',
          ]),
          (zd = [
            'bigint',
            'boolean',
            'null',
            'number',
            'string',
            'symbol',
            'undefined',
          ]);
        R.array = Array.isArray;
        R.arrayOf = function (e, t) {
          return !R.array(e) && !R.function(t)
            ? !1
            : e.every(function (n) {
                return t(n);
              });
        };
        R.asyncGeneratorFunction = function (e) {
          return Pr(e) === 'AsyncGeneratorFunction';
        };
        R.asyncFunction = We('AsyncFunction');
        R.bigint = tn('bigint');
        R.boolean = function (e) {
          return e === !0 || e === !1;
        };
        R.date = We('Date');
        R.defined = function (e) {
          return !R.undefined(e);
        };
        R.domElement = function (e) {
          return (
            R.object(e) &&
            !R.plainObject(e) &&
            e.nodeType === 1 &&
            R.string(e.nodeName) &&
            Bd.every(function (t) {
              return t in e;
            })
          );
        };
        R.empty = function (e) {
          return (
            (R.string(e) && e.length === 0) ||
            (R.array(e) && e.length === 0) ||
            (R.object(e) &&
              !R.map(e) &&
              !R.set(e) &&
              Object.keys(e).length === 0) ||
            (R.set(e) && e.size === 0) ||
            (R.map(e) && e.size === 0)
          );
        };
        R.error = We('Error');
        R.function = tn('function');
        R.generator = function (e) {
          return R.iterable(e) && R.function(e.next) && R.function(e.throw);
        };
        R.generatorFunction = We('GeneratorFunction');
        R.instanceOf = function (e, t) {
          return !e || !t ? !1 : Object.getPrototypeOf(e) === t.prototype;
        };
        R.iterable = function (e) {
          return !R.nullOrUndefined(e) && R.function(e[Symbol.iterator]);
        };
        R.map = We('Map');
        R.nan = function (e) {
          return Number.isNaN(e);
        };
        R.null = function (e) {
          return e === null;
        };
        R.nullOrUndefined = function (e) {
          return R.null(e) || R.undefined(e);
        };
        R.number = function (e) {
          return tn('number')(e) && !R.nan(e);
        };
        R.numericString = function (e) {
          return R.string(e) && e.length > 0 && !Number.isNaN(Number(e));
        };
        R.object = function (e) {
          return (
            !R.nullOrUndefined(e) && (R.function(e) || typeof e == 'object')
          );
        };
        R.oneOf = function (e, t) {
          return R.array(e) ? e.indexOf(t) > -1 : !1;
        };
        R.plainFunction = We('Function');
        R.plainObject = function (e) {
          if (Pr(e) !== 'Object') return !1;
          var t = Object.getPrototypeOf(e);
          return t === null || t === Object.getPrototypeOf({});
        };
        R.primitive = function (e) {
          return R.null(e) || Wd(typeof e);
        };
        R.promise = We('Promise');
        R.propertyOf = function (e, t, n) {
          if (!R.object(e) || !t) return !1;
          var r = e[t];
          return R.function(n) ? n(r) : R.defined(r);
        };
        R.regexp = We('RegExp');
        R.set = We('Set');
        R.string = tn('string');
        R.symbol = tn('symbol');
        R.undefined = tn('undefined');
        R.weakMap = We('WeakMap');
        R.weakSet = We('WeakSet');
        L = R;
        (Hd = pl('function')),
          (Yd = function (e) {
            return e === null;
          }),
          (oa = function (e) {
            return Object.prototype.toString.call(e).slice(8, -1) === 'RegExp';
          }),
          (ia = function (e) {
            return !Gd(e) && !Yd(e) && (Hd(e) || typeof e == 'object');
          }),
          (Gd = pl('undefined')),
          (vo = function (e) {
            var t = typeof Symbol == 'function' && Symbol.iterator,
              n = t && e[t],
              r = 0;
            if (n) return n.call(e);
            if (e && typeof e.length == 'number')
              return {
                next: function () {
                  return (
                    e && r >= e.length && (e = void 0),
                    { value: e && e[r++], done: !e }
                  );
                },
              };
            throw new TypeError(
              t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
            );
          });
        (ip = { flip: { padding: 20 }, preventOverflow: { padding: 10 } }),
          (ap =
            'The typeValidator argument must be a function with the signature function(props, propName, componentName).'),
          (sp =
            'The error message is optional, but must be a string if provided.');
        (X = {
          INIT: 'init',
          IDLE: 'idle',
          OPENING: 'opening',
          OPEN: 'open',
          CLOSING: 'closing',
          ERROR: 'error',
        }),
          (cn = ut.createPortal !== void 0);
        gl = (function (e) {
          kn(n, e);
          var t = Mn(n);
          function n() {
            return Rn(this, n), t.apply(this, arguments);
          }
          return (
            In(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  Ge() &&
                    (this.node || this.appendNode(), cn || this.renderPortal());
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  Ge() && (cn || this.renderPortal());
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  !Ge() ||
                    !this.node ||
                    (cn || ut.unmountComponentAtNode(this.node),
                    this.node &&
                      this.node.parentNode === document.body &&
                      (document.body.removeChild(this.node),
                      (this.node = void 0)));
                },
              },
              {
                key: 'appendNode',
                value: function () {
                  var r = this.props,
                    o = r.id,
                    i = r.zIndex;
                  this.node ||
                    ((this.node = document.createElement('div')),
                    o && (this.node.id = o),
                    i && (this.node.style.zIndex = i),
                    document.body.appendChild(this.node));
                },
              },
              {
                key: 'renderPortal',
                value: function () {
                  if (!Ge()) return null;
                  var r = this.props,
                    o = r.children,
                    i = r.setRef;
                  if ((this.node || this.appendNode(), cn))
                    return ut.createPortal(o, this.node);
                  var a = ut.unstable_renderSubtreeIntoContainer(
                    this,
                    o.length > 1 ? g.createElement('div', null, o) : o[0],
                    this.node
                  );
                  return i(a), null;
                },
              },
              {
                key: 'renderReact16',
                value: function () {
                  var r = this.props,
                    o = r.hasChildren,
                    i = r.placement,
                    a = r.target;
                  return o
                    ? this.renderPortal()
                    : a || i === 'center'
                    ? this.renderPortal()
                    : null;
                },
              },
              {
                key: 'render',
                value: function () {
                  return cn ? this.renderReact16() : null;
                },
              },
            ]),
            n
          );
        })(g.Component);
        Ee(gl, 'propTypes', {
          children: S.default.oneOfType([S.default.element, S.default.array]),
          hasChildren: S.default.bool,
          id: S.default.oneOfType([S.default.string, S.default.number]),
          placement: S.default.string,
          setRef: S.default.func.isRequired,
          target: S.default.oneOfType([S.default.object, S.default.string]),
          zIndex: S.default.number,
        });
        yl = (function (e) {
          kn(n, e);
          var t = Mn(n);
          function n() {
            return Rn(this, n), t.apply(this, arguments);
          }
          return (
            In(n, [
              {
                key: 'parentStyle',
                get: function () {
                  var r = this.props,
                    o = r.placement,
                    i = r.styles,
                    a = i.arrow.length,
                    s = {
                      pointerEvents: 'none',
                      position: 'absolute',
                      width: '100%',
                    };
                  return (
                    o.startsWith('top')
                      ? ((s.bottom = 0),
                        (s.left = 0),
                        (s.right = 0),
                        (s.height = a))
                      : o.startsWith('bottom')
                      ? ((s.left = 0),
                        (s.right = 0),
                        (s.top = 0),
                        (s.height = a))
                      : o.startsWith('left')
                      ? ((s.right = 0), (s.top = 0), (s.bottom = 0))
                      : o.startsWith('right') && ((s.left = 0), (s.top = 0)),
                    s
                  );
                },
              },
              {
                key: 'render',
                value: function () {
                  var r = this.props,
                    o = r.placement,
                    i = r.setArrowRef,
                    a = r.styles,
                    s = a.arrow,
                    c = s.color,
                    l = s.display,
                    u = s.length,
                    d = s.margin,
                    p = s.position,
                    h = s.spread,
                    f = { display: l, position: p },
                    m,
                    x = h,
                    v = u;
                  return (
                    o.startsWith('top')
                      ? ((m = '0,0 '
                          .concat(x / 2, ',')
                          .concat(v, ' ')
                          .concat(x, ',0')),
                        (f.bottom = 0),
                        (f.marginLeft = d),
                        (f.marginRight = d))
                      : o.startsWith('bottom')
                      ? ((m = ''
                          .concat(x, ',')
                          .concat(v, ' ')
                          .concat(x / 2, ',0 0,')
                          .concat(v)),
                        (f.top = 0),
                        (f.marginLeft = d),
                        (f.marginRight = d))
                      : o.startsWith('left')
                      ? ((v = h),
                        (x = u),
                        (m = '0,0 '
                          .concat(x, ',')
                          .concat(v / 2, ' 0,')
                          .concat(v)),
                        (f.right = 0),
                        (f.marginTop = d),
                        (f.marginBottom = d))
                      : o.startsWith('right') &&
                        ((v = h),
                        (x = u),
                        (m = ''
                          .concat(x, ',')
                          .concat(v, ' ')
                          .concat(x, ',0 0,')
                          .concat(v / 2)),
                        (f.left = 0),
                        (f.marginTop = d),
                        (f.marginBottom = d)),
                    g.createElement(
                      'div',
                      {
                        className: '__floater__arrow',
                        style: this.parentStyle,
                      },
                      g.createElement(
                        'span',
                        { ref: i, style: f },
                        g.createElement(
                          'svg',
                          {
                            width: x,
                            height: v,
                            version: '1.1',
                            xmlns: 'http://www.w3.org/2000/svg',
                          },
                          g.createElement('polygon', { points: m, fill: c })
                        )
                      )
                    )
                  );
                },
              },
            ]),
            n
          );
        })(g.Component);
        Ee(yl, 'propTypes', {
          placement: S.default.string.isRequired,
          setArrowRef: S.default.func.isRequired,
          styles: S.default.object.isRequired,
        });
        mp = ['color', 'height', 'width'];
        vl.propTypes = {
          handleClick: S.default.func.isRequired,
          styles: S.default.object.isRequired,
        };
        bl.propTypes = {
          content: S.default.node.isRequired,
          footer: S.default.node,
          handleClick: S.default.func.isRequired,
          open: S.default.bool,
          positionWrapper: S.default.bool.isRequired,
          showCloseButton: S.default.bool.isRequired,
          styles: S.default.object.isRequired,
          title: S.default.node,
        };
        xl = (function (e) {
          kn(n, e);
          var t = Mn(n);
          function n() {
            return Rn(this, n), t.apply(this, arguments);
          }
          return (
            In(n, [
              {
                key: 'style',
                get: function () {
                  var r = this.props,
                    o = r.disableAnimation,
                    i = r.component,
                    a = r.placement,
                    s = r.hideArrow,
                    c = r.status,
                    l = r.styles,
                    u = l.arrow.length,
                    d = l.floater,
                    p = l.floaterCentered,
                    h = l.floaterClosing,
                    f = l.floaterOpening,
                    m = l.floaterWithAnimation,
                    x = l.floaterWithComponent,
                    v = {};
                  return (
                    s ||
                      (a.startsWith('top')
                        ? (v.padding = '0 0 '.concat(u, 'px'))
                        : a.startsWith('bottom')
                        ? (v.padding = ''.concat(u, 'px 0 0'))
                        : a.startsWith('left')
                        ? (v.padding = '0 '.concat(u, 'px 0 0'))
                        : a.startsWith('right') &&
                          (v.padding = '0 0 0 '.concat(u, 'px'))),
                    [X.OPENING, X.OPEN].indexOf(c) !== -1 &&
                      (v = re(re({}, v), f)),
                    c === X.CLOSING && (v = re(re({}, v), h)),
                    c === X.OPEN && !o && (v = re(re({}, v), m)),
                    a === 'center' && (v = re(re({}, v), p)),
                    i && (v = re(re({}, v), x)),
                    re(re({}, d), v)
                  );
                },
              },
              {
                key: 'render',
                value: function () {
                  var r = this.props,
                    o = r.component,
                    i = r.handleClick,
                    a = r.hideArrow,
                    s = r.setFloaterRef,
                    c = r.status,
                    l = {},
                    u = ['__floater'];
                  return (
                    o
                      ? g.isValidElement(o)
                        ? (l.content = g.cloneElement(o, { closeFn: i }))
                        : (l.content = o({ closeFn: i }))
                      : (l.content = g.createElement(bl, this.props)),
                    c === X.OPEN && u.push('__floater__open'),
                    a || (l.arrow = g.createElement(yl, this.props)),
                    g.createElement(
                      'div',
                      { ref: s, className: u.join(' '), style: this.style },
                      g.createElement(
                        'div',
                        { className: '__floater__body' },
                        l.content,
                        l.arrow
                      )
                    )
                  );
                },
              },
            ]),
            n
          );
        })(g.Component);
        Ee(xl, 'propTypes', {
          component: S.default.oneOfType([S.default.func, S.default.element]),
          content: S.default.node,
          disableAnimation: S.default.bool.isRequired,
          footer: S.default.node,
          handleClick: S.default.func.isRequired,
          hideArrow: S.default.bool.isRequired,
          open: S.default.bool,
          placement: S.default.string.isRequired,
          positionWrapper: S.default.bool.isRequired,
          setArrowRef: S.default.func.isRequired,
          setFloaterRef: S.default.func.isRequired,
          showCloseButton: S.default.bool,
          status: S.default.string.isRequired,
          styles: S.default.object.isRequired,
          title: S.default.node,
        });
        wl = (function (e) {
          kn(n, e);
          var t = Mn(n);
          function n() {
            return Rn(this, n), t.apply(this, arguments);
          }
          return (
            In(n, [
              {
                key: 'render',
                value: function () {
                  var r = this.props,
                    o = r.children,
                    i = r.handleClick,
                    a = r.handleMouseEnter,
                    s = r.handleMouseLeave,
                    c = r.setChildRef,
                    l = r.setWrapperRef,
                    u = r.style,
                    d = r.styles,
                    p;
                  if (o)
                    if (g.Children.count(o) === 1)
                      if (!g.isValidElement(o))
                        p = g.createElement('span', null, o);
                      else {
                        var h = L.function(o.type) ? 'innerRef' : 'ref';
                        p = g.cloneElement(g.Children.only(o), Ee({}, h, c));
                      }
                    else p = o;
                  return p
                    ? g.createElement(
                        'span',
                        {
                          ref: l,
                          style: re(re({}, d), u),
                          onClick: i,
                          onMouseEnter: a,
                          onMouseLeave: s,
                        },
                        p
                      )
                    : null;
                },
              },
            ]),
            n
          );
        })(g.Component);
        Ee(wl, 'propTypes', {
          children: S.default.node,
          handleClick: S.default.func.isRequired,
          handleMouseEnter: S.default.func.isRequired,
          handleMouseLeave: S.default.func.isRequired,
          setChildRef: S.default.func.isRequired,
          setWrapperRef: S.default.func.isRequired,
          style: S.default.object,
          styles: S.default.object.isRequired,
        });
        gp = { zIndex: 100 };
        (vp = ['arrow', 'flip', 'offset']),
          (bp = ['position', 'top', 'right', 'bottom', 'left']),
          ($o = (function (e) {
            kn(n, e);
            var t = Mn(n);
            function n(r) {
              var o;
              return (
                Rn(this, n),
                (o = t.call(this, r)),
                Ee(rt(o), 'setArrowRef', function (i) {
                  o.arrowRef = i;
                }),
                Ee(rt(o), 'setChildRef', function (i) {
                  o.childRef = i;
                }),
                Ee(rt(o), 'setFloaterRef', function (i) {
                  o.floaterRef = i;
                }),
                Ee(rt(o), 'setWrapperRef', function (i) {
                  o.wrapperRef = i;
                }),
                Ee(rt(o), 'handleTransitionEnd', function () {
                  var i = o.state.status,
                    a = o.props.callback;
                  o.wrapperPopper && o.wrapperPopper.instance.update(),
                    o.setState(
                      { status: i === X.OPENING ? X.OPEN : X.IDLE },
                      function () {
                        var s = o.state.status;
                        a(s === X.OPEN ? 'open' : 'close', o.props);
                      }
                    );
                }),
                Ee(rt(o), 'handleClick', function () {
                  var i = o.props,
                    a = i.event,
                    s = i.open;
                  if (!L.boolean(s)) {
                    var c = o.state,
                      l = c.positionWrapper,
                      u = c.status;
                    (o.event === 'click' || (o.event === 'hover' && l)) &&
                      (Yn({
                        title: 'click',
                        data: [
                          {
                            event: a,
                            status: u === X.OPEN ? 'closing' : 'opening',
                          },
                        ],
                        debug: o.debug,
                      }),
                      o.toggle());
                  }
                }),
                Ee(rt(o), 'handleMouseEnter', function () {
                  var i = o.props,
                    a = i.event,
                    s = i.open;
                  if (!(L.boolean(s) || Hr())) {
                    var c = o.state.status;
                    o.event === 'hover' &&
                      c === X.IDLE &&
                      (Yn({
                        title: 'mouseEnter',
                        data: [{ key: 'originalEvent', value: a }],
                        debug: o.debug,
                      }),
                      clearTimeout(o.eventDelayTimeout),
                      o.toggle());
                  }
                }),
                Ee(rt(o), 'handleMouseLeave', function () {
                  var i = o.props,
                    a = i.event,
                    s = i.eventDelay,
                    c = i.open;
                  if (!(L.boolean(c) || Hr())) {
                    var l = o.state,
                      u = l.status,
                      d = l.positionWrapper;
                    o.event === 'hover' &&
                      (Yn({
                        title: 'mouseLeave',
                        data: [{ key: 'originalEvent', value: a }],
                        debug: o.debug,
                      }),
                      s
                        ? [X.OPENING, X.OPEN].indexOf(u) !== -1 &&
                          !d &&
                          !o.eventDelayTimeout &&
                          (o.eventDelayTimeout = setTimeout(function () {
                            delete o.eventDelayTimeout, o.toggle();
                          }, s * 1e3))
                        : o.toggle(X.IDLE));
                  }
                }),
                (o.state = {
                  currentPlacement: r.placement,
                  needsUpdate: !1,
                  positionWrapper: r.wrapperOptions.position && !!r.target,
                  status: X.INIT,
                  statusWrapper: X.INIT,
                }),
                (o._isMounted = !1),
                (o.hasMounted = !1),
                Ge() &&
                  window.addEventListener('load', function () {
                    o.popper && o.popper.instance.update(),
                      o.wrapperPopper && o.wrapperPopper.instance.update();
                  }),
                o
              );
            }
            return (
              In(n, [
                {
                  key: 'componentDidMount',
                  value: function () {
                    if (Ge()) {
                      var r = this.state.positionWrapper,
                        o = this.props,
                        i = o.children,
                        a = o.open,
                        s = o.target;
                      (this._isMounted = !0),
                        Yn({
                          title: 'init',
                          data: {
                            hasChildren: !!i,
                            hasTarget: !!s,
                            isControlled: L.boolean(a),
                            positionWrapper: r,
                            target: this.target,
                            floater: this.floaterRef,
                          },
                          debug: this.debug,
                        }),
                        this.hasMounted ||
                          (this.initPopper(), (this.hasMounted = !0)),
                        !i && s && L.boolean(a);
                    }
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function (r, o) {
                    if (Ge()) {
                      var i = this.props,
                        a = i.autoOpen,
                        s = i.open,
                        c = i.target,
                        l = i.wrapperOptions,
                        u = ep(o, this.state),
                        d = u.changedFrom,
                        p = u.changed;
                      if (r.open !== s) {
                        var h;
                        L.boolean(s) && (h = s ? X.OPENING : X.CLOSING),
                          this.toggle(h);
                      }
                      (r.wrapperOptions.position !== l.position ||
                        r.target !== c) &&
                        this.changeWrapperPosition(this.props),
                        p('status', X.IDLE) && s
                          ? this.toggle(X.OPEN)
                          : d('status', X.INIT, X.IDLE) &&
                            a &&
                            this.toggle(X.OPEN),
                        this.popper &&
                          p('status', X.OPENING) &&
                          this.popper.instance.update(),
                        this.floaterRef &&
                          (p('status', X.OPENING) || p('status', X.CLOSING)) &&
                          fp(
                            this.floaterRef,
                            'transitionend',
                            this.handleTransitionEnd
                          ),
                        p('needsUpdate', !0) && this.rebuildPopper();
                    }
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    Ge() &&
                      ((this._isMounted = !1),
                      this.popper && this.popper.instance.destroy(),
                      this.wrapperPopper &&
                        this.wrapperPopper.instance.destroy());
                  },
                },
                {
                  key: 'initPopper',
                  value: function () {
                    var r = this,
                      o =
                        arguments.length > 0 && arguments[0] !== void 0
                          ? arguments[0]
                          : this.target,
                      i = this.state.positionWrapper,
                      a = this.props,
                      s = a.disableFlip,
                      c = a.getPopper,
                      l = a.hideArrow,
                      u = a.offset,
                      d = a.placement,
                      p = a.wrapperOptions,
                      h =
                        d === 'top' || d === 'bottom'
                          ? 'flip'
                          : [
                              'right',
                              'bottom-end',
                              'top-end',
                              'left',
                              'top-start',
                              'bottom-start',
                            ];
                    if (d === 'center') this.setState({ status: X.IDLE });
                    else if (o && this.floaterRef) {
                      var f = this.options,
                        m = f.arrow,
                        x = f.flip,
                        v = f.offset,
                        b = fl(f, vp);
                      new ra(o, this.floaterRef, {
                        placement: d,
                        modifiers: re(
                          {
                            arrow: re(
                              { enabled: !l, element: this.arrowRef },
                              m
                            ),
                            flip: re({ enabled: !s, behavior: h }, x),
                            offset: re({ offset: '0, '.concat(u, 'px') }, v),
                          },
                          b
                        ),
                        onCreate: function (w) {
                          var E;
                          if (
                            ((r.popper = w),
                            !(
                              (E = r.floaterRef) !== null &&
                              E !== void 0 &&
                              E.isConnected
                            ))
                          ) {
                            r.setState({ needsUpdate: !0 });
                            return;
                          }
                          c(w, 'floater'),
                            r._isMounted &&
                              r.setState({
                                currentPlacement: w.placement,
                                status: X.IDLE,
                              }),
                            d !== w.placement &&
                              setTimeout(function () {
                                w.instance.update();
                              }, 1);
                        },
                        onUpdate: function (w) {
                          r.popper = w;
                          var E = r.state.currentPlacement;
                          r._isMounted &&
                            w.placement !== E &&
                            r.setState({ currentPlacement: w.placement });
                        },
                      });
                    }
                    if (i) {
                      var y = L.undefined(p.offset) ? 0 : p.offset;
                      new ra(this.target, this.wrapperRef, {
                        placement: p.placement || d,
                        modifiers: {
                          arrow: { enabled: !1 },
                          offset: { offset: '0, '.concat(y, 'px') },
                          flip: { enabled: !1 },
                        },
                        onCreate: function (w) {
                          (r.wrapperPopper = w),
                            r._isMounted &&
                              r.setState({ statusWrapper: X.IDLE }),
                            c(w, 'wrapper'),
                            d !== w.placement &&
                              setTimeout(function () {
                                w.instance.update();
                              }, 1);
                        },
                      });
                    }
                  },
                },
                {
                  key: 'rebuildPopper',
                  value: function () {
                    var r = this;
                    this.floaterRefInterval = setInterval(function () {
                      var o;
                      (o = r.floaterRef) !== null &&
                        o !== void 0 &&
                        o.isConnected &&
                        (clearInterval(r.floaterRefInterval),
                        r.setState({ needsUpdate: !1 }),
                        r.initPopper());
                    }, 50);
                  },
                },
                {
                  key: 'changeWrapperPosition',
                  value: function (r) {
                    var o = r.target,
                      i = r.wrapperOptions;
                    this.setState({ positionWrapper: i.position && !!o });
                  },
                },
                {
                  key: 'toggle',
                  value: function (r) {
                    var o = this.state.status,
                      i = o === X.OPEN ? X.CLOSING : X.OPENING;
                    L.undefined(r) || (i = r), this.setState({ status: i });
                  },
                },
                {
                  key: 'debug',
                  get: function () {
                    var r = this.props.debug;
                    return (
                      r ||
                      (Ge() &&
                        'ReactFloaterDebug' in window &&
                        !!window.ReactFloaterDebug)
                    );
                  },
                },
                {
                  key: 'event',
                  get: function () {
                    var r = this.props,
                      o = r.disableHoverToClick,
                      i = r.event;
                    return i === 'hover' && Hr() && !o ? 'click' : i;
                  },
                },
                {
                  key: 'options',
                  get: function () {
                    var r = this.props.options;
                    return (0, yo.default)(ip, r || {});
                  },
                },
                {
                  key: 'styles',
                  get: function () {
                    var r = this,
                      o = this.state,
                      i = o.status,
                      a = o.positionWrapper,
                      s = o.statusWrapper,
                      c = this.props.styles,
                      l = (0, yo.default)(yp(c), c);
                    if (a) {
                      var u;
                      [X.IDLE].indexOf(i) === -1 || [X.IDLE].indexOf(s) === -1
                        ? (u = l.wrapperPosition)
                        : (u = this.wrapperPopper.styles),
                        (l.wrapper = re(re({}, l.wrapper), u));
                    }
                    if (this.target) {
                      var d = window.getComputedStyle(this.target);
                      this.wrapperStyles
                        ? (l.wrapper = re(
                            re({}, l.wrapper),
                            this.wrapperStyles
                          ))
                        : ['relative', 'static'].indexOf(d.position) === -1 &&
                          ((this.wrapperStyles = {}),
                          a ||
                            (bp.forEach(function (p) {
                              r.wrapperStyles[p] = d[p];
                            }),
                            (l.wrapper = re(
                              re({}, l.wrapper),
                              this.wrapperStyles
                            )),
                            (this.target.style.position = 'relative'),
                            (this.target.style.top = 'auto'),
                            (this.target.style.right = 'auto'),
                            (this.target.style.bottom = 'auto'),
                            (this.target.style.left = 'auto')));
                    }
                    return l;
                  },
                },
                {
                  key: 'target',
                  get: function () {
                    if (!Ge()) return null;
                    var r = this.props.target;
                    return r
                      ? L.domElement(r)
                        ? r
                        : document.querySelector(r)
                      : this.childRef || this.wrapperRef;
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var r = this.state,
                      o = r.currentPlacement,
                      i = r.positionWrapper,
                      a = r.status,
                      s = this.props,
                      c = s.children,
                      l = s.component,
                      u = s.content,
                      d = s.disableAnimation,
                      p = s.footer,
                      h = s.hideArrow,
                      f = s.id,
                      m = s.open,
                      x = s.showCloseButton,
                      v = s.style,
                      b = s.target,
                      y = s.title,
                      w = g.createElement(
                        wl,
                        {
                          handleClick: this.handleClick,
                          handleMouseEnter: this.handleMouseEnter,
                          handleMouseLeave: this.handleMouseLeave,
                          setChildRef: this.setChildRef,
                          setWrapperRef: this.setWrapperRef,
                          style: v,
                          styles: this.styles.wrapper,
                        },
                        c
                      ),
                      E = {};
                    return (
                      i ? (E.wrapperInPortal = w) : (E.wrapperAsChildren = w),
                      g.createElement(
                        'span',
                        null,
                        g.createElement(
                          gl,
                          {
                            hasChildren: !!c,
                            id: f,
                            placement: o,
                            setRef: this.setFloaterRef,
                            target: b,
                            zIndex: this.styles.options.zIndex,
                          },
                          g.createElement(xl, {
                            component: l,
                            content: u,
                            disableAnimation: d,
                            footer: p,
                            handleClick: this.handleClick,
                            hideArrow: h || o === 'center',
                            open: m,
                            placement: o,
                            positionWrapper: i,
                            setArrowRef: this.setArrowRef,
                            setFloaterRef: this.setFloaterRef,
                            showCloseButton: x,
                            status: a,
                            styles: this.styles,
                            title: y,
                          }),
                          E.wrapperInPortal
                        ),
                        E.wrapperAsChildren
                      )
                    );
                  },
                },
              ]),
              n
            );
          })(g.Component));
        Ee($o, 'propTypes', {
          autoOpen: S.default.bool,
          callback: S.default.func,
          children: S.default.node,
          component: ha(
            S.default.oneOfType([S.default.func, S.default.element]),
            function (e) {
              return !e.content;
            }
          ),
          content: ha(S.default.node, function (e) {
            return !e.component;
          }),
          debug: S.default.bool,
          disableAnimation: S.default.bool,
          disableFlip: S.default.bool,
          disableHoverToClick: S.default.bool,
          event: S.default.oneOf(['hover', 'click']),
          eventDelay: S.default.number,
          footer: S.default.node,
          getPopper: S.default.func,
          hideArrow: S.default.bool,
          id: S.default.oneOfType([S.default.string, S.default.number]),
          offset: S.default.number,
          open: S.default.bool,
          options: S.default.object,
          placement: S.default.oneOf([
            'top',
            'top-start',
            'top-end',
            'bottom',
            'bottom-start',
            'bottom-end',
            'left',
            'left-start',
            'left-end',
            'right',
            'right-start',
            'right-end',
            'auto',
            'center',
          ]),
          showCloseButton: S.default.bool,
          style: S.default.object,
          styles: S.default.object,
          target: S.default.oneOfType([S.default.object, S.default.string]),
          title: S.default.node,
          wrapperOptions: S.default.shape({
            offset: S.default.number,
            placement: S.default.oneOf([
              'top',
              'top-start',
              'top-end',
              'bottom',
              'bottom-start',
              'bottom-end',
              'left',
              'left-start',
              'left-end',
              'right',
              'right-start',
              'right-end',
              'auto',
            ]),
            position: S.default.bool,
          }),
        });
        Ee($o, 'defaultProps', {
          autoOpen: !1,
          callback: fa,
          debug: !1,
          disableAnimation: !1,
          disableFlip: !1,
          disableHoverToClick: !1,
          event: 'click',
          eventDelay: 0.4,
          getPopper: fa,
          hideArrow: !1,
          offset: 15,
          placement: 'bottom',
          showCloseButton: !1,
          styles: {},
          target: null,
          wrapperOptions: { position: !1 },
        });
        (xp = ct(Mu(), 1)),
          (wp = Object.defineProperty),
          (Ep = (e, t, n) =>
            t in e
              ? wp(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (e[t] = n)),
          (M = (e, t, n) => (Ep(e, typeof t != 'symbol' ? t + '' : t, n), n)),
          (Z = {
            INIT: 'init',
            START: 'start',
            STOP: 'stop',
            RESET: 'reset',
            PREV: 'prev',
            NEXT: 'next',
            GO: 'go',
            CLOSE: 'close',
            SKIP: 'skip',
            UPDATE: 'update',
          }),
          (_e = {
            TOUR_START: 'tour:start',
            STEP_BEFORE: 'step:before',
            BEACON: 'beacon',
            TOOLTIP: 'tooltip',
            STEP_AFTER: 'step:after',
            TOUR_END: 'tour:end',
            TOUR_STATUS: 'tour:status',
            TARGET_NOT_FOUND: 'error:target_not_found',
            ERROR: 'error',
          }),
          (_ = {
            INIT: 'init',
            READY: 'ready',
            BEACON: 'beacon',
            TOOLTIP: 'tooltip',
            COMPLETE: 'complete',
            ERROR: 'error',
          }),
          (G = {
            IDLE: 'idle',
            READY: 'ready',
            WAITING: 'waiting',
            RUNNING: 'running',
            PAUSED: 'paused',
            SKIPPED: 'skipped',
            FINISHED: 'finished',
            ERROR: 'error',
          });
        un = on !== void 0;
        (Dp = {
          options: { preventOverflow: { boundariesElement: 'scrollParent' } },
          wrapperOptions: { offset: -18, position: !0 },
        }),
          (Sl = {
            back: 'Back',
            close: 'Close',
            last: 'Last',
            next: 'Next',
            open: 'Open the dialog',
            skip: 'Skip',
          }),
          (Lp = {
            event: 'click',
            placement: 'bottom',
            offset: 10,
            disableBeacon: !1,
            disableCloseOnEsc: !1,
            disableOverlay: !1,
            disableOverlayClose: !1,
            disableScrollParentFix: !1,
            disableScrolling: !1,
            hideBackButton: !1,
            hideCloseButton: !1,
            hideFooter: !1,
            isFixed: !1,
            locale: Sl,
            showProgress: !1,
            showSkipButton: !1,
            spotlightClicks: !1,
            spotlightPadding: 10,
          }),
          (Np = {
            continuous: !1,
            debug: !1,
            disableCloseOnEsc: !1,
            disableOverlay: !1,
            disableOverlayClose: !1,
            disableScrolling: !1,
            disableScrollParentFix: !1,
            getHelpers: void 0,
            hideBackButton: !1,
            run: !0,
            scrollOffset: 20,
            scrollDuration: 300,
            scrollToFirstStep: !1,
            showSkipButton: !1,
            showProgress: !1,
            spotlightClicks: !1,
            spotlightPadding: 10,
            steps: [],
          }),
          (Fp = {
            arrowColor: '#fff',
            backgroundColor: '#fff',
            beaconSize: 36,
            overlayColor: 'rgba(0, 0, 0, 0.5)',
            primaryColor: '#f04',
            spotlightShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
            textColor: '#333',
            width: 380,
            zIndex: 100,
          }),
          (dn = {
            backgroundColor: 'transparent',
            border: 0,
            borderRadius: 0,
            color: '#555',
            cursor: 'pointer',
            fontSize: 16,
            lineHeight: 1,
            padding: 8,
            WebkitAppearance: 'none',
          }),
          (ya = { borderRadius: 4, position: 'absolute' });
        (Ol = {
          action: 'init',
          controlled: !1,
          index: 0,
          lifecycle: _.INIT,
          origin: null,
          size: 0,
          status: G.IDLE,
        }),
          (ba = ed(Xs(Ol, 'controlled', 'size'))),
          (Bp = class {
            constructor(e) {
              M(this, 'beaconPopper'),
                M(this, 'tooltipPopper'),
                M(this, 'data', new Map()),
                M(this, 'listener'),
                M(this, 'store', new Map()),
                M(this, 'addListener', (o) => {
                  this.listener = o;
                }),
                M(this, 'setSteps', (o) => {
                  let { size: i, status: a } = this.getState(),
                    s = { size: o.length, status: a };
                  this.data.set('steps', o),
                    a === G.WAITING && !i && o.length && (s.status = G.RUNNING),
                    this.setState(s);
                }),
                M(this, 'getPopper', (o) =>
                  o === 'beacon' ? this.beaconPopper : this.tooltipPopper
                ),
                M(this, 'setPopper', (o, i) => {
                  o === 'beacon'
                    ? (this.beaconPopper = i)
                    : (this.tooltipPopper = i);
                }),
                M(this, 'cleanupPoppers', () => {
                  (this.beaconPopper = null), (this.tooltipPopper = null);
                }),
                M(this, 'close', (o = null) => {
                  let { index: i, status: a } = this.getState();
                  a === G.RUNNING &&
                    this.setState({
                      ...this.getNextState({
                        action: Z.CLOSE,
                        index: i + 1,
                        origin: o,
                      }),
                    });
                }),
                M(this, 'go', (o) => {
                  let { controlled: i, status: a } = this.getState();
                  if (i || a !== G.RUNNING) return;
                  let s = this.getSteps()[o];
                  this.setState({
                    ...this.getNextState({ action: Z.GO, index: o }),
                    status: s ? a : G.FINISHED,
                  });
                }),
                M(this, 'info', () => this.getState()),
                M(this, 'next', () => {
                  let { index: o, status: i } = this.getState();
                  i === G.RUNNING &&
                    this.setState(
                      this.getNextState({ action: Z.NEXT, index: o + 1 })
                    );
                }),
                M(this, 'open', () => {
                  let { status: o } = this.getState();
                  o === G.RUNNING &&
                    this.setState({
                      ...this.getNextState({
                        action: Z.UPDATE,
                        lifecycle: _.TOOLTIP,
                      }),
                    });
                }),
                M(this, 'prev', () => {
                  let { index: o, status: i } = this.getState();
                  i === G.RUNNING &&
                    this.setState({
                      ...this.getNextState({ action: Z.PREV, index: o - 1 }),
                    });
                }),
                M(this, 'reset', (o = !1) => {
                  let { controlled: i } = this.getState();
                  i ||
                    this.setState({
                      ...this.getNextState({ action: Z.RESET, index: 0 }),
                      status: o ? G.RUNNING : G.READY,
                    });
                }),
                M(this, 'skip', () => {
                  let { status: o } = this.getState();
                  o === G.RUNNING &&
                    this.setState({
                      action: Z.SKIP,
                      lifecycle: _.INIT,
                      status: G.SKIPPED,
                    });
                }),
                M(this, 'start', (o) => {
                  let { index: i, size: a } = this.getState();
                  this.setState({
                    ...this.getNextState(
                      { action: Z.START, index: I.number(o) ? o : i },
                      !0
                    ),
                    status: a ? G.RUNNING : G.WAITING,
                  });
                }),
                M(this, 'stop', (o = !1) => {
                  let { index: i, status: a } = this.getState();
                  [G.FINISHED, G.SKIPPED].includes(a) ||
                    this.setState({
                      ...this.getNextState({
                        action: Z.STOP,
                        index: i + (o ? 1 : 0),
                      }),
                      status: G.PAUSED,
                    });
                }),
                M(this, 'update', (o) => {
                  var i, a;
                  if (!Ip(o, ba))
                    throw new Error(
                      `State is not valid. Valid keys: ${ba.join(', ')}`
                    );
                  this.setState({
                    ...this.getNextState(
                      {
                        ...this.getState(),
                        ...o,
                        action: (i = o.action) != null ? i : Z.UPDATE,
                        origin: (a = o.origin) != null ? a : null,
                      },
                      !0
                    ),
                  });
                });
              let { continuous: t = !1, stepIndex: n, steps: r = [] } = e ?? {};
              this.setState(
                {
                  action: Z.INIT,
                  controlled: I.number(n),
                  continuous: t,
                  index: I.number(n) ? n : 0,
                  lifecycle: _.INIT,
                  origin: null,
                  status: r.length ? G.READY : G.IDLE,
                },
                !0
              ),
                (this.beaconPopper = null),
                (this.tooltipPopper = null),
                (this.listener = null),
                this.setSteps(r);
            }
            getState() {
              return this.store.size
                ? {
                    action: this.store.get('action') || '',
                    controlled: this.store.get('controlled') || !1,
                    index: parseInt(this.store.get('index'), 10),
                    lifecycle: this.store.get('lifecycle') || '',
                    origin: this.store.get('origin') || null,
                    size: this.store.get('size') || 0,
                    status: this.store.get('status') || '',
                  }
                : { ...Ol };
            }
            getNextState(e, t = !1) {
              var n, r, o, i, a;
              let {
                  action: s,
                  controlled: c,
                  index: l,
                  size: u,
                  status: d,
                } = this.getState(),
                p = I.number(e.index) ? e.index : l,
                h = c && !t ? l : Math.min(Math.max(p, 0), u);
              return {
                action: (n = e.action) != null ? n : s,
                controlled: c,
                index: h,
                lifecycle: (r = e.lifecycle) != null ? r : _.INIT,
                origin: (o = e.origin) != null ? o : null,
                size: (i = e.size) != null ? i : u,
                status: h === u ? G.FINISHED : (a = e.status) != null ? a : d,
              };
            }
            getSteps() {
              let e = this.data.get('steps');
              return Array.isArray(e) ? e : [];
            }
            hasUpdatedState(e) {
              let t = JSON.stringify(e),
                n = JSON.stringify(this.getState());
              return t !== n;
            }
            setState(e, t = !1) {
              let n = this.getState(),
                {
                  action: r,
                  index: o,
                  lifecycle: i,
                  origin: a = null,
                  size: s,
                  status: c,
                } = { ...n, ...e };
              this.store.set('action', r),
                this.store.set('index', o),
                this.store.set('lifecycle', i),
                this.store.set('origin', a),
                this.store.set('size', s),
                this.store.set('status', c),
                t &&
                  (this.store.set('controlled', e.controlled),
                  this.store.set('continuous', e.continuous)),
                this.listener &&
                  this.hasUpdatedState(n) &&
                  this.listener(this.getState());
            }
            getHelpers() {
              return {
                close: this.close,
                go: this.go,
                info: this.info,
                next: this.next,
                open: this.open,
                prev: this.prev,
                reset: this.reset,
                skip: this.skip,
              };
            }
          });
        (zp = class {
          constructor(e, t) {
            if (
              (M(this, 'element'),
              M(this, 'options'),
              M(this, 'canBeTabbed', (n) => {
                let { tabIndex: r } = n;
                return r === null || r < 0 ? !1 : this.canHaveFocus(n);
              }),
              M(this, 'canHaveFocus', (n) => {
                let r = /input|select|textarea|button|object/,
                  o = n.nodeName.toLowerCase();
                return (
                  ((r.test(o) && !n.getAttribute('disabled')) ||
                    (o === 'a' && !!n.getAttribute('href'))) &&
                  this.isVisible(n)
                );
              }),
              M(this, 'findValidTabElements', () =>
                [].slice
                  .call(this.element.querySelectorAll('*'), 0)
                  .filter(this.canBeTabbed)
              ),
              M(this, 'handleKeyDown', (n) => {
                let { code: r = 'Tab' } = this.options;
                n.code === r && this.interceptTab(n);
              }),
              M(this, 'interceptTab', (n) => {
                n.preventDefault();
                let r = this.findValidTabElements(),
                  { shiftKey: o } = n;
                if (!r.length) return;
                let i = document.activeElement
                  ? r.indexOf(document.activeElement)
                  : 0;
                i === -1 || (!o && i + 1 === r.length)
                  ? (i = 0)
                  : o && i === 0
                  ? (i = r.length - 1)
                  : (i += o ? -1 : 1),
                  r[i].focus();
              }),
              M(this, 'isHidden', (n) => {
                let r = n.offsetWidth <= 0 && n.offsetHeight <= 0,
                  o = window.getComputedStyle(n);
                return r && !n.innerHTML
                  ? !0
                  : (r && o.getPropertyValue('overflow') !== 'visible') ||
                      o.getPropertyValue('display') === 'none';
              }),
              M(this, 'isVisible', (n) => {
                let r = n;
                for (; r; )
                  if (r instanceof HTMLElement) {
                    if (r === document.body) break;
                    if (this.isHidden(r)) return !1;
                    r = r.parentNode;
                  }
                return !0;
              }),
              M(this, 'removeScope', () => {
                window.removeEventListener('keydown', this.handleKeyDown);
              }),
              M(this, 'checkFocus', (n) => {
                document.activeElement !== n &&
                  (n.focus(),
                  window.requestAnimationFrame(() => this.checkFocus(n)));
              }),
              M(this, 'setFocus', () => {
                let { selector: n } = this.options;
                if (!n) return;
                let r = this.element.querySelector(n);
                r && window.requestAnimationFrame(() => this.checkFocus(r));
              }),
              !(e instanceof HTMLElement))
            )
              throw new TypeError(
                'Invalid parameter: element must be an HTMLElement'
              );
            (this.element = e),
              (this.options = t),
              window.addEventListener('keydown', this.handleKeyDown, !1),
              this.setFocus();
          }
        }),
          (Up = class extends nt {
            constructor(e) {
              if (
                (super(e),
                M(this, 'beacon', null),
                M(this, 'setBeaconRef', (r) => {
                  this.beacon = r;
                }),
                e.beaconComponent)
              )
                return;
              let t = document.head || document.getElementsByTagName('head')[0],
                n = document.createElement('style');
              (n.id = 'joyride-beacon-animation'),
                e.nonce && n.setAttribute('nonce', e.nonce),
                n.appendChild(
                  document.createTextNode(`
        @keyframes joyride-beacon-inner {
          20% {
            opacity: 0.9;
          }
        
          90% {
            opacity: 0.7;
          }
        }
        
        @keyframes joyride-beacon-outer {
          0% {
            transform: scale(1);
          }
        
          45% {
            opacity: 0.7;
            transform: scale(0.75);
          }
        
          100% {
            opacity: 0.9;
            transform: scale(1);
          }
        }
      `)
                ),
                t.appendChild(n);
            }
            componentDidMount() {
              let { shouldFocus: e } = this.props;
              I.domElement(this.beacon) ||
                console.warn('beacon is not a valid DOM element'),
                setTimeout(() => {
                  I.domElement(this.beacon) && e && this.beacon.focus();
                }, 0);
            }
            componentWillUnmount() {
              let e = document.getElementById('joyride-beacon-animation');
              e?.parentNode && e.parentNode.removeChild(e);
            }
            render() {
              let {
                  beaconComponent: e,
                  continuous: t,
                  index: n,
                  isLastStep: r,
                  locale: o,
                  onClickOrHover: i,
                  size: a,
                  step: s,
                  styles: c,
                } = this.props,
                l = I.string(o.open) ? o.open : (0, xp.default)(o.open),
                u = {
                  'aria-label': l,
                  onClick: i,
                  onMouseEnter: i,
                  ref: this.setBeaconRef,
                  title: l,
                },
                d;
              return (
                e
                  ? (d = O(e, {
                      continuous: t,
                      index: n,
                      isLastStep: r,
                      size: a,
                      step: s,
                      ...u,
                    }))
                  : (d = O(
                      'button',
                      {
                        key: 'JoyrideBeacon',
                        className: 'react-joyride__beacon',
                        'data-test-id': 'button-beacon',
                        style: c.beacon,
                        type: 'button',
                        ...u,
                      },
                      O('span', { style: c.beaconInner }),
                      O('span', { style: c.beaconOuter })
                    )),
                d
              );
            }
          });
        (Hp = Wp),
          (Yp = class extends nt {
            constructor() {
              super(...arguments),
                M(this, 'isActive', !1),
                M(this, 'resizeTimeout'),
                M(this, 'scrollTimeout'),
                M(this, 'scrollParent'),
                M(this, 'state', {
                  isScrolling: !1,
                  mouseOverSpotlight: !1,
                  showSpotlight: !0,
                }),
                M(this, 'handleMouseMove', (e) => {
                  let { mouseOverSpotlight: t } = this.state,
                    {
                      height: n,
                      left: r,
                      position: o,
                      top: i,
                      width: a,
                    } = this.spotlightStyles,
                    s = o === 'fixed' ? e.clientY : e.pageY,
                    c = o === 'fixed' ? e.clientX : e.pageX,
                    l = s >= i && s <= i + n,
                    u = c >= r && c <= r + a && l;
                  u !== t && this.updateState({ mouseOverSpotlight: u });
                }),
                M(this, 'handleScroll', () => {
                  let { target: e } = this.props,
                    t = yt(e);
                  if (this.scrollParent !== document) {
                    let { isScrolling: n } = this.state;
                    n ||
                      this.updateState({ isScrolling: !0, showSpotlight: !1 }),
                      clearTimeout(this.scrollTimeout),
                      (this.scrollTimeout = window.setTimeout(() => {
                        this.updateState({
                          isScrolling: !1,
                          showSpotlight: !0,
                        });
                      }, 50));
                  } else En(t, 'sticky') && this.updateState({});
                }),
                M(this, 'handleResize', () => {
                  clearTimeout(this.resizeTimeout),
                    (this.resizeTimeout = window.setTimeout(() => {
                      this.isActive && this.forceUpdate();
                    }, 100));
                });
            }
            componentDidMount() {
              let {
                  debug: e,
                  disableScrolling: t,
                  disableScrollParentFix: n = !1,
                  target: r,
                } = this.props,
                o = yt(r);
              (this.scrollParent = Or(o ?? document.body, n, !0)),
                (this.isActive = !0),
                !t &&
                  Dn(o, !0) &&
                  xt({
                    title:
                      'step has a custom scroll parent and can cause trouble with scrolling',
                    data: [{ key: 'parent', value: this.scrollParent }],
                    debug: e,
                  }),
                window.addEventListener('resize', this.handleResize);
            }
            componentDidUpdate(e) {
              var t;
              let { lifecycle: n, spotlightClicks: r } = this.props,
                { changed: o } = lr(e, this.props);
              o('lifecycle', _.TOOLTIP) &&
                ((t = this.scrollParent) == null ||
                  t.addEventListener('scroll', this.handleScroll, {
                    passive: !0,
                  }),
                setTimeout(() => {
                  let { isScrolling: i } = this.state;
                  i || this.updateState({ showSpotlight: !0 });
                }, 100)),
                (o('spotlightClicks') ||
                  o('disableOverlay') ||
                  o('lifecycle')) &&
                  (r && n === _.TOOLTIP
                    ? window.addEventListener(
                        'mousemove',
                        this.handleMouseMove,
                        !1
                      )
                    : n !== _.TOOLTIP &&
                      window.removeEventListener(
                        'mousemove',
                        this.handleMouseMove
                      ));
            }
            componentWillUnmount() {
              var e;
              (this.isActive = !1),
                window.removeEventListener('mousemove', this.handleMouseMove),
                window.removeEventListener('resize', this.handleResize),
                clearTimeout(this.resizeTimeout),
                clearTimeout(this.scrollTimeout),
                (e = this.scrollParent) == null ||
                  e.removeEventListener('scroll', this.handleScroll);
            }
            get spotlightStyles() {
              var e, t, n;
              let { showSpotlight: r } = this.state,
                {
                  disableScrollParentFix: o = !1,
                  spotlightClicks: i,
                  spotlightPadding: a = 0,
                  styles: s,
                  target: c,
                } = this.props,
                l = yt(c),
                u = El(l),
                d = En(l),
                p = Cp(l, a, o);
              return {
                ...(ga() ? s.spotlightLegacy : s.spotlight),
                height: Math.round(((e = u?.height) != null ? e : 0) + a * 2),
                left: Math.round(((t = u?.left) != null ? t : 0) - a),
                opacity: r ? 1 : 0,
                pointerEvents: i ? 'none' : 'auto',
                position: d ? 'fixed' : 'absolute',
                top: p,
                transition: 'opacity 0.2s',
                width: Math.round(((n = u?.width) != null ? n : 0) + a * 2),
              };
            }
            updateState(e) {
              this.isActive && this.setState((t) => ({ ...t, ...e }));
            }
            render() {
              let { mouseOverSpotlight: e, showSpotlight: t } = this.state,
                {
                  disableOverlay: n,
                  disableOverlayClose: r,
                  lifecycle: o,
                  onClickOverlay: i,
                  placement: a,
                  styles: s,
                } = this.props;
              if (n || o !== _.TOOLTIP) return null;
              let c = s.overlay;
              ga() &&
                (c = a === 'center' ? s.overlayLegacyCenter : s.overlayLegacy);
              let l = {
                  cursor: r ? 'default' : 'pointer',
                  height: Tp(),
                  pointerEvents: e ? 'none' : 'auto',
                  ...c,
                },
                u =
                  a !== 'center' &&
                  t &&
                  O(Hp, { styles: this.spotlightStyles });
              if (Tl() === 'safari') {
                let { mixBlendMode: d, zIndex: p, ...h } = l;
                (u = O('div', { style: { ...h } }, u)),
                  delete l.backgroundColor;
              }
              return O(
                'div',
                {
                  className: 'react-joyride__overlay',
                  'data-test-id': 'overlay',
                  onClick: i,
                  role: 'presentation',
                  style: l,
                },
                u
              );
            }
          }),
          (Gp = class extends nt {
            constructor() {
              super(...arguments), M(this, 'node', null);
            }
            componentDidMount() {
              let { id: e } = this.props;
              mt() &&
                ((this.node = document.createElement('div')),
                (this.node.id = e),
                document.body.appendChild(this.node),
                un || this.renderReact15());
            }
            componentDidUpdate() {
              mt() && (un || this.renderReact15());
            }
            componentWillUnmount() {
              !mt() ||
                !this.node ||
                (un || Ei(this.node),
                this.node.parentNode === document.body &&
                  (document.body.removeChild(this.node), (this.node = null)));
            }
            renderReact15() {
              if (!mt()) return;
              let { children: e } = this.props;
              this.node && Ti(this, e, this.node);
            }
            renderReact16() {
              if (!mt() || !un) return null;
              let { children: e } = this.props;
              return this.node ? on(e, this.node) : null;
            }
            render() {
              return un ? this.renderReact16() : null;
            }
          });
        $p = qp;
        (Xp = Kp),
          (Qp = class extends nt {
            constructor() {
              super(...arguments),
                M(this, 'handleClickBack', (e) => {
                  e.preventDefault();
                  let { helpers: t } = this.props;
                  t.prev();
                }),
                M(this, 'handleClickClose', (e) => {
                  e.preventDefault();
                  let { helpers: t } = this.props;
                  t.close('button_close');
                }),
                M(this, 'handleClickPrimary', (e) => {
                  e.preventDefault();
                  let { continuous: t, helpers: n } = this.props;
                  if (!t) {
                    n.close('button_primary');
                    return;
                  }
                  n.next();
                }),
                M(this, 'handleClickSkip', (e) => {
                  e.preventDefault();
                  let { helpers: t } = this.props;
                  t.skip();
                }),
                M(this, 'getElementsProps', () => {
                  let {
                      continuous: e,
                      isLastStep: t,
                      setTooltipRef: n,
                      step: r,
                    } = this.props,
                    o = gt(r.locale.back),
                    i = gt(r.locale.close),
                    a = gt(r.locale.last),
                    s = gt(r.locale.next),
                    c = gt(r.locale.skip),
                    l = e ? s : i;
                  return (
                    t && (l = a),
                    {
                      backProps: {
                        'aria-label': o,
                        'data-action': 'back',
                        onClick: this.handleClickBack,
                        role: 'button',
                        title: o,
                      },
                      closeProps: {
                        'aria-label': i,
                        'data-action': 'close',
                        onClick: this.handleClickClose,
                        role: 'button',
                        title: i,
                      },
                      primaryProps: {
                        'aria-label': l,
                        'data-action': 'primary',
                        onClick: this.handleClickPrimary,
                        role: 'button',
                        title: l,
                      },
                      skipProps: {
                        'aria-label': c,
                        'data-action': 'skip',
                        onClick: this.handleClickSkip,
                        role: 'button',
                        title: c,
                      },
                      tooltipProps: {
                        'aria-modal': !0,
                        ref: n,
                        role: 'alertdialog',
                      },
                    }
                  );
                });
            }
            render() {
              let {
                  continuous: e,
                  index: t,
                  isLastStep: n,
                  setTooltipRef: r,
                  size: o,
                  step: i,
                } = this.props,
                { beaconComponent: a, tooltipComponent: s, ...c } = i,
                l;
              if (s) {
                let u = {
                  ...this.getElementsProps(),
                  continuous: e,
                  index: t,
                  isLastStep: n,
                  size: o,
                  step: c,
                  setTooltipRef: r,
                };
                l = O(s, { ...u });
              } else
                l = O(Xp, {
                  ...this.getElementsProps(),
                  continuous: e,
                  index: t,
                  isLastStep: n,
                  size: o,
                  step: i,
                });
              return l;
            }
          }),
          (Zp = class extends nt {
            constructor() {
              super(...arguments),
                M(this, 'scope', null),
                M(this, 'tooltip', null),
                M(this, 'handleClickHoverBeacon', (e) => {
                  let { step: t, store: n } = this.props;
                  (e.type === 'mouseenter' && t.event !== 'hover') ||
                    n.update({ lifecycle: _.TOOLTIP });
                }),
                M(this, 'handleClickOverlay', () => {
                  let { helpers: e, step: t } = this.props;
                  t.disableOverlayClose || e.close('overlay');
                }),
                M(this, 'setTooltipRef', (e) => {
                  this.tooltip = e;
                }),
                M(this, 'setPopper', (e, t) => {
                  var n;
                  let {
                    action: r,
                    lifecycle: o,
                    step: i,
                    store: a,
                  } = this.props;
                  t === 'wrapper'
                    ? a.setPopper('beacon', e)
                    : a.setPopper('tooltip', e),
                    a.getPopper('beacon') &&
                      a.getPopper('tooltip') &&
                      o === _.INIT &&
                      a.update({ action: r, lifecycle: _.READY }),
                    (n = i.floaterProps) != null &&
                      n.getPopper &&
                      i.floaterProps.getPopper(e, t);
                }),
                M(this, 'renderTooltip', (e) => {
                  let {
                    continuous: t,
                    helpers: n,
                    index: r,
                    size: o,
                    step: i,
                  } = this.props;
                  return O(Qp, {
                    continuous: t,
                    helpers: n,
                    index: r,
                    isLastStep: r + 1 === o,
                    setTooltipRef: this.setTooltipRef,
                    size: o,
                    step: i,
                    ...e,
                  });
                });
            }
            componentDidMount() {
              let { debug: e, index: t } = this.props;
              xt({
                title: `step:${t}`,
                data: [{ key: 'props', value: this.props }],
                debug: e,
              });
            }
            componentDidUpdate(e) {
              var t;
              let {
                  action: n,
                  callback: r,
                  continuous: o,
                  controlled: i,
                  debug: a,
                  helpers: s,
                  index: c,
                  lifecycle: l,
                  status: u,
                  step: d,
                  store: p,
                } = this.props,
                { changed: h, changedFrom: f } = lr(e, this.props),
                m = s.info(),
                x = o && n !== Z.CLOSE && (c > 0 || n === Z.PREV),
                v = h('action') || h('index') || h('lifecycle') || h('status'),
                b = f('lifecycle', [_.TOOLTIP, _.INIT], _.INIT),
                y = h('action', [Z.NEXT, Z.PREV, Z.SKIP, Z.CLOSE]),
                w = i && c === e.index;
              if (
                (y &&
                  (b || w) &&
                  r({
                    ...m,
                    index: e.index,
                    lifecycle: _.COMPLETE,
                    step: e.step,
                    type: _e.STEP_AFTER,
                  }),
                d.placement === 'center' &&
                  u === G.RUNNING &&
                  h('index') &&
                  n !== Z.START &&
                  l === _.INIT &&
                  p.update({ lifecycle: _.READY }),
                v)
              ) {
                let E = yt(d.target),
                  j = !!E;
                j && Op(E)
                  ? (f('status', G.READY, G.RUNNING) ||
                      f('lifecycle', _.INIT, _.READY)) &&
                    r({ ...m, step: d, type: _e.STEP_BEFORE })
                  : (console.warn(
                      j ? 'Target not visible' : 'Target not mounted',
                      d
                    ),
                    r({ ...m, type: _e.TARGET_NOT_FOUND, step: d }),
                    i || p.update({ index: c + (n === Z.PREV ? -1 : 1) }));
              }
              f('lifecycle', _.INIT, _.READY) &&
                p.update({ lifecycle: ma(d) || x ? _.TOOLTIP : _.BEACON }),
                h('index') &&
                  xt({
                    title: `step:${l}`,
                    data: [{ key: 'props', value: this.props }],
                    debug: a,
                  }),
                h('lifecycle', _.BEACON) &&
                  r({ ...m, step: d, type: _e.BEACON }),
                h('lifecycle', _.TOOLTIP) &&
                  (r({ ...m, step: d, type: _e.TOOLTIP }),
                  this.tooltip &&
                    ((this.scope = new zp(this.tooltip, {
                      selector: '[data-action=primary]',
                    })),
                    this.scope.setFocus())),
                f('lifecycle', [_.TOOLTIP, _.INIT], _.INIT) &&
                  ((t = this.scope) == null || t.removeScope(),
                  p.cleanupPoppers());
            }
            componentWillUnmount() {
              var e;
              (e = this.scope) == null || e.removeScope();
            }
            get open() {
              let { lifecycle: e, step: t } = this.props;
              return ma(t) || e === _.TOOLTIP;
            }
            render() {
              let {
                  continuous: e,
                  debug: t,
                  index: n,
                  lifecycle: r,
                  nonce: o,
                  shouldScroll: i,
                  size: a,
                  step: s,
                } = this.props,
                c = yt(s.target);
              return !Pl(s) || !I.domElement(c)
                ? null
                : O(
                    'div',
                    {
                      key: `JoyrideStep-${n}`,
                      className: 'react-joyride__step',
                    },
                    O(
                      Gp,
                      { id: 'react-joyride-portal' },
                      O(Yp, {
                        ...s,
                        debug: t,
                        lifecycle: r,
                        onClickOverlay: this.handleClickOverlay,
                      })
                    ),
                    O(
                      $o,
                      {
                        ...s.floaterProps,
                        component: this.renderTooltip,
                        debug: t,
                        getPopper: this.setPopper,
                        id: `react-joyride-step-${n}`,
                        open: this.open,
                        placement: s.placement,
                        target: s.target,
                      },
                      O(Up, {
                        beaconComponent: s.beaconComponent,
                        continuous: e,
                        index: n,
                        isLastStep: n + 1 === a,
                        locale: s.locale,
                        nonce: o,
                        onClickOrHover: this.handleClickHoverBeacon,
                        shouldFocus: i,
                        size: a,
                        step: s,
                        styles: s.styles,
                      })
                    )
                  );
            }
          }),
          (Cl = class extends nt {
            constructor(e) {
              super(e),
                M(this, 'helpers'),
                M(this, 'store'),
                M(this, 'callback', (a) => {
                  let { callback: s } = this.props;
                  I.function(s) && s(a);
                }),
                M(this, 'handleKeyboard', (a) => {
                  let { index: s, lifecycle: c } = this.state,
                    { steps: l } = this.props,
                    u = l[s];
                  c === _.TOOLTIP &&
                    a.code === 'Escape' &&
                    u &&
                    !u.disableCloseOnEsc &&
                    this.store.close('keyboard');
                }),
                M(this, 'syncState', (a) => {
                  this.setState(a);
                });
              let { debug: t, getHelpers: n, run: r, stepIndex: o } = e;
              (this.store = _p({ ...e, controlled: r && I.number(o) })),
                (this.helpers = this.store.getHelpers());
              let { addListener: i } = this.store;
              xt({
                title: 'init',
                data: [
                  { key: 'props', value: this.props },
                  { key: 'state', value: this.state },
                ],
                debug: t,
              }),
                i(this.syncState),
                n && n(this.helpers),
                (this.state = this.store.getState());
            }
            componentDidMount() {
              if (!mt()) return;
              let {
                  debug: e,
                  disableCloseOnEsc: t,
                  run: n,
                  steps: r,
                } = this.props,
                { start: o } = this.store;
              va(r, e) && n && o(),
                t ||
                  document.body.addEventListener(
                    'keydown',
                    this.handleKeyboard,
                    { passive: !0 }
                  );
            }
            componentDidUpdate(e, t) {
              if (!mt()) return;
              let {
                  action: n,
                  controlled: r,
                  index: o,
                  lifecycle: i,
                  status: a,
                } = this.state,
                { debug: s, run: c, stepIndex: l, steps: u } = this.props,
                { stepIndex: d, steps: p } = e,
                {
                  reset: h,
                  setSteps: f,
                  start: m,
                  stop: x,
                  update: v,
                } = this.store,
                { changed: b } = lr(e, this.props),
                { changed: y, changedFrom: w } = lr(t, this.state),
                E = pn(u[o], this.props),
                j = !Pe(p, u),
                D = I.number(l) && b('stepIndex'),
                P = yt(E.target);
              if (
                (j &&
                  (va(u, s) ? f(u) : console.warn('Steps are not valid', u)),
                b('run') && (c ? m(l) : x()),
                D)
              ) {
                let te = I.number(d) && d < l ? Z.NEXT : Z.PREV;
                n === Z.STOP && (te = Z.START),
                  [G.FINISHED, G.SKIPPED].includes(a) ||
                    v({
                      action: n === Z.CLOSE ? Z.CLOSE : te,
                      index: l,
                      lifecycle: _.INIT,
                    });
              }
              !r &&
                a === G.RUNNING &&
                o === 0 &&
                !P &&
                (this.store.update({ index: o + 1 }),
                this.callback({
                  ...this.state,
                  type: _e.TARGET_NOT_FOUND,
                  step: E,
                }));
              let N = { ...this.state, index: o, step: E };
              if (
                y('action', [Z.NEXT, Z.PREV, Z.SKIP, Z.CLOSE]) &&
                y('status', G.PAUSED)
              ) {
                let te = pn(u[t.index], this.props);
                this.callback({
                  ...N,
                  index: t.index,
                  lifecycle: _.COMPLETE,
                  step: te,
                  type: _e.STEP_AFTER,
                });
              }
              if (y('status', [G.FINISHED, G.SKIPPED])) {
                let te = pn(u[t.index], this.props);
                r ||
                  this.callback({
                    ...N,
                    index: t.index,
                    lifecycle: _.COMPLETE,
                    step: te,
                    type: _e.STEP_AFTER,
                  }),
                  this.callback({
                    ...N,
                    type: _e.TOUR_END,
                    step: te,
                    index: t.index,
                  }),
                  h();
              } else
                w('status', [G.IDLE, G.READY], G.RUNNING)
                  ? this.callback({ ...N, type: _e.TOUR_START })
                  : (y('status') || y('action', Z.RESET)) &&
                    this.callback({ ...N, type: _e.TOUR_STATUS });
              this.scrollToStep(t),
                E.placement === 'center' &&
                  a === G.RUNNING &&
                  i === _.INIT &&
                  this.store.update({ lifecycle: _.READY });
            }
            componentWillUnmount() {
              let { disableCloseOnEsc: e } = this.props;
              e ||
                document.body.removeEventListener(
                  'keydown',
                  this.handleKeyboard
                );
            }
            scrollToStep(e) {
              let { index: t, lifecycle: n, status: r } = this.state,
                {
                  debug: o,
                  disableScrollParentFix: i = !1,
                  scrollDuration: a,
                  scrollOffset: s = 20,
                  scrollToFirstStep: c = !1,
                  steps: l,
                } = this.props,
                u = pn(l[t], this.props),
                d = yt(u.target),
                p = Mp({
                  isFirstStep: t === 0,
                  lifecycle: n,
                  previousLifecycle: e.lifecycle,
                  scrollToFirstStep: c,
                  step: u,
                  target: d,
                });
              if (r === G.RUNNING && p) {
                let h = Dn(d, i),
                  f = Or(d, i),
                  m = Math.floor(Ap(d, s, i)) || 0;
                xt({
                  title: 'scrollToStep',
                  data: [
                    { key: 'index', value: t },
                    { key: 'lifecycle', value: n },
                    { key: 'status', value: r },
                  ],
                  debug: o,
                });
                let x = this.store.getPopper('beacon'),
                  v = this.store.getPopper('tooltip');
                if (n === _.BEACON && x) {
                  let { offsets: b, placement: y } = x;
                  !['bottom'].includes(y) &&
                    !h &&
                    (m = Math.floor(b.popper.top - s));
                } else if (n === _.TOOLTIP && v) {
                  let { flipped: b, offsets: y, placement: w } = v;
                  ['top', 'right', 'left'].includes(w) && !b && !h
                    ? (m = Math.floor(y.popper.top - s))
                    : (m -= u.spotlightPadding);
                }
                (m = m >= 0 ? m : 0),
                  r === G.RUNNING &&
                    Rp(m, { element: f, duration: a }).then(() => {
                      setTimeout(() => {
                        var b;
                        (b = this.store.getPopper('tooltip')) == null ||
                          b.instance.update();
                      }, 10);
                    });
              }
            }
            render() {
              if (!mt()) return null;
              let { index: e, status: t } = this.state,
                {
                  continuous: n = !1,
                  debug: r = !1,
                  nonce: o,
                  scrollToFirstStep: i = !1,
                  steps: a,
                } = this.props,
                s;
              if (t === G.RUNNING && a[e]) {
                let c = pn(a[e], this.props);
                s = O(Zp, {
                  ...this.state,
                  callback: this.callback,
                  continuous: n,
                  debug: r,
                  helpers: this.helpers,
                  nonce: o,
                  shouldScroll: !c.disableScrolling && (e !== 0 || i),
                  step: c,
                  store: this.store,
                });
              }
              return O('div', { className: 'react-joyride' }, s);
            }
          });
        M(Cl, 'defaultProps', Np);
        Jp = Cl;
        th = ct(Du());
        (oh = class {
          constructor(e, t, n, r) {
            this.getOptions = t;
            let {
              colors: o,
              initialVelocityX: i,
              initialVelocityY: a,
            } = this.getOptions();
            (this.context = e),
              (this.x = n),
              (this.y = r),
              (this.w = Ie(5, 20)),
              (this.h = Ie(5, 20)),
              (this.radius = Ie(5, 10)),
              (this.vx = typeof i == 'number' ? Ie(-i, i) : Ie(i.min, i.max)),
              (this.vy = typeof a == 'number' ? Ie(-a, 0) : Ie(a.min, a.max)),
              (this.shape = rh(0, 2)),
              (this.angle = nh(Ie(0, 360))),
              (this.angularSpin = Ie(-0.2, 0.2)),
              (this.color = o[Math.floor(Math.random() * o.length)]),
              (this.rotateY = Ie(0, 1)),
              (this.rotationDirection = Ie(0, 1) ? 1 : -1);
          }
          update() {
            let {
              gravity: e,
              wind: t,
              friction: n,
              opacity: r,
              drawShape: o,
            } = this.getOptions();
            (this.x += this.vx),
              (this.y += this.vy),
              (this.vy += e),
              (this.vx += t),
              (this.vx *= n),
              (this.vy *= n),
              this.rotateY >= 1 && this.rotationDirection === 1
                ? (this.rotationDirection = -1)
                : this.rotateY <= -1 &&
                  this.rotationDirection === -1 &&
                  (this.rotationDirection = 1);
            let i = 0.1 * this.rotationDirection;
            if (
              ((this.rotateY += i),
              (this.angle += this.angularSpin),
              this.context.save(),
              this.context.translate(this.x, this.y),
              this.context.rotate(this.angle),
              this.context.scale(1, this.rotateY),
              this.context.rotate(this.angle),
              this.context.beginPath(),
              (this.context.fillStyle = this.color),
              (this.context.strokeStyle = this.color),
              (this.context.globalAlpha = r),
              (this.context.lineCap = 'round'),
              (this.context.lineWidth = 2),
              o && typeof o == 'function')
            )
              o.call(this, this.context);
            else
              switch (this.shape) {
                case 0: {
                  this.context.beginPath(),
                    this.context.arc(0, 0, this.radius, 0, 2 * Math.PI),
                    this.context.fill();
                  break;
                }
                case 1: {
                  this.context.fillRect(
                    -this.w / 2,
                    -this.h / 2,
                    this.w,
                    this.h
                  );
                  break;
                }
                case 2: {
                  this.context.fillRect(
                    -this.w / 6,
                    -this.h / 2,
                    this.w / 3,
                    this.h
                  );
                  break;
                }
              }
            this.context.closePath(), this.context.restore();
          }
        }),
          (ih = class {
            constructor(e, t) {
              (this.x = 0),
                (this.y = 0),
                (this.w = 0),
                (this.h = 0),
                (this.lastNumberOfPieces = 0),
                (this.tweenInitTime = Date.now()),
                (this.particles = []),
                (this.particlesGenerated = 0),
                (this.removeParticleAt = (r) => {
                  this.particles.splice(r, 1);
                }),
                (this.getParticle = () => {
                  let r = Ie(this.x, this.w + this.x),
                    o = Ie(this.y, this.h + this.y);
                  return new oh(this.context, this.getOptions, r, o);
                }),
                (this.animate = () => {
                  let {
                      canvas: r,
                      context: o,
                      particlesGenerated: i,
                      lastNumberOfPieces: a,
                    } = this,
                    {
                      run: s,
                      recycle: c,
                      numberOfPieces: l,
                      debug: u,
                      tweenFunction: d,
                      tweenDuration: p,
                    } = this.getOptions();
                  if (!s) return !1;
                  let h = this.particles.length,
                    f = c ? h : i,
                    m = Date.now();
                  if (f < l) {
                    a !== l &&
                      ((this.tweenInitTime = m), (this.lastNumberOfPieces = l));
                    let { tweenInitTime: x } = this,
                      v = m - x > p ? p : Math.max(0, m - x),
                      b = d(v, f, l, p),
                      y = Math.round(b - f);
                    for (let w = 0; w < y; w++)
                      this.particles.push(this.getParticle());
                    this.particlesGenerated += y;
                  }
                  return (
                    u &&
                      ((o.font = '12px sans-serif'),
                      (o.fillStyle = '#333'),
                      (o.textAlign = 'right'),
                      o.fillText(
                        `Particles: ${h}`,
                        r.width - 10,
                        r.height - 20
                      )),
                    this.particles.forEach((x, v) => {
                      x.update(),
                        (x.y > r.height ||
                          x.y < -100 ||
                          x.x > r.width + 100 ||
                          x.x < -100) &&
                          (c && f <= l
                            ? (this.particles[v] = this.getParticle())
                            : this.removeParticleAt(v));
                    }),
                    h > 0 || f < l
                  );
                }),
                (this.canvas = e);
              let n = this.canvas.getContext('2d');
              if (!n) throw new Error('Could not get canvas context');
              (this.context = n), (this.getOptions = t);
            }
          }),
          (Ko = {
            width: typeof window < 'u' ? window.innerWidth : 300,
            height: typeof window < 'u' ? window.innerHeight : 200,
            numberOfPieces: 200,
            friction: 0.99,
            wind: 0,
            gravity: 0.1,
            initialVelocityX: 4,
            initialVelocityY: 10,
            colors: [
              '#f44336',
              '#e91e63',
              '#9c27b0',
              '#673ab7',
              '#3f51b5',
              '#2196f3',
              '#03a9f4',
              '#00bcd4',
              '#009688',
              '#4CAF50',
              '#8BC34A',
              '#CDDC39',
              '#FFEB3B',
              '#FFC107',
              '#FF9800',
              '#FF5722',
              '#795548',
            ],
            opacity: 1,
            debug: !1,
            tweenFunction: th.default.easeInOutQuad,
            tweenDuration: 5e3,
            recycle: !0,
            run: !0,
          }),
          (ah = class {
            constructor(e, t) {
              (this.setOptionsWithDefaults = (r) => {
                let o = {
                  confettiSource: { x: 0, y: 0, w: this.canvas.width, h: 0 },
                };
                (this._options = { ...o, ...Ko, ...r }),
                  Object.assign(this, r.confettiSource);
              }),
                (this.update = () => {
                  let {
                    options: { run: r, onConfettiComplete: o },
                    canvas: i,
                    context: a,
                  } = this;
                  r &&
                    ((a.fillStyle = 'white'),
                    a.clearRect(0, 0, i.width, i.height)),
                    this.generator.animate()
                      ? (this.rafId = requestAnimationFrame(this.update))
                      : (o &&
                          typeof o == 'function' &&
                          this.generator.particlesGenerated > 0 &&
                          o.call(this, this),
                        (this._options.run = !1));
                }),
                (this.reset = () => {
                  this.generator &&
                    this.generator.particlesGenerated > 0 &&
                    ((this.generator.particlesGenerated = 0),
                    (this.generator.particles = []),
                    (this.generator.lastNumberOfPieces = 0));
                }),
                (this.stop = () => {
                  (this.options = { run: !1 }),
                    this.rafId &&
                      (cancelAnimationFrame(this.rafId), (this.rafId = void 0));
                }),
                (this.canvas = e);
              let n = this.canvas.getContext('2d');
              if (!n) throw new Error('Could not get canvas context');
              (this.context = n),
                (this.generator = new ih(this.canvas, () => this.options)),
                (this.options = t),
                this.update();
            }
            get options() {
              return this._options;
            }
            set options(e) {
              let t = this._options && this._options.run,
                n = this._options && this._options.recycle;
              this.setOptionsWithDefaults(e),
                this.generator &&
                  (Object.assign(this.generator, this.options.confettiSource),
                  typeof e.recycle == 'boolean' &&
                    e.recycle &&
                    n === !1 &&
                    (this.generator.lastNumberOfPieces =
                      this.generator.particles.length)),
                typeof e.run == 'boolean' && e.run && t === !1 && this.update();
            }
          }),
          (sh = ah),
          (lh = g.createRef()),
          (xo = class extends nt {
            constructor(e, ...t) {
              super(e, ...t),
                (this.canvas = g.createRef()),
                (this.canvas = e.canvasRef || lh);
            }
            componentDidMount() {
              if (this.canvas.current) {
                let e = Yr(this.props)[0];
                this.confetti = new sh(this.canvas.current, e);
              }
            }
            componentDidUpdate() {
              let e = Yr(this.props)[0];
              this.confetti && (this.confetti.options = e);
            }
            componentWillUnmount() {
              this.confetti && this.confetti.stop(), (this.confetti = void 0);
            }
            render() {
              let [e, t] = Yr(this.props),
                n = {
                  zIndex: 2,
                  position: 'absolute',
                  pointerEvents: 'none',
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  ...t.style,
                };
              return g.createElement('canvas', {
                width: e.width,
                height: e.height,
                ref: this.canvas,
                ...t,
                style: n,
              });
            }
          });
        (xo.defaultProps = { ...Ko }), (xo.displayName = 'ReactConfetti');
        (ch = g.forwardRef((e, t) =>
          g.createElement(xo, { canvasRef: t, ...e })
        )),
          (uh = B.div(({ width: e, height: t, left: n, top: r }) => ({
            width: `${e}px`,
            height: `${t}px`,
            left: `${n}px`,
            top: `${r}px`,
            position: 'relative',
            overflow: 'hidden',
          })));
        (hh = B.button`
  all: unset;
  box-sizing: border-box;
  border: 0;
  border-radius: 0.25rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.75rem;
  background: ${({ theme: e, variant: t }) =>
    t === 'primary'
      ? e.color.secondary
      : t === 'secondary'
      ? e.color.lighter
      : t === 'outline'
      ? 'transparent'
      : e.color.secondary};
  color: ${({ theme: e, variant: t }) =>
    t === 'primary'
      ? e.color.lightest
      : t === 'secondary' || t === 'outline'
      ? e.darkest
      : e.color.lightest};
  box-shadow: ${({ variant: e }) =>
    e === 'primary'
      ? 'none'
      : e === 'secondary' || e === 'outline'
      ? '#D9E8F2 0 0 0 1px inset'
      : 'none'};
  height: 32px;
  font-size: 0.8125rem;
  font-weight: 700;
  font-family: ${({ theme: e }) => e.typography.fonts.base};
  transition: background-color, box-shadow, opacity;
  transition-duration: 0.16s;
  transition-timing-function: ease-in-out;
  text-decoration: none;

  &:hover {
    background-color: ${({ variant: e }) =>
      e === 'primary'
        ? '#0b94eb'
        : e === 'secondary'
        ? '#eef4f9'
        : e === 'outline'
        ? 'transparent'
        : '#0b94eb'};
  }

  &:focus {
    box-shadow: ${({ variant: e }) =>
      e === 'primary'
        ? 'inset 0 0 0 1px rgba(0, 0, 0, 0.2)'
        : e === 'secondary' || e === 'outline'
        ? 'inset 0 0 0 1px #0b94eb'
        : 'inset 0 0 0 2px rgba(0, 0, 0, 0.1)'};
  }
`),
          (Le = se(function (
            { children: e, onClick: t, variant: n = 'primary', ...r },
            o
          ) {
            return g.createElement(
              hh,
              { ref: o, onClick: t, variant: n, ...r },
              e
            );
          })),
          (fh = B.div`
  background: ${({ theme: e }) =>
    e.base === 'dark' ? '#292A2C' : e.color.lightest};
  width: 260px;
  padding: 15px;
  border-radius: 5px;
`),
          (mh = B.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`),
          (gh = B.div`
  font-size: 13px;
  line-height: 18px;
  font-weight: 700;
  color: ${({ theme: e }) => e.color.defaultText};
`),
          (yh = B.p`
  font-size: 13px;
  line-height: 18px;
  text-align: start;
  color: ${({ theme: e }) => e.color.defaultText};
  margin: 0;
  margin-top: 5px;
`),
          (vh = B.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
`),
          (bh = ({ step: e, primaryProps: t, tooltipProps: n }) =>
            g.createElement(
              fh,
              { ...n },
              g.createElement(
                mh,
                null,
                e.title && g.createElement(gh, null, e.title),
                g.createElement(yh, null, e.content)
              ),
              !e.hideNextButton &&
                g.createElement(
                  vh,
                  { id: 'buttonNext' },
                  g.createElement(
                    Le,
                    {
                      ...t,
                      ...(e.onNextButtonClick
                        ? { onClick: e.onNextButtonClick }
                        : {}),
                    },
                    'Next'
                  )
                )
            )),
          (xh = B.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  max-height: 85vh;

  &:focus-visible {
    outline: none;
  }
`),
          (wh = B.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  font-family: ${({ theme: e }) => e.typography.fonts.base};
`),
          (Eh = B.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  height: 44px;
`),
          (Th = B.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 13px;
  line-height: 18px;
  font-weight: bold;
  color: ${({ theme: e }) => e.color.darkest};
`),
          (Sh = B.div`
  font-size: 13px;
  line-height: 18px;
  padding: 15px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  color: ${({ theme: e }) => e.color.darker};

  h3 {
    font-size: 13px;
    line-height: 18px;
    font-weight: bold;
    padding: 0;
    margin: 0;
  }
`),
          (nr = B.span`
  display: inline-flex;
  border-radius: 3px;
  padding: 0 5px;
  margin-bottom: -2px;
  opacity: 0.8;
  font-family: ${({ theme: e }) => e.typography.fonts.mono};
  font-size: 11px;
  border: 1px solid #ecf4f9;
  color: ${({ theme: e }) => e.color.darkest};
  background-color: #f7fafc;
  box-sizing: border-box;
  line-height: 17px;
`),
          (Gr = B.img`
  max-width: 100%;
  margin-top: 1em;
`),
          (Ph = B.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
`),
          (Oh = St`
  0% { transform: translate(0px, 0px) }
  50% { transform: translate(120px, 0px) }
  100% { transform: translate(0px, 0px) }
`),
          (Ch = B.div`
  position: absolute;
  width: 350px;
  height: 350px;
  left: -160px;
  top: -260px;
  background: radial-gradient(
    circle at center,
    rgba(255, 119, 119, 1) 0%,
    rgba(255, 119, 119, 0) 70%
  );
  animation: ${Oh} 8s linear infinite;
  animation-timing-function: ease-in-out;
  z-index: 2;
`),
          (Ah = St`
  0% { transform: translate(0px, 0px) }
  33% { transform: translate(-64px, 0px) }
  66% { transform: translate(120px, 0px) }
  100% { transform: translate(0px, 0px) }
`),
          (Rh = B.div`
  position: absolute;
  width: 350px;
  height: 350px;
  left: -54px;
  top: -250px;
  background: radial-gradient(
    circle at center,
    rgba(253, 255, 147, 1) 0%,
    rgba(253, 255, 147, 0) 70%
  );
  animation: ${Ah} 12s linear infinite;
  animation-timing-function: ease-in-out;
  z-index: 3;
`),
          (Ih = St`
  0% { transform: translate(0px, 0px) }
  50% { transform: translate(-120px, 0px) }
  100% { transform: translate(0px, 0px) }
`),
          (kh = B.div`
  position: absolute;
  width: 350px;
  height: 350px;
  left: 150px;
  top: -220px;
  background: radial-gradient(
    circle at center,
    rgba(119, 255, 247, 0.8) 0%,
    rgba(119, 255, 247, 0) 70%
  );
  animation: ${Ih} 4s linear infinite;
  animation-timing-function: ease-in-out;
  z-index: 4;
`),
          (Gn = B.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 4px;
`),
          (Mh = B.div`
  margin-bottom: 4px;
`);
        (wo = globalThis?.document ? Bt : () => {}),
          (Vh = zn || (() => {})),
          (Bh = 0);
        Xo = se((e, t) => {
          let { children: n, ...r } = e,
            o = Ye.toArray(n),
            i = o.find(Wh);
          if (i) {
            let a = i.props.children,
              s = o.map((c) =>
                c === i
                  ? Ye.count(a) > 1
                    ? Ye.only(null)
                    : Vt(a)
                    ? a.props.children
                    : null
                  : c
              );
            return O(
              Eo,
              ge({}, r, { ref: t }),
              Vt(a) ? jt(a, void 0, s) : null
            );
          }
          return O(Eo, ge({}, r, { ref: t }), n);
        });
        Xo.displayName = 'Slot';
        Eo = se((e, t) => {
          let { children: n, ...r } = e;
          return Vt(n)
            ? jt(n, { ...Hh(r, n.props), ref: t ? Rl(t, n.ref) : n.ref })
            : Ye.count(n) > 1
            ? Ye.only(null)
            : null;
        });
        Eo.displayName = 'SlotClone';
        Uh = ({ children: e }) => O(dt, null, e);
        (Yh = [
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
        ]),
          (Lt = Yh.reduce((e, t) => {
            let n = se((r, o) => {
              let { asChild: i, ...a } = r,
                s = i ? Xo : t;
              return (
                U(() => {
                  window[Symbol.for('radix-ui')] = !0;
                }, []),
                O(s, ge({}, a, { ref: o }))
              );
            });
            return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
          }, {}));
        (To = 'dismissableLayer.update'),
          ($h = 'dismissableLayer.pointerDownOutside'),
          (Kh = 'dismissableLayer.focusOutside'),
          (Xh = Be({
            layers: new Set(),
            layersWithOutsidePointerEventsDisabled: new Set(),
            branches: new Set(),
          })),
          (Qh = se((e, t) => {
            var n;
            let {
                disableOutsidePointerEvents: r = !1,
                onEscapeKeyDown: o,
                onPointerDownOutside: i,
                onFocusOutside: a,
                onInteractOutside: s,
                onDismiss: c,
                ...l
              } = e,
              u = me(Xh),
              [d, p] = ne(null),
              h =
                (n = d?.ownerDocument) !== null && n !== void 0
                  ? n
                  : globalThis?.document,
              [, f] = ne({}),
              m = Ln(t, (P) => p(P)),
              x = Array.from(u.layers),
              [v] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
              b = x.indexOf(v),
              y = d ? x.indexOf(d) : -1,
              w = u.layersWithOutsidePointerEventsDisabled.size > 0,
              E = y >= b,
              j = Zh((P) => {
                let N = P.target,
                  te = [...u.branches].some((le) => le.contains(N));
                !E || te || (i?.(P), s?.(P), P.defaultPrevented || c?.());
              }, h),
              D = Jh((P) => {
                let N = P.target;
                [...u.branches].some((te) => te.contains(N)) ||
                  (a?.(P), s?.(P), P.defaultPrevented || c?.());
              }, h);
            return (
              qh((P) => {
                y === u.layers.size - 1 &&
                  (o?.(P),
                  !P.defaultPrevented && c && (P.preventDefault(), c()));
              }, h),
              U(() => {
                if (d)
                  return (
                    r &&
                      (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                        ((xa = h.body.style.pointerEvents),
                        (h.body.style.pointerEvents = 'none')),
                      u.layersWithOutsidePointerEventsDisabled.add(d)),
                    u.layers.add(d),
                    wa(),
                    () => {
                      r &&
                        u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                        (h.body.style.pointerEvents = xa);
                    }
                  );
              }, [d, h, r, u]),
              U(
                () => () => {
                  d &&
                    (u.layers.delete(d),
                    u.layersWithOutsidePointerEventsDisabled.delete(d),
                    wa());
                },
                [d, u]
              ),
              U(() => {
                let P = () => f({});
                return (
                  document.addEventListener(To, P),
                  () => document.removeEventListener(To, P)
                );
              }, []),
              O(
                Lt.div,
                ge({}, l, {
                  ref: m,
                  style: {
                    pointerEvents: w ? (E ? 'auto' : 'none') : void 0,
                    ...e.style,
                  },
                  onFocusCapture: It(e.onFocusCapture, D.onFocusCapture),
                  onBlurCapture: It(e.onBlurCapture, D.onBlurCapture),
                  onPointerDownCapture: It(
                    e.onPointerDownCapture,
                    j.onPointerDownCapture
                  ),
                })
              )
            );
          }));
        ($r = 'focusScope.autoFocusOnMount'),
          (Kr = 'focusScope.autoFocusOnUnmount'),
          (Ea = { bubbles: !1, cancelable: !0 }),
          (ef = se((e, t) => {
            let {
                loop: n = !1,
                trapped: r = !1,
                onMountAutoFocus: o,
                onUnmountAutoFocus: i,
                ...a
              } = e,
              [s, c] = ne(null),
              l = Mt(o),
              u = Mt(i),
              d = ee(null),
              p = Ln(t, (m) => c(m)),
              h = ee({
                paused: !1,
                pause() {
                  this.paused = !0;
                },
                resume() {
                  this.paused = !1;
                },
              }).current;
            U(() => {
              if (r) {
                let m = function (y) {
                    if (h.paused || !s) return;
                    let w = y.target;
                    s.contains(w)
                      ? (d.current = w)
                      : pt(d.current, { select: !0 });
                  },
                  x = function (y) {
                    if (h.paused || !s) return;
                    let w = y.relatedTarget;
                    w !== null &&
                      (s.contains(w) || pt(d.current, { select: !0 }));
                  },
                  v = function (y) {
                    if (document.activeElement === document.body)
                      for (let w of y) w.removedNodes.length > 0 && pt(s);
                  };
                document.addEventListener('focusin', m),
                  document.addEventListener('focusout', x);
                let b = new MutationObserver(v);
                return (
                  s && b.observe(s, { childList: !0, subtree: !0 }),
                  () => {
                    document.removeEventListener('focusin', m),
                      document.removeEventListener('focusout', x),
                      b.disconnect();
                  }
                );
              }
            }, [r, s, h.paused]),
              U(() => {
                if (s) {
                  Sa.add(h);
                  let m = document.activeElement;
                  if (!s.contains(m)) {
                    let x = new CustomEvent($r, Ea);
                    s.addEventListener($r, l),
                      s.dispatchEvent(x),
                      x.defaultPrevented ||
                        (tf(sf(kl(s)), { select: !0 }),
                        document.activeElement === m && pt(s));
                  }
                  return () => {
                    s.removeEventListener($r, l),
                      setTimeout(() => {
                        let x = new CustomEvent(Kr, Ea);
                        s.addEventListener(Kr, u),
                          s.dispatchEvent(x),
                          x.defaultPrevented ||
                            pt(m ?? document.body, { select: !0 }),
                          s.removeEventListener(Kr, u),
                          Sa.remove(h);
                      }, 0);
                  };
                }
              }, [s, l, u, h]);
            let f = ye(
              (m) => {
                if ((!n && !r) || h.paused) return;
                let x =
                    m.key === 'Tab' && !m.altKey && !m.ctrlKey && !m.metaKey,
                  v = document.activeElement;
                if (x && v) {
                  let b = m.currentTarget,
                    [y, w] = nf(b);
                  y && w
                    ? !m.shiftKey && v === w
                      ? (m.preventDefault(), n && pt(y, { select: !0 }))
                      : m.shiftKey &&
                        v === y &&
                        (m.preventDefault(), n && pt(w, { select: !0 }))
                    : v === b && m.preventDefault();
                }
              },
              [n, r, h.paused]
            );
            return O(Lt.div, ge({ tabIndex: -1 }, a, { ref: p, onKeyDown: f }));
          }));
        Sa = af();
        lf = se((e, t) => {
          var n;
          let {
            container: r = globalThis == null ||
            (n = globalThis.document) === null ||
            n === void 0
              ? void 0
              : n.body,
            ...o
          } = e;
          return r
            ? ut.createPortal(O(Lt.div, ge({}, o, { ref: t })), r)
            : null;
        });
        Cr = (e) => {
          let { present: t, children: n } = e,
            r = uf(t),
            o =
              typeof n == 'function' ? n({ present: r.isPresent }) : Ye.only(n),
            i = Ln(r.ref, o.ref);
          return typeof n == 'function' || r.isPresent
            ? jt(o, { ref: i })
            : null;
        };
        Cr.displayName = 'Presence';
        Xr = 0;
        qe = function () {
          return (
            (qe =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++) {
                  t = arguments[n];
                  for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                }
                return e;
              }),
            qe.apply(this, arguments)
          );
        };
        (rr = 'right-scroll-bar-position'),
          (or = 'width-before-scroll-bar'),
          (hf = 'with-scroll-bars-hidden'),
          (ff = '--removed-body-scroll-bar-size');
        Ca = new WeakMap();
        Dl = function (e) {
          var t = e.sideCar,
            n = Ml(e, ['sideCar']);
          if (!t)
            throw new Error(
              'Sidecar: please provide `sideCar` property to import the right car'
            );
          var r = t.read();
          if (!r) throw new Error('Sidecar medium not found');
          return O(r, qe({}, n));
        };
        Dl.isSideCarExport = !0;
        (Ll = bf()),
          (Zr = function () {}),
          (Ar = se(function (e, t) {
            var n = ee(null),
              r = ne({
                onScrollCapture: Zr,
                onWheelCapture: Zr,
                onTouchMoveCapture: Zr,
              }),
              o = r[0],
              i = r[1],
              a = e.forwardProps,
              s = e.children,
              c = e.className,
              l = e.removeScrollBar,
              u = e.enabled,
              d = e.shards,
              p = e.sideCar,
              h = e.noIsolation,
              f = e.inert,
              m = e.allowPinchZoom,
              x = e.as,
              v = x === void 0 ? 'div' : x,
              b = Ml(e, [
                'forwardProps',
                'children',
                'className',
                'removeScrollBar',
                'enabled',
                'shards',
                'sideCar',
                'noIsolation',
                'inert',
                'allowPinchZoom',
                'as',
              ]),
              y = p,
              w = gf([n, t]),
              E = qe(qe({}, b), o);
            return O(
              dt,
              null,
              u &&
                O(y, {
                  sideCar: Ll,
                  removeScrollBar: l,
                  shards: d,
                  noIsolation: h,
                  inert: f,
                  setCallbacks: i,
                  allowPinchZoom: !!m,
                  lockRef: n,
                }),
              a
                ? jt(Ye.only(s), qe(qe({}, E), { ref: w }))
                : O(v, qe({}, E, { className: c, ref: w }), s)
            );
          }));
        Ar.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
        Ar.classNames = { fullWidth: or, zeroRight: rr };
        wf = function () {
          if (typeof __webpack_nonce__ < 'u') return __webpack_nonce__;
        };
        (Pf = function () {
          var e = 0,
            t = null;
          return {
            add: function (n) {
              e == 0 && (t = Ef()) && (Tf(t, n), Sf(t)), e++;
            },
            remove: function () {
              e--,
                !e &&
                  t &&
                  (t.parentNode && t.parentNode.removeChild(t), (t = null));
            },
          };
        }),
          (Of = function () {
            var e = Pf();
            return function (t, n) {
              U(
                function () {
                  return (
                    e.add(t),
                    function () {
                      e.remove();
                    }
                  );
                },
                [t && n]
              );
            };
          }),
          (Nl = function () {
            var e = Of(),
              t = function (n) {
                var r = n.styles,
                  o = n.dynamic;
                return e(r, o), null;
              };
            return t;
          }),
          (Cf = { left: 0, top: 0, right: 0, gap: 0 }),
          (Jr = function (e) {
            return parseInt(e || '', 10) || 0;
          }),
          (Af = function (e) {
            var t = window.getComputedStyle(document.body),
              n = t[e === 'padding' ? 'paddingLeft' : 'marginLeft'],
              r = t[e === 'padding' ? 'paddingTop' : 'marginTop'],
              o = t[e === 'padding' ? 'paddingRight' : 'marginRight'];
            return [Jr(n), Jr(r), Jr(o)];
          }),
          (Rf = function (e) {
            if ((e === void 0 && (e = 'margin'), typeof window > 'u'))
              return Cf;
            var t = Af(e),
              n = document.documentElement.clientWidth,
              r = window.innerWidth;
            return {
              left: t[0],
              top: t[1],
              right: t[2],
              gap: Math.max(0, r - n + t[2] - t[0]),
            };
          }),
          (If = Nl()),
          (pr = 'data-scroll-locked'),
          (kf = function (e, t, n, r) {
            var o = e.left,
              i = e.top,
              a = e.right,
              s = e.gap;
            return (
              n === void 0 && (n = 'margin'),
              `
  .`
                .concat(
                  hf,
                  ` {
   overflow: hidden `
                )
                .concat(
                  r,
                  `;
   padding-right: `
                )
                .concat(s, 'px ')
                .concat(
                  r,
                  `;
  }
  body[`
                )
                .concat(
                  pr,
                  `] {
    overflow: hidden `
                )
                .concat(
                  r,
                  `;
    overscroll-behavior: contain;
    `
                )
                .concat(
                  [
                    t && 'position: relative '.concat(r, ';'),
                    n === 'margin' &&
                      `
    padding-left: `
                        .concat(
                          o,
                          `px;
    padding-top: `
                        )
                        .concat(
                          i,
                          `px;
    padding-right: `
                        )
                        .concat(
                          a,
                          `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                        )
                        .concat(s, 'px ')
                        .concat(
                          r,
                          `;
    `
                        ),
                    n === 'padding' &&
                      'padding-right: '.concat(s, 'px ').concat(r, ';'),
                  ]
                    .filter(Boolean)
                    .join(''),
                  `
  }
  
  .`
                )
                .concat(
                  rr,
                  ` {
    right: `
                )
                .concat(s, 'px ')
                .concat(
                  r,
                  `;
  }
  
  .`
                )
                .concat(
                  or,
                  ` {
    margin-right: `
                )
                .concat(s, 'px ')
                .concat(
                  r,
                  `;
  }
  
  .`
                )
                .concat(rr, ' .')
                .concat(
                  rr,
                  ` {
    right: 0 `
                )
                .concat(
                  r,
                  `;
  }
  
  .`
                )
                .concat(or, ' .')
                .concat(
                  or,
                  ` {
    margin-right: 0 `
                )
                .concat(
                  r,
                  `;
  }
  
  body[`
                )
                .concat(
                  pr,
                  `] {
    `
                )
                .concat(ff, ': ')
                .concat(
                  s,
                  `px;
  }
`
                )
            );
          }),
          (Mf = function (e) {
            var t = e.noRelative,
              n = e.noImportant,
              r = e.gapMode,
              o = r === void 0 ? 'margin' : r,
              i = Se(
                function () {
                  return Rf(o);
                },
                [o]
              );
            return (
              U(function () {
                return (
                  document.body.setAttribute(pr, ''),
                  function () {
                    document.body.removeAttribute(pr);
                  }
                );
              }, []),
              O(If, { styles: kf(i, !t, o, n ? '' : '!important') })
            );
          }),
          (So = !1);
        if (typeof window < 'u')
          try {
            (hn = Object.defineProperty({}, 'passive', {
              get: function () {
                return (So = !0), !0;
              },
            })),
              window.addEventListener('test', hn, hn),
              window.removeEventListener('test', hn, hn);
          } catch {
            So = !1;
          }
        (_t = So ? { passive: !1 } : !1),
          (Df = function (e) {
            return e.tagName === 'TEXTAREA';
          }),
          (Fl = function (e, t) {
            var n = window.getComputedStyle(e);
            return (
              n[t] !== 'hidden' &&
              !(n.overflowY === n.overflowX && !Df(e) && n[t] === 'visible')
            );
          }),
          (Lf = function (e) {
            return Fl(e, 'overflowY');
          }),
          (Nf = function (e) {
            return Fl(e, 'overflowX');
          }),
          (Aa = function (e, t) {
            var n = t;
            do {
              typeof ShadowRoot < 'u' &&
                n instanceof ShadowRoot &&
                (n = n.host);
              var r = jl(e, n);
              if (r) {
                var o = Vl(e, n),
                  i = o[1],
                  a = o[2];
                if (i > a) return !0;
              }
              n = n.parentNode;
            } while (n && n !== document.body);
            return !1;
          }),
          (Ff = function (e) {
            var t = e.scrollTop,
              n = e.scrollHeight,
              r = e.clientHeight;
            return [t, n, r];
          }),
          (jf = function (e) {
            var t = e.scrollLeft,
              n = e.scrollWidth,
              r = e.clientWidth;
            return [t, n, r];
          }),
          (jl = function (e, t) {
            return e === 'v' ? Lf(t) : Nf(t);
          }),
          (Vl = function (e, t) {
            return e === 'v' ? Ff(t) : jf(t);
          }),
          (Vf = function (e, t) {
            return e === 'h' && t === 'rtl' ? -1 : 1;
          }),
          (Bf = function (e, t, n, r, o) {
            var i = Vf(e, window.getComputedStyle(t).direction),
              a = i * r,
              s = n.target,
              c = t.contains(s),
              l = !1,
              u = a > 0,
              d = 0,
              p = 0;
            do {
              var h = Vl(e, s),
                f = h[0],
                m = h[1],
                x = h[2],
                v = m - x - i * f;
              (f || v) && jl(e, s) && ((d += v), (p += f)), (s = s.parentNode);
            } while (
              (!c && s !== document.body) ||
              (c && (t.contains(s) || t === s))
            );
            return (
              ((u && ((o && d === 0) || (!o && a > d))) ||
                (!u && ((o && p === 0) || (!o && -a > p)))) &&
                (l = !0),
              l
            );
          }),
          ($n = function (e) {
            return 'changedTouches' in e
              ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
              : [0, 0];
          }),
          (Ra = function (e) {
            return [e.deltaX, e.deltaY];
          }),
          (Ia = function (e) {
            return e && 'current' in e ? e.current : e;
          }),
          (_f = function (e, t) {
            return e[0] === t[0] && e[1] === t[1];
          }),
          (zf = function (e) {
            return `
  .block-interactivity-`
              .concat(
                e,
                ` {pointer-events: none;}
  .allow-interactivity-`
              )
              .concat(
                e,
                ` {pointer-events: all;}
`
              );
          }),
          (Uf = 0),
          (zt = []);
        (Hf = xf(Ll, Wf)),
          (Bl = se(function (e, t) {
            return O(Ar, qe({}, e, { ref: t, sideCar: Hf }));
          }));
        Bl.classNames = Ar.classNames;
        (Yf = Bl),
          (Gf = function (e) {
            if (typeof document > 'u') return null;
            var t = Array.isArray(e) ? e[0] : e;
            return t.ownerDocument.body;
          }),
          (Ut = new WeakMap()),
          (Kn = new WeakMap()),
          (Xn = {}),
          (eo = 0),
          (_l = function (e) {
            return e && (e.host || _l(e.parentNode));
          }),
          (qf = function (e, t) {
            return t
              .map(function (n) {
                if (e.contains(n)) return n;
                var r = _l(n);
                return r && e.contains(r)
                  ? r
                  : (console.error(
                      'aria-hidden',
                      n,
                      'in not contained inside',
                      e,
                      '. Doing nothing'
                    ),
                    null);
              })
              .filter(function (n) {
                return !!n;
              });
          }),
          ($f = function (e, t, n, r) {
            var o = qf(t, Array.isArray(e) ? e : [e]);
            Xn[n] || (Xn[n] = new WeakMap());
            var i = Xn[n],
              a = [],
              s = new Set(),
              c = new Set(o),
              l = function (d) {
                !d || s.has(d) || (s.add(d), l(d.parentNode));
              };
            o.forEach(l);
            var u = function (d) {
              !d ||
                c.has(d) ||
                Array.prototype.forEach.call(d.children, function (p) {
                  if (s.has(p)) u(p);
                  else {
                    var h = p.getAttribute(r),
                      f = h !== null && h !== 'false',
                      m = (Ut.get(p) || 0) + 1,
                      x = (i.get(p) || 0) + 1;
                    Ut.set(p, m),
                      i.set(p, x),
                      a.push(p),
                      m === 1 && f && Kn.set(p, !0),
                      x === 1 && p.setAttribute(n, 'true'),
                      f || p.setAttribute(r, 'true');
                  }
                });
            };
            return (
              u(t),
              s.clear(),
              eo++,
              function () {
                a.forEach(function (d) {
                  var p = Ut.get(d) - 1,
                    h = i.get(d) - 1;
                  Ut.set(d, p),
                    i.set(d, h),
                    p || (Kn.has(d) || d.removeAttribute(r), Kn.delete(d)),
                    h || d.removeAttribute(n);
                }),
                  eo--,
                  eo ||
                    ((Ut = new WeakMap()),
                    (Ut = new WeakMap()),
                    (Kn = new WeakMap()),
                    (Xn = {}));
              }
            );
          }),
          (Kf = function (e, t, n) {
            n === void 0 && (n = 'data-aria-hidden');
            var r = Array.from(Array.isArray(e) ? e : [e]),
              o = t || Gf(e);
            return o
              ? (r.push.apply(r, Array.from(o.querySelectorAll('[aria-live]'))),
                $f(r, o, n, 'aria-hidden'))
              : function () {
                  return null;
                };
          }),
          (zl = 'Dialog'),
          ([Ul, HO] = Fh(zl)),
          ([Xf, Qe] = Ul(zl)),
          (Qf = (e) => {
            let {
                __scopeDialog: t,
                children: n,
                open: r,
                defaultOpen: o,
                onOpenChange: i,
                modal: a = !0,
              } = e,
              s = ee(null),
              c = ee(null),
              [l = !1, u] = _h({ prop: r, defaultProp: o, onChange: i });
            return O(
              Xf,
              {
                scope: t,
                triggerRef: s,
                contentRef: c,
                contentId: qr(),
                titleId: qr(),
                descriptionId: qr(),
                open: l,
                onOpenChange: u,
                onOpenToggle: ye(() => u((d) => !d), [u]),
                modal: a,
              },
              n
            );
          }),
          (Wl = 'DialogPortal'),
          ([Zf, Hl] = Ul(Wl, { forceMount: void 0 })),
          (Jf = (e) => {
            let {
                __scopeDialog: t,
                forceMount: n,
                children: r,
                container: o,
              } = e,
              i = Qe(Wl, t);
            return O(
              Zf,
              { scope: t, forceMount: n },
              Ye.map(r, (a) =>
                O(
                  Cr,
                  { present: n || i.open },
                  O(lf, { asChild: !0, container: o }, a)
                )
              )
            );
          }),
          (Po = 'DialogOverlay'),
          (em = se((e, t) => {
            let n = Hl(Po, e.__scopeDialog),
              { forceMount: r = n.forceMount, ...o } = e,
              i = Qe(Po, e.__scopeDialog);
            return i.modal
              ? O(Cr, { present: r || i.open }, O(tm, ge({}, o, { ref: t })))
              : null;
          })),
          (tm = se((e, t) => {
            let { __scopeDialog: n, ...r } = e,
              o = Qe(Po, n);
            return O(
              Yf,
              { as: Xo, allowPinchZoom: !0, shards: [o.contentRef] },
              O(
                Lt.div,
                ge({ 'data-state': ql(o.open) }, r, {
                  ref: t,
                  style: { pointerEvents: 'auto', ...r.style },
                })
              )
            );
          })),
          (Xt = 'DialogContent'),
          (nm = se((e, t) => {
            let n = Hl(Xt, e.__scopeDialog),
              { forceMount: r = n.forceMount, ...o } = e,
              i = Qe(Xt, e.__scopeDialog);
            return O(
              Cr,
              { present: r || i.open },
              i.modal
                ? O(rm, ge({}, o, { ref: t }))
                : O(om, ge({}, o, { ref: t }))
            );
          })),
          (rm = se((e, t) => {
            let n = Qe(Xt, e.__scopeDialog),
              r = ee(null),
              o = Ln(t, n.contentRef, r);
            return (
              U(() => {
                let i = r.current;
                if (i) return Kf(i);
              }, []),
              O(
                Yl,
                ge({}, e, {
                  ref: o,
                  trapFocus: n.open,
                  disableOutsidePointerEvents: !0,
                  onCloseAutoFocus: It(e.onCloseAutoFocus, (i) => {
                    var a;
                    i.preventDefault(),
                      (a = n.triggerRef.current) === null ||
                        a === void 0 ||
                        a.focus();
                  }),
                  onPointerDownOutside: It(e.onPointerDownOutside, (i) => {
                    let a = i.detail.originalEvent,
                      s = a.button === 0 && a.ctrlKey === !0;
                    (a.button === 2 || s) && i.preventDefault();
                  }),
                  onFocusOutside: It(e.onFocusOutside, (i) =>
                    i.preventDefault()
                  ),
                })
              )
            );
          })),
          (om = se((e, t) => {
            let n = Qe(Xt, e.__scopeDialog),
              r = ee(!1),
              o = ee(!1);
            return O(
              Yl,
              ge({}, e, {
                ref: t,
                trapFocus: !1,
                disableOutsidePointerEvents: !1,
                onCloseAutoFocus: (i) => {
                  var a;
                  if (
                    ((a = e.onCloseAutoFocus) === null ||
                      a === void 0 ||
                      a.call(e, i),
                    !i.defaultPrevented)
                  ) {
                    var s;
                    r.current ||
                      (s = n.triggerRef.current) === null ||
                      s === void 0 ||
                      s.focus(),
                      i.preventDefault();
                  }
                  (r.current = !1), (o.current = !1);
                },
                onInteractOutside: (i) => {
                  var a, s;
                  (a = e.onInteractOutside) === null ||
                    a === void 0 ||
                    a.call(e, i),
                    i.defaultPrevented ||
                      ((r.current = !0),
                      i.detail.originalEvent.type === 'pointerdown' &&
                        (o.current = !0));
                  let c = i.target;
                  !((s = n.triggerRef.current) === null || s === void 0) &&
                    s.contains(c) &&
                    i.preventDefault(),
                    i.detail.originalEvent.type === 'focusin' &&
                      o.current &&
                      i.preventDefault();
                },
              })
            );
          })),
          (Yl = se((e, t) => {
            let {
                __scopeDialog: n,
                trapFocus: r,
                onOpenAutoFocus: o,
                onCloseAutoFocus: i,
                ...a
              } = e,
              s = Qe(Xt, n),
              c = ee(null),
              l = Ln(t, c);
            return (
              df(),
              O(
                dt,
                null,
                O(
                  ef,
                  {
                    asChild: !0,
                    loop: !0,
                    trapped: r,
                    onMountAutoFocus: o,
                    onUnmountAutoFocus: i,
                  },
                  O(
                    Qh,
                    ge(
                      {
                        role: 'dialog',
                        id: s.contentId,
                        'aria-describedby': s.descriptionId,
                        'aria-labelledby': s.titleId,
                        'data-state': ql(s.open),
                      },
                      a,
                      { ref: l, onDismiss: () => s.onOpenChange(!1) }
                    )
                  )
                ),
                !1
              )
            );
          })),
          (Gl = 'DialogTitle'),
          (im = se((e, t) => {
            let { __scopeDialog: n, ...r } = e,
              o = Qe(Gl, n);
            return O(Lt.h2, ge({ id: o.titleId }, r, { ref: t }));
          })),
          (am = 'DialogDescription'),
          (sm = se((e, t) => {
            let { __scopeDialog: n, ...r } = e,
              o = Qe(am, n);
            return O(Lt.p, ge({ id: o.descriptionId }, r, { ref: t }));
          })),
          (lm = 'DialogClose'),
          (cm = se((e, t) => {
            let { __scopeDialog: n, ...r } = e,
              o = Qe(lm, n);
            return O(
              Lt.button,
              ge({ type: 'button' }, r, {
                ref: t,
                onClick: It(e.onClick, () => o.onOpenChange(!1)),
              })
            );
          }));
        um = 'DialogTitleWarning';
        Nh(um, { contentName: Xt, titleName: Gl, docsSlug: 'dialog' });
        (dm = Qf),
          (pm = Jf),
          (hm = em),
          (fm = nm),
          (mm = im),
          (gm = sm),
          (ym = cm),
          (vm = B.div`
  background-color: rgba(27, 28, 29, 0.48);
  position: fixed;
  inset: 0px;
  width: 100%;
  height: 100%;
  z-index: 10;
`),
          (bm = B.div(
            ({ width: e, height: t }) => Di`
    background-color: white;
    border-radius: 6px;
    box-shadow: rgba(14, 18, 22, 0.35) 0px 10px 38px -10px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${e ?? 740}px;
    height: ${t ? `${t}px` : 'auto'};
    max-width: calc(100% - 40px);
    max-height: 85vh;
    overflow: hidden;
    z-index: 11;

    &:focus-visible {
      outline: none;
    }
  `
          )),
          (xm = g.forwardRef(function (
            { width: e, height: t, children: n, ...r },
            o
          ) {
            return g.createElement(
              fm,
              { ref: o, asChild: !0, ...r },
              g.createElement(bm, { width: e, height: t }, n)
            );
          }));
        (Em = B.div`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: space-between;
`),
          (Tm = B.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`),
          (Sm = B.h1`
  margin: 0;
  margin-top: 20px;
  margin-bottom: 5px;
  color: ${({ theme: e }) => e.color.darkest};
  font-weight: ${({ theme: e }) => e.typography.weight.bold};
  font-size: ${({ theme: e }) => e.typography.size.m1}px;
  line-height: ${({ theme: e }) => e.typography.size.m3}px;
`),
          (Pm = B.p`
  margin: 0;
  margin-bottom: 20px;
  max-width: 320px;
  text-align: center;
  font-size: ${({ theme: e }) => e.typography.size.s2}px;
  font-weight: ${({ theme: e }) => e.typography.weight.regular};
  line-height: ${({ theme: e }) => e.typography.size.m1}px;
  color: ${({ theme: e }) => e.color.darker};
`),
          (Om = B.button`
  all: unset;
  cursor: pointer;
  font-size: 13px;
  color: #798186;
  padding-bottom: 20px;

  &:focus-visible {
    outline: auto;
  }
`),
          (Cm = B(ji)`
  margin-left: 2px;
  height: 10px;
`),
          (Am = B.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
`),
          (Rm = St`
  0% { transform: translate(0px, 0px) }
  50% { transform: translate(-200px, 0px) }
  100% { transform: translate(0px, 0px) }
`),
          (Im = B.div`
  position: absolute;
  width: 1200px;
  height: 1200px;
  left: -200px;
  top: -900px;
  background: radial-gradient(
    circle at center,
    rgba(253, 255, 147, 1) 0%,
    rgba(253, 255, 147, 0) 70%
  );
  animation: ${Rm} 4s linear infinite;
  animation-timing-function: ease-in-out;
  z-index: 3;
`),
          (km = St`
  0% { transform: translate(0px, 0px) }
  50% { transform: translate(400px, 0px) }
  100% { transform: translate(0px, 0px) }
`),
          (Mm = B.div`
  position: absolute;
  width: 1200px;
  height: 1200px;
  left: -600px;
  top: -840px;
  background: radial-gradient(
    circle at center,
    rgba(255, 119, 119, 1) 0%,
    rgba(255, 119, 119, 0) 70%
  );
  animation: ${km} 6s linear infinite;
  animation-timing-function: ease-in-out;
  z-index: 2;
`),
          (Dm = St`
  0% { transform: translate(600px, -40px) }
  50% { transform: translate(600px, -200px) }
  100% { transform: translate(600px, -40px) }
`),
          (Lm = B.div`
  position: absolute;
  width: 1200px;
  height: 1200px;
  left: -600px;
  top: -840px;
  background: radial-gradient(
    circle at center,
    rgba(119, 255, 247, 0.8) 0%,
    rgba(119, 255, 247, 0) 70%
  );
  animation: ${Dm} 4s linear infinite;
  animation-timing-function: ease-in-out;
  z-index: 4;
`);
        B.h2`
  color: #000;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
`;
        B.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #454e54;
`;
        (Nm = ({ onProceed: e, skipOnboarding: t }) =>
          g.createElement(
            'div',
            { style: { zIndex: 10 } },
            g.createElement(
              $l,
              { width: 540, height: 430, defaultOpen: !0 },
              ({ Close: n }) =>
                g.createElement(
                  Em,
                  { 'data-chromatic': 'ignore' },
                  g.createElement(
                    Tm,
                    null,
                    g.createElement(wm, null),
                    g.createElement(Sm, null, 'Welcome to Storybook'),
                    g.createElement(
                      Pm,
                      null,
                      'Storybook helps you develop UI components faster. Learn the basics in a few simple steps.'
                    ),
                    g.createElement(
                      Le,
                      { style: { marginTop: 4 }, onClick: e },
                      'Start your 3 minute tour'
                    )
                  ),
                  g.createElement(
                    Om,
                    { onClick: t },
                    'Skip tour',
                    g.createElement(Cm, null)
                  ),
                  g.createElement(
                    Am,
                    null,
                    g.createElement(Im, null),
                    g.createElement(Mm, null),
                    g.createElement(Lm, null)
                  )
                )
            )
          )),
          (ka = ct(Lu()));
        (Bm = ['x', 'y', 'top', 'bottom', 'left', 'right', 'width', 'height']),
          (_m = (e, t) => Bm.every((n) => e[n] === t[n])),
          (Xl = Be({
            transformPagePoint: (e) => e,
            isStatic: !1,
            reducedMotion: 'never',
          })),
          (Rr = Be({})),
          (Qo = Be(null)),
          (Ir = typeof document < 'u'),
          (zm = Ir ? Bt : U),
          (Ql = Be({ strict: !1 })),
          (Zo = (e) => e.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()),
          (Um = 'framerAppearId'),
          (Zl = 'data-' + Zo(Um)),
          (Jl = { skipAnimations: !1, useManualTiming: !1 }),
          (Ma = class {
            constructor() {
              (this.order = []), (this.scheduled = new Set());
            }
            add(e) {
              if (!this.scheduled.has(e))
                return this.scheduled.add(e), this.order.push(e), !0;
            }
            remove(e) {
              let t = this.order.indexOf(e);
              t !== -1 && (this.order.splice(t, 1), this.scheduled.delete(e));
            }
            clear() {
              (this.order.length = 0), this.scheduled.clear();
            }
          });
        (Qn = [
          'prepare',
          'read',
          'update',
          'preRender',
          'render',
          'postRender',
        ]),
          (Hm = 40);
        ({ schedule: Jo, cancel: YO } = ec(queueMicrotask, !1));
        (ei = [
          'animate',
          'whileInView',
          'whileFocus',
          'whileHover',
          'whileTap',
          'whileDrag',
          'exit',
        ]),
          (ti = ['initial', ...ei]);
        (La = {
          animation: [
            'animate',
            'variants',
            'whileHover',
            'whileTap',
            'exit',
            'whileInView',
            'whileFocus',
            'whileDrag',
          ],
          exit: ['exit'],
          drag: ['drag', 'dragControls'],
          focus: ['whileFocus'],
          hover: ['whileHover', 'onHoverStart', 'onHoverEnd'],
          tap: ['whileTap', 'onTap', 'onTapStart', 'onTapCancel'],
          pan: ['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd'],
          inView: ['whileInView', 'onViewportEnter', 'onViewportLeave'],
          layout: ['layout', 'layoutId'],
        }),
          (Sn = {});
        for (let e in La)
          Sn[e] = { isEnabled: (t) => La[e].some((n) => !!t[n]) };
        (nc = Be({})),
          (rc = Be({})),
          (Xm = Symbol.for('motionComponentSymbol'));
        eg = [
          'animate',
          'circle',
          'defs',
          'desc',
          'ellipse',
          'g',
          'image',
          'line',
          'filter',
          'marker',
          'mask',
          'metadata',
          'path',
          'pattern',
          'polygon',
          'polyline',
          'rect',
          'stop',
          'switch',
          'symbol',
          'svg',
          'text',
          'tspan',
          'use',
          'view',
        ];
        hr = {};
        (Nn = [
          'transformPerspective',
          'x',
          'y',
          'z',
          'translateX',
          'translateY',
          'translateZ',
          'scale',
          'scaleX',
          'scaleY',
          'rotate',
          'rotateX',
          'rotateY',
          'rotateZ',
          'skew',
          'skewX',
          'skewY',
        ]),
          (Nt = new Set(Nn));
        (Ce = (e) => !!(e && e.getVelocity)),
          (ng = {
            x: 'translateX',
            y: 'translateY',
            z: 'translateZ',
            transformPerspective: 'perspective',
          }),
          (rg = Nn.length);
        (ic = (e) => (t) => typeof t == 'string' && t.startsWith(e)),
          (ac = ic('--')),
          (ig = ic('var(--')),
          (fr = (e) => ig(e) && ag.test(e)),
          (ag =
            /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)$/i),
          (sg = (e, t) => (t && typeof e == 'number' ? t.transform(e) : e)),
          (wt = (e, t, n) => (n > t ? t : n < e ? e : n)),
          (nn = {
            test: (e) => typeof e == 'number',
            parse: parseFloat,
            transform: (e) => e,
          }),
          (vn = { ...nn, transform: (e) => wt(0, 1, e) }),
          (Zn = { ...nn, default: 1 }),
          (bn = (e) => Math.round(e * 1e5) / 1e5),
          (ri = /(-)?([\d]*\.?[\d])+/g),
          (lg =
            /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi),
          (cg =
            /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i);
        (jn = (e) => ({
          test: (t) => Fn(t) && t.endsWith(e) && t.split(' ').length === 1,
          parse: parseFloat,
          transform: (t) => `${t}${e}`,
        })),
          (ht = jn('deg')),
          (Xe = jn('%')),
          (F = jn('px')),
          (ug = jn('vh')),
          (dg = jn('vw')),
          (Na = {
            ...Xe,
            parse: (e) => Xe.parse(e) / 100,
            transform: (e) => Xe.transform(e * 100),
          }),
          (Fa = { ...nn, transform: Math.round }),
          (sc = {
            borderWidth: F,
            borderTopWidth: F,
            borderRightWidth: F,
            borderBottomWidth: F,
            borderLeftWidth: F,
            borderRadius: F,
            radius: F,
            borderTopLeftRadius: F,
            borderTopRightRadius: F,
            borderBottomRightRadius: F,
            borderBottomLeftRadius: F,
            width: F,
            maxWidth: F,
            height: F,
            maxHeight: F,
            size: F,
            top: F,
            right: F,
            bottom: F,
            left: F,
            padding: F,
            paddingTop: F,
            paddingRight: F,
            paddingBottom: F,
            paddingLeft: F,
            margin: F,
            marginTop: F,
            marginRight: F,
            marginBottom: F,
            marginLeft: F,
            rotate: ht,
            rotateX: ht,
            rotateY: ht,
            rotateZ: ht,
            scale: Zn,
            scaleX: Zn,
            scaleY: Zn,
            scaleZ: Zn,
            skew: ht,
            skewX: ht,
            skewY: ht,
            distance: F,
            translateX: F,
            translateY: F,
            translateZ: F,
            x: F,
            y: F,
            z: F,
            perspective: F,
            transformPerspective: F,
            opacity: vn,
            originX: Na,
            originY: Na,
            originZ: F,
            zIndex: Fa,
            fillOpacity: vn,
            strokeOpacity: vn,
            numOctaves: Fa,
          });
        ii = () => ({
          style: {},
          transform: {},
          transformOrigin: {},
          vars: {},
        });
        mg = new Set([
          'animate',
          'exit',
          'variants',
          'initial',
          'style',
          'values',
          'variants',
          'transition',
          'transformTemplate',
          'custom',
          'inherit',
          'onBeforeLayoutMeasure',
          'onAnimationStart',
          'onAnimationComplete',
          'onUpdate',
          'onDragStart',
          'onDrag',
          'onDragEnd',
          'onMeasureDragConstraints',
          'onDirectionLock',
          'onDragTransitionEnd',
          '_dragX',
          '_dragY',
          'onHoverStart',
          'onHoverEnd',
          'onViewportEnter',
          'onViewportLeave',
          'globalTapTarget',
          'ignoreStrict',
          'viewport',
        ]);
        cc = (e) => !mr(e);
        try {
          gg((ju(), Su(Ys)).default);
        } catch {}
        (bg = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' }),
          (xg = { offset: 'strokeDashoffset', array: 'strokeDasharray' });
        (uc = () => ({ ...ii(), attrs: {} })),
          (si = (e) => typeof e == 'string' && e.toLowerCase() === 'svg');
        pc = new Set([
          'baseFrequency',
          'diffuseConstant',
          'kernelMatrix',
          'kernelUnitLength',
          'keySplines',
          'keyTimes',
          'limitingConeAngle',
          'markerHeight',
          'markerWidth',
          'numOctaves',
          'targetX',
          'targetY',
          'surfaceScale',
          'specularConstant',
          'specularExponent',
          'stdDeviation',
          'tableValues',
          'viewBox',
          'gradientTransform',
          'pathLength',
          'startOffset',
          'textLength',
          'lengthAdjust',
        ]);
        (gr = (e) => Array.isArray(e)),
          (Pg = (e) => !!(e && typeof e == 'object' && e.mix && e.toValue)),
          (Og = (e) => (gr(e) ? e[e.length - 1] || 0 : e));
        mc = (e) => (t, n) => {
          let r = me(Rr),
            o = me(Qo),
            i = () => Cg(e, t, r, o);
          return n ? i() : Sg(i);
        };
        (he = (e) => e),
          ({
            schedule: ie,
            cancel: lt,
            state: ve,
            steps: to,
          } = ec(
            typeof requestAnimationFrame < 'u' ? requestAnimationFrame : he,
            !0
          )),
          (Rg = {
            useVisualState: mc({
              scrapeMotionValuesFromProps: fc,
              createRenderState: uc,
              onMount: (e, t, { renderState: n, latestValues: r }) => {
                ie.read(() => {
                  try {
                    n.dimensions =
                      typeof t.getBBox == 'function'
                        ? t.getBBox()
                        : t.getBoundingClientRect();
                  } catch {
                    n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                  }
                }),
                  ie.render(() => {
                    ai(
                      n,
                      r,
                      { enableHardwareAcceleration: !1 },
                      si(t.tagName),
                      e.transformTemplate
                    ),
                      hc(t, n);
                  });
              },
            }),
          }),
          (Ig = {
            useVisualState: mc({
              scrapeMotionValuesFromProps: li,
              createRenderState: ii,
            }),
          });
        gc = (e) =>
          e.pointerType === 'mouse'
            ? typeof e.button != 'number' || e.button <= 0
            : e.isPrimary !== !1;
        Mg = (e) => (t) => gc(t) && e(t, Dr(t));
        (Dg = (e, t) => (n) => t(e(n))), (at = (...e) => e.reduce(Dg));
        (Va = yc('dragHorizontal')), (Ba = yc('dragVertical'));
        Tt = class {
          constructor(e) {
            (this.isMounted = !1), (this.node = e);
          }
          update() {}
        };
        (Lg = class extends Tt {
          mount() {
            this.unmount = at(_a(this.node, !0), _a(this.node, !1));
          }
          unmount() {}
        }),
          (Ng = class extends Tt {
            constructor() {
              super(...arguments), (this.isActive = !1);
            }
            onFocus() {
              let e = !1;
              try {
                e = this.node.current.matches(':focus-visible');
              } catch {
                e = !0;
              }
              !e ||
                !this.node.animationState ||
                (this.node.animationState.setActive('whileFocus', !0),
                (this.isActive = !0));
            }
            onBlur() {
              !this.isActive ||
                !this.node.animationState ||
                (this.node.animationState.setActive('whileFocus', !1),
                (this.isActive = !1));
            }
            mount() {
              this.unmount = at(
                ot(this.node.current, 'focus', () => this.onFocus()),
                ot(this.node.current, 'blur', () => this.onBlur())
              );
            }
            unmount() {}
          }),
          (xc = (e, t) => (t ? (e === t ? !0 : xc(e, t.parentElement)) : !1));
        (Fg = class extends Tt {
          constructor() {
            super(...arguments),
              (this.removeStartListeners = he),
              (this.removeEndListeners = he),
              (this.removeAccessibleListeners = he),
              (this.startPointerPress = (e, t) => {
                if (this.isPressing) return;
                this.removeEndListeners();
                let n = this.node.getProps(),
                  r = it(
                    window,
                    'pointerup',
                    (i, a) => {
                      if (!this.checkPressEnd()) return;
                      let {
                        onTap: s,
                        onTapCancel: c,
                        globalTapTarget: l,
                      } = this.node.getProps();
                      ie.update(() => {
                        !l && !xc(this.node.current, i.target)
                          ? c && c(i, a)
                          : s && s(i, a);
                      });
                    },
                    { passive: !(n.onTap || n.onPointerUp) }
                  ),
                  o = it(
                    window,
                    'pointercancel',
                    (i, a) => this.cancelPress(i, a),
                    { passive: !(n.onTapCancel || n.onPointerCancel) }
                  );
                (this.removeEndListeners = at(r, o)), this.startPress(e, t);
              }),
              (this.startAccessiblePress = () => {
                let e = (o) => {
                    if (o.key !== 'Enter' || this.isPressing) return;
                    let i = (a) => {
                      a.key !== 'Enter' ||
                        !this.checkPressEnd() ||
                        no('up', (s, c) => {
                          let { onTap: l } = this.node.getProps();
                          l && ie.update(() => l(s, c));
                        });
                    };
                    this.removeEndListeners(),
                      (this.removeEndListeners = ot(
                        this.node.current,
                        'keyup',
                        i
                      )),
                      no('down', (a, s) => {
                        this.startPress(a, s);
                      });
                  },
                  t = ot(this.node.current, 'keydown', e),
                  n = () => {
                    this.isPressing &&
                      no('cancel', (o, i) => this.cancelPress(o, i));
                  },
                  r = ot(this.node.current, 'blur', n);
                this.removeAccessibleListeners = at(t, r);
              });
          }
          startPress(e, t) {
            this.isPressing = !0;
            let { onTapStart: n, whileTap: r } = this.node.getProps();
            r &&
              this.node.animationState &&
              this.node.animationState.setActive('whileTap', !0),
              n && ie.update(() => n(e, t));
          }
          checkPressEnd() {
            return (
              this.removeEndListeners(),
              (this.isPressing = !1),
              this.node.getProps().whileTap &&
                this.node.animationState &&
                this.node.animationState.setActive('whileTap', !1),
              !bc()
            );
          }
          cancelPress(e, t) {
            if (!this.checkPressEnd()) return;
            let { onTapCancel: n } = this.node.getProps();
            n && ie.update(() => n(e, t));
          }
          mount() {
            let e = this.node.getProps(),
              t = it(
                e.globalTapTarget ? window : this.node.current,
                'pointerdown',
                this.startPointerPress,
                { passive: !(e.onTapStart || e.onPointerStart) }
              ),
              n = ot(this.node.current, 'focus', this.startAccessiblePress);
            this.removeStartListeners = at(t, n);
          }
          unmount() {
            this.removeStartListeners(),
              this.removeEndListeners(),
              this.removeAccessibleListeners();
          }
        }),
          (Oo = new WeakMap()),
          (ro = new WeakMap()),
          (jg = (e) => {
            let t = Oo.get(e.target);
            t && t(e);
          }),
          (Vg = (e) => {
            e.forEach(jg);
          });
        (zg = { some: 0, all: 1 }),
          (Ug = class extends Tt {
            constructor() {
              super(...arguments),
                (this.hasEnteredView = !1),
                (this.isInView = !1);
            }
            startObserver() {
              this.unmount();
              let { viewport: e = {} } = this.node.getProps(),
                { root: t, margin: n, amount: r = 'some', once: o } = e,
                i = {
                  root: t ? t.current : void 0,
                  rootMargin: n,
                  threshold: typeof r == 'number' ? r : zg[r],
                },
                a = (s) => {
                  let { isIntersecting: c } = s;
                  if (
                    this.isInView === c ||
                    ((this.isInView = c), o && !c && this.hasEnteredView)
                  )
                    return;
                  c && (this.hasEnteredView = !0),
                    this.node.animationState &&
                      this.node.animationState.setActive('whileInView', c);
                  let { onViewportEnter: l, onViewportLeave: u } =
                      this.node.getProps(),
                    d = c ? l : u;
                  d && d(s);
                };
              return _g(this.node.current, i, a);
            }
            mount() {
              this.startObserver();
            }
            update() {
              if (typeof IntersectionObserver > 'u') return;
              let { props: e, prevProps: t } = this.node;
              ['amount', 'margin', 'root'].some(Wg(e, t)) &&
                this.startObserver();
            }
            unmount() {}
          });
        Hg = {
          inView: { Feature: Ug },
          tap: { Feature: Fg },
          focus: { Feature: Ng },
          hover: { Feature: Lg },
        };
        (Vn = he), (ze = he);
        (Vn = (e, t) => {
          !e && typeof console < 'u' && console.warn(t);
        }),
          (ze = (e, t) => {
            if (!e) throw new Error(t);
          });
        (vt = (e) => e * 1e3),
          (st = (e) => e / 1e3),
          (qg = { current: !1 }),
          (Ec = (e) => Array.isArray(e) && typeof e[0] == 'number');
        (gn = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`),
          (Sc = {
            linear: 'linear',
            ease: 'ease',
            easeIn: 'ease-in',
            easeOut: 'ease-out',
            easeInOut: 'ease-in-out',
            circIn: gn([0, 0.65, 0.55, 1]),
            circOut: gn([0.55, 0, 1, 0.45]),
            backIn: gn([0.31, 0.01, 0.66, -0.59]),
            backOut: gn([0.33, 1.53, 0.69, 0.99]),
          });
        (Oc = (e, t, n) =>
          (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e),
          (Xg = 1e-7),
          (Qg = 12);
        (Jg = Bn(0.42, 0, 1, 1)),
          (ey = Bn(0, 0, 0.58, 1)),
          (Cc = Bn(0.42, 0, 0.58, 1)),
          (ty = (e) => Array.isArray(e) && typeof e[0] != 'number'),
          (Ac = (e) => (t) =>
            t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
          (Rc = (e) => (t) => 1 - e(1 - t)),
          (ui = (e) => 1 - Math.sin(Math.acos(e))),
          (Ic = Rc(ui)),
          (ny = Ac(ui)),
          (kc = Bn(0.33, 1.53, 0.69, 0.99)),
          (di = Rc(kc)),
          (ry = Ac(di)),
          (oy = (e) =>
            (e *= 2) < 1
              ? 0.5 * di(e)
              : 0.5 * (2 - Math.pow(2, -10 * (e - 1)))),
          (za = {
            linear: he,
            easeIn: Jg,
            easeInOut: Cc,
            easeOut: ey,
            circIn: ui,
            circInOut: ny,
            circOut: Ic,
            backIn: di,
            backInOut: ry,
            backOut: kc,
            anticipate: oy,
          }),
          (Ua = (e) => {
            if (Array.isArray(e)) {
              ze(
                e.length === 4,
                'Cubic bezier arrays must contain four numerical values.'
              );
              let [t, n, r, o] = e;
              return Bn(t, n, r, o);
            } else if (typeof e == 'string')
              return ze(za[e] !== void 0, `Invalid easing type '${e}'`), za[e];
            return e;
          }),
          (Pn = (e, t, n) => {
            let r = t - e;
            return r === 0 ? 1 : (n - e) / r;
          }),
          (oe = (e, t, n) => e + (t - e) * n);
        (pi = (e, t) => (n) =>
          !!(
            (Fn(n) && cg.test(n) && n.startsWith(e)) ||
            (t && Object.prototype.hasOwnProperty.call(n, t))
          )),
          (Mc = (e, t, n) => (r) => {
            if (!Fn(r)) return r;
            let [o, i, a, s] = r.match(ri);
            return {
              [e]: parseFloat(o),
              [t]: parseFloat(i),
              [n]: parseFloat(a),
              alpha: s !== void 0 ? parseFloat(s) : 1,
            };
          }),
          (ay = (e) => wt(0, 255, e)),
          (io = { ...nn, transform: (e) => Math.round(ay(e)) }),
          (Rt = {
            test: pi('rgb', 'red'),
            parse: Mc('red', 'green', 'blue'),
            transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
              'rgba(' +
              io.transform(e) +
              ', ' +
              io.transform(t) +
              ', ' +
              io.transform(n) +
              ', ' +
              bn(vn.transform(r)) +
              ')',
          });
        (Co = { test: pi('#'), parse: sy, transform: Rt.transform }),
          (Ht = {
            test: pi('hsl', 'hue'),
            parse: Mc('hue', 'saturation', 'lightness'),
            transform: ({
              hue: e,
              saturation: t,
              lightness: n,
              alpha: r = 1,
            }) =>
              'hsla(' +
              Math.round(e) +
              ', ' +
              Xe.transform(bn(t)) +
              ', ' +
              Xe.transform(bn(n)) +
              ', ' +
              bn(vn.transform(r)) +
              ')',
          }),
          (ao = (e, t, n) => {
            let r = e * e,
              o = n * (t * t - r) + r;
            return o < 0 ? 0 : Math.sqrt(o);
          }),
          (ly = [Co, Rt, Ht]),
          (cy = (e) => ly.find((t) => t.test(e)));
        (Ha = (e, t) => {
          let n = Wa(e),
            r = Wa(t),
            o = { ...n };
          return (i) => (
            (o.red = ao(n.red, r.red, i)),
            (o.green = ao(n.green, r.green, i)),
            (o.blue = ao(n.blue, r.blue, i)),
            (o.alpha = oe(n.alpha, r.alpha, i)),
            Rt.transform(o)
          );
        }),
          (we = {
            test: (e) => Rt.test(e) || Co.test(e) || Ht.test(e),
            parse: (e) =>
              Rt.test(e) ? Rt.parse(e) : Ht.test(e) ? Ht.parse(e) : Co.parse(e),
            transform: (e) =>
              Fn(e)
                ? e
                : e.hasOwnProperty('red')
                ? Rt.transform(e)
                : Ht.transform(e),
          });
        (Dc = 'number'),
          (Lc = 'color'),
          (dy = 'var'),
          (py = 'var('),
          (Ya = '${}'),
          (Ga =
            /(var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\))|(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))|((-)?([\d]*\.?[\d])+)/gi);
        hy = (e) => (typeof e == 'number' ? 0 : e);
        Et = {
          test: uy,
          parse: Nc,
          createTransformer: Fc,
          getAnimatableNone: fy,
        };
        vy = (e, t) => {
          let n = Et.createTransformer(t),
            r = yr(e),
            o = yr(t);
          return r.indexes.var.length === o.indexes.var.length &&
            r.indexes.color.length === o.indexes.color.length &&
            r.indexes.number.length >= o.indexes.number.length
            ? at(jc(yy(r, o), o.values), n)
            : (Vn(
                !0,
                `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
              ),
              Ao(e, t));
        };
        Py = 5;
        (so = 0.001), (Oy = 0.01), (qa = 10), (Cy = 0.05), (Ay = 1);
        Iy = 12;
        (My = ['duration', 'bounce']), (Dy = ['stiffness', 'damping', 'mass']);
        (kt = {
          now: () => (
            ar === void 0 &&
              kt.set(
                ve.isProcessing || Jl.useManualTiming
                  ? ve.timestamp
                  : performance.now()
              ),
            ar
          ),
          set: (e) => {
            (ar = e), queueMicrotask(Ny);
          },
        }),
          (Fy = (e) => {
            let t = ({ timestamp: n }) => e(n);
            return {
              start: () => ie.update(t, !0),
              stop: () => lt(t),
              now: () => (ve.isProcessing ? ve.timestamp : kt.now()),
            };
          });
        (jy = { decay: Ka, inertia: Ka, tween: vr, keyframes: vr, spring: zc }),
          (Vy = (e) => e / 100);
        (_y = By(() =>
          Object.hasOwnProperty.call(Element.prototype, 'animate')
        )),
          (zy = new Set(['opacity', 'clipPath', 'filter', 'transform'])),
          (Jn = 10),
          (Uy = 2e4),
          (Wy = (e, t) =>
            t.type === 'spring' || e === 'backgroundColor' || !Tc(t.ease));
        (Gy = { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 }),
          (qy = (e) => ({
            type: 'spring',
            stiffness: 550,
            damping: e === 0 ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10,
          })),
          ($y = { type: 'keyframes', duration: 0.8 }),
          (Ky = {
            type: 'keyframes',
            ease: [0.25, 0.1, 0.35, 1],
            duration: 0.3,
          }),
          (Xy = (e, { keyframes: t }) =>
            t.length > 2
              ? $y
              : Nt.has(e)
              ? e.startsWith('scale')
                ? qy(t[1])
                : Gy
              : Ky),
          (Io = (e, t) =>
            e === 'zIndex'
              ? !1
              : !!(
                  typeof t == 'number' ||
                  Array.isArray(t) ||
                  (typeof t == 'string' &&
                    (Et.test(t) || t === '0') &&
                    !t.startsWith('url('))
                )),
          (Qy = new Set(['brightness', 'contrast', 'saturate', 'opacity']));
        (Jy = /([a-z-]*)\(.*?\)/g),
          (ko = {
            ...Et,
            getAnimatableNone: (e) => {
              let t = e.match(Jy);
              return t ? t.map(Zy).join(' ') : e;
            },
          }),
          (ev = {
            ...sc,
            color: we,
            backgroundColor: we,
            outlineColor: we,
            fill: we,
            stroke: we,
            borderColor: we,
            borderTopColor: we,
            borderRightColor: we,
            borderBottomColor: we,
            borderLeftColor: we,
            filter: ko,
            WebkitFilter: ko,
          }),
          (fi = (e) => ev[e]);
        Wc = (e) => /^0[^.\s]+$/.test(e);
        gi =
          (e, t, n, r = {}) =>
          (o) => {
            let i = mi(r, e) || {},
              a = i.delay || r.delay || 0,
              { elapsed: s = 0 } = r;
            s = s - vt(a);
            let c = nv(t, e, n, i),
              l = c[0],
              u = c[c.length - 1],
              d = Io(e, l),
              p = Io(e, u);
            Vn(
              d === p,
              `You are trying to animate ${e} from "${l}" to "${u}". ${l} is not an animatable value - to enable this animation set ${l} to a value animatable to ${u} via the \`style\` property.`
            );
            let h = {
              keyframes: c,
              velocity: t.getVelocity(),
              ease: 'easeOut',
              ...i,
              delay: -s,
              onUpdate: (f) => {
                t.set(f), i.onUpdate && i.onUpdate(f);
              },
              onComplete: () => {
                o(), i.onComplete && i.onComplete();
              },
            };
            if (
              (rv(i) || (h = { ...h, ...Xy(e, h) }),
              h.duration && (h.duration = vt(h.duration)),
              h.repeatDelay && (h.repeatDelay = vt(h.repeatDelay)),
              !d || !p || qg.current || i.type === !1 || Jl.skipAnimations)
            )
              return Yy(h);
            if (
              !r.isHandoff &&
              t.owner &&
              t.owner.current instanceof HTMLElement &&
              !t.owner.getProps().onUpdate
            ) {
              let f = Hy(t, e, h);
              if (f) return f;
            }
            return br(h);
          };
        Hc = (e) => /^\-?\d*\.?\d+$/.test(e);
        (bi = class {
          constructor() {
            this.subscriptions = [];
          }
          add(e) {
            return yi(this.subscriptions, e), () => vi(this.subscriptions, e);
          }
          notify(e, t, n) {
            let r = this.subscriptions.length;
            if (r)
              if (r === 1) this.subscriptions[0](e, t, n);
              else
                for (let o = 0; o < r; o++) {
                  let i = this.subscriptions[o];
                  i && i(e, t, n);
                }
          }
          getSize() {
            return this.subscriptions.length;
          }
          clear() {
            this.subscriptions.length = 0;
          }
        }),
          (Qa = new Set());
        (Za = 30),
          (ov = (e) => !isNaN(parseFloat(e))),
          (iv = class {
            constructor(e, t = {}) {
              (this.version = '11.0.6'),
                (this.canTrackVelocity = !1),
                (this.events = {}),
                (this.updateAndNotify = (n, r = !0) => {
                  let o = kt.now();
                  this.updatedAt !== o && this.setPrevFrameValue(),
                    (this.prev = this.current),
                    this.setCurrent(n),
                    this.current !== this.prev &&
                      this.events.change &&
                      this.events.change.notify(this.current),
                    r &&
                      this.events.renderRequest &&
                      this.events.renderRequest.notify(this.current);
                }),
                (this.hasAnimated = !1),
                this.setCurrent(e),
                (this.canTrackVelocity = ov(this.current)),
                (this.owner = t.owner);
            }
            setCurrent(e) {
              (this.current = e), (this.updatedAt = kt.now());
            }
            setPrevFrameValue(e = this.current) {
              (this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt);
            }
            onChange(e) {
              return (
                xi(
                  !1,
                  'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'
                ),
                this.on('change', e)
              );
            }
            on(e, t) {
              this.events[e] || (this.events[e] = new bi());
              let n = this.events[e].add(t);
              return e === 'change'
                ? () => {
                    n(),
                      ie.read(() => {
                        this.events.change.getSize() || this.stop();
                      });
                  }
                : n;
            }
            clearListeners() {
              for (let e in this.events) this.events[e].clear();
            }
            attach(e, t) {
              (this.passiveEffect = e), (this.stopPassiveEffect = t);
            }
            set(e, t = !0) {
              !t || !this.passiveEffect
                ? this.updateAndNotify(e, t)
                : this.passiveEffect(e, this.updateAndNotify);
            }
            setWithVelocity(e, t, n) {
              this.set(t),
                (this.prev = void 0),
                (this.prevFrameValue = e),
                (this.prevUpdatedAt = this.updatedAt - n);
            }
            jump(e) {
              this.updateAndNotify(e),
                (this.prev = e),
                (this.prevUpdatedAt = this.prevFrameValue = void 0),
                this.stop(),
                this.stopPassiveEffect && this.stopPassiveEffect();
            }
            get() {
              return this.current;
            }
            getPrevious() {
              return this.prev;
            }
            getVelocity() {
              let e = kt.now();
              if (
                !this.canTrackVelocity ||
                this.prevFrameValue === void 0 ||
                e - this.updatedAt > Za
              )
                return 0;
              let t = Math.min(this.updatedAt - this.prevUpdatedAt, Za);
              return Bc(
                parseFloat(this.current) - parseFloat(this.prevFrameValue),
                t
              );
            }
            start(e) {
              return (
                this.stop(),
                new Promise((t) => {
                  (this.hasAnimated = !0),
                    (this.animation = e(t)),
                    this.events.animationStart &&
                      this.events.animationStart.notify();
                }).then(() => {
                  this.events.animationComplete &&
                    this.events.animationComplete.notify(),
                    this.clearAnimation();
                })
              );
            }
            stop() {
              this.animation &&
                (this.animation.stop(),
                this.events.animationCancel &&
                  this.events.animationCancel.notify()),
                this.clearAnimation();
            }
            isAnimating() {
              return !!this.animation;
            }
            clearAnimation() {
              delete this.animation;
            }
            destroy() {
              this.clearListeners(),
                this.stop(),
                this.stopPassiveEffect && this.stopPassiveEffect();
            }
          });
        (Yc = (e) => (t) => t.test(e)),
          (av = { test: (e) => e === 'auto', parse: (e) => e }),
          (Gc = [nn, F, Xe, ht, dg, ug, av]),
          (fn = (e) => Gc.find(Yc(e))),
          (sv = [...Gc, we, Et]),
          (lv = (e) => sv.find(Yc(e)));
        (bv = [...ei].reverse()), (xv = ei.length);
        (Pv = class extends Tt {
          constructor(e) {
            super(e), e.animationState || (e.animationState = Ev(e));
          }
          updateAnimationControlsSubscription() {
            let { animate: e } = this.node.getProps();
            this.unmount(), kr(e) && (this.unmount = e.subscribe(this.node));
          }
          mount() {
            this.updateAnimationControlsSubscription();
          }
          update() {
            let { animate: e } = this.node.getProps(),
              { animate: t } = this.node.prevProps || {};
            e !== t && this.updateAnimationControlsSubscription();
          }
          unmount() {}
        }),
          (Ov = 0),
          (Cv = class extends Tt {
            constructor() {
              super(...arguments), (this.id = Ov++);
            }
            update() {
              if (!this.node.presenceContext) return;
              let {
                  isPresent: e,
                  onExitComplete: t,
                  custom: n,
                } = this.node.presenceContext,
                { isPresent: r } = this.node.prevPresenceContext || {};
              if (!this.node.animationState || e === r) return;
              let o = this.node.animationState.setActive('exit', !e, {
                custom: n ?? this.node.getProps().custom,
              });
              t && !e && o.then(() => t(this.id));
            }
            mount() {
              let { register: e } = this.node.presenceContext || {};
              e && (this.unmount = e(this.id));
            }
            unmount() {}
          }),
          (Av = { animation: { Feature: Pv }, exit: { Feature: Cv } }),
          (Ja = (e, t) => Math.abs(e - t));
        $c = class {
          constructor(
            e,
            t,
            {
              transformPagePoint: n,
              contextWindow: r,
              dragSnapToOrigin: o = !1,
            } = {}
          ) {
            if (
              ((this.startEvent = null),
              (this.lastMoveEvent = null),
              (this.lastMoveEventInfo = null),
              (this.handlers = {}),
              (this.contextWindow = window),
              (this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                let u = co(this.lastMoveEventInfo, this.history),
                  d = this.startEvent !== null,
                  p = Rv(u.offset, { x: 0, y: 0 }) >= 3;
                if (!d && !p) return;
                let { point: h } = u,
                  { timestamp: f } = ve;
                this.history.push({ ...h, timestamp: f });
                let { onStart: m, onMove: x } = this.handlers;
                d ||
                  (m && m(this.lastMoveEvent, u),
                  (this.startEvent = this.lastMoveEvent)),
                  x && x(this.lastMoveEvent, u);
              }),
              (this.handlePointerMove = (u, d) => {
                (this.lastMoveEvent = u),
                  (this.lastMoveEventInfo = lo(d, this.transformPagePoint)),
                  ie.update(this.updatePoint, !0);
              }),
              (this.handlePointerUp = (u, d) => {
                this.end();
                let {
                  onEnd: p,
                  onSessionEnd: h,
                  resumeAnimation: f,
                } = this.handlers;
                if (
                  (this.dragSnapToOrigin && f && f(),
                  !(this.lastMoveEvent && this.lastMoveEventInfo))
                )
                  return;
                let m = co(
                  u.type === 'pointercancel'
                    ? this.lastMoveEventInfo
                    : lo(d, this.transformPagePoint),
                  this.history
                );
                this.startEvent && p && p(u, m), h && h(u, m);
              }),
              !gc(e))
            )
              return;
            (this.dragSnapToOrigin = o),
              (this.handlers = t),
              (this.transformPagePoint = n),
              (this.contextWindow = r || window);
            let i = Dr(e),
              a = lo(i, this.transformPagePoint),
              { point: s } = a,
              { timestamp: c } = ve;
            this.history = [{ ...s, timestamp: c }];
            let { onSessionStart: l } = t;
            l && l(e, co(a, this.history)),
              (this.removeListeners = at(
                it(this.contextWindow, 'pointermove', this.handlePointerMove),
                it(this.contextWindow, 'pointerup', this.handlePointerUp),
                it(this.contextWindow, 'pointercancel', this.handlePointerUp)
              ));
          }
          updateHandlers(e) {
            this.handlers = e;
          }
          end() {
            this.removeListeners && this.removeListeners(),
              lt(this.updatePoint);
          }
        };
        Lo = 0.35;
        (ls = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 })),
          (Yt = () => ({ x: ls(), y: ls() })),
          (cs = () => ({ min: 0, max: 0 })),
          (pe = () => ({ x: cs(), y: cs() }));
        (Uv = ['x', 'scaleX', 'originX']), (Wv = ['y', 'scaleY', 'originY']);
        (eu = ({ current: e }) => (e ? e.ownerDocument.defaultView : null)),
          (Yv = new WeakMap()),
          (Gv = class {
            constructor(e) {
              (this.openGlobalLock = null),
                (this.isDragging = !1),
                (this.currentDirection = null),
                (this.originPoint = { x: 0, y: 0 }),
                (this.constraints = !1),
                (this.hasMutatedConstraints = !1),
                (this.elastic = pe()),
                (this.visualElement = e);
            }
            start(e, { snapToCursor: t = !1 } = {}) {
              let { presenceContext: n } = this.visualElement;
              if (n && n.isPresent === !1) return;
              let r = (l) => {
                  let { dragSnapToOrigin: u } = this.getProps();
                  u ? this.pauseAnimation() : this.stopAnimation(),
                    t && this.snapToCursor(Dr(l, 'page').point);
                },
                o = (l, u) => {
                  let {
                    drag: d,
                    dragPropagation: p,
                    onDragStart: h,
                  } = this.getProps();
                  if (
                    d &&
                    !p &&
                    (this.openGlobalLock && this.openGlobalLock(),
                    (this.openGlobalLock = vc(d)),
                    !this.openGlobalLock)
                  )
                    return;
                  (this.isDragging = !0),
                    (this.currentDirection = null),
                    this.resolveConstraints(),
                    this.visualElement.projection &&
                      ((this.visualElement.projection.isAnimationBlocked = !0),
                      (this.visualElement.projection.target = void 0)),
                    Ne((m) => {
                      let x = this.getAxisMotionValue(m).get() || 0;
                      if (Xe.test(x)) {
                        let { projection: v } = this.visualElement;
                        if (v && v.layout) {
                          let b = v.layout.layoutBox[m];
                          b && (x = ke(b) * (parseFloat(x) / 100));
                        }
                      }
                      this.originPoint[m] = x;
                    }),
                    h && ie.update(() => h(l, u), !1, !0);
                  let { animationState: f } = this.visualElement;
                  f && f.setActive('whileDrag', !0);
                },
                i = (l, u) => {
                  let {
                    dragPropagation: d,
                    dragDirectionLock: p,
                    onDirectionLock: h,
                    onDrag: f,
                  } = this.getProps();
                  if (!d && !this.openGlobalLock) return;
                  let { offset: m } = u;
                  if (p && this.currentDirection === null) {
                    (this.currentDirection = qv(m)),
                      this.currentDirection !== null &&
                        h &&
                        h(this.currentDirection);
                    return;
                  }
                  this.updateAxis('x', u.point, m),
                    this.updateAxis('y', u.point, m),
                    this.visualElement.render(),
                    f && f(l, u);
                },
                a = (l, u) => this.stop(l, u),
                s = () =>
                  Ne((l) => {
                    var u;
                    return (
                      this.getAnimationState(l) === 'paused' &&
                      ((u = this.getAxisMotionValue(l).animation) === null ||
                      u === void 0
                        ? void 0
                        : u.play())
                    );
                  }),
                { dragSnapToOrigin: c } = this.getProps();
              this.panSession = new $c(
                e,
                {
                  onSessionStart: r,
                  onStart: o,
                  onMove: i,
                  onSessionEnd: a,
                  resumeAnimation: s,
                },
                {
                  transformPagePoint:
                    this.visualElement.getTransformPagePoint(),
                  dragSnapToOrigin: c,
                  contextWindow: eu(this.visualElement),
                }
              );
            }
            stop(e, t) {
              let n = this.isDragging;
              if ((this.cancel(), !n)) return;
              let { velocity: r } = t;
              this.startAnimation(r);
              let { onDragEnd: o } = this.getProps();
              o && ie.update(() => o(e, t));
            }
            cancel() {
              this.isDragging = !1;
              let { projection: e, animationState: t } = this.visualElement;
              e && (e.isAnimationBlocked = !1),
                this.panSession && this.panSession.end(),
                (this.panSession = void 0);
              let { dragPropagation: n } = this.getProps();
              !n &&
                this.openGlobalLock &&
                (this.openGlobalLock(), (this.openGlobalLock = null)),
                t && t.setActive('whileDrag', !1);
            }
            updateAxis(e, t, n) {
              let { drag: r } = this.getProps();
              if (!n || !er(e, r, this.currentDirection)) return;
              let o = this.getAxisMotionValue(e),
                i = this.originPoint[e] + n[e];
              this.constraints &&
                this.constraints[e] &&
                (i = Dv(i, this.constraints[e], this.elastic[e])),
                o.set(i);
            }
            resolveConstraints() {
              var e;
              let { dragConstraints: t, dragElastic: n } = this.getProps(),
                r =
                  this.visualElement.projection &&
                  !this.visualElement.projection.layout
                    ? this.visualElement.projection.measure(!1)
                    : (e = this.visualElement.projection) === null ||
                      e === void 0
                    ? void 0
                    : e.layout,
                o = this.constraints;
              t && Wt(t)
                ? this.constraints ||
                  (this.constraints = this.resolveRefConstraints())
                : t && r
                ? (this.constraints = Lv(r.layoutBox, t))
                : (this.constraints = !1),
                (this.elastic = Vv(n)),
                o !== this.constraints &&
                  r &&
                  this.constraints &&
                  !this.hasMutatedConstraints &&
                  Ne((i) => {
                    this.getAxisMotionValue(i) &&
                      (this.constraints[i] = jv(
                        r.layoutBox[i],
                        this.constraints[i]
                      ));
                  });
            }
            resolveRefConstraints() {
              let { dragConstraints: e, onMeasureDragConstraints: t } =
                this.getProps();
              if (!e || !Wt(e)) return !1;
              let n = e.current;
              ze(
                n !== null,
                "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
              );
              let { projection: r } = this.visualElement;
              if (!r || !r.layout) return !1;
              let o = Hv(n, r.root, this.visualElement.getTransformPagePoint()),
                i = Nv(r.layout.layoutBox, o);
              if (t) {
                let a = t(Bv(i));
                (this.hasMutatedConstraints = !!a), a && (i = Xc(a));
              }
              return i;
            }
            startAnimation(e) {
              let {
                  drag: t,
                  dragMomentum: n,
                  dragElastic: r,
                  dragTransition: o,
                  dragSnapToOrigin: i,
                  onDragTransitionEnd: a,
                } = this.getProps(),
                s = this.constraints || {},
                c = Ne((l) => {
                  if (!er(l, t, this.currentDirection)) return;
                  let u = (s && s[l]) || {};
                  i && (u = { min: 0, max: 0 });
                  let d = r ? 200 : 1e6,
                    p = r ? 40 : 1e7,
                    h = {
                      type: 'inertia',
                      velocity: n ? e[l] : 0,
                      bounceStiffness: d,
                      bounceDamping: p,
                      timeConstant: 750,
                      restDelta: 1,
                      restSpeed: 10,
                      ...o,
                      ...u,
                    };
                  return this.startAxisValueAnimation(l, h);
                });
              return Promise.all(c).then(a);
            }
            startAxisValueAnimation(e, t) {
              let n = this.getAxisMotionValue(e);
              return n.start(gi(e, n, 0, t));
            }
            stopAnimation() {
              Ne((e) => this.getAxisMotionValue(e).stop());
            }
            pauseAnimation() {
              Ne((e) => {
                var t;
                return (t = this.getAxisMotionValue(e).animation) === null ||
                  t === void 0
                  ? void 0
                  : t.pause();
              });
            }
            getAnimationState(e) {
              var t;
              return (t = this.getAxisMotionValue(e).animation) === null ||
                t === void 0
                ? void 0
                : t.state;
            }
            getAxisMotionValue(e) {
              let t = '_drag' + e.toUpperCase(),
                n = this.visualElement.getProps();
              return (
                n[t] ||
                this.visualElement.getValue(
                  e,
                  (n.initial ? n.initial[e] : void 0) || 0
                )
              );
            }
            snapToCursor(e) {
              Ne((t) => {
                let { drag: n } = this.getProps();
                if (!er(t, n, this.currentDirection)) return;
                let { projection: r } = this.visualElement,
                  o = this.getAxisMotionValue(t);
                if (r && r.layout) {
                  let { min: i, max: a } = r.layout.layoutBox[t];
                  o.set(e[t] - oe(i, a, 0.5));
                }
              });
            }
            scalePositionWithinConstraints() {
              if (!this.visualElement.current) return;
              let { drag: e, dragConstraints: t } = this.getProps(),
                { projection: n } = this.visualElement;
              if (!Wt(t) || !n || !this.constraints) return;
              this.stopAnimation();
              let r = { x: 0, y: 0 };
              Ne((i) => {
                let a = this.getAxisMotionValue(i);
                if (a) {
                  let s = a.get();
                  r[i] = Fv({ min: s, max: s }, this.constraints[i]);
                }
              });
              let { transformTemplate: o } = this.visualElement.getProps();
              (this.visualElement.current.style.transform = o
                ? o({}, '')
                : 'none'),
                n.root && n.root.updateScroll(),
                n.updateLayout(),
                this.resolveConstraints(),
                Ne((i) => {
                  if (!er(i, e, null)) return;
                  let a = this.getAxisMotionValue(i),
                    { min: s, max: c } = this.constraints[i];
                  a.set(oe(s, c, r[i]));
                });
            }
            addListeners() {
              if (!this.visualElement.current) return;
              Yv.set(this.visualElement, this);
              let e = this.visualElement.current,
                t = it(e, 'pointerdown', (s) => {
                  let { drag: c, dragListener: l = !0 } = this.getProps();
                  c && l && this.start(s);
                }),
                n = () => {
                  let { dragConstraints: s } = this.getProps();
                  Wt(s) && (this.constraints = this.resolveRefConstraints());
                },
                { projection: r } = this.visualElement,
                o = r.addEventListener('measure', n);
              r &&
                !r.layout &&
                (r.root && r.root.updateScroll(), r.updateLayout()),
                n();
              let i = ot(window, 'resize', () =>
                  this.scalePositionWithinConstraints()
                ),
                a = r.addEventListener(
                  'didUpdate',
                  ({ delta: s, hasLayoutChanged: c }) => {
                    this.isDragging &&
                      c &&
                      (Ne((l) => {
                        let u = this.getAxisMotionValue(l);
                        u &&
                          ((this.originPoint[l] += s[l].translate),
                          u.set(u.get() + s[l].translate));
                      }),
                      this.visualElement.render());
                  }
                );
              return () => {
                i(), t(), o(), a && a();
              };
            }
            getProps() {
              let e = this.visualElement.getProps(),
                {
                  drag: t = !1,
                  dragDirectionLock: n = !1,
                  dragPropagation: r = !1,
                  dragConstraints: o = !1,
                  dragElastic: i = Lo,
                  dragMomentum: a = !0,
                } = e;
              return {
                ...e,
                drag: t,
                dragDirectionLock: n,
                dragPropagation: r,
                dragConstraints: o,
                dragElastic: i,
                dragMomentum: a,
              };
            }
          });
        ($v = class extends Tt {
          constructor(e) {
            super(e),
              (this.removeGroupControls = he),
              (this.removeListeners = he),
              (this.controls = new Gv(e));
          }
          mount() {
            let { dragControls: e } = this.node.getProps();
            e && (this.removeGroupControls = e.subscribe(this.controls)),
              (this.removeListeners = this.controls.addListeners() || he);
          }
          unmount() {
            this.removeGroupControls(), this.removeListeners();
          }
        }),
          (fs = (e) => (t, n) => {
            e && ie.update(() => e(t, n));
          }),
          (Kv = class extends Tt {
            constructor() {
              super(...arguments), (this.removePointerDownListener = he);
            }
            onPointerDown(e) {
              this.session = new $c(e, this.createPanHandlers(), {
                transformPagePoint: this.node.getTransformPagePoint(),
                contextWindow: eu(this.node),
              });
            }
            createPanHandlers() {
              let {
                onPanSessionStart: e,
                onPanStart: t,
                onPan: n,
                onPanEnd: r,
              } = this.node.getProps();
              return {
                onSessionStart: fs(e),
                onStart: fs(t),
                onMove: n,
                onEnd: (o, i) => {
                  delete this.session, r && ie.update(() => r(o, i));
                },
              };
            }
            mount() {
              this.removePointerDownListener = it(
                this.node.current,
                'pointerdown',
                (e) => this.onPointerDown(e)
              );
            }
            update() {
              this.session &&
                this.session.updateHandlers(this.createPanHandlers());
            }
            unmount() {
              this.removePointerDownListener(),
                this.session && this.session.end();
            }
          });
        sr = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
        (mn = {
          correct: (e, t) => {
            if (!t.target) return e;
            if (typeof e == 'string')
              if (F.test(e)) e = parseFloat(e);
              else return e;
            let n = ms(e, t.target.x),
              r = ms(e, t.target.y);
            return `${n}% ${r}%`;
          },
        }),
          (Qv = {
            correct: (e, { treeScale: t, projectionDelta: n }) => {
              let r = e,
                o = Et.parse(e);
              if (o.length > 5) return r;
              let i = Et.createTransformer(e),
                a = typeof o[0] != 'number' ? 1 : 0,
                s = n.x.scale * t.x,
                c = n.y.scale * t.y;
              (o[0 + a] /= s), (o[1 + a] /= c);
              let l = oe(s, c, 0.5);
              return (
                typeof o[2 + a] == 'number' && (o[2 + a] /= l),
                typeof o[3 + a] == 'number' && (o[3 + a] /= l),
                i(o)
              );
            },
          }),
          (Zv = class extends g.Component {
            componentDidMount() {
              let {
                  visualElement: e,
                  layoutGroup: t,
                  switchLayoutGroup: n,
                  layoutId: r,
                } = this.props,
                { projection: o } = e;
              tg(Jv),
                o &&
                  (t.group && t.group.add(o),
                  n && n.register && r && n.register(o),
                  o.root.didUpdate(),
                  o.addEventListener('animationComplete', () => {
                    this.safeToRemove();
                  }),
                  o.setOptions({
                    ...o.options,
                    onExitComplete: () => this.safeToRemove(),
                  })),
                (sr.hasEverUpdated = !0);
            }
            getSnapshotBeforeUpdate(e) {
              let {
                  layoutDependency: t,
                  visualElement: n,
                  drag: r,
                  isPresent: o,
                } = this.props,
                i = n.projection;
              return (
                i &&
                  ((i.isPresent = o),
                  r || e.layoutDependency !== t || t === void 0
                    ? i.willUpdate()
                    : this.safeToRemove(),
                  e.isPresent !== o &&
                    (o
                      ? i.promote()
                      : i.relegate() ||
                        ie.postRender(() => {
                          let a = i.getStack();
                          (!a || !a.members.length) && this.safeToRemove();
                        }))),
                null
              );
            }
            componentDidUpdate() {
              let { projection: e } = this.props.visualElement;
              e &&
                (e.root.didUpdate(),
                Jo.postRender(() => {
                  !e.currentAnimation && e.isLead() && this.safeToRemove();
                }));
            }
            componentWillUnmount() {
              let {
                  visualElement: e,
                  layoutGroup: t,
                  switchLayoutGroup: n,
                } = this.props,
                { projection: r } = e;
              r &&
                (r.scheduleCheckAfterUnmount(),
                t && t.group && t.group.remove(r),
                n && n.deregister && n.deregister(r));
            }
            safeToRemove() {
              let { safeToRemove: e } = this.props;
              e && e();
            }
            render() {
              return null;
            }
          });
        (Jv = {
          borderRadius: {
            ...mn,
            applyTo: [
              'borderTopLeftRadius',
              'borderTopRightRadius',
              'borderBottomLeftRadius',
              'borderBottomRightRadius',
            ],
          },
          borderTopLeftRadius: mn,
          borderTopRightRadius: mn,
          borderBottomLeftRadius: mn,
          borderBottomRightRadius: mn,
          boxShadow: Qv,
        }),
          (nu = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight']),
          (e0 = nu.length),
          (gs = (e) => (typeof e == 'string' ? parseFloat(e) : e)),
          (ys = (e) => typeof e == 'number' || F.test(e));
        (n0 = ru(0, 0.5, Ic)), (r0 = ru(0.5, 0.95, he));
        (i0 = ['x', 'scaleX', 'originX']), (a0 = ['y', 'scaleY', 'originY']);
        l0 = class {
          constructor() {
            this.members = [];
          }
          add(e) {
            yi(this.members, e), e.scheduleRender();
          }
          remove(e) {
            if (
              (vi(this.members, e),
              e === this.prevLead && (this.prevLead = void 0),
              e === this.lead)
            ) {
              let t = this.members[this.members.length - 1];
              t && this.promote(t);
            }
          }
          relegate(e) {
            let t = this.members.findIndex((r) => e === r);
            if (t === 0) return !1;
            let n;
            for (let r = t; r >= 0; r--) {
              let o = this.members[r];
              if (o.isPresent !== !1) {
                n = o;
                break;
              }
            }
            return n ? (this.promote(n), !0) : !1;
          }
          promote(e, t) {
            let n = this.lead;
            if (
              e !== n &&
              ((this.prevLead = n), (this.lead = e), e.show(), n)
            ) {
              n.instance && n.scheduleRender(),
                e.scheduleRender(),
                (e.resumeFrom = n),
                t && (e.resumeFrom.preserveOpacity = !0),
                n.snapshot &&
                  ((e.snapshot = n.snapshot),
                  (e.snapshot.latestValues =
                    n.animationValues || n.latestValues)),
                e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
              let { crossfade: r } = e.options;
              r === !1 && n.hide();
            }
          }
          exitAnimationComplete() {
            this.members.forEach((e) => {
              let { options: t, resumingFrom: n } = e;
              t.onExitComplete && t.onExitComplete(),
                n && n.options.onExitComplete && n.options.onExitComplete();
            });
          }
          scheduleRender() {
            this.members.forEach((e) => {
              e.instance && e.scheduleRender(!1);
            });
          }
          removeLeadSnapshot() {
            this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
          }
        };
        (c0 = (e, t) => e.depth - t.depth),
          (u0 = class {
            constructor() {
              (this.children = []), (this.isDirty = !1);
            }
            add(e) {
              yi(this.children, e), (this.isDirty = !0);
            }
            remove(e) {
              vi(this.children, e), (this.isDirty = !0);
            }
            forEach(e) {
              this.isDirty && this.children.sort(c0),
                (this.isDirty = !1),
                this.children.forEach(e);
            }
          });
        (Os = ['', 'X', 'Y', 'Z']),
          (m0 = { visibility: 'hidden' }),
          (Cs = 1e3),
          (g0 = 0),
          (Ct = {
            type: 'projectionFrame',
            totalNodes: 0,
            resolvedTargetDeltas: 0,
            recalculatedProjection: 0,
          });
        (I0 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] }),
          (Ms = (e) =>
            typeof navigator < 'u' &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().includes(e)),
          (Ds = Ms('applewebkit/') && !Ms('chrome/') ? Math.round : he);
        (M0 = au({
          attachResizeListener: (e, t) => ot(e, 'resize', t),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        })),
          (po = { current: void 0 }),
          (lu = au({
            measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
            defaultParent: () => {
              if (!po.current) {
                let e = new M0({});
                e.mount(window),
                  e.setOptions({ layoutScroll: !0 }),
                  (po.current = e);
              }
              return po.current;
            },
            resetTransform: (e, t) => {
              e.style.transform = t !== void 0 ? t : 'none';
            },
            checkIsScrollRoot: (e) =>
              window.getComputedStyle(e).position === 'fixed',
          })),
          (D0 = {
            pan: { Feature: Kv },
            drag: { Feature: $v, ProjectionNode: lu, MeasureLayout: tu },
          }),
          (L0 = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/);
        F0 = 4;
        (V0 = new Set([
          'width',
          'height',
          'top',
          'left',
          'right',
          'bottom',
          'x',
          'y',
          'translateX',
          'translateY',
        ])),
          (cu = (e) => V0.has(e)),
          (B0 = (e) => Object.keys(e).some(cu)),
          (tr = (e) => e === nn || e === F),
          (Ns = (e, t) => parseFloat(e.split(', ')[t])),
          (Fs =
            (e, t) =>
            (n, { transform: r }) => {
              if (r === 'none' || !r) return 0;
              let o = r.match(/^matrix3d\((.+)\)$/);
              if (o) return Ns(o[1], t);
              {
                let i = r.match(/^matrix\((.+)\)$/);
                return i ? Ns(i[1], e) : 0;
              }
            }),
          (_0 = new Set(['x', 'y', 'z'])),
          (z0 = Nn.filter((e) => !_0.has(e)));
        Zt = {
          width: ({ x: e }, { paddingLeft: t = '0', paddingRight: n = '0' }) =>
            e.max - e.min - parseFloat(t) - parseFloat(n),
          height: ({ y: e }, { paddingTop: t = '0', paddingBottom: n = '0' }) =>
            e.max - e.min - parseFloat(t) - parseFloat(n),
          top: (e, { top: t }) => parseFloat(t),
          left: (e, { left: t }) => parseFloat(t),
          bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
          right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
          x: Fs(4, 13),
          y: Fs(5, 14),
        };
        Zt.translateX = Zt.x;
        Zt.translateY = Zt.y;
        (W0 = (e, t, n) => {
          let r = t.measureViewportBox(),
            o = t.current,
            i = getComputedStyle(o),
            { display: a } = i,
            s = {};
          a === 'none' && t.setStaticValue('display', e.display || 'block'),
            n.forEach((l) => {
              s[l] = Zt[l](r, i);
            }),
            t.render();
          let c = t.measureViewportBox();
          return (
            n.forEach((l) => {
              let u = t.getValue(l);
              u && u.jump(s[l]), (e[l] = Zt[l](c, i));
            }),
            e
          );
        }),
          (H0 = (e, t, n = {}, r = {}) => {
            (t = { ...t }), (r = { ...r });
            let o = Object.keys(t).filter(cu),
              i = [],
              a = !1,
              s = [];
            if (
              (o.forEach((c) => {
                let l = e.getValue(c);
                if (!e.hasValue(c)) return;
                let u = n[c],
                  d = fn(u),
                  p = t[c],
                  h;
                if (gr(p)) {
                  let f = p.length,
                    m = p[0] === null ? 1 : 0;
                  (u = p[m]), (d = fn(u));
                  for (let x = m; x < f && p[x] !== null; x++)
                    h
                      ? ze(
                          fn(p[x]) === h,
                          'All keyframes must be of the same type'
                        )
                      : ((h = fn(p[x])),
                        ze(
                          h === d || (tr(d) && tr(h)),
                          'Keyframes must be of the same dimension as the current value'
                        ));
                } else h = fn(p);
                if (d !== h)
                  if (tr(d) && tr(h)) {
                    let f = l.get();
                    typeof f == 'string' && l.set(parseFloat(f)),
                      typeof p == 'string'
                        ? (t[c] = parseFloat(p))
                        : Array.isArray(p) &&
                          h === F &&
                          (t[c] = p.map(parseFloat));
                  } else
                    d?.transform && h?.transform && (u === 0 || p === 0)
                      ? u === 0
                        ? l.set(h.transform(u))
                        : (t[c] = d.transform(p))
                      : (a || ((i = U0(e)), (a = !0)),
                        s.push(c),
                        (r[c] = r[c] !== void 0 ? r[c] : t[c]),
                        l.jump(p));
              }),
              s.length)
            ) {
              let c = s.indexOf('height') >= 0 ? window.pageYOffset : null,
                l = W0(t, e, s);
              return (
                i.length &&
                  i.forEach(([u, d]) => {
                    e.getValue(u).set(d);
                  }),
                e.render(),
                Ir && c !== null && window.scrollTo({ top: c }),
                { target: l, transitionEnd: r }
              );
            } else return { target: t, transitionEnd: r };
          });
        (G0 = (e, t, n, r) => {
          let o = j0(e, t, r);
          return (t = o.target), (r = o.transitionEnd), Y0(e, t, n, r);
        }),
          (Vo = { current: null }),
          (uu = { current: !1 });
        (js = new WeakMap()),
          (du = Object.keys(Sn)),
          (K0 = du.length),
          (Vs = [
            'AnimationStart',
            'AnimationComplete',
            'Update',
            'BeforeLayoutMeasure',
            'LayoutMeasure',
            'LayoutAnimationStart',
            'LayoutAnimationComplete',
          ]),
          (X0 = ti.length),
          (Q0 = class {
            constructor(
              {
                parent: e,
                props: t,
                presenceContext: n,
                reducedMotionConfig: r,
                visualState: o,
              },
              i = {}
            ) {
              (this.current = null),
                (this.children = new Set()),
                (this.isVariantNode = !1),
                (this.isControllingVariants = !1),
                (this.shouldReduceMotion = null),
                (this.values = new Map()),
                (this.features = {}),
                (this.valueSubscriptions = new Map()),
                (this.prevMotionValues = {}),
                (this.events = {}),
                (this.propEventSubscriptions = {}),
                (this.notifyUpdate = () =>
                  this.notify('Update', this.latestValues)),
                (this.render = () => {
                  this.current &&
                    (this.triggerBuild(),
                    this.renderInstance(
                      this.current,
                      this.renderState,
                      this.props.style,
                      this.projection
                    ));
                }),
                (this.scheduleRender = () => ie.render(this.render, !1, !0));
              let { latestValues: a, renderState: s } = o;
              (this.latestValues = a),
                (this.baseTarget = { ...a }),
                (this.initialValues = t.initial ? { ...a } : {}),
                (this.renderState = s),
                (this.parent = e),
                (this.props = t),
                (this.presenceContext = n),
                (this.depth = e ? e.depth + 1 : 0),
                (this.reducedMotionConfig = r),
                (this.options = i),
                (this.isControllingVariants = Mr(t)),
                (this.isVariantNode = tc(t)),
                this.isVariantNode && (this.variantChildren = new Set()),
                (this.manuallyAnimateOnMount = !!(e && e.current));
              let { willChange: c, ...l } = this.scrapeMotionValuesFromProps(
                t,
                {}
              );
              for (let u in l) {
                let d = l[u];
                a[u] !== void 0 &&
                  Ce(d) &&
                  (d.set(a[u], !1), xr(c) && c.add(u));
              }
            }
            scrapeMotionValuesFromProps(e, t) {
              return {};
            }
            mount(e) {
              (this.current = e),
                js.set(e, this),
                this.projection &&
                  !this.projection.instance &&
                  this.projection.mount(e),
                this.parent &&
                  this.isVariantNode &&
                  !this.isControllingVariants &&
                  (this.removeFromVariantTree =
                    this.parent.addVariantChild(this)),
                this.values.forEach((t, n) => this.bindToMotionValue(n, t)),
                uu.current || q0(),
                (this.shouldReduceMotion =
                  this.reducedMotionConfig === 'never'
                    ? !1
                    : this.reducedMotionConfig === 'always'
                    ? !0
                    : Vo.current),
                xi(
                  this.shouldReduceMotion !== !0,
                  'You have Reduced Motion enabled on your device. Animations may not appear as expected.'
                ),
                this.parent && this.parent.children.add(this),
                this.update(this.props, this.presenceContext);
            }
            unmount() {
              js.delete(this.current),
                this.projection && this.projection.unmount(),
                lt(this.notifyUpdate),
                lt(this.render),
                this.valueSubscriptions.forEach((e) => e()),
                this.removeFromVariantTree && this.removeFromVariantTree(),
                this.parent && this.parent.children.delete(this);
              for (let e in this.events) this.events[e].clear();
              for (let e in this.features) this.features[e].unmount();
              this.current = null;
            }
            bindToMotionValue(e, t) {
              let n = Nt.has(e),
                r = t.on('change', (i) => {
                  (this.latestValues[e] = i),
                    this.props.onUpdate && ie.update(this.notifyUpdate, !1, !0),
                    n &&
                      this.projection &&
                      (this.projection.isTransformDirty = !0);
                }),
                o = t.on('renderRequest', this.scheduleRender);
              this.valueSubscriptions.set(e, () => {
                r(), o();
              });
            }
            sortNodePosition(e) {
              return !this.current ||
                !this.sortInstanceNodePosition ||
                this.type !== e.type
                ? 0
                : this.sortInstanceNodePosition(this.current, e.current);
            }
            loadFeatures({ children: e, ...t }, n, r, o) {
              let i, a;
              if (r && n) {
                let s =
                  'You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.';
                t.ignoreStrict ? Vn(!1, s) : ze(!1, s);
              }
              for (let s = 0; s < K0; s++) {
                let c = du[s],
                  {
                    isEnabled: l,
                    Feature: u,
                    ProjectionNode: d,
                    MeasureLayout: p,
                  } = Sn[c];
                d && (i = d),
                  l(t) &&
                    (!this.features[c] && u && (this.features[c] = new u(this)),
                    p && (a = p));
              }
              if (
                (this.type === 'html' || this.type === 'svg') &&
                !this.projection &&
                i
              ) {
                this.projection = new i(
                  this.latestValues,
                  this.parent && this.parent.projection
                );
                let {
                  layoutId: s,
                  layout: c,
                  drag: l,
                  dragConstraints: u,
                  layoutScroll: d,
                  layoutRoot: p,
                } = t;
                this.projection.setOptions({
                  layoutId: s,
                  layout: c,
                  alwaysMeasureLayout: !!l || (u && Wt(u)),
                  visualElement: this,
                  scheduleRender: () => this.scheduleRender(),
                  animationType: typeof c == 'string' ? c : 'both',
                  initialPromotionConfig: o,
                  layoutScroll: d,
                  layoutRoot: p,
                });
              }
              return a;
            }
            updateFeatures() {
              for (let e in this.features) {
                let t = this.features[e];
                t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
              }
            }
            triggerBuild() {
              this.build(
                this.renderState,
                this.latestValues,
                this.options,
                this.props
              );
            }
            measureViewportBox() {
              return this.current
                ? this.measureInstanceViewportBox(this.current, this.props)
                : pe();
            }
            getStaticValue(e) {
              return this.latestValues[e];
            }
            setStaticValue(e, t) {
              this.latestValues[e] = t;
            }
            makeTargetAnimatable(e, t = !0) {
              return this.makeTargetAnimatableFromInstance(e, t);
            }
            update(e, t) {
              (e.transformTemplate || this.props.transformTemplate) &&
                this.scheduleRender(),
                (this.prevProps = this.props),
                (this.props = e),
                (this.prevPresenceContext = this.presenceContext),
                (this.presenceContext = t);
              for (let n = 0; n < Vs.length; n++) {
                let r = Vs[n];
                this.propEventSubscriptions[r] &&
                  (this.propEventSubscriptions[r](),
                  delete this.propEventSubscriptions[r]);
                let o = e['on' + r];
                o && (this.propEventSubscriptions[r] = this.on(r, o));
              }
              (this.prevMotionValues = $0(
                this,
                this.scrapeMotionValuesFromProps(e, this.prevProps),
                this.prevMotionValues
              )),
                this.handleChildMotionValue && this.handleChildMotionValue();
            }
            getProps() {
              return this.props;
            }
            getVariant(e) {
              return this.props.variants ? this.props.variants[e] : void 0;
            }
            getDefaultTransition() {
              return this.props.transition;
            }
            getTransformPagePoint() {
              return this.props.transformPagePoint;
            }
            getClosestVariantNode() {
              return this.isVariantNode
                ? this
                : this.parent
                ? this.parent.getClosestVariantNode()
                : void 0;
            }
            getVariantContext(e = !1) {
              if (e)
                return this.parent ? this.parent.getVariantContext() : void 0;
              if (!this.isControllingVariants) {
                let n = this.parent
                  ? this.parent.getVariantContext() || {}
                  : {};
                return (
                  this.props.initial !== void 0 &&
                    (n.initial = this.props.initial),
                  n
                );
              }
              let t = {};
              for (let n = 0; n < X0; n++) {
                let r = ti[n],
                  o = this.props[r];
                (Tn(o) || o === !1) && (t[r] = o);
              }
              return t;
            }
            addVariantChild(e) {
              let t = this.getClosestVariantNode();
              if (t)
                return (
                  t.variantChildren && t.variantChildren.add(e),
                  () => t.variantChildren.delete(e)
                );
            }
            addValue(e, t) {
              t !== this.values.get(e) &&
                (this.removeValue(e), this.bindToMotionValue(e, t)),
                this.values.set(e, t),
                (this.latestValues[e] = t.get());
            }
            removeValue(e) {
              this.values.delete(e);
              let t = this.valueSubscriptions.get(e);
              t && (t(), this.valueSubscriptions.delete(e)),
                delete this.latestValues[e],
                this.removeValueFromRenderState(e, this.renderState);
            }
            hasValue(e) {
              return this.values.has(e);
            }
            getValue(e, t) {
              if (this.props.values && this.props.values[e])
                return this.props.values[e];
              let n = this.values.get(e);
              return (
                n === void 0 &&
                  t !== void 0 &&
                  ((n = Qt(t, { owner: this })), this.addValue(e, n)),
                n
              );
            }
            readValue(e) {
              var t;
              return this.latestValues[e] !== void 0 || !this.current
                ? this.latestValues[e]
                : (t = this.getBaseTargetFromProps(this.props, e)) !== null &&
                  t !== void 0
                ? t
                : this.readValueFromInstance(this.current, e, this.options);
            }
            setBaseTarget(e, t) {
              this.baseTarget[e] = t;
            }
            getBaseTarget(e) {
              var t;
              let { initial: n } = this.props,
                r =
                  typeof n == 'string' || typeof n == 'object'
                    ? (t = ci(this.props, n)) === null || t === void 0
                      ? void 0
                      : t[e]
                    : void 0;
              if (n && r !== void 0) return r;
              let o = this.getBaseTargetFromProps(this.props, e);
              return o !== void 0 && !Ce(o)
                ? o
                : this.initialValues[e] !== void 0 && r === void 0
                ? void 0
                : this.baseTarget[e];
            }
            on(e, t) {
              return (
                this.events[e] || (this.events[e] = new bi()),
                this.events[e].add(t)
              );
            }
            notify(e, ...t) {
              this.events[e] && this.events[e].notify(...t);
            }
          }),
          (pu = class extends Q0 {
            sortInstanceNodePosition(e, t) {
              return e.compareDocumentPosition(t) & 2 ? 1 : -1;
            }
            getBaseTargetFromProps(e, t) {
              return e.style ? e.style[t] : void 0;
            }
            removeValueFromRenderState(e, { vars: t, style: n }) {
              delete t[e], delete n[e];
            }
            makeTargetAnimatableFromInstance(
              { transition: e, transitionEnd: t, ...n },
              r
            ) {
              let o = hv(n, e || {}, this);
              if (r) {
                dv(this, n, o);
                let i = G0(this, n, o, t);
                (t = i.transitionEnd), (n = i.target);
              }
              return { transition: e, transitionEnd: t, ...n };
            }
          });
        (J0 = class extends pu {
          constructor() {
            super(...arguments), (this.type = 'html');
          }
          readValueFromInstance(e, t) {
            if (Nt.has(t)) {
              let n = fi(t);
              return (n && n.default) || 0;
            } else {
              let n = Z0(e),
                r = (ac(t) ? n.getPropertyValue(t) : n[t]) || 0;
              return typeof r == 'string' ? r.trim() : r;
            }
          }
          measureInstanceViewportBox(e, { transformPagePoint: t }) {
            return Jc(e, t);
          }
          build(e, t, n, r) {
            oi(e, t, n, r.transformTemplate);
          }
          scrapeMotionValuesFromProps(e, t) {
            return li(e, t);
          }
          handleChildMotionValue() {
            this.childSubscription &&
              (this.childSubscription(), delete this.childSubscription);
            let { children: e } = this.props;
            Ce(e) &&
              (this.childSubscription = e.on('change', (t) => {
                this.current && (this.current.textContent = `${t}`);
              }));
          }
          renderInstance(e, t, n, r) {
            dc(e, t, n, r);
          }
        }),
          (eb = class extends pu {
            constructor() {
              super(...arguments), (this.type = 'svg'), (this.isSVGTag = !1);
            }
            getBaseTargetFromProps(e, t) {
              return e[t];
            }
            readValueFromInstance(e, t) {
              if (Nt.has(t)) {
                let n = fi(t);
                return (n && n.default) || 0;
              }
              return (t = pc.has(t) ? t : Zo(t)), e.getAttribute(t);
            }
            measureInstanceViewportBox() {
              return pe();
            }
            scrapeMotionValuesFromProps(e, t) {
              return fc(e, t);
            }
            build(e, t, n, r) {
              ai(e, t, n, this.isSVGTag, r.transformTemplate);
            }
            renderInstance(e, t, n, r) {
              hc(e, t, n, r);
            }
            mount(e) {
              (this.isSVGTag = si(e.tagName)), super.mount(e);
            }
          }),
          (tb = (e, t) =>
            ni(e)
              ? new eb(t, { enableHardwareAcceleration: !1 })
              : new J0(t, { enableHardwareAcceleration: !0 })),
          (nb = { layout: { ProjectionNode: lu, MeasureLayout: tu } }),
          (rb = { ...Av, ...Hg, ...D0, ...nb }),
          (rn = Jm((e, t) => kg(e, t, rb, tb))),
          (ob = B(rn.div)`
  position: relative;
  z-index: 2;
`),
          (ib = B(rn.div)`
  position: relative;
  padding-top: 10px;
  padding-bottom: 10px;
`);
        B(rn.div)`
  position: relative;
  padding-top: 12px;
  padding-bottom: 12px;
`;
        (ab = B.div`
  position: relative;
  box-sizing: border-box;
  background: #171c23;
  width: ${({ width: e }) => e}px;
  height: 100%;
  overflow: hidden;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 4px;
  border-left: ${({ theme: e }) => (e.base === 'dark' ? 1 : 0)}px solid #fff2;
  border-bottom: ${({ theme: e }) => (e.base === 'dark' ? 1 : 0)}px solid #fff2;
  border-top: ${({ theme: e }) => (e.base === 'dark' ? 1 : 0)}px solid #fff2;
  border-radius: 6px 0 0 6px;
  overflow: hidden;

  && {
    pre {
      background: transparent !important;
      margin: 0 !important;
      padding: 0 !important;
    }
  }
`),
          (sb = B(rn.div)`
  background: #143046;
  position: absolute;
  z-index: 1;
  left: 0;
  top: 44px;
  width: 100%;
  height: 81px;
`),
          (lb = B(rn.div)`
  position: relative;
  padding-top: 12px;
  padding-bottom: 12px;
  min-height: 57px;
`),
          (cb = {
            default: { filter: 'grayscale(1)', opacity: 0.5 },
            active: { filter: 'grayscale(0)', opacity: 1 },
          }),
          (ub = se(function ({ active: e, content: t, open: n }, r) {
            let o = { fontSize: '0.8125rem', lineHeight: '1.1875rem' };
            return g.createElement(
              lb,
              {
                ref: r,
                initial: 'default',
                animate: e ? 'active' : 'default',
                'aria-hidden': !e,
                variants: cb,
                transition: { ease: 'easeInOut', duration: 0.6 },
              },
              t.map(({ toggle: i, snippet: a }, s) =>
                g.createElement(
                  dt,
                  { key: s },
                  i === void 0 &&
                    g.createElement(
                      an,
                      { language: 'typescript', customStyle: o },
                      a
                    ),
                  i &&
                    !n &&
                    g.createElement(
                      an,
                      { language: 'typescript', customStyle: o },
                      '  // ...'
                    ),
                  i &&
                    n &&
                    g.createElement(
                      rn.div,
                      {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        transition: { delay: 0.4 },
                      },
                      g.createElement(
                        an,
                        {
                          language: 'typescript',
                          customStyle: o,
                          codeTagProps: { style: { paddingLeft: '15px' } },
                        },
                        a
                      )
                    )
                )
              )
            );
          })),
          (db = ({ activeStep: e, data: t, width: n, filename: r }) => {
            let [o, i] = ne([]),
              a = Se(() => t.map(() => Pi()), [t]),
              s = (u) => {
                let d = 0;
                for (let p = 0; p < u; p++)
                  d -= a[p].current.getBoundingClientRect().height;
                return d;
              },
              c = ye(() => {
                let u = t.flatMap((d, p) => {
                  let h = a[p].current.getBoundingClientRect().height,
                    f = [{ yPos: s(p), backdropHeight: h, index: p, open: !1 }];
                  return (
                    d.length > 1 &&
                      f.push({
                        yPos: s(p),
                        backdropHeight: h,
                        index: p,
                        open: !0,
                      }),
                    f
                  );
                });
                i(u);
              }, [t]);
            Bt(() => {
              let u = new ResizeObserver(() => {
                c();
              });
              return (
                a.forEach((d) => {
                  u.observe(d.current);
                }),
                () => {
                  u.disconnect();
                }
              );
            }, []);
            let l = { fontSize: '0.8125rem', lineHeight: '1.1875rem' };
            return g.createElement(
              ab,
              { width: n },
              g.createElement(
                Br,
                { theme: Li(Ni.dark) },
                g.createElement(
                  ob,
                  {
                    animate: { y: o[e]?.yPos ?? 0 },
                    transition: { ease: 'easeInOut', duration: 0.4 },
                  },
                  g.createElement(
                    ib,
                    null,
                    g.createElement(
                      an,
                      { language: 'typescript', customStyle: l },
                      '// ' + r
                    )
                  ),
                  t.map((u, d) =>
                    g.createElement(ub, {
                      key: d,
                      ref: a[d],
                      active: o[e]?.index === d,
                      open: o[e]?.index > d ? !0 : o[e]?.open ?? !1,
                      content: u,
                    })
                  )
                )
              ),
              g.createElement(sb, {
                initial: { height: 81 },
                animate: { height: o[e]?.backdropHeight ?? 81 },
                transition: { ease: 'easeInOut', duration: 0.4 },
                className: 'syntax-highlighter-backdrop',
              })
            );
          }),
          (pb = B.ul(() => ({
            display: 'flex',
            flexDirection: 'column',
            rowGap: 16,
            padding: 0,
            margin: 0,
          }))),
          (hb = ({ children: e }) => g.createElement(pb, null, e)),
          (fb = B.li(() => ({
            display: 'flex',
            alignItems: 'flex-start',
            columnGap: 12,
          }))),
          (mb = B.div`
  font-family: ${({ theme: e }) => e.typography.fonts.base};
  color: ${({ theme: e }) => e.color.darker};
  font-size: 13px;
  line-height: 18px;
  margin-top: 2px;
`),
          (gb = B.div(({ isCompleted: e, theme: t }) => ({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: `1px solid ${e ? 'transparent' : t.color.medium}`,
            width: 20,
            height: 20,
            flexShrink: 0,
            borderRadius: '50%',
            backgroundColor: e ? t.color.green : 'white',
            fontFamily: t.typography.fonts.base,
            fontSize: 10,
            fontWeight: 600,
            color: t.color.dark,
          }))),
          (ho = ({ children: e, index: t, isCompleted: n }) =>
            g.createElement(
              fb,
              null,
              g.createElement(
                gb,
                {
                  'aria-label': n ? 'complete' : 'not complete',
                  isCompleted: n,
                },
                n
                  ? g.createElement(Bi, {
                      width: 10,
                      height: 10,
                      color: 'white',
                    })
                  : t
              ),
              g.createElement(mb, null, e)
            ));
        (vb = (e, t, n) => {
          let [r, o] = ne(null);
          return (
            U(() => {
              if (e) {
                let i = () => {
                    n.getChannel().once(Ri, () => {
                      let s = t.getData('example-button--warning');
                      o(
                        s
                          ? { data: !0, error: null }
                          : { data: !1, error: null }
                      );
                    });
                  },
                  a = n.getChannel();
                return (
                  t.getData('example-button--warning')
                    ? o({ data: !0, error: null })
                    : a.on(jr, i),
                  () => {
                    a.off(jr, i);
                  }
                );
              }
            }, [e]),
            r
          );
        }),
          (bb = (e, t) => {
            let [n, r] = ne(null),
              o = document.querySelector(`.${e}`);
            return (
              U(() => {
                if (t) {
                  let i = new ResizeObserver(() => {
                    o &&
                      r({
                        top: o.offsetTop,
                        left: o.offsetLeft,
                        height: o.offsetHeight,
                        width: o.offsetWidth,
                      });
                  });
                  return (
                    i.observe(o),
                    () => {
                      i.disconnect();
                    }
                  );
                }
              }, [e, t]),
              n
            );
          }),
          (xb =
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZgAAAECCAMAAAD0GDFCAAAB0VBMVEUAAABzgo3d5eno8PFzgoxzgotzgoze5upzhIze5up0g4t2gI/s9Pnt8/ns9Prs9Pnf5+ve5ut0g4zf5upygo3e5uvf5+vf3+f////3+vzs9Pne5urq7/Lmlk33+flzgozV1teEkpouNDj6+/voo2NanTvz4dDl5ubqr3n17ebx1br19fXq6+u5wcXc4OKWmZvu7/Hf4OHuyKT9/f7a29zL0NTZ8P/s9//LzM2oy5vx8/PT7f/Y2dnl9f/nnVjM7P/39/dBtf3v8PCws7Tsu47z+//wz6+Woal8gILy8vOAzf7o6On3+Pjj4+SNmqL29PHl6OrQ48x8ipP059unsbe817O/5v+VwIPj7uTpqW6BtGtiZ2qEkZvP48tITlECnP3CyM3y28U7QUUkqv3y9fXtwprrtYS9v8Gip6vd3t/T2NuJlZ728/GUv4Pl7O/U2dvvyKTtwpluqVNko0fg9P/W7//s7O25wMbsu4+i2//t9fDuyKXrtYPc8v/t7e2xub6JjI9VWl5cv/7N1Nna6djGzNCXoqqy0advdHZITVH5/f8So/3G3cB3rl/v+f/p7vGCkJiJjY+LuneQ1P7c4eXF3cCwub+exo9wx/6stbs7QUSS4OMQAAAAGHRSTlMA34AgmXvv3yifQBDv77+vf+/Kv2BbQBAH3mwLAAAPmUlEQVR42uyZO2/bMBCADXTtY5aB20iC5KhNCyeCq2qohiMDAarBWuoCfixG4q1uszQoEDQI+m/Lh2TKiRrHboPSrb4h4ZGyadzn05l2r/fi9at+x+G8edF7Vl50Wo7k5fOaedPvRx1H0O+/7j0nnZejzbzsNejEBEO/32vQiQmGTkygdGICpRMTKJ2YQOnEBEonJlA6MYHSiQmUTkygdGIC5a+KOVuMWmY/Ys0wOgwGwNwoIxUsOgrQoF8vT0m23YRFfwgO8JfFXI03TTF4XA8346Qefk2S8W+IoVDBo6OI4/gxMRwu9V8ElrxNjaR+nNL5aYj5iAeN6CLZ5v8cN4sn+S0xkltYdCyPiUGCWTEzztUaRNpyBTRfFj1FMZpnEONL5RnEcJAu+cTtpf4FMfoedY1HSZJ8deWicfnfJMkIX+vwyovxVXUzHp1Xwdv37z8fIobHbjK2/8llSemEuYWspBmTVJnHxsV0QilvE0MkpYo1s84aYmKrScVuE2XHsYBYk5nnjeeATOC6kyppaTZxO+oXowIR8xFXjFyD0bgeM8QViwdihku8XGCcuOjThw9fDhFDAJl7zQwmNgCBBNhlCjnSkQ6JWaBIIIDVQzErACQAsZ2C8WJy4Dbwj0KNDkegxr5CsyG4CiJQ2h3LMMT4W5lv/ntuZWfL5UD/vcaDPWJSztNaTBlbTKCMkswlOpuZ/BZCpOaiIpKw1kvSJjCfRiwHdV/MBOjUPEneLBj3f8K5ojbNXsyjt7I1TOwml1aMMIGArLqM8xMTM9IDd6EXswcKFVXEmenXHgmFmWYRB+0OqBXDbLboPTEM0NQ9hNQVKOvkW9bsyWKYW85AmOdxwRx4KOeYQ8Us8e25YYlt+O3797f7xcyJxVUSEqXv0ExPr4Cbi6KIm3mUmzS5ihCQ7orhUBLDJUzq5yZ18hUhhQTEniqGw9rXHHEBh/hExZzhLWfRXlo/lRHQWXUoAYZaDDEDhHyp5MB2xcyhRvo0N3uMAvpUMTHE3i0BeepiloOK6EgxbCtmBkgRQmSLmHWds10xEuTOtwgrILtiUoD/U8wFXvrJo8QwJPJqQrhWM28Rk7dVjE9ms014MQYA9kQxCiZhi7k9qMcs8CZq8P3dux+HiSlB2ebvc0RbxAj39he7zd/d4zwr4PfEMIDUBKlp615M2iKmAFo3shDFXOGkXcxGDz3DWlOCb1zpnPtPZYeImYF0pxmb99Qmo0UM2LOhvvZBj3cDkvqCaS7MbK2VNli5ZRfWeNmpgKzqSiGKGWA8qk7+V0lyhxdJkgyq2hj7k//FAt+MRmbhGi+ubod3y9EBYnJq4fZdzOzda2IXUFFcAmoRg0SsV4BtbzuolPPIKlsVhaLAfMFYkN1EgMhsfpHiK2TFuHASx2bBbbo9UiFlNiFBiom+XmPtxpmoSFz13Czdyd9F4+qr/4s7bBgPDz/HxBGrz4P27JiuAUCouEWMnJmlwhcagurYkYNGyNR0KxQ1xBjQnG0/vSFfULPcf7fNpNCBmxZukzDFHMFgsLmI/giMZNOWaQLSLbXB6o9kSsv9FRnJoidASHYaP5QFghGzH4TYo+v/0i+YgWDEBEcnphMTLCknUXB0Yn6ycycnAAIBEARX9OnxN/9AzWFhocGqFJr5TpQwUcJECRMlTJQwUcJECRMlTNTiMKcwzTC3ycx2ecZK+/ky5Vp9WPa8TGS59wEAAADAvxzHoGjbBkXCRAkTJUyUMFHCRAkTJUyUMFHCRAkTJUyUMB/7dIwCIAxEQbSwkHSxkcBPl/vtVbyylSJq7X5h3hWGMUUYU4QxRRhTH4RZyyycljJ5hKlSdBy2kKpDmKoYDRcjVPPDTIqGm9CaHqaIXx6GSnqYhWFexJweRlvDQ1d+mN5AmL8gjCnCmCKMKcKYIowpwpgizM5+Hes4CkNRGH6N0x1ZW2Pdxs1W6dyw0chy6YIyotkyZap9hXneHZuQcEFDRppMBAl/eUVS8MlcWGgbzELbYBbaBrPQNpiFtsEstA1moa0OxpuuE7pkb47INca0KPVzi2EH0+Dc3ryhz5T2UdBnjRGozLkGn/fyMIZBwaAhs4CQRwxypNeiDDv1iy7m/wtkuFhZUqAifwTGnZ4LxkEXaXZ5nsaAtAqmlxOjYVw5X/RzMBb3z6VDfGqYOtHjnUn0gfEV4wgmlEsqTmHgGB4M45IgxmeGwVug52hs2NaBOwWTipQwhSlMSz4CRrsAMa4Q5s/fS7+Hd/xQ5QTXGo4WDCwTENXQsykgkc5MYOrD/KMsVrkd7pcX5E7t+mB+/avOWXUUuoazOozvpacDLMNOjRp6CBM0zN57H8h2DqZLcKvXeCvrZSwUTHQ5wbV3jl7BhJRicdRWe9pIp2G6vMUczNHl5k7MK8GcZeytHePIKgwNEEnzUWDQMJaBCSOYRkRqAN/cMa8EU2QsbsBIRlHfJsJLTsHAl8umOwYPhxGUalklzIeMxTxM/wVzoJHrgfEoVfTjtRPxBRgruZ+EqZMrPGaFy181Wf7xumCC9F8zXXLBqwOtgindhumy4+Vf4X7Jf3bsmLVtIArgeAW2MdYWMrxN6Dpois6LQUOHGi1yh2BK8aIigzLIeM7iKY2mlEAgZMnHzbMS5+kcgy/DwZPz/oPtJ529/EBnbiszDifdfJRZnJWtdyclcRhOdpcu4a2b8B3wT7im34gJGi+bzcO3YjdnZSSDLh3dY0668d/fk65u/qfdOO7sv7IvnMAwTWCYJjBMEximCQzTBIZpAsM0gWGawDBNYJgmMEwTGKYJDNMEhmkCwzSBYZrAME1gmCYwTLOAORsYo8DY5R6mF/jtUWDscg/TD0btUWDscg8zCvrtUWDcRjBHGxibjMC4jWA++SwTGMvcw/iDM2N2BDO++QmSBQzVd7jLEMw6uDwus6inu+praBclTRGcRlYwvhcMaXIFAxcfZL7DXtfLerPZPC/x5Wl69QCttHqtfJzBCYQwFg0HHsk4gTksM4/BrK4BWyyb4X5jwqQJVmUqh71WeQRYklfQmRDGpvOAZJzAHJaZX+zJTH8RDA4mTARNmUrALHu9laoUOhPBHJOhfcYVDMkQDMlYw6Rq9YVgvg29wDun0QUMyRAMyVjDVKoCiHQC2ExXkOpb9U/rlb5Tdxrn7c0sS5vViY5mODAEI5hj+b0g8Hoj3yEMyRCMKTOtF9jTcrHt6jBMXuKHRGnAIpVBVpSqKIoc38qieNyuLG9z9f9H86VViXdwFbde2rmX1iaiKIDjvl87FfFCRY69i7uYiF7mkoi9JXEk4DgdcOWmEMEKNS5c2YCLFt1pBR+4ET+t58xkMomjeaHmTD3/xXjntemPeTT2BmHm7typ4zh198zxP9znzzfGw+8QGYOh7o7BfNjBPjzZoZ78BPP8Pvam99SrCZjJWxn98zbGPb3vcfYqt0uW+FhiFsIs0oXTpy79a5hH897Khr0z02G2ca044hbux3bxscQshFlx1VvZ1gTMo8WeMfH93nszFaZ4nV5/SyfdKZCYxQ0mcylhyGUxGPopv5kGQ5uyeu8FZjZM1SWDQZeFYdTT7Wkw8fq74WFyxcwDU3UhGHSZ6OG9EubVh8e/hlkvYe5UYBDkvcrN3gnMnDDkMv2zso87O/jx5c6Te9iHb6oKQwO6lRnUwd5lMG+KH/+bbD/5kNZ9gZkJU7rM6vXDYV/peqm+Lt/C31BM9u714M7uNi6zn/v757u7Kn66/mX3vop761/wIzVUEpi5YF6Qy+KVMFlP396KFWa2cWXbIwzt663TO5jv4f5YmQd03C0lMPPB3L6JLn+w2MTlijHDf+J8F/v/tmEEIwlMDRIYpgkM0wSGaQLDNIFhmsAwTWCYJjBMEximCQzTBIZpAsM0gWGawDBNYJgmMEwTGKYJDNMEhmkCwzSBYVrdYLr7G8P2Xh2q8XQQVoZTCph/2wNvmLDi0t5stVqv2i1abkzsbkBQDA1oNSuwinW8YXRHTbb/KudR1EZLYCr9I5i7P8k0N0sYXBGYSv8K5m5HYFbQbBiUWRpGN1Kb5ERBkloTq3xsrAkKmMjYNMq2NrRO0kBxiT/MhExzv4VttlvU3nSYyHuTOE+np+DT1MFBvtMbC40MRvfBJikk2emJ932BWQDmWTgGs5HVzpc/wZjGsD7BaEjpROtCNAoU1vc0BINL7TKYNGOLIKLT0Y1R/GHQZc5b2Vh6dD8LygtpAMjg/HCzpUWiKGvpdF5TZtjDoMtyzxjf11nQUFSo9QEeEYLNVyHDiDVlPI353MbqAIMuS8JAEcJ0Ug9UoHRxYThLxxUJzIIw6LI0TKqKtHcxbonGYQBhEjouS2AWhAnVZJt74QjmsN2dBmO9KorhYHSEd4raAktSkcAsA1Mt3Gg3m829fLGppsE0hg+XgABoGDo6IskxDMGE3mXyYUdgloQp67aKumoqjLJg4iCy0EESHwVx39IR2oHBrc5ZRWJuEESJTwVmFszyDVxQDBOnMyoHAJa2agvgD2KXjQ2O09CmargDfCOk0wWmCvO3CnU4GlUeXeUKx442TI0TGKYJDNMEhmkCwzSBYZrAME1gmCYwTBMYpgkM0wSGaQLDNIFhmsAwTWCYJjBMEximCQzTBIZpAsM0gWGawDCtbjAfmxtF+4dqvE5ExQHPPxM7YjBhxaW92e12W+0uVpnnP8wcCRreMNPn+e+1JmFijQWG+3zkIwGzzDx/w+zPw48mzBLz/GNoqPrHHmbxef4BwQSN1NpouMHQMDJhsZJoxT7+MAvP848gwhWfGgs23+FN6lwKxGHANhLn+MvUAGZynn8zn1FGtX8J03FeqyCiYUKbOuB0Ni6nmWnH//2AP8z88/ytwfpQTqzcggO6Rjo0Dj3BDEUGwP6Vmj3MAvP8HTV6gIQ6yOZe9v1o/h9KJZqK+b+4cYdZYp4/pY0H8I5gnCthAhgmMH94nv/+nDDODzSePn7FWLpieH1fTI1hqvP8D0cw3d/N8yeRdPTinOTbNSBMWJ9PBXjDVAqb7Q0sW/x+nn8BkBKM9k7jlr4HXX4qwP5OVjeY8Xn+h6oKU5SACWKbwajIQ78PxgD5ODBRlDinuFc7mHnm+ROTA9/YcgMa64FJAoUwNDYOwNfgV/+jAzMrC6pO/Qcw+eXRYfZFcQKjHaSNhvE1+Hzs/4JROrLOuRo8Vv43mHomMEwTGKYJDNMEhmkCwzSBYZrAME1gmMYA5uInJVV6uXqYy2vs/2RlBT26fGzVnVh7pqSferZ25diqu3pWZKouZ4+tvpNn165tXZdGbb1cO3vyGINOnl+TJrrMwoVorpyQRl25egz7AYGGi8bk2+PGAAAAAElFTkSuQmCC'),
          (wb =
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXwAAAEICAMAAABrir8vAAAB3VBMVEUAAABzgo3d5enp8fNzgox+ipjt9Pl0hItzgozf6Ovp8fZygoze5urs9Prf5+ve5ut0g4xzgoze5uve5urf5erf5uvd5+rd5erf5Or////3+vzs9Pne5urq7/L7/PxzgowuNDigZsaEkprmlk3V1tfl5ubLzM18gIKWmZu5wcX6+/vs5/Xh1e/y8vNITVHc4OLWw+jvyKTt7/Gws7TLsOH19farec22i9P39/jq6uvoo2Psu47f4OHx1br17ebz4dBBtf2WoanY2dnRueXy8fnBndrL0NPqr3nt+P/m6OljZ2r9/f47QUXa8f/U7v+Azf58ipPU2dtiZ2q/5v/Gp97a29y7lNfM6//L0NSnsbfl9f/Andqlb8k31dPDyc6lcMqkpqjnnFjz+//v8PG1i9Ob6unj4+SJjI9VWl4CnP3m+vnn3vL29PHczOtp396NmaIiqf3MsOGxgtC+v8FS29m9v8Dwzq+NmqG07+/059uxs7TtwppvdHbx9PTl7O/t7e25wMb28/GXmpvg9P+g2v/y28Wxub7rtYRcv/47QUQSo/1E19afqbDm5+iQ1P7h1e7Antqwub9wdHfpqW5wx/4xr/33+fna9/fN9fSo7eyP5+brtYPm9f+w4P/A8vFZOmLPAAAAGXRSTlMA34AghxXvOu86s2bfv3/PyqXv759wn59gUVCBVgAAD1BJREFUeNrsmT+Lo0AUwBcOrji4L/BSPV45FgqioKiFil8gpLmACOkSi6RYCKlShJR7sOV92Xszo8luJnvrwf6R7PyKxJl5M+7+5vmMyd3dt5/fJ5an/Ph290F8s+oNvn+U/R+TCVieMZn8vPsYrHuTyffrrqz8D2Ayue7Kyjex8m8JK384Vv4tYeUPx8q/Jaz84Vj5t4SVPxwr/5aw8odj5X8caSbZwnWi6uvKd0L3vdfySBHdwzUo+rryXfTfey2PqiS5j4mu2vfurfx3lR8Ds6MGnnEDNd8tw+5q9/0CGOHnstsv3FlYClAU61k4c0HT+kK2pwKWvj/D0Pd5hokz5fndnPw0vfBdyOXkPijkEdl46NdyX5C/Ikrlm5dAFlfHRA0xOvO33nZXJeBV8Ypb+2R3lCGazNvuvWO1SznqAIrESz9fvthgHdQYFNIQlsDMUKoMsUQemC9VVMBRiFNQ/EI3QMYHFzsCMFhzb8BBUviTkwhchBjw2DmoVkE+dixekA9EW35NqfJIorqYSNukKCI6Ng3tuFWRakarboH7iJgYVvQIkpSiEWT+DKeF/MfDk/a1dhwiOgC5lhSgr3Yg7+QHCx5z3X+VnTUGjhzO1YSwAPiNoZKPm0Ku1cpdwUDI9HeHlJ0t0Up7I28PaQyak/wYMmr20Mi2l+xVofK6BR6jDCDjVkWZ7kk+X76DG9CqhXQRzIWQCaozX785MirQwWEv//WaH6CAHtSrz7Fg+bqR41StOBtc89OIKmDS/sZ7KT+BVEYcCXpW3ZhHUQqaA+2AiSj9fPlTnDqSEl1glrgJagG99V6S30lhe1p+/qowBxfG8QxdKX+j+0qQjbkYIr+JVBFJtfwGrsrPYCXlx9rrfptlWdOcd0+zapoVQEZ/RnDDDbHHB+0a835kqX2Uqsifs1k2nVeE6Xk9Lc66nc5VzT/L51KEm9IVQ+T/4Vqj5VcvyQeKO/lpRZq+5kPPTh7HdBiF/NzRaAHrs3wtuu3l91fDcPnGsY/+pXxwFzXivB1QdpjB8tOI4gNnfkRwWeEzqjj9ozF81FRazwgMuOwbmc8p+xaZzycz5DPLXzh/Y/lJN4NM+VDRiofHIF+W9DOC7TqnG25+qu+5NiWkJFN+CQYq1jjeoGPI7zf1TeX3trNr8u/Jqygdg/xi3iV6V0/8036EGHbbwVGootZYmvKXKs4kxLUeV8etigzgQn4h9B+B/SUSvo18FgzM0ZCvb7lUjeMJN8egbN11iEru7JzzIdZh6270TkwxyNsp1sKUDwHOjCdcvW1l2+YbX5meT9t1je6lfKcuc4dPUvapINdyh8tPPM+jhl8Oz+SzYIqzpIrMms/siJJxyAf9sFpPVcEXStt8vpTyH+TIb1D4yATcbcoXi9p4wtX9as7D6SR1DpfyxUafvHi61mK4/Io64ufy4RBxZ5VelZ9RsxqJfICl44hrZUOA4xTQUTjOEv4T8WRhnl7AFQo18A68/ANAQvFovlg7Ycq/TSrKrPxPYZvt6HE8Xyl/LfkVUZSOXr7jFnCDZMlhP6IfUyxW/v9g5d8SVv5fdu4YBWEgiqLohATBYKYQwcJxq1m7jQTEwl/IRD/nLOHy6hcnfibix4mfifhx4mfSLf5B/P3iL6b/3n4un7h8efrfy5cyzjde0i9jAQAAAAAA4PdNU2Evw1AIEj8T8ePEz0T8OPEzET9O/EzEjxM/ky/FP15Ojc35OvaLX1tb72zW1mqv+LU92LFjF7dhKI7jQ6dCt5bCg9z94G3uItDkVUsgm7xJi8euN97UkClTlvuPa1t2zrKvOUET4yjvS8ggnAQ+UZ5F9s8kjXreN/qL4H/Z7EmatN98XQT/50b2/aznzY9F8L/Lxv+g/bdF8DdPJM162gh+aoKfU4KfnuDnlOCnJ/g5JfjpCX5OCX56gp9Tgp+e4OeU4Kcn+Dkl+Ok9Br7h0JFC+oUP1FYzV9Q1rCsad+Ka+l54R0Pc9eo1DSlmTVHcV9O/ewh8ho3wqQZUiw0caJQDDI0zsGX0ihBgmW3zvDvjAxN84Cb47nh/+FuK8+CyXefplwQV4Q/fjuYYf9v9TmAu4Su6fo5P/u7xS27g3sCRmIMp4Cf4trukwByftrAL4zvW5P2949POopF1k8uq0qKM8Bm+m09s5/gVsCR+sKdGf6X4v6tzf8aqp6Jt7FMjGvgdIBP5aNGg7tA9HM/wy9PlseOLtpKulwmfcazWif+rLvpUtKVD47XSTr0MXKtoy/HStm6ENZhi/FdjjAWqS/ghTZ+U0Wln0FcU4ftt2xjiDZOjjQ5QBocIn16gPFyMHzKKLuEftm2Xdn5u+L2++mzmO6Cw0YjxADdZ2BhfwYJpgl9rrTvW/5v5ueF3+oo+wdcNfHx21zjnInwy3WXzmU+L42vqKvVq8Rt9RZfxhxP+aXTW9MMQKmBifAVPCfhKt90Sv2RHTZpXesP9OEbIvw98q4fTfkgz3PlOrCL8phT8kJrecAu6Xppd97TesZPw307FXAczZjcsvVLfkT31ea7e3+Mdn2d7b8d96nb/7QT95rHimZ91mq1b8w0377Ra9WnngRP89AQ/pwQ/PcHPKcH/yw4d0wAAADAM8u96FnY3IIGf/BL5P/kl8n/yS+T/5JfI/8kvkf+TXyL/J79E/k9+ifyf/BL5P/kl8seOHauoDkRhHH+OrzvNZGYvzNwiLxCs1jAgTF4gXZJOkDTibdQi18Ji2S3vu96TUdEECRvYZUfJvzAcZ2x+kSHk8034z1SI+FmTXGp2uE1EPoHn6Ofxf6HXrmr2+/17xR/HZPmKmxSdsoXGE/Tz+PPf6NY04LLKD4d9Fz+OuJUkh165E+Ait8LDFAD+S08/WVzxeejiC/gkRegmT0sxxXiYQsBn/bH4MeUT/pfgs/5Y/BWtAKEicFrViFVJhVK5eqON4hkQWyljvztSQvMQ4E0JA7+jnzQZd6yyto/7+M4KViUFTpCENJaMMY4v1pgC2JItUzIz/6PcmtSQRGgFgv/y5wb/sOQO1bKt6uHnMVcYO0MHv3/sxFRqQJi/GlBENYCUIgRWIPjzzx475zZiGD/l6bJD+XWsKEdghYE/H3fm67UxYhCfHHxUAoqiy40IrCDw5xiF7yWLAXz/lc+YCX8Yf47R+LBuCF/TBj47/fOH8Xv2WCRX/N0hu49PV/yoj89ZgzZBmwl/1Lud1+UySZKPKuEO77iLv6WipXXg3jx+cSEuThvX4CStJ/wWf0T/FueOGXDnUVM5MgJASjKqnSPpbU1e19CWijqGNlREtaQCE/4A/qgU+WypNDiR8uBmHh/KEJXAjC9WQ8h2n8KE7/G/JS30dRDifNGnpeBf+z84/mP3n537d00eCAM4TkCJ4KLjTXe8cCYdkqEunR1DlmYXQkEMDm8HlYo4Obwgbu/SH8P7t753Z/AhtbVPGzzk8nyhoU3O5UNIIvWR8PERvksRPj7CdynCx0f4LkX4+AjfpQgfH+G7FOHjI3yXInx8hO9ShF8jC/i9DuFDlvH7vE34kF38LvcJH7KL7/MW4ess4kOdDuFDlvFb3Cd8yC5+u9Ozi3/754592MOq7B9zIYWPOfW7VvHv+dPH+pP94tCYuRAKv+1x3yY+u/lEf/KbmWaAX5mOHlV2Xv2nphQ+Ir/jta3hgz4ePxCH0i2D4usbBELiV+tyz7eHD/p4/HygWhcigJ1J7Aa+0ucta/igj8fXztc59obAR1z3va49fNDH41/p2FsNfNBvce61/LYlfNDH45cfBB+Fo2i7mbN5GDG9GQTZVLIoDzbD6LBoutmoPaphztRRs1IXhWtmJcBH8/c9znnH+0G/fhLnT9/GH4q1+gnTNF6rnVIfCcw4tCzSJBaZFo5FnCRiNzK3BT0tHeUiLF99tfgqv9XvWcR//C6+jIVUhMJ8JUyJX6htLoqN2vXXLJvqjUwzjb8zN+Uo3R2HF60F+PgsXnYe7/D4WaDKUhEyhR8wBvhrrSuEfHdHKLR3IpYMplf0aN3ZGoNv7PH4sSnQhkNNDPij4zkNo0GRlIkw+OXfIitfcL6G4Jf2p/iz1blr/nEcFPDle/xllgoV4JtfIiYRJ34j8Ev7U/znxf6tHv5QFANp3AHfHBl+/R6hEfil/Sn+aj+ZLRYvdfDNhQjwy5Idiwv2ZQ3AB/tqk/H4lbHZYl8L36yVooqfiy3mOdN9/Huwr/a6f2G6txr4ahMPZB5nVfwoFYjnzAbg39589s+UB3bouQY+m+s56WUA+KYQMyTdAPyLJyU7KcE8ZxL+JcI9ZxL+BcK+wSL8ixTFG8QqwncnwsdH+C5F+PgI36UIHx/huxTh4yN8lyL8/+3cMYvbMBTA8XBHhysHBy0HfeBmeloEHgU2aNJkI+xNGDLGoG+Rerg56039sJUcx40TSEV65/OJ9xsU2ZaWf4JIloSj+DGh+OEofkwofjiKHxOKH47ix4Tih6P4MaH44Sh+TJYYf1vVRy9rOMWFnk6vExks2sfH1xftm01RFC9N4cd68jhHAQOGHP4FJSzax8fnGUxVL4e3ALy6oPjvGT/NzuJvxvj+guK/a/w0o/gTs8ZPs5vj89zKkoMnSitZCj3BJBPH+C2Ttu3v5pyXVsBSLCP+pH5VFc7vpvDq6/FbpVhplN9uUVlrsDs8VExi3sfnEmVpcd9v3yslKf5Z/J0+id/UTuNGpzmLz/KB9PE5Wr9RGje2fVSp/BSZG7np41uVgb/V+u3YwYIsI/5Ohx47J/h49ggUMOjQpTZquC39sAdPSr99WX9/tIj4O33jma8M72EOnua8cyvWw1nfv+aYco8pP1/OkbOU+K79jfFx4ONnVqEngCODnpF+3RHFv8Rd+5vjWzjiyqQcoD2NjxKg9Ot6FP8S1zC1qfUYf91sr8WXCo5S7MYVyoCX+fgtthQfgum6qapqGDZwLX4+HPbCRe6n2vgV5SE48/HXymhwdEbxg2yLoy1cjQ8SWSpaiRmsjWpFKqVfwQ0yd9cY2X/JNJ1oS2Up/v/pzFhvbzg4uUFEKQ4/plB1qennzM2tlhaGB6hy7bdT/LeluR5n8BfX04sl+vzxPzGKH47ix4Tih6P4MaH44Sh+TCh+OIofE4ofjuLHhOKHo/gxofjhKH5MKH44ih+TmeI/JUAu/HpazeEu2QE5I5Ifqzl8eUw4kAmePN6vZvHwPfn5uiaj113y7WE1k/unhEx8vV/N5+H5joye+4/9H9E5eAp4eScvAAAAAElFTkSuQmCC'),
          (Eb =
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfoAAADkCAMAAABHYBYkAAACClBMVEUAAAAsLCxzgo10g4wkJCSCgpDt9Pl0gYvv9/dwgI/Q0NbT1dd0g43b4+Xe5urT1tjd4uXe5uvs9Prs9PnZ3d7X2ty+wMTV2Nrd5enR1ddzg4x0gI/Q0tTV2dva3d7f5ura3N/W2NvS1dZzg4xzg43V19rQ09bZ3N3Nz9LV19j3+vz////Z3N7s9Pne5uru8vRanTv/AADmlk3Y293X2tzV2Nqoy5tFTlS817PQ48wuNDiDiIuVwIPz4dDU19nR09X17eaBtGtuqVPqr3nj7uRko0ft9fBzgozoo2PeDRGvsrTS1dfuBwnuyKSy0aeJlZ7O0dPsu45uqFPo6eqipqnLzM309fWexo/P0tT29PHq7fCYnJ/Jy83w1bp0en+LundcZGnj7+TMz9Hl5ubJzM53r1+jp6q5vb+Nk5Xa3N3wz6/059vDx8nF3cDFyMrd3+GLkJT29/hRWV/m6Ontwpr5+vra6djy28Xw8fLm7O/ByM2IjZDIy8yOk5XnnFizt7ljZ2rw9vmWmp3rtYT8/Py9wcRqcHXpqW7x1bqmr7aXoqrnnVjq7Ozb4eW5vL/Z6NjG3cDvyKTlQkXiKy/mCg32AwXuyKXh6OvN1NmfqbCpra98ipOAhYpVWl3G3b+vuL798PDi6e374eHvhoh8gIM7QUXgDBDx1LqEkZuEkprzpKbzpKU7QUTZ6dd0VV5XAAAAKnRSTlMABd/PBxDvgCAQEYJ/IN9if8+/r+/gJJFg1FAg8O/Pv7+hUr+vwLKvwcA/a0FOAAAWL0lEQVR42uzWwWrCMBzH8eYiokhFa2UHxyaMgUlOMde8gMdBX6CnnUSGsKvgsQ+9JP+W7ra6ptCW3ydNTKm3r1EjAAAAAAAAAAAAAAAAAAAAeABj9FLd0gIjx6xy5wajbfWKz8AIMYpuw9JK6X11WhF9jFg17JZQ7HJPq7+QfyyothtN0Lv9tGsD09VEDtN6GvXKLN6+bxLRgnLTOnpaazcrxg3jprtx6MYO2voHm7dtnDY7/tOhhrcmPWo/W76I9pQSvryPXzfXJ3MydLnFM25Dl0WPLe36P8Vpg3/9a3k7DNRNrqKemC0TEYJybPg6u9F5kV15Y/fLd65s/tc0Yn+kl/IwWHIS9YMNH7C8V4Y/Z3f+uEsutJ4zxsabXkZ9sHgOF16o31/254z/07U4mk1q4yN9h+JEhFIeek3tRcZbuOZ6t8ep79JShC3v21vmfOftfBg9R/pab8srry7/xVu7uB98pO/IXgROT+WNLjgP0j6OGEP6DiwSEYz6VCrcmSfZaZcynPofds7tN2koDOBTY4y37MVpvMa7sW3iCds62kK5jCKBDLu5OZCQZZQBbizGOCeRIGQTL1GjvvhgMp/0zT/S73Baa7V4ih4MGn7q6Tk9p3358Z1bW/vBGMuBXiAxD+7VCZ4Rt1PHh+pNBnOgF8bhj+UeeMCz4q4K6/uhetYcFthhiccxr97kmfFAPX1gqJ455wRW3LE27ycx4zxDbqoHh+pHRgY36MG7YG3gpmo8Q55A2P+x+vTcOjdQ9E/9yX176Y1GBTeKVRPBRq8Wab29tbBzn+NNLnxjku8RIwVh/4fqReTn+sDGdHjg1J+4vofu3n3rvqIQGoJNUslR1MNfgKg3+J9oyd9o9b7Au/TH6iVxk+sD077BUz+yj+7+sNBFfaOE+dCTesA0P5Fy2bqvt1qtHVnegUOd75VJ9cCAjvUDqd6D+9Fu6ksk07N6a6jn3VmQ5QX+dzBSo7vo6sV0XFyK+OOk9FaM4eLicifkARL1af/HpcDy5lLkLS5J6UCENCE34KRAZMkPrURyl2URCsCjR4+ucT+Rn5lJ+DZmZmaCZjGbfT89nYcfw+pMluPwgcNkV7ent/MM1LNzf4yuvlguVy31pNwuWjVV1eneWtqlhF+rrxkGX0tO8HAADKPWOSTbxi+2dY55iHoUXUFzGooSawHkjyJAxE4RQCTORTUNrUTnEIJmMYQ0uAKlrRv4ESbGLZqtA+bxxo0bt91C3mTGLAYTuASSE7gzwAechhO+l1CxzUA9M/dnaeqbdQVo6JZ6PdcpF0F8BWeajqC33KeMX6tPylNbslw3SEmWk/BraMlAvetOfujyyC66ehSNYVuiaS26IkHw+53TvDkQG0GLXBqXY6LEQappcXIDLboYh5MxTkIRDohrUc5WT+nwIZ/YXuOyz4NO9ZC+z3LhWd97BupZuR/79VjfFpL1UrNZUXKW+pKyVW6XKrqgV5QP7XJFqTrfyTOj/j5N/Rd56mnye/U78k57YUfe6ra8C42Bebp6CesyRQas8P9BfRSqoOEmEjkLK8aRfW4F4Yv9KNCbepJxqs/7ZnE++/hxloF6Ru6FbuoJSUFXoVhVFKIe17QhVfFvoNSpmRdszGkeRP1tmvqO4+/Ut+WpGoT+5y98F/TTntSb1t4Q9WnOTX0E8qA+ZlpdliRp0WyKUMxuLkIawbfCvH79mvOg/rmLeji9GsRM+9b6pf7CbheuX9/zG+pzZUwRLFfL5aai6Kb6nNJIVnXIbCmlMq5puD2wDdHV15zq6/JOEpiSjW7qVU9jvT0+k9Cmqk9rqINodvicRVyD/DJa6WWGD25d1ENike+X+ous1DvH+noD1DvG+nnVXvq7vKCjelDPO9V/kk0WuqlP9UV9GkXTEPUkxMkNLJaQBNX+3tSH3dXng4S/2uEfur5nf/faIxT1uqI0VaFI1G8JGLXahGEemjTdHtzhoAf1r3pVX6dt8+jqLs/qQZpX9VHSw7upl9Airv4z9T6s/pndGTBQz8I8MEZRD9JVGOaJ+jpki2SdV4J/DRWyuuoIeqJ+MmTQ1WM6Q34J1OOKSbzqm+i2nZcZ8zTDj0MKwt54U2//WGz1Npq2Dk1MXrx44T7N23ZXT7LhjvoN3yoD9SzNA1co6tU6rN8+1LH6KnTuOaHS+IDLZUGFVcB8Kacknet6c3F315t6WNA9bcmfQT3/CbKfPn3uFvu1zFUvHT5ahHQdBHpVTxYDm8hNvYg0fAfKDH8WvLqoJ6ffddQHfQlyPsxAPRPz9C0dsnqvt7F6HPuKkKxAWm/ieC8pQK5qX2Vv5KZC3tQbU7L8eX4Kq+e3IC9PzfPuGKFjntSjwLqoYcdO9cuiKEbQEqRxh3rIRP1wxYqb+jiCIk09eH08S3bziHr79Gp+NkHW9e98idWH+Y2X0wzUMzIPG7lUikXVzKlVnTzBU80y5Nze1AD1hQe8NyYmanZ+weC7MR4a9TTNE8G+luZ+VC8hi5hTfTzQucDvpp6LIJGmHnj+zNzNc477G3A2sQbqMasJKIF/BuqZmAcOCIywg34cP7jL3OSZ8qCQOuptmheTpDjXC90voEzyaISDa5zNWjAY/nsPbWnmyU4uW/nWFH+cZ8qrwvERDF09Q/BerpN/51UNME/jIEvzgqke9/g1niWhzOhfVh+X1qM/LOr/HfWeOHCEddSTwT4zyTboQ0d3/V31krXDZ/OfqWcb9vZj2xDTsM9kznl6D9//ll3U+/2bnJP/TT2EPUu+vaGlZ57wrDBgkjf8BAMY3LD/7v/TUEOFuzwj7hUzB4ff3PWDMyzdC1g9cb/wipF5vTD88MqFQfvcEv5az+z1wi2eAU9ShVNHhx9Z94dR9j0+uJ8IFVi4fxIqhM4Pv6//yt7d9aQNxXEcL5lPkYACM+rGxbaLZWkVCQuIiQjMsZEQtAhzddZNz7oYZ9KYgVMMl0vmhffbre90fw92rfGxiqztfh/aI22JN9+0hpqcWjnyz/2WGZ9/uVfrd77aM6b4BR/SG5zanrJbv91nWeuOM6p80Jjs92FWjXv07GHH59UgcyVZk4/ucMqXVBYd8mEunXsVGOng3dyJ0/TJuZLCWqwq3cr+VkuTx+ku3lX6kN5BF33rDLk8vsq2jmxe93/sfy7pqhz19/iEK4XdPFFqRHCIwNPO/vOW1iTFL2VlprZ0tUTz7NBC68mLe0nMffwHP5Zkuq6+Y1H/oA/TI3dHYKgDt3d4Q8uJzy/7CmOaqmkqadFystKg0Urv6EXao8YHjTHlxfXhefvIpDv1hR1Uvl1/9MlIJ674xtzYyfZlv0T5s1lFkWlVZL4oWRqz7b2ywkfaJ8tydPz56FAvHojgDT7S00PLjdCHEd47Tmqaz73hBMHYYxymFQ9A8Rozp9GaXuZ+nzHimWfeh7MbAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgswbCLp5X46/IgNB9g8OhmOOFxrw4oco/nlwlEIw1pxyvGQsGhAtF3DuN0tkplcJCtwWPdyUX2D0ODnpu3jyryT6hy8ZirihP7WPD3k4/KXRZqCm5RDOE9B0Vm5JcYiqG9EiP9EiP9EjvfkiP9JdBeqRHeqRHetETkB7pL4P0V6dPxUlaPC9/6ZPol+JEvF4ukciJhszXSmONb1YSJCOaR4oN8bx5+ohFhn7XvaZ/3N/7v6WfSaXyNtMvpFIFm+lXGglum97vlcs/z6RPVByQ/tHbB723Sr+8WavpdYlsTtBQz9Ylk65LNnQ5PUnZTE+WbKavJIqZ3PZhMWNsWrrmynsOSC/0U3v76Zd3prkdCj5dox01Gk0f16Wb8Wz6tUSx/W7FTG/lhPS8vd30y+vTq1VJqta+rZ6m13d0V6afWZjN599vGOnTn/KztMGl6Uj6ovS/Dg60a9JTx0PRZE2fKxPzrN+rzM83cmb6lXI51630vL3N9KuUm6tWeXrOjelfx+OFpUI8vtBOPxunjcJ3kWx84UdevTmf/vfi4p92zqS3aSAKwAjEKoRYLggOHODkCBgs4cRSosRO7KQVGEKihKTKdogQqVJKWlqJQw8gWkpV9kUIxCqxiv/Imxm7DsSoTjIpSfs+qfbYnvHl85t547jzYB31BSh4qwelQNppkJLlFPzFHPWFJfmlgKgX4d5bfctVa6vPZXh3cCOa4+r5c7Ee/119XqVbg5hMPT1tcd11kjdpxXA36gulUsH2tiB1qPdI81LyLDSIpR318Cg02u41aPXcfTfqo8HxP9SzU1HYjrdg/H87w9U/DE77NPbfx3p+rHHPLP1/RzSJH5j+1bvMyyk/6ktuNaYezH/d2Hk9d+9f/XhwylN9lmYA0XIG1Ps0PwTqa6qq5onCNDclwCJ5ScqTvEoJk1CH+uLq6qt11Jf8qb/rZgQsPaDmB6j+5HYPkskd/tWD4qin+mrZHevhMfDh6r+rtwzC4OpVCXhHKrTsoHhm+GKiHgK9XT3QGKT6U/2rv+Yd9Xwc4OrpZE844tWHiK48VlWFKO7kTiUaLVsqJ9GL+kl5wZ/6WLv6lfmFhckN7vD3J3fs7X+sn4I/TjkYLAfEI159ndu2/ox6GPIr0Pnb9KK+sCDHfHX483/O6xtyqrCh6rl5/+pzrbK3+oejFvVEZ7uKrd6SgDzdKUT5W73pFFeXl9+v/37m5V/q5z3UP+G1XPVQb1aAeiHmvSd3WSfsZ3KgfsJWnwtOt431orI88ep5n84wSA22c85YX4etqZMEbA0DrgC/JE6FqH4zfG6Xd90xO/gboLRTfUxeiLF9wVFfgExPgHpB5r3f5mVnYJdtQWy3yk6ad4c9EeM5UA+7Ic7wQa8WDqs0uPVQUzHqtnpDa4ZgQs/HAD3fDCmavva0GJVw2Ld6CGg5XWpQnc4IcDfNpu/wLi8tL8F2ktVKpedLsyv2vJ4/MzEB6sWYd9W7ZOAdfqsKI3qGOq4u5pj6XDm4WG61oqCeJYNvcwJ0ilcPJDT7h9swAZSQM9brcBQ2eQaoE8CgF/hxHQ79qgdgpgbEHY+xuP3DrexQaqtlRz1/ZpYEqBdh3ls9yB+fmBi/wRP+iQn4IS9Di1PZiXHwHZ1iVa5FxRgVr94loaqm5KKqNclhjh70wWQkUhBQa4A/2u7dYr/Xjy6iP9XYu9U+1Rhd8AMtVP8vUD2qR/WoHtVLmwJUj+r/BapH9age1aN6aVOA6lH9v0D1qJ6Ci6cBu1B9jxwcnSUTvZfJPbxZFko9sm2D2TciC6Xe/HgAl0duA5dHpu6PnB59dh0G8xvP0VFYFP3gvm0IgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIsoXZc3iTrKvhgyN7xC6pcvDEmaHnECyks7kXVPG77AouqLLGkc2xjJLfxZYOC1R/4NVoLKP06sC+Tb1unj9O7xK4kM6Zm4GR4NaZg6geVtfbkksmnkD1oB4XSkX1qB7Vo/otAapH9age1aP6LQKqR/XC1X/4/HTsD57+CAwLqH6Q6j89G3t+4Q+ejz37FBgOUP0g1T/78uLcX7z48uxDYCjwpZ7okg/CJCSJJUTC0jqk5IuSL0pOxYgs96r++O6dXan/MQbmO9yPfQ4MBai+C/XHkjt2dqP+6fNzHjx/6tbIRRk3vOXMRHNiLBdfo/p+1AO7wX0X6scueKm/MObWiAY5VU/52WBGjPrLb1B9f+q5e7HqpzLAVLU1M0j1r/uIelOpaCGTHahWWNPyNclGpUdqm3pLSTBtFS1cewxlimLRehV2nd4q3JQocwprqCpztIFi0jr2jWmx6ag/e/v27bPrqi9dLMRm4/FSgQlOx+ONGBR4OT0pRD13L1R9lO0zwYmBqC9eZrs3sLt8szf1dXLFIDp1nyDEgDKxJIqpEXLlCiEJR70ZJooE5Am00DWi2jcIEYBWqxnQnpA8j2pWV2HPjEbyhN5Y5VdouW6rL166dKm4rvq4HFmRgRKU07KcWpFTzP0TVk4LUc/di1YPVN/ysZ+55iUR6i99o9sbyWIg8O1BT+qJngC1TESChXjCICaP9IpJzznqzTq3GbJbOOoNPW9KCdoH6LRCQiehTvV1lT4yFSjXWEOFrK9+vjTpql+5G5MK9yOSNCvHIfYb8hKcjskrEerfUV8olfpQz92LV9+i6qPlYJCH/wyUWtm+1b//VqS725dgU3zzvhf1zI1pGLzLd3WpRDfbx3puHtDsFo56OM15RzSJNdQ61PMmxICtxZ1r66pvJw6mAWY7VZBY7EfopkHLS6BexLyeuxetPht8SA8mMoFodQLMV6vRTHSx2qf6e0meQTxY5rF/uxf13Kctsqaqap5ZU+jWVW+Bec8WtKvn8HZgmJgd6h9JwBXitrOcsX51dVXyoX5+LaW7G6G8lGepc9YvzPak/uR2D5LJHeLUl6eBcjBLO/1FfioXuMOc51r9qT9vu76ZPM/2t5M3es3weR5nGYTCrFVIs109kGfFhNPCUW+0TwO44USH+sSa+jp55GT4/okzx1yzQ5pmA6wHaPSk/tTA1S+Wy+VgawrK1yHyKbArL7LSnX7Uu2F+PnnTVn++L/UwiiuPVVXxVG/pRPVUr3enHq72oj5ml9JyOsKBMwsy7wmEdfj7kzv2iu3wM60yK3NAfbUsIsN3wnyZJ3gzyXs9dPgQtI7oOrdiEcUR6Vq16OBfg6LptPineqOtw8+LiXpX/cV2zSl++qIY9dy86DRvPDhFo/5ahpFjXT/Qf5r3pkjTfBb8xe+9pXlghQtxLFaYNYvl465VqlFjArlzvUO9xYeEGjHcNE/rUM9uBTtnrF9eXi52oT4ix93Td+V5thOjnpsXnuFXqzC0w4Bv87aVY7u+J3cPvoNzHvvfL/U0uWO+mkygQWhYzxGitKXwNXPNV51YrA+vMM8d6hPEqLHr4bU8v0Y61NsX9C4z/Jgb6RH+DLApXpwl/ULUc/PC1cN+HIb2FnWU47k+lB4G+1Z/87L9Fhd2xZ7UGyTctAxmSCF6qKkYdi5vEbgSUgx7Xs9n/HPwTOikruRJvUM9dAu61QwT1sKE+4YsXe9QDwfwLk83elUfgQRvfr7BzhRSUG6kFkSo5+aFqwfKEOe5RZrvt6o52tVXp8vVaVAv/C2uf/XuyzjDchN5hfXVQEgngOZEPWCxuX4iTBt0pHnMPVB/xMpzOq2ldKpPVOhdld7UA5NLMrCSLtCAT0Ex3hCgnpsXqX4ma8u9kaURPzUxPX0NzLNSNnc1C+W+eXO5D/WAqaqm02e7RaaPHnpRc9K8zlvVOm7bwZw6J/VDjKX3nMnIpJBPNY6BeSE/2m4or4vdqheBTqRRwP+nGmC+C/WfvT/V+BkYCgalPhyqSbU8pIejwKA+0Prg/YFWYDgYlPorhFKRRgL8LFOkevOxpViqNBoIV+/y8++PsT8PyUeZ+EUu/gsGqkf1qB7VS1sIVI/qUT2qR/VbBFSP6gVwYnQWTzu0zYtdqL5HDp4ZicUy4af8M97L5B7eWgulHhG4OPKBVyOxXCYslIrLI+PyyH+5P3J6q7DrMJgXydFDZ4aeEwf3bfPkN1yBOqAk6i9ZAAAAAElFTkSuQmCC'),
          (yn = 'STORYBOOK_ADDON_ONBOARDING_CHANNEL'),
          (Tb = ({
            onFinish: e,
            api: t,
            addonsStore: n,
            skipOnboarding: r,
            codeSnippets: o,
          }) => {
            let [i, a] = ne('imports'),
              s = _r(),
              c = { imports: 0, meta: 1, story: 2, args: 3, customStory: 4 },
              [l, u] = ne(!1),
              [d, p] = Fm(),
              h = yb(),
              f = vb(i === 'customStory', t, n),
              m = bb('syntax-highlighter-backdrop', i === 'customStory'),
              x = o?.language === 'javascript',
              v = () => {
                let y = o.code[3][0].snippet;
                navigator.clipboard.writeText(
                  y.replace('// Copy the code below', '')
                ),
                  u(!0);
              },
              b = ye(() => {
                t.emit(yn, {
                  step: 'X:SkippedOnboarding',
                  where: `HowToWriteAStoryModal:${i}`,
                  type: 'telemetry',
                });
              }, [t, i]);
            return g.createElement(
              $l,
              { width: 740, height: 430, defaultOpen: !0 },
              ({ Title: y, Description: w, Close: E }) =>
                g.createElement(
                  xh,
                  null,
                  o
                    ? g.createElement(db, {
                        activeStep: c[i] || 0,
                        data: o.code,
                        width: 480,
                        filename: o.filename,
                      })
                    : null,
                  i === 'customStory' &&
                    m &&
                    !f?.data &&
                    g.createElement(
                      Le,
                      {
                        ref: d,
                        onClick: () => v(),
                        style: {
                          position: 'absolute',
                          opacity: p.width ? 1 : 0,
                          top: m.top + m.height - 45,
                          left: m.left + m.width - (p.width ?? 0) - 10,
                          zIndex: 1e3,
                        },
                      },
                      l ? 'Copied to clipboard' : 'Copy code'
                    ),
                  g.createElement(
                    wh,
                    null,
                    g.createElement(
                      Eh,
                      null,
                      g.createElement(
                        y,
                        { asChild: !0 },
                        g.createElement(
                          Th,
                          null,
                          g.createElement(Vi, { width: 13 }),
                          g.createElement('span', null, 'How to write a story')
                        )
                      ),
                      g.createElement(
                        E,
                        { onClick: b, asChild: !0 },
                        g.createElement(_i, {
                          style: { cursor: 'pointer' },
                          width: 13,
                          onClick: r,
                          color: s.color.darkest,
                        })
                      )
                    ),
                    g.createElement(
                      w,
                      { asChild: !0 },
                      g.createElement(
                        Sh,
                        null,
                        i === 'imports' &&
                          g.createElement(
                            g.Fragment,
                            null,
                            g.createElement(
                              'div',
                              null,
                              g.createElement('h3', null, 'Imports'),
                              x
                                ? g.createElement(
                                    'p',
                                    null,
                                    'Import a component. In this case, the Button component.'
                                  )
                                : g.createElement(
                                    g.Fragment,
                                    null,
                                    g.createElement(
                                      'p',
                                      null,
                                      'First, import ',
                                      g.createElement(nr, null, 'Meta'),
                                      ' and',
                                      ' ',
                                      g.createElement(nr, null, 'StoryObj'),
                                      ' for type safety and autocompletion in TypeScript stories.'
                                    ),
                                    g.createElement(
                                      'p',
                                      null,
                                      'Next, import a component. In this case, the Button component.'
                                    )
                                  )
                            ),
                            g.createElement(
                              Le,
                              {
                                style: { marginTop: 4 },
                                onClick: () => {
                                  a('meta');
                                },
                              },
                              'Next'
                            )
                          ),
                        i === 'meta' &&
                          g.createElement(
                            g.Fragment,
                            null,
                            g.createElement(
                              'div',
                              null,
                              g.createElement('h3', null, 'Meta'),
                              g.createElement(
                                'p',
                                null,
                                "The default export, Meta, contains metadata about this component's stories. The title field (optional) controls where stories appear in the sidebar."
                              ),
                              g.createElement(Gr, {
                                width: '204',
                                alt: "Title property pointing to Storybook's sidebar",
                                src: xb,
                              })
                            ),
                            g.createElement(
                              Gn,
                              null,
                              g.createElement(
                                Le,
                                {
                                  variant: 'secondary',
                                  onClick: () => a('imports'),
                                },
                                'Previous'
                              ),
                              g.createElement(
                                Le,
                                { onClick: () => a('story') },
                                'Next'
                              )
                            )
                          ),
                        i === 'story' &&
                          g.createElement(
                            g.Fragment,
                            null,
                            g.createElement(
                              'div',
                              null,
                              g.createElement('h3', null, 'Story'),
                              g.createElement(
                                'p',
                                null,
                                'Each named export is a story. Its contents specify how the story is rendered in addition to other configuration options.'
                              ),
                              g.createElement(Gr, {
                                width: '190',
                                alt: 'Story export pointing to the sidebar entry of the story',
                                src: wb,
                              })
                            ),
                            g.createElement(
                              Gn,
                              null,
                              g.createElement(
                                Le,
                                {
                                  variant: 'secondary',
                                  onClick: () => a('meta'),
                                },
                                'Previous'
                              ),
                              g.createElement(
                                Le,
                                { onClick: () => a('args') },
                                'Next'
                              )
                            )
                          ),
                        i === 'args' &&
                          g.createElement(
                            g.Fragment,
                            null,
                            g.createElement(
                              'div',
                              null,
                              g.createElement('h3', null, 'Args'),
                              g.createElement(
                                'p',
                                null,
                                'Args are inputs that are passed to the component, which Storybook uses to render the component in different states. In React, args = props. They also specify the initial control values for the story.'
                              ),
                              g.createElement(Gr, {
                                alt: 'Args mapped to their controls in Storybook',
                                width: '253',
                                src: Eb,
                              })
                            ),
                            g.createElement(
                              Gn,
                              null,
                              g.createElement(
                                Le,
                                {
                                  variant: 'secondary',
                                  onClick: () => a('story'),
                                },
                                'Previous'
                              ),
                              g.createElement(
                                Le,
                                { onClick: () => a('customStory') },
                                'Next'
                              )
                            )
                          ),
                        i === 'customStory' &&
                          (f?.error
                            ? null
                            : g.createElement(
                                g.Fragment,
                                null,
                                g.createElement(
                                  'div',
                                  null,
                                  g.createElement(
                                    'h3',
                                    null,
                                    'Create your first story'
                                  ),
                                  g.createElement(
                                    'p',
                                    null,
                                    "Now it's your turn. See how easy it is to create your first story by following these steps below."
                                  ),
                                  g.createElement(
                                    hb,
                                    null,
                                    g.createElement(
                                      ho,
                                      { isCompleted: l || !!f?.data, index: 1 },
                                      'Copy the Warning story.'
                                    ),
                                    g.createElement(
                                      ho,
                                      { isCompleted: !!f?.data, index: 2 },
                                      g.createElement(
                                        Mh,
                                        null,
                                        'Open the Button story in your current working directory.'
                                      ),
                                      h?.data &&
                                        g.createElement(
                                          nr,
                                          null,
                                          h.data
                                            .replaceAll('/', '/\u200B')
                                            .replaceAll('\\', '\\\u200B')
                                        )
                                    ),
                                    g.createElement(
                                      ho,
                                      { isCompleted: !!f?.data, index: 3 },
                                      'Paste it at the bottom of the file and save.'
                                    )
                                  )
                                ),
                                g.createElement(
                                  Gn,
                                  null,
                                  g.createElement(
                                    Le,
                                    {
                                      variant: 'secondary',
                                      onClick: () => a('args'),
                                    },
                                    'Previous'
                                  ),
                                  f?.data
                                    ? g.createElement(
                                        Le,
                                        { onClick: () => e() },
                                        'Go to story'
                                      )
                                    : null
                                )
                              ))
                      )
                    ),
                    g.createElement(
                      Ph,
                      null,
                      g.createElement(Ch, null),
                      g.createElement(Rh, null),
                      g.createElement(kh, null)
                    )
                  )
                )
            );
          }),
          (Sb = {
            filename: 'Button.stories.js',
            language: 'typescript',
            code: [
              [{ snippet: "import { Button } from './Button';" }],
              [
                {
                  snippet: `export default {
      title: 'Example/Button',
      component: Button,
      // ...
    };`,
                },
              ],
              [
                { snippet: 'export const Primary = {' },
                {
                  snippet: `args: {
        primary: true,
        label: 'Click',
        background: 'red'
      }`,
                  toggle: !0,
                },
                { snippet: '};' },
              ],
              [
                {
                  snippet: `// Copy the code below
export const Warning = {
  args: {
    primary: true,
    label: 'Delete now',
    backgroundColor: 'red',
  }
};`,
                },
              ],
            ],
          }),
          (Pb = Sb),
          (Ob = {
            filename: 'Button.stories.ts',
            language: 'typescript',
            code: [
              [
                {
                  snippet: `import type { Meta, StoryObj } from '@storybook/react';
      
      import { Button } from './Button';`,
                },
              ],
              [
                {
                  snippet: `const meta: Meta<typeof Button> = {
        title: 'Example/Button',
        component: Button,
        // ...
      };
          
      export default meta;`,
                },
              ],
              [
                {
                  snippet: `type Story = StoryObj<Button>;
        
      export const Primary: Story = {`,
                },
                {
                  snippet: `args: {
          primary: true,
          label: 'Click',
          background: 'red'
        }`,
                  toggle: !0,
                },
                { snippet: '};' },
              ],
              [
                {
                  snippet: `// Copy the code below
  export const Warning: Story = {
    args: {
      primary: true,
      label: 'Delete now',
      backgroundColor: 'red',
    }
  };`,
                },
              ],
            ],
          }),
          (Cb = Ob);
        Rb = Mi();
      });
    ce();
    ue();
    de();
    ce();
    ue();
    de();
    _n();
    Un();
    Fr();
    Vr();
    var kb = Oi(() => Promise.resolve().then(() => (fu(), hu)));
    Wn.register('@storybook/addon-onboarding', async (e) => {
      let t = e.getUrlState(),
        n = t.path === '/onboarding' || t.queryParams.onboarding === 'true';
      e.once(Ii, () => {
        if (
          !(
            e.getData('example-button--primary') ||
            document.getElementById('example-button--primary')
          )
        ) {
          console.warn(
            '[@storybook/addon-onboarding] It seems like you have finished the onboarding experience in Storybook! Therefore this addon is not necessary anymore and will not be loaded. You are free to remove it from your project. More info: https://github.com/storybookjs/storybook/tree/next/code/addons/onboarding#uninstalling'
          );
          return;
        }
        if (!n || window.innerWidth < 730) return;
        e.togglePanel(!0),
          e.togglePanelPosition('bottom'),
          e.setSelectedPanel('addon-controls');
        let r = document.createElement('div');
        (r.id = 'storybook-addon-onboarding'),
          document.body.appendChild(r),
          ut.render(
            g.createElement(
              Si,
              { fallback: g.createElement('div', null, 'Loading...') },
              g.createElement(kb, { api: e })
            ),
            r
          );
      });
    });
  })();
} catch (e) {
  console.error(
    '[Storybook] One of your manager-entries failed: ' + import.meta.url,
    e
  );
}
