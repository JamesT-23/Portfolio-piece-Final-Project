<?php

/**
 * 
 * @author - James Tatton
 * 
*/

// Includes the database connection
require_once 'db/dbConn.php';

// Creates the class and extends the Endpoint class
class UpdateMessage extends Endpoint
{

    // Overrides the initialiseSQL function from the Endpoint class
    protected function initialiseSQL()
    {
        // Sets the variables to the values from the POST request
        $message = $_POST['message'];

        // Sets the SQL query to be executed, this updates the variable messagae in the database if the id is equal to 1
        $sql = "UPDATE VariableMessage
                SET message = :message
                WHERE id = 1";

        // Sets the SQL query and SQL parameters
        $this->setSQL($sql);
        $this->setSQLParams(array('message' => $message));
    }

    // Overrides the construct function from the Endpoint class
    public function __construct()
    {
        // Gets the database connection
        $dbConnection = getConnection();

        // Calls the initialiseSQL function and executes the SQL query
        $this->initialiseSQL();
        $prepStmnt = $dbConnection->prepare($this->getSQL());
        $prepStmnt->execute($this->getSQLParams());
    }
}
