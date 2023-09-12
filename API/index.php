<?php

/**
 * 
 * @author - James Tatton
 * 
*/

// Sets the header to allow cross origin requests
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Credentials: true");

// Checks if the request method is OPTIONS and if it is it exits the script
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {    
    exit(0);
} 

// Includes the required files
include 'config/exceptionHandler.php';
set_exception_handler('exceptionHandler');
include 'config/autoloader.php';
spl_autoload_register('autoloader');

// Defines the secret key used to encrypt the JWT
define('SECRET' , "}y%iYa?z5;_#'_2/&s/+R<>O9I<T7E");

// Creates a new reqeuest object
$request = new Request();

try{
    switch($request->getPath()) {
        // If path is for the wedding inquries it creates a new WeddingInq object
        case '/weddinginq':
            $request->validateRequestMethod(array("GET"));
            $endpoint = new WeddingInq($request);
            break;
        // If path is for the mtb events it creates a new MTBEvent object
        case '/mtbevent':
            $request->validateRequestMethod(array("GET"));
            $endpoint = new MTBEvent($request);
            break;
        // If path is for the wed events it creates a new WedEvent object
        case '/addmtbevent':
            $request->validateRequestMethod(array("POST"));
            $endpoint = new AddMTBEvent($request);
            break;
        // If path is for the addMTBEventNotes it creates a new AddMTBEventNotes object
        case '/addmtbeventnotes':
            $request->validateRequestMethod(array("POST"));
            $endpoint = new AddMTBEventNotes($request);
            break;
        // If path is for the addWedEvent it creates a new AddWedEvent object
        case '/addwedevent':
            $request->validateRequestMethod(array("POST"));
            $endpoint = new AddWedEvent($request);
            break;
        // If path is for the authenticate it creates a new Authenticate object
        case '/authenticate':
            $request->validateRequestMethod(array("POST"));
            $endpoint = new Authenticate($request);
            break;
        // If path is for the removewed it creates a new RemoveWed object
        case '/removewed':
            $request->validateRequestMethod(array("GET"));
            $endpoint = new RemoveWed($request);
            break;
        // If path is for the removemtb it creates a new RemoveMtb object
        case '/removemtb':
            $request->validateRequestMethod(array("GET"));
            $endpoint = new RemoveMtb($request);
            break;
        // If path is for the dismessage it creates a new DisMessage object
        case '/dismessage':
            $request->validateRequestMethod(array("GET"));
            $endpoint = new DisMessage($request);
            break;
        // If path is for the updatemessage it creates a new UpdateMessage object
        case '/updatemessage':
            $request->validateRequestMethod(array("POST"));
            $endpoint = new UpdateMessage($request);
            break;
        // If it is none of the above it returns a 404 error
        default:
            $endpoint = new ClientError("Path not found: " . $request->getPath(), 404);
    }
// Catches all client errors that are thrown and returns the error message and error code
} catch(ClientErrorException $e) {
        $endpoint = new ClientError($e->getMessage(), $e->getCode());
}

// Gets the data from the endpoint and encodes it as json data
$data = $endpoint->getData();
echo json_encode($data);