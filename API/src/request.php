<?php

/**
 * 
 * @author - James Tatton
 * 
*/

// Defines the request class
class Request
{
    // Defines the variables used within the class
    private $method;
    private $path;

    // When the class is created it sets the method and path
    public function __construct() {
        $this->setMethod();
        $this->setPath();
    }

    // Sets the method to the request method
    private function setMethod() {
        $this->method = $_SERVER['REQUEST_METHOD'];
    }

    // Sets the path to what has been given appeneded to the end of the file structure of the API
    private function setPath() {
        $this->path = parse_url($_SERVER['REQUEST_URI'])['path'];
        $this->path = str_replace("/jwdtphotography/API","",$this->path);
    }

    // Returns the path
    public function getPath() {
        return $this->path;
    }

    // Checks whether the request method is valid by comparing it to an arary of valid request methods that have been passed in
    public function validateRequestMethod($validMethods)
    {
        if (!in_array($this->method, $validMethods)) {
            http_response_code(405);
            $output['message'] = "Invalid request method: ".$this->method;
            die(json_encode($output));
        }
    }
}