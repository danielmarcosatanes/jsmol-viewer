Clazz.declarePackage("JV.binding");
Clazz.load(["JV.binding.JmolBinding"], "JV.binding.RasmolBinding", null, function(){
var c$ = Clazz.declareType(JV.binding, "RasmolBinding", JV.binding.JmolBinding);
Clazz.makeConstructor(c$, 
function(){
Clazz.superConstructor (this, JV.binding.RasmolBinding, []);
this.set("selectOrToggle");
});
Clazz.overrideMethod(c$, "setSelectBindings", 
function(){
this.bindAction(33040, 30);
this.bindAction(33041, 35);
});
});
;//5.0.1-v4 Tue Nov 12 14:58:21 CST 2024
