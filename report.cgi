#!/usr/bin/perl 
#
#      Mandya Subramanya, Namratha
#      Class account - jadrn034
#     Project #4
#      Fall 2017
#  
use DBI;

my $host = "opatija.sdsu.edu";
my $port = "3306";
my $database = "jadrn034";
my $username = "jadrn034";
my $password = "suitcase";
my $database_source = "dbi:mysql:$database:$host:$port";

	
my $dbh = DBI->connect($database_source, $username, $password) 
or die 'Cannot connect to db';
print "Content-type:  text/html\n\n";
my $sth = $dbh->prepare("SELECT p.sku, p.title, s.date, s.qty, p.cost, p.retail,(s.qty * p.retail),(p.retail - p.cost) * s.qty FROM sales s, proj4.products p WHERE s.sku = p.sku order by s.sku;");
$sth->execute();

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
</head>


<body style="background-image: url('http://jadran.sdsu.edu/~jadrn034/proj4/Images/backgroundimage2.jpg');background-attachment: fixed;">
	<h1 style="color:white; text-align:center;">REPORT</h1>
	<div class= "container" style="margin-top: 50px;">
		<div class="well">

END_CONTENT
print "<table class='table table-sm table-hover'>";
$str = "";
my $grossSales = 0;
my $grossProfit = 0;
print"<tr><th>SKU</th><th>Product Name</th><th>Quantity</th><th>Date</th><th>Cost</th><th>Retail</th><th>Sales per product</th><th>Profit per product</th></tr>";
while(my @row=$sth->fetchrow_array()) {
    print "<tr>";
    print "<td>$row[0]</td>";
    print "<td>$row[1]</td>";
    print "<td>$row[2]</td>";
    print "<td>$row[3]</td>";
    print "<td>$row[4]</td>";
    print "<td>$row[5]</td>";
    $row[6] = sprintf("%.2f", $row[6]); 
    print "<td>$row[6]</td>";
    $row[7] = sprintf("%.2f", $row[7]); 
    print "<td>$row[7]</td>";
    print "</tr>"; 
    $grossSales += $row[6];
    $grossSales = sprintf("%.2f", $grossSales); 
    $grossProfit += $row[7];
    $grossProfit = sprintf("%.2f", $grossProfit); 
}
#print $str;
print "</table>";
print "<div class='row'><div class='col-md-5 alert alert-info'> <h2>Gross Sales:<br/> $grossSales</h2></div><div class='col-md-5 alert alert-info pull-right'> <h2>Gross Profit: <br/> $grossProfit</h2></div></div> ";
$sth->finish();
$dbh->disconnect();
print "</div>\n";
print "</div>\n";
print "</body>\n";
print "</html>\n";
