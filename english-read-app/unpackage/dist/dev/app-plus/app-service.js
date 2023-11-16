if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const sentences = [
    {
      en: "Context lets you write components that “adapt to their surroundings” and display themselves differently depending on where (or, in other words, in which context) they are being rendered.",
      zh: "上下文允许您编写“适应其周围环境”的组件，并根据呈现它们的位置(或者换句话说，在哪个上下文中)以不同的方式显示它们。"
    },
    {
      en: "Here is all the state setting logic migrated to a reducer function:",
      zh: "这里是迁移到reducer函数的所有状态设置逻辑:"
    },
    {
      en: "To lift state up, you must locate the closest common parent component of both of the child components that you want to coordinate:",
      zh: "要提升状态，你必须找到你想要协调的两个子组件中最近的公共父组件:"
    },
    {
      en: "Structuring state well can make a difference between a component that is pleasant to modify and debug, and one that is a constant source of bugs.",
      zh: "构建良好的 state 可以让组件变得易于修改和调试，而不会经常出错。"
    },
    {
      en: "But there is one other factor at play here",
      zh: "但这里还有一个因素在起作用"
    },
    {
      en: "When developing in “Strict Mode”,React calls each component’s function twice, which can help surface mistakes caused by impure functions.",
      zh: "在“严格模式”下开发时，React 会调用每个组件的函数两次，这有助于发现由于不纯函数造成的错误。"
    },
    {
      en: "The array returned by useState always has exactly two items.",
      zh: "useState 返回的数组永远有两个元素。"
    },
    {
      en: "Local variables don’t persist between renders. When React renders this component a second time, it renders it from scratch—it doesn’t consider any changes to the local variables.",
      zh: "局部变量在渲染之间不会持久存在。当React第二次渲染这个组件时，它从头开始渲染它——它不考虑对局部变量的任何更改。"
    },
    {
      en: "If your components get messy with too much nested conditional markup, consider extracting child components to clean things up.",
      zh: "如果您的组件因过多的嵌套条件标记而变得混乱，请考虑提取子组件来清理内容。"
    },
    {
      en: "JavaScript has a compact syntax for writing a conditional expression — the conditional operator or “ternary operator”.",
      zh: "JavaScript 具有用于编写条件表达式的紧凑语法——条件运算符或“三元运算符”。"
    },
    {
      en: "While this duplication isn’t harmful, it could make your code harder to maintain",
      zh: "虽然这种重复并不会造成伤害，但它可能会使您的代码更难维护"
    },
    {
      en: "If double curly braces after person= confuse you, recall they’re merely an object inside the JSX curlies.",
      zh: "如果 person= 之后的双大括号让您感到困惑，请记住它们只是 JSX 花括号内的一个对象。"
    }
  ];
  function readEnglish(sentence) {
    return readSentenceByYoudao(sentence, "en");
  }
  function readZh(sentence) {
    return readSentenceByYoudao(sentence, "zh");
  }
  function readSentenceByYoudao(sentence, le) {
    const promise = new Promise((res, rej) => {
      const innerAudioContext = uni.createInnerAudioContext();
      innerAudioContext.src = `https://dict.youdao.com/dictvoice?audio=${sentence}&le=${le}`;
      innerAudioContext.autoplay = true;
      innerAudioContext.play();
      innerAudioContext.onEnded(() => {
        res();
      });
      innerAudioContext.onError(() => {
        rej();
      });
    });
    return promise;
  }
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$1 = {
    data() {
      return {
        sentences
      };
    },
    onLoad() {
    },
    methods: {
      readEn(index) {
        readEnglish(this.sentences[index].en);
      },
      readZh(index) {
        readZh(this.sentences[index].zh);
      },
      async readEnFrom(index) {
        for (let i = index; i < this.sentences.length; i++) {
          await readEnglish(this.sentences[i].en);
        }
      },
      async readFrom(index, time = 1) {
        for (let i = index; i < this.sentences.length; i++) {
          for (let j = 0; j < time; j++) {
            await readZh(this.sentences[i].zh);
            await readEnglish(this.sentences[i].en);
          }
        }
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      (vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        null,
        vue.renderList($data.sentences, (sentence, index) => {
          return vue.openBlock(), vue.createElementBlock("view", null, [
            vue.createElementVNode(
              "text",
              null,
              vue.toDisplayString(sentence.en),
              1
              /* TEXT */
            ),
            vue.createElementVNode("br"),
            vue.createElementVNode(
              "text",
              null,
              vue.toDisplayString(sentence.zh),
              1
              /* TEXT */
            ),
            vue.createElementVNode("button", {
              size: "mini",
              onClick: ($event) => $options.readEn(index)
            }, "朗读英文", 8, ["onClick"]),
            vue.createElementVNode("button", {
              size: "mini",
              onClick: ($event) => $options.readZh(index)
            }, "朗读中文", 8, ["onClick"]),
            vue.createElementVNode("button", {
              size: "mini",
              onClick: ($event) => $options.readEnFrom(index)
            }, "从此向后(en)", 8, ["onClick"]),
            vue.createElementVNode("button", {
              size: "mini",
              onClick: ($event) => $options.readFrom(index)
            }, "从此向后(all)", 8, ["onClick"]),
            vue.createElementVNode("button", {
              size: "mini",
              onClick: ($event) => $options.readFrom(index, 2)
            }, "从此向后(twice)", 8, ["onClick"])
          ]);
        }),
        256
        /* UNKEYED_FRAGMENT */
      ))
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "F:/githubCode/haphazard/english-read-app/pages/index/index.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "F:/githubCode/haphazard/english-read-app/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
