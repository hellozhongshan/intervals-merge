!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):r.IntervalsMerge=e()}(this,function(){"use strict";return console.log("打包模式"),{version:"0.0.2",merge:function(){return function(r){r.sort(function(r,e){return r.min!==e.min?r.min-e.min:r.max===e.max?"]"===r.rightOperator&&")"===e.rightOperator:r.max-e.max});for(var e=r.length,t=[],i=void 0,o=void 0,n=void 0,a=void 0,p=0;p<e;p++){var f=r[p],m=f.min,u=f.max;if(void 0===n)n=m,a=u,i=f.leftOperator,o=f.rightOperator;else if(m===a&&(")"!==o||"("!==f.leftOperator)||m<a)u===a?(o="]"===f.rightOperator&&")"===o?"]":")"===f.rightOperator&&"]"===o?"]":o,a=a):a<u?(a=u,o=f.rightOperator):a=a;else{var g={min:n,max:a,leftOperator:i,rightOperator:o};t.push(g),n=m,a=u,i=f.leftOperator,o=f.rightOperator}}if(void 0!==n){var l={min:n,max:a,leftOperator:i,rightOperator:o};t.push(l)}return t}((0<arguments.length&&void 0!==arguments[0]?arguments[0]:[]).map(function(r){return e=r,t=String(e).slice(1,-1).replace(/∞/g,"Infinity").split(/(?:,|，)/g),{min:Number(t[0]),max:Number(t[1]),leftOperator:e.substring(0,1),rightOperator:e.charAt(e.length-1)};var e,t}))}}});
//# sourceMappingURL=intervals-merge.js.map