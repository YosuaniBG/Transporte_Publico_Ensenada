const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const eschema = mongoose.Schema;

const eschemaRutas = new eschema({
  origen: String,
  destino: String,
  kilometros: String,
  coordenadaXOrigen: String,
  coordenadaYOrigen: String,
  coordenadaXDestino: String,
  coordenadaYDestino: String,
  idruta: String,
});

const ModelRutas = mongoose.model("rutasensenada", eschemaRutas);

module.exports = router;

// INSERTAR USUARIO
router.post("/agregarRuta", (req, res) => {
  const nuevaRuta = new ModelRutas({
    origen: req.body.origen,
    destino: req.body.destino,
    kilometros: req.body.kilometros,
    coordenadaXOrigen: req.body.coordenadaXOrigen,
    coordenadaYOrigen: req.body.coordenadaYOrigen,
    coordenadaXDestino: req.body.coordenadaXDestino,
    coordenadaYDestino: req.body.coordenadaYDestino,
    idruta: req.body.idruta,
  });
  nuevaRuta.save((err) => {
    if (!err) {
      res.send("Ruta agregada correctamente");
    } else {
      res.send("Error" + err);
    }
  });
});

// LISTAR TODAS LAS RUTAS
router.get("/listarRutas", (req, res) => {
  ModelRutas.find().then((docs) => {
    res.json(docs);
  });
});

//#Edit and Update

// OBTENER RUTAS
router.post("/obtenerRuta", (req, res) => {
  ModelRutas.find({ idruta: req.body.idruta })
    .then((docs) => {
      res.json(docs);
    })
    .catch((err) => {
      console.log(err);
    });
});

// PARA ACTUALIZAR LAS RUTAS
router.post("/editarRuta", (req, res) => {
  ModelRutas.findOneAndUpdate(
    { idruta: req.body.idruta },
    {
    origen: req.body.origen,
    destino: req.body.destino,
    kilometros: req.body.kilometros,
    coordenadaXOrigen: req.body.coordenadaXOrigen,
    coordenadaYOrigen: req.body.coordenadaYOrigen,
    coordenadaXDestino: req.body.coordenadaXDestino,
    coordenadaYDestino: req.body.coordenadaYDestino,
    idruta: req.body.idruta,
    }
  )
    .then(() => {
      res.json("Ruta Actualizada");
    })
    .catch((err) => {
      res.status(400).send("No fue posible actualizar la Ruta" + err);
    });

});

// Para eliminar Ruta
router.post("/eliminarRuta", (req, res) => {
  ModelRutas.findOneAndDelete({ idruta: req.body.idruta }).then(
    (Ruta,err) => {
      if (err) res.json(err);
      else res.json("Ruta " + Ruta + " Eliminada");
    }
  );
});
