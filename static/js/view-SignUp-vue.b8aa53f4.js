(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-SignUp-vue"], {
    "12ab": function(t, e, i) {
        "use strict";
        i("a12e")
    },
    5311: function(t, e, i) {
        "use strict";
        var n = i("5607")
          , a = i("2b0e");
        e["a"] = a["default"].extend({
            name: "rippleable",
            directives: {
                ripple: n["a"]
            },
            props: {
                ripple: {
                    type: [Boolean, Object],
                    default: !0
                }
            },
            methods: {
                genRipple: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return this.ripple ? (t.staticClass = "v-input--selection-controls__ripple",
                    t.directives = t.directives || [],
                    t.directives.push({
                        name: "ripple",
                        value: {
                            center: !0
                        }
                    }),
                    this.$createElement("div", t)) : null
                }
            }
        })
    },
    "6ca7": function(t, e, i) {},
    8547: function(t, e, i) {
        "use strict";
        var n = i("2b0e")
          , a = i("80d2");
        e["a"] = n["default"].extend({
            name: "comparable",
            props: {
                valueComparator: {
                    type: Function,
                    default: a["j"]
                }
            }
        })
    },
    "99d9": function(t, e, i) {
        "use strict";
        i.d(e, "a", (function() {
            return s
        }
        )),
        i.d(e, "b", (function() {
            return r
        }
        )),
        i.d(e, "c", (function() {
            return o
        }
        )),
        i.d(e, "d", (function() {
            return l
        }
        ));
        var n = i("b0af")
          , a = i("80d2")
          , s = Object(a["i"])("v-card__actions")
          , r = Object(a["i"])("v-card__subtitle")
          , o = Object(a["i"])("v-card__text")
          , l = Object(a["i"])("v-card__title");
        n["a"]
    },
    a12e: function(t, e, i) {},
    a6d7: function(t, e, i) {
        "use strict";
        i.r(e);
        var n = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("v-main", {
                staticClass: "main"
            }, [i("v-form", {
                staticClass: "main_container"
            }, [i("v-card", {
                attrs: {
                    "max-width": "500px"
                }
            }, [i("router-link", {
                staticClass: "logo",
                attrs: {
                    to: {
                        name: "Home"
                    }
                }
            }, [i("img", {
                attrs: {
                    src: "https://res.cloudinary.com/codiini/image/upload/v1616765127/tripma-blue_mausgl.svg"
                }
            })]), i("v-card-title", {
                staticClass: "flex items-center justify-center"
            }, [i("span", {
                staticClass: "headline"
            }, [t._v("Sign up for Tripma")])]), i("v-card-subtitle", {
                staticClass: "mt-3 px-16 text-center flex items-center justify-center"
            }, [t._v(" Tripma is totally free to use. Sign up using your email address or phone number below to get started. ")]), i("v-card-text", [i("v-container", [i("v-text-field", {
                attrs: {
                    label: "Username",
                    required: "",
                    outlined: "",
                    dense: ""
                },
                model: {
                    value: t.form.displayName,
                    callback: function(e) {
                        t.$set(t.form, "displayName", e)
                    },
                    expression: "form.displayName"
                }
            }), i("v-text-field", {
                attrs: {
                    label: "Email",
                    required: "",
                    outlined: "",
                    dense: "",
                    rules: t.$store.state.emailRules
                },
                model: {
                    value: t.form.email,
                    callback: function(e) {
                        t.$set(t.form, "email", e)
                    },
                    expression: "form.email"
                }
            }), i("v-text-field", {
                attrs: {
                    label: "Password",
                    outlined: "",
                    required: "",
                    dense: "",
                    rules: t.$store.state.passwordRules
                },
                model: {
                    value: t.form.password,
                    callback: function(e) {
                        t.$set(t.form, "password", e)
                    },
                    expression: "form.password"
                }
            }), i("v-checkbox", {
                scopedSlots: t._u([{
                    key: "label",
                    fn: function() {
                        return [i("div", [t._v(" I agree to the "), i("a", {
                            attrs: {
                                target: "_blank",
                                href: "#"
                            },
                            on: {
                                click: function(t) {
                                    t.stopPropagation()
                                }
                            }
                        }, [t._v(" Terms and Conditions ")])])]
                    },
                    proxy: !0
                }]),
                model: {
                    value: t.termsCheckbox,
                    callback: function(e) {
                        t.termsCheckbox = e
                    },
                    expression: "termsCheckbox"
                }
            }), i("v-checkbox", {
                scopedSlots: t._u([{
                    key: "label",
                    fn: function() {
                        return [i("div", [t._v("Send me the latest deals and alerts")])]
                    },
                    proxy: !0
                }]),
                model: {
                    value: t.dealsCheckbox,
                    callback: function(e) {
                        t.dealsCheckbox = e
                    },
                    expression: "dealsCheckbox"
                }
            }), i("v-btn", {
                staticClass: "white--text w-full mt-8",
                attrs: {
                    elevation: "0",
                    disabled: t.termsCheckbox ? t.disabled : "",
                    color: "#605DEC"
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.signUpForm(e)
                    }
                }
            }, [t._v("Create Account")])], 1)], 1)], 1)], 1)], 1)
        }
          , a = []
          , s = i("5530")
          , r = i("2f62")
          , o = {
            components: {},
            data: function() {
                return {
                    form: {
                        email: "",
                        password: "",
                        displayName: ""
                    },
                    disabled: !1,
                    termsCheckbox: !1,
                    dealsCheckbox: !1
                }
            },
            methods: Object(s["a"])(Object(s["a"])({}, Object(r["b"])({
                signUp: "auth/signUpAction"
            })), {}, {
                signUpForm: function() {
                    this.signUp(this.form)
                }
            })
        }
          , l = o
          , c = (i("12ab"),
        i("2877"))
          , u = i("6544")
          , d = i.n(u)
          , h = i("8336")
          , p = i("b0af")
          , f = i("99d9")
          , m = (i("d3b7"),
        i("25f0"),
        i("6ca7"),
        i("ec29"),
        i("9d26"))
          , v = i("c37a")
          , b = i("fe09")
          , x = b["a"].extend({
            name: "v-checkbox",
            props: {
                indeterminate: Boolean,
                indeterminateIcon: {
                    type: String,
                    default: "$checkboxIndeterminate"
                },
                offIcon: {
                    type: String,
                    default: "$checkboxOff"
                },
                onIcon: {
                    type: String,
                    default: "$checkboxOn"
                }
            },
            data: function() {
                return {
                    inputIndeterminate: this.indeterminate
                }
            },
            computed: {
                classes: function() {
                    return Object(s["a"])(Object(s["a"])({}, v["a"].options.computed.classes.call(this)), {}, {
                        "v-input--selection-controls": !0,
                        "v-input--checkbox": !0,
                        "v-input--indeterminate": this.inputIndeterminate
                    })
                },
                computedIcon: function() {
                    return this.inputIndeterminate ? this.indeterminateIcon : this.isActive ? this.onIcon : this.offIcon
                },
                validationState: function() {
                    if (!this.isDisabled || this.inputIndeterminate)
                        return this.hasError && this.shouldValidate ? "error" : this.hasSuccess ? "success" : null !== this.hasColor ? this.computedColor : void 0
                }
            },
            watch: {
                indeterminate: function(t) {
                    var e = this;
                    this.$nextTick((function() {
                        return e.inputIndeterminate = t
                    }
                    ))
                },
                inputIndeterminate: function(t) {
                    this.$emit("update:indeterminate", t)
                },
                isActive: function() {
                    this.indeterminate && (this.inputIndeterminate = !1)
                }
            },
            methods: {
                genCheckbox: function() {
                    return this.$createElement("div", {
                        staticClass: "v-input--selection-controls__input"
                    }, [this.$createElement(m["a"], this.setTextColor(this.validationState, {
                        props: {
                            dense: this.dense,
                            dark: this.dark,
                            light: this.light
                        }
                    }), this.computedIcon), this.genInput("checkbox", Object(s["a"])(Object(s["a"])({}, this.attrs$), {}, {
                        "aria-checked": this.inputIndeterminate ? "mixed" : this.isActive.toString()
                    })), this.genRipple(this.setTextColor(this.rippleState))])
                },
                genDefaultSlot: function() {
                    return [this.genCheckbox(), this.genLabel()]
                }
            }
        })
          , C = i("a523")
          , g = i("4bd4")
          , k = i("f6c4")
          , y = i("8654")
          , V = Object(c["a"])(l, n, a, !1, null, "67d71df4", null);
        e["default"] = V.exports;
        d()(V, {
            VBtn: h["a"],
            VCard: p["a"],
            VCardSubtitle: f["b"],
            VCardText: f["c"],
            VCardTitle: f["d"],
            VCheckbox: x,
            VContainer: C["a"],
            VForm: g["a"],
            VMain: k["a"],
            VTextField: y["a"]
        })
    },
    ec29: function(t, e, i) {},
    fe09: function(t, e, i) {
        "use strict";
        i.d(e, "b", (function() {
            return o
        }
        ));
        i("d3b7"),
        i("25f0"),
        i("4de4");
        var n = i("c37a")
          , a = i("5311")
          , s = i("8547")
          , r = i("58df");
        function o(t) {
            t.preventDefault()
        }
        e["a"] = Object(r["a"])(n["a"], a["a"], s["a"]).extend({
            name: "selectable",
            model: {
                prop: "inputValue",
                event: "change"
            },
            props: {
                id: String,
                inputValue: null,
                falseValue: null,
                trueValue: null,
                multiple: {
                    type: Boolean,
                    default: null
                },
                label: String
            },
            data: function() {
                return {
                    hasColor: this.inputValue,
                    lazyValue: this.inputValue
                }
            },
            computed: {
                computedColor: function() {
                    if (this.isActive)
                        return this.color ? this.color : this.isDark && !this.appIsDark ? "white" : "primary"
                },
                isMultiple: function() {
                    return !0 === this.multiple || null === this.multiple && Array.isArray(this.internalValue)
                },
                isActive: function() {
                    var t = this
                      , e = this.value
                      , i = this.internalValue;
                    return this.isMultiple ? !!Array.isArray(i) && i.some((function(i) {
                        return t.valueComparator(i, e)
                    }
                    )) : void 0 === this.trueValue || void 0 === this.falseValue ? e ? this.valueComparator(e, i) : Boolean(i) : this.valueComparator(i, this.trueValue)
                },
                isDirty: function() {
                    return this.isActive
                },
                rippleState: function() {
                    return this.isDisabled || this.validationState ? this.validationState : void 0
                }
            },
            watch: {
                inputValue: function(t) {
                    this.lazyValue = t,
                    this.hasColor = t
                }
            },
            methods: {
                genLabel: function() {
                    var t = n["a"].options.methods.genLabel.call(this);
                    return t ? (t.data.on = {
                        click: o
                    },
                    t) : t
                },
                genInput: function(t, e) {
                    return this.$createElement("input", {
                        attrs: Object.assign({
                            "aria-checked": this.isActive.toString(),
                            disabled: this.isDisabled,
                            id: this.computedId,
                            role: t,
                            type: t
                        }, e),
                        domProps: {
                            value: this.value,
                            checked: this.isActive
                        },
                        on: {
                            blur: this.onBlur,
                            change: this.onChange,
                            focus: this.onFocus,
                            keydown: this.onKeydown,
                            click: o
                        },
                        ref: "input"
                    })
                },
                onBlur: function() {
                    this.isFocused = !1
                },
                onClick: function(t) {
                    this.onChange(),
                    this.$emit("click", t)
                },
                onChange: function() {
                    var t = this;
                    if (this.isInteractive) {
                        var e = this.value
                          , i = this.internalValue;
                        if (this.isMultiple) {
                            Array.isArray(i) || (i = []);
                            var n = i.length;
                            i = i.filter((function(i) {
                                return !t.valueComparator(i, e)
                            }
                            )),
                            i.length === n && i.push(e)
                        } else
                            i = void 0 !== this.trueValue && void 0 !== this.falseValue ? this.valueComparator(i, this.trueValue) ? this.falseValue : this.trueValue : e ? this.valueComparator(i, e) ? null : e : !i;
                        this.validate(!0, i),
                        this.internalValue = i,
                        this.hasColor = i
                    }
                },
                onFocus: function() {
                    this.isFocused = !0
                },
                onKeydown: function(t) {}
            }
        })
    }
}]);
//# sourceMappingURL=view-SignUp-vue.b8aa53f4.js.map
