<?php

/**
 * 
 * @author - James Tatton
 * 
*/

// This classs is used to return an error to the user
class ClientError extends Endpoint
{

    // Overrides the __construct function from the Endpoint class
    public function __construct($message = "", $code = 400)
    {
        // Sets the HTTP response code
        http_response_code($code);

        // Sets the data to be returned as the message that has been passed in
        $this->setData( array(
            "message" => $message,
            "data" => null
        ));
    }
}