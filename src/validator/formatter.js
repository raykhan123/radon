let a = function(){
    let b = "my name is danish"
    console.log(b.toUpperCase());
}

let c = function(){
    let d = "MY NAME IS DANISH"
    console.log(d.toLowerCase());
}

let trim = function(){
    let e = "   FunctionUp    "
    console.log(e.trim());
}


module.exports.batch = a
module.exports.low = c
module.exports.trim = trim