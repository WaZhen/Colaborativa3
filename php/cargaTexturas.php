<?php

    $directorio = '../assets/planetTextures';
    $ficheros = scandir($directorio);
    
    $checkVars = array('jpg', 'png', 'jpeg');

    $primero = true;
    for($i = 0; $i < sizeof($ficheros); $i++) {
        $spliteado = explode('.', $ficheros[$i]);
        if(in_array($spliteado[sizeof($spliteado) - 1], $checkVars)) { // mira si el ultimo elemento es jpg, png o jpeg
            if($primero) {
                echo $ficheros[$i];
                $primero = false;
            } else {
                echo ",".$ficheros[$i];
            }
        }
    }

?>