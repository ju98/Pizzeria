module.exports.daily_offer=["Offre du dimanche", "Offre du lundi", "Offre du mardi", "Offre du mercredi", "Offre du jeudi", "Offre du vendredi", 
	"Offre du samedi"];
	//getDay() retourne 0 pour dimanche, 1 pour lundi,...


const mongoose=require('mongoose');
var schemaAnswer=new mongoose.Schema({
	key: Number,
	name: String,
	ingredients: String,
	category: String,
	price: String
});
module.exports.Answer=mongoose.model('Answer',schemaAnswer);
