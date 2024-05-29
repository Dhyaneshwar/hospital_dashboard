<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class PatientSeeder extends Seeder
{
    public function run()
    {
        $csvFile = base_path('database/seeders/data/patients_dataset.csv');
        $file = fopen($csvFile, 'r');

        // Skip the header row
        fgetcsv($file);

        while (($data = fgetcsv($file, 1000, ',')) !== FALSE) {
            DB::table('patients')->insert([
                'first_name' => $data[0],
                'last_name' => $data[1],
                'date_of_birth' => $data[2],
                'group' => $data[3],
            ]);
        }

        fclose($file);
    }
}
