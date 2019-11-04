var model=require('./model.js')

module.exports.afficherDailyMenu = function() {
	var date = new Date() //date actuelle 
	var current_day = date.getDay()
	return model.daily_menus[current_day];
};

