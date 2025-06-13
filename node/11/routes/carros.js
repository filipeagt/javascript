const express = require('express');
const router = express.Router();

//carros/fiat/uno
router.get('/', (req,res)=>{
    res.send('<h1>Rota Carros</h1>');
});

router.get('/:marca', (req,res)=>{
    //res.send(req.params);
    const marcas = ['fiat', 'volks','bmw'];
    if(marcas.includes(req.params.marca)){
        res.send(`A Rota é ${req.params.marca}`);
    } else {
        res.status(404).send('<h1>MARCA NÃO ENCONTRADA</h1>');
    }
    
});

router.get('/:marca/:modelo', (req,res)=>{
    res.send(req.params);
});

// router.get('/fiat', (req,res)=>{
//     res.send('<h1>Rota Fiat</h1>');
// });

// router.get('/fiat/uno', (req,res)=>{
//     res.send('<h1>Rota Uno</h1>');
// });

module.exports = router;