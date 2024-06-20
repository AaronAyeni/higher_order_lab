const ScranAdvisor = function(restaurants){
    this.restaurants = restaurants;
}

// Method to count the number of restaurants
ScranAdvisor.prototype.countRestaurants = function() {
    return this.restaurants.length;
};

// Method to find a restaurant by its full name
ScranAdvisor.prototype.findRestaurantByName = function(name) {
    return this.restaurants.find(restaurant => restaurant.name === name);
};

// Method to return an array containing each restaurant's name
ScranAdvisor.prototype.getAllRestaurantNames = function() {
    return this.restaurants.map(restaurant => restaurant.name);
};

module.exports = ScranAdvisor;