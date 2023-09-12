<?php


// Handles any exceptions thrown by the API, returns the error message and error code, and sets the HTTP response code
function exceptionHandler($e) {
    http_response_code(500);
    $output['message'] = $e->getMessage();
    $output['location']['file'] = $e->getFile();
    $output['location']['line'] = $e->getLine();
    echo json_encode($output);
}