gdjs.Settings_58_32Table_32backgroundCode = {};
gdjs.Settings_58_32Table_32backgroundCode.GDbutton_95returnToMenuObjects1= [];
gdjs.Settings_58_32Table_32backgroundCode.GDbutton_95returnToMenuObjects2= [];
gdjs.Settings_58_32Table_32backgroundCode.GDbackgroundObjects1= [];
gdjs.Settings_58_32Table_32backgroundCode.GDbackgroundObjects2= [];
gdjs.Settings_58_32Table_32backgroundCode.GDbutton_95cardBackThemeObjects1= [];
gdjs.Settings_58_32Table_32backgroundCode.GDbutton_95cardBackThemeObjects2= [];
gdjs.Settings_58_32Table_32backgroundCode.GDbutton_95tableBackgroundObjects1= [];
gdjs.Settings_58_32Table_32backgroundCode.GDbutton_95tableBackgroundObjects2= [];
gdjs.Settings_58_32Table_32backgroundCode.GDcardBackTheme_95descriptionObjects1= [];
gdjs.Settings_58_32Table_32backgroundCode.GDcardBackTheme_95descriptionObjects2= [];
gdjs.Settings_58_32Table_32backgroundCode.GDtableBackground_95descriptionObjects1= [];
gdjs.Settings_58_32Table_32backgroundCode.GDtableBackground_95descriptionObjects2= [];
gdjs.Settings_58_32Table_32backgroundCode.GDjokerMode_95descriptionObjects1= [];
gdjs.Settings_58_32Table_32backgroundCode.GDjokerMode_95descriptionObjects2= [];
gdjs.Settings_58_32Table_32backgroundCode.GDjokerModeObjects1= [];
gdjs.Settings_58_32Table_32backgroundCode.GDjokerModeObjects2= [];


gdjs.Settings_58_32Table_32backgroundCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("button_returnToMenu"), gdjs.Settings_58_32Table_32backgroundCode.GDbutton_95returnToMenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Settings_58_32Table_32backgroundCode.GDbutton_95returnToMenuObjects1.length;i<l;++i) {
    if ( gdjs.Settings_58_32Table_32backgroundCode.GDbutton_95returnToMenuObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Settings_58_32Table_32backgroundCode.GDbutton_95returnToMenuObjects1[k] = gdjs.Settings_58_32Table_32backgroundCode.GDbutton_95returnToMenuObjects1[i];
        ++k;
    }
}
gdjs.Settings_58_32Table_32backgroundCode.GDbutton_95returnToMenuObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main menu", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Settings_58_32Table_32backgroundCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Settings_58_32Table_32backgroundCode.GDbutton_95returnToMenuObjects1.length = 0;
gdjs.Settings_58_32Table_32backgroundCode.GDbutton_95returnToMenuObjects2.length = 0;
gdjs.Settings_58_32Table_32backgroundCode.GDbackgroundObjects1.length = 0;
gdjs.Settings_58_32Table_32backgroundCode.GDbackgroundObjects2.length = 0;
gdjs.Settings_58_32Table_32backgroundCode.GDbutton_95cardBackThemeObjects1.length = 0;
gdjs.Settings_58_32Table_32backgroundCode.GDbutton_95cardBackThemeObjects2.length = 0;
gdjs.Settings_58_32Table_32backgroundCode.GDbutton_95tableBackgroundObjects1.length = 0;
gdjs.Settings_58_32Table_32backgroundCode.GDbutton_95tableBackgroundObjects2.length = 0;
gdjs.Settings_58_32Table_32backgroundCode.GDcardBackTheme_95descriptionObjects1.length = 0;
gdjs.Settings_58_32Table_32backgroundCode.GDcardBackTheme_95descriptionObjects2.length = 0;
gdjs.Settings_58_32Table_32backgroundCode.GDtableBackground_95descriptionObjects1.length = 0;
gdjs.Settings_58_32Table_32backgroundCode.GDtableBackground_95descriptionObjects2.length = 0;
gdjs.Settings_58_32Table_32backgroundCode.GDjokerMode_95descriptionObjects1.length = 0;
gdjs.Settings_58_32Table_32backgroundCode.GDjokerMode_95descriptionObjects2.length = 0;
gdjs.Settings_58_32Table_32backgroundCode.GDjokerModeObjects1.length = 0;
gdjs.Settings_58_32Table_32backgroundCode.GDjokerModeObjects2.length = 0;

gdjs.Settings_58_32Table_32backgroundCode.eventsList0(runtimeScene);

return;

}

gdjs['Settings_58_32Table_32backgroundCode'] = gdjs.Settings_58_32Table_32backgroundCode;
