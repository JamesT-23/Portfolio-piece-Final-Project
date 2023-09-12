<?php 

/**
 * 
 * @author - James Tatton
 * 
*/

// Includes the database connection
require_once 'db/dbConn.php';

// Creates the class and extends the Endpoint class
class AddMtbEvent extends Endpoint {

    // Overrides the initialiseSQL function from the Endpoint class
    protected function initialiseSQL()
    {
        // Sets the variables to the values from the POST request
        $date = $_POST['date'];
        $pli = $_POST['pli'];
        $location = $_POST['location'];
        $sponsors = $_POST['sponsors'];
        $type = $_POST['type'];
        $start = $_POST['start'];
        $end = $_POST['end'];
        $ra = $_POST['ra'];
        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];

        // Sets the SQL query to be executed, this inserts into mtbEvent table
        $sql = "INSERT INTO mtbEvent (id, date, pli, location, sponsors, type, start, end, risk, clientName, clientEmail, clientPhone) VALUES (0, :date, :pli, :location, :sponsors, :type, :start, :end, :ra, :name, :email, :phone)";

        // Sets the SQL query and SQL parameters
        $this->setSQL($sql);
        $this->setSQLParams(array('date'=>$date, 'pli'=>$pli, 'location'=>$location, 'sponsors'=>$sponsors, 'type'=>$type, 'start'=>$start, 'end'=>$end, 'ra'=>$ra, 'name'=>$name, 'email'=>$email, 'phone'=>$phone));
    }

    // Overrides the constructor
    public function __construct() {

        // Creates a new database connection
        $dbConnection = getConnection();

        // Calls the initialiseSQL function and executes the SQL query
        $this->initialiseSQL();
        $prepStmnt = $dbConnection->prepare($this->getSQL());
        $prepStmnt->execute($this->getSQLParams());
    }
}