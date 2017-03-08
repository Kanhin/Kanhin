webpackJsonp([1, 2], {
  34: function(n, e, t) {
    t(75);
    var r = t(20)(t(36), t(85), "data-v-288975d1", null);
    n.exports = r.exports
  },
  36: function(n, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var r = t(21),
      o = t.n(r),
      i = t(40),
      s = t.n(i),
      a = t(39),
      u = t.n(a),
      l = t(84),
      c = t.n(l),
      d = t(83),
      m = t.n(d),
      p = t(74);
    t.n(p);
    e.default = {
      name: "app",
      components: {
        StyleEditor: c.a,
        ResumeEditor: m.a
      },
      data: function() {
        return {
          interval: 50,
          currentStyle: "",
          enableHtml: !1,
          fullStyle: ["/*\n* Inspired by http://strml.net/\n* 大家好，我是Kanhin 管彬彬\n* 下面是我的vue简历！\n*/\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  -webkit-transition: all .3s;\n  transition: all .3s;\n}\n/* 白色背景太单调了，我们来点背景 */\nhtml {\n  color: rgb(222,222,222);\n  background: rgb(0,43,54);\n}\n/* 文字离边框太近了 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  width: 45vw; height: 90vh;\n}\n/* 代码高亮 */\n.token.selector{ color: rgb(133,153,0); }\n.token.property{ color: rgb(187,137,0); }\n.token.punctuation{ color: yellow; }\n.token.function{ color: rgb(42,161,152); }\n\n/* 加点 3D 效果呗 */\nhtml{\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: rotateY(10deg) translateZ(-100px) ;\n          transform: rotateY(10deg) translateZ(-100px) ;\n}\n\n/* 接下来我给自己准备一个编辑器 */\n.resumeEditor{\n  position: fixed; right: 0; top: 0;\n  padding: .5em;  margin: .5em;\n  width: 48vw; height: 90vh;\n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* 好了，我开始写简历了 */\n\n\n", "\n/* 这个简历好像差点什么\n * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式\n * 简单，用开源工具翻译成 HTML 就行了\n */\n", '\n/* 再对 HTML 加点样式 */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n'],
          currentMarkdown: "",
          fullMarkdown: "管彬彬\n----\n\n前端开发工程师\n\n技能\n----\n\n*  熟练使用HTML和CSS等网页布局技术\n*  熟练掌握JavaScript原生编程\n*  熟练使用less预编译语言\n*  熟练使用jQuery、zepto等JS类库\n*  熟练使用弹性盒布局和响应式布局，可以有效解决各种移动端的屏幕适配问题\n*  熟练应用Ajax异步通信技术，可以很好的与后台合作完成数据的更新以及使用JSONP跨域请求\n*  熟练使用zepto、swiper等进行 WebApp和微信场景开发\n*  熟悉gulp、webpack项目构建工具和Git、SVN版本管理工具\n*  了解Dcloud、PhoneGap混合开发\n*  了解React、Vue、Angular组件化开发和SPA\n\n工作经历\n----\n\n日立解决方案软件服务有限公司  2015.08-2017.01\n\n\n链接\n----\n\n* [GitHub](https://github.com/Kanhin) https://github.com/Kanhin\n> 如果你觉得我还不错，请联系我！E-mail：kanhin295187334@outlook.com\n\n"
        }
      },
      created: function() {
        this.makeResume()
      },
      methods: {
        makeResume: function() {
          function n() {
            return e.apply(this, arguments)
          }
          var e = u()(s.a.mark(function n() {
            return s.a.wrap(function(n) {
              for (;;) switch (n.prev = n.next) {
                case 0:
                  return n.next = 2, this.progressivelyShowStyle(0);
                case 2:
                  return n.next = 4, this.progressivelyShowResume();
                case 4:
                  return n.next = 6, this.progressivelyShowStyle(1);
                case 6:
                  return n.next = 8, this.showHtml();
                case 8:
                  return n.next = 10, this.progressivelyShowStyle(2);
                case 10:
                case "end":
                  return n.stop()
              }
            }, n, this)
          }));
          return n
        }(),
        showHtml: function() {
          var n = this;
          return new o.a(function(e, t) {
            n.enableHtml = !0, e()
          })
        },
        progressivelyShowStyle: function(n) {
          var e = this;
          return new o.a(function(t, r) {
            var o = e.interval,
              i = u()(s.a.mark(function e() {
                var r, a, u, l, c, d = this;
                return s.a.wrap(function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      if (r = this.fullStyle[n]) {
                        e.next = 3;
                        break
                      }
                      return e.abrupt("return");
                    case 3:
                      a = this.fullStyle.filter(function(e, t) {
                        return t <= n
                      }).map(function(n) {
                        return n.length
                      }).reduce(function(n, e) {
                        return n + e
                      }, 0), u = a - r.length, this.currentStyle.length < a ? (l = this.currentStyle.length - u, c = r.substring(l, l + 1) || " ", this.currentStyle += c, "\n" === r.substring(l - 1, l) && this.$refs.styleEditor && this.$nextTick(function() {
                        d.$refs.styleEditor.goBottom()
                      }), setTimeout(i, o)) : t();
                    case 6:
                    case "end":
                      return e.stop()
                  }
                }, e, this)
              })).bind(e);
            i()
          })
        },
        progressivelyShowResume: function() {
          var n = this;
          return new o.a(function(e, t) {
            var r = n.fullMarkdown.length,
              o = n.interval;
            ! function t() {
              if (n.currentMarkdown.length < r) {
                n.currentMarkdown = n.fullMarkdown.substring(0, n.currentMarkdown.length + 1);
                var i = (n.currentMarkdown[n.currentMarkdown.length - 1], n.currentMarkdown[n.currentMarkdown.length - 2]);
                console.log(i), "\n" === i && n.$refs.resumeEditor && n.$nextTick(function() {
                  return n.$refs.resumeEditor.goBottom()
                }), setTimeout(t, o)
              } else e()
            }()
          })
        }
      }
    }
  },
  37: function(n, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var r = t(78),
      o = t.n(r);
    e.default = {
      props: ["markdown", "enableHtml"],
      name: "ResumeEditor",
      computed: {
        result: function() {
          return this.enableHtml ? o()(this.markdown) : this.markdown
        }
      },
      methods: {
        goBottom: function() {
          this.$refs.container.scrollTop = 1e5
        }
      }
    }
  },
  38: function(n, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var r = t(79),
      o = t.n(r);
    e.default = {
      name: "Editor",
      props: ["code"],
      computed: {
        highlightedCode: function() {
          return o.a.highlight(this.code, o.a.languages.css)
        },
        codeInStyleTag: function() {
          return "<style>" + this.code + "</style>"
        }
      },
      methods: {
        goBottom: function() {
          this.$refs.container.scrollTop = 1e5
        }
      }
    }
  },
  74: function(n, e) {},
  75: function(n, e) {},
  76: function(n, e) {},
  77: function(n, e) {},
  83: function(n, e, t) {
    t(77);
    var r = t(20)(t(37), t(87), "data-v-2df95543", null);
    n.exports = r.exports
  },
  84: function(n, e, t) {
    t(76);
    var r = t(20)(t(38), t(86), "data-v-2ca90776", null);
    n.exports = r.exports
  },
  85: function(n, e) {
    n.exports = {
      render: function() {
        var n = this,
          e = n.$createElement,
          t = n._self._c || e;
        return t("div", {
          attrs: {
            id: "app"
          }
        }, [t("StyleEditor", {
          ref: "styleEditor",
          attrs: {
            code: n.currentStyle
          }
        }), n._v(" "), t("ResumeEditor", {
          ref: "resumeEditor",
          attrs: {
            markdown: n.currentMarkdown,
            enableHtml: n.enableHtml
          }
        })], 1)
      },
      staticRenderFns: []
    }
  },
  86: function(n, e) {
    n.exports = {
      render: function() {
        var n = this,
          e = n.$createElement,
          t = n._self._c || e;
        return t("div", {
          ref: "container",
          staticClass: "styleEditor"
        }, [t("div", {
          staticClass: "code",
          domProps: {
            innerHTML: n._s(n.codeInStyleTag)
          }
        }), n._v(" "), t("pre", {
          domProps: {
            innerHTML: n._s(n.highlightedCode)
          }
        })])
      },
      staticRenderFns: []
    }
  },
  87: function(n, e) {
    n.exports = {
      render: function() {
        var n = this,
          e = n.$createElement,
          t = n._self._c || e;
        return t("div", {
          ref: "container",
          staticClass: "resumeEditor",
          class: {
            htmlMode: n.enableHtml
          }
        }, [n.enableHtml ? t("div", {
          domProps: {
            innerHTML: n._s(n.result)
          }
        }) : t("pre", [n._v(n._s(n.result))])])
      },
      staticRenderFns: []
    }
  },
  89: function(n, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var r = t(35),
      o = t(34),
      i = t.n(o);
    new r.a({
      el: "#app",
      render: function(n) {
        return n(i.a)
      }
    })
  }
}, [89]);
//# sourceMappingURL=app.8f8be1561ac489ae7c42.js.map
