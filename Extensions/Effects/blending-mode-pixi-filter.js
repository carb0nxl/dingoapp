var gdjs;(function(l){const i=GlobalPIXIModule.PIXI;l.PixiFiltersTools.registerFilterCreator("BlendingMode",new class extends l.PixiFiltersTools.PixiFilterCreator{makePIXIFilter(t,e){return new i.filters.AlphaFilter}updatePreRender(t,e){}updateDoubleParameter(t,e,r){const a=t;e==="alpha"?a.alpha=r:e==="blendmode"&&(a.blendMode=r)}updateStringParameter(t,e,r){}updateBooleanParameter(t,e,r){}})})(gdjs||(gdjs={}));
//# sourceMappingURL=blending-mode-pixi-filter.js.map