#!/usr/bin/perl  

#
#      Mandya Subramanya, Namratha
#      Class account - jadrn034
#      Project #4
#      Fall 2017
#


use CGI;
use CGI::Cookie;
use POSIX qw(strftime);
$q = new CGI;

use DBI;

my $host = "opatija.sdsu.edu";
my $port = "3306";
my $database = "jadrn034";
my $username = "jadrn034";
my $password = "suitcase";
my $database_source = "dbi:mysql:$database:$host:$port";

    
my $dbh = DBI->connect($database_source, $username, $password) 
or die 'Cannot connect to db';

#send a blank cookie.  You must insert this into the header before
#printing anything.  Also, using the CGI module makes printing
#content-type: text/html redundant.

my $cookie = $q->cookie(-name=>'jadrn034',-value=>'',-path=>'/');
print $q->header(-cookie=>$cookie);
print <<END_CONTENT;
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Products - Berthas Deluxe Chocolates</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script type="text/javascript" src="http://jadran.sdsu.edu/~jadrn034/proj4/JS/ajax_get_lib.js"></script>
  <script type="text/javascript" src="http://jadran.sdsu.edu/~jadrn034/proj4/JS/shopping_cart.js"></script>
  <script type="text/javascript" src="http://jadran.sdsu.edu/~jadrn034/proj4/JS/ajax_populate_page.js"></script>
</head>

<body class="cgibody" style="background-image: url('http://jadran.sdsu.edu/~jadrn034/proj4/Images/backgroundimage1.jpg');">
    <div>
        <div class="container">
             <div class="well">   
END_CONTENT
foreach $key ($q->param) { 
    foreach $value ($q->param($key)) {
        if ($key eq billingfirstname) {
            print "<h1>Hi! $value, Thank you for shopping with us.</h1>";
        }
    }
}
print <<END_CONTENT;
                
                <h2>Your order has been confirmed.</h2>
                <h4>Your order will be delivered within 6-9 business days.</h4>
            
END_CONTENT
my %cookies = $ENV{COOKIE};
# for( keys %cookies) {
# print "The value of the cookie is: $cookies{$_}\n";
# }

print "<table>\n";
my ($key, $value);
     
%cookies = CGI::Cookie->fetch;
# for(keys %cookies) {
#     print "$cookies{$_}\n";
#     }
    
# print "<h1>Shopping cart cookie</h1>";
my $v = $q->cookie('jadrn034');
# print "The raw cookie value is $v<br />"; 

my $w = 0;
my $x = 0;
my $y = 0;
my $z = 0;
foreach $key ($q->param) { 
    foreach $value ($q->param($key)) {
        if ($key eq cardnumber) {
            $z = substr $value, -4;
        }
    }
}
foreach $key ($q->param) { 
    foreach $value ($q->param($key)) {
        if ($key eq optradio) {
            $y = $value;
        }
    }
}
print "<h4><b>Payment Details:</b></h4>";
print "<p>XXXX XXXX XXXX $z</p>";

print "<h4><b>Shipping Details:</b></h4>";
foreach $key ($q->param) { 
    foreach $value ($q->param($key)) {
        if ($key eq shippingaddress1) {
            $x = $value;
        }
        if ($key eq shippingaddress2) {
            $x = $x ." ". $value;
        }
        if ($key eq shippingcity) {
            $y = $value;
        }
        if ($key eq shippingstate) {
            $y = $y ." ". $value;
        }
        if ($key eq shippingzip) {
            $y = $y ." ". $value;
        }
    }
}
print "<p>$x <br/> $y</p>";

print "<table class='table table-sm table-hover'>";
print "<caption><h4><b>Order Summary:</b></h4></caption>";
print "<thead><tr><th scope='col'>SKU</th><th scope='col'>Quantity</th><th scope='col'>Price</th></tr></thead>";


@rowdata = split('\|\|',$v);
foreach $row (@rowdata) {
    ($sku, $qty, $price) = split('\|',$row);
    
    print "<tr>";
    print "<td>";
    print "$sku</td>";
    print "<td>";
    print "$qty</td>";
    print "<td>\$";
    print "$price</td>";
    print "</tr>";
}
    print "<tr>";
    my $total = 0;
    foreach $row (@rowdata) {
        ($sku, $qty, $price) = split('\|',$row);
        $total = $total + $price;
    }
    #print "$total\n";
    print "<th scope='row' colspan='2' style='text-align: center;'>Total:</th><td>";
    print "\$";
    print "$total</td>";
    print "</tr>";
    print "<tr>";
    my $tax = $total*0.08;
    $tax =sprintf("%.2f", $tax);
    print "<th scope='row' colspan='2' style='text-align: center;'>Tax (8\% in San Diego for all purchases):</th><td>";
    print "+\$";
    print "$tax</td>";
    print "</tr>";
    my $shipping = 2.00;
    $shipping =sprintf("%.2f", $shipping);
    print "<tr>";
    print "<th scope='row' colspan='2' style='text-align: center;'>Shipping:</th><td>";
    print "+\$";
    print "$shipping</td>";
    print "</tr>";
    my $grandtotal = $total + $tax + $shipping;
    $grandtotal =sprintf("%.2f", $grandtotal);
    print "<tr>";
    print "<th scope='row' colspan='2' style='text-align: center;'>Grand Total:</th><td>";
    print "\$";
    print "$grandtotal</td>";
    print "</tr>";
    print "</table>";

my $date = strftime "%m/%d/%Y", localtime; 
    
@rows = split('\|\|',$v);
foreach $row (@rows) {
    ($sku, $qty) = split('\|',$row);

    my $query = "INSERT INTO sales(sku,qty,date) VALUES('$sku',$qty,'$date');";
    my $sth = $dbh->prepare($query) or die "Prepare Error";
    
    $sth->execute or die "Execute Error";
    $sth->finish();

    #print "$sku = $qty<br />";
} 

$dbh->disconnect();
     
# print "<h1>Parameters passed to script:</h1>\n";
# my ($key, $value);

                
# foreach $key ($q->param) {
#     print "<tr>\n";
#     print "<td>$key</td>\n";
#     foreach $value ($q->param($key)) {
#         print "<td>$value</td>\n";
#         }
#     print "</tr>\n";
# }
print "</table>\n";
print "<a class='btn btn-primary' href='http://jadran.sdsu.edu/~jadrn034/proj4/index.html' role='button'>Back to Home Page</a>";
print "</div>\n";
print "</div>\n";
print "</div>\n";
print "</body>\n";
print "</html>\n";
# foreach $key ($q->param) {
#     print "<tr>\n";
#     print "<td>$key</td>\n";
#     foreach $value ($q->param($key)) {
#         print "<td>$value</td>\n";
#         }
#     print "</tr>\n";
# }
# print "</table>\n";
# print "</div>\n";
# print "</body>\n";
# print "</html>\n";

