
if (typeof gdjs.evtsExt__ExtendedVariables__ModifyGlobalVariable !== "undefined") {
  gdjs.evtsExt__ExtendedVariables__ModifyGlobalVariable.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ExtendedVariables__ModifyGlobalVariable = {};


gdjs.evtsExt__ExtendedVariables__ModifyGlobalVariable.userFunc0x8a7a40 = function(runtimeScene, eventsFunctionContext) {
"use strict";
const variable = runtimeScene.getGame().getVariables().get(eventsFunctionContext.getArgument("GlobalVariableName"));
variable.setNumber(eventsFunctionContext.getArgument("GlobalVariableValue"));
};
gdjs.evtsExt__ExtendedVariables__ModifyGlobalVariable.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ExtendedVariables__ModifyGlobalVariable.userFunc0x8a7a40(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ExtendedVariables__ModifyGlobalVariable.func = function(runtimeScene, GlobalVariableName, GlobalVariableValue, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "GlobalVariableName") return GlobalVariableName;
if (argName === "GlobalVariableValue") return GlobalVariableValue;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ExtendedVariables__ModifyGlobalVariable.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__ExtendedVariables__ModifyGlobalVariable.registeredGdjsCallbacks = [];