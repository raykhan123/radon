const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')
const lodash = require('lodash')

const router = express.Router();

// router.get('/test-me', function (req, res) {
//     myHelper.printDate()
//     myHelper.getCurrentMonth()
//     myHelper.getCohortData()
//     let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
//     console.log('The first element received from underscope function is '+firstElement)
//     res.send('My first ever api!')
// });

router.get('/hello', function (req, res) {
    let arr = ["januarry", "february","march", "april", "may", "june","july","august","september","october","november","december"]
     console.log(lodash.chunk(arr,4)); 


     let array = [1,3,5,7,9,11,13,15,17,19]
     let newArray = lodash.tail(array)
 
      console.log(newArray); 

     let arr1 = [1,2,3,2,4,1,3]
     let arr2 = [1,2,3,2,9,9,1,3]
     let arr3 = [7,2,7,8,8,2,3,3]
     let arr4 = [1,2,3,8,7,8,9,3]
     let arr5 =[5,4,5,6,2,4,6,2]
     let uniqueArray = lodash.union(arr1,arr2,arr3,arr4,arr5)
     console.log(uniqueArray);

    let movie1 = ["horror","the shining"]
    let movie2 = ["Drama","Titanic"]
    let movie3 = ["thriller","shutter Island"]
    let movie4 = ["fantasy","pans labyrinth"]
    let moviesDetails = lodash.fromPairs([movie1,movie2,movie3,movie4])
     console.log(moviesDetails);

    res.send('Hello there!')

});





// router.get('/candidates', function(req, res){
//     console.log('Query paramters for this request are '+JSON.stringify(req.query))
//     let gender = req.query.gender
//     let state = req.query.state
//     let district = req.query.district
//     console.log('State is '+state)
//     console.log('Gender is '+gender)
//     console.log('District is '+district)
//     let candidates = ['Akash','Suman']
//     res.send(candidates)
// })

// router.get('/candidates/:canidatesName', function(req, res){
//     console.log('The request objects is '+ JSON.stringify(req.params))
//     console.log('Candidates name is '+req.params.canidatesName)
//     res.send('Done')
// })


module.exports = router;
// adding this comment for no reason