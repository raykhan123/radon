const printDate = function(){
    console.log("Today is 01/06/22");
}

const printMonth = function(){
    console.log("This is the month of june");
}

const getBatchInfo = function(){
    console.log("Radon,W3D3, The topic for today is nodejs_module");
}

module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo
