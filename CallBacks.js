

function oneFun(x) {
    console.log(x);
};

// console.log(oneFun("hello"));

function mainFunction(var1, call) {

 call(var1)

}

mainFunction("Hello this is a callback", oneFun)
