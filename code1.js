gdjs.Game_32tableCode = {};
gdjs.Game_32tableCode.forEachIndex2 = 0;

gdjs.Game_32tableCode.forEachIndex3 = 0;

gdjs.Game_32tableCode.forEachIndex4 = 0;

gdjs.Game_32tableCode.forEachObjects2 = [];

gdjs.Game_32tableCode.forEachObjects3 = [];

gdjs.Game_32tableCode.forEachObjects4 = [];

gdjs.Game_32tableCode.forEachTemporary2 = null;

gdjs.Game_32tableCode.forEachTemporary3 = null;

gdjs.Game_32tableCode.forEachTemporary4 = null;

gdjs.Game_32tableCode.forEachTotalCount2 = 0;

gdjs.Game_32tableCode.forEachTotalCount3 = 0;

gdjs.Game_32tableCode.forEachTotalCount4 = 0;

gdjs.Game_32tableCode.GDtableBackgroundObjects1= [];
gdjs.Game_32tableCode.GDtableBackgroundObjects2= [];
gdjs.Game_32tableCode.GDtableBackgroundObjects3= [];
gdjs.Game_32tableCode.GDtableBackgroundObjects4= [];
gdjs.Game_32tableCode.GDButton_95nextObjects1= [];
gdjs.Game_32tableCode.GDButton_95nextObjects2= [];
gdjs.Game_32tableCode.GDButton_95nextObjects3= [];
gdjs.Game_32tableCode.GDButton_95nextObjects4= [];
gdjs.Game_32tableCode.GDdisplayCardObjects1= [];
gdjs.Game_32tableCode.GDdisplayCardObjects2= [];
gdjs.Game_32tableCode.GDdisplayCardObjects3= [];
gdjs.Game_32tableCode.GDdisplayCardObjects4= [];
gdjs.Game_32tableCode.GDtableCardObjects1= [];
gdjs.Game_32tableCode.GDtableCardObjects2= [];
gdjs.Game_32tableCode.GDtableCardObjects3= [];
gdjs.Game_32tableCode.GDtableCardObjects4= [];
gdjs.Game_32tableCode.GDTimerSliderObjects1= [];
gdjs.Game_32tableCode.GDTimerSliderObjects2= [];
gdjs.Game_32tableCode.GDTimerSliderObjects3= [];
gdjs.Game_32tableCode.GDTimerSliderObjects4= [];
gdjs.Game_32tableCode.GDJoker_95alertObjects1= [];
gdjs.Game_32tableCode.GDJoker_95alertObjects2= [];
gdjs.Game_32tableCode.GDJoker_95alertObjects3= [];
gdjs.Game_32tableCode.GDJoker_95alertObjects4= [];
gdjs.Game_32tableCode.GDgame_95startObjects1= [];
gdjs.Game_32tableCode.GDgame_95startObjects2= [];
gdjs.Game_32tableCode.GDgame_95startObjects3= [];
gdjs.Game_32tableCode.GDgame_95startObjects4= [];
gdjs.Game_32tableCode.GDjoker_95laughingObjects1= [];
gdjs.Game_32tableCode.GDjoker_95laughingObjects2= [];
gdjs.Game_32tableCode.GDjoker_95laughingObjects3= [];
gdjs.Game_32tableCode.GDjoker_95laughingObjects4= [];
gdjs.Game_32tableCode.GDdisplayCardBackgroundObjects1= [];
gdjs.Game_32tableCode.GDdisplayCardBackgroundObjects2= [];
gdjs.Game_32tableCode.GDdisplayCardBackgroundObjects3= [];
gdjs.Game_32tableCode.GDdisplayCardBackgroundObjects4= [];
gdjs.Game_32tableCode.GDwhiteRectangleCurvedObjects1= [];
gdjs.Game_32tableCode.GDwhiteRectangleCurvedObjects2= [];
gdjs.Game_32tableCode.GDwhiteRectangleCurvedObjects3= [];
gdjs.Game_32tableCode.GDwhiteRectangleCurvedObjects4= [];
gdjs.Game_32tableCode.GDcurrentDrawObjects1= [];
gdjs.Game_32tableCode.GDcurrentDrawObjects2= [];
gdjs.Game_32tableCode.GDcurrentDrawObjects3= [];
gdjs.Game_32tableCode.GDcurrentDrawObjects4= [];
gdjs.Game_32tableCode.GDtimerDisplayObjects1= [];
gdjs.Game_32tableCode.GDtimerDisplayObjects2= [];
gdjs.Game_32tableCode.GDtimerDisplayObjects3= [];
gdjs.Game_32tableCode.GDtimerDisplayObjects4= [];
gdjs.Game_32tableCode.GDtimerTitleObjects1= [];
gdjs.Game_32tableCode.GDtimerTitleObjects2= [];
gdjs.Game_32tableCode.GDtimerTitleObjects3= [];
gdjs.Game_32tableCode.GDtimerTitleObjects4= [];
gdjs.Game_32tableCode.GDsecondsIntervalDisplayObjects1= [];
gdjs.Game_32tableCode.GDsecondsIntervalDisplayObjects2= [];
gdjs.Game_32tableCode.GDsecondsIntervalDisplayObjects3= [];
gdjs.Game_32tableCode.GDsecondsIntervalDisplayObjects4= [];
gdjs.Game_32tableCode.GDhalf_95rectangle_95shapeObjects1= [];
gdjs.Game_32tableCode.GDhalf_95rectangle_95shapeObjects2= [];
gdjs.Game_32tableCode.GDhalf_95rectangle_95shapeObjects3= [];
gdjs.Game_32tableCode.GDhalf_95rectangle_95shapeObjects4= [];
gdjs.Game_32tableCode.GDtimerToggleObjects1= [];
gdjs.Game_32tableCode.GDtimerToggleObjects2= [];
gdjs.Game_32tableCode.GDtimerToggleObjects3= [];
gdjs.Game_32tableCode.GDtimerToggleObjects4= [];
gdjs.Game_32tableCode.GDTimerObjects1= [];
gdjs.Game_32tableCode.GDTimerObjects2= [];
gdjs.Game_32tableCode.GDTimerObjects3= [];
gdjs.Game_32tableCode.GDTimerObjects4= [];
gdjs.Game_32tableCode.GDbutton_95EXITObjects1= [];
gdjs.Game_32tableCode.GDbutton_95EXITObjects2= [];
gdjs.Game_32tableCode.GDbutton_95EXITObjects3= [];
gdjs.Game_32tableCode.GDbutton_95EXITObjects4= [];
gdjs.Game_32tableCode.GDbutton_95NEXTObjects1= [];
gdjs.Game_32tableCode.GDbutton_95NEXTObjects2= [];
gdjs.Game_32tableCode.GDbutton_95NEXTObjects3= [];
gdjs.Game_32tableCode.GDbutton_95NEXTObjects4= [];


gdjs.Game_32tableCode.asyncCallback13352460 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("game_start"), gdjs.Game_32tableCode.GDgame_95startObjects2);

{for(var i = 0, len = gdjs.Game_32tableCode.GDgame_95startObjects2.length ;i < len;++i) {
    gdjs.Game_32tableCode.GDgame_95startObjects2[i].getBehavior("Tween").addObjectScaleTween("fadeout", 0, 0, "easeOutQuad", 2000, true, true);
}
}}
gdjs.Game_32tableCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Game_32tableCode.GDgame_95startObjects1) asyncObjectsList.addObject("game_start", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.Game_32tableCode.asyncCallback13352460(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Game_32tableCode.eventsList1 = function(runtimeScene) {

};gdjs.Game_32tableCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("tableCard"), gdjs.Game_32tableCode.GDtableCardObjects3);

for (gdjs.Game_32tableCode.forEachIndex4 = 0;gdjs.Game_32tableCode.forEachIndex4 < gdjs.Game_32tableCode.GDtableCardObjects3.length;++gdjs.Game_32tableCode.forEachIndex4) {
gdjs.Game_32tableCode.GDtableCardObjects4.length = 0;


gdjs.Game_32tableCode.forEachTemporary4 = gdjs.Game_32tableCode.GDtableCardObjects3[gdjs.Game_32tableCode.forEachIndex4];
gdjs.Game_32tableCode.GDtableCardObjects4.push(gdjs.Game_32tableCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32tableCode.GDtableCardObjects4.length;i<l;++i) {
    if ( gdjs.Game_32tableCode.GDtableCardObjects4[i].getVariableString(gdjs.Game_32tableCode.GDtableCardObjects4[i].getVariables().getFromIndex(1)) == "clubs" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32tableCode.GDtableCardObjects4[k] = gdjs.Game_32tableCode.GDtableCardObjects4[i];
        ++k;
    }
}
gdjs.Game_32tableCode.GDtableCardObjects4.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.Game_32tableCode.GDtableCardObjects4.length ;i < len;++i) {
    gdjs.Game_32tableCode.GDtableCardObjects4[i].setAnimationName("back_default_clubs");
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("tableCard"), gdjs.Game_32tableCode.GDtableCardObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32tableCode.GDtableCardObjects3.length;i<l;++i) {
    if ( gdjs.Game_32tableCode.GDtableCardObjects3[i].getVariableString(gdjs.Game_32tableCode.GDtableCardObjects3[i].getVariables().getFromIndex(1)) == "spades" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32tableCode.GDtableCardObjects3[k] = gdjs.Game_32tableCode.GDtableCardObjects3[i];
        ++k;
    }
}
gdjs.Game_32tableCode.GDtableCardObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32tableCode.GDtableCardObjects3 */
{for(var i = 0, len = gdjs.Game_32tableCode.GDtableCardObjects3.length ;i < len;++i) {
    gdjs.Game_32tableCode.GDtableCardObjects3[i].setAnimationName("back_default_spades");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("tableCard"), gdjs.Game_32tableCode.GDtableCardObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32tableCode.GDtableCardObjects3.length;i<l;++i) {
    if ( gdjs.Game_32tableCode.GDtableCardObjects3[i].getVariableString(gdjs.Game_32tableCode.GDtableCardObjects3[i].getVariables().getFromIndex(1)) == "hearts" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32tableCode.GDtableCardObjects3[k] = gdjs.Game_32tableCode.GDtableCardObjects3[i];
        ++k;
    }
}
gdjs.Game_32tableCode.GDtableCardObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32tableCode.GDtableCardObjects3 */
{for(var i = 0, len = gdjs.Game_32tableCode.GDtableCardObjects3.length ;i < len;++i) {
    gdjs.Game_32tableCode.GDtableCardObjects3[i].setAnimationName("back_default_hearts");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("tableCard"), gdjs.Game_32tableCode.GDtableCardObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32tableCode.GDtableCardObjects2.length;i<l;++i) {
    if ( gdjs.Game_32tableCode.GDtableCardObjects2[i].getVariableString(gdjs.Game_32tableCode.GDtableCardObjects2[i].getVariables().getFromIndex(1)) == "diamonds" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32tableCode.GDtableCardObjects2[k] = gdjs.Game_32tableCode.GDtableCardObjects2[i];
        ++k;
    }
}
gdjs.Game_32tableCode.GDtableCardObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32tableCode.GDtableCardObjects2 */
{for(var i = 0, len = gdjs.Game_32tableCode.GDtableCardObjects2.length ;i < len;++i) {
    gdjs.Game_32tableCode.GDtableCardObjects2[i].setAnimationName("back_default_diamonds");
}
}}

}


};gdjs.Game_32tableCode.eventsList3 = function(runtimeScene) {

};gdjs.Game_32tableCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("tableCard"), gdjs.Game_32tableCode.GDtableCardObjects3);

for (gdjs.Game_32tableCode.forEachIndex4 = 0;gdjs.Game_32tableCode.forEachIndex4 < gdjs.Game_32tableCode.GDtableCardObjects3.length;++gdjs.Game_32tableCode.forEachIndex4) {
gdjs.Game_32tableCode.GDtableCardObjects4.length = 0;


gdjs.Game_32tableCode.forEachTemporary4 = gdjs.Game_32tableCode.GDtableCardObjects3[gdjs.Game_32tableCode.forEachIndex4];
gdjs.Game_32tableCode.GDtableCardObjects4.push(gdjs.Game_32tableCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32tableCode.GDtableCardObjects4.length;i<l;++i) {
    if ( gdjs.Game_32tableCode.GDtableCardObjects4[i].getVariableString(gdjs.Game_32tableCode.GDtableCardObjects4[i].getVariables().getFromIndex(1)) == "clubs" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32tableCode.GDtableCardObjects4[k] = gdjs.Game_32tableCode.GDtableCardObjects4[i];
        ++k;
    }
}
gdjs.Game_32tableCode.GDtableCardObjects4.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.Game_32tableCode.GDtableCardObjects4.length ;i < len;++i) {
    gdjs.Game_32tableCode.GDtableCardObjects4[i].setAnimationName("back_sapphire_clubs");
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("tableCard"), gdjs.Game_32tableCode.GDtableCardObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32tableCode.GDtableCardObjects3.length;i<l;++i) {
    if ( gdjs.Game_32tableCode.GDtableCardObjects3[i].getVariableString(gdjs.Game_32tableCode.GDtableCardObjects3[i].getVariables().getFromIndex(1)) == "spades" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32tableCode.GDtableCardObjects3[k] = gdjs.Game_32tableCode.GDtableCardObjects3[i];
        ++k;
    }
}
gdjs.Game_32tableCode.GDtableCardObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32tableCode.GDtableCardObjects3 */
{for(var i = 0, len = gdjs.Game_32tableCode.GDtableCardObjects3.length ;i < len;++i) {
    gdjs.Game_32tableCode.GDtableCardObjects3[i].setAnimationName("back_sapphire_spades");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("tableCard"), gdjs.Game_32tableCode.GDtableCardObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32tableCode.GDtableCardObjects3.length;i<l;++i) {
    if ( gdjs.Game_32tableCode.GDtableCardObjects3[i].getVariableString(gdjs.Game_32tableCode.GDtableCardObjects3[i].getVariables().getFromIndex(1)) == "hearts" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32tableCode.GDtableCardObjects3[k] = gdjs.Game_32tableCode.GDtableCardObjects3[i];
        ++k;
    }
}
gdjs.Game_32tableCode.GDtableCardObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32tableCode.GDtableCardObjects3 */
{for(var i = 0, len = gdjs.Game_32tableCode.GDtableCardObjects3.length ;i < len;++i) {
    gdjs.Game_32tableCode.GDtableCardObjects3[i].setAnimationName("back_sapphire_hearts");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("tableCard"), gdjs.Game_32tableCode.GDtableCardObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32tableCode.GDtableCardObjects2.length;i<l;++i) {
    if ( gdjs.Game_32tableCode.GDtableCardObjects2[i].getVariableString(gdjs.Game_32tableCode.GDtableCardObjects2[i].getVariables().getFromIndex(1)) == "diamonds" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32tableCode.GDtableCardObjects2[k] = gdjs.Game_32tableCode.GDtableCardObjects2[i];
        ++k;
    }
}
gdjs.Game_32tableCode.GDtableCardObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32tableCode.GDtableCardObjects2 */
{for(var i = 0, len = gdjs.Game_32tableCode.GDtableCardObjects2.length ;i < len;++i) {
    gdjs.Game_32tableCode.GDtableCardObjects2[i].setAnimationName("back_sapphire_diamonds");
}
}}

}


};gdjs.Game_32tableCode.eventsList5 = function(runtimeScene) {

};gdjs.Game_32tableCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("tableCard"), gdjs.Game_32tableCode.GDtableCardObjects3);

for (gdjs.Game_32tableCode.forEachIndex4 = 0;gdjs.Game_32tableCode.forEachIndex4 < gdjs.Game_32tableCode.GDtableCardObjects3.length;++gdjs.Game_32tableCode.forEachIndex4) {
gdjs.Game_32tableCode.GDtableCardObjects4.length = 0;


gdjs.Game_32tableCode.forEachTemporary4 = gdjs.Game_32tableCode.GDtableCardObjects3[gdjs.Game_32tableCode.forEachIndex4];
gdjs.Game_32tableCode.GDtableCardObjects4.push(gdjs.Game_32tableCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32tableCode.GDtableCardObjects4.length;i<l;++i) {
    if ( gdjs.Game_32tableCode.GDtableCardObjects4[i].getVariableString(gdjs.Game_32tableCode.GDtableCardObjects4[i].getVariables().getFromIndex(1)) == "clubs" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32tableCode.GDtableCardObjects4[k] = gdjs.Game_32tableCode.GDtableCardObjects4[i];
        ++k;
    }
}
gdjs.Game_32tableCode.GDtableCardObjects4.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.Game_32tableCode.GDtableCardObjects4.length ;i < len;++i) {
    gdjs.Game_32tableCode.GDtableCardObjects4[i].setAnimationName("back_emerald_clubs");
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("tableCard"), gdjs.Game_32tableCode.GDtableCardObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32tableCode.GDtableCardObjects3.length;i<l;++i) {
    if ( gdjs.Game_32tableCode.GDtableCardObjects3[i].getVariableString(gdjs.Game_32tableCode.GDtableCardObjects3[i].getVariables().getFromIndex(1)) == "spades" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32tableCode.GDtableCardObjects3[k] = gdjs.Game_32tableCode.GDtableCardObjects3[i];
        ++k;
    }
}
gdjs.Game_32tableCode.GDtableCardObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32tableCode.GDtableCardObjects3 */
{for(var i = 0, len = gdjs.Game_32tableCode.GDtableCardObjects3.length ;i < len;++i) {
    gdjs.Game_32tableCode.GDtableCardObjects3[i].setAnimationName("back_emerald_spades");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("tableCard"), gdjs.Game_32tableCode.GDtableCardObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32tableCode.GDtableCardObjects3.length;i<l;++i) {
    if ( gdjs.Game_32tableCode.GDtableCardObjects3[i].getVariableString(gdjs.Game_32tableCode.GDtableCardObjects3[i].getVariables().getFromIndex(1)) == "hearts" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32tableCode.GDtableCardObjects3[k] = gdjs.Game_32tableCode.GDtableCardObjects3[i];
        ++k;
    }
}
gdjs.Game_32tableCode.GDtableCardObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32tableCode.GDtableCardObjects3 */
{for(var i = 0, len = gdjs.Game_32tableCode.GDtableCardObjects3.length ;i < len;++i) {
    gdjs.Game_32tableCode.GDtableCardObjects3[i].setAnimationName("back_emerald_hearts");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("tableCard"), gdjs.Game_32tableCode.GDtableCardObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32tableCode.GDtableCardObjects2.length;i<l;++i) {
    if ( gdjs.Game_32tableCode.GDtableCardObjects2[i].getVariableString(gdjs.Game_32tableCode.GDtableCardObjects2[i].getVariables().getFromIndex(1)) == "diamonds" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32tableCode.GDtableCardObjects2[k] = gdjs.Game_32tableCode.GDtableCardObjects2[i];
        ++k;
    }
}
gdjs.Game_32tableCode.GDtableCardObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32tableCode.GDtableCardObjects2 */
{for(var i = 0, len = gdjs.Game_32tableCode.GDtableCardObjects2.length ;i < len;++i) {
    gdjs.Game_32tableCode.GDtableCardObjects2[i].setAnimationName("back_emerald_diamonds");
}
}}

}


};gdjs.Game_32tableCode.eventsList7 = function(runtimeScene) {

};gdjs.Game_32tableCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("tableCard"), gdjs.Game_32tableCode.GDtableCardObjects2);

for (gdjs.Game_32tableCode.forEachIndex3 = 0;gdjs.Game_32tableCode.forEachIndex3 < gdjs.Game_32tableCode.GDtableCardObjects2.length;++gdjs.Game_32tableCode.forEachIndex3) {
gdjs.Game_32tableCode.GDtableCardObjects3.length = 0;


gdjs.Game_32tableCode.forEachTemporary3 = gdjs.Game_32tableCode.GDtableCardObjects2[gdjs.Game_32tableCode.forEachIndex3];
gdjs.Game_32tableCode.GDtableCardObjects3.push(gdjs.Game_32tableCode.forEachTemporary3);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.Game_32tableCode.GDtableCardObjects3.length ;i < len;++i) {
    gdjs.Game_32tableCode.GDtableCardObjects3[i].setAnimationName("back_futura");
}
}}
}

}


};gdjs.Game_32tableCode.eventsList9 = function(runtimeScene) {

};gdjs.Game_32tableCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("tableCard"), gdjs.Game_32tableCode.GDtableCardObjects1);

for (gdjs.Game_32tableCode.forEachIndex2 = 0;gdjs.Game_32tableCode.forEachIndex2 < gdjs.Game_32tableCode.GDtableCardObjects1.length;++gdjs.Game_32tableCode.forEachIndex2) {
gdjs.Game_32tableCode.GDtableCardObjects2.length = 0;


gdjs.Game_32tableCode.forEachTemporary2 = gdjs.Game_32tableCode.GDtableCardObjects1[gdjs.Game_32tableCode.forEachIndex2];
gdjs.Game_32tableCode.GDtableCardObjects2.push(gdjs.Game_32tableCode.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.Game_32tableCode.GDtableCardObjects2.length ;i < len;++i) {
    gdjs.Game_32tableCode.GDtableCardObjects2[i].setAnimationName("back_miami");
}
}}
}

}


};gdjs.Game_32tableCode.eventsList11 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "DEFAULT";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13355148);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32tableCode.eventsList2(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "SAPPHIRE";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13359772);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32tableCode.eventsList4(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "EMERALD";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13364348);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32tableCode.eventsList6(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "FUTURA";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13368748);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32tableCode.eventsList8(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "MIAMI";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13370132);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32tableCode.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.Game_32tableCode.eventsList12 = function(runtimeScene) {

{


gdjs.Game_32tableCode.eventsList11(runtimeScene);
}


};gdjs.Game_32tableCode.eventsList13 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.variableChildExists(runtimeScene.getScene().getVariables().getFromIndex(0), "joker"));
if (isConditionTrue_0) {
{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().getFromIndex(0), "joker");
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(1), true);
}}

}


{



}


{



}


};gdjs.Game_32tableCode.mapOfGDgdjs_46Game_9532tableCode_46GDbutton_9595NEXTObjects1Objects = Hashtable.newFrom({"button_NEXT": gdjs.Game_32tableCode.GDbutton_95NEXTObjects1});
gdjs.Game_32tableCode.eventsList14 = function(runtimeScene) {

};gdjs.Game_32tableCode.mapOfGDgdjs_46Game_9532tableCode_46GDjoker_9595laughingObjects1Objects = Hashtable.newFrom({"joker_laughing": gdjs.Game_32tableCode.GDjoker_95laughingObjects1});
gdjs.Game_32tableCode.asyncCallback13382084 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Button_next"), gdjs.Game_32tableCode.GDButton_95nextObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("joker_laughing"), gdjs.Game_32tableCode.GDjoker_95laughingObjects2);

{for(var i = 0, len = gdjs.Game_32tableCode.GDjoker_95laughingObjects2.length ;i < len;++i) {
    gdjs.Game_32tableCode.GDjoker_95laughingObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Game_32tableCode.GDButton_95nextObjects2.length ;i < len;++i) {
    gdjs.Game_32tableCode.GDButton_95nextObjects2[i].hide(false);
}
}}
gdjs.Game_32tableCode.eventsList15 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Game_32tableCode.GDButton_95nextObjects1) asyncObjectsList.addObject("Button_next", obj);
for (const obj of gdjs.Game_32tableCode.GDjoker_95laughingObjects1) asyncObjectsList.addObject("joker_laughing", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(6), (runtimeScene) => (gdjs.Game_32tableCode.asyncCallback13382084(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Game_32tableCode.eventsList16 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("tableCard"), gdjs.Game_32tableCode.GDtableCardObjects2);

for (gdjs.Game_32tableCode.forEachIndex3 = 0;gdjs.Game_32tableCode.forEachIndex3 < gdjs.Game_32tableCode.GDtableCardObjects2.length;++gdjs.Game_32tableCode.forEachIndex3) {
gdjs.copyArray(runtimeScene.getObjects("displayCard"), gdjs.Game_32tableCode.GDdisplayCardObjects3);
gdjs.Game_32tableCode.GDtableCardObjects3.length = 0;


gdjs.Game_32tableCode.forEachTemporary3 = gdjs.Game_32tableCode.GDtableCardObjects2[gdjs.Game_32tableCode.forEachIndex3];
gdjs.Game_32tableCode.GDtableCardObjects3.push(gdjs.Game_32tableCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)) == (gdjs.RuntimeObject.getVariableString(((gdjs.Game_32tableCode.GDtableCardObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Game_32tableCode.GDtableCardObjects3[0].getVariables()).getFromIndex(0))));
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.Game_32tableCode.GDtableCardObjects3.length ;i < len;++i) {
    gdjs.Game_32tableCode.GDtableCardObjects3[i].setAnimationName(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)));
}
}{for(var i = 0, len = gdjs.Game_32tableCode.GDdisplayCardObjects3.length ;i < len;++i) {
    gdjs.Game_32tableCode.GDdisplayCardObjects3[i].setAnimationName(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)));
}
}}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)) == "joker";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Button_next"), gdjs.Game_32tableCode.GDButton_95nextObjects1);
gdjs.copyArray(runtimeScene.getObjects("timerToggle"), gdjs.Game_32tableCode.GDtimerToggleObjects1);
gdjs.Game_32tableCode.GDjoker_95laughingObjects1.length = 0;

{for(var i = 0, len = gdjs.Game_32tableCode.GDtimerToggleObjects1.length ;i < len;++i) {
    gdjs.Game_32tableCode.GDtimerToggleObjects1[i].SetChecked(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Game_32tableCode.GDButton_95nextObjects1.length ;i < len;++i) {
    gdjs.Game_32tableCode.GDButton_95nextObjects1[i].hide();
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32tableCode.mapOfGDgdjs_46Game_9532tableCode_46GDjoker_9595laughingObjects1Objects, 0, 0, "pop-up");
}{for(var i = 0, len = gdjs.Game_32tableCode.GDjoker_95laughingObjects1.length ;i < len;++i) {
    gdjs.Game_32tableCode.GDjoker_95laughingObjects1[i].play();
}
}
{ //Subevents
gdjs.Game_32tableCode.eventsList15(runtimeScene);} //End of subevents
}

}


};gdjs.Game_32tableCode.eventsList17 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("timerToggle"), gdjs.Game_32tableCode.GDtimerToggleObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32tableCode.GDtimerToggleObjects2.length;i<l;++i) {
    if ( !(gdjs.Game_32tableCode.GDtimerToggleObjects2[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32tableCode.GDtimerToggleObjects2[k] = gdjs.Game_32tableCode.GDtimerToggleObjects2[i];
        ++k;
    }
}
gdjs.Game_32tableCode.GDtimerToggleObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32tableCode.GDtimerToggleObjects2 */
{for(var i = 0, len = gdjs.Game_32tableCode.GDtimerToggleObjects2.length ;i < len;++i) {
    gdjs.Game_32tableCode.GDtimerToggleObjects2[i].setVariableBoolean(gdjs.Game_32tableCode.GDtimerToggleObjects2[i].getVariables().getFromIndex(0), true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("timerToggle"), gdjs.Game_32tableCode.GDtimerToggleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32tableCode.GDtimerToggleObjects1.length;i<l;++i) {
    if ( gdjs.Game_32tableCode.GDtimerToggleObjects1[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32tableCode.GDtimerToggleObjects1[k] = gdjs.Game_32tableCode.GDtimerToggleObjects1[i];
        ++k;
    }
}
gdjs.Game_32tableCode.GDtimerToggleObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32tableCode.GDtimerToggleObjects1 */
{for(var i = 0, len = gdjs.Game_32tableCode.GDtimerToggleObjects1.length ;i < len;++i) {
    gdjs.Game_32tableCode.GDtimerToggleObjects1[i].setVariableBoolean(gdjs.Game_32tableCode.GDtimerToggleObjects1[i].getVariables().getFromIndex(0), false);
}
}}

}


};gdjs.Game_32tableCode.eventsList18 = function(runtimeScene) {

};gdjs.Game_32tableCode.mapOfGDgdjs_46Game_9532tableCode_46GDjoker_9595laughingObjects1Objects = Hashtable.newFrom({"joker_laughing": gdjs.Game_32tableCode.GDjoker_95laughingObjects1});
gdjs.Game_32tableCode.asyncCallback13394444 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Button_next"), gdjs.Game_32tableCode.GDButton_95nextObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("joker_laughing"), gdjs.Game_32tableCode.GDjoker_95laughingObjects2);

{for(var i = 0, len = gdjs.Game_32tableCode.GDjoker_95laughingObjects2.length ;i < len;++i) {
    gdjs.Game_32tableCode.GDjoker_95laughingObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Game_32tableCode.GDButton_95nextObjects2.length ;i < len;++i) {
    gdjs.Game_32tableCode.GDButton_95nextObjects2[i].hide(false);
}
}}
gdjs.Game_32tableCode.eventsList19 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Game_32tableCode.GDButton_95nextObjects1) asyncObjectsList.addObject("Button_next", obj);
for (const obj of gdjs.Game_32tableCode.GDjoker_95laughingObjects1) asyncObjectsList.addObject("joker_laughing", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(6), (runtimeScene) => (gdjs.Game_32tableCode.asyncCallback13394444(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Game_32tableCode.eventsList20 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("tableCard"), gdjs.Game_32tableCode.GDtableCardObjects2);

for (gdjs.Game_32tableCode.forEachIndex3 = 0;gdjs.Game_32tableCode.forEachIndex3 < gdjs.Game_32tableCode.GDtableCardObjects2.length;++gdjs.Game_32tableCode.forEachIndex3) {
gdjs.copyArray(runtimeScene.getObjects("displayCard"), gdjs.Game_32tableCode.GDdisplayCardObjects3);
gdjs.Game_32tableCode.GDtableCardObjects3.length = 0;


gdjs.Game_32tableCode.forEachTemporary3 = gdjs.Game_32tableCode.GDtableCardObjects2[gdjs.Game_32tableCode.forEachIndex3];
gdjs.Game_32tableCode.GDtableCardObjects3.push(gdjs.Game_32tableCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)) == (gdjs.RuntimeObject.getVariableString(((gdjs.Game_32tableCode.GDtableCardObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Game_32tableCode.GDtableCardObjects3[0].getVariables()).getFromIndex(0))));
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.Game_32tableCode.GDtableCardObjects3.length ;i < len;++i) {
    gdjs.Game_32tableCode.GDtableCardObjects3[i].setAnimationName(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)));
}
}{for(var i = 0, len = gdjs.Game_32tableCode.GDdisplayCardObjects3.length ;i < len;++i) {
    gdjs.Game_32tableCode.GDdisplayCardObjects3[i].setAnimationName(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)));
}
}}
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)) == "joker";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Button_next"), gdjs.Game_32tableCode.GDButton_95nextObjects1);
/* Reuse gdjs.Game_32tableCode.GDtimerToggleObjects1 */
gdjs.Game_32tableCode.GDjoker_95laughingObjects1.length = 0;

{for(var i = 0, len = gdjs.Game_32tableCode.GDtimerToggleObjects1.length ;i < len;++i) {
    gdjs.Game_32tableCode.GDtimerToggleObjects1[i].SetChecked(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Game_32tableCode.GDButton_95nextObjects1.length ;i < len;++i) {
    gdjs.Game_32tableCode.GDButton_95nextObjects1[i].hide();
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32tableCode.mapOfGDgdjs_46Game_9532tableCode_46GDjoker_9595laughingObjects1Objects, 0, 0, "pop-up");
}{for(var i = 0, len = gdjs.Game_32tableCode.GDjoker_95laughingObjects1.length ;i < len;++i) {
    gdjs.Game_32tableCode.GDjoker_95laughingObjects1[i].play();
}
}
{ //Subevents
gdjs.Game_32tableCode.eventsList19(runtimeScene);} //End of subevents
}

}


};gdjs.Game_32tableCode.eventsList21 = function(runtimeScene) {

};gdjs.Game_32tableCode.mapOfGDgdjs_46Game_9532tableCode_46GDjoker_9595laughingObjects2Objects = Hashtable.newFrom({"joker_laughing": gdjs.Game_32tableCode.GDjoker_95laughingObjects2});
gdjs.Game_32tableCode.asyncCallback13403452 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("joker_laughing"), gdjs.Game_32tableCode.GDjoker_95laughingObjects3);

{for(var i = 0, len = gdjs.Game_32tableCode.GDjoker_95laughingObjects3.length ;i < len;++i) {
    gdjs.Game_32tableCode.GDjoker_95laughingObjects3[i].deleteFromScene(runtimeScene);
}
}}
gdjs.Game_32tableCode.eventsList22 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Game_32tableCode.GDjoker_95laughingObjects2) asyncObjectsList.addObject("joker_laughing", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(6), (runtimeScene) => (gdjs.Game_32tableCode.asyncCallback13403452(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Game_32tableCode.mapOfGDgdjs_46Game_9532tableCode_46GDjoker_9595laughingObjects1Objects = Hashtable.newFrom({"joker_laughing": gdjs.Game_32tableCode.GDjoker_95laughingObjects1});
gdjs.Game_32tableCode.asyncCallback13405020 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("joker_laughing"), gdjs.Game_32tableCode.GDjoker_95laughingObjects2);

{for(var i = 0, len = gdjs.Game_32tableCode.GDjoker_95laughingObjects2.length ;i < len;++i) {
    gdjs.Game_32tableCode.GDjoker_95laughingObjects2[i].deleteFromScene(runtimeScene);
}
}}
gdjs.Game_32tableCode.eventsList23 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Game_32tableCode.GDjoker_95laughingObjects1) asyncObjectsList.addObject("joker_laughing", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(6), (runtimeScene) => (gdjs.Game_32tableCode.asyncCallback13405020(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Game_32tableCode.eventsList24 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("tableCard"), gdjs.Game_32tableCode.GDtableCardObjects2);

for (gdjs.Game_32tableCode.forEachIndex3 = 0;gdjs.Game_32tableCode.forEachIndex3 < gdjs.Game_32tableCode.GDtableCardObjects2.length;++gdjs.Game_32tableCode.forEachIndex3) {
gdjs.copyArray(runtimeScene.getObjects("displayCard"), gdjs.Game_32tableCode.GDdisplayCardObjects3);
gdjs.Game_32tableCode.GDtableCardObjects3.length = 0;


gdjs.Game_32tableCode.forEachTemporary3 = gdjs.Game_32tableCode.GDtableCardObjects2[gdjs.Game_32tableCode.forEachIndex3];
gdjs.Game_32tableCode.GDtableCardObjects3.push(gdjs.Game_32tableCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)) == (gdjs.RuntimeObject.getVariableString(((gdjs.Game_32tableCode.GDtableCardObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Game_32tableCode.GDtableCardObjects3[0].getVariables()).getFromIndex(0))));
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.Game_32tableCode.GDtableCardObjects3.length ;i < len;++i) {
    gdjs.Game_32tableCode.GDtableCardObjects3[i].setAnimationName(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)));
}
}{for(var i = 0, len = gdjs.Game_32tableCode.GDdisplayCardObjects3.length ;i < len;++i) {
    gdjs.Game_32tableCode.GDdisplayCardObjects3[i].setAnimationName(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)));
}
}}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)) == "joker_red";
if (isConditionTrue_0) {
gdjs.Game_32tableCode.GDjoker_95laughingObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32tableCode.mapOfGDgdjs_46Game_9532tableCode_46GDjoker_9595laughingObjects2Objects, 0, 0, "pop-up");
}{for(var i = 0, len = gdjs.Game_32tableCode.GDjoker_95laughingObjects2.length ;i < len;++i) {
    gdjs.Game_32tableCode.GDjoker_95laughingObjects2[i].play();
}
}
{ //Subevents
gdjs.Game_32tableCode.eventsList22(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)) == "joker_black";
if (isConditionTrue_0) {
gdjs.Game_32tableCode.GDjoker_95laughingObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32tableCode.mapOfGDgdjs_46Game_9532tableCode_46GDjoker_9595laughingObjects1Objects, 0, 0, "pop-up");
}{for(var i = 0, len = gdjs.Game_32tableCode.GDjoker_95laughingObjects1.length ;i < len;++i) {
    gdjs.Game_32tableCode.GDjoker_95laughingObjects1[i].play();
}
}
{ //Subevents
gdjs.Game_32tableCode.eventsList23(runtimeScene);} //End of subevents
}

}


};gdjs.Game_32tableCode.eventsList25 = function(runtimeScene) {

{



// While event not generated to prevent an infinite loop.

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__ArrayTools__Shuffle.func(runtimeScene, "cardIndex", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{runtimeScene.getScene().getVariables().getFromIndex(3).setString(gdjs.evtTools.variable.getFirstVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}{gdjs.evtTools.variable.variableRemoveAt(runtimeScene.getScene().getVariables().getFromIndex(0), gdjs.evtTools.variable.getFirstVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
{ //Subevents
gdjs.Game_32tableCode.eventsList24(runtimeScene);} //End of subevents
}

}


};gdjs.Game_32tableCode.eventsList26 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13351268);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TimerSlider"), gdjs.Game_32tableCode.GDTimerSliderObjects1);
gdjs.copyArray(runtimeScene.getObjects("game_start"), gdjs.Game_32tableCode.GDgame_95startObjects1);
gdjs.copyArray(runtimeScene.getObjects("tableBackground"), gdjs.Game_32tableCode.GDtableBackgroundObjects1);
{for(var i = 0, len = gdjs.Game_32tableCode.GDtableBackgroundObjects1.length ;i < len;++i) {
    gdjs.Game_32tableCode.GDtableBackgroundObjects1[i].setAnimationName("greenBlur");
}
}{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber((( gdjs.Game_32tableCode.GDTimerSliderObjects1.length === 0 ) ? 0 :gdjs.Game_32tableCode.GDTimerSliderObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}{for(var i = 0, len = gdjs.Game_32tableCode.GDgame_95startObjects1.length ;i < len;++i) {
    gdjs.Game_32tableCode.GDgame_95startObjects1[i].getBehavior("Tween").pauseTween("fadeout");
}
}
{ //Subevents
gdjs.Game_32tableCode.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32tableCode.eventsList12(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("button_EXIT"), gdjs.Game_32tableCode.GDbutton_95EXITObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32tableCode.GDbutton_95EXITObjects1.length;i<l;++i) {
    if ( gdjs.Game_32tableCode.GDbutton_95EXITObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32tableCode.GDbutton_95EXITObjects1[k] = gdjs.Game_32tableCode.GDbutton_95EXITObjects1[i];
        ++k;
    }
}
gdjs.Game_32tableCode.GDbutton_95EXITObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main menu", false);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(0)) <= 42;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(1), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13372588);
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32tableCode.eventsList13(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("button_NEXT"), gdjs.Game_32tableCode.GDbutton_95NEXTObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32tableCode.mapOfGDgdjs_46Game_9532tableCode_46GDbutton_9595NEXTObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13377060);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__ArrayTools__Shuffle.func(runtimeScene, "cardIndex", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{runtimeScene.getScene().getVariables().getFromIndex(3).setString(gdjs.evtTools.variable.getFirstVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}{gdjs.evtTools.variable.variableRemoveAt(runtimeScene.getScene().getVariables().getFromIndex(0), gdjs.evtTools.variable.getFirstVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
{ //Subevents
gdjs.Game_32tableCode.eventsList16(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("timerDisplay"), gdjs.Game_32tableCode.GDtimerDisplayObjects1);
{for(var i = 0, len = gdjs.Game_32tableCode.GDtimerDisplayObjects1.length ;i < len;++i) {
    gdjs.Game_32tableCode.GDtimerDisplayObjects1[i].setBBText("SECONDS: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TimerSlider"), gdjs.Game_32tableCode.GDTimerSliderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32tableCode.GDTimerSliderObjects1.length;i<l;++i) {
    if ( gdjs.Game_32tableCode.GDTimerSliderObjects1[i].IsBeingDragged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32tableCode.GDTimerSliderObjects1[k] = gdjs.Game_32tableCode.GDTimerSliderObjects1[i];
        ++k;
    }
}
gdjs.Game_32tableCode.GDTimerSliderObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32tableCode.GDTimerSliderObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber((( gdjs.Game_32tableCode.GDTimerSliderObjects1.length === 0 ) ? 0 :gdjs.Game_32tableCode.GDTimerSliderObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}}

}


{


gdjs.Game_32tableCode.eventsList17(runtimeScene);
}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("timerToggle"), gdjs.Game_32tableCode.GDtimerToggleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32tableCode.GDtimerToggleObjects1.length;i<l;++i) {
    if ( gdjs.Game_32tableCode.GDtimerToggleObjects1[i].getVariableBoolean(gdjs.Game_32tableCode.GDtimerToggleObjects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32tableCode.GDtimerToggleObjects1[k] = gdjs.Game_32tableCode.GDtimerToggleObjects1[i];
        ++k;
    }
}
gdjs.Game_32tableCode.GDtimerToggleObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TimerSlider"), gdjs.Game_32tableCode.GDTimerSliderObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber((( gdjs.Game_32tableCode.GDTimerSliderObjects1.length === 0 ) ? 0 :gdjs.Game_32tableCode.GDTimerSliderObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "intervalClock");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("timerToggle"), gdjs.Game_32tableCode.GDtimerToggleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32tableCode.GDtimerToggleObjects1.length;i<l;++i) {
    if ( gdjs.Game_32tableCode.GDtimerToggleObjects1[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32tableCode.GDtimerToggleObjects1[k] = gdjs.Game_32tableCode.GDtimerToggleObjects1[i];
        ++k;
    }
}
gdjs.Game_32tableCode.GDtimerToggleObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13388908);
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__ArrayTools__Shuffle.func(runtimeScene, "cardIndex", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{runtimeScene.getScene().getVariables().getFromIndex(3).setString(gdjs.evtTools.variable.getFirstVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}{gdjs.evtTools.variable.variableRemoveAt(runtimeScene.getScene().getVariables().getFromIndex(0), gdjs.evtTools.variable.getFirstVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
{ //Subevents
gdjs.Game_32tableCode.eventsList20(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "intervalClock") > 1;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).sub(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "intervalClock");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4)) < 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TimerSlider"), gdjs.Game_32tableCode.GDTimerSliderObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber((( gdjs.Game_32tableCode.GDTimerSliderObjects1.length === 0 ) ? 0 :gdjs.Game_32tableCode.GDTimerSliderObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
{ //Subevents
gdjs.Game_32tableCode.eventsList25(runtimeScene);} //End of subevents
}

}


};

gdjs.Game_32tableCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32tableCode.GDtableBackgroundObjects1.length = 0;
gdjs.Game_32tableCode.GDtableBackgroundObjects2.length = 0;
gdjs.Game_32tableCode.GDtableBackgroundObjects3.length = 0;
gdjs.Game_32tableCode.GDtableBackgroundObjects4.length = 0;
gdjs.Game_32tableCode.GDButton_95nextObjects1.length = 0;
gdjs.Game_32tableCode.GDButton_95nextObjects2.length = 0;
gdjs.Game_32tableCode.GDButton_95nextObjects3.length = 0;
gdjs.Game_32tableCode.GDButton_95nextObjects4.length = 0;
gdjs.Game_32tableCode.GDdisplayCardObjects1.length = 0;
gdjs.Game_32tableCode.GDdisplayCardObjects2.length = 0;
gdjs.Game_32tableCode.GDdisplayCardObjects3.length = 0;
gdjs.Game_32tableCode.GDdisplayCardObjects4.length = 0;
gdjs.Game_32tableCode.GDtableCardObjects1.length = 0;
gdjs.Game_32tableCode.GDtableCardObjects2.length = 0;
gdjs.Game_32tableCode.GDtableCardObjects3.length = 0;
gdjs.Game_32tableCode.GDtableCardObjects4.length = 0;
gdjs.Game_32tableCode.GDTimerSliderObjects1.length = 0;
gdjs.Game_32tableCode.GDTimerSliderObjects2.length = 0;
gdjs.Game_32tableCode.GDTimerSliderObjects3.length = 0;
gdjs.Game_32tableCode.GDTimerSliderObjects4.length = 0;
gdjs.Game_32tableCode.GDJoker_95alertObjects1.length = 0;
gdjs.Game_32tableCode.GDJoker_95alertObjects2.length = 0;
gdjs.Game_32tableCode.GDJoker_95alertObjects3.length = 0;
gdjs.Game_32tableCode.GDJoker_95alertObjects4.length = 0;
gdjs.Game_32tableCode.GDgame_95startObjects1.length = 0;
gdjs.Game_32tableCode.GDgame_95startObjects2.length = 0;
gdjs.Game_32tableCode.GDgame_95startObjects3.length = 0;
gdjs.Game_32tableCode.GDgame_95startObjects4.length = 0;
gdjs.Game_32tableCode.GDjoker_95laughingObjects1.length = 0;
gdjs.Game_32tableCode.GDjoker_95laughingObjects2.length = 0;
gdjs.Game_32tableCode.GDjoker_95laughingObjects3.length = 0;
gdjs.Game_32tableCode.GDjoker_95laughingObjects4.length = 0;
gdjs.Game_32tableCode.GDdisplayCardBackgroundObjects1.length = 0;
gdjs.Game_32tableCode.GDdisplayCardBackgroundObjects2.length = 0;
gdjs.Game_32tableCode.GDdisplayCardBackgroundObjects3.length = 0;
gdjs.Game_32tableCode.GDdisplayCardBackgroundObjects4.length = 0;
gdjs.Game_32tableCode.GDwhiteRectangleCurvedObjects1.length = 0;
gdjs.Game_32tableCode.GDwhiteRectangleCurvedObjects2.length = 0;
gdjs.Game_32tableCode.GDwhiteRectangleCurvedObjects3.length = 0;
gdjs.Game_32tableCode.GDwhiteRectangleCurvedObjects4.length = 0;
gdjs.Game_32tableCode.GDcurrentDrawObjects1.length = 0;
gdjs.Game_32tableCode.GDcurrentDrawObjects2.length = 0;
gdjs.Game_32tableCode.GDcurrentDrawObjects3.length = 0;
gdjs.Game_32tableCode.GDcurrentDrawObjects4.length = 0;
gdjs.Game_32tableCode.GDtimerDisplayObjects1.length = 0;
gdjs.Game_32tableCode.GDtimerDisplayObjects2.length = 0;
gdjs.Game_32tableCode.GDtimerDisplayObjects3.length = 0;
gdjs.Game_32tableCode.GDtimerDisplayObjects4.length = 0;
gdjs.Game_32tableCode.GDtimerTitleObjects1.length = 0;
gdjs.Game_32tableCode.GDtimerTitleObjects2.length = 0;
gdjs.Game_32tableCode.GDtimerTitleObjects3.length = 0;
gdjs.Game_32tableCode.GDtimerTitleObjects4.length = 0;
gdjs.Game_32tableCode.GDsecondsIntervalDisplayObjects1.length = 0;
gdjs.Game_32tableCode.GDsecondsIntervalDisplayObjects2.length = 0;
gdjs.Game_32tableCode.GDsecondsIntervalDisplayObjects3.length = 0;
gdjs.Game_32tableCode.GDsecondsIntervalDisplayObjects4.length = 0;
gdjs.Game_32tableCode.GDhalf_95rectangle_95shapeObjects1.length = 0;
gdjs.Game_32tableCode.GDhalf_95rectangle_95shapeObjects2.length = 0;
gdjs.Game_32tableCode.GDhalf_95rectangle_95shapeObjects3.length = 0;
gdjs.Game_32tableCode.GDhalf_95rectangle_95shapeObjects4.length = 0;
gdjs.Game_32tableCode.GDtimerToggleObjects1.length = 0;
gdjs.Game_32tableCode.GDtimerToggleObjects2.length = 0;
gdjs.Game_32tableCode.GDtimerToggleObjects3.length = 0;
gdjs.Game_32tableCode.GDtimerToggleObjects4.length = 0;
gdjs.Game_32tableCode.GDTimerObjects1.length = 0;
gdjs.Game_32tableCode.GDTimerObjects2.length = 0;
gdjs.Game_32tableCode.GDTimerObjects3.length = 0;
gdjs.Game_32tableCode.GDTimerObjects4.length = 0;
gdjs.Game_32tableCode.GDbutton_95EXITObjects1.length = 0;
gdjs.Game_32tableCode.GDbutton_95EXITObjects2.length = 0;
gdjs.Game_32tableCode.GDbutton_95EXITObjects3.length = 0;
gdjs.Game_32tableCode.GDbutton_95EXITObjects4.length = 0;
gdjs.Game_32tableCode.GDbutton_95NEXTObjects1.length = 0;
gdjs.Game_32tableCode.GDbutton_95NEXTObjects2.length = 0;
gdjs.Game_32tableCode.GDbutton_95NEXTObjects3.length = 0;
gdjs.Game_32tableCode.GDbutton_95NEXTObjects4.length = 0;

gdjs.Game_32tableCode.eventsList26(runtimeScene);

return;

}

gdjs['Game_32tableCode'] = gdjs.Game_32tableCode;
