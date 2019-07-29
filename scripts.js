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

        var pTopping = [];
        
        $.each($("input[name='toppings']:checked"), function(){
            pTopping.push($(this).val());
        });
        var pizzaTopping = pTopping.length*100;
        var pizzaTotal = parseInt(pizzaSize) + parseInt(pizzaCrust)+ parseInt(pizzaTopping);
        alert("Your total order is: "+pizzaTotal)//displays total for order added
        $('.delivery').show();
        event.preventDefault();
    });
});

//shows second order
$(document).ready(function(){
     $('#order2').click(function(){
         $('#placeOrder2').append('<div class="row">'+
        '<div class="col-md-4">'+
    '<h4>Select your pizza of choice!</h4>'+
    '<form id="form" class="size2">'+
        '<select class="form-control">'+
            '<option label="Large  -  100" value="1000"></option>'+
            '<option label="Medium  -  800" value="800"></option>'+
            '<option label="Small  -  600" value="600"></option>'+
        '</select>'+
    '</form>'+
'</div>'+
'<div class="col-md-4">'+
    '<h4>Select your pizza crust!</h4>'+
    '<form id="form" class="crust2">'+
        '<select name="Crust" class="form-control">'+
            '<option label="Crispy  -  100" value="100"></option>'+
            '<option label="Stuffed  -  200" value="200"></option>'+
            '<option label="Glutten-free  -  300" value="300"></option>'+
        '</select>'+
    '</div>'+
    '</form>'+

'<div class="col-md-4">'+
    '<h4>Select your Toppings of choice!</h4>'+
    '<form id="form" class="topping2">'+
        '<div class="row">'+
            '<div class="col-md-6">'+
        '<input type="checkbox" name="toppings2" class="form control" label="Pepperoni" value="100">Pepperoni<br>'+
        '<input type="checkbox" name="toppings2" class="form control" label="Onions" value="100">Onions<br>'+
        '<input type="checkbox" name="toppings2" class="form control" label="Sausage" value="100">Sausage<br>'+
        '<input type="checkbox" name="toppings2" class="form control" label="Bacon" value="100">Bacon<br>'+
    '</div>'+
        '<div class="col-md-6">'+
        '<input type="checkbox" name="toppings2" class="form control" label="Cheese" value="100">Cheese<br>'+
        '<input type="checkbox" name="toppings2" class="form control" label="Bell-Pepper" value="100">Bell-Pepper<br>'+
        '<input type="checkbox" name="toppings2" class="form control" label="Mushrooms" value="100">Mushrooms<br>'+
        '<input type="checkbox" name="toppings2" class="form control" label="Olive" value="100">Olive<br>'+
    '</div>'+
'</div>'+

    '</form>'+'<br>'+
    
'</div>'+
'</div>');   
$(document).ready(function(){
    $('#secondOrder').click(function(){
        var pizzaSize2 = $('.size2 option:selected').val();
        var pizzaCrust2 = $('.crust2 option:selected').val();

        var pTopping2 = [];

    $.each($("input[name='toppings2']:checked"), function(){
    pTopping2.push($(this).val());
    });

    var pizzaTopping2 = pTopping2.length*100;
    var pizzaTotal2 = parseInt(pizzaSize2) + parseInt(pizzaCrust2)+ parseInt(pizzaTopping2);
    
    alert("Your total order is: "+pizzaTotal2)//displays grandtotal for order added
    var grandTotal = pizzaTotal + pizzaTotal2;
    });
    event.preventDefault();
});

});
});


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
//checkout
$(document).ready(function(){
    $('button#final').click(function(){
        $('p#fnl').show();
        $('ul#checkout').append(grandTotal);
    })
});