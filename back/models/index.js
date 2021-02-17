const Favorites = require("./Favorite")
const User =  require("./User")


Favorites.belongsTo(User) 

module.exports = {Favorites,User}