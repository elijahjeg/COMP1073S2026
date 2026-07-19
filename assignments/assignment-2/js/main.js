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