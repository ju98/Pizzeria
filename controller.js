var model=require('./model.js')

module.exports.afficherDailyMenu = function() {
	var date = new Date() //date actuelle 
	var current_day = date.getDay()
	return model.daily_menus[current_day];
};

module.exports.apiCreateForm = function() {
	return '<html><body>CREATE<br /><form method="post" action="create"><input type="number" name="key" /><input type="text" name="name" /><input type="text" name="ingredients" /><input type="text" name="category" /><input type="text" name="price" /><input type="submit" /></form></body></html>';
}

module.exports.apiCreateSave = function(key, name, ingredients, price) {
	var answer = new model.Answer({key: key, name: name, ingredients: ingredients, category: category, price: price});
	answer.save();
}

var apiRead='';
module.exports.apiRead = function(key) {
	model.Answer.findOne({key: key},function(err,answer){
		apiRead=answer.name;
	});
	return apiRead;
}
