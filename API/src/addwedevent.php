<?php 

/**
 * 
 * @author - James Tatton
 * 
*/

// Includes the database connection
require_once 'db/dbConn.php';

// Creates the class and extends the Endpoint class
class AddWedEvent extends Endpoint {

    // Overrides the initialiseSQL function from the Endpoint class
    protected function initialiseSQL()
    {
        // Sets the variables to the values from the POST request
        $date = $_POST['date'];
        $reception = $_POST['reception'];
        $venue = $_POST['venue'];
        $food = $_POST['food'];
        $brideStart = $_POST['brideStart'];
        $groomStart = $_POST['groomStart'];
        $risk = $_POST['risk'];
        $coverage = $_POST['coverage'];
        $package = $_POST['package'];
        $theme = $_POST['theme'];
        $guests = $_POST['guests'];
        $video = $_POST['video'];
        $stay = $_POST['stay'];
        $notes = $_POST['notes'];
        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];


        // Sets the SQL query to be executed, this inserts into the wedEvent table
        $sql = "INSERT INTO wedEvent (id, date, reception, venue, food, brideStart, groomStart, RaPLI, dayCoverage, package, theme, guests, video, stay, info, clientName, clientEmail, clientPhone) 
                VALUES (0, :date, :reception, :venue, :food, :brideStart, :groomStart, :risk, :coverage, :package, :theme, :guests, :video, :stay, :notes, :name, :email, :phone)";

        // Sets the SQL query and SQL parameters
        $this->setSQL($sql);
        $this->setSQLParams(array('date'=>$date , 'reception'=>$reception , 'venue'=>$venue , 'food'=>$food , 'brideStart'=>$brideStart , 'groomStart'=>$groomStart , 'risk'=>$risk , 'coverage'=>$coverage , 'package'=>$package , 'theme'=>$theme , 'guests'=>$guests , 'video'=>$video , 'stay'=>$stay , 'notes'=>$notes , 'name'=>$name , 'email'=>$email , 'phone'=>$phone));
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