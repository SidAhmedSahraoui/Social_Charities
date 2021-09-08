const router = require('express').Router();
let Sous_chapitre = require('../models/Sous_chapitre.model');


//get all
router.route('/').get((req, res)=>{
    Sous_chapitre.find()
    .then(sous_chapitres => res.json(sous_chapitres))
    .catch(err => res.status(400).json('Error:' + err));
});

//post one
router.route('/add').post((req, res)=>{
    
    const description = req.body.description;
    const titre = req.body.titre;
    const chapitre = req.body.chapitre;
  

    const newSousChapitre = new Sous_chapitre({
                        titre,
                        description,
                        chapitre
                    });

    newSousChapitre.save()
    .then(()=>res.json('Sous-chapitre ajouté!'))
    .catch(err => res.status(400).json('Error:' + err));
    });

//get one
router.route('/:id').get((req, res)=>{
    Sous_chapitre.findById(req.params.id)
        .then(sous_chapitres => res.json(sous_chapitres))
        .catch(err => res.status(400).json('Error:' + err));
});

//delete one
router.route('/:id').delete((req, res)=> {
    Sous_chapitre.findByIdAndDelete(req.params.id)
        .then(()=> res.json("Sous-chapitre supprimé"))
        .catch(err => res.status(400).json('Error:' + err));
});

//update one
router.route('/update/:id').post((req, res)=>{
    Sous_chapitre.findById(req.params.id)
        .then(sous_chapitre => {
            if(req.body.titre != null) sous_chapitre.titre = req.body.titre;
            if(req.body.description != null) sous_chapitre.description = req.body.description;
            if(req.body.chapitre != null) sous_chapitre.chapitre = req.body.chapitre;

            sous_chapitre.save()
                .then(() => res.json("Sous-chapitre modifié."))
                .catch(err => res.status(400).json("Error:" + err));
        })
        .catch(err => res.status(400).json("Error:" + err));
});


module.exports = router;
