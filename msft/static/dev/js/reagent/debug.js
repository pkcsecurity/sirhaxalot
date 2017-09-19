// Compiled by ClojureScript 1.9.908 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__10600__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__10600 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10601__i = 0, G__10601__a = new Array(arguments.length -  0);
while (G__10601__i < G__10601__a.length) {G__10601__a[G__10601__i] = arguments[G__10601__i + 0]; ++G__10601__i;}
  args = new cljs.core.IndexedSeq(G__10601__a,0,null);
} 
return G__10600__delegate.call(this,args);};
G__10600.cljs$lang$maxFixedArity = 0;
G__10600.cljs$lang$applyTo = (function (arglist__10602){
var args = cljs.core.seq(arglist__10602);
return G__10600__delegate(args);
});
G__10600.cljs$core$IFn$_invoke$arity$variadic = G__10600__delegate;
return G__10600;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__10603__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__10603 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10604__i = 0, G__10604__a = new Array(arguments.length -  0);
while (G__10604__i < G__10604__a.length) {G__10604__a[G__10604__i] = arguments[G__10604__i + 0]; ++G__10604__i;}
  args = new cljs.core.IndexedSeq(G__10604__a,0,null);
} 
return G__10603__delegate.call(this,args);};
G__10603.cljs$lang$maxFixedArity = 0;
G__10603.cljs$lang$applyTo = (function (arglist__10605){
var args = cljs.core.seq(arglist__10605);
return G__10603__delegate(args);
});
G__10603.cljs$core$IFn$_invoke$arity$variadic = G__10603__delegate;
return G__10603;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
