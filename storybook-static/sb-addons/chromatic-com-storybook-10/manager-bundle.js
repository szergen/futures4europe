try {
  (() => {
    var Ys = Object.create;
    var Za = Object.defineProperty;
    var Qs = Object.getOwnPropertyDescriptor;
    var Ks = Object.getOwnPropertyNames;
    var Js = Object.getPrototypeOf,
      Xs = Object.prototype.hasOwnProperty;
    var Ut = ((e) =>
      typeof require < 'u'
        ? require
        : typeof Proxy < 'u'
        ? new Proxy(e, {
            get: (t, n) => (typeof require < 'u' ? require : t)[n],
          })
        : e)(function (e) {
      if (typeof require < 'u') return require.apply(this, arguments);
      throw Error('Dynamic require of "' + e + '" is not supported');
    });
    var Ia = (e, t) => () => (e && (t = e((e = 0))), t);
    var ec = (e, t) => () => (
        t || e((t = { exports: {} }).exports, t), t.exports
      ),
      tc = (e, t) => {
        for (var n in t) Za(e, n, { get: t[n], enumerable: !0 });
      },
      zo = (e, t, n, r) => {
        if ((t && typeof t == 'object') || typeof t == 'function')
          for (let i of Ks(t))
            !Xs.call(e, i) &&
              i !== n &&
              Za(e, i, {
                get: () => t[i],
                enumerable: !(r = Qs(t, i)) || r.enumerable,
              });
        return e;
      };
    var nc = (e, t, n) => (
        (n = e != null ? Ys(Js(e)) : {}),
        zo(
          t || !e || !e.__esModule
            ? Za(n, 'default', { value: e, enumerable: !0 })
            : n,
          e
        )
      ),
      Uo = (e) => zo(Za({}, '__esModule', { value: !0 }), e);
    var be = Ia(() => {});
    var Ge,
      Ee = Ia(() => {
        Ge = {
          NODE_ENV: 'production',
          NODE_PATH: [],
          STORYBOOK: 'true',
          PUBLIC_URL: '.',
        };
      });
    var ke = Ia(() => {});
    var Ba = {};
    tc(Ba, {
      Children: () => rc,
      Component: () => It,
      Fragment: () => ic,
      Profiler: () => oc,
      PureComponent: () => lc,
      StrictMode: () => sc,
      Suspense: () => cc,
      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => dc,
      cloneElement: () => uc,
      createContext: () => Qe,
      createElement: () => C,
      createFactory: () => mc,
      createRef: () => pc,
      default: () => a,
      forwardRef: () => W,
      isValidElement: () => ei,
      lazy: () => hc,
      memo: () => fc,
      startTransition: () => gc,
      unstable_act: () => vc,
      useCallback: () => de,
      useContext: () => Vn,
      useDebugValue: () => yc,
      useDeferredValue: () => bc,
      useEffect: () => pe,
      useId: () => Ec,
      useImperativeHandle: () => kc,
      useInsertionEffect: () => wc,
      useLayoutEffect: () => Cc,
      useMemo: () => $t,
      useReducer: () => ti,
      useRef: () => Te,
      useState: () => Me,
      useSyncExternalStore: () => xc,
      useTransition: () => Sc,
      version: () => Mc,
    });
    var a,
      rc,
      It,
      ic,
      oc,
      lc,
      sc,
      cc,
      dc,
      uc,
      Qe,
      C,
      mc,
      pc,
      W,
      ei,
      hc,
      fc,
      gc,
      vc,
      de,
      Vn,
      yc,
      bc,
      pe,
      Ec,
      kc,
      wc,
      Cc,
      $t,
      ti,
      Te,
      Me,
      xc,
      Sc,
      Mc,
      jn = Ia(() => {
        be();
        Ee();
        ke();
        (a = __REACT__),
          ({
            Children: rc,
            Component: It,
            Fragment: ic,
            Profiler: oc,
            PureComponent: lc,
            StrictMode: sc,
            Suspense: cc,
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: dc,
            cloneElement: uc,
            createContext: Qe,
            createElement: C,
            createFactory: mc,
            createRef: pc,
            forwardRef: W,
            isValidElement: ei,
            lazy: hc,
            memo: fc,
            startTransition: gc,
            unstable_act: vc,
            useCallback: de,
            useContext: Vn,
            useDebugValue: yc,
            useDeferredValue: bc,
            useEffect: pe,
            useId: Ec,
            useImperativeHandle: kc,
            useInsertionEffect: wc,
            useLayoutEffect: Cc,
            useMemo: $t,
            useReducer: ti,
            useRef: Te,
            useState: Me,
            useSyncExternalStore: xc,
            useTransition: Sc,
            version: Mc,
          } = __REACT__);
      });
    var tl = ec((zn, ii) => {
      be();
      Ee();
      ke();
      (function (e, t) {
        typeof zn == 'object' && typeof ii == 'object'
          ? (ii.exports = t((jn(), Uo(Ba))))
          : typeof define == 'function' && define.amd
          ? define(['react'], t)
          : typeof zn == 'object'
          ? (zn.ReactConfetti = t((jn(), Uo(Ba))))
          : (e.ReactConfetti = t(e.React));
      })(typeof self < 'u' ? self : zn, function (e) {
        return (function (t) {
          var n = {};
          function r(i) {
            if (n[i]) return n[i].exports;
            var o = (n[i] = { i, l: !1, exports: {} });
            return t[i].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
          }
          return (
            (r.m = t),
            (r.c = n),
            (r.d = function (i, o, l) {
              r.o(i, o) ||
                Object.defineProperty(i, o, { enumerable: !0, get: l });
            }),
            (r.r = function (i) {
              typeof Symbol < 'u' &&
                Symbol.toStringTag &&
                Object.defineProperty(i, Symbol.toStringTag, {
                  value: 'Module',
                }),
                Object.defineProperty(i, '__esModule', { value: !0 });
            }),
            (r.t = function (i, o) {
              if (
                (1 & o && (i = r(i)),
                8 & o || (4 & o && typeof i == 'object' && i && i.__esModule))
              )
                return i;
              var l = Object.create(null);
              if (
                (r.r(l),
                Object.defineProperty(l, 'default', {
                  enumerable: !0,
                  value: i,
                }),
                2 & o && typeof i != 'string')
              )
                for (var s in i)
                  r.d(
                    l,
                    s,
                    function (c) {
                      return i[c];
                    }.bind(null, s)
                  );
              return l;
            }),
            (r.n = function (i) {
              var o =
                i && i.__esModule
                  ? function () {
                      return i.default;
                    }
                  : function () {
                      return i;
                    };
              return r.d(o, 'a', o), o;
            }),
            (r.o = function (i, o) {
              return Object.prototype.hasOwnProperty.call(i, o);
            }),
            (r.p = ''),
            r((r.s = 2))
          );
        })([
          function (t, n) {
            t.exports = e;
          },
          function (t, n, r) {
            'use strict';
            var i = {
              linear: function (o, l, s, c) {
                return ((s - l) * o) / c + l;
              },
              easeInQuad: function (o, l, s, c) {
                return (s - l) * (o /= c) * o + l;
              },
              easeOutQuad: function (o, l, s, c) {
                return -(s - l) * (o /= c) * (o - 2) + l;
              },
              easeInOutQuad: function (o, l, s, c) {
                var d = s - l;
                return (o /= c / 2) < 1
                  ? (d / 2) * o * o + l
                  : (-d / 2) * (--o * (o - 2) - 1) + l;
              },
              easeInCubic: function (o, l, s, c) {
                return (s - l) * (o /= c) * o * o + l;
              },
              easeOutCubic: function (o, l, s, c) {
                return (s - l) * ((o = o / c - 1) * o * o + 1) + l;
              },
              easeInOutCubic: function (o, l, s, c) {
                var d = s - l;
                return (o /= c / 2) < 1
                  ? (d / 2) * o * o * o + l
                  : (d / 2) * ((o -= 2) * o * o + 2) + l;
              },
              easeInQuart: function (o, l, s, c) {
                return (s - l) * (o /= c) * o * o * o + l;
              },
              easeOutQuart: function (o, l, s, c) {
                return -(s - l) * ((o = o / c - 1) * o * o * o - 1) + l;
              },
              easeInOutQuart: function (o, l, s, c) {
                var d = s - l;
                return (o /= c / 2) < 1
                  ? (d / 2) * o * o * o * o + l
                  : (-d / 2) * ((o -= 2) * o * o * o - 2) + l;
              },
              easeInQuint: function (o, l, s, c) {
                return (s - l) * (o /= c) * o * o * o * o + l;
              },
              easeOutQuint: function (o, l, s, c) {
                return (s - l) * ((o = o / c - 1) * o * o * o * o + 1) + l;
              },
              easeInOutQuint: function (o, l, s, c) {
                var d = s - l;
                return (o /= c / 2) < 1
                  ? (d / 2) * o * o * o * o * o + l
                  : (d / 2) * ((o -= 2) * o * o * o * o + 2) + l;
              },
              easeInSine: function (o, l, s, c) {
                var d = s - l;
                return -d * Math.cos((o / c) * (Math.PI / 2)) + d + l;
              },
              easeOutSine: function (o, l, s, c) {
                return (s - l) * Math.sin((o / c) * (Math.PI / 2)) + l;
              },
              easeInOutSine: function (o, l, s, c) {
                return (-(s - l) / 2) * (Math.cos((Math.PI * o) / c) - 1) + l;
              },
              easeInExpo: function (o, l, s, c) {
                return o == 0 ? l : (s - l) * Math.pow(2, 10 * (o / c - 1)) + l;
              },
              easeOutExpo: function (o, l, s, c) {
                var d = s - l;
                return o == c
                  ? l + d
                  : d * (1 - Math.pow(2, (-10 * o) / c)) + l;
              },
              easeInOutExpo: function (o, l, s, c) {
                var d = s - l;
                return o === 0
                  ? l
                  : o === c
                  ? l + d
                  : (o /= c / 2) < 1
                  ? (d / 2) * Math.pow(2, 10 * (o - 1)) + l
                  : (d / 2) * (2 - Math.pow(2, -10 * --o)) + l;
              },
              easeInCirc: function (o, l, s, c) {
                return -(s - l) * (Math.sqrt(1 - (o /= c) * o) - 1) + l;
              },
              easeOutCirc: function (o, l, s, c) {
                return (s - l) * Math.sqrt(1 - (o = o / c - 1) * o) + l;
              },
              easeInOutCirc: function (o, l, s, c) {
                var d = s - l;
                return (o /= c / 2) < 1
                  ? (-d / 2) * (Math.sqrt(1 - o * o) - 1) + l
                  : (d / 2) * (Math.sqrt(1 - (o -= 2) * o) + 1) + l;
              },
              easeInElastic: function (o, l, s, c) {
                var d,
                  u,
                  m,
                  p = s - l;
                return (
                  (m = 1.70158),
                  o === 0
                    ? l
                    : (o /= c) == 1
                    ? l + p
                    : ((u = 0) || (u = 0.3 * c),
                      (d = p) < Math.abs(p)
                        ? ((d = p), (m = u / 4))
                        : (m = (u / (2 * Math.PI)) * Math.asin(p / d)),
                      -d *
                        Math.pow(2, 10 * (o -= 1)) *
                        Math.sin(((o * c - m) * (2 * Math.PI)) / u) +
                        l)
                );
              },
              easeOutElastic: function (o, l, s, c) {
                var d,
                  u,
                  m,
                  p = s - l;
                return (
                  (m = 1.70158),
                  o === 0
                    ? l
                    : (o /= c) == 1
                    ? l + p
                    : ((u = 0) || (u = 0.3 * c),
                      (d = p) < Math.abs(p)
                        ? ((d = p), (m = u / 4))
                        : (m = (u / (2 * Math.PI)) * Math.asin(p / d)),
                      d *
                        Math.pow(2, -10 * o) *
                        Math.sin(((o * c - m) * (2 * Math.PI)) / u) +
                        p +
                        l)
                );
              },
              easeInOutElastic: function (o, l, s, c) {
                var d,
                  u,
                  m,
                  p = s - l;
                return (
                  (m = 1.70158),
                  o === 0
                    ? l
                    : (o /= c / 2) == 2
                    ? l + p
                    : ((u = 0) || (u = c * 0.44999999999999996),
                      (d = p) < Math.abs(p)
                        ? ((d = p), (m = u / 4))
                        : (m = (u / (2 * Math.PI)) * Math.asin(p / d)),
                      o < 1
                        ? d *
                            Math.pow(2, 10 * (o -= 1)) *
                            Math.sin(((o * c - m) * (2 * Math.PI)) / u) *
                            -0.5 +
                          l
                        : d *
                            Math.pow(2, -10 * (o -= 1)) *
                            Math.sin(((o * c - m) * (2 * Math.PI)) / u) *
                            0.5 +
                          p +
                          l)
                );
              },
              easeInBack: function (o, l, s, c, d) {
                return (
                  d === void 0 && (d = 1.70158),
                  (s - l) * (o /= c) * o * ((d + 1) * o - d) + l
                );
              },
              easeOutBack: function (o, l, s, c, d) {
                return (
                  d === void 0 && (d = 1.70158),
                  (s - l) * ((o = o / c - 1) * o * ((d + 1) * o + d) + 1) + l
                );
              },
              easeInOutBack: function (o, l, s, c, d) {
                var u = s - l;
                return (
                  d === void 0 && (d = 1.70158),
                  (o /= c / 2) < 1
                    ? (u / 2) * (o * o * ((1 + (d *= 1.525)) * o - d)) + l
                    : (u / 2) *
                        ((o -= 2) * o * ((1 + (d *= 1.525)) * o + d) + 2) +
                      l
                );
              },
              easeInBounce: function (o, l, s, c) {
                var d = s - l;
                return d - i.easeOutBounce(c - o, 0, d, c) + l;
              },
              easeOutBounce: function (o, l, s, c) {
                var d = s - l;
                return (o /= c) < 0.36363636363636365
                  ? d * (7.5625 * o * o) + l
                  : o < 0.7272727272727273
                  ? d * (7.5625 * (o -= 0.5454545454545454) * o + 0.75) + l
                  : o < 0.9090909090909091
                  ? d * (7.5625 * (o -= 0.8181818181818182) * o + 0.9375) + l
                  : d * (7.5625 * (o -= 0.9545454545454546) * o + 0.984375) + l;
              },
              easeInOutBounce: function (o, l, s, c) {
                var d = s - l;
                return o < c / 2
                  ? 0.5 * i.easeInBounce(2 * o, 0, d, c) + l
                  : 0.5 * i.easeOutBounce(2 * o - c, 0, d, c) + 0.5 * d + l;
              },
            };
            t.exports = i;
          },
          function (t, n, r) {
            t.exports = r(3);
          },
          function (t, n, r) {
            'use strict';
            r.r(n),
              r.d(n, 'ReactConfetti', function () {
                return Po;
              });
            var i,
              o,
              l = r(0),
              s = r.n(l),
              c = r(1),
              d = r.n(c);
            function u(x, M) {
              return x + Math.random() * (M - x);
            }
            function m(x, M) {
              for (var F = 0; F < M.length; F++) {
                var N = M[F];
                (N.enumerable = N.enumerable || !1),
                  (N.configurable = !0),
                  'value' in N && (N.writable = !0),
                  Object.defineProperty(x, N.key, N);
              }
            }
            function p(x, M, F) {
              return (
                M in x
                  ? Object.defineProperty(x, M, {
                      value: F,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (x[M] = F),
                x
              );
            }
            (function (x) {
              (x[(x.Circle = 0)] = 'Circle'),
                (x[(x.Square = 1)] = 'Square'),
                (x[(x.Strip = 2)] = 'Strip');
            })(i || (i = {})),
              (function (x) {
                (x[(x.Positive = 1)] = 'Positive'),
                  (x[(x.Negative = -1)] = 'Negative');
              })(o || (o = {}));
            var v = (function () {
              function x(ne, te, B, me) {
                (function (Qr, In) {
                  if (!(Qr instanceof In))
                    throw new TypeError('Cannot call a class as a function');
                })(this, x),
                  p(this, 'context', void 0),
                  p(this, 'radius', void 0),
                  p(this, 'x', void 0),
                  p(this, 'y', void 0),
                  p(this, 'w', void 0),
                  p(this, 'h', void 0),
                  p(this, 'vx', void 0),
                  p(this, 'vy', void 0),
                  p(this, 'shape', void 0),
                  p(this, 'angle', void 0),
                  p(this, 'angularSpin', void 0),
                  p(this, 'color', void 0),
                  p(this, 'rotateY', void 0),
                  p(this, 'rotationDirection', void 0),
                  p(this, 'getOptions', void 0),
                  (this.getOptions = te);
                var ye,
                  ce,
                  Oe = this.getOptions(),
                  _t = Oe.colors,
                  Ve = Oe.initialVelocityX,
                  ln = Oe.initialVelocityY;
                (this.context = ne),
                  (this.x = B),
                  (this.y = me),
                  (this.w = u(5, 20)),
                  (this.h = u(5, 20)),
                  (this.radius = u(5, 10)),
                  (this.vx =
                    typeof Ve == 'number' ? u(-Ve, Ve) : u(Ve.min, Ve.max)),
                  (this.vy =
                    typeof ln == 'number' ? u(-ln, 0) : u(ln.min, ln.max)),
                  (this.shape =
                    ((ye = 0),
                    (ce = 2),
                    Math.floor(ye + Math.random() * (ce - ye + 1)))),
                  (this.angle = (u(0, 360) * Math.PI) / 180),
                  (this.angularSpin = u(-0.2, 0.2)),
                  (this.color = _t[Math.floor(Math.random() * _t.length)]),
                  (this.rotateY = u(0, 1)),
                  (this.rotationDirection = u(0, 1) ? o.Positive : o.Negative);
              }
              var M, F, N;
              return (
                (M = x),
                (F = [
                  {
                    key: 'update',
                    value: function () {
                      var ne = this.getOptions(),
                        te = ne.gravity,
                        B = ne.wind,
                        me = ne.friction,
                        ye = ne.opacity,
                        ce = ne.drawShape;
                      (this.x += this.vx),
                        (this.y += this.vy),
                        (this.vy += te),
                        (this.vx += B),
                        (this.vx *= me),
                        (this.vy *= me),
                        this.rotateY >= 1 &&
                        this.rotationDirection === o.Positive
                          ? (this.rotationDirection = o.Negative)
                          : this.rotateY <= -1 &&
                            this.rotationDirection === o.Negative &&
                            (this.rotationDirection = o.Positive);
                      var Oe = 0.1 * this.rotationDirection;
                      if (
                        ((this.rotateY += Oe),
                        (this.angle += this.angularSpin),
                        this.context.save(),
                        this.context.translate(this.x, this.y),
                        this.context.rotate(this.angle),
                        this.context.scale(1, this.rotateY),
                        this.context.rotate(this.angle),
                        this.context.beginPath(),
                        (this.context.fillStyle = this.color),
                        (this.context.strokeStyle = this.color),
                        (this.context.globalAlpha = ye),
                        (this.context.lineCap = 'round'),
                        (this.context.lineWidth = 2),
                        ce && typeof ce == 'function')
                      )
                        ce.call(this, this.context);
                      else
                        switch (this.shape) {
                          case i.Circle:
                            this.context.beginPath(),
                              this.context.arc(
                                0,
                                0,
                                this.radius,
                                0,
                                2 * Math.PI
                              ),
                              this.context.fill();
                            break;
                          case i.Square:
                            this.context.fillRect(
                              -this.w / 2,
                              -this.h / 2,
                              this.w,
                              this.h
                            );
                            break;
                          case i.Strip:
                            this.context.fillRect(
                              -this.w / 6,
                              -this.h / 2,
                              this.w / 3,
                              this.h
                            );
                        }
                      this.context.closePath(), this.context.restore();
                    },
                  },
                ]) && m(M.prototype, F),
                N && m(M, N),
                x
              );
            })();
            function h(x, M, F) {
              return (
                M in x
                  ? Object.defineProperty(x, M, {
                      value: F,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (x[M] = F),
                x
              );
            }
            var b = function x(M, F) {
              var N = this;
              (function (te, B) {
                if (!(te instanceof B))
                  throw new TypeError('Cannot call a class as a function');
              })(this, x),
                h(this, 'canvas', void 0),
                h(this, 'context', void 0),
                h(this, 'getOptions', void 0),
                h(this, 'x', 0),
                h(this, 'y', 0),
                h(this, 'w', 0),
                h(this, 'h', 0),
                h(this, 'lastNumberOfPieces', 0),
                h(this, 'tweenInitTime', Date.now()),
                h(this, 'particles', []),
                h(this, 'particlesGenerated', 0),
                h(this, 'removeParticleAt', function (te) {
                  N.particles.splice(te, 1);
                }),
                h(this, 'getParticle', function () {
                  var te = u(N.x, N.w + N.x),
                    B = u(N.y, N.h + N.y);
                  return new v(N.context, N.getOptions, te, B);
                }),
                h(this, 'animate', function () {
                  var te = N.canvas,
                    B = N.context,
                    me = N.particlesGenerated,
                    ye = N.lastNumberOfPieces,
                    ce = N.getOptions(),
                    Oe = ce.run,
                    _t = ce.recycle,
                    Ve = ce.numberOfPieces,
                    ln = ce.debug,
                    Qr = ce.tweenFunction,
                    In = ce.tweenDuration;
                  if (!Oe) return !1;
                  var Kr = N.particles.length,
                    Rn = _t ? Kr : me,
                    Jr = Date.now();
                  if (Rn < Ve) {
                    ye !== Ve &&
                      ((N.tweenInitTime = Jr), (N.lastNumberOfPieces = Ve));
                    for (
                      var Vo = N.tweenInitTime,
                        qs = Qr(
                          Jr - Vo > In ? In : Math.max(0, Jr - Vo),
                          Rn,
                          Ve,
                          In
                        ),
                        jo = Math.round(qs - Rn),
                        Ho = 0;
                      Ho < jo;
                      Ho++
                    )
                      N.particles.push(N.getParticle());
                    N.particlesGenerated += jo;
                  }
                  return (
                    ln &&
                      ((B.font = '12px sans-serif'),
                      (B.fillStyle = '#333'),
                      (B.textAlign = 'right'),
                      B.fillText(
                        'Particles: '.concat(Kr),
                        te.width - 10,
                        te.height - 20
                      )),
                    N.particles.forEach(function (Bn, Do) {
                      Bn.update(),
                        (Bn.y > te.height ||
                          Bn.y < -100 ||
                          Bn.x > te.width + 100 ||
                          Bn.x < -100) &&
                          (_t && Rn <= Ve
                            ? (N.particles[Do] = N.getParticle())
                            : N.removeParticleAt(Do));
                    }),
                    Kr > 0 || Rn < Ve
                  );
                }),
                (this.canvas = M);
              var ne = this.canvas.getContext('2d');
              if (!ne) throw new Error('Could not get canvas context');
              (this.context = ne), (this.getOptions = F);
            };
            function k(x, M) {
              var F = Object.keys(x);
              if (Object.getOwnPropertySymbols) {
                var N = Object.getOwnPropertySymbols(x);
                M &&
                  (N = N.filter(function (ne) {
                    return Object.getOwnPropertyDescriptor(x, ne).enumerable;
                  })),
                  F.push.apply(F, N);
              }
              return F;
            }
            function y(x) {
              for (var M = 1; M < arguments.length; M++) {
                var F = arguments[M] != null ? arguments[M] : {};
                M % 2
                  ? k(Object(F), !0).forEach(function (N) {
                      f(x, N, F[N]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      x,
                      Object.getOwnPropertyDescriptors(F)
                    )
                  : k(Object(F)).forEach(function (N) {
                      Object.defineProperty(
                        x,
                        N,
                        Object.getOwnPropertyDescriptor(F, N)
                      );
                    });
              }
              return x;
            }
            function g(x, M) {
              for (var F = 0; F < M.length; F++) {
                var N = M[F];
                (N.enumerable = N.enumerable || !1),
                  (N.configurable = !0),
                  'value' in N && (N.writable = !0),
                  Object.defineProperty(x, N.key, N);
              }
            }
            function f(x, M, F) {
              return (
                M in x
                  ? Object.defineProperty(x, M, {
                      value: F,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (x[M] = F),
                x
              );
            }
            var E = {
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
                tweenFunction: d.a.easeInOutQuad,
                tweenDuration: 5e3,
                recycle: !0,
                run: !0,
              },
              S = (function () {
                function x(ne, te) {
                  var B = this;
                  (function (ye, ce) {
                    if (!(ye instanceof ce))
                      throw new TypeError('Cannot call a class as a function');
                  })(this, x),
                    f(this, 'canvas', void 0),
                    f(this, 'context', void 0),
                    f(this, '_options', void 0),
                    f(this, 'generator', void 0),
                    f(this, 'rafId', void 0),
                    f(this, 'setOptionsWithDefaults', function (ye) {
                      var ce = {
                        confettiSource: { x: 0, y: 0, w: B.canvas.width, h: 0 },
                      };
                      (B._options = y(y(y({}, ce), E), ye)),
                        Object.assign(B, ye.confettiSource);
                    }),
                    f(this, 'update', function () {
                      var ye = B.options,
                        ce = ye.run,
                        Oe = ye.onConfettiComplete,
                        _t = B.canvas,
                        Ve = B.context;
                      ce &&
                        ((Ve.fillStyle = 'white'),
                        Ve.clearRect(0, 0, _t.width, _t.height)),
                        B.generator.animate()
                          ? (B.rafId = requestAnimationFrame(B.update))
                          : (Oe &&
                              typeof Oe == 'function' &&
                              B.generator.particlesGenerated > 0 &&
                              Oe.call(B, B),
                            (B._options.run = !1));
                    }),
                    f(this, 'reset', function () {
                      B.generator &&
                        B.generator.particlesGenerated > 0 &&
                        ((B.generator.particlesGenerated = 0),
                        (B.generator.particles = []),
                        (B.generator.lastNumberOfPieces = 0));
                    }),
                    f(this, 'stop', function () {
                      (B.options = { run: !1 }),
                        B.rafId &&
                          (cancelAnimationFrame(B.rafId), (B.rafId = void 0));
                    }),
                    (this.canvas = ne);
                  var me = this.canvas.getContext('2d');
                  if (!me) throw new Error('Could not get canvas context');
                  (this.context = me),
                    (this.generator = new b(this.canvas, function () {
                      return B.options;
                    })),
                    (this.options = te),
                    this.update();
                }
                var M, F, N;
                return (
                  (M = x),
                  (F = [
                    {
                      key: 'options',
                      get: function () {
                        return this._options;
                      },
                      set: function (ne) {
                        var te = this._options && this._options.run,
                          B = this._options && this._options.recycle;
                        this.setOptionsWithDefaults(ne),
                          this.generator &&
                            (Object.assign(
                              this.generator,
                              this.options.confettiSource
                            ),
                            typeof ne.recycle == 'boolean' &&
                              ne.recycle &&
                              B === !1 &&
                              (this.generator.lastNumberOfPieces =
                                this.generator.particles.length)),
                          typeof ne.run == 'boolean' &&
                            ne.run &&
                            te === !1 &&
                            this.update();
                      },
                    },
                  ]) && g(M.prototype, F),
                  N && g(M, N),
                  x
                );
              })();
            function V(x) {
              return (
                (function (M) {
                  if (Array.isArray(M)) return _e(M);
                })(x) ||
                (function (M) {
                  if (typeof Symbol < 'u' && Symbol.iterator in Object(M))
                    return Array.from(M);
                })(x) ||
                Pe(x) ||
                (function () {
                  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
                })()
              );
            }
            function $(x) {
              return ($ =
                typeof Symbol == 'function' &&
                typeof Symbol.iterator == 'symbol'
                  ? function (M) {
                      return typeof M;
                    }
                  : function (M) {
                      return M &&
                        typeof Symbol == 'function' &&
                        M.constructor === Symbol &&
                        M !== Symbol.prototype
                        ? 'symbol'
                        : typeof M;
                    })(x);
            }
            function le() {
              return (le =
                Object.assign ||
                function (x) {
                  for (var M = 1; M < arguments.length; M++) {
                    var F = arguments[M];
                    for (var N in F)
                      Object.prototype.hasOwnProperty.call(F, N) &&
                        (x[N] = F[N]);
                  }
                  return x;
                }).apply(this, arguments);
            }
            function re(x, M) {
              var F = Object.keys(x);
              if (Object.getOwnPropertySymbols) {
                var N = Object.getOwnPropertySymbols(x);
                M &&
                  (N = N.filter(function (ne) {
                    return Object.getOwnPropertyDescriptor(x, ne).enumerable;
                  })),
                  F.push.apply(F, N);
              }
              return F;
            }
            function ve(x) {
              for (var M = 1; M < arguments.length; M++) {
                var F = arguments[M] != null ? arguments[M] : {};
                M % 2
                  ? re(Object(F), !0).forEach(function (N) {
                      zt(x, N, F[N]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      x,
                      Object.getOwnPropertyDescriptors(F)
                    )
                  : re(Object(F)).forEach(function (N) {
                      Object.defineProperty(
                        x,
                        N,
                        Object.getOwnPropertyDescriptor(F, N)
                      );
                    });
              }
              return x;
            }
            function ue(x, M) {
              return (
                (function (F) {
                  if (Array.isArray(F)) return F;
                })(x) ||
                (function (F, N) {
                  if (
                    !(typeof Symbol > 'u' || !(Symbol.iterator in Object(F)))
                  ) {
                    var ne = [],
                      te = !0,
                      B = !1,
                      me = void 0;
                    try {
                      for (
                        var ye, ce = F[Symbol.iterator]();
                        !(te = (ye = ce.next()).done) &&
                        (ne.push(ye.value), !N || ne.length !== N);
                        te = !0
                      );
                    } catch (Oe) {
                      (B = !0), (me = Oe);
                    } finally {
                      try {
                        te || ce.return == null || ce.return();
                      } finally {
                        if (B) throw me;
                      }
                    }
                    return ne;
                  }
                })(x, M) ||
                Pe(x, M) ||
                (function () {
                  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
                })()
              );
            }
            function Pe(x, M) {
              if (x) {
                if (typeof x == 'string') return _e(x, M);
                var F = Object.prototype.toString.call(x).slice(8, -1);
                return (
                  F === 'Object' && x.constructor && (F = x.constructor.name),
                  F === 'Map' || F === 'Set'
                    ? Array.from(x)
                    : F === 'Arguments' ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(F)
                    ? _e(x, M)
                    : void 0
                );
              }
            }
            function _e(x, M) {
              (M == null || M > x.length) && (M = x.length);
              for (var F = 0, N = new Array(M); F < M; F++) N[F] = x[F];
              return N;
            }
            function xt(x, M) {
              if (!(x instanceof M))
                throw new TypeError('Cannot call a class as a function');
            }
            function on(x, M) {
              for (var F = 0; F < M.length; F++) {
                var N = M[F];
                (N.enumerable = N.enumerable || !1),
                  (N.configurable = !0),
                  'value' in N && (N.writable = !0),
                  Object.defineProperty(x, N.key, N);
              }
            }
            function Ta(x, M) {
              return (Ta =
                Object.setPrototypeOf ||
                function (F, N) {
                  return (F.__proto__ = N), F;
                })(x, M);
            }
            function Wr(x) {
              var M = (function () {
                if (
                  typeof Reflect > 'u' ||
                  !Reflect.construct ||
                  Reflect.construct.sham
                )
                  return !1;
                if (typeof Proxy == 'function') return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function () {})
                    ),
                    !0
                  );
                } catch {
                  return !1;
                }
              })();
              return function () {
                var F,
                  N = mt(x);
                if (M) {
                  var ne = mt(this).constructor;
                  F = Reflect.construct(N, arguments, ne);
                } else F = N.apply(this, arguments);
                return Gr(this, F);
              };
            }
            function Gr(x, M) {
              return !M || ($(M) !== 'object' && typeof M != 'function')
                ? Zn(x)
                : M;
            }
            function Zn(x) {
              if (x === void 0)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return x;
            }
            function mt(x) {
              return (mt = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (M) {
                    return M.__proto__ || Object.getPrototypeOf(M);
                  })(x);
            }
            function zt(x, M, F) {
              return (
                M in x
                  ? Object.defineProperty(x, M, {
                      value: F,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (x[M] = F),
                x
              );
            }
            var Gs = s.a.createRef(),
              qr = (function (x) {
                (function (B, me) {
                  if (typeof me != 'function' && me !== null)
                    throw new TypeError(
                      'Super expression must either be null or a function'
                    );
                  (B.prototype = Object.create(me && me.prototype, {
                    constructor: { value: B, writable: !0, configurable: !0 },
                  })),
                    me && Ta(B, me);
                })(te, x);
                var M,
                  F,
                  N,
                  ne = Wr(te);
                function te(B) {
                  var me;
                  xt(this, te);
                  for (
                    var ye = arguments.length,
                      ce = new Array(ye > 1 ? ye - 1 : 0),
                      Oe = 1;
                    Oe < ye;
                    Oe++
                  )
                    ce[Oe - 1] = arguments[Oe];
                  return (
                    zt(
                      Zn((me = ne.call.apply(ne, [this, B].concat(ce)))),
                      'canvas',
                      s.a.createRef()
                    ),
                    zt(Zn(me), 'confetti', void 0),
                    (me.canvas = B.canvasRef || Gs),
                    me
                  );
                }
                return (
                  (M = te),
                  (F = [
                    {
                      key: 'componentDidMount',
                      value: function () {
                        if (this.canvas.current) {
                          var B = Yr(this.props)[0];
                          this.confetti = new S(this.canvas.current, B);
                        }
                      },
                    },
                    {
                      key: 'componentDidUpdate',
                      value: function () {
                        var B = Yr(this.props)[0];
                        this.confetti && (this.confetti.options = B);
                      },
                    },
                    {
                      key: 'componentWillUnmount',
                      value: function () {
                        this.confetti && this.confetti.stop(),
                          (this.confetti = void 0);
                      },
                    },
                    {
                      key: 'render',
                      value: function () {
                        var B = ue(Yr(this.props), 2),
                          me = B[0],
                          ye = B[1],
                          ce = ve(
                            {
                              zIndex: 2,
                              position: 'absolute',
                              pointerEvents: 'none',
                              top: 0,
                              left: 0,
                              bottom: 0,
                              right: 0,
                            },
                            ye.style
                          );
                        return s.a.createElement(
                          'canvas',
                          le(
                            {
                              width: me.width,
                              height: me.height,
                              ref: this.canvas,
                            },
                            ye,
                            { style: ce }
                          )
                        );
                      },
                    },
                  ]) && on(M.prototype, F),
                  N && on(M, N),
                  te
                );
              })(l.Component);
            function Yr(x) {
              var M = {},
                F = {},
                N = [].concat(V(Object.keys(E)), [
                  'confettiSource',
                  'drawShape',
                  'onConfettiComplete',
                ]),
                ne = ['canvasRef'];
              for (var te in x) {
                var B = x[te];
                N.includes(te)
                  ? (M[te] = B)
                  : ne.includes(te)
                  ? (ne[te] = B)
                  : (F[te] = B);
              }
              return [M, F, {}];
            }
            zt(qr, 'defaultProps', ve({}, E)),
              zt(qr, 'displayName', 'ReactConfetti');
            var Po = s.a.forwardRef(function (x, M) {
              return s.a.createElement(qr, le({ canvasRef: M }, x));
            });
            n.default = Po;
          },
        ]).default;
      });
    });
    be();
    Ee();
    ke();
    be();
    Ee();
    ke();
    be();
    Ee();
    ke();
    var S6 = __STORYBOOK_API__,
      {
        ActiveTabs: M6,
        Consumer: N6,
        ManagerContext: F6,
        Provider: A6,
        addons: Pn,
        combineParameters: O6,
        controlOrMetaKey: L6,
        controlOrMetaSymbol: _6,
        eventMatchesShortcut: T6,
        eventToShortcut: Z6,
        isMacLike: I6,
        isShortcutTaken: R6,
        keyToSymbol: B6,
        merge: P6,
        mockChannel: V6,
        optionOrAltSymbol: j6,
        shortcutMatchesShortcut: H6,
        shortcutToHumanString: D6,
        types: z6,
        useAddonState: $o,
        useArgTypes: U6,
        useArgs: $6,
        useChannel: Xr,
        useGlobalTypes: Wo,
        useGlobals: Go,
        useParameter: W6,
        useSharedState: G6,
        useStoryPrepared: q6,
        useStorybookApi: sn,
        useStorybookState: cn,
      } = __STORYBOOK_API__;
    be();
    Ee();
    ke();
    var X6 = __STORYBOOK_THEMING__,
      {
        CacheProvider: ef,
        ClassNames: tf,
        Global: nf,
        ThemeProvider: af,
        background: rf,
        color: Tt,
        convert: of,
        create: lf,
        createCache: sf,
        createGlobal: cf,
        createReset: df,
        css: se,
        darken: uf,
        ensure: mf,
        ignoreSsrWarning: pf,
        isPropValid: hf,
        jsx: ff,
        keyframes: Zt,
        lighten: gf,
        styled: w,
        themes: vf,
        typography: yf,
        useTheme: pt,
        withTheme: bf,
      } = __STORYBOOK_THEMING__;
    be();
    Ee();
    ke();
    var xf = __STORYBOOK_TYPES__,
      { Addon_TypesEnum: Ra } = __STORYBOOK_TYPES__;
    jn();
    jn();
    be();
    Ee();
    ke();
    var _f = __STORYBOOK_COMPONENTS__,
      {
        A: Tf,
        ActionBar: Zf,
        AddonPanel: If,
        Badge: ni,
        Bar: Rf,
        Blockquote: Bf,
        Button: ai,
        ClipboardCode: Pf,
        Code: qo,
        DL: Vf,
        Div: jf,
        DocumentWrapper: Hf,
        EmptyTabContent: Df,
        ErrorFormatter: zf,
        FlexBar: Uf,
        Form: $f,
        H1: Wf,
        H2: Gf,
        H3: qf,
        H4: Yf,
        H5: Qf,
        H6: Kf,
        HR: Jf,
        IconButton: Yo,
        IconButtonSkeleton: Xf,
        Icons: e8,
        Img: t8,
        LI: n8,
        Link: dn,
        ListItem: a8,
        Loader: ri,
        OL: r8,
        P: i8,
        Placeholder: o8,
        Pre: l8,
        ResetWrapper: s8,
        ScrollArea: c8,
        Separator: d8,
        Spaced: u8,
        Span: m8,
        StorybookIcon: p8,
        StorybookLogo: h8,
        Symbols: f8,
        SyntaxHighlighter: g8,
        TT: v8,
        TabBar: y8,
        TabButton: b8,
        TabWrapper: E8,
        Table: k8,
        Tabs: w8,
        TabsState: C8,
        TooltipLinkList: Qo,
        TooltipMessage: Ko,
        TooltipNote: Jo,
        UL: x8,
        WithTooltip: Ae,
        WithTooltipPure: S8,
        Zoom: M8,
        codeCommon: N8,
        components: F8,
        createCopyToClipboardFunction: A8,
        getStoryHref: O8,
        icons: L8,
        interleaveSeparators: _8,
        nameSpaceClassNames: T8,
        resetComponents: Z8,
        withReset: I8,
      } = __STORYBOOK_COMPONENTS__;
    be();
    Ee();
    ke();
    var Hn = __REACT_DOM__,
      {
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: j8,
        createPortal: Dn,
        createRoot: H8,
        findDOMNode: D8,
        flushSync: z8,
        hydrate: U8,
        hydrateRoot: $8,
        render: W8,
        unmountComponentAtNode: Xo,
        unstable_batchedUpdates: G8,
        unstable_renderSubtreeIntoContainer: el,
        version: q8,
      } = __REACT_DOM__;
    var P1 = nc(tl(), 1);
    be();
    Ee();
    ke();
    var Fc = 'array',
      Ac = 'bit',
      nl = 'bits',
      Oc = 'byte',
      al = 'bytes',
      un = '',
      Lc = 'exponent',
      _c = 'function',
      rl = 'iec',
      Tc = 'Invalid number',
      Zc = 'Invalid rounding method',
      oi = 'jedec',
      Ic = 'object',
      il = '.',
      Rc = 'round',
      Bc = 's',
      Pc = 'si',
      Vc = 'kbit',
      jc = 'kB',
      Hc = ' ',
      Dc = 'string',
      zc = '0',
      li = {
        symbol: {
          iec: {
            bits: [
              'bit',
              'Kibit',
              'Mibit',
              'Gibit',
              'Tibit',
              'Pibit',
              'Eibit',
              'Zibit',
              'Yibit',
            ],
            bytes: [
              'B',
              'KiB',
              'MiB',
              'GiB',
              'TiB',
              'PiB',
              'EiB',
              'ZiB',
              'YiB',
            ],
          },
          jedec: {
            bits: [
              'bit',
              'Kbit',
              'Mbit',
              'Gbit',
              'Tbit',
              'Pbit',
              'Ebit',
              'Zbit',
              'Ybit',
            ],
            bytes: ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
          },
        },
        fullform: {
          iec: [
            '',
            'kibi',
            'mebi',
            'gibi',
            'tebi',
            'pebi',
            'exbi',
            'zebi',
            'yobi',
          ],
          jedec: [
            '',
            'kilo',
            'mega',
            'giga',
            'tera',
            'peta',
            'exa',
            'zetta',
            'yotta',
          ],
        },
      };
    function si(
      e,
      {
        bits: t = !1,
        pad: n = !1,
        base: r = -1,
        round: i = 2,
        locale: o = un,
        localeOptions: l = {},
        separator: s = un,
        spacer: c = Hc,
        symbols: d = {},
        standard: u = un,
        output: m = Dc,
        fullform: p = !1,
        fullforms: v = [],
        exponent: h = -1,
        roundingMethod: b = Rc,
        precision: k = 0,
      } = {}
    ) {
      let y = h,
        g = Number(e),
        f = [],
        E = 0,
        S = un;
      u === Pc
        ? ((r = 10), (u = oi))
        : u === rl || u === oi
        ? (r = 2)
        : r === 2
        ? (u = rl)
        : ((r = 10), (u = oi));
      let V = r === 10 ? 1e3 : 1024,
        $ = p === !0,
        le = g < 0,
        re = Math[b];
      if (typeof e != 'bigint' && isNaN(e)) throw new TypeError(Tc);
      if (typeof re !== _c) throw new TypeError(Zc);
      if (
        (le && (g = -g),
        (y === -1 || isNaN(y)) &&
          ((y = Math.floor(Math.log(g) / Math.log(V))), y < 0 && (y = 0)),
        y > 8 && (k > 0 && (k += 8 - y), (y = 8)),
        m === Lc)
      )
        return y;
      if (g === 0) (f[0] = 0), (S = f[1] = li.symbol[u][t ? nl : al][y]);
      else {
        (E = g / (r === 2 ? Math.pow(2, y * 10) : Math.pow(1e3, y))),
          t && ((E = E * 8), E >= V && y < 8 && ((E = E / V), y++));
        let ve = Math.pow(10, y > 0 ? i : 0);
        (f[0] = re(E * ve) / ve),
          f[0] === V && y < 8 && h === -1 && ((f[0] = 1), y++),
          (S = f[1] =
            r === 10 && y === 1 ? (t ? Vc : jc) : li.symbol[u][t ? nl : al][y]);
      }
      if (
        (le && (f[0] = -f[0]),
        k > 0 && (f[0] = f[0].toPrecision(k)),
        (f[1] = d[f[1]] || f[1]),
        o === !0
          ? (f[0] = f[0].toLocaleString())
          : o.length > 0
          ? (f[0] = f[0].toLocaleString(o, l))
          : s.length > 0 && (f[0] = f[0].toString().replace(il, s)),
        n && Number.isInteger(f[0]) === !1 && i > 0)
      ) {
        let ve = s || il,
          ue = f[0].toString().split(ve),
          Pe = ue[1] || un,
          _e = Pe.length,
          xt = i - _e;
        f[0] = `${ue[0]}${ve}${Pe.padEnd(_e + xt, zc)}`;
      }
      return (
        $ &&
          (f[1] = v[y]
            ? v[y]
            : li.fullform[u][y] + (t ? Ac : Oc) + (f[0] === 1 ? un : Bc)),
        m === Fc
          ? f
          : m === Ic
          ? { value: f[0], symbol: f[1], exponent: y, unit: S }
          : f.join(c)
      );
    }
    be();
    Ee();
    ke();
    be();
    Ee();
    ke();
    function ci({ onlyFirst: e = !1 } = {}) {
      let t = [
        '[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
        '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))',
      ].join('|');
      return new RegExp(t, e ? void 0 : 'g');
    }
    var Uc = ci();
    function di(e) {
      if (typeof e != 'string')
        throw new TypeError(`Expected a \`string\`, got \`${typeof e}\``);
      return e.replace(Uc, '');
    }
    var $c = Object.create,
      V1 = Object.defineProperty,
      Wc = Object.getOwnPropertyDescriptor,
      Gc = Object.getOwnPropertyNames,
      qc = Object.getPrototypeOf,
      Yc = Object.prototype.hasOwnProperty,
      Qc = ((e) =>
        typeof Ut < 'u'
          ? Ut
          : typeof Proxy < 'u'
          ? new Proxy(e, { get: (t, n) => (typeof Ut < 'u' ? Ut : t)[n] })
          : e)(function (e) {
        if (typeof Ut < 'u') return Ut.apply(this, arguments);
        throw new Error('Dynamic require of "' + e + '" is not supported');
      }),
      Dt = (e, t) => () => (
        t || e((t = { exports: {} }).exports, t), t.exports
      ),
      Kc = (e, t, n, r) => {
        if ((t && typeof t == 'object') || typeof t == 'function')
          for (let i of Gc(t))
            !Yc.call(e, i) &&
              i !== n &&
              V1(e, i, {
                get: () => t[i],
                enumerable: !(r = Wc(t, i)) || r.enumerable,
              });
        return e;
      },
      lt = (e, t, n) => (
        (n = e != null ? $c(qc(e)) : {}),
        Kc(
          t || !e || !e.__esModule
            ? V1(n, 'default', { value: e, enumerable: !0 })
            : n,
          e
        )
      ),
      Or = Dt((e, t) => {
        (function (n, r) {
          typeof Qc == 'function' &&
          typeof e == 'object' &&
          typeof t == 'object'
            ? (t.exports = r())
            : typeof define == 'function' && define.amd
            ? define(function () {
                return r();
              })
            : (n.pluralize = r());
        })(e, function () {
          var n = [],
            r = [],
            i = {},
            o = {},
            l = {};
          function s(b) {
            return typeof b == 'string' ? new RegExp('^' + b + '$', 'i') : b;
          }
          function c(b, k) {
            return b === k
              ? k
              : b === b.toLowerCase()
              ? k.toLowerCase()
              : b === b.toUpperCase()
              ? k.toUpperCase()
              : b[0] === b[0].toUpperCase()
              ? k.charAt(0).toUpperCase() + k.substr(1).toLowerCase()
              : k.toLowerCase();
          }
          function d(b, k) {
            return b.replace(/\$(\d{1,2})/g, function (y, g) {
              return k[g] || '';
            });
          }
          function u(b, k) {
            return b.replace(k[0], function (y, g) {
              var f = d(k[1], arguments);
              return c(y === '' ? b[g - 1] : y, f);
            });
          }
          function m(b, k, y) {
            if (!b.length || i.hasOwnProperty(b)) return k;
            for (var g = y.length; g--; ) {
              var f = y[g];
              if (f[0].test(k)) return u(k, f);
            }
            return k;
          }
          function p(b, k, y) {
            return function (g) {
              var f = g.toLowerCase();
              return k.hasOwnProperty(f)
                ? c(g, f)
                : b.hasOwnProperty(f)
                ? c(g, b[f])
                : m(f, g, y);
            };
          }
          function v(b, k, y, g) {
            return function (f) {
              var E = f.toLowerCase();
              return k.hasOwnProperty(E)
                ? !0
                : b.hasOwnProperty(E)
                ? !1
                : m(E, E, y) === E;
            };
          }
          function h(b, k, y) {
            var g = k === 1 ? h.singular(b) : h.plural(b);
            return (y ? k + ' ' : '') + g;
          }
          return (
            (h.plural = p(l, o, n)),
            (h.isPlural = v(l, o, n)),
            (h.singular = p(o, l, r)),
            (h.isSingular = v(o, l, r)),
            (h.addPluralRule = function (b, k) {
              n.push([s(b), k]);
            }),
            (h.addSingularRule = function (b, k) {
              r.push([s(b), k]);
            }),
            (h.addUncountableRule = function (b) {
              if (typeof b == 'string') {
                i[b.toLowerCase()] = !0;
                return;
              }
              h.addPluralRule(b, '$0'), h.addSingularRule(b, '$0');
            }),
            (h.addIrregularRule = function (b, k) {
              (k = k.toLowerCase()),
                (b = b.toLowerCase()),
                (l[b] = k),
                (o[k] = b);
            }),
            [
              ['I', 'we'],
              ['me', 'us'],
              ['he', 'they'],
              ['she', 'they'],
              ['them', 'them'],
              ['myself', 'ourselves'],
              ['yourself', 'yourselves'],
              ['itself', 'themselves'],
              ['herself', 'themselves'],
              ['himself', 'themselves'],
              ['themself', 'themselves'],
              ['is', 'are'],
              ['was', 'were'],
              ['has', 'have'],
              ['this', 'these'],
              ['that', 'those'],
              ['echo', 'echoes'],
              ['dingo', 'dingoes'],
              ['volcano', 'volcanoes'],
              ['tornado', 'tornadoes'],
              ['torpedo', 'torpedoes'],
              ['genus', 'genera'],
              ['viscus', 'viscera'],
              ['stigma', 'stigmata'],
              ['stoma', 'stomata'],
              ['dogma', 'dogmata'],
              ['lemma', 'lemmata'],
              ['schema', 'schemata'],
              ['anathema', 'anathemata'],
              ['ox', 'oxen'],
              ['axe', 'axes'],
              ['die', 'dice'],
              ['yes', 'yeses'],
              ['foot', 'feet'],
              ['eave', 'eaves'],
              ['goose', 'geese'],
              ['tooth', 'teeth'],
              ['quiz', 'quizzes'],
              ['human', 'humans'],
              ['proof', 'proofs'],
              ['carve', 'carves'],
              ['valve', 'valves'],
              ['looey', 'looies'],
              ['thief', 'thieves'],
              ['groove', 'grooves'],
              ['pickaxe', 'pickaxes'],
              ['passerby', 'passersby'],
            ].forEach(function (b) {
              return h.addIrregularRule(b[0], b[1]);
            }),
            [
              [/s?$/i, 's'],
              [/[^\u0000-\u007F]$/i, '$0'],
              [/([^aeiou]ese)$/i, '$1'],
              [/(ax|test)is$/i, '$1es'],
              [/(alias|[^aou]us|t[lm]as|gas|ris)$/i, '$1es'],
              [/(e[mn]u)s?$/i, '$1s'],
              [/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i, '$1'],
              [
                /(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,
                '$1i',
              ],
              [/(alumn|alg|vertebr)(?:a|ae)$/i, '$1ae'],
              [/(seraph|cherub)(?:im)?$/i, '$1im'],
              [/(her|at|gr)o$/i, '$1oes'],
              [
                /(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,
                '$1a',
              ],
              [
                /(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,
                '$1a',
              ],
              [/sis$/i, 'ses'],
              [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, '$1$2ves'],
              [/([^aeiouy]|qu)y$/i, '$1ies'],
              [/([^ch][ieo][ln])ey$/i, '$1ies'],
              [/(x|ch|ss|sh|zz)$/i, '$1es'],
              [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, '$1ices'],
              [/\b((?:tit)?m|l)(?:ice|ouse)$/i, '$1ice'],
              [/(pe)(?:rson|ople)$/i, '$1ople'],
              [/(child)(?:ren)?$/i, '$1ren'],
              [/eaux$/i, '$0'],
              [/m[ae]n$/i, 'men'],
              ['thou', 'you'],
            ].forEach(function (b) {
              return h.addPluralRule(b[0], b[1]);
            }),
            [
              [/s$/i, ''],
              [/(ss)$/i, '$1'],
              [
                /(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,
                '$1fe',
              ],
              [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, '$1f'],
              [/ies$/i, 'y'],
              [
                /\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,
                '$1ie',
              ],
              [/\b(mon|smil)ies$/i, '$1ey'],
              [/\b((?:tit)?m|l)ice$/i, '$1ouse'],
              [/(seraph|cherub)im$/i, '$1'],
              [
                /(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,
                '$1',
              ],
              [
                /(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,
                '$1sis',
              ],
              [/(movie|twelve|abuse|e[mn]u)s$/i, '$1'],
              [/(test)(?:is|es)$/i, '$1is'],
              [
                /(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,
                '$1us',
              ],
              [
                /(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,
                '$1um',
              ],
              [
                /(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,
                '$1on',
              ],
              [/(alumn|alg|vertebr)ae$/i, '$1a'],
              [/(cod|mur|sil|vert|ind)ices$/i, '$1ex'],
              [/(matr|append)ices$/i, '$1ix'],
              [/(pe)(rson|ople)$/i, '$1rson'],
              [/(child)ren$/i, '$1'],
              [/(eau)x?$/i, '$1'],
              [/men$/i, 'man'],
            ].forEach(function (b) {
              return h.addSingularRule(b[0], b[1]);
            }),
            [
              'adulthood',
              'advice',
              'agenda',
              'aid',
              'aircraft',
              'alcohol',
              'ammo',
              'analytics',
              'anime',
              'athletics',
              'audio',
              'bison',
              'blood',
              'bream',
              'buffalo',
              'butter',
              'carp',
              'cash',
              'chassis',
              'chess',
              'clothing',
              'cod',
              'commerce',
              'cooperation',
              'corps',
              'debris',
              'diabetes',
              'digestion',
              'elk',
              'energy',
              'equipment',
              'excretion',
              'expertise',
              'firmware',
              'flounder',
              'fun',
              'gallows',
              'garbage',
              'graffiti',
              'hardware',
              'headquarters',
              'health',
              'herpes',
              'highjinks',
              'homework',
              'housework',
              'information',
              'jeans',
              'justice',
              'kudos',
              'labour',
              'literature',
              'machinery',
              'mackerel',
              'mail',
              'media',
              'mews',
              'moose',
              'music',
              'mud',
              'manga',
              'news',
              'only',
              'personnel',
              'pike',
              'plankton',
              'pliers',
              'police',
              'pollution',
              'premises',
              'rain',
              'research',
              'rice',
              'salmon',
              'scissors',
              'series',
              'sewage',
              'shambles',
              'shrimp',
              'software',
              'species',
              'staff',
              'swine',
              'tennis',
              'traffic',
              'transportation',
              'trout',
              'tuna',
              'wealth',
              'welfare',
              'whiting',
              'wildebeest',
              'wildlife',
              'you',
              /pok[eé]mon$/i,
              /[^aeiou]ese$/i,
              /deer$/i,
              /fish$/i,
              /measles$/i,
              /o[iu]s$/i,
              /pox$/i,
              /sheep$/i,
            ].forEach(h.addUncountableRule),
            h
          );
        });
      }),
      Jc = Dt((e, t) => {
        var n = new Error('Element already at target scroll position'),
          r = new Error('Scroll cancelled'),
          i = Math.min,
          o = Date.now;
        t.exports = { left: l('scrollLeft'), top: l('scrollTop') };
        function l(d) {
          return function (u, m, p, v) {
            (p = p || {}),
              typeof p == 'function' && ((v = p), (p = {})),
              typeof v != 'function' && (v = c);
            var h = o(),
              b = u[d],
              k = p.ease || s,
              y = isNaN(p.duration) ? 350 : +p.duration,
              g = !1;
            return b === m ? v(n, u[d]) : requestAnimationFrame(E), f;
            function f() {
              g = !0;
            }
            function E(S) {
              if (g) return v(r, u[d]);
              var V = o(),
                $ = i(1, (V - h) / y),
                le = k($);
              (u[d] = le * (m - b) + b),
                $ < 1
                  ? requestAnimationFrame(E)
                  : requestAnimationFrame(function () {
                      v(null, u[d]);
                    });
            }
          };
        }
        function s(d) {
          return 0.5 * (1 - Math.cos(Math.PI * d));
        }
        function c() {}
      }),
      Xc = Dt((e, t) => {
        (function (n, r) {
          typeof define == 'function' && define.amd
            ? define([], r)
            : typeof t == 'object' && t.exports
            ? (t.exports = r())
            : (n.Scrollparent = r());
        })(e, function () {
          function n(i) {
            var o = getComputedStyle(i, null).getPropertyValue('overflow');
            return o.indexOf('scroll') > -1 || o.indexOf('auto') > -1;
          }
          function r(i) {
            if (i instanceof HTMLElement || i instanceof SVGElement) {
              for (var o = i.parentNode; o.parentNode; ) {
                if (n(o)) return o;
                o = o.parentNode;
              }
              return document.scrollingElement || document.documentElement;
            }
          }
          return r;
        });
      }),
      io = Dt((e, t) => {
        var n = function (f) {
          return r(f) && !i(f);
        };
        function r(f) {
          return !!f && typeof f == 'object';
        }
        function i(f) {
          var E = Object.prototype.toString.call(f);
          return E === '[object RegExp]' || E === '[object Date]' || s(f);
        }
        var o = typeof Symbol == 'function' && Symbol.for,
          l = o ? Symbol.for('react.element') : 60103;
        function s(f) {
          return f.$$typeof === l;
        }
        function c(f) {
          return Array.isArray(f) ? [] : {};
        }
        function d(f, E) {
          return E.clone !== !1 && E.isMergeableObject(f) ? y(c(f), f, E) : f;
        }
        function u(f, E, S) {
          return f.concat(E).map(function (V) {
            return d(V, S);
          });
        }
        function m(f, E) {
          if (!E.customMerge) return y;
          var S = E.customMerge(f);
          return typeof S == 'function' ? S : y;
        }
        function p(f) {
          return Object.getOwnPropertySymbols
            ? Object.getOwnPropertySymbols(f).filter(function (E) {
                return Object.propertyIsEnumerable.call(f, E);
              })
            : [];
        }
        function v(f) {
          return Object.keys(f).concat(p(f));
        }
        function h(f, E) {
          try {
            return E in f;
          } catch {
            return !1;
          }
        }
        function b(f, E) {
          return (
            h(f, E) &&
            !(
              Object.hasOwnProperty.call(f, E) &&
              Object.propertyIsEnumerable.call(f, E)
            )
          );
        }
        function k(f, E, S) {
          var V = {};
          return (
            S.isMergeableObject(f) &&
              v(f).forEach(function ($) {
                V[$] = d(f[$], S);
              }),
            v(E).forEach(function ($) {
              b(f, $) ||
                (h(f, $) && S.isMergeableObject(E[$])
                  ? (V[$] = m($, S)(f[$], E[$], S))
                  : (V[$] = d(E[$], S)));
            }),
            V
          );
        }
        function y(f, E, S) {
          (S = S || {}),
            (S.arrayMerge = S.arrayMerge || u),
            (S.isMergeableObject = S.isMergeableObject || n),
            (S.cloneUnlessOtherwiseSpecified = d);
          var V = Array.isArray(E),
            $ = Array.isArray(f),
            le = V === $;
          return le ? (V ? S.arrayMerge(f, E, S) : k(f, E, S)) : d(E, S);
        }
        y.all = function (f, E) {
          if (!Array.isArray(f))
            throw new Error('first argument should be an array');
          return f.reduce(function (S, V) {
            return y(S, V, E);
          }, {});
        };
        var g = y;
        t.exports = g;
      }),
      e5 = Dt((e, t) => {
        var n = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
        t.exports = n;
      }),
      t5 = Dt((e, t) => {
        var n = e5();
        function r() {}
        function i() {}
        (i.resetWarningCache = r),
          (t.exports = function () {
            function o(c, d, u, m, p, v) {
              if (v !== n) {
                var h = new Error(
                  'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
                );
                throw ((h.name = 'Invariant Violation'), h);
              }
            }
            o.isRequired = o;
            function l() {
              return o;
            }
            var s = {
              array: o,
              bigint: o,
              bool: o,
              func: o,
              number: o,
              object: o,
              string: o,
              symbol: o,
              any: o,
              arrayOf: l,
              element: o,
              elementType: o,
              instanceOf: l,
              node: o,
              objectOf: l,
              oneOf: l,
              oneOfType: l,
              shape: l,
              exact: l,
              checkPropTypes: i,
              resetWarningCache: r,
            };
            return (s.PropTypes = s), s;
          });
      }),
      n5 = Dt((e, t) => {
        t.exports = t5()();
      }),
      a5 = Dt((e, t) => {
        var n = function (o) {
            return Object.prototype.hasOwnProperty.call(o, 'props');
          },
          r = function (o, l) {
            return o + i(l);
          },
          i = function (o) {
            return o === null || typeof o == 'boolean' || typeof o > 'u'
              ? ''
              : typeof o == 'number'
              ? o.toString()
              : typeof o == 'string'
              ? o
              : Array.isArray(o)
              ? o.reduce(r, '')
              : n(o) &&
                Object.prototype.hasOwnProperty.call(o.props, 'children')
              ? i(o.props.children)
              : '';
          };
        (i.default = i), (t.exports = i);
      }),
      {
        CHROMATIC_INDEX_URL: r5,
        CHROMATIC_BASE_URL: Lr = r5 || 'https://www.chromatic.com',
        CHROMATIC_API_URL: i5 = `${Lr}/api`,
      } = Ge,
      J = 'chromaui/addon-visual-tests',
      oa = `${J}/panel`,
      o5 = `${J}/sidebarTop`,
      l5 = `${J}/sidebarBottom`,
      Oi = `${J}/access-token/${Lr}`,
      oo = `${J}/configInfo`,
      ol = `${J}/configInfoDismissed`,
      s5 = `${J}/gitInfo`,
      j1 = `${J}/gitInfoError`,
      H1 = `${J}/projectInfo`,
      Li = `${J}/isOutdated`,
      D1 = `${J}/startBuild`,
      z1 = `${J}/stopBuild`,
      U1 = `${J}/localBuildProgress`,
      c5 = `${J}/selectedModeName`,
      d5 = `${J}/selectedBrowserId`,
      $1 = `${J}/removeAddon`,
      u5 = {
        autoAcceptChanges: !1,
        exitOnceUploaded: !1,
        exitZeroOnChanges: !0,
        forceRebuild: !0,
        fromCI: !1,
        isLocalBuild: !0,
        skip: !1,
        interactive: !1,
      },
      W1 = 'https://www.chromatic.com/docs/visual-tests-addon',
      Lt = (e, t) => {
        let n = Vn(e);
        if (n == null) throw new Error(`Missing context value for ${t}`);
        return n;
      },
      G1 = Qe(null),
      m5 = ({ children: e, value: t }) =>
        a.createElement(G1.Provider, { value: t }, e),
      q1 = () => Lt(G1, 'AuthState'),
      p5 = {
        user: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0ZM2.67 11.15c.7-1 2.6-1.81 3.2-1.9.22-.04.23-.66.23-.66s-.67-.66-.81-1.55c-.4 0-.63-.94-.24-1.27l-.02-.13c-.06-.6-.28-2.6 1.97-2.6s2.03 2 1.97 2.6l-.02.13c.4.33.15 1.27-.24 1.27-.14.89-.8 1.55-.8 1.55s0 .62.22.66c.6.09 2.5.9 3.2 1.9a6 6 0 1 0-8.66 0Z',
          })
        ),
        useralt: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M7.27 13.16a11.39 11.39 0 0 0 5.18-1.23v-.25c0-1.57-3.24-3-4.1-3.13-.27-.05-.28-.79-.28-.79s.8-.78.96-1.83c.47 0 .75-1.12.29-1.52.02-.41.6-3.25-2.32-3.25S4.65 4 4.67 4.41c-.46.4-.17 1.52.29 1.52.17 1.05.96 1.83.96 1.83s0 .74-.27.79c-.86.13-4.04 1.53-4.1 3.08a11.44 11.44 0 0 0 5.72 1.53Z',
          })
        ),
        useradd: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M1.18 11.9c-.4-.17-.8-.36-1.18-.58.06-1.44 3.02-2.74 3.82-2.87.25-.04.26-.73.26-.73s-.74-.73-.9-1.7c-.43 0-.7-1.05-.27-1.42l-.01-.14c-.07-.67-.31-2.88 2.18-2.88 2.48 0 2.24 2.2 2.17 2.88l-.01.14c.43.37.16 1.41-.27 1.41-.16.98-.9 1.71-.9 1.71s.01.69.26.73c.8.13 3.82 1.46 3.82 2.91v.24a10.63 10.63 0 0 1-8.97.3ZM11.5 2.16c.28 0 .5.22.5.5v1.5h1.5a.5.5 0 0 1 0 1H12v1.5a.5.5 0 0 1-1 0v-1.5H9.5a.5.5 0 1 1 0-1H11v-1.5c0-.28.22-.5.5-.5Z',
          })
        ),
        users: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M9.21 11.62A10.59 10.59 0 0 1 0 11.07c.06-1.35 2.93-2.58 3.7-2.7.25-.03.26-.68.26-.68s-.72-.69-.87-1.6c-.42 0-.68-.99-.26-1.33 0-.03 0-.08-.02-.14-.07-.63-.3-2.71 2.12-2.71 2.41 0 2.18 2.08 2.11 2.71l-.01.14c.42.34.16 1.32-.26 1.32-.16.92-.87 1.6-.87 1.6s0 .66.25.7c.78.11 3.7 1.36 3.7 2.73v.22l-.64.3Z',
          }),
          a.createElement('path', {
            d: 'M8.81 8.42a9.64 9.64 0 0 0-.74-.4 5.2 5.2 0 0 1 1.7-.76c.17-.02.17-.47.17-.47s-.49-.47-.6-1.1c-.28 0-.46-.68-.17-.91l-.01-.1c-.05-.43-.2-1.86 1.45-1.86 1.66 0 1.5 1.43 1.45 1.86v.1c.28.23.1.9-.18.9-.11.64-.6 1.11-.6 1.11s0 .45.17.47c.54.08 2.55.94 2.55 1.89v.62a10.6 10.6 0 0 1-3.3.56 2.97 2.97 0 0 0-.58-.88c-.37-.41-.85-.76-1.31-1.03Z',
          })
        ),
        profile: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M9.1 7.35a5.06 5.06 0 0 1-4.52-.28C4.6 6.4 6.02 5.77 6.4 5.7c.12-.02.12-.35.12-.35s-.35-.34-.43-.81c-.2 0-.33-.5-.12-.67l-.01-.07C5.93 3.48 5.81 2.42 7 2.42S8.07 3.48 8.04 3.8v.07c.2.17.07.67-.13.67-.08.47-.43.81-.43.81s0 .33.12.35c.38.06 1.82.7 1.82 1.4v.1c-.1.06-.2.1-.31.15Zm-5.35 3.9c0-.14.11-.25.25-.25h6a.25.25 0 1 1 0 .5H4a.25.25 0 0 1-.25-.25ZM4 9a.25.25 0 0 0 0 .5h6a.25.25 0 1 0 0-.5H4Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M1 .5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v13a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V.5ZM2 13V1h10v12H2Z',
          })
        ),
        facehappy: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M3.97 8.75a.5.5 0 0 0-.87.5 4.5 4.5 0 0 0 7.8 0 .5.5 0 1 0-.87-.5 3.5 3.5 0 0 1-6.06 0ZM5.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z',
          })
        ),
        faceneutral: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M4.5 9a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM5.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z',
          })
        ),
        facesad: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M3.97 10.25a.5.5 0 0 1-.87-.5 4.5 4.5 0 0 1 7.8 0 .5.5 0 1 1-.87.5 3.5 3.5 0 0 0-6.06 0ZM5.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z',
          })
        ),
        accessibility: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M3.53 4.84a.5.5 0 0 1 .63-.31l2.05.68a2.5 2.5 0 0 0 1.58 0l2.05-.68a.5.5 0 0 1 .32.94L7.7 6.3a.3.3 0 0 0-.21.29v.24c0 .7.16 1.39.48 2.01l.97 1.95a.5.5 0 1 1-.9.44L7 9.12l-1.05 2.1a.5.5 0 1 1-.9-.44l.97-1.95a4.5 4.5 0 0 0 .48-2.01v-.24a.3.3 0 0 0-.2-.29l-2.46-.82a.5.5 0 0 1-.31-.63Z',
          }),
          a.createElement('path', { d: 'M7 4.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z' }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z',
          })
        ),
        accessibilityalt: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14ZM8 3.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM3.53 4.84a.5.5 0 0 1 .63-.31l2.05.68a2.5 2.5 0 0 0 1.58 0l2.05-.68a.5.5 0 0 1 .32.94L7.7 6.3a.3.3 0 0 0-.21.29v.24c0 .7.16 1.39.48 2.01l.97 1.95a.5.5 0 1 1-.9.44L7 9.12l-1.05 2.1a.5.5 0 1 1-.9-.44l.97-1.95a4.5 4.5 0 0 0 .48-2.01v-.24a.3.3 0 0 0-.2-.29l-2.46-.82a.5.5 0 0 1-.31-.63Z',
          })
        ),
        arrowup: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'm7.35 2.9 5.5 5.5a.5.5 0 0 1-.7.7L7 3.96 1.85 9.1a.5.5 0 1 1-.7-.7l5.5-5.5c.2-.2.5-.2.7 0Z',
          })
        ),
        arrowdown: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'm1.15 5.6 5.5 5.5c.2.2.5.2.7 0l5.5-5.5a.5.5 0 0 0-.7-.7L7 10.04 1.85 4.9a.5.5 0 1 0-.7.7Z',
          })
        ),
        arrowleft: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M2.76 7.1c.02.09.06.18.14.25l5.5 5.5a.5.5 0 0 0 .7-.7L3.96 7 9.1 1.85a.5.5 0 1 0-.7-.7l-5.5 5.5a.5.5 0 0 0-.14.45Z',
          })
        ),
        arrowright: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'm11.1 7.35-5.5 5.5a.5.5 0 0 1-.7-.7L10.04 7 4.9 1.85a.5.5 0 1 1 .7-.7l5.5 5.5c.2.2.2.5 0 .7Z',
          })
        ),
        arrowupalt: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M11.85 4.65 7.35.15a.5.5 0 0 0-.7 0l-4.5 4.5a.5.5 0 1 0 .7.7L6.5 1.71V13.5a.5.5 0 0 0 1 0V1.7l3.65 3.65a.5.5 0 0 0 .7-.7Z',
          })
        ),
        arrowdownalt: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M7.5.5a.5.5 0 0 0-1 0v11.8L2.85 8.64a.5.5 0 1 0-.7.7l4.5 4.5A.5.5 0 0 0 7 14a.5.5 0 0 0 .35-.15l4.5-4.5a.5.5 0 0 0-.7-.7L7.5 12.29V.5Z',
          })
        ),
        arrowleftalt: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M5.35 2.15c.2.2.2.5 0 .7L1.71 6.5H13.5a.5.5 0 0 1 0 1H1.7l3.65 3.65a.5.5 0 0 1-.7.7l-4.5-4.5a.5.5 0 0 1 0-.7l4.5-4.5c.2-.2.5-.2.7 0Z',
          })
        ),
        arrowrightalt: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M8.65 2.15c.2-.2.5-.2.7 0l4.5 4.5c.2.2.2.5 0 .7l-4.5 4.5a.5.5 0 0 1-.7-.7l3.64-3.65H.5a.5.5 0 0 1 0-1h11.8L8.64 2.85a.5.5 0 0 1 0-.7Z',
          })
        ),
        expandalt: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'm7.35.15 4 4a.5.5 0 0 1-.7.7L7 1.21 3.35 4.85a.5.5 0 1 1-.7-.7l4-4c.2-.2.5-.2.7 0ZM11.35 9.15c.2.2.2.5 0 .7l-4 4a.5.5 0 0 1-.7 0l-4-4a.5.5 0 1 1 .7-.7L7 12.79l3.65-3.64c.2-.2.5-.2.7 0Z',
          })
        ),
        collapse: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M3.354.146a.5.5 0 1 0-.708.708l4 4a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0-.708-.708L7 3.793 3.354.146Zm3.292 9a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1-.708.708L7 10.207l-3.646 3.647a.5.5 0 0 1-.708-.708l4-4Z',
          })
        ),
        expand: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M1.5 1h2a.5.5 0 0 1 0 1h-.8l3.15 3.15a.5.5 0 1 1-.7.7L2 2.71v.79a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5ZM10 1.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2a.5.5 0 0 1-1 0v-.8L8.85 5.86a.5.5 0 1 1-.7-.7L11.29 2h-.79a.5.5 0 0 1-.5-.5ZM12.5 10c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h.8L8.14 8.85a.5.5 0 1 1 .7-.7L12 11.29v-.79c0-.28.22-.5.5-.5ZM2 11.3v-.8a.5.5 0 0 0-1 0v2c0 .28.22.5.5.5h2a.5.5 0 0 0 0-1h-.8l3.15-3.15a.5.5 0 1 0-.7-.7L2 11.29Z',
          })
        ),
        unfold: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'm6.65.15-1.5 1.5a.5.5 0 1 0 .7.7l.65-.64V5a.5.5 0 0 0 1 0V1.7l.65.65a.5.5 0 1 0 .7-.7L7.35.15a.5.5 0 0 0-.7 0Z',
          }),
          a.createElement('path', {
            d: 'M1.3 4.04a.5.5 0 0 0-.16.82L3.3 7 1.15 9.15a.5.5 0 0 0 .35.85h3a.5.5 0 0 0 0-1H2.7l1.5-1.5h5.6l2.35 2.35a.5.5 0 0 0 .7-.7L10.71 7l2.14-2.15.11-.54-.1.54A.5.5 0 0 0 13 4.5a.5.5 0 0 0-.14-.35.5.5 0 0 0-.36-.15h-3a.5.5 0 0 0 0 1h1.8L9.8 6.5H4.2L2.7 5h1.8a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.2.04Z',
          }),
          a.createElement('path', {
            d: 'M7 8.5c.28 0 .5.22.5.5v3.3l.65-.65a.5.5 0 0 1 .7.7l-1.5 1.5a.5.5 0 0 1-.7 0l-1.5-1.5a.5.5 0 0 1 .7-.7l.65.64V9c0-.28.22-.5.5-.5ZM9 9.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z',
          })
        ),
        transfer: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M10.65 2.65c.2-.2.5-.2.7 0l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 0 1-.7-.7l.64-.65H1.5a.5.5 0 0 1 0-1h9.8l-.65-.65a.5.5 0 0 1 0-.7ZM3.35 8.35 2.71 9h9.79a.5.5 0 0 1 0 1H2.7l.65.65a.5.5 0 0 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5a.5.5 0 1 1 .7.7Z',
          })
        ),
        redirect: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M1.5 1c.28 0 .5.22.5.5V10a2 2 0 0 0 4 0V4a3 3 0 0 1 6 0v7.8l1.15-1.15a.5.5 0 0 1 .7.7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 .7-.7L11 11.79V4a2 2 0 1 0-4 0v6a3 3 0 0 1-6 0V1.5c0-.28.22-.5.5-.5Z',
          })
        ),
        undo: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M1.15 3.85a.5.5 0 0 1 0-.7l2-2a.5.5 0 1 1 .7.7L2.71 3H9a4 4 0 0 1 0 8H3a.5.5 0 0 1 0-1h6a3 3 0 1 0 0-6H2.7l1.15 1.15a.5.5 0 1 1-.7.7l-2-2Z',
          })
        ),
        reply: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M4.35 2.15c.2.2.2.5 0 .7L1.71 5.5H9.5A4.5 4.5 0 0 1 14 10v1.5a.5.5 0 0 1-1 0V10a3.5 3.5 0 0 0-3.5-3.5H1.7l2.65 2.65a.5.5 0 1 1-.7.7l-3.5-3.5a.5.5 0 0 1 0-.7l3.5-3.5c.2-.2.5-.2.7 0Z',
          })
        ),
        sync: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M5.5 1A.5.5 0 0 0 5 .5H2a.5.5 0 0 0 0 1h1.53a6.5 6.5 0 0 0 2.39 11.91.5.5 0 1 0 .16-.99A5.5 5.5 0 0 1 4.5 2.1V4a.5.5 0 0 0 1 0V1ZM7.5 1a.5.5 0 0 1 .58-.41 6.5 6.5 0 0 1 2.39 11.91H12a.5.5 0 0 1 0 1H9a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v1.9A5.5 5.5 0 0 0 7.92 1.58.5.5 0 0 1 7.5 1Z',
          })
        ),
        upload: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M8.65 5.85 7.5 4.71v5.79a.5.5 0 0 1-1 0V4.7L5.35 5.86a.5.5 0 1 1-.7-.7l2-2c.2-.2.5-.2.7 0l2 2a.5.5 0 1 1-.7.7Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z',
          })
        ),
        download: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M5.35 8.15 6.5 9.29V3.5a.5.5 0 0 1 1 0v5.8l1.15-1.15a.5.5 0 1 1 .7.7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 1 1 .7-.7Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7Zm1 0a6 6 0 1 1 12 0A6 6 0 0 1 1 7Z',
          })
        ),
        back: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M5.85 5.35 4.71 6.5h5.79a.5.5 0 0 1 0 1H4.7l1.15 1.15a.5.5 0 1 1-.7.7l-2-2a.5.5 0 0 1 0-.7l2-2a.5.5 0 1 1 .7.7Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M7 0a7 7 0 1 1 0 14A7 7 0 0 1 7 0Zm0 1a6 6 0 1 1 0 12A6 6 0 0 1 7 1Z',
          })
        ),
        proceed: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M3.5 6.5h5.8L8.14 5.35a.5.5 0 1 1 .7-.7l2 2c.2.2.2.5 0 .7l-2 2a.5.5 0 1 1-.7-.7L9.29 7.5H3.5a.5.5 0 0 1 0-1Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M7 14A7 7 0 1 1 7 0a7 7 0 0 1 0 14Zm0-1A6 6 0 1 1 7 1a6 6 0 0 1 0 12Z',
          })
        ),
        refresh: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M7.1.5H7a6.5 6.5 0 1 0 6.41 7.58.5.5 0 1 0-.99-.16A5.47 5.47 0 0 1 7 12.5a5.5 5.5 0 0 1 0-11 5.5 5.5 0 0 1 4.9 3H10a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5V2a.5.5 0 0 0-1 0v1.53A6.5 6.5 0 0 0 7.1.5Z',
          })
        ),
        globe: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M14 7A7 7 0 1 0 0 7a7 7 0 0 0 14 0Zm-6.53 5.74c-.24.23-.4.26-.47.26-.08 0-.23-.03-.47-.26-.23-.24-.5-.62-.73-1.18A11.57 11.57 0 0 1 5 7.5h4a11.57 11.57 0 0 1-.8 4.06c-.24.56-.5.94-.73 1.18ZM8.99 6.5H5.01c.05-1.62.35-3.04.79-4.06.24-.56.5-.94.73-1.18.24-.23.4-.26.47-.26.08 0 .23.03.47.26.23.24.5.62.73 1.18.44 1.02.74 2.44.8 4.06Zm1 1c-.06 2.18-.56 4.08-1.28 5.25a6 6 0 0 0 4.27-5.25H9.99Zm2.99-1H9.99c-.06-2.18-.56-4.08-1.28-5.25a6 6 0 0 1 4.27 5.25ZM4 6.5c.06-2.18.56-4.08 1.28-5.25A6 6 0 0 0 1.02 6.5h2.99Zm-2.99 1a6 6 0 0 0 4.27 5.25c-.72-1.17-1.22-3.07-1.28-5.25H1.02Z',
          })
        ),
        compass: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M10.09 3.4 5.95 5.8a.37.37 0 0 0-.11.09.38.38 0 0 0-.04.05l-2.4 4.15a.37.37 0 0 0 0 .38c.1.18.33.24.5.14l4.15-2.4a.37.37 0 0 0 .15-.15l2.4-4.15a.37.37 0 0 0-.03-.44.37.37 0 0 0-.48-.07ZM4.75 9.25 7.6 7.6 6.4 6.4 4.75 9.25Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z',
          })
        ),
        location: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7Zm6.5 3.5v2.48A6 6 0 0 1 1.02 7.5H3.5a.5.5 0 0 0 0-1H1.02A6 6 0 0 1 6.5 1.02V3.5a.5.5 0 0 0 1 0V1.02a6 6 0 0 1 5.48 5.48H10.5a.5.5 0 0 0 0 1h2.48a6 6 0 0 1-5.48 5.48V10.5a.5.5 0 0 0-1 0Z',
          })
        ),
        pin: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M9 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M12 5A5 5 0 0 0 2 5c0 2.63 2.27 6.15 4.65 8.64.2.2.5.2.7 0C9.73 11.15 12 7.64 12 5ZM7 1a4 4 0 0 1 4 4c0 1.06-.47 2.42-1.3 3.88A21.23 21.23 0 0 1 7 12.55c-1-1.1-1.97-2.39-2.7-3.67A8.46 8.46 0 0 1 3 5a4 4 0 0 1 4-4Z',
          })
        ),
        time: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M7 2c.28 0 .5.22.5.5v4H10a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5V2.5c0-.28.22-.5.5-.5Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z',
          })
        ),
        dashboard: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M9.8 4.1a.5.5 0 0 1 .1.7L7.92 7.58A1 1 0 1 1 7.1 7l2-2.8a.5.5 0 0 1 .7-.12Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M2.07 12.97a7 7 0 1 1 9.86 0 12.96 12.96 0 0 0-9.86 0Zm9.58-1.18a6 6 0 1 0-9.3 0 13.98 13.98 0 0 1 9.3 0Z',
          })
        ),
        timer: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M7.5 4.5a.5.5 0 0 0-1 0v2.63a1 1 0 1 0 1 0V4.5Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M5.5.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-.5v1.02c1.28.1 2.45.61 3.37 1.4l.78-.77a.5.5 0 0 1 .7.7l-.77.78a6 6 0 1 1-5.08-2.1V1H6a.5.5 0 0 1-.5-.5ZM7 3a5 5 0 1 0 0 10A5 5 0 0 0 7 3Z',
          })
        ),
        home: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'm7.35 1.15 5.5 5.5a.5.5 0 0 1-.7.7L12 7.21v5.29a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V9H6v3.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V7.2l-.15.15a.5.5 0 1 1-.7-.7l1-1 4.5-4.5c.2-.2.5-.2.7 0ZM3 6.2V12h2V8.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5V12h2V6.2l-4-4-4 4Z',
          })
        ),
        admin: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M1.21 4.1a.5.5 0 0 1 .06-.04l5.48-3a.5.5 0 0 1 .5 0l5.48 3a.5.5 0 0 1 .27.39.5.5 0 0 1-.51.55H1.51a.5.5 0 0 1-.3-.9ZM3.46 4h7.08L7 2.07 3.46 4Z',
          }),
          a.createElement('path', {
            d: 'M4 6a.5.5 0 1 0-1 0v5a.5.5 0 0 0 1 0V6ZM11 6a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V6ZM5.75 5.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0V6c0-.28.22-.5.5-.5ZM8.75 6a.5.5 0 1 0-1 0v5a.5.5 0 0 0 1 0V6ZM1.5 12.5c0-.27.22-.5.5-.5h10a.5.5 0 0 1 0 1H2a.5.5 0 0 1-.5-.5Z',
          })
        ),
        info: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M7 5.5c.28 0 .5.22.5.5v4a.5.5 0 0 1-1 0V6c0-.28.22-.5.5-.5ZM7 4.5A.75.75 0 1 0 7 3a.75.75 0 0 0 0 1.5Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z',
          })
        ),
        question: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M5.25 5.25A1.75 1.75 0 1 1 7 7a.5.5 0 0 0-.5.5V9a.5.5 0 0 0 1 0V7.95a2.75 2.75 0 1 0-3.25-2.7.5.5 0 0 0 1 0ZM7 11.5A.75.75 0 1 0 7 10a.75.75 0 0 0 0 1.5Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z',
          })
        ),
        support: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-3.52 4.9a5.97 5.97 0 0 1-6.96 0l1.45-1.45a3.98 3.98 0 0 0 4.06 0l1.45 1.44Zm-.03-2.87 1.44 1.45a5.97 5.97 0 0 0 0-6.96l-1.44 1.45a3.98 3.98 0 0 1 0 4.06ZM9.03 3.55l1.45-1.44a5.97 5.97 0 0 0-6.96 0l1.45 1.44a3.98 3.98 0 0 1 4.06 0ZM3.55 4.97 2.11 3.52a5.97 5.97 0 0 0 0 6.96l1.44-1.45a3.98 3.98 0 0 1 0-4.06ZM10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
          })
        ),
        alert: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M7 4.5c.28 0 .5.22.5.5v3.5a.5.5 0 0 1-1 0V5c0-.28.22-.5.5-.5ZM7.75 10.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M7.2 1.04a.5.5 0 0 1 .24.21l6.49 11a.5.5 0 0 1-.44.75H.51a.5.5 0 0 1-.5-.45.5.5 0 0 1 .06-.31l6.5-10.99a.5.5 0 0 1 .64-.2ZM7 2.48 1.38 12h11.24L7 2.48Z',
          })
        ),
        email: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M0 2.5c0-.27.22-.5.5-.5h13c.28 0 .5.23.5.5v9a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-9Zm1 1.02V11h12V3.52L7.31 7.89a.5.5 0 0 1-.52.07.5.5 0 0 1-.1-.07L1 3.52ZM12.03 3H1.97L7 6.87 12.03 3Z',
          })
        ),
        phone: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'm7.76 8.13-.05.05a.2.2 0 0 1-.28.03A6.76 6.76 0 0 1 5.8 6.56a.21.21 0 0 1 .04-.27l.05-.05c.23-.2.54-.47.71-.96.17-.47-.02-1.04-.66-1.94-.26-.38-.72-.96-1.22-1.46-.68-.69-1.2-1-1.65-1a.98.98 0 0 0-.51.13A3.23 3.23 0 0 0 .9 3.42c-.13 1.1.26 2.37 1.17 3.78a16.68 16.68 0 0 0 4.55 4.6 6.57 6.57 0 0 0 3.53 1.32A3.2 3.2 0 0 0 13 11.46c.14-.24.24-.64-.07-1.18a7.8 7.8 0 0 0-1.73-1.8c-.64-.5-1.52-1.12-2.13-1.12a.97.97 0 0 0-.34.06c-.47.17-.74.46-.95.69l-.02.02Zm4.32 2.68a6.8 6.8 0 0 0-1.48-1.54h-.02c-.3-.25-.64-.49-.95-.67a2.7 2.7 0 0 0-.56-.24h-.01c-.23.09-.34.21-.56.45l-.02.02-.04.04a1.2 1.2 0 0 1-1.6.15 7.76 7.76 0 0 1-1.86-1.89l-.01-.01-.02-.02a1.21 1.21 0 0 1 .2-1.53l.06-.06.02-.02c.22-.2.35-.31.43-.53v-.02c0-.02 0-.06-.03-.14a3.7 3.7 0 0 0-.5-.88h-.01V3.9c-.23-.33-.65-.87-1.1-1.32H4c-.31-.32-.55-.5-.72-.6a.6.6 0 0 0-.22-.1h-.03a2.23 2.23 0 0 0-1.15 1.66c-.09.78.18 1.8 1.02 3.1a15.68 15.68 0 0 0 4.27 4.33l.02.01.02.02a5.57 5.57 0 0 0 2.97 1.11 2.2 2.2 0 0 0 1.93-1.14h.01v-.05a.57.57 0 0 0-.05-.12Z',
          })
        ),
        link: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M11.84 2.16a2.25 2.25 0 0 0-3.18 0l-2.5 2.5c-.88.88-.88 2.3 0 3.18a.5.5 0 0 1-.7.7 3.25 3.25 0 0 1 0-4.59l2.5-2.5a3.25 3.25 0 0 1 4.59 4.6L10.48 8.1c.04-.44.01-.89-.09-1.32l1.45-1.45c.88-.88.88-2.3 0-3.18Z',
          }),
          a.createElement('path', {
            d: 'M3.6 7.2c-.1-.42-.12-.87-.08-1.31L1.45 7.95a3.25 3.25 0 1 0 4.6 4.6l2.5-2.5a3.25 3.25 0 0 0 0-4.6.5.5 0 0 0-.7.7c.87.89.87 2.31 0 3.2l-2.5 2.5a2.25 2.25 0 1 1-3.2-3.2l1.46-1.44Z',
          })
        ),
        unlink: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'm1.45 7.95 1.3-1.3.71.7-1.3 1.3a2.25 2.25 0 1 0 3.18 3.2l1.3-1.31.71.7-1.3 1.3a3.25 3.25 0 0 1-4.6-4.59ZM12.55 6.05l-1.3 1.3-.71-.7 1.3-1.3a2.25 2.25 0 1 0-3.18-3.2l-1.3 1.31-.71-.7 1.3-1.3a3.25 3.25 0 0 1 4.6 4.59ZM1.85 1.15a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11Z',
          })
        ),
        bell: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M8 1.11a1 1 0 1 0-1.99 0A4.5 4.5 0 0 0 2.5 5.5v3.88l-.94 1.89a.5.5 0 0 0-.06.3.5.5 0 0 0 .51.43h3.58a1.5 1.5 0 1 0 2.82 0H12a.5.5 0 0 0 .45-.73l-.94-1.89V5.5A4.5 4.5 0 0 0 8 1.11ZM2.8 11h8.4l-.5-1H3.3l-.5 1Zm7.7-2V5.5a3.5 3.5 0 1 0-7 0V9h7Zm-4 3.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Z',
          })
        ),
        rss: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M1.5.5c0-.28.22-.5.5-.5a12 12 0 0 1 12 12 .5.5 0 0 1-1 0A11 11 0 0 0 2 1a.5.5 0 0 1-.5-.5Z',
          }),
          a.createElement('path', {
            d: 'M1.5 4.5c0-.28.22-.5.5-.5a8 8 0 0 1 8 8 .5.5 0 0 1-1 0 7 7 0 0 0-7-7 .5.5 0 0 1-.5-.5Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M5 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-1 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z',
          })
        ),
        sharealt: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M2 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7.5a.5.5 0 0 0-1 0V12H2V2h4.5a.5.5 0 0 0 0-1H2Z',
          }),
          a.createElement('path', {
            d: 'M7.35 7.36 12 2.7v1.8a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 1 0 0 1h1.8L6.64 6.64a.5.5 0 1 0 .7.7Z',
          })
        ),
        share: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M6.65.15c.2-.2.5-.2.7 0l2 2a.5.5 0 1 1-.7.7L7.5 1.72v6.8a.5.5 0 0 1-1 0V1.7L5.35 2.86a.5.5 0 1 1-.7-.71l2-2Z',
          }),
          a.createElement('path', {
            d: 'M2 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H9.5a.5.5 0 1 0 0 1H12v7H2V5h2.5a.5.5 0 0 0 0-1H2Z',
          })
        ),
        circlehollow: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M7 13A6 6 0 1 0 7 1a6 6 0 0 0 0 12Zm0 1A7 7 0 1 0 7 0a7 7 0 0 0 0 14Z',
          })
        ),
        circle: a.createElement('path', {
          d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Z',
        }),
        bookmarkhollow: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M3.5 0h7c.28 0 .5.22.5.5v13a.5.5 0 0 1-.45.5.46.46 0 0 1-.38-.12L7 11.16l-3.17 2.72a.46.46 0 0 1-.38.12.5.5 0 0 1-.45-.5V.5c0-.28.22-.5.5-.5ZM4 12.41l2.66-2.28a.45.45 0 0 1 .38-.13c.1.01.2.05.29.12l2.67 2.3V1H4v11.41Z',
          })
        ),
        bookmark: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M3.5 0h7c.28 0 .5.22.5.5v13a.5.5 0 0 1-.45.5.46.46 0 0 1-.38-.12L7 11.16l-3.17 2.72a.46.46 0 0 1-.38.12.5.5 0 0 1-.45-.5V.5c0-.28.22-.5.5-.5Z',
          })
        ),
        diamond: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M8.41 1.59a2 2 0 0 0-2.82 0l-4 4a2 2 0 0 0 0 2.82l4 4a2 2 0 0 0 2.82 0l4-4a2 2 0 0 0 0-2.82l-4-4Zm.71-.71a3 3 0 0 0-4.24 0l-4 4a3 3 0 0 0 0 4.24l4 4a3 3 0 0 0 4.24 0l4-4a3 3 0 0 0 0-4.24l-4-4Z',
          })
        ),
        hearthollow: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M12.81 1.85 13 2a2.97 2.97 0 0 1 .75 1.17 4.39 4.39 0 0 1 .12 2.51 6.26 6.26 0 0 1-1.65 2.55l-4.78 4.6A.59.59 0 0 1 7 13a.67.67 0 0 1-.44-.17L1.78 8.22a7.84 7.84 0 0 1-1.25-1.6C.37 6.31.24 6 .14 5.67a4.32 4.32 0 0 1 .12-2.51 3.2 3.2 0 0 1 1.95-1.9c.47-.18 1-.27 1.57-.27.3 0 .61.04.91.14.3.09.59.21.86.36s.52.33.77.52c.24.19.47.38.68.58a7.56 7.56 0 0 1 1.46-1.1c.27-.15.55-.27.84-.36.3-.1.6-.14.9-.14.59 0 1.12.09 1.59.26.39.15.73.34 1.02.59ZM1.2 3.53A2.2 2.2 0 0 1 2.57 2.2M1.2 3.53c-.13.33-.2.72-.2 1.18 0 .22.03.45.1.68a3.97 3.97 0 0 0 .79 1.46c.19.23.38.45.59.65l4.51 4.36 4.52-4.35c.2-.2.4-.4.59-.65.18-.23.34-.47.49-.73.13-.23.23-.48.3-.73.08-.23.11-.46.11-.7 0-.45-.07-.84-.2-1.18-.12-.33-.3-.6-.51-.8v-.01c-.22-.2-.5-.38-.85-.51-.34-.13-.75-.2-1.24-.2-.2 0-.4.03-.6.09a4.95 4.95 0 0 0-1.9 1.22l-.68.67-.7-.65a9.97 9.97 0 0 0-.62-.53c-.2-.16-.42-.3-.63-.42h-.01c-.21-.12-.43-.22-.66-.29C4.2 2.03 4 2 3.77 2c-.48 0-.88.07-1.21.2',
          })
        ),
        heart: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M12.81 1.85 13 2a2.97 2.97 0 0 1 .75 1.17 4.39 4.39 0 0 1 .12 2.51 6.26 6.26 0 0 1-1.65 2.55l-4.78 4.6A.59.59 0 0 1 7 13a.67.67 0 0 1-.44-.17L1.78 8.22a7.84 7.84 0 0 1-1.25-1.6C.37 6.31.24 6 .14 5.67a4.32 4.32 0 0 1 .12-2.51 3.2 3.2 0 0 1 1.95-1.9c.47-.18 1-.27 1.57-.27.3 0 .61.04.91.14.3.09.59.21.86.36s.52.33.77.52c.24.19.47.38.68.58a7.56 7.56 0 0 1 1.46-1.1c.27-.15.55-.27.84-.36.3-.1.6-.14.9-.14.59 0 1.12.09 1.59.26.39.15.73.34 1.02.59Z',
          })
        ),
        starhollow: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M6.32.78a.75.75 0 0 1 1.36 0l1.63 3.54 3.87.46c.63.07.89.86.42 1.3l-2.86 2.64.76 3.81a.75.75 0 0 1-1.1.8L7 11.43l-3.4 1.9a.75.75 0 0 1-1.1-.8l.76-3.81L.4 6.07a.75.75 0 0 1 .42-1.3l3.87-.45L6.32.78ZM7 1.7 5.54 4.86c-.11.24-.34.4-.6.43l-3.46.42 2.56 2.37c.2.17.28.44.23.7l-.68 3.42 3.04-1.7c.23-.14.5-.14.74 0l3.04 1.7-.68-3.43a.75.75 0 0 1 .23-.7l2.56-2.36-3.47-.42a.75.75 0 0 1-.59-.43L7 1.7Z',
          })
        ),
        star: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M7.68.78a.75.75 0 0 0-1.36 0L4.69 4.32l-3.87.46a.75.75 0 0 0-.42 1.3l2.86 2.64-.76 3.81a.75.75 0 0 0 1.1.8l3.4-1.9 3.4 1.9a.75.75 0 0 0 1.1-.8l-.76-3.81 2.86-2.65a.75.75 0 0 0-.42-1.3L9.3 4.33 7.68.78Z',
          })
        ),
        certificate: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M10 7.85A4.49 4.49 0 0 0 7 0a4.5 4.5 0 0 0-3 7.85V13a.5.5 0 0 0 .5.5.5.5 0 0 0 .35-.15L7 11.21l2.15 2.14A.5.5 0 0 0 10 13V7.85ZM7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-.35 2.15c.2-.2.5-.2.7 0L9 11.79V8.53a4.48 4.48 0 0 1-4 0v3.26l1.65-1.64Z',
          })
        ),
        verified: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M6.56 13.12a1 1 0 0 1 .88 0l.98.49a1 1 0 0 0 1.31-.43l.52-.97a1 1 0 0 1 .7-.51l1.08-.2a1 1 0 0 0 .81-1.1l-.15-1.1a1 1 0 0 1 .27-.82l.76-.8a1 1 0 0 0 0-1.37l-.76-.79a1 1 0 0 1-.27-.83l.15-1.08a1 1 0 0 0-.8-1.12l-1.09-.19a1 1 0 0 1-.7-.5L9.73.81A1 1 0 0 0 8.43.4l-1 .49a1 1 0 0 1-.87 0L5.58.39a1 1 0 0 0-1.31.43l-.52.97a1 1 0 0 1-.7.51l-1.08.2a1 1 0 0 0-.81 1.1l.15 1.1a1 1 0 0 1-.27.82l-.76.8a1 1 0 0 0 0 1.37l.76.79a1 1 0 0 1 .27.83l-.15 1.08a1 1 0 0 0 .8 1.12l1.09.19a1 1 0 0 1 .7.5l.52.98a1 1 0 0 0 1.3.43l1-.49Zm4.3-8.47c.19.2.19.5 0 .7l-4.5 4.5a.5.5 0 0 1-.71 0l-2.5-2.5a.5.5 0 1 1 .7-.7L6 8.79l4.15-4.14c.2-.2.5-.2.7 0Z',
          })
        ),
        thumbsup: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M11 12.02c-.4.37-.91.56-1.56.56h-.88a5.5 5.5 0 0 1-1.3-.16c-.42-.1-.91-.25-1.47-.45-.3-.12-.63-.21-.95-.27H2.88a.84.84 0 0 1-.62-.26.84.84 0 0 1-.26-.61V6.45c0-.24.09-.45.26-.62a.84.84 0 0 1 .62-.25h1.87c.16-.11.47-.47.93-1.06.27-.35.51-.64.74-.88.1-.11.19-.3.24-.58.05-.28.12-.57.2-.87.1-.3.24-.55.43-.74a.87.87 0 0 1 .62-.25c.38 0 .72.07 1.03.22.3.15.54.38.7.7a2.94 2.94 0 0 1 .21 1.58 3 3 0 0 1-.3 1h1.2c.47 0 .88.17 1.23.52s.52.8.52 1.22c0 .29-.04.66-.34 1.12.05.15.07.3.07.47 0 .35-.09.68-.26.98.07.54-.07 1.08-.4 1.51a1.9 1.9 0 0 1-.57 1.5Zm.47-5.33a.96.96 0 0 0 .03-.25.74.74 0 0 0-.23-.51.68.68 0 0 0-.52-.23H7.93l.73-1.45a2 2 0 0 0 .21-.87c0-.44-.07-.7-.13-.82a.53.53 0 0 0-.24-.24 1.3 1.3 0 0 0-.54-.12.99.99 0 0 0-.14.28c-.08.27-.13.52-.18.76-.06.38-.2.77-.48 1.07v.01l-.02.01c-.2.2-.4.46-.67.8l-.61.76c-.15.17-.35.38-.54.51l-.26.18H5v4.13h.02c.38.08.76.18 1.12.32.53.2.98.33 1.35.42.36.09.71.13 1.07.13h.88c.43 0 .68-.11.87-.29a.9.9 0 0 0 .26-.7l-.02-.37.22-.3c.17-.23.25-.5.2-.78l-.04-.33.17-.3a.97.97 0 0 0 .13-.48c0-.09 0-.13-.02-.15l-.15-.46.26-.4c.1-.15.13-.25.15-.33ZM3.5 10.8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z',
          })
        ),
        shield: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M11.76 2.08a.5.5 0 0 1 .24.42v6a.5.5 0 0 1-.17.38l-4.5 3.99a.5.5 0 0 1-.67 0l-4.49-4A.5.5 0 0 1 2 8.5V2.5c0-.18.1-.34.24-.42l.01-.02a2.5 2.5 0 0 1 .3-.16c.22-.1.52-.24.92-.37C4.27 1.26 5.44 1 7 1c1.56 0 2.73.26 3.53.53a6.97 6.97 0 0 1 1.22.53l.01.02ZM3 2.79v5.49l1.07.94 6.59-6.58-.44-.17C9.52 2.24 8.44 2 7 2c-1.44 0-2.52.24-3.22.47-.35.12-.6.24-.78.32Zm4 9.04L4.82 9.9 11 3.71v4.57l-4 3.55Z',
          })
        ),
        basket: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M10.35 2.85a.5.5 0 1 0-.7-.7l-3 3a.5.5 0 1 0 .7.7l3-3Z',
          }),
          a.createElement('path', {
            d: 'M2.09 6H4.5a.5.5 0 0 0 0-1H1.8a.75.75 0 0 0-.74.87l.8 4.88A1.5 1.5 0 0 0 3.36 12h7.3a1.5 1.5 0 0 0 1.48-1.25l.81-4.88A.75.75 0 0 0 12.2 5H10a.5.5 0 0 0 0 1h1.91l-.76 4.58a.5.5 0 0 1-.5.42h-7.3a.5.5 0 0 1-.5-.42L2.1 6Z',
          }),
          a.createElement('path', {
            d: 'M4.5 7c.28 0 .5.22.5.5v2a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5ZM10 7.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2ZM6.5 9.5v-2a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0Z',
          })
        ),
        beaker: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M4.5 2h.75v3.87l-3.03 5.26c-.48.83.12 1.87 1.08 1.87h7.4c.96 0 1.57-1.04 1.08-1.87L8.75 5.87V2h.75a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1Zm1.75 4V2h1.5v4.13l.07.12 1 1.75H5.18l1.01-1.75.07-.12V6ZM4.6 9l-1.52 2.63c-.1.16.03.37.22.37h7.4c.2 0 .31-.2.22-.37L9.4 9H4.6Z',
          })
        ),
        hourglass: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M7.5 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M3.5 1a.5.5 0 0 0-.5.5c0 1.06.14 1.9.68 2.97.34.7.86 1.5 1.6 2.53a16.53 16.53 0 0 0-1.8 2.96A6 6 0 0 0 3 12.49v.01a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 6 6 0 0 0-.48-2.54c-.34-.8-.9-1.71-1.8-2.96a19.78 19.78 0 0 0 1.6-2.53c.54-1.08.68-1.9.68-2.97a.5.5 0 0 0-.5-.5h-7Zm6.49 11a4.68 4.68 0 0 0-.39-1.65c-.27-.65-.73-1.4-1.5-2.5a133 133 0 0 1-.75 1 .5.5 0 0 1-.56.1.5.5 0 0 1-.2-.16l-.7-.94a14.36 14.36 0 0 0-1.5 2.5A4.68 4.68 0 0 0 4.02 12H10ZM6.3 6.72l.7.94a90.06 90.06 0 0 0 .7-.96c.49-.67.87-1.22 1.17-1.7H5.13A32.67 32.67 0 0 0 6.3 6.72ZM4.56 4h4.88c.36-.73.5-1.31.55-2H4c.04.69.19 1.27.55 2Z',
          })
        ),
        flag: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M11.5 1h-9a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 1 0V8h8.5a.5.5 0 0 0 .35-.85L9.21 4.5l2.64-2.65A.5.5 0 0 0 11.5 1ZM8.15 4.15 10.29 2H3v5h7.3L8.14 4.85a.5.5 0 0 1 0-.7Z',
          })
        ),
        cloudhollow: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M10 7V6a3 3 0 0 0-5.9-.74l-.18.68-.7.07A2.5 2.5 0 0 0 3.5 11h3.19l.07-.01h.08L7 11h4a2 2 0 1 0 0-4h-1ZM3.12 5.02A3.5 3.5 0 0 0 3.5 12H11a3 3 0 1 0 0-6 4 4 0 0 0-7.88-.98Z',
          })
        ),
        cloud: a.createElement('path', {
          d: 'M7 2a4 4 0 0 1 4 4 3 3 0 1 1 0 6H3.5a3.5 3.5 0 0 1-.38-6.98A4 4 0 0 1 7 2Z',
        }),
        edit: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'm13.85 2.15-2-2a.5.5 0 0 0-.7 0l-1.5 1.5-9 9a.5.5 0 0 0-.14.26L0 13.39a.5.5 0 0 0 .14.46.5.5 0 0 0 .46.14l2.48-.5a.5.5 0 0 0 .27-.14l9-9 1.5-1.5a.5.5 0 0 0 0-.7ZM12 3.29l.8-.79-1.3-1.3-.8.8L12 3.3Zm-2-.58L1.7 11 3 12.3 11.3 4 10 2.7ZM1.14 12.86l.17-.85.68.68-.85.17Z',
          })
        ),
        cog: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M5.59 5.59a2 2 0 0 1 3.27 2.14.5.5 0 1 0 .93.37 3 3 0 1 0-1.7 1.7.5.5 0 1 0-.36-.94A2 2 0 0 1 5.6 5.6Z',
            fill: '#333',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M.94 6.53c.13.12.19.3.18.46 0 .17-.05.34-.18.47L0 8.39c.19.94.55 1.81 1.07 2.58h1.32c.18 0 .34.07.46.2.12.11.2.27.2.45v1.32c.76.51 1.62.88 2.55 1.06l.94-.94a.63.63 0 0 1 .45-.19h.03c.16 0 .33.07.45.19l.94.94a7.1 7.1 0 0 0 2.55-1.06v-1.33c0-.18.07-.35.2-.46.11-.12.27-.2.45-.2h1.33A7.1 7.1 0 0 0 14 8.4l-.95-.94a.64.64 0 0 1-.18-.47c0-.17.06-.34.18-.46l.95-.95a7.1 7.1 0 0 0-1.05-2.52h-1.34a.63.63 0 0 1-.46-.2.64.64 0 0 1-.2-.46V1.06A7.1 7.1 0 0 0 8.42 0l-.94.94a.63.63 0 0 1-.45.19H7a.63.63 0 0 1-.45-.19L5.6 0a7.1 7.1 0 0 0-2.56 1.06v1.33c0 .18-.07.34-.2.46a.63.63 0 0 1-.45.2H1.06A7.1 7.1 0 0 0 0 5.59l.94.94Zm.7 1.63c.33-.32.49-.75.48-1.17 0-.42-.15-.85-.47-1.17l-.54-.54c.12-.43.3-.85.51-1.23h.77c.46 0 .87-.2 1.17-.5.3-.29.48-.7.48-1.16v-.77c.4-.22.81-.39 1.25-.52l.54.55c.33.32.75.48 1.16.48h.03c.42 0 .84-.16 1.16-.48l.54-.54c.44.12.85.3 1.24.5v.8c0 .45.19.87.49 1.16.3.3.7.5 1.16.5h.78c.2.37.38.78.5 1.2l-.54.55c-.33.32-.49.75-.48 1.17 0 .42.15.85.48 1.17l.55.55c-.13.44-.3.85-.52 1.24h-.77c-.45 0-.87.2-1.16.5-.3.29-.5.7-.5 1.16v.77c-.38.21-.8.39-1.23.51l-.54-.54a1.64 1.64 0 0 0-1.16-.48H7c-.41 0-.83.16-1.16.48l-.54.55a6.1 6.1 0 0 1-1.25-.52v-.76c0-.45-.19-.87-.48-1.16-.3-.3-.71-.5-1.17-.5h-.76a6.1 6.1 0 0 1-.53-1.25l.55-.55Z',
          })
        ),
        nut: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M5.59 8.41a2 2 0 1 1 3.27-.68.5.5 0 1 0 .93.37 3 3 0 1 0-1.7 1.7.5.5 0 0 0-.36-.94 2 2 0 0 1-2.14-.45Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M6.5.29a1 1 0 0 1 1 0l5.06 2.92c.31.18.5.51.5.87v5.84a1 1 0 0 1-.5.87L7.5 13.7a1 1 0 0 1-1 0L1.44 10.8a1 1 0 0 1-.5-.87V4.08a1 1 0 0 1 .5-.87L6.5.3Zm.5.86 5.06 2.93v5.84L7 12.85 1.94 9.92V4.08L7 1.15Z',
          })
        ),
        wrench: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M10.5 1c.44 0 .56.52.25.83l-.8.81c-.2.2-.2.52 0 .72l.69.7c.2.2.52.2.72 0l.8-.81c.32-.31.84-.2.84.25a2.5 2.5 0 0 1-3.41 2.33L2.7 12.7a1 1 0 0 1-1.42-1.42l6.88-6.88A2.5 2.5 0 0 1 10.5 1ZM2 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z',
          })
        ),
        ellipsis: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M4 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM13 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM7 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z',
          })
        ),
        check: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M13.85 3.35a.5.5 0 0 0-.7-.7L5 10.79.85 6.65a.5.5 0 1 0-.7.7l4.5 4.5c.2.2.5.2.7 0l8.5-8.5Z',
          })
        ),
        form: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M2 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6.4a.5.5 0 0 0-1 0V12H2V2h7.5a.5.5 0 0 0 0-1H2Z',
          }),
          a.createElement('path', {
            d: 'm6.35 9.86 7.5-7.5a.5.5 0 0 0-.7-.71L6 8.8 3.85 6.65a.5.5 0 1 0-.7.7l2.5 2.5c.2.2.5.2.7 0Z',
          })
        ),
        batchdeny: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M11.5 2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm-2.646.646a.5.5 0 0 1 0 .708L5.207 7l3.647 3.646a.5.5 0 0 1-.708.708L4.5 7.707.854 11.354a.5.5 0 0 1-.708-.708L3.793 7 .146 3.354a.5.5 0 1 1 .708-.708L4.5 6.293l3.646-3.647a.5.5 0 0 1 .708 0ZM11 7a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 11 7Zm.5 4a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Z',
          })
        ),
        batchaccept: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M11.5 2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm-2.2.6a.5.5 0 0 1 .1.7l-5.995 7.993a.505.505 0 0 1-.37.206.5.5 0 0 1-.395-.152L.146 8.854a.5.5 0 1 1 .708-.708l2.092 2.093L8.6 2.7a.5.5 0 0 1 .7-.1ZM11 7a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 11 7Zm.5 4a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Z',
          })
        ),
        controls: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M10.5 1c.28 0 .5.22.5.5V2h1.5a.5.5 0 0 1 0 1H11v.5a.5.5 0 0 1-1 0V3H1.5a.5.5 0 0 1 0-1H10v-.5c0-.28.22-.5.5-.5ZM1.5 11a.5.5 0 0 0 0 1H10v.5a.5.5 0 0 0 1 0V12h1.5a.5.5 0 0 0 0-1H11v-.5a.5.5 0 0 0-1 0v.5H1.5ZM1 7c0-.28.22-.5.5-.5H3V6a.5.5 0 0 1 1 0v.5h8.5a.5.5 0 0 1 0 1H4V8a.5.5 0 0 1-1 0v-.5H1.5A.5.5 0 0 1 1 7Z',
          })
        ),
        plus: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M7.5.5a.5.5 0 0 0-1 0v6h-6a.5.5 0 0 0 0 1h6v6a.5.5 0 0 0 1 0v-6h6a.5.5 0 0 0 0-1h-6v-6Z',
          })
        ),
        closeAlt: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M2.03.97A.75.75 0 0 0 .97 2.03L5.94 7 .97 11.97a.75.75 0 1 0 1.06 1.06L7 8.06l4.97 4.97a.75.75 0 1 0 1.06-1.06L8.06 7l4.97-4.97A.75.75 0 0 0 11.97.97L7 5.94 2.03.97Z',
          })
        ),
        cross: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M1.85 1.15a.5.5 0 1 0-.7.7L6.29 7l-5.14 5.15a.5.5 0 0 0 .7.7L7 7.71l5.15 5.14a.5.5 0 0 0 .7-.7L7.71 7l5.14-5.15a.5.5 0 0 0-.7-.7L7 6.29 1.85 1.15Z',
          })
        ),
        trash: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M5.5 4.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0V5c0-.28.22-.5.5-.5ZM9 5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V5Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M4.5.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5V2h3a.5.5 0 0 1 0 1H12v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3h-.5a.5.5 0 0 1 0-1h3V.5ZM3 3v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3H3Zm2.5-2h3v1h-3V1Z',
          })
        ),
        pinalt: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M13.44 4.44 9.56.56a1.5 1.5 0 0 0-2.12 0L7 1a1.41 1.41 0 0 0 0 2L5 5H3.66A4 4 0 0 0 .83 6.17l-.48.48a.5.5 0 0 0 0 .7l2.8 2.8-3 3a.5.5 0 0 0 .7.7l3-3 2.8 2.8c.2.2.5.2.7 0l.48-.48A4 4 0 0 0 9 10.34V9l2-2c.55.55 1.45.55 2 0l.44-.44a1.5 1.5 0 0 0 0-2.12ZM11 5.59l-3 3v1.75a3 3 0 0 1-.88 2.12L7 12.6 1.41 7l.13-.12A3 3 0 0 1 3.66 6H5.4l3-3-.7-.7a.41.41 0 0 1 0-.6l.44-.43c.2-.2.5-.2.7 0l3.88 3.88c.2.2.2.5 0 .7l-.44.44a.41.41 0 0 1-.58 0L11 5.6Z',
          })
        ),
        unpin: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M13.44 4.44 9.56.56a1.5 1.5 0 0 0-2.12 0L7 1a1.41 1.41 0 0 0 0 2L5.7 4.3l.71.7 2-2-.7-.7a.41.41 0 0 1 0-.6l.44-.43c.2-.2.5-.2.7 0l3.88 3.88c.2.2.2.5 0 .7l-.44.44a.41.41 0 0 1-.58 0L11 5.6l-2 2 .7.7L11 7c.55.55 1.45.55 2 0l.44-.44a1.5 1.5 0 0 0 0-2.12ZM.83 6.17A4 4 0 0 1 3.59 5l1 1h-.93a3 3 0 0 0-2.12.88L1.4 7 7 12.59l.12-.13A3 3 0 0 0 8 10.34v-.93l1 1a4 4 0 0 1-1.17 2.76l-.48.48a.5.5 0 0 1-.7 0l-2.8-2.8-3 3a.5.5 0 0 1-.7-.7l3-3-2.8-2.8a.5.5 0 0 1 0-.7l.48-.48Zm1.02-5.02a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11Z',
          })
        ),
        add: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M7 3c.28 0 .5.22.5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3c0-.28.22-.5.5-.5Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z',
          })
        ),
        subtract: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M3.5 6.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z',
          })
        ),
        close: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M9.85 4.15c.2.2.2.5 0 .7L7.71 7l2.14 2.15a.5.5 0 0 1-.7.7L7 7.71 4.85 9.85a.5.5 0 0 1-.7-.7L6.29 7 4.15 4.85a.5.5 0 1 1 .7-.7L7 6.29l2.15-2.14c.2-.2.5-.2.7 0Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z',
          })
        ),
        delete: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0a6 6 0 0 1-9.87 4.58l8.45-8.45A5.98 5.98 0 0 1 13 7ZM2.42 10.87l8.45-8.45a6 6 0 0 0-8.46 8.46Z',
          })
        ),
        passed: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm3.85-9.35c.2.2.2.5 0 .7l-4.5 4.5a.5.5 0 0 1-.7 0l-2.5-2.5a.5.5 0 1 1 .7-.7L6 8.79l4.15-4.14c.2-.2.5-.2.7 0Z',
          })
        ),
        changed: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14ZM3.5 6.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z',
          })
        ),
        failed: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm2.85-9.85c.2.2.2.5 0 .7L7.71 7l2.14 2.15a.5.5 0 0 1-.7.7L7 7.71 4.85 9.85a.5.5 0 0 1-.7-.7L6.29 7 4.15 4.85a.5.5 0 1 1 .7-.7L7 6.29l2.15-2.14c.2-.2.5-.2.7 0Z',
          })
        ),
        clear: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M5 2h7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-1.41-.59l-3-3a2 2 0 0 1 0-2.82l3-3A2 2 0 0 1 5 2Zm1.15 3.15c.2-.2.5-.2.7 0L8 6.29l1.15-1.14a.5.5 0 1 1 .7.7L8.71 7l1.14 1.15a.5.5 0 0 1-.7.7L8 7.71 6.85 8.85a.5.5 0 1 1-.7-.7L7.29 7 6.15 5.85a.5.5 0 0 1 0-.7Z',
          })
        ),
        comment: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M3.5 5a.5.5 0 1 0 0 1h7a.5.5 0 0 0 0-1h-7ZM3 8.5c0-.27.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M12.5 12H5.7l-1.85 1.86a.5.5 0 0 1-.35.14.5.5 0 0 1-.5-.5V12H1.5a.5.5 0 0 1-.5-.5v-9c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v9a.5.5 0 0 1-.5.5ZM2 11V3h10v8H2Z',
          })
        ),
        commentadd: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M7.5 5a.5.5 0 1 0-1 0v1.5H5a.5.5 0 1 0 0 1h1.5V9a.5.5 0 0 0 1 0V7.5H9a.5.5 0 0 0 0-1H7.5V5Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M3.7 13.97a.5.5 0 0 1-.7-.46V12H1.5a.5.5 0 0 1-.5-.5v-9c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v9a.5.5 0 0 1-.5.5H5.7l-1.85 1.85a.5.5 0 0 1-.16.1ZM2 3v8h10V3H2Z',
          })
        ),
        requestchange: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M9.85 6.65c.2.2.2.51 0 .7l-2 2a.5.5 0 1 1-.7-.7L8.3 7.5H4.5a.5.5 0 0 1 0-1h3.79L7.15 5.36a.5.5 0 1 1 .7-.71l2 2Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M3.7 13.97a.5.5 0 0 1-.7-.46V12H1.5a.5.5 0 0 1-.5-.5v-9c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v9a.5.5 0 0 1-.5.5H5.7l-1.85 1.85a.5.5 0 0 1-.16.1ZM2 3v8h10V3H2Z',
          })
        ),
        comments: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M8.5 7a.5.5 0 0 0 0-1h-5a.5.5 0 1 0 0 1h5ZM9 8.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1 0-1h5c.28 0 .5.23.5.5Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M12 11.5V10h1.5a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V3H.5a.5.5 0 0 0-.5.5v8c0 .28.22.5.5.5H2v1.5a.5.5 0 0 0 .5.5.5.5 0 0 0 .35-.14L4.71 12h6.79a.5.5 0 0 0 .5-.5ZM3 3V2h10v7h-1V3.5a.5.5 0 0 0-.5-.5H3Zm-2 8V4h10v7H1Z',
          })
        ),
        lock: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M8 8a1 1 0 0 1-.5.87v1.63a.5.5 0 0 1-1 0V8.87A1 1 0 1 1 8 8Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M3 4a4 4 0 1 1 8 0v1h1.5c.28 0 .5.23.5.5v8a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-8c0-.27.22-.5.5-.5H3V4Zm7 1V4a3 3 0 1 0-6 0v1h6Zm2 1H2v7h10V6Z',
          })
        ),
        unlock: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M6.5 8.87a1 1 0 1 1 1 0v1.63a.5.5 0 0 1-1 0V8.87Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M7 1a3 3 0 0 0-3 3v1h8.5c.28 0 .5.23.5.5v8a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-8c0-.27.22-.5.5-.5H3V4a4 4 0 0 1 7.76-1.38.5.5 0 0 1-.94.34A3 3 0 0 0 7 1ZM2 6h10v7H2V6Z',
          })
        ),
        key: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', { d: 'M11 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z' }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M7.5 8.53v.97a.5.5 0 0 1-.5.5H5.5v1.5a.5.5 0 0 1-.5.5H3.5v1.5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .15-.36l5.12-5.11a4.5 4.5 0 1 1 2.23 2.5ZM6 4.5a3.5 3.5 0 1 1 1.5 2.87c-.29-.2-1-.37-1 .48V9H5a.5.5 0 0 0-.5.5V11H3a.5.5 0 0 0-.5.5V13H1v-1.3l5.2-5.19c.15-.16.18-.4.1-.6A3.47 3.47 0 0 1 6 4.5Z',
          })
        ),
        outbox: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M7.35.15a.5.5 0 0 0-.7 0l-2 2a.5.5 0 1 0 .7.7L6.5 1.72v6.8a.5.5 0 0 0 1 0V1.7l1.15 1.15a.5.5 0 1 0 .7-.71l-2-2Z',
          }),
          a.createElement('path', {
            d: 'M2 7.5a.5.5 0 1 0-1 0v5c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-1 0V12H2V7.5Z',
          })
        ),
        credit: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M2.5 8a.5.5 0 1 0 0 1h3a.5.5 0 0 0 0-1h-3Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M0 11.5c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H.5a.5.5 0 0 0-.5.5v9ZM1 3v1h12V3H1Zm0 8h12V6H1v5Z',
          })
        ),
        button: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M1 3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h3.5a.5.5 0 1 0 0-1H1V4h12v5h-1a.5.5 0 0 0 0 1h1a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H1Z',
          }),
          a.createElement('path', {
            d: 'M6.45 7a.5.5 0 0 1 .3.08l3.48 2.02a.5.5 0 0 1 0 .87l-1.08.62.75 1.3a.75.75 0 0 1-1.3.75l-.75-1.3-1.07.62a.5.5 0 0 1-.67-.13.5.5 0 0 1-.1-.3L6 7.5a.5.5 0 0 1 .45-.5Z',
          })
        ),
        type: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M4 1.5c0-.27.22-.5.5-.5h5a.5.5 0 1 1 0 1h-2v10h2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h2V2h-2a.5.5 0 0 1-.5-.5Z',
          }),
          a.createElement('path', {
            d: 'M0 4.5c0-.27.22-.5.5-.5h4a.5.5 0 1 1 0 1H1v4h3.5a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5v-5ZM9.5 4a.5.5 0 1 0 0 1H13v4H9.5a.5.5 0 1 0 0 1h4a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-4Z',
          })
        ),
        pointerdefault: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M5.94 12.46c.11 0 .2-.06.25-.15l1.58-3.16 2.54 2.54c.04.05.1.07.19.07a.3.3 0 0 0 .2-.07l.8-.8a.27.27 0 0 0 0-.38L8.9 7.9l3.4-1.7c.06-.03.1-.07.12-.11a.22.22 0 0 0 .04-.14.33.33 0 0 0-.06-.16.17.17 0 0 0-.09-.07h-.02L1.91 1.55a.27.27 0 0 0-.35.36l4.15 10.37c.04.09.12.16.23.17Zm-.03 1h-.02a1.28 1.28 0 0 1-1.1-.8L.62 2.29A1.27 1.27 0 0 1 2.3.63l10.35 4.15c.52.18.79.65.81 1.11.04.53-.27.98-.7 1.2l-2.17 1.08L12.2 9.8c.5.5.5 1.3 0 1.8l-.8.8v.01c-.5.46-1.3.48-1.8-.01l-1.56-1.56-.95 1.92c-.23.45-.68.7-1.15.7h-.03Z',
          })
        ),
        pointerhand: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M11.87 6v-.02c-.03-.27-.23-.48-.47-.5a.5.5 0 0 0-.53.5v1.41c0 .25-.22.47-.47.47a.48.48 0 0 1-.47-.47V5.17a.6.6 0 0 0 0-.05c-.02-.27-.23-.5-.47-.5a.5.5 0 0 0-.52.5v1.65l-.01.1a.49.49 0 0 1-.46.37.48.48 0 0 1-.47-.47V4.62a.6.6 0 0 0 0-.05c-.03-.27-.23-.48-.47-.5a.5.5 0 0 0-.53.5v2.2c0 .25-.22.47-.47.47a.49.49 0 0 1-.47-.47V1.75c-.02-.27-.22-.5-.47-.5a.5.5 0 0 0-.52.5v6.78c0 .25-.22.47-.47.47a.48.48 0 0 1-.47-.47v-.26a.78.78 0 0 0-.06-.31.65.65 0 0 0-.16-.22l-.2-.19A6.37 6.37 0 0 0 3.06 7h-.02c-.43-.34-.62-.25-.69-.2-.26.14-.29.5-.13.74l1.73 2.6v.01h-.01l-.04.02.05-.02s1.21 2.6 3.57 2.6c3.54 0 4.2-1.9 4.31-4.42.04-.6.04-1.19.03-1.78V6Zm.97 2.38c-.06 1.29-.26 2.67-1.08 3.72-.88 1.12-2.29 1.65-4.23 1.65a4.64 4.64 0 0 1-3.4-1.62 6.96 6.96 0 0 1-1.05-1.5v-.02L1.4 8.1A1.6 1.6 0 0 1 1.15 7c.05-.38.26-.8.69-1.04.2-.13.48-.23.85-.19.36.05.68.22.98.45.14.1.27.22.4.33v-4.8A1.5 1.5 0 0 1 5.63.25c.93.04 1.43.86 1.43 1.55v1.33c.17-.05.35-.07.53-.06h.02c.5.04.91.33 1.15.71a1.5 1.5 0 0 1 .74-.16c.66.03 1.12.46 1.32.97a1.5 1.5 0 0 1 .64-.1h.02c.85.06 1.39.8 1.39 1.55v.48c0 .6 0 1.24-.03 1.86Z',
          })
        ),
        browser: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h13c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5H.5Zm.5-1V4h12v8H1Zm1-9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z',
          })
        ),
        tablet: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M3.5 0C2.67 0 2 .68 2 1.5v11c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-11c0-.82-.67-1.5-1.5-1.5h-7Zm0 1h7c.28 0 .5.23.5.5V11H3V1.5c0-.27.22-.5.5-.5ZM6 12a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H6Z',
          })
        ),
        mobile: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M3 1.5C3 .68 3.67 0 4.5 0h5c.83 0 1.5.68 1.5 1.5v11c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 3 12.5v-11ZM4 12V2h6v10H4Z',
          })
        ),
        watch: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            key: 'watch',
            fillRule: 'evenodd',
            d: 'M4 .5c0-.27.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 4 .5ZM9.5 3h-5a.5.5 0 0 0-.5.5v7c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5Zm-5-1C3.67 2 3 2.68 3 3.5v7c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-7c0-.82-.67-1.5-1.5-1.5h-5ZM7 4c.28 0 .5.23.5.5v2h1a.5.5 0 1 1 0 1H7a.5.5 0 0 1-.5-.5V4.5c0-.27.22-.5.5-.5Zm-2.5 9a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z',
          })
        ),
        sidebar: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M2.5 4.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5ZM3 6a.5.5 0 1 0 0 1h1a.5.5 0 0 0 0-1H3Zm-.5 2.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11Zm.5-1V2h3v10H2ZM6 2h6v10H6V2Z',
          })
        ),
        sidebaralt: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M9.5 4.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5ZM10 6a.5.5 0 1 0 0 1h1a.5.5 0 0 0 0-1h-1Zm-.5 2.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11Zm.5-1V2h6v10H2ZM9 2h3v10H9V2Z',
          })
        ),
        sidebaralttoggle: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M11.5 4.5A.5.5 0 0 0 11 4h-1a.5.5 0 1 0 0 1h1a.5.5 0 0 0 .5-.5ZM11 6a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1h1Zm.5 2.5A.5.5 0 0 0 11 8h-1a.5.5 0 1 0 0 1h1a.5.5 0 0 0 .5-.5Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11ZM9 12h3V2H9v10Zm-1 0H2V2h6v4.5H5.2l.66-.65a.5.5 0 1 0-.71-.7l-1.5 1.5a.5.5 0 0 0 0 .7l1.5 1.5a.5.5 0 1 0 .7-.7l-.64-.65H8V12Z',
          })
        ),
        sidebartoggle: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M2.5 4.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5ZM3 6a.5.5 0 1 0 0 1h1a.5.5 0 0 0 0-1H3Zm-.5 2.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11Zm.5-1V2h3v10H2Zm4 0V7.5h2.8l-.65.65a.5.5 0 1 0 .7.7l1.5-1.5a.5.5 0 0 0 0-.7l-1.5-1.5a.5.5 0 1 0-.7.7l.64.65H6V2h6v10H6Z',
          })
        ),
        bottombar: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M3 10.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm3.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm2.5.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 8V2h10v6H2Zm10 1v3H2V9h10Z',
          })
        ),
        bottombartoggle: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M3.5 10a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm2.5.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm3.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M1 12.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5Zm1-.5V9h10v3H2Zm4.5-4H2V2h10v6H7.5V5.21l.65.65a.5.5 0 1 0 .7-.71l-1.5-1.5a.5.5 0 0 0-.7 0l-1.5 1.5a.5.5 0 1 0 .7.7l.65-.64v2.8Z',
          })
        ),
        cpu: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M5 5.5c0-.27.22-.5.5-.5h3c.28 0 .5.23.5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3ZM6 8V6h2v2H6Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M5.5 0c.28 0 .5.23.5.5V2h2V.5a.5.5 0 0 1 1 0V2h2.5c.28 0 .5.23.5.5V5h1.5a.5.5 0 0 1 0 1H12v2h1.5a.5.5 0 0 1 0 1H12v2.5a.5.5 0 0 1-.5.5H9v1.5a.5.5 0 0 1-1 0V12H6v1.5a.5.5 0 0 1-1 0V12H2.5a.5.5 0 0 1-.5-.5V9H.5a.5.5 0 0 1 0-1H2V6H.5a.5.5 0 0 1 0-1H2V2.5c0-.27.22-.5.5-.5H5V.5c0-.27.22-.5.5-.5ZM11 3H3v8h8V3Z',
          })
        ),
        database: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M12 3c0-1.1-2.24-2-5-2s-5 .9-5 2v8c0 .43.26.75.54.98.3.23.68.41 1.12.55.88.3 2.06.47 3.34.47 1.28 0 2.46-.17 3.34-.46.44-.15.83-.33 1.12-.56.28-.23.54-.55.54-.98V3Zm-1.03 0a2.45 2.45 0 0 0-.8-.49A8.88 8.88 0 0 0 7 2c-1.29 0-2.4.21-3.16.51a2.45 2.45 0 0 0-.81.49l.05.05c.13.13.37.28.76.44C4.6 3.79 5.7 4 7 4s2.4-.21 3.16-.51a2.45 2.45 0 0 0 .81-.49ZM11 5.75V4.2A8.9 8.9 0 0 1 7 5a8.98 8.98 0 0 1-4-.8v1.55l.02.04c.02.04.06.09.14.15.17.13.44.27.82.4A10 10 0 0 0 7 6.75a10 10 0 0 0 3.02-.41c.38-.13.65-.27.82-.4a.62.62 0 0 0 .14-.15.15.15 0 0 0 .02-.03v-.01ZM3 7.01c.2.1.42.2.66.28.88.29 2.06.46 3.34.46 1.28 0 2.46-.17 3.34-.46.24-.08.46-.17.66-.28V8.5l-.02.04a.62.62 0 0 1-.14.15c-.17.13-.44.27-.82.4A10 10 0 0 1 7 9.5a10 10 0 0 1-3.02-.41 2.76 2.76 0 0 1-.82-.4.62.62 0 0 1-.14-.15.15.15 0 0 1-.02-.03V7Zm0 2.75V11l.02.04c.02.04.06.09.14.15.17.13.44.27.82.4A10 10 0 0 0 7 12a10 10 0 0 0 3.02-.41c.38-.13.65-.27.82-.4a.62.62 0 0 0 .14-.15.15.15 0 0 0 .02-.03V9.76c-.2.1-.42.2-.66.28-.88.29-2.06.46-3.34.46-1.28 0-2.46-.17-3.34-.46A4.77 4.77 0 0 1 3 9.76Z',
          })
        ),
        memory: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M5 3a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0V3Zm2-.5c.28 0 .5.22.5.5v3a.5.5 0 0 1-1 0V3c0-.28.22-.5.5-.5Zm3 2a.5.5 0 1 0-1 0V6a.5.5 0 0 0 1 0V4.5Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M12 3.54a.5.5 0 0 0-.15-.39l-3-3a.5.5 0 0 0-.38-.14H2.5a.5.5 0 0 0-.5.5v13c0 .27.22.5.5.5h9a.5.5 0 0 0 .5-.5V3.53ZM3 1h5.3L11 3.71v5.3H3V1Zm0 9v3h8v-3H3Z',
          })
        ),
        structure: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M8.16 3.45a1.5 1.5 0 1 0-2.33 0l-4.02 6.58A1.5 1.5 0 1 0 2.91 12h8.18a1.5 1.5 0 1 0 1.1-1.97L8.16 3.45Zm-1.47.52a1.5 1.5 0 0 0 .62 0l4.03 6.58c-.11.14-.2.29-.25.45H2.9a1.5 1.5 0 0 0-.25-.45L6.7 3.97Z',
          })
        ),
        box: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'm7.21.05 6.49 2.99a.5.5 0 0 1 .3.47v6.98a.5.5 0 0 1-.3.47l-6.47 2.98a.5.5 0 0 1-.46 0L.3 10.96a.5.5 0 0 1-.3-.47V3.5a.5.5 0 0 1 .3-.47L6.79.05a.5.5 0 0 1 .43 0ZM1 4.28v5.9l5.5 2.54v-5.9L1 4.28Zm6.5 8.44 5.5-2.54v-5.9L7.5 6.82v5.9Zm4.8-9.22L7 5.95 1.7 3.5 7 1.05l5.3 2.45Z',
          })
        ),
        power: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M7.5.5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0v-6Z',
          }),
          a.createElement('path', {
            d: 'M4.27 2.8a.5.5 0 0 0-.54-.83 6 6 0 1 0 6.54 0 .5.5 0 0 0-.54.84 5 5 0 1 1-5.46 0Z',
          })
        ),
        photo: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M6.25 4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M13 1.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5ZM2 9.3V2h10v5.3L9.85 5.15a.5.5 0 0 0-.7 0L6.5 7.8 5.35 6.65a.5.5 0 0 0-.7 0L2 9.3Zm7.5-3.1L12 8.7V12H2v-1.3l3-3 3.15 3.15a.5.5 0 0 0 .7-.71L7.21 8.5 9.5 6.21Z',
          })
        ),
        component: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M3.5 1A2.5 2.5 0 0 0 1 3.5v7A2.5 2.5 0 0 0 3.5 13h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 10.5 1h-7ZM12 6.5H7.5V2h3c.83 0 1.5.68 1.5 1.5v3Zm0 1v3c0 .83-.67 1.5-1.5 1.5h-3V7.5H12ZM6.5 12V7.5H2v3c0 .83.67 1.5 1.5 1.5h3ZM2 6.5h4.5V2h-3C2.67 2 2 2.68 2 3.5v3Z',
          })
        ),
        grid: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M1 1.5c0-.27.22-.5.5-.5H6c.28 0 .5.23.5.5V6a.5.5 0 0 1-.5.5H1.5A.5.5 0 0 1 1 6V1.5Zm1 4V2h3.5v3.5H2Zm5.5-4c0-.27.22-.5.5-.5h4.5c.28 0 .5.23.5.5V6a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V1.5Zm1 4V2H12v3.5H8.5Zm-7 2A.5.5 0 0 0 1 8v4.5c0 .28.22.5.5.5H6a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H1.5Zm.5 1V12h3.5V8.5H2ZM7.5 8c0-.27.22-.5.5-.5h4.5c.28 0 .5.23.5.5v4.5a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V8Zm1 4V8.5H12V12H8.5Z',
          })
        ),
        outline: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M2 2v2H1V1.5c0-.27.22-.5.5-.5H4v1H2ZM1 9V5h1v4H1Zm0 1v2.5c0 .28.22.5.5.5H4v-1H2v-2H1Zm9 3h2.5a.5.5 0 0 0 .5-.5V10h-1v2h-2v1Zm2-9h1V1.5a.5.5 0 0 0-.5-.5H10v1h2v2Zm-3 8v1H5v-1h4ZM9 1v1H5V1h4Zm4 8h-1V5h1v4ZM7 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z',
          })
        ),
        photodrag: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M8.25 3.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M14 7V.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5V3H.5a.5.5 0 0 0-.5.5V6h1V4h2v6.5c0 .28.22.5.5.5H10v2H8v1h2.5a.5.5 0 0 0 .5-.5V11h2.5a.5.5 0 0 0 .5-.5V7ZM4 1v5.8l1.65-1.65c.2-.2.5-.2.7 0L7.5 6.3l2.65-2.65c.2-.2.5-.2.7 0L13 5.8V1H4Zm9 6.21-2.5-2.5-2.3 2.3 1.15 1.14a.5.5 0 1 1-.7.7L6 6.22l-2 2v1.8h9V7.2Z',
          }),
          a.createElement('path', {
            d: 'M0 10V7h1v3H0Zm0 3.5V11h1v2h2v1H.5a.5.5 0 0 1-.5-.5Zm7 .5H4v-1h3v1Z',
          })
        ),
        search: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M9.54 10.2a5.5 5.5 0 1 1 .66-.66c.06.03.11.06.15.1l3 3a.5.5 0 0 1-.7.71l-3-3a.5.5 0 0 1-.1-.14ZM10.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z',
          })
        ),
        zoom: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M6 3.5c.28 0 .5.22.5.5v1.5H8a.5.5 0 0 1 0 1H6.5V8a.5.5 0 0 1-1 0V6.5H4a.5.5 0 0 1 0-1h1.5V4c0-.28.22-.5.5-.5Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M9.54 10.2a5.5 5.5 0 1 1 .66-.66c.06.03.11.06.15.1l3 3a.5.5 0 0 1-.7.71l-3-3a.5.5 0 0 1-.1-.14ZM10.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z',
          })
        ),
        zoomout: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M4 5.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H4Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M6 11.5c1.35 0 2.59-.49 3.54-1.3.03.06.06.11.1.15l3 3a.5.5 0 0 0 .71-.7l-3-3a.5.5 0 0 0-.14-.1A5.5 5.5 0 1 0 6 11.5Zm0-1a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z',
          })
        ),
        zoomreset: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M1.5 2.84V1.5a.5.5 0 0 0-1 0V4c0 .28.22.5.5.5h2.5a.5.5 0 0 0 0-1H2.26a4.5 4.5 0 1 1-.5 4.02.5.5 0 1 0-.94.33 5.5 5.5 0 0 0 8.72 2.36l.1.14 3 3a.5.5 0 0 0 .71-.7l-3-3a.5.5 0 0 0-.14-.1 5.5 5.5 0 1 0-8.7-6.7Z',
          })
        ),
        eye: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M7 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'm14 7-.2.3c-.13.16-3.06 4.2-6.8 4.2C3.26 11.5.33 7.46.2 7.3L0 7l.2-.3C.34 6.55 3.27 2.5 7 2.5c3.74 0 6.67 4.04 6.8 4.2l.2.3ZM2.9 5.3A13 13 0 0 0 1.24 7 13 13 0 0 0 2.9 8.7c1.14.97 2.58 1.8 4.1 1.8 1.52 0 2.96-.83 4.1-1.8A13 13 0 0 0 12.76 7a13 13 0 0 0-1.66-1.7C9.96 4.33 8.52 3.5 7 3.5c-1.52 0-2.96.83-4.1 1.8Z',
          })
        ),
        eyeclose: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M1.85 1.15a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11ZM11.1 8.7c-.17.15-.36.3-.55.44l.72.71a13.25 13.25 0 0 0 2.52-2.56L14 7l-.2-.3c-.13-.16-3.06-4.2-6.8-4.2-.89 0-1.73.23-2.5.58l.76.76A4.86 4.86 0 0 1 7 3.5c1.52 0 2.96.83 4.1 1.8A13 13 0 0 1 12.76 7a13 13 0 0 1-1.66 1.7ZM.2 6.7c.08-.09 1.04-1.41 2.53-2.55l.72.71c-.2.14-.38.3-.55.44A13 13 0 0 0 1.24 7 13 13 0 0 0 2.9 8.7c1.14.97 2.58 1.8 4.1 1.8.6 0 1.18-.13 1.74-.34l.77.76c-.78.35-1.62.58-2.51.58C3.26 11.5.33 7.46.2 7.3L0 7l.2-.3Z',
          }),
          a.createElement('path', {
            d: 'M4.5 7c0-.32.06-.63.17-.91l3.24 3.24A2.5 2.5 0 0 1 4.5 7Zm4.83.91L6.09 4.67a2.5 2.5 0 0 1 3.24 3.24Z',
          })
        ),
        lightning: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M2.52 6.6a.57.57 0 0 0-.17.54c.04.2.19.37.38.41l2.78.73-1.5 5c-.06.24.02.5.22.63a.5.5 0 0 0 .28.09.5.5 0 0 0 .35-.14L11.5 7.4c.14-.13.2-.34.15-.54a.53.53 0 0 0-.38-.4l-2.7-.7L10.79.78c.1-.23.04-.5-.15-.66a.5.5 0 0 0-.65 0L2.52 6.6Zm7.72.63-3.07-.8 1.85-4.14-5.2 4.51 2.94.77-1.27 4.28 4.75-4.62Zm-5.73 6.2.04.02Z',
          })
        ),
        lightningoff: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M10.14 8.72 11.5 7.4c.14-.13.2-.34.15-.54a.53.53 0 0 0-.38-.4l-2.7-.7L10.79.78c.1-.23.04-.5-.15-.66a.5.5 0 0 0-.65 0L5.46 4.05l.71.7L9.02 2.3 7.38 5.97l.7.7 2.16.56-.8.79.7.7ZM2.52 6.6a.57.57 0 0 0-.17.54c.04.2.19.37.38.41l2.78.73-1.5 5c-.06.24.02.5.22.63a.5.5 0 0 0 .63-.05l3.84-3.74-.7-.7-2.51 2.43 1.13-3.81-.68-.69L3.8 6.8l.85-.73-.71-.7L2.52 6.6Zm-.67-5.45a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11Z',
          })
        ),
        contrast: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M3 3H.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h10a.5.5 0 0 0 .5-.5V11h2.5a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5V3Zm1 1v2.3L6.3 4H4ZM3 4v6.5a.5.5 0 0 0 .5.5H10v2H1V4h2Zm1-1h6.5a.5.5 0 0 1 .5.5V10h2V1H4v2Zm6 7V7.71l-2.3 2.3H10Zm0-3.7V4.7L4.7 10h1.6L10 6.3ZM9.3 4H7.7L4 7.71V9.3L9.3 4Z',
          })
        ),
        switchalt: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M3 3V.5c0-.27.22-.5.5-.5h10c.28 0 .5.23.5.5v10a.5.5 0 0 1-.5.5H11v2.5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-10c0-.27.22-.5.5-.5H3Zm1 0V1h9v9h-2V3.5a.5.5 0 0 0-.5-.5H4Zm6 8v2H1V4h2v6.5c0 .28.22.5.5.5H10Zm0-1H4V4h6v6Z',
          })
        ),
        mirror: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 12h10V2L2 12Z',
          })
        ),
        grow: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M1.5 1a.5.5 0 1 0 0 1H12v10.5a.5.5 0 0 0 1 0V2a1 1 0 0 0-1-1H1.5Z',
          }),
          a.createElement('path', {
            d: 'M1 3.5c0-.27.22-.5.5-.5H10a1 1 0 0 1 1 1v8.5a.5.5 0 0 1-1 0V4H1.5a.5.5 0 0 1-.5-.5Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M1.5 5a.5.5 0 0 0-.5.5v7c0 .28.22.5.5.5h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7ZM2 6v6h6V6H2Z',
          })
        ),
        paintbrush: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M11.8535.1464a.5.5 0 0 0-.7071 0L2.9827 8.3102a2.2396 2.2396 0 0 0-1.0737.599C.6772 10.141.2402 11.903.0852 12.9978 0 13.5998 0 14.0002 0 14.0002s.4004 0 1.0023-.0853c1.095-.155 2.8569-.5919 4.0887-1.8237.307-.307.5067-.6806.5992-1.0743l8.1633-8.1633a.5.5 0 0 0 0-.7071l-2-2Zm-6.253 9.546L6.543 8.75l-1.293-1.2929-.9424.9424a2.242 2.242 0 0 1 .7835.5097c.23.2302.4.4977.5095.7831ZM7.25 8.0428 12.7929 2.5 11.5 1.2071 5.957 6.75 7.25 8.0429ZM4.3839 9.6163c.4881.4882.4881 1.2796 0 1.7678-.7665.7664-1.832 1.1845-2.7791 1.403a8.6972 8.6972 0 0 1-.49.0982 8.7151 8.7151 0 0 1 .0982-.4899c.2186-.9471.6367-2.0126 1.403-2.779.4882-.4882 1.2797-.4882 1.7679 0Z',
          })
        ),
        ruler: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M1.5 1c.28 0 .5.23.5.5V2h10v-.5a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0V3H2v.5a.5.5 0 0 1-1 0v-2c0-.27.22-.5.5-.5Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M1.5 6a.5.5 0 0 0-.5.5v6c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-11ZM2 7v5h10V7h-1v2.5a.5.5 0 0 1-1 0V7h-.75v1a.5.5 0 0 1-1 0V7H7.5v2.5a.5.5 0 0 1-1 0V7h-.75v1a.5.5 0 0 1-1 0V7H4v2.5a.5.5 0 0 1-1 0V7H2Z',
          })
        ),
        stop: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M4.5 4a.5.5 0 0 0-.5.5v5c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-5Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z',
          })
        ),
        camera: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M2.5 1a.5.5 0 0 0-.5.5V2H.5a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H6v-.5a.5.5 0 0 0-.5-.5h-3ZM1 3v8h12V3H1Z',
          })
        ),
        video: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M2.5 10a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M0 4c0-1.1.9-2 2-2h6a2 2 0 0 1 2 2v.5l3.19-2.4a.5.5 0 0 1 .81.4v9a.5.5 0 0 1-.8.4L10 9.5v.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm9 0v1.5a.5.5 0 0 0 .8.4L13 3.5v7L9.8 8.1a.5.5 0 0 0-.8.4V10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1Z',
          })
        ),
        speaker: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M1 4.50004V9.50004C1 9.77618 1.22386 10 1.5 10H4L7.17075 12.7744C7.49404 13.0573 8 12.8277 8 12.3982V1.60192C8 1.17235 7.49404 0.942757 7.17075 1.22564L4 4.00004H1.5C1.22386 4.00004 1 4.2239 1 4.50004ZM4 9.00004V5.00004H2V9.00004H4ZM4.99804 9.54456C4.99934 9.52989 5 9.51505 5 9.50004V4.50004C5 4.48504 4.99934 4.47019 4.99804 4.45552L7 2.70381V11.2963L4.99804 9.54456Z',
          }),
          a.createElement('path', {
            d: 'M10.1498 1.75202C9.88637 1.66927 9.60572 1.81577 9.52297 2.07922C9.44023 2.34267 9.58672 2.62332 9.85017 2.70607C11.6763 3.27963 13 4.98596 13 7.00014C13 9.01433 11.6763 10.7207 9.85017 11.2942C9.58672 11.377 9.44023 11.6576 9.52297 11.9211C9.60572 12.1845 9.88637 12.331 10.1498 12.2483C12.3808 11.5476 14 9.4636 14 7.00014C14 4.53669 12.3808 2.45272 10.1498 1.75202Z',
          }),
          a.createElement('path', {
            d: 'M10.2504 3.96861C10.0113 3.83033 9.70547 3.91201 9.5672 4.15105C9.42893 4.39008 9.51061 4.69594 9.74964 4.83421C10.4982 5.26723 11 6.07534 11 7.00006C11 7.92479 10.4982 8.7329 9.74964 9.16591C9.51061 9.30418 9.42893 9.61005 9.5672 9.84908C9.70547 10.0881 10.0113 10.1698 10.2504 10.0315C11.2952 9.42711 12 8.29619 12 7.00006C12 5.70394 11.2952 4.57302 10.2504 3.96861Z',
          })
        ),
        play: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'm12.81 7.43-9.05 5.6A.5.5 0 0 1 3 12.6V1.4c0-.4.43-.63.76-.43l9.05 5.6a.5.5 0 0 1 0 .86Z',
          })
        ),
        playback: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M11.24 12.04 3.7 7.42a.5.5 0 0 1-.2-.23v4.05a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 1.5 0V6.8a.5.5 0 0 1 .2-.23l7.54-4.6a.5.5 0 0 1 .76.42v9.22a.5.5 0 0 1-.76.43Z',
          })
        ),
        playnext: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'm2.76 12.04 7.54-4.61a.5.5 0 0 0 .2-.23v4.05a.75.75 0 0 0 1.5 0v-8.5a.75.75 0 0 0-1.5 0V6.8a.5.5 0 0 0-.2-.23l-7.54-4.6a.5.5 0 0 0-.76.42v9.22c0 .39.43.63.76.43Z',
          })
        ),
        rewind: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M9 2.42v2.32L13.23 2a.5.5 0 0 1 .77.42v9.16a.5.5 0 0 1-.77.42L9 9.26v2.32a.5.5 0 0 1-.77.42L1.5 7.65v3.6a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 1.5 0v3.6L8.23 2a.5.5 0 0 1 .77.42Z',
          })
        ),
        fastforward: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M5 2.42v2.32L.77 2a.5.5 0 0 0-.77.42v9.16c0 .4.44.64.77.42L5 9.26v2.32c0 .4.44.64.77.42l6.73-4.35v3.6a.75.75 0 0 0 1.5 0v-8.5a.75.75 0 0 0-1.5 0v3.6L5.77 2a.5.5 0 0 0-.77.42Z',
          })
        ),
        stopalt: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11Z',
          })
        ),
        sidebyside: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 12V2h5v10H2Z',
          })
        ),
        stacked: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M12.5 1c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11ZM2 2h10v5H2V2Z',
          })
        ),
        sun: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M7.5.5a.5.5 0 0 0-1 0V2a.5.5 0 0 0 1 0V.5Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
          }),
          a.createElement('path', {
            d: 'M7 11.5c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-1 0V12c0-.28.22-.5.5-.5ZM11.5 7c0-.28.22-.5.5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5ZM.5 6.5a.5.5 0 0 0 0 1H2a.5.5 0 0 0 0-1H.5ZM3.82 10.18c.2.2.2.51 0 .7l-1.06 1.07a.5.5 0 1 1-.71-.7l1.06-1.07c.2-.2.51-.2.7 0ZM11.95 2.76a.5.5 0 1 0-.7-.71l-1.07 1.06a.5.5 0 1 0 .7.7l1.07-1.05ZM10.18 10.18c.2-.2.51-.2.7 0l1.07 1.06a.5.5 0 1 1-.7.71l-1.07-1.06a.5.5 0 0 1 0-.7ZM2.76 2.05a.5.5 0 1 0-.71.7l1.06 1.07a.5.5 0 0 0 .7-.7L2.77 2.04Z',
          })
        ),
        moon: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M7.78.04a7.03 7.03 0 0 0-4.28.9 7 7 0 1 0 9.87 8.96c.1-.21-.14-.41-.36-.32a4.98 4.98 0 0 1-2 .42A5 5 0 0 1 8.53.65c.2-.12.19-.44-.04-.49a7.04 7.04 0 0 0-.72-.12Zm-1.27.98a6 6 0 0 0 4.98 9.96 6 6 0 1 1-4.98-9.96Z',
          })
        ),
        book: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M13 2a2 2 0 0 0-2-2H1.5a.5.5 0 0 0-.5.5v13c0 .28.22.5.5.5H11a2 2 0 0 0 2-2V2ZM3 13h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H7v6a.5.5 0 0 1-.86.36L5.5 6.7l-.65.65A.5.5 0 0 1 4 7V1H3v12ZM5 1v4.8l.15-.15a.5.5 0 0 1 .74.04l.11.1V1H5Z',
          })
        ),
        document: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M4 5.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5ZM4.5 7.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM4 10.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M1.5 0a.5.5 0 0 0-.5.5v13c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5V3.2a.5.5 0 0 0-.15-.35l-2.7-2.7A.5.5 0 0 0 9.79 0H1.5ZM2 1h7.5v2c0 .28.22.5.5.5h2V13H2V1Z',
          })
        ),
        copy: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M11.75.07A.5.5 0 0 0 11.5 0h-6a.5.5 0 0 0-.5.5V3H.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h8a.5.5 0 0 0 .5-.5V11h4.5a.5.5 0 0 0 .5-.5V2.51a.5.5 0 0 0-.15-.36l-2-2a.5.5 0 0 0-.1-.08ZM9 10h4V3h-1.5a.5.5 0 0 1-.5-.5V1H6v2h.5a.5.5 0 0 1 .36.15l1.99 2c.1.09.15.21.15.35v4.51ZM1 4v9h7V6H6.5a.5.5 0 0 1-.5-.5V4H1Z',
          })
        ),
        category: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M3 1.5c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm-1 2c0-.27.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M1 5.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v7a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-7ZM2 12V6h10v6H2Z',
          })
        ),
        folder: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M6.59 3.5 5.09 2H1v9h12V3.5H6.59Zm.41-1L5.8 1.3a1 1 0 0 0-.71-.3H.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H7Z',
          })
        ),
        print: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M4.5 8a.5.5 0 1 0 0 1h5a.5.5 0 0 0 0-1h-5Zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M2 1.5c0-.27.22-.5.5-.5h8a.5.5 0 0 1 .36.15l.99 1c.1.09.15.21.15.35v1.51h1.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-.5.5H12v2.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10H.5a.5.5 0 0 1-.5-.5v-5c0-.28.22-.5.5-.5H2V1.5ZM13 9h-1V6.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5V9H1V5h12v4Zm-2-6v1H3V2h7v.5c0 .28.22.5.5.5h.5Zm-8 9h8V7H3v5Z',
          })
        ),
        graphline: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M5.15 6.15c.2-.2.5-.2.7 0L7 7.3l2.15-2.15c.2-.2.5-.2.7 0l1 1a.5.5 0 0 1-.7.7l-.65-.64-2.15 2.15a.5.5 0 0 1-.7 0L5.5 7.2 3.85 8.86a.5.5 0 1 1-.7-.71l2-2Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M1.5 1a.5.5 0 0 0-.5.5v11c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5h-11ZM2 2v10h10V2H2Z',
          })
        ),
        calendar: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M3.5 0c.28 0 .5.22.5.5V1h6V.5a.5.5 0 0 1 1 0V1h1.5c.28 0 .5.22.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11c0-.28.22-.5.5-.5H3V.5c0-.28.22-.5.5-.5ZM2 4v2.3h3V4H2Zm0 5.2V6.8h3v2.4H2Zm0 .5V12h3V9.7H2Zm3.5 0V12h3V9.7h-3Zm3.5 0V12h3V9.7H9Zm3-.5H9V6.8h3v2.4Zm-3.5 0h-3V6.8h3v2.4ZM9 4v2.3h3V4H9ZM5.5 6.3h3V4h-3v2.3Z',
          })
        ),
        graphbar: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M12 2.5a.5.5 0 0 0-1 0v10a.5.5 0 0 0 1 0v-10Zm-3 2a.5.5 0 0 0-1 0v8a.5.5 0 0 0 1 0v-8ZM5.5 7c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0v-5c0-.28.22-.5.5-.5ZM3 10.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2Z',
          })
        ),
        menu: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M13 2a.5.5 0 0 1 0 1H1a.5.5 0 0 1 0-1h12Zm-3 3a.5.5 0 0 1 0 1H1a.5.5 0 0 1 0-1h9Zm1.5 3.5A.5.5 0 0 0 11 8H1a.5.5 0 0 0 0 1h10a.5.5 0 0 0 .5-.5Zm-4 2.5a.5.5 0 0 1 0 1H1a.5.5 0 0 1 0-1h6.5Z',
          })
        ),
        menualt: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M1 2a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1H1Zm3 3a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1H4ZM2.5 8.5c0-.28.22-.5.5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5Zm4 2.5a.5.5 0 0 0 0 1H13a.5.5 0 0 0 0-1H6.5Z',
          })
        ),
        filter: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M1 2a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1H1Zm2 3a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1H3Zm1.5 3.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5Zm2 2.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z',
          })
        ),
        docchart: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M1 1.5C1 1.22386 1.22386 1 1.5 1H12.5C12.7761 1 13 1.22386 13 1.5V12.5C13 12.7761 12.7761 13 12.5 13H1.5C1.22386 13 1 12.7761 1 12.5V1.5ZM2 4V6.2998H5V4H2ZM2 9.2002V6.7998H5V9.2002H2ZM2 9.7002V12H5V9.7002H2ZM5.5 9.7002V12H8.5V9.7002H5.5ZM9 9.7002V12H12V9.7002H9ZM12 9.2002H9V6.7998H12V9.2002ZM8.5 9.2002H5.5V6.7998H8.5V9.2002ZM9 6.2998H12V4H9V6.2998ZM5.5 6.2998H8.5V4H5.5V6.2998Z',
          })
        ),
        doclist: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M3.5 6.5c0-.28.22-.5.5-.5h6a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5ZM4 9a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H4Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M1 1.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 4v8h10V4H2Z',
          })
        ),
        markup: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M8.98 1.63a.5.5 0 0 0-.96-.26l-3 11a.5.5 0 1 0 .96.26l3-11ZM3.32 3.62a.5.5 0 0 1 .06.7L1.15 7l2.23 2.68a.5.5 0 1 1-.76.64l-2.5-3a.5.5 0 0 1 0-.64l2.5-3a.5.5 0 0 1 .7-.06Zm7.36 0a.5.5 0 0 0-.06.7L12.85 7l-2.23 2.68a.5.5 0 0 0 .76.64l2.5-3a.5.5 0 0 0 0-.64l-2.5-3a.5.5 0 0 0-.7-.06Z',
          })
        ),
        bold: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M3 2v1.5h1v7H3V12h5a3 3 0 0 0 1.8-5.4A2.74 2.74 0 0 0 8 2H3Zm5 5.5H5.5v3H8a1.5 1.5 0 1 0 0-3Zm-.25-4H5.5V6h2.25a1.25 1.25 0 1 0 0-2.5Z',
          })
        ),
        italic: a.createElement('path', {
          d: 'M5 2h6v1H8.5l-2 8H9v1H3v-1h2.5l2-8H5V2Z',
        }),
        paperclip: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M10.55 2.27a1.5 1.5 0 0 0-2.12 0L2.78 7.92a2.5 2.5 0 0 0 3.53 3.54l3.54-3.54a.5.5 0 1 1 .7.71l-3.53 3.54a3.5 3.5 0 0 1-4.96-4.94v-.01l5.66-5.66h.01a2.5 2.5 0 0 1 3.53 3.53L5.6 10.76a1.5 1.5 0 0 1-2.12-2.12L7.02 5.1a.5.5 0 1 1 .7.7L4.2 9.34a.5.5 0 0 0 .7.7l5.66-5.65a1.5 1.5 0 0 0 0-2.12Z',
          })
        ),
        listordered: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M5 2.5c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5ZM5 7c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 7Zm.5 4a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm-3-9H1v1h1v3h1V2.5a.5.5 0 0 0-.5-.5ZM3 8.5v1a.5.5 0 0 1-1 0V9h-.5a.5.5 0 0 1 0-1h1c.28 0 .5.22.5.5Zm-1 2a.5.5 0 0 0-1 0V12h2v-1H2v-.5Z',
          })
        ),
        listunordered: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M2.75 2.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM5.5 2a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm0 9a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7ZM2 12.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 7c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 7Zm-3 .75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z',
          })
        ),
        paragraph: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M6 7a3 3 0 1 1 0-6h5.5a.5.5 0 0 1 0 1H10v10.5a.5.5 0 0 1-1 0V2H7v10.5a.5.5 0 0 1-1 0V7Z',
          })
        ),
        markdown: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M2 4.5h1.5L5 6.38 6.5 4.5H8v5H6.5V7L5 8.88 3.5 7v2.5H2v-5Zm7.75 0h1.5V7h1.25l-2 2.5-2-2.5h1.25V4.5Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M.5 2a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H.5ZM1 3v8h12V3H1Z',
          })
        ),
        repository: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M5 2.5C5 2.77614 4.77614 3 4.5 3C4.22386 3 4 2.77614 4 2.5C4 2.22386 4.22386 2 4.5 2C4.77614 2 5 2.22386 5 2.5Z',
          }),
          a.createElement('path', {
            d: 'M4.5 5C4.77614 5 5 4.77614 5 4.5C5 4.22386 4.77614 4 4.5 4C4.22386 4 4 4.22386 4 4.5C4 4.77614 4.22386 5 4.5 5Z',
          }),
          a.createElement('path', {
            d: 'M5 6.5C5 6.77614 4.77614 7 4.5 7C4.22386 7 4 6.77614 4 6.5C4 6.22386 4.22386 6 4.5 6C4.77614 6 5 6.22386 5 6.5Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M11 0C12.1046 0 13 0.895431 13 2V12C13 13.1046 12.1046 14 11 14H1.5C1.22386 14 1 13.7761 1 13.5V0.5C1 0.223857 1.22386 0 1.5 0H11ZM11 1H3V13H11C11.5523 13 12 12.5523 12 12V2C12 1.44772 11.5523 1 11 1Z',
          })
        ),
        commit: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M3.03 7.5a4 4 0 0 0 7.94 0h2.53a.5.5 0 0 0 0-1h-2.53a4 4 0 0 0-7.94 0H.5a.5.5 0 0 0 0 1h2.53ZM7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
          })
        ),
        branch: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M6 2.5c0 .65-.42 1.2-1 1.41v4.06A3.36 3.36 0 0 1 7.5 7a2.7 2.7 0 0 0 1.81-.56c.22-.18.38-.4.48-.62a1.5 1.5 0 1 1 1.03.15c-.16.42-.43.87-.86 1.24-.57.47-1.37.79-2.46.79-1.04 0-1.64.42-2 .92-.26.37-.4.8-.47 1.18A1.5 1.5 0 1 1 4 10.09V3.9a1.5 1.5 0 1 1 2-1.4Zm-2 9a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm1-9a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm6 2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z',
          })
        ),
        pullrequest: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M8.35 1.35 7.71 2h.79A2.5 2.5 0 0 1 11 4.5v5.59a1.5 1.5 0 1 1-1 0V4.5C10 3.67 9.33 3 8.5 3h-.8l.65.65a.5.5 0 1 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5a.5.5 0 1 1 .7.7ZM11 11.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM4 3.91a1.5 1.5 0 1 0-1 0v6.18a1.5 1.5 0 1 0 1 0V3.9ZM3.5 11a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm0-8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z',
          })
        ),
        merge: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M4.1 3.87a1.5 1.5 0 1 0-1.1.04v6.18a1.5 1.5 0 1 0 1 0V6.4c.26.4.57.77.93 1.08A6.57 6.57 0 0 0 9.08 9a1.5 1.5 0 1 0 0-1 5.57 5.57 0 0 1-3.5-1.25 4.74 4.74 0 0 1-1.47-2.87ZM3.5 11a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1ZM4 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm7 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z',
          })
        ),
        apple: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M11.03 8.1a3.05 3.05 0 0 1-.2-1.74 2.7 2.7 0 0 1 1.4-1.94 3.13 3.13 0 0 0-2.35-1.4c-.84-.08-2.01.56-2.65.57h-.02c-.63 0-1.81-.65-2.64-.57-.42.04-1.75.32-2.55 1.6-.28.44-.5 1.01-.58 1.74a6.36 6.36 0 0 0 .02 1.74 7.5 7.5 0 0 0 1.35 3.33c.7 1.01 1.51 1.6 1.97 1.6.93.02 1.74-.6 2.41-.6l.02.01h.04c.67-.02 1.48.61 2.42.6.45-.02 1.26-.6 1.97-1.6a7.95 7.95 0 0 0 .97-1.86 2.6 2.6 0 0 1-1.58-1.48ZM8.86 2.13c.72-.85.7-2.07.63-2.12-.07-.06-1.25.16-1.99.98a2.78 2.78 0 0 0-.62 2.13c.06.05 1.27-.14 1.98-.99Z',
          })
        ),
        linux: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M7 0a3 3 0 0 1 3 3v1.24c.13.13.25.27.36.42l.52.43.2.15c.32.26.7.59 1.09.97A6.28 6.28 0 0 1 14 9.54a.5.5 0 0 1-.35.44c-.31.1-.8.18-1.34.13-.33-.03-.7-.12-1.05-.3-.04.17-.1.34-.17.51a2 2 0 1 1-2.89 2.56 5.5 5.5 0 0 1-2.4 0 2 2 0 1 1-2.9-2.56 5.56 5.56 0 0 1-.16-.51c-.35.18-.72.27-1.05.3a3.4 3.4 0 0 1-1.34-.13.5.5 0 0 1-.35-.44l.01-.14a6.28 6.28 0 0 1 1.82-3.2 13.42 13.42 0 0 1 1.3-1.11c.22-.19.4-.32.5-.43.12-.15.24-.29.37-.42V3a3 3 0 0 1 3-3Zm1 11.9a2 2 0 0 1 2.14-1.9 5.5 5.5 0 0 0 .36-2c0-.51-.1-1.07-.3-1.6l-.03-.02a4.4 4.4 0 0 0-.86-.42 6.71 6.71 0 0 0-1-.31l-.86.64c-.27.2-.63.2-.9 0l-.85-.64a6.72 6.72 0 0 0-1.87.73l-.03.02A4.6 4.6 0 0 0 3.5 8c0 .68.11 1.39.36 2H4a2 2 0 0 1 2 1.9 4.49 4.49 0 0 0 2 0ZM5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm6 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.1 4.3a1.5 1.5 0 0 1 1.8 0l.27.2L7 5.38 5.83 4.5l.27-.2ZM8.5 2c.28 0 .5.22.5.5V3a.5.5 0 0 1-1 0v-.5c0-.28.22-.5.5-.5ZM6 2.5a.5.5 0 0 0-1 0V3a.5.5 0 0 0 1 0v-.5Z',
          })
        ),
        ubuntu: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M12.26 2.07c0 1.14-.89 2.06-1.99 2.06s-1.99-.92-1.99-2.06c0-1.14.9-2.07 2-2.07s1.98.93 1.98 2.07ZM3.98 6.6c0 1.14-.9 2.07-2 2.07C.9 8.67 0 7.74 0 6.6c0-1.14.9-2.07 1.99-2.07 1.1 0 1.99.93 1.99 2.07ZM6.47 11.92a4.76 4.76 0 0 1-3.3-2.62c-.53.25-1.12.33-1.7.22a6.72 6.72 0 0 0 1.84 2.63 6.38 6.38 0 0 0 4.24 1.58c-.37-.5-.57-1.1-.59-1.73a4.77 4.77 0 0 1-.49-.08ZM11.81 11.93c0 1.14-.89 2.07-1.99 2.07s-1.98-.93-1.98-2.07c0-1.14.89-2.06 1.98-2.06 1.1 0 2 .92 2 2.06ZM12.6 11.17a6.93 6.93 0 0 0 .32-7.93A2.95 2.95 0 0 1 11.8 4.6a5.23 5.23 0 0 1-.16 5.03c.47.4.8.94.95 1.54ZM1.99 3.63h-.15A6.48 6.48 0 0 1 8 .24a3.07 3.07 0 0 0-.6 1.68 4.7 4.7 0 0 0-3.9 2.17c-.46-.3-.98-.45-1.51-.45Z',
          })
        ),
        windows: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M6.5 1H1v5.5h5.5V1ZM13 1H7.5v5.5H13V1ZM7.5 7.5H13V13H7.5V7.5ZM6.5 7.5H1V13h5.5V7.5Z',
          })
        ),
        storybook: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M2.04.62a.7.7 0 0 0-.66.72l.44 11.56c.01.37.3.66.67.68l9.4.42h.02a.7.7 0 0 0 .7-.7V.66a.7.7 0 0 0-.74-.66l-.77.05.05 1.62a.1.1 0 0 1-.17.08l-.52-.4-.61.46a.1.1 0 0 1-.17-.09L9.75.13l-7.7.49Zm8 4.74c-.24.2-2.09.33-2.09.05.04-1.04-.43-1.09-.69-1.09-.24 0-.66.08-.66.64 0 .57.6.89 1.32 1.27 1.02.53 2.24 1.18 2.24 2.82 0 1.57-1.27 2.43-2.9 2.43-1.67 0-3.14-.68-2.97-3.03.06-.27 2.2-.2 2.2 0-.03.97.19 1.26.75 1.26.43 0 .62-.24.62-.64 0-.6-.63-.95-1.36-1.36-.99-.56-2.15-1.2-2.15-2.7 0-1.5 1.03-2.5 2.86-2.5 1.83 0 2.84.99 2.84 2.85Z',
          })
        ),
        azuredevops: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'm0 5.18 1.31-1.73 4.9-2V.01l4.3 3.15-8.78 1.7v4.8L0 9.16V5.18Zm14-2.6v8.55l-3.36 2.86-5.42-1.79V14L1.73 9.66l8.78 1.05V3.16L14 2.58Z',
          })
        ),
        bitbucket: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M1 1.52A.41.41 0 0 0 .59 2l1.74 10.6c.05.26.28.46.55.46h8.37c.2 0 .38-.14.42-.34l1.01-6.25H8.81l-.46 2.71H5.68L4.95 5.4h7.91L13.4 2a.41.41 0 0 0-.41-.48H1Z',
          })
        ),
        chrome: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M13.02 3.43a.11.11 0 0 1-.1.17H7a3.4 3.4 0 0 0-3.3 2.55.11.11 0 0 1-.21.03L1.52 2.76a.11.11 0 0 1 0-.12 6.97 6.97 0 0 1 9-1.7c1.03.6 1.9 1.47 2.5 2.5ZM7 9.62a2.62 2.62 0 1 1 0-5.24 2.62 2.62 0 0 1 0 5.24Zm1.03.7a.11.11 0 0 0-.12-.04 3.4 3.4 0 0 1-4-1.84L1.1 3.57a.11.11 0 0 0-.2 0 7 7 0 0 0 5.07 10.35c.04 0 .08-.02.1-.05l1.97-3.42a.11.11 0 0 0 0-.13Zm1.43-5.95h3.95c.05 0 .1.03.1.07a6.97 6.97 0 0 1-1.53 7.48A6.96 6.96 0 0 1 7.08 14a.11.11 0 0 1-.1-.17l2.81-4.88h.01a3.38 3.38 0 0 0-.42-4.38.11.11 0 0 1 .08-.2Z',
          })
        ),
        chromatic: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M0 7a7 7 0 1 0 14 0A7 7 0 0 0 0 7Zm5.22-3.87a1.97 1.97 0 0 1 3.75.83v1.29L5.61 3.32a2.49 2.49 0 0 0-.4-.19ZM8.7 5.71 5.35 3.78a1.97 1.97 0 0 0-2.6 2.83c.12-.1.24-.18.37-.26l1.51-.87a.27.27 0 0 1 .27 0L7 6.69l1.7-.98Zm-.32 4.97-1.52-.87a.27.27 0 0 1-.13-.23V7.15l-1.7-.97v3.86a1.97 1.97 0 0 0 3.75.83 2.5 2.5 0 0 1-.4-.19Zm.26-.46a1.97 1.97 0 0 0 2.6-2.83c-.11.1-.23.18-.36.26L7.53 9.58l1.11.64Zm-4.1.26h-.17a1.97 1.97 0 0 1-1.9-2.47 2 2 0 0 1 .92-1.2l1.11-.63v3.86c0 .14.01.29.04.44Zm6.79-5.98a1.97 1.97 0 0 0-1.87-.97c.03.14.04.29.04.43v1.75c0 .1-.05.19-.14.23l-2.1 1.22V9.1l3.35-1.93a1.97 1.97 0 0 0 .72-2.68Z',
          })
        ),
        componentdriven: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M10.85 2.18 8.87.2a.69.69 0 0 0-.97 0L3.09 5.01a.69.69 0 0 0 0 .97l2.46 2.46-2.4 2.4a.69.69 0 0 0 0 .98l1.98 1.98c.27.27.7.27.97 0l4.8-4.81a.69.69 0 0 0 0-.97L8.45 5.56l2.4-2.4a.69.69 0 0 0 0-.98Z',
          })
        ),
        discord: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M11.85 2.88C10.95 2.48 10 2.18 9 2a7.05 7.05 0 0 0-.4.75 10.66 10.66 0 0 0-3.2 0c-.1-.23-.24-.5-.36-.73A.04.04 0 0 0 4.99 2a11.51 11.51 0 0 0-2.86.9 11.82 11.82 0 0 0-2.05 8 11.6 11.6 0 0 0 3.5 1.77c.01 0 .03 0 .04-.02.27-.36.51-.75.72-1.16a.04.04 0 0 0-.03-.06 7.66 7.66 0 0 1-1.09-.52.04.04 0 0 1 0-.08 5.96 5.96 0 0 0 .26-.17 8.28 8.28 0 0 0 7.08 0l.22.17c.02.02.02.06 0 .08-.36.2-.72.37-1.1.52a.04.04 0 0 0-.02.06c.2.4.45.8.71 1.16.01.02.03.02.05.02a11.57 11.57 0 0 0 3.52-1.8 11.74 11.74 0 0 0-2.09-7.99Zm-7.17 6.4c-.7 0-1.26-.63-1.26-1.41 0-.78.56-1.41 1.26-1.41s1.27.64 1.26 1.4c0 .79-.56 1.42-1.26 1.42Zm4.65 0c-.69 0-1.26-.63-1.26-1.41 0-.78.56-1.41 1.26-1.41s1.27.64 1.26 1.4c0 .79-.55 1.42-1.26 1.42Z',
          })
        ),
        facebook: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M7.4 14H5.06V7H3.5V4.59h1.56V3.17C5.06 1.2 5.53 0 7.6 0h1.72v2.41H8.25c-.8 0-.85.34-.85.97v1.2h1.93L9.11 7H7.4l-.01 7Z',
          })
        ),
        figma: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M9.2 0H4.8a2.6 2.6 0 0 0-1.4 4.8 2.6 2.6 0 0 0 0 4.4 2.6 2.6 0 1 0 4 2.2V8.89a2.6 2.6 0 1 0 3.2-4.09A2.6 2.6 0 0 0 9.2 0ZM7.4 7A1.8 1.8 0 1 0 11 7a1.8 1.8 0 0 0-3.6 0Zm-.8 2.6H4.8a1.8 1.8 0 1 0 1.8 1.8V9.6ZM4.8 4.4h1.8V.8H4.8a1.8 1.8 0 0 0 0 3.59Zm0 .8a1.8 1.8 0 0 0 0 3.6h1.8V5.2H4.8Zm4.4-.8H7.4V.8h1.8a1.8 1.8 0 1 1 0 3.59Z',
          })
        ),
        gdrive: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M6.37 8.77 4.33 12.3h6.75l2.04-3.54H6.38Zm6.18-1-3.5-6.08h-4.1l3.51 6.08h4.09ZM4.38 2.7.88 8.77l2.04 3.54 3.5-6.07L4.38 2.7Z',
          })
        ),
        github: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M7 0a7 7 0 0 0-2.21 13.64c.35.06.48-.15.48-.33L5.26 12c-1.76.32-2.21-.43-2.35-.83-.08-.2-.43-.82-.72-.99-.25-.13-.6-.45-.01-.46.55 0 .94.5 1.07.72.63 1.06 1.64.76 2.04.58.07-.46.25-.77.45-.94-1.56-.18-3.19-.78-3.19-3.46 0-.76.28-1.39.72-1.88-.07-.17-.31-.9.07-1.85 0 0 .59-.19 1.93.71a6.5 6.5 0 0 1 3.5 0c1.34-.9 1.92-.71 1.92-.71.39.96.14 1.68.07 1.85.45.5.72 1.11.72 1.88 0 2.69-1.64 3.28-3.2 3.46.26.22.48.64.48 1.3l-.01 1.92c0 .18.13.4.48.33A7.01 7.01 0 0 0 7 0Z',
          })
        ),
        gitlab: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M4.53 5.58H1.07l1.49-4.55a.26.26 0 0 1 .48 0l1.49 4.55ZM7 13.15 1.07 5.58l-.75 2.3a.5.5 0 0 0 .18.57l6.5 4.7Zm0 0 6.5-4.7a.5.5 0 0 0 .18-.57l-.75-2.3L7 13.15l2.47-7.57H4.53L7 13.15Zm2.47-7.57h3.46l-1.49-4.55a.26.26 0 0 0-.48 0L9.47 5.58Z',
          })
        ),
        google: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M10.92 1.1H7.26c-1.64 0-3.19 1.24-3.19 2.68 0 1.47 1.12 2.66 2.8 2.66l.33-.01c-.1.2-.18.44-.18.68 0 .41.22.75.5 1.02h-.64c-2.03 0-3.6 1.3-3.6 2.64 0 1.32 1.72 2.15 3.75 2.15 2.32 0 3.6-1.31 3.6-2.64 0-1.06-.31-1.7-1.28-2.38-.33-.23-.96-.8-.96-1.14 0-.39.1-.58.7-1.04a2.46 2.46 0 0 0 1.03-1.92c0-.92-.4-1.82-1.18-2.11h1.17l.81-.6ZM9.6 10.04c.03.13.05.25.05.38 0 1.07-.7 1.9-2.67 1.9-1.4 0-2.42-.88-2.42-1.95 0-1.05 1.26-1.92 2.66-1.9a3 3 0 0 1 .92.14c.76.53 1.3.83 1.46 1.43ZM7.34 6.07c-.94-.03-1.84-1.06-2-2.3-.17-1.24.47-2.19 1.41-2.16.94.03 1.84 1.03 2 2.26.17 1.24-.47 2.23-1.41 2.2Z',
          })
        ),
        graphql: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M7.87 11.6a1.17 1.17 0 0 0-1.7-.02l-2.71-1.56.01-.04h7.07l.02.07-2.69 1.56Zm-1.7-9.18.03.03-3.54 6.12h-.04V5.43a1.17 1.17 0 0 0 .84-1.46l2.7-1.56Zm4.38 1.56a1.17 1.17 0 0 0 .84 1.46v3.12l-.04.01-3.54-6.12c.02 0 .03-.02.04-.03l2.7 1.56ZM3.47 9.42a1.17 1.17 0 0 0-.32-.57l3.53-6.12a1.17 1.17 0 0 0 .65 0l3.54 6.12a1.17 1.17 0 0 0-.33.57H3.47Zm8.8-.74c-.1-.05-.21-.1-.32-.12V5.44a1.17 1.17 0 1 0-1.12-1.94l-2.7-1.56a1.17 1.17 0 1 0-2.24 0L3.19 3.5a1.17 1.17 0 1 0-1.13 1.94v3.12a1.17 1.17 0 1 0 1.12 1.94l2.7 1.56a1.17 1.17 0 1 0 2.24-.03l2.69-1.55a1.17 1.17 0 1 0 1.45-1.8Z',
          })
        ),
        medium: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M0 0v14h14V0H0Zm11.63 3.32-.75.72a.22.22 0 0 0-.08.2v5.33c0 .07.03.14.08.18l.73.72v.16H7.92v-.16l.76-.74c.08-.07.08-.1.08-.21V5.24l-2.11 5.37h-.29L3.9 5.24v3.67c0 .13.05.25.14.34l.99 1.2v.16h-2.8v-.16l.98-1.2a.48.48 0 0 0 .13-.41V4.65c0-.11-.04-.2-.12-.27l-.88-1.06v-.16h2.73l2.1 4.62 1.86-4.62h2.6v.16Z',
          })
        ),
        redux: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M4.06 9.69c.02.49.42.88.91.88H5a.91.91 0 0 0-.03-1.83h-.03c-.03 0-.08 0-.11.02a5.97 5.97 0 0 1-.85-3.62c.06-.98.39-1.82.96-2.52.47-.6 1.39-.9 2-.92 1.73-.03 2.47 2.12 2.51 2.99.22.04.57.16.82.24-.2-2.64-1.83-4-3.4-4-1.46 0-2.81 1.05-3.35 2.61a6.67 6.67 0 0 0 .65 5.68.74.74 0 0 0-.11.47Zm8.28-2.3a6.62 6.62 0 0 0-5.15-2.25h-.26a.9.9 0 0 0-.8-.49H6.1a.91.91 0 0 0 .03 1.83h.03a.92.92 0 0 0 .8-.56h.3c1.23 0 2.4.36 3.47 1.06.81.54 1.4 1.24 1.72 2.09.28.68.26 1.35-.03 1.92a2.4 2.4 0 0 1-2.23 1.34c-.65 0-1.27-.2-1.6-.34-.18.16-.5.42-.73.58.7.33 1.41.5 2.1.5 1.56 0 2.72-.85 3.16-1.72.47-.94.44-2.57-.78-3.96ZM4.9 12.9a4 4 0 0 1-.98.11c-1.2 0-2.3-.5-2.84-1.32C.38 10.6.13 8.3 2.5 6.58c.05.26.15.62.22.83-.31.23-.8.68-1.11 1.3a2.4 2.4 0 0 0 .13 2.53c.36.54.93.86 1.66.96.9.11 1.8-.05 2.66-.5a5.83 5.83 0 0 0 2.67-2.56.91.91 0 0 1 .62-1.55h.03a.92.92 0 0 1 .1 1.82 6.26 6.26 0 0 1-4.56 3.49Z',
          })
        ),
        twitter: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M14 2.55c-.51.23-1.07.39-1.65.46.6-.36 1.05-.94 1.26-1.63-.55.34-1.17.58-1.82.72a2.84 2.84 0 0 0-2.1-.93 2.9 2.9 0 0 0-2.8 3.61 8.09 8.09 0 0 1-5.9-3.07 2.99 2.99 0 0 0 .88 3.93 2.8 2.8 0 0 1-1.3-.37v.04c0 1.42 1 2.61 2.3 2.89a2.82 2.82 0 0 1-1.3.05 2.89 2.89 0 0 0 2.7 2.04A5.67 5.67 0 0 1 0 11.51a7.98 7.98 0 0 0 4.4 1.32c5.29 0 8.17-4.48 8.17-8.38v-.38A5.93 5.93 0 0 0 14 2.55Z',
          })
        ),
        youtube: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M13.99 8.17V5.83a14.95 14.95 0 0 0-.23-2.22c-.09-.38-.27-.7-.55-.96s-.6-.41-.97-.45A51.3 51.3 0 0 0 7 2c-2.34 0-4.09.07-5.24.2A1.78 1.78 0 0 0 .25 3.61 15.26 15.26 0 0 0 0 7v1.16a15.24 15.24 0 0 0 .24 2.22c.09.38.27.7.55.96.27.26.6.41.97.45 1.15.13 2.9.2 5.24.2 2.34 0 4.08-.06 5.24-.2.37-.04.7-.19.97-.45s.45-.58.54-.96a15.26 15.26 0 0 0 .24-2.22Zm-4.23-1.6c.16.1.24.24.24.43 0 .2-.08.33-.24.42l-4 2.5a.44.44 0 0 1-.26.08.54.54 0 0 1-.24-.06A.46.46 0 0 1 5 9.5v-5c0-.2.08-.34.26-.44.17-.1.34-.09.5.02l4 2.5Z',
          })
        ),
        linkedin: a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M11.6667 13H2.33333C1.59695 13 1 12.403 1 11.6667V2.33333C1 1.59695 1.59695 1 2.33333 1H11.6667C12.403 1 13 1.59695 13 2.33333V11.6667C13 12.403 12.403 13 11.6667 13ZM9.55293 11.3333H11.3337V7.67516C11.3337 6.12737 10.4563 5.379 9.23075 5.379C8.00467 5.379 7.48867 6.33378 7.48867 6.33378V5.55552H5.77255V11.3333H7.48867V8.30031C7.48867 7.48764 7.86276 7.00405 8.57878 7.00405C9.23696 7.00405 9.55293 7.46875 9.55293 8.30031V11.3333ZM2.66699 3.73279C2.66699 4.32157 3.14067 4.79896 3.72522 4.79896C4.30977 4.79896 4.78316 4.32157 4.78316 3.73279C4.78316 3.14402 4.30977 2.66663 3.72522 2.66663C3.14067 2.66663 2.66699 3.14402 2.66699 3.73279ZM4.62856 11.3333H2.83908V5.55552H4.62856V11.3333Z',
          fill: '#1EA7FD',
        }),
        vscode: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M10.24.04c.13 0 .26.03.38.09L13.5 1.5a.87.87 0 0 1 .5.8v.03-.01 9.39c0 .33-.2.63-.5.78l-2.88 1.38a.87.87 0 0 1-1-.17l-5.5-5.03-2.4 1.83a.58.58 0 0 1-.75-.04l-.77-.7a.58.58 0 0 1 0-.86L2.27 7 .2 5.1a.58.58 0 0 1 0-.86l.77-.7c.21-.2.52-.2.75-.04l2.4 1.83L9.63.3a.87.87 0 0 1 .61-.26Zm.26 3.78L6.32 7l4.18 3.18V3.82Z',
          })
        ),
      },
      h5 = w.svg({
        display: 'inline-block',
        shapeRendering: 'inherit',
        transform: 'translate3d(0, 0, 0)',
        verticalAlign: 'middle',
        path: { fill: 'currentColor' },
      }),
      lo = ({ icon: e, ...t }) =>
        a.createElement(
          h5,
          { viewBox: '0 0 14 14', width: '14px', height: '14px', ...t },
          a.createElement(a.Fragment, null, p5[e])
        );
    function Xa() {
      return (
        (Xa = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        Xa.apply(this, arguments)
      );
    }
    function f5(e) {
      if (e === void 0)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function la(e, t) {
      return (
        (la = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (n, r) {
              return (n.__proto__ = r), n;
            }),
        la(e, t)
      );
    }
    function g5(e, t) {
      (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        la(e, t);
    }
    function _i(e) {
      return (
        (_i = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            }),
        _i(e)
      );
    }
    function v5(e) {
      try {
        return Function.toString.call(e).indexOf('[native code]') !== -1;
      } catch {
        return typeof e == 'function';
      }
    }
    function Y1() {
      try {
        var e = !Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        );
      } catch {}
      return (Y1 = function () {
        return !!e;
      })();
    }
    function y5(e, t, n) {
      if (Y1()) return Reflect.construct.apply(null, arguments);
      var r = [null];
      r.push.apply(r, t);
      var i = new (e.bind.apply(e, r))();
      return n && la(i, n.prototype), i;
    }
    function Ti(e) {
      var t = typeof Map == 'function' ? new Map() : void 0;
      return (
        (Ti = function (n) {
          if (n === null || !v5(n)) return n;
          if (typeof n != 'function')
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          if (typeof t < 'u') {
            if (t.has(n)) return t.get(n);
            t.set(n, r);
          }
          function r() {
            return y5(n, arguments, _i(this).constructor);
          }
          return (
            (r.prototype = Object.create(n.prototype, {
              constructor: {
                value: r,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            la(r, n)
          );
        }),
        Ti(e)
      );
    }
    var ft = (function (e) {
      g5(t, e);
      function t(n) {
        var r;
        return (
          (r =
            e.call(
              this,
              'An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#' +
                n +
                ' for more information.'
            ) || this),
          f5(r)
        );
      }
      return t;
    })(Ti(Error));
    function ui(e) {
      return Math.round(e * 255);
    }
    function b5(e, t, n) {
      return ui(e) + ',' + ui(t) + ',' + ui(n);
    }
    function sa(e, t, n, r) {
      if ((r === void 0 && (r = b5), t === 0)) return r(n, n, n);
      var i = (((e % 360) + 360) % 360) / 60,
        o = (1 - Math.abs(2 * n - 1)) * t,
        l = o * (1 - Math.abs((i % 2) - 1)),
        s = 0,
        c = 0,
        d = 0;
      i >= 0 && i < 1
        ? ((s = o), (c = l))
        : i >= 1 && i < 2
        ? ((s = l), (c = o))
        : i >= 2 && i < 3
        ? ((c = o), (d = l))
        : i >= 3 && i < 4
        ? ((c = l), (d = o))
        : i >= 4 && i < 5
        ? ((s = l), (d = o))
        : i >= 5 && i < 6 && ((s = o), (d = l));
      var u = n - o / 2,
        m = s + u,
        p = c + u,
        v = d + u;
      return r(m, p, v);
    }
    var ll = {
      aliceblue: 'f0f8ff',
      antiquewhite: 'faebd7',
      aqua: '00ffff',
      aquamarine: '7fffd4',
      azure: 'f0ffff',
      beige: 'f5f5dc',
      bisque: 'ffe4c4',
      black: '000',
      blanchedalmond: 'ffebcd',
      blue: '0000ff',
      blueviolet: '8a2be2',
      brown: 'a52a2a',
      burlywood: 'deb887',
      cadetblue: '5f9ea0',
      chartreuse: '7fff00',
      chocolate: 'd2691e',
      coral: 'ff7f50',
      cornflowerblue: '6495ed',
      cornsilk: 'fff8dc',
      crimson: 'dc143c',
      cyan: '00ffff',
      darkblue: '00008b',
      darkcyan: '008b8b',
      darkgoldenrod: 'b8860b',
      darkgray: 'a9a9a9',
      darkgreen: '006400',
      darkgrey: 'a9a9a9',
      darkkhaki: 'bdb76b',
      darkmagenta: '8b008b',
      darkolivegreen: '556b2f',
      darkorange: 'ff8c00',
      darkorchid: '9932cc',
      darkred: '8b0000',
      darksalmon: 'e9967a',
      darkseagreen: '8fbc8f',
      darkslateblue: '483d8b',
      darkslategray: '2f4f4f',
      darkslategrey: '2f4f4f',
      darkturquoise: '00ced1',
      darkviolet: '9400d3',
      deeppink: 'ff1493',
      deepskyblue: '00bfff',
      dimgray: '696969',
      dimgrey: '696969',
      dodgerblue: '1e90ff',
      firebrick: 'b22222',
      floralwhite: 'fffaf0',
      forestgreen: '228b22',
      fuchsia: 'ff00ff',
      gainsboro: 'dcdcdc',
      ghostwhite: 'f8f8ff',
      gold: 'ffd700',
      goldenrod: 'daa520',
      gray: '808080',
      green: '008000',
      greenyellow: 'adff2f',
      grey: '808080',
      honeydew: 'f0fff0',
      hotpink: 'ff69b4',
      indianred: 'cd5c5c',
      indigo: '4b0082',
      ivory: 'fffff0',
      khaki: 'f0e68c',
      lavender: 'e6e6fa',
      lavenderblush: 'fff0f5',
      lawngreen: '7cfc00',
      lemonchiffon: 'fffacd',
      lightblue: 'add8e6',
      lightcoral: 'f08080',
      lightcyan: 'e0ffff',
      lightgoldenrodyellow: 'fafad2',
      lightgray: 'd3d3d3',
      lightgreen: '90ee90',
      lightgrey: 'd3d3d3',
      lightpink: 'ffb6c1',
      lightsalmon: 'ffa07a',
      lightseagreen: '20b2aa',
      lightskyblue: '87cefa',
      lightslategray: '789',
      lightslategrey: '789',
      lightsteelblue: 'b0c4de',
      lightyellow: 'ffffe0',
      lime: '0f0',
      limegreen: '32cd32',
      linen: 'faf0e6',
      magenta: 'f0f',
      maroon: '800000',
      mediumaquamarine: '66cdaa',
      mediumblue: '0000cd',
      mediumorchid: 'ba55d3',
      mediumpurple: '9370db',
      mediumseagreen: '3cb371',
      mediumslateblue: '7b68ee',
      mediumspringgreen: '00fa9a',
      mediumturquoise: '48d1cc',
      mediumvioletred: 'c71585',
      midnightblue: '191970',
      mintcream: 'f5fffa',
      mistyrose: 'ffe4e1',
      moccasin: 'ffe4b5',
      navajowhite: 'ffdead',
      navy: '000080',
      oldlace: 'fdf5e6',
      olive: '808000',
      olivedrab: '6b8e23',
      orange: 'ffa500',
      orangered: 'ff4500',
      orchid: 'da70d6',
      palegoldenrod: 'eee8aa',
      palegreen: '98fb98',
      paleturquoise: 'afeeee',
      palevioletred: 'db7093',
      papayawhip: 'ffefd5',
      peachpuff: 'ffdab9',
      peru: 'cd853f',
      pink: 'ffc0cb',
      plum: 'dda0dd',
      powderblue: 'b0e0e6',
      purple: '800080',
      rebeccapurple: '639',
      red: 'f00',
      rosybrown: 'bc8f8f',
      royalblue: '4169e1',
      saddlebrown: '8b4513',
      salmon: 'fa8072',
      sandybrown: 'f4a460',
      seagreen: '2e8b57',
      seashell: 'fff5ee',
      sienna: 'a0522d',
      silver: 'c0c0c0',
      skyblue: '87ceeb',
      slateblue: '6a5acd',
      slategray: '708090',
      slategrey: '708090',
      snow: 'fffafa',
      springgreen: '00ff7f',
      steelblue: '4682b4',
      tan: 'd2b48c',
      teal: '008080',
      thistle: 'd8bfd8',
      tomato: 'ff6347',
      turquoise: '40e0d0',
      violet: 'ee82ee',
      wheat: 'f5deb3',
      white: 'fff',
      whitesmoke: 'f5f5f5',
      yellow: 'ff0',
      yellowgreen: '9acd32',
    };
    function E5(e) {
      if (typeof e != 'string') return e;
      var t = e.toLowerCase();
      return ll[t] ? '#' + ll[t] : e;
    }
    var k5 = /^#[a-fA-F0-9]{6}$/,
      w5 = /^#[a-fA-F0-9]{8}$/,
      C5 = /^#[a-fA-F0-9]{3}$/,
      x5 = /^#[a-fA-F0-9]{4}$/,
      mi =
        /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
      S5 =
        /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
      M5 =
        /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
      N5 =
        /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
    function Q1(e) {
      if (typeof e != 'string') throw new ft(3);
      var t = E5(e);
      if (t.match(k5))
        return {
          red: parseInt('' + t[1] + t[2], 16),
          green: parseInt('' + t[3] + t[4], 16),
          blue: parseInt('' + t[5] + t[6], 16),
        };
      if (t.match(w5)) {
        var n = parseFloat((parseInt('' + t[7] + t[8], 16) / 255).toFixed(2));
        return {
          red: parseInt('' + t[1] + t[2], 16),
          green: parseInt('' + t[3] + t[4], 16),
          blue: parseInt('' + t[5] + t[6], 16),
          alpha: n,
        };
      }
      if (t.match(C5))
        return {
          red: parseInt('' + t[1] + t[1], 16),
          green: parseInt('' + t[2] + t[2], 16),
          blue: parseInt('' + t[3] + t[3], 16),
        };
      if (t.match(x5)) {
        var r = parseFloat((parseInt('' + t[4] + t[4], 16) / 255).toFixed(2));
        return {
          red: parseInt('' + t[1] + t[1], 16),
          green: parseInt('' + t[2] + t[2], 16),
          blue: parseInt('' + t[3] + t[3], 16),
          alpha: r,
        };
      }
      var i = mi.exec(t);
      if (i)
        return {
          red: parseInt('' + i[1], 10),
          green: parseInt('' + i[2], 10),
          blue: parseInt('' + i[3], 10),
        };
      var o = S5.exec(t.substring(0, 50));
      if (o)
        return {
          red: parseInt('' + o[1], 10),
          green: parseInt('' + o[2], 10),
          blue: parseInt('' + o[3], 10),
          alpha:
            parseFloat('' + o[4]) > 1
              ? parseFloat('' + o[4]) / 100
              : parseFloat('' + o[4]),
        };
      var l = M5.exec(t);
      if (l) {
        var s = parseInt('' + l[1], 10),
          c = parseInt('' + l[2], 10) / 100,
          d = parseInt('' + l[3], 10) / 100,
          u = 'rgb(' + sa(s, c, d) + ')',
          m = mi.exec(u);
        if (!m) throw new ft(4, t, u);
        return {
          red: parseInt('' + m[1], 10),
          green: parseInt('' + m[2], 10),
          blue: parseInt('' + m[3], 10),
        };
      }
      var p = N5.exec(t.substring(0, 50));
      if (p) {
        var v = parseInt('' + p[1], 10),
          h = parseInt('' + p[2], 10) / 100,
          b = parseInt('' + p[3], 10) / 100,
          k = 'rgb(' + sa(v, h, b) + ')',
          y = mi.exec(k);
        if (!y) throw new ft(4, t, k);
        return {
          red: parseInt('' + y[1], 10),
          green: parseInt('' + y[2], 10),
          blue: parseInt('' + y[3], 10),
          alpha:
            parseFloat('' + p[4]) > 1
              ? parseFloat('' + p[4]) / 100
              : parseFloat('' + p[4]),
        };
      }
      throw new ft(5);
    }
    function F5(e) {
      var t = e.red / 255,
        n = e.green / 255,
        r = e.blue / 255,
        i = Math.max(t, n, r),
        o = Math.min(t, n, r),
        l = (i + o) / 2;
      if (i === o)
        return e.alpha !== void 0
          ? { hue: 0, saturation: 0, lightness: l, alpha: e.alpha }
          : { hue: 0, saturation: 0, lightness: l };
      var s,
        c = i - o,
        d = l > 0.5 ? c / (2 - i - o) : c / (i + o);
      switch (i) {
        case t:
          s = (n - r) / c + (n < r ? 6 : 0);
          break;
        case n:
          s = (r - t) / c + 2;
          break;
        default:
          s = (t - n) / c + 4;
          break;
      }
      return (
        (s *= 60),
        e.alpha !== void 0
          ? { hue: s, saturation: d, lightness: l, alpha: e.alpha }
          : { hue: s, saturation: d, lightness: l }
      );
    }
    function K1(e) {
      return F5(Q1(e));
    }
    var A5 = function (e) {
        return e.length === 7 && e[1] === e[2] && e[3] === e[4] && e[5] === e[6]
          ? '#' + e[1] + e[3] + e[5]
          : e;
      },
      Zi = A5;
    function Wt(e) {
      var t = e.toString(16);
      return t.length === 1 ? '0' + t : t;
    }
    function pi(e) {
      return Wt(Math.round(e * 255));
    }
    function O5(e, t, n) {
      return Zi('#' + pi(e) + pi(t) + pi(n));
    }
    function er(e, t, n) {
      return sa(e, t, n, O5);
    }
    function L5(e, t, n) {
      if (typeof e == 'number' && typeof t == 'number' && typeof n == 'number')
        return er(e, t, n);
      if (typeof e == 'object' && t === void 0 && n === void 0)
        return er(e.hue, e.saturation, e.lightness);
      throw new ft(1);
    }
    function _5(e, t, n, r) {
      if (
        typeof e == 'number' &&
        typeof t == 'number' &&
        typeof n == 'number' &&
        typeof r == 'number'
      )
        return r >= 1 ? er(e, t, n) : 'rgba(' + sa(e, t, n) + ',' + r + ')';
      if (typeof e == 'object' && t === void 0 && n === void 0 && r === void 0)
        return e.alpha >= 1
          ? er(e.hue, e.saturation, e.lightness)
          : 'rgba(' +
              sa(e.hue, e.saturation, e.lightness) +
              ',' +
              e.alpha +
              ')';
      throw new ft(2);
    }
    function Ii(e, t, n) {
      if (typeof e == 'number' && typeof t == 'number' && typeof n == 'number')
        return Zi('#' + Wt(e) + Wt(t) + Wt(n));
      if (typeof e == 'object' && t === void 0 && n === void 0)
        return Zi('#' + Wt(e.red) + Wt(e.green) + Wt(e.blue));
      throw new ft(6);
    }
    function Ri(e, t, n, r) {
      if (typeof e == 'string' && typeof t == 'number') {
        var i = Q1(e);
        return 'rgba(' + i.red + ',' + i.green + ',' + i.blue + ',' + t + ')';
      } else {
        if (
          typeof e == 'number' &&
          typeof t == 'number' &&
          typeof n == 'number' &&
          typeof r == 'number'
        )
          return r >= 1
            ? Ii(e, t, n)
            : 'rgba(' + e + ',' + t + ',' + n + ',' + r + ')';
        if (
          typeof e == 'object' &&
          t === void 0 &&
          n === void 0 &&
          r === void 0
        )
          return e.alpha >= 1
            ? Ii(e.red, e.green, e.blue)
            : 'rgba(' +
                e.red +
                ',' +
                e.green +
                ',' +
                e.blue +
                ',' +
                e.alpha +
                ')';
      }
      throw new ft(7);
    }
    var T5 = function (e) {
        return (
          typeof e.red == 'number' &&
          typeof e.green == 'number' &&
          typeof e.blue == 'number' &&
          (typeof e.alpha != 'number' || typeof e.alpha > 'u')
        );
      },
      Z5 = function (e) {
        return (
          typeof e.red == 'number' &&
          typeof e.green == 'number' &&
          typeof e.blue == 'number' &&
          typeof e.alpha == 'number'
        );
      },
      I5 = function (e) {
        return (
          typeof e.hue == 'number' &&
          typeof e.saturation == 'number' &&
          typeof e.lightness == 'number' &&
          (typeof e.alpha != 'number' || typeof e.alpha > 'u')
        );
      },
      R5 = function (e) {
        return (
          typeof e.hue == 'number' &&
          typeof e.saturation == 'number' &&
          typeof e.lightness == 'number' &&
          typeof e.alpha == 'number'
        );
      };
    function J1(e) {
      if (typeof e != 'object') throw new ft(8);
      if (Z5(e)) return Ri(e);
      if (T5(e)) return Ii(e);
      if (R5(e)) return _5(e);
      if (I5(e)) return L5(e);
      throw new ft(8);
    }
    function X1(e, t, n) {
      return function () {
        var r = n.concat(Array.prototype.slice.call(arguments));
        return r.length >= t ? e.apply(this, r) : X1(e, t, r);
      };
    }
    function e0(e) {
      return X1(e, e.length, []);
    }
    function t0(e, t, n) {
      return Math.max(e, Math.min(t, n));
    }
    function B5(e, t) {
      if (t === 'transparent') return t;
      var n = K1(t);
      return J1(
        Xa({}, n, { lightness: t0(0, 1, n.lightness - parseFloat(e)) })
      );
    }
    var P5 = e0(B5),
      Gt = P5;
    function V5(e, t) {
      if (t === 'transparent') return t;
      var n = K1(t);
      return J1(
        Xa({}, n, { lightness: t0(0, 1, n.lightness + parseFloat(e)) })
      );
    }
    var j5 = e0(V5),
      Qa = j5,
      D = {
        primary: '#FF4785',
        secondary: '#029CFD',
        tertiary: '#E3E6E8',
        orange: '#FC521F',
        gold: '#FFAE00',
        green: '#66BF3C',
        seafoam: '#37D5D3',
        purple: '#6F2CAC',
        ultraviolet: '#2A0481',
        red: '#ff4400',
        bluelight: '#E3F3FF',
        bluelighter: '#F5FBFF',
        lightest: '#FFFFFF',
        lighter: '#F7FAFC',
        light: '#EEF3F6',
        mediumlight: '#ECF4F9',
        medium: '#D9E8F2',
        mediumdark: '#73828C',
        dark: '#5C6870',
        darker: '#454E54',
        darkest: '#2E3438',
        tr10: 'rgba(0, 0, 0, 0.1)',
        tr5: 'rgba(0, 0, 0, 0.05)',
        border: 'hsla(203, 50%, 30%, 0.15)',
        positive: '#448028',
        negative: '#D43900',
        warning: '#A15C20',
        selected: '#0271B6',
      },
      so = {
        padding: { small: 10, medium: 20, large: 30 },
        borderRadius: { small: 5, default: 10 },
      },
      H = {
        type: {
          primary:
            'var(--nunito-sans, "Nunito Sans"), "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
          code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
        },
        weight: { regular: '400', bold: '700', extrabold: '800' },
        size: {
          s1: 12,
          s2: 14,
          s3: 16,
          m1: 20,
          m2: 24,
          m3: 28,
          l1: 32,
          l2: 40,
          l3: 48,
          code: 90,
        },
      },
      Pa = 600,
      Va = 5.55555;
    se({
      padding: `0 ${so.padding.medium}px`,
      [`@media (min-width: ${Pa * 1}px)`]: { margin: `0 ${Va * 1}%` },
      [`@media (min-width: ${Pa * 2}px)`]: { margin: `0 ${Va * 2}%` },
      [`@media (min-width: ${Pa * 3}px)`]: { margin: `0 ${Va * 3}%` },
      [`@media (min-width: ${Pa * 4}px)`]: { margin: `0 ${Va * 4}%` },
    });
    se({
      border: `1px solid ${D.border}`,
      borderRadius: `${so.borderRadius.small}px`,
      transition:
        'background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out',
      '&:hover, &.__hover': {
        borderColor: `${Ri(D.secondary, 0.5)}`,
        transform: 'translate3d(0, -3px, 0)',
        boxShadow: 'rgba(0, 0, 0, 0.08) 0 3px 10px 0',
      },
      '&:active, &.__active': {
        borderColor: `${Ri(D.secondary, 1)}`,
        transform: 'translate3d(0, 0, 0)',
      },
    });
    se({ fontSize: H.size.l3, fontWeight: H.weight.bold }),
      se({ fontSize: H.size.l2, fontWeight: H.weight.bold }),
      se({ fontSize: H.size.l1, fontWeight: H.weight.bold }),
      se({ fontSize: H.size.m3, fontWeight: H.weight.bold }),
      se({ fontSize: H.size.m2, fontWeight: H.weight.bold }),
      se({ fontSize: H.size.m1, fontWeight: H.weight.bold }),
      se({ fontSize: H.size.s3, fontWeight: H.weight.bold }),
      se({ fontSize: H.size.s2, fontWeight: H.weight.bold });
    se({
      fontSize: 14,
      fontWeight: H.weight.extrabold,
      lineHeight: '18px',
      letterSpacing: '0.38em',
    }),
      se({
        fontSize: 11,
        fontWeight: H.weight.extrabold,
        lineHeight: '16px',
        letterSpacing: '0.38em',
      });
    se({ fontSize: 14, fontWeight: H.weight.bold, lineHeight: '18px' }),
      se({ fontSize: 14, fontWeight: H.weight.regular, lineHeight: '18px' }),
      se({
        fontSize: H.size.s3,
        fontWeight: H.weight.bold,
        lineHeight: '24px',
      }),
      se({
        fontSize: H.size.s1,
        fontWeight: H.weight.regular,
        lineHeight: '18px',
      }),
      se({
        fontSize: H.size.s2,
        fontWeight: H.weight.bold,
        lineHeight: '20px',
      }),
      se({
        fontSize: H.size.s1,
        fontWeight: H.weight.bold,
        lineHeight: '18px',
      }),
      se({
        fontSize: H.size.s3,
        fontWeight: H.weight.regular,
        lineHeight: '24px',
      }),
      se({
        fontSize: H.size.s2,
        fontWeight: H.weight.regular,
        lineHeight: '20px',
      });
    se({
      fontFamily: H.type.code,
      fontSize: H.size.s2,
      fontWeight: H.weight.regular,
      lineHeight: '17px',
    }),
      se({
        fontFamily: H.type.code,
        fontSize: H.size.s1,
        fontWeight: H.weight.regular,
        lineHeight: '14px',
      });
    var n0 = Zt({
        from: { transform: 'rotate(0deg)' },
        to: { transform: 'rotate(360deg)' },
      }),
      a0 = Zt({ '0%, 100%': { opacity: 1 }, '50%': { opacity: 0.4 } });
    Zt({
      '0%': { transform: 'translateY(1px)' },
      '25%': { transform: 'translateY(0px)' },
      '50%': { transform: 'translateY(-3px)' },
      '100%': { transform: 'translateY(1px)' },
    });
    var H5 = Zt({
      '0%, 100%': { transform: 'translate3d(0,0,0)' },
      '12.5%, 62.5%': { transform: 'translate3d(-4px,0,0)' },
      '37.5%, 87.5%': { transform: 'translate3d(4px,0,0)' },
    });
    Zt({
      '0%': { transform: 'rotate(-3deg)' },
      '1.68421%': { transform: 'rotate(3deg)' },
      '2.10526%': { transform: 'rotate(6deg)' },
      '3.78947%': { transform: 'rotate(-6deg)' },
      '4.21053%': { transform: 'rotate(-6deg)' },
      '5.89474%': { transform: 'rotate(6deg)' },
      '6.31579%': { transform: 'rotate(6deg)' },
      '8%': { transform: 'rotate(-6deg)' },
      '8.42105%': { transform: 'rotate(-6deg)' },
      '10.10526%': { transform: 'rotate(6deg)' },
      '10.52632%': { transform: 'rotate(6deg)' },
      '12.21053%': { transform: 'rotate(-6deg)' },
      '12.63158%': { transform: 'rotate(-6deg)' },
      '14.31579%': { transform: 'rotate(6deg)' },
      '15.78947%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(0deg)' },
    });
    var D5 = se({
        animation: `${a0} 1.5s ease-in-out infinite`,
        background: D.tr5,
        color: 'transparent',
        cursor: 'progress',
      }),
      qt = { large: 40, medium: 28, small: 20, tiny: 16 },
      z5 = w.div(
        {
          background: 'transparent',
          display: 'inline-block',
          verticalAlign: 'top',
          overflow: 'hidden',
          textTransform: 'uppercase',
          img: { width: '100%', height: 'auto', display: 'block' },
        },
        (e) => ({
          borderRadius: e.type === 'user' ? '50%' : 5,
          height: `${qt[e.size || 'medium']}px`,
          width: `${qt[e.size || 'medium']}px`,
          lineHeight: `${qt[e.size || 'medium']}px`,
          ...(e.isLoading && { background: D.light, filter: 'grayscale(1)' }),
          ...(!e.src && !e.isLoading && { background: '#37D5D3' }),
        })
      ),
      U5 = w(lo)(
        {
          position: 'relative',
          margin: '0 auto',
          display: 'block',
          verticalAlign: 'top',
          path: {
            fill: D.medium,
            animation: `${a0} 1.5s ease-in-out infinite`,
          },
        },
        (e) => ({
          bottom: `${e.type === 'user' ? -2 : -4}px`,
          height: `${e.type === 'user' ? 100 : 70}%`,
          width: `${e.type === 'user' ? 100 : 70}%`,
        })
      ),
      $5 = w.div(
        { color: D.lightest, textAlign: 'center' },
        (e) =>
          ({
            tiny: {
              fontSize: `${H.size.s1 - 2}px`,
              lineHeight: `${qt.tiny}px`,
            },
            small: { fontSize: `${H.size.s1}px`, lineHeight: `${qt.small}px` },
            medium: {
              fontSize: `${H.size.s2}px`,
              lineHeight: `${qt.medium}px`,
            },
            large: { fontSize: `${H.size.s3}px`, lineHeight: `${qt.large}px` },
          }[e.size || 'medium'])
      ),
      W5 = ({
        isLoading: e = !1,
        username: t = 'loading',
        src: n = void 0,
        size: r = 'medium',
        type: i = 'user',
        ...o
      }) => {
        let l = a.createElement(U5, {
            icon: i === 'user' ? 'useralt' : 'repository',
            type: i,
          }),
          s = {};
        return (
          e
            ? ((s['aria-busy'] = !0), (s['aria-label'] = 'Loading avatar ...'))
            : n
            ? (l = a.createElement('img', { src: n, alt: t }))
            : ((s['aria-label'] = t),
              (l = a.createElement(
                $5,
                { size: r, 'aria-hidden': 'true' },
                t.substring(0, 1)
              ))),
          a.createElement(
            z5,
            { size: r, isLoading: e, src: n, type: i, ...s, ...o },
            l
          )
        );
      },
      G5 = w.span(
        (e) =>
          e.withArrow && {
            '> svg:last-of-type': {
              height: '0.65em',
              width: '0.65em',
              marginRight: 0,
              marginLeft: '0.25em',
              bottom: 'auto',
              verticalAlign: 'inherit',
            },
          }
      ),
      q5 = w.a(
        {
          display: 'inline-block',
          transition: 'transform 150ms ease-out, color 150ms ease-out',
          textDecoration: 'none',
          color: D.secondary,
          '&:hover, &:focus-visible': {
            cursor: 'pointer',
            transform: 'translateY(-1px)',
            color: Gt(0.07, D.secondary),
          },
          '&:active': {
            transform: 'translateY(0)',
            color: Gt(0.1, D.secondary),
          },
          svg: {
            display: 'inline-block',
            height: '1em',
            width: '1em',
            verticalAlign: 'text-top',
            position: 'relative',
            bottom: '-0.125em',
            marginRight: '0.4em',
          },
        },
        (e) => ({
          ...(e.containsIcon && {
            svg: {
              height: '1em',
              width: '1em',
              verticalAlign: 'middle',
              position: 'relative',
              bottom: 0,
              marginRight: 0,
            },
          }),
          ...(e.secondary && {
            color: e.theme.base === 'light' ? D.mediumdark : D.medium,
            '&:hover': { color: e.theme.base === 'light' ? D.dark : D.light },
            '&:active': {
              color: e.theme.base === 'light' ? D.darker : D.lighter,
            },
          }),
          ...(e.tertiary && {
            color: D.dark,
            '&:hover': { color: D.darkest },
            '&:active': { color: D.mediumdark },
          }),
          ...(e.nochrome && {
            color: 'inherit',
            '&:hover, &:active': {
              color: 'inherit',
              textDecoration: 'underline',
            },
          }),
          ...(e.inverse && {
            color: D.lightest,
            '&:hover': { color: D.lighter },
            '&:active': { color: D.light },
          }),
        })
      ),
      Y5 = w.a({}),
      Q5 = w.button({
        background: 'none',
        border: 'none',
        padding: '0',
        font: 'inherit',
        cursor: 'pointer',
      }),
      r0 = W(
        (
          {
            containsIcon: e,
            inverse: t,
            isButton: n,
            LinkWrapper: r,
            nochrome: i,
            secondary: o,
            tertiary: l,
            ...s
          },
          c
        ) =>
          n
            ? a.createElement(Q5, { ...s, ref: c })
            : r
            ? a.createElement(r, { ...s, ref: c })
            : a.createElement(Y5, { ...s, ref: c })
      );
    r0.displayName = 'LinkComponentPicker';
    var De = W(({ children: e, withArrow: t, ...n }, r) => {
      let i = a.createElement(
        a.Fragment,
        null,
        a.createElement(
          G5,
          { withArrow: !!t },
          e,
          t && a.createElement(lo, { icon: 'arrowright' })
        )
      );
      return a.createElement(q5, { as: r0, ref: r, ...n }, i);
    });
    De.displayName = 'Link';
    De.defaultProps = {
      withArrow: !1,
      isButton: !1,
      containsIcon: !1,
      secondary: !1,
      tertiary: !1,
      nochrome: !1,
      inverse: !1,
    };
    var K5 = w.label((e) => ({
        ...(e.appearance !== 'code' && { fontWeight: H.weight.bold }),
        ...(e.appearance === 'code'
          ? {
              fontFamily: H.type.code,
              fontSize: `${H.size.s1 - 1}px`,
              lineHeight: '16px',
            }
          : { fontSize: `${H.size.s2}px`, lineHeight: '20px' }),
      })),
      J5 = w.div([
        { marginBottom: 8 },
        (e) =>
          e.hideLabel && {
            border: '0px !important',
            clip: 'rect(0 0 0 0) !important',
            WebkitClipPath: 'inset(100%) !important',
            clipPath: 'inset(100%) !important',
            height: '1px !important',
            overflow: 'hidden !important',
            padding: '0px !important',
            position: 'absolute !important',
            whiteSpace: 'nowrap !important',
            width: '1px !important',
          },
      ]),
      X5 = w.input({
        '&::placeholder': { color: D.mediumdark },
        appearance: 'none',
        border: 'none',
        boxSizing: 'border-box',
        display: 'block',
        outline: 'none',
        width: '100%',
        margin: '0',
        '&[disabled]': { cursor: 'not-allowed', opacity: 0.5 },
        '&:-webkit-autofill': {
          WebkitBoxShadow: `0 0 0 3em ${D.lightest} inset`,
        },
      }),
      ed = (e) => {
        let t = {
          position: 'relative',
          ...(e.error && { zIndex: 1 }),
          '&:focus': { zIndex: 2 },
        };
        switch (e.stackLevel) {
          case 'top':
            return {
              borderTopLeftRadius: '4px',
              borderTopRightRadius: '4px',
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              ...t,
            };
          case 'middle':
            return { borderRadius: 0, marginTop: -1, ...t };
          case 'bottom':
            return {
              borderBottomLeftRadius: '4px',
              borderBottomRightRadius: '4px',
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              marginTop: -1,
              ...t,
            };
          default:
            return { borderRadius: '4px' };
        }
      },
      td = w.div((e) => ({
        display: 'inline-block',
        position: 'relative',
        verticalAlign: 'top',
        width: '100%',
        '.sbds-input-el': {
          position: 'relative',
          ...ed(e),
          background: D.lightest,
          color: D.darkest,
          fontSize: `${H.size.s2}px`,
          lineHeight: '20px',
          padding: '10px 15px',
          boxShadow: `${D.border} 0 0 0 1px inset`,
          '&:focus': { boxShadow: `${D.secondary} 0 0 0 1px inset` },
          ...(e.appearance === 'pill' && {
            fontSize: `${H.size.s1}px`,
            lineHeight: '16px',
            padding: '6px 12px',
            borderRadius: '3em',
            background: 'transparent',
          }),
          ...(e.appearance === 'code' && {
            fontSize: `${H.size.s1 - 1}px`,
            lineHeight: '16px',
            fontFamily: H.type.code,
            borderRadius: `${so.borderRadius.small}px`,
            background: D.lightest,
            padding: '8px 10px',
          }),
          ...(e.startingType === 'password' && { paddingRight: 52 }),
          ...(e.icon && {
            paddingLeft: 40,
            ...((e.appearance === 'pill' || e.appearance === 'code') && {
              paddingLeft: 30,
            }),
            '&:focus + svg path': { fill: D.darker },
          }),
          ...(e.error && {
            boxShadow: `${D.red} 0 0 0 1px inset`,
            '&:focus': { boxShadow: `${D.red} 0 0 0 1px inset !important` },
          }),
        },
        '> svg': {
          ...(e.icon && {
            transition: 'all 150ms ease-out',
            position: 'absolute',
            top: '50%',
            zIndex: 3,
            background: 'transparent',
            ...(e.appearance === 'pill' || e.appearance === 'code'
              ? {
                  fontSize: `${H.size.s1}px`,
                  height: 12,
                  marginTop: -6,
                  width: 12,
                  left: 10,
                }
              : {
                  fontSize: `${H.size.s2}px`,
                  height: 14,
                  marginTop: -7,
                  width: 14,
                  left: e.appearance === 'tertiary' ? 0 : 15,
                }),
            path: { transition: 'all 150ms ease-out', fill: D.mediumdark },
          }),
          ...(e.error && {
            animation: `${H5} 700ms ease-out`,
            path: { fill: D.red },
          }),
        },
      })),
      nd = w.div(
        (e) =>
          e.orientation === 'horizontal' && {
            display: 'table-row',
            '.sbds-input-label-wrapper, .sbds-input-input-wrapper': {
              display: 'table-cell',
            },
            '.sbds-input-label-wrapper': {
              width: 1,
              paddingRight: 20,
              verticalAlign: 'middle',
            },
            '.sbds-input-input-wrapper': { width: 'auto' },
          }
      ),
      ad = w(Ae)({ width: '100%' }),
      rd = w(Ko)({ width: 170 }),
      id = w.div({
        position: 'absolute',
        right: '0',
        minWidth: 45,
        top: '50%',
        transform: 'translateY(-50%)',
        fontWeight: 'bold',
        fontSize: 11,
        zIndex: 2,
      }),
      sl = ({ error: e, value: t, lastErrorValue: n }) => {
        let r = typeof e == 'function' ? e(t) : e;
        return n && t !== n && (r = null), r;
      },
      i0 = W(
        (
          {
            id: e,
            appearance: t = 'default',
            className: n = void 0,
            error: r = null,
            errorTooltipPlacement: i = 'right',
            hideLabel: o = !1,
            icon: l = void 0,
            label: s,
            lastErrorValue: c = void 0,
            onActionClick: d = void 0,
            orientation: u = 'vertical',
            stackLevel: m = void 0,
            startingType: p = 'text',
            suppressErrorMessage: v = !1,
            type: h = 'text',
            value: b = '',
            ...k
          },
          y
        ) => {
          let [g, f] = Me(sl({ error: r, value: b, lastErrorValue: c })),
            E = `${e}-error`;
          pe(() => {
            f(sl({ error: r, value: b, lastErrorValue: c }));
          }, [b, r, c]);
          let S = a.createElement(X5, {
            className: 'sbds-input-el',
            id: e,
            ref: y,
            value: b,
            type: h,
            'aria-describedby': E,
            'aria-invalid': !!r,
            ...k,
          });
          return a.createElement(
            nd,
            { orientation: u, className: n },
            a.createElement(
              J5,
              { className: 'sbds-input-label-wrapper', hideLabel: o },
              a.createElement(K5, { htmlFor: e, appearance: t }, s)
            ),
            a.createElement(
              td,
              {
                className: 'sbds-input-input-wrapper',
                error: g,
                'data-error': g,
                icon: l,
                appearance: t,
                stackLevel: m,
                startingType: p,
              },
              l && a.createElement(lo, { icon: l, 'aria-hidden': !0 }),
              a.createElement(
                ad,
                {
                  tabIndex: -1,
                  placement: i,
                  startOpen: !0,
                  hasChrome: !!g && !v,
                  tooltip: g && !v && a.createElement(rd, { desc: g }),
                  role: 'none',
                },
                S
              ),
              p === 'password' &&
                a.createElement(
                  id,
                  null,
                  a.createElement(
                    De,
                    { isButton: !0, tertiary: !0, onClick: d, type: 'button' },
                    h === 'password' ? 'Show' : 'Hide'
                  )
                )
            )
          );
        }
      );
    i0.displayName = 'PureInput';
    var o0 = W(({ type: e, startFocused: t, ...n }, r) => {
      let [i, o] = Me(e),
        l = de(
          (u) => {
            if ((u.preventDefault(), u.stopPropagation(), i === 'password')) {
              o('text');
              return;
            }
            o('password');
          },
          [i, o]
        ),
        s = Te(),
        c = r || s,
        d = Te(!1);
      return (
        pe(() => {
          c.current && t && !d.current && (c.current.focus(), (d.current = !0));
        }, [c, t, d]),
        a.createElement(i0, {
          ref: c,
          startingType: e,
          type: i,
          onActionClick: l,
          ...n,
        })
      );
    });
    o0.displayName = 'Input';
    var od = w.div(
        {
          borderRadius: '3em',
          cursor: 'progress',
          display: 'inline-block',
          overflow: 'hidden',
          position: ['relative', 'absolute'],
          transition: 'all 200ms ease-out',
          verticalAlign: 'top',
          top: '50%',
          left: '50%',
          marginTop: -16,
          marginLeft: -16,
          height: 32,
          width: 32,
          animation: `${n0} 0.7s linear infinite`,
          borderWidth: 2,
          borderStyle: 'solid',
          borderColor: 'rgba(0, 0, 0, 0.03)',
          borderTopColor: 'rgba(0, 0, 0, 0.15)',
        },
        (e) => ({
          ...(e.inverse && {
            borderColor: 'rgba(255, 255, 255, 0.2)',
            borderTopColor: 'rgba(255, 255, 255, 0.4)',
          }),
          ...(e.inForm && {
            marginTop: -6,
            marginLeft: -6,
            height: 12,
            width: 12,
            border: `1px solid ${D.secondary}`,
            borderBottomColor: 'transparent',
          }),
          ...(e.inline && {
            position: 'relative',
            top: 'initial',
            left: 'initial',
            marginTop: 'initial',
            marginLeft: 'initial',
            verticalAlign: 'middle',
            height: 8,
            width: 8,
            border: '1px solid',
            borderTopColor: D.secondary,
            borderLeftColor: D.secondary,
            borderRightColor: D.secondary,
            borderBottomColor: 'transparent',
            ...(e.positive && {
              borderTopColor: D.positive,
              borderLeftColor: D.positive,
              borderRightColor: D.positive,
            }),
            ...(e.negative && {
              borderTopColor: D.red,
              borderLeftColor: D.red,
              borderRightColor: D.red,
            }),
            ...(e.neutral && {
              borderTopColor: D.dark,
              borderLeftColor: D.dark,
              borderRightColor: D.dark,
            }),
            ...(e.inverse && {
              borderTopColor: D.lightest,
              borderLeftColor: D.lightest,
              borderRightColor: D.lightest,
            }),
          }),
        })
      ),
      ld = (e) =>
        a.createElement(od, {
          'aria-label': 'Content is loading ...',
          'aria-live': 'polite',
          role: 'status',
          ...e,
        }),
      sd = function (e) {
        var t = new WeakMap();
        return function (n) {
          if (t.has(n)) return t.get(n);
          var r = e(n);
          return t.set(n, r), r;
        };
      },
      cd = w.span({}),
      dd = w.span(({ theme: e }) => ({
        fontWeight: e.typography.weight.bold,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      })),
      ud = w.span({}),
      md = w.span({}),
      cl = w.li(({ theme: e }) => ({
        listStyle: 'none',
        '&:not(:first-of-type)': { borderTop: `1px solid ${e.appBorderColor}` },
      })),
      pd = w.span({
        lineHeight: '18px',
        padding: '7px 15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '.sbds-list-item-title': {
          display: 'block',
          flex: '0 1 auto',
          marginRight: 'auto',
        },
        '.sbds-list-item-left, .sbds-list-item-center, .sbds-list-item-right': {
          display: 'inline-flex',
        },
        '.sbds-list-item-center': {
          flex: '0 1 auto',
          marginLeft: 'auto',
          marginRight: 'auto',
        },
        '.sbds-list-item-left, .sbds-list-item-right': { flex: '0 1 auto' },
        '.sbds-list-item-right': {
          flex: 'none',
          textAlign: 'right',
          marginLeft: 10,
        },
      }),
      co = ({
        active: e,
        activeColor: t,
        disabled: n,
        isLoading: r,
        theme: i,
      }) => ({
        fontSize: `${i.typography.size.s1}px`,
        transition: 'all 150ms ease-out',
        color: i.color.mediumdark,
        textDecoration: 'none',
        display: 'block',
        '.sbds-list-item-title': {
          color: i.base === 'light' ? i.color.darker : i.color.lighter,
        },
        '.sbds-list-item-right svg': {
          transition: 'all 200ms ease-out',
          opacity: 0,
          height: 12,
          width: 12,
          margin: '3px 0',
          verticalAlign: 'top',
          path: { fill: i.color.mediumdark },
        },
        '&:hover': {
          background: i.background.hoverable,
          cursor: 'pointer',
          '.sbds-list-item-right svg': { opacity: 1 },
        },
        ...(e && {
          '.sbds-list-item-title': { fontWeight: i.typography.weight.bold },
          '.sbds-list-item-title, .sbds-list-item-center': { color: t },
          '.sbds-list-item-right svg': { opacity: 1, path: { fill: t } },
        }),
        ...(r && {
          '.sbds-list-item-title': {
            ...D5,
            flex: '0 1 auto',
            display: 'inline-block',
          },
        }),
        ...(n && {
          cursor: 'not-allowed !important',
          '.sbds-list-item-title, .sbds-list-item-center': {
            color: i.color.mediumdark,
          },
        }),
      }),
      hd = w(({ active: e, activeColor: t, isLoading: n, ...r }) =>
        a.createElement('a', { ...r })
      )(co),
      fd = w.span(co),
      gd = sd((e) =>
        w(({ active: t, isLoading: n, activeColor: r, ...i }) =>
          a.createElement(e, { ...i })
        )(co)
      ),
      nt = ({
        appearance: e = 'primary',
        left: t,
        title: n = a.createElement('span', null, 'Loading'),
        center: r,
        right: i,
        onClick: o,
        LinkWrapper: l,
        isLink: s = !0,
        ...c
      }) => {
        let d = pt().color[e],
          u = a.createElement(
            pd,
            { onClick: o, role: 'presentation' },
            t && a.createElement(cd, { className: 'sbds-list-item-left' }, t),
            n && a.createElement(dd, { className: 'sbds-list-item-title' }, n),
            r && a.createElement(ud, { className: 'sbds-list-item-center' }, r),
            i && a.createElement(md, { className: 'sbds-list-item-right' }, i)
          );
        if (l) {
          let m = gd(l);
          return a.createElement(
            cl,
            null,
            a.createElement(m, { activeColor: d, ...c }, u)
          );
        }
        return a.createElement(
          cl,
          null,
          a.createElement(s ? hd : fd, { activeColor: d, ...c }, u)
        );
      };
    function ea(e) {
      function t(V, $) {
        return (V >>> $) | (V << (32 - $));
      }
      for (
        var n,
          r,
          i = Math.pow,
          o = i(2, 32),
          l = '',
          s = [],
          c = 8 * e.length,
          d = (ea.h = ea.h || []),
          u = (ea.k = ea.k || []),
          m = u.length,
          p = {},
          v = 2;
        m < 64;
        v++
      )
        if (!p[v]) {
          for (n = 0; n < 313; n += v) p[n] = v;
          (d[m] = (i(v, 0.5) * o) | 0), (u[m++] = (i(v, 1 / 3) * o) | 0);
        }
      for (e += '\x80'; (e.length % 64) - 56; ) e += '\0';
      for (n = 0; n < e.length; n++) {
        if ((r = e.charCodeAt(n)) >> 8) return;
        s[n >> 2] |= r << (((3 - n) % 4) * 8);
      }
      for (s[s.length] = (c / o) | 0, s[s.length] = c, r = 0; r < s.length; ) {
        var h = s.slice(r, (r += 16)),
          b = d;
        for (d = d.slice(0, 8), n = 0; n < 64; n++) {
          var k = h[n - 15],
            y = h[n - 2],
            g = d[0],
            f = d[4],
            E =
              d[7] +
              (t(f, 6) ^ t(f, 11) ^ t(f, 25)) +
              ((f & d[5]) ^ (~f & d[6])) +
              u[n] +
              (h[n] =
                n < 16
                  ? h[n]
                  : (h[n - 16] +
                      (t(k, 7) ^ t(k, 18) ^ (k >>> 3)) +
                      h[n - 7] +
                      (t(y, 17) ^ t(y, 19) ^ (y >>> 10))) |
                    0);
          (d = [
            (E +
              ((t(g, 2) ^ t(g, 13) ^ t(g, 22)) +
                ((g & d[1]) ^ (g & d[2]) ^ (d[1] & d[2])))) |
              0,
          ].concat(d))[4] = (d[4] + E) | 0;
        }
        for (n = 0; n < 8; n++) d[n] = (d[n] + b[n]) | 0;
      }
      for (n = 0; n < 8; n++)
        for (r = 3; r + 1; r--) {
          var S = (d[n] >> (8 * r)) & 255;
          l += (S < 16 ? 0 : '') + S.toString(16);
        }
      return l;
    }
    var vd = (e) =>
        new Uint8Array(e).reduce((t, n) => t + String.fromCharCode(n), ''),
      yd = (e) => window.btoa(Array.isArray(e) ? vd(e) : e),
      dl = (e) =>
        yd(e).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, ''),
      bd = (e) => Array.from(e.match(/.{1,2}/g) ?? [], (t) => parseInt(t, 16)),
      Ed = () =>
        Math.random().toString(36).slice(2, 10) +
        Math.random().toString(36).slice(2, 10) +
        Math.random().toString(36).slice(2, 10) +
        Math.random().toString(36).slice(2, 10),
      l0 = (e) =>
        Object.entries(e)
          .map(([t, n]) => `${encodeURIComponent(t)}=${encodeURIComponent(n)}`)
          .join('&'),
      kd = ({ error: e }) => e === 'authorization_pending',
      wd = ({ error_description: e }) => e === 'Not OAuth beta user',
      Cd = async (e) => {
        let t = dl(Ed()),
          n = dl(bd(ea(t))),
          r = await fetch(`${Lr}/authorize`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            },
            body: l0({
              client_id: 'chromaui:addon-visual-tests',
              code_challenge: n,
            }),
          }),
          {
            device_code: i,
            user_code: o,
            verification_uri_complete: l,
            expires_in: s,
            interval: c,
          } = await r.json(),
          d = e ? l.replace('https://www', `https://${e}`) : l;
        return {
          expires: Date.now() + s * 1e3,
          interval: c * 1e3,
          user_code: o,
          device_code: i,
          verifier: t,
          verificationUrl: d,
        };
      },
      xd = async ({ expires: e, device_code: t, verifier: n }) => {
        if (Date.now() >= e)
          throw new Error('Token exchange expired, please restart sign in.');
        try {
          let r = await (
            await fetch(`${Lr}/token`, {
              method: 'POST',
              headers: {
                'Content-Type':
                  'application/x-www-form-urlencoded;charset=UTF-8',
              },
              body: l0({
                client_id: 'chromaui:addon-visual-tests',
                grant_type: 'urn:ietf:params:oauth:grant-type:device_code',
                device_code: t,
                code_verifier: n,
                scope: 'user:read account:read project:read project:write',
              }),
            })
          ).json();
          if (kd(r))
            throw new Error(
              'You have not authorized the Visual Tests addon for Chromatic, please try again'
            );
          if (r.access_token) return r.access_token;
          if (wd(r))
            return (
              alert('You must be a beta user to use this addon at this time.'),
              null
            );
          throw new Error();
        } catch (r) {
          throw (console.warn(r), r);
        }
      };
    function s0() {
      let e = sn(),
        { addNotification: t } = e;
      return de(
        (n, r) => {
          t({
            id: `${J}/error`,
            content: { headline: n, subHeadline: r.toString() },
            icon: { name: 'failed', color: Tt.negative },
            link: void 0,
          });
        },
        [t]
      );
    }
    var c0 = Qe(void 0),
      Sd = ({ children: e, addonUninstalled: t, setAddonUninstalled: n }) => {
        let r = sn().getChannel();
        if (!r) throw new Error('Channel not available');
        let i = () => {
          r.emit($1), n(!0);
        };
        return a.createElement(
          c0.Provider,
          { value: { addonUninstalled: t, uninstallAddon: i } },
          e
        );
      },
      uo = () => Lt(c0, 'Uninstall Addon'),
      Md = W(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        C(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          C('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M6.25 4.254a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zm-.5 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z',
            fill: e,
          }),
          C('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M13 1.504v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5h11a.5.5 0 01.5.5zM2 9.297V2.004h10v5.293L9.854 5.15a.5.5 0 00-.708 0L6.5 7.797 5.354 6.65a.5.5 0 00-.708 0L2 9.297zM9.5 6.21l2.5 2.5v3.293H2V10.71l3-3 3.146 3.146a.5.5 0 00.708-.707L7.207 8.504 9.5 6.21z',
            fill: e,
          })
        )
      ),
      d0 = W(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        C(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 15',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          C('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M3 3.004H.5a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h10a.5.5 0 00.5-.5v-2.5h2.5a.5.5 0 00.5-.5v-10a.5.5 0 00-.5-.5h-10a.5.5 0 00-.5.5v2.5zm1 1v2.293l2.293-2.293H4zm-1 0v6.5a.499.499 0 00.497.5H10v2H1v-9h2zm1-1h6.5a.499.499 0 01.5.5v6.5h2v-9H4v2zm6 7V7.71l-2.293 2.293H10zm0-3.707V4.71l-5.293 5.293h1.586L10 6.297zm-.707-2.293H7.707L4 7.71v1.586l5.293-5.293z',
            fill: e,
          })
        )
      ),
      Nd = W(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        C(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          C('path', {
            d: 'M4.5 4a.5.5 0 00-.5.5v5a.5.5 0 00.5.5h5a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5h-5z',
            fill: e,
          }),
          C('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z',
            fill: e,
          })
        )
      ),
      Vt = W(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        C(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          C('path', {
            d: 'M12.813 7.425l-9.05 5.603A.5.5 0 013 12.603V1.398a.5.5 0 01.763-.425l9.05 5.602a.5.5 0 010 .85z',
            fill: e,
          })
        )
      ),
      Fd = W(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        C(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          C('path', {
            d: 'M1 1.504a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11z',
            fill: e,
          })
        )
      ),
      u0 = W(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        C(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          C('path', {
            d: 'M4 5.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zM4.5 7.5a.5.5 0 000 1h5a.5.5 0 000-1h-5zM4 10.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z',
            fill: e,
          }),
          C('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M1.5 0a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h11a.5.5 0 00.5-.5V3.207a.5.5 0 00-.146-.353L10.146.146A.5.5 0 009.793 0H1.5zM2 1h7.5v2a.5.5 0 00.5.5h2V13H2V1z',
            fill: e,
          })
        )
      ),
      Ad = W(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        C(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          C('path', {
            d: 'M6 7a3 3 0 110-6h5.5a.5.5 0 010 1H10v10.5a.5.5 0 01-1 0V2H7v10.5a.5.5 0 01-1 0V7z',
            fill: e,
          })
        )
      ),
      Od = W(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        C(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          C('path', {
            d: 'M5.586 5.586A2 2 0 018.862 7.73a.5.5 0 10.931.365 3 3 0 10-1.697 1.697.5.5 0 10-.365-.93 2 2 0 01-2.145-3.277z',
            fill: e,
          }),
          C('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M.939 6.527c.127.128.19.297.185.464a.635.635 0 01-.185.465L0 8.395a7.099 7.099 0 001.067 2.572h1.32c.182 0 .345.076.46.197a.635.635 0 01.198.46v1.317A7.097 7.097 0 005.602 14l.94-.94a.634.634 0 01.45-.186H7.021c.163 0 .326.061.45.186l.939.938a7.098 7.098 0 002.547-1.057V11.61c0-.181.075-.344.197-.46a.634.634 0 01.46-.197h1.33c.507-.76.871-1.622 1.056-2.55l-.946-.946a.635.635 0 01-.186-.465.635.635 0 01.186-.464l.943-.944a7.099 7.099 0 00-1.044-2.522h-1.34a.635.635 0 01-.46-.197.635.635 0 01-.196-.46V1.057A7.096 7.096 0 008.413.002l-.942.942a.634.634 0 01-.45.186H6.992a.634.634 0 01-.45-.186L5.598 0a7.097 7.097 0 00-2.553 1.058v1.33c0 .182-.076.345-.197.46a.635.635 0 01-.46.198h-1.33A7.098 7.098 0 00.003 5.591l.936.936zm.707 1.636c.324-.324.482-.752.479-1.172a1.634 1.634 0 00-.48-1.171l-.538-.539c.126-.433.299-.847.513-1.235h.768c.459 0 .873-.19 1.167-.49.3-.295.49-.708.49-1.167v-.77c.39-.215.807-.388 1.243-.515l.547.547c.32.32.742.48 1.157.48l.015-.001h.014c.415 0 .836-.158 1.157-.479l.545-.544c.433.126.846.299 1.234.512v.784c0 .46.19.874.49 1.168.294.3.708.49 1.167.49h.776c.209.382.378.788.502 1.213l-.545.546a1.635 1.635 0 00-.48 1.17c-.003.421.155.849.48 1.173l.549.55c-.126.434-.3.85-.513 1.239h-.77c-.458 0-.872.19-1.166.49-.3.294-.49.708-.49 1.167v.77a6.09 6.09 0 01-1.238.514l-.54-.54a1.636 1.636 0 00-1.158-.48H6.992c-.415 0-.837.159-1.157.48l-.543.543a6.091 6.091 0 01-1.247-.516v-.756c0-.459-.19-.873-.49-1.167-.294-.3-.708-.49-1.167-.49h-.761a6.094 6.094 0 01-.523-1.262l.542-.542z',
            fill: e,
          })
        )
      ),
      Ld = W(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        C(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          C('path', {
            d: 'M4 7a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM13 7a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM7 8.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z',
            fill: e,
          })
        )
      ),
      _d = W(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        C(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 15',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          C('path', {
            d: 'M5.903.112a.107.107 0 01.194 0l.233.505.552.066c.091.01.128.123.06.185l-.408.377.109.546a.107.107 0 01-.158.114L6 1.634l-.485.271a.107.107 0 01-.158-.114l.108-.546-.408-.377a.107.107 0 01.06-.185L5.67.617l.233-.505zM2.194.224a.214.214 0 00-.389 0l-.466 1.01-1.104.131a.214.214 0 00-.12.37l.816.755-.217 1.091a.214.214 0 00.315.23L2 3.266l.971.543c.16.09.35-.05.315-.229l-.216-1.09.816-.756a.214.214 0 00-.12-.37L2.66 1.234 2.194.224zM12.194 8.224a.214.214 0 00-.389 0l-.466 1.01-1.104.13a.214.214 0 00-.12.371l.816.755-.217 1.091a.214.214 0 00.315.23l.97-.544.971.543c.16.09.35-.05.315-.229l-.216-1.09.816-.756a.214.214 0 00-.12-.37l-1.105-.131-.466-1.01z',
            fill: e,
          }),
          C('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M2.5 12.797l-1.293-1.293 6.758-6.758L9.258 6.04 2.5 12.797zm7.465-7.465l2.828-2.828L11.5 1.211 8.672 4.04l1.293 1.293zM.147 11.857a.5.5 0 010-.707l11-11a.5.5 0 01.706 0l2 2a.5.5 0 010 .708l-11 11a.5.5 0 01-.706 0l-2-2z',
            fill: e,
          })
        )
      ),
      mo = W(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        C(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          C('path', {
            d: 'M13.854 3.354a.5.5 0 00-.708-.708L5 10.793.854 6.646a.5.5 0 10-.708.708l4.5 4.5a.5.5 0 00.708 0l8.5-8.5z',
            fill: e,
          })
        )
      ),
      ul = W(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        C(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          C('path', {
            d: 'M11.5 2a.5.5 0 000 1h2a.5.5 0 000-1h-2zM9.3 2.6a.5.5 0 01.1.7l-5.995 7.993a.505.505 0 01-.37.206.5.5 0 01-.395-.152L.146 8.854a.5.5 0 11.708-.708l2.092 2.093L8.6 2.7a.5.5 0 01.7-.1zM11 7a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2A.5.5 0 0111 7zM11.5 11a.5.5 0 000 1h2a.5.5 0 000-1h-2z',
            fill: e,
          })
        )
      ),
      Td = W(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        C(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          C('path', {
            d: 'M7 3a.5.5 0 01.5.5v3h3a.5.5 0 010 1h-3v3a.5.5 0 01-1 0v-3h-3a.5.5 0 010-1h3v-3A.5.5 0 017 3z',
            fill: e,
          }),
          C('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M7 14A7 7 0 107 0a7 7 0 000 14zm0-1A6 6 0 107 1a6 6 0 000 12z',
            fill: e,
          })
        )
      ),
      po = W(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        C(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          C('path', {
            d: 'M9.854 4.146a.5.5 0 010 .708L7.707 7l2.147 2.146a.5.5 0 01-.708.708L7 7.707 4.854 9.854a.5.5 0 01-.708-.708L6.293 7 4.146 4.854a.5.5 0 11.708-.708L7 6.293l2.146-2.147a.5.5 0 01.708 0z',
            fill: e,
          }),
          C('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M7 14A7 7 0 107 0a7 7 0 000 14zm0-1A6 6 0 107 1a6 6 0 000 12z',
            fill: e,
          })
        )
      ),
      Zd = W(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        C(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          C('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M7 14A7 7 0 107 0a7 7 0 000 14zm3.854-9.354a.5.5 0 010 .708l-4.5 4.5a.5.5 0 01-.708 0l-2.5-2.5a.5.5 0 11.708-.708L6 8.793l4.146-4.147a.5.5 0 01.708 0z',
            fill: e,
          })
        )
      ),
      Id = W(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        C(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          C('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M7 14A7 7 0 107 0a7 7 0 000 14zM3.5 6.5a.5.5 0 000 1h7a.5.5 0 000-1h-7z',
            fill: e,
          })
        )
      ),
      m0 = W(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        C(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          C('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M7 14A7 7 0 107 0a7 7 0 000 14zm2.854-9.854a.5.5 0 010 .708L7.707 7l2.147 2.146a.5.5 0 01-.708.708L7 7.707 4.854 9.854a.5.5 0 01-.708-.708L6.293 7 4.146 4.854a.5.5 0 11.708-.708L7 6.293l2.146-2.147a.5.5 0 01.708 0z',
            fill: e,
          })
        )
      ),
      p0 = W(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        C(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 15',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          C('path', {
            d: 'M8 8.004a1 1 0 01-.5.866v1.634a.5.5 0 01-1 0V8.87A1 1 0 118 8.004z',
            fill: e,
          }),
          C('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M3 4.004a4 4 0 118 0v1h1.5a.5.5 0 01.5.5v8a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-8a.5.5 0 01.5-.5H3v-1zm7 1v-1a3 3 0 10-6 0v1h6zm2 1H2v7h10v-7z',
            fill: e,
          })
        )
      ),
      Rd = W(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        C(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          C('path', {
            d: 'M7 5.5a.5.5 0 01.5.5v4a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zM7 4.5A.75.75 0 107 3a.75.75 0 000 1.5z',
            fill: e,
          }),
          C('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M7 14A7 7 0 107 0a7 7 0 000 14zm0-1A6 6 0 107 1a6 6 0 000 12z',
            fill: e,
          })
        )
      ),
      Bd = W(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        C(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          C('path', {
            d: 'M5.25 5.25A1.75 1.75 0 117 7a.5.5 0 00-.5.5V9a.5.5 0 001 0V7.955A2.75 2.75 0 104.25 5.25a.5.5 0 001 0zM7 11.5A.75.75 0 107 10a.75.75 0 000 1.5z',
            fill: e,
          }),
          C('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z',
            fill: e,
          })
        )
      ),
      Pd = W(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        C(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          C('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M14 7A7 7 0 110 7a7 7 0 0114 0zm-3.524 4.89A5.972 5.972 0 017 13a5.972 5.972 0 01-3.477-1.11l1.445-1.444C5.564 10.798 6.258 11 7 11s1.436-.202 2.032-.554l1.444 1.445zm-.03-2.858l1.445 1.444A5.972 5.972 0 0013 7c0-1.296-.41-2.496-1.11-3.477l-1.444 1.445C10.798 5.564 11 6.258 11 7s-.202 1.436-.554 2.032zM9.032 3.554l1.444-1.445A5.972 5.972 0 007 1c-1.296 0-2.496.41-3.477 1.11l1.445 1.444A3.981 3.981 0 017 3c.742 0 1.436.202 2.032.554zM3.554 4.968L2.109 3.523A5.973 5.973 0 001 7c0 1.296.41 2.496 1.11 3.476l1.444-1.444A3.981 3.981 0 013 7c0-.742.202-1.436.554-2.032zM10 7a3 3 0 11-6 0 3 3 0 016 0z',
            fill: e,
          })
        )
      ),
      Vd = W(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        C(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          C('path', {
            d: 'M7 4.5a.5.5 0 01.5.5v3.5a.5.5 0 11-1 0V5a.5.5 0 01.5-.5zM7.75 10.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0z',
            fill: e,
          }),
          C('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M7.206 1.045a.498.498 0 01.23.209l6.494 10.992a.5.5 0 01-.438.754H.508a.497.497 0 01-.506-.452.498.498 0 01.072-.31l6.49-10.984a.497.497 0 01.642-.21zM7 2.483L1.376 12h11.248L7 2.483z',
            fill: e,
          })
        )
      ),
      h0 = W(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        C(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          C('path', {
            d: 'M2 1.004a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1v-4.5a.5.5 0 00-1 0v4.5H2v-10h4.5a.5.5 0 000-1H2z',
            fill: e,
          }),
          C('path', {
            d: 'M7.354 7.357L12 2.711v1.793a.5.5 0 001 0v-3a.5.5 0 00-.5-.5h-3a.5.5 0 100 1h1.793L6.646 6.65a.5.5 0 10.708.707z',
            fill: e,
          })
        )
      ),
      jd = W(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        C(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          C(
            'g',
            { clipPath: 'url(#prefix__clip0_1449_588)' },
            C('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M8.414 1.586a2 2 0 00-2.828 0l-4 4a2 2 0 000 2.828l4 4a2 2 0 002.828 0l4-4a2 2 0 000-2.828l-4-4zm.707-.707a3 3 0 00-4.242 0l-4 4a3 3 0 000 4.242l4 4a3 3 0 004.242 0l4-4a3 3 0 000-4.242l-4-4z',
              fill: e,
            })
          ),
          C(
            'defs',
            null,
            C(
              'clipPath',
              { id: 'prefix__clip0_1449_588' },
              C('path', { fill: '#fff', d: 'M0 0h14v14H0z' })
            )
          )
        )
      ),
      f0 = W(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        C(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          C('path', {
            d: 'M1.146 4.604l5.5 5.5a.5.5 0 00.708 0l5.5-5.5a.5.5 0 00-.708-.708L7 9.043 1.854 3.896a.5.5 0 10-.708.708z',
            fill: e,
          })
        )
      ),
      ho = W(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        C(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          C('path', {
            d: 'M2.76 7.096a.498.498 0 00.136.258l5.5 5.5a.5.5 0 00.707-.708L3.958 7l5.147-5.146a.5.5 0 10-.708-.708l-5.5 5.5a.5.5 0 00-.137.45z',
            fill: e,
          })
        )
      ),
      Hd = W(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        C(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          C('path', {
            d: 'M11.104 7.354l-5.5 5.5a.5.5 0 01-.708-.708L10.043 7 4.896 1.854a.5.5 0 11.708-.708l5.5 5.5a.5.5 0 010 .708z',
            fill: e,
          })
        )
      ),
      Dd = W(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        C(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          C('path', {
            d: 'M7.354.146l4 4a.5.5 0 01-.708.708L7 1.207 3.354 4.854a.5.5 0 11-.708-.708l4-4a.5.5 0 01.708 0zM11.354 9.146a.5.5 0 010 .708l-4 4a.5.5 0 01-.708 0l-4-4a.5.5 0 11.708-.708L7 12.793l3.646-3.647a.5.5 0 01.708 0z',
            fill: e,
          })
        )
      ),
      zd = W(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        C(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          C('path', {
            d: 'M3.354.146a.5.5 0 10-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 00-.708-.708L7 3.793 3.354.146zM6.646 9.146a.5.5 0 01.708 0l4 4a.5.5 0 01-.708.708L7 10.207l-3.646 3.647a.5.5 0 01-.708-.708l4-4z',
            fill: e,
          })
        )
      ),
      Ud = W(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        C(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          C('path', {
            d: 'M10.646 2.646a.5.5 0 01.708 0l1.5 1.5a.5.5 0 010 .708l-1.5 1.5a.5.5 0 01-.708-.708L11.293 5H1.5a.5.5 0 010-1h9.793l-.647-.646a.5.5 0 010-.708zM3.354 8.354L2.707 9H12.5a.5.5 0 010 1H2.707l.647.646a.5.5 0 01-.708.708l-1.5-1.5a.5.5 0 010-.708l1.5-1.5a.5.5 0 11.708.708z',
            fill: e,
          })
        )
      ),
      $d = W(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        C(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          C('path', {
            d: 'M1.146 3.854a.5.5 0 010-.708l2-2a.5.5 0 11.708.708L2.707 3h6.295A4 4 0 019 11H3a.5.5 0 010-1h6a3 3 0 100-6H2.707l1.147 1.146a.5.5 0 11-.708.708l-2-2z',
            fill: e,
          })
        )
      ),
      g0 = W(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        C(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          C('path', {
            d: 'M5.5 1A.5.5 0 005 .5H2a.5.5 0 000 1h1.535a6.502 6.502 0 002.383 11.91.5.5 0 10.165-.986A5.502 5.502 0 014.5 2.1V4a.5.5 0 001 0V1.353a.5.5 0 000-.023V1zM7.507 1a.5.5 0 01.576-.41 6.502 6.502 0 012.383 11.91H12a.5.5 0 010 1H9a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v1.9A5.5 5.5 0 007.917 1.576.5.5 0 017.507 1z',
            fill: e,
          })
        )
      ),
      Wd = W(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        C(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          C('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M0 7a7 7 0 1114 0A7 7 0 010 7zm6.5 3.5v2.48A6.001 6.001 0 011.02 7.5H3.5a.5.5 0 000-1H1.02A6.001 6.001 0 016.5 1.02V3.5a.5.5 0 001 0V1.02a6.001 6.001 0 015.48 5.48H10.5a.5.5 0 000 1h2.48a6.002 6.002 0 01-5.48 5.48V10.5a.5.5 0 00-1 0z',
            fill: e,
          })
        )
      ),
      Gd = W(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        C(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          C('path', {
            d: 'M7.5 4.5a.5.5 0 00-1 0v2.634a1 1 0 101 0V4.5z',
            fill: e,
          }),
          C('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M5.5.5A.5.5 0 016 0h2a.5.5 0 010 1h-.5v1.02a5.973 5.973 0 013.374 1.398l.772-.772a.5.5 0 01.708.708l-.772.772A6 6 0 116.5 2.02V1H6a.5.5 0 01-.5-.5zM7 3a5 5 0 100 10A5 5 0 007 3z',
            fill: e,
          })
        )
      ),
      qd = W(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        C(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          C('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M14 7A7 7 0 110 7a7 7 0 0114 0zM2.671 11.155c.696-1.006 2.602-1.816 3.194-1.91.226-.036.232-.658.232-.658s-.665-.658-.81-1.544c-.39 0-.63-.94-.241-1.272a2.578 2.578 0 00-.012-.13c-.066-.607-.28-2.606 1.965-2.606 2.246 0 2.031 2 1.966 2.606l-.012.13c.39.331.149 1.272-.24 1.272-.146.886-.81 1.544-.81 1.544s.004.622.23.658c.593.094 2.5.904 3.195 1.91a6 6 0 10-8.657 0z',
            fill: e,
          })
        )
      ),
      Yd = w(De)({
        '&&': {
          fontSize: 13,
          lineHeight: '18px',
          position: 'absolute',
          top: 10,
          left: 10,
        },
      }),
      fo = ({ onClick: e, children: t }) =>
        a.createElement(Yd, { secondary: !0, isButton: !0, onClick: e }, t),
      fe = w.div({
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
      }),
      Se = w.h1(({ theme: e }) => ({
        marginTop: 0,
        marginBottom: 4,
        fontSize: '1em',
        fontWeight: 'bold',
        color: e.base === 'light' ? e.color.defaultText : e.color.lightest,
      })),
      v0 = (e) =>
        a.createElement(
          'svg',
          {
            width: '58',
            height: '53',
            viewBox: '0 0 58 53',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ...e,
          },
          a.createElement(
            'g',
            { filter: 'url(#filter0_dd_304_317890)' },
            a.createElement('rect', {
              x: '6',
              y: '2',
              width: '40',
              height: '40',
              rx: '8',
              fill: '#FF4785',
              shapeRendering: 'crispEdges',
            }),
            a.createElement('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M17.5005 11.0555C16.8471 11.0963 16.3455 11.6508 16.37 12.3051L17.1135 32.1151C17.137 32.7426 17.6379 33.2471 18.2651 33.2753L34.3716 33.9987C34.3896 33.9995 34.4077 33.9999 34.4257 33.9999C35.0921 33.9999 35.6324 33.4597 35.6324 32.7932V11.2067C35.6324 11.1816 35.6316 11.1565 35.63 11.1314C35.5885 10.4663 35.0156 9.96082 34.3505 10.0024L33.0259 10.0853L33.1227 12.8548C33.1261 12.9541 33.0484 13.0375 32.949 13.041C32.9065 13.0424 32.8648 13.0288 32.8314 13.0025L31.939 12.2995L30.8825 13.1009C30.8033 13.161 30.6904 13.1455 30.6303 13.0663C30.605 13.033 30.5921 12.9919 30.5939 12.9501L30.707 10.2302L17.5005 11.0555ZM31.221 19.1936C30.7965 19.5234 27.6343 19.7484 27.6343 19.2789C27.7011 17.4876 26.8991 17.409 26.4536 17.409C26.0303 17.409 25.3174 17.537 25.3174 18.4966C25.3174 19.4746 26.3592 20.0267 27.582 20.6747C29.3191 21.5952 31.4215 22.7093 31.4215 25.5128C31.4215 28.1998 29.2383 29.6842 26.4536 29.6842C23.5797 29.6842 21.0683 28.5215 21.352 24.4904C21.4633 24.0171 25.1169 24.1296 25.1169 24.4904C25.0723 26.1538 25.4511 26.6431 26.409 26.6431C27.1442 26.6431 27.4783 26.2379 27.4783 25.5554C27.4783 24.5227 26.3929 23.9133 25.1442 23.2122C23.4534 22.2629 21.4633 21.1456 21.4633 18.5819C21.4633 16.0229 23.2233 14.3168 26.3645 14.3168C29.5056 14.3168 31.221 15.9967 31.221 19.1936Z',
              fill: 'white',
            })
          ),
          a.createElement('circle', {
            cx: '46',
            cy: '22',
            r: '2.5',
            fill: 'white',
            stroke: '#FF4785',
          }),
          a.createElement('path', {
            d: 'M57.8536 22.3536C58.0488 22.1583 58.0488 21.8417 57.8536 21.6464L54.6716 18.4645C54.4763 18.2692 54.1597 18.2692 53.9645 18.4645C53.7692 18.6597 53.7692 18.9763 53.9645 19.1716L56.7929 22L53.9645 24.8284C53.7692 25.0237 53.7692 25.3403 53.9645 25.5355C54.1597 25.7308 54.4763 25.7308 54.6716 25.5355L57.8536 22.3536ZM48.5 22.5H57.5V21.5H48.5V22.5Z',
            fill: '#FF4785',
          }),
          a.createElement(
            'defs',
            null,
            a.createElement(
              'filter',
              {
                id: 'filter0_dd_304_317890',
                x: '0',
                y: '0',
                width: '52',
                height: '53',
                filterUnits: 'userSpaceOnUse',
                colorInterpolationFilters: 'sRGB',
              },
              a.createElement('feFlood', {
                floodOpacity: '0',
                result: 'BackgroundImageFix',
              }),
              a.createElement('feColorMatrix', {
                in: 'SourceAlpha',
                type: 'matrix',
                values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                result: 'hardAlpha',
              }),
              a.createElement('feOffset', { dy: '5' }),
              a.createElement('feGaussianBlur', { stdDeviation: '3' }),
              a.createElement('feColorMatrix', {
                type: 'matrix',
                values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0',
              }),
              a.createElement('feBlend', {
                mode: 'normal',
                in2: 'BackgroundImageFix',
                result: 'effect1_dropShadow_304_317890',
              }),
              a.createElement('feColorMatrix', {
                in: 'SourceAlpha',
                type: 'matrix',
                values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                result: 'hardAlpha',
              }),
              a.createElement('feOffset', { dy: '1' }),
              a.createElement('feGaussianBlur', { stdDeviation: '1.5' }),
              a.createElement('feComposite', {
                in2: 'hardAlpha',
                operator: 'out',
              }),
              a.createElement('feColorMatrix', {
                type: 'matrix',
                values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0',
              }),
              a.createElement('feBlend', {
                mode: 'normal',
                in2: 'effect1_dropShadow_304_317890',
                result: 'effect2_dropShadow_304_317890',
              }),
              a.createElement('feBlend', {
                mode: 'normal',
                in: 'SourceGraphic',
                in2: 'effect2_dropShadow_304_317890',
                result: 'shape',
              })
            )
          )
        ),
      an = (e) =>
        a.createElement(
          'svg',
          {
            width: '52',
            height: '53',
            viewBox: '0 0 52 53',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ...e,
          },
          a.createElement(
            'g',
            { filter: 'url(#filter0_dd_304_317945)' },
            a.createElement(
              'g',
              { clipPath: 'url(#clip0_304_317945)' },
              a.createElement('rect', {
                x: '6',
                y: '2',
                width: '40',
                height: '40',
                rx: '8',
                fill: '#288041',
              }),
              a.createElement(
                'g',
                { clipPath: 'url(#clip1_304_317945)' },
                a.createElement('rect', {
                  x: '14.75',
                  y: '10.75',
                  width: '22.5',
                  height: '22.5',
                  rx: '2',
                  fill: '#215D31',
                }),
                a.createElement('rect', {
                  x: '20.6104',
                  y: '20.1591',
                  width: '20.1485',
                  height: '20.1485',
                  transform: 'rotate(45 20.6104 20.1591)',
                  fill: '#93D4A5',
                }),
                a.createElement('rect', {
                  x: '30.9502',
                  y: '16.59',
                  width: '20.1485',
                  height: '20.1485',
                  transform: 'rotate(45 30.9502 16.59)',
                  fill: '#93D4A5',
                }),
                a.createElement('circle', {
                  cx: '20.435',
                  cy: '16.2246',
                  r: '2.45455',
                  fill: '#93D4A5',
                })
              ),
              a.createElement('rect', {
                x: '7.05469',
                y: '3',
                width: '53.75',
                height: '32.25',
                transform: 'rotate(45 7.05469 3)',
                fill: '#67B47C',
              }),
              a.createElement(
                'g',
                { clipPath: 'url(#clip2_304_317945)' },
                a.createElement(
                  'g',
                  { clipPath: 'url(#clip3_304_317945)' },
                  a.createElement('rect', {
                    x: '14.75',
                    y: '10.75',
                    width: '22.5',
                    height: '22.5',
                    rx: '2',
                    fill: '#2B733F',
                  }),
                  a.createElement('rect', {
                    x: '21.3604',
                    y: '21.6592',
                    width: '20.1485',
                    height: '20.1485',
                    transform: 'rotate(45 21.3604 21.6592)',
                    fill: '#A9E0B8',
                  }),
                  a.createElement('rect', {
                    x: '32.2012',
                    y: '18.5908',
                    width: '20.1485',
                    height: '20.1485',
                    transform: 'rotate(45 32.2012 18.5908)',
                    fill: '#A9E0B8',
                  }),
                  a.createElement('circle', {
                    cx: '21.685',
                    cy: '17.9746',
                    r: '2.45455',
                    fill: '#A9E0B8',
                  })
                )
              )
            )
          ),
          a.createElement(
            'defs',
            null,
            a.createElement(
              'filter',
              {
                id: 'filter0_dd_304_317945',
                x: '0',
                y: '0',
                width: '52',
                height: '53',
                filterUnits: 'userSpaceOnUse',
                colorInterpolationFilters: 'sRGB',
              },
              a.createElement('feFlood', {
                floodOpacity: '0',
                result: 'BackgroundImageFix',
              }),
              a.createElement('feColorMatrix', {
                in: 'SourceAlpha',
                type: 'matrix',
                values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                result: 'hardAlpha',
              }),
              a.createElement('feOffset', { dy: '5' }),
              a.createElement('feGaussianBlur', { stdDeviation: '3' }),
              a.createElement('feComposite', {
                in2: 'hardAlpha',
                operator: 'out',
              }),
              a.createElement('feColorMatrix', {
                type: 'matrix',
                values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0',
              }),
              a.createElement('feBlend', {
                mode: 'normal',
                in2: 'BackgroundImageFix',
                result: 'effect1_dropShadow_304_317945',
              }),
              a.createElement('feColorMatrix', {
                in: 'SourceAlpha',
                type: 'matrix',
                values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                result: 'hardAlpha',
              }),
              a.createElement('feOffset', { dy: '1' }),
              a.createElement('feGaussianBlur', { stdDeviation: '1.5' }),
              a.createElement('feComposite', {
                in2: 'hardAlpha',
                operator: 'out',
              }),
              a.createElement('feColorMatrix', {
                type: 'matrix',
                values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0',
              }),
              a.createElement('feBlend', {
                mode: 'normal',
                in2: 'effect1_dropShadow_304_317945',
                result: 'effect2_dropShadow_304_317945',
              }),
              a.createElement('feBlend', {
                mode: 'normal',
                in: 'SourceGraphic',
                in2: 'effect2_dropShadow_304_317945',
                result: 'shape',
              })
            ),
            a.createElement(
              'clipPath',
              { id: 'clip0_304_317945' },
              a.createElement('rect', {
                x: '6',
                y: '2',
                width: '40',
                height: '40',
                rx: '8',
                fill: 'white',
              })
            ),
            a.createElement(
              'clipPath',
              { id: 'clip1_304_317945' },
              a.createElement('rect', {
                x: '14.75',
                y: '10.75',
                width: '22.5',
                height: '22.5',
                rx: '2',
                fill: 'white',
              })
            ),
            a.createElement(
              'clipPath',
              { id: 'clip2_304_317945' },
              a.createElement('rect', {
                width: '60.7428',
                height: '29.9046',
                fill: 'white',
                transform: 'translate(7.20801 3.17212) rotate(45)',
              })
            ),
            a.createElement(
              'clipPath',
              { id: 'clip3_304_317945' },
              a.createElement('rect', {
                x: '14.75',
                y: '10.75',
                width: '22.5',
                height: '22.5',
                rx: '2',
                fill: 'white',
              })
            )
          )
        ),
      Qd = lt(Or()),
      Kd = (e, t) =>
        (t &&
          {
            positive: { color: e.color.positiveText },
            warning: { color: e.color.warningText },
          }[t]) ||
        {},
      rt = w(Yo)(
        ({ active: e, secondary: t, theme: n }) => ({
          display: 'inline-flex',
          alignItems: 'center',
          verticalAlign: 'top',
          gap: 6,
          margin: 0,
          color: e || t ? n.color.secondary : n.color.mediumdark,
          fontWeight: 'normal',
          '& > svg': { width: 'auto' },
        }),
        ({ active: e, status: t, theme: n }) => !e && Kd(n, t),
        ({ active: e, theme: t }) => {
          let n = t.background.content === t.color.lightest,
            r = n ? 'rgb(241,248,255)' : 'rgb(28,37,45)',
            i = n ? 'rgb(229,243,255)' : 'rgb(29,44,56)';
          return {
            '--bg-color': e ? r : t.background.content,
            '&:hover': { '--bg-color': i, color: t.color.secondary },
          };
        }
      ),
      y0 = w.div({ display: 'flex', flexDirection: 'column' }),
      Bi = w.div(({ theme: e }) => ({
        padding: 15,
        lineHeight: '18px',
        borderBottom: `1px solid ${e.appBorderColor}`,
        p: { margin: '10px 0', '&:last-of-type': { marginBottom: 0 } },
        dl: {
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          gap: 10,
          margin: '10px 0 0 0',
        },
        dt: { color: e.color.mediumdark, fontWeight: 700 },
        dd: { marginLeft: 0 },
        'button + button': { marginLeft: 10 },
      })),
      tr = w.div({ display: 'flex', fontWeight: 'bold', marginBottom: 15 }),
      ml = w(Rd)(({ theme: e }) => ({
        width: 12,
        height: 12,
        margin: '3px 6px',
        verticalAlign: 'top',
        color: e.color.mediumdark,
      })),
      _r = {
        width: 14,
        height: 14,
        margin: '2px 6px 2px 0',
        verticalAlign: 'top',
      },
      Jd = w(Gd)(_r),
      Xd = w(Nd)(_r),
      eu = w(d0)(_r),
      tu = w(Ad)(_r),
      go = w(po)({ marginLeft: 'auto' }),
      vo = w(rt)({ margin: -5, marginLeft: 'auto' }),
      he = w(ai)(
        {
          '&&': {
            display: 'inline-flex',
            borderRadius: 4,
            fontSize: 13,
            lineHeight: '14px',
            padding: '9px 12px',
            alignItems: 'center',
            '@container (min-width: 800px)': { padding: '8px 10px' },
          },
        },
        ({ link: e, theme: t }) =>
          e &&
          se({
            '&&': {
              background: 'none',
              boxShadow: 'none',
              padding: 2,
              fontWeight: 'normal',
              color: t.base === 'light' ? t.color.dark : '#C9CDCF',
              opacity: 0.8,
              transition: 'opacity 150ms ease-out',
              '&:hover, &:focus': { opacity: 1 },
              '&:focus:not(:active)': {
                outline: `1px solid ${t.color.secondary}`,
              },
            },
          }),
        ({ tertiary: e }) => e && se({ '&&:hover': { boxShadow: 'none' } }),
        ({ belowText: e }) => e && { marginTop: 7 }
      ),
      Be = w(qo)(({ theme: e }) => ({
        color: e.base === 'light' ? e.color.darker : e.color.lighter,
        border: `1px solid ${e.appBorderColor}`,
        fontSize: '12px',
        padding: '2px 3px',
      })),
      pl = 'experimental_useSharedState_getValue',
      ja = 'experimental_useSharedState_setValue',
      hi = new Map(),
      b0 = class {
        constructor(e) {
          (this.channel = e),
            (this.listeners = []),
            (this.state = {}),
            this.channel.on(ja, (t, n, r) => {
              this.state?.[t]?.index >= r ||
                (this.state[t] = { index: r, value: n });
            }),
            this.channel.on(pl, (t) => {
              let n = this.state[t]?.index ?? 0,
                r = this.state[t]?.value;
              this.channel.emit(ja, t, r, n);
            });
        }
        get(e) {
          return (
            this.state[e] || this.channel.emit(pl, e), this.state[e]?.value
          );
        }
        set(e, t) {
          let n = (this.state[e]?.index ?? 0) + 1;
          (this.state[e] = { index: n, value: t }),
            this.channel.emit(ja, e, t, n);
        }
        static subscribe(e, t) {
          let n = hi.get(e) || new b0(t);
          return (
            hi.has(e) ||
              (hi.set(e, n),
              n.channel.on(ja, (r, i) => {
                r === e && n.listeners.forEach((o) => o(i));
              })),
            {
              get value() {
                return n.get(e);
              },
              set value(r) {
                n.set(e, r);
              },
              on(r, i) {
                if (r !== 'change') throw new Error('unsupported event');
                n.listeners.push(i);
              },
              off(r, i) {
                if (r !== 'change') throw new Error('unsupported event');
                let o = n.listeners.indexOf(i);
                o >= 0 && n.listeners.splice(o, 1);
              },
            }
          );
        }
      };
    function Re(e) {
      let t = sn().getChannel();
      if (!t) throw new Error('Channel not available');
      let n = Te(b0.subscribe(e, t)),
        [r, i] = Me(n.current.value);
      return (
        pe(() => {
          let o = n.current;
          return o.on('change', i), () => o.off('change', i);
        }, [n]),
        [
          r,
          de((o) => {
            i(o), (n.current.value = o);
          }, []),
        ]
      );
    }
    var nu = {
        autoAcceptChanges: {
          description:
            'Automatically accept visual changes - usually for a specific branch name.',
          type: 'true or branch name',
        },
        buildScriptName: {
          description: 'The package.json script that builds your Storybook.',
          type: 'string',
        },
        cypress: {
          description:
            'Run build against `@chromatic-com/cypress` test archives.',
          type: 'boolean',
        },
        debug: {
          description: 'Output verbose logs and debug information.',
          type: 'boolean',
        },
        diagnosticsFile: {
          description: 'Write process information to a JSON file.',
          type: 'string or boolean',
        },
        exitOnceUploaded: {
          description:
            'Exit the process as soon as your Storybook is published.',
          type: 'string or boolean',
        },
        exitZeroOnChanges: {
          description:
            'Exit the process succesfully even when visual changes are found.',
          type: 'string or boolean',
        },
        externals: {
          description:
            'Disable TurboSnap when any of these files have changed since the baseline build.',
          type: "string: ['public/**']",
        },
        fileHashing: {
          description:
            'Apply file hashing to skip uploading unchanged files - default: true',
          type: 'boolean',
        },
        ignoreLastBuildOnBranch: {
          description:
            'Do not use the last build on this branch as a baseline if it is no longer in history (i.e. branch was rebased).',
          type: 'string',
        },
        junitReport: {
          description: 'Write build results to a JUnit XML file.',
          type: 'string or boolean',
        },
        logFile: {
          description: 'Write Chromatic CLI logs to a file.',
          type: 'string or boolean',
        },
        onlyChanged: {
          description:
            'Enables TurboSnap to only run stories affected by files changed since the baseline build.',
          type: 'true or string (branch name)',
          glob: !0,
        },
        onlyStoryFiles: {
          description:
            'Only run a single story or a subset of stories by their filename(s).',
          type: 'string[]',
        },
        onlyStoryNames: {
          description:
            'Only run a single story or a subset of stories by their name(s).',
          type: 'string[]',
        },
        outputDir: {
          description:
            'Relative path to target directory for building your Storybook, in case you want to preserve it.',
          type: 'string',
        },
        playwright: {
          description:
            'Run build against `@chromatic-com/playwright` test archives.',
          type: 'boolean',
        },
        projectId: {
          description: 'Unique identifier for your project. ',
          type: 'string',
        },
        projectToken: {
          description:
            'Secret token for your project. Preferably configured through CHROMATIC_PROJECT_TOKEN.',
          type: 'string',
        },
        skip: {
          description:
            'Skip Chromatic tests, but mark the commit as passing. Avoids blocking PRs due to required merge checks.',
          type: 'string or boolean',
        },
        storybookBaseDir: {
          description:
            'Relative path from repository root to Storybook project root.',
          type: 'string',
        },
        storybookBuildDir: {
          description: 'Path to the directory of an already built Storybook.',
          type: 'string',
        },
        storybookConfigDir: {
          description:
            'Relative path from where you run Chromatic to your Storybook config directory.',
          type: 'string',
        },
        storybookLogFile: {
          description: 'Write Storybook build logs to a file.',
          type: 'string or boolean',
        },
        untraced: {
          description:
            'Disregard these files and their dependencies when tracing dependent stories for TurboSnap.',
          type: 'string[]',
        },
        uploadMetadata: {
          description:
            'Upload Chromatic metadata files as part of the published Storybook.',
          type: 'boolean',
        },
        zip: {
          description:
            'Publish your Storybook to Chromatic as a single zip file instead of individual content files.',
          type: 'boolean',
        },
      },
      au = w(vo)({ position: 'absolute', right: 16, top: 10 }),
      ru = w.div(({ theme: e }) => ({
        backgroundColor: e.background.content,
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
        overflowY: 'auto',
        padding: 20,
        position: 'relative',
      })),
      iu = w.div({ margin: '0 auto', maxWidth: 600, width: '100%' }),
      hl = w.div(({ theme: e }) => ({
        borderBottom: `1px solid ${e.appBorderColor}`,
        marginBottom: 20,
        paddingBottom: 20,
        code: { fontSize: '90%' },
      })),
      ou = w(tr)({ marginBottom: 10 }),
      lu = w.div({ display: 'flex', flexDirection: 'column', gap: 20 }),
      fl = w.div(({ theme: e }) => ({
        alignItems: 'center',
        borderRadius: e.appBorderRadius,
        display: 'flex',
        flexWrap: 'wrap',
        '> div': { width: '100%' },
      })),
      gl = w.div(({ theme: e }) => ({
        display: 'flex',
        flexGrow: 1,
        flexWrap: 'wrap',
        gap: '5px 10px',
      })),
      vl = w.div(({ theme: e }) => ({
        fontWeight: e.typography.weight.bold,
        div: { marginLeft: 5, position: 'relative', top: 2 },
      })),
      yl = w.div({ marginTop: 10 }),
      su = w.div(({ hideBorderRadius: e, theme: t }) => ({
        background: t.base === 'dark' ? t.color.darkest : t.color.lighter,
        border: `1px solid ${t.appBorderColor}`,
        borderRadius: t.appBorderRadius,
        borderBottomLeftRadius: e ? 0 : t.appBorderRadius,
        borderBottomRightRadius: e ? 0 : t.appBorderRadius,
        color: t.base === 'dark' ? t.color.medium : t.color.dark,
        fontFamily: t.typography.fonts.mono,
        fontSize: 13,
        lineHeight: '20px',
        padding: '5px 10px',
        wordWrap: 'break-word',
      })),
      cu = w.div(({ theme: e }) => ({ color: e.color.warningText })),
      bl = w.div(({ theme: e }) => ({
        color: e.base === 'dark' ? e.color.medium : e.color.dark,
        marginTop: 2,
      })),
      El = w.div(({ warning: e, theme: t }) => ({
        alignItems: 'center',
        display: 'flex',
        backgroundColor: e
          ? t.base === 'dark'
            ? '#342E1A'
            : t.background.warning
          : t.background.hoverable,
        border: `1px solid ${t.appBorderColor}`,
        borderRadius: 3,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderTop: 0,
        fontSize: t.typography.size.s1,
        gap: 5,
        lineHeight: '20px',
        padding: 5,
        svg: {
          color: e
            ? t.base === 'dark'
              ? t.color.warning
              : t.color.warningText
            : t.color.secondary,
          flexShrink: 0,
        },
        code: { fontSize: '85%' },
      })),
      du = w.div(({ theme: e }) => ({
        '&:nth-last-of-type(2)': {
          borderBottom: `1px solid ${e.appBorderColor}`,
          paddingBottom: 30,
        },
      })),
      E0 = { height: 12, margin: 2, verticalAlign: 'top', width: 12 },
      uu = w(Vd)(E0),
      mu = w(_d)(E0),
      pu = ({ onClose: e }) => {
        let { uninstallAddon: t } = uo(),
          [n] = Re(oo),
          {
            configuration: r = {},
            problems: i = {},
            suggestions: o = {},
          } = n || {},
          { configFile: l, ...s } = r,
          c = Object.keys({ ...s, ...i, ...o })
            .sort()
            .map((d) => ({
              key: d,
              value: d in s ? s[d] : void 0,
              problem: i[d],
              suggestion: o[d],
            }));
        return a.createElement(
          ru,
          null,
          a.createElement(
            au,
            { onClick: e, style: { marginRight: -8 } },
            a.createElement(go, { 'aria-label': 'Close' })
          ),
          a.createElement(
            iu,
            null,
            a.createElement(ou, null, 'Configuration '),
            l
              ? a.createElement(
                  hl,
                  null,
                  'This is a read-only representation of the Chromatic configuration options found in',
                  ' ',
                  a.createElement(Be, null, l),
                  '. Changes to the config file will be reflected here.',
                  ' ',
                  a.createElement(
                    dn,
                    {
                      href: 'https://www.chromatic.com/docs/cli/#configuration-options',
                      target: '_blank',
                      withArrow: !0,
                    },
                    'Learn more'
                  )
                )
              : a.createElement(
                  hl,
                  null,
                  'To configure this addon, create ',
                  a.createElement(Be, null, 'chromatic.config.json'),
                  " in your project's root directory.",
                  ' ',
                  a.createElement(
                    dn,
                    {
                      href: 'https://www.chromatic.com/docs/cli/#configuration-options',
                      target: '_blank',
                      withArrow: !0,
                    },
                    'Learn more'
                  )
                ),
            c &&
              a.createElement(
                lu,
                null,
                c.map(({ key: d, value: u, problem: m, suggestion: p }) =>
                  a.createElement(
                    du,
                    { key: d, id: `${d}-option` },
                    a.createElement(
                      fl,
                      null,
                      a.createElement(
                        gl,
                        null,
                        a.createElement(vl, null, d, ' '),
                        d in u5 &&
                          a.createElement(
                            cu,
                            null,
                            '*Disabled for local builds'
                          )
                      ),
                      a.createElement(bl, null, nu[d]?.description),
                      a.createElement(
                        yl,
                        null,
                        a.createElement(
                          su,
                          { hideBorderRadius: !!(m || p) },
                          u === void 0 ? 'undefined' : JSON.stringify(u)
                        )
                      )
                    ),
                    m !== void 0 &&
                      a.createElement(
                        El,
                        { warning: !0 },
                        a.createElement(uu, null),
                        m === null
                          ? a.createElement(
                              'span',
                              null,
                              a.createElement('strong', null, 'Warning: '),
                              'This should be removed.'
                            )
                          : a.createElement(
                              'span',
                              null,
                              a.createElement('strong', null, 'Warning: '),
                              'This should be: ',
                              a.createElement(Be, null, JSON.stringify(m))
                            )
                      ),
                    p !== void 0 &&
                      a.createElement(
                        El,
                        null,
                        a.createElement(mu, null),
                        a.createElement(
                          'span',
                          null,
                          a.createElement('strong', null, 'Hint: '),
                          'Try setting as ',
                          a.createElement(Be, null, JSON.stringify(p))
                        )
                      )
                  )
                ),
                a.createElement(
                  'div',
                  null,
                  a.createElement(
                    fl,
                    null,
                    a.createElement(
                      gl,
                      null,
                      a.createElement(vl, null, 'Uninstall addon')
                    ),
                    a.createElement(
                      bl,
                      null,
                      'Removing the addon updates your Storybook configuration and uninstalls the dependency.'
                    ),
                    a.createElement(
                      yl,
                      null,
                      a.createElement(he, { onClick: t }, 'Uninstall')
                    )
                  )
                )
              )
          )
        );
      },
      k0 = {
        configVisible: !1,
        settingsVisible: !1,
        warningsVisible: !1,
        baselineImageVisible: !1,
        focusVisible: !1,
        diffVisible: !1,
      },
      mn = (e) => (t, n) => ({ ...t, [e]: typeof n == 'boolean' ? n : !t[e] }),
      hu = {
        toggleDiff: mn('diffVisible'),
        toggleFocus: mn('focusVisible'),
        toggleConfig: mn('configVisible'),
        toggleSettings: mn('settingsVisible'),
        toggleWarnings: mn('warningsVisible'),
        toggleBaselineImage: mn('baselineImageVisible'),
      },
      fu = (e, t) => hu[t.type](e, t.payload),
      w0 = Qe(k0),
      C0 = Qe(() => {}),
      Tr = () => Lt(w0, 'Controls'),
      An = () => {
        let e = Lt(C0, 'ControlsDispatch');
        return $t(
          () => ({
            toggleDiff: (t) => e({ type: 'toggleDiff', payload: t }),
            toggleFocus: (t) => e({ type: 'toggleFocus', payload: t }),
            toggleConfig: (t) => e({ type: 'toggleConfig', payload: t }),
            toggleSettings: (t) => e({ type: 'toggleSettings', payload: t }),
            toggleWarnings: (t) => e({ type: 'toggleWarnings', payload: t }),
            toggleBaselineImage: (t) =>
              e({ type: 'toggleBaselineImage', payload: t }),
          }),
          [e]
        );
      },
      gu = ({ children: e, initialState: t = k0 }) => {
        let [n, r] = ti(fu, t);
        return a.createElement(
          w0.Provider,
          { value: n },
          a.createElement(C0.Provider, { value: r }, e)
        );
      },
      je = w(Jo)(({ theme: e }) => ({
        marginBottom: '-4px',
        marginTop: '-4px',
        left: -8,
      })),
      vu = w.div({ '& > div': { minWidth: 120 } }),
      ca = ({ children: e, links: t, note: n, ...r }) => {
        let [i, o] = a.useState(!1),
          l = a.createElement(
            Ae,
            {
              closeOnOutsideClick: !0,
              closeOnTriggerHidden: !0,
              onVisibleChange: (s) => o(s),
              tooltip: ({ onHide: s }) =>
                a.createElement(
                  vu,
                  null,
                  a.createElement(Qo, {
                    links: t.map((c) => ({
                      ...c,
                      onClick: (...d) => (s(), c.onClick?.(...d)),
                    })),
                  })
                ),
              trigger: 'click',
              ...r,
            },
            typeof e == 'function'
              ? e(i)
              : a.createElement(rt, { active: i }, e)
          );
        return n
          ? a.createElement(
              Ae,
              {
                tooltip: a.createElement(je, { note: n }),
                trigger: 'hover',
                hasChrome: !1,
              },
              l
            )
          : l;
      },
      Zr = () => {
        let { accessToken: e, setAccessToken: t } = q1(),
          { toggleConfig: n } = An(),
          [r] = Re(H1),
          { projectId: i } = r || {},
          o = [
            {
              id: 'learn',
              title: 'About this addon',
              icon: a.createElement(Bd, { 'aria-hidden': !0 }),
              href: 'https://www.chromatic.com/docs/visual-testing-addon',
              target: '_blank',
            },
            {
              id: 'configuration',
              title: 'Configuration',
              icon: a.createElement(Od, { 'aria-hidden': !0 }),
              onClick: () => n(),
            },
            ...(i
              ? [
                  {
                    id: 'visit',
                    title: 'View project on Chromatic',
                    icon: a.createElement(h0, { 'aria-hidden': !0 }),
                    href: i
                      ? `https://www.chromatic.com/builds?appId=${
                          i?.split(':')[1]
                        }`
                      : 'https://www.chromatic.com/start',
                    target: '_blank',
                  },
                ]
              : []),
            ...(e
              ? [
                  {
                    id: 'logout',
                    title: 'Log out',
                    icon: a.createElement(qd, { 'aria-hidden': !0 }),
                    onClick: () => t(null),
                  },
                ]
              : []),
          ];
        return a.createElement(
          ca,
          { placement: 'top', links: o },
          a.createElement(Ld, null)
        );
      };
    w.div(({ hidden: e, theme: t }) => ({
      background: t.background.app,
      containerType: 'size',
      display: e ? 'none' : 'flex',
      flexDirection: 'column',
      height: '100%',
    }));
    var yu = w.div(
        { display: 'flex', flexDirection: 'column', flexGrow: 1 },
        ({ hidden: e }) => e && { display: 'none' }
      ),
      na = w.div(({ grow: e }) => e && { flexGrow: e ? 1 : 'auto' }),
      ta = w.div(
        { display: 'flex', flexDirection: 'row', margin: 15 },
        ({ header: e, theme: t }) =>
          e && {
            margin: 0,
            padding: 15,
            borderBottom: `1px solid ${t.appBorderColor}`,
            '@container (min-width: 800px)': {
              height: 40,
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '5px 15px',
            },
          }
      );
    w(ta)({ alignItems: 'center', height: 40, margin: '0 10px' });
    var Et = w.div(
        { display: 'flex', flexDirection: 'column', alignItems: 'center' },
        ({ push: e }) => e && { marginLeft: 'auto' }
      ),
      kl = w.div(({ theme: e }) => ({
        borderBottom: `1px solid ${e.appBorderColor}`,
        display: 'flex',
        alignItems: 'center',
        minHeight: 40,
        lineHeight: '20px',
        padding: '5px 15px',
      })),
      bu = w(na)(({ theme: e }) => ({
        background: e.background.warning,
        color: e.color.warningText,
      })),
      Eu = w(na)(({ theme: e }) => ({
        background: e.background.hoverable,
        color: e.color.defaultText,
      })),
      ku = ({
        hidden: e,
        ignoreConfig: t,
        ignoreSuggestions: n,
        onOpen: r,
      }) => {
        let [i] = Re(oo),
          o = Object.keys(i?.problems || {}),
          l = Object.keys(i?.suggestions || {}),
          [s, c] = Me(() => !!localStorage.getItem(ol)),
          d = de(() => {
            c(!0), localStorage.setItem(ol, 'true');
          }, []),
          u = a.createElement(
            De,
            { isButton: !0, onClick: () => r(o[0] || l[0]), withArrow: !0 },
            'Show details'
          );
        return o.length > 0 && !t
          ? a.createElement(
              bu,
              { hidden: e },
              a.createElement(
                kl,
                null,
                a.createElement(
                  Et,
                  null,
                  a.createElement(
                    'span',
                    null,
                    'Visual tests locked due to configuration ',
                    (0, Qd.default)('problem', o.length),
                    '.',
                    ' ',
                    u
                  )
                )
              )
            )
          : l.length > 0 && !s && !t && !n
          ? a.createElement(
              Eu,
              { hidden: e },
              a.createElement(
                kl,
                null,
                a.createElement(
                  Et,
                  null,
                  a.createElement(
                    'span',
                    null,
                    'Configuration could be improved. ',
                    u
                  )
                ),
                a.createElement(
                  Et,
                  { push: !0 },
                  a.createElement(rt, { onClick: d }, a.createElement(po, null))
                )
              )
            )
          : null;
      },
      wu = w.div({ display: 'flex', flexDirection: 'column', height: '100%' }),
      wl = w.div(({ hidden: e, theme: t }) => ({
        background: t.background.app,
        display: e ? 'none' : 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        height: '100%',
        overflowY: 'auto',
      })),
      Ir = w.div(({ theme: e }) => ({
        background: e.background.bar,
        borderTop: `1px solid ${e.appBorderColor}`,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 39,
        flexShrink: 0,
        padding: '0 10px',
      })),
      xe = ({
        children: e,
        footer: t = a.createElement(
          Ir,
          null,
          a.createElement(Et, { push: !0 }),
          a.createElement(Et, null, a.createElement(Zr, null))
        ),
        ignoreConfig: n = !1,
        ignoreSuggestions: r = !t,
      }) => {
        let { configVisible: i } = Tr(),
          { toggleConfig: o } = An(),
          l = de(
            (s) => {
              o(!0),
                s &&
                  setTimeout(() => {
                    document
                      .getElementById(`${s}-option`)
                      ?.scrollIntoView({
                        behavior: 'smooth',
                        inline: 'nearest',
                      });
                  }, 200);
            },
            [o]
          );
        return a.createElement(
          wu,
          null,
          a.createElement(ku, {
            onOpen: l,
            hidden: i,
            ignoreConfig: n,
            ignoreSuggestions: !t,
          }),
          a.createElement(wl, { hidden: i }, e),
          a.createElement(
            wl,
            { hidden: !i },
            a.createElement(pu, { onClose: () => o(!1) })
          ),
          t
        );
      },
      Cu = w.div(({ theme: e }) => ({
        position: 'relative',
        '&& input': {
          color: e.input.color || 'inherit',
          background: e.input.background,
          boxShadow: `${e.input.border} 0 0 0 1px inset`,
          borderRadius: e.input.borderRadius,
          fontSize: e.typography.size.s2,
          lineHeight: '20px',
        },
      })),
      xu = w.div(({ theme: e }) => ({
        pointerEvents: 'none',
        position: 'absolute',
        top: 0,
        left: 40,
        right: 0,
        zIndex: 2,
        overflow: 'hidden',
        height: 40,
        display: 'flex',
        alignItems: 'center',
        lineHeight: '20px',
        color: e.input.color || 'inherit',
        span: { opacity: 0 },
      })),
      Su = ({ value: e, placeholder: t, suffix: n }) =>
        a.createElement(
          xu,
          null,
          a.createElement('span', null, e || t),
          a.createElement('b', null, n)
        ),
      Mu = ({ id: e, value: t, placeholder: n, suffix: r, ...i }) =>
        a.createElement(
          Cu,
          null,
          a.createElement(o0, {
            id: e,
            hideLabel: !0,
            label: '',
            value: t,
            placeholder: n,
            crossOrigin: void 0,
            enterKeyHint: void 0,
            ...i,
          }),
          a.createElement(Su, { value: t, placeholder: n, suffix: r })
        ),
      ee = w.div(
        ({ center: e, small: t, block: n, theme: r }) => ({
          display: n ? 'block' : 'inline-block',
          color: r.color.defaultText,
          fontSize: t ? r.typography.size.s1 : r.typography.size.s2,
          lineHeight: t ? '18px' : '20px',
          textAlign: e ? 'center' : 'left',
          textWrap: 'balance',
        }),
        ({ muted: e, theme: t }) =>
          e && { color: t.base === 'light' ? t.color.dark : '#C9CDCF' },
        ({ theme: e }) => ({
          b: { color: e.color.defaultText },
          code: {
            fontSize: e.typography.size.s1,
            border: `1px solid ${e.appBorderColor}`,
            borderRadius: 3,
            padding: 2,
          },
          small: { fontSize: e.typography.size.s1 },
          span: { whiteSpace: 'nowrap' },
          svg: { verticalAlign: 'top' },
        })
      ),
      Nu = w.form({
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: 300,
        margin: 10,
      }),
      Fu = w(ai)({
        '&&': {
          fontSize: 13,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderBottomLeftRadius: 4,
          borderBottomRightRadius: 4,
        },
      }),
      Au = ({ onBack: e, onSignIn: t }) => {
        let n = pt(),
          [r, i] = Me(''),
          [o, l] = Me(null),
          s = de((d) => {
            let u = d.target.value.replace(/[^a-z0-9-]/g, '');
            i(u), l(null);
          }, []),
          c = de(
            (d) => {
              d.preventDefault(), r ? t(r) : l('Please enter a subdomain');
            },
            [r, t]
          );
        return a.createElement(
          xe,
          { footer: null, ignoreConfig: !0 },
          a.createElement(
            fe,
            null,
            a.createElement(
              fo,
              { onClick: e },
              a.createElement(ho, {
                color: n.base === 'light' ? 'currentColor' : n.color.medium,
              }),
              'Back'
            ),
            a.createElement(
              'div',
              null,
              a.createElement(v0, null),
              a.createElement(an, null)
            ),
            a.createElement(Se, null, 'Sign in with SSO'),
            a.createElement(
              ee,
              { muted: !0 },
              "Enter your team's Chromatic URL."
            ),
            a.createElement(
              Nu,
              { onSubmit: c },
              a.createElement(Mu, {
                autoFocus: !0,
                icon: 'users',
                value: r,
                placeholder: 'yourteam',
                suffix: '.chromatic.com',
                onChange: s,
                id: 'subdomain-input',
                stackLevel: 'top',
                error: o,
                errorTooltipPlacement: 'top',
              }),
              a.createElement(
                Fu,
                { type: 'submit', variant: 'solid', size: 'medium' },
                'Continue'
              )
            )
          )
        );
      },
      Nt = w.div(() => ({
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
        alignItems: 'center',
        textAlign: 'center',
      })),
      ge = w.div((e) => ({
        display: 'flex',
        flexDirection: 'column',
        gap: 15,
        alignItems: e.alignItems ?? 'center',
        textAlign: e.textAlign ?? 'center',
      })),
      Ou = w.span(({ theme: e }) => ({
        color: e.base === 'light' ? e.color.defaultText : e.color.light,
      })),
      Lu = ({ onBack: e, onSignIn: t, onSignInWithSSO: n }) => {
        let r = pt();
        return a.createElement(
          xe,
          { footer: null, ignoreConfig: !0 },
          a.createElement(
            fe,
            null,
            e &&
              a.createElement(
                fo,
                { onClick: e },
                a.createElement(ho, {
                  color: r.base === 'light' ? 'currentColor' : r.color.medium,
                }),
                a.createElement(Ou, null, 'Back')
              ),
            a.createElement(
              ge,
              { alignItems: 'center', textAlign: 'center' },
              a.createElement(
                'div',
                null,
                a.createElement(v0, null),
                a.createElement(an, null),
                a.createElement(Se, null, 'Sign in to begin visual testing'),
                a.createElement(
                  ee,
                  { center: !0, muted: !0 },
                  'Pinpoint bugs instantly by connecting with cloud browsers that run visual tests in parallel.'
                )
              ),
              a.createElement(
                Nt,
                null,
                a.createElement(
                  he,
                  { variant: 'solid', size: 'medium', onClick: () => t() },
                  'Sign in with Chromatic'
                ),
                a.createElement(
                  he,
                  { link: !0, onClick: () => n() },
                  'Sign in with SSO'
                )
              )
            )
          )
        );
      },
      _u = {
        NAME: 'Name',
        DOCUMENT: 'Document',
        OPERATION_DEFINITION: 'OperationDefinition',
        VARIABLE_DEFINITION: 'VariableDefinition',
        SELECTION_SET: 'SelectionSet',
        FIELD: 'Field',
        ARGUMENT: 'Argument',
        FRAGMENT_SPREAD: 'FragmentSpread',
        INLINE_FRAGMENT: 'InlineFragment',
        FRAGMENT_DEFINITION: 'FragmentDefinition',
        VARIABLE: 'Variable',
        INT: 'IntValue',
        FLOAT: 'FloatValue',
        STRING: 'StringValue',
        BOOLEAN: 'BooleanValue',
        NULL: 'NullValue',
        ENUM: 'EnumValue',
        LIST: 'ListValue',
        OBJECT: 'ObjectValue',
        OBJECT_FIELD: 'ObjectField',
        DIRECTIVE: 'Directive',
        NAMED_TYPE: 'NamedType',
        LIST_TYPE: 'ListType',
        NON_NULL_TYPE: 'NonNullType',
      },
      Pi = class extends Error {
        constructor(e, t, n, r, i, o, l) {
          super(e),
            (this.name = 'GraphQLError'),
            (this.message = e),
            i && (this.path = i),
            t && (this.nodes = Array.isArray(t) ? t : [t]),
            n && (this.source = n),
            r && (this.positions = r),
            o && (this.originalError = o);
          var s = l;
          if (!s && o) {
            var c = o.extensions;
            c && typeof c == 'object' && (s = c);
          }
          this.extensions = s || {};
        }
        toJSON() {
          return { ...this, message: this.message };
        }
        toString() {
          return this.message;
        }
        get [Symbol.toStringTag]() {
          return 'GraphQLError';
        }
      },
      we,
      Y;
    function Fe(e) {
      return new Pi(`Syntax Error: Unexpected token at ${Y} in ${e}`);
    }
    function qe(e) {
      if (((e.lastIndex = Y), e.test(we)))
        return we.slice(Y, (Y = e.lastIndex));
    }
    var Ha = / +(?=[^\s])/y;
    function Tu(e) {
      for (
        var t = e.split(`
`),
          n = '',
          r = 0,
          i = 0,
          o = t.length - 1,
          l = 0;
        l < t.length;
        l++
      )
        (Ha.lastIndex = 0),
          Ha.test(t[l]) &&
            (l && (!r || Ha.lastIndex < r) && (r = Ha.lastIndex),
            (i = i || l),
            (o = l));
      for (var s = i; s <= o; s++)
        s !== i &&
          (n += `
`),
          (n += t[s].slice(r).replace(/\\"""/g, '"""'));
      return n;
    }
    function X() {
      for (
        var e = 0 | we.charCodeAt(Y++);
        e === 9 ||
        e === 10 ||
        e === 13 ||
        e === 32 ||
        e === 35 ||
        e === 44 ||
        e === 65279;
        e = 0 | we.charCodeAt(Y++)
      )
        if (e === 35) for (; (e = we.charCodeAt(Y++)) !== 10 && e !== 13; );
      Y--;
    }
    var x0 = /[_A-Za-z]\w*/y;
    function wt() {
      var e;
      if ((e = qe(x0))) return { kind: 'Name', value: e };
    }
    var Zu = /(?:null|true|false)/y,
      S0 = /\$[_A-Za-z]\w*/y,
      Iu = /-?\d+/y,
      Ru = /(?:\.\d+)?[eE][+-]?\d+|\.\d+/y,
      Bu = /\\/g,
      Pu = /"""(?:"""|(?:[\s\S]*?[^\\])""")/y,
      Vu = /"(?:"|[^\r\n]*?[^\\]")/y;
    function nr(e) {
      var t, n;
      if ((n = qe(Zu)))
        t =
          n === 'null'
            ? { kind: 'NullValue' }
            : { kind: 'BooleanValue', value: n === 'true' };
      else if (!e && (n = qe(S0)))
        t = { kind: 'Variable', name: { kind: 'Name', value: n.slice(1) } };
      else if ((n = qe(Iu))) {
        var r = n;
        (n = qe(Ru))
          ? (t = { kind: 'FloatValue', value: r + n })
          : (t = { kind: 'IntValue', value: r });
      } else if ((n = qe(x0))) t = { kind: 'EnumValue', value: n };
      else if ((n = qe(Pu)))
        t = { kind: 'StringValue', value: Tu(n.slice(3, -3)), block: !0 };
      else if ((n = qe(Vu)))
        t = {
          kind: 'StringValue',
          value: Bu.test(n) ? JSON.parse(n) : n.slice(1, -1),
          block: !1,
        };
      else if (
        (t =
          (function (i) {
            var o;
            if (we.charCodeAt(Y) === 91) {
              Y++, X();
              for (var l = []; (o = nr(i)); ) l.push(o);
              if (we.charCodeAt(Y++) !== 93) throw Fe('ListValue');
              return X(), { kind: 'ListValue', values: l };
            }
          })(e) ||
          (function (i) {
            if (we.charCodeAt(Y) === 123) {
              Y++, X();
              for (var o = [], l; (l = wt()); ) {
                if ((X(), we.charCodeAt(Y++) !== 58)) throw Fe('ObjectField');
                X();
                var s = nr(i);
                if (!s) throw Fe('ObjectField');
                o.push({ kind: 'ObjectField', name: l, value: s });
              }
              if (we.charCodeAt(Y++) !== 125) throw Fe('ObjectValue');
              return X(), { kind: 'ObjectValue', fields: o };
            }
          })(e))
      )
        return t;
      return X(), t;
    }
    function M0(e) {
      var t = [];
      if ((X(), we.charCodeAt(Y) === 40)) {
        Y++, X();
        for (var n; (n = wt()); ) {
          if ((X(), we.charCodeAt(Y++) !== 58)) throw Fe('Argument');
          X();
          var r = nr(e);
          if (!r) throw Fe('Argument');
          t.push({ kind: 'Argument', name: n, value: r });
        }
        if (!t.length || we.charCodeAt(Y++) !== 41) throw Fe('Argument');
        X();
      }
      return t;
    }
    function bn(e) {
      var t = [];
      for (X(); we.charCodeAt(Y) === 64; ) {
        Y++;
        var n = wt();
        if (!n) throw Fe('Directive');
        X(), t.push({ kind: 'Directive', name: n, arguments: M0(e) });
      }
      return t;
    }
    function ju() {
      var e = wt();
      if (e) {
        X();
        var t;
        if (we.charCodeAt(Y) === 58) {
          if ((Y++, X(), (t = e), !(e = wt()))) throw Fe('Field');
          X();
        }
        return {
          kind: 'Field',
          alias: t,
          name: e,
          arguments: M0(!1),
          directives: bn(!1),
          selectionSet: Rr(),
        };
      }
    }
    function N0() {
      var e;
      if ((X(), we.charCodeAt(Y) === 91)) {
        Y++, X();
        var t = N0();
        if (!t || we.charCodeAt(Y++) !== 93) throw Fe('ListType');
        e = { kind: 'ListType', type: t };
      } else if ((e = wt())) e = { kind: 'NamedType', name: e };
      else throw Fe('NamedType');
      return (
        X(),
        we.charCodeAt(Y) === 33
          ? (Y++, X(), { kind: 'NonNullType', type: e })
          : e
      );
    }
    var Hu = /on/y;
    function F0() {
      if (qe(Hu)) {
        X();
        var e = wt();
        if (!e) throw Fe('NamedType');
        return X(), { kind: 'NamedType', name: e };
      }
    }
    var Du = /\.\.\./y;
    function zu() {
      if (qe(Du)) {
        X();
        var e = Y,
          t;
        if ((t = wt()) && t.value !== 'on')
          return { kind: 'FragmentSpread', name: t, directives: bn(!1) };
        Y = e;
        var n = F0(),
          r = bn(!1),
          i = Rr();
        if (!i) throw Fe('InlineFragment');
        return {
          kind: 'InlineFragment',
          typeCondition: n,
          directives: r,
          selectionSet: i,
        };
      }
    }
    function Rr() {
      var e;
      if ((X(), we.charCodeAt(Y) === 123)) {
        Y++, X();
        for (var t = []; (e = zu() || ju()); ) t.push(e);
        if (!t.length || we.charCodeAt(Y++) !== 125) throw Fe('SelectionSet');
        return X(), { kind: 'SelectionSet', selections: t };
      }
    }
    var Uu = /fragment/y;
    function $u() {
      if (qe(Uu)) {
        X();
        var e = wt();
        if (!e) throw Fe('FragmentDefinition');
        X();
        var t = F0();
        if (!t) throw Fe('FragmentDefinition');
        var n = bn(!1),
          r = Rr();
        if (!r) throw Fe('FragmentDefinition');
        return {
          kind: 'FragmentDefinition',
          name: e,
          typeCondition: t,
          directives: n,
          selectionSet: r,
        };
      }
    }
    var Wu = /(?:query|mutation|subscription)/y;
    function Gu() {
      var e,
        t,
        n = [],
        r = [];
      (e = qe(Wu)) &&
        (X(),
        (t = wt()),
        (n = (function () {
          var o,
            l = [];
          if ((X(), we.charCodeAt(Y) === 40)) {
            for (Y++, X(); (o = qe(S0)); ) {
              if ((X(), we.charCodeAt(Y++) !== 58))
                throw Fe('VariableDefinition');
              var s = N0(),
                c = void 0;
              if (we.charCodeAt(Y) === 61 && (Y++, X(), !(c = nr(!0))))
                throw Fe('VariableDefinition');
              X(),
                l.push({
                  kind: 'VariableDefinition',
                  variable: {
                    kind: 'Variable',
                    name: { kind: 'Name', value: o.slice(1) },
                  },
                  type: s,
                  defaultValue: c,
                  directives: bn(!0),
                });
            }
            if (we.charCodeAt(Y++) !== 41) throw Fe('VariableDefinition');
            X();
          }
          return l;
        })()),
        (r = bn(!1)));
      var i = Rr();
      if (i)
        return {
          kind: 'OperationDefinition',
          operation: e || 'query',
          name: t,
          variableDefinitions: n,
          directives: r,
          selectionSet: i,
        };
    }
    function qu(e, t) {
      return (
        (we = typeof e.body == 'string' ? e.body : e),
        (Y = 0),
        (function () {
          var n;
          X();
          for (var r = []; (n = $u() || Gu()); ) r.push(n);
          return { kind: 'Document', definitions: r };
        })()
      );
    }
    function Yu(e) {
      return JSON.stringify(e);
    }
    function Qu(e) {
      return (
        `"""
` +
        e.replace(/"""/g, '\\"""') +
        `
"""`
      );
    }
    var Ke = (e) => !(!e || !e.length),
      Ze = {
        OperationDefinition(e) {
          if (
            e.operation === 'query' &&
            !e.name &&
            !Ke(e.variableDefinitions) &&
            !Ke(e.directives)
          )
            return Ze.SelectionSet(e.selectionSet);
          var t = e.operation;
          return (
            e.name && (t += ' ' + e.name.value),
            Ke(e.variableDefinitions) &&
              (e.name || (t += ' '),
              (t +=
                '(' +
                e.variableDefinitions.map(Ze.VariableDefinition).join(', ') +
                ')')),
            Ke(e.directives) &&
              (t += ' ' + e.directives.map(Ze.Directive).join(' ')),
            t + ' ' + Ze.SelectionSet(e.selectionSet)
          );
        },
        VariableDefinition(e) {
          var t = Ze.Variable(e.variable) + ': ' + Je(e.type);
          return (
            e.defaultValue && (t += ' = ' + Je(e.defaultValue)),
            Ke(e.directives) &&
              (t += ' ' + e.directives.map(Ze.Directive).join(' ')),
            t
          );
        },
        Field(e) {
          var t = (e.alias ? e.alias.value + ': ' : '') + e.name.value;
          if (Ke(e.arguments)) {
            var n = e.arguments.map(Ze.Argument),
              r = t + '(' + n.join(', ') + ')';
            t =
              r.length > 80
                ? t +
                  `(
  ` +
                  n
                    .join(
                      `
`
                    )
                    .replace(
                      /\n/g,
                      `
  `
                    ) +
                  `
)`
                : r;
          }
          return (
            Ke(e.directives) &&
              (t += ' ' + e.directives.map(Ze.Directive).join(' ')),
            e.selectionSet ? t + ' ' + Ze.SelectionSet(e.selectionSet) : t
          );
        },
        StringValue: (e) => (e.block ? Qu(e.value) : Yu(e.value)),
        BooleanValue: (e) => '' + e.value,
        NullValue: (e) => 'null',
        IntValue: (e) => e.value,
        FloatValue: (e) => e.value,
        EnumValue: (e) => e.value,
        Name: (e) => e.value,
        Variable: (e) => '$' + e.name.value,
        ListValue: (e) => '[' + e.values.map(Je).join(', ') + ']',
        ObjectValue: (e) => '{' + e.fields.map(Ze.ObjectField).join(', ') + '}',
        ObjectField: (e) => e.name.value + ': ' + Je(e.value),
        Document: (e) =>
          Ke(e.definitions)
            ? e.definitions.map(Je).join(`

`)
            : '',
        SelectionSet: (e) =>
          `{
  ` +
          e.selections
            .map(Je)
            .join(
              `
`
            )
            .replace(
              /\n/g,
              `
  `
            ) +
          `
}`,
        Argument: (e) => e.name.value + ': ' + Je(e.value),
        FragmentSpread(e) {
          var t = '...' + e.name.value;
          return (
            Ke(e.directives) &&
              (t += ' ' + e.directives.map(Ze.Directive).join(' ')),
            t
          );
        },
        InlineFragment(e) {
          var t = '...';
          return (
            e.typeCondition && (t += ' on ' + e.typeCondition.name.value),
            Ke(e.directives) &&
              (t += ' ' + e.directives.map(Ze.Directive).join(' ')),
            t + ' ' + Je(e.selectionSet)
          );
        },
        FragmentDefinition(e) {
          var t = 'fragment ' + e.name.value;
          return (
            (t += ' on ' + e.typeCondition.name.value),
            Ke(e.directives) &&
              (t += ' ' + e.directives.map(Ze.Directive).join(' ')),
            t + ' ' + Je(e.selectionSet)
          );
        },
        Directive(e) {
          var t = '@' + e.name.value;
          return (
            Ke(e.arguments) &&
              (t += '(' + e.arguments.map(Ze.Argument).join(', ') + ')'),
            t
          );
        },
        NamedType: (e) => e.name.value,
        ListType: (e) => '[' + Je(e.type) + ']',
        NonNullType: (e) => Je(e.type) + '!',
      };
    function Je(e) {
      return Ze[e.kind] ? Ze[e.kind](e) : '';
    }
    var yo = () => {},
      Ye = yo;
    function st(e) {
      return { tag: 0, 0: e };
    }
    function xa(e) {
      return { tag: 1, 0: e };
    }
    var Cl = () =>
        (typeof Symbol == 'function' && Symbol.asyncIterator) ||
        '@@asyncIterator',
      Ku = (e) => e;
    function $e(e) {
      return (t) => (n) => {
        var r = Ye;
        t((i) => {
          i === 0
            ? n(0)
            : i.tag === 0
            ? ((r = i[0]), n(i))
            : e(i[0])
            ? n(i)
            : r(0);
        });
      };
    }
    function Vi(e) {
      return (t) => (n) =>
        t((r) => {
          r === 0 || r.tag === 0 ? n(r) : n(xa(e(r[0])));
        });
    }
    function ar(e) {
      return (t) => (n) => {
        var r = [],
          i = Ye,
          o = !1,
          l = !1;
        t((s) => {
          l ||
            (s === 0
              ? ((l = !0), r.length || n(0))
              : s.tag === 0
              ? (i = s[0])
              : ((o = !1),
                (function (c) {
                  var d = Ye;
                  c((u) => {
                    if (u === 0) {
                      if (r.length) {
                        var m = r.indexOf(d);
                        m > -1 && (r = r.slice()).splice(m, 1),
                          r.length || (l ? n(0) : o || ((o = !0), i(0)));
                      }
                    } else
                      u.tag === 0
                        ? (r.push((d = u[0])), d(0))
                        : r.length && (n(u), d(0));
                  });
                })(e(s[0])),
                o || ((o = !0), i(0))));
        }),
          n(
            st((s) => {
              if (s === 1) {
                l || ((l = !0), i(1));
                for (var c = 0, d = r, u = r.length; c < u; c++) d[c](1);
                r.length = 0;
              } else {
                !l && !o ? ((o = !0), i(0)) : (o = !1);
                for (var m = 0, p = r, v = r.length; m < v; m++) p[m](0);
              }
            })
          );
      };
    }
    function Ju(e) {
      return ar(Ku)(e);
    }
    function da(e) {
      return Ju(t2(e));
    }
    function bo(e) {
      return (t) => (n) => {
        var r = !1;
        t((i) => {
          if (!r)
            if (i === 0) (r = !0), n(0), e();
            else if (i.tag === 0) {
              var o = i[0];
              n(
                st((l) => {
                  l === 1 ? ((r = !0), o(1), e()) : o(l);
                })
              );
            } else n(i);
        });
      };
    }
    function rr(e) {
      return (t) => (n) => {
        var r = !1;
        t((i) => {
          if (!r)
            if (i === 0) (r = !0), n(0);
            else if (i.tag === 0) {
              var o = i[0];
              n(
                st((l) => {
                  l === 1 && (r = !0), o(l);
                })
              );
            } else e(i[0]), n(i);
        });
      };
    }
    function ji(e) {
      return (t) => (n) =>
        t((r) => {
          r === 0 ? n(0) : r.tag === 0 ? (n(r), e()) : n(r);
        });
    }
    function ua(e) {
      var t = [],
        n = Ye,
        r = !1;
      return (i) => {
        t.push(i),
          t.length === 1 &&
            e((o) => {
              if (o === 0) {
                for (var l = 0, s = t, c = t.length; l < c; l++) s[l](0);
                t.length = 0;
              } else if (o.tag === 0) n = o[0];
              else {
                r = !1;
                for (var d = 0, u = t, m = t.length; d < m; d++) u[d](o);
              }
            }),
          i(
            st((o) => {
              if (o === 1) {
                var l = t.indexOf(i);
                l > -1 && (t = t.slice()).splice(l, 1), t.length || n(1);
              } else r || ((r = !0), n(0));
            })
          );
      };
    }
    function xl(e) {
      return (t) => (n) => {
        var r = Ye,
          i = Ye,
          o = !1,
          l = !1,
          s = !1,
          c = !1;
        t((d) => {
          c ||
            (d === 0
              ? ((c = !0), s || n(0))
              : d.tag === 0
              ? (r = d[0])
              : (s && (i(1), (i = Ye)),
                o ? (o = !1) : ((o = !0), r(0)),
                (function (u) {
                  (s = !0),
                    u((m) => {
                      s &&
                        (m === 0
                          ? ((s = !1), c ? n(0) : o || ((o = !0), r(0)))
                          : m.tag === 0
                          ? ((l = !1), (i = m[0])(0))
                          : (n(m), l ? (l = !1) : i(0)));
                    });
                })(e(d[0]))));
        }),
          n(
            st((d) => {
              d === 1
                ? (c || ((c = !0), r(1)), s && ((s = !1), i(1)))
                : (!c && !o && ((o = !0), r(0)), s && !l && ((l = !0), i(0)));
            })
          );
      };
    }
    function Br(e) {
      return (t) => (n) => {
        var r = Ye,
          i = !1,
          o = 0;
        t((l) => {
          i ||
            (l === 0
              ? ((i = !0), n(0))
              : l.tag === 0
              ? e <= 0
                ? ((i = !0), n(0), l[0](1))
                : (r = l[0])
              : o++ < e
              ? (n(l), !i && o >= e && ((i = !0), n(0), r(1)))
              : n(l));
        }),
          n(
            st((l) => {
              l === 1 && !i ? ((i = !0), r(1)) : l === 0 && !i && o < e && r(0);
            })
          );
      };
    }
    function A0(e) {
      return (t) => (n) => {
        var r = Ye,
          i = Ye,
          o = !1;
        t((l) => {
          o ||
            (l === 0
              ? ((o = !0), i(1), n(0))
              : l.tag === 0
              ? ((r = l[0]),
                e((s) => {
                  s === 0 ||
                    (s.tag === 0
                      ? (i = s[0])(0)
                      : ((o = !0), i(1), r(1), n(0)));
                }))
              : n(l));
        }),
          n(
            st((l) => {
              l === 1 && !o ? ((o = !0), r(1), i(1)) : o || r(0);
            })
          );
      };
    }
    function O0(e, t) {
      return (n) => (r) => {
        var i = Ye,
          o = !1;
        n((l) => {
          o ||
            (l === 0
              ? ((o = !0), r(0))
              : l.tag === 0
              ? ((i = l[0]), r(l))
              : e(l[0])
              ? r(l)
              : ((o = !0), t && r(l), r(0), i(1)));
        });
      };
    }
    function Xu(e) {
      return (t) => e()(t);
    }
    function L0(e) {
      return (t) => {
        var n = (e[Cl()] && e[Cl()]()) || e,
          r = !1,
          i = !1,
          o = !1,
          l;
        t(
          st(async (s) => {
            if (s === 1) (r = !0), n.return && n.return();
            else if (i) o = !0;
            else {
              for (o = i = !0; o && !r; )
                if ((l = await n.next()).done)
                  (r = !0), n.return && (await n.return()), t(0);
                else
                  try {
                    (o = !1), t(xa(l.value));
                  } catch (c) {
                    if (n.throw) (r = !!(await n.throw(c)).done) && t(0);
                    else throw c;
                  }
              i = !1;
            }
          })
        );
      };
    }
    function e2(e) {
      return e[Symbol.asyncIterator]
        ? L0(e)
        : (t) => {
            var n = e[Symbol.iterator](),
              r = !1,
              i = !1,
              o = !1,
              l;
            t(
              st((s) => {
                if (s === 1) (r = !0), n.return && n.return();
                else if (i) o = !0;
                else {
                  for (o = i = !0; o && !r; )
                    if ((l = n.next()).done)
                      (r = !0), n.return && n.return(), t(0);
                    else
                      try {
                        (o = !1), t(xa(l.value));
                      } catch (c) {
                        if (n.throw) (r = !!n.throw(c).done) && t(0);
                        else throw c;
                      }
                  i = !1;
                }
              })
            );
          };
    }
    var t2 = e2;
    function aa(e) {
      return (t) => {
        var n = !1;
        t(
          st((r) => {
            r === 1 ? (n = !0) : n || ((n = !0), t(xa(e)), t(0));
          })
        );
      };
    }
    function _0(e) {
      return (t) => {
        var n = !1,
          r = e({
            next(i) {
              n || t(xa(i));
            },
            complete() {
              n || ((n = !0), t(0));
            },
          });
        t(
          st((i) => {
            i === 1 && !n && ((n = !0), r());
          })
        );
      };
    }
    function Hi() {
      var e, t;
      return {
        source: ua(_0((n) => ((e = n.next), (t = n.complete), yo))),
        next(n) {
          e && e(n);
        },
        complete() {
          t && t();
        },
      };
    }
    function Sl(e) {
      return _0(
        (t) => (
          e.then((n) => {
            Promise.resolve(n).then(() => {
              t.next(n), t.complete();
            });
          }),
          yo
        )
      );
    }
    function En(e) {
      return (t) => {
        var n = Ye,
          r = !1;
        return (
          t((i) => {
            i === 0
              ? (r = !0)
              : i.tag === 0
              ? (n = i[0])(0)
              : r || (e(i[0]), n(0));
          }),
          {
            unsubscribe() {
              r || ((r = !0), n(1));
            },
          }
        );
      };
    }
    function n2(e) {
      En((t) => {})(e);
    }
    function Eo(e) {
      return new Promise((t) => {
        var n = Ye,
          r;
        e((i) => {
          i === 0
            ? Promise.resolve(r).then(t)
            : i.tag === 0
            ? (n = i[0])(0)
            : ((r = i[0]), n(0));
        });
      });
    }
    var a2 = (e) =>
        e && e.message && (e.extensions || e.name === 'GraphQLError')
          ? e
          : typeof e == 'object' && e.message
          ? new Pi(
              e.message,
              e.nodes,
              e.source,
              e.positions,
              e.path,
              e,
              e.extensions || {}
            )
          : new Pi(e),
      ko = class extends Error {
        constructor(e) {
          var t = (e.graphQLErrors || []).map(a2),
            n = ((r, i) => {
              var o = '';
              if (r) return `[Network] ${r.message}`;
              if (i)
                for (var l of i)
                  o &&
                    (o += `
`),
                    (o += `[GraphQL] ${l.message}`);
              return o;
            })(e.networkError, t);
          super(n),
            (this.name = 'CombinedError'),
            (this.message = n),
            (this.graphQLErrors = t),
            (this.networkError = e.networkError),
            (this.response = e.response);
        }
        toString() {
          return this.message;
        }
      },
      Di = (e, t) => {
        for (var n = 0 | (t || 5381), r = 0, i = 0 | e.length; r < i; r++)
          n = (n << 5) + n + e.charCodeAt(r);
        return n;
      },
      Qt = new Set(),
      Ml = new WeakMap(),
      pn = (e) => {
        if (e === null || Qt.has(e)) return 'null';
        if (typeof e != 'object') return JSON.stringify(e) || '';
        if (e.toJSON) return pn(e.toJSON());
        if (Array.isArray(e)) {
          var t = '[';
          for (var n of e) t.length > 1 && (t += ','), (t += pn(n) || 'null');
          return (t += ']');
        } else if (
          (or !== kn && e instanceof or) ||
          (lr !== kn && e instanceof lr)
        )
          return 'null';
        var r = Object.keys(e).sort();
        if (
          !r.length &&
          e.constructor &&
          Object.getPrototypeOf(e).constructor !== Object.prototype.constructor
        ) {
          var i = Ml.get(e) || Math.random().toString(36).slice(2);
          return Ml.set(e, i), pn({ __key: i });
        }
        Qt.add(e);
        var o = '{';
        for (var l of r) {
          var s = pn(e[l]);
          s && (o.length > 1 && (o += ','), (o += pn(l) + ':' + s));
        }
        return Qt.delete(e), (o += '}');
      },
      zi = (e, t, n) => {
        if (!(n == null || typeof n != 'object' || n.toJSON || Qt.has(n)))
          if (Array.isArray(n))
            for (var r = 0, i = n.length; r < i; r++) zi(e, `${t}.${r}`, n[r]);
          else if (n instanceof or || n instanceof lr) e.set(t, n);
          else {
            Qt.add(n);
            for (var o of Object.keys(n)) zi(e, `${t}.${o}`, n[o]);
          }
      },
      ir = (e) => (Qt.clear(), pn(e)),
      kn = class {},
      or = typeof File < 'u' ? File : kn,
      lr = typeof Blob < 'u' ? Blob : kn,
      r2 = /("{3}[\s\S]*"{3}|"(?:\\.|[^"])*")/g,
      i2 = /(?:#[^\n\r]+)?(?:[\r\n]+|$)/g,
      o2 = (e, t) =>
        t % 2 == 0
          ? e.replace(
              i2,
              `
`
            )
          : e,
      Nl = (e) => e.split(r2).map(o2).join('').trim(),
      Fl = new Map(),
      Ka = new Map(),
      wo = (e) => {
        var t;
        return (
          typeof e == 'string'
            ? (t = Nl(e))
            : e.loc && Ka.get(e.__key) === e
            ? (t = e.loc.source.body)
            : ((t = Fl.get(e) || Nl(Je(e))), Fl.set(e, t)),
          typeof e != 'string' &&
            !e.loc &&
            (e.loc = {
              start: 0,
              end: t.length,
              source: {
                body: t,
                name: 'gql',
                locationOffset: { line: 1, column: 1 },
              },
            }),
          t
        );
      },
      Al = (e) => {
        var t = Di(wo(e));
        if (e.definitions) {
          var n = T0(e);
          n &&
            (t = Di(
              `
# ${n}`,
              t
            ));
        }
        return t;
      },
      l2 = (e) => {
        var t, n;
        return (
          typeof e == 'string'
            ? ((t = Al(e)), (n = Ka.get(t) || qu(e)))
            : ((t = e.__key || Al(e)), (n = Ka.get(t) || e)),
          n.loc || wo(n),
          (n.__key = t),
          Ka.set(t, n),
          n
        );
      },
      vn = (e, t, n) => {
        var r = t || {},
          i = l2(e),
          o = ir(r),
          l = i.__key;
        return (
          o !== '{}' && (l = Di(o, l)),
          { key: l, query: i, variables: r, extensions: n }
        );
      },
      T0 = (e) => {
        for (var t of e.definitions)
          if (t.kind === _u.OPERATION_DEFINITION)
            return t.name ? t.name.value : void 0;
      },
      Ol = (e, t, n) => {
        if (!('data' in t || ('errors' in t && Array.isArray(t.errors))))
          throw new Error('No Content');
        var r = e.kind === 'subscription';
        return {
          operation: e,
          data: t.data,
          error: Array.isArray(t.errors)
            ? new ko({ graphQLErrors: t.errors, response: n })
            : void 0,
          extensions: t.extensions ? { ...t.extensions } : void 0,
          hasNext: t.hasNext == null ? r : t.hasNext,
          stale: !1,
        };
      },
      Ui = (e, t) => {
        if (
          typeof e == 'object' &&
          e != null &&
          (!e.constructor || e.constructor === Object || Array.isArray(e))
        ) {
          e = Array.isArray(e) ? [...e] : { ...e };
          for (var n of Object.keys(t)) e[n] = Ui(e[n], t[n]);
          return e;
        }
        return t;
      },
      s2 = (e, t, n, r) => {
        var i = e.error ? e.error.graphQLErrors : [],
          o = !!e.extensions || !!t.extensions,
          l = { ...e.extensions, ...t.extensions },
          s = t.incremental;
        'path' in t && (s = [t]);
        var c = { data: e.data };
        if (s) {
          var d = function (m) {
            Array.isArray(m.errors) && i.push(...m.errors),
              m.extensions && (Object.assign(l, m.extensions), (o = !0));
            var p = 'data',
              v = c,
              h = [];
            if (m.path) h = m.path;
            else if (r) {
              var b = r.find((S) => S.id === m.id);
              m.subPath ? (h = [...b.path, ...m.subPath]) : (h = b.path);
            }
            for (var k = 0, y = h.length; k < y; p = h[k++])
              v = v[p] = Array.isArray(v[p]) ? [...v[p]] : { ...v[p] };
            if (m.items)
              for (
                var g = +p >= 0 ? p : 0, f = 0, E = m.items.length;
                f < E;
                f++
              )
                v[g + f] = Ui(v[g + f], m.items[f]);
            else m.data !== void 0 && (v[p] = Ui(v[p], m.data));
          };
          for (var u of s) d(u);
        } else (c.data = t.data || e.data), (i = t.errors || i);
        return {
          operation: e.operation,
          data: c.data,
          error: i.length ? new ko({ graphQLErrors: i, response: n }) : void 0,
          extensions: o ? l : void 0,
          hasNext: t.hasNext != null ? t.hasNext : e.hasNext,
          stale: !1,
        };
      },
      Z0 = (e, t, n) => ({
        operation: e,
        data: void 0,
        error: new ko({ networkError: t, response: n }),
        extensions: void 0,
        hasNext: !1,
        stale: !1,
      });
    function c2(e) {
      return {
        query:
          e.extensions &&
          e.extensions.persistedQuery &&
          !e.extensions.persistedQuery.miss
            ? void 0
            : wo(e.query),
        operationName: T0(e.query),
        variables: e.variables || void 0,
        extensions: e.extensions,
      };
    }
    var d2 = (e, t) => {
        var n = e.kind === 'query' && e.context.preferGetMethod;
        if (!n || !t) return e.context.url;
        var r = new URL(e.context.url);
        for (var i in t) {
          var o = t[i];
          o && r.searchParams.set(i, typeof o == 'object' ? ir(o) : o);
        }
        var l = r.toString();
        return l.length > 2047 && n !== 'force'
          ? ((e.context.preferGetMethod = !1), e.context.url)
          : l;
      },
      u2 = (e, t) => {
        if (t && !(e.kind === 'query' && e.context.preferGetMethod)) {
          var n = ir(t),
            r = ((s) => {
              var c = new Map();
              return (
                (or !== kn || lr !== kn) && (Qt.clear(), zi(c, 'variables', s)),
                c
              );
            })(t.variables);
          if (r.size) {
            var i = new FormData();
            i.append('operations', n),
              i.append('map', ir({ ...[...r.keys()].map((s) => [s]) }));
            var o = 0;
            for (var l of r.values()) i.append('' + o++, l);
            return i;
          }
          return n;
        }
      },
      m2 = (e, t) => {
        var n = {
            accept:
              e.kind === 'subscription'
                ? 'text/event-stream, multipart/mixed'
                : 'application/graphql-response+json, application/graphql+json, application/json, text/event-stream, multipart/mixed',
          },
          r =
            (typeof e.context.fetchOptions == 'function'
              ? e.context.fetchOptions()
              : e.context.fetchOptions) || {};
        if (r.headers)
          for (var i in r.headers) n[i.toLowerCase()] = r.headers[i];
        var o = u2(e, t);
        return (
          typeof o == 'string' &&
            !n['content-type'] &&
            (n['content-type'] = 'application/json'),
          { ...r, method: o ? 'POST' : 'GET', body: o, headers: n }
        );
      },
      p2 = typeof TextDecoder < 'u' ? new TextDecoder() : null,
      h2 = /boundary="?([^=";]+)"?/i,
      f2 = /data: ?([^\n]+)/,
      Ll = (e) =>
        e.constructor.name === 'Buffer' ? e.toString() : p2.decode(e);
    async function* _l(e) {
      if (e.body[Symbol.asyncIterator]) for await (var t of e.body) yield Ll(t);
      else {
        var n = e.body.getReader(),
          r;
        try {
          for (; !(r = await n.read()).done; ) yield Ll(r.value);
        } finally {
          n.cancel();
        }
      }
    }
    async function* Tl(e, t) {
      var n = '',
        r;
      for await (var i of e)
        for (n += i; (r = n.indexOf(t)) > -1; )
          yield n.slice(0, r), (n = n.slice(r + t.length));
    }
    async function* g2(e, t, n) {
      var r = !0,
        i = null,
        o;
      try {
        yield await Promise.resolve();
        var l =
            (o = await (e.context.fetch || fetch)(t, n)).headers.get(
              'Content-Type'
            ) || '',
          s;
        /multipart\/mixed/i.test(l)
          ? (s = (async function* (u, m) {
              var p = u.match(h2),
                v = '--' + (p ? p[1] : '-'),
                h = !0,
                b;
              for await (var k of Tl(
                _l(m),
                `\r
` + v
              )) {
                if (h) {
                  h = !1;
                  var y = k.indexOf(v);
                  if (y > -1) k = k.slice(y + v.length);
                  else continue;
                }
                try {
                  yield (b = JSON.parse(
                    k.slice(
                      k.indexOf(`\r
\r
`) + 4
                    )
                  ));
                } catch (g) {
                  if (!b) throw g;
                }
                if (b && b.hasNext === !1) break;
              }
              b && b.hasNext !== !1 && (yield { hasNext: !1 });
            })(l, o))
          : /text\/event-stream/i.test(l)
          ? (s = (async function* (u) {
              var m;
              for await (var p of Tl(
                _l(u),
                `

`
              )) {
                var v = p.match(f2);
                if (v) {
                  var h = v[1];
                  try {
                    yield (m = JSON.parse(h));
                  } catch (b) {
                    if (!m) throw b;
                  }
                  if (m && m.hasNext === !1) break;
                }
              }
              m && m.hasNext !== !1 && (yield { hasNext: !1 });
            })(o))
          : /text\//i.test(l)
          ? (s = (async function* (u) {
              var m = await u.text();
              try {
                var p = JSON.parse(m);
                yield p;
              } catch {
                throw new Error(m);
              }
            })(o))
          : (s = (async function* (u) {
              yield JSON.parse(await u.text());
            })(o));
        var c;
        for await (var d of s)
          d.pending && !i
            ? (c = d.pending)
            : d.pending && (c = [...c, ...d.pending]),
            (i = i ? s2(i, d, o, c) : Ol(e, d, o)),
            (r = !1),
            yield i,
            (r = !0);
        i || (yield (i = Ol(e, {}, o)));
      } catch (u) {
        if (!r) throw u;
        yield Z0(
          e,
          o && (o.status < 200 || o.status >= 300) && o.statusText
            ? new Error(o.statusText)
            : u,
          o
        );
      }
    }
    function v2(e, t, n) {
      var r;
      return (
        typeof AbortController < 'u' &&
          (n.signal = (r = new AbortController()).signal),
        bo(() => {
          r && r.abort();
        })($e((i) => !!i)(L0(g2(e, t, n))))
      );
    }
    var $i = (e, t) => {
      if (!e || typeof e != 'object') return e;
      if (Array.isArray(e)) return e.map((i) => $i(i));
      if (e && typeof e == 'object' && (t || '__typename' in e)) {
        var n = {};
        for (var r in e)
          r === '__typename'
            ? Object.defineProperty(n, '__typename', {
                enumerable: !1,
                value: e.__typename,
              })
            : (n[r] = $i(e[r]));
        return n;
      } else return e;
    };
    function Zl(e) {
      var t = (n) => e(n);
      return (
        (t.toPromise = () => Eo(Br(1)($e((n) => !n.stale && !n.hasNext)(t)))),
        (t.then = (n, r) => t.toPromise().then(n, r)),
        (t.subscribe = (n) => En(n)(t)),
        t
      );
    }
    function sr(e, t, n) {
      return {
        ...t,
        kind: e,
        context: t.context ? { ...t.context, ...n } : n || t.context,
      };
    }
    var y2 = () => {},
      b2 =
        ({ forward: e, dispatchDebug: t }) =>
        (n) => {
          var r = ar((o) => {
              var l = c2(o),
                s = d2(o, l),
                c = m2(o, l),
                d = A0($e((u) => u.kind === 'teardown' && u.key === o.key)(n))(
                  v2(o, s, c)
                );
              return d;
            })(
              $e(
                (o) =>
                  o.kind !== 'teardown' &&
                  (o.kind !== 'subscription' || !!o.context.fetchSubscriptions)
              )(n)
            ),
            i = e(
              $e(
                (o) =>
                  o.kind === 'teardown' ||
                  (o.kind === 'subscription' && !o.context.fetchSubscriptions)
              )(n)
            );
          return da([r, i]);
        },
      E2 =
        (e) =>
        ({ client: t, forward: n, dispatchDebug: r }) =>
          e.reduceRight(
            (i, o) =>
              o({
                client: t,
                forward(l) {
                  return ua(i(ua(l)));
                },
                dispatchDebug(l) {},
              }),
            n
          ),
      k2 =
        ({ onOperation: e, onResult: t, onError: n }) =>
        ({ forward: r }) =>
        (i) =>
          ar((o) => {
            n && o.error && n(o.error, o.operation);
            var l = (t && t(o)) || o;
            return 'then' in l ? Sl(l) : aa(l);
          })(
            r(
              ar((o) => {
                var l = (e && e(o)) || o;
                return 'then' in l ? Sl(l) : aa(l);
              })(i)
            )
          ),
      w2 =
        ({ dispatchDebug: e }) =>
        (t) =>
          $e((n) => !1)(t),
      C2 = function e(t) {
        var n = 0,
          r = new Map(),
          i = new Map(),
          o = new Set(),
          l = [],
          s = {
            url: t.url,
            fetchSubscriptions: t.fetchSubscriptions,
            fetchOptions: t.fetchOptions,
            fetch: t.fetch,
            preferGetMethod: t.preferGetMethod,
            requestPolicy: t.requestPolicy || 'cache-first',
          },
          c = Hi();
        function d(g) {
          (g.kind === 'mutation' || g.kind === 'teardown' || !o.has(g.key)) &&
            (g.kind === 'teardown'
              ? o.delete(g.key)
              : g.kind !== 'mutation' && o.add(g.key),
            c.next(g));
        }
        var u = !1;
        function m(g) {
          if ((g && d(g), !u)) {
            for (u = !0; u && (g = l.shift()); ) d(g);
            u = !1;
          }
        }
        var p = (g) => {
            var f = A0(
              $e((E) => E.kind === 'teardown' && E.key === g.key)(c.source)
            )(
              $e(
                (E) =>
                  E.operation.kind === g.kind &&
                  E.operation.key === g.key &&
                  (!E.operation.context._instance ||
                    E.operation.context._instance === g.context._instance)
              )(y)
            );
            return (
              t.maskTypename &&
                (f = Vi((E) => ({ ...E, data: $i(E.data, !0) }))(f)),
              g.kind !== 'query'
                ? (f = O0((E) => !!E.hasNext, !0)(f))
                : (f = xl((E) => {
                    var S = aa(E);
                    return E.stale || E.hasNext
                      ? S
                      : da([
                          S,
                          Vi(() => ((E.stale = !0), E))(
                            Br(1)($e((V) => V.key === g.key)(c.source))
                          ),
                        ]);
                  })(f)),
              g.kind !== 'mutation'
                ? (f = bo(() => {
                    o.delete(g.key), r.delete(g.key), i.delete(g.key), (u = !1);
                    for (var E = l.length - 1; E >= 0; E--)
                      l[E].key === g.key && l.splice(E, 1);
                    d(sr('teardown', g, g.context));
                  })(
                    rr((E) => {
                      if (E.stale) {
                        for (var S of l)
                          if (S.key === E.operation.key) {
                            o.delete(S.key);
                            break;
                          }
                      } else E.hasNext || o.delete(g.key);
                      r.set(g.key, E);
                    })(f)
                  ))
                : (f = ji(() => {
                    d(g);
                  })(f)),
              ua(f)
            );
          },
          v = this instanceof e ? this : Object.create(e.prototype),
          h = Object.assign(v, {
            suspense: !!t.suspense,
            operations$: c.source,
            reexecuteOperation(g) {
              if (g.kind === 'teardown') m(g);
              else if (g.kind === 'mutation' || i.has(g.key)) {
                for (var f = !1, E = 0; E < l.length; E++)
                  f = f || l[E].key === g.key;
                f || o.delete(g.key), l.push(g), Promise.resolve().then(m);
              }
            },
            createRequestOperation(g, f, E) {
              return (
                E || (E = {}),
                sr(g, f, {
                  _instance: g === 'mutation' ? (n = (n + 1) | 0) : void 0,
                  ...s,
                  ...E,
                  requestPolicy: E.requestPolicy || s.requestPolicy,
                  suspense: E.suspense || (E.suspense !== !1 && h.suspense),
                })
              );
            },
            executeRequestOperation(g) {
              return g.kind === 'mutation'
                ? Zl(p(g))
                : Zl(
                    Xu(() => {
                      var f = i.get(g.key);
                      f || i.set(g.key, (f = p(g))),
                        (f = ji(() => {
                          m(g);
                        })(f));
                      var E = r.get(g.key);
                      return g.kind === 'query' && E && (E.stale || E.hasNext)
                        ? xl(aa)(da([f, $e((S) => S === r.get(g.key))(aa(E))]))
                        : f;
                    })
                  );
            },
            executeQuery(g, f) {
              var E = h.createRequestOperation('query', g, f);
              return h.executeRequestOperation(E);
            },
            executeSubscription(g, f) {
              var E = h.createRequestOperation('subscription', g, f);
              return h.executeRequestOperation(E);
            },
            executeMutation(g, f) {
              var E = h.createRequestOperation('mutation', g, f);
              return h.executeRequestOperation(E);
            },
            readQuery(g, f, E) {
              var S = null;
              return (
                En((V) => {
                  S = V;
                })(h.query(g, f, E)).unsubscribe(),
                S
              );
            },
            query: (g, f, E) => h.executeQuery(vn(g, f), E),
            subscription: (g, f, E) => h.executeSubscription(vn(g, f), E),
            mutation: (g, f, E) => h.executeMutation(vn(g, f), E),
          }),
          b = y2,
          k = E2(t.exchanges),
          y = ua(
            k({
              client: h,
              dispatchDebug: b,
              forward: w2({ dispatchDebug: b }),
            })(c.source)
          );
        return n2(y), h;
      },
      x2 = {},
      Pr = Qe(x2),
      S2 = Pr.Provider;
    Pr.Consumer;
    Pr.displayName = 'UrqlContext';
    var Co = () => {
        var e = Vn(Pr);
        return e;
      },
      Wi = {
        fetching: !1,
        stale: !1,
        error: void 0,
        data: void 0,
        extensions: void 0,
        operation: void 0,
      },
      M2 = (e, t) => e === t || !(!e || !t || e.key !== t.key),
      fi = (e, t) => {
        var n = {
          ...e,
          ...t,
          data: t.data !== void 0 || t.error ? t.data : e.data,
          fetching: !!t.fetching,
          stale: !!t.stale,
        };
        return ((r, i) => {
          for (var o in r) if (!(o in i)) return !0;
          for (var l in i)
            if (l === 'operation' ? !M2(r[l], i[l]) : r[l] !== i[l]) return !0;
          return !1;
        })(e, n)
          ? n
          : e;
      },
      N2 = (e, t) => {
        for (var n = 0, r = t.length; n < r; n++) if (e[n] !== t[n]) return !0;
        return !1;
      };
    function cr(e, t) {
      e(t);
    }
    function I0(e) {
      var t = Te(!0),
        n = Co(),
        [r, i] = Me(Wi),
        o = de(
          (l, s) => (
            cr(i, { ...Wi, fetching: !0 }),
            Eo(
              Br(1)(
                $e((c) => !c.hasNext)(
                  rr((c) => {
                    t.current &&
                      cr(i, {
                        fetching: !1,
                        stale: c.stale,
                        data: c.data,
                        error: c.error,
                        extensions: c.extensions,
                        operation: c.operation,
                      });
                  })(n.executeMutation(vn(e, l), s || {}))
                )
              )
            )
          ),
          [n, e, i]
        );
      return (
        pe(
          () => (
            (t.current = !0),
            () => {
              t.current = !1;
            }
          ),
          []
        ),
        [r, o]
      );
    }
    function F2(e, t) {
      var n = Te(void 0);
      return $t(() => {
        var r = vn(e, t);
        return n.current !== void 0 && n.current.key === r.key
          ? n.current
          : ((n.current = r), r);
      }, [e, t]);
    }
    var A2 = (e) => {
        if (!e._react) {
          var t = new Set(),
            n = new Map();
          e.operations$ &&
            En((r) => {
              r.kind === 'teardown' &&
                t.has(r.key) &&
                (t.delete(r.key), n.delete(r.key));
            })(e.operations$),
            (e._react = {
              get: (r) => n.get(r),
              set(r, i) {
                t.delete(r), n.set(r, i);
              },
              dispose(r) {
                t.add(r);
              },
            });
        }
        return e._react;
      },
      O2 = (e, t) => (t && t.suspense !== void 0 ? !!t.suspense : e.suspense);
    function xo(e) {
      var t = Co(),
        n = A2(t),
        r = O2(t, e.context),
        i = F2(e.query, e.variables),
        o = $t(() => {
          if (e.pause) return null;
          var p = t.executeQuery(i, {
            requestPolicy: e.requestPolicy,
            ...e.context,
          });
          return r
            ? rr((v) => {
                n.set(i.key, v);
              })(p)
            : p;
        }, [n, t, i, r, e.pause, e.requestPolicy, e.context]),
        l = de(
          (p, v) => {
            if (!p) return { fetching: !1 };
            var h = n.get(i.key);
            if (h) {
              if (v && h != null && 'then' in h) throw h;
            } else {
              var b,
                k = En((g) => {
                  (h = g), b && b(h);
                })(O0(() => (v && !b) || !h)(p));
              if (h == null && v) {
                var y = new Promise((g) => {
                  b = g;
                });
                throw (n.set(i.key, y), y);
              } else k.unsubscribe();
            }
            return h || { fetching: !0 };
          },
          [n, i]
        ),
        s = [t, i, e.requestPolicy, e.context, e.pause],
        [c, d] = Me(() => [o, fi(Wi, l(o, r)), s]),
        u = c[1];
      o !== c[0] && N2(c[2], s) && d([o, (u = fi(c[1], l(o, r))), s]),
        pe(() => {
          var p = c[0],
            v = c[2][1],
            h = !1,
            b = (y) => {
              (h = !0),
                cr(d, (g) => {
                  var f = fi(g[1], y);
                  return g[1] !== f ? [g[0], f, g[2]] : g;
                });
            };
          if (p) {
            var k = En(b)(
              bo(() => {
                b({ fetching: !1 });
              })(p)
            );
            return (
              h || b({ fetching: !0 }),
              () => {
                n.dispose(v.key), k.unsubscribe();
              }
            );
          } else b({ fetching: !1 });
        }, [n, c[0], c[2][1]]);
      var m = de(
        (p) => {
          var v = { requestPolicy: e.requestPolicy, ...e.context, ...p };
          cr(d, (h) => [
            r
              ? rr((b) => {
                  n.set(i.key, b);
                })(t.executeQuery(i, v))
              : t.executeQuery(i, v),
            h[1],
            s,
          ]);
        },
        [t, n, i, r, e.requestPolicy, e.context, e.pause]
      );
      return [u, m];
    }
    function yn(e, t) {
      return t;
    }
    var L2 = {
        kind: 'Document',
        definitions: [
          {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'StatusTestFields' },
            typeCondition: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Test' },
            },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                { kind: 'Field', name: { kind: 'Name', value: 'result' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'story' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'storyId' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
      _2 = {
        kind: 'Document',
        definitions: [
          {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'LastBuildOnBranchTestFields' },
            typeCondition: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Test' },
            },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                { kind: 'Field', name: { kind: 'Name', value: 'result' } },
              ],
            },
          },
        ],
      },
      T2 = {
        kind: 'Document',
        definitions: [
          {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'LastBuildOnBranchBuildFields' },
            typeCondition: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Build' },
            },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                { kind: 'Field', name: { kind: 'Name', value: 'committedAt' } },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'StartedBuild' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'testsForStatus' },
                        name: { kind: 'Name', value: 'tests' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'first' },
                            value: { kind: 'IntValue', value: '1000' },
                          },
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'statuses' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'testStatuses' },
                            },
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nodes' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: {
                                      kind: 'Name',
                                      value: 'StatusTestFields',
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'testsForStory' },
                        name: { kind: 'Name', value: 'tests' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'storyId' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'storyId' },
                            },
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nodes' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: {
                                      kind: 'Name',
                                      value: 'LastBuildOnBranchTestFields',
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'CompletedBuild' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'result' },
                      },
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'testsForStatus' },
                        name: { kind: 'Name', value: 'tests' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'first' },
                            value: { kind: 'IntValue', value: '1000' },
                          },
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'statuses' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'testStatuses' },
                            },
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nodes' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: {
                                      kind: 'Name',
                                      value: 'StatusTestFields',
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'testsForStory' },
                        name: { kind: 'Name', value: 'tests' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'storyId' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'storyId' },
                            },
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nodes' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: {
                                      kind: 'Name',
                                      value: 'LastBuildOnBranchTestFields',
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'StatusTestFields' },
            typeCondition: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Test' },
            },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                { kind: 'Field', name: { kind: 'Name', value: 'result' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'story' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'storyId' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'LastBuildOnBranchTestFields' },
            typeCondition: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Test' },
            },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                { kind: 'Field', name: { kind: 'Name', value: 'result' } },
              ],
            },
          },
        ],
      },
      Z2 = {
        kind: 'Document',
        definitions: [
          {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'StoryTestFields' },
            typeCondition: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Test' },
            },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                { kind: 'Field', name: { kind: 'Name', value: 'result' } },
                { kind: 'Field', name: { kind: 'Name', value: 'webUrl' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'comparisons' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'result' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'browser' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'key' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'version' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'captureDiff' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'diffImage' },
                              arguments: [
                                {
                                  kind: 'Argument',
                                  name: { kind: 'Name', value: 'signed' },
                                  value: { kind: 'BooleanValue', value: !0 },
                                },
                              ],
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'imageUrl' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'imageWidth' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'focusImage' },
                              arguments: [
                                {
                                  kind: 'Argument',
                                  name: { kind: 'Name', value: 'signed' },
                                  value: { kind: 'BooleanValue', value: !0 },
                                },
                              ],
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'imageUrl' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'imageWidth' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'headCapture' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'captureImage' },
                              arguments: [
                                {
                                  kind: 'Argument',
                                  name: { kind: 'Name', value: 'signed' },
                                  value: { kind: 'BooleanValue', value: !0 },
                                },
                              ],
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'backgroundColor',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'imageUrl' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'imageWidth' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'thumbnailUrl',
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'captureError' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'kind' },
                                  },
                                  {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                      kind: 'NamedType',
                                      name: {
                                        kind: 'Name',
                                        value: 'CaptureErrorInteractionFailure',
                                      },
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'error',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                      kind: 'NamedType',
                                      name: {
                                        kind: 'Name',
                                        value: 'CaptureErrorJSError',
                                      },
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'error',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                      kind: 'NamedType',
                                      name: {
                                        kind: 'Name',
                                        value: 'CaptureErrorFailedJS',
                                      },
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'error',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'baseCapture' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'captureImage' },
                              arguments: [
                                {
                                  kind: 'Argument',
                                  name: { kind: 'Name', value: 'signed' },
                                  value: { kind: 'BooleanValue', value: !0 },
                                },
                              ],
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'imageUrl' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'imageWidth' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'mode' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'globals' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'story' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'storyId' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'component' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
      I2 = {
        kind: 'Document',
        definitions: [
          {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'SelectedBuildFields' },
            typeCondition: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Build' },
            },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'number' } },
                { kind: 'Field', name: { kind: 'Name', value: 'branch' } },
                { kind: 'Field', name: { kind: 'Name', value: 'commit' } },
                { kind: 'Field', name: { kind: 'Name', value: 'committedAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'uncommittedHash' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'StartedBuild' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'startedAt' },
                      },
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'testsForStory' },
                        name: { kind: 'Name', value: 'tests' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'storyId' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'storyId' },
                            },
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nodes' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: {
                                      kind: 'Name',
                                      value: 'StoryTestFields',
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'CompletedBuild' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'startedAt' },
                      },
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'testsForStory' },
                        name: { kind: 'Name', value: 'tests' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'storyId' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'storyId' },
                            },
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nodes' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: {
                                      kind: 'Name',
                                      value: 'StoryTestFields',
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'StoryTestFields' },
            typeCondition: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Test' },
            },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                { kind: 'Field', name: { kind: 'Name', value: 'result' } },
                { kind: 'Field', name: { kind: 'Name', value: 'webUrl' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'comparisons' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'result' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'browser' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'key' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'version' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'captureDiff' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'diffImage' },
                              arguments: [
                                {
                                  kind: 'Argument',
                                  name: { kind: 'Name', value: 'signed' },
                                  value: { kind: 'BooleanValue', value: !0 },
                                },
                              ],
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'imageUrl' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'imageWidth' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'focusImage' },
                              arguments: [
                                {
                                  kind: 'Argument',
                                  name: { kind: 'Name', value: 'signed' },
                                  value: { kind: 'BooleanValue', value: !0 },
                                },
                              ],
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'imageUrl' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'imageWidth' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'headCapture' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'captureImage' },
                              arguments: [
                                {
                                  kind: 'Argument',
                                  name: { kind: 'Name', value: 'signed' },
                                  value: { kind: 'BooleanValue', value: !0 },
                                },
                              ],
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'backgroundColor',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'imageUrl' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'imageWidth' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'thumbnailUrl',
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'captureError' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'kind' },
                                  },
                                  {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                      kind: 'NamedType',
                                      name: {
                                        kind: 'Name',
                                        value: 'CaptureErrorInteractionFailure',
                                      },
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'error',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                      kind: 'NamedType',
                                      name: {
                                        kind: 'Name',
                                        value: 'CaptureErrorJSError',
                                      },
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'error',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                      kind: 'NamedType',
                                      name: {
                                        kind: 'Name',
                                        value: 'CaptureErrorFailedJS',
                                      },
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'error',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'baseCapture' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'captureImage' },
                              arguments: [
                                {
                                  kind: 'Argument',
                                  name: { kind: 'Name', value: 'signed' },
                                  value: { kind: 'BooleanValue', value: !0 },
                                },
                              ],
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'imageUrl' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'imageWidth' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'mode' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'globals' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'story' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'storyId' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'component' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
      R2 = {
        kind: 'Document',
        definitions: [
          {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'VisualTestsProjectCountQuery' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'viewer' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'projectCount' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'accounts' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'newProjectUrl' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
      B2 = {
        kind: 'Document',
        definitions: [
          {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'SelectProjectsQuery' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'viewer' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'accounts' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'avatarUrl' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'newProjectUrl' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'projects' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'name' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'webUrl' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'lastBuild' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'branch',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'number',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
      P2 = {
        kind: 'Document',
        definitions: [
          {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'ProjectQuery' },
            variableDefinitions: [
              {
                kind: 'VariableDefinition',
                variable: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'projectId' },
                },
                type: {
                  kind: 'NonNullType',
                  type: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ID' },
                  },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'project' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'id' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'projectId' },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'webUrl' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'lastBuild' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'branch' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'number' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
      V2 = {
        kind: 'Document',
        definitions: [
          {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'UpdateUserPreferences' },
            variableDefinitions: [
              {
                kind: 'VariableDefinition',
                variable: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
                type: {
                  kind: 'NonNullType',
                  type: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'UserPreferencesInput' },
                  },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'updateUserPreferences' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'input' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'input' },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updatedPreferences' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'vtaOnboarding' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
      j2 = {
        kind: 'Document',
        definitions: [
          {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'AddonVisualTestsBuild' },
            variableDefinitions: [
              {
                kind: 'VariableDefinition',
                variable: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'projectId' },
                },
                type: {
                  kind: 'NonNullType',
                  type: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ID' },
                  },
                },
              },
              {
                kind: 'VariableDefinition',
                variable: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'branch' },
                },
                type: {
                  kind: 'NonNullType',
                  type: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'String' },
                  },
                },
              },
              {
                kind: 'VariableDefinition',
                variable: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'gitUserEmailHash' },
                },
                type: {
                  kind: 'NonNullType',
                  type: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'String' },
                  },
                },
              },
              {
                kind: 'VariableDefinition',
                variable: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'repositoryOwnerName' },
                },
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'String' },
                },
              },
              {
                kind: 'VariableDefinition',
                variable: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'storyId' },
                },
                type: {
                  kind: 'NonNullType',
                  type: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'String' },
                  },
                },
              },
              {
                kind: 'VariableDefinition',
                variable: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'testStatuses' },
                },
                type: {
                  kind: 'NonNullType',
                  type: {
                    kind: 'ListType',
                    type: {
                      kind: 'NonNullType',
                      type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'TestStatus' },
                      },
                    },
                  },
                },
              },
              {
                kind: 'VariableDefinition',
                variable: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'selectedBuildId' },
                },
                type: {
                  kind: 'NonNullType',
                  type: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ID' },
                  },
                },
              },
              {
                kind: 'VariableDefinition',
                variable: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'hasSelectedBuildId' },
                },
                type: {
                  kind: 'NonNullType',
                  type: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'Boolean' },
                  },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'project' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'id' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'projectId' },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'lastBuildOnBranch' },
                        name: { kind: 'Name', value: 'lastBuild' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'branches' },
                            value: {
                              kind: 'ListValue',
                              values: [
                                {
                                  kind: 'Variable',
                                  name: { kind: 'Name', value: 'branch' },
                                },
                              ],
                            },
                          },
                          {
                            kind: 'Argument',
                            name: {
                              kind: 'Name',
                              value: 'repositoryOwnerName',
                            },
                            value: {
                              kind: 'Variable',
                              name: {
                                kind: 'Name',
                                value: 'repositoryOwnerName',
                              },
                            },
                          },
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'localBuilds' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: {
                                    kind: 'Name',
                                    value: 'localBuildEmailHash',
                                  },
                                  value: {
                                    kind: 'Variable',
                                    name: {
                                      kind: 'Name',
                                      value: 'gitUserEmailHash',
                                    },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'LastBuildOnBranchBuildFields',
                              },
                            },
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'SelectedBuildFields',
                              },
                              directives: [
                                {
                                  kind: 'Directive',
                                  name: { kind: 'Name', value: 'skip' },
                                  arguments: [
                                    {
                                      kind: 'Argument',
                                      name: { kind: 'Name', value: 'if' },
                                      value: {
                                        kind: 'Variable',
                                        name: {
                                          kind: 'Name',
                                          value: 'hasSelectedBuildId',
                                        },
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'lastBuild' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'slug' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'branch' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'selectedBuild' },
                  name: { kind: 'Name', value: 'build' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'id' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'selectedBuildId' },
                      },
                    },
                  ],
                  directives: [
                    {
                      kind: 'Directive',
                      name: { kind: 'Name', value: 'include' },
                      arguments: [
                        {
                          kind: 'Argument',
                          name: { kind: 'Name', value: 'if' },
                          value: {
                            kind: 'Variable',
                            name: { kind: 'Name', value: 'hasSelectedBuildId' },
                          },
                        },
                      ],
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'SelectedBuildFields' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'viewer' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'preferences' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'vtaOnboarding' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'projectMembership' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'projectId' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'projectId' },
                            },
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              alias: { kind: 'Name', value: 'userCanReview' },
                              name: { kind: 'Name', value: 'meetsAccessLevel' },
                              arguments: [
                                {
                                  kind: 'Argument',
                                  name: {
                                    kind: 'Name',
                                    value: 'minimumAccessLevel',
                                  },
                                  value: {
                                    kind: 'EnumValue',
                                    value: 'REVIEWER',
                                  },
                                },
                              ],
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'StatusTestFields' },
            typeCondition: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Test' },
            },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                { kind: 'Field', name: { kind: 'Name', value: 'result' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'story' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'storyId' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'LastBuildOnBranchTestFields' },
            typeCondition: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Test' },
            },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                { kind: 'Field', name: { kind: 'Name', value: 'result' } },
              ],
            },
          },
          {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'StoryTestFields' },
            typeCondition: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Test' },
            },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                { kind: 'Field', name: { kind: 'Name', value: 'result' } },
                { kind: 'Field', name: { kind: 'Name', value: 'webUrl' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'comparisons' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'result' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'browser' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'key' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'version' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'captureDiff' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'diffImage' },
                              arguments: [
                                {
                                  kind: 'Argument',
                                  name: { kind: 'Name', value: 'signed' },
                                  value: { kind: 'BooleanValue', value: !0 },
                                },
                              ],
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'imageUrl' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'imageWidth' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'focusImage' },
                              arguments: [
                                {
                                  kind: 'Argument',
                                  name: { kind: 'Name', value: 'signed' },
                                  value: { kind: 'BooleanValue', value: !0 },
                                },
                              ],
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'imageUrl' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'imageWidth' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'headCapture' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'captureImage' },
                              arguments: [
                                {
                                  kind: 'Argument',
                                  name: { kind: 'Name', value: 'signed' },
                                  value: { kind: 'BooleanValue', value: !0 },
                                },
                              ],
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'backgroundColor',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'imageUrl' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'imageWidth' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'thumbnailUrl',
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'captureError' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'kind' },
                                  },
                                  {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                      kind: 'NamedType',
                                      name: {
                                        kind: 'Name',
                                        value: 'CaptureErrorInteractionFailure',
                                      },
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'error',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                      kind: 'NamedType',
                                      name: {
                                        kind: 'Name',
                                        value: 'CaptureErrorJSError',
                                      },
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'error',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                      kind: 'NamedType',
                                      name: {
                                        kind: 'Name',
                                        value: 'CaptureErrorFailedJS',
                                      },
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'error',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'baseCapture' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'captureImage' },
                              arguments: [
                                {
                                  kind: 'Argument',
                                  name: { kind: 'Name', value: 'signed' },
                                  value: { kind: 'BooleanValue', value: !0 },
                                },
                              ],
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'imageUrl' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'imageWidth' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'mode' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'globals' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'story' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'storyId' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'component' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'LastBuildOnBranchBuildFields' },
            typeCondition: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Build' },
            },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                { kind: 'Field', name: { kind: 'Name', value: 'committedAt' } },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'StartedBuild' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'testsForStatus' },
                        name: { kind: 'Name', value: 'tests' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'first' },
                            value: { kind: 'IntValue', value: '1000' },
                          },
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'statuses' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'testStatuses' },
                            },
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nodes' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: {
                                      kind: 'Name',
                                      value: 'StatusTestFields',
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'testsForStory' },
                        name: { kind: 'Name', value: 'tests' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'storyId' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'storyId' },
                            },
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nodes' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: {
                                      kind: 'Name',
                                      value: 'LastBuildOnBranchTestFields',
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'CompletedBuild' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'result' },
                      },
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'testsForStatus' },
                        name: { kind: 'Name', value: 'tests' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'first' },
                            value: { kind: 'IntValue', value: '1000' },
                          },
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'statuses' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'testStatuses' },
                            },
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nodes' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: {
                                      kind: 'Name',
                                      value: 'StatusTestFields',
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'testsForStory' },
                        name: { kind: 'Name', value: 'tests' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'storyId' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'storyId' },
                            },
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nodes' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: {
                                      kind: 'Name',
                                      value: 'LastBuildOnBranchTestFields',
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'SelectedBuildFields' },
            typeCondition: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Build' },
            },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'number' } },
                { kind: 'Field', name: { kind: 'Name', value: 'branch' } },
                { kind: 'Field', name: { kind: 'Name', value: 'commit' } },
                { kind: 'Field', name: { kind: 'Name', value: 'committedAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'uncommittedHash' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'StartedBuild' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'startedAt' },
                      },
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'testsForStory' },
                        name: { kind: 'Name', value: 'tests' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'storyId' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'storyId' },
                            },
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nodes' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: {
                                      kind: 'Name',
                                      value: 'StoryTestFields',
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'CompletedBuild' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'startedAt' },
                      },
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'testsForStory' },
                        name: { kind: 'Name', value: 'tests' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'storyId' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'storyId' },
                            },
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nodes' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: {
                                      kind: 'Name',
                                      value: 'StoryTestFields',
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
      H2 = {
        kind: 'Document',
        definitions: [
          {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'ReviewTest' },
            variableDefinitions: [
              {
                kind: 'VariableDefinition',
                variable: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
                type: {
                  kind: 'NonNullType',
                  type: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ReviewTestInput' },
                  },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'reviewTest' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'input' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'input' },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updatedTests' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'status' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'userErrors' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'InlineFragment',
                              typeCondition: {
                                kind: 'NamedType',
                                name: { kind: 'Name', value: 'UserError' },
                              },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: '__typename' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'message' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'InlineFragment',
                              typeCondition: {
                                kind: 'NamedType',
                                name: {
                                  kind: 'Name',
                                  value: 'BuildSupersededError',
                                },
                              },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'build' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'id' },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'InlineFragment',
                              typeCondition: {
                                kind: 'NamedType',
                                name: {
                                  kind: 'Name',
                                  value: 'TestUnreviewableError',
                                },
                              },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'test' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'id' },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
      D2 = {
        '\n  query VisualTestsProjectCountQuery {\n    viewer {\n      projectCount\n      accounts {\n        newProjectUrl\n      }\n    }\n  }\n':
          R2,
        '\n  query SelectProjectsQuery {\n    viewer {\n      accounts {\n        id\n        name\n        avatarUrl\n        newProjectUrl\n        projects {\n          id\n          name\n          webUrl\n          lastBuild {\n            branch\n            number\n          }\n        }\n      }\n    }\n  }\n':
          B2,
        '\n  query ProjectQuery($projectId: ID!) {\n    project(id: $projectId) {\n      id\n      name\n      webUrl\n      lastBuild {\n        branch\n        number\n      }\n    }\n  }\n':
          P2,
        '\n  mutation UpdateUserPreferences($input: UserPreferencesInput!) {\n    updateUserPreferences(input: $input) {\n      updatedPreferences {\n        vtaOnboarding\n      }\n    }\n  }\n':
          V2,
        '\n  query AddonVisualTestsBuild(\n    $projectId: ID!\n    $branch: String!\n    $gitUserEmailHash: String!\n    $repositoryOwnerName: String\n    $storyId: String!\n    $testStatuses: [TestStatus!]!\n    $selectedBuildId: ID!\n    $hasSelectedBuildId: Boolean!\n  ) {\n    project(id: $projectId) {\n      name\n      lastBuildOnBranch: lastBuild(\n        branches: [$branch]\n        repositoryOwnerName: $repositoryOwnerName\n        localBuilds: { localBuildEmailHash: $gitUserEmailHash }\n      ) {\n        ...LastBuildOnBranchBuildFields\n        ...SelectedBuildFields @skip(if: $hasSelectedBuildId)\n      }\n      lastBuild {\n        id\n        slug\n        branch\n      }\n    }\n    selectedBuild: build(id: $selectedBuildId) @include(if: $hasSelectedBuildId) {\n      ...SelectedBuildFields\n    }\n    viewer {\n      preferences {\n        vtaOnboarding\n      }\n      projectMembership(projectId: $projectId) {\n        userCanReview: meetsAccessLevel(minimumAccessLevel: REVIEWER)\n      }\n    }\n  }\n':
          j2,
        '\n  fragment LastBuildOnBranchBuildFields on Build {\n    __typename\n    id\n    status\n    committedAt\n    ... on StartedBuild {\n      testsForStatus: tests(first: 1000, statuses: $testStatuses) {\n        nodes {\n          ...StatusTestFields\n        }\n      }\n      testsForStory: tests(storyId: $storyId) {\n        nodes {\n          ...LastBuildOnBranchTestFields\n        }\n      }\n    }\n    ... on CompletedBuild {\n      result\n      testsForStatus: tests(first: 1000, statuses: $testStatuses) {\n        nodes {\n          ...StatusTestFields\n        }\n      }\n      testsForStory: tests(storyId: $storyId) {\n        nodes {\n          ...LastBuildOnBranchTestFields\n        }\n      }\n    }\n  }\n':
          T2,
        '\n  fragment SelectedBuildFields on Build {\n    __typename\n    id\n    number\n    branch\n    commit\n    committedAt\n    uncommittedHash\n    status\n    ... on StartedBuild {\n      startedAt\n      testsForStory: tests(storyId: $storyId) {\n        nodes {\n          ...StoryTestFields\n        }\n      }\n    }\n    ... on CompletedBuild {\n      startedAt\n      testsForStory: tests(storyId: $storyId) {\n        nodes {\n          ...StoryTestFields\n        }\n      }\n    }\n  }\n':
          I2,
        '\n  fragment StatusTestFields on Test {\n    id\n    status\n    result\n    story {\n      storyId\n    }\n  }\n':
          L2,
        '\n  fragment LastBuildOnBranchTestFields on Test {\n    status\n    result\n  }\n':
          _2,
        '\n  fragment StoryTestFields on Test {\n    id\n    status\n    result\n    webUrl\n    comparisons {\n      id\n      result\n      browser {\n        id\n        key\n        name\n        version\n      }\n      captureDiff {\n        diffImage(signed: true) {\n          imageUrl\n          imageWidth\n        }\n        focusImage(signed: true) {\n          imageUrl\n          imageWidth\n        }\n      }\n      headCapture {\n        captureImage(signed: true) {\n          backgroundColor\n          imageUrl\n          imageWidth\n          thumbnailUrl\n        }\n        captureError {\n          kind\n          ... on CaptureErrorInteractionFailure {\n            error\n          }\n          ... on CaptureErrorJSError {\n            error\n          }\n          ... on CaptureErrorFailedJS {\n            error\n          }\n        }\n      }\n      baseCapture {\n        captureImage(signed: true) {\n          imageUrl\n          imageWidth\n        }\n      }\n    }\n    mode {\n      name\n      globals\n    }\n    story {\n      storyId\n      name\n      component {\n        name\n      }\n    }\n  }\n':
          Z2,
        '\n  mutation ReviewTest($input: ReviewTestInput!) {\n    reviewTest(input: $input) {\n      updatedTests {\n        id\n        status\n      }\n      userErrors {\n        ... on UserError {\n          __typename\n          message\n        }\n        ... on BuildSupersededError {\n          build {\n            id\n          }\n        }\n        ... on TestUnreviewableError {\n          test {\n            id\n          }\n        }\n      }\n    }\n  }\n':
          H2,
      };
    function ct(e) {
      return D2[e] ?? {};
    }
    var gi = (e, t) => sr(e.kind, e, { ...e.context, authAttempt: t });
    function z2(e) {
      return ({ client: t, forward: n }) => {
        var r = new Set(),
          i = Hi(),
          o = Hi(),
          l = new Map();
        function s() {
          d = void 0;
          var m = l;
          (l = new Map()), m.forEach(i.next);
        }
        function c(m) {
          d = void 0;
          var p = l;
          (l = new Map()),
            p.forEach((v) => {
              o.next(Z0(v, m));
            });
        }
        var d,
          u = null;
        return (m) => {
          function p() {
            d = Promise.resolve()
              .then(() =>
                e({
                  mutate(y, g, f) {
                    var E = t.createRequestOperation('mutation', vn(y, g), f);
                    return Eo(
                      Br(1)(
                        $e(
                          (S) =>
                            S.operation.key === E.key &&
                            E.context._instance ===
                              S.operation.context._instance
                        )(
                          ji(() => {
                            var S = h(E);
                            r.add(S.context._instance), i.next(S);
                          })(k)
                        )
                      )
                    );
                  },
                  appendHeaders(y, g) {
                    var f =
                      typeof y.context.fetchOptions == 'function'
                        ? y.context.fetchOptions()
                        : y.context.fetchOptions || {};
                    return sr(y.kind, y, {
                      ...y.context,
                      fetchOptions: { ...f, headers: { ...f.headers, ...g } },
                    });
                  },
                })
              )
              .then((y) => {
                y && (u = y), s();
              })
              .catch((y) => {
                c(y);
              });
          }
          p();
          function v(y) {
            l.set(y.key, gi(y, !0)),
              u && !d && (d = u.refreshAuth().then(s).catch(c));
          }
          function h(y) {
            return u ? u.addAuthToOperation(y) : y;
          }
          var b = $e(Boolean)(
              Vi((y) =>
                y.kind === 'teardown'
                  ? (l.delete(y.key), y)
                  : y.context._instance && r.has(y.context._instance)
                  ? y
                  : y.context.authAttempt
                  ? h(y)
                  : d || !u
                  ? (d || p(), l.has(y.key) || l.set(y.key, gi(y, !1)), null)
                  : (function (g) {
                      return (
                        !g.context.authAttempt &&
                        u &&
                        u.willAuthError &&
                        u.willAuthError(g)
                      );
                    })(y)
                  ? (v(y), null)
                  : h(gi(y, !1))
              )(da([i.source, m]))
            ),
            k = n(b);
          return da([
            o.source,
            $e((y) =>
              !r.has(y.operation.context._instance) &&
              y.error &&
              (function (g) {
                return (
                  u && u.didAuthError && u.didAuthError(g.error, g.operation)
                );
              })(y) &&
              !y.operation.context.authAttempt
                ? (v(y.operation), !1)
                : (r.has(y.operation.context._instance) &&
                    r.delete(y.operation.context._instance),
                  !0)
            )(k),
          ]);
        };
      };
    }
    var Da,
      U2 = new Uint8Array(16);
    function $2() {
      if (
        !Da &&
        ((Da =
          typeof crypto < 'u' &&
          crypto.getRandomValues &&
          crypto.getRandomValues.bind(crypto)),
        !Da)
      )
        throw new Error(
          'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported'
        );
      return Da(U2);
    }
    var Le = [];
    for (let e = 0; e < 256; ++e) Le.push((e + 256).toString(16).slice(1));
    function W2(e, t = 0) {
      return (
        Le[e[t + 0]] +
        Le[e[t + 1]] +
        Le[e[t + 2]] +
        Le[e[t + 3]] +
        '-' +
        Le[e[t + 4]] +
        Le[e[t + 5]] +
        '-' +
        Le[e[t + 6]] +
        Le[e[t + 7]] +
        '-' +
        Le[e[t + 8]] +
        Le[e[t + 9]] +
        '-' +
        Le[e[t + 10]] +
        Le[e[t + 11]] +
        Le[e[t + 12]] +
        Le[e[t + 13]] +
        Le[e[t + 14]] +
        Le[e[t + 15]]
      );
    }
    var G2 =
        typeof crypto < 'u' &&
        crypto.randomUUID &&
        crypto.randomUUID.bind(crypto),
      Il = { randomUUID: G2 };
    function q2(e, t, n) {
      if (Il.randomUUID && !t && !e) return Il.randomUUID();
      e = e || {};
      let r = e.random || (e.rng || $2)();
      if (((r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), t)) {
        n = n || 0;
        for (let i = 0; i < 16; ++i) t[n + i] = r[i];
        return t;
      }
      return W2(r);
    }
    var Y2 = q2,
      gt,
      ra,
      dr = (e) => {
        try {
          let { exp: t } = e
            ? JSON.parse(atob(e.split('.')[1]))
            : { exp: null };
          (gt = e), (ra = t);
        } catch {
          (gt = null), (ra = null);
        }
        gt ? localStorage.setItem(Oi, gt) : localStorage.removeItem(Oi);
      };
    dr(localStorage.getItem(Oi));
    var R0 = () => {
        let [{ token: e }, t] = $o(`${J}/accessToken`, { token: gt }),
          n = a.useCallback(
            (r) => {
              dr(r), t({ token: gt });
            },
            [t]
          );
        return [e, n];
      },
      Q2 = Y2(),
      B0 = (e) => ({
        headers: {
          Accept: '*/*',
          ...(e && { Authorization: `Bearer ${e}` }),
          'X-Chromatic-Session-ID': Q2,
        },
      }),
      K2 = new C2({
        url: i5,
        exchanges: [
          k2({
            onResult(e) {
              e.data?.viewer === null && dr(null);
            },
          }),
          z2(async (e) => ({
            addAuthToOperation(t) {
              return gt
                ? e.appendHeaders(t, { Authorization: `Bearer ${gt}` })
                : t;
            },
            didAuthError: (t) =>
              t.response.status === 401 ||
              t.graphQLErrors.some((n) => n.message.includes('Must login')),
            async refreshAuth() {
              dr(null);
            },
            willAuthError() {
              if (!gt) return !0;
              try {
                if (!ra) {
                  let { exp: t } = JSON.parse(atob(gt.split('.')[1]));
                  ra = t;
                }
                return Date.now() / 1e3 > (ra || 0);
              } catch {
                return !0;
              }
            },
          })),
          b2,
        ],
        fetchOptions: B0(),
      }),
      ie;
    (function (e) {
      e.assertEqual = (i) => i;
      function t(i) {}
      e.assertIs = t;
      function n(i) {
        throw new Error();
      }
      (e.assertNever = n),
        (e.arrayToEnum = (i) => {
          let o = {};
          for (let l of i) o[l] = l;
          return o;
        }),
        (e.getValidEnumValues = (i) => {
          let o = e.objectKeys(i).filter((s) => typeof i[i[s]] != 'number'),
            l = {};
          for (let s of o) l[s] = i[s];
          return e.objectValues(l);
        }),
        (e.objectValues = (i) =>
          e.objectKeys(i).map(function (o) {
            return i[o];
          })),
        (e.objectKeys =
          typeof Object.keys == 'function'
            ? (i) => Object.keys(i)
            : (i) => {
                let o = [];
                for (let l in i)
                  Object.prototype.hasOwnProperty.call(i, l) && o.push(l);
                return o;
              }),
        (e.find = (i, o) => {
          for (let l of i) if (o(l)) return l;
        }),
        (e.isInteger =
          typeof Number.isInteger == 'function'
            ? (i) => Number.isInteger(i)
            : (i) =>
                typeof i == 'number' && isFinite(i) && Math.floor(i) === i);
      function r(i, o = ' | ') {
        return i.map((l) => (typeof l == 'string' ? `'${l}'` : l)).join(o);
      }
      (e.joinValues = r),
        (e.jsonStringifyReplacer = (i, o) =>
          typeof o == 'bigint' ? o.toString() : o);
    })(ie || (ie = {}));
    var Gi;
    (function (e) {
      e.mergeShapes = (t, n) => ({ ...t, ...n });
    })(Gi || (Gi = {}));
    var L = ie.arrayToEnum([
        'string',
        'nan',
        'number',
        'integer',
        'float',
        'boolean',
        'date',
        'bigint',
        'symbol',
        'function',
        'undefined',
        'null',
        'array',
        'object',
        'unknown',
        'promise',
        'void',
        'never',
        'map',
        'set',
      ]),
      Rt = (e) => {
        switch (typeof e) {
          case 'undefined':
            return L.undefined;
          case 'string':
            return L.string;
          case 'number':
            return isNaN(e) ? L.nan : L.number;
          case 'boolean':
            return L.boolean;
          case 'function':
            return L.function;
          case 'bigint':
            return L.bigint;
          case 'symbol':
            return L.symbol;
          case 'object':
            return Array.isArray(e)
              ? L.array
              : e === null
              ? L.null
              : e.then &&
                typeof e.then == 'function' &&
                e.catch &&
                typeof e.catch == 'function'
              ? L.promise
              : typeof Map < 'u' && e instanceof Map
              ? L.map
              : typeof Set < 'u' && e instanceof Set
              ? L.set
              : typeof Date < 'u' && e instanceof Date
              ? L.date
              : L.object;
          default:
            return L.unknown;
        }
      },
      A = ie.arrayToEnum([
        'invalid_type',
        'invalid_literal',
        'custom',
        'invalid_union',
        'invalid_union_discriminator',
        'invalid_enum_value',
        'unrecognized_keys',
        'invalid_arguments',
        'invalid_return_type',
        'invalid_date',
        'invalid_string',
        'too_small',
        'too_big',
        'invalid_intersection_types',
        'not_multiple_of',
        'not_finite',
      ]),
      J2 = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, '$1:'),
      it = class extends Error {
        constructor(e) {
          super(),
            (this.issues = []),
            (this.addIssue = (n) => {
              this.issues = [...this.issues, n];
            }),
            (this.addIssues = (n = []) => {
              this.issues = [...this.issues, ...n];
            });
          let t = new.target.prototype;
          Object.setPrototypeOf
            ? Object.setPrototypeOf(this, t)
            : (this.__proto__ = t),
            (this.name = 'ZodError'),
            (this.issues = e);
        }
        get errors() {
          return this.issues;
        }
        format(e) {
          let t =
              e ||
              function (i) {
                return i.message;
              },
            n = { _errors: [] },
            r = (i) => {
              for (let o of i.issues)
                if (o.code === 'invalid_union') o.unionErrors.map(r);
                else if (o.code === 'invalid_return_type') r(o.returnTypeError);
                else if (o.code === 'invalid_arguments') r(o.argumentsError);
                else if (o.path.length === 0) n._errors.push(t(o));
                else {
                  let l = n,
                    s = 0;
                  for (; s < o.path.length; ) {
                    let c = o.path[s];
                    s === o.path.length - 1
                      ? ((l[c] = l[c] || { _errors: [] }),
                        l[c]._errors.push(t(o)))
                      : (l[c] = l[c] || { _errors: [] }),
                      (l = l[c]),
                      s++;
                  }
                }
            };
          return r(this), n;
        }
        toString() {
          return this.message;
        }
        get message() {
          return JSON.stringify(this.issues, ie.jsonStringifyReplacer, 2);
        }
        get isEmpty() {
          return this.issues.length === 0;
        }
        flatten(e = (t) => t.message) {
          let t = {},
            n = [];
          for (let r of this.issues)
            r.path.length > 0
              ? ((t[r.path[0]] = t[r.path[0]] || []), t[r.path[0]].push(e(r)))
              : n.push(e(r));
          return { formErrors: n, fieldErrors: t };
        }
        get formErrors() {
          return this.flatten();
        }
      };
    it.create = (e) => new it(e);
    var ma = (e, t) => {
        let n;
        switch (e.code) {
          case A.invalid_type:
            e.received === L.undefined
              ? (n = 'Required')
              : (n = `Expected ${e.expected}, received ${e.received}`);
            break;
          case A.invalid_literal:
            n = `Invalid literal value, expected ${JSON.stringify(
              e.expected,
              ie.jsonStringifyReplacer
            )}`;
            break;
          case A.unrecognized_keys:
            n = `Unrecognized key(s) in object: ${ie.joinValues(e.keys, ', ')}`;
            break;
          case A.invalid_union:
            n = 'Invalid input';
            break;
          case A.invalid_union_discriminator:
            n = `Invalid discriminator value. Expected ${ie.joinValues(
              e.options
            )}`;
            break;
          case A.invalid_enum_value:
            n = `Invalid enum value. Expected ${ie.joinValues(
              e.options
            )}, received '${e.received}'`;
            break;
          case A.invalid_arguments:
            n = 'Invalid function arguments';
            break;
          case A.invalid_return_type:
            n = 'Invalid function return type';
            break;
          case A.invalid_date:
            n = 'Invalid date';
            break;
          case A.invalid_string:
            typeof e.validation == 'object'
              ? 'includes' in e.validation
                ? ((n = `Invalid input: must include "${e.validation.includes}"`),
                  typeof e.validation.position == 'number' &&
                    (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`))
                : 'startsWith' in e.validation
                ? (n = `Invalid input: must start with "${e.validation.startsWith}"`)
                : 'endsWith' in e.validation
                ? (n = `Invalid input: must end with "${e.validation.endsWith}"`)
                : ie.assertNever(e.validation)
              : e.validation !== 'regex'
              ? (n = `Invalid ${e.validation}`)
              : (n = 'Invalid');
            break;
          case A.too_small:
            e.type === 'array'
              ? (n = `Array must contain ${
                  e.exact ? 'exactly' : e.inclusive ? 'at least' : 'more than'
                } ${e.minimum} element(s)`)
              : e.type === 'string'
              ? (n = `String must contain ${
                  e.exact ? 'exactly' : e.inclusive ? 'at least' : 'over'
                } ${e.minimum} character(s)`)
              : e.type === 'number'
              ? (n = `Number must be ${
                  e.exact
                    ? 'exactly equal to '
                    : e.inclusive
                    ? 'greater than or equal to '
                    : 'greater than '
                }${e.minimum}`)
              : e.type === 'date'
              ? (n = `Date must be ${
                  e.exact
                    ? 'exactly equal to '
                    : e.inclusive
                    ? 'greater than or equal to '
                    : 'greater than '
                }${new Date(Number(e.minimum))}`)
              : (n = 'Invalid input');
            break;
          case A.too_big:
            e.type === 'array'
              ? (n = `Array must contain ${
                  e.exact ? 'exactly' : e.inclusive ? 'at most' : 'less than'
                } ${e.maximum} element(s)`)
              : e.type === 'string'
              ? (n = `String must contain ${
                  e.exact ? 'exactly' : e.inclusive ? 'at most' : 'under'
                } ${e.maximum} character(s)`)
              : e.type === 'number'
              ? (n = `Number must be ${
                  e.exact
                    ? 'exactly'
                    : e.inclusive
                    ? 'less than or equal to'
                    : 'less than'
                } ${e.maximum}`)
              : e.type === 'bigint'
              ? (n = `BigInt must be ${
                  e.exact
                    ? 'exactly'
                    : e.inclusive
                    ? 'less than or equal to'
                    : 'less than'
                } ${e.maximum}`)
              : e.type === 'date'
              ? (n = `Date must be ${
                  e.exact
                    ? 'exactly'
                    : e.inclusive
                    ? 'smaller than or equal to'
                    : 'smaller than'
                } ${new Date(Number(e.maximum))}`)
              : (n = 'Invalid input');
            break;
          case A.custom:
            n = 'Invalid input';
            break;
          case A.invalid_intersection_types:
            n = 'Intersection results could not be merged';
            break;
          case A.not_multiple_of:
            n = `Number must be a multiple of ${e.multipleOf}`;
            break;
          case A.not_finite:
            n = 'Number must be finite';
            break;
          default:
            (n = t.defaultError), ie.assertNever(e);
        }
        return { message: n };
      },
      P0 = ma;
    function X2(e) {
      P0 = e;
    }
    function ur() {
      return P0;
    }
    var mr = (e) => {
        let { data: t, path: n, errorMaps: r, issueData: i } = e,
          o = [...n, ...(i.path || [])],
          l = { ...i, path: o },
          s = '',
          c = r
            .filter((d) => !!d)
            .slice()
            .reverse();
        for (let d of c) s = d(l, { data: t, defaultError: s }).message;
        return { ...i, path: o, message: i.message || s };
      },
      em = [];
    function Z(e, t) {
      let n = mr({
        issueData: t,
        data: e.data,
        path: e.path,
        errorMaps: [
          e.common.contextualErrorMap,
          e.schemaErrorMap,
          ur(),
          ma,
        ].filter((r) => !!r),
      });
      e.common.issues.push(n);
    }
    var ze = class {
        constructor() {
          this.value = 'valid';
        }
        dirty() {
          this.value === 'valid' && (this.value = 'dirty');
        }
        abort() {
          this.value !== 'aborted' && (this.value = 'aborted');
        }
        static mergeArray(e, t) {
          let n = [];
          for (let r of t) {
            if (r.status === 'aborted') return U;
            r.status === 'dirty' && e.dirty(), n.push(r.value);
          }
          return { status: e.value, value: n };
        }
        static async mergeObjectAsync(e, t) {
          let n = [];
          for (let r of t) n.push({ key: await r.key, value: await r.value });
          return ze.mergeObjectSync(e, n);
        }
        static mergeObjectSync(e, t) {
          let n = {};
          for (let r of t) {
            let { key: i, value: o } = r;
            if (i.status === 'aborted' || o.status === 'aborted') return U;
            i.status === 'dirty' && e.dirty(),
              o.status === 'dirty' && e.dirty(),
              i.value !== '__proto__' &&
                (typeof o.value < 'u' || r.alwaysSet) &&
                (n[i.value] = o.value);
          }
          return { status: e.value, value: n };
        }
      },
      U = Object.freeze({ status: 'aborted' }),
      V0 = (e) => ({ status: 'dirty', value: e }),
      Ue = (e) => ({ status: 'valid', value: e }),
      qi = (e) => e.status === 'aborted',
      Yi = (e) => e.status === 'dirty',
      pa = (e) => e.status === 'valid',
      pr = (e) => typeof Promise < 'u' && e instanceof Promise,
      j;
    (function (e) {
      (e.errToObj = (t) => (typeof t == 'string' ? { message: t } : t || {})),
        (e.toString = (t) => (typeof t == 'string' ? t : t?.message));
    })(j || (j = {}));
    var Ct = class {
        constructor(e, t, n, r) {
          (this._cachedPath = []),
            (this.parent = e),
            (this.data = t),
            (this._path = n),
            (this._key = r);
        }
        get path() {
          return (
            this._cachedPath.length ||
              (this._key instanceof Array
                ? this._cachedPath.push(...this._path, ...this._key)
                : this._cachedPath.push(...this._path, this._key)),
            this._cachedPath
          );
        }
      },
      Rl = (e, t) => {
        if (pa(t)) return { success: !0, data: t.value };
        if (!e.common.issues.length)
          throw new Error('Validation failed but no issues detected.');
        return {
          success: !1,
          get error() {
            if (this._error) return this._error;
            let n = new it(e.common.issues);
            return (this._error = n), this._error;
          },
        };
      };
    function G(e) {
      if (!e) return {};
      let {
        errorMap: t,
        invalid_type_error: n,
        required_error: r,
        description: i,
      } = e;
      if (t && (n || r))
        throw new Error(
          `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`
        );
      return t
        ? { errorMap: t, description: i }
        : {
            errorMap: (o, l) =>
              o.code !== 'invalid_type'
                ? { message: l.defaultError }
                : typeof l.data > 'u'
                ? { message: r ?? l.defaultError }
                : { message: n ?? l.defaultError },
            description: i,
          };
    }
    var Q = class {
        constructor(e) {
          (this.spa = this.safeParseAsync),
            (this._def = e),
            (this.parse = this.parse.bind(this)),
            (this.safeParse = this.safeParse.bind(this)),
            (this.parseAsync = this.parseAsync.bind(this)),
            (this.safeParseAsync = this.safeParseAsync.bind(this)),
            (this.spa = this.spa.bind(this)),
            (this.refine = this.refine.bind(this)),
            (this.refinement = this.refinement.bind(this)),
            (this.superRefine = this.superRefine.bind(this)),
            (this.optional = this.optional.bind(this)),
            (this.nullable = this.nullable.bind(this)),
            (this.nullish = this.nullish.bind(this)),
            (this.array = this.array.bind(this)),
            (this.promise = this.promise.bind(this)),
            (this.or = this.or.bind(this)),
            (this.and = this.and.bind(this)),
            (this.transform = this.transform.bind(this)),
            (this.brand = this.brand.bind(this)),
            (this.default = this.default.bind(this)),
            (this.catch = this.catch.bind(this)),
            (this.describe = this.describe.bind(this)),
            (this.pipe = this.pipe.bind(this)),
            (this.readonly = this.readonly.bind(this)),
            (this.isNullable = this.isNullable.bind(this)),
            (this.isOptional = this.isOptional.bind(this));
        }
        get description() {
          return this._def.description;
        }
        _getType(e) {
          return Rt(e.data);
        }
        _getOrReturnCtx(e, t) {
          return (
            t || {
              common: e.parent.common,
              data: e.data,
              parsedType: Rt(e.data),
              schemaErrorMap: this._def.errorMap,
              path: e.path,
              parent: e.parent,
            }
          );
        }
        _processInputParams(e) {
          return {
            status: new ze(),
            ctx: {
              common: e.parent.common,
              data: e.data,
              parsedType: Rt(e.data),
              schemaErrorMap: this._def.errorMap,
              path: e.path,
              parent: e.parent,
            },
          };
        }
        _parseSync(e) {
          let t = this._parse(e);
          if (pr(t)) throw new Error('Synchronous parse encountered promise.');
          return t;
        }
        _parseAsync(e) {
          let t = this._parse(e);
          return Promise.resolve(t);
        }
        parse(e, t) {
          let n = this.safeParse(e, t);
          if (n.success) return n.data;
          throw n.error;
        }
        safeParse(e, t) {
          var n;
          let r = {
              common: {
                issues: [],
                async: (n = t?.async) !== null && n !== void 0 ? n : !1,
                contextualErrorMap: t?.errorMap,
              },
              path: t?.path || [],
              schemaErrorMap: this._def.errorMap,
              parent: null,
              data: e,
              parsedType: Rt(e),
            },
            i = this._parseSync({ data: e, path: r.path, parent: r });
          return Rl(r, i);
        }
        async parseAsync(e, t) {
          let n = await this.safeParseAsync(e, t);
          if (n.success) return n.data;
          throw n.error;
        }
        async safeParseAsync(e, t) {
          let n = {
              common: {
                issues: [],
                contextualErrorMap: t?.errorMap,
                async: !0,
              },
              path: t?.path || [],
              schemaErrorMap: this._def.errorMap,
              parent: null,
              data: e,
              parsedType: Rt(e),
            },
            r = this._parse({ data: e, path: n.path, parent: n }),
            i = await (pr(r) ? r : Promise.resolve(r));
          return Rl(n, i);
        }
        refine(e, t) {
          let n = (r) =>
            typeof t == 'string' || typeof t > 'u'
              ? { message: t }
              : typeof t == 'function'
              ? t(r)
              : t;
          return this._refinement((r, i) => {
            let o = e(r),
              l = () => i.addIssue({ code: A.custom, ...n(r) });
            return typeof Promise < 'u' && o instanceof Promise
              ? o.then((s) => (s ? !0 : (l(), !1)))
              : o
              ? !0
              : (l(), !1);
          });
        }
        refinement(e, t) {
          return this._refinement((n, r) =>
            e(n) ? !0 : (r.addIssue(typeof t == 'function' ? t(n, r) : t), !1)
          );
        }
        _refinement(e) {
          return new ot({
            schema: this,
            typeName: z.ZodEffects,
            effect: { type: 'refinement', refinement: e },
          });
        }
        superRefine(e) {
          return this._refinement(e);
        }
        optional() {
          return Ft.create(this, this._def);
        }
        nullable() {
          return tn.create(this, this._def);
        }
        nullish() {
          return this.nullable().optional();
        }
        array() {
          return kt.create(this, this._def);
        }
        promise() {
          return Sn.create(this, this._def);
        }
        or(e) {
          return va.create([this, e], this._def);
        }
        and(e) {
          return ya.create(this, e, this._def);
        }
        transform(e) {
          return new ot({
            ...G(this._def),
            schema: this,
            typeName: z.ZodEffects,
            effect: { type: 'transform', transform: e },
          });
        }
        default(e) {
          let t = typeof e == 'function' ? e : () => e;
          return new wa({
            ...G(this._def),
            innerType: this,
            defaultValue: t,
            typeName: z.ZodDefault,
          });
        }
        brand() {
          return new H0({
            typeName: z.ZodBranded,
            type: this,
            ...G(this._def),
          });
        }
        catch(e) {
          let t = typeof e == 'function' ? e : () => e;
          return new yr({
            ...G(this._def),
            innerType: this,
            catchValue: t,
            typeName: z.ZodCatch,
          });
        }
        describe(e) {
          let t = this.constructor;
          return new t({ ...this._def, description: e });
        }
        pipe(e) {
          return Vr.create(this, e);
        }
        readonly() {
          return Er.create(this);
        }
        isOptional() {
          return this.safeParse(void 0).success;
        }
        isNullable() {
          return this.safeParse(null).success;
        }
      },
      tm = /^c[^\s-]{8,}$/i,
      nm = /^[a-z][a-z0-9]*$/,
      am = /^[0-9A-HJKMNP-TV-Z]{26}$/,
      rm =
        /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
      im =
        /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
      om = '^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$',
      vi,
      lm =
        /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
      sm =
        /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
      cm = (e) =>
        e.precision
          ? e.offset
            ? new RegExp(
                `^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`
              )
            : new RegExp(
                `^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`
              )
          : e.precision === 0
          ? e.offset
            ? new RegExp(
                '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$'
              )
            : new RegExp('^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$')
          : e.offset
          ? new RegExp(
              '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$'
            )
          : new RegExp(
              '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$'
            );
    function dm(e, t) {
      return !!(
        ((t === 'v4' || !t) && lm.test(e)) ||
        ((t === 'v6' || !t) && sm.test(e))
      );
    }
    var vt = class extends Q {
      _parse(e) {
        if (
          (this._def.coerce && (e.data = String(e.data)),
          this._getType(e) !== L.string)
        ) {
          let r = this._getOrReturnCtx(e);
          return (
            Z(r, {
              code: A.invalid_type,
              expected: L.string,
              received: r.parsedType,
            }),
            U
          );
        }
        let t = new ze(),
          n;
        for (let r of this._def.checks)
          if (r.kind === 'min')
            e.data.length < r.value &&
              ((n = this._getOrReturnCtx(e, n)),
              Z(n, {
                code: A.too_small,
                minimum: r.value,
                type: 'string',
                inclusive: !0,
                exact: !1,
                message: r.message,
              }),
              t.dirty());
          else if (r.kind === 'max')
            e.data.length > r.value &&
              ((n = this._getOrReturnCtx(e, n)),
              Z(n, {
                code: A.too_big,
                maximum: r.value,
                type: 'string',
                inclusive: !0,
                exact: !1,
                message: r.message,
              }),
              t.dirty());
          else if (r.kind === 'length') {
            let i = e.data.length > r.value,
              o = e.data.length < r.value;
            (i || o) &&
              ((n = this._getOrReturnCtx(e, n)),
              i
                ? Z(n, {
                    code: A.too_big,
                    maximum: r.value,
                    type: 'string',
                    inclusive: !0,
                    exact: !0,
                    message: r.message,
                  })
                : o &&
                  Z(n, {
                    code: A.too_small,
                    minimum: r.value,
                    type: 'string',
                    inclusive: !0,
                    exact: !0,
                    message: r.message,
                  }),
              t.dirty());
          } else if (r.kind === 'email')
            im.test(e.data) ||
              ((n = this._getOrReturnCtx(e, n)),
              Z(n, {
                validation: 'email',
                code: A.invalid_string,
                message: r.message,
              }),
              t.dirty());
          else if (r.kind === 'emoji')
            vi || (vi = new RegExp(om, 'u')),
              vi.test(e.data) ||
                ((n = this._getOrReturnCtx(e, n)),
                Z(n, {
                  validation: 'emoji',
                  code: A.invalid_string,
                  message: r.message,
                }),
                t.dirty());
          else if (r.kind === 'uuid')
            rm.test(e.data) ||
              ((n = this._getOrReturnCtx(e, n)),
              Z(n, {
                validation: 'uuid',
                code: A.invalid_string,
                message: r.message,
              }),
              t.dirty());
          else if (r.kind === 'cuid')
            tm.test(e.data) ||
              ((n = this._getOrReturnCtx(e, n)),
              Z(n, {
                validation: 'cuid',
                code: A.invalid_string,
                message: r.message,
              }),
              t.dirty());
          else if (r.kind === 'cuid2')
            nm.test(e.data) ||
              ((n = this._getOrReturnCtx(e, n)),
              Z(n, {
                validation: 'cuid2',
                code: A.invalid_string,
                message: r.message,
              }),
              t.dirty());
          else if (r.kind === 'ulid')
            am.test(e.data) ||
              ((n = this._getOrReturnCtx(e, n)),
              Z(n, {
                validation: 'ulid',
                code: A.invalid_string,
                message: r.message,
              }),
              t.dirty());
          else if (r.kind === 'url')
            try {
              new URL(e.data);
            } catch {
              (n = this._getOrReturnCtx(e, n)),
                Z(n, {
                  validation: 'url',
                  code: A.invalid_string,
                  message: r.message,
                }),
                t.dirty();
            }
          else
            r.kind === 'regex'
              ? ((r.regex.lastIndex = 0),
                r.regex.test(e.data) ||
                  ((n = this._getOrReturnCtx(e, n)),
                  Z(n, {
                    validation: 'regex',
                    code: A.invalid_string,
                    message: r.message,
                  }),
                  t.dirty()))
              : r.kind === 'trim'
              ? (e.data = e.data.trim())
              : r.kind === 'includes'
              ? e.data.includes(r.value, r.position) ||
                ((n = this._getOrReturnCtx(e, n)),
                Z(n, {
                  code: A.invalid_string,
                  validation: { includes: r.value, position: r.position },
                  message: r.message,
                }),
                t.dirty())
              : r.kind === 'toLowerCase'
              ? (e.data = e.data.toLowerCase())
              : r.kind === 'toUpperCase'
              ? (e.data = e.data.toUpperCase())
              : r.kind === 'startsWith'
              ? e.data.startsWith(r.value) ||
                ((n = this._getOrReturnCtx(e, n)),
                Z(n, {
                  code: A.invalid_string,
                  validation: { startsWith: r.value },
                  message: r.message,
                }),
                t.dirty())
              : r.kind === 'endsWith'
              ? e.data.endsWith(r.value) ||
                ((n = this._getOrReturnCtx(e, n)),
                Z(n, {
                  code: A.invalid_string,
                  validation: { endsWith: r.value },
                  message: r.message,
                }),
                t.dirty())
              : r.kind === 'datetime'
              ? cm(r).test(e.data) ||
                ((n = this._getOrReturnCtx(e, n)),
                Z(n, {
                  code: A.invalid_string,
                  validation: 'datetime',
                  message: r.message,
                }),
                t.dirty())
              : r.kind === 'ip'
              ? dm(e.data, r.version) ||
                ((n = this._getOrReturnCtx(e, n)),
                Z(n, {
                  validation: 'ip',
                  code: A.invalid_string,
                  message: r.message,
                }),
                t.dirty())
              : ie.assertNever(r);
        return { status: t.value, value: e.data };
      }
      _regex(e, t, n) {
        return this.refinement((r) => e.test(r), {
          validation: t,
          code: A.invalid_string,
          ...j.errToObj(n),
        });
      }
      _addCheck(e) {
        return new vt({ ...this._def, checks: [...this._def.checks, e] });
      }
      email(e) {
        return this._addCheck({ kind: 'email', ...j.errToObj(e) });
      }
      url(e) {
        return this._addCheck({ kind: 'url', ...j.errToObj(e) });
      }
      emoji(e) {
        return this._addCheck({ kind: 'emoji', ...j.errToObj(e) });
      }
      uuid(e) {
        return this._addCheck({ kind: 'uuid', ...j.errToObj(e) });
      }
      cuid(e) {
        return this._addCheck({ kind: 'cuid', ...j.errToObj(e) });
      }
      cuid2(e) {
        return this._addCheck({ kind: 'cuid2', ...j.errToObj(e) });
      }
      ulid(e) {
        return this._addCheck({ kind: 'ulid', ...j.errToObj(e) });
      }
      ip(e) {
        return this._addCheck({ kind: 'ip', ...j.errToObj(e) });
      }
      datetime(e) {
        var t;
        return typeof e == 'string'
          ? this._addCheck({
              kind: 'datetime',
              precision: null,
              offset: !1,
              message: e,
            })
          : this._addCheck({
              kind: 'datetime',
              precision: typeof e?.precision > 'u' ? null : e?.precision,
              offset: (t = e?.offset) !== null && t !== void 0 ? t : !1,
              ...j.errToObj(e?.message),
            });
      }
      regex(e, t) {
        return this._addCheck({ kind: 'regex', regex: e, ...j.errToObj(t) });
      }
      includes(e, t) {
        return this._addCheck({
          kind: 'includes',
          value: e,
          position: t?.position,
          ...j.errToObj(t?.message),
        });
      }
      startsWith(e, t) {
        return this._addCheck({
          kind: 'startsWith',
          value: e,
          ...j.errToObj(t),
        });
      }
      endsWith(e, t) {
        return this._addCheck({ kind: 'endsWith', value: e, ...j.errToObj(t) });
      }
      min(e, t) {
        return this._addCheck({ kind: 'min', value: e, ...j.errToObj(t) });
      }
      max(e, t) {
        return this._addCheck({ kind: 'max', value: e, ...j.errToObj(t) });
      }
      length(e, t) {
        return this._addCheck({ kind: 'length', value: e, ...j.errToObj(t) });
      }
      nonempty(e) {
        return this.min(1, j.errToObj(e));
      }
      trim() {
        return new vt({
          ...this._def,
          checks: [...this._def.checks, { kind: 'trim' }],
        });
      }
      toLowerCase() {
        return new vt({
          ...this._def,
          checks: [...this._def.checks, { kind: 'toLowerCase' }],
        });
      }
      toUpperCase() {
        return new vt({
          ...this._def,
          checks: [...this._def.checks, { kind: 'toUpperCase' }],
        });
      }
      get isDatetime() {
        return !!this._def.checks.find((e) => e.kind === 'datetime');
      }
      get isEmail() {
        return !!this._def.checks.find((e) => e.kind === 'email');
      }
      get isURL() {
        return !!this._def.checks.find((e) => e.kind === 'url');
      }
      get isEmoji() {
        return !!this._def.checks.find((e) => e.kind === 'emoji');
      }
      get isUUID() {
        return !!this._def.checks.find((e) => e.kind === 'uuid');
      }
      get isCUID() {
        return !!this._def.checks.find((e) => e.kind === 'cuid');
      }
      get isCUID2() {
        return !!this._def.checks.find((e) => e.kind === 'cuid2');
      }
      get isULID() {
        return !!this._def.checks.find((e) => e.kind === 'ulid');
      }
      get isIP() {
        return !!this._def.checks.find((e) => e.kind === 'ip');
      }
      get minLength() {
        let e = null;
        for (let t of this._def.checks)
          t.kind === 'min' && (e === null || t.value > e) && (e = t.value);
        return e;
      }
      get maxLength() {
        let e = null;
        for (let t of this._def.checks)
          t.kind === 'max' && (e === null || t.value < e) && (e = t.value);
        return e;
      }
    };
    vt.create = (e) => {
      var t;
      return new vt({
        checks: [],
        typeName: z.ZodString,
        coerce: (t = e?.coerce) !== null && t !== void 0 ? t : !1,
        ...G(e),
      });
    };
    function um(e, t) {
      let n = (e.toString().split('.')[1] || '').length,
        r = (t.toString().split('.')[1] || '').length,
        i = n > r ? n : r,
        o = parseInt(e.toFixed(i).replace('.', '')),
        l = parseInt(t.toFixed(i).replace('.', ''));
      return (o % l) / Math.pow(10, i);
    }
    var Jt = class extends Q {
      constructor() {
        super(...arguments),
          (this.min = this.gte),
          (this.max = this.lte),
          (this.step = this.multipleOf);
      }
      _parse(e) {
        if (
          (this._def.coerce && (e.data = Number(e.data)),
          this._getType(e) !== L.number)
        ) {
          let r = this._getOrReturnCtx(e);
          return (
            Z(r, {
              code: A.invalid_type,
              expected: L.number,
              received: r.parsedType,
            }),
            U
          );
        }
        let t,
          n = new ze();
        for (let r of this._def.checks)
          r.kind === 'int'
            ? ie.isInteger(e.data) ||
              ((t = this._getOrReturnCtx(e, t)),
              Z(t, {
                code: A.invalid_type,
                expected: 'integer',
                received: 'float',
                message: r.message,
              }),
              n.dirty())
            : r.kind === 'min'
            ? (r.inclusive ? e.data < r.value : e.data <= r.value) &&
              ((t = this._getOrReturnCtx(e, t)),
              Z(t, {
                code: A.too_small,
                minimum: r.value,
                type: 'number',
                inclusive: r.inclusive,
                exact: !1,
                message: r.message,
              }),
              n.dirty())
            : r.kind === 'max'
            ? (r.inclusive ? e.data > r.value : e.data >= r.value) &&
              ((t = this._getOrReturnCtx(e, t)),
              Z(t, {
                code: A.too_big,
                maximum: r.value,
                type: 'number',
                inclusive: r.inclusive,
                exact: !1,
                message: r.message,
              }),
              n.dirty())
            : r.kind === 'multipleOf'
            ? um(e.data, r.value) !== 0 &&
              ((t = this._getOrReturnCtx(e, t)),
              Z(t, {
                code: A.not_multiple_of,
                multipleOf: r.value,
                message: r.message,
              }),
              n.dirty())
            : r.kind === 'finite'
            ? Number.isFinite(e.data) ||
              ((t = this._getOrReturnCtx(e, t)),
              Z(t, { code: A.not_finite, message: r.message }),
              n.dirty())
            : ie.assertNever(r);
        return { status: n.value, value: e.data };
      }
      gte(e, t) {
        return this.setLimit('min', e, !0, j.toString(t));
      }
      gt(e, t) {
        return this.setLimit('min', e, !1, j.toString(t));
      }
      lte(e, t) {
        return this.setLimit('max', e, !0, j.toString(t));
      }
      lt(e, t) {
        return this.setLimit('max', e, !1, j.toString(t));
      }
      setLimit(e, t, n, r) {
        return new Jt({
          ...this._def,
          checks: [
            ...this._def.checks,
            { kind: e, value: t, inclusive: n, message: j.toString(r) },
          ],
        });
      }
      _addCheck(e) {
        return new Jt({ ...this._def, checks: [...this._def.checks, e] });
      }
      int(e) {
        return this._addCheck({ kind: 'int', message: j.toString(e) });
      }
      positive(e) {
        return this._addCheck({
          kind: 'min',
          value: 0,
          inclusive: !1,
          message: j.toString(e),
        });
      }
      negative(e) {
        return this._addCheck({
          kind: 'max',
          value: 0,
          inclusive: !1,
          message: j.toString(e),
        });
      }
      nonpositive(e) {
        return this._addCheck({
          kind: 'max',
          value: 0,
          inclusive: !0,
          message: j.toString(e),
        });
      }
      nonnegative(e) {
        return this._addCheck({
          kind: 'min',
          value: 0,
          inclusive: !0,
          message: j.toString(e),
        });
      }
      multipleOf(e, t) {
        return this._addCheck({
          kind: 'multipleOf',
          value: e,
          message: j.toString(t),
        });
      }
      finite(e) {
        return this._addCheck({ kind: 'finite', message: j.toString(e) });
      }
      safe(e) {
        return this._addCheck({
          kind: 'min',
          inclusive: !0,
          value: Number.MIN_SAFE_INTEGER,
          message: j.toString(e),
        })._addCheck({
          kind: 'max',
          inclusive: !0,
          value: Number.MAX_SAFE_INTEGER,
          message: j.toString(e),
        });
      }
      get minValue() {
        let e = null;
        for (let t of this._def.checks)
          t.kind === 'min' && (e === null || t.value > e) && (e = t.value);
        return e;
      }
      get maxValue() {
        let e = null;
        for (let t of this._def.checks)
          t.kind === 'max' && (e === null || t.value < e) && (e = t.value);
        return e;
      }
      get isInt() {
        return !!this._def.checks.find(
          (e) =>
            e.kind === 'int' ||
            (e.kind === 'multipleOf' && ie.isInteger(e.value))
        );
      }
      get isFinite() {
        let e = null,
          t = null;
        for (let n of this._def.checks) {
          if (
            n.kind === 'finite' ||
            n.kind === 'int' ||
            n.kind === 'multipleOf'
          )
            return !0;
          n.kind === 'min'
            ? (t === null || n.value > t) && (t = n.value)
            : n.kind === 'max' && (e === null || n.value < e) && (e = n.value);
        }
        return Number.isFinite(t) && Number.isFinite(e);
      }
    };
    Jt.create = (e) =>
      new Jt({
        checks: [],
        typeName: z.ZodNumber,
        coerce: e?.coerce || !1,
        ...G(e),
      });
    var Xt = class extends Q {
      constructor() {
        super(...arguments), (this.min = this.gte), (this.max = this.lte);
      }
      _parse(e) {
        if (
          (this._def.coerce && (e.data = BigInt(e.data)),
          this._getType(e) !== L.bigint)
        ) {
          let r = this._getOrReturnCtx(e);
          return (
            Z(r, {
              code: A.invalid_type,
              expected: L.bigint,
              received: r.parsedType,
            }),
            U
          );
        }
        let t,
          n = new ze();
        for (let r of this._def.checks)
          r.kind === 'min'
            ? (r.inclusive ? e.data < r.value : e.data <= r.value) &&
              ((t = this._getOrReturnCtx(e, t)),
              Z(t, {
                code: A.too_small,
                type: 'bigint',
                minimum: r.value,
                inclusive: r.inclusive,
                message: r.message,
              }),
              n.dirty())
            : r.kind === 'max'
            ? (r.inclusive ? e.data > r.value : e.data >= r.value) &&
              ((t = this._getOrReturnCtx(e, t)),
              Z(t, {
                code: A.too_big,
                type: 'bigint',
                maximum: r.value,
                inclusive: r.inclusive,
                message: r.message,
              }),
              n.dirty())
            : r.kind === 'multipleOf'
            ? e.data % r.value !== BigInt(0) &&
              ((t = this._getOrReturnCtx(e, t)),
              Z(t, {
                code: A.not_multiple_of,
                multipleOf: r.value,
                message: r.message,
              }),
              n.dirty())
            : ie.assertNever(r);
        return { status: n.value, value: e.data };
      }
      gte(e, t) {
        return this.setLimit('min', e, !0, j.toString(t));
      }
      gt(e, t) {
        return this.setLimit('min', e, !1, j.toString(t));
      }
      lte(e, t) {
        return this.setLimit('max', e, !0, j.toString(t));
      }
      lt(e, t) {
        return this.setLimit('max', e, !1, j.toString(t));
      }
      setLimit(e, t, n, r) {
        return new Xt({
          ...this._def,
          checks: [
            ...this._def.checks,
            { kind: e, value: t, inclusive: n, message: j.toString(r) },
          ],
        });
      }
      _addCheck(e) {
        return new Xt({ ...this._def, checks: [...this._def.checks, e] });
      }
      positive(e) {
        return this._addCheck({
          kind: 'min',
          value: BigInt(0),
          inclusive: !1,
          message: j.toString(e),
        });
      }
      negative(e) {
        return this._addCheck({
          kind: 'max',
          value: BigInt(0),
          inclusive: !1,
          message: j.toString(e),
        });
      }
      nonpositive(e) {
        return this._addCheck({
          kind: 'max',
          value: BigInt(0),
          inclusive: !0,
          message: j.toString(e),
        });
      }
      nonnegative(e) {
        return this._addCheck({
          kind: 'min',
          value: BigInt(0),
          inclusive: !0,
          message: j.toString(e),
        });
      }
      multipleOf(e, t) {
        return this._addCheck({
          kind: 'multipleOf',
          value: e,
          message: j.toString(t),
        });
      }
      get minValue() {
        let e = null;
        for (let t of this._def.checks)
          t.kind === 'min' && (e === null || t.value > e) && (e = t.value);
        return e;
      }
      get maxValue() {
        let e = null;
        for (let t of this._def.checks)
          t.kind === 'max' && (e === null || t.value < e) && (e = t.value);
        return e;
      }
    };
    Xt.create = (e) => {
      var t;
      return new Xt({
        checks: [],
        typeName: z.ZodBigInt,
        coerce: (t = e?.coerce) !== null && t !== void 0 ? t : !1,
        ...G(e),
      });
    };
    var ha = class extends Q {
      _parse(e) {
        if (
          (this._def.coerce && (e.data = !!e.data),
          this._getType(e) !== L.boolean)
        ) {
          let t = this._getOrReturnCtx(e);
          return (
            Z(t, {
              code: A.invalid_type,
              expected: L.boolean,
              received: t.parsedType,
            }),
            U
          );
        }
        return Ue(e.data);
      }
    };
    ha.create = (e) =>
      new ha({ typeName: z.ZodBoolean, coerce: e?.coerce || !1, ...G(e) });
    var wn = class extends Q {
      _parse(e) {
        if (
          (this._def.coerce && (e.data = new Date(e.data)),
          this._getType(e) !== L.date)
        ) {
          let r = this._getOrReturnCtx(e);
          return (
            Z(r, {
              code: A.invalid_type,
              expected: L.date,
              received: r.parsedType,
            }),
            U
          );
        }
        if (isNaN(e.data.getTime())) {
          let r = this._getOrReturnCtx(e);
          return Z(r, { code: A.invalid_date }), U;
        }
        let t = new ze(),
          n;
        for (let r of this._def.checks)
          r.kind === 'min'
            ? e.data.getTime() < r.value &&
              ((n = this._getOrReturnCtx(e, n)),
              Z(n, {
                code: A.too_small,
                message: r.message,
                inclusive: !0,
                exact: !1,
                minimum: r.value,
                type: 'date',
              }),
              t.dirty())
            : r.kind === 'max'
            ? e.data.getTime() > r.value &&
              ((n = this._getOrReturnCtx(e, n)),
              Z(n, {
                code: A.too_big,
                message: r.message,
                inclusive: !0,
                exact: !1,
                maximum: r.value,
                type: 'date',
              }),
              t.dirty())
            : ie.assertNever(r);
        return { status: t.value, value: new Date(e.data.getTime()) };
      }
      _addCheck(e) {
        return new wn({ ...this._def, checks: [...this._def.checks, e] });
      }
      min(e, t) {
        return this._addCheck({
          kind: 'min',
          value: e.getTime(),
          message: j.toString(t),
        });
      }
      max(e, t) {
        return this._addCheck({
          kind: 'max',
          value: e.getTime(),
          message: j.toString(t),
        });
      }
      get minDate() {
        let e = null;
        for (let t of this._def.checks)
          t.kind === 'min' && (e === null || t.value > e) && (e = t.value);
        return e != null ? new Date(e) : null;
      }
      get maxDate() {
        let e = null;
        for (let t of this._def.checks)
          t.kind === 'max' && (e === null || t.value < e) && (e = t.value);
        return e != null ? new Date(e) : null;
      }
    };
    wn.create = (e) =>
      new wn({
        checks: [],
        coerce: e?.coerce || !1,
        typeName: z.ZodDate,
        ...G(e),
      });
    var hr = class extends Q {
      _parse(e) {
        if (this._getType(e) !== L.symbol) {
          let t = this._getOrReturnCtx(e);
          return (
            Z(t, {
              code: A.invalid_type,
              expected: L.symbol,
              received: t.parsedType,
            }),
            U
          );
        }
        return Ue(e.data);
      }
    };
    hr.create = (e) => new hr({ typeName: z.ZodSymbol, ...G(e) });
    var fa = class extends Q {
      _parse(e) {
        if (this._getType(e) !== L.undefined) {
          let t = this._getOrReturnCtx(e);
          return (
            Z(t, {
              code: A.invalid_type,
              expected: L.undefined,
              received: t.parsedType,
            }),
            U
          );
        }
        return Ue(e.data);
      }
    };
    fa.create = (e) => new fa({ typeName: z.ZodUndefined, ...G(e) });
    var ga = class extends Q {
      _parse(e) {
        if (this._getType(e) !== L.null) {
          let t = this._getOrReturnCtx(e);
          return (
            Z(t, {
              code: A.invalid_type,
              expected: L.null,
              received: t.parsedType,
            }),
            U
          );
        }
        return Ue(e.data);
      }
    };
    ga.create = (e) => new ga({ typeName: z.ZodNull, ...G(e) });
    var Cn = class extends Q {
      constructor() {
        super(...arguments), (this._any = !0);
      }
      _parse(e) {
        return Ue(e.data);
      }
    };
    Cn.create = (e) => new Cn({ typeName: z.ZodAny, ...G(e) });
    var Kt = class extends Q {
      constructor() {
        super(...arguments), (this._unknown = !0);
      }
      _parse(e) {
        return Ue(e.data);
      }
    };
    Kt.create = (e) => new Kt({ typeName: z.ZodUnknown, ...G(e) });
    var At = class extends Q {
      _parse(e) {
        let t = this._getOrReturnCtx(e);
        return (
          Z(t, {
            code: A.invalid_type,
            expected: L.never,
            received: t.parsedType,
          }),
          U
        );
      }
    };
    At.create = (e) => new At({ typeName: z.ZodNever, ...G(e) });
    var fr = class extends Q {
      _parse(e) {
        if (this._getType(e) !== L.undefined) {
          let t = this._getOrReturnCtx(e);
          return (
            Z(t, {
              code: A.invalid_type,
              expected: L.void,
              received: t.parsedType,
            }),
            U
          );
        }
        return Ue(e.data);
      }
    };
    fr.create = (e) => new fr({ typeName: z.ZodVoid, ...G(e) });
    var kt = class extends Q {
      _parse(e) {
        let { ctx: t, status: n } = this._processInputParams(e),
          r = this._def;
        if (t.parsedType !== L.array)
          return (
            Z(t, {
              code: A.invalid_type,
              expected: L.array,
              received: t.parsedType,
            }),
            U
          );
        if (r.exactLength !== null) {
          let o = t.data.length > r.exactLength.value,
            l = t.data.length < r.exactLength.value;
          (o || l) &&
            (Z(t, {
              code: o ? A.too_big : A.too_small,
              minimum: l ? r.exactLength.value : void 0,
              maximum: o ? r.exactLength.value : void 0,
              type: 'array',
              inclusive: !0,
              exact: !0,
              message: r.exactLength.message,
            }),
            n.dirty());
        }
        if (
          (r.minLength !== null &&
            t.data.length < r.minLength.value &&
            (Z(t, {
              code: A.too_small,
              minimum: r.minLength.value,
              type: 'array',
              inclusive: !0,
              exact: !1,
              message: r.minLength.message,
            }),
            n.dirty()),
          r.maxLength !== null &&
            t.data.length > r.maxLength.value &&
            (Z(t, {
              code: A.too_big,
              maximum: r.maxLength.value,
              type: 'array',
              inclusive: !0,
              exact: !1,
              message: r.maxLength.message,
            }),
            n.dirty()),
          t.common.async)
        )
          return Promise.all(
            [...t.data].map((o, l) =>
              r.type._parseAsync(new Ct(t, o, t.path, l))
            )
          ).then((o) => ze.mergeArray(n, o));
        let i = [...t.data].map((o, l) =>
          r.type._parseSync(new Ct(t, o, t.path, l))
        );
        return ze.mergeArray(n, i);
      }
      get element() {
        return this._def.type;
      }
      min(e, t) {
        return new kt({
          ...this._def,
          minLength: { value: e, message: j.toString(t) },
        });
      }
      max(e, t) {
        return new kt({
          ...this._def,
          maxLength: { value: e, message: j.toString(t) },
        });
      }
      length(e, t) {
        return new kt({
          ...this._def,
          exactLength: { value: e, message: j.toString(t) },
        });
      }
      nonempty(e) {
        return this.min(1, e);
      }
    };
    kt.create = (e, t) =>
      new kt({
        type: e,
        minLength: null,
        maxLength: null,
        exactLength: null,
        typeName: z.ZodArray,
        ...G(t),
      });
    function hn(e) {
      if (e instanceof Ne) {
        let t = {};
        for (let n in e.shape) {
          let r = e.shape[n];
          t[n] = Ft.create(hn(r));
        }
        return new Ne({ ...e._def, shape: () => t });
      } else
        return e instanceof kt
          ? new kt({ ...e._def, type: hn(e.element) })
          : e instanceof Ft
          ? Ft.create(hn(e.unwrap()))
          : e instanceof tn
          ? tn.create(hn(e.unwrap()))
          : e instanceof Ot
          ? Ot.create(e.items.map((t) => hn(t)))
          : e;
    }
    var Ne = class extends Q {
      constructor() {
        super(...arguments),
          (this._cached = null),
          (this.nonstrict = this.passthrough),
          (this.augment = this.extend);
      }
      _getCached() {
        if (this._cached !== null) return this._cached;
        let e = this._def.shape(),
          t = ie.objectKeys(e);
        return (this._cached = { shape: e, keys: t });
      }
      _parse(e) {
        if (this._getType(e) !== L.object) {
          let s = this._getOrReturnCtx(e);
          return (
            Z(s, {
              code: A.invalid_type,
              expected: L.object,
              received: s.parsedType,
            }),
            U
          );
        }
        let { status: t, ctx: n } = this._processInputParams(e),
          { shape: r, keys: i } = this._getCached(),
          o = [];
        if (
          !(
            this._def.catchall instanceof At &&
            this._def.unknownKeys === 'strip'
          )
        )
          for (let s in n.data) i.includes(s) || o.push(s);
        let l = [];
        for (let s of i) {
          let c = r[s],
            d = n.data[s];
          l.push({
            key: { status: 'valid', value: s },
            value: c._parse(new Ct(n, d, n.path, s)),
            alwaysSet: s in n.data,
          });
        }
        if (this._def.catchall instanceof At) {
          let s = this._def.unknownKeys;
          if (s === 'passthrough')
            for (let c of o)
              l.push({
                key: { status: 'valid', value: c },
                value: { status: 'valid', value: n.data[c] },
              });
          else if (s === 'strict')
            o.length > 0 &&
              (Z(n, { code: A.unrecognized_keys, keys: o }), t.dirty());
          else if (s !== 'strip')
            throw new Error(
              'Internal ZodObject error: invalid unknownKeys value.'
            );
        } else {
          let s = this._def.catchall;
          for (let c of o) {
            let d = n.data[c];
            l.push({
              key: { status: 'valid', value: c },
              value: s._parse(new Ct(n, d, n.path, c)),
              alwaysSet: c in n.data,
            });
          }
        }
        return n.common.async
          ? Promise.resolve()
              .then(async () => {
                let s = [];
                for (let c of l) {
                  let d = await c.key;
                  s.push({
                    key: d,
                    value: await c.value,
                    alwaysSet: c.alwaysSet,
                  });
                }
                return s;
              })
              .then((s) => ze.mergeObjectSync(t, s))
          : ze.mergeObjectSync(t, l);
      }
      get shape() {
        return this._def.shape();
      }
      strict(e) {
        return (
          j.errToObj,
          new Ne({
            ...this._def,
            unknownKeys: 'strict',
            ...(e !== void 0
              ? {
                  errorMap: (t, n) => {
                    var r, i, o, l;
                    let s =
                      (o =
                        (i = (r = this._def).errorMap) === null || i === void 0
                          ? void 0
                          : i.call(r, t, n).message) !== null && o !== void 0
                        ? o
                        : n.defaultError;
                    return t.code === 'unrecognized_keys'
                      ? {
                          message:
                            (l = j.errToObj(e).message) !== null && l !== void 0
                              ? l
                              : s,
                        }
                      : { message: s };
                  },
                }
              : {}),
          })
        );
      }
      strip() {
        return new Ne({ ...this._def, unknownKeys: 'strip' });
      }
      passthrough() {
        return new Ne({ ...this._def, unknownKeys: 'passthrough' });
      }
      extend(e) {
        return new Ne({
          ...this._def,
          shape: () => ({ ...this._def.shape(), ...e }),
        });
      }
      merge(e) {
        return new Ne({
          unknownKeys: e._def.unknownKeys,
          catchall: e._def.catchall,
          shape: () => ({ ...this._def.shape(), ...e._def.shape() }),
          typeName: z.ZodObject,
        });
      }
      setKey(e, t) {
        return this.augment({ [e]: t });
      }
      catchall(e) {
        return new Ne({ ...this._def, catchall: e });
      }
      pick(e) {
        let t = {};
        return (
          ie.objectKeys(e).forEach((n) => {
            e[n] && this.shape[n] && (t[n] = this.shape[n]);
          }),
          new Ne({ ...this._def, shape: () => t })
        );
      }
      omit(e) {
        let t = {};
        return (
          ie.objectKeys(this.shape).forEach((n) => {
            e[n] || (t[n] = this.shape[n]);
          }),
          new Ne({ ...this._def, shape: () => t })
        );
      }
      deepPartial() {
        return hn(this);
      }
      partial(e) {
        let t = {};
        return (
          ie.objectKeys(this.shape).forEach((n) => {
            let r = this.shape[n];
            e && !e[n] ? (t[n] = r) : (t[n] = r.optional());
          }),
          new Ne({ ...this._def, shape: () => t })
        );
      }
      required(e) {
        let t = {};
        return (
          ie.objectKeys(this.shape).forEach((n) => {
            if (e && !e[n]) t[n] = this.shape[n];
            else {
              let r = this.shape[n];
              for (; r instanceof Ft; ) r = r._def.innerType;
              t[n] = r;
            }
          }),
          new Ne({ ...this._def, shape: () => t })
        );
      }
      keyof() {
        return j0(ie.objectKeys(this.shape));
      }
    };
    Ne.create = (e, t) =>
      new Ne({
        shape: () => e,
        unknownKeys: 'strip',
        catchall: At.create(),
        typeName: z.ZodObject,
        ...G(t),
      });
    Ne.strictCreate = (e, t) =>
      new Ne({
        shape: () => e,
        unknownKeys: 'strict',
        catchall: At.create(),
        typeName: z.ZodObject,
        ...G(t),
      });
    Ne.lazycreate = (e, t) =>
      new Ne({
        shape: e,
        unknownKeys: 'strip',
        catchall: At.create(),
        typeName: z.ZodObject,
        ...G(t),
      });
    var va = class extends Q {
      _parse(e) {
        let { ctx: t } = this._processInputParams(e),
          n = this._def.options;
        function r(i) {
          for (let l of i) if (l.result.status === 'valid') return l.result;
          for (let l of i)
            if (l.result.status === 'dirty')
              return t.common.issues.push(...l.ctx.common.issues), l.result;
          let o = i.map((l) => new it(l.ctx.common.issues));
          return Z(t, { code: A.invalid_union, unionErrors: o }), U;
        }
        if (t.common.async)
          return Promise.all(
            n.map(async (i) => {
              let o = {
                ...t,
                common: { ...t.common, issues: [] },
                parent: null,
              };
              return {
                result: await i._parseAsync({
                  data: t.data,
                  path: t.path,
                  parent: o,
                }),
                ctx: o,
              };
            })
          ).then(r);
        {
          let i,
            o = [];
          for (let s of n) {
            let c = { ...t, common: { ...t.common, issues: [] }, parent: null },
              d = s._parseSync({ data: t.data, path: t.path, parent: c });
            if (d.status === 'valid') return d;
            d.status === 'dirty' && !i && (i = { result: d, ctx: c }),
              c.common.issues.length && o.push(c.common.issues);
          }
          if (i) return t.common.issues.push(...i.ctx.common.issues), i.result;
          let l = o.map((s) => new it(s));
          return Z(t, { code: A.invalid_union, unionErrors: l }), U;
        }
      }
      get options() {
        return this._def.options;
      }
    };
    va.create = (e, t) => new va({ options: e, typeName: z.ZodUnion, ...G(t) });
    var Ja = (e) =>
        e instanceof ba
          ? Ja(e.schema)
          : e instanceof ot
          ? Ja(e.innerType())
          : e instanceof Ea
          ? [e.value]
          : e instanceof en
          ? e.options
          : e instanceof ka
          ? Object.keys(e.enum)
          : e instanceof wa
          ? Ja(e._def.innerType)
          : e instanceof fa
          ? [void 0]
          : e instanceof ga
          ? [null]
          : null,
      So = class extends Q {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          if (t.parsedType !== L.object)
            return (
              Z(t, {
                code: A.invalid_type,
                expected: L.object,
                received: t.parsedType,
              }),
              U
            );
          let n = this.discriminator,
            r = t.data[n],
            i = this.optionsMap.get(r);
          return i
            ? t.common.async
              ? i._parseAsync({ data: t.data, path: t.path, parent: t })
              : i._parseSync({ data: t.data, path: t.path, parent: t })
            : (Z(t, {
                code: A.invalid_union_discriminator,
                options: Array.from(this.optionsMap.keys()),
                path: [n],
              }),
              U);
        }
        get discriminator() {
          return this._def.discriminator;
        }
        get options() {
          return this._def.options;
        }
        get optionsMap() {
          return this._def.optionsMap;
        }
        static create(e, t, n) {
          let r = new Map();
          for (let i of t) {
            let o = Ja(i.shape[e]);
            if (!o)
              throw new Error(
                `A discriminator value for key \`${e}\` could not be extracted from all schema options`
              );
            for (let l of o) {
              if (r.has(l))
                throw new Error(
                  `Discriminator property ${String(
                    e
                  )} has duplicate value ${String(l)}`
                );
              r.set(l, i);
            }
          }
          return new So({
            typeName: z.ZodDiscriminatedUnion,
            discriminator: e,
            options: t,
            optionsMap: r,
            ...G(n),
          });
        }
      };
    function Qi(e, t) {
      let n = Rt(e),
        r = Rt(t);
      if (e === t) return { valid: !0, data: e };
      if (n === L.object && r === L.object) {
        let i = ie.objectKeys(t),
          o = ie.objectKeys(e).filter((s) => i.indexOf(s) !== -1),
          l = { ...e, ...t };
        for (let s of o) {
          let c = Qi(e[s], t[s]);
          if (!c.valid) return { valid: !1 };
          l[s] = c.data;
        }
        return { valid: !0, data: l };
      } else if (n === L.array && r === L.array) {
        if (e.length !== t.length) return { valid: !1 };
        let i = [];
        for (let o = 0; o < e.length; o++) {
          let l = e[o],
            s = t[o],
            c = Qi(l, s);
          if (!c.valid) return { valid: !1 };
          i.push(c.data);
        }
        return { valid: !0, data: i };
      } else
        return n === L.date && r === L.date && +e == +t
          ? { valid: !0, data: e }
          : { valid: !1 };
    }
    var ya = class extends Q {
      _parse(e) {
        let { status: t, ctx: n } = this._processInputParams(e),
          r = (i, o) => {
            if (qi(i) || qi(o)) return U;
            let l = Qi(i.value, o.value);
            return l.valid
              ? ((Yi(i) || Yi(o)) && t.dirty(),
                { status: t.value, value: l.data })
              : (Z(n, { code: A.invalid_intersection_types }), U);
          };
        return n.common.async
          ? Promise.all([
              this._def.left._parseAsync({
                data: n.data,
                path: n.path,
                parent: n,
              }),
              this._def.right._parseAsync({
                data: n.data,
                path: n.path,
                parent: n,
              }),
            ]).then(([i, o]) => r(i, o))
          : r(
              this._def.left._parseSync({
                data: n.data,
                path: n.path,
                parent: n,
              }),
              this._def.right._parseSync({
                data: n.data,
                path: n.path,
                parent: n,
              })
            );
      }
    };
    ya.create = (e, t, n) =>
      new ya({ left: e, right: t, typeName: z.ZodIntersection, ...G(n) });
    var Ot = class extends Q {
      _parse(e) {
        let { status: t, ctx: n } = this._processInputParams(e);
        if (n.parsedType !== L.array)
          return (
            Z(n, {
              code: A.invalid_type,
              expected: L.array,
              received: n.parsedType,
            }),
            U
          );
        if (n.data.length < this._def.items.length)
          return (
            Z(n, {
              code: A.too_small,
              minimum: this._def.items.length,
              inclusive: !0,
              exact: !1,
              type: 'array',
            }),
            U
          );
        !this._def.rest &&
          n.data.length > this._def.items.length &&
          (Z(n, {
            code: A.too_big,
            maximum: this._def.items.length,
            inclusive: !0,
            exact: !1,
            type: 'array',
          }),
          t.dirty());
        let r = [...n.data]
          .map((i, o) => {
            let l = this._def.items[o] || this._def.rest;
            return l ? l._parse(new Ct(n, i, n.path, o)) : null;
          })
          .filter((i) => !!i);
        return n.common.async
          ? Promise.all(r).then((i) => ze.mergeArray(t, i))
          : ze.mergeArray(t, r);
      }
      get items() {
        return this._def.items;
      }
      rest(e) {
        return new Ot({ ...this._def, rest: e });
      }
    };
    Ot.create = (e, t) => {
      if (!Array.isArray(e))
        throw new Error(
          'You must pass an array of schemas to z.tuple([ ... ])'
        );
      return new Ot({ items: e, typeName: z.ZodTuple, rest: null, ...G(t) });
    };
    var gr = class extends Q {
        get keySchema() {
          return this._def.keyType;
        }
        get valueSchema() {
          return this._def.valueType;
        }
        _parse(e) {
          let { status: t, ctx: n } = this._processInputParams(e);
          if (n.parsedType !== L.object)
            return (
              Z(n, {
                code: A.invalid_type,
                expected: L.object,
                received: n.parsedType,
              }),
              U
            );
          let r = [],
            i = this._def.keyType,
            o = this._def.valueType;
          for (let l in n.data)
            r.push({
              key: i._parse(new Ct(n, l, n.path, l)),
              value: o._parse(new Ct(n, n.data[l], n.path, l)),
            });
          return n.common.async
            ? ze.mergeObjectAsync(t, r)
            : ze.mergeObjectSync(t, r);
        }
        get element() {
          return this._def.valueType;
        }
        static create(e, t, n) {
          return t instanceof Q
            ? new gr({
                keyType: e,
                valueType: t,
                typeName: z.ZodRecord,
                ...G(n),
              })
            : new gr({
                keyType: vt.create(),
                valueType: e,
                typeName: z.ZodRecord,
                ...G(t),
              });
        }
      },
      vr = class extends Q {
        get keySchema() {
          return this._def.keyType;
        }
        get valueSchema() {
          return this._def.valueType;
        }
        _parse(e) {
          let { status: t, ctx: n } = this._processInputParams(e);
          if (n.parsedType !== L.map)
            return (
              Z(n, {
                code: A.invalid_type,
                expected: L.map,
                received: n.parsedType,
              }),
              U
            );
          let r = this._def.keyType,
            i = this._def.valueType,
            o = [...n.data.entries()].map(([l, s], c) => ({
              key: r._parse(new Ct(n, l, n.path, [c, 'key'])),
              value: i._parse(new Ct(n, s, n.path, [c, 'value'])),
            }));
          if (n.common.async) {
            let l = new Map();
            return Promise.resolve().then(async () => {
              for (let s of o) {
                let c = await s.key,
                  d = await s.value;
                if (c.status === 'aborted' || d.status === 'aborted') return U;
                (c.status === 'dirty' || d.status === 'dirty') && t.dirty(),
                  l.set(c.value, d.value);
              }
              return { status: t.value, value: l };
            });
          } else {
            let l = new Map();
            for (let s of o) {
              let c = s.key,
                d = s.value;
              if (c.status === 'aborted' || d.status === 'aborted') return U;
              (c.status === 'dirty' || d.status === 'dirty') && t.dirty(),
                l.set(c.value, d.value);
            }
            return { status: t.value, value: l };
          }
        }
      };
    vr.create = (e, t, n) =>
      new vr({ valueType: t, keyType: e, typeName: z.ZodMap, ...G(n) });
    var xn = class extends Q {
      _parse(e) {
        let { status: t, ctx: n } = this._processInputParams(e);
        if (n.parsedType !== L.set)
          return (
            Z(n, {
              code: A.invalid_type,
              expected: L.set,
              received: n.parsedType,
            }),
            U
          );
        let r = this._def;
        r.minSize !== null &&
          n.data.size < r.minSize.value &&
          (Z(n, {
            code: A.too_small,
            minimum: r.minSize.value,
            type: 'set',
            inclusive: !0,
            exact: !1,
            message: r.minSize.message,
          }),
          t.dirty()),
          r.maxSize !== null &&
            n.data.size > r.maxSize.value &&
            (Z(n, {
              code: A.too_big,
              maximum: r.maxSize.value,
              type: 'set',
              inclusive: !0,
              exact: !1,
              message: r.maxSize.message,
            }),
            t.dirty());
        let i = this._def.valueType;
        function o(s) {
          let c = new Set();
          for (let d of s) {
            if (d.status === 'aborted') return U;
            d.status === 'dirty' && t.dirty(), c.add(d.value);
          }
          return { status: t.value, value: c };
        }
        let l = [...n.data.values()].map((s, c) =>
          i._parse(new Ct(n, s, n.path, c))
        );
        return n.common.async ? Promise.all(l).then((s) => o(s)) : o(l);
      }
      min(e, t) {
        return new xn({
          ...this._def,
          minSize: { value: e, message: j.toString(t) },
        });
      }
      max(e, t) {
        return new xn({
          ...this._def,
          maxSize: { value: e, message: j.toString(t) },
        });
      }
      size(e, t) {
        return this.min(e, t).max(e, t);
      }
      nonempty(e) {
        return this.min(1, e);
      }
    };
    xn.create = (e, t) =>
      new xn({
        valueType: e,
        minSize: null,
        maxSize: null,
        typeName: z.ZodSet,
        ...G(t),
      });
    var ia = class extends Q {
        constructor() {
          super(...arguments), (this.validate = this.implement);
        }
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          if (t.parsedType !== L.function)
            return (
              Z(t, {
                code: A.invalid_type,
                expected: L.function,
                received: t.parsedType,
              }),
              U
            );
          function n(l, s) {
            return mr({
              data: l,
              path: t.path,
              errorMaps: [
                t.common.contextualErrorMap,
                t.schemaErrorMap,
                ur(),
                ma,
              ].filter((c) => !!c),
              issueData: { code: A.invalid_arguments, argumentsError: s },
            });
          }
          function r(l, s) {
            return mr({
              data: l,
              path: t.path,
              errorMaps: [
                t.common.contextualErrorMap,
                t.schemaErrorMap,
                ur(),
                ma,
              ].filter((c) => !!c),
              issueData: { code: A.invalid_return_type, returnTypeError: s },
            });
          }
          let i = { errorMap: t.common.contextualErrorMap },
            o = t.data;
          if (this._def.returns instanceof Sn) {
            let l = this;
            return Ue(async function (...s) {
              let c = new it([]),
                d = await l._def.args.parseAsync(s, i).catch((m) => {
                  throw (c.addIssue(n(s, m)), c);
                }),
                u = await Reflect.apply(o, this, d);
              return await l._def.returns._def.type
                .parseAsync(u, i)
                .catch((m) => {
                  throw (c.addIssue(r(u, m)), c);
                });
            });
          } else {
            let l = this;
            return Ue(function (...s) {
              let c = l._def.args.safeParse(s, i);
              if (!c.success) throw new it([n(s, c.error)]);
              let d = Reflect.apply(o, this, c.data),
                u = l._def.returns.safeParse(d, i);
              if (!u.success) throw new it([r(d, u.error)]);
              return u.data;
            });
          }
        }
        parameters() {
          return this._def.args;
        }
        returnType() {
          return this._def.returns;
        }
        args(...e) {
          return new ia({ ...this._def, args: Ot.create(e).rest(Kt.create()) });
        }
        returns(e) {
          return new ia({ ...this._def, returns: e });
        }
        implement(e) {
          return this.parse(e);
        }
        strictImplement(e) {
          return this.parse(e);
        }
        static create(e, t, n) {
          return new ia({
            args: e || Ot.create([]).rest(Kt.create()),
            returns: t || Kt.create(),
            typeName: z.ZodFunction,
            ...G(n),
          });
        }
      },
      ba = class extends Q {
        get schema() {
          return this._def.getter();
        }
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          return this._def
            .getter()
            ._parse({ data: t.data, path: t.path, parent: t });
        }
      };
    ba.create = (e, t) => new ba({ getter: e, typeName: z.ZodLazy, ...G(t) });
    var Ea = class extends Q {
      _parse(e) {
        if (e.data !== this._def.value) {
          let t = this._getOrReturnCtx(e);
          return (
            Z(t, {
              received: t.data,
              code: A.invalid_literal,
              expected: this._def.value,
            }),
            U
          );
        }
        return { status: 'valid', value: e.data };
      }
      get value() {
        return this._def.value;
      }
    };
    Ea.create = (e, t) => new Ea({ value: e, typeName: z.ZodLiteral, ...G(t) });
    function j0(e, t) {
      return new en({ values: e, typeName: z.ZodEnum, ...G(t) });
    }
    var en = class extends Q {
      _parse(e) {
        if (typeof e.data != 'string') {
          let t = this._getOrReturnCtx(e),
            n = this._def.values;
          return (
            Z(t, {
              expected: ie.joinValues(n),
              received: t.parsedType,
              code: A.invalid_type,
            }),
            U
          );
        }
        if (this._def.values.indexOf(e.data) === -1) {
          let t = this._getOrReturnCtx(e),
            n = this._def.values;
          return (
            Z(t, { received: t.data, code: A.invalid_enum_value, options: n }),
            U
          );
        }
        return Ue(e.data);
      }
      get options() {
        return this._def.values;
      }
      get enum() {
        let e = {};
        for (let t of this._def.values) e[t] = t;
        return e;
      }
      get Values() {
        let e = {};
        for (let t of this._def.values) e[t] = t;
        return e;
      }
      get Enum() {
        let e = {};
        for (let t of this._def.values) e[t] = t;
        return e;
      }
      extract(e) {
        return en.create(e);
      }
      exclude(e) {
        return en.create(this.options.filter((t) => !e.includes(t)));
      }
    };
    en.create = j0;
    var ka = class extends Q {
      _parse(e) {
        let t = ie.getValidEnumValues(this._def.values),
          n = this._getOrReturnCtx(e);
        if (n.parsedType !== L.string && n.parsedType !== L.number) {
          let r = ie.objectValues(t);
          return (
            Z(n, {
              expected: ie.joinValues(r),
              received: n.parsedType,
              code: A.invalid_type,
            }),
            U
          );
        }
        if (t.indexOf(e.data) === -1) {
          let r = ie.objectValues(t);
          return (
            Z(n, { received: n.data, code: A.invalid_enum_value, options: r }),
            U
          );
        }
        return Ue(e.data);
      }
      get enum() {
        return this._def.values;
      }
    };
    ka.create = (e, t) =>
      new ka({ values: e, typeName: z.ZodNativeEnum, ...G(t) });
    var Sn = class extends Q {
      unwrap() {
        return this._def.type;
      }
      _parse(e) {
        let { ctx: t } = this._processInputParams(e);
        if (t.parsedType !== L.promise && t.common.async === !1)
          return (
            Z(t, {
              code: A.invalid_type,
              expected: L.promise,
              received: t.parsedType,
            }),
            U
          );
        let n = t.parsedType === L.promise ? t.data : Promise.resolve(t.data);
        return Ue(
          n.then((r) =>
            this._def.type.parseAsync(r, {
              path: t.path,
              errorMap: t.common.contextualErrorMap,
            })
          )
        );
      }
    };
    Sn.create = (e, t) => new Sn({ type: e, typeName: z.ZodPromise, ...G(t) });
    var ot = class extends Q {
      innerType() {
        return this._def.schema;
      }
      sourceType() {
        return this._def.schema._def.typeName === z.ZodEffects
          ? this._def.schema.sourceType()
          : this._def.schema;
      }
      _parse(e) {
        let { status: t, ctx: n } = this._processInputParams(e),
          r = this._def.effect || null,
          i = {
            addIssue: (o) => {
              Z(n, o), o.fatal ? t.abort() : t.dirty();
            },
            get path() {
              return n.path;
            },
          };
        if (((i.addIssue = i.addIssue.bind(i)), r.type === 'preprocess')) {
          let o = r.transform(n.data, i);
          return n.common.issues.length
            ? { status: 'dirty', value: n.data }
            : n.common.async
            ? Promise.resolve(o).then((l) =>
                this._def.schema._parseAsync({
                  data: l,
                  path: n.path,
                  parent: n,
                })
              )
            : this._def.schema._parseSync({ data: o, path: n.path, parent: n });
        }
        if (r.type === 'refinement') {
          let o = (l) => {
            let s = r.refinement(l, i);
            if (n.common.async) return Promise.resolve(s);
            if (s instanceof Promise)
              throw new Error(
                'Async refinement encountered during synchronous parse operation. Use .parseAsync instead.'
              );
            return l;
          };
          if (n.common.async === !1) {
            let l = this._def.schema._parseSync({
              data: n.data,
              path: n.path,
              parent: n,
            });
            return l.status === 'aborted'
              ? U
              : (l.status === 'dirty' && t.dirty(),
                o(l.value),
                { status: t.value, value: l.value });
          } else
            return this._def.schema
              ._parseAsync({ data: n.data, path: n.path, parent: n })
              .then((l) =>
                l.status === 'aborted'
                  ? U
                  : (l.status === 'dirty' && t.dirty(),
                    o(l.value).then(() => ({
                      status: t.value,
                      value: l.value,
                    })))
              );
        }
        if (r.type === 'transform')
          if (n.common.async === !1) {
            let o = this._def.schema._parseSync({
              data: n.data,
              path: n.path,
              parent: n,
            });
            if (!pa(o)) return o;
            let l = r.transform(o.value, i);
            if (l instanceof Promise)
              throw new Error(
                'Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.'
              );
            return { status: t.value, value: l };
          } else
            return this._def.schema
              ._parseAsync({ data: n.data, path: n.path, parent: n })
              .then((o) =>
                pa(o)
                  ? Promise.resolve(r.transform(o.value, i)).then((l) => ({
                      status: t.value,
                      value: l,
                    }))
                  : o
              );
        ie.assertNever(r);
      }
    };
    ot.create = (e, t, n) =>
      new ot({ schema: e, typeName: z.ZodEffects, effect: t, ...G(n) });
    ot.createWithPreprocess = (e, t, n) =>
      new ot({
        schema: t,
        effect: { type: 'preprocess', transform: e },
        typeName: z.ZodEffects,
        ...G(n),
      });
    var Ft = class extends Q {
      _parse(e) {
        return this._getType(e) === L.undefined
          ? Ue(void 0)
          : this._def.innerType._parse(e);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    Ft.create = (e, t) =>
      new Ft({ innerType: e, typeName: z.ZodOptional, ...G(t) });
    var tn = class extends Q {
      _parse(e) {
        return this._getType(e) === L.null
          ? Ue(null)
          : this._def.innerType._parse(e);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    tn.create = (e, t) =>
      new tn({ innerType: e, typeName: z.ZodNullable, ...G(t) });
    var wa = class extends Q {
      _parse(e) {
        let { ctx: t } = this._processInputParams(e),
          n = t.data;
        return (
          t.parsedType === L.undefined && (n = this._def.defaultValue()),
          this._def.innerType._parse({ data: n, path: t.path, parent: t })
        );
      }
      removeDefault() {
        return this._def.innerType;
      }
    };
    wa.create = (e, t) =>
      new wa({
        innerType: e,
        typeName: z.ZodDefault,
        defaultValue:
          typeof t.default == 'function' ? t.default : () => t.default,
        ...G(t),
      });
    var yr = class extends Q {
      _parse(e) {
        let { ctx: t } = this._processInputParams(e),
          n = { ...t, common: { ...t.common, issues: [] } },
          r = this._def.innerType._parse({
            data: n.data,
            path: n.path,
            parent: { ...n },
          });
        return pr(r)
          ? r.then((i) => ({
              status: 'valid',
              value:
                i.status === 'valid'
                  ? i.value
                  : this._def.catchValue({
                      get error() {
                        return new it(n.common.issues);
                      },
                      input: n.data,
                    }),
            }))
          : {
              status: 'valid',
              value:
                r.status === 'valid'
                  ? r.value
                  : this._def.catchValue({
                      get error() {
                        return new it(n.common.issues);
                      },
                      input: n.data,
                    }),
            };
      }
      removeCatch() {
        return this._def.innerType;
      }
    };
    yr.create = (e, t) =>
      new yr({
        innerType: e,
        typeName: z.ZodCatch,
        catchValue: typeof t.catch == 'function' ? t.catch : () => t.catch,
        ...G(t),
      });
    var br = class extends Q {
      _parse(e) {
        if (this._getType(e) !== L.nan) {
          let t = this._getOrReturnCtx(e);
          return (
            Z(t, {
              code: A.invalid_type,
              expected: L.nan,
              received: t.parsedType,
            }),
            U
          );
        }
        return { status: 'valid', value: e.data };
      }
    };
    br.create = (e) => new br({ typeName: z.ZodNaN, ...G(e) });
    var mm = Symbol('zod_brand'),
      H0 = class extends Q {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            n = t.data;
          return this._def.type._parse({ data: n, path: t.path, parent: t });
        }
        unwrap() {
          return this._def.type;
        }
      },
      Vr = class extends Q {
        _parse(e) {
          let { status: t, ctx: n } = this._processInputParams(e);
          if (n.common.async)
            return (async () => {
              let r = await this._def.in._parseAsync({
                data: n.data,
                path: n.path,
                parent: n,
              });
              return r.status === 'aborted'
                ? U
                : r.status === 'dirty'
                ? (t.dirty(), V0(r.value))
                : this._def.out._parseAsync({
                    data: r.value,
                    path: n.path,
                    parent: n,
                  });
            })();
          {
            let r = this._def.in._parseSync({
              data: n.data,
              path: n.path,
              parent: n,
            });
            return r.status === 'aborted'
              ? U
              : r.status === 'dirty'
              ? (t.dirty(), { status: 'dirty', value: r.value })
              : this._def.out._parseSync({
                  data: r.value,
                  path: n.path,
                  parent: n,
                });
          }
        }
        static create(e, t) {
          return new Vr({ in: e, out: t, typeName: z.ZodPipeline });
        }
      },
      Er = class extends Q {
        _parse(e) {
          let t = this._def.innerType._parse(e);
          return pa(t) && (t.value = Object.freeze(t.value)), t;
        }
      };
    Er.create = (e, t) =>
      new Er({ innerType: e, typeName: z.ZodReadonly, ...G(t) });
    var D0 = (e, t = {}, n) =>
        e
          ? Cn.create().superRefine((r, i) => {
              var o, l;
              if (!e(r)) {
                let s =
                    typeof t == 'function'
                      ? t(r)
                      : typeof t == 'string'
                      ? { message: t }
                      : t,
                  c =
                    (l = (o = s.fatal) !== null && o !== void 0 ? o : n) !==
                      null && l !== void 0
                      ? l
                      : !0,
                  d = typeof s == 'string' ? { message: s } : s;
                i.addIssue({ code: 'custom', ...d, fatal: c });
              }
            })
          : Cn.create(),
      pm = { object: Ne.lazycreate },
      z;
    (function (e) {
      (e.ZodString = 'ZodString'),
        (e.ZodNumber = 'ZodNumber'),
        (e.ZodNaN = 'ZodNaN'),
        (e.ZodBigInt = 'ZodBigInt'),
        (e.ZodBoolean = 'ZodBoolean'),
        (e.ZodDate = 'ZodDate'),
        (e.ZodSymbol = 'ZodSymbol'),
        (e.ZodUndefined = 'ZodUndefined'),
        (e.ZodNull = 'ZodNull'),
        (e.ZodAny = 'ZodAny'),
        (e.ZodUnknown = 'ZodUnknown'),
        (e.ZodNever = 'ZodNever'),
        (e.ZodVoid = 'ZodVoid'),
        (e.ZodArray = 'ZodArray'),
        (e.ZodObject = 'ZodObject'),
        (e.ZodUnion = 'ZodUnion'),
        (e.ZodDiscriminatedUnion = 'ZodDiscriminatedUnion'),
        (e.ZodIntersection = 'ZodIntersection'),
        (e.ZodTuple = 'ZodTuple'),
        (e.ZodRecord = 'ZodRecord'),
        (e.ZodMap = 'ZodMap'),
        (e.ZodSet = 'ZodSet'),
        (e.ZodFunction = 'ZodFunction'),
        (e.ZodLazy = 'ZodLazy'),
        (e.ZodLiteral = 'ZodLiteral'),
        (e.ZodEnum = 'ZodEnum'),
        (e.ZodEffects = 'ZodEffects'),
        (e.ZodNativeEnum = 'ZodNativeEnum'),
        (e.ZodOptional = 'ZodOptional'),
        (e.ZodNullable = 'ZodNullable'),
        (e.ZodDefault = 'ZodDefault'),
        (e.ZodCatch = 'ZodCatch'),
        (e.ZodPromise = 'ZodPromise'),
        (e.ZodBranded = 'ZodBranded'),
        (e.ZodPipeline = 'ZodPipeline'),
        (e.ZodReadonly = 'ZodReadonly');
    })(z || (z = {}));
    var hm = (e, t = { message: `Input not instance of ${e.name}` }) =>
        D0((n) => n instanceof e, t),
      z0 = vt.create,
      U0 = Jt.create,
      fm = br.create,
      gm = Xt.create,
      $0 = ha.create,
      vm = wn.create,
      ym = hr.create,
      bm = fa.create,
      Em = ga.create,
      km = Cn.create,
      wm = Kt.create,
      Cm = At.create,
      xm = fr.create,
      Sm = kt.create,
      Mm = Ne.create,
      Nm = Ne.strictCreate,
      Fm = va.create,
      Am = So.create,
      Om = ya.create,
      Lm = Ot.create,
      _m = gr.create,
      Tm = vr.create,
      Zm = xn.create,
      Im = ia.create,
      Rm = ba.create,
      Bm = Ea.create,
      Pm = en.create,
      Vm = ka.create,
      jm = Sn.create,
      Bl = ot.create,
      Hm = Ft.create,
      Dm = tn.create,
      zm = ot.createWithPreprocess,
      Um = Vr.create,
      $m = () => z0().optional(),
      Wm = () => U0().optional(),
      Gm = () => $0().optional(),
      qm = {
        string: (e) => vt.create({ ...e, coerce: !0 }),
        number: (e) => Jt.create({ ...e, coerce: !0 }),
        boolean: (e) => ha.create({ ...e, coerce: !0 }),
        bigint: (e) => Xt.create({ ...e, coerce: !0 }),
        date: (e) => wn.create({ ...e, coerce: !0 }),
      },
      Ym = U,
      St = Object.freeze({
        __proto__: null,
        defaultErrorMap: ma,
        setErrorMap: X2,
        getErrorMap: ur,
        makeIssue: mr,
        EMPTY_PATH: em,
        addIssueToContext: Z,
        ParseStatus: ze,
        INVALID: U,
        DIRTY: V0,
        OK: Ue,
        isAborted: qi,
        isDirty: Yi,
        isValid: pa,
        isAsync: pr,
        get util() {
          return ie;
        },
        get objectUtil() {
          return Gi;
        },
        ZodParsedType: L,
        getParsedType: Rt,
        ZodType: Q,
        ZodString: vt,
        ZodNumber: Jt,
        ZodBigInt: Xt,
        ZodBoolean: ha,
        ZodDate: wn,
        ZodSymbol: hr,
        ZodUndefined: fa,
        ZodNull: ga,
        ZodAny: Cn,
        ZodUnknown: Kt,
        ZodNever: At,
        ZodVoid: fr,
        ZodArray: kt,
        ZodObject: Ne,
        ZodUnion: va,
        ZodDiscriminatedUnion: So,
        ZodIntersection: ya,
        ZodTuple: Ot,
        ZodRecord: gr,
        ZodMap: vr,
        ZodSet: xn,
        ZodFunction: ia,
        ZodLazy: ba,
        ZodLiteral: Ea,
        ZodEnum: en,
        ZodNativeEnum: ka,
        ZodPromise: Sn,
        ZodEffects: ot,
        ZodTransformer: ot,
        ZodOptional: Ft,
        ZodNullable: tn,
        ZodDefault: wa,
        ZodCatch: yr,
        ZodNaN: br,
        BRAND: mm,
        ZodBranded: H0,
        ZodPipeline: Vr,
        ZodReadonly: Er,
        custom: D0,
        Schema: Q,
        ZodSchema: Q,
        late: pm,
        get ZodFirstPartyTypeKind() {
          return z;
        },
        coerce: qm,
        any: km,
        array: Sm,
        bigint: gm,
        boolean: $0,
        date: vm,
        discriminatedUnion: Am,
        effect: Bl,
        enum: Pm,
        function: Im,
        instanceof: hm,
        intersection: Om,
        lazy: Rm,
        literal: Bm,
        map: Tm,
        nan: fm,
        nativeEnum: Vm,
        never: Cm,
        null: Em,
        nullable: Dm,
        number: U0,
        object: Mm,
        oboolean: Gm,
        onumber: Wm,
        optional: Hm,
        ostring: $m,
        pipeline: Um,
        preprocess: zm,
        promise: jm,
        record: _m,
        set: Zm,
        strictObject: Nm,
        string: z0,
        symbol: ym,
        transformer: Bl,
        tuple: Lm,
        undefined: bm,
        union: Fm,
        unknown: wm,
        void: xm,
        NEVER: Ym,
        ZodIssueCode: A,
        quotelessJson: J2,
        ZodError: it,
      }),
      Qm = St.union([
        St.object({ message: St.literal('login') }),
        St.object({ message: St.literal('grant'), denied: St.boolean() }),
        St.object({
          message: St.literal('createdProject'),
          projectId: St.string(),
        }),
      ]),
      W0 = (e) => {
        let t = Te(),
          n = Te();
        return (
          pe(() => {
            let r = ({ origin: i, data: o }) => {
              if (i === n.current) {
                let l;
                try {
                  l = Qm.parse(o);
                } catch {
                  return;
                }
                e?.(l);
              }
            };
            return (
              window.addEventListener('message', r),
              () => window.removeEventListener('message', r)
            );
          }, [e]),
          [
            de((r) => {
              if (window.innerWidth > 800 && window.innerHeight > 800) {
                let o = (window.innerWidth - 800) / 2 + window.screenLeft,
                  l = `scrollbars=yes,width=800,height=800,top=${
                    (window.innerHeight - 800) / 2 + window.screenTop
                  },left=${o}`;
                (t.current = window.open(r, 'chromatic-dialog', l)),
                  t.current?.focus();
              } else t.current = window.open(r, '_blank');
              let { origin: i } = new URL(r);
              n.current = i;
            }, []),
            de(() => t.current?.close(), []),
          ]
        );
      },
      Km = w.ol(({ theme: e }) => ({
        display: 'inline-flex',
        listStyle: 'none',
        marginTop: 15,
        marginBottom: 5,
        padding: 0,
        gap: 5,
        'li:not(:empty)': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: `1px dashed ${e.input.border}`,
          borderRadius: 4,
          width: 28,
          height: 32,
        },
      })),
      Jm = ct(`
  query VisualTestsProjectCountQuery {
    viewer {
      projectCount
      accounts {
        newProjectUrl
      }
    }
  }
`),
      Xm = ({
        onBack: e,
        hasProjectId: t,
        setAccessToken: n,
        setCreatedProjectId: r,
        exchangeParameters: i,
      }) => {
        let o = Co(),
          l = s0(),
          s = pt(),
          { user_code: c, verificationUrl: d } = i,
          u = Te(),
          m = Te(),
          p = Te(),
          v = de(
            async (k) => {
              if (
                (k.message === 'login' && m.current?.(d), k.message === 'grant')
              )
                try {
                  let y = await xd(i);
                  if (!y) throw new Error('Failed to fetch an access token');
                  u.current = y;
                  let g = B0(y),
                    { data: f } = await o.query(Jm, {}, { fetchOptions: g });
                  if (!f?.viewer)
                    throw new Error('Failed to fetch initial project list');
                  if (f.viewer.projectCount > 0 || t)
                    n(u.current), p.current?.();
                  else {
                    if (!f.viewer.accounts[0])
                      throw new Error('User has no accounts!');
                    if (!f.viewer.accounts[0].newProjectUrl)
                      throw new Error('Unexpected missing project URL');
                    m.current?.(f.viewer.accounts[0].newProjectUrl);
                  }
                } catch (y) {
                  l('Login Error', y);
                }
              k.message === 'createdProject' &&
                (u.current
                  ? (n(u.current), r(`Project:${k.projectId}`), p.current?.())
                  : l('Unexpected missing access token', new Error()));
            },
            [d, i, o, t, n, l, r]
          ),
          [h, b] = W0(v);
        return (
          (m.current = h),
          (p.current = b),
          a.createElement(
            xe,
            { footer: null, ignoreConfig: !0 },
            a.createElement(
              fe,
              null,
              a.createElement(
                fo,
                { onClick: e },
                a.createElement(ho, {
                  color: s.base === 'light' ? 'currentColor' : s.color.medium,
                }),
                'Back'
              ),
              a.createElement(
                ge,
                null,
                a.createElement(
                  'div',
                  null,
                  a.createElement(Se, null, 'Verify your account'),
                  a.createElement(
                    'div',
                    null,
                    a.createElement(
                      ee,
                      { center: !0, muted: !0 },
                      'Check this verification code on Chromatic to grant access to your published Storybooks.'
                    )
                  ),
                  a.createElement(
                    Km,
                    null,
                    c
                      ?.split('')
                      .map((k, y) =>
                        a.createElement(
                          'li',
                          { key: `${y}-${k}` },
                          k.replace(/[^A-Z0-9]/, '')
                        )
                      )
                  )
                ),
                a.createElement(
                  he,
                  { variant: 'solid', size: 'medium', onClick: () => h(d) },
                  'Go to Chromatic'
                )
              )
            )
          )
        );
      },
      e4 = ({ onNext: e, onUninstall: t }) =>
        a.createElement(
          xe,
          { footer: null, ignoreConfig: !0 },
          a.createElement(
            fe,
            null,
            a.createElement(
              ge,
              null,
              a.createElement(
                'div',
                null,
                a.createElement(an, null),
                a.createElement(Se, null, 'Visual tests'),
                a.createElement(
                  ee,
                  { center: !0, muted: !0 },
                  'Catch bugs in UI appearance automatically. Compare image snapshots to detect visual changes.'
                )
              ),
              a.createElement(
                Nt,
                null,
                a.createElement(
                  he,
                  { variant: 'solid', size: 'medium', onClick: e },
                  'Enable'
                ),
                a.createElement(
                  he,
                  { link: !0, onClick: () => t() },
                  'Uninstall'
                )
              )
            )
          )
        ),
      t4 = ({ setAccessToken: e, setCreatedProjectId: t, hasProjectId: n }) => {
        let [r, i] = Me(n ? 'signin' : 'welcome'),
          [o, l] = Me(),
          s = s0(),
          { uninstallAddon: c } = uo(),
          d = de(
            async (u) => {
              try {
                l(await Cd(u)), i('verify');
              } catch (m) {
                s('Sign in Error', m);
              }
            },
            [s]
          );
        if (r === 'welcome' && !n)
          return a.createElement(e4, {
            onNext: () => i('signin'),
            onUninstall: c,
          });
        if (r === 'signin' || (r === 'welcome' && n))
          return a.createElement(Lu, {
            ...(n ? {} : { onBack: () => i('welcome') }),
            onSignIn: d,
            onSignInWithSSO: () => i('subdomain'),
          });
        if (r === 'subdomain')
          return a.createElement(Au, {
            onBack: () => i('signin'),
            onSignIn: d,
          });
        if (r === 'verify') {
          if (!o)
            throw new Error(
              'Expected to have a `exchangeParameters` if at `verify` step'
            );
          return a.createElement(Xm, {
            onBack: () => i('signin'),
            hasProjectId: n,
            setAccessToken: e,
            setCreatedProjectId: t,
            exchangeParameters: o,
          });
        }
        return null;
      },
      G0 = w.div(
        ({ theme: e }) => ({
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: e.appBorderRadius,
          background: e.base === 'light' ? e.color.lightest : e.color.darkest,
          border: `1px solid ${e.appBorderColor}`,
          padding: 15,
          flex: 1,
          gap: 14,
          maxWidth: '500px',
          width: '100%',
        }),
        ({ theme: e, warning: t }) =>
          t && {
            background: e.base === 'dark' ? '#342e1a' : e.background.warning,
          }
      ),
      n4 = w.b(() => ({ display: 'block', marginBottom: 2 })),
      a4 = () => {
        let { uninstallAddon: e } = uo();
        return a.createElement(
          xe,
          { footer: null },
          a.createElement(
            fe,
            null,
            a.createElement(
              ge,
              null,
              a.createElement(
                'div',
                null,
                a.createElement(an, null),
                a.createElement(Se, null, 'Visual tests'),
                a.createElement(
                  ee,
                  { center: !0, muted: !0 },
                  'Catch bugs in UI appearance automatically. Compare image snapshots to detect visual changes.'
                )
              ),
              a.createElement(
                G0,
                null,
                a.createElement(p0, { style: { flexShrink: 0 } }),
                a.createElement(
                  ee,
                  null,
                  a.createElement(n4, null, 'Git not detected'),
                  'This addon requires Git to associate test results with commits and branches. Run',
                  ' ',
                  a.createElement(Be, null, 'git init'),
                  ' and make your first commit',
                  a.createElement(Be, null, 'git commit -m'),
                  ' to get started!'
                )
              ),
              a.createElement(
                De,
                {
                  target: '_blank',
                  href: 'https://www.chromatic.com/docs/visual-tests-addon#git-addon',
                  withArrow: !0,
                  secondary: !0,
                },
                'Visual tests requirements'
              ),
              a.createElement(
                De,
                { withArrow: !0, onClick: () => e() },
                'Uninstall'
              )
            )
          )
        );
      },
      r4 = w(mo)(({ theme: e }) => ({
        width: 40,
        height: 40,
        padding: 10,
        background: e.color.positive,
        borderRadius: '100%',
        color: 'white',
      })),
      i4 = w(De)(() => ({ marginTop: 5 })),
      o4 = ct(`
  query ProjectQuery($projectId: ID!) {
    project(id: $projectId) {
      id
      name
      webUrl
      lastBuild {
        branch
        number
      }
    }
  }
`),
      l4 = ({ projectId: e, configFile: t, goToNext: n }) => {
        let [{ data: r, fetching: i, error: o }] = xo({
          query: o4,
          variables: { projectId: e },
        });
        return a.createElement(
          xe,
          {
            footer: a.createElement(
              Ir,
              null,
              a.createElement(
                Et,
                null,
                r?.project?.lastBuild &&
                  a.createElement(
                    ee,
                    { style: { marginLeft: 5 } },
                    'Last build: ',
                    r.project.lastBuild.number,
                    ' on branch',
                    ' ',
                    r.project.lastBuild.branch
                  )
              ),
              a.createElement(Et, { push: !0 }, a.createElement(Zr, null))
            ),
          },
          a.createElement(
            fe,
            null,
            a.createElement(
              ge,
              null,
              i && a.createElement('p', null, 'Loading...'),
              o && a.createElement('p', null, o.message),
              r?.project &&
                a.createElement(
                  a.Fragment,
                  null,
                  a.createElement(r4, null),
                  a.createElement(
                    'div',
                    null,
                    a.createElement(Se, null, 'Project linked!'),
                    a.createElement(
                      ee,
                      { center: !0, muted: !0, style: { maxWidth: 500 } },
                      'The ',
                      a.createElement(Be, null, 'projectId'),
                      ' for ',
                      a.createElement('strong', null, r.project.name),
                      ' was added in',
                      ' ',
                      a.createElement(Be, null, t),
                      ' to sync tests with Chromatic. Please commit this change to continue using this addon.'
                    )
                  ),
                  a.createElement(
                    Nt,
                    null,
                    a.createElement(
                      he,
                      { variant: 'solid', size: 'medium', onClick: () => n() },
                      'Catch a UI change'
                    ),
                    a.createElement(
                      i4,
                      {
                        href: 'https://www.chromatic.com/docs/cli',
                        target: '_blank',
                        withArrow: !0,
                        secondary: !0,
                      },
                      'What\u2019s a project ID?'
                    )
                  )
                )
            )
          )
        );
      };
    function s4(e) {
      for (var t = [], n = 1; n < arguments.length; n++)
        t[n - 1] = arguments[n];
      var r = Array.from(typeof e == 'string' ? [e] : e);
      r[r.length - 1] = r[r.length - 1].replace(/\r?\n([\t ]*)$/, '');
      var i = r.reduce(function (s, c) {
        var d = c.match(/\n([\t ]+|(?!\s).)/g);
        return d
          ? s.concat(
              d.map(function (u) {
                var m, p;
                return (p =
                  (m = u.match(/[\t ]/g)) === null || m === void 0
                    ? void 0
                    : m.length) !== null && p !== void 0
                  ? p
                  : 0;
              })
            )
          : s;
      }, []);
      if (i.length) {
        var o = new RegExp(
          `
[	 ]{` +
            Math.min.apply(Math, i) +
            '}',
          'g'
        );
        r = r.map(function (s) {
          return s.replace(
            o,
            `
`
          );
        });
      }
      r[0] = r[0].replace(/^\r?\n/, '');
      var l = r[0];
      return (
        t.forEach(function (s, c) {
          var d = l.match(/(?:^|\n)( *)$/),
            u = d ? d[1] : '',
            m = s;
          typeof s == 'string' &&
            s.includes(`
`) &&
            (m = String(s)
              .split(
                `
`
              )
              .map(function (p, v) {
                return v === 0 ? p : '' + u + p;
              }).join(`
`)),
            (l += m + r[c + 1]);
        }),
        l
      );
    }
    var c4 = w.div(({ theme: e }) => ({
        '&& > *': { margin: 0 },
        '&& pre': {
          color: e.base === 'light' ? e.color.darker : e.color.lighter,
          background: e.base === 'light' ? e.color.lightest : e.color.darkest,
          fontSize: '12px',
          lineHeight: '16px',
          textAlign: 'left',
          padding: '15px !important',
        },
      })),
      d4 = 'https://www.chromatic.com/docs/visual-tests-addon/#configure';
    function u4({ projectId: e, configFile: t }) {
      return a.createElement(
        xe,
        null,
        a.createElement(
          fe,
          null,
          a.createElement(
            ge,
            null,
            a.createElement(
              'div',
              null,
              a.createElement(
                Se,
                null,
                'Add the project ID to your Chromatic config'
              ),
              a.createElement(
                ee,
                { center: !0, muted: !0 },
                'The ',
                a.createElement(Be, null, 'projectId'),
                ' will be used to sync tests with Chromatic. Please commit this change to continue using the addon. The file should be saved at',
                ' ',
                a.createElement(Be, null, t),
                '.'
              )
            ),
            a.createElement(
              c4,
              null,
              a.createElement(
                Be,
                null,
                s4`
                {
                  "projectId": "${e}",
                }
              `
              )
            ),
            a.createElement(
              De,
              { secondary: !0, withArrow: !0, target: '_blank', href: d4 },
              'What\u2019s this for?'
            )
          )
        )
      );
    }
    var m4 = ct(`
  query SelectProjectsQuery {
    viewer {
      accounts {
        id
        name
        avatarUrl
        newProjectUrl
        projects {
          id
          name
          webUrl
          lastBuild {
            branch
            number
          }
        }
      }
    }
  }
`),
      p4 = ({
        createdProjectId: e,
        setCreatedProjectId: t,
        onUpdateProject: n,
      }) => {
        let r = a.useCallback(
          async (i) => {
            await n(i);
          },
          [n]
        );
        return a.createElement(g4, {
          createdProjectId: e,
          setCreatedProjectId: t,
          onSelectProjectId: r,
        });
      },
      za = w.div(({ theme: e }) => ({
        fontSize: `${e.typography.size.s1 - 1}px`,
        fontWeight: e.typography.weight.bold,
        color: e.base === 'light' ? e.color.dark : e.color.light,
        backgroundColor: 'inherit',
        padding: '7px 15px',
        borderBottom: `1px solid ${e.appBorderColor}`,
        lineHeight: '18px',
        letterSpacing: '0.38em',
        textTransform: 'uppercase',
      })),
      Pl = w.div(({ theme: e }) => ({})),
      Vl = w.div(({ theme: e }) => ({
        background: e.base === 'light' ? e.color.lighter : e.color.darker,
      })),
      jl = w.div(({ theme: e }) => ({
        background: e.base === 'light' ? e.color.lightest : e.color.darkest,
        borderRadius: 5,
        border: `1px solid ${e.appBorderColor}`,
        height: 260,
        maxWidth: 420,
        minWidth: 260,
        width: '100%',
        overflow: 'hidden',
        textAlign: 'left',
        position: 'relative',
        display: 'flex',
        '> *': {
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          width: '50%',
        },
      })),
      Ua = w.div({ height: '100%', overflowY: 'auto' }),
      h4 = w(ge)({ width: '100%' }),
      f4 = w(W5)({ marginRight: 10 });
    function g4({
      createdProjectId: e,
      setCreatedProjectId: t,
      onSelectProjectId: n,
    }) {
      let [{ data: r, fetching: i, error: o }, l] = xo({ query: m4 });
      pe(() => {
        let g = setInterval(l, 5e3);
        return () => clearInterval(g);
      }, [l]);
      let [s, c] = Me(),
        d = r?.viewer?.accounts.find((g) => g.id === s),
        u = a.useCallback(
          (g) => {
            c(g.id);
          },
          [c]
        );
      pe(() => {
        !s && r?.viewer?.accounts && u(r.viewer.accounts[0]);
      }, [r, s, u]);
      let [m, p] = Me(!1),
        v = a.useCallback(
          (g) => {
            p(!0), n(g.id);
            let f = setTimeout(() => {
              p(!1);
            }, 1e3);
            return () => clearTimeout(f);
          },
          [n, p]
        ),
        h = de(
          async (g) => {
            g.message === 'createdProject' && (l(), t(g.projectId));
          },
          [l, t]
        ),
        [b, k] = W0(h),
        y = e && d?.projects?.find((g) => g?.id.endsWith(e));
      return (
        pe(() => {
          y && (k(), v(y));
        }, [y, v, k]),
        a.createElement(
          xe,
          null,
          a.createElement(
            fe,
            null,
            a.createElement(
              h4,
              null,
              a.createElement(
                'div',
                null,
                a.createElement(Se, null, 'Select a project'),
                a.createElement(
                  ee,
                  { muted: !0 },
                  'Your tests will sync with this project.'
                )
              ),
              o && a.createElement('p', null, o.message),
              !r &&
                i &&
                a.createElement(
                  jl,
                  null,
                  a.createElement(
                    Pl,
                    null,
                    a.createElement(za, null, 'Accounts'),
                    a.createElement(
                      Ua,
                      null,
                      a.createElement(nt, {
                        appearance: 'secondary',
                        isLoading: !0,
                      }),
                      a.createElement(nt, {
                        appearance: 'secondary',
                        isLoading: !0,
                      }),
                      a.createElement(nt, {
                        appearance: 'secondary',
                        isLoading: !0,
                      }),
                      a.createElement(nt, {
                        appearance: 'secondary',
                        isLoading: !0,
                      }),
                      a.createElement(nt, {
                        appearance: 'secondary',
                        isLoading: !0,
                      })
                    )
                  ),
                  a.createElement(
                    Vl,
                    null,
                    a.createElement(za, null, 'Projects'),
                    a.createElement(
                      Ua,
                      { 'data-testid': 'right-list' },
                      a.createElement(nt, {
                        appearance: 'secondary',
                        isLoading: !0,
                      }),
                      a.createElement(nt, {
                        appearance: 'secondary',
                        isLoading: !0,
                      }),
                      a.createElement(nt, {
                        appearance: 'secondary',
                        isLoading: !0,
                      })
                    )
                  )
                ),
              r?.viewer?.accounts &&
                a.createElement(
                  jl,
                  null,
                  a.createElement(
                    Pl,
                    null,
                    a.createElement(za, null, 'Accounts'),
                    a.createElement(
                      Ua,
                      { 'data-testid': 'left-list' },
                      r.viewer.accounts?.map((g) =>
                        a.createElement(nt, {
                          key: g.id,
                          title: g.name,
                          appearance: 'secondary',
                          left: a.createElement(f4, {
                            src: g.avatarUrl ?? void 0,
                            size: 'tiny',
                          }),
                          onClick: () => u(g),
                          active: s === g.id,
                        })
                      )
                    )
                  ),
                  a.createElement(
                    Vl,
                    null,
                    a.createElement(za, null, 'Projects'),
                    a.createElement(
                      Ua,
                      { 'data-testid': 'right-list' },
                      d &&
                        a.createElement(nt, {
                          isLink: !1,
                          onClick: () => {
                            if (!d?.newProjectUrl)
                              throw new Error(
                                'Unexpected missing `newProjectUrl` on account'
                              );
                            b(d.newProjectUrl);
                          },
                          title: a.createElement(
                            De,
                            { isButton: !0, withArrow: !0 },
                            'Create new project'
                          ),
                        }),
                      d?.projects?.map(
                        (g) =>
                          g &&
                          a.createElement(nt, {
                            appearance: 'secondary',
                            key: g.id,
                            title: g.name,
                            right: a.createElement(Td, {
                              'aria-label': g.name,
                            }),
                            onClick: () => v(g),
                            disabled: m,
                          })
                      )
                    )
                  )
                )
            )
          )
        )
      );
    }
    var v4 = () =>
        a.createElement(
          xe,
          { footer: null },
          a.createElement(
            fe,
            null,
            a.createElement(
              ge,
              null,
              a.createElement(
                'div',
                null,
                a.createElement(an, null),
                a.createElement(Se, null, 'Visual tests'),
                a.createElement(
                  ee,
                  { center: !0, muted: !0 },
                  'Visual tests only runs locally. To test this Storybook, clone it to your machine and run ',
                  a.createElement(Be, null, 'npx storybook dev'),
                  '.'
                )
              )
            )
          )
        ),
      y4 = () =>
        a.createElement(
          xe,
          { footer: !1 },
          a.createElement(
            fe,
            null,
            a.createElement(
              ge,
              null,
              a.createElement(
                'div',
                null,
                a.createElement(an, null),
                a.createElement(Se, null, 'Uninstall complete'),
                a.createElement(
                  ee,
                  { center: !0, muted: !0 },
                  'Visual Tests will vanish the next time you restart your Storybook.'
                )
              )
            )
          )
        ),
      q0 = { isRunning: !1, startBuild: () => {}, stopBuild: () => {} },
      Y0 = Qe(q0),
      Sa = () => Lt(Y0, 'RunBuild'),
      b4 = ({ children: e, watchState: t = q0 }) =>
        a.createElement(Y0.Provider, { value: t }, e),
      Q0 = {
        PENDING: 'warn',
        FAILED: 'error',
        DENIED: 'error',
        BROKEN: 'error',
      },
      yi = [null, 'unknown', 'pending', 'success', 'warn', 'error'];
    function E4(e, t) {
      return yi[Math.max(yi.indexOf(e), yi.indexOf(t))];
    }
    function k4(e) {
      let t = {};
      return (
        e.forEach((n) => {
          !n.story ||
            !n.status ||
            (t[n.story.storyId] = E4(Q0[n.status] || null, t[n.story.storyId]));
        }),
        Object.fromEntries(
          Object.entries(t).map(([n, r]) => [
            n,
            r && {
              status: r,
              title: 'Visual Tests',
              description: 'Chromatic Visual Tests',
            },
          ])
        )
      );
    }
    function w4(
      e,
      { shouldSwitchToLastBuildOnBranch: t, lastBuildOnBranchId: n, storyId: r }
    ) {
      if (!t) return e ? { ...e, storyId: r } : void 0;
      if (!n) throw new Error('Impossible state');
      return { buildId: n, storyId: r };
    }
    function K0(e) {
      return (t) => typeof t === e;
    }
    var C4 = K0('function'),
      x4 = (e) => e === null,
      Hl = (e) => Object.prototype.toString.call(e).slice(8, -1) === 'RegExp',
      Dl = (e) => !S4(e) && !x4(e) && (C4(e) || typeof e == 'object'),
      S4 = K0('undefined');
    function M4(e, t) {
      let { length: n } = e;
      if (n !== t.length) return !1;
      for (let r = n; r-- !== 0; ) if (!He(e[r], t[r])) return !1;
      return !0;
    }
    function N4(e, t) {
      if (e.byteLength !== t.byteLength) return !1;
      let n = new DataView(e.buffer),
        r = new DataView(t.buffer),
        i = e.byteLength;
      for (; i--; ) if (n.getUint8(i) !== r.getUint8(i)) return !1;
      return !0;
    }
    function F4(e, t) {
      if (e.size !== t.size) return !1;
      for (let n of e.entries()) if (!t.has(n[0])) return !1;
      for (let n of e.entries()) if (!He(n[1], t.get(n[0]))) return !1;
      return !0;
    }
    function A4(e, t) {
      if (e.size !== t.size) return !1;
      for (let n of e.entries()) if (!t.has(n[0])) return !1;
      return !0;
    }
    function He(e, t) {
      if (e === t) return !0;
      if (e && Dl(e) && t && Dl(t)) {
        if (e.constructor !== t.constructor) return !1;
        if (Array.isArray(e) && Array.isArray(t)) return M4(e, t);
        if (e instanceof Map && t instanceof Map) return F4(e, t);
        if (e instanceof Set && t instanceof Set) return A4(e, t);
        if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) return N4(e, t);
        if (Hl(e) && Hl(t)) return e.source === t.source && e.flags === t.flags;
        if (e.valueOf !== Object.prototype.valueOf)
          return e.valueOf() === t.valueOf();
        if (e.toString !== Object.prototype.toString)
          return e.toString() === t.toString();
        let n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (let i = n.length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(t, n[i])) return !1;
        for (let i = n.length; i-- !== 0; ) {
          let o = n[i];
          if (!(o === '_owner' && e.$$typeof) && !He(e[o], t[o])) return !1;
        }
        return !0;
      }
      return Number.isNaN(e) && Number.isNaN(t) ? !0 : e === t;
    }
    var O4 = [
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
      ],
      L4 = [
        'bigint',
        'boolean',
        'null',
        'number',
        'string',
        'symbol',
        'undefined',
      ];
    function jr(e) {
      let t = Object.prototype.toString.call(e).slice(8, -1);
      if (/HTML\w+Element/.test(t)) return 'HTMLElement';
      if (_4(t)) return t;
    }
    function dt(e) {
      return (t) => jr(t) === e;
    }
    function _4(e) {
      return O4.includes(e);
    }
    function On(e) {
      return (t) => typeof t === e;
    }
    function T4(e) {
      return L4.includes(e);
    }
    var Z4 = ['innerHTML', 'ownerDocument', 'style', 'attributes', 'nodeValue'];
    function _(e) {
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
      return _.array(e)
        ? 'Array'
        : _.plainFunction(e)
        ? 'Function'
        : jr(e) || 'Object';
    }
    _.array = Array.isArray;
    _.arrayOf = (e, t) =>
      !_.array(e) && !_.function(t) ? !1 : e.every((n) => t(n));
    _.asyncGeneratorFunction = (e) => jr(e) === 'AsyncGeneratorFunction';
    _.asyncFunction = dt('AsyncFunction');
    _.bigint = On('bigint');
    _.boolean = (e) => e === !0 || e === !1;
    _.date = dt('Date');
    _.defined = (e) => !_.undefined(e);
    _.domElement = (e) =>
      _.object(e) &&
      !_.plainObject(e) &&
      e.nodeType === 1 &&
      _.string(e.nodeName) &&
      Z4.every((t) => t in e);
    _.empty = (e) =>
      (_.string(e) && e.length === 0) ||
      (_.array(e) && e.length === 0) ||
      (_.object(e) && !_.map(e) && !_.set(e) && Object.keys(e).length === 0) ||
      (_.set(e) && e.size === 0) ||
      (_.map(e) && e.size === 0);
    _.error = dt('Error');
    _.function = On('function');
    _.generator = (e) =>
      _.iterable(e) && _.function(e.next) && _.function(e.throw);
    _.generatorFunction = dt('GeneratorFunction');
    _.instanceOf = (e, t) =>
      !e || !t ? !1 : Object.getPrototypeOf(e) === t.prototype;
    _.iterable = (e) => !_.nullOrUndefined(e) && _.function(e[Symbol.iterator]);
    _.map = dt('Map');
    _.nan = (e) => Number.isNaN(e);
    _.null = (e) => e === null;
    _.nullOrUndefined = (e) => _.null(e) || _.undefined(e);
    _.number = (e) => On('number')(e) && !_.nan(e);
    _.numericString = (e) =>
      _.string(e) && e.length > 0 && !Number.isNaN(Number(e));
    _.object = (e) =>
      !_.nullOrUndefined(e) && (_.function(e) || typeof e == 'object');
    _.oneOf = (e, t) => (_.array(e) ? e.indexOf(t) > -1 : !1);
    _.plainFunction = dt('Function');
    _.plainObject = (e) => {
      if (jr(e) !== 'Object') return !1;
      let t = Object.getPrototypeOf(e);
      return t === null || t === Object.getPrototypeOf({});
    };
    _.primitive = (e) => _.null(e) || T4(typeof e);
    _.promise = dt('Promise');
    _.propertyOf = (e, t, n) => {
      if (!_.object(e) || !t) return !1;
      let r = e[t];
      return _.function(n) ? n(r) : _.defined(r);
    };
    _.regexp = dt('RegExp');
    _.set = dt('Set');
    _.string = On('string');
    _.symbol = On('symbol');
    _.undefined = On('undefined');
    _.weakMap = dt('WeakMap');
    _.weakSet = dt('WeakSet');
    var I = _;
    function I4(...e) {
      return e.every((t) => I.string(t) || I.array(t) || I.plainObject(t));
    }
    function R4(e, t, n) {
      return J0(e, t)
        ? [e, t].every(I.array)
          ? !e.some(Gl(n)) && t.some(Gl(n))
          : [e, t].every(I.plainObject)
          ? !Object.entries(e).some(Wl(n)) && Object.entries(t).some(Wl(n))
          : t === n
        : !1;
    }
    function zl(e, t, n) {
      let { actual: r, key: i, previous: o, type: l } = n,
        s = yt(e, i),
        c = yt(t, i),
        d = [s, c].every(I.number) && (l === 'increased' ? s < c : s > c);
      return (
        I.undefined(r) || (d = d && c === r),
        I.undefined(o) || (d = d && s === o),
        d
      );
    }
    function Ul(e, t, n) {
      let { key: r, type: i, value: o } = n,
        l = yt(e, r),
        s = yt(t, r),
        c = i === 'added' ? l : s,
        d = i === 'added' ? s : l;
      if (!I.nullOrUndefined(o)) {
        if (I.defined(c)) {
          if (I.array(c) || I.plainObject(c)) return R4(c, d, o);
        } else return He(d, o);
        return !1;
      }
      return [l, s].every(I.array)
        ? !d.every(Mo(c))
        : [l, s].every(I.plainObject)
        ? B4(Object.keys(c), Object.keys(d))
        : ![l, s].every((u) => I.primitive(u) && I.defined(u)) &&
          (i === 'added'
            ? !I.defined(l) && I.defined(s)
            : I.defined(l) && !I.defined(s));
    }
    function $l(e, t, { key: n } = {}) {
      let r = yt(e, n),
        i = yt(t, n);
      if (!J0(r, i)) throw new TypeError('Inputs have different types');
      if (!I4(r, i)) throw new TypeError("Inputs don't have length");
      return (
        [r, i].every(I.plainObject) &&
          ((r = Object.keys(r)), (i = Object.keys(i))),
        [r, i]
      );
    }
    function Wl(e) {
      return ([t, n]) =>
        I.array(e)
          ? He(e, n) || e.some((r) => He(r, n) || (I.array(n) && Mo(n)(r)))
          : I.plainObject(e) && e[t]
          ? !!e[t] && He(e[t], n)
          : He(e, n);
    }
    function B4(e, t) {
      return t.some((n) => !e.includes(n));
    }
    function Gl(e) {
      return (t) =>
        I.array(e)
          ? e.some((n) => He(n, t) || (I.array(t) && Mo(t)(n)))
          : He(e, t);
    }
    function Un(e, t) {
      return I.array(e) ? e.some((n) => He(n, t)) : He(e, t);
    }
    function Mo(e) {
      return (t) => e.some((n) => He(n, t));
    }
    function J0(...e) {
      return (
        e.every(I.array) ||
        e.every(I.number) ||
        e.every(I.plainObject) ||
        e.every(I.string)
      );
    }
    function yt(e, t) {
      return I.plainObject(e) || I.array(e)
        ? I.string(t)
          ? t.split('.').reduce((n, r) => n && n[r], e)
          : I.number(t)
          ? e[t]
          : e
        : e;
    }
    function kr(e, t) {
      if ([e, t].some(I.nullOrUndefined))
        throw new Error('Missing required parameters');
      if (![e, t].every((n) => I.plainObject(n) || I.array(n)))
        throw new Error('Expected plain objects or array');
      return {
        added: (n, r) => {
          try {
            return Ul(e, t, { key: n, type: 'added', value: r });
          } catch {
            return !1;
          }
        },
        changed: (n, r, i) => {
          try {
            let o = yt(e, n),
              l = yt(t, n),
              s = I.defined(r),
              c = I.defined(i);
            if (s || c) {
              let d = c ? Un(i, o) : !Un(r, o),
                u = Un(r, l);
              return d && u;
            }
            return [o, l].every(I.array) || [o, l].every(I.plainObject)
              ? !He(o, l)
              : o !== l;
          } catch {
            return !1;
          }
        },
        changedFrom: (n, r, i) => {
          if (!I.defined(n)) return !1;
          try {
            let o = yt(e, n),
              l = yt(t, n),
              s = I.defined(i);
            return Un(r, o) && (s ? Un(i, l) : !s);
          } catch {
            return !1;
          }
        },
        decreased: (n, r, i) => {
          if (!I.defined(n)) return !1;
          try {
            return zl(e, t, {
              key: n,
              actual: r,
              previous: i,
              type: 'decreased',
            });
          } catch {
            return !1;
          }
        },
        emptied: (n) => {
          try {
            let [r, i] = $l(e, t, { key: n });
            return !!r.length && !i.length;
          } catch {
            return !1;
          }
        },
        filled: (n) => {
          try {
            let [r, i] = $l(e, t, { key: n });
            return !r.length && !!i.length;
          } catch {
            return !1;
          }
        },
        increased: (n, r, i) => {
          if (!I.defined(n)) return !1;
          try {
            return zl(e, t, {
              key: n,
              actual: r,
              previous: i,
              type: 'increased',
            });
          } catch {
            return !1;
          }
        },
        removed: (n, r) => {
          try {
            return Ul(e, t, { key: n, type: 'removed', value: r });
          } catch {
            return !1;
          }
        },
      };
    }
    var P4 = lt(Jc(), 1),
      X0 = lt(Xc(), 1);
    function V4(e, ...t) {
      if (!I.plainObject(e)) throw new TypeError('Expected an object');
      let n = {};
      for (let r in e)
        ({}).hasOwnProperty.call(e, r) && (t.includes(r) || (n[r] = e[r]));
      return n;
    }
    function j4(e, ...t) {
      if (!I.plainObject(e)) throw new TypeError('Expected an object');
      if (!t.length) return e;
      let n = {};
      for (let r in e)
        ({}).hasOwnProperty.call(e, r) && t.includes(r) && (n[r] = e[r]);
      return n;
    }
    var $a = lt(io(), 1),
      bi = lt(io(), 1),
      O = lt(n5()),
      Ma =
        typeof window < 'u' && typeof document < 'u' && typeof navigator < 'u',
      H4 = (function () {
        for (
          var e = ['Edge', 'Trident', 'Firefox'], t = 0;
          t < e.length;
          t += 1
        )
          if (Ma && navigator.userAgent.indexOf(e[t]) >= 0) return 1;
        return 0;
      })();
    function D4(e) {
      var t = !1;
      return function () {
        t ||
          ((t = !0),
          window.Promise.resolve().then(function () {
            (t = !1), e();
          }));
      };
    }
    function z4(e) {
      var t = !1;
      return function () {
        t ||
          ((t = !0),
          setTimeout(function () {
            (t = !1), e();
          }, H4));
      };
    }
    var U4 = Ma && window.Promise,
      $4 = U4 ? D4 : z4;
    function es(e) {
      var t = {};
      return e && t.toString.call(e) === '[object Function]';
    }
    function rn(e, t) {
      if (e.nodeType !== 1) return [];
      var n = e.ownerDocument.defaultView,
        r = n.getComputedStyle(e, null);
      return t ? r[t] : r;
    }
    function No(e) {
      return e.nodeName === 'HTML' ? e : e.parentNode || e.host;
    }
    function Na(e) {
      if (!e) return document.body;
      switch (e.nodeName) {
        case 'HTML':
        case 'BODY':
          return e.ownerDocument.body;
        case '#document':
          return e.body;
      }
      var t = rn(e),
        n = t.overflow,
        r = t.overflowX,
        i = t.overflowY;
      return /(auto|scroll|overlay)/.test(n + i + r) ? e : Na(No(e));
    }
    function ts(e) {
      return e && e.referenceNode ? e.referenceNode : e;
    }
    var ql = Ma && !!(window.MSInputMethodContext && document.documentMode),
      Yl = Ma && /MSIE 10/.test(navigator.userAgent);
    function Ln(e) {
      return e === 11 ? ql : e === 10 ? Yl : ql || Yl;
    }
    function Mn(e) {
      if (!e) return document.documentElement;
      for (
        var t = Ln(10) ? document.body : null, n = e.offsetParent || null;
        n === t && e.nextElementSibling;

      )
        n = (e = e.nextElementSibling).offsetParent;
      var r = n && n.nodeName;
      return !r || r === 'BODY' || r === 'HTML'
        ? e
          ? e.ownerDocument.documentElement
          : document.documentElement
        : ['TH', 'TD', 'TABLE'].indexOf(n.nodeName) !== -1 &&
          rn(n, 'position') === 'static'
        ? Mn(n)
        : n;
    }
    function W4(e) {
      var t = e.nodeName;
      return t === 'BODY' ? !1 : t === 'HTML' || Mn(e.firstElementChild) === e;
    }
    function Ki(e) {
      return e.parentNode !== null ? Ki(e.parentNode) : e;
    }
    function wr(e, t) {
      if (!e || !e.nodeType || !t || !t.nodeType)
        return document.documentElement;
      var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
        r = n ? e : t,
        i = n ? t : e,
        o = document.createRange();
      o.setStart(r, 0), o.setEnd(i, 0);
      var l = o.commonAncestorContainer;
      if ((e !== l && t !== l) || r.contains(i)) return W4(l) ? l : Mn(l);
      var s = Ki(e);
      return s.host ? wr(s.host, t) : wr(e, Ki(t).host);
    }
    function Nn(e) {
      var t =
          arguments.length > 1 && arguments[1] !== void 0
            ? arguments[1]
            : 'top',
        n = t === 'top' ? 'scrollTop' : 'scrollLeft',
        r = e.nodeName;
      if (r === 'BODY' || r === 'HTML') {
        var i = e.ownerDocument.documentElement,
          o = e.ownerDocument.scrollingElement || i;
        return o[n];
      }
      return e[n];
    }
    function G4(e, t) {
      var n =
          arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
        r = Nn(t, 'top'),
        i = Nn(t, 'left'),
        o = n ? -1 : 1;
      return (
        (e.top += r * o),
        (e.bottom += r * o),
        (e.left += i * o),
        (e.right += i * o),
        e
      );
    }
    function Ql(e, t) {
      var n = t === 'x' ? 'Left' : 'Top',
        r = n === 'Left' ? 'Right' : 'Bottom';
      return (
        parseFloat(e['border' + n + 'Width']) +
        parseFloat(e['border' + r + 'Width'])
      );
    }
    function Kl(e, t, n, r) {
      return Math.max(
        t['offset' + e],
        t['scroll' + e],
        n['client' + e],
        n['offset' + e],
        n['scroll' + e],
        Ln(10)
          ? parseInt(n['offset' + e]) +
              parseInt(r['margin' + (e === 'Height' ? 'Top' : 'Left')]) +
              parseInt(r['margin' + (e === 'Height' ? 'Bottom' : 'Right')])
          : 0
      );
    }
    function ns(e) {
      var t = e.body,
        n = e.documentElement,
        r = Ln(10) && getComputedStyle(n);
      return { height: Kl('Height', t, n, r), width: Kl('Width', t, n, r) };
    }
    var q4 = function (e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      },
      Y4 = (function () {
        function e(t, n) {
          for (var r = 0; r < n.length; r++) {
            var i = n[r];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(t, i.key, i);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      Fn = function (e, t, n) {
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
      },
      Xe =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        };
    function Ht(e) {
      return Xe({}, e, { right: e.left + e.width, bottom: e.top + e.height });
    }
    function Ji(e) {
      var t = {};
      try {
        if (Ln(10)) {
          t = e.getBoundingClientRect();
          var n = Nn(e, 'top'),
            r = Nn(e, 'left');
          (t.top += n), (t.left += r), (t.bottom += n), (t.right += r);
        } else t = e.getBoundingClientRect();
      } catch {}
      var i = {
          left: t.left,
          top: t.top,
          width: t.right - t.left,
          height: t.bottom - t.top,
        },
        o = e.nodeName === 'HTML' ? ns(e.ownerDocument) : {},
        l = o.width || e.clientWidth || i.width,
        s = o.height || e.clientHeight || i.height,
        c = e.offsetWidth - l,
        d = e.offsetHeight - s;
      if (c || d) {
        var u = rn(e);
        (c -= Ql(u, 'x')), (d -= Ql(u, 'y')), (i.width -= c), (i.height -= d);
      }
      return Ht(i);
    }
    function Fo(e, t) {
      var n =
          arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
        r = Ln(10),
        i = t.nodeName === 'HTML',
        o = Ji(e),
        l = Ji(t),
        s = Na(e),
        c = rn(t),
        d = parseFloat(c.borderTopWidth),
        u = parseFloat(c.borderLeftWidth);
      n && i && ((l.top = Math.max(l.top, 0)), (l.left = Math.max(l.left, 0)));
      var m = Ht({
        top: o.top - l.top - d,
        left: o.left - l.left - u,
        width: o.width,
        height: o.height,
      });
      if (((m.marginTop = 0), (m.marginLeft = 0), !r && i)) {
        var p = parseFloat(c.marginTop),
          v = parseFloat(c.marginLeft);
        (m.top -= d - p),
          (m.bottom -= d - p),
          (m.left -= u - v),
          (m.right -= u - v),
          (m.marginTop = p),
          (m.marginLeft = v);
      }
      return (
        (r && !n ? t.contains(s) : t === s && s.nodeName !== 'BODY') &&
          (m = G4(m, t)),
        m
      );
    }
    function Q4(e) {
      var t =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
        n = e.ownerDocument.documentElement,
        r = Fo(e, n),
        i = Math.max(n.clientWidth, window.innerWidth || 0),
        o = Math.max(n.clientHeight, window.innerHeight || 0),
        l = t ? 0 : Nn(n),
        s = t ? 0 : Nn(n, 'left'),
        c = {
          top: l - r.top + r.marginTop,
          left: s - r.left + r.marginLeft,
          width: i,
          height: o,
        };
      return Ht(c);
    }
    function as(e) {
      var t = e.nodeName;
      if (t === 'BODY' || t === 'HTML') return !1;
      if (rn(e, 'position') === 'fixed') return !0;
      var n = No(e);
      return n ? as(n) : !1;
    }
    function rs(e) {
      if (!e || !e.parentElement || Ln()) return document.documentElement;
      for (var t = e.parentElement; t && rn(t, 'transform') === 'none'; )
        t = t.parentElement;
      return t || document.documentElement;
    }
    function Ao(e, t, n, r) {
      var i =
          arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1,
        o = { top: 0, left: 0 },
        l = i ? rs(e) : wr(e, ts(t));
      if (r === 'viewport') o = Q4(l, i);
      else {
        var s = void 0;
        r === 'scrollParent'
          ? ((s = Na(No(t))),
            s.nodeName === 'BODY' && (s = e.ownerDocument.documentElement))
          : r === 'window'
          ? (s = e.ownerDocument.documentElement)
          : (s = r);
        var c = Fo(s, l, i);
        if (s.nodeName === 'HTML' && !as(l)) {
          var d = ns(e.ownerDocument),
            u = d.height,
            m = d.width;
          (o.top += c.top - c.marginTop),
            (o.bottom = u + c.top),
            (o.left += c.left - c.marginLeft),
            (o.right = m + c.left);
        } else o = c;
      }
      n = n || 0;
      var p = typeof n == 'number';
      return (
        (o.left += p ? n : n.left || 0),
        (o.top += p ? n : n.top || 0),
        (o.right -= p ? n : n.right || 0),
        (o.bottom -= p ? n : n.bottom || 0),
        o
      );
    }
    function K4(e) {
      var t = e.width,
        n = e.height;
      return t * n;
    }
    function is(e, t, n, r, i) {
      var o =
        arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
      if (e.indexOf('auto') === -1) return e;
      var l = Ao(n, r, o, i),
        s = {
          top: { width: l.width, height: t.top - l.top },
          right: { width: l.right - t.right, height: l.height },
          bottom: { width: l.width, height: l.bottom - t.bottom },
          left: { width: t.left - l.left, height: l.height },
        },
        c = Object.keys(s)
          .map(function (p) {
            return Xe({ key: p }, s[p], { area: K4(s[p]) });
          })
          .sort(function (p, v) {
            return v.area - p.area;
          }),
        d = c.filter(function (p) {
          var v = p.width,
            h = p.height;
          return v >= n.clientWidth && h >= n.clientHeight;
        }),
        u = d.length > 0 ? d[0].key : c[0].key,
        m = e.split('-')[1];
      return u + (m ? '-' + m : '');
    }
    function os(e, t, n) {
      var r =
          arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null,
        i = r ? rs(t) : wr(t, ts(n));
      return Fo(n, i, r);
    }
    function ls(e) {
      var t = e.ownerDocument.defaultView,
        n = t.getComputedStyle(e),
        r = parseFloat(n.marginTop || 0) + parseFloat(n.marginBottom || 0),
        i = parseFloat(n.marginLeft || 0) + parseFloat(n.marginRight || 0),
        o = { width: e.offsetWidth + i, height: e.offsetHeight + r };
      return o;
    }
    function Cr(e) {
      var t = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
      return e.replace(/left|right|bottom|top/g, function (n) {
        return t[n];
      });
    }
    function ss(e, t, n) {
      n = n.split('-')[0];
      var r = ls(e),
        i = { width: r.width, height: r.height },
        o = ['right', 'left'].indexOf(n) !== -1,
        l = o ? 'top' : 'left',
        s = o ? 'left' : 'top',
        c = o ? 'height' : 'width',
        d = o ? 'width' : 'height';
      return (
        (i[l] = t[l] + t[c] / 2 - r[c] / 2),
        n === s ? (i[s] = t[s] - r[d]) : (i[s] = t[Cr(s)]),
        i
      );
    }
    function Fa(e, t) {
      return Array.prototype.find ? e.find(t) : e.filter(t)[0];
    }
    function J4(e, t, n) {
      if (Array.prototype.findIndex)
        return e.findIndex(function (i) {
          return i[t] === n;
        });
      var r = Fa(e, function (i) {
        return i[t] === n;
      });
      return e.indexOf(r);
    }
    function cs(e, t, n) {
      var r = n === void 0 ? e : e.slice(0, J4(e, 'name', n));
      return (
        r.forEach(function (i) {
          i.function &&
            console.warn(
              '`modifier.function` is deprecated, use `modifier.fn`!'
            );
          var o = i.function || i.fn;
          i.enabled &&
            es(o) &&
            ((t.offsets.popper = Ht(t.offsets.popper)),
            (t.offsets.reference = Ht(t.offsets.reference)),
            (t = o(t, i)));
        }),
        t
      );
    }
    function X4() {
      if (!this.state.isDestroyed) {
        var e = {
          instance: this,
          styles: {},
          arrowStyles: {},
          attributes: {},
          flipped: !1,
          offsets: {},
        };
        (e.offsets.reference = os(
          this.state,
          this.popper,
          this.reference,
          this.options.positionFixed
        )),
          (e.placement = is(
            this.options.placement,
            e.offsets.reference,
            this.popper,
            this.reference,
            this.options.modifiers.flip.boundariesElement,
            this.options.modifiers.flip.padding
          )),
          (e.originalPlacement = e.placement),
          (e.positionFixed = this.options.positionFixed),
          (e.offsets.popper = ss(
            this.popper,
            e.offsets.reference,
            e.placement
          )),
          (e.offsets.popper.position = this.options.positionFixed
            ? 'fixed'
            : 'absolute'),
          (e = cs(this.modifiers, e)),
          this.state.isCreated
            ? this.options.onUpdate(e)
            : ((this.state.isCreated = !0), this.options.onCreate(e));
      }
    }
    function ds(e, t) {
      return e.some(function (n) {
        var r = n.name,
          i = n.enabled;
        return i && r === t;
      });
    }
    function Oo(e) {
      for (
        var t = [!1, 'ms', 'Webkit', 'Moz', 'O'],
          n = e.charAt(0).toUpperCase() + e.slice(1),
          r = 0;
        r < t.length;
        r++
      ) {
        var i = t[r],
          o = i ? '' + i + n : e;
        if (typeof document.body.style[o] < 'u') return o;
      }
      return null;
    }
    function ep() {
      return (
        (this.state.isDestroyed = !0),
        ds(this.modifiers, 'applyStyle') &&
          (this.popper.removeAttribute('x-placement'),
          (this.popper.style.position = ''),
          (this.popper.style.top = ''),
          (this.popper.style.left = ''),
          (this.popper.style.right = ''),
          (this.popper.style.bottom = ''),
          (this.popper.style.willChange = ''),
          (this.popper.style[Oo('transform')] = '')),
        this.disableEventListeners(),
        this.options.removeOnDestroy &&
          this.popper.parentNode.removeChild(this.popper),
        this
      );
    }
    function us(e) {
      var t = e.ownerDocument;
      return t ? t.defaultView : window;
    }
    function ms(e, t, n, r) {
      var i = e.nodeName === 'BODY',
        o = i ? e.ownerDocument.defaultView : e;
      o.addEventListener(t, n, { passive: !0 }),
        i || ms(Na(o.parentNode), t, n, r),
        r.push(o);
    }
    function tp(e, t, n, r) {
      (n.updateBound = r),
        us(e).addEventListener('resize', n.updateBound, { passive: !0 });
      var i = Na(e);
      return (
        ms(i, 'scroll', n.updateBound, n.scrollParents),
        (n.scrollElement = i),
        (n.eventsEnabled = !0),
        n
      );
    }
    function np() {
      this.state.eventsEnabled ||
        (this.state = tp(
          this.reference,
          this.options,
          this.state,
          this.scheduleUpdate
        ));
    }
    function ap(e, t) {
      return (
        us(e).removeEventListener('resize', t.updateBound),
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
    function rp() {
      this.state.eventsEnabled &&
        (cancelAnimationFrame(this.scheduleUpdate),
        (this.state = ap(this.reference, this.state)));
    }
    function Lo(e) {
      return e !== '' && !isNaN(parseFloat(e)) && isFinite(e);
    }
    function Xi(e, t) {
      Object.keys(t).forEach(function (n) {
        var r = '';
        ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(n) !==
          -1 &&
          Lo(t[n]) &&
          (r = 'px'),
          (e.style[n] = t[n] + r);
      });
    }
    function ip(e, t) {
      Object.keys(t).forEach(function (n) {
        var r = t[n];
        r !== !1 ? e.setAttribute(n, t[n]) : e.removeAttribute(n);
      });
    }
    function op(e) {
      return (
        Xi(e.instance.popper, e.styles),
        ip(e.instance.popper, e.attributes),
        e.arrowElement &&
          Object.keys(e.arrowStyles).length &&
          Xi(e.arrowElement, e.arrowStyles),
        e
      );
    }
    function lp(e, t, n, r, i) {
      var o = os(i, t, e, n.positionFixed),
        l = is(
          n.placement,
          o,
          t,
          e,
          n.modifiers.flip.boundariesElement,
          n.modifiers.flip.padding
        );
      return (
        t.setAttribute('x-placement', l),
        Xi(t, { position: n.positionFixed ? 'fixed' : 'absolute' }),
        n
      );
    }
    function sp(e, t) {
      var n = e.offsets,
        r = n.popper,
        i = n.reference,
        o = Math.round,
        l = Math.floor,
        s = function (k) {
          return k;
        },
        c = o(i.width),
        d = o(r.width),
        u = ['left', 'right'].indexOf(e.placement) !== -1,
        m = e.placement.indexOf('-') !== -1,
        p = c % 2 === d % 2,
        v = c % 2 === 1 && d % 2 === 1,
        h = t ? (u || m || p ? o : l) : s,
        b = t ? o : s;
      return {
        left: h(v && !m && t ? r.left - 1 : r.left),
        top: b(r.top),
        bottom: b(r.bottom),
        right: h(r.right),
      };
    }
    var cp = Ma && /Firefox/i.test(navigator.userAgent);
    function dp(e, t) {
      var n = t.x,
        r = t.y,
        i = e.offsets.popper,
        o = Fa(e.instance.modifiers, function (f) {
          return f.name === 'applyStyle';
        }).gpuAcceleration;
      o !== void 0 &&
        console.warn(
          'WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!'
        );
      var l = o !== void 0 ? o : t.gpuAcceleration,
        s = Mn(e.instance.popper),
        c = Ji(s),
        d = { position: i.position },
        u = sp(e, window.devicePixelRatio < 2 || !cp),
        m = n === 'bottom' ? 'top' : 'bottom',
        p = r === 'right' ? 'left' : 'right',
        v = Oo('transform'),
        h = void 0,
        b = void 0;
      if (
        (m === 'bottom'
          ? s.nodeName === 'HTML'
            ? (b = -s.clientHeight + u.bottom)
            : (b = -c.height + u.bottom)
          : (b = u.top),
        p === 'right'
          ? s.nodeName === 'HTML'
            ? (h = -s.clientWidth + u.right)
            : (h = -c.width + u.right)
          : (h = u.left),
        l && v)
      )
        (d[v] = 'translate3d(' + h + 'px, ' + b + 'px, 0)'),
          (d[m] = 0),
          (d[p] = 0),
          (d.willChange = 'transform');
      else {
        var k = m === 'bottom' ? -1 : 1,
          y = p === 'right' ? -1 : 1;
        (d[m] = b * k), (d[p] = h * y), (d.willChange = m + ', ' + p);
      }
      var g = { 'x-placement': e.placement };
      return (
        (e.attributes = Xe({}, g, e.attributes)),
        (e.styles = Xe({}, d, e.styles)),
        (e.arrowStyles = Xe({}, e.offsets.arrow, e.arrowStyles)),
        e
      );
    }
    function ps(e, t, n) {
      var r = Fa(e, function (s) {
          var c = s.name;
          return c === t;
        }),
        i =
          !!r &&
          e.some(function (s) {
            return s.name === n && s.enabled && s.order < r.order;
          });
      if (!i) {
        var o = '`' + t + '`',
          l = '`' + n + '`';
        console.warn(
          l +
            ' modifier is required by ' +
            o +
            ' modifier in order to work, be sure to include it before ' +
            o +
            '!'
        );
      }
      return i;
    }
    function up(e, t) {
      var n;
      if (!ps(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
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
      var i = e.placement.split('-')[0],
        o = e.offsets,
        l = o.popper,
        s = o.reference,
        c = ['left', 'right'].indexOf(i) !== -1,
        d = c ? 'height' : 'width',
        u = c ? 'Top' : 'Left',
        m = u.toLowerCase(),
        p = c ? 'left' : 'top',
        v = c ? 'bottom' : 'right',
        h = ls(r)[d];
      s[v] - h < l[m] && (e.offsets.popper[m] -= l[m] - (s[v] - h)),
        s[m] + h > l[v] && (e.offsets.popper[m] += s[m] + h - l[v]),
        (e.offsets.popper = Ht(e.offsets.popper));
      var b = s[m] + s[d] / 2 - h / 2,
        k = rn(e.instance.popper),
        y = parseFloat(k['margin' + u]),
        g = parseFloat(k['border' + u + 'Width']),
        f = b - e.offsets.popper[m] - y - g;
      return (
        (f = Math.max(Math.min(l[d] - h, f), 0)),
        (e.arrowElement = r),
        (e.offsets.arrow =
          ((n = {}), Fn(n, m, Math.round(f)), Fn(n, p, ''), n)),
        e
      );
    }
    function mp(e) {
      return e === 'end' ? 'start' : e === 'start' ? 'end' : e;
    }
    var hs = [
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
      ],
      Ei = hs.slice(3);
    function Jl(e) {
      var t =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
        n = Ei.indexOf(e),
        r = Ei.slice(n + 1).concat(Ei.slice(0, n));
      return t ? r.reverse() : r;
    }
    var ki = {
      FLIP: 'flip',
      CLOCKWISE: 'clockwise',
      COUNTERCLOCKWISE: 'counterclockwise',
    };
    function pp(e, t) {
      if (
        ds(e.instance.modifiers, 'inner') ||
        (e.flipped && e.placement === e.originalPlacement)
      )
        return e;
      var n = Ao(
          e.instance.popper,
          e.instance.reference,
          t.padding,
          t.boundariesElement,
          e.positionFixed
        ),
        r = e.placement.split('-')[0],
        i = Cr(r),
        o = e.placement.split('-')[1] || '',
        l = [];
      switch (t.behavior) {
        case ki.FLIP:
          l = [r, i];
          break;
        case ki.CLOCKWISE:
          l = Jl(r);
          break;
        case ki.COUNTERCLOCKWISE:
          l = Jl(r, !0);
          break;
        default:
          l = t.behavior;
      }
      return (
        l.forEach(function (s, c) {
          if (r !== s || l.length === c + 1) return e;
          (r = e.placement.split('-')[0]), (i = Cr(r));
          var d = e.offsets.popper,
            u = e.offsets.reference,
            m = Math.floor,
            p =
              (r === 'left' && m(d.right) > m(u.left)) ||
              (r === 'right' && m(d.left) < m(u.right)) ||
              (r === 'top' && m(d.bottom) > m(u.top)) ||
              (r === 'bottom' && m(d.top) < m(u.bottom)),
            v = m(d.left) < m(n.left),
            h = m(d.right) > m(n.right),
            b = m(d.top) < m(n.top),
            k = m(d.bottom) > m(n.bottom),
            y =
              (r === 'left' && v) ||
              (r === 'right' && h) ||
              (r === 'top' && b) ||
              (r === 'bottom' && k),
            g = ['top', 'bottom'].indexOf(r) !== -1,
            f =
              !!t.flipVariations &&
              ((g && o === 'start' && v) ||
                (g && o === 'end' && h) ||
                (!g && o === 'start' && b) ||
                (!g && o === 'end' && k)),
            E =
              !!t.flipVariationsByContent &&
              ((g && o === 'start' && h) ||
                (g && o === 'end' && v) ||
                (!g && o === 'start' && k) ||
                (!g && o === 'end' && b)),
            S = f || E;
          (p || y || S) &&
            ((e.flipped = !0),
            (p || y) && (r = l[c + 1]),
            S && (o = mp(o)),
            (e.placement = r + (o ? '-' + o : '')),
            (e.offsets.popper = Xe(
              {},
              e.offsets.popper,
              ss(e.instance.popper, e.offsets.reference, e.placement)
            )),
            (e = cs(e.instance.modifiers, e, 'flip')));
        }),
        e
      );
    }
    function hp(e) {
      var t = e.offsets,
        n = t.popper,
        r = t.reference,
        i = e.placement.split('-')[0],
        o = Math.floor,
        l = ['top', 'bottom'].indexOf(i) !== -1,
        s = l ? 'right' : 'bottom',
        c = l ? 'left' : 'top',
        d = l ? 'width' : 'height';
      return (
        n[s] < o(r[c]) && (e.offsets.popper[c] = o(r[c]) - n[d]),
        n[c] > o(r[s]) && (e.offsets.popper[c] = o(r[s])),
        e
      );
    }
    function fp(e, t, n, r) {
      var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
        o = +i[1],
        l = i[2];
      if (!o) return e;
      if (l.indexOf('%') === 0) {
        var s = void 0;
        switch (l) {
          case '%p':
            s = n;
            break;
          case '%':
          case '%r':
          default:
            s = r;
        }
        var c = Ht(s);
        return (c[t] / 100) * o;
      } else if (l === 'vh' || l === 'vw') {
        var d = void 0;
        return (
          l === 'vh'
            ? (d = Math.max(
                document.documentElement.clientHeight,
                window.innerHeight || 0
              ))
            : (d = Math.max(
                document.documentElement.clientWidth,
                window.innerWidth || 0
              )),
          (d / 100) * o
        );
      } else return o;
    }
    function gp(e, t, n, r) {
      var i = [0, 0],
        o = ['right', 'left'].indexOf(r) !== -1,
        l = e.split(/(\+|\-)/).map(function (u) {
          return u.trim();
        }),
        s = l.indexOf(
          Fa(l, function (u) {
            return u.search(/,|\s/) !== -1;
          })
        );
      l[s] &&
        l[s].indexOf(',') === -1 &&
        console.warn(
          'Offsets separated by white space(s) are deprecated, use a comma (,) instead.'
        );
      var c = /\s*,\s*|\s+/,
        d =
          s !== -1
            ? [
                l.slice(0, s).concat([l[s].split(c)[0]]),
                [l[s].split(c)[1]].concat(l.slice(s + 1)),
              ]
            : [l];
      return (
        (d = d.map(function (u, m) {
          var p = (m === 1 ? !o : o) ? 'height' : 'width',
            v = !1;
          return u
            .reduce(function (h, b) {
              return h[h.length - 1] === '' && ['+', '-'].indexOf(b) !== -1
                ? ((h[h.length - 1] = b), (v = !0), h)
                : v
                ? ((h[h.length - 1] += b), (v = !1), h)
                : h.concat(b);
            }, [])
            .map(function (h) {
              return fp(h, p, t, n);
            });
        })),
        d.forEach(function (u, m) {
          u.forEach(function (p, v) {
            Lo(p) && (i[m] += p * (u[v - 1] === '-' ? -1 : 1));
          });
        }),
        i
      );
    }
    function vp(e, t) {
      var n = t.offset,
        r = e.placement,
        i = e.offsets,
        o = i.popper,
        l = i.reference,
        s = r.split('-')[0],
        c = void 0;
      return (
        Lo(+n) ? (c = [+n, 0]) : (c = gp(n, o, l, s)),
        s === 'left'
          ? ((o.top += c[0]), (o.left -= c[1]))
          : s === 'right'
          ? ((o.top += c[0]), (o.left += c[1]))
          : s === 'top'
          ? ((o.left += c[0]), (o.top -= c[1]))
          : s === 'bottom' && ((o.left += c[0]), (o.top += c[1])),
        (e.popper = o),
        e
      );
    }
    function yp(e, t) {
      var n = t.boundariesElement || Mn(e.instance.popper);
      e.instance.reference === n && (n = Mn(n));
      var r = Oo('transform'),
        i = e.instance.popper.style,
        o = i.top,
        l = i.left,
        s = i[r];
      (i.top = ''), (i.left = ''), (i[r] = '');
      var c = Ao(
        e.instance.popper,
        e.instance.reference,
        t.padding,
        n,
        e.positionFixed
      );
      (i.top = o), (i.left = l), (i[r] = s), (t.boundaries = c);
      var d = t.priority,
        u = e.offsets.popper,
        m = {
          primary: function (p) {
            var v = u[p];
            return (
              u[p] < c[p] &&
                !t.escapeWithReference &&
                (v = Math.max(u[p], c[p])),
              Fn({}, p, v)
            );
          },
          secondary: function (p) {
            var v = p === 'right' ? 'left' : 'top',
              h = u[v];
            return (
              u[p] > c[p] &&
                !t.escapeWithReference &&
                (h = Math.min(
                  u[v],
                  c[p] - (p === 'right' ? u.width : u.height)
                )),
              Fn({}, v, h)
            );
          },
        };
      return (
        d.forEach(function (p) {
          var v = ['left', 'top'].indexOf(p) !== -1 ? 'primary' : 'secondary';
          u = Xe({}, u, m[v](p));
        }),
        (e.offsets.popper = u),
        e
      );
    }
    function bp(e) {
      var t = e.placement,
        n = t.split('-')[0],
        r = t.split('-')[1];
      if (r) {
        var i = e.offsets,
          o = i.reference,
          l = i.popper,
          s = ['bottom', 'top'].indexOf(n) !== -1,
          c = s ? 'left' : 'top',
          d = s ? 'width' : 'height',
          u = { start: Fn({}, c, o[c]), end: Fn({}, c, o[c] + o[d] - l[d]) };
        e.offsets.popper = Xe({}, l, u[r]);
      }
      return e;
    }
    function Ep(e) {
      if (!ps(e.instance.modifiers, 'hide', 'preventOverflow')) return e;
      var t = e.offsets.reference,
        n = Fa(e.instance.modifiers, function (r) {
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
    function kp(e) {
      var t = e.placement,
        n = t.split('-')[0],
        r = e.offsets,
        i = r.popper,
        o = r.reference,
        l = ['left', 'right'].indexOf(n) !== -1,
        s = ['top', 'left'].indexOf(n) === -1;
      return (
        (i[l ? 'left' : 'top'] = o[n] - (s ? i[l ? 'width' : 'height'] : 0)),
        (e.placement = Cr(t)),
        (e.offsets.popper = Ht(i)),
        e
      );
    }
    var wp = {
        shift: { order: 100, enabled: !0, fn: bp },
        offset: { order: 200, enabled: !0, fn: vp, offset: 0 },
        preventOverflow: {
          order: 300,
          enabled: !0,
          fn: yp,
          priority: ['left', 'right', 'top', 'bottom'],
          padding: 5,
          boundariesElement: 'scrollParent',
        },
        keepTogether: { order: 400, enabled: !0, fn: hp },
        arrow: { order: 500, enabled: !0, fn: up, element: '[x-arrow]' },
        flip: {
          order: 600,
          enabled: !0,
          fn: pp,
          behavior: 'flip',
          padding: 5,
          boundariesElement: 'viewport',
          flipVariations: !1,
          flipVariationsByContent: !1,
        },
        inner: { order: 700, enabled: !1, fn: kp },
        hide: { order: 800, enabled: !0, fn: Ep },
        computeStyle: {
          order: 850,
          enabled: !0,
          fn: dp,
          gpuAcceleration: !0,
          x: 'bottom',
          y: 'right',
        },
        applyStyle: {
          order: 900,
          enabled: !0,
          fn: op,
          onLoad: lp,
          gpuAcceleration: void 0,
        },
      },
      Cp = {
        placement: 'bottom',
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function () {},
        onUpdate: function () {},
        modifiers: wp,
      },
      Hr = (function () {
        function e(t, n) {
          var r = this,
            i =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : {};
          q4(this, e),
            (this.scheduleUpdate = function () {
              return requestAnimationFrame(r.update);
            }),
            (this.update = $4(this.update.bind(this))),
            (this.options = Xe({}, e.Defaults, i)),
            (this.state = {
              isDestroyed: !1,
              isCreated: !1,
              scrollParents: [],
            }),
            (this.reference = t && t.jquery ? t[0] : t),
            (this.popper = n && n.jquery ? n[0] : n),
            (this.options.modifiers = {}),
            Object.keys(Xe({}, e.Defaults.modifiers, i.modifiers)).forEach(
              function (l) {
                r.options.modifiers[l] = Xe(
                  {},
                  e.Defaults.modifiers[l] || {},
                  i.modifiers ? i.modifiers[l] : {}
                );
              }
            ),
            (this.modifiers = Object.keys(this.options.modifiers)
              .map(function (l) {
                return Xe({ name: l }, r.options.modifiers[l]);
              })
              .sort(function (l, s) {
                return l.order - s.order;
              })),
            this.modifiers.forEach(function (l) {
              l.enabled &&
                es(l.onLoad) &&
                l.onLoad(r.reference, r.popper, r.options, l, r.state);
            }),
            this.update();
          var o = this.options.eventsEnabled;
          o && this.enableEventListeners(), (this.state.eventsEnabled = o);
        }
        return (
          Y4(e, [
            {
              key: 'update',
              value: function () {
                return X4.call(this);
              },
            },
            {
              key: 'destroy',
              value: function () {
                return ep.call(this);
              },
            },
            {
              key: 'enableEventListeners',
              value: function () {
                return np.call(this);
              },
            },
            {
              key: 'disableEventListeners',
              value: function () {
                return rp.call(this);
              },
            },
          ]),
          e
        );
      })();
    Hr.Utils = window.PopperUtils;
    Hr.placements = hs;
    Hr.Defaults = Cp;
    var Xl = Hr,
      eo = lt(io()),
      xp = ['innerHTML', 'ownerDocument', 'style', 'attributes', 'nodeValue'],
      Sp = [
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
      ],
      Mp = [
        'bigint',
        'boolean',
        'null',
        'number',
        'string',
        'symbol',
        'undefined',
      ];
    function Dr(e) {
      var t = Object.prototype.toString.call(e).slice(8, -1);
      if (/HTML\w+Element/.test(t)) return 'HTMLElement';
      if (Np(t)) return t;
    }
    function ut(e) {
      return function (t) {
        return Dr(t) === e;
      };
    }
    function Np(e) {
      return Sp.includes(e);
    }
    function _n(e) {
      return function (t) {
        return typeof t === e;
      };
    }
    function Fp(e) {
      return Mp.includes(e);
    }
    function T(e) {
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
      if (T.array(e)) return 'Array';
      if (T.plainFunction(e)) return 'Function';
      var t = Dr(e);
      return t || 'Object';
    }
    T.array = Array.isArray;
    T.arrayOf = function (e, t) {
      return !T.array(e) && !T.function(t)
        ? !1
        : e.every(function (n) {
            return t(n);
          });
    };
    T.asyncGeneratorFunction = function (e) {
      return Dr(e) === 'AsyncGeneratorFunction';
    };
    T.asyncFunction = ut('AsyncFunction');
    T.bigint = _n('bigint');
    T.boolean = function (e) {
      return e === !0 || e === !1;
    };
    T.date = ut('Date');
    T.defined = function (e) {
      return !T.undefined(e);
    };
    T.domElement = function (e) {
      return (
        T.object(e) &&
        !T.plainObject(e) &&
        e.nodeType === 1 &&
        T.string(e.nodeName) &&
        xp.every(function (t) {
          return t in e;
        })
      );
    };
    T.empty = function (e) {
      return (
        (T.string(e) && e.length === 0) ||
        (T.array(e) && e.length === 0) ||
        (T.object(e) &&
          !T.map(e) &&
          !T.set(e) &&
          Object.keys(e).length === 0) ||
        (T.set(e) && e.size === 0) ||
        (T.map(e) && e.size === 0)
      );
    };
    T.error = ut('Error');
    T.function = _n('function');
    T.generator = function (e) {
      return T.iterable(e) && T.function(e.next) && T.function(e.throw);
    };
    T.generatorFunction = ut('GeneratorFunction');
    T.instanceOf = function (e, t) {
      return !e || !t ? !1 : Object.getPrototypeOf(e) === t.prototype;
    };
    T.iterable = function (e) {
      return !T.nullOrUndefined(e) && T.function(e[Symbol.iterator]);
    };
    T.map = ut('Map');
    T.nan = function (e) {
      return Number.isNaN(e);
    };
    T.null = function (e) {
      return e === null;
    };
    T.nullOrUndefined = function (e) {
      return T.null(e) || T.undefined(e);
    };
    T.number = function (e) {
      return _n('number')(e) && !T.nan(e);
    };
    T.numericString = function (e) {
      return T.string(e) && e.length > 0 && !Number.isNaN(Number(e));
    };
    T.object = function (e) {
      return !T.nullOrUndefined(e) && (T.function(e) || typeof e == 'object');
    };
    T.oneOf = function (e, t) {
      return T.array(e) ? e.indexOf(t) > -1 : !1;
    };
    T.plainFunction = ut('Function');
    T.plainObject = function (e) {
      if (Dr(e) !== 'Object') return !1;
      var t = Object.getPrototypeOf(e);
      return t === null || t === Object.getPrototypeOf({});
    };
    T.primitive = function (e) {
      return T.null(e) || Fp(typeof e);
    };
    T.promise = ut('Promise');
    T.propertyOf = function (e, t, n) {
      if (!T.object(e) || !t) return !1;
      var r = e[t];
      return T.function(n) ? n(r) : T.defined(r);
    };
    T.regexp = ut('RegExp');
    T.set = ut('Set');
    T.string = _n('string');
    T.symbol = _n('symbol');
    T.undefined = _n('undefined');
    T.weakMap = ut('WeakMap');
    T.weakSet = ut('WeakSet');
    var P = T;
    function fs(e) {
      return function (t) {
        return typeof t === e;
      };
    }
    var Ap = fs('function'),
      Op = function (e) {
        return e === null;
      },
      e1 = function (e) {
        return Object.prototype.toString.call(e).slice(8, -1) === 'RegExp';
      },
      t1 = function (e) {
        return !Lp(e) && !Op(e) && (Ap(e) || typeof e == 'object');
      },
      Lp = fs('undefined'),
      to = function (e) {
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
      };
    function _p(e, t) {
      var n = e.length;
      if (n !== t.length) return !1;
      for (var r = n; r-- !== 0; ) if (!We(e[r], t[r])) return !1;
      return !0;
    }
    function Tp(e, t) {
      if (e.byteLength !== t.byteLength) return !1;
      for (
        var n = new DataView(e.buffer),
          r = new DataView(t.buffer),
          i = e.byteLength;
        i--;

      )
        if (n.getUint8(i) !== r.getUint8(i)) return !1;
      return !0;
    }
    function Zp(e, t) {
      var n, r, i, o;
      if (e.size !== t.size) return !1;
      try {
        for (var l = to(e.entries()), s = l.next(); !s.done; s = l.next()) {
          var c = s.value;
          if (!t.has(c[0])) return !1;
        }
      } catch (m) {
        n = { error: m };
      } finally {
        try {
          s && !s.done && (r = l.return) && r.call(l);
        } finally {
          if (n) throw n.error;
        }
      }
      try {
        for (var d = to(e.entries()), u = d.next(); !u.done; u = d.next()) {
          var c = u.value;
          if (!We(c[1], t.get(c[0]))) return !1;
        }
      } catch (m) {
        i = { error: m };
      } finally {
        try {
          u && !u.done && (o = d.return) && o.call(d);
        } finally {
          if (i) throw i.error;
        }
      }
      return !0;
    }
    function Ip(e, t) {
      var n, r;
      if (e.size !== t.size) return !1;
      try {
        for (var i = to(e.entries()), o = i.next(); !o.done; o = i.next()) {
          var l = o.value;
          if (!t.has(l[0])) return !1;
        }
      } catch (s) {
        n = { error: s };
      } finally {
        try {
          o && !o.done && (r = i.return) && r.call(i);
        } finally {
          if (n) throw n.error;
        }
      }
      return !0;
    }
    function We(e, t) {
      if (e === t) return !0;
      if (e && t1(e) && t && t1(t)) {
        if (e.constructor !== t.constructor) return !1;
        if (Array.isArray(e) && Array.isArray(t)) return _p(e, t);
        if (e instanceof Map && t instanceof Map) return Zp(e, t);
        if (e instanceof Set && t instanceof Set) return Ip(e, t);
        if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) return Tp(e, t);
        if (e1(e) && e1(t)) return e.source === t.source && e.flags === t.flags;
        if (e.valueOf !== Object.prototype.valueOf)
          return e.valueOf() === t.valueOf();
        if (e.toString !== Object.prototype.toString)
          return e.toString() === t.toString();
        var n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (var i = n.length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(t, n[i])) return !1;
        for (var i = n.length; i-- !== 0; ) {
          var o = n[i];
          if (!(o === '_owner' && e.$$typeof) && !We(e[o], t[o])) return !1;
        }
        return !0;
      }
      return Number.isNaN(e) && Number.isNaN(t) ? !0 : e === t;
    }
    function Rp() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return e.every(function (n) {
        return P.string(n) || P.array(n) || P.plainObject(n);
      });
    }
    function Bp(e, t, n) {
      return gs(e, t)
        ? [e, t].every(P.array)
          ? !e.some(o1(n)) && t.some(o1(n))
          : [e, t].every(P.plainObject)
          ? !Object.entries(e).some(i1(n)) && Object.entries(t).some(i1(n))
          : t === n
        : !1;
    }
    function n1(e, t, n) {
      var r = n.actual,
        i = n.key,
        o = n.previous,
        l = n.type,
        s = bt(e, i),
        c = bt(t, i),
        d = [s, c].every(P.number) && (l === 'increased' ? s < c : s > c);
      return (
        P.undefined(r) || (d = d && c === r),
        P.undefined(o) || (d = d && s === o),
        d
      );
    }
    function a1(e, t, n) {
      var r = n.key,
        i = n.type,
        o = n.value,
        l = bt(e, r),
        s = bt(t, r),
        c = i === 'added' ? l : s,
        d = i === 'added' ? s : l;
      if (!P.nullOrUndefined(o)) {
        if (P.defined(c)) {
          if (P.array(c) || P.plainObject(c)) return Bp(c, d, o);
        } else return We(d, o);
        return !1;
      }
      return [l, s].every(P.array)
        ? !d.every(_o(c))
        : [l, s].every(P.plainObject)
        ? Pp(Object.keys(c), Object.keys(d))
        : ![l, s].every(function (u) {
            return P.primitive(u) && P.defined(u);
          }) &&
          (i === 'added'
            ? !P.defined(l) && P.defined(s)
            : P.defined(l) && !P.defined(s));
    }
    function r1(e, t, n) {
      var r = n === void 0 ? {} : n,
        i = r.key,
        o = bt(e, i),
        l = bt(t, i);
      if (!gs(o, l)) throw new TypeError('Inputs have different types');
      if (!Rp(o, l)) throw new TypeError("Inputs don't have length");
      return (
        [o, l].every(P.plainObject) &&
          ((o = Object.keys(o)), (l = Object.keys(l))),
        [o, l]
      );
    }
    function i1(e) {
      return function (t) {
        var n = t[0],
          r = t[1];
        return P.array(e)
          ? We(e, r) ||
              e.some(function (i) {
                return We(i, r) || (P.array(r) && _o(r)(i));
              })
          : P.plainObject(e) && e[n]
          ? !!e[n] && We(e[n], r)
          : We(e, r);
      };
    }
    function Pp(e, t) {
      return t.some(function (n) {
        return !e.includes(n);
      });
    }
    function o1(e) {
      return function (t) {
        return P.array(e)
          ? e.some(function (n) {
              return We(n, t) || (P.array(t) && _o(t)(n));
            })
          : We(e, t);
      };
    }
    function $n(e, t) {
      return P.array(e)
        ? e.some(function (n) {
            return We(n, t);
          })
        : We(e, t);
    }
    function _o(e) {
      return function (t) {
        return e.some(function (n) {
          return We(n, t);
        });
      };
    }
    function gs() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return (
        e.every(P.array) ||
        e.every(P.number) ||
        e.every(P.plainObject) ||
        e.every(P.string)
      );
    }
    function bt(e, t) {
      if (P.plainObject(e) || P.array(e)) {
        if (P.string(t)) {
          var n = t.split('.');
          return n.reduce(function (r, i) {
            return r && r[i];
          }, e);
        }
        return P.number(t) ? e[t] : e;
      }
      return e;
    }
    function Vp(e, t) {
      if ([e, t].some(P.nullOrUndefined))
        throw new Error('Missing required parameters');
      if (
        ![e, t].every(function (m) {
          return P.plainObject(m) || P.array(m);
        })
      )
        throw new Error('Expected plain objects or array');
      var n = function (m, p) {
          try {
            return a1(e, t, { key: m, type: 'added', value: p });
          } catch {
            return !1;
          }
        },
        r = function (m, p, v) {
          try {
            var h = bt(e, m),
              b = bt(t, m),
              k = P.defined(p),
              y = P.defined(v);
            if (k || y) {
              var g = y ? $n(v, h) : !$n(p, h),
                f = $n(p, b);
              return g && f;
            }
            return [h, b].every(P.array) || [h, b].every(P.plainObject)
              ? !We(h, b)
              : h !== b;
          } catch {
            return !1;
          }
        },
        i = function (m, p, v) {
          if (!P.defined(m)) return !1;
          try {
            var h = bt(e, m),
              b = bt(t, m),
              k = P.defined(v);
            return $n(p, h) && (k ? $n(v, b) : !k);
          } catch {
            return !1;
          }
        },
        o = function (m, p) {
          return P.defined(m) ? r(m, p) : !1;
        },
        l = function (m, p, v) {
          if (!P.defined(m)) return !1;
          try {
            return n1(e, t, {
              key: m,
              actual: p,
              previous: v,
              type: 'decreased',
            });
          } catch {
            return !1;
          }
        },
        s = function (m) {
          try {
            var p = r1(e, t, { key: m }),
              v = p[0],
              h = p[1];
            return !!v.length && !h.length;
          } catch {
            return !1;
          }
        },
        c = function (m) {
          try {
            var p = r1(e, t, { key: m }),
              v = p[0],
              h = p[1];
            return !v.length && !!h.length;
          } catch {
            return !1;
          }
        },
        d = function (m, p, v) {
          if (!P.defined(m)) return !1;
          try {
            return n1(e, t, {
              key: m,
              actual: p,
              previous: v,
              type: 'increased',
            });
          } catch {
            return !1;
          }
        },
        u = function (m, p) {
          try {
            return a1(e, t, { key: m, type: 'removed', value: p });
          } catch {
            return !1;
          }
        };
      return {
        added: n,
        changed: r,
        changedFrom: i,
        changedTo: o,
        decreased: l,
        emptied: s,
        filled: c,
        increased: d,
        removed: u,
      };
    }
    function l1(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Ce(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2
          ? l1(Object(n), !0).forEach(function (r) {
              Ie(e, r, n[r]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : l1(Object(n)).forEach(function (r) {
              Object.defineProperty(
                e,
                r,
                Object.getOwnPropertyDescriptor(n, r)
              );
            });
      }
      return e;
    }
    function Aa(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function s1(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(e, ys(r.key), r);
      }
    }
    function Oa(e, t, n) {
      return (
        t && s1(e.prototype, t),
        n && s1(e, n),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        e
      );
    }
    function Ie(e, t, n) {
      return (
        (t = ys(t)),
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
    function La(e, t) {
      if (typeof t != 'function' && t !== null)
        throw new TypeError(
          'Super expression must either be null or a function'
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        t && no(e, t);
    }
    function xr(e) {
      return (
        (xr = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            }),
        xr(e)
      );
    }
    function no(e, t) {
      return (
        (no = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (n, r) {
              return (n.__proto__ = r), n;
            }),
        no(e, t)
      );
    }
    function jp() {
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
    function Hp(e, t) {
      if (e == null) return {};
      var n = {},
        r = Object.keys(e),
        i,
        o;
      for (o = 0; o < r.length; o++)
        (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
      return n;
    }
    function vs(e, t) {
      if (e == null) return {};
      var n = Hp(e, t),
        r,
        i;
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (i = 0; i < o.length; i++)
          (r = o[i]),
            !(t.indexOf(r) >= 0) &&
              Object.prototype.propertyIsEnumerable.call(e, r) &&
              (n[r] = e[r]);
      }
      return n;
    }
    function Mt(e) {
      if (e === void 0)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function Dp(e, t) {
      if (t && (typeof t == 'object' || typeof t == 'function')) return t;
      if (t !== void 0)
        throw new TypeError(
          'Derived constructors may only return object or undefined'
        );
      return Mt(e);
    }
    function _a(e) {
      var t = jp();
      return function () {
        var n = xr(e),
          r;
        if (t) {
          var i = xr(this).constructor;
          r = Reflect.construct(n, arguments, i);
        } else r = n.apply(this, arguments);
        return Dp(this, r);
      };
    }
    function zp(e, t) {
      if (typeof e != 'object' || e === null) return e;
      var n = e[Symbol.toPrimitive];
      if (n !== void 0) {
        var r = n.call(e, t || 'default');
        if (typeof r != 'object') return r;
        throw new TypeError('@@toPrimitive must return a primitive value.');
      }
      return (t === 'string' ? String : Number)(e);
    }
    function ys(e) {
      var t = zp(e, 'string');
      return typeof t == 'symbol' ? t : String(t);
    }
    var Up = { flip: { padding: 20 }, preventOverflow: { padding: 10 } },
      $p =
        'The typeValidator argument must be a function with the signature function(props, propName, componentName).',
      Wp = 'The error message is optional, but must be a string if provided.';
    function Gp(e, t, n, r) {
      return typeof e == 'boolean'
        ? e
        : typeof e == 'function'
        ? e(t, n, r)
        : e
        ? !!e
        : !1;
    }
    function qp(e, t) {
      return Object.hasOwnProperty.call(e, t);
    }
    function Yp(e, t, n, r) {
      return r
        ? new Error(r)
        : new Error(
            'Required '
              .concat(e[t], ' `')
              .concat(t, '` was not specified in `')
              .concat(n, '`.')
          );
    }
    function Qp(e, t) {
      if (typeof e != 'function') throw new TypeError($p);
      if (t && typeof t != 'string') throw new TypeError(Wp);
    }
    function c1(e, t, n) {
      return (
        Qp(e, n),
        function (r, i, o) {
          for (
            var l = arguments.length, s = new Array(l > 3 ? l - 3 : 0), c = 3;
            c < l;
            c++
          )
            s[c - 3] = arguments[c];
          return Gp(t, r, i, o)
            ? qp(r, i)
              ? e.apply(void 0, [r, i, o].concat(s))
              : Yp(r, i, o, n)
            : e.apply(void 0, [r, i, o].concat(s));
        }
      );
    }
    var ae = {
        INIT: 'init',
        IDLE: 'idle',
        OPENING: 'opening',
        OPEN: 'open',
        CLOSING: 'closing',
        ERROR: 'error',
      },
      Wn = Hn.createPortal !== void 0;
    function ht() {
      return !!(
        typeof window < 'u' &&
        window.document &&
        window.document.createElement
      );
    }
    function wi() {
      return 'ontouchstart' in window && /Mobi/.test(navigator.userAgent);
    }
    function Wa(e) {
      var t = e.title,
        n = e.data,
        r = e.warn,
        i = r === void 0 ? !1 : r,
        o = e.debug,
        l = o === void 0 ? !1 : o,
        s = i ? console.warn || console.error : console.log;
      l &&
        t &&
        n &&
        (console.groupCollapsed(
          '%creact-floater: '.concat(t),
          'color: #9b00ff; font-weight: bold; font-size: 12px;'
        ),
        Array.isArray(n)
          ? n.forEach(function (c) {
              P.plainObject(c) && c.key
                ? s.apply(console, [c.key, c.value])
                : s.apply(console, [c]);
            })
          : s.apply(console, [n]),
        console.groupEnd());
    }
    function Kp(e, t, n) {
      var r =
        arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      e.addEventListener(t, n, r);
    }
    function Jp(e, t, n) {
      var r =
        arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      e.removeEventListener(t, n, r);
    }
    function Xp(e, t, n) {
      var r =
          arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1,
        i;
      (i = function (o) {
        n(o), Jp(e, t, i);
      }),
        Kp(e, t, i, r);
    }
    function d1() {}
    var bs = (function (e) {
      La(n, e);
      var t = _a(n);
      function n() {
        return Aa(this, n), t.apply(this, arguments);
      }
      return (
        Oa(n, [
          {
            key: 'componentDidMount',
            value: function () {
              ht() &&
                (this.node || this.appendNode(), Wn || this.renderPortal());
            },
          },
          {
            key: 'componentDidUpdate',
            value: function () {
              ht() && (Wn || this.renderPortal());
            },
          },
          {
            key: 'componentWillUnmount',
            value: function () {
              !ht() ||
                !this.node ||
                (Wn || Hn.unmountComponentAtNode(this.node),
                this.node &&
                  this.node.parentNode === document.body &&
                  (document.body.removeChild(this.node), (this.node = void 0)));
            },
          },
          {
            key: 'appendNode',
            value: function () {
              var r = this.props,
                i = r.id,
                o = r.zIndex;
              this.node ||
                ((this.node = document.createElement('div')),
                i && (this.node.id = i),
                o && (this.node.style.zIndex = o),
                document.body.appendChild(this.node));
            },
          },
          {
            key: 'renderPortal',
            value: function () {
              if (!ht()) return null;
              var r = this.props,
                i = r.children,
                o = r.setRef;
              if ((this.node || this.appendNode(), Wn))
                return Hn.createPortal(i, this.node);
              var l = Hn.unstable_renderSubtreeIntoContainer(
                this,
                i.length > 1 ? a.createElement('div', null, i) : i[0],
                this.node
              );
              return o(l), null;
            },
          },
          {
            key: 'renderReact16',
            value: function () {
              var r = this.props,
                i = r.hasChildren,
                o = r.placement,
                l = r.target;
              return i
                ? this.renderPortal()
                : l || o === 'center'
                ? this.renderPortal()
                : null;
            },
          },
          {
            key: 'render',
            value: function () {
              return Wn ? this.renderReact16() : null;
            },
          },
        ]),
        n
      );
    })(a.Component);
    Ie(bs, 'propTypes', {
      children: O.default.oneOfType([O.default.element, O.default.array]),
      hasChildren: O.default.bool,
      id: O.default.oneOfType([O.default.string, O.default.number]),
      placement: O.default.string,
      setRef: O.default.func.isRequired,
      target: O.default.oneOfType([O.default.object, O.default.string]),
      zIndex: O.default.number,
    });
    var Es = (function (e) {
      La(n, e);
      var t = _a(n);
      function n() {
        return Aa(this, n), t.apply(this, arguments);
      }
      return (
        Oa(n, [
          {
            key: 'parentStyle',
            get: function () {
              var r = this.props,
                i = r.placement,
                o = r.styles,
                l = o.arrow.length,
                s = {
                  pointerEvents: 'none',
                  position: 'absolute',
                  width: '100%',
                };
              return (
                i.startsWith('top')
                  ? ((s.bottom = 0),
                    (s.left = 0),
                    (s.right = 0),
                    (s.height = l))
                  : i.startsWith('bottom')
                  ? ((s.left = 0), (s.right = 0), (s.top = 0), (s.height = l))
                  : i.startsWith('left')
                  ? ((s.right = 0), (s.top = 0), (s.bottom = 0))
                  : i.startsWith('right') && ((s.left = 0), (s.top = 0)),
                s
              );
            },
          },
          {
            key: 'render',
            value: function () {
              var r = this.props,
                i = r.placement,
                o = r.setArrowRef,
                l = r.styles,
                s = l.arrow,
                c = s.color,
                d = s.display,
                u = s.length,
                m = s.margin,
                p = s.position,
                v = s.spread,
                h = { display: d, position: p },
                b,
                k = v,
                y = u;
              return (
                i.startsWith('top')
                  ? ((b = '0,0 '
                      .concat(k / 2, ',')
                      .concat(y, ' ')
                      .concat(k, ',0')),
                    (h.bottom = 0),
                    (h.marginLeft = m),
                    (h.marginRight = m))
                  : i.startsWith('bottom')
                  ? ((b = ''
                      .concat(k, ',')
                      .concat(y, ' ')
                      .concat(k / 2, ',0 0,')
                      .concat(y)),
                    (h.top = 0),
                    (h.marginLeft = m),
                    (h.marginRight = m))
                  : i.startsWith('left')
                  ? ((y = v),
                    (k = u),
                    (b = '0,0 '
                      .concat(k, ',')
                      .concat(y / 2, ' 0,')
                      .concat(y)),
                    (h.right = 0),
                    (h.marginTop = m),
                    (h.marginBottom = m))
                  : i.startsWith('right') &&
                    ((y = v),
                    (k = u),
                    (b = ''
                      .concat(k, ',')
                      .concat(y, ' ')
                      .concat(k, ',0 0,')
                      .concat(y / 2)),
                    (h.left = 0),
                    (h.marginTop = m),
                    (h.marginBottom = m)),
                a.createElement(
                  'div',
                  { className: '__floater__arrow', style: this.parentStyle },
                  a.createElement(
                    'span',
                    { ref: o, style: h },
                    a.createElement(
                      'svg',
                      {
                        width: k,
                        height: y,
                        version: '1.1',
                        xmlns: 'http://www.w3.org/2000/svg',
                      },
                      a.createElement('polygon', { points: b, fill: c })
                    )
                  )
                )
              );
            },
          },
        ]),
        n
      );
    })(a.Component);
    Ie(Es, 'propTypes', {
      placement: O.default.string.isRequired,
      setArrowRef: O.default.func.isRequired,
      styles: O.default.object.isRequired,
    });
    var e3 = ['color', 'height', 'width'];
    function ks(e) {
      var t = e.handleClick,
        n = e.styles,
        r = n.color,
        i = n.height,
        o = n.width,
        l = vs(n, e3);
      return a.createElement(
        'button',
        { 'aria-label': 'close', onClick: t, style: l, type: 'button' },
        a.createElement(
          'svg',
          {
            width: ''.concat(o, 'px'),
            height: ''.concat(i, 'px'),
            viewBox: '0 0 18 18',
            version: '1.1',
            xmlns: 'http://www.w3.org/2000/svg',
            preserveAspectRatio: 'xMidYMid',
          },
          a.createElement(
            'g',
            null,
            a.createElement('path', {
              d: 'M8.13911129,9.00268191 L0.171521827,17.0258467 C-0.0498027049,17.248715 -0.0498027049,17.6098394 0.171521827,17.8327545 C0.28204354,17.9443526 0.427188206,17.9998706 0.572051765,17.9998706 C0.71714958,17.9998706 0.862013139,17.9443526 0.972581703,17.8327545 L9.0000937,9.74924618 L17.0276057,17.8327545 C17.1384085,17.9443526 17.2832721,17.9998706 17.4281356,17.9998706 C17.5729992,17.9998706 17.718097,17.9443526 17.8286656,17.8327545 C18.0499901,17.6098862 18.0499901,17.2487618 17.8286656,17.0258467 L9.86135722,9.00268191 L17.8340066,0.973848225 C18.0553311,0.750979934 18.0553311,0.389855532 17.8340066,0.16694039 C17.6126821,-0.0556467968 17.254037,-0.0556467968 17.0329467,0.16694039 L9.00042166,8.25611765 L0.967006424,0.167268345 C0.745681892,-0.0553188426 0.387317931,-0.0553188426 0.165993399,0.167268345 C-0.0553311331,0.390136635 -0.0553311331,0.751261038 0.165993399,0.974176179 L8.13920499,9.00268191 L8.13911129,9.00268191 Z',
              fill: r,
            })
          )
        )
      );
    }
    ks.propTypes = {
      handleClick: O.default.func.isRequired,
      styles: O.default.object.isRequired,
    };
    function ws(e) {
      var t = e.content,
        n = e.footer,
        r = e.handleClick,
        i = e.open,
        o = e.positionWrapper,
        l = e.showCloseButton,
        s = e.title,
        c = e.styles,
        d = {
          content: a.isValidElement(t)
            ? t
            : a.createElement(
                'div',
                { className: '__floater__content', style: c.content },
                t
              ),
        };
      return (
        s &&
          (d.title = a.isValidElement(s)
            ? s
            : a.createElement(
                'div',
                { className: '__floater__title', style: c.title },
                s
              )),
        n &&
          (d.footer = a.isValidElement(n)
            ? n
            : a.createElement(
                'div',
                { className: '__floater__footer', style: c.footer },
                n
              )),
        (l || o) &&
          !P.boolean(i) &&
          (d.close = a.createElement(ks, { styles: c.close, handleClick: r })),
        a.createElement(
          'div',
          { className: '__floater__container', style: c.container },
          d.close,
          d.title,
          d.content,
          d.footer
        )
      );
    }
    ws.propTypes = {
      content: O.default.node.isRequired,
      footer: O.default.node,
      handleClick: O.default.func.isRequired,
      open: O.default.bool,
      positionWrapper: O.default.bool.isRequired,
      showCloseButton: O.default.bool.isRequired,
      styles: O.default.object.isRequired,
      title: O.default.node,
    };
    var Cs = (function (e) {
      La(n, e);
      var t = _a(n);
      function n() {
        return Aa(this, n), t.apply(this, arguments);
      }
      return (
        Oa(n, [
          {
            key: 'style',
            get: function () {
              var r = this.props,
                i = r.disableAnimation,
                o = r.component,
                l = r.placement,
                s = r.hideArrow,
                c = r.status,
                d = r.styles,
                u = d.arrow.length,
                m = d.floater,
                p = d.floaterCentered,
                v = d.floaterClosing,
                h = d.floaterOpening,
                b = d.floaterWithAnimation,
                k = d.floaterWithComponent,
                y = {};
              return (
                s ||
                  (l.startsWith('top')
                    ? (y.padding = '0 0 '.concat(u, 'px'))
                    : l.startsWith('bottom')
                    ? (y.padding = ''.concat(u, 'px 0 0'))
                    : l.startsWith('left')
                    ? (y.padding = '0 '.concat(u, 'px 0 0'))
                    : l.startsWith('right') &&
                      (y.padding = '0 0 0 '.concat(u, 'px'))),
                [ae.OPENING, ae.OPEN].indexOf(c) !== -1 &&
                  (y = Ce(Ce({}, y), h)),
                c === ae.CLOSING && (y = Ce(Ce({}, y), v)),
                c === ae.OPEN && !i && (y = Ce(Ce({}, y), b)),
                l === 'center' && (y = Ce(Ce({}, y), p)),
                o && (y = Ce(Ce({}, y), k)),
                Ce(Ce({}, m), y)
              );
            },
          },
          {
            key: 'render',
            value: function () {
              var r = this.props,
                i = r.component,
                o = r.handleClick,
                l = r.hideArrow,
                s = r.setFloaterRef,
                c = r.status,
                d = {},
                u = ['__floater'];
              return (
                i
                  ? a.isValidElement(i)
                    ? (d.content = a.cloneElement(i, { closeFn: o }))
                    : (d.content = i({ closeFn: o }))
                  : (d.content = a.createElement(ws, this.props)),
                c === ae.OPEN && u.push('__floater__open'),
                l || (d.arrow = a.createElement(Es, this.props)),
                a.createElement(
                  'div',
                  { ref: s, className: u.join(' '), style: this.style },
                  a.createElement(
                    'div',
                    { className: '__floater__body' },
                    d.content,
                    d.arrow
                  )
                )
              );
            },
          },
        ]),
        n
      );
    })(a.Component);
    Ie(Cs, 'propTypes', {
      component: O.default.oneOfType([O.default.func, O.default.element]),
      content: O.default.node,
      disableAnimation: O.default.bool.isRequired,
      footer: O.default.node,
      handleClick: O.default.func.isRequired,
      hideArrow: O.default.bool.isRequired,
      open: O.default.bool,
      placement: O.default.string.isRequired,
      positionWrapper: O.default.bool.isRequired,
      setArrowRef: O.default.func.isRequired,
      setFloaterRef: O.default.func.isRequired,
      showCloseButton: O.default.bool,
      status: O.default.string.isRequired,
      styles: O.default.object.isRequired,
      title: O.default.node,
    });
    var xs = (function (e) {
      La(n, e);
      var t = _a(n);
      function n() {
        return Aa(this, n), t.apply(this, arguments);
      }
      return (
        Oa(n, [
          {
            key: 'render',
            value: function () {
              var r = this.props,
                i = r.children,
                o = r.handleClick,
                l = r.handleMouseEnter,
                s = r.handleMouseLeave,
                c = r.setChildRef,
                d = r.setWrapperRef,
                u = r.style,
                m = r.styles,
                p;
              if (i)
                if (a.Children.count(i) === 1)
                  if (!a.isValidElement(i))
                    p = a.createElement('span', null, i);
                  else {
                    var v = P.function(i.type) ? 'innerRef' : 'ref';
                    p = a.cloneElement(a.Children.only(i), Ie({}, v, c));
                  }
                else p = i;
              return p
                ? a.createElement(
                    'span',
                    {
                      ref: d,
                      style: Ce(Ce({}, m), u),
                      onClick: o,
                      onMouseEnter: l,
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
    })(a.Component);
    Ie(xs, 'propTypes', {
      children: O.default.node,
      handleClick: O.default.func.isRequired,
      handleMouseEnter: O.default.func.isRequired,
      handleMouseLeave: O.default.func.isRequired,
      setChildRef: O.default.func.isRequired,
      setWrapperRef: O.default.func.isRequired,
      style: O.default.object,
      styles: O.default.object.isRequired,
    });
    var t3 = { zIndex: 100 };
    function n3(e) {
      var t = (0, eo.default)(t3, e.options || {});
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
    var a3 = ['arrow', 'flip', 'offset'],
      r3 = ['position', 'top', 'right', 'bottom', 'left'],
      To = (function (e) {
        La(n, e);
        var t = _a(n);
        function n(r) {
          var i;
          return (
            Aa(this, n),
            (i = t.call(this, r)),
            Ie(Mt(i), 'setArrowRef', function (o) {
              i.arrowRef = o;
            }),
            Ie(Mt(i), 'setChildRef', function (o) {
              i.childRef = o;
            }),
            Ie(Mt(i), 'setFloaterRef', function (o) {
              i.floaterRef = o;
            }),
            Ie(Mt(i), 'setWrapperRef', function (o) {
              i.wrapperRef = o;
            }),
            Ie(Mt(i), 'handleTransitionEnd', function () {
              var o = i.state.status,
                l = i.props.callback;
              i.wrapperPopper && i.wrapperPopper.instance.update(),
                i.setState(
                  { status: o === ae.OPENING ? ae.OPEN : ae.IDLE },
                  function () {
                    var s = i.state.status;
                    l(s === ae.OPEN ? 'open' : 'close', i.props);
                  }
                );
            }),
            Ie(Mt(i), 'handleClick', function () {
              var o = i.props,
                l = o.event,
                s = o.open;
              if (!P.boolean(s)) {
                var c = i.state,
                  d = c.positionWrapper,
                  u = c.status;
                (i.event === 'click' || (i.event === 'hover' && d)) &&
                  (Wa({
                    title: 'click',
                    data: [
                      {
                        event: l,
                        status: u === ae.OPEN ? 'closing' : 'opening',
                      },
                    ],
                    debug: i.debug,
                  }),
                  i.toggle());
              }
            }),
            Ie(Mt(i), 'handleMouseEnter', function () {
              var o = i.props,
                l = o.event,
                s = o.open;
              if (!(P.boolean(s) || wi())) {
                var c = i.state.status;
                i.event === 'hover' &&
                  c === ae.IDLE &&
                  (Wa({
                    title: 'mouseEnter',
                    data: [{ key: 'originalEvent', value: l }],
                    debug: i.debug,
                  }),
                  clearTimeout(i.eventDelayTimeout),
                  i.toggle());
              }
            }),
            Ie(Mt(i), 'handleMouseLeave', function () {
              var o = i.props,
                l = o.event,
                s = o.eventDelay,
                c = o.open;
              if (!(P.boolean(c) || wi())) {
                var d = i.state,
                  u = d.status,
                  m = d.positionWrapper;
                i.event === 'hover' &&
                  (Wa({
                    title: 'mouseLeave',
                    data: [{ key: 'originalEvent', value: l }],
                    debug: i.debug,
                  }),
                  s
                    ? [ae.OPENING, ae.OPEN].indexOf(u) !== -1 &&
                      !m &&
                      !i.eventDelayTimeout &&
                      (i.eventDelayTimeout = setTimeout(function () {
                        delete i.eventDelayTimeout, i.toggle();
                      }, s * 1e3))
                    : i.toggle(ae.IDLE));
              }
            }),
            (i.state = {
              currentPlacement: r.placement,
              needsUpdate: !1,
              positionWrapper: r.wrapperOptions.position && !!r.target,
              status: ae.INIT,
              statusWrapper: ae.INIT,
            }),
            (i._isMounted = !1),
            (i.hasMounted = !1),
            ht() &&
              window.addEventListener('load', function () {
                i.popper && i.popper.instance.update(),
                  i.wrapperPopper && i.wrapperPopper.instance.update();
              }),
            i
          );
        }
        return (
          Oa(n, [
            {
              key: 'componentDidMount',
              value: function () {
                if (ht()) {
                  var r = this.state.positionWrapper,
                    i = this.props,
                    o = i.children,
                    l = i.open,
                    s = i.target;
                  (this._isMounted = !0),
                    Wa({
                      title: 'init',
                      data: {
                        hasChildren: !!o,
                        hasTarget: !!s,
                        isControlled: P.boolean(l),
                        positionWrapper: r,
                        target: this.target,
                        floater: this.floaterRef,
                      },
                      debug: this.debug,
                    }),
                    this.hasMounted ||
                      (this.initPopper(), (this.hasMounted = !0)),
                    !o && s && P.boolean(l);
                }
              },
            },
            {
              key: 'componentDidUpdate',
              value: function (r, i) {
                if (ht()) {
                  var o = this.props,
                    l = o.autoOpen,
                    s = o.open,
                    c = o.target,
                    d = o.wrapperOptions,
                    u = Vp(i, this.state),
                    m = u.changedFrom,
                    p = u.changed;
                  if (r.open !== s) {
                    var v;
                    P.boolean(s) && (v = s ? ae.OPENING : ae.CLOSING),
                      this.toggle(v);
                  }
                  (r.wrapperOptions.position !== d.position ||
                    r.target !== c) &&
                    this.changeWrapperPosition(this.props),
                    p('status', ae.IDLE) && s
                      ? this.toggle(ae.OPEN)
                      : m('status', ae.INIT, ae.IDLE) &&
                        l &&
                        this.toggle(ae.OPEN),
                    this.popper &&
                      p('status', ae.OPENING) &&
                      this.popper.instance.update(),
                    this.floaterRef &&
                      (p('status', ae.OPENING) || p('status', ae.CLOSING)) &&
                      Xp(
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
                ht() &&
                  ((this._isMounted = !1),
                  this.popper && this.popper.instance.destroy(),
                  this.wrapperPopper && this.wrapperPopper.instance.destroy());
              },
            },
            {
              key: 'initPopper',
              value: function () {
                var r = this,
                  i =
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : this.target,
                  o = this.state.positionWrapper,
                  l = this.props,
                  s = l.disableFlip,
                  c = l.getPopper,
                  d = l.hideArrow,
                  u = l.offset,
                  m = l.placement,
                  p = l.wrapperOptions,
                  v =
                    m === 'top' || m === 'bottom'
                      ? 'flip'
                      : [
                          'right',
                          'bottom-end',
                          'top-end',
                          'left',
                          'top-start',
                          'bottom-start',
                        ];
                if (m === 'center') this.setState({ status: ae.IDLE });
                else if (i && this.floaterRef) {
                  var h = this.options,
                    b = h.arrow,
                    k = h.flip,
                    y = h.offset,
                    g = vs(h, a3);
                  new Xl(i, this.floaterRef, {
                    placement: m,
                    modifiers: Ce(
                      {
                        arrow: Ce({ enabled: !d, element: this.arrowRef }, b),
                        flip: Ce({ enabled: !s, behavior: v }, k),
                        offset: Ce({ offset: '0, '.concat(u, 'px') }, y),
                      },
                      g
                    ),
                    onCreate: function (E) {
                      var S;
                      if (
                        ((r.popper = E),
                        !(
                          (S = r.floaterRef) !== null &&
                          S !== void 0 &&
                          S.isConnected
                        ))
                      ) {
                        r.setState({ needsUpdate: !0 });
                        return;
                      }
                      c(E, 'floater'),
                        r._isMounted &&
                          r.setState({
                            currentPlacement: E.placement,
                            status: ae.IDLE,
                          }),
                        m !== E.placement &&
                          setTimeout(function () {
                            E.instance.update();
                          }, 1);
                    },
                    onUpdate: function (E) {
                      r.popper = E;
                      var S = r.state.currentPlacement;
                      r._isMounted &&
                        E.placement !== S &&
                        r.setState({ currentPlacement: E.placement });
                    },
                  });
                }
                if (o) {
                  var f = P.undefined(p.offset) ? 0 : p.offset;
                  new Xl(this.target, this.wrapperRef, {
                    placement: p.placement || m,
                    modifiers: {
                      arrow: { enabled: !1 },
                      offset: { offset: '0, '.concat(f, 'px') },
                      flip: { enabled: !1 },
                    },
                    onCreate: function (E) {
                      (r.wrapperPopper = E),
                        r._isMounted && r.setState({ statusWrapper: ae.IDLE }),
                        c(E, 'wrapper'),
                        m !== E.placement &&
                          setTimeout(function () {
                            E.instance.update();
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
                  var i;
                  (i = r.floaterRef) !== null &&
                    i !== void 0 &&
                    i.isConnected &&
                    (clearInterval(r.floaterRefInterval),
                    r.setState({ needsUpdate: !1 }),
                    r.initPopper());
                }, 50);
              },
            },
            {
              key: 'changeWrapperPosition',
              value: function (r) {
                var i = r.target,
                  o = r.wrapperOptions;
                this.setState({ positionWrapper: o.position && !!i });
              },
            },
            {
              key: 'toggle',
              value: function (r) {
                var i = this.state.status,
                  o = i === ae.OPEN ? ae.CLOSING : ae.OPENING;
                P.undefined(r) || (o = r), this.setState({ status: o });
              },
            },
            {
              key: 'debug',
              get: function () {
                var r = this.props.debug;
                return (
                  r ||
                  (ht() &&
                    'ReactFloaterDebug' in window &&
                    !!window.ReactFloaterDebug)
                );
              },
            },
            {
              key: 'event',
              get: function () {
                var r = this.props,
                  i = r.disableHoverToClick,
                  o = r.event;
                return o === 'hover' && wi() && !i ? 'click' : o;
              },
            },
            {
              key: 'options',
              get: function () {
                var r = this.props.options;
                return (0, eo.default)(Up, r || {});
              },
            },
            {
              key: 'styles',
              get: function () {
                var r = this,
                  i = this.state,
                  o = i.status,
                  l = i.positionWrapper,
                  s = i.statusWrapper,
                  c = this.props.styles,
                  d = (0, eo.default)(n3(c), c);
                if (l) {
                  var u;
                  [ae.IDLE].indexOf(o) === -1 || [ae.IDLE].indexOf(s) === -1
                    ? (u = d.wrapperPosition)
                    : (u = this.wrapperPopper.styles),
                    (d.wrapper = Ce(Ce({}, d.wrapper), u));
                }
                if (this.target) {
                  var m = window.getComputedStyle(this.target);
                  this.wrapperStyles
                    ? (d.wrapper = Ce(Ce({}, d.wrapper), this.wrapperStyles))
                    : ['relative', 'static'].indexOf(m.position) === -1 &&
                      ((this.wrapperStyles = {}),
                      l ||
                        (r3.forEach(function (p) {
                          r.wrapperStyles[p] = m[p];
                        }),
                        (d.wrapper = Ce(Ce({}, d.wrapper), this.wrapperStyles)),
                        (this.target.style.position = 'relative'),
                        (this.target.style.top = 'auto'),
                        (this.target.style.right = 'auto'),
                        (this.target.style.bottom = 'auto'),
                        (this.target.style.left = 'auto')));
                }
                return d;
              },
            },
            {
              key: 'target',
              get: function () {
                if (!ht()) return null;
                var r = this.props.target;
                return r
                  ? P.domElement(r)
                    ? r
                    : document.querySelector(r)
                  : this.childRef || this.wrapperRef;
              },
            },
            {
              key: 'render',
              value: function () {
                var r = this.state,
                  i = r.currentPlacement,
                  o = r.positionWrapper,
                  l = r.status,
                  s = this.props,
                  c = s.children,
                  d = s.component,
                  u = s.content,
                  m = s.disableAnimation,
                  p = s.footer,
                  v = s.hideArrow,
                  h = s.id,
                  b = s.open,
                  k = s.showCloseButton,
                  y = s.style,
                  g = s.target,
                  f = s.title,
                  E = a.createElement(
                    xs,
                    {
                      handleClick: this.handleClick,
                      handleMouseEnter: this.handleMouseEnter,
                      handleMouseLeave: this.handleMouseLeave,
                      setChildRef: this.setChildRef,
                      setWrapperRef: this.setWrapperRef,
                      style: y,
                      styles: this.styles.wrapper,
                    },
                    c
                  ),
                  S = {};
                return (
                  o ? (S.wrapperInPortal = E) : (S.wrapperAsChildren = E),
                  a.createElement(
                    'span',
                    null,
                    a.createElement(
                      bs,
                      {
                        hasChildren: !!c,
                        id: h,
                        placement: i,
                        setRef: this.setFloaterRef,
                        target: g,
                        zIndex: this.styles.options.zIndex,
                      },
                      a.createElement(Cs, {
                        component: d,
                        content: u,
                        disableAnimation: m,
                        footer: p,
                        handleClick: this.handleClick,
                        hideArrow: v || i === 'center',
                        open: b,
                        placement: i,
                        positionWrapper: o,
                        setArrowRef: this.setArrowRef,
                        setFloaterRef: this.setFloaterRef,
                        showCloseButton: k,
                        status: l,
                        styles: this.styles,
                        title: f,
                      }),
                      S.wrapperInPortal
                    ),
                    S.wrapperAsChildren
                  )
                );
              },
            },
          ]),
          n
        );
      })(a.Component);
    Ie(To, 'propTypes', {
      autoOpen: O.default.bool,
      callback: O.default.func,
      children: O.default.node,
      component: c1(
        O.default.oneOfType([O.default.func, O.default.element]),
        function (e) {
          return !e.content;
        }
      ),
      content: c1(O.default.node, function (e) {
        return !e.component;
      }),
      debug: O.default.bool,
      disableAnimation: O.default.bool,
      disableFlip: O.default.bool,
      disableHoverToClick: O.default.bool,
      event: O.default.oneOf(['hover', 'click']),
      eventDelay: O.default.number,
      footer: O.default.node,
      getPopper: O.default.func,
      hideArrow: O.default.bool,
      id: O.default.oneOfType([O.default.string, O.default.number]),
      offset: O.default.number,
      open: O.default.bool,
      options: O.default.object,
      placement: O.default.oneOf([
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
      showCloseButton: O.default.bool,
      style: O.default.object,
      styles: O.default.object,
      target: O.default.oneOfType([O.default.object, O.default.string]),
      title: O.default.node,
      wrapperOptions: O.default.shape({
        offset: O.default.number,
        placement: O.default.oneOf([
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
        position: O.default.bool,
      }),
    });
    Ie(To, 'defaultProps', {
      autoOpen: !1,
      callback: d1,
      debug: !1,
      disableAnimation: !1,
      disableFlip: !1,
      disableHoverToClick: !1,
      event: 'click',
      eventDelay: 0.4,
      getPopper: d1,
      hideArrow: !1,
      offset: 15,
      placement: 'bottom',
      showCloseButton: !1,
      styles: {},
      target: null,
      wrapperOptions: { position: !1 },
    });
    var i3 = lt(a5(), 1),
      o3 = Object.defineProperty,
      l3 = (e, t, n) =>
        t in e
          ? o3(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (e[t] = n),
      R = (e, t, n) => (l3(e, typeof t != 'symbol' ? t + '' : t, n), n),
      oe = {
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
      },
      at = {
        TOUR_START: 'tour:start',
        STEP_BEFORE: 'step:before',
        BEACON: 'beacon',
        TOOLTIP: 'tooltip',
        STEP_AFTER: 'step:after',
        TOUR_END: 'tour:end',
        TOUR_STATUS: 'tour:status',
        TARGET_NOT_FOUND: 'error:target_not_found',
        ERROR: 'error',
      },
      q = {
        INIT: 'init',
        READY: 'ready',
        BEACON: 'beacon',
        TOOLTIP: 'tooltip',
        COMPLETE: 'complete',
        ERROR: 'error',
      },
      K = {
        IDLE: 'idle',
        READY: 'ready',
        WAITING: 'waiting',
        RUNNING: 'running',
        PAUSED: 'paused',
        SKIPPED: 'skipped',
        FINISHED: 'finished',
        ERROR: 'error',
      };
    function Bt() {
      return !!(
        typeof window < 'u' &&
        window.document &&
        window.document.createElement
      );
    }
    function Ss(e) {
      return e ? e.getBoundingClientRect() : null;
    }
    function s3() {
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
    function jt(e) {
      return typeof e == 'string' ? document.querySelector(e) : e;
    }
    function c3(e) {
      return !e || e.nodeType !== 1 ? null : getComputedStyle(e);
    }
    function zr(e, t, n) {
      if (!e) return Yt();
      let r = (0, X0.default)(e);
      if (r) {
        if (r.isSameNode(Yt())) return n ? document : Yt();
        if (!(r.scrollHeight > r.offsetHeight) && !t)
          return (r.style.overflow = 'initial'), Yt();
      }
      return r;
    }
    function Ur(e, t) {
      if (!e) return !1;
      let n = zr(e, t);
      return n ? !n.isSameNode(Yt()) : !1;
    }
    function d3(e) {
      return e.offsetParent !== document.body;
    }
    function Ca(e, t = 'fixed') {
      if (!e || !(e instanceof HTMLElement)) return !1;
      let { nodeName: n } = e,
        r = c3(e);
      return n === 'BODY' || n === 'HTML'
        ? !1
        : r && r.position === t
        ? !0
        : e.parentNode
        ? Ca(e.parentNode, t)
        : !1;
    }
    function u3(e) {
      var t;
      if (!e) return !1;
      let n = e;
      for (; n && n !== document.body; ) {
        if (n instanceof HTMLElement) {
          let { display: r, visibility: i } = getComputedStyle(n);
          if (r === 'none' || i === 'hidden') return !1;
        }
        n = (t = n.parentElement) != null ? t : null;
      }
      return !0;
    }
    function m3(e, t, n) {
      var r;
      let i = Ss(e),
        o = zr(e, n),
        l = Ur(e, n),
        s = 0,
        c = (r = i?.top) != null ? r : 0;
      return (
        o instanceof HTMLElement &&
          ((s = o.scrollTop),
          !l && !Ca(e) && (c += s),
          o.isSameNode(Yt()) || (c += Yt().scrollTop)),
        Math.floor(c - t)
      );
    }
    function p3(e, t, n) {
      var r;
      if (!e) return 0;
      let { offsetTop: i = 0, scrollTop: o = 0 } =
          (r = (0, X0.default)(e)) != null ? r : {},
        l = e.getBoundingClientRect().top + o;
      i && (Ur(e, n) || d3(e)) && (l -= i);
      let s = Math.floor(l - t);
      return s < 0 ? 0 : s;
    }
    function Yt() {
      var e;
      return (e = document.scrollingElement) != null
        ? e
        : document.documentElement;
    }
    function h3(e, t) {
      let { duration: n, element: r } = t;
      return new Promise((i, o) => {
        let { scrollTop: l } = r,
          s = e > l ? e - l : l - e;
        P4.default.top(r, e, { duration: s < 100 ? 50 : n }, (c) =>
          c && c.message !== 'Element already at target scroll position'
            ? o(c)
            : i()
        );
      });
    }
    var Gn = Dn !== void 0;
    function Ms(e = navigator.userAgent) {
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
    function Pt(e) {
      let t = [],
        n = (r) => {
          if (typeof r == 'string' || typeof r == 'number') t.push(r);
          else if (Array.isArray(r)) r.forEach((i) => n(i));
          else if (ei(r)) {
            let { children: i } = r.props;
            Array.isArray(i) ? i.forEach((o) => n(o)) : n(i);
          }
        };
      return n(e), t.join(' ').trim();
    }
    function f3(e, t) {
      return !I.plainObject(e) || !I.array(t)
        ? !1
        : Object.keys(e).every((n) => t.includes(n));
    }
    function g3(e) {
      let t = /^#?([\da-f])([\da-f])([\da-f])$/i,
        n = e.replace(t, (i, o, l, s) => o + o + l + l + s + s),
        r = /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i.exec(n);
      return r
        ? [parseInt(r[1], 16), parseInt(r[2], 16), parseInt(r[3], 16)]
        : [];
    }
    function u1(e) {
      return e.disableBeacon || e.placement === 'center';
    }
    function m1() {
      return !['chrome', 'safari', 'firefox', 'opera'].includes(Ms());
    }
    function nn({ data: e, debug: t = !1, title: n, warn: r = !1 }) {
      let i = r ? console.warn || console.error : console.log;
      t &&
        (n && e
          ? (console.groupCollapsed(
              `%creact-joyride: ${n}`,
              'color: #ff0044; font-weight: bold; font-size: 12px;'
            ),
            Array.isArray(e)
              ? e.forEach((o) => {
                  I.plainObject(o) && o.key
                    ? i.apply(console, [o.key, o.value])
                    : i.apply(console, [o]);
                })
              : i.apply(console, [e]),
            console.groupEnd())
          : console.error('Missing title or data props'));
    }
    function v3(e) {
      let {
        isFirstStep: t,
        lifecycle: n,
        previousLifecycle: r,
        scrollToFirstStep: i,
        step: o,
        target: l,
      } = e;
      return (
        !o.disableScrolling &&
        (!t || i || n === q.TOOLTIP) &&
        o.placement !== 'center' &&
        (!o.isFixed || !Ca(l)) &&
        r !== n &&
        [q.BEACON, q.TOOLTIP].includes(n)
      );
    }
    var y3 = {
        options: { preventOverflow: { boundariesElement: 'scrollParent' } },
        wrapperOptions: { offset: -18, position: !0 },
      },
      Ns = {
        back: 'Back',
        close: 'Close',
        last: 'Last',
        next: 'Next',
        open: 'Open the dialog',
        skip: 'Skip',
      },
      b3 = {
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
        locale: Ns,
        showProgress: !1,
        showSkipButton: !1,
        spotlightClicks: !1,
        spotlightPadding: 10,
      },
      E3 = {
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
      },
      k3 = {
        arrowColor: '#fff',
        backgroundColor: '#fff',
        beaconSize: 36,
        overlayColor: 'rgba(0, 0, 0, 0.5)',
        primaryColor: '#f04',
        spotlightShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
        textColor: '#333',
        width: 380,
        zIndex: 100,
      },
      qn = {
        backgroundColor: 'transparent',
        border: 0,
        borderRadius: 0,
        color: '#555',
        cursor: 'pointer',
        fontSize: 16,
        lineHeight: 1,
        padding: 8,
        WebkitAppearance: 'none',
      },
      p1 = { borderRadius: 4, position: 'absolute' };
    function w3(e, t) {
      let n = (0, bi.default)(e ?? {}, t ?? {}),
        r = (0, bi.default)(k3, n.options || {}),
        { width: i } = r;
      window.innerWidth > 480 && (i = 380),
        'width' in r &&
          (i =
            typeof r.width == 'number' && window.innerWidth < r.width
              ? window.innerWidth - 30
              : r.width);
      let o = {
          bottom: 0,
          left: 0,
          overflow: 'hidden',
          position: 'absolute',
          right: 0,
          top: 0,
          zIndex: r.zIndex,
        },
        l = {
          beacon: {
            ...qn,
            display: 'inline-block',
            height: r.beaconSize,
            position: 'relative',
            width: r.beaconSize,
            zIndex: r.zIndex,
          },
          beaconInner: {
            animation: 'joyride-beacon-inner 1.2s infinite ease-in-out',
            backgroundColor: r.primaryColor,
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
            backgroundColor: `rgba(${g3(r.primaryColor).join(',')}, 0.2)`,
            border: `2px solid ${r.primaryColor}`,
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
            backgroundColor: r.backgroundColor,
            borderRadius: 5,
            boxSizing: 'border-box',
            color: r.textColor,
            fontSize: 16,
            maxWidth: '100%',
            padding: 15,
            position: 'relative',
            width: i,
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
            ...qn,
            backgroundColor: r.primaryColor,
            borderRadius: 4,
            color: '#fff',
          },
          buttonBack: {
            ...qn,
            color: r.primaryColor,
            marginLeft: 'auto',
            marginRight: 5,
          },
          buttonClose: {
            ...qn,
            color: r.textColor,
            height: 14,
            padding: 15,
            position: 'absolute',
            right: 0,
            top: 0,
            width: 14,
          },
          buttonSkip: { ...qn, color: r.textColor, fontSize: 14 },
          overlay: {
            ...o,
            backgroundColor: r.overlayColor,
            mixBlendMode: 'hard-light',
          },
          overlayLegacy: { ...o },
          overlayLegacyCenter: { ...o, backgroundColor: r.overlayColor },
          spotlight: { ...p1, backgroundColor: 'gray' },
          spotlightLegacy: {
            ...p1,
            boxShadow: `0 0 0 9999px ${r.overlayColor}, ${r.spotlightShadow}`,
          },
          floaterStyles: {
            arrow: { color: r.arrowColor },
            options: { zIndex: r.zIndex + 100 },
          },
          options: r,
        };
      return (0, bi.default)(l, n);
    }
    function C3(e) {
      return j4(
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
    function Yn(e, t) {
      var n, r, i, o, l, s;
      let c = e ?? {},
        d = $a.default.all([b3, C3(t), c], {
          isMergeableObject: I.plainObject,
        }),
        u = w3(t.styles, d.styles),
        m = Ur(jt(d.target), d.disableScrollParentFix),
        p = $a.default.all([
          y3,
          (n = t.floaterProps) != null ? n : {},
          (r = d.floaterProps) != null ? r : {},
        ]);
      return (
        (p.offset = d.offset),
        (p.styles = (0, $a.default)(
          (i = p.styles) != null ? i : {},
          u.floaterStyles
        )),
        (p.offset +=
          (l = (o = t.spotlightPadding) != null ? o : d.spotlightPadding) !=
          null
            ? l
            : 0),
        d.placementBeacon &&
          p.wrapperOptions &&
          (p.wrapperOptions.placement = d.placementBeacon),
        m &&
          p.options.preventOverflow &&
          (p.options.preventOverflow.boundariesElement = 'window'),
        {
          ...d,
          locale: $a.default.all([
            Ns,
            (s = t.locale) != null ? s : {},
            d.locale || {},
          ]),
          floaterProps: p,
          styles: V4(u, 'floaterStyles'),
        }
      );
    }
    function Fs(e, t = !1) {
      return I.plainObject(e)
        ? e.target
          ? !0
          : (nn({
              title: 'validateStep',
              data: 'target is missing from the step',
              warn: !0,
              debug: t,
            }),
            !1)
        : (nn({
            title: 'validateStep',
            data: 'step must be an object',
            warn: !0,
            debug: t,
          }),
          !1);
    }
    function h1(e, t = !1) {
      return I.array(e)
        ? e.every((n) => Fs(n, t))
        : (nn({
            title: 'validateSteps',
            data: 'steps must be an array',
            warn: !0,
            debug: t,
          }),
          !1);
    }
    var x3 = {
        action: 'init',
        controlled: !1,
        index: 0,
        lifecycle: q.INIT,
        size: 0,
        status: K.IDLE,
      },
      f1 = ['action', 'index', 'lifecycle', 'status'],
      S3 = class {
        constructor(e) {
          R(this, 'beaconPopper'),
            R(this, 'tooltipPopper'),
            R(this, 'data', new Map()),
            R(this, 'listener'),
            R(this, 'store', new Map()),
            R(this, 'addListener', (i) => {
              this.listener = i;
            }),
            R(this, 'setSteps', (i) => {
              let { size: o, status: l } = this.getState(),
                s = { size: i.length, status: l };
              this.data.set('steps', i),
                l === K.WAITING && !o && i.length && (s.status = K.RUNNING),
                this.setState(s);
            }),
            R(this, 'getPopper', (i) =>
              i === 'beacon' ? this.beaconPopper : this.tooltipPopper
            ),
            R(this, 'setPopper', (i, o) => {
              i === 'beacon'
                ? (this.beaconPopper = o)
                : (this.tooltipPopper = o);
            }),
            R(this, 'cleanupPoppers', () => {
              (this.beaconPopper = null), (this.tooltipPopper = null);
            }),
            R(this, 'close', () => {
              let { index: i, status: o } = this.getState();
              o === K.RUNNING &&
                this.setState({
                  ...this.getNextState({ action: oe.CLOSE, index: i + 1 }),
                });
            }),
            R(this, 'go', (i) => {
              let { controlled: o, status: l } = this.getState();
              if (o || l !== K.RUNNING) return;
              let s = this.getSteps()[i];
              this.setState({
                ...this.getNextState({ action: oe.GO, index: i }),
                status: s ? l : K.FINISHED,
              });
            }),
            R(this, 'info', () => this.getState()),
            R(this, 'next', () => {
              let { index: i, status: o } = this.getState();
              o === K.RUNNING &&
                this.setState(
                  this.getNextState({ action: oe.NEXT, index: i + 1 })
                );
            }),
            R(this, 'open', () => {
              let { status: i } = this.getState();
              i === K.RUNNING &&
                this.setState({
                  ...this.getNextState({
                    action: oe.UPDATE,
                    lifecycle: q.TOOLTIP,
                  }),
                });
            }),
            R(this, 'prev', () => {
              let { index: i, status: o } = this.getState();
              o === K.RUNNING &&
                this.setState({
                  ...this.getNextState({ action: oe.PREV, index: i - 1 }),
                });
            }),
            R(this, 'reset', (i = !1) => {
              let { controlled: o } = this.getState();
              o ||
                this.setState({
                  ...this.getNextState({ action: oe.RESET, index: 0 }),
                  status: i ? K.RUNNING : K.READY,
                });
            }),
            R(this, 'skip', () => {
              let { status: i } = this.getState();
              i === K.RUNNING &&
                this.setState({
                  action: oe.SKIP,
                  lifecycle: q.INIT,
                  status: K.SKIPPED,
                });
            }),
            R(this, 'start', (i) => {
              let { index: o, size: l } = this.getState();
              this.setState({
                ...this.getNextState(
                  { action: oe.START, index: I.number(i) ? i : o },
                  !0
                ),
                status: l ? K.RUNNING : K.WAITING,
              });
            }),
            R(this, 'stop', (i = !1) => {
              let { index: o, status: l } = this.getState();
              [K.FINISHED, K.SKIPPED].includes(l) ||
                this.setState({
                  ...this.getNextState({
                    action: oe.STOP,
                    index: o + (i ? 1 : 0),
                  }),
                  status: K.PAUSED,
                });
            }),
            R(this, 'update', (i) => {
              var o;
              if (!f3(i, f1))
                throw new Error(
                  `State is not valid. Valid keys: ${f1.join(', ')}`
                );
              this.setState({
                ...this.getNextState(
                  {
                    ...this.getState(),
                    ...i,
                    action: (o = i.action) != null ? o : oe.UPDATE,
                  },
                  !0
                ),
              });
            });
          let { continuous: t = !1, stepIndex: n, steps: r = [] } = e ?? {};
          this.setState(
            {
              action: oe.INIT,
              controlled: I.number(n),
              continuous: t,
              index: I.number(n) ? n : 0,
              lifecycle: q.INIT,
              status: r.length ? K.READY : K.IDLE,
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
                size: this.store.get('size') || 0,
                status: this.store.get('status') || '',
              }
            : { ...x3 };
        }
        getNextState(e, t = !1) {
          var n, r, i, o;
          let {
              action: l,
              controlled: s,
              index: c,
              size: d,
              status: u,
            } = this.getState(),
            m = I.number(e.index) ? e.index : c,
            p = s && !t ? c : Math.min(Math.max(m, 0), d);
          return {
            action: (n = e.action) != null ? n : l,
            controlled: s,
            index: p,
            lifecycle: (r = e.lifecycle) != null ? r : q.INIT,
            size: (i = e.size) != null ? i : d,
            status: p === d ? K.FINISHED : (o = e.status) != null ? o : u,
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
              index: i,
              lifecycle: o,
              size: l,
              status: s,
            } = { ...n, ...e };
          this.store.set('action', r),
            this.store.set('index', i),
            this.store.set('lifecycle', o),
            this.store.set('size', l),
            this.store.set('status', s),
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
      };
    function M3(e) {
      return new S3(e);
    }
    var N3 = class {
        constructor(e, t) {
          if (
            (R(this, 'element'),
            R(this, 'options'),
            R(this, 'canBeTabbed', (n) => {
              let { tabIndex: r } = n;
              return r === null || r < 0 ? !1 : this.canHaveFocus(n);
            }),
            R(this, 'canHaveFocus', (n) => {
              let r = /input|select|textarea|button|object/,
                i = n.nodeName.toLowerCase();
              return (
                ((r.test(i) && !n.getAttribute('disabled')) ||
                  (i === 'a' && !!n.getAttribute('href'))) &&
                this.isVisible(n)
              );
            }),
            R(this, 'findValidTabElements', () =>
              [].slice
                .call(this.element.querySelectorAll('*'), 0)
                .filter(this.canBeTabbed)
            ),
            R(this, 'handleKeyDown', (n) => {
              let { code: r = 'Tab' } = this.options;
              n.code === r && this.interceptTab(n);
            }),
            R(this, 'interceptTab', (n) => {
              n.preventDefault();
              let r = this.findValidTabElements(),
                { shiftKey: i } = n;
              if (!r.length) return;
              let o = document.activeElement
                ? r.indexOf(document.activeElement)
                : 0;
              o === -1 || (!i && o + 1 === r.length)
                ? (o = 0)
                : i && o === 0
                ? (o = r.length - 1)
                : (o += i ? -1 : 1),
                r[o].focus();
            }),
            R(this, 'isHidden', (n) => {
              let r = n.offsetWidth <= 0 && n.offsetHeight <= 0,
                i = window.getComputedStyle(n);
              return r && !n.innerHTML
                ? !0
                : (r && i.getPropertyValue('overflow') !== 'visible') ||
                    i.getPropertyValue('display') === 'none';
            }),
            R(this, 'isVisible', (n) => {
              let r = n;
              for (; r; )
                if (r instanceof HTMLElement) {
                  if (r === document.body) break;
                  if (this.isHidden(r)) return !1;
                  r = r.parentNode;
                }
              return !0;
            }),
            R(this, 'removeScope', () => {
              window.removeEventListener('keydown', this.handleKeyDown);
            }),
            R(this, 'checkFocus', (n) => {
              document.activeElement !== n &&
                (n.focus(),
                window.requestAnimationFrame(() => this.checkFocus(n)));
            }),
            R(this, 'setFocus', () => {
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
      },
      F3 = class extends It {
        constructor(e) {
          if (
            (super(e),
            R(this, 'beacon', null),
            R(this, 'setBeaconRef', (i) => {
              this.beacon = i;
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
              locale: i,
              onClickOrHover: o,
              size: l,
              step: s,
              styles: c,
            } = this.props,
            d = I.string(i.open) ? i.open : (0, i3.default)(i.open),
            u = {
              'aria-label': d,
              onClick: o,
              onMouseEnter: o,
              ref: this.setBeaconRef,
              title: d,
            },
            m;
          return (
            e
              ? (m = C(e, {
                  continuous: t,
                  index: n,
                  isLastStep: r,
                  size: l,
                  step: s,
                  ...u,
                }))
              : (m = C(
                  'button',
                  {
                    key: 'JoyrideBeacon',
                    className: 'react-joyride__beacon',
                    'data-test-id': 'button-beacon',
                    style: c.beacon,
                    type: 'button',
                    ...u,
                  },
                  C('span', { style: c.beaconInner }),
                  C('span', { style: c.beaconOuter })
                )),
            m
          );
        }
      };
    function A3({ styles: e }) {
      return C('div', {
        key: 'JoyrideSpotlight',
        className: 'react-joyride__spotlight',
        'data-test-id': 'spotlight',
        style: e,
      });
    }
    var O3 = A3,
      L3 = class extends It {
        constructor() {
          super(...arguments),
            R(this, 'isActive', !1),
            R(this, 'resizeTimeout'),
            R(this, 'scrollTimeout'),
            R(this, 'scrollParent'),
            R(this, 'state', {
              isScrolling: !1,
              mouseOverSpotlight: !1,
              showSpotlight: !0,
            }),
            R(this, 'handleMouseMove', (e) => {
              let { mouseOverSpotlight: t } = this.state,
                {
                  height: n,
                  left: r,
                  position: i,
                  top: o,
                  width: l,
                } = this.spotlightStyles,
                s = i === 'fixed' ? e.clientY : e.pageY,
                c = i === 'fixed' ? e.clientX : e.pageX,
                d = s >= o && s <= o + n,
                u = c >= r && c <= r + l && d;
              u !== t && this.updateState({ mouseOverSpotlight: u });
            }),
            R(this, 'handleScroll', () => {
              let { target: e } = this.props,
                t = jt(e);
              if (this.scrollParent !== document) {
                let { isScrolling: n } = this.state;
                n || this.updateState({ isScrolling: !0, showSpotlight: !1 }),
                  clearTimeout(this.scrollTimeout),
                  (this.scrollTimeout = window.setTimeout(() => {
                    this.updateState({ isScrolling: !1, showSpotlight: !0 });
                  }, 50));
              } else Ca(t, 'sticky') && this.updateState({});
            }),
            R(this, 'handleResize', () => {
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
            i = jt(r);
          (this.scrollParent = zr(i ?? document.body, n, !0)),
            (this.isActive = !0),
            window.addEventListener('resize', this.handleResize);
        }
        componentDidUpdate(e) {
          var t;
          let { lifecycle: n, spotlightClicks: r } = this.props,
            { changed: i } = kr(e, this.props);
          i('lifecycle', q.TOOLTIP) &&
            ((t = this.scrollParent) == null ||
              t.addEventListener('scroll', this.handleScroll, { passive: !0 }),
            setTimeout(() => {
              let { isScrolling: o } = this.state;
              o || this.updateState({ showSpotlight: !0 });
            }, 100)),
            (i('spotlightClicks') || i('disableOverlay') || i('lifecycle')) &&
              (r && n === q.TOOLTIP
                ? window.addEventListener('mousemove', this.handleMouseMove, !1)
                : n !== q.TOOLTIP &&
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
              disableScrollParentFix: i = !1,
              spotlightClicks: o,
              spotlightPadding: l = 0,
              styles: s,
              target: c,
            } = this.props,
            d = jt(c),
            u = Ss(d),
            m = Ca(d),
            p = m3(d, l, i);
          return {
            ...(m1() ? s.spotlightLegacy : s.spotlight),
            height: Math.round(((e = u?.height) != null ? e : 0) + l * 2),
            left: Math.round(((t = u?.left) != null ? t : 0) - l),
            opacity: r ? 1 : 0,
            pointerEvents: o ? 'none' : 'auto',
            position: m ? 'fixed' : 'absolute',
            top: p,
            transition: 'opacity 0.2s',
            width: Math.round(((n = u?.width) != null ? n : 0) + l * 2),
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
              lifecycle: i,
              onClickOverlay: o,
              placement: l,
              styles: s,
            } = this.props;
          if (n || i !== q.TOOLTIP) return null;
          let c = s.overlay;
          m1() &&
            (c = l === 'center' ? s.overlayLegacyCenter : s.overlayLegacy);
          let d = {
              cursor: r ? 'default' : 'pointer',
              height: s3(),
              pointerEvents: e ? 'none' : 'auto',
              ...c,
            },
            u = l !== 'center' && t && C(O3, { styles: this.spotlightStyles });
          if (Ms() === 'safari') {
            let { mixBlendMode: m, zIndex: p, ...v } = d;
            (u = C('div', { style: { ...v } }, u)), delete d.backgroundColor;
          }
          return C(
            'div',
            {
              className: 'react-joyride__overlay',
              'data-test-id': 'overlay',
              onClick: o,
              role: 'presentation',
              style: d,
            },
            u
          );
        }
      },
      _3 = class extends It {
        constructor() {
          super(...arguments), R(this, 'node', null);
        }
        componentDidMount() {
          let { id: e } = this.props;
          Bt() &&
            ((this.node = document.createElement('div')),
            (this.node.id = e),
            document.body.appendChild(this.node),
            Gn || this.renderReact15());
        }
        componentDidUpdate() {
          Bt() && (Gn || this.renderReact15());
        }
        componentWillUnmount() {
          !Bt() ||
            !this.node ||
            (Gn || Xo(this.node),
            this.node.parentNode === document.body &&
              (document.body.removeChild(this.node), (this.node = null)));
        }
        renderReact15() {
          if (!Bt()) return;
          let { children: e } = this.props;
          this.node && el(this, e, this.node);
        }
        renderReact16() {
          if (!Bt() || !Gn) return null;
          let { children: e } = this.props;
          return this.node ? Dn(e, this.node) : null;
        }
        render() {
          return Gn ? this.renderReact16() : null;
        }
      };
    function T3({ styles: e, ...t }) {
      let { color: n, height: r, width: i, ...o } = e;
      return a.createElement(
        'button',
        { style: o, type: 'button', ...t },
        a.createElement(
          'svg',
          {
            height: typeof r == 'number' ? `${r}px` : r,
            preserveAspectRatio: 'xMidYMid',
            version: '1.1',
            viewBox: '0 0 18 18',
            width: typeof i == 'number' ? `${i}px` : i,
            xmlns: 'http://www.w3.org/2000/svg',
          },
          a.createElement(
            'g',
            null,
            a.createElement('path', {
              d: 'M8.13911129,9.00268191 L0.171521827,17.0258467 C-0.0498027049,17.248715 -0.0498027049,17.6098394 0.171521827,17.8327545 C0.28204354,17.9443526 0.427188206,17.9998706 0.572051765,17.9998706 C0.71714958,17.9998706 0.862013139,17.9443526 0.972581703,17.8327545 L9.0000937,9.74924618 L17.0276057,17.8327545 C17.1384085,17.9443526 17.2832721,17.9998706 17.4281356,17.9998706 C17.5729992,17.9998706 17.718097,17.9443526 17.8286656,17.8327545 C18.0499901,17.6098862 18.0499901,17.2487618 17.8286656,17.0258467 L9.86135722,9.00268191 L17.8340066,0.973848225 C18.0553311,0.750979934 18.0553311,0.389855532 17.8340066,0.16694039 C17.6126821,-0.0556467968 17.254037,-0.0556467968 17.0329467,0.16694039 L9.00042166,8.25611765 L0.967006424,0.167268345 C0.745681892,-0.0553188426 0.387317931,-0.0553188426 0.165993399,0.167268345 C-0.0553311331,0.390136635 -0.0553311331,0.751261038 0.165993399,0.974176179 L8.13920499,9.00268191 L8.13911129,9.00268191 Z',
              fill: n,
            })
          )
        )
      );
    }
    var Z3 = T3;
    function I3(e) {
      let {
          backProps: t,
          closeProps: n,
          continuous: r,
          index: i,
          isLastStep: o,
          primaryProps: l,
          size: s,
          skipProps: c,
          step: d,
          tooltipProps: u,
        } = e,
        {
          content: m,
          hideBackButton: p,
          hideCloseButton: v,
          hideFooter: h,
          locale: b,
          showProgress: k,
          showSkipButton: y,
          styles: g,
          title: f,
        } = d,
        { back: E, close: S, last: V, next: $, skip: le } = b,
        re = { primary: S };
      return (
        r &&
          ((re.primary = o ? V : $),
          k &&
            (re.primary = C(
              'span',
              null,
              re.primary,
              ' (',
              i + 1,
              '/',
              s,
              ')'
            ))),
        y &&
          !o &&
          (re.skip = C(
            'button',
            {
              'aria-live': 'off',
              'data-test-id': 'button-skip',
              style: g.buttonSkip,
              type: 'button',
              ...c,
            },
            le
          )),
        !p &&
          i > 0 &&
          (re.back = C(
            'button',
            {
              'data-test-id': 'button-back',
              style: g.buttonBack,
              type: 'button',
              ...t,
            },
            E
          )),
        (re.close =
          !v &&
          C(Z3, {
            'data-test-id': 'button-close',
            styles: g.buttonClose,
            ...n,
          })),
        C(
          'div',
          {
            key: 'JoyrideTooltip',
            'aria-label': Pt(f) || Pt(m),
            className: 'react-joyride__tooltip',
            style: g.tooltip,
            ...u,
          },
          C(
            'div',
            { style: g.tooltipContainer },
            f && C('h1', { 'aria-label': Pt(f), style: g.tooltipTitle }, f),
            C('div', { style: g.tooltipContent }, m)
          ),
          !h &&
            C(
              'div',
              { style: g.tooltipFooter },
              C('div', { style: g.tooltipFooterSpacer }, re.skip),
              re.back,
              C(
                'button',
                {
                  'data-test-id': 'button-primary',
                  style: g.buttonNext,
                  type: 'button',
                  ...l,
                },
                re.primary
              )
            ),
          re.close
        )
      );
    }
    var R3 = I3,
      B3 = class extends It {
        constructor() {
          super(...arguments),
            R(this, 'handleClickBack', (e) => {
              e.preventDefault();
              let { helpers: t } = this.props;
              t.prev();
            }),
            R(this, 'handleClickClose', (e) => {
              e.preventDefault();
              let { helpers: t } = this.props;
              t.close();
            }),
            R(this, 'handleClickPrimary', (e) => {
              e.preventDefault();
              let { continuous: t, helpers: n } = this.props;
              if (!t) {
                n.close();
                return;
              }
              n.next();
            }),
            R(this, 'handleClickSkip', (e) => {
              e.preventDefault();
              let { helpers: t } = this.props;
              t.skip();
            }),
            R(this, 'getElementsProps', () => {
              let {
                  continuous: e,
                  isLastStep: t,
                  setTooltipRef: n,
                  step: r,
                } = this.props,
                i = Pt(r.locale.back),
                o = Pt(r.locale.close),
                l = Pt(r.locale.last),
                s = Pt(r.locale.next),
                c = Pt(r.locale.skip),
                d = e ? s : o;
              return (
                t && (d = l),
                {
                  backProps: {
                    'aria-label': i,
                    'data-action': 'back',
                    onClick: this.handleClickBack,
                    role: 'button',
                    title: i,
                  },
                  closeProps: {
                    'aria-label': o,
                    'data-action': 'close',
                    onClick: this.handleClickClose,
                    role: 'button',
                    title: o,
                  },
                  primaryProps: {
                    'aria-label': d,
                    'data-action': 'primary',
                    onClick: this.handleClickPrimary,
                    role: 'button',
                    title: d,
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
              size: i,
              step: o,
            } = this.props,
            { beaconComponent: l, tooltipComponent: s, ...c } = o,
            d;
          if (s) {
            let u = {
              ...this.getElementsProps(),
              continuous: e,
              index: t,
              isLastStep: n,
              size: i,
              step: c,
              setTooltipRef: r,
            };
            d = C(s, { ...u });
          } else
            d = C(R3, {
              ...this.getElementsProps(),
              continuous: e,
              index: t,
              isLastStep: n,
              size: i,
              step: o,
            });
          return d;
        }
      },
      P3 = class extends It {
        constructor() {
          super(...arguments),
            R(this, 'scope', null),
            R(this, 'tooltip', null),
            R(this, 'handleClickHoverBeacon', (e) => {
              let { step: t, store: n } = this.props;
              (e.type === 'mouseenter' && t.event !== 'hover') ||
                n.update({ lifecycle: q.TOOLTIP });
            }),
            R(this, 'handleClickOverlay', () => {
              let { helpers: e, step: t } = this.props;
              t.disableOverlayClose || e.close();
            }),
            R(this, 'setTooltipRef', (e) => {
              this.tooltip = e;
            }),
            R(this, 'setPopper', (e, t) => {
              var n;
              let { action: r, step: i, store: o } = this.props;
              t === 'wrapper'
                ? o.setPopper('beacon', e)
                : o.setPopper('tooltip', e),
                o.getPopper('beacon') &&
                  o.getPopper('tooltip') &&
                  o.update({ action: r, lifecycle: q.READY }),
                (n = i.floaterProps) != null &&
                  n.getPopper &&
                  i.floaterProps.getPopper(e, t);
            }),
            R(this, 'renderTooltip', (e) => {
              let {
                continuous: t,
                helpers: n,
                index: r,
                size: i,
                step: o,
              } = this.props;
              return C(B3, {
                continuous: t,
                helpers: n,
                index: r,
                isLastStep: r + 1 === i,
                setTooltipRef: this.setTooltipRef,
                size: i,
                step: o,
                ...e,
              });
            });
        }
        componentDidMount() {
          let { debug: e, index: t } = this.props;
          nn({
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
              continuous: i,
              controlled: o,
              debug: l,
              index: s,
              lifecycle: c,
              size: d,
              status: u,
              step: m,
              store: p,
            } = this.props,
            { changed: v, changedFrom: h } = kr(e, this.props),
            b = {
              action: n,
              controlled: o,
              index: s,
              lifecycle: c,
              size: d,
              status: u,
            },
            k = i && n !== oe.CLOSE && (s > 0 || n === oe.PREV),
            y = v('action') || v('index') || v('lifecycle') || v('status'),
            g = h('lifecycle', [q.TOOLTIP, q.INIT], q.INIT),
            f = v('action', [oe.NEXT, oe.PREV, oe.SKIP, oe.CLOSE]),
            E = o && s === e.index;
          if (
            (f &&
              (g || E) &&
              r({
                ...b,
                index: e.index,
                lifecycle: q.COMPLETE,
                step: e.step,
                type: at.STEP_AFTER,
              }),
            m.placement === 'center' &&
              u === K.RUNNING &&
              v('index') &&
              n !== oe.START &&
              c === q.INIT &&
              p.update({ lifecycle: q.READY }),
            y)
          ) {
            let S = jt(m.target),
              V = !!S;
            V && u3(S)
              ? (h('status', K.READY, K.RUNNING) ||
                  h('lifecycle', q.INIT, q.READY)) &&
                r({ ...b, step: m, type: at.STEP_BEFORE })
              : (console.warn(
                  V ? 'Target not visible' : 'Target not mounted',
                  m
                ),
                r({ ...b, type: at.TARGET_NOT_FOUND, step: m }),
                o || p.update({ index: s + (n === oe.PREV ? -1 : 1) }));
          }
          h('lifecycle', q.INIT, q.READY) &&
            p.update({ lifecycle: u1(m) || k ? q.TOOLTIP : q.BEACON }),
            v('index') &&
              nn({
                title: `step:${c}`,
                data: [{ key: 'props', value: this.props }],
                debug: l,
              }),
            v('lifecycle', q.BEACON) && r({ ...b, step: m, type: at.BEACON }),
            v('lifecycle', q.TOOLTIP) &&
              (r({ ...b, step: m, type: at.TOOLTIP }),
              this.tooltip &&
                ((this.scope = new N3(this.tooltip, {
                  selector: '[data-action=primary]',
                })),
                this.scope.setFocus())),
            h('lifecycle', [q.TOOLTIP, q.INIT], q.INIT) &&
              ((t = this.scope) == null || t.removeScope(), p.cleanupPoppers());
        }
        componentWillUnmount() {
          var e;
          (e = this.scope) == null || e.removeScope();
        }
        get open() {
          let { lifecycle: e, step: t } = this.props;
          return u1(t) || e === q.TOOLTIP;
        }
        render() {
          let {
              continuous: e,
              debug: t,
              index: n,
              lifecycle: r,
              nonce: i,
              shouldScroll: o,
              size: l,
              step: s,
            } = this.props,
            c = jt(s.target);
          return !Fs(s) || !I.domElement(c)
            ? null
            : C(
                'div',
                { key: `JoyrideStep-${n}`, className: 'react-joyride__step' },
                C(
                  _3,
                  { id: 'react-joyride-portal' },
                  C(L3, {
                    ...s,
                    debug: t,
                    lifecycle: r,
                    onClickOverlay: this.handleClickOverlay,
                  })
                ),
                C(
                  To,
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
                  C(F3, {
                    beaconComponent: s.beaconComponent,
                    continuous: e,
                    index: n,
                    isLastStep: n + 1 === l,
                    locale: s.locale,
                    nonce: i,
                    onClickOrHover: this.handleClickHoverBeacon,
                    shouldFocus: o,
                    size: l,
                    step: s,
                    styles: s.styles,
                  })
                )
              );
        }
      },
      As = class extends It {
        constructor(e) {
          super(e),
            R(this, 'helpers'),
            R(this, 'store'),
            R(this, 'callback', (l) => {
              let { callback: s } = this.props;
              I.function(s) && s(l);
            }),
            R(this, 'handleKeyboard', (l) => {
              let { index: s, lifecycle: c } = this.state,
                { steps: d } = this.props,
                u = d[s];
              c === q.TOOLTIP &&
                l.code === 'Escape' &&
                u &&
                !u.disableCloseOnEsc &&
                this.store.close();
            }),
            R(this, 'syncState', (l) => {
              this.setState(l);
            });
          let { debug: t, getHelpers: n, run: r, stepIndex: i } = e;
          (this.store = M3({ ...e, controlled: r && I.number(i) })),
            (this.helpers = this.store.getHelpers());
          let { addListener: o } = this.store;
          nn({
            title: 'init',
            data: [
              { key: 'props', value: this.props },
              { key: 'state', value: this.state },
            ],
            debug: t,
          }),
            o(this.syncState),
            n && n(this.helpers),
            (this.state = this.store.getState());
        }
        componentDidMount() {
          if (!Bt()) return;
          let { debug: e, disableCloseOnEsc: t, run: n, steps: r } = this.props,
            { start: i } = this.store;
          h1(r, e) && n && i(),
            t ||
              document.body.addEventListener('keydown', this.handleKeyboard, {
                passive: !0,
              });
        }
        componentDidUpdate(e, t) {
          if (!Bt()) return;
          let {
              action: n,
              controlled: r,
              index: i,
              lifecycle: o,
              status: l,
            } = this.state,
            { debug: s, run: c, stepIndex: d, steps: u } = this.props,
            { stepIndex: m, steps: p } = e,
            {
              reset: v,
              setSteps: h,
              start: b,
              stop: k,
              update: y,
            } = this.store,
            { changed: g } = kr(e, this.props),
            { changed: f, changedFrom: E } = kr(t, this.state),
            S = Yn(u[i], this.props),
            V = !He(p, u),
            $ = I.number(d) && g('stepIndex'),
            le = jt(S.target);
          if (
            (V && (h1(u, s) ? h(u) : console.warn('Steps are not valid', u)),
            g('run') && (c ? b(d) : k()),
            $)
          ) {
            let ve = I.number(m) && m < d ? oe.NEXT : oe.PREV;
            n === oe.STOP && (ve = oe.START),
              [K.FINISHED, K.SKIPPED].includes(l) ||
                y({
                  action: n === oe.CLOSE ? oe.CLOSE : ve,
                  index: d,
                  lifecycle: q.INIT,
                });
          }
          !r &&
            l === K.RUNNING &&
            i === 0 &&
            !le &&
            (this.store.update({ index: i + 1 }),
            this.callback({
              ...this.state,
              type: at.TARGET_NOT_FOUND,
              step: S,
            }));
          let re = { ...this.state, index: i, step: S };
          if (
            f('action', [oe.NEXT, oe.PREV, oe.SKIP, oe.CLOSE]) &&
            f('status', K.PAUSED)
          ) {
            let ve = Yn(u[t.index], this.props);
            this.callback({
              ...re,
              index: t.index,
              lifecycle: q.COMPLETE,
              step: ve,
              type: at.STEP_AFTER,
            });
          }
          if (f('status', [K.FINISHED, K.SKIPPED])) {
            let ve = Yn(u[t.index], this.props);
            r ||
              this.callback({
                ...re,
                index: t.index,
                lifecycle: q.COMPLETE,
                step: ve,
                type: at.STEP_AFTER,
              }),
              this.callback({
                ...re,
                type: at.TOUR_END,
                step: ve,
                index: t.index,
              }),
              v();
          } else
            E('status', [K.IDLE, K.READY], K.RUNNING)
              ? this.callback({ ...re, type: at.TOUR_START })
              : (f('status') || f('action', oe.RESET)) &&
                this.callback({ ...re, type: at.TOUR_STATUS });
          this.scrollToStep(t),
            S.placement === 'center' &&
              l === K.RUNNING &&
              o === q.INIT &&
              this.store.update({ lifecycle: q.READY });
        }
        componentWillUnmount() {
          let { disableCloseOnEsc: e } = this.props;
          e ||
            document.body.removeEventListener('keydown', this.handleKeyboard);
        }
        scrollToStep(e) {
          let { index: t, lifecycle: n, status: r } = this.state,
            {
              debug: i,
              disableScrollParentFix: o = !1,
              scrollDuration: l,
              scrollOffset: s = 20,
              scrollToFirstStep: c = !1,
              steps: d,
            } = this.props,
            u = Yn(d[t], this.props),
            m = jt(u.target),
            p = v3({
              isFirstStep: t === 0,
              lifecycle: n,
              previousLifecycle: e.lifecycle,
              scrollToFirstStep: c,
              step: u,
              target: m,
            });
          if (r === K.RUNNING && p) {
            let v = Ur(m, o),
              h = zr(m, o),
              b = Math.floor(p3(m, s, o)) || 0;
            nn({
              title: 'scrollToStep',
              data: [
                { key: 'index', value: t },
                { key: 'lifecycle', value: n },
                { key: 'status', value: r },
              ],
              debug: i,
            });
            let k = this.store.getPopper('beacon'),
              y = this.store.getPopper('tooltip');
            if (n === q.BEACON && k) {
              let { offsets: g, placement: f } = k;
              !['bottom'].includes(f) &&
                !v &&
                (b = Math.floor(g.popper.top - s));
            } else if (n === q.TOOLTIP && y) {
              let { flipped: g, offsets: f, placement: E } = y;
              ['top', 'right', 'left'].includes(E) && !g && !v
                ? (b = Math.floor(f.popper.top - s))
                : (b -= u.spotlightPadding);
            }
            (b = b >= 0 ? b : 0),
              r === K.RUNNING &&
                h3(b, { element: h, duration: l }).then(() => {
                  setTimeout(() => {
                    var g;
                    (g = this.store.getPopper('tooltip')) == null ||
                      g.instance.update();
                  }, 10);
                });
          }
        }
        render() {
          if (!Bt()) return null;
          let { index: e, status: t } = this.state,
            {
              continuous: n = !1,
              debug: r = !1,
              nonce: i,
              scrollToFirstStep: o = !1,
              steps: l,
            } = this.props,
            s;
          if (t === K.RUNNING && l[e]) {
            let c = Yn(l[e], this.props);
            s = C(P3, {
              ...this.state,
              callback: this.callback,
              continuous: n,
              debug: r,
              helpers: this.helpers,
              nonce: i,
              shouldScroll: !c.disableScrolling && (e !== 0 || o),
              step: c,
              store: this.store,
            });
          }
          return C('div', { className: 'react-joyride' }, s);
        }
      };
    R(As, 'defaultProps', E3);
    var V3 = As,
      j3 = lt(Or()),
      H3 = w(ni)(({ theme: e }) => ({
        padding: '4px 8px',
        fontSize: e.typography.size.s1,
      })),
      D3 = w(rt)(
        ({ theme: e }) => ({
          fontSize: e.typography.size.s2,
          '&:hover [data-badge], [data-badge=true]': {
            background: '#E3F3FF',
            borderColor: 'rgba(2, 113, 182, 0.1)',
            color: '#0271B6',
          },
        }),
        ({ active: e, theme: t }) =>
          !e &&
          se({
            '&:hover': {
              color: t.base === 'light' ? t.color.defaultText : t.color.light,
            },
          })
      ),
      z3 = w.span(({ theme: e }) => ({
        color: e.base === 'light' ? e.color.defaultText : e.color.light,
      })),
      U3 = a.memo(function ({ count: e, onEnable: t, onDisable: n }) {
        let [r, i] = Me(!1),
          o = () => {
            i(!r), r ? n() : t();
          };
        return (
          pe(() => () => n(), [n]),
          a.createElement(
            D3,
            { id: 'changes-found-filter', active: r, onClick: o },
            a.createElement(H3, { status: 'warning', 'data-badge': r }, e),
            a.createElement(z3, null, (0, j3.default)('Change', e))
          )
        );
      }),
      $3 = () => !0,
      g1 = ({ status: e }) => e?.[J]?.status === 'warn',
      Os = 'enableFilter',
      W3 = ({ api: e }) => {
        let t = de(() => {
            e.experimental_setFilter(J, g1), e.emit(Os, J, g1);
          }, [e]),
          n = de(() => e.experimental_setFilter(J, $3), [e]),
          { status: r } = cn(),
          i = Object.values(r).filter((o) => o[J]?.status === 'warn');
        return i.length
          ? a.createElement(
              'span',
              { id: 'sidebar-bottom-wrapper' },
              a.createElement(U3, {
                count: i.length,
                onEnable: t,
                onDisable: n,
              })
            )
          : null;
      },
      v1 = [
        void 0,
        'EQUAL',
        'FIXED',
        'ADDED',
        'CHANGED',
        'REMOVED',
        'CAPTURE_ERROR',
        'SYSTEM_ERROR',
      ],
      Sr = ([e, ...t]) =>
        t.reduce((n, r) => (v1.indexOf(r) > v1.indexOf(n) ? r : n), e);
    function G3(e) {
      return (e.FAILED ?? 0) > 0
        ? 'FAILED'
        : (e.IN_PROGRESS ?? 0) > 0
        ? 'IN_PROGRESS'
        : (e.BROKEN ?? 0) > 0
        ? 'BROKEN'
        : (e.DENIED ?? 0) > 0
        ? 'DENIED'
        : (e.PENDING ?? 0) > 0
        ? 'PENDING'
        : (e.ACCEPTED ?? 0) > 0
        ? 'ACCEPTED'
        : 'PASSED';
    }
    function Zo(e) {
      let {
          statusCounts: t,
          isInProgress: n,
          changeCount: r,
          brokenCount: i,
          resultsByBrowser: o,
          resultsByMode: l,
          modesByName: s,
        } = e.reduce(
          (m, p) => (
            (m.statusCounts[p.status] = (m.statusCounts[p.status] || 0) + 1),
            p.status === 'IN_PROGRESS' && (m.isInProgress = !0),
            p.result &&
              ['CHANGED', 'ADDED'].includes(p.result) &&
              (m.changeCount += 1),
            p.result &&
              ['CAPTURE_ERROR', 'SYSTEM_ERROR'].includes(p.result) &&
              (m.brokenCount += 1),
            p.comparisons?.forEach(({ browser: v, result: h }) => {
              m.resultsByBrowser[v.id] = Sr([
                h ?? void 0,
                m.resultsByBrowser[v.id],
              ]);
            }),
            p.comparisons?.forEach(({ result: v }) => {
              m.resultsByMode[p.mode.name] = Sr([
                v ?? void 0,
                m.resultsByMode[p.mode.name],
              ]);
            }),
            (m.modesByName[p.mode.name] = p.mode),
            m
          ),
          {
            statusCounts: {},
            isInProgress: !1,
            changeCount: 0,
            brokenCount: 0,
            resultsByBrowser: {},
            resultsByMode: {},
            modesByName: {},
          }
        ),
        c = e.length
          ? Object.fromEntries(
              e[0].comparisons.map((m) => [m.browser.id, m.browser])
            )
          : {},
        d = Object.entries(o).map(([m, p]) => ({ browser: c[m], result: p })),
        u = Object.entries(l).map(([m, p]) => ({ mode: s[m], result: p }));
      return {
        status: G3(t),
        isInProgress: n,
        changeCount: r,
        brokenCount: i,
        browserResults: d,
        modeResults: u,
      };
    }
    var q3 = (e) => {
        try {
          return [Go()[0][e], Wo()[e]];
        } catch {
          return [null, null];
        }
      },
      Ls = ({ result: e }) => e !== 'EQUAL' && e !== 'FIXED',
      Y3 = (e, t) => {
        let n = e.filter((i) => i.comparisons.some(Ls)),
          r = n.length ? n : e;
        return r.find((i) => i.mode.name === t) || r[0];
      },
      Q3 = (e, t) => {
        let n = e.filter(Ls),
          r = n.length ? n : e;
        return r.find((i) => i.browser.id === t) || r[0];
      };
    function K3(e) {
      let [t, n] = Me(!0),
        r = q3('theme')[1],
        [i, o] = Re(c5),
        [l, s] = Re(d5),
        c,
        d;
      return (
        e.length &&
          ((c = t ? Y3(e, i) : e.find(({ mode: u }) => u.name === i) || e[0]),
          (d = t
            ? Q3(c.comparisons, l)
            : c?.comparisons.find(({ browser: u }) => u.id === l) ||
              c?.comparisons[0]),
          t &&
            (i !== c?.mode.name && o(c?.mode.name),
            l !== d?.browser.id && s(d?.browser.id),
            n(!1))),
        {
          modeOrder: r?.toolbar?.items?.map((u) => u.title),
          selectedTest: c,
          selectedComparison: d,
          onSelectBrowser: de((u) => s(u.id), [s]),
          onSelectMode: de((u) => o(u.name), [o]),
        }
      );
    }
    var J3 = ct(`
  query AddonVisualTestsBuild(
    $projectId: ID!
    $branch: String!
    $gitUserEmailHash: String!
    $repositoryOwnerName: String
    $storyId: String!
    $testStatuses: [TestStatus!]!
    $selectedBuildId: ID!
    $hasSelectedBuildId: Boolean!
  ) {
    project(id: $projectId) {
      name
      lastBuildOnBranch: lastBuild(
        branches: [$branch]
        repositoryOwnerName: $repositoryOwnerName
        localBuilds: { localBuildEmailHash: $gitUserEmailHash }
      ) {
        ...LastBuildOnBranchBuildFields
        ...SelectedBuildFields @skip(if: $hasSelectedBuildId)
      }
      lastBuild {
        id
        slug
        branch
      }
    }
    selectedBuild: build(id: $selectedBuildId) @include(if: $hasSelectedBuildId) {
      ...SelectedBuildFields
    }
    viewer {
      preferences {
        vtaOnboarding
      }
      projectMembership(projectId: $projectId) {
        userCanReview: meetsAccessLevel(minimumAccessLevel: REVIEWER)
      }
    }
  }
`),
      X3 = ct(`
  fragment LastBuildOnBranchBuildFields on Build {
    __typename
    id
    status
    committedAt
    ... on StartedBuild {
      testsForStatus: tests(first: 1000, statuses: $testStatuses) {
        nodes {
          ...StatusTestFields
        }
      }
      testsForStory: tests(storyId: $storyId) {
        nodes {
          ...LastBuildOnBranchTestFields
        }
      }
    }
    ... on CompletedBuild {
      result
      testsForStatus: tests(first: 1000, statuses: $testStatuses) {
        nodes {
          ...StatusTestFields
        }
      }
      testsForStory: tests(storyId: $storyId) {
        nodes {
          ...LastBuildOnBranchTestFields
        }
      }
    }
  }
`),
      e7 = ct(`
  fragment SelectedBuildFields on Build {
    __typename
    id
    number
    branch
    commit
    committedAt
    uncommittedHash
    status
    ... on StartedBuild {
      startedAt
      testsForStory: tests(storyId: $storyId) {
        nodes {
          ...StoryTestFields
        }
      }
    }
    ... on CompletedBuild {
      startedAt
      testsForStory: tests(storyId: $storyId) {
        nodes {
          ...StoryTestFields
        }
      }
    }
  }
`),
      _s = ct(`
  fragment StatusTestFields on Test {
    id
    status
    result
    story {
      storyId
    }
  }
`),
      t7 = ct(`
  fragment LastBuildOnBranchTestFields on Test {
    status
    result
  }
`),
      n7 = ct(`
  fragment StoryTestFields on Test {
    id
    status
    result
    webUrl
    comparisons {
      id
      result
      browser {
        id
        key
        name
        version
      }
      captureDiff {
        diffImage(signed: true) {
          imageUrl
          imageWidth
        }
        focusImage(signed: true) {
          imageUrl
          imageWidth
        }
      }
      headCapture {
        captureImage(signed: true) {
          backgroundColor
          imageUrl
          imageWidth
          thumbnailUrl
        }
        captureError {
          kind
          ... on CaptureErrorInteractionFailure {
            error
          }
          ... on CaptureErrorJSError {
            error
          }
          ... on CaptureErrorFailedJS {
            error
          }
        }
      }
      baseCapture {
        captureImage(signed: true) {
          imageUrl
          imageWidth
        }
      }
    }
    mode {
      name
      globals
    }
    story {
      storyId
      name
      component {
        name
      }
    }
  }
`),
      a7 = ct(`
  mutation ReviewTest($input: ReviewTestInput!) {
    reviewTest(input: $input) {
      updatedTests {
        id
        status
      }
      userErrors {
        ... on UserError {
          __typename
          message
        }
        ... on BuildSupersededError {
          build {
            id
          }
        }
        ... on TestUnreviewableError {
          test {
            id
          }
        }
      }
    }
  }
`),
      r7 = ({ projectId: e, storyId: t, gitInfo: n, selectedBuildInfo: r }) => {
        let [{ data: i, error: o, operation: l }, s] = xo({
          query: J3,
          variables: {
            projectId: e,
            storyId: t,
            testStatuses: Object.keys(Q0),
            branch: n.branch || '',
            ...(n.slug ? { repositoryOwnerName: n.slug.split('/', 1)[0] } : {}),
            gitUserEmailHash: n.userEmailHash,
            selectedBuildId: r?.buildId || '',
            hasSelectedBuildId: !!r,
          },
        });
        pe(() => {
          let b = setInterval(s, 5e3);
          return () => clearInterval(b);
        }, [s]);
        let c = l && t && l.variables.storyId !== t,
          d = yn(X3, i?.project?.lastBuildOnBranch),
          u = [
            ...yn(
              t7,
              d && 'testsForStory' in d && d.testsForStory
                ? d.testsForStory.nodes
                : []
            ),
          ],
          m = d?.committedAt > n.committedAt,
          p = !!d && !m,
          v = !!d && u.every((b) => b.status !== 'IN_PROGRESS'),
          h = yn(
            e7,
            i?.selectedBuild ?? (v ? i?.project?.lastBuildOnBranch : void 0)
          );
        return {
          hasData: !!i && !c,
          hasProject: !!i?.project,
          hasSelectedBuild: h?.branch === n.branch,
          lastBuildOnBranch: d,
          lastBuildOnBranchIsNewer: m,
          lastBuildOnBranchIsReady: v,
          lastBuildOnBranchIsSelectable: p,
          selectedBuild: h,
          selectedBuildMatchesGit:
            h?.branch === n.branch &&
            h?.commit === n.commit &&
            h?.uncommittedHash === n.uncommittedHash,
          rerunQuery: s,
          queryError: o,
          userCanReview: !!i?.viewer?.projectMembership?.userCanReview,
          vtaOnboarding: i?.viewer?.preferences?.vtaOnboarding,
        };
      },
      Io = Qe(null),
      Ts = Qe(null),
      Zs = () => Lt(Io, 'Build'),
      Is = () => {
        let { selectedBuild: e } = Lt(Io, 'Build');
        if (!e) throw new Error('No selectedBuild on Build context');
        return e;
      },
      Tn = () => Lt(Ts, 'Story'),
      Ci = ({ children: e, watchState: t }) => {
        let n = !!t?.selectedBuild && 'testsForStory' in t.selectedBuild,
          r =
            t?.selectedBuild &&
            'testsForStory' in t.selectedBuild &&
            t.selectedBuild.testsForStory?.nodes,
          i = [...yn(n7, r || [])],
          o = Zo(i),
          { toggleDiff: l } = An();
        return (
          pe(() => l(o.changeCount > 0), [l, o.changeCount]),
          a.createElement(
            Io.Provider,
            { value: $t(() => t, [JSON.stringify(t?.selectedBuild)]) },
            a.createElement(
              Ts.Provider,
              { value: { hasTests: n, tests: i, summary: o, ...K3(i) } },
              e
            )
          )
        );
      },
      i7 = w.div(({ width: e, height: t, left: n, top: r }) => ({
        width: `${e}px`,
        height: `${t}px`,
        left: `${n}px`,
        top: `${r}px`,
        position: 'relative',
        overflow: 'hidden',
      }));
    function o7({
      top: e = 0,
      left: t = 0,
      width: n = window.innerWidth,
      height: r = window.innerHeight,
      colors: i = [
        '#CA90FF',
        '#FC521F',
        '#66BF3C',
        '#FF4785',
        '#FFAE00',
        '#1EA7FD',
      ],
      ...o
    }) {
      let [l] = Me(() => {
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
        pe(
          () => (
            document.body.appendChild(l),
            () => {
              document.body.removeChild(l);
            }
          ),
          [l]
        ),
        Dn(
          a.createElement(
            i7,
            { top: e, left: t, width: n, height: r },
            a.createElement(P1.default, { colors: i, drawShape: s7, ...o })
          ),
          l
        )
      );
    }
    function l7(e, t) {
      return Math.floor(Math.random() * (t - e)) + e;
    }
    function s7(e) {
      let t = this;
      switch (((t.shape = t.shape || l7(1, 6)), t.shape)) {
        case 2: {
          let n = t.w / 2,
            r = t.h / 2;
          e.moveTo(-n + 2, -r),
            e.lineTo(n - 2, -r),
            e.arcTo(n, -r, n, -r + 2, 2),
            e.lineTo(n, r - 2),
            e.arcTo(n, r, n - 2, r, 2),
            e.lineTo(-n + 2, r),
            e.arcTo(-n, r, -n, r - 2, 2),
            e.lineTo(-n, -r + 2),
            e.arcTo(-n, -r, -n + 2, -r, 2);
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
          e.arc(0, 0, t.radius, 0, 2 * Math.PI);
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
    var c7 = w.div(({ theme: e }) => ({
        background: e.base === 'light' ? e.color.lightest : '#292A2C',
        width: 260,
        padding: 15,
        borderRadius: 5,
        boxShadow: '0px 0px 32px 0px #00000029',
      })),
      d7 = w.div({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }),
      u7 = w.div(({ theme: e }) => ({
        fontSize: 13,
        lineHeight: '18px',
        fontWeight: 700,
        color: e.color.defaultText,
      })),
      m7 = w.div(({ theme: e }) => ({
        fontSize: 13,
        lineHeight: '18px',
        textAlign: 'start',
        color: e.color.defaultText,
        margin: 0,
        marginTop: 5,
      })),
      p7 = w.div({
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: 15,
      }),
      h7 = ({ isLastStep: e, step: t, primaryProps: n, tooltipProps: r }) =>
        a.createElement(
          c7,
          { ...r },
          a.createElement(
            d7,
            null,
            t.title && a.createElement(u7, null, t.title),
            a.createElement(m7, null, t.content)
          ),
          (t.hideNextButton || t.hideBackButton) &&
            a.createElement(
              p7,
              { id: 'buttonSkip' },
              !t.hideSkipButton &&
                !e &&
                a.createElement(
                  he,
                  {
                    size: 'medium',
                    onClick: t.onSkipWalkthroughButtonClick,
                    link: !0,
                    style: {
                      paddingRight: 12,
                      paddingLeft: 12,
                      marginRight: 8,
                    },
                  },
                  'Skip'
                ),
              !t.hideNextButton &&
                a.createElement(
                  he,
                  {
                    ...n,
                    onClick: n.onClick,
                    primary: !0,
                    ...(t.onNextButtonClick
                      ? { onClick: t.onNextButtonClick }
                      : {}),
                  },
                  t.nextButtonText || 'Next'
                )
            )
        ),
      f7 = ({
        managerApi: e,
        skipWalkthrough: t,
        startWalkthrough: n,
        completeWalkthrough: r,
      }) => {
        let i = pt(),
          o = Tn(),
          l = o?.selectedTest?.result === 'CHANGED',
          s = o?.selectedTest?.status !== 'ACCEPTED',
          c = JSON.stringify(cn().layout),
          d = Te(c);
        d.current !== c &&
          (window.dispatchEvent(new Event('resize')), (d.current = c)),
          pe(() => {
            n();
          }),
          pe(() => {
            e.getCurrentStoryData()?.type !== 'story' && e.jumpToStory(1),
              e.togglePanel(!0),
              e.togglePanelPosition('right'),
              e.setSelectedPanel(oa);
          }, [e]);
        let [u, m] = a.useState(!1),
          [p, v] = a.useState(0),
          h = () => {
            v((b) => b + 1);
          };
        return (
          pe(() => {
            e.once(Os, () => {
              v(1),
                setTimeout(() => {
                  window.dispatchEvent(new Event('resize'));
                }, 100);
            });
          }, [e]),
          pe(() => {
            o?.selectedTest?.status === 'ACCEPTED' && p === 5 && (m(!0), v(6));
          }, [o?.selectedTest?.status, u, m, p]),
          a.createElement(
            a.Fragment,
            null,
            u &&
              a.createElement(o7, {
                numberOfPieces: 800,
                recycle: !1,
                tweenDuration: 2e4,
                onConfettiComplete: (b) => {
                  b?.reset(), m(!1);
                },
              }),
            a.createElement(V3, {
              steps: [
                {
                  target: '#sidebar-bottom-wrapper',
                  title: 'Changes found',
                  content: a.createElement(
                    a.Fragment,
                    null,
                    'The visual tests addon will detect changes in all of your stories and allow you to review them before opening a pull request.',
                    a.createElement('br', null),
                    a.createElement('br', null),
                    'Click this button to see the changes in the sidebar.'
                  ),
                  floaterProps: {
                    target: '#changes-found-filter',
                    options: {
                      preventOverflow: { boundariesElement: 'window' },
                    },
                  },
                  placement: 'top',
                  disableBeacon: !0,
                  hideNextButton: !0,
                  spotlightClicks: !0,
                  onSkipWalkthroughButtonClick: t,
                },
                l && s
                  ? {
                      target: '#storybook-explorer-tree > div',
                      title: 'Stories with changes',
                      content: a.createElement(
                        a.Fragment,
                        null,
                        'Here you have a filtered list of only stories with changes.'
                      ),
                      placement: 'right',
                      disableBeacon: !0,
                      spotlightClicks: !0,
                      onNextButtonClick: h,
                      onSkipWalkthroughButtonClick: t,
                    }
                  : {
                      target: '#storybook-explorer-tree > div',
                      title: 'Stories with changes',
                      content: a.createElement(
                        a.Fragment,
                        null,
                        'Here you have a list of all stories in your Storybook.',
                        a.createElement('br', null),
                        a.createElement('br', null),
                        'Select a story with changes to see the exact pixels that changed.'
                      ),
                      placement: 'right',
                      disableBeacon: !0,
                      spotlightClicks: !0,
                      hideNextButton: !0,
                      onSkipWalkthroughButtonClick: t,
                    },
                {
                  target: '#panel-tab-content',
                  title: 'Inspect changes',
                  content: a.createElement(
                    a.Fragment,
                    null,
                    'The results of the changes are shown here. The pixels that changed are highlighted in green.'
                  ),
                  disableBeacon: !0,
                  placement: 'left',
                  onNextButtonClick: h,
                  onSkipWalkthroughButtonClick: t,
                },
                {
                  target: '#button-diff-visible',
                  title: 'Toggle the diff',
                  content: a.createElement(
                    a.Fragment,
                    null,
                    'This button shows or hides the visual diff. Use it to make the visual changes in your stories obvious. Try it out.'
                  ),
                  onNextButtonClick: h,
                  onSkipWalkthroughButtonClick: t,
                  spotlightClicks: !0,
                  disableBeacon: !0,
                  placement: 'bottom',
                  disableOverlay: !0,
                },
                {
                  target: '#button-toggle-snapshot',
                  title: 'This is the Switch button',
                  content: a.createElement(
                    a.Fragment,
                    null,
                    "Switch between the baseline snapshot (old) and the latest snapshot. The info bar will let you know which version you're looking at."
                  ),
                  onNextButtonClick: h,
                  onSkipWalkthroughButtonClick: t,
                  spotlightClicks: !0,
                  disableBeacon: !0,
                  placement: 'bottom',
                  disableOverlay: !0,
                },
                {
                  target: '#button-toggle-accept-story',
                  title: 'Accept changes',
                  content: a.createElement(
                    a.Fragment,
                    null,
                    'If the visual changes are intentional, accept them to update the test baselines. The next time you run visual tests, future changes will be compared to these new baselines. This can be undone.'
                  ),
                  disableBeacon: !0,
                  spotlightClicks: !0,
                  onNextButtonClick: h,
                  hideNextButton: !0,
                  placement: 'bottom',
                  disableOverlay: !0,
                  onSkipWalkthroughButtonClick: t,
                },
                {
                  target: '#button-toggle-accept-story',
                  title: 'Perfection!',
                  placement: 'bottom',
                  disableOverlay: !0,
                  content: a.createElement(
                    a.Fragment,
                    null,
                    'You\u2019ve got the basics down! You can always unaccept if you\u2019re not happy with the changes.'
                  ),
                  onNextButtonClick: h,
                  onSkipWalkthroughButtonClick: t,
                },
                {
                  target: '#button-run-tests',
                  title: 'You are ready to test',
                  placement: 'bottom',
                  disableOverlay: !0,
                  content: a.createElement(
                    a.Fragment,
                    null,
                    'Any time you want to run tests, tap this button in the sidebar to see exactly what changed across your Storybook.'
                  ),
                  disableBeacon: !0,
                  nextButtonText: 'Done',
                  onNextButtonClick: r,
                },
              ],
              continuous: !0,
              stepIndex: p,
              spotlightPadding: 0,
              hideBackButton: !0,
              disableCloseOnEsc: !0,
              disableOverlayClose: !0,
              disableScrolling: !0,
              hideCloseButton: !0,
              showSkipButton: !0,
              floaterProps: {
                options: { offset: { offset: '0, 6' } },
                styles: {
                  floater: {
                    padding: 0,
                    paddingLeft: 8,
                    paddingTop: 8,
                    filter:
                      i.base === 'light'
                        ? 'drop-shadow(0px 5px 5px rgba(0,0,0,0.05)) drop-shadow(0 1px 3px rgba(0,0,0,0.1))'
                        : 'drop-shadow(#fff5 0px 0px 0.5px) drop-shadow(#fff5 0px 0px 0.5px)',
                  },
                },
              },
              tooltipComponent: h7,
              styles: {
                overlay: { mixBlendMode: 'unset', backgroundColor: 'none' },
                spotlight: {
                  backgroundColor: 'none',
                  border: `solid 2px ${i.color.secondary}`,
                  boxShadow: '0px 0px 0px 9999px rgba(0,0,0,0.4)',
                },
                options: {
                  zIndex: 1e4,
                  primaryColor: i.color.secondary,
                  arrowColor: i.base === 'light' ? i.color.lightest : '#292A2C',
                },
              },
            })
          )
        );
      },
      ao = ['initialize', 'build', 'upload', 'verify', 'snapshot'],
      Rs = {
        initialize: {
          key: 'initialize',
          emoji: '\u{1F680}',
          renderName: () => 'Initialize build',
          renderProgress: () => 'Initializing build...',
          renderComplete: () => 'Initialized',
          estimateDuration: 2e3,
        },
        build: {
          key: 'build',
          emoji: '\u{1F3D7}',
          renderName: () => 'Build Storybook',
          renderProgress: () => 'Building your Storybook...',
          renderComplete: () => 'Storybook built',
          estimateDuration: 2e4,
        },
        upload: {
          key: 'upload',
          emoji: '\u{1F4E1}',
          renderName: () => 'Publish your Storybook',
          renderProgress: ({ stepProgress: e }) => {
            let { numerator: t, denominator: n } = e.upload;
            if (!n || !t) return 'Uploading files...';
            let { value: r, exponent: i } = si(n, {
                output: 'object',
                round: 1,
              }),
              { value: o, symbol: l } = si(t, {
                exponent: i,
                output: 'object',
                round: 1,
              });
            return `Uploading files (${o}/${r} ${l})...`;
          },
          renderComplete: () => 'Publish complete',
          estimateDuration: 2e4,
        },
        verify: {
          key: 'verify',
          emoji: '\u{1F50D}',
          renderName: () => 'Verify your Storybook',
          renderProgress: () => 'Verifying contents...',
          renderComplete: () => 'Storybook verified',
          estimateDuration: 2e4,
        },
        snapshot: {
          key: 'snapshot',
          emoji: '\u{1F4F8}',
          renderName: () => 'Run visual tests',
          renderProgress: ({ stepProgress: e }) => {
            let { numerator: t, denominator: n } = e.snapshot;
            return n
              ? `Running visual tests (${t}/${n})...`
              : 'Running visual tests...';
          },
          renderComplete: () => 'Tested your stories',
          estimateDuration: 9e4,
        },
        aborted: {
          key: 'aborted',
          emoji: '\u270B',
          renderName: () => 'Build canceled',
          renderProgress: () => 'Build canceled',
          renderComplete: () => 'Build canceled',
          estimateDuration: 0,
        },
        complete: {
          key: 'complete',
          emoji: '\u{1F389}',
          renderName: () => 'Visual tests completed!',
          renderProgress: () => 'Visual tests completed!',
          renderComplete: () => 'Visual tests completed!',
          estimateDuration: 0,
        },
        error: {
          key: 'error',
          emoji: '\u{1F6A8}',
          renderName: () => 'Build failed',
          renderProgress: () => 'Build failed',
          renderComplete: () => 'Build failed',
          estimateDuration: 0,
        },
        limited: {
          key: 'error',
          emoji: '\u{1F6A8}',
          renderName: () => 'Build limited',
          renderProgress: () => 'Build limited',
          renderComplete: () => 'Build limited',
          estimateDuration: 0,
        },
      };
    ao[0], Object.fromEntries(ao.map((e) => [e, {}]));
    var Ro = ({ localBuildProgress: e, withEmoji: t = !1, ...n }) => {
        let { emoji: r, renderProgress: i } = Rs[e.currentStep],
          o = i(e);
        return a.createElement(ee, { ...n }, t && r, ' ', o);
      },
      Bs = w.div(
        ({ status: e, theme: t }) => ({
          display: 'inline-block',
          width: 6,
          height: 6,
          borderRadius: '50%',
          background:
            e &&
            {
              IN_PROGRESS: 'transparent',
              PASSED: t.color.positive,
              PENDING: t.color.gold,
              ACCEPTED: t.color.positive,
              DENIED: t.color.positive,
              BROKEN: t.color.negative,
              FAILED: t.color.negative,
              EQUAL: t.color.positive,
              FIXED: t.color.positive,
              ADDED: t.color.gold,
              CHANGED: t.color.gold,
              REMOVED: t.color.gold,
              CAPTURE_ERROR: t.color.negative,
              SYSTEM_ERROR: t.color.negative,
              positive: t.color.positive,
              negative: t.color.negative,
              warning: t.color.gold,
              notification: t.color.secondary,
            }[e],
        }),
        ({ overlay: e, theme: t }) =>
          e &&
          se({
            position: 'absolute',
            top: -1,
            right: -2,
            width: 7,
            height: 7,
            border: '1px solid rgba(0, 0, 0, 0.1)',
            boxShadow: `0 0 0 2px var(--bg-color, ${t.background.bar})`,
            boxSizing: 'border-box',
          })
      ),
      Ps = ({ status: e }) => a.createElement(Bs, { status: e }),
      g7 = w.div({
        position: 'relative',
        display: 'inline-flex',
        justifyContent: 'center',
        'img, svg': { verticalAlign: 'top' },
      }),
      Mr = ({ status: e, children: t }) =>
        a.createElement(
          g7,
          null,
          t,
          a.createElement(Bs, { overlay: !0, status: e })
        ),
      v7 = w.div(({ theme: e }) => ({
        width: 220,
        padding: 3,
        color: e.base === 'light' ? e.color.defaultText : e.color.light,
        '& > div': { margin: 7 },
      })),
      Bo = w.div(({ theme: e }) => ({
        height: 5,
        background: e.background.hoverable,
        borderRadius: 5,
        overflow: 'hidden',
      })),
      Vs = w(Bo)(({ theme: e }) => ({
        background: e.color.secondary,
        transition: 'width 3s ease-out',
      })),
      y7 = Zt({
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      }),
      xi = w.svg(
        ({ progress: e, theme: t }) => ({
          position: 'absolute',
          width: '24px!important',
          height: '24px!important',
          transform: 'rotate(-90deg)',
          color: t.color.secondary,
          circle: {
            r: '10',
            cx: '12',
            cy: '12',
            fill: 'transparent',
            stroke: e ? 'currentColor' : t.background.hoverable,
            strokeWidth: '2',
            strokeLinecap: 'round',
            strokeDasharray: Math.PI * 20,
          },
        }),
        ({ spinner: e, theme: t }) =>
          e && {
            animation: `${y7} 1s linear infinite`,
            circle: { stroke: `${t.color.secondary}33` },
          }
      ),
      Qn = w(rt)(({ theme: e }) => ({
        position: 'relative',
        overflow: 'visible',
        color: e.textMutedColor,
        marginTop: 0,
        zIndex: 1,
        marginRight: 4,
      })),
      b7 = ({
        isDisabled: e = !1,
        isOutdated: t = !1,
        isRunning: n = !1,
        localBuildProgress: r,
        warning: i,
        clickWarning: o,
        startBuild: l,
        stopBuild: s,
      }) => {
        if (e)
          return i
            ? a.createElement(
                Ae,
                {
                  tooltip: a.createElement(je, { note: i }),
                  trigger: 'hover',
                  hasChrome: !1,
                },
                a.createElement(
                  Qn,
                  {
                    id: 'button-run-tests',
                    'aria-label': 'Visual Tests locked',
                    disabled: !o,
                    onClick: o,
                  },
                  a.createElement(
                    Mr,
                    { status: 'warning' },
                    a.createElement(Vt, null)
                  )
                )
              )
            : a.createElement(
                Qn,
                {
                  id: 'button-run-tests',
                  'aria-label': 'Visual Tests locked',
                  disabled: !0,
                },
                a.createElement(Vt, null)
              );
        if (n && r) {
          let { buildProgressPercentage: c } = r;
          return a.createElement(
            Ae,
            {
              trigger: 'hover',
              tooltip: a.createElement(
                v7,
                null,
                a.createElement(
                  'div',
                  null,
                  a.createElement(Ro, { localBuildProgress: r, withEmoji: !0 })
                ),
                a.createElement(
                  Bo,
                  null,
                  typeof c == 'number' &&
                    a.createElement(Vs, { style: { width: `${c}%` } })
                )
              ),
            },
            a.createElement(
              Qn,
              { 'aria-label': 'Stop tests', onClick: () => s() },
              a.createElement(Fd, { style: { width: 10, margin: 2 } }),
              a.createElement(
                xi,
                { xmlns: 'http://www.w3.org/2000/svg' },
                a.createElement('circle', null)
              ),
              a.createElement(
                xi,
                { xmlns: 'http://www.w3.org/2000/svg', spinner: !0 },
                a.createElement('circle', {
                  strokeDashoffset: Math.PI * 20 * (1 - c / 100),
                })
              ),
              typeof c == 'number' &&
                a.createElement(
                  xi,
                  { xmlns: 'http://www.w3.org/2000/svg', progress: !0 },
                  a.createElement('circle', {
                    strokeDashoffset: Math.PI * 20 * (1 - c / 100),
                  })
                )
            )
          );
        }
        return t
          ? a.createElement(
              Ae,
              {
                tooltip: a.createElement(je, {
                  note: 'Code changes detected; click to run tests',
                }),
                trigger: 'hover',
                hasChrome: !1,
              },
              a.createElement(
                Qn,
                {
                  id: 'button-run-tests',
                  'aria-label': 'Run tests',
                  onClick: () => l(),
                },
                a.createElement(
                  Mr,
                  { status: 'notification' },
                  a.createElement(Vt, null)
                )
              )
            )
          : a.createElement(
              Ae,
              {
                trigger: 'hover',
                hasChrome: !1,
                tooltip: a.createElement(je, {
                  note: 'No code changes detected. Rerun tests to take new snapshots.',
                }),
              },
              a.createElement(
                Qn,
                {
                  id: 'button-run-tests',
                  'aria-label': 'Run tests',
                  onClick: () => l(),
                },
                a.createElement(Vt, null)
              )
            );
      },
      E7 = w(ee)({
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        width: 200,
        marginTop: 15,
      });
    function Nr({ localBuildProgress: e }) {
      return a.createElement(
        E7,
        { center: !0, small: !0 },
        a.createElement(
          Bo,
          null,
          typeof e.buildProgressPercentage == 'number' &&
            a.createElement(Vs, {
              style: { width: `${e.buildProgressPercentage}%` },
            })
        ),
        a.createElement(Ro, {
          center: !0,
          muted: !0,
          small: !0,
          localBuildProgress: e,
        })
      );
    }
    var k7 = w.div(({ status: e, theme: t }) => ({
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: t.background.content,
        border: `1px solid ${
          e === 'positive' ? t.color.green : t.appBorderColor
        }`,
        borderRadius: 5,
        margin: '15px 15px 0',
        padding: 5,
        minHeight: 200,
        minWidth: 200,
        maxWidth: 500,
        img: { display: 'block', maxWidth: '100%', borderRadius: 3 },
        svg: {
          position: 'absolute',
          top: -12,
          left: -12,
          width: 24,
          height: 24,
          padding: 5,
          color: t.color.lightest,
          borderRadius: '50%',
          backgroundColor: t.color.green,
        },
      })),
      y1 = ({ backgroundColor: e, status: t, thumbnailUrl: n }) =>
        a.createElement(
          k7,
          { status: t, style: e ? { backgroundColor: e } : {} },
          a.createElement('img', { alt: 'Snapshot picture', src: n }),
          t === 'positive' && a.createElement(mo, null)
        ),
      w7 = ({ content: e }) => {
        let t = e.split(/\r?\n/);
        return a.createElement(
          a.Fragment,
          null,
          t.reduce(
            (n, r, i) =>
              n.concat([i && a.createElement('br', null), r].filter(Boolean)),
            []
          )
        );
      },
      js = ({ localBuildProgress: e, title: t }) =>
        a.createElement(
          G0,
          { warning: !0 },
          a.createElement(
            ee,
            null,
            a.createElement(
              'span',
              null,
              t && a.createElement('b', null, t, ': '),
              a.createElement(w7, {
                content: di(
                  Array.isArray(e.originalError)
                    ? e.originalError[0]?.message
                    : e.originalError?.message || 'Unknown error'
                ),
              })
            ),
            ' ',
            a.createElement(
              De,
              {
                target: '_blank',
                href: e.errorDetailsUrl || `${W1}#troubleshooting`,
                withArrow: !0,
              },
              e.errorDetailsUrl ? 'Details' : 'Troubleshoot'
            )
          )
        ),
      C7 = ({ children: e, localBuildProgress: t }) =>
        a.createElement(
          xe,
          { footer: null },
          a.createElement(
            fe,
            null,
            a.createElement(
              ge,
              null,
              a.createElement(
                'div',
                null,
                a.createElement(Se, null, 'Build failed'),
                a.createElement(
                  ee,
                  { center: !0, muted: !0 },
                  'Check the Storybook process on the command line for more details.'
                )
              ),
              a.createElement(js, { localBuildProgress: t }),
              e
            )
          )
        ),
      x7 = ({ children: e, localBuildProgress: t }) =>
        a.createElement(
          xe,
          { footer: null },
          a.createElement(
            fe,
            null,
            a.createElement(
              ge,
              null,
              a.createElement(
                'div',
                null,
                a.createElement(Se, null, 'Snapshot limit reached'),
                a.createElement(
                  ee,
                  { center: !0, muted: !0 },
                  'Your account has reached its monthly snapshot limit. Visual testing is disabled. Upgrade your plan to increase your quota.'
                )
              ),
              a.createElement(
                he,
                { asChild: !0, size: 'medium', variant: 'solid' },
                a.createElement(
                  'a',
                  { href: t.errorDetailsUrl, target: '_new' },
                  'Upgrade plan'
                )
              ),
              e
            )
          )
        ),
      S7 =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHUSURBVHgB7ZfPTupAFMa/mbb0XkAk6r2516jRnXHlxr0+ib4J+iTqm7Bx5YaVcWPQECUoGiJCpX/mOKcxRo2DILa44Jc0Taad+b45mZkzR+CZaq2+CcsqAWIdoCKSowyFw5WFvwcvLRf1m1Kt0SSv51OkFCVJx+sRa1W1JmuLav16x5Zyf/7PDKQQSAM9RVzd3CH0aUsKEtsz0/nUxBnWmisWAItKkkCbWddF2mQcm1/rEmPiOeJF2/TD+f0pKo0jBKqHUcg5U1ib28ByYfXD78YInDSPRxZnOkE7nogJ2a/jd9FvImNbAz/GgHERZp08pjJ8OA3uMVIh2kELXvAwcB/j6HmnOJQ4Y0kbBW16GGS/wb7CsKYni9AYZ9f6haydhzCEVFGEbtiFH3kYBWMEfts5o3jcUVjIaYOjIvsJfIb4hhQ+WYQTAz/XgDXALuCz4D2ckN7Dt6KhDfzLLcGxMsaORApe2MFbQyrOhq9xpIu12Q3jOMaTcNqdjZ+k0REQLS4UxoXUZ1nFD0KkTffR51dZUhTuNVttpBkF1rq717cmFR3GDdXLxm6tcUudxx4lCRe+XACz1pnWZO2XbMJFKteJXKohMYTeIlRBFO2tLP4vc8sThEpu8pkDBW8AAAAASUVORK5CYII=',
      M7 =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN0SURBVHgBvVdLTxNRFP7uUDpSC7Q8rFSLqWJEExOfC1/xHWPiQuPShS50Y/wP6F9wq1HZuTAxMXFlNGzUhWIQDWICLYhSC4XWlj5m2pnjvS20NNDhltB+i870zpnzffece8/cw7CI4FToDBoa+gB2ACAXaocBmOj3b9/yrDgyGZrtmwpHKK3pZJgm1RLJtEaCK8g5BTcLhmZu2RTlqbezDQpjqAf4FDE9O4+cTmcVRuxmW6uzbuQCgqvD1QI0UJ9CoDMOVUW9YW+0icsBG9YDLQNMjIAS0fxf1u4FvH5A3STtYjHiruoEcGL6/Bb07X3ZMImfZjfYnkNgR86jGsgL4LM1Xz3OXys9F+KQiIGdvQ5ZKLKGBefRte1+DoKG30MWcgKmg9zxF8iCBt8W1slGCaDgCKqCIA8FpEzlIjAXQrWgiNw70mugVpDaBczF9/nXvzy03NxmAo4sqEUrN2rls3YUPLIUkOnoQpOEb0sBWVPDp5l3SOqjuDjeVi5KzYG2x0E9KZi7eCVYVoNEXXgY2YpdvOaf38bgtlfmqJiCZDaO15P9CMS/I9xtILzDKDfg0WD7LwHnzpWRC3w0TiBGbgxGgEejhKiO6gW8+f0cC9l/JadXNCRdVDI42QtcPQrFcwHMubM4HCIv3hmlahjlmXoRIFQlQMx6ObnAQivhzY10SQQnLzrxFAh/GHvxJHsbGSoPSSABjFSoYauugV8LY6saCxEv76bgne5Ec5MCj65DIxMxeDBE9xDIeVEJIh373JICotoMrDDevQlz8fIIpRu5d4tch9IicivPHOuqA8Ts2CisKsBpa7F8yWbMrxgzcw2W77jtTF6Ax+GDFexmFIyyZeQ5zToqhzsgL6DXfQR2xfp006oPF++zKYelrShE/mbIC7ArKo51XYYVnLw6qkaYz1xFJu60tL3SzauhWoUAAd/mHpzedg3Oxsrr4ZQaxUGbu+JzMfM7vWzV7bcEy2+BEOHz9+QL01RiDLqZyadms70FPudueJoKa+V4J/AhzM8t6RJxF8/K4XZepdf43LHg9Gy0e2u7q559wRImQrP8dAwM6dkc6o1UJl+1BhQycg8isUS+XaoXBNd8fIHfGP35geCf8P2p8BwlMxrVEqLxFQ2w4BrnnIK7mHjRpIo+UbRqqBlYjBfyIRjGA7+va0CM/AdEDxpHNfo8owAAAABJRU5ErkJggg==',
      N7 =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMJSURBVHgB7VfNblJBFD5z+5e0poXGNqnFRFxoUly0K+vCpG7aFyhrTRofwBcQ6974AIZo1/QFyorEBezsQkhqYqkBSoBaAcWW3+N8dxh+hFJI+Nn0S264d+65c77znXNmGEFVhCPxDRobcxGJVSK20ODgowrt2W2Ln2ojP+IpVyRxxhf5ApcrFR4kchd5hq+w9AnfIhxPvhg3jI93FubJEIKGARkinabOqVTgZ4Zg8Xx+7tbQnAPwddsySzTGLoOJN6anpmjYmJwYx8+qQSNCVXHLyAho3BAY78bo5WemFau6D/0i+vC0fx1zLYFQmmjTJshpV8+BpLrWF6kvuDYFB1GuOQfg+CDG1C90lQIgKKWH8EiFbZooWySanWi18yeRJjbfA7DZkgraZqh3Aoh+a1nl21uNesUqzAk9YaadB/VagMP3X5W9876okYvmVMoyxWZ7jY4pCKSoVnyNQDTZQvOY51g5QIq8kjjIvP2iSG8jhawKuGsCYL5iUYyhxJNFYV6IBkCEWmYAxYpv3EfwJejVI0Gv15RSAFQLprl7AoEknNYnR2S4/Ek1CWTWk5vPdkXWYVV23phKydxk55a9sgYiMprtGRWlzi8Qy9UVaJQUaYENfh0WVXTrUrHoH+qdACK2zYiaI9da+ygQtV4T3N+Y3j0WJlnUQzCtbPDssoreCCDnyCGwL2WO5JrfO+SEm8vKMaJGznW3uI/YJKbbTivXEwENFFVGRqDJaMBJtlhvNbzVXYGxjLyfnVRKOKyda6ClCHXFAyhEHVkjMKnOP2whc6ha4TsPhVknnmNl126xakSLAvsnaD82VzQosG1v/QjSY4PyV1sSZKAS5DadyujniqpjMIe2w73zv/lE+DTJ95YWqF8AGSiCGrhq+dU4iae63wu6RbuVsxNu/hFJAiKNg8LICMgmOywUSzRs/L00Fw6fweXS7ln6Nw1TBfg6z8pNolLeMwfCscSbSOIn5y7zPEjg4IsDMHx9lz7hu7bM4ZCKcyKOajQwCLlF8SGVy7v2u0s+jPwDEeUTfjDhTd4AAAAASUVORK5CYII=',
      F7 =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALVSURBVHgBxZfLbtNAFIb/8TgJCbm2adNUIOiuYpUN+7JiySPAm5Q+CfQBeIcuWYDaVYWEUIQqCLmQpEmaJq7Hw5y4dpOOadwEh0+yZnx8OWfm/HNjuKZ6VtsD5/sAqwAyj+g4goPDnUeb733L91pz/6zekpdjSwrHkVFycTmW5KuqfJJvVq013piG8W57Yw0GY1gFqon42WzDtuQLg0n2ei2XXplzgnwV81mAy31DQu6lEgmsmnjMpKJi4D9x3eN58/YDabdUkmrAuboMDqTXgV4DSOWgkuZei9iEElzyCRDbmvGnBYDmZ6C4rWIr39i8ejy1uI0aN/gKVpgNQE9BtoDIeJDUTHoP2GPVAvfFL708jrtlCMmxCClu4Vm2gd1s1zUM2kBybgCWXz3tbSJtmlicxKQBfgCkiVvoKUiv+dWhiGNZZnpv1Nee683rNWcFeM2lfQzH/oi++IUcL6LvdJAziuiIunsvOsjwAobSQT7+Ui0ruwiD3gOp4HVI2J9UtBIFXlIf8Ylzwr9XQVCZZjE0Rx8C/4EH6RABkAgDGDkNhKXA/zKSSITzA7ACv02yhwgLpSWQ+4pwmgvZQ1i89GgEiFAPgEQYQIaFn6D6Tjv0u6FF2JdDhCXJy8EPlhHheuKVGmISV9LCQA1BKs+dltpdiUlJUO6lGium+TzwH0EivHMmnIbGdSHpjm2vHV7pza5bmMN9RWgygWVJ8aubm/vOhJV8Ta0HJTUlx7AIJnPUP+p3v6NZpkRIi4i/kPwLaGNyCz0FSmiR0dFnU60HWPwpZPdUaSHjqpaE4+WOhtEiNkdpKbMJtl6ZHwDiJbCNklv35D29iVjGFoBKAes6UXb7HAy1OT6xrmysmuFoMt8cGVLYB61uH6vsBfLV7g1IG4cTQ/VH/e1Z/be8GI1llNDBlw7A5Oub8km+/QMhHVLpnEhHNUQGU5OKPIEQBzuPy0dk+QPy8+sGXJtnqwAAAABJRU5ErkJggg==',
      A7 = w.div(({ theme: e }) => ({
        border: `1px solid ${e.appBorderColor}`,
        borderRadius: e.appBorderRadius,
        padding: '6px 10px',
        fontSize: 13,
        lineHeight: '18px',
      })),
      O7 = w.div(({ theme: e }) => ({
        lineHeight: '18px',
        position: 'relative',
        borderRadius: 5,
        display: 'block',
        minWidth: '80%',
        color: e.color.warningText,
        background: e.background.warning,
        border: `1px solid ${Qa(0.5, e.color.warningText)}`,
        padding: 15,
        margin: 0,
      })),
      L7 = w(ee)(({ theme: e }) => ({ color: e.color.darkest })),
      b1 = w(ee)({ marginBottom: 5 }),
      _7 = ({
        dismissBuildError: e,
        localBuildProgress: t,
        showInitialBuildScreen: n,
        gitInfo: r,
        lastBuildHasChanges: i,
        onComplete: o,
        onSkip: l,
      }) => {
        let { selectedBuild: s } = Zs(),
          { isRunning: c, startBuild: d } = Sa(),
          u = Tn(),
          [m, p] = Me(n);
        pe(() => {
          n && p(!0);
        }, [n]);
        let [v, h] = Me(() => !m),
          [b, k] = a.useState(r.uncommittedHash),
          y = () => {
            k(r.uncommittedHash), h(!0);
          },
          [g, f] = a.useState(!1);
        if (t && t.currentStep === 'error')
          return a.createElement(
            C7,
            { localBuildProgress: t },
            a.createElement(
              Nt,
              null,
              a.createElement(
                he,
                { variant: 'solid', size: 'medium', onClick: d },
                'Try again'
              ),
              a.createElement(he, { link: !0, onClick: l }, 'Skip walkthrough')
            )
          );
        if (t?.currentStep === 'limited')
          return a.createElement(
            x7,
            { localBuildProgress: t },
            a.createElement(he, { link: !0, onClick: e }, 'Continue')
          );
        let E = a.createElement(
          'div',
          null,
          a.createElement(an, null),
          a.createElement(Se, null, 'Get started with visual testing'),
          a.createElement(
            ee,
            { center: !0, muted: !0 },
            'Take an image snapshot of your stories to save their "last known good state" as test baselines.'
          )
        );
        return m && !t
          ? a.createElement(
              xe,
              { footer: null },
              a.createElement(
                fe,
                null,
                a.createElement(
                  ge,
                  null,
                  E,
                  a.createElement(
                    Nt,
                    null,
                    a.createElement(
                      he,
                      { size: 'medium', variant: 'solid', onClick: d },
                      'Take snapshots'
                    ),
                    a.createElement(
                      he,
                      { onClick: l, link: !0 },
                      'Skip walkthrough'
                    )
                  )
                )
              )
            )
          : m && t && c
          ? a.createElement(
              xe,
              { footer: null },
              a.createElement(
                fe,
                null,
                a.createElement(
                  ge,
                  null,
                  E,
                  a.createElement(Nr, { localBuildProgress: t })
                )
              )
            )
          : t && t.currentStep === 'complete' && !v && !g
          ? a.createElement(
              xe,
              { footer: null },
              a.createElement(
                fe,
                null,
                a.createElement(
                  ge,
                  null,
                  a.createElement(
                    'div',
                    null,
                    a.createElement(
                      Se,
                      null,
                      'Nice. Your stories were saved as test baselines.'
                    ),
                    a.createElement(
                      ee,
                      { center: !0, muted: !0, block: !0 },
                      'This story was indexed and snapshotted in a standardized cloud browser.'
                    ),
                    u?.selectedComparison?.headCapture?.captureImage &&
                      a.createElement(y1, {
                        ...u?.selectedComparison?.headCapture.captureImage,
                        status: 'positive',
                      })
                  ),
                  a.createElement(
                    Nt,
                    null,
                    a.createElement(
                      b1,
                      { muted: !0 },
                      "Let's see the superpower of catching visual changes."
                    ),
                    a.createElement(
                      he,
                      { variant: 'solid', size: 'medium', onClick: y },
                      'Catch a UI change'
                    ),
                    a.createElement(
                      he,
                      { link: !0, onClick: l },
                      'Skip walkthrough'
                    )
                  )
                )
              )
            )
          : v && b === r.uncommittedHash && !c && !i
          ? a.createElement(
              xe,
              { footer: null },
              a.createElement(
                fe,
                null,
                a.createElement(
                  ge,
                  null,
                  a.createElement(
                    'div',
                    null,
                    a.createElement(Se, null, 'Make a change to this story'),
                    a.createElement(
                      ee,
                      { center: !0, muted: !0, block: !0 },
                      'In your code, adjust the markup, styling, or assets to see how visual testing works. Don\u2019t worry, you can undo it later. Here are a few ideas to get you started.'
                    )
                  ),
                  a.createElement(
                    ge,
                    {
                      style: {
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '8px',
                        margin: '10px 0',
                      },
                    },
                    a.createElement(
                      ta,
                      {
                        style: { margin: 0, alignItems: 'center', gap: '10px' },
                      },
                      a.createElement('img', {
                        src: M7,
                        alt: 'Color Palette',
                        style: { width: 32, height: 32 },
                      }),
                      'Shift the color palette'
                    ),
                    a.createElement(
                      ta,
                      {
                        style: { margin: 0, alignItems: 'center', gap: '10px' },
                      },
                      a.createElement('img', {
                        src: N7,
                        alt: 'Embiggen',
                        style: { width: 32, height: 32 },
                      }),
                      ' ',
                      'Embiggen the type'
                    ),
                    a.createElement(
                      ta,
                      {
                        style: { margin: 0, alignItems: 'center', gap: '10px' },
                      },
                      a.createElement('img', {
                        src: F7,
                        alt: 'Layout',
                        style: { width: 32, height: 32 },
                      }),
                      'Change the layout'
                    ),
                    a.createElement(
                      ta,
                      {
                        style: { margin: 0, alignItems: 'center', gap: '10px' },
                      },
                      a.createElement('img', {
                        src: S7,
                        alt: 'Adjust',
                        style: { width: 32, height: 32 },
                      }),
                      'Adjust the size or scale'
                    )
                  ),
                  a.createElement(
                    Nt,
                    null,
                    g
                      ? a.createElement(
                          O7,
                          null,
                          a.createElement(
                            L7,
                            null,
                            'No changes found in the Storybook you published. Make a UI tweak and try again to continue.'
                          )
                        )
                      : a.createElement(A7, null, 'Awaiting changes...'),
                    a.createElement(
                      he,
                      { link: !0, onClick: l },
                      'Skip walkthrough'
                    )
                  )
                )
              )
            )
          : v && b !== r.uncommittedHash && !c && !i
          ? a.createElement(
              xe,
              { footer: null },
              a.createElement(
                fe,
                null,
                a.createElement(
                  ge,
                  null,
                  a.createElement(
                    'div',
                    null,
                    a.createElement(Se, null, 'Changes detected'),
                    a.createElement(
                      ee,
                      { center: !0, muted: !0 },
                      'Time to run your first visual tests to pinpoint the exact changes made to this story.'
                    )
                  ),
                  a.createElement(
                    he,
                    {
                      variant: 'solid',
                      size: 'medium',
                      onClick: () => {
                        f(!0),
                          d(),
                          setTimeout(() => {
                            k(r.uncommittedHash);
                          }, 1e4);
                      },
                    },
                    a.createElement(Vt, null),
                    'Run visual tests'
                  )
                )
              )
            )
          : t && v && c
          ? a.createElement(
              xe,
              { footer: null },
              a.createElement(
                fe,
                null,
                a.createElement(
                  ge,
                  null,
                  a.createElement(
                    'div',
                    null,
                    a.createElement(Se, null, 'Changes detected'),
                    a.createElement(
                      ee,
                      { center: !0, muted: !0 },
                      'Time to run your first visual tests to pinpoint the exact changes made to this story.'
                    )
                  ),
                  a.createElement(Nr, { localBuildProgress: t })
                )
              )
            )
          : !c && i
          ? a.createElement(
              xe,
              { footer: null },
              a.createElement(
                fe,
                { style: { overflowY: 'auto' } },
                a.createElement(
                  ge,
                  null,
                  a.createElement(
                    'div',
                    null,
                    a.createElement(
                      Se,
                      null,
                      'Nice. Your stories were saved as test baselines.'
                    ),
                    a.createElement(
                      ee,
                      { center: !0, muted: !0, block: !0 },
                      'This story was indexed and snapshotted in a standardized cloud browser.'
                    ),
                    u.selectedComparison?.headCapture?.captureImage &&
                      a.createElement(y1, {
                        ...u.selectedComparison?.headCapture?.captureImage,
                        status: 'positive',
                      })
                  ),
                  a.createElement(
                    Nt,
                    null,
                    a.createElement(
                      b1,
                      null,
                      'You\u2019re ready to start testing!'
                    ),
                    a.createElement(
                      he,
                      { variant: 'solid', size: 'medium', onClick: o },
                      'Done'
                    )
                  )
                )
              )
            )
          : (console.info('No screen selected', {
              state: {
                runningSecondBuild: g,
                showCatchAChange: v,
                localBuildProgress: t,
                selectedStory: u,
                selectedBuild: s,
                gitInfo: r,
              },
            }),
            a.createElement(
              xe,
              { footer: null },
              a.createElement(fe, null, a.createElement(a.Fragment, null))
            ));
      },
      T7 = w.div(({ theme: e }) => ({
        background: e.background.app,
        padding: '10px 15px',
        lineHeight: '20px',
        color: e.color.defaultText,
        borderBottom: `1px solid ${e.appBorderColor}`,
      })),
      Z7 = Zt({
        from: { transform: 'rotate(0deg)' },
        to: { transform: 'rotate(359deg)' },
      }),
      Ga = { width: 10, marginRight: 8 },
      E1 = w.button(({ isWarning: e, onClick: t, theme: n }) => {
        let r = n.base === 'light' ? n.background.warning : '#2e271a';
        return {
          position: 'relative',
          display: 'flex',
          width: '100%',
          lineHeight: '20px',
          padding: '5px 7px 5px 15px',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: e ? r : n.background.app,
          border: 'none',
          borderBottom: `1px solid ${n.appBorderColor}`,
          color: n.color.defaultText,
          cursor: t ? 'pointer' : 'default',
          textAlign: 'left',
          '& > *': { zIndex: 1 },
          code: { fontFamily: n.typography.fonts.mono, fontSize: '12px' },
        };
      }),
      k1 = w.div(({ isWarning: e, percentage: t, theme: n }) => {
        let r = n.base === 'light' ? '#FFE6B1' : '#43361f';
        return {
          display: 'block',
          position: 'absolute',
          top: '0',
          height: '100%',
          left: '0',
          width: `${t}%`,
          transition: 'width 3s ease-out',
          backgroundColor: e ? r : n.background.hoverable,
          pointerEvents: 'none',
          zIndex: 0,
        };
      }),
      qa = w.div({ padding: '5px 0' }),
      I7 = w.div(({ expanded: e, theme: t }) => ({
        display: 'grid',
        gridTemplateRows: e ? '1fr' : '0fr',
        background: t.background.app,
        borderBottom: e ? `1px solid ${t.appBorderColor}` : 'none',
        transition: 'grid-template-rows 150ms ease-out',
      })),
      R7 = w.div(({ theme: e }) => ({
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        color: e.base === 'light' ? e.color.dark : e.color.lightest,
      })),
      B7 = w.div(({ isCurrent: e, isFailed: t, isPending: n, theme: r }) => ({
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
        opacity: n ? 0.7 : 1,
        color: t ? r.color.negativeText : 'inherit',
        fontWeight: e || t ? 'bold' : 'normal',
        fontFamily: 'Menlo, monospace',
        fontSize: 12,
        lineHeight: '24px',
        margin: '0 15px',
        '&:first-of-type': { marginTop: 10 },
        '&:last-of-type': { marginBottom: 10 },
        '& > div': { display: 'flex', alignItems: 'center' },
      })),
      P7 = ({ localBuildProgress: e, expanded: t = !1 }) => {
        let n = Te({});
        pe(() => {
          n.current[e.currentStep] = { ...e };
        }, [e]);
        let r = ['aborted', 'error'].includes(e.currentStep),
          i = ao.map((o) => {
            let { startedAt: l, completedAt: s } = e.stepProgress[o],
              c = !!l && !s,
              d = c && r,
              u = !l,
              m = { ...Rs[o], isCurrent: c, isFailed: d, isPending: u };
            return d
              ? {
                  ...m,
                  icon: a.createElement(m0, { style: Ga }),
                  renderLabel: m.renderProgress,
                }
              : c
              ? {
                  ...m,
                  icon: a.createElement(g0, {
                    style: { ...Ga, animation: `${Z7} 1s linear infinite` },
                  }),
                  renderLabel: m.renderProgress,
                }
              : u
              ? {
                  ...m,
                  icon: a.createElement(Hd, { style: Ga }),
                  renderLabel: m.renderName,
                }
              : {
                  ...m,
                  icon: a.createElement(mo, { style: Ga }),
                  renderLabel: m.renderComplete,
                };
          });
        return a.createElement(
          I7,
          { expanded: t },
          a.createElement(
            R7,
            null,
            i.map(
              ({
                icon: o,
                isCurrent: l,
                isFailed: s,
                isPending: c,
                key: d,
                renderLabel: u,
              }) =>
                a.createElement(
                  B7,
                  { isCurrent: l, isFailed: s, isPending: c, key: d },
                  a.createElement('div', null, o, u(n.current[d] || e))
                )
            )
          )
        );
      },
      V7 = ({
        branch: e,
        dismissBuildError: t,
        localBuildProgress: n,
        lastBuildOnBranchInProgress: r,
        switchToLastBuildOnBranch: i,
      }) => {
        let [o, l] = a.useState(!1),
          s = () => {
            l(!o);
          };
        if (n) {
          let d = ['aborted', 'error'].includes(n.currentStep);
          return a.createElement(
            a.Fragment,
            null,
            a.createElement(
              E1,
              {
                as: d ? 'div' : 'button',
                onClick: d ? void 0 : s,
                isWarning: d,
              },
              a.createElement(k1, {
                percentage: n.buildProgressPercentage,
                isWarning: d,
              }),
              a.createElement(
                qa,
                null,
                a.createElement(Ro, { localBuildProgress: n, withEmoji: !0 })
              ),
              d
                ? a.createElement(
                    rt,
                    { onClick: t },
                    a.createElement(po, { 'aria-label': 'Dismiss' })
                  )
                : a.createElement(
                    rt,
                    { as: 'div' },
                    o ? a.createElement(zd, null) : a.createElement(Dd, null)
                  )
            ),
            a.createElement(P7, { localBuildProgress: n, expanded: o || d })
          );
        }
        function c() {
          return i
            ? r
              ? a.createElement(
                  qa,
                  null,
                  'Reviewing is disabled because there\u2019s a newer build in progress on',
                  ' ',
                  a.createElement(Be, null, e),
                  '. This can happen when a build runs in CI.'
                )
              : a.createElement(
                  qa,
                  null,
                  "There's a newer snapshot with changes.",
                  ' ',
                  a.createElement(
                    dn,
                    { withArrow: !0, onClick: i },
                    'Switch to newer snapshot'
                  )
                )
            : a.createElement(
                qa,
                null,
                'Reviewing is disabled because there\u2019s a newer build on ',
                a.createElement(Be, null, e),
                '.'
              );
        }
        return a.createElement(
          E1,
          { onClick: i },
          a.createElement(k1, { percentage: 100 }),
          c()
        );
      },
      j7 = ({ onClose: e }) =>
        a.createElement(
          y0,
          null,
          a.createElement(
            Bi,
            null,
            a.createElement(
              tr,
              null,
              'Render settings',
              a.createElement(ml, null),
              a.createElement(
                vo,
                { onClick: e },
                a.createElement(go, { 'aria-label': 'Close' })
              )
            ),
            a.createElement(
              'p',
              null,
              a.createElement(Jd, null),
              'Delay: 300ms'
            ),
            a.createElement(
              'p',
              null,
              a.createElement(Xd, null),
              'Animation pause: Ends'
            ),
            a.createElement(
              'p',
              null,
              a.createElement(eu, null),
              'Threshold: 0.2'
            ),
            a.createElement(
              'p',
              null,
              a.createElement(tu, null),
              'Anti-alias: Included'
            )
          ),
          a.createElement(
            Bi,
            null,
            a.createElement(
              tr,
              null,
              'Bounding box',
              a.createElement(ml, null)
            ),
            a.createElement(
              'dl',
              null,
              a.createElement('dt', null, 'Width:'),
              a.createElement('dd', null, 'Fill viewport'),
              a.createElement('dt', null, 'Height:'),
              a.createElement('dd', null, 'Hug contents')
            )
          )
        ),
      Hs = {
        isReviewing: !1,
        userCanReview: !1,
        buildIsReviewable: !1,
        acceptTest: (e, t = 'SPEC') => Promise.resolve(),
        unacceptTest: (e, t = 'SPEC') => Promise.resolve(),
      },
      Ds = Qe(Hs),
      zs = () => Lt(Ds, 'ReviewTest'),
      H7 = ({ children: e, watchState: t = Hs }) =>
        a.createElement(Ds.Provider, { value: t }, e),
      D7 = w.div(
        ({ theme: e }) => ({
          position: 'relative',
          display: 'flex',
          background: 'transparent',
          overflow: 'hidden',
          margin: 2,
          img: { maxWidth: '100%', transition: 'filter 0.1s ease-in-out' },
          'img[data-overlay]': {
            position: 'absolute',
            opacity: 0.7,
            pointerEvents: 'none',
          },
          div: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            p: { maxWidth: 380, textAlign: 'center' },
            svg: { width: 24, height: 24 },
          },
          '& > svg': {
            position: 'absolute',
            left: 'calc(50% - 14px)',
            top: 'calc(50% - 14px)',
            width: 20,
            height: 20,
            color: e.color.lightest,
            opacity: 0,
            transition: 'opacity 0.1s ease-in-out',
            pointerEvents: 'none',
          },
        }),
        ({ href: e }) =>
          e && {
            display: 'inline-flex',
            cursor: 'pointer',
            '&:hover': {
              '& > svg': { opacity: 1 },
              img: { filter: 'brightness(85%)' },
            },
          }
      ),
      z7 = w(ge)(({ theme: e }) => ({ margin: '30px 15px' })),
      U7 = ({
        componentName: e,
        storyName: t,
        testUrl: n,
        comparisonResult: r,
        latestImage: i,
        baselineImage: o,
        baselineImageVisible: l,
        diffImage: s,
        focusImage: c,
        diffVisible: d,
        focusVisible: u,
        ...m
      }) => {
        let p = pt(),
          v = !!i && !!s && r === 'CHANGED',
          h = r === 'CAPTURE_ERROR',
          b = v && !!c,
          k = v
            ? {
                as: 'a',
                href: n,
                target: '_blank',
                title: 'View on Chromatic.com',
              }
            : {},
          y = v && d,
          g = b && u;
        return a.createElement(
          D7,
          { ...m, ...k },
          i &&
            a.createElement('img', {
              alt: `Latest snapshot for the '${t}' story of the '${e}' component`,
              src: i.imageUrl,
              style: { display: l ? 'none' : 'block' },
            }),
          o &&
            a.createElement('img', {
              alt: `Baseline snapshot for the '${t}' story of the '${e}' component`,
              src: o.imageUrl,
              style: { display: l ? 'block' : 'none' },
            }),
          v &&
            a.createElement('img', {
              alt: '',
              'data-overlay': 'diff',
              src: s.imageUrl,
              style: {
                maxWidth: `${(s.imageWidth / i.imageWidth) * 100}%`,
                opacity: y ? 0.7 : 0,
              },
            }),
          b &&
            a.createElement('img', {
              alt: '',
              'data-overlay': 'focus',
              src: c.imageUrl,
              style: {
                maxWidth: `${(c.imageWidth / i.imageWidth) * 100}%`,
                opacity: g ? 0.7 : 0,
                filter: g ? 'blur(2px)' : 'none',
              },
            }),
          v && a.createElement(h0, null),
          h &&
            !i &&
            a.createElement(
              z7,
              null,
              a.createElement(Md, {
                color: p.base === 'light' ? 'currentColor' : p.color.medium,
              }),
              a.createElement(
                ee,
                { center: !0, muted: !0 },
                'A snapshot couldn\u2019t be captured. This often occurs when a story has a code error. Confirm that this story successfully renders in your local Storybook and run the build again.'
              )
            )
        );
      },
      $7 = (e) =>
        a.createElement(
          'svg',
          {
            width: '16',
            height: '16',
            viewBox: '0 0 16 16',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ...e,
          },
          a.createElement('path', {
            d: 'M5.06982 9.68493L7.99484 4.63927L14.5786 4.62406C14.5252 4.52043 14.4696 4.41742 14.4109 4.31532C12.372 0.768556 7.84405 -0.453864 4.29726 1.58495C3.24614 2.1892 2.39921 3.01211 1.78076 3.96327L5.06982 9.68493Z',
            fill: '#DB4437',
          }),
          a.createElement('path', {
            d: 'M10.9276 9.68457L5.09539 9.6743L1.79036 3.98022C1.72727 4.07822 1.66591 4.17795 1.60682 4.27985C-0.445348 7.81892 0.759985 12.3515 4.29905 14.4037C5.34791 15.0118 6.48403 15.3338 7.617 15.3939L10.9276 9.68457Z',
            fill: '#0F9D58',
          }),
          a.createElement('path', {
            d: 'M7.98649 4.61194L10.9032 9.66241L7.63525 15.3778C7.75167 15.3833 7.86871 15.3863 7.98649 15.3863C12.0775 15.3863 15.3939 12.0699 15.3939 7.97893C15.3939 6.76648 15.1025 5.62211 14.5861 4.61194L7.98649 4.61194Z',
            fill: '#FFCD40',
          }),
          a.createElement('path', {
            d: 'M8.01367 4.6366V6.40005L14.613 4.6366H8.01367Z',
            fill: 'url(#paint0_radial_466_21161)',
          }),
          a.createElement('path', {
            d: 'M1.78198 4.00098L6.60102 8.8192L5.09764 9.687L1.78198 4.00098Z',
            fill: 'url(#paint1_radial_466_21161)',
          }),
          a.createElement('path', {
            d: 'M7.6626 15.4017L9.42689 8.81921L10.9303 9.68702L7.6626 15.4017Z',
            fill: 'url(#paint2_radial_466_21161)',
          }),
          a.createElement('ellipse', {
            cx: '8.01347',
            cy: '8.00358',
            rx: '3.36699',
            ry: '3.36699',
            fill: '#F1F1F1',
          }),
          a.createElement('ellipse', {
            cx: '8.01367',
            cy: '8.00354',
            rx: '2.69361',
            ry: '2.6936',
            fill: '#4285F4',
          }),
          a.createElement(
            'defs',
            null,
            a.createElement(
              'radialGradient',
              {
                id: 'paint0_radial_466_21161',
                cx: '0',
                cy: '0',
                r: '1',
                gradientUnits: 'userSpaceOnUse',
                gradientTransform:
                  'translate(7.69229 4.63226) scale(7.07721 1.89116)',
              },
              a.createElement('stop', {
                stopColor: '#3E2723',
                stopOpacity: '0.2',
              }),
              a.createElement('stop', {
                offset: '1',
                stopColor: '#3E2723',
                stopOpacity: '0.01',
              })
            ),
            a.createElement(
              'radialGradient',
              {
                id: 'paint1_radial_466_21161',
                cx: '0',
                cy: '0',
                r: '1',
                gradientUnits: 'userSpaceOnUse',
                gradientTransform:
                  'translate(1.77445 4.00677) scale(6.56938 7.75127)',
              },
              a.createElement('stop', {
                stopColor: '#3E2723',
                stopOpacity: '0.2',
              }),
              a.createElement('stop', {
                offset: '1',
                stopColor: '#3E2723',
                stopOpacity: '0.01',
              })
            ),
            a.createElement(
              'radialGradient',
              {
                id: 'paint2_radial_466_21161',
                cx: '0',
                cy: '0',
                r: '1',
                gradientUnits: 'userSpaceOnUse',
                gradientTransform:
                  'translate(8.00025 8.01489) scale(7.39644 14.8995)',
              },
              a.createElement('stop', {
                stopColor: '#263238',
                stopOpacity: '0.2',
              }),
              a.createElement('stop', {
                offset: '1',
                stopColor: '#263238',
                stopOpacity: '0.01',
              })
            )
          )
        ),
      W7 = (e) =>
        a.createElement(
          'svg',
          {
            width: '16',
            height: '16',
            viewBox: '0 0 16 16',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ...e,
          },
          a.createElement('circle', {
            cx: '8.00009',
            cy: '7.99997',
            r: '7.7037',
            fill: 'url(#paint0_linear_466_21186)',
          }),
          a.createElement('ellipse', {
            cx: '8.00094',
            cy: '8.00094',
            rx: '7.06173',
            ry: '7.06173',
            fill: 'url(#paint1_radial_466_21186)',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M8.07134 1.36353C8.03043 1.36353 7.99727 1.39669 7.99727 1.4376V2.56469C7.99727 2.6056 8.03043 2.63877 8.07134 2.63877C8.11225 2.63877 8.14542 2.6056 8.14542 2.56469V1.4376C8.14542 1.39669 8.11225 1.36353 8.07134 1.36353ZM8.07134 14.7792C8.11225 14.7792 8.14542 14.746 8.14542 14.7051V13.578C8.14542 13.5371 8.11225 13.5039 8.07134 13.5039C8.03043 13.5039 7.99727 13.5371 7.99727 13.578V14.7051C7.99727 14.746 8.03043 14.7792 8.07134 14.7792ZM8.64883 1.46214C8.65292 1.42143 8.68923 1.39175 8.72994 1.39584C8.77064 1.39993 8.80032 1.43625 8.79623 1.47695L8.74793 1.95766C8.74384 1.99836 8.70752 2.02804 8.66682 2.02395C8.62612 2.01986 8.59643 1.98355 8.60052 1.94284L8.64883 1.46214ZM7.41372 14.7468C7.45442 14.7509 7.49074 14.7213 7.49483 14.6806L7.54313 14.1998C7.54722 14.1591 7.51754 14.1228 7.47683 14.1187C7.43613 14.1146 7.39982 14.1443 7.39573 14.185L7.34742 14.6657C7.34333 14.7064 7.37301 14.7428 7.41372 14.7468ZM14.7051 7.99727C14.746 7.99727 14.7792 8.03043 14.7792 8.07134C14.7792 8.11225 14.746 8.14542 14.7051 8.14542H13.578C13.5371 8.14542 13.5039 8.11225 13.5039 8.07134C13.5039 8.03043 13.5371 7.99727 13.578 7.99727H14.7051ZM1.36353 8.07134C1.36353 8.11225 1.39669 8.14542 1.4376 8.14542H2.56469C2.6056 8.14542 2.63877 8.11225 2.63877 8.07134C2.63877 8.03043 2.6056 7.99727 2.56469 7.99727H1.4376C1.39669 7.99727 1.36353 8.03043 1.36353 8.07134ZM14.6806 8.64883C14.7213 8.65292 14.7509 8.68923 14.7468 8.72994C14.7428 8.77064 14.7064 8.80032 14.6657 8.79623L14.185 8.74793C14.1443 8.74384 14.1146 8.70752 14.1187 8.66682C14.1228 8.62612 14.1591 8.59643 14.1998 8.60052L14.6806 8.64883ZM1.39584 7.41372C1.39175 7.45442 1.42143 7.49074 1.46214 7.49483L1.94284 7.54313C1.98355 7.54722 2.01986 7.51754 2.02395 7.47683C2.02804 7.43613 1.99836 7.39982 1.95766 7.39573L1.47695 7.34742C1.43625 7.34333 1.39993 7.37301 1.39584 7.41372ZM12.7097 3.3282C12.7387 3.29927 12.7856 3.29927 12.8145 3.3282C12.8434 3.35713 12.8434 3.40403 12.8145 3.43296L12.0175 4.22994C11.9886 4.25887 11.9417 4.25887 11.9127 4.22994C11.8838 4.20101 11.8838 4.15411 11.9127 4.12518L12.7097 3.3282ZM3.3282 12.8145C3.35713 12.8434 3.40403 12.8434 3.43296 12.8145L4.22994 12.0175C4.25887 11.9886 4.25887 11.9417 4.22994 11.9127C4.20101 11.8838 4.15411 11.8838 4.12518 11.9127L3.3282 12.7097C3.29927 12.7387 3.29927 12.7856 3.3282 12.8145ZM13.1523 3.80568C13.1839 3.77973 13.2306 3.78433 13.2566 3.81595C13.2825 3.84757 13.2779 3.89425 13.2463 3.9202L12.8729 4.22664C12.8413 4.2526 12.7946 4.248 12.7686 4.21638C12.7427 4.18475 12.7473 4.13808 12.7789 4.11212L13.1523 3.80568ZM2.88614 12.3267C2.91209 12.3584 2.95876 12.363 2.99039 12.337L3.36378 12.0306C3.3954 12.0046 3.4 11.9579 3.37404 11.9263C3.34809 11.8947 3.30142 11.8901 3.26979 11.916L2.8964 12.2225C2.86478 12.2484 2.86018 12.2951 2.88614 12.3267ZM12.8145 12.7097C12.8434 12.7387 12.8434 12.7856 12.8145 12.8145C12.7856 12.8434 12.7387 12.8434 12.7097 12.8145L11.9127 12.0175C11.8838 11.9886 11.8838 11.9417 11.9127 11.9127C11.9417 11.8838 11.9886 11.8838 12.0175 11.9127L12.8145 12.7097ZM3.3282 3.3282C3.29927 3.35713 3.29927 3.40403 3.3282 3.43296L4.12518 4.22994C4.15411 4.25887 4.20101 4.25887 4.22994 4.22994C4.25887 4.20101 4.25887 4.15411 4.22994 4.12518L3.43296 3.3282C3.40403 3.29927 3.35713 3.29927 3.3282 3.3282ZM12.337 13.1523C12.363 13.1839 12.3584 13.2306 12.3267 13.2566C12.2951 13.2825 12.2484 13.2779 12.2225 13.2463L11.916 12.8729C11.8901 12.8413 11.8947 12.7946 11.9263 12.7686C11.9579 12.7427 12.0046 12.7473 12.0306 12.7789L12.337 13.1523ZM3.81595 2.88614C3.78433 2.91209 3.77973 2.95876 3.80568 2.99039L4.11212 3.36378C4.13808 3.3954 4.18475 3.4 4.21638 3.37404C4.248 3.34809 4.2526 3.30142 4.22664 3.26979L3.9202 2.8964C3.89425 2.86478 3.84757 2.86018 3.81595 2.88614ZM10.5415 1.91422C10.5572 1.87643 10.6005 1.85848 10.6383 1.87413C10.6761 1.88979 10.6941 1.93312 10.6784 1.97092L10.2471 3.01221C10.2314 3.05 10.1881 3.06795 10.1503 3.05229C10.1125 3.03664 10.0946 2.99331 10.1102 2.95551L10.5415 1.91422ZM5.50437 14.2686C5.54216 14.2842 5.58549 14.2663 5.60115 14.2285L6.03247 13.1872C6.04813 13.1494 6.03018 13.1061 5.99238 13.0904C5.95459 13.0747 5.91126 13.0927 5.8956 13.1305L5.46428 14.1718C5.44862 14.2096 5.46657 14.2529 5.50437 14.2686ZM11.1332 2.18598C11.1524 2.1499 11.1973 2.13628 11.2334 2.15557C11.2695 2.17486 11.2831 2.21974 11.2638 2.25582L11.0361 2.68183C11.0168 2.7179 10.9719 2.73152 10.9358 2.71223C10.8998 2.69295 10.8861 2.64806 10.9054 2.61199L11.1332 2.18598ZM4.90931 13.9871C4.94539 14.0064 4.99027 13.9928 5.00955 13.9567L5.23726 13.5307C5.25654 13.4946 5.24293 13.4497 5.20685 13.4305C5.17077 13.4112 5.12589 13.4248 5.1066 13.4609L4.8789 13.8869C4.85961 13.923 4.87323 13.9678 4.90931 13.9871ZM14.2285 10.5415C14.2663 10.5572 14.2842 10.6005 14.2686 10.6383C14.2529 10.6761 14.2096 10.6941 14.1718 10.6784L13.1305 10.2471C13.0927 10.2314 13.0747 10.1881 13.0904 10.1503C13.1061 10.1125 13.1494 10.0946 13.1872 10.1102L14.2285 10.5415ZM1.87412 5.50437C1.85846 5.54216 1.87641 5.58549 1.91421 5.60115L2.95551 6.03247C2.99331 6.04813 3.03664 6.03018 3.05229 5.99238C3.06795 5.95459 3.05 5.91126 3.0122 5.8956L1.9709 5.46428C1.9331 5.44862 1.88977 5.46657 1.87412 5.50437ZM13.9567 11.1332C13.9928 11.1524 14.0064 11.1973 13.9871 11.2334C13.9678 11.2695 13.923 11.2831 13.8869 11.2638L13.4609 11.0361C13.4248 11.0168 13.4112 10.9719 13.4305 10.9358C13.4497 10.8998 13.4946 10.8861 13.5307 10.9054L13.9567 11.1332ZM2.15557 4.90929C2.13628 4.94537 2.1499 4.99025 2.18598 5.00954L2.61199 5.23726C2.64806 5.25654 2.69295 5.24293 2.71223 5.20685C2.73152 5.17077 2.7179 5.12589 2.68183 5.1066L2.25582 4.87888C2.21974 4.8596 2.17486 4.87321 2.15557 4.90929ZM14.1718 5.46428C14.2096 5.44862 14.2529 5.46657 14.2686 5.50437C14.2842 5.54216 14.2663 5.58549 14.2285 5.60115L13.1872 6.03247C13.1494 6.04813 13.1061 6.03018 13.0904 5.99238C13.0747 5.95459 13.0927 5.91126 13.1305 5.8956L14.1718 5.46428ZM1.87413 10.6383C1.88979 10.6761 1.93312 10.6941 1.97092 10.6784L3.01221 10.2471C3.05 10.2314 3.06795 10.1881 3.05229 10.1503C3.03664 10.1125 2.99331 10.0946 2.95551 10.1102L1.91422 10.5415C1.87643 10.5572 1.85848 10.6005 1.87413 10.6383ZM14.3979 6.07477C14.4371 6.0629 14.4785 6.08501 14.4903 6.12416C14.5022 6.1633 14.4801 6.20467 14.441 6.21654L13.9787 6.35677C13.9396 6.36864 13.8982 6.34654 13.8863 6.30739C13.8744 6.26824 13.8965 6.22688 13.9357 6.215L14.3979 6.07477ZM1.65237 10.0185C1.66425 10.0577 1.70561 10.0798 1.74476 10.0679L2.20699 9.92769C2.24614 9.91581 2.26825 9.87445 2.25637 9.8353C2.2445 9.79615 2.20313 9.77404 2.16399 9.78592L1.70175 9.92615C1.6626 9.93802 1.64049 9.97939 1.65237 10.0185ZM10.6383 14.2686C10.6005 14.2842 10.5572 14.2663 10.5415 14.2285L10.1102 13.1872C10.0946 13.1494 10.1125 13.1061 10.1503 13.0904C10.1881 13.0747 10.2314 13.0927 10.2471 13.1305L10.6784 14.1718C10.6941 14.2096 10.6761 14.2529 10.6383 14.2686ZM5.50437 1.87413C5.46657 1.88979 5.44862 1.93312 5.46428 1.97092L5.8956 3.01221C5.91126 3.05 5.95459 3.06795 5.99238 3.05229C6.03018 3.03664 6.04813 2.99331 6.03247 2.95551L5.60115 1.91422C5.58549 1.87643 5.54216 1.85848 5.50437 1.87413ZM10.0679 14.3979C10.0798 14.4371 10.0577 14.4785 10.0185 14.4903C9.97939 14.5022 9.93802 14.4801 9.92615 14.441L9.78592 13.9787C9.77404 13.9396 9.79615 13.8982 9.8353 13.8863C9.87445 13.8744 9.91581 13.8965 9.92769 13.9357L10.0679 14.3979ZM6.12417 1.65237C6.08502 1.66424 6.06291 1.70561 6.07479 1.74475L6.215 2.20699C6.22688 2.24614 6.26824 2.26825 6.30739 2.25637C6.34654 2.2445 6.36864 2.20314 6.35677 2.16399L6.21656 1.70175C6.20468 1.6626 6.16332 1.64049 6.12417 1.65237ZM9.29287 1.55062C9.30085 1.5105 9.33985 1.48444 9.37997 1.49242C9.4201 1.5004 9.44615 1.5394 9.43817 1.57952L9.21829 2.68496C9.21031 2.72508 9.17131 2.75114 9.13119 2.74316C9.09107 2.73518 9.06501 2.69618 9.07299 2.65606L9.29287 1.55062ZM6.76272 14.6503C6.80284 14.6583 6.84184 14.6322 6.84982 14.5921L7.0697 13.4866C7.07768 13.4465 7.05162 13.4075 7.0115 13.3995C6.97137 13.3916 6.93238 13.4176 6.9244 13.4577L6.70452 14.5632C6.69654 14.6033 6.72259 14.6423 6.76272 14.6503ZM9.92615 1.70175C9.93802 1.6626 9.97939 1.64049 10.0185 1.65237C10.0577 1.66425 10.0798 1.70561 10.0679 1.74476L9.92769 2.20699C9.91581 2.24614 9.87445 2.26825 9.8353 2.25637C9.79615 2.2445 9.77404 2.20313 9.78592 2.16399L9.92615 1.70175ZM6.12417 14.4903C6.16332 14.5022 6.20469 14.4801 6.21656 14.441L6.35677 13.9787C6.36864 13.9396 6.34653 13.8982 6.30739 13.8863C6.26824 13.8744 6.22687 13.8965 6.215 13.9357L6.07479 14.398C6.06291 14.4371 6.08502 14.4785 6.12417 14.4903ZM14.5921 9.29287C14.6322 9.30085 14.6583 9.33985 14.6503 9.37997C14.6423 9.4201 14.6033 9.44615 14.5632 9.43817L13.4577 9.21829C13.4176 9.21031 13.3916 9.17131 13.3995 9.13119C13.4075 9.09107 13.4465 9.06501 13.4866 9.07299L14.5921 9.29287ZM1.49242 6.76272C1.48444 6.80284 1.5105 6.84184 1.55062 6.84982L2.65606 7.0697C2.69618 7.07768 2.73518 7.05162 2.74316 7.0115C2.75114 6.97137 2.72508 6.93238 2.68496 6.9244L1.57952 6.70452C1.5394 6.69654 1.5004 6.72259 1.49242 6.76272ZM14.441 9.92615C14.4801 9.93802 14.5022 9.97939 14.4903 10.0185C14.4785 10.0577 14.4371 10.0798 14.3979 10.0679L13.9357 9.92769C13.8965 9.91581 13.8744 9.87445 13.8863 9.8353C13.8982 9.79615 13.9396 9.77404 13.9787 9.78592L14.441 9.92615ZM1.65237 6.12415C1.64049 6.1633 1.6626 6.20467 1.70175 6.21654L2.16399 6.35677C2.20313 6.36864 2.2445 6.34654 2.25637 6.30739C2.26825 6.26824 2.24614 6.22688 2.20699 6.215L1.74476 6.07477C1.70561 6.0629 1.66425 6.08501 1.65237 6.12415ZM13.5459 4.32424C13.58 4.30151 13.626 4.31066 13.6487 4.34468C13.6714 4.37869 13.6623 4.42469 13.6282 4.44742L12.6911 5.0736C12.6571 5.09633 12.6111 5.08718 12.5884 5.05317C12.5656 5.01915 12.5748 4.97315 12.6088 4.95042L13.5459 4.32424ZM2.494 11.798C2.51673 11.832 2.56273 11.8412 2.59675 11.8184L3.53389 11.1923C3.56791 11.1695 3.57706 11.1235 3.55433 11.0895C3.5316 11.0555 3.4856 11.0464 3.45159 11.0691L2.51444 11.6953C2.48043 11.718 2.47128 11.764 2.494 11.798ZM13.8869 4.87888C13.923 4.8596 13.9678 4.87321 13.9871 4.90929C14.0064 4.94537 13.9928 4.99025 13.9567 5.00954L13.5307 5.23726C13.4946 5.25654 13.4497 5.24293 13.4305 5.20685C13.4112 5.17077 13.4248 5.12589 13.4609 5.1066L13.8869 4.87888ZM2.15557 11.2334C2.17486 11.2695 2.21974 11.2831 2.25582 11.2638L2.68183 11.0361C2.7179 11.0168 2.73152 10.9719 2.71223 10.9358C2.69295 10.8998 2.64806 10.8861 2.61199 10.9054L2.18598 11.1332C2.1499 11.1524 2.13628 11.1973 2.15557 11.2334ZM11.8184 13.5459C11.8412 13.58 11.832 13.626 11.798 13.6487C11.764 13.6714 11.718 13.6623 11.6953 13.6282L11.0691 12.6911C11.0464 12.6571 11.0555 12.6111 11.0895 12.5884C11.1235 12.5656 11.1695 12.5748 11.1923 12.6088L11.8184 13.5459ZM4.34468 2.494C4.31066 2.51673 4.30151 2.56273 4.32424 2.59675L4.95042 3.53389C4.97315 3.56791 5.01915 3.57706 5.05317 3.55433C5.08718 3.5316 5.09633 3.4856 5.0736 3.45159L4.44742 2.51444C4.42469 2.48043 4.37869 2.47128 4.34468 2.494ZM11.2638 13.8869C11.2831 13.923 11.2695 13.9678 11.2334 13.9871C11.1973 14.0064 11.1524 13.9928 11.1331 13.9567L10.9054 13.5307C10.8861 13.4946 10.8998 13.4497 10.9358 13.4305C10.9719 13.4112 11.0168 13.4248 11.0361 13.4609L11.2638 13.8869ZM4.90931 2.15557C4.87323 2.17485 4.85961 2.21974 4.8789 2.25581L5.1066 2.68182C5.12589 2.7179 5.17077 2.73152 5.20685 2.71223C5.24293 2.69295 5.25654 2.64807 5.23726 2.61199L5.00955 2.18598C4.99027 2.1499 4.94539 2.13628 4.90931 2.15557ZM11.6953 2.51444C11.718 2.48043 11.764 2.47128 11.798 2.494C11.832 2.51673 11.8412 2.56273 11.8184 2.59675L11.1923 3.53389C11.1695 3.56791 11.1235 3.57706 11.0895 3.55433C11.0555 3.5316 11.0464 3.4856 11.0691 3.45159L11.6953 2.51444ZM4.34468 13.6487C4.37869 13.6714 4.42469 13.6623 4.44742 13.6282L5.0736 12.6911C5.09633 12.6571 5.08718 12.6111 5.05317 12.5884C5.01915 12.5656 4.97315 12.5748 4.95042 12.6088L4.32424 13.5459C4.30151 13.58 4.31066 13.626 4.34468 13.6487ZM12.2225 2.8964C12.2484 2.86478 12.2951 2.86018 12.3267 2.88614C12.3584 2.91209 12.363 2.95876 12.337 2.99039L12.0306 3.36378C12.0046 3.3954 11.9579 3.4 11.9263 3.37404C11.8947 3.34809 11.8901 3.30142 11.916 3.26979L12.2225 2.8964ZM3.81595 13.2566C3.84757 13.2825 3.89425 13.2779 3.9202 13.2463L4.22664 12.8729C4.2526 12.8413 4.248 12.7946 4.21638 12.7686C4.18475 12.7427 4.13808 12.7473 4.11212 12.7789L3.80568 13.1523C3.77973 13.1839 3.78433 13.2306 3.81595 13.2566ZM13.6282 11.6953C13.6623 11.718 13.6714 11.764 13.6487 11.798C13.626 11.832 13.58 11.8412 13.5459 11.8184L12.6088 11.1923C12.5748 11.1695 12.5656 11.1235 12.5884 11.0895C12.6111 11.0555 12.6571 11.0464 12.6911 11.0691L13.6282 11.6953ZM2.494 4.34468C2.47128 4.37869 2.48043 4.42469 2.51444 4.44742L3.45159 5.0736C3.4856 5.09633 3.5316 5.08718 3.55433 5.05317C3.57706 5.01915 3.56791 4.97315 3.53389 4.95042L2.59675 4.32424C2.56273 4.30151 2.51673 4.31066 2.494 4.34468ZM13.2463 12.2225C13.2779 12.2484 13.2825 12.2951 13.2566 12.3267C13.2306 12.3584 13.1839 12.363 13.1523 12.337L12.7789 12.0306C12.7473 12.0046 12.7427 11.9579 12.7686 11.9263C12.7946 11.8947 12.8413 11.8901 12.8729 11.916L13.2463 12.2225ZM2.88614 3.81595C2.86018 3.84757 2.86478 3.89425 2.8964 3.9202L3.26979 4.22664C3.30142 4.2526 3.34809 4.248 3.37404 4.21638C3.4 4.18475 3.3954 4.13808 3.36378 4.11212L2.99039 3.80568C2.95876 3.77973 2.91209 3.78433 2.88614 3.81595ZM14.5632 6.70452C14.6033 6.69654 14.6423 6.72259 14.6503 6.76272C14.6583 6.80284 14.6322 6.84184 14.5921 6.84982L13.4866 7.0697C13.4465 7.07768 13.4075 7.05162 13.3995 7.0115C13.3916 6.97137 13.4176 6.93238 13.4577 6.9244L14.5632 6.70452ZM1.49242 9.37997C1.5004 9.4201 1.5394 9.44615 1.57952 9.43817L2.68496 9.21829C2.72508 9.21031 2.75114 9.17131 2.74316 9.13119C2.73518 9.09107 2.69618 9.06501 2.65606 9.07299L1.55062 9.29287C1.5105 9.30085 1.48444 9.33985 1.49242 9.37997ZM14.6657 7.34742C14.7064 7.34333 14.7428 7.37301 14.7468 7.41372C14.7509 7.45442 14.7213 7.49074 14.6806 7.49483L14.1998 7.54313C14.1591 7.54722 14.1228 7.51754 14.1187 7.47683C14.1146 7.43613 14.1443 7.39982 14.185 7.39573L14.6657 7.34742ZM1.39584 8.72994C1.39993 8.77064 1.43625 8.80032 1.47695 8.79623L1.95766 8.74793C1.99836 8.74384 2.02804 8.70752 2.02395 8.66682C2.01986 8.62612 1.98355 8.59643 1.94284 8.60052L1.46214 8.64883C1.42143 8.65292 1.39175 8.68923 1.39584 8.72994ZM9.43817 14.5632C9.44615 14.6033 9.4201 14.6423 9.37997 14.6503C9.33985 14.6583 9.30085 14.6322 9.29287 14.5921L9.07299 13.4866C9.06501 13.4465 9.09107 13.4075 9.13119 13.3995C9.17131 13.3916 9.21031 13.4176 9.21829 13.4577L9.43817 14.5632ZM6.76272 1.49242C6.72259 1.5004 6.69654 1.5394 6.70452 1.57952L6.9244 2.68496C6.93238 2.72508 6.97137 2.75114 7.0115 2.74316C7.05162 2.73518 7.07768 2.69618 7.0697 2.65606L6.84982 1.55062C6.84184 1.5105 6.80284 1.48444 6.76272 1.49242ZM8.79623 14.6657C8.80032 14.7064 8.77064 14.7428 8.72994 14.7468C8.68923 14.7509 8.65292 14.7213 8.64883 14.6806L8.60052 14.1998C8.59643 14.1591 8.62612 14.1228 8.66682 14.1187C8.70752 14.1146 8.74384 14.1443 8.74793 14.185L8.79623 14.6657ZM7.41372 1.39584C7.37301 1.39993 7.34333 1.43625 7.34742 1.47695L7.39573 1.95766C7.39982 1.99836 7.43613 2.02804 7.47683 2.02395C7.51754 2.01986 7.54722 1.98355 7.54313 1.94284L7.49483 1.46214C7.49074 1.42143 7.45442 1.39175 7.41372 1.39584Z',
            fill: '#DDDDDD',
          }),
          a.createElement('path', {
            d: 'M3.14941 12.8505L7.29562 7.28674L7.99989 7.99218L3.14941 12.8505Z',
            fill: '#DDDDDD',
          }),
          a.createElement('path', {
            d: 'M7.28662 7.29574L12.8504 3.14954L7.99204 8.00002L7.28662 7.29574Z',
            fill: '#EE4444',
          }),
          a.createElement('path', {
            d: 'M12.8505 3.14954L8.70427 8.71332L8 8.00789L12.8505 3.14954Z',
            fill: '#CC0000',
          }),
          a.createElement('path', {
            d: 'M3.14941 12.8505L8.7132 8.70427L8.00777 8L3.14941 12.8505Z',
            fill: '#AAAAAA',
          }),
          a.createElement(
            'defs',
            null,
            a.createElement(
              'linearGradient',
              {
                id: 'paint0_linear_466_21186',
                x1: '0.300303',
                y1: '0.300951',
                x2: '0.300303',
                y2: '15.7084',
                gradientUnits: 'userSpaceOnUse',
              },
              a.createElement('stop', { stopColor: '#F8F8F8' }),
              a.createElement('stop', { offset: '1', stopColor: '#CCCCCC' })
            ),
            a.createElement(
              'radialGradient',
              {
                id: 'paint1_radial_466_21186',
                cx: '0',
                cy: '0',
                r: '1',
                gradientUnits: 'userSpaceOnUse',
                gradientTransform: 'translate(8.00216 8.0046) scale(7.06173)',
              },
              a.createElement('stop', { stopColor: '#00F0FF' }),
              a.createElement('stop', { offset: '1', stopColor: '#0070E0' })
            )
          )
        ),
      G7 = (e) =>
        a.createElement(
          'svg',
          {
            width: '16',
            height: '16',
            viewBox: '0 0 16 16',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ...e,
          },
          a.createElement('path', {
            d: 'M14.9596 5.19849C14.6332 4.41337 13.9721 3.56574 13.453 3.29783C13.8755 4.12612 14.12 4.95699 14.2134 5.57708C14.2134 5.5783 14.2139 5.58133 14.2149 5.58958C13.3657 3.47293 11.9257 2.61943 10.7499 0.761053C10.6905 0.667084 10.631 0.572865 10.573 0.473553C10.5434 0.422834 10.5159 0.371004 10.4903 0.318178C10.4414 0.223861 10.4038 0.124166 10.378 0.0211155C10.3782 0.0162369 10.3765 0.0114673 10.3734 0.00774353C10.3702 0.0040198 10.3658 0.00161108 10.3609 0.000990505C10.3563 -0.000330168 10.3515 -0.000330168 10.3468 0.000990505C10.3458 0.0013655 10.3442 0.00258425 10.3431 0.00302175C10.3414 0.003678 10.3393 0.005178 10.3376 0.00614675C10.3384 0.00502175 10.3402 0.0024905 10.3407 0.00189675C8.45416 1.10677 7.81416 3.15068 7.75535 4.17327C7.00199 4.22506 6.28171 4.50262 5.68841 4.96977C5.62629 4.9173 5.56135 4.86827 5.49388 4.8229C5.3227 4.22402 5.31543 3.59017 5.47282 2.98752C4.70132 3.3388 4.10126 3.89408 3.66501 4.3844H3.66154C3.36382 4.0073 3.38482 2.76337 3.40179 2.50365C3.39822 2.48755 3.17969 2.61708 3.15107 2.63662C2.88835 2.82414 2.64275 3.03454 2.41713 3.26537C2.16039 3.52573 1.92581 3.80705 1.71582 4.1064C1.71582 4.10677 1.7156 4.10721 1.71547 4.10758C1.71547 4.10718 1.71569 4.10677 1.71582 4.1064C1.23289 4.79075 0.890387 5.56404 0.7081 6.38155C0.704506 6.39783 0.701475 6.41471 0.697975 6.43112C0.68385 6.49724 0.632975 6.82799 0.624068 6.89987C0.623381 6.9054 0.623068 6.91071 0.622412 6.91624C0.556638 7.2582 0.515905 7.60451 0.500537 7.9524C0.500537 7.96521 0.499756 7.9779 0.499756 7.99074C0.499881 12.138 3.86238 15.5 8.01001 15.5C11.7245 15.5 14.8088 12.8035 15.4126 9.26152C15.4253 9.1654 15.4355 9.06877 15.4467 8.9718C15.596 7.68399 15.4301 6.3304 14.9596 5.19849ZM6.30351 11.0764C6.33863 11.0932 6.37163 11.1116 6.40769 11.1276C6.40919 11.1287 6.41126 11.1298 6.41279 11.1308C6.37608 11.1132 6.33965 11.0951 6.30351 11.0764ZM14.2155 5.59143L14.2145 5.58415C14.2149 5.5868 14.2153 5.58958 14.2158 5.59224L14.2155 5.59143Z',
            fill: 'url(#paint0_linear_466_21172)',
          }),
          a.createElement('path', {
            d: 'M14.9598 5.19851C14.6334 4.41338 13.9723 3.56576 13.4532 3.29785C13.8757 4.12613 14.1202 4.95701 14.2136 5.5771C14.2136 5.57529 14.214 5.5786 14.2148 5.58416C14.2151 5.58682 14.2156 5.5896 14.216 5.59226C14.9246 7.5132 14.5386 9.46657 13.9823 10.6602C13.1217 12.5071 11.0381 14.3999 7.77678 14.3076C4.25319 14.2078 1.149 11.5934 0.569531 8.16904C0.463937 7.62904 0.569531 7.35485 0.622656 6.91641C0.557938 7.25441 0.533281 7.35204 0.500781 7.95257C0.500781 7.96538 0.5 7.97807 0.5 7.99091C0.500063 12.138 3.86256 15.5 8.01019 15.5C11.7247 15.5 14.8089 12.8035 15.4128 9.26154C15.4255 9.16541 15.4357 9.06879 15.4469 8.97182C15.5962 7.68401 15.4303 6.33041 14.9598 5.19851Z',
            fill: 'url(#paint1_radial_466_21172)',
          }),
          a.createElement('path', {
            d: 'M14.9598 5.19851C14.6334 4.41338 13.9723 3.56576 13.4532 3.29785C13.8757 4.12613 14.1202 4.95701 14.2136 5.5771C14.2136 5.57529 14.214 5.5786 14.2148 5.58416C14.2151 5.58682 14.2156 5.5896 14.216 5.59226C14.9246 7.5132 14.5386 9.46657 13.9823 10.6602C13.1217 12.5071 11.0381 14.3999 7.77678 14.3076C4.25319 14.2078 1.149 11.5934 0.569531 8.16904C0.463937 7.62904 0.569531 7.35485 0.622656 6.91641C0.557938 7.25441 0.533281 7.35204 0.500781 7.95257C0.500781 7.96538 0.5 7.97807 0.5 7.99091C0.500063 12.138 3.86256 15.5 8.01019 15.5C11.7247 15.5 14.8089 12.8035 15.4128 9.26154C15.4255 9.16541 15.4357 9.06879 15.4469 8.97182C15.5962 7.68401 15.4303 6.33041 14.9598 5.19851Z',
            fill: 'url(#paint2_radial_466_21172)',
          }),
          a.createElement('path', {
            d: 'M11.3101 6.08127C11.3265 6.09277 11.3413 6.10421 11.3567 6.11564C11.1683 5.78113 10.9336 5.47487 10.6596 5.20589C8.32502 2.87164 10.0474 0.144581 10.3379 0.00608106C10.3387 0.00495606 10.3405 0.0024248 10.341 0.00183105C8.45443 1.10671 7.81443 3.15061 7.75562 4.17321C7.84312 4.16714 7.93037 4.1598 8.01943 4.1598C9.42727 4.1598 10.6535 4.93386 11.3101 6.08127Z',
            fill: 'url(#paint3_radial_466_21172)',
          }),
          a.createElement('path', {
            d: 'M8.02405 6.54735C8.01177 6.73417 7.35173 7.37838 7.12092 7.37838C4.98533 7.37838 4.63867 8.6701 4.63867 8.6701C4.73327 9.75792 5.49058 10.6537 6.40777 11.1277C6.44961 11.1493 6.49195 11.1689 6.53433 11.1882C6.60698 11.2203 6.68054 11.2504 6.75492 11.2784C7.0694 11.3897 7.39881 11.4532 7.73214 11.4668C11.4753 11.6424 12.2005 6.99201 9.49917 5.64157C10.191 5.52126 10.909 5.79948 11.31 6.08117C10.6534 4.93385 9.4272 4.15979 8.01939 4.15979C7.93033 4.15979 7.84311 4.16713 7.75558 4.1732C7.00222 4.22499 6.28194 4.50255 5.68864 4.9697C5.80314 5.06657 5.93239 5.19607 6.2047 5.46432C6.71414 5.96642 8.02127 6.48635 8.02405 6.54735Z',
            fill: 'url(#paint4_radial_466_21172)',
          }),
          a.createElement('path', {
            d: 'M8.02405 6.54735C8.01177 6.73417 7.35173 7.37838 7.12092 7.37838C4.98533 7.37838 4.63867 8.6701 4.63867 8.6701C4.73327 9.75792 5.49058 10.6537 6.40777 11.1277C6.44961 11.1493 6.49195 11.1689 6.53433 11.1882C6.60698 11.2203 6.68054 11.2504 6.75492 11.2784C7.0694 11.3897 7.39881 11.4532 7.73214 11.4668C11.4753 11.6424 12.2005 6.99201 9.49917 5.64157C10.191 5.52126 10.909 5.79948 11.31 6.08117C10.6534 4.93385 9.4272 4.15979 8.01939 4.15979C7.93033 4.15979 7.84311 4.16713 7.75558 4.1732C7.00222 4.22499 6.28194 4.50255 5.68864 4.9697C5.80314 5.06657 5.93239 5.19607 6.2047 5.46432C6.71414 5.96642 8.02127 6.48635 8.02405 6.54735Z',
            fill: 'url(#paint5_radial_466_21172)',
          }),
          a.createElement('path', {
            d: 'M5.3385 4.71992C5.39081 4.75366 5.4427 4.78804 5.49416 4.82305C5.32298 4.22417 5.31571 3.59032 5.4731 2.98767C4.7016 3.33895 4.10153 3.89423 3.66528 4.38455C3.70138 4.38351 4.79072 4.36392 5.3385 4.71992Z',
            fill: 'url(#paint6_radial_466_21172)',
          }),
          a.createElement('path', {
            d: 'M0.569399 8.16902C1.14887 11.5933 4.25305 14.2078 7.77665 14.3076C11.0379 14.3999 13.1216 12.507 13.9821 10.6602C14.5384 9.46646 14.9245 7.51333 14.2159 5.59224L14.2156 5.59142L14.2146 5.58414C14.2138 5.57858 14.2134 5.57527 14.2135 5.57708C14.2135 5.5783 14.214 5.58133 14.215 5.58958C14.4813 7.32899 13.5965 9.01408 12.2134 10.1535L12.2092 10.1632C9.51406 12.3577 6.93502 11.4872 6.41284 11.1309C6.37613 11.1133 6.33967 11.0951 6.30346 11.0765C4.73215 10.3255 4.08302 8.89402 4.22221 7.66633C2.89543 7.66633 2.44302 6.5473 2.44302 6.5473C2.44302 6.5473 3.63424 5.69796 5.20421 6.43664C6.65827 7.1208 8.02384 6.54736 8.02399 6.5473C8.02121 6.4863 6.71409 5.96636 6.20452 5.4643C5.93224 5.19605 5.80296 5.06671 5.68846 4.96967C5.62634 4.91721 5.5614 4.86817 5.49393 4.8228C5.44241 4.78788 5.39052 4.7535 5.33827 4.71967C4.79052 4.36367 3.70115 4.38327 3.66505 4.38421H3.66159C3.36387 4.00711 3.38487 2.76317 3.40184 2.50346C3.39827 2.48736 3.17974 2.61689 3.15112 2.63642C2.8884 2.82395 2.6428 3.03435 2.41718 3.26517C2.16043 3.5256 1.92585 3.80698 1.71587 4.10639C1.71587 4.10677 1.71565 4.10721 1.71552 4.10758C1.71552 4.10717 1.71574 4.10677 1.71587 4.10639C1.23294 4.79075 0.890436 5.56403 0.708149 6.38155C0.704555 6.39783 0.437836 7.56411 0.569399 8.16902Z',
            fill: 'url(#paint7_radial_466_21172)',
          }),
          a.createElement('path', {
            d: 'M10.6595 5.2058C10.9335 5.47478 11.1682 5.78104 11.3566 6.11555C11.398 6.14662 11.4366 6.17759 11.4694 6.2078C13.172 7.77655 12.2799 9.9953 12.2134 10.1534C13.5965 9.01405 14.4813 7.32896 14.215 5.58955C13.3657 3.47293 11.9258 2.61943 10.7499 0.761053C10.6905 0.667084 10.631 0.572866 10.573 0.473553C10.5435 0.422834 10.5159 0.371004 10.4903 0.318178C10.4415 0.223861 10.4038 0.124166 10.3781 0.0211155C10.3782 0.0162369 10.3766 0.0114673 10.3734 0.00774353C10.3703 0.0040198 10.3658 0.00161108 10.361 0.000990505C10.3564 -0.000330168 10.3515 -0.000330168 10.3469 0.000990505C10.3458 0.0013655 10.3443 0.00258425 10.3431 0.00302176C10.3415 0.003678 10.3394 0.00517801 10.3376 0.00614676C10.0473 0.144522 8.32493 2.87158 10.6595 5.2058Z',
            fill: 'url(#paint8_radial_466_21172)',
          }),
          a.createElement('path', {
            d: 'M11.4694 6.20779C11.4366 6.17757 11.398 6.1466 11.3566 6.11554C11.3413 6.10404 11.3263 6.0926 11.31 6.08117C10.909 5.79948 10.1909 5.52126 9.49912 5.64157C12.2004 6.99201 11.4752 11.6424 7.73209 11.4668C7.39876 11.4532 7.06935 11.3897 6.75487 11.2784C6.6805 11.2504 6.60694 11.2203 6.53428 11.1882C6.4919 11.1689 6.44956 11.1493 6.40771 11.1277C6.40921 11.1287 6.41128 11.1299 6.41281 11.1308C6.935 11.4871 9.51403 12.3576 12.2092 10.1631L12.2133 10.1534C12.2799 9.99542 13.1719 7.77657 11.4694 6.20779Z',
            fill: 'url(#paint9_radial_466_21172)',
          }),
          a.createElement('path', {
            d: 'M4.63871 8.67006C4.63871 8.67006 4.98537 7.37834 7.12096 7.37834C7.35183 7.37834 8.01187 6.73412 8.02408 6.54731C8.0363 6.36049 6.65846 7.12081 5.2043 6.43665C3.63433 5.69796 2.44312 6.54731 2.44312 6.54731C2.44312 6.54731 2.89552 7.66634 4.2223 7.66634C4.08315 8.89402 4.73227 10.3257 6.30355 11.0765C6.33868 11.0932 6.37168 11.1116 6.40774 11.1277C5.49062 10.6537 4.7333 9.75787 4.63871 8.67006Z',
            fill: 'url(#paint10_radial_466_21172)',
          }),
          a.createElement('path', {
            d: 'M14.9597 5.19849C14.6333 4.41337 13.9722 3.56574 13.4531 3.29783C13.8756 4.12612 14.1201 4.95699 14.2136 5.57708C14.2136 5.5783 14.214 5.58133 14.215 5.58958C13.3658 3.47293 11.9258 2.61943 10.75 0.761053C10.6906 0.667084 10.6311 0.572865 10.5731 0.473553C10.5436 0.422834 10.516 0.371004 10.4904 0.318178C10.4416 0.223861 10.4039 0.124166 10.3781 0.0211155C10.3783 0.0162369 10.3767 0.0114673 10.3735 0.00774353C10.3703 0.0040198 10.3659 0.00161108 10.3611 0.000990505C10.3565 -0.000330168 10.3516 -0.000330168 10.347 0.000990505C10.3459 0.0013655 10.3443 0.00258425 10.3432 0.00302175C10.3416 0.003678 10.3395 0.005178 10.3377 0.00614675C10.3386 0.00502175 10.3403 0.0024905 10.3408 0.00189675C8.45428 1.10677 7.81428 3.15068 7.75547 4.17327C7.84297 4.16721 7.93022 4.15987 8.01928 4.15987C9.42719 4.15987 10.6534 4.93393 11.3099 6.08124C10.9089 5.79955 10.1908 5.52133 9.49906 5.64165C12.2003 6.99208 11.4752 11.6425 7.73203 11.4669C7.3987 11.4533 7.06929 11.3898 6.75481 11.2784C6.68044 11.2505 6.60688 11.2204 6.53422 11.1882C6.49184 11.1689 6.4495 11.1494 6.40766 11.1278C6.40916 11.1288 6.41122 11.13 6.41275 11.1309C6.37605 11.1132 6.33958 11.0951 6.30337 11.0764C6.3385 11.0932 6.3715 11.1116 6.40756 11.1276C5.49038 10.6536 4.73306 9.75786 4.63847 8.67005C4.63847 8.67005 4.98513 7.37833 7.12072 7.37833C7.35159 7.37833 8.01162 6.73412 8.02384 6.5473C8.02106 6.4863 6.71394 5.96637 6.20437 5.4643C5.93209 5.19605 5.80281 5.06671 5.68831 4.96968C5.62619 4.91721 5.56125 4.86818 5.49378 4.8228C5.3226 4.22393 5.31533 3.59008 5.47272 2.98743C4.70122 3.33871 4.10116 3.89399 3.66491 4.3843H3.66144C3.36372 4.00721 3.38472 2.76327 3.40169 2.50355C3.39812 2.48746 3.17959 2.61699 3.15097 2.63652C2.88825 2.82404 2.64265 3.03445 2.41703 3.26527C2.16036 3.52567 1.92585 3.80702 1.71594 4.1064C1.71594 4.10677 1.71572 4.10721 1.71559 4.10758C1.71559 4.10718 1.71581 4.10677 1.71594 4.1064C1.23301 4.79075 0.890506 5.56404 0.708219 6.38155C0.704625 6.39783 0.701594 6.41471 0.698094 6.43112C0.683969 6.49724 0.620406 6.83277 0.611531 6.90474C0.610844 6.91027 0.612187 6.89924 0.611531 6.90474C0.553567 7.25147 0.516583 7.60137 0.500781 7.95255C0.500781 7.96537 0.5 7.97805 0.5 7.9909C0.5 12.138 3.8625 15.5 8.01012 15.5C11.7247 15.5 14.8089 12.8035 15.4127 9.26152C15.4254 9.1654 15.4356 9.06877 15.4468 8.9718C15.5961 7.68399 15.4302 6.3304 14.9597 5.19849ZM14.2147 5.58415C14.2151 5.5868 14.2155 5.58958 14.2159 5.59224L14.2157 5.59143L14.2147 5.58415Z',
            fill: 'url(#paint11_linear_466_21172)',
          }),
          a.createElement(
            'defs',
            null,
            a.createElement(
              'linearGradient',
              {
                id: 'paint0_linear_466_21172',
                x1: '13.5874',
                y1: '2.40249',
                x2: '1.52839',
                y2: '14.0351',
                gradientUnits: 'userSpaceOnUse',
              },
              a.createElement('stop', { offset: '0.05', stopColor: '#FFF44F' }),
              a.createElement('stop', { offset: '0.37', stopColor: '#FF980E' }),
              a.createElement('stop', { offset: '0.53', stopColor: '#FF3647' }),
              a.createElement('stop', { offset: '0.7', stopColor: '#E31587' })
            ),
            a.createElement(
              'radialGradient',
              {
                id: 'paint1_radial_466_21172',
                cx: '0',
                cy: '0',
                r: '1',
                gradientUnits: 'userSpaceOnUse',
                gradientTransform:
                  'translate(10.8936 1.72781) scale(15.3601 15.6187)',
              },
              a.createElement('stop', { offset: '0.13', stopColor: '#FFBD4F' }),
              a.createElement('stop', { offset: '0.28', stopColor: '#FF980E' }),
              a.createElement('stop', { offset: '0.47', stopColor: '#FF3750' }),
              a.createElement('stop', { offset: '0.78', stopColor: '#EB0878' }),
              a.createElement('stop', { offset: '0.86', stopColor: '#E50080' })
            ),
            a.createElement(
              'radialGradient',
              {
                id: 'paint2_radial_466_21172',
                cx: '0',
                cy: '0',
                r: '1',
                gradientUnits: 'userSpaceOnUse',
                gradientTransform:
                  'translate(6.43979 8.1787) scale(15.7441 15.6187)',
              },
              a.createElement('stop', { offset: '0.3', stopColor: '#960E18' }),
              a.createElement('stop', {
                offset: '0.35',
                stopColor: '#B11927',
                stopOpacity: '0.74',
              }),
              a.createElement('stop', {
                offset: '0.43',
                stopColor: '#DB293D',
                stopOpacity: '0.34',
              }),
              a.createElement('stop', {
                offset: '0.5',
                stopColor: '#F5334B',
                stopOpacity: '0.09',
              }),
              a.createElement('stop', {
                offset: '0.53',
                stopColor: '#FF3750',
                stopOpacity: '0',
              })
            ),
            a.createElement(
              'radialGradient',
              {
                id: 'paint3_radial_466_21172',
                cx: '0',
                cy: '0',
                r: '1',
                gradientUnits: 'userSpaceOnUse',
                gradientTransform:
                  'translate(9.48415 -0.731827) scale(5.04157 8.55934)',
              },
              a.createElement('stop', { offset: '0.13', stopColor: '#FFF44F' }),
              a.createElement('stop', { offset: '0.53', stopColor: '#FF980E' })
            ),
            a.createElement(
              'radialGradient',
              {
                id: 'paint4_radial_466_21172',
                cx: '0',
                cy: '0',
                r: '1',
                gradientUnits: 'userSpaceOnUse',
                gradientTransform:
                  'translate(6.15707 12.2109) scale(6.67134 7.31187)',
              },
              a.createElement('stop', { offset: '0.35', stopColor: '#3A8EE6' }),
              a.createElement('stop', { offset: '0.67', stopColor: '#9059FF' }),
              a.createElement('stop', { offset: '1', stopColor: '#C139E6' })
            ),
            a.createElement(
              'radialGradient',
              {
                id: 'paint5_radial_466_21172',
                cx: '0',
                cy: '0',
                r: '1',
                gradientUnits: 'userSpaceOnUse',
                gradientTransform:
                  'translate(7.29699 6.57271) scale(3.54248 4.314)',
              },
              a.createElement('stop', {
                offset: '0.21',
                stopColor: '#9059FF',
                stopOpacity: '0',
              }),
              a.createElement('stop', {
                offset: '0.97',
                stopColor: '#6E008B',
                stopOpacity: '0.6',
              })
            ),
            a.createElement(
              'radialGradient',
              {
                id: 'paint6_radial_466_21172',
                cx: '0',
                cy: '0',
                r: '1',
                gradientUnits: 'userSpaceOnUse',
                gradientTransform:
                  'translate(7.50592 1.1523) scale(5.30374 5.32259)',
              },
              a.createElement('stop', { offset: '0.1', stopColor: '#FFE226' }),
              a.createElement('stop', { offset: '0.79', stopColor: '#FF7139' })
            ),
            a.createElement(
              'radialGradient',
              {
                id: 'paint7_radial_466_21172',
                cx: '0',
                cy: '0',
                r: '1',
                gradientUnits: 'userSpaceOnUse',
                gradientTransform:
                  'translate(12.3495 -2.33951) scale(25.3212 21.2557)',
              },
              a.createElement('stop', { offset: '0.11', stopColor: '#FFF44F' }),
              a.createElement('stop', { offset: '0.46', stopColor: '#FF980E' }),
              a.createElement('stop', { offset: '0.72', stopColor: '#FF3647' }),
              a.createElement('stop', { offset: '0.9', stopColor: '#E31587' })
            ),
            a.createElement(
              'radialGradient',
              {
                id: 'paint8_radial_466_21172',
                cx: '0',
                cy: '0',
                r: '1',
                gradientUnits: 'userSpaceOnUse',
                gradientTransform:
                  'translate(2.94576 4.67997) rotate(77.3946) scale(8.03354 34.7519)',
              },
              a.createElement('stop', { stopColor: '#FFF44F' }),
              a.createElement('stop', { offset: '0.3', stopColor: '#FF980E' }),
              a.createElement('stop', { offset: '0.57', stopColor: '#FF3647' }),
              a.createElement('stop', { offset: '0.74', stopColor: '#E31587' })
            ),
            a.createElement(
              'radialGradient',
              {
                id: 'paint9_radial_466_21172',
                cx: '0',
                cy: '0',
                r: '1',
                gradientUnits: 'userSpaceOnUse',
                gradientTransform:
                  'translate(7.56027 3.06659) scale(14.5381 14.2827)',
              },
              a.createElement('stop', { offset: '0.14', stopColor: '#FFF44F' }),
              a.createElement('stop', { offset: '0.48', stopColor: '#FF980E' }),
              a.createElement('stop', { offset: '0.66', stopColor: '#FF3647' }),
              a.createElement('stop', { offset: '0.9', stopColor: '#E31587' })
            ),
            a.createElement(
              'radialGradient',
              {
                id: 'paint10_radial_466_21172',
                cx: '0',
                cy: '0',
                r: '1',
                gradientUnits: 'userSpaceOnUse',
                gradientTransform:
                  'translate(11.3337 3.90193) scale(17.4743 15.6328)',
              },
              a.createElement('stop', { offset: '0.09', stopColor: '#FFF44F' }),
              a.createElement('stop', { offset: '0.63', stopColor: '#FF980E' })
            ),
            a.createElement(
              'linearGradient',
              {
                id: 'paint11_linear_466_21172',
                x1: '12.5',
                y1: '2.16999',
                x2: '2.85701',
                y2: '12.7061',
                gradientUnits: 'userSpaceOnUse',
              },
              a.createElement('stop', {
                offset: '0.17',
                stopColor: '#FFF44F',
                stopOpacity: '0.8',
              }),
              a.createElement('stop', {
                offset: '0.6',
                stopColor: '#FFF44F',
                stopOpacity: '0',
              })
            )
          )
        ),
      q7 = (e) =>
        a.createElement(
          'svg',
          {
            width: '16',
            height: '16',
            viewBox: '0 0 16 16',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ...e,
          },
          a.createElement('circle', {
            cx: '8.00009',
            cy: '7.99997',
            r: '7.7037',
            fill: 'url(#paint0_linear_466_21186)',
          }),
          a.createElement('ellipse', {
            cx: '8.00094',
            cy: '8.00094',
            rx: '7.06173',
            ry: '7.06173',
            fill: 'url(#paint1_radial_466_21186)',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M8.07134 1.36353C8.03043 1.36353 7.99727 1.39669 7.99727 1.4376V2.56469C7.99727 2.6056 8.03043 2.63877 8.07134 2.63877C8.11225 2.63877 8.14542 2.6056 8.14542 2.56469V1.4376C8.14542 1.39669 8.11225 1.36353 8.07134 1.36353ZM8.07134 14.7792C8.11225 14.7792 8.14542 14.746 8.14542 14.7051V13.578C8.14542 13.5371 8.11225 13.5039 8.07134 13.5039C8.03043 13.5039 7.99727 13.5371 7.99727 13.578V14.7051C7.99727 14.746 8.03043 14.7792 8.07134 14.7792ZM8.64883 1.46214C8.65292 1.42143 8.68923 1.39175 8.72994 1.39584C8.77064 1.39993 8.80032 1.43625 8.79623 1.47695L8.74793 1.95766C8.74384 1.99836 8.70752 2.02804 8.66682 2.02395C8.62612 2.01986 8.59643 1.98355 8.60052 1.94284L8.64883 1.46214ZM7.41372 14.7468C7.45442 14.7509 7.49074 14.7213 7.49483 14.6806L7.54313 14.1998C7.54722 14.1591 7.51754 14.1228 7.47683 14.1187C7.43613 14.1146 7.39982 14.1443 7.39573 14.185L7.34742 14.6657C7.34333 14.7064 7.37301 14.7428 7.41372 14.7468ZM14.7051 7.99727C14.746 7.99727 14.7792 8.03043 14.7792 8.07134C14.7792 8.11225 14.746 8.14542 14.7051 8.14542H13.578C13.5371 8.14542 13.5039 8.11225 13.5039 8.07134C13.5039 8.03043 13.5371 7.99727 13.578 7.99727H14.7051ZM1.36353 8.07134C1.36353 8.11225 1.39669 8.14542 1.4376 8.14542H2.56469C2.6056 8.14542 2.63877 8.11225 2.63877 8.07134C2.63877 8.03043 2.6056 7.99727 2.56469 7.99727H1.4376C1.39669 7.99727 1.36353 8.03043 1.36353 8.07134ZM14.6806 8.64883C14.7213 8.65292 14.7509 8.68923 14.7468 8.72994C14.7428 8.77064 14.7064 8.80032 14.6657 8.79623L14.185 8.74793C14.1443 8.74384 14.1146 8.70752 14.1187 8.66682C14.1228 8.62612 14.1591 8.59643 14.1998 8.60052L14.6806 8.64883ZM1.39584 7.41372C1.39175 7.45442 1.42143 7.49074 1.46214 7.49483L1.94284 7.54313C1.98355 7.54722 2.01986 7.51754 2.02395 7.47683C2.02804 7.43613 1.99836 7.39982 1.95766 7.39573L1.47695 7.34742C1.43625 7.34333 1.39993 7.37301 1.39584 7.41372ZM12.7097 3.3282C12.7387 3.29927 12.7856 3.29927 12.8145 3.3282C12.8434 3.35713 12.8434 3.40403 12.8145 3.43296L12.0175 4.22994C11.9886 4.25887 11.9417 4.25887 11.9127 4.22994C11.8838 4.20101 11.8838 4.15411 11.9127 4.12518L12.7097 3.3282ZM3.3282 12.8145C3.35713 12.8434 3.40403 12.8434 3.43296 12.8145L4.22994 12.0175C4.25887 11.9886 4.25887 11.9417 4.22994 11.9127C4.20101 11.8838 4.15411 11.8838 4.12518 11.9127L3.3282 12.7097C3.29927 12.7387 3.29927 12.7856 3.3282 12.8145ZM13.1523 3.80568C13.1839 3.77973 13.2306 3.78433 13.2566 3.81595C13.2825 3.84757 13.2779 3.89425 13.2463 3.9202L12.8729 4.22664C12.8413 4.2526 12.7946 4.248 12.7686 4.21638C12.7427 4.18475 12.7473 4.13808 12.7789 4.11212L13.1523 3.80568ZM2.88614 12.3267C2.91209 12.3584 2.95876 12.363 2.99039 12.337L3.36378 12.0306C3.3954 12.0046 3.4 11.9579 3.37404 11.9263C3.34809 11.8947 3.30142 11.8901 3.26979 11.916L2.8964 12.2225C2.86478 12.2484 2.86018 12.2951 2.88614 12.3267ZM12.8145 12.7097C12.8434 12.7387 12.8434 12.7856 12.8145 12.8145C12.7856 12.8434 12.7387 12.8434 12.7097 12.8145L11.9127 12.0175C11.8838 11.9886 11.8838 11.9417 11.9127 11.9127C11.9417 11.8838 11.9886 11.8838 12.0175 11.9127L12.8145 12.7097ZM3.3282 3.3282C3.29927 3.35713 3.29927 3.40403 3.3282 3.43296L4.12518 4.22994C4.15411 4.25887 4.20101 4.25887 4.22994 4.22994C4.25887 4.20101 4.25887 4.15411 4.22994 4.12518L3.43296 3.3282C3.40403 3.29927 3.35713 3.29927 3.3282 3.3282ZM12.337 13.1523C12.363 13.1839 12.3584 13.2306 12.3267 13.2566C12.2951 13.2825 12.2484 13.2779 12.2225 13.2463L11.916 12.8729C11.8901 12.8413 11.8947 12.7946 11.9263 12.7686C11.9579 12.7427 12.0046 12.7473 12.0306 12.7789L12.337 13.1523ZM3.81595 2.88614C3.78433 2.91209 3.77973 2.95876 3.80568 2.99039L4.11212 3.36378C4.13808 3.3954 4.18475 3.4 4.21638 3.37404C4.248 3.34809 4.2526 3.30142 4.22664 3.26979L3.9202 2.8964C3.89425 2.86478 3.84757 2.86018 3.81595 2.88614ZM10.5415 1.91422C10.5572 1.87643 10.6005 1.85848 10.6383 1.87413C10.6761 1.88979 10.6941 1.93312 10.6784 1.97092L10.2471 3.01221C10.2314 3.05 10.1881 3.06795 10.1503 3.05229C10.1125 3.03664 10.0946 2.99331 10.1102 2.95551L10.5415 1.91422ZM5.50437 14.2686C5.54216 14.2842 5.58549 14.2663 5.60115 14.2285L6.03247 13.1872C6.04813 13.1494 6.03018 13.1061 5.99238 13.0904C5.95459 13.0747 5.91126 13.0927 5.8956 13.1305L5.46428 14.1718C5.44862 14.2096 5.46657 14.2529 5.50437 14.2686ZM11.1332 2.18598C11.1524 2.1499 11.1973 2.13628 11.2334 2.15557C11.2695 2.17486 11.2831 2.21974 11.2638 2.25582L11.0361 2.68183C11.0168 2.7179 10.9719 2.73152 10.9358 2.71223C10.8998 2.69295 10.8861 2.64806 10.9054 2.61199L11.1332 2.18598ZM4.90931 13.9871C4.94539 14.0064 4.99027 13.9928 5.00955 13.9567L5.23726 13.5307C5.25654 13.4946 5.24293 13.4497 5.20685 13.4305C5.17077 13.4112 5.12589 13.4248 5.1066 13.4609L4.8789 13.8869C4.85961 13.923 4.87323 13.9678 4.90931 13.9871ZM14.2285 10.5415C14.2663 10.5572 14.2842 10.6005 14.2686 10.6383C14.2529 10.6761 14.2096 10.6941 14.1718 10.6784L13.1305 10.2471C13.0927 10.2314 13.0747 10.1881 13.0904 10.1503C13.1061 10.1125 13.1494 10.0946 13.1872 10.1102L14.2285 10.5415ZM1.87412 5.50437C1.85846 5.54216 1.87641 5.58549 1.91421 5.60115L2.95551 6.03247C2.99331 6.04813 3.03664 6.03018 3.05229 5.99238C3.06795 5.95459 3.05 5.91126 3.0122 5.8956L1.9709 5.46428C1.9331 5.44862 1.88977 5.46657 1.87412 5.50437ZM13.9567 11.1332C13.9928 11.1524 14.0064 11.1973 13.9871 11.2334C13.9678 11.2695 13.923 11.2831 13.8869 11.2638L13.4609 11.0361C13.4248 11.0168 13.4112 10.9719 13.4305 10.9358C13.4497 10.8998 13.4946 10.8861 13.5307 10.9054L13.9567 11.1332ZM2.15557 4.90929C2.13628 4.94537 2.1499 4.99025 2.18598 5.00954L2.61199 5.23726C2.64806 5.25654 2.69295 5.24293 2.71223 5.20685C2.73152 5.17077 2.7179 5.12589 2.68183 5.1066L2.25582 4.87888C2.21974 4.8596 2.17486 4.87321 2.15557 4.90929ZM14.1718 5.46428C14.2096 5.44862 14.2529 5.46657 14.2686 5.50437C14.2842 5.54216 14.2663 5.58549 14.2285 5.60115L13.1872 6.03247C13.1494 6.04813 13.1061 6.03018 13.0904 5.99238C13.0747 5.95459 13.0927 5.91126 13.1305 5.8956L14.1718 5.46428ZM1.87413 10.6383C1.88979 10.6761 1.93312 10.6941 1.97092 10.6784L3.01221 10.2471C3.05 10.2314 3.06795 10.1881 3.05229 10.1503C3.03664 10.1125 2.99331 10.0946 2.95551 10.1102L1.91422 10.5415C1.87643 10.5572 1.85848 10.6005 1.87413 10.6383ZM14.3979 6.07477C14.4371 6.0629 14.4785 6.08501 14.4903 6.12416C14.5022 6.1633 14.4801 6.20467 14.441 6.21654L13.9787 6.35677C13.9396 6.36864 13.8982 6.34654 13.8863 6.30739C13.8744 6.26824 13.8965 6.22688 13.9357 6.215L14.3979 6.07477ZM1.65237 10.0185C1.66425 10.0577 1.70561 10.0798 1.74476 10.0679L2.20699 9.92769C2.24614 9.91581 2.26825 9.87445 2.25637 9.8353C2.2445 9.79615 2.20313 9.77404 2.16399 9.78592L1.70175 9.92615C1.6626 9.93802 1.64049 9.97939 1.65237 10.0185ZM10.6383 14.2686C10.6005 14.2842 10.5572 14.2663 10.5415 14.2285L10.1102 13.1872C10.0946 13.1494 10.1125 13.1061 10.1503 13.0904C10.1881 13.0747 10.2314 13.0927 10.2471 13.1305L10.6784 14.1718C10.6941 14.2096 10.6761 14.2529 10.6383 14.2686ZM5.50437 1.87413C5.46657 1.88979 5.44862 1.93312 5.46428 1.97092L5.8956 3.01221C5.91126 3.05 5.95459 3.06795 5.99238 3.05229C6.03018 3.03664 6.04813 2.99331 6.03247 2.95551L5.60115 1.91422C5.58549 1.87643 5.54216 1.85848 5.50437 1.87413ZM10.0679 14.3979C10.0798 14.4371 10.0577 14.4785 10.0185 14.4903C9.97939 14.5022 9.93802 14.4801 9.92615 14.441L9.78592 13.9787C9.77404 13.9396 9.79615 13.8982 9.8353 13.8863C9.87445 13.8744 9.91581 13.8965 9.92769 13.9357L10.0679 14.3979ZM6.12417 1.65237C6.08502 1.66424 6.06291 1.70561 6.07479 1.74475L6.215 2.20699C6.22688 2.24614 6.26824 2.26825 6.30739 2.25637C6.34654 2.2445 6.36864 2.20314 6.35677 2.16399L6.21656 1.70175C6.20468 1.6626 6.16332 1.64049 6.12417 1.65237ZM9.29287 1.55062C9.30085 1.5105 9.33985 1.48444 9.37997 1.49242C9.4201 1.5004 9.44615 1.5394 9.43817 1.57952L9.21829 2.68496C9.21031 2.72508 9.17131 2.75114 9.13119 2.74316C9.09107 2.73518 9.06501 2.69618 9.07299 2.65606L9.29287 1.55062ZM6.76272 14.6503C6.80284 14.6583 6.84184 14.6322 6.84982 14.5921L7.0697 13.4866C7.07768 13.4465 7.05162 13.4075 7.0115 13.3995C6.97137 13.3916 6.93238 13.4176 6.9244 13.4577L6.70452 14.5632C6.69654 14.6033 6.72259 14.6423 6.76272 14.6503ZM9.92615 1.70175C9.93802 1.6626 9.97939 1.64049 10.0185 1.65237C10.0577 1.66425 10.0798 1.70561 10.0679 1.74476L9.92769 2.20699C9.91581 2.24614 9.87445 2.26825 9.8353 2.25637C9.79615 2.2445 9.77404 2.20313 9.78592 2.16399L9.92615 1.70175ZM6.12417 14.4903C6.16332 14.5022 6.20469 14.4801 6.21656 14.441L6.35677 13.9787C6.36864 13.9396 6.34653 13.8982 6.30739 13.8863C6.26824 13.8744 6.22687 13.8965 6.215 13.9357L6.07479 14.398C6.06291 14.4371 6.08502 14.4785 6.12417 14.4903ZM14.5921 9.29287C14.6322 9.30085 14.6583 9.33985 14.6503 9.37997C14.6423 9.4201 14.6033 9.44615 14.5632 9.43817L13.4577 9.21829C13.4176 9.21031 13.3916 9.17131 13.3995 9.13119C13.4075 9.09107 13.4465 9.06501 13.4866 9.07299L14.5921 9.29287ZM1.49242 6.76272C1.48444 6.80284 1.5105 6.84184 1.55062 6.84982L2.65606 7.0697C2.69618 7.07768 2.73518 7.05162 2.74316 7.0115C2.75114 6.97137 2.72508 6.93238 2.68496 6.9244L1.57952 6.70452C1.5394 6.69654 1.5004 6.72259 1.49242 6.76272ZM14.441 9.92615C14.4801 9.93802 14.5022 9.97939 14.4903 10.0185C14.4785 10.0577 14.4371 10.0798 14.3979 10.0679L13.9357 9.92769C13.8965 9.91581 13.8744 9.87445 13.8863 9.8353C13.8982 9.79615 13.9396 9.77404 13.9787 9.78592L14.441 9.92615ZM1.65237 6.12415C1.64049 6.1633 1.6626 6.20467 1.70175 6.21654L2.16399 6.35677C2.20313 6.36864 2.2445 6.34654 2.25637 6.30739C2.26825 6.26824 2.24614 6.22688 2.20699 6.215L1.74476 6.07477C1.70561 6.0629 1.66425 6.08501 1.65237 6.12415ZM13.5459 4.32424C13.58 4.30151 13.626 4.31066 13.6487 4.34468C13.6714 4.37869 13.6623 4.42469 13.6282 4.44742L12.6911 5.0736C12.6571 5.09633 12.6111 5.08718 12.5884 5.05317C12.5656 5.01915 12.5748 4.97315 12.6088 4.95042L13.5459 4.32424ZM2.494 11.798C2.51673 11.832 2.56273 11.8412 2.59675 11.8184L3.53389 11.1923C3.56791 11.1695 3.57706 11.1235 3.55433 11.0895C3.5316 11.0555 3.4856 11.0464 3.45159 11.0691L2.51444 11.6953C2.48043 11.718 2.47128 11.764 2.494 11.798ZM13.8869 4.87888C13.923 4.8596 13.9678 4.87321 13.9871 4.90929C14.0064 4.94537 13.9928 4.99025 13.9567 5.00954L13.5307 5.23726C13.4946 5.25654 13.4497 5.24293 13.4305 5.20685C13.4112 5.17077 13.4248 5.12589 13.4609 5.1066L13.8869 4.87888ZM2.15557 11.2334C2.17486 11.2695 2.21974 11.2831 2.25582 11.2638L2.68183 11.0361C2.7179 11.0168 2.73152 10.9719 2.71223 10.9358C2.69295 10.8998 2.64806 10.8861 2.61199 10.9054L2.18598 11.1332C2.1499 11.1524 2.13628 11.1973 2.15557 11.2334ZM11.8184 13.5459C11.8412 13.58 11.832 13.626 11.798 13.6487C11.764 13.6714 11.718 13.6623 11.6953 13.6282L11.0691 12.6911C11.0464 12.6571 11.0555 12.6111 11.0895 12.5884C11.1235 12.5656 11.1695 12.5748 11.1923 12.6088L11.8184 13.5459ZM4.34468 2.494C4.31066 2.51673 4.30151 2.56273 4.32424 2.59675L4.95042 3.53389C4.97315 3.56791 5.01915 3.57706 5.05317 3.55433C5.08718 3.5316 5.09633 3.4856 5.0736 3.45159L4.44742 2.51444C4.42469 2.48043 4.37869 2.47128 4.34468 2.494ZM11.2638 13.8869C11.2831 13.923 11.2695 13.9678 11.2334 13.9871C11.1973 14.0064 11.1524 13.9928 11.1331 13.9567L10.9054 13.5307C10.8861 13.4946 10.8998 13.4497 10.9358 13.4305C10.9719 13.4112 11.0168 13.4248 11.0361 13.4609L11.2638 13.8869ZM4.90931 2.15557C4.87323 2.17485 4.85961 2.21974 4.8789 2.25581L5.1066 2.68182C5.12589 2.7179 5.17077 2.73152 5.20685 2.71223C5.24293 2.69295 5.25654 2.64807 5.23726 2.61199L5.00955 2.18598C4.99027 2.1499 4.94539 2.13628 4.90931 2.15557ZM11.6953 2.51444C11.718 2.48043 11.764 2.47128 11.798 2.494C11.832 2.51673 11.8412 2.56273 11.8184 2.59675L11.1923 3.53389C11.1695 3.56791 11.1235 3.57706 11.0895 3.55433C11.0555 3.5316 11.0464 3.4856 11.0691 3.45159L11.6953 2.51444ZM4.34468 13.6487C4.37869 13.6714 4.42469 13.6623 4.44742 13.6282L5.0736 12.6911C5.09633 12.6571 5.08718 12.6111 5.05317 12.5884C5.01915 12.5656 4.97315 12.5748 4.95042 12.6088L4.32424 13.5459C4.30151 13.58 4.31066 13.626 4.34468 13.6487ZM12.2225 2.8964C12.2484 2.86478 12.2951 2.86018 12.3267 2.88614C12.3584 2.91209 12.363 2.95876 12.337 2.99039L12.0306 3.36378C12.0046 3.3954 11.9579 3.4 11.9263 3.37404C11.8947 3.34809 11.8901 3.30142 11.916 3.26979L12.2225 2.8964ZM3.81595 13.2566C3.84757 13.2825 3.89425 13.2779 3.9202 13.2463L4.22664 12.8729C4.2526 12.8413 4.248 12.7946 4.21638 12.7686C4.18475 12.7427 4.13808 12.7473 4.11212 12.7789L3.80568 13.1523C3.77973 13.1839 3.78433 13.2306 3.81595 13.2566ZM13.6282 11.6953C13.6623 11.718 13.6714 11.764 13.6487 11.798C13.626 11.832 13.58 11.8412 13.5459 11.8184L12.6088 11.1923C12.5748 11.1695 12.5656 11.1235 12.5884 11.0895C12.6111 11.0555 12.6571 11.0464 12.6911 11.0691L13.6282 11.6953ZM2.494 4.34468C2.47128 4.37869 2.48043 4.42469 2.51444 4.44742L3.45159 5.0736C3.4856 5.09633 3.5316 5.08718 3.55433 5.05317C3.57706 5.01915 3.56791 4.97315 3.53389 4.95042L2.59675 4.32424C2.56273 4.30151 2.51673 4.31066 2.494 4.34468ZM13.2463 12.2225C13.2779 12.2484 13.2825 12.2951 13.2566 12.3267C13.2306 12.3584 13.1839 12.363 13.1523 12.337L12.7789 12.0306C12.7473 12.0046 12.7427 11.9579 12.7686 11.9263C12.7946 11.8947 12.8413 11.8901 12.8729 11.916L13.2463 12.2225ZM2.88614 3.81595C2.86018 3.84757 2.86478 3.89425 2.8964 3.9202L3.26979 4.22664C3.30142 4.2526 3.34809 4.248 3.37404 4.21638C3.4 4.18475 3.3954 4.13808 3.36378 4.11212L2.99039 3.80568C2.95876 3.77973 2.91209 3.78433 2.88614 3.81595ZM14.5632 6.70452C14.6033 6.69654 14.6423 6.72259 14.6503 6.76272C14.6583 6.80284 14.6322 6.84184 14.5921 6.84982L13.4866 7.0697C13.4465 7.07768 13.4075 7.05162 13.3995 7.0115C13.3916 6.97137 13.4176 6.93238 13.4577 6.9244L14.5632 6.70452ZM1.49242 9.37997C1.5004 9.4201 1.5394 9.44615 1.57952 9.43817L2.68496 9.21829C2.72508 9.21031 2.75114 9.17131 2.74316 9.13119C2.73518 9.09107 2.69618 9.06501 2.65606 9.07299L1.55062 9.29287C1.5105 9.30085 1.48444 9.33985 1.49242 9.37997ZM14.6657 7.34742C14.7064 7.34333 14.7428 7.37301 14.7468 7.41372C14.7509 7.45442 14.7213 7.49074 14.6806 7.49483L14.1998 7.54313C14.1591 7.54722 14.1228 7.51754 14.1187 7.47683C14.1146 7.43613 14.1443 7.39982 14.185 7.39573L14.6657 7.34742ZM1.39584 8.72994C1.39993 8.77064 1.43625 8.80032 1.47695 8.79623L1.95766 8.74793C1.99836 8.74384 2.02804 8.70752 2.02395 8.66682C2.01986 8.62612 1.98355 8.59643 1.94284 8.60052L1.46214 8.64883C1.42143 8.65292 1.39175 8.68923 1.39584 8.72994ZM9.43817 14.5632C9.44615 14.6033 9.4201 14.6423 9.37997 14.6503C9.33985 14.6583 9.30085 14.6322 9.29287 14.5921L9.07299 13.4866C9.06501 13.4465 9.09107 13.4075 9.13119 13.3995C9.17131 13.3916 9.21031 13.4176 9.21829 13.4577L9.43817 14.5632ZM6.76272 1.49242C6.72259 1.5004 6.69654 1.5394 6.70452 1.57952L6.9244 2.68496C6.93238 2.72508 6.97137 2.75114 7.0115 2.74316C7.05162 2.73518 7.07768 2.69618 7.0697 2.65606L6.84982 1.55062C6.84184 1.5105 6.80284 1.48444 6.76272 1.49242ZM8.79623 14.6657C8.80032 14.7064 8.77064 14.7428 8.72994 14.7468C8.68923 14.7509 8.65292 14.7213 8.64883 14.6806L8.60052 14.1998C8.59643 14.1591 8.62612 14.1228 8.66682 14.1187C8.70752 14.1146 8.74384 14.1443 8.74793 14.185L8.79623 14.6657ZM7.41372 1.39584C7.37301 1.39993 7.34333 1.43625 7.34742 1.47695L7.39573 1.95766C7.39982 1.99836 7.43613 2.02804 7.47683 2.02395C7.51754 2.01986 7.54722 1.98355 7.54313 1.94284L7.49483 1.46214C7.49074 1.42143 7.45442 1.39175 7.41372 1.39584Z',
            fill: '#DDDDDD',
          }),
          a.createElement('path', {
            d: 'M3.14941 12.8505L7.29562 7.28674L7.99989 7.99218L3.14941 12.8505Z',
            fill: '#DDDDDD',
          }),
          a.createElement('path', {
            d: 'M7.28662 7.29574L12.8504 3.14954L7.99204 8.00002L7.28662 7.29574Z',
            fill: '#EE4444',
          }),
          a.createElement('path', {
            d: 'M12.8505 3.14954L8.70427 8.71332L8 8.00789L12.8505 3.14954Z',
            fill: '#CC0000',
          }),
          a.createElement('path', {
            d: 'M3.14941 12.8505L8.7132 8.70427L8.00777 8L3.14941 12.8505Z',
            fill: '#AAAAAA',
          }),
          a.createElement(
            'defs',
            null,
            a.createElement(
              'linearGradient',
              {
                id: 'paint0_linear_466_21186',
                x1: '0.300303',
                y1: '0.300951',
                x2: '0.300303',
                y2: '15.7084',
                gradientUnits: 'userSpaceOnUse',
              },
              a.createElement('stop', { stopColor: '#F8F8F8' }),
              a.createElement('stop', { offset: '1', stopColor: '#CCCCCC' })
            ),
            a.createElement(
              'radialGradient',
              {
                id: 'paint1_radial_466_21186',
                cx: '0',
                cy: '0',
                r: '1',
                gradientUnits: 'userSpaceOnUse',
                gradientTransform: 'translate(8.00216 8.0046) scale(7.06173)',
              },
              a.createElement('stop', { stopColor: '#00F0FF' }),
              a.createElement('stop', { offset: '1', stopColor: '#0070E0' })
            )
          )
        ),
      w1 = {
        CHROME: a.createElement($7, { alt: 'Chrome' }),
        FIREFOX: a.createElement(G7, { alt: 'Firefox' }),
        SAFARI: a.createElement(q7, { alt: 'Safari' }),
        EDGE: a.createElement(W7, { alt: 'Edge' }),
      },
      Y7 = w.div(({ theme: e }) => ({
        alignItems: 'center',
        color: e.base === 'light' ? e.color.dark : e.color.light,
        display: 'inline-flex',
        gap: 6,
        height: 16,
        margin: '6px 7px',
        svg: { verticalAlign: 'top' },
      })),
      C1 = w.span(({ theme: e }) => ({
        color: e.base === 'light' ? e.color.dark : e.color.light,
        display: 'none',
        fontSize: e.typography.size.s1,
        fontWeight: e.typography.weight.bold,
        '@container (min-width: 300px)': { display: 'inline-block' },
        '+ svg': { color: e.base === 'light' ? e.color.dark : e.color.light },
        'button:hover > &, button:hover > & + svg': {
          color: e.color.secondary,
        },
      })),
      Q7 = ({
        isAccepted: e,
        selectedBrowser: t,
        browserResults: n,
        onSelectBrowser: r,
      }) => {
        pt();
        let i = Sr(n.map(({ result: s }) => s));
        if (!i) return null;
        let o = w1[t.key];
        !e &&
          i !== 'EQUAL' &&
          n.length >= 2 &&
          (o = a.createElement(Mr, { status: i }, o));
        let l =
          n.length > 1 &&
          n.map(({ browser: s, result: c }) => ({
            active: t === s,
            id: s.id,
            onClick: () => r(s),
            right: !e && c !== 'EQUAL' && a.createElement(Ps, { status: c }),
            icon: w1[s.key],
            title: s.name,
          }));
        return a.createElement(
          Ae,
          {
            key: t.key,
            hasChrome: !1,
            placement: 'top',
            trigger: 'hover',
            tooltip: a.createElement(je, {
              note: l ? 'Switch browser' : `Tested in ${n[0].browser.name}`,
            }),
          },
          l
            ? a.createElement(
                ca,
                { placement: 'bottom', links: l },
                o,
                a.createElement(C1, null, t.name),
                a.createElement(f0, { size: 10 })
              )
            : a.createElement(Y7, null, o, a.createElement(C1, null, t.name))
        );
      },
      K7 = w.div(({ theme: e }) => ({
        alignItems: 'center',
        color: e.base === 'light' ? e.color.darkest : e.color.light,
        display: 'inline-flex',
        gap: 6,
        height: 14,
        margin: '7px 7px',
        svg: {
          verticalAlign: 'top',
          path: { fill: e.base === 'light' ? e.color.dark : e.color.light },
        },
      })),
      J7 = w(ca)(({ theme: e }) => ({
        button: {
          svg: {
            verticalAlign: 'top',
            path: { fill: e.base === 'light' ? e.color.dark : e.color.light },
          },
          '&:hover': { svg: { path: { fill: e.color.secondary } } },
        },
      })),
      x1 = w.span(({ theme: e }) => ({
        color: e.base === 'light' ? e.color.dark : e.color.light,
        display: 'none',
        fontSize: e.typography.size.s1,
        fontWeight: e.typography.weight.bold,
        '@container (min-width: 300px)': { display: 'inline-block' },
        'button:hover > &': { color: e.color.secondary },
      })),
      X7 = ({
        isAccepted: e,
        modeOrder: t,
        modeResults: n,
        onSelectMode: r,
        selectedMode: i,
      }) => {
        pt();
        let o = Sr(n.map(({ result: c }) => c));
        if (!o) return null;
        let l = a.createElement(jd, null);
        !e &&
          o !== 'EQUAL' &&
          n.length >= 2 &&
          (l = a.createElement(Mr, { status: o }, l));
        let s =
          n.length > 1 &&
          n
            .map(({ mode: c, result: d }) => ({
              id: c.name,
              title: c.name,
              right: !e && d !== 'EQUAL' && a.createElement(Ps, { status: d }),
              onClick: () => r(c),
              active: i.name === c.name,
            }))
            .sort((c, d) => {
              if (!t) return 0;
              let u = t.indexOf(c.title),
                m = t.indexOf(d.title);
              return u !== -1 && m !== -1 ? u - m : 0;
            });
        return a.createElement(
          Ae,
          {
            key: i.name,
            hasChrome: !1,
            placement: 'top',
            trigger: 'hover',
            tooltip: a.createElement(je, {
              note: s ? 'Switch mode' : `View mode: ${n[0].mode.name}`,
            }),
          },
          s
            ? a.createElement(
                J7,
                { placement: 'bottom', links: s },
                l,
                a.createElement(x1, null, i.name),
                a.createElement(f0, { size: 10 })
              )
            : a.createElement(K7, null, l, a.createElement(x1, null, i.name))
        );
      },
      S1 = () => {
        let e = Tn(),
          { browserResults: t, modeResults: n } = e.summary;
        return a.createElement(
          Ir,
          null,
          n.length > 0 &&
            e.selectedTest &&
            a.createElement(X7, {
              isAccepted: e.summary.status === 'ACCEPTED',
              modeOrder: e.modeOrder,
              selectedMode: e.selectedTest.mode,
              modeResults: n,
              onSelectMode: e.onSelectMode,
            }),
          t.length > 0 &&
            e.selectedComparison &&
            a.createElement(Q7, {
              isAccepted: e.summary.status === 'ACCEPTED',
              selectedBrowser: e.selectedComparison.browser,
              browserResults: t,
              onSelectBrowser: e.onSelectBrowser,
            }),
          a.createElement(Et, { push: !0 }, a.createElement(Zr, null))
        );
      },
      eh = ({ theme: e, secondary: t, status: n }) =>
        t
          ? {
              color: e.base === 'light' ? e.color.dark : e.color.medium,
              backgroundColor: e.background.app,
              borderColor: e.base === 'light' ? e.color.medium : e.color.darker,
              '&:hover': {
                color: e.base === 'light' ? e.color.darkest : e.color.lighter,
                backgroundColor: Gt(0.03, e.background.app),
              },
            }
          : n === 'positive'
          ? {
              color: e.color.positiveText,
              backgroundColor: e.background.positive,
              borderColor: Qa(0.5, e.color.positiveText),
              '&:hover': {
                color: e.color.positiveText,
                backgroundColor: Gt(0.05, e.background.positive),
              },
            }
          : n === 'warning'
          ? {
              color: e.color.warningText,
              backgroundColor: e.background.warning,
              borderColor: Qa(0.5, e.color.warningText),
              '&:hover': {
                color: e.color.warningText,
                backgroundColor: Gt(0.05, e.background.warning),
              },
            }
          : {
              color: e.color.lightest,
              backgroundColor: e.color.secondary,
              borderWidth: 0,
              borderColor:
                e.base === 'light'
                  ? Qa(0.2, e.color.secondary)
                  : Gt(0.1, e.color.secondary),
              '&:hover': {
                color: e.color.lightest,
                backgroundColor: Gt(0.05, e.color.secondary),
              },
            },
      fn = w(rt)(
        ({ containsIcon: e }) => ({
          border: '1px solid transparent',
          boxShadow: 'none',
          fontSize: 12,
          fontWeight: 700,
          height: 28,
          padding: e ? '8px 6px' : 8,
          transition: 'background-color 150ms ease-out',
          '@container (min-width: 300px)': {
            height: 32,
            width: e ? 32 : 'auto',
            padding: e ? '9px 8px' : 9,
          },
          '@container (min-width: 800px)': {
            height: 28,
            fontSize: 12,
            width: e ? 28 : 'auto',
            padding: e ? '8px 6px' : 8,
          },
        }),
        eh,
        ({ side: e }) => ({
          ...(e === 'left' && {
            borderRightWidth: 1,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
          }),
          ...(e === 'right' && {
            borderLeftWidth: 0,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          }),
        })
      ),
      M1 = w.div({ display: 'flex', flexDirection: 'row' }),
      Fr = w.div(
        ({ theme: e }) => ({
          width: 12,
          height: 12,
          margin: '3px 6px',
          verticalAlign: 'top',
          display: 'inline-block',
          animation: `${n0} 0.7s linear infinite`,
          border: '2px solid transparent',
          borderLeftColor: e.base === 'light' ? '#00aaff' : '#58faf9',
          borderBottomColor: '#25ccfd',
          borderRightColor: e.base === 'light' ? '#58faf9' : '#00aaff',
          borderRadius: '100%',
          transform: 'translate3d(0, 0, 0)',
        }),
        ({ parentComponent: e }) =>
          e &&
          se({
            margin: e === 'IconButton' ? 1 : 0,
            borderWidth: 1,
            borderLeftColor: 'currentcolor',
            borderBottomColor: 'currentcolor',
            borderRightColor: 'currentcolor',
          })
      ),
      Si = w.div(
        ({
          theme: e,
          width: t = 14,
          height: n = 14,
          marginLeft: r = 7,
          marginRight: i = 8,
        }) => ({
          display: 'inline-block',
          backgroundColor: e.appBorderColor,
          borderRadius: 3,
          animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
          height: n,
          width: t,
          margin: 7,
          marginLeft: r,
          marginRight: i,
        })
      ),
      th = w.div(({ theme: e }) => ({
        gridArea: 'label',
        margin: '8px 15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 6,
        span: {
          display: 'none',
          '@container (min-width: 300px)': { display: 'initial' },
        },
        '@container (min-width: 800px)': {
          borderLeft: `1px solid ${e.appBorderColor}`,
          paddingLeft: 10,
          marginLeft: 0,
        },
      })),
      N1 = w.div({
        gridArea: 'controls',
        margin: '6px 15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 6,
        '@container (min-width: 800px)': { margin: 8 },
      }),
      nh = w.div(({ theme: e }) => ({
        padding: 9,
        '> svg': { display: 'block' },
        path: { fill: e.color.mediumdark },
      })),
      ah = w.div(({ theme: e, showDivider: t }) => ({
        gridArea: 'actions',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        margin: '0px 15px',
        gap: 6,
        '@container (min-width: 300px)': {
          alignItems: 'flex-start',
          margin: '15px 15px 15px 0px',
        },
        '@container (min-width: 800px)': {
          alignItems: 'center',
          borderLeft: t ? `1px solid ${e.appBorderColor}` : 'none',
          margin: '8px 15px 8px 0px',
          paddingLeft: 8,
        },
      })),
      rh = ({ isOutdated: e }) => {
        let { baselineImageVisible: t, diffVisible: n, focusVisible: r } = Tr(),
          { toggleBaselineImage: i, toggleDiff: o, toggleFocus: l } = An(),
          { isRunning: s, startBuild: c } = Sa(),
          { selectedTest: d, selectedComparison: u, summary: m } = Tn(),
          { changeCount: p, isInProgress: v } = m,
          {
            isReviewing: h,
            buildIsReviewable: b,
            userCanReview: k,
            acceptTest: y,
            unacceptTest: g,
          } = zs();
        if (v)
          return a.createElement(
            N1,
            null,
            a.createElement(Si, null),
            a.createElement(Si, null),
            a.createElement(Si, null)
          );
        let f = p > 0 && d?.status !== 'ACCEPTED',
          E = p > 0 && d?.status === 'ACCEPTED',
          S = u?.result === 'CHANGED';
        return a.createElement(
          a.Fragment,
          null,
          S &&
            a.createElement(
              th,
              null,
              a.createElement(
                ee,
                null,
                a.createElement(
                  'b',
                  null,
                  t ? 'Baseline' : 'Latest',
                  a.createElement('span', null, ' snapshot')
                )
              )
            ),
          S &&
            a.createElement(
              N1,
              null,
              a.createElement(
                Ae,
                {
                  tooltip: a.createElement(je, {
                    note: t ? 'Show latest snapshot' : 'Show baseline snapshot',
                  }),
                  trigger: 'hover',
                  hasChrome: !1,
                },
                a.createElement(
                  rt,
                  {
                    id: 'button-toggle-snapshot',
                    'aria-label': t
                      ? 'Show latest snapshot'
                      : 'Show baseline snapshot',
                    onClick: () => i(),
                  },
                  a.createElement(Ud, null)
                )
              ),
              a.createElement(
                Ae,
                {
                  tooltip: a.createElement(je, {
                    note: r ? 'Hide spotlight' : 'Show spotlight',
                  }),
                  trigger: 'hover',
                  hasChrome: !1,
                },
                a.createElement(
                  rt,
                  {
                    id: 'button-toggle-spotlight',
                    active: r,
                    'aria-label': r ? 'Hide spotlight' : 'Show spotlight',
                    onClick: () => l(!r),
                  },
                  a.createElement(Wd, null)
                )
              ),
              a.createElement(
                Ae,
                {
                  tooltip: a.createElement(je, {
                    note: n ? 'Hide diff' : 'Show diff',
                  }),
                  trigger: 'hover',
                  hasChrome: !1,
                },
                a.createElement(
                  rt,
                  {
                    id: 'button-diff-visible',
                    active: n,
                    'aria-label': n ? 'Hide diff' : 'Show diff',
                    onClick: () => o(!n),
                  },
                  a.createElement(d0, null)
                )
              )
            ),
          (f || E) &&
            a.createElement(
              ah,
              { showDivider: S },
              k &&
                b &&
                f &&
                d &&
                a.createElement(
                  M1,
                  null,
                  a.createElement(
                    Ae,
                    {
                      tooltip: a.createElement(je, {
                        note: 'Accept this story',
                      }),
                      trigger: 'hover',
                      hasChrome: !1,
                    },
                    a.createElement(
                      fn,
                      {
                        id: 'button-toggle-accept-story',
                        disabled: h,
                        'aria-label': 'Accept this story',
                        onClick: () => y(d.id, 'SPEC'),
                        side: 'left',
                      },
                      'Accept'
                    )
                  ),
                  a.createElement(
                    Ae,
                    {
                      tooltip: a.createElement(je, {
                        note: 'Batch accept options',
                      }),
                      trigger: 'hover',
                      hasChrome: !1,
                    },
                    a.createElement(
                      ca,
                      {
                        placement: 'bottom',
                        links: [
                          {
                            id: 'acceptComponent',
                            title: 'Accept component',
                            center:
                              'Accept all unreviewed changes for this component',
                            onClick: () => y(d.id, 'COMPONENT'),
                            disabled: h,
                            loading: h,
                          },
                          {
                            id: 'acceptBuild',
                            title: 'Accept entire build',
                            center:
                              'Accept all unreviewed changes for every story in the Storybook',
                            onClick: () => y(d.id, 'BUILD'),
                            disabled: h,
                            loading: h,
                          },
                        ],
                      },
                      (V) =>
                        a.createElement(
                          fn,
                          {
                            containsIcon: !0,
                            active: V,
                            disabled: h,
                            'aria-label': 'Batch accept options',
                            side: 'right',
                          },
                          h
                            ? a.createElement(Fr, {
                                parentComponent: 'IconButton',
                              })
                            : a.createElement(ul, null)
                        )
                    )
                  )
                ),
              k &&
                b &&
                E &&
                a.createElement(
                  M1,
                  null,
                  a.createElement(
                    Ae,
                    {
                      tooltip: a.createElement(je, {
                        note: 'Unaccept this story',
                      }),
                      trigger: 'hover',
                      hasChrome: !1,
                    },
                    a.createElement(
                      fn,
                      {
                        id: 'button-toggle-accept-story',
                        disabled: h,
                        'aria-label': 'Unaccept this story',
                        onClick: () => g(d.id, 'SPEC'),
                        side: 'left',
                        status: 'positive',
                      },
                      a.createElement($d, null),
                      'Unaccept'
                    )
                  ),
                  a.createElement(
                    Ae,
                    {
                      tooltip: a.createElement(je, {
                        note: 'Batch unaccept options',
                      }),
                      trigger: 'hover',
                      hasChrome: !1,
                    },
                    a.createElement(
                      ca,
                      {
                        placement: 'bottom',
                        links: [
                          {
                            id: 'unacceptComponent',
                            title: 'Unaccept component',
                            center:
                              'Unaccept all unreviewed changes for this component',
                            onClick: () => g(d.id, 'COMPONENT'),
                            disabled: h,
                            loading: h,
                          },
                          {
                            id: 'unacceptBuild',
                            title: 'Unaccept entire build',
                            center:
                              'Unaccept all unreviewed changes for every story in the Storybook',
                            onClick: () => g(d.id, 'BUILD'),
                            disabled: h,
                            loading: h,
                          },
                        ],
                      },
                      (V) =>
                        a.createElement(
                          fn,
                          {
                            containsIcon: !0,
                            active: V,
                            disabled: h,
                            'aria-label': 'Batch unaccept options',
                            side: 'right',
                            status: 'positive',
                          },
                          h
                            ? a.createElement(Fr, {
                                parentComponent: 'IconButton',
                              })
                            : a.createElement(ul, null)
                        )
                    )
                  )
                ),
              !(k && b) &&
                a.createElement(
                  Ae,
                  {
                    tooltip: a.createElement(je, {
                      note: 'Reviewing disabled',
                    }),
                    trigger: 'hover',
                    hasChrome: !1,
                  },
                  a.createElement(nh, null, a.createElement(p0, null))
                ),
              a.createElement(
                Ae,
                {
                  tooltip: a.createElement(je, {
                    note: e ? 'Run new tests' : 'Rerun tests',
                  }),
                  trigger: 'hover',
                  hasChrome: !1,
                },
                a.createElement(
                  fn,
                  {
                    containsIcon: !0,
                    'aria-label': e ? 'Run new tests' : 'Rerun tests',
                    onClick: c,
                    disabled: s,
                    secondary: !0,
                  },
                  e ? a.createElement(Vt, null) : a.createElement(g0, null)
                )
              )
            )
        );
      },
      Ya = lt(Or()),
      ih = (e) =>
        a.createElement(
          'svg',
          {
            width: '12',
            height: '12',
            viewBox: '0 0 12 12',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            style: { margin: '3px 6px', verticalAlign: 'top' },
            ...e,
          },
          a.createElement('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6ZM5.57143 6.85714C5.57143 7.09384 5.76331 7.28571 6 7.28571C6.23669 7.28571 6.42857 7.09384 6.42857 6.85714L6.42857 3.42857C6.42857 3.19188 6.23669 3 6 3C5.76331 3 5.57143 3.19188 5.57143 3.42857V6.85714ZM5.35714 8.78572C5.35714 8.43067 5.64496 8.14286 6 8.14286C6.35504 8.14286 6.64286 8.43067 6.64286 8.78571C6.64286 9.14075 6.35504 9.42857 6 9.42857C5.64496 9.42857 5.35714 9.14075 5.35714 8.78572Z',
            fill: '#73828C',
          })
        ),
      Mi = {
        width: 12,
        height: 12,
        margin: '3px 3px 3px 6px',
        verticalAlign: 'top',
      },
      oh = ({ icon: e }) => {
        let { color: t } = pt();
        return {
          passed: a.createElement(Zd, { style: { ...Mi, color: t.positive } }),
          changed: a.createElement(Id, { style: { ...Mi, color: t.warning } }),
          failed: a.createElement(m0, { style: { ...Mi, color: t.negative } }),
        }[e];
      };
    function ro(e) {
      '@babel/helpers - typeof';
      return (
        (ro =
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol == 'function' &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              }),
        ro(e)
      );
    }
    function $r(e, t) {
      if (t.length < e)
        throw new TypeError(
          e +
            ' argument' +
            (e > 1 ? 's' : '') +
            ' required, but only ' +
            t.length +
            ' present'
        );
    }
    function gn(e) {
      $r(1, arguments);
      var t = Object.prototype.toString.call(e);
      return e instanceof Date || (ro(e) === 'object' && t === '[object Date]')
        ? new Date(e.getTime())
        : typeof e == 'number' || t === '[object Number]'
        ? new Date(e)
        : ((typeof e == 'string' || t === '[object String]') &&
            typeof console < 'u' &&
            (console.warn(
              "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"
            ),
            console.warn(new Error().stack)),
          new Date(NaN));
    }
    var lh = {};
    function sh() {
      return lh;
    }
    function F1(e) {
      var t = new Date(
        Date.UTC(
          e.getFullYear(),
          e.getMonth(),
          e.getDate(),
          e.getHours(),
          e.getMinutes(),
          e.getSeconds(),
          e.getMilliseconds()
        )
      );
      return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
    }
    function ch(e, t) {
      $r(2, arguments);
      var n = gn(e),
        r = gn(t),
        i = n.getTime() - r.getTime();
      return i < 0 ? -1 : i > 0 ? 1 : i;
    }
    var dh = {
        lessThanXSeconds: {
          one: 'less than a second',
          other: 'less than {{count}} seconds',
        },
        xSeconds: { one: '1 second', other: '{{count}} seconds' },
        halfAMinute: 'half a minute',
        lessThanXMinutes: {
          one: 'less than a minute',
          other: 'less than {{count}} minutes',
        },
        xMinutes: { one: '1 minute', other: '{{count}} minutes' },
        aboutXHours: { one: 'about 1 hour', other: 'about {{count}} hours' },
        xHours: { one: '1 hour', other: '{{count}} hours' },
        xDays: { one: '1 day', other: '{{count}} days' },
        aboutXWeeks: { one: 'about 1 week', other: 'about {{count}} weeks' },
        xWeeks: { one: '1 week', other: '{{count}} weeks' },
        aboutXMonths: { one: 'about 1 month', other: 'about {{count}} months' },
        xMonths: { one: '1 month', other: '{{count}} months' },
        aboutXYears: { one: 'about 1 year', other: 'about {{count}} years' },
        xYears: { one: '1 year', other: '{{count}} years' },
        overXYears: { one: 'over 1 year', other: 'over {{count}} years' },
        almostXYears: { one: 'almost 1 year', other: 'almost {{count}} years' },
      },
      uh = function (e, t, n) {
        var r,
          i = dh[e];
        return (
          typeof i == 'string'
            ? (r = i)
            : t === 1
            ? (r = i.one)
            : (r = i.other.replace('{{count}}', t.toString())),
          n != null && n.addSuffix
            ? n.comparison && n.comparison > 0
              ? 'in ' + r
              : r + ' ago'
            : r
        );
      },
      mh = uh;
    function Ni(e) {
      return function () {
        var t =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          n = t.width ? String(t.width) : e.defaultWidth,
          r = e.formats[n] || e.formats[e.defaultWidth];
        return r;
      };
    }
    var ph = {
        full: 'EEEE, MMMM do, y',
        long: 'MMMM do, y',
        medium: 'MMM d, y',
        short: 'MM/dd/yyyy',
      },
      hh = {
        full: 'h:mm:ss a zzzz',
        long: 'h:mm:ss a z',
        medium: 'h:mm:ss a',
        short: 'h:mm a',
      },
      fh = {
        full: "{{date}} 'at' {{time}}",
        long: "{{date}} 'at' {{time}}",
        medium: '{{date}}, {{time}}',
        short: '{{date}}, {{time}}',
      },
      gh = {
        date: Ni({ formats: ph, defaultWidth: 'full' }),
        time: Ni({ formats: hh, defaultWidth: 'full' }),
        dateTime: Ni({ formats: fh, defaultWidth: 'full' }),
      },
      vh = gh,
      yh = {
        lastWeek: "'last' eeee 'at' p",
        yesterday: "'yesterday at' p",
        today: "'today at' p",
        tomorrow: "'tomorrow at' p",
        nextWeek: "eeee 'at' p",
        other: 'P',
      },
      bh = function (e, t, n, r) {
        return yh[e];
      },
      Eh = bh;
    function Kn(e) {
      return function (t, n) {
        var r = n != null && n.context ? String(n.context) : 'standalone',
          i;
        if (r === 'formatting' && e.formattingValues) {
          var o = e.defaultFormattingWidth || e.defaultWidth,
            l = n != null && n.width ? String(n.width) : o;
          i = e.formattingValues[l] || e.formattingValues[o];
        } else {
          var s = e.defaultWidth,
            c = n != null && n.width ? String(n.width) : e.defaultWidth;
          i = e.values[c] || e.values[s];
        }
        var d = e.argumentCallback ? e.argumentCallback(t) : t;
        return i[d];
      };
    }
    var kh = {
        narrow: ['B', 'A'],
        abbreviated: ['BC', 'AD'],
        wide: ['Before Christ', 'Anno Domini'],
      },
      wh = {
        narrow: ['1', '2', '3', '4'],
        abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
        wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'],
      },
      Ch = {
        narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
        abbreviated: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        wide: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
      },
      xh = {
        narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        wide: [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
      },
      Sh = {
        narrow: {
          am: 'a',
          pm: 'p',
          midnight: 'mi',
          noon: 'n',
          morning: 'morning',
          afternoon: 'afternoon',
          evening: 'evening',
          night: 'night',
        },
        abbreviated: {
          am: 'AM',
          pm: 'PM',
          midnight: 'midnight',
          noon: 'noon',
          morning: 'morning',
          afternoon: 'afternoon',
          evening: 'evening',
          night: 'night',
        },
        wide: {
          am: 'a.m.',
          pm: 'p.m.',
          midnight: 'midnight',
          noon: 'noon',
          morning: 'morning',
          afternoon: 'afternoon',
          evening: 'evening',
          night: 'night',
        },
      },
      Mh = {
        narrow: {
          am: 'a',
          pm: 'p',
          midnight: 'mi',
          noon: 'n',
          morning: 'in the morning',
          afternoon: 'in the afternoon',
          evening: 'in the evening',
          night: 'at night',
        },
        abbreviated: {
          am: 'AM',
          pm: 'PM',
          midnight: 'midnight',
          noon: 'noon',
          morning: 'in the morning',
          afternoon: 'in the afternoon',
          evening: 'in the evening',
          night: 'at night',
        },
        wide: {
          am: 'a.m.',
          pm: 'p.m.',
          midnight: 'midnight',
          noon: 'noon',
          morning: 'in the morning',
          afternoon: 'in the afternoon',
          evening: 'in the evening',
          night: 'at night',
        },
      },
      Nh = function (e, t) {
        var n = Number(e),
          r = n % 100;
        if (r > 20 || r < 10)
          switch (r % 10) {
            case 1:
              return n + 'st';
            case 2:
              return n + 'nd';
            case 3:
              return n + 'rd';
          }
        return n + 'th';
      },
      Fh = {
        ordinalNumber: Nh,
        era: Kn({ values: kh, defaultWidth: 'wide' }),
        quarter: Kn({
          values: wh,
          defaultWidth: 'wide',
          argumentCallback: function (e) {
            return e - 1;
          },
        }),
        month: Kn({ values: Ch, defaultWidth: 'wide' }),
        day: Kn({ values: xh, defaultWidth: 'wide' }),
        dayPeriod: Kn({
          values: Sh,
          defaultWidth: 'wide',
          formattingValues: Mh,
          defaultFormattingWidth: 'wide',
        }),
      },
      Ah = Fh;
    function Jn(e) {
      return function (t) {
        var n =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = n.width,
          i = (r && e.matchPatterns[r]) || e.matchPatterns[e.defaultMatchWidth],
          o = t.match(i);
        if (!o) return null;
        var l = o[0],
          s = (r && e.parsePatterns[r]) || e.parsePatterns[e.defaultParseWidth],
          c = Array.isArray(s)
            ? Lh(s, function (m) {
                return m.test(l);
              })
            : Oh(s, function (m) {
                return m.test(l);
              }),
          d;
        (d = e.valueCallback ? e.valueCallback(c) : c),
          (d = n.valueCallback ? n.valueCallback(d) : d);
        var u = t.slice(l.length);
        return { value: d, rest: u };
      };
    }
    function Oh(e, t) {
      for (var n in e) if (e.hasOwnProperty(n) && t(e[n])) return n;
    }
    function Lh(e, t) {
      for (var n = 0; n < e.length; n++) if (t(e[n])) return n;
    }
    function _h(e) {
      return function (t) {
        var n =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = t.match(e.matchPattern);
        if (!r) return null;
        var i = r[0],
          o = t.match(e.parsePattern);
        if (!o) return null;
        var l = e.valueCallback ? e.valueCallback(o[0]) : o[0];
        l = n.valueCallback ? n.valueCallback(l) : l;
        var s = t.slice(i.length);
        return { value: l, rest: s };
      };
    }
    var Th = /^(\d+)(th|st|nd|rd)?/i,
      Zh = /\d+/i,
      Ih = {
        narrow: /^(b|a)/i,
        abbreviated:
          /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
        wide: /^(before christ|before common era|anno domini|common era)/i,
      },
      Rh = { any: [/^b/i, /^(a|c)/i] },
      Bh = {
        narrow: /^[1234]/i,
        abbreviated: /^q[1234]/i,
        wide: /^[1234](th|st|nd|rd)? quarter/i,
      },
      Ph = { any: [/1/i, /2/i, /3/i, /4/i] },
      Vh = {
        narrow: /^[jfmasond]/i,
        abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
        wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
      },
      jh = {
        narrow: [
          /^j/i,
          /^f/i,
          /^m/i,
          /^a/i,
          /^m/i,
          /^j/i,
          /^j/i,
          /^a/i,
          /^s/i,
          /^o/i,
          /^n/i,
          /^d/i,
        ],
        any: [
          /^ja/i,
          /^f/i,
          /^mar/i,
          /^ap/i,
          /^may/i,
          /^jun/i,
          /^jul/i,
          /^au/i,
          /^s/i,
          /^o/i,
          /^n/i,
          /^d/i,
        ],
      },
      Hh = {
        narrow: /^[smtwf]/i,
        short: /^(su|mo|tu|we|th|fr|sa)/i,
        abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
        wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
      },
      Dh = {
        narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
        any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
      },
      zh = {
        narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
        any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
      },
      Uh = {
        any: {
          am: /^a/i,
          pm: /^p/i,
          midnight: /^mi/i,
          noon: /^no/i,
          morning: /morning/i,
          afternoon: /afternoon/i,
          evening: /evening/i,
          night: /night/i,
        },
      },
      $h = {
        ordinalNumber: _h({
          matchPattern: Th,
          parsePattern: Zh,
          valueCallback: function (e) {
            return parseInt(e, 10);
          },
        }),
        era: Jn({
          matchPatterns: Ih,
          defaultMatchWidth: 'wide',
          parsePatterns: Rh,
          defaultParseWidth: 'any',
        }),
        quarter: Jn({
          matchPatterns: Bh,
          defaultMatchWidth: 'wide',
          parsePatterns: Ph,
          defaultParseWidth: 'any',
          valueCallback: function (e) {
            return e + 1;
          },
        }),
        month: Jn({
          matchPatterns: Vh,
          defaultMatchWidth: 'wide',
          parsePatterns: jh,
          defaultParseWidth: 'any',
        }),
        day: Jn({
          matchPatterns: Hh,
          defaultMatchWidth: 'wide',
          parsePatterns: Dh,
          defaultParseWidth: 'any',
        }),
        dayPeriod: Jn({
          matchPatterns: zh,
          defaultMatchWidth: 'any',
          parsePatterns: Uh,
          defaultParseWidth: 'any',
        }),
      },
      Wh = $h,
      Gh = {
        code: 'en-US',
        formatDistance: mh,
        formatLong: vh,
        formatRelative: Eh,
        localize: Ah,
        match: Wh,
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
      },
      Us = Gh,
      qh = Us;
    function $s(e, t) {
      if (e == null)
        throw new TypeError(
          'assign requires that input parameter not be null or undefined'
        );
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      return e;
    }
    function Yh(e) {
      return $s({}, e);
    }
    var A1 = 1e3 * 60,
      Ar = 60 * 24,
      O1 = Ar * 30,
      L1 = Ar * 365;
    function Qh(e, t, n) {
      var r, i, o;
      $r(2, arguments);
      var l = sh(),
        s =
          (r = (i = n?.locale) !== null && i !== void 0 ? i : l.locale) !==
            null && r !== void 0
            ? r
            : qh;
      if (!s.formatDistance)
        throw new RangeError(
          'locale must contain localize.formatDistance property'
        );
      var c = ch(e, t);
      if (isNaN(c)) throw new RangeError('Invalid time value');
      var d = $s(Yh(n), { addSuffix: !!n?.addSuffix, comparison: c }),
        u,
        m;
      c > 0 ? ((u = gn(t)), (m = gn(e))) : ((u = gn(e)), (m = gn(t)));
      var p = String(
          (o = n?.roundingMethod) !== null && o !== void 0 ? o : 'round'
        ),
        v;
      if (p === 'floor') v = Math.floor;
      else if (p === 'ceil') v = Math.ceil;
      else if (p === 'round') v = Math.round;
      else
        throw new RangeError(
          "roundingMethod must be 'floor', 'ceil' or 'round'"
        );
      var h = m.getTime() - u.getTime(),
        b = h / A1,
        k = F1(m) - F1(u),
        y = (h - k) / A1,
        g = n?.unit,
        f;
      if (
        (g
          ? (f = String(g))
          : b < 1
          ? (f = 'second')
          : b < 60
          ? (f = 'minute')
          : b < Ar
          ? (f = 'hour')
          : y < O1
          ? (f = 'day')
          : y < L1
          ? (f = 'month')
          : (f = 'year'),
        f === 'second')
      ) {
        var E = v(h / 1e3);
        return s.formatDistance('xSeconds', E, d);
      } else if (f === 'minute') {
        var S = v(b);
        return s.formatDistance('xMinutes', S, d);
      } else if (f === 'hour') {
        var V = v(b / 60);
        return s.formatDistance('xHours', V, d);
      } else if (f === 'day') {
        var $ = v(y / Ar);
        return s.formatDistance('xDays', $, d);
      } else if (f === 'month') {
        var le = v(y / O1);
        return le === 12 && g !== 'month'
          ? s.formatDistance('xYears', 1, d)
          : s.formatDistance('xMonths', le, d);
      } else if (f === 'year') {
        var re = v(y / L1);
        return s.formatDistance('xYears', re, d);
      }
      throw new RangeError(
        "unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'"
      );
    }
    function Kh(e, t) {
      return $r(1, arguments), Qh(e, Date.now(), t);
    }
    var Jh = {
      lessThanXSeconds: 'just now',
      xSeconds: 'just now',
      halfAMinute: 'just now',
      lessThanXMinutes: '{{count}}m',
      xMinutes: '{{count}}m',
      aboutXHours: '{{count}}h',
      xHours: '{{count}}h',
      xDays: '{{count}}d',
      aboutXWeeks: '{{count}}w',
      xWeeks: '{{count}}w',
      aboutXMonths: '{{count}}mo',
      xMonths: '{{count}}mo',
      aboutXYears: '{{count}}y',
      xYears: '{{count}}y',
      overXYears: '{{count}}y',
      almostXYears: '{{count}}y',
    };
    function Xh(e, t, n = { addSuffix: !1, comparison: 0 }) {
      let r = Jh[e].replace('{{count}}', t);
      return ['lessThanXSeconds', 'xSeconds', 'halfAMinute'].includes(e)
        ? `${r}`
        : n.addSuffix
        ? n.comparison > 0
          ? `in ${r}`
          : `${r} ago`
        : r;
    }
    var e6 = (e) =>
        Kh(e, { addSuffix: !0, locale: { ...Us, formatDistance: Xh } }),
      Xn = w.div(({ theme: e }) => ({
        gridArea: 'info',
        display: 'flex',
        justifySelf: 'start',
        justifyContent: 'center',
        flexDirection: 'column',
        margin: 15,
        lineHeight: '18px',
        color:
          e.base === 'light'
            ? `${e.color.defaultText}99`
            : `${e.color.light}99`,
        b: {
          color:
            e.base === 'light' ? `${e.color.defaultText}` : `${e.color.light}`,
        },
        small: { fontSize: e.typography.size.s1 },
        '@container (min-width: 800px)': {
          margin: '6px 10px 6px 15px',
          alignItems: 'center',
          flexDirection: 'row',
          small: { fontSize: 'inherit' },
          '[data-hidden-large]': { display: 'none' },
          '& > span:first-of-type': {
            display: 'inline-flex',
            alignItems: 'center',
            height: 24,
            marginRight: 6,
          },
        },
      })),
      t6 = w.div({
        gridArea: 'actions',
        display: 'flex',
        justifySelf: 'end',
        justifyContent: 'center',
        alignItems: 'start',
        margin: 15,
        '@container (min-width: 800px)': { margin: '6px 15px 0 0' },
      }),
      n6 = ({
        isStarting: e,
        tests: t,
        startedAt: n,
        isBuildFailed: r,
        isOutdated: i,
        shouldSwitchToLastBuildOnBranch: o,
        switchToLastBuildOnBranch: l,
      }) => {
        let { isRunning: s, startBuild: c } = Sa(),
          {
            status: d,
            isInProgress: u,
            changeCount: m,
            brokenCount: p,
            modeResults: v,
            browserResults: h,
          } = Zo(t ?? []),
          b = !e && n && e6(new Date(n).getTime()),
          k = e || u,
          y = r || d === 'FAILED',
          g = y || d === 'BROKEN',
          f = (g || i) && !k && !m,
          E;
        return (
          i
            ? (E = a.createElement(
                Xn,
                null,
                a.createElement(
                  'span',
                  null,
                  a.createElement('b', null, 'Code edits detected')
                ),
                a.createElement(
                  'small',
                  null,
                  a.createElement('span', null, 'Run tests to see what changed')
                )
              ))
            : y
            ? (E = a.createElement(
                Xn,
                null,
                a.createElement(
                  'span',
                  null,
                  a.createElement('b', null, 'Build failed'),
                  a.createElement(ih, null)
                ),
                a.createElement(
                  'small',
                  null,
                  a.createElement(
                    'span',
                    null,
                    'An infrastructure error occured'
                  )
                )
              ))
            : k
            ? (E = a.createElement(
                Xn,
                null,
                a.createElement(
                  'span',
                  null,
                  a.createElement('b', null, 'Running tests...'),
                  a.createElement(Fr, null)
                ),
                a.createElement(
                  'small',
                  null,
                  a.createElement('span', null, 'Test in progress...')
                )
              ))
            : o
            ? (E = a.createElement(
                Xn,
                null,
                a.createElement(
                  'span',
                  null,
                  a.createElement(
                    'b',
                    null,
                    a.createElement(
                      dn,
                      { isButton: !0, onClick: l },
                      'View latest snapshot'
                    )
                  )
                ),
                a.createElement(
                  'span',
                  null,
                  'Newer test results are available for this story'
                )
              ))
            : (E = a.createElement(
                Xn,
                null,
                a.createElement(
                  'span',
                  null,
                  a.createElement(
                    'b',
                    null,
                    p
                      ? null
                      : m
                      ? `${(0, Ya.default)('change', m, !0)}${
                          d === 'ACCEPTED' ? ' accepted' : ''
                        }`
                      : 'No changes',
                    p ? (0, Ya.default)('error', p, !0) : null
                  ),
                  a.createElement(oh, {
                    icon: p ? 'failed' : d === 'PENDING' ? 'changed' : 'passed',
                  })
                ),
                a.createElement(
                  'small',
                  null,
                  v.length > 0 &&
                    a.createElement(
                      'span',
                      { 'data-hidden-large': !0 },
                      (0, Ya.default)('mode', v.length, !0),
                      ', ',
                      (0, Ya.default)('browser', h.length, !0)
                    ),
                  v.length > 0 &&
                    a.createElement(
                      'span',
                      { 'data-hidden-large': !0 },
                      ' \u2022 '
                    ),
                  u && a.createElement('span', null, 'Test in progress...'),
                  !u &&
                    n &&
                    a.createElement(
                      'span',
                      { title: new Date(n).toUTCString() },
                      'Ran ',
                      b
                    )
                )
              )),
          a.createElement(
            a.Fragment,
            null,
            E,
            f &&
              a.createElement(
                t6,
                null,
                a.createElement(
                  fn,
                  { onClick: c, disabled: s },
                  s
                    ? a.createElement(Fr, { parentComponent: 'Button' })
                    : a.createElement(Vt, null),
                  g ? 'Rerun tests' : 'Run tests'
                )
              )
          )
        );
      },
      _1 = w.div(({ theme: e }) => ({
        display: 'grid',
        gridTemplateAreas: `
    "info info"
    "actions actions"
    "label controls"
  `,
        gridTemplateColumns: '1fr fit-content(50%)',
        gridTemplateRows: 'auto auto auto',
        borderBottom: `1px solid ${e.appBorderColor}`,
        '@container (min-width: 300px)': {
          gridTemplateAreas: `
      "info actions"
      "label controls"
    `,
          gridTemplateColumns: '1fr auto',
          gridTemplateRows: 'auto auto',
        },
        '@container (min-width: 800px)': {
          gridTemplateAreas: '"info label controls actions"',
          gridTemplateColumns: 'auto 1fr auto auto',
          gridTemplateRows: 40,
        },
      })),
      T1 = w.div(({ theme: e }) => ({
        display: 'grid',
        gridTemplateAreas: `
    "header"
    "main"
    "footer"
  `,
        gridTemplateColumns: '1fr',
        gridTemplateRows: 'auto 1fr auto',
        height: '100%',
        '&[hidden]': { display: 'none' },
      })),
      Z1 = w.div(({ theme: e }) => ({
        gridArea: 'header',
        position: 'sticky',
        zIndex: 1,
        top: 0,
        background: e.background.content,
        '@container (min-width: 800px)': { background: e.background.app },
      })),
      a6 = w.div(({ theme: e }) => ({
        gridArea: 'main',
        overflowY: 'auto',
        maxHeight: '100%',
        background: e.background.content,
      })),
      I1 = w.div(({ theme: e }) => ({
        gridArea: 'footer',
        position: 'sticky',
        zIndex: 1,
        bottom: 0,
      })),
      r6 = w.div(({ children: e, theme: t }) => ({
        display: 'flex',
        alignItems: 'center',
        border: `0px solid ${t.appBorderColor}`,
        borderTopWidth: 1,
        borderBottomWidth: e ? 1 : 0,
        height: e ? 40 : 0,
        padding: e ? '0 15px' : 0,
      })),
      i6 = w.div(({ theme: e }) => ({
        fontFamily: e.typography.fonts.mono,
        fontSize: e.typography.size.s1,
        color: e.color.defaultText,
        lineHeight: '18px',
        padding: 15,
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
      })),
      Fi = w.div(({ theme: e }) => ({
        background: e.background.hoverable,
        padding: '10px 15px',
        lineHeight: '18px',
        position: 'relative',
        borderBottom: `1px solid ${e.appBorderColor}`,
      })),
      o6 = ({
        isOutdated: e,
        isStarting: t,
        isBuildFailed: n,
        shouldSwitchToLastBuildOnBranch: r,
        switchToLastBuildOnBranch: i,
        hidden: o,
        storyId: l,
      }) => {
        let { baselineImageVisible: s, diffVisible: c, focusVisible: d } = Tr(),
          {
            toggleBaselineImage: u,
            toggleSettings: m,
            toggleWarnings: p,
          } = An(),
          v = Is(),
          h = 'startedAt' in v && v.startedAt,
          b = Tn(),
          { tests: k } = b,
          y = a.useRef(l),
          g = a.useRef(b.selectedComparison?.id),
          f = a.useRef(v.id),
          { selectedTest: E, selectedComparison: S } = b,
          V = k.every(
            ({ result: _e, status: xt }) => _e === 'ADDED' && xt !== 'ACCEPTED'
          ),
          $ = !V && E?.result === 'ADDED' && E?.status !== 'ACCEPTED',
          le =
            !V &&
            S?.result === 'ADDED' &&
            E?.result !== 'ADDED' &&
            E?.status !== 'ACCEPTED';
        pe(() => {
          (y.current !== l ||
            g.current !== b.selectedComparison?.id ||
            f.current !== v.id ||
            V ||
            $ ||
            le) &&
            (u(!1), m(!1), p(!1)),
            (g.current = b.selectedComparison?.id),
            (y.current = l),
            (f.current = v.id);
        }, [v.id, l, b, u, m, p, V, $, le]);
        let re = a.createElement(n6, {
          tests: k,
          startedAt: h,
          isStarting: t,
          isBuildFailed: n,
          isOutdated: e,
          shouldSwitchToLastBuildOnBranch: r,
          switchToLastBuildOnBranch: i,
        });
        if (t || !k.length)
          return a.createElement(
            T1,
            { hidden: o },
            a.createElement(Z1, null, a.createElement(_1, null, re)),
            a.createElement(I1, null, a.createElement(S1, null))
          );
        let ve = Zo(k),
          { isInProgress: ue } = ve,
          Pe =
            S?.headCapture?.captureError &&
            'error' in S?.headCapture?.captureError &&
            S?.headCapture?.captureError?.error;
        return a.createElement(
          T1,
          { hidden: o },
          a.createElement(
            Z1,
            null,
            a.createElement(
              _1,
              null,
              re,
              a.createElement(rh, { isOutdated: e })
            )
          ),
          a.createElement(
            a6,
            null,
            ue && a.createElement(ri, null),
            !ue &&
              V &&
              a.createElement(
                Fi,
                null,
                a.createElement(
                  ee,
                  null,
                  'New story found. Accept this snapshot as a test baseline.',
                  ' ',
                  a.createElement(
                    De,
                    {
                      withArrow: !0,
                      href: 'https://www.chromatic.com/docs/branching-and-baselines',
                      target: '_blank',
                    },
                    'Learn more'
                  )
                )
              ),
            !ue &&
              $ &&
              a.createElement(
                Fi,
                null,
                a.createElement(
                  ee,
                  null,
                  'New mode found. Accept this snapshot as a test baseline.',
                  ' ',
                  a.createElement(
                    De,
                    {
                      withArrow: !0,
                      href: 'https://www.chromatic.com/docs/branching-and-baselines',
                      target: '_blank',
                    },
                    'Learn more'
                  )
                )
              ),
            !ue &&
              le &&
              a.createElement(
                Fi,
                null,
                a.createElement(
                  ee,
                  null,
                  'New browser found. Accept this snapshot as a test baseline.',
                  ' ',
                  a.createElement(
                    De,
                    {
                      withArrow: !0,
                      href: 'https://www.chromatic.com/docs/branching-and-baselines',
                      target: '_blank',
                    },
                    'Learn more'
                  )
                )
              ),
            !ue &&
              S &&
              a.createElement(U7, {
                key: S.id,
                componentName: E?.story?.component?.name,
                storyName: E?.story?.name,
                testUrl: E?.webUrl,
                comparisonResult: S.result ?? void 0,
                latestImage: S.headCapture?.captureImage ?? void 0,
                baselineImage: S.baseCapture?.captureImage ?? void 0,
                baselineImageVisible: s,
                diffImage: S.captureDiff?.diffImage ?? void 0,
                focusImage: S.captureDiff?.focusImage ?? void 0,
                diffVisible: c,
                focusVisible: d,
              }),
            !ue &&
              Pe &&
              a.createElement(
                a.Fragment,
                null,
                a.createElement(
                  r6,
                  null,
                  a.createElement('b', null, 'Error stack trace')
                ),
                a.createElement(i6, null, Pe.stack || Pe.message)
              )
          ),
          a.createElement(I1, null, a.createElement(S1, null))
        );
      },
      l6 = w(ni)({ padding: '4px 8px', margin: '0 6px' }),
      s6 = ({ onClose: e }) =>
        a.createElement(
          y0,
          null,
          a.createElement(
            Bi,
            null,
            a.createElement(
              tr,
              null,
              'Warnings',
              a.createElement(l6, { status: 'warning' }, '2'),
              a.createElement(
                vo,
                { onClick: e },
                a.createElement(go, { 'aria-label': 'Close' })
              )
            ),
            a.createElement(
              'p',
              null,
              'It\u2019s essential that your components and stories render in a consistent fashion to prevent false positives. Two issues detected in this story may cause false positives.'
            ),
            a.createElement(
              'p',
              null,
              a.createElement(
                he,
                { variant: 'outline' },
                a.createElement(u0, null),
                'Docs'
              ),
              a.createElement(
                he,
                { variant: 'outline' },
                a.createElement(Pd, null),
                'Get support'
              )
            )
          )
        );
    w.div(({ theme: e }) => ({
      color: e.color.warning,
      background: e.background.warning,
      padding: 10,
      lineHeight: '18px',
      position: 'relative',
    }));
    var c6 = ({
        branch: e,
        dismissBuildError: t,
        isOutdated: n,
        localBuildProgress: r,
        switchToLastBuildOnBranch: i,
        storyId: o,
      }) => {
        let { settingsVisible: l, warningsVisible: s } = Tr(),
          { toggleSettings: c, toggleWarnings: d } = An(),
          { isRunning: u, startBuild: m, stopBuild: p } = Sa(),
          {
            lastBuildOnBranch: v,
            lastBuildOnBranchIsReady: h,
            lastBuildOnBranchIsSelectable: b,
          } = Zs(),
          k = Is(),
          y = Tn(),
          { buildIsReviewable: g, userCanReview: f } = zs(),
          E = !!(!g && h && b && i),
          S = v?.status === 'IN_PROGRESS',
          V = u || (!g && !E),
          $ = r && r?.buildId === v?.id,
          le =
            V &&
            a.createElement(V7, {
              branch: e,
              dismissBuildError: t,
              localBuildProgress: $ || u ? r : void 0,
              lastBuildOnBranchInProgress: S,
              switchToLastBuildOnBranch: i,
            }),
          re = y?.hasTests && y?.tests.length === 0,
          ve = k.id !== `Build:${r?.buildId}`;
        if (re)
          return a.createElement(
            xe,
            null,
            a.createElement(
              fe,
              null,
              a.createElement(
                ge,
                null,
                a.createElement(
                  'div',
                  null,
                  a.createElement(Se, null, 'New story found'),
                  a.createElement(
                    ee,
                    { center: !0, muted: !0 },
                    'Take an image snapshot of this story to save its "last known good state" as a test baseline. This unlocks visual regression testing so you can see exactly what has changed down to the pixel.'
                  )
                ),
                r && ve
                  ? a.createElement(Nr, { localBuildProgress: r })
                  : a.createElement(
                      a.Fragment,
                      null,
                      a.createElement(
                        he,
                        {
                          belowText: !0,
                          size: 'medium',
                          variant: 'solid',
                          onClick: u ? p : m,
                        },
                        u ? 'Cancel build' : 'Create visual test'
                      )
                    )
              )
            )
          );
        if (y?.tests?.find((on) => on.result === 'SKIPPED'))
          return a.createElement(
            xe,
            null,
            le,
            a.createElement(
              fe,
              null,
              a.createElement(
                ge,
                null,
                a.createElement(
                  'div',
                  null,
                  a.createElement(Se, null, 'This story was skipped'),
                  a.createElement(
                    ee,
                    { center: !0, muted: !0 },
                    'If you would like to resume testing it, comment out or remove',
                    a.createElement(Be, null, 'disableSnapshot = true'),
                    ' from the CSF file.'
                  )
                ),
                a.createElement(
                  he,
                  { asChild: !0, size: 'medium', tertiary: !0 },
                  a.createElement(
                    'a',
                    {
                      href: 'https://www.chromatic.com/docs/ignoring-elements#ignore-stories',
                      target: '_new',
                    },
                    a.createElement(u0, null),
                    'View docs'
                  )
                )
              )
            )
          );
        let { status: ue } = k,
          Pe = ['ANNOUNCED', 'PUBLISHED', 'PREPARED'].includes(ue),
          _e = ue === 'FAILED',
          xt = ue === 'PENDING' && (!f || !g);
        return a.createElement(
          xe,
          { footer: null },
          a.createElement(
            yu,
            null,
            le,
            !le &&
              xt &&
              a.createElement(
                T7,
                null,
                f
                  ? a.createElement(
                      a.Fragment,
                      null,
                      'Reviewing is disabled because there\u2019s a newer build on ',
                      a.createElement(Be, null, e),
                      '.'
                    )
                  : a.createElement(
                      a.Fragment,
                      null,
                      'You don\u2019t have permission to accept changes.',
                      ' ',
                      a.createElement(
                        dn,
                        {
                          href: 'https://www.chromatic.com/docs/collaborators#roles',
                          target: '_blank',
                          withArrow: !0,
                        },
                        'Learn about roles'
                      )
                    )
              ),
            a.createElement(
              na,
              { grow: !0, hidden: l || s },
              a.createElement(o6, {
                hidden: l || s,
                isOutdated: n,
                isStarting: Pe,
                isBuildFailed: _e,
                shouldSwitchToLastBuildOnBranch: E,
                switchToLastBuildOnBranch: i,
                selectedBuild: k,
                storyId: o,
              })
            ),
            a.createElement(
              na,
              { grow: !0, hidden: !l },
              a.createElement(j7, { onClose: () => c(!1) })
            ),
            a.createElement(
              na,
              { grow: !0, hidden: !s },
              a.createElement(s6, { onClose: () => d(!1) })
            )
          )
        );
      },
      R1 = w(De)(() => ({ marginTop: 5 })),
      d6 = ({
        queryError: e,
        hasData: t,
        hasProject: n,
        hasSelectedBuild: r,
        localBuildProgress: i,
        branch: o,
      }) => {
        let { setAccessToken: l } = q1(),
          { startBuild: s } = Sa(),
          c = () => {
            let d = a.createElement(
              he,
              { size: 'medium', variant: 'solid', onClick: s },
              a.createElement(Vt, null),
              'Take snapshots'
            );
            return i
              ? i.currentStep === 'error'
                ? a.createElement(
                    a.Fragment,
                    null,
                    a.createElement(js, {
                      localBuildProgress: i,
                      title: 'Build failed',
                    }),
                    d
                  )
                : a.createElement(Nr, { localBuildProgress: i })
              : d;
          };
        return a.createElement(
          xe,
          {
            footer: a.createElement(
              Ir,
              null,
              a.createElement(
                Et,
                null,
                t &&
                  !e &&
                  n &&
                  a.createElement(
                    ee,
                    { muted: !0, style: { marginLeft: 5 } },
                    'Waiting for build on ',
                    o
                  )
              ),
              a.createElement(Et, { push: !0 }, a.createElement(Zr, null))
            ),
          },
          e?.networkError
            ? a.createElement(
                fe,
                null,
                a.createElement(
                  ge,
                  null,
                  a.createElement(
                    'div',
                    null,
                    a.createElement(Se, null, 'Network error'),
                    a.createElement(ee, null, e.networkError.message)
                  ),
                  a.createElement(
                    he,
                    {
                      size: 'medium',
                      variant: 'solid',
                      onClick: () => l(null),
                    },
                    'Log out'
                  )
                )
              )
            : e?.graphQLErrors?.length
            ? a.createElement(
                fe,
                null,
                a.createElement(
                  ge,
                  null,
                  a.createElement(
                    'div',
                    null,
                    a.createElement(Se, null, e.graphQLErrors[0].message),
                    a.createElement(
                      ee,
                      { center: !0, muted: !0 },
                      e.graphQLErrors[0].extensions.code === 'FORBIDDEN'
                        ? 'You may have insufficient permissions. Try logging out and back in again.'
                        : "Try logging out or clear your browser's local storage."
                    )
                  ),
                  a.createElement(
                    Nt,
                    null,
                    a.createElement(
                      he,
                      {
                        size: 'medium',
                        variant: 'solid',
                        onClick: () => l(null),
                      },
                      'Log out'
                    ),
                    a.createElement(
                      R1,
                      {
                        withArrow: !0,
                        href: `${W1}#troubleshooting`,
                        target: '_blank',
                      },
                      'Troubleshoot'
                    )
                  )
                )
              )
            : t
            ? n
              ? r
                ? null
                : a.createElement(
                    fe,
                    null,
                    a.createElement(
                      ge,
                      null,
                      a.createElement(
                        'div',
                        null,
                        a.createElement(Se, null, 'Create a test baseline'),
                        a.createElement(
                          ee,
                          { center: !0, muted: !0 },
                          'Take an image snapshot of your stories to save their "last known good state" as test baselines.'
                        )
                      ),
                      c()
                    )
                  )
              : a.createElement(
                  fe,
                  null,
                  a.createElement(
                    ge,
                    null,
                    a.createElement(
                      'div',
                      null,
                      a.createElement(Se, null, 'Project not found'),
                      a.createElement(
                        ee,
                        { center: !0, muted: !0 },
                        'You may not have access to this project or it may not exist.'
                      )
                    ),
                    a.createElement(
                      R1,
                      { isButton: !0, onClick: () => l(null), withArrow: !0 },
                      'Switch account'
                    )
                  )
                )
            : a.createElement(ri, null)
        );
      },
      u6 = (e) => Object.fromEntries(Object.entries(e).map(([t]) => [t, null])),
      m6 = ({
        buildIsReviewable: e,
        userCanReview: t,
        onReviewSuccess: n,
        onReviewError: r,
      }) => {
        let [{ fetching: i }, o] = I0(a7),
          l = de(
            async (d) => {
              try {
                if (!e) throw new Error('Build is not reviewable');
                if (!t) throw new Error('No permission to review tests');
                let { error: u } = await o({ input: d });
                if (u) throw u;
                n?.(d);
              } catch (u) {
                r?.(u, d);
              }
            },
            [n, r, o, e, t]
          ),
          s = de(
            (d, u = 'SPEC') => l({ status: 'ACCEPTED', testId: d, batch: u }),
            [l]
          ),
          c = de(
            (d, u = 'SPEC') => l({ status: 'PENDING', testId: d, batch: u }),
            [l]
          );
        return {
          isReviewing: i,
          acceptTest: s,
          unacceptTest: c,
          buildIsReviewable: e,
          userCanReview: t,
        };
      },
      p6 = ct(`
  mutation UpdateUserPreferences($input: UserPreferencesInput!) {
    updateUserPreferences(input: $input) {
      updatedPreferences {
        vtaOnboarding
      }
    }
  }
`),
      h6 = ({ lastBuildOnBranch: e, vtaOnboarding: t }) => {
        let n = sn(),
          { notifications: r } = cn(),
          [i, o] = a.useState(!1),
          l = a.useCallback(() => {
            o(!0), r.forEach(({ id: y }) => n.clearNotification(y));
          }, [n, r]),
          [s, c] = a.useState(!1),
          d = a.useCallback(() => c(!0), []),
          [u, m] = a.useState(!0);
        a.useEffect(() => {
          if (n?.getUrlState?.().queryParams.vtaOnboarding === 'true') {
            m(!1);
            return;
          }
          m(t === 'COMPLETED' || t === 'DISMISSED');
        }, [n, t]);
        let [{ fetching: p }, v] = I0(p6),
          h = a.useCallback(
            async (y) => {
              await v({
                input: { vtaOnboarding: y ? 'COMPLETED' : 'DISMISSED' },
              }),
                m(!0),
                c(!1);
              let f = new URL(window.location.href);
              f.searchParams.has('vtaOnboarding') &&
                (f.searchParams.delete('vtaOnboarding'),
                window.history.replaceState({}, '', f.href));
            },
            [v]
          ),
          b = a.useMemo(
            () =>
              (
                (e &&
                  'testsForStatus' in e &&
                  e.testsForStatus?.nodes &&
                  yn(_s, e.testsForStatus.nodes)) ||
                []
              ).some((y) => y?.status === 'PENDING' && y?.result === 'CHANGED'),
            [e]
          ),
          k = !i && !u && !s;
        return {
          showOnboarding: k,
          showGuidedTour: !k && !u,
          completeOnboarding: l,
          skipOnboarding: a.useCallback(() => h(!1), [h]),
          completeWalkthrough: a.useCallback(() => h(!0), [h]),
          skipWalkthrough: a.useCallback(() => h(!1), [h]),
          startWalkthrough: d,
          lastBuildHasChanges: b,
          isUpdating: p,
        };
      },
      f6 = ({
        isOutdated: e,
        selectedBuildInfo: t,
        setSelectedBuildInfo: n,
        dismissBuildError: r,
        localBuildProgress: i,
        setOutdated: o,
        updateBuildStatus: l,
        projectId: s,
        gitInfo: c,
        storyId: d,
      }) => {
        let u = sn(),
          { addNotification: m } = u,
          p = r7({
            projectId: s,
            storyId: d,
            gitInfo: c,
            selectedBuildInfo: t,
          }),
          {
            hasData: v,
            hasProject: h,
            hasSelectedBuild: b,
            lastBuildOnBranch: k,
            lastBuildOnBranchIsReady: y,
            lastBuildOnBranchIsSelectable: g,
            selectedBuild: f,
            selectedBuildMatchesGit: E,
            queryError: S,
            rerunQuery: V,
            userCanReview: $,
          } = p,
          le = m6({
            buildIsReviewable: !!f && f.id === k?.id,
            userCanReview: $,
            onReviewSuccess: V,
            onReviewError: (mt, zt) => {
              mt instanceof Error &&
                m({
                  id: 'chromatic/errorAccepting',
                  link: void 0,
                  content: {
                    headline: `Failed to ${
                      zt.status === 'ACCEPTED' ? 'accept' : 'unaccept'
                    } changes`,
                    subHeadline: mt.message,
                  },
                  icon: { name: 'cross', color: 'red' },
                });
            },
          });
        pe(() => o(!E), [E, o]);
        let re =
            k &&
            'testsForStatus' in k &&
            k.testsForStatus?.nodes &&
            yn(_s, k.testsForStatus.nodes),
          ve = g && k4(re || []);
        pe(() => {
          l((mt) => ({ ...u6(mt), ...ve }));
        }, [JSON.stringify(ve), l]),
          pe(() => {
            n((mt) =>
              w4(mt, {
                shouldSwitchToLastBuildOnBranch: g && y,
                lastBuildOnBranchId: k?.id,
                storyId: d,
              })
            );
          }, [g, y, k?.id, n, d]);
        let ue = de(
            () => k?.id && g && n({ buildId: k.id, storyId: d }),
            [n, g, k?.id, d]
          ),
          {
            showOnboarding: Pe,
            showGuidedTour: _e,
            completeOnboarding: xt,
            completeWalkthrough: on,
            skipOnboarding: Ta,
            skipWalkthrough: Wr,
            startWalkthrough: Gr,
            lastBuildHasChanges: Zn,
          } = h6(p);
        return Pe && h
          ? a.createElement(
              a.Fragment,
              null,
              !v || S
                ? a.createElement(a.Fragment, null)
                : a.createElement(
                    Ci,
                    { watchState: p },
                    a.createElement(_7, {
                      gitInfo: c,
                      projectId: s,
                      updateBuildStatus: l,
                      dismissBuildError: r,
                      localBuildProgress: i,
                      showInitialBuildScreen: !f,
                      onComplete: xt,
                      onSkip: Ta,
                      lastBuildHasChanges: Zn,
                    })
                  )
            )
          : a.createElement(
              a.Fragment,
              null,
              !f || !b || !v || S
                ? a.createElement(d6, {
                    queryError: S,
                    hasData: v,
                    hasProject: h,
                    hasSelectedBuild: b,
                    branch: c.branch,
                    dismissBuildError: r,
                    isOutdated: e,
                    localBuildProgress: i,
                    ...(g && { switchToLastBuildOnBranch: ue }),
                  })
                : a.createElement(
                    H7,
                    { watchState: le },
                    a.createElement(
                      Ci,
                      { watchState: p },
                      a.createElement(c6, {
                        branch: c.branch,
                        dismissBuildError: r,
                        isOutdated: e,
                        localBuildProgress: i,
                        ...(k && { lastBuildOnBranch: k }),
                        ...(g && { switchToLastBuildOnBranch: ue }),
                        userCanReview: $,
                        storyId: d,
                      })
                    )
                  ),
              _e &&
                a.createElement(
                  Ci,
                  { watchState: { selectedBuild: f } },
                  a.createElement(f7, {
                    managerApi: u,
                    skipWalkthrough: Wr,
                    startWalkthrough: Gr,
                    completeWalkthrough: on,
                  })
                )
            );
      },
      g6 = (e) => {
        let [t, n] = Me();
        return a.createElement(f6, {
          selectedBuildInfo: t,
          setSelectedBuildInfo: n,
          ...e,
        });
      },
      Ws = () => {
        let [e, t] = Re(H1),
          [n, r] = Me(!1),
          i = de(
            (c) => {
              r(!1), t({ projectId: c });
            },
            [t]
          ),
          { projectId: o, written: l, configFile: s } = e || {};
        return {
          loading: !e,
          projectId: o,
          configFile: s,
          updateProject: i,
          projectUpdatingFailed: !n && l === !1,
          projectIdUpdated: !n && l === !0,
          clearProjectIdUpdated: () => r(!0),
        };
      },
      v6 = ({ active: e, api: t }) => {
        let [n, r] = R0(),
          { storyId: i } = cn(),
          [o] = Re(s5),
          [l] = Re(j1),
          [s] = Re(Li),
          [c, d] = Re(U1),
          [, u] = Re(Li),
          m = Xr({}),
          p = de((_e) => t.experimental_updateStatus(J, _e), [t]),
          {
            loading: v,
            projectId: h,
            configFile: b,
            updateProject: k,
            projectUpdatingFailed: y,
            projectIdUpdated: g,
            clearProjectIdUpdated: f,
          } = Ws(),
          [E, S] = Me(),
          [V, $] = Re($1),
          le = () => m(D1, { accessToken: n }),
          re = () => m(z1),
          ve = !!c && !['aborted', 'complete', 'error'].includes(c.currentStep),
          ue = (_e) =>
            a.createElement(
              S2,
              { key: oa, value: K2 },
              a.createElement(
                m5,
                { value: { accessToken: n, setAccessToken: r } },
                a.createElement(
                  Sd,
                  { addonUninstalled: V, setAddonUninstalled: $ },
                  a.createElement(
                    gu,
                    null,
                    a.createElement(
                      b4,
                      {
                        watchState: {
                          isRunning: ve,
                          startBuild: le,
                          stopBuild: re,
                        },
                      },
                      a.createElement(
                        'div',
                        {
                          hidden: !e,
                          style: { containerType: 'size', height: '100%' },
                        },
                        _e
                      )
                    )
                  )
                )
              )
            );
        if (window.CONFIG_TYPE !== 'DEVELOPMENT')
          return ue(a.createElement(v4, null));
        if (V) return ue(a.createElement(y4, null));
        if (!n)
          return ue(
            a.createElement(t4, {
              key: oa,
              setAccessToken: r,
              setCreatedProjectId: S,
              hasProjectId: !!h,
            })
          );
        if (v) return e ? a.createElement(ld, null) : null;
        if (!h)
          return ue(
            a.createElement(p4, {
              createdProjectId: E,
              setCreatedProjectId: S,
              onUpdateProject: k,
            })
          );
        if (l || !o) return console.error(l), ue(a.createElement(a4, null));
        if (y) {
          if (!b)
            throw new Error('Missing config file after configuration failure');
          return ue(a.createElement(u4, { projectId: h, configFile: b }));
        }
        if (g) {
          if (!b)
            throw new Error('Missing config file after configuration success');
          return ue(
            a.createElement(l4, { projectId: h, configFile: b, goToNext: f })
          );
        }
        let Pe = o.branch === c?.branch;
        return ue(
          a.createElement(g6, {
            dismissBuildError: () => d(void 0),
            isOutdated: !!s,
            localBuildProgress: Pe ? c : void 0,
            setOutdated: u,
            updateBuildStatus: p,
            projectId: h,
            gitInfo: o,
            storyId: i,
          })
        );
      },
      Ai = lt(Or()),
      y6 = ({ api: e }) => {
        let {
            addNotification: t,
            clearNotification: n,
            setOptions: r,
            togglePanel: i,
          } = e,
          { projectId: o } = Ws(),
          [l] = R0(),
          s = !!l,
          [c] = Re(Li),
          [d] = Re(U1),
          u =
            !!d &&
            !['aborted', 'complete', 'error', 'limited'].includes(
              d.currentStep
            ),
          [m] = Re(oo),
          p = Object.keys(m?.problems || {}).length > 0,
          [v] = Re(j1),
          h = Te(d?.currentStep),
          { status: b } = cn(),
          k = Object.values(b).filter((S) => S[J]?.status === 'warn');
        pe(() => {
          d?.currentStep !== h.current &&
            ((h.current = d?.currentStep),
            d?.currentStep === 'initialize' &&
              (t({
                id: `${J}/build-initialize`,
                content: {
                  headline: 'Build started',
                  subHeadline:
                    'Check the visual test addon to see the progress of your build.',
                },
                icon: { name: 'passed', color: Tt.positive },
                link: void 0,
              }),
              setTimeout(() => n(`${J}/build-initialize`), 1e4)),
            d?.currentStep === 'aborted' &&
              (t({
                id: `${J}/build-aborted`,
                content: {
                  headline: 'Build canceled',
                  subHeadline: 'Aborted by user.',
                },
                icon: { name: 'failed', color: Tt.negative },
                link: void 0,
              }),
              setTimeout(() => n(`${J}/build-aborted`), 1e4)),
            d?.currentStep === 'complete' &&
              (t({
                id: `${J}/build-complete`,
                content: {
                  headline: 'Build complete',
                  subHeadline: d.errorCount
                    ? `Encountered ${(0, Ai.default)(
                        'component error',
                        d.errorCount,
                        !0
                      )}`
                    : k.length
                    ? `Found ${(0, Ai.default)(
                        'story',
                        k.length,
                        !0
                      )} with ${(0, Ai.default)('change', k.length)}`
                    : 'No visual changes detected',
                },
                icon: { name: 'passed', color: Tt.positive },
                link: void 0,
              }),
              setTimeout(() => n(`${J}/build-complete`), 1e4)),
            d?.currentStep === 'error' &&
              t({
                id: `${J}/build-error`,
                content: {
                  headline: 'Build error',
                  subHeadline:
                    'Check the Storybook process on the command line for more details.',
                },
                icon: { name: 'failed', color: Tt.negative },
                link: void 0,
              }),
            d?.currentStep === 'limited' &&
              t({
                id: `${J}/build-limited`,
                content: {
                  headline: 'Build limited',
                  subHeadline:
                    'Your account has insufficient snapshots remaining to run this build. Visit your billing page to find out more.',
                },
                icon: { name: 'failed', color: Tt.negative },
                link: void 0,
              }));
        }, [t, n, d?.currentStep, d?.errorCount, d?.changeCount, k.length]);
        let y = Xr({}),
          g = () => y(D1, { accessToken: l }),
          f = () => y(z1),
          E;
        return (
          o || (E = 'Visual tests locked until a project is selected.'),
          s || (E = 'Visual tests locked until you are logged in.'),
          v && (E = 'Visual tests locked due to Git synchronization problem.'),
          p && (E = 'Visual tests locked due to configuration problem.'),
          window.CONFIG_TYPE !== 'DEVELOPMENT'
            ? null
            : a.createElement(b7, {
                isDisabled: !!E,
                isOutdated: c,
                isRunning: u,
                localBuildProgress: d,
                warning: E,
                clickWarning: () => {
                  r({ selectedPanel: oa }), i(!0);
                },
                startBuild: g,
                stopBuild: f,
              })
        );
      },
      B1;
    Pn.register(J, (e) => {
      Pn.add(oa, {
        type: Ra.PANEL,
        title: 'Visual Tests',
        match: ({ viewMode: r }) => r === 'story',
        render: ({ active: r }) => a.createElement(v6, { active: !!r, api: e }),
      }),
        Pn.add(o5, {
          type: Ra.experimental_SIDEBAR_TOP,
          render: () => a.createElement(y6, { api: e }),
        }),
        Pn.add(l5, {
          type: Ra.experimental_SIDEBAR_BOTTOM,
          render: () => a.createElement(W3, { api: e }),
        });
      let t = e.getChannel();
      if (!t) return;
      let n = !1;
      t.on(`${J}/heartbeat`, () => {
        clearTimeout(B1),
          n && ((n = !1), e.clearNotification(`${J}/connection-lost`)),
          (B1 = setTimeout(() => {
            (n = !0),
              e.addNotification({
                id: `${J}/connection-lost`,
                content: {
                  headline: 'Connection lost',
                  subHeadline:
                    'Lost connection to the Storybook server. Try refreshing the page.',
                },
                icon: { name: 'failed', color: Tt.negative },
                link: void 0,
              });
          }, 3e3));
      });
    });
  })();
} catch (e) {
  console.error(
    '[Storybook] One of your manager-entries failed: ' + import.meta.url,
    e
  );
}
