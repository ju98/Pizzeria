module.exports.daily_menus=["Menu du dimanche", "Menu du lundi", "Menu du mardi", "Menu du mercredi", "Menu du jeudi", "Menu du vendredi", 
	"Menu du samedi"]; //tableau statique avec les 7 différents menus, pour chaque jour de la semaine
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
