const ScranAdvisor = function(restaurants){
    this.restaurants = restaurants;
}

// Method to count the number of restaurants
ScranAdvisor.prototype.countRestaurants = function() {
    return this.restaurants.length;
};

module.exports = ScranAdvisor;