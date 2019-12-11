var controller=require('./controller.js');

const route=require('express').Router();
	
	//CREATE
	route.get('/polypizz/api/create',(req,res)=>{
		res.send(controller.apiCreateForm());
	});

	route.post('/polypizz/api/create',(req,res)=>{
		controller.apiCreateSave(req.body.key, req.body.name, req.body.ingredients, req.body.category, req.body.price);
		res.send('CREATE : Variable initialized at '+req.body.name+'.');
	});
	
	//READ
	route.get('/polypizz/api/read/:key',(req,res)=>{
		controller.apiRead(res, req.params.key);
		//res.send('READ : Value equals '+controller.apiRead(req.params.key)+'.');
	});
	
	//UPDATE
	route.get('/polypizz/api/update',(req,res)=>{
		res.send('UPDATE : Variable incremented.');
	});
	
	//DELETE
	route.get('/polypizz/api/delete',(req,res)=>{
		//res.send('DELETE : Variable reduces to 0.');
		controller.apiDeleteForm(res);
	});

	route.post('/polypizz/api/delete',(req,res)=>{
		controller.apiDelete(res, req.body.key);
		//res.send('DELETE : Variable '+req.body.key+' reduces to 0.');
	});
	
	//
	route.get('/polypizz',(req,res)=>{
		res.send("Express response. Bienvenue dans notre pizzeria Poly'pizz !");
	});

	route.get('/polypizz/menu-du-jour', function(req, res) {
		res.setHeader('Content-Type', 'text/plain');
		res.send("Voici le menu du jour de la pizzeria : "+ controller.afficherDailyMenu());
	});

module.exports=route;