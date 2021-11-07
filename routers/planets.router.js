const express = require('express');
const fetchData = require('../utils/fetchData');

const API = 'https://api.le-systeme-solaire.net/rest/bodies?filter[]=englishName,eq,'
const DATA = '&data=gravity,density,moons,rel,vol,volValue,volExponent,meanRadius,mass,massValue,massExponent'

const router = express.Router();

router.get('/',async (req,res)=>{
  await fetchData(API)
  .then(data=>{
    res.json(data.bodies);
  })
});

router.get('/:id',async (req,res)=>{
  try {
    const { id } = req.params;
  await fetchData(API+id+DATA)
  .then(data=>{
    res.json(data);
  })
  } catch (error) {
    console.log(error.message)
    res.json(error.message)
  }
});

module.exports = router;
