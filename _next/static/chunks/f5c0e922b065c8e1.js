(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 11563, (e, t, r) => {
    "use strict";
    function a() {
        return null
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return a
        }
    }),
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }),
    Object.assign(r.default, r),
    t.exports = r.default)
}
, 52683, e => {
    "use strict";
    var t = e.i(43476)
      , r = e.i(11563)
      , a = e.i(46932)
      , l = e.i(71645);
    let n = ({marqueeText: e="", speed: r=2, className: a, curveAmount: n=400, direction: s="left", interactive: i=!0}) => {
        let c = (0,
        l.useMemo)( () => (/\s|\u00A0$/.test(e) ? e.replace(/\s+$/, "") : e) + " ", [e])
          , o = (0,
        l.useRef)(null)
          , d = (0,
        l.useRef)([])
          , u = (0,
        l.useRef)(null)
          , [m,h] = (0,
        l.useState)(0)
          , [x,p] = (0,
        l.useState)(0)
          , f = (0,
        l.useId)()
          , g = `curve-${f}`
          , b = `M-100,40 Q500,${40 + n} 1540,40`
          , y = (0,
        l.useRef)(!1)
          , j = (0,
        l.useRef)(0)
          , v = (0,
        l.useRef)(s)
          , w = (0,
        l.useRef)(0);
        (0,
        l.useEffect)( () => {
            o.current && p(o.current.getComputedTextLength())
        }
        , [c, a]),
        (0,
        l.useEffect)( () => {
            u.current && h(u.current.getTotalLength())
        }
        , [n]),
        (0,
        l.useEffect)( () => {
            if (!x)
                return;
            let e = 0
              , t = () => {
                d.current.forEach(e => {
                    if (!e)
                        return;
                    let t = parseFloat(e.getAttribute("x") || "0");
                    y.current || (t += "right" === v.current ? Math.abs(r) : -Math.abs(r));
                    let a = (d.current.length - 1) * x;
                    t < -x && (t = a),
                    t > a && (t = -x),
                    e.setAttribute("x", t.toString())
                }
                ),
                e = requestAnimationFrame(t)
            }
            ;
            return t(),
            () => cancelAnimationFrame(e)
        }
        , [x, r]);
        let N = m && x ? Math.ceil(m / x) + 2 : 0
          , S = m > 0 && x > 0
          , M = () => {
            i && (y.current = !1,
            v.current = w.current > 0 ? "right" : "left")
        }
          , A = i ? y.current ? "grabbing" : "grab" : "auto";
        return (0,
        t.jsx)("div", {
            className: "min-h-[25vh] flex items-center justify-center w-full",
            style: {
                visibility: S ? "visible" : "hidden",
                cursor: A
            },
            onPointerDown: e => {
                i && (y.current = !0,
                j.current = e.clientX,
                w.current = 0,
                e.target.setPointerCapture(e.pointerId))
            }
            ,
            onPointerMove: e => {
                if (!i || !y.current)
                    return;
                let t = e.clientX - j.current;
                j.current = e.clientX,
                w.current = t,
                d.current.forEach(e => {
                    if (!e)
                        return;
                    let r = parseFloat(e.getAttribute("x") || "0");
                    r += t;
                    let a = (d.current.length - 1) * x;
                    r < -x && (r = a),
                    r > a && (r = -x),
                    e.setAttribute("x", r.toString())
                }
                )
            }
            ,
            onPointerUp: M,
            onPointerLeave: M,
            children: (0,
            t.jsxs)("svg", {
                className: "select-none w-full overflow-visible block aspect-[100/12] text-[6rem] font-bold tracking-[5px] uppercase leading-none",
                viewBox: "0 0 1440 120",
                children: [(0,
                t.jsx)("text", {
                    ref: o,
                    xmlSpace: "preserve",
                    style: {
                        visibility: "hidden",
                        opacity: 0,
                        pointerEvents: "none"
                    },
                    children: c
                }), (0,
                t.jsx)("defs", {
                    children: (0,
                    t.jsx)("path", {
                        ref: u,
                        id: g,
                        d: b,
                        fill: "none",
                        stroke: "transparent"
                    })
                }), S && (0,
                t.jsx)("text", {
                    xmlSpace: "preserve",
                    className: `fill-[#2f3542] ${a ?? ""}`,
                    children: (0,
                    t.jsx)("textPath", {
                        href: `#${g}`,
                        xmlSpace: "preserve",
                        children: Array.from({
                            length: N
                        }).map( (e, r) => (0,
                        t.jsx)("tspan", {
                            x: r * x,
                            ref: e => {
                                e && (d.current[r] = e)
                            }
                            ,
                            children: c
                        }, r))
                    })
                })]
            })
        })
    }
    ;
    var s = e.i(88653);
    function i(...e) {
        return e.filter(Boolean).join(" ")
    }
    let c = (0,
    l.forwardRef)( ({texts: e, transition: r={
        type: "spring",
        damping: 25,
        stiffness: 300
    }, initial: n={
        y: "100%",
        opacity: 0
    }, animate: c={
        y: 0,
        opacity: 1
    }, exit: o={
        y: "-120%",
        opacity: 0
    }, animatePresenceMode: d="wait", animatePresenceInitial: u=!1, rotationInterval: m=2e3, staggerDuration: h=0, staggerFrom: x="first", loop: p=!0, auto: f=!0, splitBy: g="characters", onNext: b, mainClassName: y, splitLevelClassName: j, elementLevelClassName: v, ...w}, N) => {
        let[S,M] = (0,
        l.useState)(0)
          , A = (0,
        l.useMemo)( () => {
            let t = e[S];
            if ("characters" === g) {
                let e = t.split(" ");
                return e.map( (t, r) => ({
                    characters: "undefined" != typeof Intl && Intl.Segmenter ? Array.from(new Intl.Segmenter("en",{
                        granularity: "grapheme"
                    }).segment(t), e => e.segment) : Array.from(t),
                    needsSpace: r !== e.length - 1
                }))
            }
            return "words" === g ? t.split(" ").map( (e, t, r) => ({
                characters: [e],
                needsSpace: t !== r.length - 1
            })) : "lines" === g ? t.split("\n").map( (e, t, r) => ({
                characters: [e],
                needsSpace: t !== r.length - 1
            })) : t.split(g).map( (e, t, r) => ({
                characters: [e],
                needsSpace: t !== r.length - 1
            }))
        }
        , [e, S, g])
          , P = (0,
        l.useCallback)( (e, t) => "first" === x ? e * h : "last" === x ? (t - 1 - e) * h : "center" === x ? Math.abs(Math.floor(t / 2) - e) * h : "random" === x ? Math.abs(Math.floor(Math.random() * t) - e) * h : Math.abs(x - e) * h, [x, h])
          , k = (0,
        l.useCallback)(e => {
            M(e),
            b && b(e)
        }
        , [b])
          , C = (0,
        l.useCallback)( () => {
            let t = S === e.length - 1 ? p ? 0 : S : S + 1;
            t !== S && k(t)
        }
        , [S, e.length, p, k])
          , F = (0,
        l.useCallback)( () => {
            let t = 0 === S ? p ? e.length - 1 : S : S - 1;
            t !== S && k(t)
        }
        , [S, e.length, p, k])
          , I = (0,
        l.useCallback)(t => {
            let r = Math.max(0, Math.min(t, e.length - 1));
            r !== S && k(r)
        }
        , [e.length, S, k])
          , R = (0,
        l.useCallback)( () => {
            0 !== S && k(0)
        }
        , [S, k]);
        return (0,
        l.useImperativeHandle)(N, () => ({
            next: C,
            previous: F,
            jumpTo: I,
            reset: R
        }), [C, F, I, R]),
        (0,
        l.useEffect)( () => {
            if (!f)
                return;
            let e = setInterval(C, m);
            return () => clearInterval(e)
        }
        , [C, m, f]),
        (0,
        t.jsxs)(a.motion.span, {
            className: i("flex flex-wrap whitespace-pre-wrap relative", y),
            ...w,
            layout: !0,
            transition: r,
            children: [(0,
            t.jsx)("span", {
                className: "sr-only",
                children: e[S]
            }), (0,
            t.jsx)(s.AnimatePresence, {
                mode: d,
                initial: u,
                children: (0,
                t.jsx)(a.motion.span, {
                    className: i("lines" === g ? "flex flex-col w-full" : "flex flex-wrap whitespace-pre-wrap relative"),
                    layout: !0,
                    "aria-hidden": "true",
                    children: A.map( (e, l, s) => {
                        let d = s.slice(0, l).reduce( (e, t) => e + t.characters.length, 0);
                        return (0,
                        t.jsxs)("span", {
                            className: i("inline-flex", j),
                            children: [e.characters.map( (e, l) => (0,
                            t.jsx)(a.motion.span, {
                                initial: n,
                                animate: c,
                                exit: o,
                                transition: {
                                    ...r,
                                    delay: P(d + l, s.reduce( (e, t) => e + t.characters.length, 0))
                                },
                                className: i("inline-block", v),
                                children: e
                            }, l)), e.needsSpace && (0,
                            t.jsx)("span", {
                                className: "whitespace-pre",
                                children: " "
                            })]
                        }, l)
                    }
                    )
                }, S)
            })]
        })
    }
    );
    function o() {
        return (0,
        t.jsxs)(t.Fragment, {
            children: [(0,
            t.jsx)(r.default, {
                children: (0,
                t.jsx)("title", {
                    children: "Home"
                })
            }), (0,
            t.jsxs)("main", {
                className: "min-h-screen mt-[10rem] p-6 md:p-12",
                children: [(0,
                t.jsxs)("div", {
                    className: "max-w-6xl w-full mx-auto overflow-hidden",
                    children: [(0,
                    t.jsxs)("div", {
                        className: "mb-12 text-center",
                        children: [(0,
                        t.jsxs)("div", {
                            className: "flex gap-2 justify-center text-4xl md:text-6xl font-bold text-gray-800",
                            children: [(0,
                            t.jsx)("p", {
                                className: "md:mt-2",
                                children: "Hi, I'm"
                            }), (0,
                            t.jsx)(c, {
                                texts: ["Bagas", "Aji", "Saputra"],
                                mainClassName: "px-2 sm:px-2 md:px-3 bg-blue-100 text-blue-800 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg",
                                staggerFrom: "first",
                                initial: {
                                    y: "-100%"
                                },
                                animate: {
                                    y: 0
                                },
                                exit: {
                                    y: "120%"
                                },
                                staggerDuration: .025,
                                splitLevelClassName: "overflow-hidden pb-0.5 sm:pb-1 md:pb-1",
                                transition: {
                                    type: "spring",
                                    damping: 30,
                                    stiffness: 400
                                },
                                rotationInterval: 2e3
                            })]
                        }), (0,
                        t.jsx)("p", {
                            className: "inline-block text-gray-500 mt-4 text-sm md:text-xl mb-3",
                            "data-aos": "flip-left",
                            children: "Frontend Developer | Creative Coder"
                        })]
                    }), (0,
                    t.jsxs)("section", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-4 p-4",
                        children: [(0,
                        t.jsxs)(a.motion.div, {
                            className: "md:col-span-2 row-span-2 bg-white border-[#ced6e0] border  p-6 shadow-sm hover:shadow-lg transition-all",
                            whileHover: {
                                scale: 1.02
                            },
                            "data-aos": "fade-up-right",
                            children: [(0,
                            t.jsx)("h2", {
                                className: "text-xl font-semibold text-gray-800 mb-2",
                                children: "Featured Project"
                            }), (0,
                            t.jsx)("p", {
                                className: "text-gray-600",
                                children: "Showcasing my work and ideas through a modern stack || Playground for my portfolio and experiments || Build with Next.js, Tailwind CSS, Framer Motion, and more."
                            }), (0,
                            t.jsx)("div", {
                                className: "flex flex-wrap gap-2 mt-4",
                                children: [{
                                    label: "Next.js",
                                    bg: "bg-black",
                                    text: "text-white"
                                }, {
                                    label: "Tailwind CSS",
                                    bg: "bg-blue-100",
                                    text: "text-blue-700"
                                }, {
                                    label: "Supabase",
                                    bg: "bg-yellow-100",
                                    text: "text-yellow-700"
                                }, {
                                    label: "GSAP",
                                    bg: "bg-green-100",
                                    text: "text-green-700"
                                }, {
                                    label: "Framer Motion",
                                    bg: "bg-cyan-100",
                                    text: "text-cyan-700"
                                }, {
                                    label: "Postman",
                                    bg: "bg-orange-100",
                                    text: "text-orange-700"
                                }, {
                                    label: "Vercel",
                                    bg: "bg-gray-100",
                                    text: "text-gray-700"
                                }].map( (e, r) => (0,
                                t.jsx)("span", {
                                    className: `cursor-target inline-block text-sm ${e.bg} ${e.text} px-3 py-1 `,
                                    children: e.label
                                }, r))
                            })]
                        }), (0,
                        t.jsxs)(a.motion.div, {
                            className: "bg-white border-[#ced6e0] border  p-6 shadow-sm hover:shadow-lg transition-all",
                            whileHover: {
                                y: -4
                            },
                            "data-aos": "fade-up-left",
                            children: [(0,
                            t.jsx)("h3", {
                                className: "font-semibold text-gray-800 mb-1",
                                children: "About Me ?"
                            }), (0,
                            t.jsx)("p", {
                                className: "text-sm text-gray-600",
                                children: "Turning coffee into code and ideas into slick web experiences."
                            })]
                        }), (0,
                        t.jsxs)(a.motion.div, {
                            className: "bg-white  border-[#ced6e0] border p-6 shadow-sm hover:shadow-lg transition-all",
                            whileHover: {
                                y: -4
                            },
                            "data-aos": "fade-up-left",
                            children: [(0,
                            t.jsx)("h3", {
                                className: "font-semibold text-gray-800 mb-1",
                                children: "Some Fact"
                            }), (0,
                            t.jsx)("p", {
                                className: "text-sm text-gray-600",
                                children: "Always learning even strugling and stressed out about frontend engineering and dev lifestyle."
                            })]
                        })]
                    })]
                }), (0,
                t.jsx)(n, {
                    marqueeText: "Perfection Is a Lie ✦"
                })]
            })]
        })
    }
    c.displayName = "RotatingText",
    e.s(["default", () => o], 52683)
}
]);
