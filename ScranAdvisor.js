const ScranAdvisor = function(restaurants){
    this.restaurants = restaurants;
};

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

// Method to find all restaurants from a given city
ScranAdvisor.prototype.findRestaurantsByCity = function(city) {
    return this.restaurants.filter(restaurant => restaurant.location.town === city);
};

// Method to search restaurants by substring in name
ScranAdvisor.prototype.searchByName = function(substring) {
    const lowerCaseSubstring = substring.toLowerCase();
    return this.restaurants.filter(restaurant => 
        restaurant.name.toLowerCase().includes(lowerCaseSubstring)
    );
};

// Method to find the most common cuisine type
ScranAdvisor.prototype.getMostCommonCuisine = function() {
    const cuisineCount = {};
    this.restaurants.forEach(restaurant => {
        restaurant.cuisines.forEach(cuisine => {
            if (cuisineCount[cuisine]) {
                cuisineCount[cuisine]++;
            } else {
                cuisineCount[cuisine] = 1;
            }
        });
    });
    let mostCommonCuisine = null;
    let maxCount = 0;
    for (const cuisine in cuisineCount) {
        if (cuisineCount[cuisine] > maxCount) {
            mostCommonCuisine = cuisine;
            maxCount = cuisineCount[cuisine];
        }
    }
    return mostCommonCuisine;
}

module.exports = ScranAdvisor;