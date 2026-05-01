<?php

class UserController {

    public function home() {
        jsonResponse([
            "message" => "PHP API is alive 😎"
        ]);
    }

    public function getUsers() {
        jsonResponse([
            "users" => [
                ["id" => 1, "name" => "Alice"],
                ["id" => 2, "name" => "Bob"]
            ]
        ]);
    }

    public function getUserById($vars) {
        jsonResponse([
            "user" => [
                "id" => $vars['id'],
                "name" => "User " . $vars['id']
            ]
        ]);
    }
}
