var controller=require('./controller.js');


const route=require('express').Router();

	route.get('/polypizz', function(req, res) {
		res.setHeader('Content-Type', 'text/plain');
		res.send("Bienvenue dans notre pizzeria Poly'pizz ! ");
	});

	route.get('/polypizz/menu', function(req, res) {
		res.setHeader('Content-Type', 'text/plain');
		res.send("Voici le menu de la pizzeria : "+ controller.afficherDailyMenu());
	});

module.exports=route;