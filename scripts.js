var size, crust, toppings, total;
function order(size, crust, toppings, total) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.total = total;
}

$(document).ready(function(){
    $('button#order').click(function(){
        alert("Your total order is:")
        $('.delivery').show();
    });
});
$(document).ready(function(){
    $('button#deliver').click(function(){
        $('.location').show();
    });
});

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
