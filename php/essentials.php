<?php
    function processClasses( $s ){
        /*
          SUBJECT CODE [0]
          SECTION [1]
          COURSE TITLE [2]
          UNITS [3]
          TIME [4]
          ROOM [5]
          INSTRUCTOR [6]
          MAX NO [7]
          LANG [8]
          LEVEL [9]
          FREE SLOTS [10]
          REMARKS [11]
          S [12]
          P [13]
        */
        $split = explode("\n", $s);

        foreach ( $split as &$course ){
            $data = explode("	", $course);
            
        }
    }
?>
