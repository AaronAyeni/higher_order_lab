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
module.exports = ScranAdvisor;