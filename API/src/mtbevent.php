<?php

/**
 * 
 * @author - James Tatton
 * 
*/

// Includes the database connection
require_once 'db/dbConn.php';

// Creates the class and extends the Endpoint class
class MtbEvent extends Endpoint
{

    // Overrides the initialiseSQL function from the Endpoint class
    protected function initialiseSQL()
    {
        // Sets the SQL query to be executed, this selects all of the data from the mtbEvent table
        $sql = "SELECT * FROM mtbEvent ORDER BY mtbEvent.date";
        $sqlParams = [];

        // Sets the SQL query and SQL parameters
        $this->setSQL($sql);
        $this->setSQLParams($sqlParams);
    }

    // Defines valid parameters
    protected function endpointParams() {
        return [''];
    }
}