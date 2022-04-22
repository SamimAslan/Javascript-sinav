import express from 'express';
var router = express.Router();
import * as service from '../service/movie-service.js'

/*  film listesini alma (GET). */
router.get('/', function(req, res) {
  const tumFilmler = service.tumFilmleriAl();
  res.send(tumFilmler);
});

// Filmi id sine göre alma (GET)
router.get('/:id', function(req, res) {
  let filmIdsi = req.params.id;
  const film = service.idsineGoreFilmAl(filmIdsi)
  res.send(film);
});


// yeni film ekle

router.post('/', function(req, res){
  let yeniFilm = req.body;
  const film= service.filmOlustur(yeniFilm)
  res.send(film)
})

// filmi sil

router.delete('/:id', function(req, res){
  let filmIdsi = req.params.id
  service.filmiSil(filmIdsi)
  res.send(`${filmIdsi} id li film silindi.`)
})

router.put('/:id', function(req, res){
  let filmIdsi = req.params.id;
  let yenilenmisFilm = req.body;
  let yeniFilm = service.filmiYenile(filmIdsi,yenilenmisFilm)
  res.send(yeniFilm)
})

export default router;