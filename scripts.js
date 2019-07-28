var size, crust, toppings, price, total;
function Pizza(size, crust, toppings, total) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.total = total;
}

//displays total order for pizza selected
//also displays the delivery option
$(document).ready(function(){
    $('button#order').click(function(){
        var pizzaSize = $('.size option:selected').val();
        var pizzaCrust = $('.crust option:selected').val();
        // var pizzaTopping = $('.topping option:checked').val();

        var pizzaTotal = parseInt(pizzaSize) + parseInt(pizzaCrust);
        alert("Your total order is: "+pizzaTotal)
        $('.delivery').show();
    });
});
//displays total for order added
// $(document).ready(function(){
//     $('button#final').click(function(){
//         alert("you have "+"_ "+"orders.");
//     });
// });
//displays form for delivery
$(document).ready(function(){
    $('button#deliver').click(function(){
        $('.location').show();
    });
});
//displays an alert for delivery location in accordance to input
$(document).ready(function(){
    $('form#place').submit(function(){
        var building = $('input#building').val();
        var office = $('input#office').val();
        if ($('input#building').val() && $('input#office').val() !== ""){
            alert("Your pizza will be delivered at "+building+" in house number "+office+" .");
        } else {
            alert("please enter your location");
        };
    });
})
