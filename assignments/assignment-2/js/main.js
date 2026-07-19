// Pizza class
class Pizza {
    constructor(customerName, size, crust, toppings) {
        this.customerName = customerName;
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
    }

    // Returns a description of the pizza order
    getDescription() {
        let toppingList;

        if (this.toppings.length === 0) {
            toppingList = "no toppings";
        } else {
            toppingList = this.toppings.join(", ");
        }

        return `${this.customerName} ordered a ${this.size} ${this.crust} crust pizza with ${toppingList}.`;
    }
}

document.getElementById("pizzaOrderForm").addEventListener("submit", function(event) {

    // Prevent the page from refreshing
    event.preventDefault();

    // Capture text input
    const customerName = document.getElementById("name").value;

    // Capture selected size and crust using their respective IDs
    const size = document.getElementById("size").value;
    const crust = document.getElementById("crust").value;
    const toppings = [];

    // Capture selected toppings using querySelectorAll to get all checked checkboxes
    document.querySelectorAll('input[name="toppings"]:checked').forEach(function(topping) {
        toppings.push(topping.value);
    });
});