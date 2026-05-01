<?php

require __DIR__ . '/../vendor/autoload.php';

use function FastRoute\simpleDispatcher;

require __DIR__ . '/../src/routes/routes.php';
require __DIR__ . '/../src/helpers/response.php';

$httpMethod = $_SERVER['REQUEST_METHOD'];
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

$dispatcher = getRoutes();

$routeInfo = $dispatcher->dispatch($httpMethod, $uri);

switch ($routeInfo[0]) {

    case \FastRoute\Dispatcher::NOT_FOUND:
        jsonResponse(["error" => "Not Found"], 404);
        break;

    case \FastRoute\Dispatcher::METHOD_NOT_ALLOWED:
        jsonResponse(["error" => "Method Not Allowed"], 405);
        break;

    case \FastRoute\Dispatcher::FOUND:
        [$class, $method] = explode("@", $routeInfo[1]);
        $vars = $routeInfo[2];

        require_once __DIR__ . "/../src/controller/$class.php";

        $controller = new $class();
        $controller->$method($vars);

        break;
}
