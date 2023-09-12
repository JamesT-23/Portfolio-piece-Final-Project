<?php

/**
 * 
 * @author - James Tatton
 * 
*/

// States that the firebase library is used within the file
use FirebaseJWT\JWT;

// Creates the class and extends the Endpoint class
class Authenticate extends Endpoint
{
    // Overrides the intialiseSQL function from the Endpoint class
    protected function initialiseSQL()
    {
        // Sets the SQL query to be executed, this gets the username, password, user_type
        // and id from the users table, where the username matches the one given by the user
        $sql = "SELECT users.id, users.username, users.password FROM users WHERE users.username = :username";
        
        // Sets the SQL query and the SQL parameters
        $this->setSQL($sql);
        $this->setSQLParams( array('username'=>$_SERVER['PHP_AUTH_USER']));
    }

    // Function to check if the username and password have been sent, if not it
    // throws an error and returns a 401 error code
    private function validateAuthParams() {
        if (!isset($_SERVER['PHP_AUTH_USER']) || !isset($_SERVER['PHP_AUTH_PW'])) {
            throw new ClientErrorException("Username and Password Required", 401);
        }
    }

    // Overrides the __construct function from the Endpoint class
    public function __construct() {

        // Gets the database connection, and checks the username and password have been sent
        $dbConnection = getConnection();
        $this->validateAuthParams();

        // Calls the intialiseSQL function and executes the SQL query
        $this->initialiseSQL();
        $prepStmnt = $dbConnection->prepare($this->getsql());
        $Result = $prepStmnt->execute($this->getSQLParams());
        $UserResult = $prepStmnt->fetch(PDO::FETCH_ASSOC);

        // Validates the username and password
        $this->validateUsername($UserResult);
        $this->validatePassword($UserResult);

        // Creates the JWT token and sets this as a part of the data
        $data['token'] = $this->createJWT($UserResult);

        // Sets the data to the result of the SQL query
        $this->setData( array(
            "authenticated" => true,
            "message" => "Successfully Authenticated",
            "user_id" => $UserResult['id'],
            "data" => $data
        ));

    }

    // If the username isn't set then it throws and error and returns a 401 error code
    private function validateUsername($data) {
        if (count($data)<2) {
            throw new ClientErrorException("Invalid Username or Password", 401);
        }
    }

    // Checks if the passsword entered matches the hashed password in the database,
    // if not then it throws and error and a 401 error code.
    private function validatePassword($data) {
        if (!password_verify($_SERVER['PHP_AUTH_PW'] , $data['password'])) {
            throw new ClientErrorException("Invalid Username or Password", 401);
        }
    }

    // A function that creates a JWT token. 
    private function createJWT($queryResult) {

        // Defines the SECRET key
        $secretKey = SECRET;

        $tokenPayload = [
            'iat' => time(), // Issued at: time when the token was generated
            'exp' => strtotime('+1 day', time()), // Expire in a day
            'iss' => $_SERVER['HTTP_HOST'], // Issuer
            'sub' => $queryResult['id'], // Subject
        ];

        // Encodes the token using the HS256 algorithm, with the secret key and
        //  the token payload specified above
        $jwt = JWT::encode($tokenPayload, $secretKey, 'HS256');

        return $jwt;
    }

}