<?php
header("Content-Type: application/json");

$data = [
  "message" => "Hello from PHP API"
];

echo json_encode($data);
