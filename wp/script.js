webpackJsonp([30], {
    0: function(a, b, c) {
        (function(a) {
            var b = {
                PagesProductsFramesFrameDetailIndex: c(642)
            };
            a.Components || (a.Components = {});
            for (var d in b) a.Components[d] = b[d]
        }).call(b, function() {
            return this
        }())
    },
    237: function(a, b, c) {
        var d, e, f, g;
        g = [c(2), c(4), c(193)], f = g[0], d = g[1], e = g[2], a.exports =
            d.createClass({
                displayName: "QuantaIconsDownArrow",
                SVG: {
                    "class": "c-icon--down-arrow",
                    width: 12,
                    height: 8
                },
                propTypes: {
                    cssUtility: d.PropTypes.string,
                    cssModifier: d.PropTypes.string
                },
                getDefaultProps: function() {
                    return {
                        cssUtility: "u-icon",
                        cssModifier: ""
                    }
                },
                render: function() {
                    return d.createElement(e, d.__spread({},
                        this.props, {
                            SVG: this.SVG
                        }), d.createElement("path", {
                        d: "M2,0L0,2l6,6l6-6l-2-2L6,4L2,0z"
                    }))
                }
            })
    },
    249: function(a, b, c) {
        var d, e, f;
        f = [c(4), c(193)], d = f[0], e = f[1], a.exports = d.createClass({
            displayName: "QuantaIconsI",
            SVG: {
                "class": "c-icon--i",
                width: 16,
                height: 16
            },
            propTypes: {
                cssUtility: d.PropTypes.string,
                cssModifier: d.PropTypes.string,
                fillBackground: d.PropTypes.bool
            },
            getDefaultProps: function() {
                return {
                    cssUtility: "u-icon -icon-gray",
                    cssModifier: "",
                    fillBackground: !1
                }
            },
            render: function() {
                return d.createElement(e, d.__spread({},
                        this.props, {
                            SVG: this.SVG,
                            title: "Info"
                        }), this.props.fillBackground ?
                    d.createElement("path", {
                        d: "M16,8 C16,3.581722 12.418278,0 8,0 C3.581722,0 0,3.581722 0,8 C0,12.418278 3.581722,16 8,16 C12.418278,16 16,12.418278 16,8 Z"
                    }) : d.createElement("path", {
                        d: "M16,8 C16,3.581722 12.418278,0 8,0 C3.581722,0 0,3.581722 0,8 C0,12.418278 3.581722,16 8,16 C12.418278,16 16,12.418278 16,8 Z M1,8 C1,4.13400675 4.13400675,1 8,1 C11.8659932,1 15,4.13400675 15,8 C15,11.8659932 11.8659932,15 8,15 C4.13400675,15 1,11.8659932 1,8 Z"
                    }), d.createElement("path", {
                        fill: this.props.fillBackground ?
                            "#ffffff" : "inherit",
                        d: "M8,3.79998779 C7.424,3.79998779 7.112,4.19598779 7.112,4.68798779 C7.112,5.16798779 7.424,5.57598779 7.988,5.57598779 C8.552,5.57598779 8.888,5.16798779 8.888,4.68798779 C8.888,4.19598779 8.564,3.79998779 8,3.79998779 L8,3.79998779 Z M7.256,11.004 C7.256,11.508 7.184,11.544 6.5,11.592 L6.5,12 L9.584,12 L9.584,11.592 C8.9,11.544 8.828,11.508 8.828,11.004 L8.828,6.408 L8.744,6.336 L6.572,6.66 L6.572,7.044 L6.968,7.104 C7.172,7.128 7.256,7.212 7.256,7.656 L7.256,11.004 Z"
                    }))
            }
        })
    },
    287: function(a, b, c) {
        var d, e, f;
        f = [c(2), c(4)], e = f[0], d = f[1], a.exports = d.createClass({
            displayName: "AtomsImagesImg",
            propTypes: {
                imageSet: d.PropTypes.object,
                cssModifier: d.PropTypes.string
            },
            getDefaultProps: function() {
                return {
                    cssModifier: ""
                }
            },
            componentDidMount: function() {
                return this.runPicturefill()
            },
            componentDidUpdate: function() {
                return this.runPicturefill()
            },
            runPicturefill: function() {
                return "undefined" != typeof window &&
                    null !== window && "function" ==
                    typeof window.picturefill ? window.picturefill({
                        elements: [d.findDOMNode(
                            this.refs.img)]
                    }) : void 0
            },
            render: function() {
                var a, b, c, f, g, h, i;
                if (b = e.assign({}, e.omit(this.props,
                    "cssModifier")), this.props.imageSet) {
                    h = [], c = this.props.imageSet;
                    for (a in c) i = c[a], f = parseInt(
                            e.last(a.split("_")), 10),
                        isNaN(f) || (g = i + " " + f +
                            "w", h.push(g));
                    e.assign(b, {
                        srcSet: h.join(",")
                    })
                }
                return d.createElement("img", d.__spread({},
                    b, {
                        className: this.props.cssModifier,
                        ref: "img"
                    }))
            }
        })
    },
    312: function(a, b, c) {
        var d, e, f, g;
        g = [c(2), c(4), c(175)], f = g[0], e = g[1], d = g[2], a.exports =
            e.createClass({
                displayName: "AtomsBreadcrumbs",
                BLOCK_CLASS: "c-breadcrumbs",
                mixins: [d.analytics, d.classes],
                propTypes: {
                    links: e.PropTypes.arrayOf(e.PropTypes.shape({
                        href: e.PropTypes.string,
                        text: e.PropTypes.string
                    }))
                },
                getDefaultProps: function() {
                    return {
                        links: [],
                        cssModifier: ""
                    }
                },
                getStaticClasses: function() {
                    return {
                        block: this.BLOCK_CLASS + " " +
                            this.props.cssModifier,
                        list: this.BLOCK_CLASS + "__list " +
                            this.props.cssModifier +
                            " u-list-reset",
                        listItem: this.BLOCK_CLASS +
                            "__list-item u-text u-ttu",
                        link: this.BLOCK_CLASS +
                            "__link u-type -nav u-link--nav u-color--dark-gray",
                        current: this.BLOCK_CLASS +
                            "__current u-type -capl u-color--dark-gray-alt-2",
                        currentIndicator: "u-hide--visual"
                    }
                },
                renderLink: function(a, b) {
                    var c;
                    return c = this.getClasses(), e.createElement(
                        "li", {
                            key: b,
                            className: c.listItem,
                            onClick: this.trackInteraction
                                .bind(this,
                                    "breadcrumbs-click-" +
                                    f.camelCase(a.text)
                                )
                        }, a.href ? e.createElement("a", {
                            href: a.href,
                            children: a.text,
                            className: c.link
                        }) : e.createElement("span", {
                            className: c.current
                        }, e.createElement("span", {
                            className: c.currentIndicator,
                            children: "Current:"
                        }), a.text))
                },
                render: function() {
                    var a;
                    return a = this.getClasses(), e.createElement(
                        "nav", {
                            className: a.block,
                            role: "navigation",
                            "aria-label": "Breadcrumbs"
                        }, this.props.links.length > 0 ?
                        e.createElement("ul", {
                            children: f.map(this.props
                                .links, this.renderLink
                            ),
                            className: a.list
                        }) : void 0)
                }
            })
    },
    535: function(a, b, c) {
        var d, e, f, g;
        g = [c(2), c(4), c(175)], f = g[0], e = g[1], d = g[2], a.exports =
            e.createClass({
                displayName: "MoleculesProductsColorSwatchesDeprecated",
                BLOCK_CLASS: "c-color-swatches",
                mixins: [d.analytics, d.classes, d.dispatcher],
                propTypes: function() {
                    return {
                        activeFrameAssemblyIndex: e.PropTypes
                            .number,
                        cssModifier: e.PropTypes.string,
                        frameAssemblies: e.PropTypes.arrayOf(
                            e.PropTypes.object),
                        gaCategory: e.PropTypes.string,
                        handleColorChange: e.PropTypes.func,
                        productPosition: e.PropTypes.number,
                        version: e.PropTypes.string
                    }
                },
                getDefaultProps: function() {
                    return {
                        activeFrameAssemblyIndex: 0,
                        cssModifier: "",
                        frameAssemblies: [],
                        gaCategory: "Landing-Page",
                        handleColorChange: function() {},
                        hiddenAssembiles: "",
                        productPosition: null,
                        version: "fans",
                        analyticsCategory: "colorSwatch"
                    }
                },
                handleSwatchClick: function(a, b, c) {
                    var d;
                    return d = f.isFinite(this.props.productPosition) ?
                        f.assign({}, this.props.frameAssemblies[
                            a], {
                            position: this.props.productPosition
                        }) : this.props.frameAssemblies[a],
                        this.commandDispatcher("analytics",
                            "pushProductEvent", {
                                type: "productImpression",
                                products: [d]
                            }), b && this.trackInteraction(
                            "colorSwatch-click-" + b, c),
                        this.props.handleColorChange(a)
                },
                getStaticClasses: function() {
                    return {
                        block: [this.BLOCK_CLASS, this.props
                            .cssModifier
                        ],
                        swatch: [this.BLOCK_CLASS +
                            "__swatch",
                            "u-button-reset"
                        ]
                    }
                },
                render: function() {
                    var a, b;
                    return a = this.getClasses(), b = f.map(
                        this.props.frameAssemblies,
                        function(b) {
                            return function(c, d) {
                                var g, h, i;
                                return i = {
                                        key: d,
                                        onClick: b.handleSwatchClick
                                            .bind(b,
                                                d,
                                                c.product_id ||
                                                c.id
                                            )
                                    }, c.swatch_url ?
                                    f.assign(i, {
                                        className: [
                                            a
                                            .swatch,
                                            d ===
                                            b
                                            .props
                                            .activeFrameAssemblyIndex ?
                                            "-active" :
                                            void 0, -
                                            1 !==
                                            b
                                            .props
                                            .hiddenAssembiles
                                            .indexOf(
                                                d
                                            ) ?
                                            "-hidden" :
                                            void 0
                                        ].join(
                                            " "
                                        ),
                                        style: {
                                            backgroundImage: "url(" +
                                                c
                                                .swatch_url +
                                                ")"
                                        }
                                    }) : c.color_swatch ?
                                    (g = f.find(c.gendered_details,
                                            function(
                                                a) {
                                                return
                                                    a
                                                    .gender ===
                                                    b
                                                    .props
                                                    .version
                                            }), h =
                                        g ? g.product_id :
                                        0, f.assign(
                                            i, {
                                                className: [
                                                        a
                                                        .swatch,
                                                        d ===
                                                        b
                                                        .props
                                                        .activeFrameAssemblyIndex ?
                                                        "-active" :
                                                        void 0,
                                                        "js-ga-click"
                                                    ]
                                                    .join(
                                                        " "
                                                    ),
                                                style: {
                                                    backgroundImage: "url('" +
                                                        c
                                                        .color_swatch +
                                                        "')"
                                                }
                                            })) : f
                                    .assign(i, {
                                        className: [
                                            a
                                            .swatch,
                                            "-color-code-" +
                                            c
                                            .color_code,
                                            d ===
                                            b
                                            .props
                                            .activeFrameAssemblyIndex ?
                                            "-active" :
                                            void 0,
                                            "js-ga-click"
                                        ].join(
                                            " "
                                        )
                                    }), c.color &&
                                    f.assign(i, {
                                        "aria-label": c
                                            .color,
                                        role: "menuitemradio",
                                        "aria-checked": d ===
                                            b.props
                                            .activeFrameAssemblyIndex
                                    }), e.createElement(
                                        "button", e
                                        .__spread({},
                                            i))
                            }
                        }(this)), e.createElement("div", {
                        children: b,
                        role: "menu",
                        "aria-label": "Frame colors",
                        "aria-controls": this.props
                            .swatchAriaControls,
                        className: a.block
                    })
                }
            })
    },
    560: function(a, b, c) {
        var d, e, f, g, h;
        h = [c(2), c(4), c(287), c(175)], g = h[0], f = h[1], d = h[
            2], e = h[3], a.exports = f.createClass({
            displayName: "AtomsImagesHeadturn",
            BLOCK_CLASS: "c-headturn",
            FRAME_ASPECT_RATIO: 2.2288,
            MAX_GAMMA: 18,
            mixins: [e.analytics, e.classes],
            propTypes: {
                src: f.PropTypes.string,
                cssModifier: f.PropTypes.string
            },
            getDefaultProps: function() {
                return {
                    src: "",
                    cssModifier: ""
                }
            },
            getInitialState: function() {
                return {
                    offsetLeft: 0,
                    offsetWidth: 0
                }
            },
            getStaticClasses: function() {
                return {
                    block: [this.BLOCK_CLASS, this.props
                        .cssModifier
                    ],
                    image: this.BLOCK_CLASS + "__image"
                }
            },
            componentDidMount: function() {
                return this.prepareImage(), this.setLayout(),
                    window.addEventListener("resize",
                        this.setLayout), this.touchDeviceWithOrientationEvents() ?
                    window.addEventListener(
                        "deviceorientation", this.handleDeviceOrientation
                    ) : this.getContainerEl().addEventListener(
                        "mousemove", this.handleMouseMove
                    )
            },
            componentWillUnmount: function() {
                return window.removeEventListener(
                        "resize", this.setLayout), this
                    .touchDeviceWithOrientationEvents() ?
                    window.removeEventListener(
                        "deviceorientation", this.handleDeviceOrientation
                    ) : this.getContainerEl().removeEventListener(
                        "mousemove", this.handleMouseMove
                    )
            },
            prepareImage: function() {
                var a;
                return a = new Image, a.onload = this.prepareFrames,
                    a.src = this.props.src
            },
            prepareFrames: function() {
                var a, b;
                return b = f.findDOMNode(this.refs.image),
                    a = Math.round(b.offsetWidth / (b.offsetHeight *
                        this.FRAME_ASPECT_RATIO)), this
                    .setState({
                        frameCount: a,
                        position: Math.floor(a / 2)
                    })
            },
            setLayout: function() {
                var a, b, c;
                return a = this.getContainerEl(), this.setState({
                    offsetLeft: null != (b =
                            this.props.offsetLeft
                        ) ? b : a.getBoundingClientRect()
                        .left,
                    offsetWidth: null != (c =
                        this.props.offsetWidth
                    ) ? c : a.offsetWidth
                })
            },
            getContainerEl: function() {
                return f.findDOMNode(this.refs.container)
            },
            componentWillReceiveProps: function(a) {
                return a.offsetWidth && a.offsetWidth !==
                    this.props.offsetWidth && this.setState({
                        offsetWidth: a.offsetWidth
                    }), a.offsetLeft && a.offsetLeft !==
                    this.props.offsetLeft ? this.setState({
                        offsetLeft: a.offsetLeft
                    }) : void 0
            },
            touchDeviceWithOrientationEvents: function() {
                return null != window.DeviceOrientationEvent &&
                    ("ontouchstart" in window || window
                        .DocumentTouch && document instanceof DocumentTouch
                    )
            },
            handleDeviceOrientation: function(a) {
                return null != this.state.frameCount ?
                    this.moveModel(.5 + .5 * (a.gamma /
                        this.MAX_GAMMA)) : void 0
            },
            handleMouseMove: function(a) {
                return null != this.state.frameCount ?
                    this.moveModel((a.pageX - this.state
                        .offsetLeft) / this.state.offsetWidth) :
                    void 0
            },
            moveModel: function(a) {
                var b;
                return a = Math.max(0, Math.min(1, a)),
                    b = Math.round(a * (this.state.frameCount -
                        1)), this.state.position !== b ?
                    this.setState({
                        nextPosition: b
                    }) : void 0
            },
            componentDidUpdate: function() {
                var a;
                return null != this.state.nextPosition &&
                    this.state.nextPosition !== this.state
                    .position ? (a = null == this.state
                        .position ? this.state.nextPosition :
                        this.state.position < this.state
                        .nextPosition ? this.state.position +
                        1 : this.state.position > this.state
                        .nextPosition ? this.state.position -
                        1 : void 0, g.delay(function() {
                            return this.setState({
                                position: a
                            })
                        }.bind(this), 30)) : void 0
            },
            render: function() {
                var a, b;
                return a = this.getClasses(), b = null !=
                    this.state.position && null != this
                    .state.frameCount ? "-position-" +
                    this.state.position + "-of-" + this
                    .state.frameCount : "", f.createElement(
                        "div", {
                            className: a.block,
                            ref: "container",
                            onMouseEnter: this.trackInteraction
                        }, f.createElement(d, {
                            cssModifier: a.image +
                                " " + b,
                            ref: "image",
                            src: this.props.src
                        }))
            }
        })
    },
    587: function(a, b, c) {
        var d, e, f, g, h, i, j, k = function(a, b) {
            return (+a % (b = +b) + b) % b
        };
        j = [c(2), c(4), c(588), c(589), c(175)], i = j[0], f = j[1],
            d = j[2], h = j[3], e = j[4], g = f.addons.CSSTransitionGroup,
            a.exports = f.createClass({
                displayName: "MoleculesSlidersActive",
                BLOCK_CLASS: "c-slider-active",
                mixins: [e.analytics, e.classes, e.dispatcher],
                propTypes: {
                    initialActiveIndex: f.PropTypes.number,
                    "aria-label": f.PropTypes.string,
                    capabilities: f.PropTypes.object,
                    children: f.PropTypes.node,
                    cssModifier: f.PropTypes.string,
                    showDots: f.PropTypes.bool,
                    cssModifierListItem: f.PropTypes.string,
                    hideArrowsMobile: f.PropTypes.bool,
                    enableDragging: f.PropTypes.bool
                },
                getDefaultProps: function() {
                    return {
                        initialActiveIndex: 0,
                        cssModifier: "",
                        arrowColor: "-icon-light-gray",
                        showDots: !1,
                        cssModifierListItem: "",
                        hideArrowsMobile: !0,
                        enableDragging: !0,
                        manageChangeActiveIndex: function() {}
                    }
                },
                getInitialState: function() {
                    return {
                        activeIndex: this.props.initialActiveIndex,
                        childrenUpdateCount: 0,
                        deltaX: 0,
                        focusedToggle: null,
                        initialPosition: {
                            x: 0,
                            y: 0
                        },
                        isDragging: !1,
                        nextIndex: null,
                        transition: {
                            duration: "0s",
                            property: "none"
                        },
                        slideWidth: 0
                    }
                },
                getStaticClasses: function() {
                    return {
                        block: this.BLOCK_CLASS + " " +
                            this.props.cssModifier,
                        list: this.BLOCK_CLASS +
                            "__list u-list-reset",
                        listItem: this.BLOCK_CLASS +
                            "__list-item " + this.props.cssModifierListItem,
                        leftToggle: this.BLOCK_CLASS +
                            "__toggle -left u-button-reset js-ga-click",
                        rightToggle: this.BLOCK_CLASS +
                            "__toggle -right u-button-reset js-ga-click",
                        leftArrow: this.BLOCK_CLASS +
                            "__arrow -left " + this.props.arrowColor +
                            " -size-fill",
                        rightArrow: this.BLOCK_CLASS +
                            "__arrow -right " + this.props.arrowColor +
                            " -size-fill",
                        dotsContainer: this.BLOCK_CLASS +
                            "__dots-container u-list-reset u-dn--720 u-tar",
                        dot: this.BLOCK_CLASS + "__dot"
                    }
                },
                classesWillUpdate: function() {
                    return {
                        list: {
                            "-single": this.props.children.length <
                                2
                        },
                        leftArrow: {
                            "-focused": "left" === this.state
                                .focusedToggle
                        },
                        rightArrow: {
                            "-focused": "right" === this.state
                                .focusedToggle
                        },
                        leftToggle: {
                            "u-dn u-db--720": this.props.hideArrowsMobile
                        },
                        rightToggle: {
                            "u-dn u-db--720": this.props.hideArrowsMobile
                        }
                    }
                },
                dividendDependentModulo: function(a, b) {
                    return k(a, b)
                },
                componentDidMount: function() {
                    return this.setState({
                        listRef: f.findDOMNode(this
                            .refs.list)
                    }, this.setSlideWidth), window.addEventListener(
                        "resize", this.handleResize)
                },
                componentWillUnmount: function() {
                    return window.removeEventListener(
                        "resize", this.handleResize)
                },
                componentDidUpdate: function(a, b) {
                    return this.state.activeIndex !== b.activeIndex ?
                        this.props.manageChangeActiveIndex(
                            this.state.activeIndex) : this.props
                        .children.length !== a.children.length &&
                        this.state.activeIndex > this.props
                        .children.length - 1 ? this.setState({
                            activeIndex: this.props.children
                                .length - 1
                        }) : void 0
                },
                handleResize: function() {
                    return this.setSlideWidth()
                },
                setSlideWidth: function() {
                    return this.setState({
                        slideWidth: i.get(this.state,
                            "listRef.offsetWidth"
                        )
                    })
                },
                getClientPosition: function(a) {
                    return {
                        x: i.get(a, "touches[0].clientX", a
                            .clientX),
                        y: i.get(a, "touches[0].clientY", a
                            .clientY)
                    }
                },
                handleDragStart: function(a) {
                    return a.preventDefault(), this.setState({
                        initialPosition: this.getClientPosition(
                            a),
                        isDragging: !0
                    })
                },
                handleDrag: function(a) {
                    var b, c, d;
                    return !this.state.isDragging || (b =
                            this.getClientPosition(a), c =
                            b.x - this.state.initialPosition
                            .x, d = b.y - this.state.initialPosition
                            .y, Math.abs(d) > Math.abs(c)) ?
                        void 0 : (a.touches || a.preventDefault(),
                            this.setState({
                                deltaX: c
                            }))
                },
                handleDragEnd: function(a) {
                    return this.state.isDragging ? this.setState({
                        deltaX: this.getClientPosition(
                                a).x - this.state.initialPosition
                            .x,
                        isDragging: !1,
                        nextIndex: this.getNextIndexFromDeltaX()
                    }, this.animateToNextSlide) : void 0
                },
                animateToNextSlide: function(a) {
                    var b, c;
                    return null == a && (a = this.getDeltaXToNextSlide()),
                        c = i.get(this.props,
                            "capabilities.cssTransition", {}
                        ), b = i.get(this.props,
                            "capabilities.cssTransform", {}
                        ), c.available && b.available ? (
                            this.state.listRef.addEventListener(
                                c.vendor.endEvent, this.handleTransitionEnd
                            ), this.setState({
                                deltaX: a,
                                initialPosition: {
                                    x: 0,
                                    y: 0
                                },
                                transition: {
                                    duration: "0.3s",
                                    property: b.vendor.cssProperty
                                }
                            })) : this.setNewSlidePosition(
                            this.state.nextIndex)
                },
                getChangeSlideThreshold: function(a) {
                    return .25 * a
                },
                getNextIndexFromDeltaX: function() {
                    var a;
                    return a = this.state.deltaX, Math.abs(
                            a) < this.getChangeSlideThreshold(
                            this.state.slideWidth) ? this.state
                        .activeIndex : 0 > a ? this.state.activeIndex +
                        1 : a > 0 ? this.state.activeIndex -
                        1 : void 0
                },
                getDeltaXToNextSlide: function() {
                    switch (this.state.nextIndex - this.state
                        .activeIndex) {
                        case -1:
                            return this.state.slideWidth;
                        case 0:
                            return 0;
                        case 1:
                            return -this.state.slideWidth
                    }
                },
                handleTransitionEnd: function(a) {
                    return a.target.removeEventListener(
                        this.props.capabilities.cssTransition
                        .vendor.endEvent, this.handleTransitionEnd
                    ), this.setNewSlidePosition(this.state
                        .nextIndex)
                },
                setNewSlidePosition: function(a) {
                    var b;
                    return b = this.dividendDependentModulo(
                            a, this.props.children.length),
                        this.setState({
                            activeIndex: b,
                            nextIndex: null,
                            deltaX: 0,
                            transition: {
                                duration: "0s",
                                property: "none"
                            }
                        }), this.trackInteraction(
                            "slider-update-" + (b + 1))
                },
                getChildIndices: function() {
                    var a, b, c, d;
                    return d = this.props.children.length,
                        a = this.state.activeIndex - 1, b =
                        a + d - 1, i.map(function() {
                            c = [];
                            for (var d = a; b >= a ? b >=
                                d : d >= b; b >= a ? d++
                                : d--) c.push(d);
                            return c
                        }.apply(this), function(a) {
                            return this.dividendDependentModulo(
                                a, d)
                        }, this)
                },
                getListStyle: function() {
                    var a, b, c;
                    return a = {
                        transitionDuration: this.state.transition
                            .duration,
                        transitionProperty: this.state.transition
                            .property
                    }, c = i.get(this.props,
                        "capabilities.cssTransform.vendor.jsProperty"
                    ), c && i.assign(a, (b = {}, b["" +
                            c] = "translate3d(" +
                        this.state.deltaX +
                        "px, 0px, 0px)", b)), a
                },
                handleClickToggle: function(a) {
                    var b;
                    return b = function() {
                            switch (a) {
                                case "left":
                                    return this.state.activeIndex -
                                        1;
                                case "right":
                                    return this.state.activeIndex +
                                        1
                            }
                        }.call(this),
                        function() {
                            return this.setState(function() {
                                return {
                                    nextIndex: b
                                }
                            }, this.animateToNextSlide)
                        }.bind(this)
                },
                handleFocusToggle: function(a) {
                    return function() {
                        return this.setState({
                            focusedToggle: a
                        })
                    }.bind(this)
                },
                handleBlurToggle: function() {
                    return this.setState({
                        focusedToggle: null
                    })
                },
                componentWillMount: function() {
                    return f.initializeTouchEvents(!0)
                },
                componentWillReceiveProps: function(a) {
                    var b;
                    return b = this.props.children.length !==
                        a.children.length || i.reduce(a.children,
                            function(a, b, c) {
                                return a || b.key !== this.props
                                    .children[c].key
                            }, !1, this), b ? this.setState(
                            function(a) {
                                return {
                                    childrenUpdateCount: a.childrenUpdateCount +
                                        1
                                }
                            }) : void 0
                },
                render: function() {
                    var a, b;
                    return b = this.getClasses(), a = i.map(
                        this.getChildIndices(),
                        function(a) {
                            return {
                                child: this.props.children[
                                    a],
                                index: a
                            }
                        }, this), f.createElement("div",
                        f.__spread({}, this.props, {
                            className: b.block,
                            role: "region"
                        }), f.createElement(g, {
                            component: "ul",
                            ref: "list",
                            className: b.list,
                            transitionName: "-transition-fade",
                            style: this.getListStyle()
                        }, i.map(a, function(c) {
                            var d;
                            return d = {
                                    key: this.state
                                        .childrenUpdateCount +
                                        "-" + c
                                        .index,
                                    className: b
                                        .listItem,
                                    children: c
                                        .child
                                }, c.index ===
                                this.state.activeIndex &&
                                (d["aria-live"] =
                                    "polite"),
                                a.length > 1 &&
                                this.props.enableDragging &&
                                i.assign(d, {
                                    onMouseDown: this
                                        .handleDragStart,
                                    onTouchStart: this
                                        .handleDragStart,
                                    onMouseMove: this
                                        .handleDrag,
                                    onTouchMove: this
                                        .handleDrag,
                                    onTouchEnd: this
                                        .handleDragEnd,
                                    onTouchCancel: this
                                        .handleDragEnd,
                                    onMouseUp: this
                                        .handleDragEnd,
                                    onMouseLeave: this
                                        .handleDragEnd
                                }), f.createElement(
                                    "li", f.__spread({},
                                        d))
                        }, this)), f.createElement(
                            "button", {
                                className: b.leftToggle,
                                onClick: this.handleClickToggle(
                                    "left"),
                                onFocus: this.handleFocusToggle(
                                    "left"),
                                onBlur: this.handleBlurToggle
                            }, f.createElement(d, {
                                title: "Previous slide",
                                id: this.BLOCK_CLASS +
                                    "__previous-slide",
                                cssModifier: b.leftArrow
                            })), f.createElement(
                            "button", {
                                className: b.rightToggle,
                                onClick: this.handleClickToggle(
                                    "right"),
                                onFocus: this.handleFocusToggle(
                                    "right"),
                                onBlur: this.handleBlurToggle
                            }, f.createElement(h, {
                                title: "Next slide",
                                id: this.BLOCK_CLASS +
                                    "__next-slide",
                                cssModifier: b.rightArrow
                            })), this.props.showDots ?
                        f.createElement("ul", {
                            className: b.dotsContainer,
                            "aria-hidden": !0
                        }, i.map(a, function(a, c) {
                            return f.createElement(
                                "li", {
                                    key: c,
                                    className: b
                                        .dot +
                                        " " +
                                        (c ===
                                            this
                                            .state
                                            .activeIndex ?
                                            "-active" :
                                            ""
                                        )
                                })
                        }, this)) : void 0)
                }
            })
    },
    588: function(a, b, c) {
        var d, e, f;
        f = [c(4), c(193)], d = f[0], e = f[1], a.exports = d.createClass({
            displayName: "QuantaIconsLeftArrowLarge",
            SVG: {
                "class": "c-icon--left-arrow-large",
                width: 20,
                height: 32
            },
            propTypes: {
                cssUtility: d.PropTypes.string,
                cssModifier: d.PropTypes.string
            },
            getDefaultProps: function() {
                return {
                    cssUtility: "u-icon",
                    cssModifier: ""
                }
            },
            render: function() {
                return d.createElement(e, d.__spread({},
                    this.props, {
                        SVG: this.SVG
                    }), d.createElement("path", {
                    d: "M16.1,32l3.9-3.9L7.9,16L20,3.9L16.1,0L0,16L16.1,32z M17.1,3.9L5, 16l12.1,12.1l-1.1,1.1L2.9,16L16.1,2.9L17.1,3.9z"
                }))
            }
        })
    },
    589: function(a, b, c) {
        var d, e, f;
        f = [c(4), c(193)], d = f[0], e = f[1], a.exports = d.createClass({
            displayName: "QuantaIconsRightArrowLarge",
            SVG: {
                "class": "c-icon--right-arrow-large",
                width: 20,
                height: 32
            },
            propTypes: {
                cssUtility: d.PropTypes.string,
                cssModifier: d.PropTypes.string
            },
            getDefaultProps: function() {
                return {
                    cssUtility: "u-icon",
                    cssModifier: ""
                }
            },
            render: function() {
                return d.createElement(e, d.__spread({},
                    this.props, {
                        SVG: this.SVG
                    }), d.createElement("path", {
                    d: "M3.9,0L0,3.9L12.1,16L0,28.1L3.9,32L20,16L3.9,0z M2.9,28.1L15, 16L2.9,3.9l1.1-1.1L17.1,16L3.9,29.1L2.9,28.1z"
                }))
            }
        })
    },
    642: function(a, b, c) {
        var d, e, f, g, h, i;
        i = [c(2), c(4), c(171), c(643), c(175)], h = i[0], g = i[1],
            e = i[2], d = i[3], f = i[4], a.exports = g.createClass({
                displayName: "PagesProductsFramesFrameDetailIndex",
                mixins: [f.context, f.dispatcher],
                statics: {
                    route: function() {
                        return {
                            path: [
                                "/eyeglasses/men/{frame_name}/{frame_color?}",
                                "/eyeglasses/women/{frame_name}/{frame_color?}",
                                "/sunglasses/men/{frame_name}/{frame_color?}",
                                "/sunglasses/women/{frame_name}/{frame_color?}",
                                "/monocle/{frame_name}/{frame_color?}"
                            ],
                            asyncPrefetch: ["/.*"],
                            handler: "FrameDetail"
                        }
                    }
                },
                DETAILS_PATH: "/pdp-details",
                CAROUSELS_PATH: "/pdp-carousels",
                PROMOS_PATH: "/pdp-promos",
                fetchContent: function() {
                    return {
                        module: [this.DETAILS_PATH, this.CAROUSELS_PATH,
                            this.PROMOS_PATH
                        ]
                    }
                },
                receiveStoreChanges: function() {
                    return ["capabilities", "frameProduct",
                        "session"
                    ]
                },
                manageChangeColor: function(a) {
                    return this.commandDispatcher(
                        "frameProduct",
                        "changeActiveColor", a)
                },
                manageChangeSelectedVariantType: function(a) {
                    return this.commandDispatcher(
                        "frameProduct",
                        "changeSelectedVariantType", a)
                },
                manageAddItem: function(a, b) {
                    return this.commandDispatcher("cart",
                        "addItem", a, b)
                },
                render: function() {
                    var a, b, c, f, i, j;
                    return a = this.getStore("capabilities"),
                        c = this.getStore("frameProduct"),
                        i = this.getStore("session"), j = {},
                        h.forEach(this.getContent(this.DETAILS_PATH,
                            "module"), function(a) {
                            return j[a.product_type] = {
                                bullet_points: a.bullet_points
                            }
                        }), b = this.getContent(this.CAROUSELS_PATH,
                            "module"), f = this.getContent(
                            this.PROMOS_PATH, "module"), g.createElement(
                            e, g.__spread({}, this.props),
                            c.__fetched ? g.createElement(d,
                                g.__spread({}, this.props,
                                    c, {
                                        capabilities: a,
                                        manageAddItem: this
                                            .manageAddItem,
                                        manageChangeColor: this
                                            .manageChangeColor,
                                        manageChangeSelectedVariantType: this
                                            .manageChangeSelectedVariantType,
                                        session: i,
                                        technicalDetails: j,
                                        carousels: b,
                                        promos: f
                                    })) : void 0)
                }
            })
    },
    643: function(a, b, c) {
        var d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v = []
            .indexOf || function(a) {
                for (var b = 0, c = this.length; c > b; b++)
                    if (b in this && this[b] === a) return b;
                return -1
            };
        u = [c(2), c(4), c(312), c(644), c(645), c(647), c(653), c(
                654), c(655), c(658), c(659), c(661), c(662), c(
                663), c(587), c(175)], t = u[0], o = u[1], e = u[2],
            g = u[3], i = u[4], d = u[5], k = u[6], h = u[7], l = u[
                8], n = u[9], q = u[10], f = u[11], m = u[12], s =
            u[13], r = u[14], j = u[15], p = o.addons.CSSTransitionGroup,
            a.exports = o.createClass({
                displayName: "OrganismsProductsFrames",
                BLOCK_CLASS: "c-product-frames",
                mixins: [j.classes, j.context, j.dispatcher],
                propTypes: {
                    colors: o.PropTypes.array,
                    technicalDetails: o.PropTypes.object,
                    carousels: o.PropTypes.array,
                    callouts: o.PropTypes.array
                },
                getDefaultProps: function() {
                    return {
                        colors: [],
                        technicalDetails: {},
                        carousels: [],
                        callouts: []
                    }
                },
                getInitialState: function() {
                    return {
                        activeImageIndex: 0
                    }
                },
                getStaticClasses: function() {
                    return {
                        block: this.BLOCK_CLASS +
                            " u-clearfix",
                        slider: this.BLOCK_CLASS +
                            "__slider",
                        sliderItem: this.BLOCK_CLASS +
                            "__slider-item",
                        sliderImage: this.BLOCK_CLASS +
                            "__slider-image",
                        attributes: this.BLOCK_CLASS +
                            "__attributes",
                        sliderDivider: this.BLOCK_CLASS +
                            "__slider-divider u-dn--720 u-hr",
                        attributesAddButtons: this.BLOCK_CLASS +
                            "__attributes-add-buttons u-clearfix",
                        detailsContainer: this.BLOCK_CLASS +
                            "__details-container u-clearfix",
                        editorial: this.BLOCK_CLASS +
                            "__editorial-content",
                        headturnContainer: this.BLOCK_CLASS +
                            "__headturn-container",
                        fitSummaryDetails: this.BLOCK_CLASS +
                            "__fit-summary-details",
                        literaryCalloutReplacement: this.BLOCK_CLASS +
                            "__literary-callout-replacement u-hr"
                    }
                },
                getActiveColor: function() {
                    return this.props.colors[this.props.activeColorIndex]
                },
                getBreadcrumbLinks: function(a) {
                    var b;
                    return b = t.dropRight(a.split("/")), t
                        .reduce(b, function(a, c, d) {
                            var e;
                            return e = {
                                    text: this.formatPathDashes(
                                        c)
                                }, d < b.length - 1 &&
                                (e.href = (1 > d ? "" :
                                        a[d - 1].href) +
                                    "/" + c), a.concat(
                                    e)
                        }, [], this)
                },
                formatPathDashes: function(a) {
                    return a.replace(/--/g, "â€‘").replace(
                        /-/g, " ")
                },
                renderDefaultSlides: function(a, b, c, d) {
                    var e, f, g;
                    return g = t.get(a, "variants." + this.props
                        .selectedVariantType +
                        ".image_set.clear_fill." + d, t
                        .get(a, "image_set.clear_fill." +
                            d)), g && (f = t.get(a,
                        "display_name", ""), e = t.startCase(
                        t.get(a, "color", "")), c.push(
                        o.createElement(m, {
                            key: d + "-" + this
                                .props.activeColorIndex,
                            imageSet: g,
                            altText: t.startCase(
                                    d) + " of " +
                                f + " in " + e
                        }))), c
                },
                renderCmsSlide: function(a) {
                    return o.createElement(f, {
                        ref: a.index - 1,
                        slide: a,
                        key: a.content_type + "-" +
                            a.index
                    })
                },
                getSlides: function() {
                    var a, b, c;
                    return a = this.getClasses(), b = this.getActiveColor(),
                        c = t.reduce(["front", "angle",
                            "side"
                        ], this.renderDefaultSlides.bind(
                            this, b, a), []), t.forEach(
                            this.getCmsSlideData(),
                            function(b) {
                                var d;
                                return d = this.renderCmsSlide(
                                    b, a), c.splice(b.index -
                                    1, 0, d)
                            }, this), c
                },
                getCmsSlideData: function() {
                    var a, b;
                    return this.props.carousels ? (b = this
                        .getActiveColor(), a = t.find(
                            this.props.carousels,
                            function(a) {
                                var c;
                                return c = b.id, v.call(
                                    a.product_ids,
                                    c) >= 0
                            }), a ? a.slides : []) : []
                },
                manageChangeActiveImageIndex: function(a) {
                    return this.setState({
                        activeImageIndex: a
                    })
                },
                componentDidUpdate: function(a, b) {
                    return b.activeImageIndex !== this.state
                        .activeImageIndex || a.activeColorIndex !==
                        this.props.activeColorIndex ? t.forEach(
                            this.getCmsSlideData(), this.handleVideoChild,
                            this) : void 0
                },
                handleVideoChild: function(a) {
                    var b, c;
                    return b = o.findDOMNode(this.refs[a.index -
                            1]), b && (c = b.querySelector(
                            "video")) ? this.state.activeImageIndex ===
                        a.index - 1 ? c.play() : c.paused ?
                        void 0 : c.pause() : void 0
                },
                getHeadturnColor: function() {
                    return t.find(this.props.colors,
                        function(a) {
                            return t.get(a,
                                "image_set.clear_fill.headturn.original"
                            )
                        })
                },
                getPromo: function() {
                    var a;
                    return a = this.getActiveColor(), t.find(
                        this.props.promos, function(b) {
                            var c;
                            return c = a.id, v.call(b.product_ids,
                                c) >= 0
                        })
                },
                render: function() {
                    var a, b, c, f, j, m, u;
                    return b = this.getClasses(), a = this.getActiveColor(),
                        m = this.BLOCK_CLASS +
                        "__image-slider", j = this.props.sizingDetailsOpen ||
                        !1, u = t.get(this.props.technicalDetails,
                            "[" + a.pdp_details_cms_identifier +
                            "].bullet_points", []), f = t.get(
                            this.props, "colors[" + this.props
                            .activeColorIndex +
                            "].recommendations", []), c =
                        this.getPromo(), o.createElement(
                            "div", {
                                className: b.block
                            }, o.createElement(e, {
                                links: this.getBreadcrumbLinks(
                                    a.path)
                            }), o.createElement(r, o.__spread({},
                                this.props, {
                                    id: m,
                                    "aria-label": "Product images",
                                    children: this.getSlides(),
                                    cssModifier: b.slider,
                                    initialActiveIndex: this
                                        .state.activeImageIndex,
                                    manageChangeActiveIndex: this
                                        .manageChangeActiveImageIndex,
                                    showDots: !0
                                })), o.createElement("hr", {
                                className: b.sliderDivider
                            }), o.createElement("section", {
                                className: b.attributesAddButtons
                            }, o.createElement(k, o.__spread({},
                                this.props, {
                                    cssModifier: b.attributes,
                                    swatchAriaControls: m
                                })), o.createElement(d,
                                o.__spread({}, this.props)
                            )), c && t.get(c, "content") ?
                            o.createElement(n, {
                                content: c.content
                            }) : void 0, o.createElement(
                                "section", {
                                    className: b.detailsContainer
                                }, o.createElement(p, {
                                    transitionName: "-transition-fade--fast"
                                }, j ? void 0 : o.createElement(
                                    g, o.__spread({},
                                        this.props, {
                                            cssModifier: b
                                                .editorial
                                        }))), o.createElement(
                                    h, o.__spread({}, this.props, {
                                        color: this.getHeadturnColor(),
                                        cssModifier: b.headturnContainer
                                    })), o.createElement(q, {
                                    cssModifier: b.fitSummaryDetails,
                                    isOpen: j,
                                    product: this.props
                                        .colors[this.props
                                            .activeColorIndex
                                        ]
                                })), u.length > 0 ? o.createElement(
                                s, {
                                    details: u
                                }) : void 0, this.getFeature(
                                "freeReturns") && this.getFeature(
                                "freeShipping") ? o.createElement(
                                i, {
                                    label: "Our Promise",
                                    headline: "Free shipping and free returns, always",
                                    copy: "We have a 30-day, no-questions-asked return policy for all our frames as well as a one-year, no-scratch guarantee for our lenses; weâ€™ll replace your scratched lenses for free within the first 12 months."
                                }) : o.createElement("hr", {
                                className: b.literaryCalloutReplacement
                            }), f.length > 0 ? o.createElement(
                                l, {
                                    products: f
                                }) : void 0)
                }
            })
    },
    644: function(a, b, c) {
        var d, e, f, g;
        g = [c(2), c(4), c(175)], f = g[0], e = g[1], d = g[2], a.exports =
            e.createClass({
                displayName: "AtomsProductsEditorialContent",
                BLOCK_CLASS: "c-product-editorial-content",
                mixins: [d.classes],
                propTypes: {
                    cssModifier: e.PropTypes.string
                },
                getDefaultProps: function() {
                    return {
                        cssModifier: ""
                    }
                },
                getStaticClasses: function() {
                    return {
                        block: [this.BLOCK_CLASS, this.props
                            .cssModifier
                        ],
                        heading: "u-type -capl u-ffs u-fwn",
                        description: "u-type -subh u-ffs"
                    }
                },
                render: function() {
                    var a, b;
                    return a = this.getClasses(), b = f.get(
                        this.props, "colors[" + this.props
                        .activeColorIndex +
                        "].description"), e.createElement(
                        "section", {
                            className: a.block
                        }, b ? [e.createElement("h2", {
                            key: "heading",
                            className: a.heading,
                            children: "About the frame"
                        }), e.createElement("p", {
                            key: "description",
                            className: a.description,
                            children: b
                        })] : void 0)
                }
            })
    },
    645: function(a, b, c) {
        var d, e, f, g;
        g = [c(4), c(646), c(175)], f = g[0], d = g[1], e = g[2], a
            .exports = f.createClass({
                displayName: "MoleculesLiteraryCallout",
                BLOCK_CLASS: "c-literary-callout",
                mixins: [e.classes],
                propTypes: {
                    label: f.PropTypes.string,
                    headline: f.PropTypes.string,
                    copy: f.PropTypes.string
                },
                getDefaultProps: function() {
                    return {
                        label: "",
                        headline: "",
                        copy: ""
                    }
                },
                getStaticClasses: function() {
                    return {
                        block: this.BLOCK_CLASS,
                        headline: this.BLOCK_CLASS +
                            "__headline u-type -subh u-ffs -margin",
                        copy: this.BLOCK_CLASS +
                            "__copy u-type -body u-ffss"
                    }
                },
                render: function() {
                    var a;
                    return a = this.getClasses(), f.createElement(
                        "div", {
                            className: a.block
                        }, f.createElement(d, {
                            copy: this.props.label
                        }), f.createElement("div", {
                            children: this.props.headline,
                            className: a.headline
                        }), f.createElement("div", {
                            children: this.props.copy,
                            className: a.copy
                        }))
                }
            })
    },
    646: function(a, b, c) {
        var d, e, f;
        f = [c(4), c(175)], e = f[0], d = f[1], a.exports = e.createClass({
            displayName: "AtomsLiteraryLabel",
            BLOCK_CLASS: "c-literary-label",
            mixins: [d.classes],
            propTypes: {
                copy: e.PropTypes.string
            },
            getDefaultProps: function() {
                return {
                    copy: ""
                }
            },
            getStaticClasses: function() {
                return {
                    block: this.BLOCK_CLASS,
                    label: this.BLOCK_CLASS +
                        "__label u-type -caph u-ffs u-ttu"
                }
            },
            render: function() {
                var a;
                return a = this.getClasses(), e.createElement(
                    "div", {
                        className: a.block
                    }, e.createElement("div", {
                        children: this.props.copy,
                        className: a.label
                    }))
            }
        })
    },
    647: function(a, b, c) {
        var d, e, f, g, h, i, j, k, l, m = [].indexOf || function(a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (b in this && this[b] === a) return b;
            return -1
        };
        l = [c(2), c(4), c(648), c(649), c(652), c(208), c(175)], k =
            l[0], i = l[1], f = l[2], h = l[3], g = l[4], d = l[5],
            e = l[6], j = {
                eyeglasses: ["rx", "prog_rx"],
                sunglasses: ["non_rx", "rx", "prog_rx"]
            }, a.exports = i.createClass({
                displayName: "MoleculesProductsAddButtons",
                BLOCK_CLASS: "c-products-add-buttons",
                mixins: [e.classes, e.context, e.conversion],
                propTypes: {
                    colors: i.PropTypes.array,
                    activeColorIndex: i.PropTypes.number,
                    manageAddItem: i.PropTypes.func,
                    session: i.PropTypes.object,
                    selectedVariantType: i.PropTypes.string,
                    htoLimit: i.PropTypes.number
                },
                getInitialState: function() {
                    return {
                        activePopover: null
                    }
                },
                getStaticClasses: function() {
                    return {
                        block: [this.BLOCK_CLASS,
                            "u-clearfix"
                        ],
                        purchaseContainer: this.BLOCK_CLASS +
                            "__container",
                        htoContainer: this.BLOCK_CLASS +
                            "__container",
                        purchaseButton: [this.BLOCK_CLASS +
                            "__purchase-button",
                            "u-button -button-large"
                        ],
                        htoButton: [this.BLOCK_CLASS +
                            "__hto-button",
                            "u-button -button-large u-type -sech u-ffs u-fwn"
                        ],
                        unavailable: "u-tal",
                        unavailableHeading: [this.BLOCK_CLASS +
                            "__unavailable-heading",
                            "u-type", "u-fwn"
                        ],
                        unavailableMessage: [this.BLOCK_CLASS +
                            "__unavailable-message",
                            "u-type"
                        ]
                    }
                },
                classesWillUpdate: function() {
                    return {
                        htoButton: {
                            "-button-disabled": this.isHtoButtonDisabled()
                        }
                    }
                },
                getActiveColor: function() {
                    return k.get(this.props.colors, "[" +
                        this.props.activeColorIndex +
                        "]", {})
                },
                isInCart: function(a) {
                    return k.get(this.getActiveColor(),
                        "variants." + a + ".in_cart")
                },
                isInStock: function(a) {
                    return k.reduce(this.getActiveColor().variants,
                        function(b, c, d) {
                            return b || m.call(a, d) >=
                                0 && c.in_stock && c.active
                        }, !1)
                },
                isHtoInStock: function() {
                    return this.isInStock(["hto"])
                },
                cantAddToHto: function() {
                    return this.isInCart("hto") || k.get(
                        this.props,
                        "session.cart.hto_limit_reached"
                    ) && "hto" !== this.state.activePopover
                },
                isHtoButtonDisabled: function() {
                    return this.cantAddToHto() || !this.isHtoInStock()
                },
                handleClickPurchaseCta: function() {
                    var a;
                    return "purchase" !== this.state.activePopover ?
                        this.openPopover("purchase") : k.isFunction(
                            this.props.manageAddItem) ? (a =
                            this.getActiveColor(), this.props
                            .manageAddItem({
                                product_id: a.id,
                                variant_id: k.get(a,
                                    "variants." +
                                    this.props.selectedVariantType +
                                    ".variant_id")
                            })) : void 0
                },
                handleClickHtoCta: function() {
                    var a, b, c, d;
                    return "hto" === (c = this.state.activePopover) ||
                        "htoOutOfStock" === c ? this.closePopover() :
                        k.isFunction(this.props.manageAddItem) &&
                        !this.isHtoButtonDisabled() ? (a =
                            this.getActiveColor(), b = k.get(
                                this.props,
                                "session.cart.hto_quantity"
                            ), d = b === this.props.htoLimit -
                            1 ? "/cart" : !1, this.props.manageAddItem({
                                product_id: a.id,
                                variant_id: k.get(a,
                                    "variants.hto.variant_id"
                                )
                            }, d), this.openPopover("hto")) :
                        this.isHtoInStock() ? void 0 : this
                        .openPopover("htoOutOfStock")
                },
                openPopover: function(a) {
                    return this.state.activePopover ? void 0 :
                        this.setState({
                            activePopover: a
                        })
                },
                closePopover: function() {
                    return this.state.activePopover ? this.setState({
                        activePopover: null
                    }) : void 0
                },
                getActiveVariantTypes: function() {
                    return k.get(j, this.getActiveColor().assembly_type)
                },
                getPurchaseCtaText: function() {
                    var a, b;
                    return "purchase" === this.state.activePopover ?
                        "Add to cart" : (b = k.pick(this.getActiveColor()
                                .variants, this.getActiveVariantTypes()
                            ), a = k.reduce(b, function(a,
                                b) {
                                return b.price_cents <
                                    a || !a ? b.price_cents :
                                    a
                            }, null), "Buy from $" +
                            parseInt(this.convert("cents",
                                "dollars", a)))
                },
                getPurchaseCtaAnalyticsSlug: function() {
                    return "purchase" === this.state.activePopover ?
                        "addButtons-click-variant" + k.capitalize(
                            k.camelCase(this.props.selectedVariantType)
                        ) : "addButtons-click-buyNow"
                },
                getHtoCtaAnalyticsSlug: function() {
                    return this.cantAddToHto() ?
                        "addButtons-click-htoInCart" : this
                        .isHtoInStock() ?
                        "addButtons-click-hto" :
                        "addButtons-click-htoOutOfStock"
                },
                getHtoCtaText: function() {
                    return k.get(this.props,
                            "session.cart.hto_limit_reached"
                        ) ? "Your Home Try-On is full" :
                        "hto" === this.state.activePopover ||
                        this.isInCart("hto") ?
                        "Added to Home Try-On" :
                        "Try at home for free"
                },
                render: function() {
                    var a, b;
                    return a = this.getClasses(), i.createElement(
                        "div", {
                            className: a.block
                        }, i.createElement("div", {
                            className: a.purchaseContainer
                        }, this.isInStock(this.getActiveVariantTypes()) ? [
                            "purchase" === this.state
                            .activePopover ? i.createElement(
                                f, {
                                    key: "popover-purchase",
                                    handleClose: this
                                        .closePopover
                                }, i.createElement(
                                    h, i.__spread({},
                                        this.props)
                                )) : void 0, i.createElement(
                                d, {
                                    analyticsSlug: this
                                        .getPurchaseCtaAnalyticsSlug(),
                                    key: "cta-purchase",
                                    type: "button",
                                    tagName: "button",
                                    children: this.getPurchaseCtaText(),
                                    onClick: this.handleClickPurchaseCta,
                                    cssModifier: a.purchaseButton,
                                    variation: "primary"
                                })
                        ] : i.createElement("div", {
                            className: a.unavailable
                        }, i.createElement("h2", {
                            className: a.unavailableHeading,
                            children: "Sold out"
                        }), i.createElement("p", {
                                className: a.unavailableMessage
                            },
                            "These frames were popular! Unfortunately, weâ€™ve sold out."
                        ))), this.getFeature(
                            "homeTryOn") ? i.createElement(
                            "div", {
                                className: a.htoContainer
                            }, this.cantAddToHto() || k
                            .get(this.getActiveColor(),
                                "variants.hto") ? [
                                "hto" === (b = this.state
                                    .activePopover) ||
                                "htoOutOfStock" === b ?
                                i.createElement(f, {
                                    key: "popover-hto",
                                    handleClose: this
                                        .closePopover
                                }, i.createElement(
                                    g, i.__spread({},
                                        this.props, {
                                            isInStock: this
                                                .isHtoInStock()
                                        }))) : void 0,
                                i.createElement(d, {
                                    analyticsSlug: this
                                        .getHtoCtaAnalyticsSlug(),
                                    onClick: this.handleClickHtoCta,
                                    key: "cta-hto",
                                    type: "button",
                                    tagName: "button",
                                    children: this.getHtoCtaText(),
                                    cssUtility: a.htoButton
                                })
                            ] : i.createElement("div", {
                                className: a.unavailable
                            }, i.createElement("h2", {
                                className: a.unavailableHeading,
                                children: "Home try-on"
                            }), i.createElement("p", {
                                    className: a.unavailableMessage
                                },
                                "Weâ€™re sorry, but these frames are not available to try on\n  at home."
                            ))) : void 0)
                }
            })
    },
    648: function(a, b, c) {
        var d, e, f, g, h;
        h = [c(2), c(4), c(194), c(175)], g = h[0], e = h[1], f = h[
            2], d = h[3], a.exports = e.createClass({
            displayName: "MoleculesPopoverContainer",
            BLOCK_CLASS: "c-popover-container",
            mixins: [d.classes],
            propTypes: {
                cssModifier: e.PropTypes.string,
                handleClose: e.PropTypes.func
            },
            getDefaultProps: function() {
                return {
                    handleClose: function() {}
                }
            },
            getInitialState: function() {
                return {
                    isCloseButtonFocused: !1
                }
            },
            getStaticClasses: function() {
                return {
                    block: [this.BLOCK_CLASS, this.props
                        .cssModifier
                    ],
                    closeButton: [this.BLOCK_CLASS +
                        "__close-button",
                        "u-button-reset"
                    ],
                    xIcon: "-size-fill"
                }
            },
            classesWillUpdate: function() {
                return {
                    xIcon: {
                        "-icon-blue": this.state.isCloseButtonFocused
                    }
                }
            },
            componentDidMount: function() {
                return document.addEventListener(
                    "click", this.handleClickDocument
                )
            },
            componentWillUnmount: function() {
                return document.removeEventListener(
                    "click", this.handleClickDocument
                )
            },
            handleClickDocument: function(a) {
                var b;
                return g.isFunction(this.props.handleClose) ?
                    (b = e.findDOMNode(this.refs.container),
                        b && !b.contains(a.target) ?
                        this.props.handleClose() : void 0
                    ) : void 0
            },
            handleFocusButton: function() {
                return this.setState({
                    isCloseButtonFocused: !0
                })
            },
            handleBlurButton: function() {
                return this.setState({
                    isCloseButtonFocused: !1
                })
            },
            render: function() {
                var a;
                return a = this.getClasses(), e.createElement(
                    "div", {
                        className: a.block,
                        role: "dialog",
                        ref: "container"
                    }, e.createElement("button", {
                        name: "close-button",
                        className: a.closeButton,
                        "aria-label": "Close",
                        onClick: this.props.handleClose,
                        onFocus: this.handleFocusButton,
                        onBlur: this.handleBlurButton
                    }, e.createElement(f, {
                        cssModifier: a.xIcon
                    })), this.props.children)
            }
        })
    },
    649: function(a, b, c) {
        var d, e, f, g, h, i, j, k, l;
        l = [c(2), c(4), c(650), c(249), c(651), c(175)], k = l[0],
            h = l[1], g = l[2], d = l[3], e = l[4], f = l[5], j = {
                eyeglasses: {
                    all: ["rx", "prog_rx"],
                    "default": "rx"
                },
                sunglasses: {
                    all: ["non_rx", "rx", "prog_rx"],
                    "default": "non_rx"
                }
            }, i = {
                eyeglasses: {
                    rx: {
                        title: "Single-vision",
                        description: "Just for distance or just for reading"
                    },
                    prog_rx: {
                        title: "Progressive",
                        description: "For reading, distance, and in between"
                    }
                },
                clipons: {
                    rx: {
                        title: "Single-vision with clip-on",
                        description: "For either distance, reading or non-prescription"
                    },
                    prog_rx: {
                        title: "Progressive with clip-on",
                        description: "For reading, distance and in between"
                    }
                },
                sunglasses: {
                    non_rx: {
                        title: "Sunglasses",
                        description: "Sunwear without any sort of vision correction"
                    },
                    rx: {
                        title: "Single-vision prescription",
                        description: "Just for distance or just for reading"
                    },
                    prog_rx: {
                        title: "Progressive prescription",
                        description: "For reading, distance and in between"
                    }
                }
            }, a.exports = h.createClass({
                displayName: "MoleculesProductsPopoversPurchase",
                BLOCK_CLASS: "c-product-popover-purchase",
                mixins: [f.analytics, f.classes, f.context, f.conversion],
                propTypes: {
                    selectedVariantType: h.PropTypes.string
                },
                getInitialState: function() {
                    return {
                        descriptionsExpanded: !1,
                        descriptionsToggleFocused: !1,
                        selectedVariantType: this.props.selectedVariantType ||
                            k.get(j, this.getActiveColor().assembly_type +
                                ".default", j.eyeglasses[
                                    "default"])
                    }
                },
                getStaticClasses: function() {
                    return {
                        block: this.BLOCK_CLASS,
                        displayName: [
                            "u-type -subh u-ffs u-fws",
                            "u-tal"
                        ],
                        colorName: [this.BLOCK_CLASS +
                            "__color-name",
                            "u-type -body u-fsi u-ffs",
                            "u-tal"
                        ],
                        fieldset: [this.BLOCK_CLASS +
                            "__fieldset",
                            "u-fieldset-reset"
                        ],
                        optionsLegend: [this.BLOCK_CLASS +
                            "__options-legend",
                            "u-type -capl"
                        ],
                        optionsLegendContent: this.BLOCK_CLASS +
                            "__options-legend-content",
                        optionDescriptionsToggle: [this.BLOCK_CLASS +
                            "__option-descriptions-toggle",
                            "u-button-reset"
                        ],
                        iIcon: this.BLOCK_CLASS +
                            "__i-icon",
                        variantList: this.BLOCK_CLASS +
                            "__variant-list",
                        variantMainRow: [this.BLOCK_CLASS +
                            "__variant-main-row",
                            "grid"
                        ],
                        variantLabel: this.BLOCK_CLASS +
                            "__variant-label",
                        variantHiddenInput: "u-hide--visual",
                        variantStyledInput: [this.BLOCK_CLASS +
                            "__variant-styled-input",
                            "grid__cell unit-1-12"
                        ],
                        variantTitle: [this.BLOCK_CLASS +
                            "__variant-title",
                            "grid__cell unit-9-12",
                            "u-type -body"
                        ],
                        variantPrice: [this.BLOCK_CLASS +
                            "__variant-price",
                            "grid__cell unit-2-12",
                            "u-type u-fws -body"
                        ],
                        variantDescriptionRow: [this.BLOCK_CLASS +
                            "__variant-description-row",
                            "grid"
                        ],
                        variantDescription: [this.BLOCK_CLASS +
                            "__variant-description",
                            "grid__cell grid__cell--right unit-11-12",
                            "u-color--dark-gray-alt-2"
                        ],
                        notice: [this.BLOCK_CLASS +
                            "__notice", "u-type -capl"
                        ]
                    }
                },
                classesWillUpdate: function() {
                    return {
                        iIcon: {
                            "-icon-blue": this.state.descriptionsExpanded ||
                                this.state.descriptionsToggleFocused
                        },
                        variantMainRow: {
                            "-description-visible": this.state
                                .descriptionsExpanded
                        },
                        variantDescriptionRow: {
                            "-description-visible": this.state
                                .descriptionsExpanded
                        }
                    }
                },
                getActiveColor: function() {
                    return this.props.colors[this.props.activeColorIndex] || {}
                },
                getActiveVariants: function() {
                    var a;
                    return a = this.getActiveColor(), k.pick(
                        a.variants, k.get(j, a.assembly_type +
                            ".all", []))
                },
                componentDidMount: function() {
                    return h.findDOMNode(this.refs[
                        "first-input"]).focus()
                },
                handleClickOptionDescriptionsToggle: function() {
                    return this.setState({
                        descriptionsExpanded: !this
                            .state.descriptionsExpanded
                    })
                },
                handleFocusOptionDescriptionsToggle: function() {
                    return this.setState({
                        descriptionsToggleFocused:
                            !0
                    })
                },
                handleBlurOptionDescriptionsToggle: function() {
                    return this.setState({
                        descriptionsToggleFocused:
                            !1
                    })
                },
                handleChangeOption: function(a) {
                    var b;
                    return b = a.target.value, this.setState({
                        selectedVariantType: b
                    }), this.trackInteraction(this.getActiveColor()
                        .analytics_category +
                        "-click-variantOption" + k.capitalize(
                            k.camelCase(b)), a), k.isFunction(
                        this.props.manageChangeSelectedVariantType
                    ) ? k.defer(function() {
                        return this.props.manageChangeSelectedVariantType(
                            b)
                    }.bind(this)) : void 0
                },
                getVariantCopy: function(a) {
                    var b, c;
                    return b = this.getActiveColor(), c = b
                        .clip_on ? "clipons" : b.assembly_type,
                        k.get(i, c + "." + a, {})
                },
                renderVariant: function(a, b) {
                    var c, d, e, f;
                    return c = this.getClasses(), e = {
                            type: "radio",
                            name: "variant",
                            value: b,
                            className: c.variantHiddenInput,
                            onChange: this.handleChangeOption,
                            disabled: !a.in_stock
                        }, b === this.state.selectedVariantType &&
                        k.assign(e, {
                            defaultChecked: !0,
                            ref: "first-input"
                        }), d = this.getVariantCopy(b), f =
                        parseInt(this.convert("cents",
                            "dollars", a.price_cents)), h.createElement(
                            "label", {
                                className: c.variantLabel,
                                key: b
                            }, h.createElement("span", {
                                className: c.variantMainRow
                            }, h.createElement("input",
                                h.__spread({}, e)), h.createElement(
                                "span", {
                                    className: c.variantStyledInput
                                }), h.createElement(
                                "span", {
                                    className: c.variantTitle,
                                    children: d.title
                                }), h.createElement(
                                "span", {
                                    className: c.variantPrice,
                                    children: "$" + f
                                })), h.createElement("span", {
                                className: c.variantDescriptionRow
                            }, h.createElement("span", {
                                className: c.variantDescription,
                                children: d.description
                            })))
                },
                getNoticeCopy: function() {
                    return this.getFeature("freeShipping") &&
                        this.getFeature("freeReturns") ?
                        "Free shipping and returns" : this.getFeature(
                            "taxesAndDuties") ?
                        "Includes all duties and taxes, as applicable" :
                        ""
                },
                formatDisplayName: function(a) {
                    return a.replace("-", "â€‘")
                },
                render: function() {
                    var a, b;
                    return b = this.getClasses(), a = this.getActiveColor(),
                        h.createElement("div", {
                            className: b.block
                        }, h.createElement("h2", {
                            className: b.displayName,
                            children: this.formatDisplayName(
                                a.display_name)
                        }), h.createElement("p", {
                            className: b.colorName,
                            children: a.color
                        }), h.createElement("fieldset", {
                            className: b.fieldset
                        }, h.createElement("div", {
                            className: b.optionsLegend
                        }, h.createElement(
                            "legend", {
                                className: b.optionsLegendContent
                            }, "Options", h.createElement(
                                "button", {
                                    "aria-label": "Toggle option descriptions",
                                    onClick: this
                                        .handleClickOptionDescriptionsToggle,
                                    onBlur: this
                                        .handleBlurOptionDescriptionsToggle,
                                    onFocus: this
                                        .handleFocusOptionDescriptionsToggle,
                                    className: b
                                        .optionDescriptionsToggle
                                }, h.createElement(
                                    d, {
                                        cssModifier: b
                                            .iIcon,
                                        fillBackground: this
                                            .state
                                            .descriptionsExpanded
                                    })))), h.createElement(
                            "div", {
                                className: b.variantList,
                                children: k.map(
                                    this.getActiveVariants(),
                                    this.renderVariant
                                )
                            })), h.createElement("p", {
                            className: b.notice,
                            children: this.getNoticeCopy()
                        }))
                }
            })
    },
    650: function(a, b, c) {
        var d, e, f, g;
        g = [c(2), c(4), c(175)], f = g[0], e = g[1], d = g[2], a.exports =
            e.createClass({
                displayName: "AtomsFormsRadio",
                BLOCK_CLASS: "c-input--radio",
                mixins: [d.dispatcher],
                propTypes: {
                    checked: e.PropTypes.bool,
                    disabled: e.PropTypes.bool,
                    readOnly: e.PropTypes.bool
                },
                getDefaultProps: function() {
                    return {
                        checked: !1,
                        disabled: !1,
                        readOnly: !1
                    }
                },
                handleChange: function(a) {
                    return this.commandDispatcher(
                            "analytics", "pushFormEvent", a
                        ), f.isFunction(this.props.onChange) ?
                        this.props.onChange(a) : void 0
                },
                render: function() {
                    return e.createElement("input", e.__spread({},
                        this.props, {
                            onChange: this.handleChange,
                            type: "radio",
                            className: this.BLOCK_CLASS
                        }))
                }
            })
    },
    651: function(a, b, c) {
        var d, e, f;
        f = c(2), d = c(4), e = c(193), a.exports = d.createClass({
            displayName: "QuantaIconsInfo",
            SVG: {
                "class": "c-icon--info",
                width: 16,
                height: 16
            },
            propTypes: {
                cssUtility: d.PropTypes.string,
                cssModifier: d.PropTypes.string
            },
            getDefaultProps: function() {
                return {
                    cssUtility: "",
                    cssModifier: ""
                }
            },
            render: function() {
                return d.createElement(e, d.__spread({},
                    this.props, {
                        SVG: this.SVG,
                        title: "Info"
                    }), d.createElement("path", {
                    d: "M16 8c0-4.418-3.582-8-8-8S0 3.582 0 8s3.582 8 8 8 8-3.582 8-8zM1 8c0-3.866 3.134-7 7-7s7 3.134 7 7-3.134 7-7 7-7-3.134-7-7z"
                }), d.createElement("path", {
                    d: "M8.182 3.09c-1.89 0-2.52 1.162-2.52 1.722 0 .574.476.714.784.714.196 0 .504-.07.504-.504.014-.812.42-1.414 1.092-1.414.686 0 1.036.49 1.036 1.19 0 .532-.378 1.148-1.008 1.778-.7.7-1.106 1.302-1.106 1.862 0 .644.406 1.19 1.26 1.19.308 0 .672-.112.91-.308v-.322c-.07.014-.14.014-.224.014-.28 0-.672-.21-.672-.63 0-.392.308-.756.784-1.148.966-.77 1.358-1.302 1.358-2.156 0-1.134-.7-1.988-2.198-1.988zm-.224 9.464c.532 0 .854-.35.854-.826 0-.504-.322-.868-.84-.868-.49 0-.826.364-.826.868 0 .476.336.826.812.826z"
                }))
            }
        })
    },
    652: function(a, b, c) {
        var d, e, f, g;
        g = [c(2), c(4), c(175)], f = g[0], e = g[1], d = g[2], a.exports =
            e.createClass({
                displayName: "MoleculesProductsPopoversHto",
                BLOCK_CLASS: "c-product-popover-hto",
                mixins: [d.analytics, d.classes],
                getStaticClasses: function() {
                    return {
                        block: this.BLOCK_CLASS,
                        heading: [this.BLOCK_CLASS +
                            "__heading",
                            "u-type -subh -margin u-ffs u-fws"
                        ],
                        hr: [this.BLOCK_CLASS + "__hr",
                            "u-hr",
                            "u-color--light-gray-alt-2"
                        ],
                        message: "u-type -body -margin",
                        frameColor: this.BLOCK_CLASS +
                            "__frame-color",
                        link: "u-type -body"
                    }
                },
                render: function() {
                    var a, b, c, d, g, h;
                    return c = this.getClasses(), a = this.props
                        .colors[this.props.activeColorIndex],
                        b = a.assembly_type, d = function() {
                            switch (b) {
                                case "eyeglasses":
                                    return "optical";
                                case "sunglasses":
                                    return "sunwear"
                            }
                        }(), g = function() {
                            switch (a.gender) {
                                case "f":
                                    return "women";
                                case "m":
                                    return "men"
                            }
                        }(), h = b && g ? "/" + b + "/" + g +
                        "?availability=hto" : "/", e.createElement(
                            "div", {
                                className: c.block
                            }, this.props.isInStock ? [e.createElement(
                                "h2", {
                                    className: c.heading,
                                    children: "Success, " +
                                        f.get(this.props,
                                            "session.cart.hto_quantity",
                                            0) +
                                        " of 5 added!"
                                }), e.createElement(
                                "hr", {
                                    className: c.hr
                                }), e.createElement("p", {
                                className: c.message,
                                children: a.display_name +
                                    " in " + f.startCase(
                                        a.color) +
                                    " is in your Home Try-On."
                            }), e.createElement("a", {
                                href: h,
                                className: c.link,
                                children: "Find another " +
                                    d + " frame",
                                onClick: this.trackInteraction
                                    .bind(this, a.analytics_category +
                                        "-click-htoFindAnother"
                                    )
                            }), e.createElement("br",
                                null), e.createElement(
                                "a", {
                                    href: "/cart",
                                    className: c.link,
                                    children: "View cart",
                                    onClick: this.trackInteraction
                                        .bind(this, a.analytics_category +
                                            "-click-htoViewCart"
                                        )
                                })] : [e.createElement("p", {
                                className: c.message,
                                children: "Due to popular demand, these frames are temporarily out of stock. (Youâ€™ve got a good eye.)"
                            }), e.createElement("p", {
                                className: c.message,
                                children: "Try another color or check in later!"
                            })])
                }
            })
    },
    653: function(a, b, c) {
        var d, e, f, g, h;
        h = [c(2), c(4), c(535), c(175)], g = h[0], f = h[1], d = h[
            2], e = h[3], a.exports = f.createClass({
            displayName: "MoleculesProductsAttributes",
            BLOCK_CLASS: "c-product-attributes",
            mixins: [e.classes],
            propTypes: {
                activeColor: f.PropTypes.object,
                colors: f.PropTypes.array
            },
            getStaticClasses: function() {
                return {
                    block: this.BLOCK_CLASS,
                    nameColorContainer: this.BLOCK_CLASS +
                        "__name-color-container",
                    displayName: [this.BLOCK_CLASS +
                        "__display-name",
                        "u-type u-ffs u-fws"
                    ],
                    color: [this.BLOCK_CLASS +
                        "__color",
                        "u-type -body u-fsi u-ffs"
                    ],
                    swatches: this.BLOCK_CLASS +
                        "__swatches"
                }
            },
            formatDisplayName: function(a) {
                return a.replace("-", "â€‘")
            },
            render: function() {
                var a, b;
                return b = this.getClasses(), a = this.props
                    .colors[this.props.activeColorIndex],
                    f.createElement("span", {
                        className: b.block
                    }, f.createElement("h1", {
                        children: this.formatDisplayName(
                            a.display_name),
                        className: b.displayName
                    }), f.createElement("div", {
                        className: b.nameColorContainer
                    }, f.createElement("p", {
                        children: a.color,
                        className: b.color
                    }), f.createElement(d, {
                        cssModifier: b.swatches,
                        activeFrameAssemblyIndex: this
                            .props.activeColorIndex,
                        frameAssemblies: this
                            .props.colors,
                        handleColorChange: this
                            .props.manageChangeColor
                    })))
            }
        })
    },
    654: function(a, b, c) {
        var d, e, f, g, h;
        h = [c(2), c(4), c(560), c(175)], g = h[0], f = h[1], d = h[
            2], e = h[3], a.exports = f.createClass({
            displayName: "MoleculesProductsHeadturnContainer",
            BLOCK_CLASS: "c-product-headturn-container",
            mixins: [e.classes],
            propTypes: {
                cssModifier: f.PropTypes.string,
                color: f.PropTypes.object
            },
            getDefaultProps: function() {
                return {
                    cssModifier: ""
                }
            },
            getInitialState: function() {
                return {
                    offsetLeft: 0,
                    offsetWidth: 0
                }
            },
            getStaticClasses: function() {
                return {
                    block: [this.BLOCK_CLASS, this.props
                        .cssModifier, this.props.color ?
                        void 0 : "-empty"
                    ],
                    innerContainer: this.BLOCK_CLASS +
                        "__inner-container",
                    imageContainer: this.BLOCK_CLASS +
                        "__image-container",
                    description: [this.BLOCK_CLASS +
                        "__description",
                        "u-type -capb u-ffs"
                    ],
                    color: "u-type u-fsi u-ttc"
                }
            },
            componentDidMount: function() {
                return this.setLayout(), window.addEventListener(
                    "resize", this.setLayout)
            },
            componentWillUnmount: function() {
                return window.removeEventListener(
                    "resize", this.setLayout)
            },
            setLayout: function() {
                var a;
                return a = f.findDOMNode(this.refs.container),
                    a ? this.setState({
                        offsetLeft: a.getBoundingClientRect()
                            .left,
                        offsetWidth: a.offsetWidth
                    }) : void 0
            },
            render: function() {
                var a;
                return a = this.getClasses(), this.props
                    .color ? f.createElement("section", {
                        className: a.block
                    }, f.createElement("div", {
                        className: a.innerContainer,
                        ref: "container"
                    }, f.createElement("div", {
                        className: a.imageContainer
                    }, f.createElement(d, {
                        analyticsSlug: this
                            .props.color
                            .analytics_category +
                            "-hover-headturn",
                        src: g.get(this
                            .props.color,
                            "image_set.clear_fill.headturn.original"
                        ),
                        alt: this.props
                            .color.display_name +
                            " in " + g.startCase(
                                this.props
                                .color.color
                            ),
                        offsetLeft: this
                            .state.offsetLeft,
                        offsetWidth: this
                            .state.offsetWidth,
                        cssModifier: a.image
                    })), f.createElement("p", {
                            className: a.description
                        }, this.props.color.display_name,
                        " in ", f.createElement(
                            "span", {
                                className: a.color,
                                children: this.props
                                    .color.color
                            })))) : f.createElement(
                        "section", {
                            className: a.block
                        })
            }
        })
    },
    655: function(a, b, c) {
        var d, e, f, g, h;
        h = [c(2), c(4), c(656), c(175)], g = h[0], f = h[1], d = h[
            2], e = h[3], a.exports = f.createClass({
            displayName: "MoleculesProductsProductCrossSells",
            BLOCK_CLASS: "c-product-cross-sells",
            mixins: [e.classes, e.dispatcher],
            propTypes: {
                products: f.PropTypes.array
            },
            getDefaultProps: function() {
                return {
                    products: []
                }
            },
            getStaticClasses: function() {
                return {
                    block: this.BLOCK_CLASS,
                    titleArea: this.BLOCK_CLASS +
                        "__title-area",
                    title: this.BLOCK_CLASS +
                        "__title u-type -sech u-fwn"
                }
            },
            getTrackingEvent: function(a) {
                return 0 === g.indexOf(this.props.products,
                        a) ? "window-scroll-crossSells" :
                    ""
            },
            componentWillMount: function() {
                return this.commandDispatcher(
                    "experiments", "bucket",
                    "recommender")
            },
            render: function() {
                var a, b;
                return a = this.getClasses(), f.createElement(
                    "div", {
                        className: a.block
                    }, f.createElement("div", {
                        className: a.titleArea
                    }, f.createElement("h3", {
                        children: "Recommended",
                        className: a.title
                    })), function() {
                        var a, c, e, g;
                        for (e = this.props.products,
                            g = [], a = 0, c = e.length; c >
                            a; a++) b = e[a], g.push(
                            f.createElement(d, {
                                analyticsCategory: b
                                    .analytics_category,
                                cssModifier: "-fluid-width -three-column",
                                key: "product-" +
                                    (b.product_id ||
                                        b.id
                                    ),
                                products: [
                                    b
                                ],
                                useTextColors:
                                    !0,
                                imageSeenTrackingEvent: this
                                    .getTrackingEvent(
                                        b)
                            }));
                        return g
                    }.call(this))
            }
        })
    },
    656: function(a, b, c) {
        var d, e, f, g, h, i, j;
        j = [c(2), c(4), c(287), c(535), c(657), c(175)], i = j[0],
            h = j[1], f = j[2], d = j[3], e = j[4], g = j[5], a.exports =
            h.createClass({
                displayName: "MoleculesProductsGalleryFrame",
                BLOCK_CLASS: "c-gallery-frame",
                mixins: [g.analytics, g.classes, g.dispatcher,
                    g.scrolling
                ],
                getInitialState: function() {
                    return {
                        activeIndex: this.getFirstVisibleProduct(
                            this.props.hiddenProducts)
                    }
                },
                getDefaultProps: function() {
                    return {
                        analyticsCategory: "gallery",
                        cssModifier: "",
                        products: [],
                        useTextColors: !1,
                        hidden: !1,
                        hiddenProducts: "",
                        productPosition: null,
                        imageSeenTrackingEvent: ""
                    }
                },
                shouldComponentUpdate: function(a, b) {
                    if (b.activeIndex !== this.state.activeIndex)
                        return !0;
                    if (this.props.hidden === a.hidden) {
                        if (this.props.hiddenProducts === a
                            .hiddenProducts) return !1;
                        if (a.hidden) return !1
                    }
                    return !0
                },
                getStaticClasses: function() {
                    return {
                        block: this.BLOCK_CLASS + " " +
                            this.props.cssModifier,
                        images_container: this.BLOCK_CLASS +
                            "__images-container",
                        image_link: this.BLOCK_CLASS +
                            "__image-link",
                        image: this.BLOCK_CLASS + "__image",
                        details: this.BLOCK_CLASS +
                            "__details",
                        name: this.BLOCK_CLASS + "__name",
                        colorName: this.BLOCK_CLASS +
                            "__color-name u-type -body u-ffs u-fsi u-ttc",
                        colorSwatches: this.BLOCK_CLASS +
                            "__color-swatches"
                    }
                },
                classesWillUpdate: function() {
                    return {
                        block: {
                            "-hidden": this.props.hidden
                        }
                    }
                },
                componentWillReceiveProps: function(a) {
                    return this.setState({
                        activeIndex: this.getFirstVisibleProduct(
                            a.hiddenProducts)
                    })
                },
                componentDidMount: function() {
                    return i.isEmpty(this.props.imageSeenTrackingEvent) ?
                        void 0 : this.addScrollListener(
                            this.trackIfImageSeen)
                },
                getFirstVisibleProduct: function(a) {
                    var b;
                    for (b = 0; - 1 !== a.indexOf(b);) b++;
                    return b
                },
                handleColorChange: function(a) {
                    return this.setState({
                        activeIndex: a
                    })
                },
                handleProductClick: function(a) {
                    return this.trackInteraction(this.props
                        .analyticsCategory +
                        "-clickProduct-" + (a.id || a.product_id)
                    ), this.commandDispatcher(
                        "analytics", "pushProductEvent", {
                            type: "productClick",
                            eventMetadata: {
                                list: this.props.analyticsCategory
                            },
                            products: a
                        })
                },
                trackIfImageSeen: function() {
                    return this.refIsInViewport(this.refs.details) &&
                        !this.state.imageSeen ? (this.trackInteraction(
                            this.props.imageSeenTrackingEvent
                        ), this.setState({
                            imageSeen: !0
                        })) : void 0
                },
                getProductImages: function(a) {
                    return i.map(this.props.products,
                        function(b) {
                            return function(c, d) {
                                var g, j, k, l;
                                return k = {
                                        key: c.product_id,
                                        href: "/" +
                                            c.path,
                                        onClick: b.handleProductClick
                                            .bind(b,
                                                c),
                                        className: [
                                            a.image_link,
                                            d ===
                                            b.state
                                            .activeIndex ?
                                            "-active" :
                                            void 0,
                                            0 ===
                                            d ?
                                            "-block" :
                                            void 0
                                        ].join(
                                            " "
                                        )
                                    }, c.images ? (
                                        j = {
                                            cssModifier: a
                                                .image,
                                            alt: c.display_name +
                                                " in " +
                                                c.color
                                        }, g = i.get(
                                            c,
                                            "images.clip.front"
                                        ), g ? (j.srcSet =
                                            g.join(
                                                ","
                                            ), j.src =
                                            i.first(
                                                g)) :
                                        null != c.image_url &&
                                        (j.src = c.image_url),
                                        l = h.createElement(
                                            f, h.__spread({},
                                                j))
                                    ) : c.image &&
                                    (j = {
                                        cssModifier: a
                                            .image,
                                        altText: c
                                            .display_name +
                                            " in " +
                                            c.color,
                                        image: c
                                            .image
                                    }, l = h.createElement(
                                        e, h.__spread({},
                                            j))), h
                                    .createElement(
                                        "a", h.__spread({},
                                            k, {
                                                children: l
                                            }))
                            }
                        }(this))
                },
                render: function() {
                    var a, b;
                    return a = this.getClasses(), b = this.getProductImages(
                        a), h.createElement("div", {
                        className: a.block
                    }, h.createElement("div", {
                        children: this.props.useTextColors ? [
                            i.first(b)
                        ] : b,
                        className: a.images_container
                    }), h.createElement("div", {
                            className: a.details,
                            ref: "details"
                        }, h.createElement("h3", {
                            className: a.name,
                            children: this.props
                                .products[0].display_name
                        }), this.props.useTextColors ?
                        h.createElement("span", {
                            className: a.colorName,
                            children: this.props
                                .products[0].color
                        }) : h.createElement(d, {
                            activeFrameAssemblyIndex: this
                                .state.activeIndex,
                            cssModifier: a.colorSwatches,
                            frameAssemblies: this
                                .props.products,
                            hiddenAssembiles: this
                                .props.hiddenProducts,
                            handleColorChange: this
                                .handleColorChange,
                            productPosition: this
                                .props.productPosition
                        })))
                }
            })
    },
    657: function(a, b, c) {
        var d, e, f, g, h;
        h = [c(2), c(4), c(287), c(175)], g = h[0], f = h[1], d = h[
            2], e = h[3], a.exports = f.createClass({
            displayName: "MoleculesProductsGalleryFrameImage",
            mixins: [e.image],
            getDefaultProps: function() {
                return {
                    image: "",
                    altText: "",
                    cssModifier: "",
                    sizes: [{
                        breakpoint: 0,
                        width: "100vw"
                    }, {
                        breakpoint: 300,
                        width: "320px"
                    }, {
                        breakpoint: 1024,
                        width: "340px"
                    }, {
                        breakpoint: 1440,
                        width: "400px"
                    }, {
                        breakpoint: 2e3,
                        width: "500px"
                    }]
                }
            },
            shouldComponentUpdate: function() {
                return !1
            },
            render: function() {
                var a;
                return a = {
                    url: this.props.image,
                    widths: [300, 320, 340, 400,
                        500, 600, 640, 680, 800,
                        1e3
                    ],
                    quality: 60
                }, f.createElement(d, {
                    srcSet: this.getSrcSet(a),
                    sizes: this.getImgSizes(
                        this.props.sizes),
                    cssModifier: this.props.cssModifier,
                    altText: this.props.altText
                })
            }
        })
    },
    658: function(a, b, c) {
        var d, e, f, g, h, i;
        i = [c(2), c(4), c(208), c(287), c(175)], h = i[0], g = i[1],
            d = i[2], e = i[3], f = i[4], a.exports = g.createClass({
                displayName: "MoleculesProductsPromo",
                BLOCK_CLASS: "c-product-promo",
                mixins: [f.classes, f.image],
                propTypes: {
                    content: g.PropTypes.shape({
                        image_url: g.PropTypes.string,
                        alt_text: g.PropTypes.string,
                        heading: g.PropTypes.string,
                        body: g.PropTypes.string,
                        cta_url: g.PropTypes.string,
                        cta_text: g.PropTypes.string
                    }),
                    cssModifier: g.PropTypes.string
                },
                getDefaultProps: function() {
                    return {
                        content: {},
                        cssModifier: ""
                    }
                },
                getStaticClasses: function() {
                    return {
                        block: this.BLOCK_CLASS + " " +
                            this.props.cssModifier,
                        content: this.BLOCK_CLASS +
                            "__content u-clearfix",
                        image: this.BLOCK_CLASS + "__image",
                        textContainer: this.BLOCK_CLASS +
                            "__text-container",
                        heading: "u-type -sech u-fws u-ffs",
                        body: "u-type -body -margin",
                        cta: "-cta-small u-type -body"
                    }
                },
                render: function() {
                    var a, b;
                    return a = this.getClasses(), b = this.props
                        .content, g.createElement("section", {
                            className: a.block
                        }, g.createElement("div", {
                            className: a.content
                        }, g.createElement(e, {
                            cssModifier: a.image,
                            srcSet: this.getSrcSet({
                                url: b.image_url,
                                widths: [
                                    300,
                                    450,
                                    600,
                                    750
                                ]
                            }),
                            alt: b.alt_text
                        }), g.createElement("div", {
                            className: a.textContainer
                        }, g.createElement("h3", {
                            className: a.heading,
                            children: b.heading
                        }), g.createElement("p", {
                            className: a.body,
                            children: b.body
                        }), g.createElement(d, {
                            tagName: "a",
                            variation: "simple",
                            cssUtility: a.cta,
                            href: b.cta_url,
                            children: b.cta_text,
                            analyticsSlug: "promo-click-cta"
                        }))))
                }
            })
    },
    659: function(a, b, c) {
        var d, e, f, g, h, i, j;
        j = [c(2), c(4), c(237), c(660), c(175)], i = j[0], f = j[1],
            d = j[2], h = j[3], e = j[4], g = f.addons.CSSTransitionGroup,
            a.exports = f.createClass({
                displayName: "MoleculesProductsSizingDetails",
                BLOCK_CLASS: "c-sizing-details",
                mixins: [e.analytics, e.classes, e.dispatcher],
                propTypes: {
                    cssModifier: f.PropTypes.string,
                    isOpen: f.PropTypes.bool,
                    product: f.PropTypes.object
                },
                getDefaultProps: function() {
                    return {
                        cssModifier: "",
                        isOpen: !1
                    }
                },
                getStaticClasses: function() {
                    return {
                        block: this.BLOCK_CLASS + " " +
                            this.props.cssModifier +
                            " u-clearfix",
                        content: this.BLOCK_CLASS +
                            "__content u-clearfix",
                        group: this.BLOCK_CLASS + "__group",
                        label: this.BLOCK_CLASS +
                            "__label u-type -capl u-fws",
                        value: this.BLOCK_CLASS +
                            "__value u-type -subh u-ffs",
                        description: this.BLOCK_CLASS +
                            "__description u-type -body",
                        descriptionToggle: this.BLOCK_CLASS +
                            "__description-toggle u-type",
                        descriptionTransition: this.BLOCK_CLASS +
                            "__description-transition",
                        toggleArrow: this.BLOCK_CLASS +
                            "__toggle-arrow",
                        diagram: this.BLOCK_CLASS +
                            "__diagram",
                        caption: this.BLOCK_CLASS +
                            "__caption"
                    }
                },
                classesWillUpdate: function() {
                    return {
                        block: {
                            "-open": this.props.isOpen
                        },
                        content: {
                            "-open": this.props.isOpen
                        },
                        toggleArrow: {
                            "-open": this.props.isOpen
                        }
                    }
                },
                renderMeasurementsDescription: function() {
                    var a;
                    return a = this.getClasses(), [f.createElement(
                        "p", {
                            children: "Measurements for Warby Parker glasses can be found printed on the inside of the temple arm. Most eyewear brands print these details in a similar spot; if you already have a pair that you like, you can compare measurements to see how a certain frame of ours will fit you."
                        }), f.createElement("p", {
                        children: "If your Warby Parker frames donâ€™t fit you perfectly, our skilled opticians can make an adjustment at select stores for free."
                    }), f.createElement(h, {
                        cssModifier: a.diagram
                    }), f.createElement("div", {
                        children: "Lâ€“R: Lens width, bridge width, and temple arm length (all in millimeters)",
                        className: a.caption
                    })]
                },
                renderMeasurementsValue: function() {
                    var a;
                    return a = i.get(this.props,
                        "product.measurements"), a ? i.map(
                        ["lens_width", "bridge_width",
                            "temple_length"
                        ], function(b) {
                            return a[b]
                        }).join("-") : "â€“"
                },
                renderWidthDescription: function() {
                    return f.createElement("p", {
                        children: "Our frames are categorized as narrow, medium, and wide to help you find your most comfortable pair. The overall width takes the lens and bridge widths (in millimeters) into account."
                    })
                },
                renderWidthValue: function() {
                    return i.get(this.props,
                        "product.width_group", "â€“")
                },
                handleDescriptionToggle: function(a) {
                    var b;
                    return a.preventDefault(), b = this.props
                        .isOpen ? "closing" : "opening",
                        this.trackInteraction(this.props.product
                            .analytics_category +
                            "-click-sizingDetailsToggle-" +
                            b, a), this.commandDispatcher(
                            "frameProduct",
                            "toggleSizingDetails")
                },
                render: function() {
                    var a;
                    return a = this.getClasses(), f.createElement(
                        "div", {
                            className: a.block
                        }, f.createElement("div", {
                                className: a.content
                            }, f.createElement("div", {
                                className: a.group
                            }, f.createElement(
                                "div", {
                                    children: "Width",
                                    className: a.label
                                }), f.createElement(
                                "div", {
                                    children: this.renderWidthValue(),
                                    className: a.value
                                }), f.createElement(
                                g, {
                                    transitionName: a
                                        .descriptionTransition
                                }, this.props.isOpen ?
                                f.createElement(
                                    "div", {
                                        children: this
                                            .renderWidthDescription(),
                                        className: a
                                            .description +
                                            " u-dn u-db--720",
                                        key: "width-description"
                                    }) : void 0)), f.createElement(
                                "div", {
                                    className: a.group
                                }, f.createElement(
                                    "div", {
                                        children: "Measurements",
                                        className: a.label
                                    }), f.createElement(
                                    "div", {
                                        children: this.renderMeasurementsValue(),
                                        className: a.value
                                    }), f.createElement(
                                    g, {
                                        transitionName: a
                                            .descriptionTransition
                                    }, this.props.isOpen ?
                                    f.createElement(
                                        "div", {
                                            children: this
                                                .renderMeasurementsDescription(),
                                            className: a
                                                .description +
                                                " u-dn u-db--720",
                                            key: "measurements-description"
                                        }) : void 0)),
                            f.createElement("div", {
                                className: a.descriptionToggle,
                                onClick: this.handleDescriptionToggle
                            }, [f.createElement(
                                "span", {
                                    key: "description-toggle",
                                    children: this
                                        .props.isOpen ?
                                        "Return to description" : "How do I figure out the size?"
                                }), f.createElement(
                                d, {
                                    cssModifier: a
                                        .toggleArrow,
                                    key: "toggle-arrow"
                                })]), f.createElement(g, {
                                transitionName: a.descriptionTransition
                            }, this.props.isOpen ? [
                                f.createElement(
                                    "div", {
                                        className: a
                                            .description +
                                            " u-dn--720",
                                        key: "width-description"
                                    }, f.createElement(
                                        "div", {
                                            children: "Width",
                                            className: a
                                                .label
                                        }), this.renderWidthDescription()
                                ), f.createElement(
                                    "div", {
                                        className: a
                                            .description +
                                            " u-dn--720",
                                        key: "measurements-description"
                                    }, f.createElement(
                                        "div", {
                                            children: "Measurements",
                                            className: a
                                                .label
                                        }), this.renderMeasurementsDescription()
                                )
                            ] : void 0)))
                }
            })
    },
    660: function(a, b, c) {
        var d, e, f, g;
        g = [c(4), c(193), c(175)], e = g[0], f = g[1], d = g[2], a
            .exports = e.createClass({
                displayName: "QuantaIconsTempleArm",
                BLOCK_CLASS: "c-temple-arm-icon",
                SVG: {
                    "class": "c-icon--temple-arm",
                    width: 336,
                    height: 73
                },
                mixins: [d.classes],
                propTypes: {
                    cssUtility: e.PropTypes.string,
                    cssModifier: e.PropTypes.string
                },
                getDefaultProps: function() {
                    return {
                        cssUtility: "u-icon",
                        cssModifier: ""
                    }
                },
                getStaticClasses: function() {
                    return {
                        outline: this.BLOCK_CLASS +
                            "__outline",
                        darkShape: this.BLOCK_CLASS +
                            "__shape -dark-background",
                        grayShape: this.BLOCK_CLASS +
                            "__shape -gray-background",
                        whiteShape: this.BLOCK_CLASS +
                            "__shape -white-background"
                    }
                },
                render: function() {
                    var a;
                    return a = this.getClasses(), e.createElement(
                        f, e.__spread({}, this.props, {
                            SVG: this.SVG
                        }), e.createElement("path", {
                            className: a.outline,
                            d: "M334.860352,0.033203125 L331.90918,19.2080078 C331.90918,19.2080078 216.862305,19.0244141 207.998047,19.0244141 C199.133789,19.0244141 192.146484,19.6103516 183.930664,18.5341797 C175.714844,17.4580078 153.908203,16.0703125 129.052734,14.9619141 C104.197266,13.8535156 97.8398437,12.3193359 88.4082031,15.4267578 C78.9765625,18.5341797 63.7548828,28.7695312 45.3154297,43.5820313 C26.8759766,58.3945313 15.1152344,69.1806641 13.0527344,70.90625 C10.9902344,72.6318359 9.45800781,71.6660156 7.73242187,69.7011719 C6.00683594,67.7363281 2.15527344,61.4863281 1.05859375,59.6835937 C-0.0380859375,57.8808594 -0.205078125,55.7304688 3.10742187,54.0263672 C6.41992187,52.3222656 65.0732445,12.5 79.7998047,8.65625 C94.5263649,4.8125 96.2041039,4.58691406 122.916992,3.43359375 C149.62988,2.28027344 183.41112,0.65234375 222.652344,0.65234375 C261.893568,0.65234375 334.860352,0.033203125 334.860352,0.033203125 Z"
                        }), e.createElement("rect", {
                            className: a.grayShape,
                            x: "211",
                            y: "7",
                            width: "24",
                            height: "6"
                        }), e.createElement("rect", {
                            className: a.grayShape,
                            x: "238",
                            y: "7",
                            width: "19",
                            height: "6"
                        }), e.createElement("rect", {
                            className: a.darkShape,
                            x: "260",
                            y: "7",
                            width: "9",
                            height: "6"
                        }), e.createElement("rect", {
                            className: a.darkShape,
                            x: "281",
                            y: "7",
                            width: "7",
                            height: "6"
                        }), e.createElement("rect", {
                            className: a.darkShape,
                            x: "294",
                            y: "7",
                            width: "11",
                            height: "6"
                        }), e.createElement("rect", {
                            className: a.grayShape,
                            x: "290",
                            y: "9",
                            width: "2",
                            height: "1"
                        }), e.createElement("rect", {
                            className: a.darkShape +
                                " -stroke",
                            x: "272",
                            y: "7",
                            width: "6",
                            height: "6"
                        }), e.createElement("path", {
                            className: a.grayShape,
                            d: "M13,65 C16.3137085,65 19,62.3137085 19,59 C19,55.6862915 16.3137085,53 13,53 C9.6862915,53 7,55.6862915 7,59 C7,62.3137085 9.6862915,65 13,65 Z"
                        }))
                }
            })
    },
    661: function(a, b, c) {
        var d, e, f, g, h;
        h = [c(2), c(4), c(287), c(175)], g = h[0], f = h[1], d = h[
            2], e = h[3], a.exports = f.createClass({
            displayName: "MoleculesProductsSlidesCmsContent",
            BLOCK_CLASS: "c-product-slide--cms",
            mixins: [e.analytics, e.classes, e.image],
            propTypes: {
                slide: f.PropTypes.object
            },
            getInitialState: function() {
                return {
                    videoProgress: "start"
                }
            },
            getStaticClasses: function() {
                return {
                    block: this.BLOCK_CLASS,
                    content: this.BLOCK_CLASS +
                        "__content"
                }
            },
            classesWillUpdate: function() {
                return {
                    content: {
                        "-video": "video" === g.get(
                            this.props,
                            "slide.type")
                    }
                }
            },
            componentDidMount: function() {
                var a;
                return a = f.findDOMNode(this.refs.video),
                    a ? a.addEventListener("timeupdate",
                        this.handleVideoTimeUpdate) :
                    void 0
            },
            componentWillUnmount: function() {
                var a;
                return a = f.findDOMNode(this.refs.video),
                    a ? a.removeEventListener(
                        "timeupdate", this.handleVideoTimeUpdate
                    ) : void 0
            },
            handleVideoTimeUpdate: function(a) {
                var b;
                return b = a.target, b.currentTime < 1 ?
                    this.setState({
                        videoProgress: "start"
                    }) : b.currentTime > 20 && "start" ===
                    this.state.videoProgress ? (this.trackInteraction(
                        "carouselVideo-progress-20sec"
                    ), this.setState({
                        videoProgress: "20sec"
                    })) : b.duration - b.currentTime <
                    1 && "20sec" === this.state.videoProgress ?
                    (this.trackInteraction(
                        "carouselVideo-progress-end"
                    ), this.setState({
                        videoProgress: "end"
                    })) : void 0
            },
            render: function() {
                var a, b, c;
                return a = this.getClasses(), c = g.get(
                        this.props, "slide.type"), b =
                    g.get(this.props, "slide.content"),
                    f.createElement("div", {
                        className: a.block
                    }, b ? "image" === c ? f.createElement(
                        d, {
                            srcSet: this.getSrcSet({
                                url: b.image_src,
                                widths: [
                                    250,
                                    500,
                                    750,
                                    1e3
                                ]
                            }),
                            cssModifier: a.content,
                            alt: b.alt_text
                        }) : "video" === c ? f.createElement(
                        "video", {
                            ref: "video",
                            controls: !0,
                            muted: !0,
                            preload: "none",
                            src: b.video_src,
                            poster: b.poster_src,
                            className: a.content
                        }) : void 0 : void 0)
            }
        })
    },
    662: function(a, b, c) {
        var d, e, f, g;
        g = [c(4), c(287), c(175)], f = g[0], d = g[1], e = g[2], a
            .exports = f.createClass({
                displayName: "MoleculesProductsSlidesProductImage",
                BLOCK_CLASS: "c-product-slide--product-image",
                mixins: [e.classes],
                propTypes: {
                    imageSet: f.PropTypes.object,
                    altText: f.PropTypes.string
                },
                getStaticClasses: function() {
                    return {
                        block: this.BLOCK_CLASS,
                        content: this.BLOCK_CLASS +
                            "__content"
                    }
                },
                render: function() {
                    var a;
                    return a = this.getClasses(), f.createElement(
                        "div", {
                            className: a.block
                        }, f.createElement(d, {
                            imageSet: this.props.imageSet,
                            cssModifier: a.content,
                            alt: this.props.altText
                        }))
                }
            })
    },
    663: function(a, b, c) {
        var d, e, f, g;
        g = [c(2), c(4), c(175)], f = g[0], e = g[1], d = g[2], a.exports =
            e.createClass({
                displayName: "MoleculesProductsTechnicalDetails",
                BLOCK_CLASS: "c-technical-details",
                mixins: [d.classes],
                propTypes: {
                    details: e.PropTypes.array
                },
                getStaticClasses: function() {
                    return {
                        block: this.BLOCK_CLASS +
                            " u-clearfix",
                        title: this.BLOCK_CLASS +
                            "__title u-type -head u-ffs",
                        list: this.BLOCK_CLASS +
                            "__list u-type -subh",
                        listItem: this.BLOCK_CLASS +
                            "__list-item",
                        footer: this.BLOCK_CLASS +
                            "__footer"
                    }
                },
                render: function() {
                    var a, b, c;
                    return a = this.getClasses(), e.createElement(
                        "div", {
                            className: a.block
                        }, e.createElement("div", {
                            children: "Nothing but the best of the best",
                            className: a.title
                        }), e.createElement("ul", {
                            className: a.list
                        }, function() {
                            var d, f, g, h;
                            for (g = this.props.details,
                                h = [], c = d = 0,
                                f = g.length; f > d; c = ++
                                d) b = g[c], h.push(
                                e.createElement(
                                    "li", {
                                        children: b,
                                        className: a
                                            .listItem,
                                        key: "detail-" +
                                            c
                                    }));
                            return h
                        }.call(this)), e.createElement(
                            "div", {
                                children: "All our frames are designed in-house in New York City",
                                className: a.footer
                            }))
                }
            })
    }
});