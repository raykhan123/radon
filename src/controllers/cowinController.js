let axios = require("axios")
let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getDistrictsByIdDate = async function (req, res) {
    try {
        let district = req.query.districtId
        let date = req.query.date
        console.log(district,date);
        // console.log(`query params are: ${district} ${date}`)
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getWhether = async function (req, res) {
    try {
        let place = req.query.q
        let id = req.query.appid
      
        // console.log(`query params are: ${district} ${date}`)
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${id}`
        }
        let result = await axios(options)
        // console.log(result.data)
        let data = result.data
        let temp = data.main.temp
        res.status(200).send({ place:place,temp:temp})
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getSortedCity = async function (req, res) {
    try {
       let city = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"] 
       let cityObjArreay=[]
       for (i=0;i<city.length;i++){
        let obj = {city:city[i]}
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city[i]}&appid=b71a963777cea8790f4b28a45b4d3fe4`
        }
        let result = await axios(options) 
        let data = result.data
        let temperature = data.main.temp
        obj.temp= temperature
        cityObjArreay.push(obj)
       }
        let sorted = cityObjArreay.sort(function(a,b) {return a.temp - b.temp})
        res.status(200).send({ status:true, data: sorted})
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getAllMemes = async function (req, res) {
    try {
        let options = {
            method: "get",
            url: `https://api.imgflip.com/get_memes`
        }
        let result = await axios(options)
        // console.log(result.data)
        let data = result.data
        res.status(200).send({ data:data})
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getMemes = async function (req, res) {
    try {
        let id = req.query.template_id
        let text = req.query.text0
        let textop = req.query.text1
        let options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${id}&text0=${text}&text1=${textop}&username=chewie12345&password=meme@123`
        }
        let result = await axios(options)
        let data = result.data
        res.status(200).send({ data:data})
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getDistrictsByIdDate = getDistrictsByIdDate
module.exports.getWhether = getWhether
module.exports.getSortedCity = getSortedCity
module.exports.getAllMemes = getAllMemes
module.exports.getMemes = getMemes