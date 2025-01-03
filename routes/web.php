<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('home', ['name' => 'Bagas Aditia']);
// });

Route::inertia('/', 'home', ['bg' => 'bg-main']);
