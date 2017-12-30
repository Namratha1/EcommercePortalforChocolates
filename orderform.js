/*
      Mandya Subramanya, Namratha
      Class account - jadrn034
      Project #4
      Fall 2017
*/   
function isEmpty(fieldValue) {
    return $.trim(fieldValue).length == 0;    
    } 
    
function isValidState(state) {                                
    var stateList = new Array("AK","AL","AR","AZ","CA","CO","CT","DC",
    "DE","FL","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA","MA",
    "MD","ME","MH","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ",
    "NM","NV","NY","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX",
    "UT","VA","VT","WA","WI","WV","WY");
    for(var i=0; i < stateList.length; i++) 
        if(stateList[i] == $.trim(state))
            return true;
    return false;
}  

function copyshippingtobilling() {
    document.getElementById("billingfirstname").value = $('[name="shippingfirstname"]').val();
    document.getElementById("billinglastname").value = $('[name="shippinglastname"]').val();
    document.getElementById("billingaddress1").value = $('[name="shippingaddress1"]').val();
    document.getElementById("billingaddress2").value = $('[name="shippingaddress2"]').val();
    document.getElementById("billingcity").value = $('[name="shippingcity"]').val();
    document.getElementById("billingstate").value = $('[name="shippingstate"]').val();
    document.getElementById("billingzip").value = $('[name="shippingzip"]').val();
    document.getElementById("billingphone").value = $('[name="shippingphone"]').val();
}
    
// // copied from stackoverflow.com, not checked or validated for correctness.        
// // function isValidEmail(emailAddress) {
// //     var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
// //     return pattern.test(emailAddress);
// // }                

function isValidMonth(month) {

    var checkDate = new Date();  
    var checkMonth = checkDate.getMonth()+1;
    console.log(month);       
    if(month <= 12 && month >=1) {
        return true;
    }
    return false;
}   

function isValidYear(year){
    var today = new Date();
    var checkYear = today.getFullYear();
    var checkMonth = today.getMonth()+1;
    console.log(year);
    console.log(checkYear);
    if(year < checkYear)
            return false;
    else {
        if(year == checkYear && $('#expirymonth').val() < checkMonth)
            return false;
        return true;
    }
}
                   
$(document).ready( function() {
    var errorStatusHandle = $('.alert');
    $('.alert').css('display','none');
    var elementHandle = new Array(10);
    elementHandle[0] = $('[name="shippingfirstname"]');
    elementHandle[1] = $('[name="shippinglastname"]');
    elementHandle[2] = $('[name="shippingaddress1"]');
    elementHandle[3] = $('[name="shippingaddress2"]');
    elementHandle[4] = $('[name="shippingcity"]');
    elementHandle[5] = $('[name="shippingstate"]');
    elementHandle[6] = $('[name="shippingzip"]');
    elementHandle[7] = $('[name="shippingphone"]');
    elementHandle[8] = $('[name="billingfirstname"]');
    elementHandle[9] = $('[name="billinglastname"]');
    elementHandle[10] = $('[name="billingaddress1"]');
    elementHandle[11] = $('[name="billingaddress2"]');
    elementHandle[12] = $('[name="billingcity"]');
    elementHandle[13] = $('[name="billingstate"]');
    elementHandle[14] = $('[name="billingzip"]');
    elementHandle[15] = $('[name="billingphone"]');
    elementHandle[16] = $('[name="optradio"]');
    elementHandle[17] = $('[name="cardname"]');
    elementHandle[18] = $('[name="cardnumber"]');
    elementHandle[19] = $('[name="expirymonth"]');
    elementHandle[20] = $('[name="expiryyear"]');
    elementHandle[21] = $('[name="cvv"]');

    function isValidData() {
        //Shipping
        if(isEmpty(elementHandle[0].val())) {
            elementHandle[0].addClass("error");
            errorStatusHandle.text("Please enter your first name.");
            elementHandle[0].focus();
            return false;
        }
        if(isEmpty(elementHandle[1].val())) {
            elementHandle[1].addClass("error");
            errorStatusHandle.text("Please enter your last name.");
            elementHandle[1].focus();            
            return false;
        }
        if(isEmpty(elementHandle[2].val())) {
            elementHandle[2].addClass("error");
            errorStatusHandle.text("Please enter your address.");
            elementHandle[2].focus();            
            return false;
        }
        if(isEmpty(elementHandle[4].val())) {
            elementHandle[4].addClass("error");
            errorStatusHandle.text("Please enter your city.");
            elementHandle[4].focus();            
            return false;
        }
        if(isEmpty(elementHandle[5].val())) {
            elementHandle[5].addClass("error");
            errorStatusHandle.text("Please enter your state.");
            elementHandle[5].focus();            
            return false;
        }
        if(!isValidState(elementHandle[5].val())) {
            elementHandle[5].addClass("error");
            errorStatusHandle.text("The state appears to be invalid, "+
            "please use the two letter state abbreviation.");
            elementHandle[5].focus();            
            return false;
        }
        if(isEmpty(elementHandle[6].val())) {
            elementHandle[6].addClass("error");
            errorStatusHandle.text("Please enter your zip code.");
            elementHandle[6].focus();            
            return false;
        }
        if(!$.isNumeric(elementHandle[6].val())) {
            elementHandle[6].addClass("error");
            errorStatusHandle.text("The zip code appears to be invalid, "+
            "numbers only please. ");
            elementHandle[6].focus();            
            return false;
        }
        if(elementHandle[6].val().length != 5) {
            elementHandle[6].addClass("error");
            errorStatusHandle.text("The zip code must have exactly five digits.")
            elementHandle[6].focus();            
            return false;
        }
        if(isEmpty(elementHandle[7].val())) {
            elementHandle[7].addClass("error");
            errorStatusHandle.text("Please enter your phone number.");
            elementHandle[7].focus();            
            return false;
        }            
        if(!$.isNumeric(elementHandle[7].val())) {
            elementHandle[7].addClass("error");
            errorStatusHandle.text("The phone number appears to be invalid, "+
            "numbers only please. ");
            elementHandle[7].focus();            
            return false;
        }
        if(elementHandle[7].val().length != 10) {
            elementHandle[7].addClass("error");
            errorStatusHandle.text("The phone number must have exactly ten digits.")
            elementHandle[7].focus();            
            return false;
        }   

        //Billing

        if(isEmpty(elementHandle[8].val())) {
            elementHandle[8].addClass("error");
            errorStatusHandle.text("Please enter your first name for billing.");
            elementHandle[8].focus();
            return false;
            }
        if(isEmpty(elementHandle[9].val())) {
            elementHandle[9].addClass("error");
            errorStatusHandle.text("Please enter your last name for billing.");
            elementHandle[9].focus();            
            return false;
            }
        if(isEmpty(elementHandle[10].val())) {
            elementHandle[10].addClass("error");
            errorStatusHandle.text("Please enter your address for billing.");
            elementHandle[10].focus();            
            return false;
            }
        if(isEmpty(elementHandle[12].val())) {
            elementHandle[12].addClass("error");
            errorStatusHandle.text("Please enter your city.");
            elementHandle[12].focus();            
            return false;
            }
        if(isEmpty(elementHandle[13].val())) {
            elementHandle[13].addClass("error");
            errorStatusHandle.text("Please enter your state.");
            elementHandle[13].focus();            
            return false;
            }
        if(!isValidState(elementHandle[13].val())) {
            elementHandle[13].addClass("error");
            errorStatusHandle.text("The state appears to be invalid, "+
            "please use the two letter state abbreviation.");
            elementHandle[13].focus();            
            return false;
            }
        if(isEmpty(elementHandle[14].val())) {
            elementHandle[14].addClass("error");
            errorStatusHandle.text("Please enter your zip code.");
            elementHandle[14].focus();            
            return false;
            }
        if(!$.isNumeric(elementHandle[14].val())) {
            elementHandle[14].addClass("error");
            errorStatusHandle.text("The zip code appears to be invalid, "+
            "numbers only please. ");
            elementHandle[14].focus();            
            return false;
            }
        if(elementHandle[14].val().length != 5) {
            elementHandle[14].addClass("error");
            errorStatusHandle.text("The zip code must have exactly five digits.");
            elementHandle[14].focus();            
            return false;
            }
        if(isEmpty(elementHandle[15].val())) {
            elementHandle[15].addClass("error");
            errorStatusHandle.text("Please enter your phone number.");
            elementHandle[15].focus();            
            return false;
            }            
        if(!$.isNumeric(elementHandle[15].val())) {
            elementHandle[15].addClass("error");
            errorStatusHandle.text("The phone number appears to be invalid, "+
            "numbers only please. ");
            elementHandle[15].focus();            
            return false;
        }
        if(elementHandle[15].val().length != 10) {
            elementHandle[15].addClass("error");
            errorStatusHandle.text("The phone number must have exactly ten digits.")
            elementHandle[15].focus();            
            return false;
        }              
        if(isEmpty(elementHandle[16].val())) {
            elementHandle[16].addClass("error");
            errorStatusHandle.text("Please select the type of card.");
            elementHandle[16].focus();            
            return false;
        }  
        if(isEmpty(elementHandle[17].val())) {
            elementHandle[17].addClass("error");
            errorStatusHandle.text("Please enter your name on card.");
            elementHandle[17].focus();            
            return false;
        }
        if(isEmpty(elementHandle[18].val())) {
            elementHandle[18].addClass("error");
            errorStatusHandle.text("Please enter card number.");
            elementHandle[18].focus();            
            return false;
        } 
        if(!$.isNumeric(elementHandle[18].val())) {
            elementHandle[18].addClass("error");
            errorStatusHandle.text("Card number is invalid. Only numbers please.");
            elementHandle[18].focus();            
            return false;
        }              
        if(elementHandle[18].val().length != 16) {
            elementHandle[18].addClass("error");
            errorStatusHandle.text("The card number must have exactly 16 digits.")
            elementHandle[18].focus();            
            return false;
        }       
        if(isEmpty(elementHandle[19].val())) {
            elementHandle[19].addClass("error");
            errorStatusHandle.text("Please enter your expiry month.");
            elementHandle[19].focus();            
            return false;
        }
        if(!$.isNumeric(elementHandle[19].val())) {
            elementHandle[19].addClass("error");
            errorStatusHandle.text("Please enter month in numbers in MM format.");
            elementHandle[19].focus();            
            return false;
        }
        if(!isValidMonth(elementHandle[19].val())) {
            elementHandle[19].addClass("error");
            errorStatusHandle.text("Please enter correct expiry month.");
            elementHandle[19].focus();            
            return false;
        }
        if(elementHandle[19].val().length != 2) {
            elementHandle[19].addClass("error");
            errorStatusHandle.text("Enter months in MM format.");
            elementHandle[19].focus();            
            return false;
        }  
        if(isEmpty(elementHandle[20].val())) {
            elementHandle[20].addClass("error");
            errorStatusHandle.text("Please enter your expiry year.");
            elementHandle[20].focus();            
            return false;
        }     
        if(!$.isNumeric(elementHandle[20].val())) {
            elementHandle[20].addClass("error");
            errorStatusHandle.text("Please enter year in numbers in YYYY format.");
            elementHandle[20].focus();            
            return false;
        }
        if(elementHandle[20].val().length != 4) {
            elementHandle[20].addClass("error");
            errorStatusHandle.text("Enter months in YYYY format.");
            elementHandle[20].focus();            
            return false;
        }  
        if(!isValidYear(elementHandle[20].val())) {
            elementHandle[20].addClass("error");
            errorStatusHandle.text("Your card seems to be expired!");
            elementHandle[20].focus();            
            return false;
        } 
        if(isEmpty(elementHandle[21].val())) {
            elementHandle[21].addClass("error");
            errorStatusHandle.text("Please enter your CVV.");
            elementHandle[21].focus();            
            return false;
        }
        if(!$.isNumeric(elementHandle[21].val())) {
            elementHandle[21].addClass("error");
            errorStatusHandle.text("CVV is a 3 digit number on the back of your card.");
            elementHandle[21].focus();            
            return false;
        }
        if(elementHandle[21].val().length != 3) {
            elementHandle[21].addClass("error");
            errorStatusHandle.text("CVV is a 3 digit number.");
            elementHandle[21].focus();            
            return false;
        }  
    return true;
    }       

   elementHandle[0].focus();
   
// on blur, if the user has entered valid data, the error message
// should no longer show.
    elementHandle[0].on('blur', function() {
        if(isEmpty(elementHandle[0].val()))
            return;
        $(this).removeClass("error");
        $('.alert').css('display','none');
        errorStatusHandle.text("");
    });

    elementHandle[1].on('blur', function() {
        if(isEmpty(elementHandle[1].val()))
            return;
        $(this).removeClass("error");
        $('.alert').css('display','none');
        errorStatusHandle.text("");
    });
        
    elementHandle[2].on('blur', function() {
        if(isEmpty(elementHandle[2].val()))
            return;
        $(this).removeClass("error");
        $('.alert').css('display','none');
        errorStatusHandle.text("");
    });

    elementHandle[3].on('blur', function() {
        if(isEmpty(elementHandle[3].val()))
            return;
        $(this).removeClass("error");
        $('.alert').css('display','none');
        errorStatusHandle.text("");
    });

    elementHandle[4].on('blur', function() {
        if(isEmpty(elementHandle[4].val()))
            return;
        $(this).removeClass("error");
        $('.alert').css('display','none');
        errorStatusHandle.text("");
    });

    elementHandle[5].on('blur', function() {
        if(isEmpty(elementHandle[5].val()))
            return;
        $(this).removeClass("error");
        $('.alert').css('display','none');
        errorStatusHandle.text("");
    });

    elementHandle[6].on('blur', function() {
        if(isEmpty(elementHandle[6].val()))
            return;
        $(this).removeClass("error");
        $('.alert').css('display','none');
        errorStatusHandle.text("");
    });

    elementHandle[7].on('blur', function() {
        if(isEmpty(elementHandle[7].val()))
            return;
        $(this).removeClass("error");
        $('.alert').css('display','none');
        errorStatusHandle.text("");
    });

    elementHandle[8].on('blur', function() {
        if(isEmpty(elementHandle[8].val()))
            return;
        $(this).removeClass("error");
        $('.alert').css('display','none');
        errorStatusHandle.text("");
    });

    elementHandle[12].on('blur', function() {
        if(isEmpty(elementHandle[12].val()))
            return;
        $(this).removeClass("error");
        $('.alert').css('display','none');
        errorStatusHandle.text("");
    });

    elementHandle[13].on('blur', function() {
        if(isEmpty(elementHandle[13].val()))
            return;
        $(this).removeClass("error");
        $('.alert').css('display','none');
        errorStatusHandle.text("");
    });

    elementHandle[14].on('blur', function() {
        if(isEmpty(elementHandle[14].val()))
            return;
        $(this).removeClass("error");
        $('.alert').css('display','none');
        errorStatusHandle.text("");
    });

    elementHandle[15].on('blur', function() {
        if(isEmpty(elementHandle[15].val()))
            return;
        $(this).removeClass("error");
        $('.alert').css('display','none');
        errorStatusHandle.text("");
    });

    elementHandle[16].on('blur', function() {
        if(isEmpty(elementHandle[16].val()))
            return;
        $(this).removeClass("error");
        $('.alert').css('display','none');
        errorStatusHandle.text("");
    });
    elementHandle[17].on('blur', function() {
        if(isEmpty(elementHandle[17].val()))
            return;
        $(this).removeClass("error");
        $('.alert').css('display','none');
        errorStatusHandle.text("");
    });

    elementHandle[18].on('blur', function() {
        if(isEmpty(elementHandle[18].val()))
            return;
        $(this).removeClass("error");
        $('.alert').css('display','none');
        errorStatusHandle.text("");
    });

    elementHandle[19].on('blur', function() {
        if(isEmpty(elementHandle[19].val()))
            return;
        $(this).removeClass("error");
        $('.alert').css('display','none');
        errorStatusHandle.text("");
    });

    elementHandle[20].on('blur', function() {
        if(isEmpty(elementHandle[20].val()))
            return;
        $(this).removeClass("error");
        $('.alert').css('display','none');
        errorStatusHandle.text("");
    });

    elementHandle[21].on('blur', function() {
        if(isEmpty(elementHandle[21].val()))
            return;
        $(this).removeClass("error");
        $('.alert').css('display','none');
        errorStatusHandle.text("");
    });

    elementHandle[9].on('blur', function() {
        if(isEmpty(elementHandle[9].val()))
            return;
        if(isValidEmail(elementHandle[9].val())) {
            $(this).removeClass("error");
            $('.alert').css('display','none');
            errorStatusHandle.text("");
        }
    });               

    elementHandle[5].on('keyup', function() {
        elementHandle[5].val(elementHandle[5].val().toUpperCase());
    });
        
    elementHandle[13].on('keyup', function() {
        elementHandle[13].val(elementHandle[13].val().toUpperCase());
    });           

   
    $(document).ready(function() {
    //alert(cart.getCartArray());
        // if($('#totalValue').val() != '$0.00') {
        //     $('#cart').css('display','block');
        // }
       $('input[name="shippingfirstname"]').focus();
    
        $('#submitButton').on('click', function(e) {
            e.preventDefault();
            if(!isValidData()) {
                e.preventDefault();
                $('.alert').css('display','block');
                return;
            }
            else {
                $('.alert').css('display','none');
                e.preventDefault();
                $('#orderform').submit();
                //$('#confirmation').css('display','block');
                //window.open('confirmation.html');
            }
         });

        $('#placeOrderButton').on('click',function(e){
            $('#orderform').css('display','block');
            $('#submitButton').css('display','inline-block');
            $('#resetButton').css('display','inline-block');
            $('#placeOrderButton').css('display','none');
            $('#continuebutton').css('display','none');
        });


        $('#continuebutton').on('click',function(e){
            window.open("http://jadran.sdsu.edu/~jadrn034/proj4/pages/products.html","_self");
        });
    
    });
        
    $(':reset').on('click', function() {
        for(var i=0; i < 21 ; i++)
            elementHandle[i].removeClass("error");
        errorStatusHandle.text("");
        $('.alert').css('display','none');
    });    
});