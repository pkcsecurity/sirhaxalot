goog.addDependency("base.js", ['goog'], []);
goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.object', 'goog.math.Integer', 'goog.string.StringBuffer', 'goog.array', 'goog.math.Long']);
goog.addDependency("../reagent/interop.js", ['reagent.interop'], ['cljs.core']);
goog.addDependency("../reagent/debug.js", ['reagent.debug'], ['cljs.core']);
goog.addDependency("../clojure/string.js", ['clojure.string'], ['goog.string', 'cljs.core', 'goog.string.StringBuffer']);
goog.addDependency("../reagent/impl/util.js", ['reagent.impl.util'], ['reagent.interop', 'cljs.core', 'reagent.debug', 'clojure.string']);
goog.addDependency("../reagent/impl/batching.js", ['reagent.impl.batching'], ['reagent.impl.util', 'reagent.interop', 'cljs.core', 'reagent.debug', 'clojure.string']);
goog.addDependency("../clojure/set.js", ['clojure.set'], ['cljs.core']);
goog.addDependency("../reagent/ratom.js", ['reagent.ratom'], ['reagent.impl.util', 'cljs.core', 'reagent.impl.batching', 'clojure.set', 'reagent.debug']);
goog.addDependency("../cljsjs/react/development/react.inc.js", ['react'], []);
goog.addDependency("../cljsjs/create-react-class/development/create-react-class.inc.js", ['create_react_class'], ['react']);
goog.addDependency("../reagent/impl/component.js", ['reagent.impl.component'], ['create_react_class', 'reagent.impl.util', 'reagent.interop', 'reagent.ratom', 'react', 'cljs.core', 'reagent.impl.batching', 'reagent.debug']);
goog.addDependency("../clojure/walk.js", ['clojure.walk'], ['cljs.core']);
goog.addDependency("../reagent/impl/template.js", ['reagent.impl.template'], ['reagent.impl.util', 'reagent.interop', 'reagent.ratom', 'react', 'cljs.core', 'reagent.impl.batching', 'reagent.impl.component', 'reagent.debug', 'clojure.string', 'clojure.walk']);
goog.addDependency("../cljsjs/react-dom/development/react-dom.inc.js", ['react_dom'], ['react']);
goog.addDependency("../reagent/dom.js", ['reagent.dom'], ['reagent.impl.util', 'reagent.interop', 'reagent.ratom', 'cljs.core', 'reagent.impl.template', 'reagent.impl.batching', 'reagent.debug', 'react_dom']);
goog.addDependency("../reagent/core.js", ['reagent.core'], ['reagent.impl.util', 'reagent.interop', 'reagent.ratom', 'react', 'cljs.core', 'reagent.impl.template', 'reagent.impl.batching', 'reagent.impl.component', 'reagent.debug', 'reagent.dom']);
goog.addDependency("../msft/cljs/core.js", ['msft.cljs.core'], ['goog.dom', 'goog.net.XhrIo', 'reagent.core', 'cljs.core', 'goog.format.EmailAddress']);
goog.addDependency("../process/env.js", ['process.env'], ['cljs.core']);
