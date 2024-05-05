"use strict";
{
    //
    // Type Assertion
    let anything;
    anything = "name";
    anything = 55;
    anything;
    const kgToGm = (value) => {
        if (typeof value === "string") {
            const convertedValue = parseFloat(value) * 1000;
            return `The converted  value is ${convertedValue}`;
        }
        else if (typeof value === "number") {
            return value * 1000;
        }
    };
    const result1 = kgToGm(5);
    const result2 = kgToGm("100");
    console.log(result2);
    //
}
