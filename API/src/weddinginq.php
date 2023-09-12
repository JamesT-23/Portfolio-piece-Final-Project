<?php

/**
 * 
 * @author - James Tatton
 * 
*/

// Includes the database connection
require_once 'db/dbConn.php';

// Creates the class and extends the Endpoint class
class WeddingInq extends Endpoint
{

    // Overrides the initialiseSQL function from the Endpoint class
    protected function initialiseSQL()
    {
        // Sets the SQL query to be executed, this selects all records from the wedEvent table
        $sql = "SELECT * FROM wedEvent ORDER BY wedEvent.date";
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