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
        var location = $('input#building').val();
        var houseno = $('input#office').val();
        if ($('input#building').val() && $('input#office').val() !== ""){
            alert("Your pizza will be delivered at "+location+" in "+houseno+".");
        } else {
            alert("please enter your delivery point")
        }
    });
})


/* $(document).ready(function(){
    $('form').submit(function(){
        var name = $('input#name').val();
        var email = $('input#email').val();
        var text = $('textarea#textarea').val();
        if ($('input#name').val() && $('input#email').val() && $('textarea#textarea').val() !== ""){
            alert(name+", we have recieved your email. Thank you for responding to us.");
        } else {
            alert("Please enter your name and email.");
        }
    });
});
 
if ($('input#name').val() && $('input#email').val() && $('textarea#textarea').val() !== ""){
            alert(name+", we have recieved your email. Thank you for responding to us.");
        } else {
            alert("Please enter your name and email.");
        }*/