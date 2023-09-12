<?php

/**
 * 
 * @author - James Tatton
 * 
*/

// Gets the connection to the database
require_once 'db/dbConn.php';

// Defines the class and extends the Endpoint class
class DisMessage extends Endpoint {

    // Overrides the initialiseSQL function
    protected function initialiseSQL()
    {

        // Sets the SQL query to be executed, this selects the variable message from the database
        $sql = "SELECT * FROM VariableMessage";

        // Sets the SQL query and SQL parameters
        $this->setSQL($sql);
    }
}