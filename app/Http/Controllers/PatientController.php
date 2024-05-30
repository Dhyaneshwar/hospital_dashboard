<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use Illuminate\Http\Request;

class PatientController extends Controller
{
    public function getPatients(Request $request){
        $patients = Patient::all();
        return response()->json($patients);
    }
}
