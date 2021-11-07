const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
  res.json([
    {
      "planeta":"mercurio",
      "masa":"xxxxx"
    },
    {
      "planeta":"venus",
      "masa":"xxxxx"
    },
    {
      "planeta":"mercurio",
      "masa":"xxxxx"
    },
    {
      "planeta":"tierra",
      "masa":"xxxxx"
    },
    {
      "planeta":"marte",
      "masa":"xxxxx"
    }
  ]);
});

module.exports = router;
