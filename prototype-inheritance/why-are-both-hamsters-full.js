/*We have two hamsters: speedy and lazy inheriting from the general hamster object.
 * When we feed one of them, the other one is also full. Why? How can we fix it?
 */

let hamster = {
  stomach: [],
  eat(food) {
    this.stomach = [food];
  },
};

let speedy = {
  // stomach: [],
  __proto__: hamster,
};

let lazy = {
  // stomach: [],
  __proto__: hamster,
};

// This one found the food
speedy.eat('apple');
console.log(speedy.stomach); // apple

// lazy is still hungry
console.log(lazy.stomach); // []

/*
 * Both for lazy.stomach.push(...) and speedy.stomach.push(),
 * the property stomach is found in the prototype (as it’s not in the object itself),
 * then the new data is pushed into it.
 * Please note that such thing doesn’t happen in case of a simple assignment this.stomach=:
 */
