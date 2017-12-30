/*  

      Mandya Subramanya, Namratha
      Class account - jadrn034
      Project #4
      Fall 2017

*/    


var proj4_data = new Array();
var cart;
 
$(document).ready(function() {
    $.get('/perl/jadrn034/proj4/get_products.cgi', storeData);
    cart = new shopping_cart("jadrn034");
    var cartArray = cart.getCartArray(); 
    var toWrite = "<table class='table table-sm table-hover' id='carttable'>";
    toWrite += "<thead><tr><th scope='col'>SKU</th><th scope='col'>Product Name</th><th scope='col'>Quantity</th><th scope='col'>Price</th></tr></thead>";
    for(i=0; i < cartArray.length; i++) {
        toWrite += "<tr>";
        toWrite += "<td>"+cartArray[i][0]+"</td>";
        toWrite += "<td>"+cartArray[i][3]+"</td>";
        toWrite += "<td>"+cartArray[i][1]+"</td>"; 
        toWrite += "<td>"+"$"+cartArray[i][2]+"</td>"; 
        toWrite += "<td><input type='button' id='"+cartArray[i][0]+"' value='x'></td>";
        toWrite += "</tr>";
    }
    toWrite += "<tr><th scope='row' colspan='3' style='text-align: center;' id='totalValue'>Total:</th><td>"+"$"+sum();+"<td></tr>";
    toWrite += "<tr><th scope='row' colspan='3' style='text-align: center;'>Tax (8% in San Diego for all purchases):</th><td>"+"+$"+tax();+"<td></tr>";
    toWrite += "<tr><th scope='row' colspan='3' style='text-align: center;'>Shipping charges:</th><td>"+"+$"+parseFloat(2.00);+"<td></tr>";
    toWrite += "<tr><th scope='row' colspan='3' style='text-align: center;'>Grand Total:</th><td>"+"$"+cartData();+"<td></tr>";
    toWrite += "</table>"; 
    toWrite += "<div class='row'><button id='placeOrderButton' class='btn btn-primary'>Place Order</button><button id='continuebutton' class='btn btn-default'>Continue shopping</button></div>";
    if(cartArray.length != 0) 
        $('#cart').html(toWrite); 
    else {
        toWrite = "<div class='alert alert-warning' role='alert'>Your cart is empty! Please go back to <a href='http://jadran.sdsu.edu/~jadrn034/proj4/products.html' class='alert-link'>Products</a> page.</div>";
        $('#cart').html(toWrite); 
    }
    $('#count').text(cart.size());

    
    $('#dark').on('click', function() {
        $('.container').css('display','none');
        $('#prodbutton').css('display','block');
        $('#content').css('display','block');
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Dark chocolate") {
                tmpString += "<div class='col-md-6'><img src=\"http://jadran.sdsu.edu/~jadrn000/PROJ4_IMAGES/"+proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+" width=\"200px\"  /><br />";
                tmpString += "<td><h5>"+proj4_data[i][2]+"</h5><b>Price:</b> $"+proj4_data[i][6]+"<br/>"+proj4_data[i][3]+"<br/>"+proj4_data[i][4];
                tmpString += "<div class='row'><div class='col-md-2'><label>Quantity:<input type='number' value='1' min='1' class='form-control' id="+proj4_data[i][0]+" maxlength='2'/></label></div><br/><div class='cartbutton'><button class='btn btn-primary' data-toggle='modal' data-target='#myModal' name="+proj4_data[i][0]+
            ">Add to Cart</button></div><br /><hr /></div></div>";                 
            }
        }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })
        
    $('#nuts').on('click', function() {   
        $('.container').css('display','none');
        $('#prodbutton').css('display','block');
        $('#content').css('display','block');
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Nuts and chews") {  
                tmpString += "<div class='col-md-6'><img src=\"http://jadran.sdsu.edu/~jadrn000/PROJ4_IMAGES/"+proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+" width=\"200px\"  /><br />";
                tmpString += "<td><h5>"+proj4_data[i][2]+"</h5><b>Price:</b> $"+proj4_data[i][6]+"<br/>"+proj4_data[i][3]+"<br/>"+proj4_data[i][4];
                tmpString += "<div class='row'><div class='col-md-2'><label>Quantity:<input type='number' value='1' min='1' class='form-control' id="+proj4_data[i][0]+" maxlength='2'/></label></div><br/><div><button class='btn btn-primary' data-toggle='modal' data-target='#myModal' name="+proj4_data[i][0]+
            ">Add to Cart</button></div><br /><hr /></div></div>";                 
            }
        }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        }) 
        
    $('#brittle').on('click', function() {
        $('.container').css('display','none');
        $('#prodbutton').css('display','block');
        $('#content').css('display','block');
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Brittles and toffies") {
                tmpString += "<div class='col-md-6'><img src=\"http://jadran.sdsu.edu/~jadrn000/PROJ4_IMAGES/"+proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+" width=\"200px\"  /><br />";
                tmpString += "<td><h5>"+proj4_data[i][2]+"</h5><b>Price:</b> $"+proj4_data[i][6]+"<br/>"+proj4_data[i][3]+"<br/>"+proj4_data[i][4];
                tmpString += "<div class='row'><div class='col-md-2'><label>Quantity:<input type='number' value='1' min='1' class='form-control' id="+proj4_data[i][0]+" maxlength='2'/></label></div><br/><div><button class='btn btn-primary' data-toggle='modal' data-target='#myModal' name="+proj4_data[i][0]+
            ">Add to Cart</button></div><br /><hr /></div></div>";                 
            }
        }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        });

    $('#truffles').on('click', function() {
        $('.container').css('display','none');
        $('#prodbutton').css('display','block');
        $('#content').css('display','block');
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Truffles") {
                tmpString += "<div class='col-md-6'><img src=\"http://jadran.sdsu.edu/~jadrn000/PROJ4_IMAGES/"+proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+" width=\"200px\"  /><br />";
                tmpString += "<td><h5>"+proj4_data[i][2]+"</h5><b>Price:</b> $"+proj4_data[i][6]+"<br/>"+proj4_data[i][3]+"<br/>"+proj4_data[i][4];
                tmpString += "<div class='row'><div class='col-md-2'><label>Quantity:<input type='number' value='1' min='1' class='form-control' id="+proj4_data[i][0]+" maxlength='2'/></label></div><br/><div><button class='btn btn-primary' data-toggle='modal' data-target='#myModal' name="+proj4_data[i][0]+
            ">Add to Cart</button></div><br /><hr /></div></div>";                 
            }
        }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        });

    $('#gifts').on('click', function() {
        $('.container').css('display','none');
        $('#prodbutton').css('display','block');
        $('#content').css('display','block');
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Gifts") {
                tmpString += "<div class='col-md-6'><img src=\"http://jadran.sdsu.edu/~jadrn000/PROJ4_IMAGES/"+proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+" width=\"200px\"  /><br />";
                tmpString += "<td><h5>"+proj4_data[i][2]+"</h5><b>Price:</b> $"+proj4_data[i][6]+"<br/>"+proj4_data[i][3]+"<br/>"+proj4_data[i][4];
                tmpString += "<div class='row'><div class='col-md-2'><label>Quantity:<input type='number' value='1' min='1' class='form-control' id="+proj4_data[i][0]+" maxlength='2'/></label></div><br/><div><button class='btn btn-primary' data-toggle='modal' data-target='#myModal' name="+proj4_data[i][0]+
            ">Add to Cart</button></div><br /><hr /></div></div>";                 
            }
        }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        });

    $('#holiday').on('click', function() {
        $('.container').css('display','none');
        $('#prodbutton').css('display','block');
        $('#content').css('display','block');
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Holiday assortments") {
                tmpString += "<div><img src=\"http://jadran.sdsu.edu/~jadrn000/PROJ4_IMAGES/"+proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+" width=\"200px\"  /><br />";
                tmpString += "<td><h5>"+proj4_data[i][2]+"</h5><b>Price:</b> $"+proj4_data[i][6]+"<br/>"+proj4_data[i][3]+"<br/>"+proj4_data[i][4];
                tmpString += "<div class='row'><div class='col-md-2'><label>Quantity:<input type='number' value='1' min='1' class='form-control' id="+proj4_data[i][0]+" maxlength='2'/></label></div><br/><div><button class='btn btn-primary' data-toggle='modal' data-target='#myModal' name="+proj4_data[i][0]+
            ">Add to Cart</button></div><br /><hr /></div></div>";               
            }
        }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        });
        
        $('#content').on('click','button', function(e) {
            var quant= $(e.target).attr("name");
            quant = $('#'+quant).val();
            for(var i=0; i < proj4_data.length; i++) {
                if(proj4_data[i][0] == $(e.target).attr("name") ) {
                    price = proj4_data[i][6];
                    title = proj4_data[i][2]
                    break;
                }
            }
            var totalpriceperitem = quant * price;
            cart.add($(e.target).attr("name"), quant, totalpriceperitem.toFixed(2), title);
            $('#count').text(cart.size());
            displayModal(); 

        });

        $('#carttable').on('click',"input[type='button']",function(e){
            var sku = $(this).attr('id');
            cart.delete(sku); 
            location.reload();   
            $('#count').text(cart.size());
        });

        $('#prodbutton').on('click', function() {
            $('#prodbutton').css('display','none');
            $('#content').css('display','none');
            $('.container').css('display','block');
        });                       
    });    

function redirecttocheckout() {
    window.open("http://jadran.sdsu.edu/~jadrn034/proj4/pages/orders.html","_self");
}

function orderpage() {
    window.open("http://jadran.sdsu.edu/~jadrn034/proj4/pages/orders.html","_self");
}

function displayModal() {
    var itemAdded = cart.getCartArray();
    var toWrite = "<p>"+itemAdded[0][3]+ " has been added to cart.<br/><br/> Click on close to continue shopping and click on checkout for payment.</p>";
    $('.modal-body').html(toWrite); 
}

function cartData() {
    
    var total = 0;
    var cartDetails = cart.getCartArray();
    for(var i = 0; i < cartDetails.length; i++){
        total += parseFloat(cartDetails[i][2]);
    }
    var tax = 1.08;
    var totalprice = (total * 1.08) + 2.00;
    totalprice = totalprice.toFixed(2);
    return totalprice;
}

function sum() {
    var total = 0;
    var cartDetails = cart.getCartArray();
    for(var i = 0; i < cartDetails.length; i++){
        total += parseFloat(cartDetails[i][2]);
    }
    total = total.toFixed(2);
    return total;
}

function tax() {
    var total = 0;
    var cartDetails = cart.getCartArray();
    for(var i = 0; i < cartDetails.length; i++){
        total += parseFloat(cartDetails[i][2]);
    }
    var tax = 0.08;
    tax = total * 0.08;
    tax = tax.toFixed(2);
    return tax;

}

// function shipping() {
//     var shipping_fee = 2.00;
//     //shipping_fee = shipping_fee.toFixed(2);
//     return shipping_fee;
// }
    
function storeData(response) {
    var tmpArray = explodeArray(response,';');
    for(var i=0; i < tmpArray.length; i++) {
        innerArray = explodeArray(tmpArray[i],'|');
        proj4_data[i] = innerArray;
        }  
    }
    
function display_milk_chocolate() {
    $('.container').css('display','none');
    $('#prodbutton').css('display','block');
    $('#content').css('display','block');
    tmpString = "";
    for(var i=0; i < proj4_data.length; i++) {
        if(proj4_data[i][1] == "Milk chocolate") {
            tmpString += "<div class='col-md-6'><img src=\"http://jadran.sdsu.edu/~jadrn000/PROJ4_IMAGES/"+proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+" width=\"200px\"  /><br />";
            tmpString += "<td><h5>"+proj4_data[i][2]+"</h5><b>Price:</b> $"+proj4_data[i][6]+"<br/>"+proj4_data[i][3]+"<br/>"+proj4_data[i][4];
            tmpString += "<div class='row'><div class='col-md-2'><label>Quantity:<input type='number' value='1' min='1' class='form-control' id="+proj4_data[i][0]+" maxlength='2'/></label></div><br/><div><button class='btn btn-primary' data-toggle='modal' data-target='#myModal' name="+proj4_data[i][0]+
            ">Add to Cart</button></div><br /><hr /></div></div>";                       
            }
        }
    var handle = document.getElementById('content');
    handle.innerHTML = tmpString;
    }        
    

    
// from http://www.webmasterworld.com/forum91/3262.htm            
function explodeArray(item,delimiter) {
    tempArray=new Array(1);
    var Count=0;
    var tempString=new String(item);

    while (tempString.indexOf(delimiter)>0) {
        tempArray[Count]=tempString.substr(0,tempString.indexOf(delimiter));
        tempString=tempString.substr(tempString.indexOf(delimiter)+1,tempString.length-tempString.indexOf(delimiter)+1);
        Count=Count+1
    }

    tempArray[Count]=tempString;
    return tempArray;
}    
