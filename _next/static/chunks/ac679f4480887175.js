(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 74518, e => {
    "use strict";
    var t = e.i(43476)
      , i = e.i(46932)
      , r = e.i(40141);
    let s = [{
        title: "Discuss",
        description: "We gather all your needs and goals to understand the project.",
        icon: (0,
        t.jsx)(function(e) {
            return (0,
            r.GenIcon)({
                tag: "svg",
                attr: {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                    },
                    child: []
                }, {
                    tag: "rect",
                    attr: {
                        x: "8",
                        y: "2",
                        width: "8",
                        height: "4",
                        rx: "1",
                        ry: "1"
                    },
                    child: []
                }]
            })(e)
        }, {
            size: 28
        }),
        color: "bg-blue-200"
    }, {
        title: "Pay 50%",
        description: "Down Payment to ensure project commitment",
        icon: (0,
        t.jsx)(function(e) {
            return (0,
            r.GenIcon)({
                tag: "svg",
                attr: {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                },
                child: [{
                    tag: "line",
                    attr: {
                        x1: "12",
                        y1: "1",
                        x2: "12",
                        y2: "23"
                    },
                    child: []
                }, {
                    tag: "path",
                    attr: {
                        d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                    },
                    child: []
                }]
            })(e)
        }, {
            size: 28
        }),
        color: "bg-green-200"
    }, {
        title: "Development",
        description: "Transform Discussion Result into Clean & Stylish Website.",
        icon: (0,
        t.jsx)(function(e) {
            return (0,
            r.GenIcon)({
                tag: "svg",
                attr: {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                },
                child: [{
                    tag: "polyline",
                    attr: {
                        points: "16 18 22 12 16 6"
                    },
                    child: []
                }, {
                    tag: "polyline",
                    attr: {
                        points: "8 6 2 12 8 18"
                    },
                    child: []
                }]
            })(e)
        }, {
            size: 28
        }),
        color: "bg-yellow-200"
    }, {
        title: "Review",
        description: "Ensure everything works perfectly and meets your expectations.",
        icon: (0,
        t.jsx)(function(e) {
            return (0,
            r.GenIcon)({
                tag: "svg",
                attr: {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
                    },
                    child: []
                }, {
                    tag: "polyline",
                    attr: {
                        points: "22 4 12 14.01 9 11.01"
                    },
                    child: []
                }]
            })(e)
        }, {
            size: 28
        }),
        color: "bg-purple-200"
    }, {
        title: "Launch",
        description: "Pay 50% Charge, Deploy the website and make it live for your clients.",
        icon: (0,
        t.jsx)(function(e) {
            return (0,
            r.GenIcon)({
                tag: "svg",
                attr: {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                },
                child: [{
                    tag: "line",
                    attr: {
                        x1: "22",
                        y1: "2",
                        x2: "11",
                        y2: "13"
                    },
                    child: []
                }, {
                    tag: "polygon",
                    attr: {
                        points: "22 2 15 22 11 13 2 9 22 2"
                    },
                    child: []
                }]
            })(e)
        }, {
            size: 28
        }),
        color: "bg-pink-200"
    }];
    function n() {
        return (0,
        t.jsxs)("main", {
            className: "py-16 px-4 sm:px-6 md:px-12 min-h-screen",
            children: [(0,
            t.jsxs)("div", {
                className: "max-w-6xl mx-auto text-center mb-12",
                children: [(0,
                t.jsx)("h1", {
                    className: "text-3xl sm:text-4xl font-bold text-gray-900",
                    children: "How We Work"
                }), (0,
                t.jsx)("p", {
                    className: "text-gray-600 mt-4",
                    children: "Our workflow is designed to be simple, visual, and effective."
                })]
            }), (0,
            t.jsx)("div", {
                className: "relative max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between items-center md:items-start gap-12",
                children: s.map( (e, r) => (0,
                t.jsxs)(i.motion.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        delay: .15 * r,
                        duration: .5
                    },
                    className: "relative flex flex-col items-center md:items-start text-center md:text-left w-64",
                    children: [(0,
                    t.jsx)("div", {
                        className: `z-48 flex items-center justify-center w-16 h-16 rounded-full ${e.color} mb-4`,
                        children: e.icon
                    }), (0,
                    t.jsxs)("div", {
                        className: "bg-white flex flex-col justify-center items-center md:justify-start md:items-start h-50 px-6 py-4 border border-gray-200 -mt-8  transition relative z-10",
                        children: [(0,
                        t.jsx)("h3", {
                            className: "text-lg sm:text-xl font-semibold text-gray-900 mb-2",
                            children: e.title
                        }), (0,
                        t.jsx)("p", {
                            className: "text-gray-600 text-sm sm:text-base",
                            children: e.description
                        })]
                    })]
                }, r))
            })]
        })
    }
    let o = [{
        title: "Lite",
        price: "$100 / IDR 1.700k",
        features: ["Landing Pages", "Max 5 Pages", "Free Domain .com", "3x Revision"],
        color: "bg-blue-100",
        href: "/signup?plan=basic"
    }, {
        title: "Regular",
        price: "$150 / IDR 2.500k",
        features: ["Landing Page CMS", "Max 7 Pages", "Free Domain .com", "5x Revision", "Dashboard Admin"],
        color: "bg-green-100",
        href: "/signup?plan=pro"
    }, {
        title: "Pro",
        price: "$250+ / IDR 4.200k+",
        features: ["SaaS", "Full Features", "Price depending on complexity"],
        color: "bg-yellow-100",
        href: "/contact"
    }];
    function l() {
        return (0,
        t.jsxs)("main", {
            className: "min-h-screen px-4 sm:px-6 md:px-12 py-6 md:py-8 mt-24 sm:mt-26 md:mt-28 lg:mt-30",
            children: [(0,
            t.jsxs)("div", {
                className: "max-w-6xl mx-auto text-center mb-12",
                children: [(0,
                t.jsx)("h1", {
                    className: "text-3xl sm:text-4xl font-bold text-gray-900 mb-4",
                    children: "Pricing Site"
                }), (0,
                t.jsx)("p", {
                    className: "text-gray-600 text-base sm:text-lg",
                    children: "Choose the price that fits your needs. Clean & Stylish Website"
                })]
            }), (0,
            t.jsx)("div", {
                className: "grid gap-8 md:grid-cols-2 lg:grid-cols-3",
                children: o.map( (e, r) => (0,
                t.jsx)(i.motion.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        delay: .15 * r
                    },
                    className: "flex flex-col justify-between bg-white shadow-md border border-gray-200 hover:shadow-lg transition-shadow",
                    children: (0,
                    t.jsxs)("div", {
                        className: "p-6 flex flex-col flex-1",
                        children: [(0,
                        t.jsx)("h2", {
                            className: "text-xl sm:text-2xl font-semibold text-gray-900 mb-2",
                            children: e.title
                        }), (0,
                        t.jsx)("p", {
                            className: "text-gray-800 font-bold text-2xl sm:text-3xl mb-4",
                            children: e.price
                        }), (0,
                        t.jsx)("ul", {
                            className: "text-gray-600 flex-1 space-y-2 mb-6",
                            children: e.features.map( (e, i) => (0,
                            t.jsx)("li", {
                                className: "before:content-['•'] before:text-gray-400 before:mr-2",
                                children: e
                            }, i))
                        })]
                    })
                }, r))
            }), (0,
            t.jsx)(n, {})]
        })
    }
    e.s(["default", () => l], 74518)
}
]);
