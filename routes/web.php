<?php

use App\Http\Controllers\DishController;
use App\Http\Controllers\HelloController;
use App\Http\Controllers\RestorantController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Route::get('/home', function () {
//     return Inertia::render('Home');
// })->middleware(['auth', 'verified'])->name('home');

Route::get('/hello', [HelloController::class, 'index'])->name('hello');
//restorant
Route::get('/home', [RestorantController::class, 'index'])->middleware(['auth', 'verified'])->name('home');
Route::get('/restorants/create', [RestorantController::class, 'create'])->name('restorants-create');
Route::post('/restorants', [RestorantController::class, 'store'])->name('restorants-store');
Route::get('/restorants/edit/{restorant}', [RestorantController::class, 'edit'])->name('restorants-edit');
Route::put('/restorants/{restorant}', [RestorantController::class, 'update'])->name('restorants-update');
Route::delete('/restorants/{restorant}', [RestorantController::class, 'destroy'])->name('restorants-delete');


//dish
// Route::get('/dishes', [DishController::class, 'index'])->name('dishes-index');
// Route::get('/dishes/create', [DishController::class, 'create'])->name('dishes-create');
// Route::post('/dishes', [DishController::class, 'store'])->name('dishes-store');
// Route::get('/dishes/edit/{dish}', [DishController::class, 'edit'])->name('dishes-edit');
// Route::put('/dishes/{dish}', [DishController::class, 'update'])->name('dishes-update');
// Route::delete('/dishes/{dish}', [DishController::class, 'destroy'])->name('dishes-delete');

require __DIR__ . '/auth.php';
