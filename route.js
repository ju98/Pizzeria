var controller=require('./controller.js');


const route=require('express').Router();
	route.get('/menu', function(req, res) {
		res.setHeader('Content-Type', 'text/plain');
		res.send("Voici le menu de la pizzeria : "+ controller.afficherDailyMenu());
	});
module.exports=route;
