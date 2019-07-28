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
        var pizzaTopping = $('.topping option:selected').val();

        switch (pizzaSize){
            case "large":
                price = 1000;
                console.log(price);
            break;
            case "medium":
                price = 800;
                console.log(price);
            case "small":
                price = 600;
                console.log(price);
            default:
                console.log("");    
        }
        switch (pizzaCrust){
            case "crispy":
                crustPrice = 100;
                console.log(price);
            case "stuffed":
                crustPrice = 200;
                console.log(price);
            case "glutten free":
                crustPrice = 300;
                console.log(price);
            default:
                console.log("");
        }
        switch (pizzaTopping){
            case "pepperoni":
                tPrice = 100;
            case "onions":
                tPrice = 50;
            case "sausage":
                tPrice = 100;
            case "bacon":
                tPrice = 150;
            case "cheese":
                tPrice = 100;
            case "bell pepper":
                tPrice = 50;
            case "mushrooms":
                tPrice = 100;
            case "Olive":
                tPrice = 100;
            default:
                console.log("");
        }
        pizzaTotal =price + crustPrice + tPrice;
        alert("Your total order is: "+total)
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
