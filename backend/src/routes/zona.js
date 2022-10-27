const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const eschema = mongoose.Schema;

const eschemaZona = new eschema({
  nombrezona: String,
  cpostal: String, 
  idzona: String,
});

const ModelZona = mongoose.model("zona", eschemaZona);

module.exports = router;

// INSERTAR ZONA
router.post("/agregarZona", (req, res) => {
  const nuevoZona = new ModelZona({
    nombrezona: req.body.nombrezona,
    cpostal: req.body.cpostal,
    idzona: req.body.idzona,
  });
  nuevaZona.save((err) => {
    if (!err) {
      res.send("Zona agregada");
    } else {
      res.send("Error" + err);
    }
  });
});

// LISTAR TODAS LAS ZONAS
router.get("/listarZonas", (req, res) => {
  ModelZona.find().then((docs) => {
    res.json(docs);
  });
  
});

// OBTENER ZONA
router.post("/obtenerZona", (req, res) => {
  ModelZona.find({ idzona: req.body.idzona })
    .then((docs) => {
      res.json(docs);
    })
    .catch((err) => {
      console.log(err);
    });
});


// DELETE
router.post("/deleteZona", (req, res) => {
  ModelZona.findOneAndDelete({ idzona: req.body.idzona }).then((ZONA, err) => {
    if (err) res.json(err);
    else res.json("Zona " + ZONA + " Eliminada");
  });
});
