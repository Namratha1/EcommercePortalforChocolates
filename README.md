# EcommercePortalforChocolates

 For this assignment, you will create an online store web site that features products from a fictional company, Bertha's Deluxe Chocolates. This company produces fine chocolates and confections for sale over the Internet. You will create the online store front for the company that allows customers to browse the various product offerings, and purchase products online. Your site must feature a shopping cart that allows customers to add or remove items. Additionally, you may create for extra credit (details below) a report page for management that shows all orders placed, ordered by date.

Your main page (/~jadrnxxx/proj4/index.html) must include the following:

    Links: Home, Products, Order Online, About Us, Contact.
    Home: Brings the user back to the main page.
    Products: A description of the types of candies available for order. Products should be organized by category.
    Order Online: An order form for the customer to select the types of chocolates to order and the quantity of each. Look at existing online order forms for ideas of the best way to organize your checkout form. Users must be able to edit the quantity or remove an item. The total (extended amount) for an item must change dynamically when the user changes the quantity field. At the bottom your form should show a grand total for the order.
    The About Us and Contact links are static pages with appropriate fictional details.

The products should be organized by categories:

    Milk chocolate
    Dark chocolate
    Nuts and chews
    Brittles and toffies
    Truffles
    Gifts
    Holiday assortments

The database

The available products for sale are in a read-only table named products in database proj4 on opatija.sdsu.edu. You will query this table to populate the items in your web site.

Here's how to connect to the database with Perl:


my $host = "opatija.sdsu.edu";
my $port = "3306";
my $database = "proj4";
my $username = "jadrnXXX";
my $password = "apple";
my $database_source = "dbi:mysql:$database:$host:$port";

	
my $dbh = DBI->connect($database_source, $username, $password) 
or die 'Cannot connect to db';

Note that you have limited privileges on the products table. The only command you can execute on this table is SELECT. Make all connections to the proj4 database using YOUR account, not jadrn000.

You will need to store sales information to produce the reports. This information should be stored in your database on opatija.

The fields in table products are:

mysql> describe products;
+-------------------+--------------+------+-----+---------+-------+
| Field             | Type         | Null | Key | Default | Extra |
+-------------------+--------------+------+-----+---------+-------+
| sku               | char(9)      | NO   | PRI | NULL    |       |
| category          | varchar(20)  | YES  |     | NULL    |       |
| title             | varchar(25)  | YES  |     | NULL    |       |
| short_description | varchar(200) | YES  |     | NULL    |       |
| long_description  | varchar(500) | YES  |     | NULL    |       |
| cost              | decimal(6,2) | YES  |     | NULL    |       |
| retail            | decimal(6,2) | YES  |     | NULL    |       |
+-------------------+--------------+------+-----+---------+-------+
7 rows in set (0.00 sec)

The Order Form

The order form should have the following fields:

    Billing Address
        First Name
        Last Name
        Address (two lines)
        City/State/Zip
        Phone
    Shipping Address
        First Name
        Last Name
        Address (two lines)
        City/State/Zip
        Phone
    Payment Type (Visa, Mastercard, Discover, American Express)
    Card Number
    Expiration Date

Technology

You will use html5 or xhtml, css, Javascript and/or jQuery, Perl for all dynamic code, and the MySQL databases on opatija. For this assignment, you must use Perl cgi for all dynamic code. You may not use any PHP code in this project.
Additional Details

    The application must be user-friendly. The customer ordering experience will be an important criterion for the project grade. For instance, many customers will order products for themselves. They should not have to re-enter the same information twice. Perhaps a "Ship to same address" checkbox can be used to determine whether or not to autofill the second name/address block. Think carefully about enhancing the customer experience.
    Use javascript creatively, and AJAX where appropriate to avoid refreshing the page from the server.
    Be sure to place your html, CSS, and javascript into separate files. In some of the examples posted, I have put html, CSS and javascript in a single file to make the examples easier to follow. But you should not do this.
    Charge $2.00 shipping fee for each item.
    Use the tax rate in San Diego for all purchaes (8.0%).
    Note that you are not storing any customer information. This was done to keep the size of the project manageable. You will only store the information needed for the report:
        date
        sku
        quantity
    The additional report fields (see below) can be obtained by a database query.
    It should be obvious, but make sure that you do not show the cost price to customers. Cost is what it costs Bertha's to make the product. Retail is the price customers pay for the product.

Once the order is submitted, the customer should receive a confirmation that includes details of the order, including tax, shipping charges and a total, as well as the address where the order is to be shipped. Do not print credit card numbers to screen *ever*. You may let the customer know which card was used by showing only the last four digits, preceded by X's. ie XXXX XXXX XXXX 3281. In other words, look at commercial applications and compare your efforts with them. Your project should look and feel like a "real" application, and should be as user friendly as possible. This is an important metric for determining your project grade.
Sales Report.
For extra credit (15%) prepare a sales report that shows total sales and profit for each product sold, ordered by SKU, with a grand total for gross sales and profit at the bottom. Your report should be available at the following URL:

http://jadran.sdsu.edu/perl/jadrnxxx/report.cgi
