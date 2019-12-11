var model=require('./model.js')

module.exports.afficherDailyMenu = function() {
	var date = new Date() //date actuelle 
	var current_day = date.getDay()
	return model.daily_menus[current_day];
};

module.exports.apiCreateForm = function() {
	return '<html><body>CREATE<br/><form method="post" action="create"><div><label for="key">Key :</label><input type="number" name="key" /></div><div><label for="name">Name :</label><input type="text" name="name" /></div><div><label for="ingredients">Ingredients :</label><input type="text" name="ingredients" /></div><div><label for="category">Category :</label><input type="text" name="category" /></div><div><label for="price">Price :</label><input type="text" name="price" /></div><input type="submit" /></form></body></html>';
}

module.exports.apiCreateSave = function(key, name, ingredients, category, price) {
	var answer = new model.Answer({key: key, name: name, ingredients: ingredients, category: category, price: price});
	answer.save();
}

module.exports.apiRead = function(res, key) {
	model.Answer.findOne({key: key},function(err,answer){
		if(err){console.log(err);}
		res.send('READ : Value equals '+answer.name+' '+answer.ingredients+' '+answer.category+' '+answer.price+'.');
	});
}

module.exports.apiDeleteForm = function(res) {
	model.Answer.find({}, function(err, answer) {
		var result = '<html><body>DELETE<br/><form method="post" action="delete"><div><label for="key">Key :</label><select name="key">';
		var keys = [];
		for (i in answer) {
			keys.push(answer[i].key);
		}
		for (i in keys) {
			result += '<option value="'+keys[i]+'">'+keys[i]+'</option>';
		}
		res.send(result+'</select><input type="submit" /></form></body></html>');
	});
}

module.exports.apiDelete = function(res, key) {
	/*model.Answer.find({key: key}, function(err, answer) {
			console.log(answer);
	});*/
	model.Answer.deleteOne({key: key}, function(err, answer) {
		if(err){console.log(err);}
		else{res.send('DELETE : Variable '+key+' reduces to 0.');}
	});

}
