<?php
new mysqli(
    <IP_V4>, // host
    'root', // username
    'hi',     // password
    <game_data>, // database name
    null,
    '/cloudsql/<GCE_INSTANCE>:<DB>'
);
?>