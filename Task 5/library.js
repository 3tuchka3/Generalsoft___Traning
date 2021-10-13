var Library = (function(){

    return{
        isArray: obj => Array.isArray(obj),
        isDate: obj => obj instanceof Date,
        isBoolean: obj => typeof obj === 'boolean',
        isNumber: obj => typeof obj === 'number',
        isString: obj => typeof obj === 'string',
        isFunction: obj => typeof obj === 'function',
        isUndefined: obj => typeof obj === 'undefined',
        isNull: obj => typeof obj === 'object',
        isNaN: obj => Object.is(obj, NaN),
        deepEqual: (firstObj, secondObj) => {
            if (firstObj !== 0 && secondObj !==  0){
                const ObjOne = Object.firstObj;
                const Objtwo = Object.secondObj;
            }
        }

    }


})();