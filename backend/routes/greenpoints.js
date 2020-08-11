const router = require('express').Router();
let GreenPoint = require('../models/greenpoint.model');

router.route('/').get((req,res) => {
    GreenPoint.find()
    .then(greenpoint => res.json(greenpoint))
    .catch(err => res.status(400).json('Error: '+err));
});

router.route('/add').post((req,res)=> {
    const pointname = req.body.pointname;
    const pointID = Number(req.body.pointID);
    const date = Date.parse(req.body.date); 
    const location = req.body.location; 
    const containers = req.body.containers; 
    const weight = req.body.weight; 

    const newGreenPoint = new GreenPoint({
        pointname,
        pointID,
        date,
        location,
        containers,
        weight,
    });

    newGreenPoint.save()
    .then(() => res.json('Green Point added!'))
    .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/:id').get((req,res)=> {
    GreenPoint.findById(req.params.id)
    .then(greenpoint => res.json(greenpoint))
    .catch(err=> res.status(400).json('Error: '+err));
});

router.route('/:id').delete((req,res)=> {
    GreenPoint.findByIdAndDelete(req.params.id)
    .then(() => res.json('Green Point deleted!!'))
    .catch(err => res.status(400).json('Error: '+err));
});


router.route('/update/:id').post((req,res)=>{
GreenPoint.findById(req.params.id)
.then(greenpoint => {
    greenpoint.pointname = req.body.pointname;
    greenpoint.pointID = Number(req.body.pointID);
    greenpoint.date = Date.parse(req.body.date); 
    greenpoint.location = req.body.location; 
    greenpoint.containers = req.body.containers; 
    greenpoint.weight = req.body.weight; 

    greenpoint.save()
        .then(() => res.json('Green point updated!!'))
        .catch(err => res.status(400).json('Error: '+ err));
    })
.catch(err => res.status(400).json('Error: '+ err)); 

});




module.exports = router;