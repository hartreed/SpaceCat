//This script opens the serial port for the usb cable connected to the arduino, and reads a single byte of data
//That data is echoed and returned to the javascript function that sends the GET request

<?php
    $comPort = "/dev/cu.usbmodem1411"; //The correct usb port
    $handle = fopen($comPort, "r"); //Open it as if it were a file, with read only access
    sleep(0.4); //Give the arduino a second to get ready to send
    //fwrite($handle, "Hello space world");
    $serial = fread($handle, 1); //Pull a single byte of data from the port
    fclose($handle); //Close the connection
    if(!$serial){echo "L";}else{echo $serial;} //If you got a high signal 'H', echo that, otherwise echo 'L'
?>
