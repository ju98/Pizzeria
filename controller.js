var model=require('./model.js')

module.exports.afficherDailyOffer = function() {
	var date = new Date() //date actuelle 
	var current_day = date.getDay()
	return model.daily_offer[current_day];
}

module.exports.showPizzas = function(res) {
	model.Answer.find({}, function(err, answer) {
		var result = "<html><body>Express response. Bienvenue dans notre pizzeria Poly'pizz !<br/><div><table>";
		result += '<tr><td>key</td><td>name</td><td>ingredients</td><td>category</td><td>price</td></tr>';

		for(var i=0; i<answer.length; i++) {
			result += '<tr><td>'+answer[i].key+'</td><td>'+answer[i].name+'</td><td>'+answer[i].ingredients+'</td><td>'+answer[i].category+'</td><td>'+answer[i].price+'</td></tr>';
		};

		result += "</table></div></body></html>";
		res.send(result);
	});
}


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
