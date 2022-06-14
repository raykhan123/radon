

const mid1= function ( req, res, next) {
    let isFreeAppUser =req.headers.token
    console.log(isFreeAppUser);
    if(isFreeAppUser) {
        next()
    }else{res.send({msg: "request is missing a mandatory header"})}

    }

     
    module.exports.mid1= mid1
