<?php

// Includes any external file that is needed if it is inside the src folder
/** 
 * @param string $className The name of the class to be loaded
 * @var string $filename The path to the file to be loaded
*/
  function autoloader($className)
  {
    $filename = "src\\" . strtolower($className) . ".php";
    $filename = str_replace('\\', DIRECTORY_SEPARATOR, $filename);
    if (is_readable($filename)) {
        include_once $filename;
    } else {
        exit("File not found: " . $className . " (" . $filename . ")");
    }
  }
?>
