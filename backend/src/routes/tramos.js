const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const eschema = mongoose.Schema;

const eschemaTramos = new eschema({
  coordenadaX: String,
  coordenadaY: String,
  nombretramo: String,
  idtramo: String,
});

const ModelTramos = mongoose.model("tramos", eschemaTramos);

module.exports = router;

// INSERTAR Tramo
router.post("/agregarTramo", (req, res) => {
  const nuevoTramo = new ModelTramos({
    coordenadaX: req.body.coordenadaX,
    coordenadaY: req.body.coordenadaY,
    nombretramo: req.body.nombretramo,
    idtramo: req.body.idtramo,
  });
  nuevoTramo.save((err) => {
    if (!err) {
      res.send("Tramo agregado");
    } else {
      res.send("Error" + err);
    }
  });
});

// LISTAR TODOS LOS TRAMOS
router.get("/listarTramos", (req, res) => {
  ModelTramos.find().then((docs) => {
    res.json(docs);
  });
});

//#Edit and Update

// OBTENER Tramos
router.post("/obtenerTramo", (req, res) => {
  ModelTramos.find({ idtramo: req.body.idtramo })
    .then((docs) => {
      res.json(docs);
    })
    .catch((err) => {
      console.log(err);
    });
});

// PARA ACTUALIZAR LoS TRAMOS
router.post("/editarTramo", (req, res) => {
  ModelTramos.findOneAndUpdate(
    { idtramo: req.body.idtramo },
    {
        coordenadaX: req.body.coordenadaX,
        coordenadaY: req.body.coordenadaY,
        nombretramo: req.body.nombretramo,
        idtramo: req.body.idtramo,
    }
  )
    .then(() => {
      res.json("Tramo Actualizado");
    })
    .catch((err) => {
      res.status(400).send("No fue posible actualizar el Tramo" + err);
    });

});

// Para eliminar Tramo
router.post("/eliminarTramo", (req, res) => {
  ModelTramos.findOneAndDelete({ idtramo: req.body.idtramo }).then(
    (Tramo,err) => {
      if (err) res.json(err);
      else res.json("Tramo " + Tramo + " Eliminado");
    }
  );
});