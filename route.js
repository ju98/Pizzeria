var controller=require('./controller.js');

const route=require('express').Router();
/*
	route.get('/polypizz', function(req, res) {
		res.setHeader('Content-Type', 'text/plain');
		res.send("Bienvenue dans notre pizzeria Poly'pizz ! ");
	});
*/
	route.get('/polypizz/menu', function(req, res) {
		res.setHeader('Content-Type', 'text/plain');
		res.send("Voici le menu du jour de la pizzeria : "+ controller.afficherDailyMenu());
	});


	route.get('/polypizz/api/create',(req,res)=>{
		res.send(controller.apiCreateForm());
	});

	route.post('/polypizz/api/create',(req,res)=>{
		controller.apiCreateSave(req.body.key, req.body.name, req.body.ingredients, req.body.category, req.body.price);
		res.send('CREATE : Variable initialized at '+req.body.name+'.');
	});
	
	route.get('/polypizz/api/read/:id',(req,res)=>{
		res.send('READ : Value equals '+controller.apiRead(req.params.id)+'.');
	});
	
	route.get('/polypizz/api/update',(req,res)=>{
		res.send('UPDATE : Variable incremented.');
	});
	
	route.get('/polypizz/api/delete',(req,res)=>{
		res.send('DELETE : Variable reduces to 0.');
	});
	
	route.get('/polypizz',(req,res)=>{
		res.send("Express response. Bienvenue dans notre pizzeria Poly'pizz !");
	});

module.exports=route;