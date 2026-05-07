<?php

use FastRoute\RouteCollector;

require __DIR__ . '/../../vendor/autoload.php';

function getRoutes()
{
    return FastRoute\simpleDispatcher(function (RouteCollector $r) {

        $r->addRoute('GET', '/api', 'userController@home');

        $r->addRoute('GET', '/api/users', 'userController@getUsers');

        $r->addRoute('GET', '/api/users/{id}', 'userController@getUserById');
    });
}
