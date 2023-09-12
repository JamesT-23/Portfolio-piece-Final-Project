<?php 

/**
 * 
 * @author - James Tatton
 * 
*/

// Includes the database connection
require_once 'db/dbConn.php';

// Creates the class and extends the Endpoint class
class RemoveWed extends Endpoint {

    // Overrides the initialiseSQL function from the Endpoint class
    protected function initialiseSQL()
    {
        // Sets the variables to the values from the GET request
        $id = $_GET['id'];

        // Sets the SQL query to be executed, 
        $sql = 'DELETE FROM wedEvent WHERE id = :id';

        // Sets the SQL query and SQL parameters
        $this->setSQL($sql);
        $this->setSQLParams(array('id'=>$id));

    }

    // Overrides the construct function from the Endpoint class
    public function __construct() {

        // Gets the database connection
        $dbConnection = getConnection();

        // Calls the initialiseSQL function and executes the SQL query
        $this->initialiseSQL();
        $prepStmnt = $dbConnection->prepare($this->getSQL());
        $prepStmnt->execute($this->getSQLParams());
    }
}