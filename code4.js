gdjs.SettingsCode = {};
gdjs.SettingsCode.GDbackgroundObjects1= [];
gdjs.SettingsCode.GDbackgroundObjects2= [];
gdjs.SettingsCode.GDbutton_95cardBackThemeObjects1= [];
gdjs.SettingsCode.GDbutton_95cardBackThemeObjects2= [];
gdjs.SettingsCode.GDbutton_95tableBackgroundObjects1= [];
gdjs.SettingsCode.GDbutton_95tableBackgroundObjects2= [];
gdjs.SettingsCode.GDcardBackTheme_95descriptionObjects1= [];
gdjs.SettingsCode.GDcardBackTheme_95descriptionObjects2= [];
gdjs.SettingsCode.GDtableBackground_95descriptionObjects1= [];
gdjs.SettingsCode.GDtableBackground_95descriptionObjects2= [];
gdjs.SettingsCode.GDjokerMode_95descriptionObjects1= [];
gdjs.SettingsCode.GDjokerMode_95descriptionObjects2= [];
gdjs.SettingsCode.GDjokerModeObjects1= [];
gdjs.SettingsCode.GDjokerModeObjects2= [];
gdjs.SettingsCode.GDtextualToggleSwitchObjects1= [];
gdjs.SettingsCode.GDtextualToggleSwitchObjects2= [];
gdjs.SettingsCode.GDbutton_95BACKObjects1= [];
gdjs.SettingsCode.GDbutton_95BACKObjects2= [];


gdjs.SettingsCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("button_BACK"), gdjs.SettingsCode.GDbutton_95BACKObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDbutton_95BACKObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDbutton_95BACKObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SettingsCode.GDbutton_95BACKObjects1[k] = gdjs.SettingsCode.GDbutton_95BACKObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDbutton_95BACKObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main menu", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("button_cardBackTheme"), gdjs.SettingsCode.GDbutton_95cardBackThemeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDbutton_95cardBackThemeObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDbutton_95cardBackThemeObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SettingsCode.GDbutton_95cardBackThemeObjects1[k] = gdjs.SettingsCode.GDbutton_95cardBackThemeObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDbutton_95cardBackThemeObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Settings: Card Back Theme", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("button_tableBackground"), gdjs.SettingsCode.GDbutton_95tableBackgroundObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDbutton_95tableBackgroundObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDbutton_95tableBackgroundObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SettingsCode.GDbutton_95tableBackgroundObjects1[k] = gdjs.SettingsCode.GDbutton_95tableBackgroundObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDbutton_95tableBackgroundObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Settings: Table background", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("textualToggleSwitch"), gdjs.SettingsCode.GDtextualToggleSwitchObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDtextualToggleSwitchObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDtextualToggleSwitchObjects1[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SettingsCode.GDtextualToggleSwitchObjects1[k] = gdjs.SettingsCode.GDtextualToggleSwitchObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDtextualToggleSwitchObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("textualToggleSwitch"), gdjs.SettingsCode.GDtextualToggleSwitchObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDtextualToggleSwitchObjects1.length;i<l;++i) {
    if ( !(gdjs.SettingsCode.GDtextualToggleSwitchObjects1[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.SettingsCode.GDtextualToggleSwitchObjects1[k] = gdjs.SettingsCode.GDtextualToggleSwitchObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDtextualToggleSwitchObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), false);
}}

}


};

gdjs.SettingsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SettingsCode.GDbackgroundObjects1.length = 0;
gdjs.SettingsCode.GDbackgroundObjects2.length = 0;
gdjs.SettingsCode.GDbutton_95cardBackThemeObjects1.length = 0;
gdjs.SettingsCode.GDbutton_95cardBackThemeObjects2.length = 0;
gdjs.SettingsCode.GDbutton_95tableBackgroundObjects1.length = 0;
gdjs.SettingsCode.GDbutton_95tableBackgroundObjects2.length = 0;
gdjs.SettingsCode.GDcardBackTheme_95descriptionObjects1.length = 0;
gdjs.SettingsCode.GDcardBackTheme_95descriptionObjects2.length = 0;
gdjs.SettingsCode.GDtableBackground_95descriptionObjects1.length = 0;
gdjs.SettingsCode.GDtableBackground_95descriptionObjects2.length = 0;
gdjs.SettingsCode.GDjokerMode_95descriptionObjects1.length = 0;
gdjs.SettingsCode.GDjokerMode_95descriptionObjects2.length = 0;
gdjs.SettingsCode.GDjokerModeObjects1.length = 0;
gdjs.SettingsCode.GDjokerModeObjects2.length = 0;
gdjs.SettingsCode.GDtextualToggleSwitchObjects1.length = 0;
gdjs.SettingsCode.GDtextualToggleSwitchObjects2.length = 0;
gdjs.SettingsCode.GDbutton_95BACKObjects1.length = 0;
gdjs.SettingsCode.GDbutton_95BACKObjects2.length = 0;

gdjs.SettingsCode.eventsList0(runtimeScene);

return;

}

gdjs['SettingsCode'] = gdjs.SettingsCode;
