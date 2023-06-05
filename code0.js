gdjs.Main_32menuCode = {};
gdjs.Main_32menuCode.GDbutton_95returnToMenuObjects1= [];
gdjs.Main_32menuCode.GDbutton_95returnToMenuObjects2= [];
gdjs.Main_32menuCode.GDmenuBackgroundLoopObjects1= [];
gdjs.Main_32menuCode.GDmenuBackgroundLoopObjects2= [];
gdjs.Main_32menuCode.GDdeafbits_95logoObjects1= [];
gdjs.Main_32menuCode.GDdeafbits_95logoObjects2= [];
gdjs.Main_32menuCode.GDSTARTObjects1= [];
gdjs.Main_32menuCode.GDSTARTObjects2= [];
gdjs.Main_32menuCode.GDSETTINGSObjects1= [];
gdjs.Main_32menuCode.GDSETTINGSObjects2= [];
gdjs.Main_32menuCode.GDHELPObjects1= [];
gdjs.Main_32menuCode.GDHELPObjects2= [];
gdjs.Main_32menuCode.GDABOUTObjects1= [];
gdjs.Main_32menuCode.GDABOUTObjects2= [];
gdjs.Main_32menuCode.GDgameVersionObjects1= [];
gdjs.Main_32menuCode.GDgameVersionObjects2= [];
gdjs.Main_32menuCode.GDdingoTitleObjects1= [];
gdjs.Main_32menuCode.GDdingoTitleObjects2= [];


gdjs.Main_32menuCode.mapOfGDgdjs_46Main_9532menuCode_46GDSTARTObjects1Objects = Hashtable.newFrom({"START": gdjs.Main_32menuCode.GDSTARTObjects1});
gdjs.Main_32menuCode.mapOfGDgdjs_46Main_9532menuCode_46GDSETTINGSObjects1Objects = Hashtable.newFrom({"SETTINGS": gdjs.Main_32menuCode.GDSETTINGSObjects1});
gdjs.Main_32menuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("menuBackgroundLoop"), gdjs.Main_32menuCode.GDmenuBackgroundLoopObjects1);
{for(var i = 0, len = gdjs.Main_32menuCode.GDmenuBackgroundLoopObjects1.length ;i < len;++i) {
    gdjs.Main_32menuCode.GDmenuBackgroundLoopObjects1[i].play();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("START"), gdjs.Main_32menuCode.GDSTARTObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32menuCode.mapOfGDgdjs_46Main_9532menuCode_46GDSTARTObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game table", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SETTINGS"), gdjs.Main_32menuCode.GDSETTINGSObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32menuCode.mapOfGDgdjs_46Main_9532menuCode_46GDSETTINGSObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Settings", false);
}}

}


{



}


{



}


};

gdjs.Main_32menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32menuCode.GDbutton_95returnToMenuObjects1.length = 0;
gdjs.Main_32menuCode.GDbutton_95returnToMenuObjects2.length = 0;
gdjs.Main_32menuCode.GDmenuBackgroundLoopObjects1.length = 0;
gdjs.Main_32menuCode.GDmenuBackgroundLoopObjects2.length = 0;
gdjs.Main_32menuCode.GDdeafbits_95logoObjects1.length = 0;
gdjs.Main_32menuCode.GDdeafbits_95logoObjects2.length = 0;
gdjs.Main_32menuCode.GDSTARTObjects1.length = 0;
gdjs.Main_32menuCode.GDSTARTObjects2.length = 0;
gdjs.Main_32menuCode.GDSETTINGSObjects1.length = 0;
gdjs.Main_32menuCode.GDSETTINGSObjects2.length = 0;
gdjs.Main_32menuCode.GDHELPObjects1.length = 0;
gdjs.Main_32menuCode.GDHELPObjects2.length = 0;
gdjs.Main_32menuCode.GDABOUTObjects1.length = 0;
gdjs.Main_32menuCode.GDABOUTObjects2.length = 0;
gdjs.Main_32menuCode.GDgameVersionObjects1.length = 0;
gdjs.Main_32menuCode.GDgameVersionObjects2.length = 0;
gdjs.Main_32menuCode.GDdingoTitleObjects1.length = 0;
gdjs.Main_32menuCode.GDdingoTitleObjects2.length = 0;

gdjs.Main_32menuCode.eventsList0(runtimeScene);

return;

}

gdjs['Main_32menuCode'] = gdjs.Main_32menuCode;
