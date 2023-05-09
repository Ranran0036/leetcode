function checkIfInstanceOf(obj: any, classFunction: any): boolean {
    if (obj === null || obj === undefined || classFunction == null || classFunction == undefined) return false;
    while ((obj = obj.__proto__) && obj !== classFunction.prototype);
    return obj === classFunction.prototype;
}

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */
