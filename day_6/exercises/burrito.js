/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_6/exercises/burrito.js`

Add the following methods to this burrito class and call the methods below
the class:
1. addTopping
2. removeTopping
3. changeProtein
*/

class Burrito {
  constructor(protein, base, toppings) {
    this.protein = protein;
    this.base = base;
    this.toppings = toppings;
  }

  addTopping(topping) {
    this.toppings.push(topping)
  }

  removeTopping(topping) {
    var removed = this.toppings.indexOf(topping)
    if (removed > -1) {
    this.toppings.splice(removed, 1)
    }
  }

  changeProtein(newprotein) {
    this.protein = newprotein
  }
};



var dinner = new Burrito("Beans", "Rice", ["cheese", "salsa", "guacamole"]);


// Call the methods here

/*
console.log(dinner.protein);
console.log(dinner.base);
console.log(dinner.toppings);
*/

dinner.addTopping('fried balls of happiness')
dinner.removeTopping("guacamole");
dinner.changeProtein('Dead Skunk')

console.log(dinner.protein);
console.log(dinner.base);
console.log(dinner.toppings);
