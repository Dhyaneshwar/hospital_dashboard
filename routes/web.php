<?php

use App\Http\Controllers\PatientController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/api/patients', [PatientController::class,'getPatients'])->name('Patients.getPatients');