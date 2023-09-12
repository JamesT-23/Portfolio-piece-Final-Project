<?php

/**
 * 
 * @author - James Tatton
 * 
*/

// Includes the database connection
require_once 'db/dbConn.php';

// Creates an absract endpoint class that all endpoints extend
abstract class Endpoint
{
    // defines the variables used within the class
    private $data;
    protected $sql;
    protected $sqlParams;

    // Sets the standard logic for the __construct function 
    public function __construct()
    {
        $dbConnection = getConnection();

        // Calls the initialiseSQL function and executes the SQL query
        $this->initialiseSQL();
        $prepStmnt = $dbConnection->prepare($this->getSQL());
        $prepStmnt->execute($this->getSQLParams());

        // Sets the data to the result of the SQL query
        $Result = $prepStmnt->fetchAll(PDO::FETCH_ASSOC);
        $this->setData($Result);
    }

    // Sets the SQL query
    protected function setSQL($sql)
    {
        $this->sql = $sql;
    }

    // Gets the SQL query
    protected function getSQL()
    {
        return $this->sql;
    }

    // Sets the SQL parameters
    protected function setSQLParams($params)
    {
        $this->sqlParams = $params;
    }

    // Gets the SQL parameters
    protected function getSQLParams()
    {
        return $this->sqlParams;
    }

    // Sets the sql query and sql parameters
    protected function initialiseSQL()
    {
        $sql = "";
        $this->setSQL($sql);
        $this->setSQLParams([]);
    }

    // Sets the data
    protected function setData($data)
    {
        $this->data = $data;
    }

    // Gets the data
    public function getData()
    {
        return $this->data;
    }

    // Gets the endpoint parameters
    protected function endpointParams() {
        return [];
    }

    // Validates the parameters set against a list of predefined parameters
    protected function validateParams($params) {
        foreach ($_GET as $key => $value) {
            if (!in_array($key, $params)) {
                http_response_code(400);
                $output['message'] = "Invalid parameter: " . $key;
                die(json_encode($output));
            }
         }    
    }

}