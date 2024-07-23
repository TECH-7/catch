# How to run project
From catchphp folder, please import the catch.sql file to a mysql database.
Open the lead_submit.php file and update the variables:

    $server
    $username
    $password
    $dbname 

to the setting of your mysql database for this.
Please host the lead_submit.php under:
http://localhost/catchphp/lead_submit.php

In the catchproject folder, please run:

    npm install

followed by

    npm start

The lead form should appear and ready for submission. Please check the "leads" table in the database afterwards.

