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
            if (firstObj !== null && secondObj !== null) {
                const props1 = Object.getOwnPropertyNames(firstObj);
                const props2 = Object.getOwnPropertyNames(secondObj);

                if (props1.length !== props2.length) {
                    return false;
                }

                for (let i = 0; i < props1.length; i++ ) {
                    let prop = props1[i];

                    if (firstObj[prop] !== secondObj[prop]) {
                        return false;
                    }
                }

                return true;
            } else {
                return false
            }
        },

    }


})();