<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seeds the two demo accounts and the car catalogue the client used to
     * hardcode in src/data/mock.js.
     */
    public function run(): void
    {
        $zach = User::updateOrCreate(
            ['email' => 'zach@email.com'],
            ['name' => 'zach', 'password' => '12345678', 'image' => 'zack.webp'],
        );

        $yisak = User::updateOrCreate(
            ['email' => 'yisak@email.com'],
            ['name' => 'yisak', 'password' => '12345678', 'image' => 'zack.webp'],
        );

        $catalogue = [
            ['zach', 'Tesla Model 3', 42999, 'A sleek electric sedan with autopilot, long range battery, and minimalist interior. Perfect for eco-conscious drivers.', 'photo-1560958089-b8a1929cea89', 'approved'],
            ['yisak', 'Ford Mustang GT', 55999, 'Iconic American muscle car with a 5.0L V8 engine, aggressive styling, and exhilarating performance.', 'photo-1584345604476-8ec5e12e42dd', 'approved'],
            ['zach', 'Toyota Land Cruiser', 68999, 'A legendary SUV built for off-road dominance with premium comfort, advanced 4WD, and rugged durability.', 'photo-1533473359331-0135ef1b58bf', 'approved'],
            ['zach', 'BMW M4 Competition', 74999, 'A high-performance coupe with twin-turbo inline-6, sport-tuned suspension, and razor-sharp handling.', 'photo-1621135802920-133df287f89c', 'pending'],
            ['yisak', 'Porsche 911 Carrera', 114999, 'A timeless sports car with rear-engine layout, precision steering, and iconic silhouette that never goes out of style.', 'photo-1503376780353-7e6692767b70', 'approved'],
            ['yisak', 'Range Rover Sport', 82999, 'Luxury meets capability in this premium SUV, offering adaptive air suspension, refined interiors, and serious off-road credentials.', 'photo-1606664515524-ed2f786a0bd6', 'approved'],
            ['zach', 'Chevrolet Camaro SS', 48999, 'Bold styling and raw power define this American icon, packing a supercharged V8 and track-ready performance.', 'photo-1552519507-da3b142c6e3d', 'rejected'],
            ['yisak', 'Mercedes-Benz G-Class', 139999, 'The ultimate luxury off-roader with a boxy iconic design, handcrafted interior, and unstoppable all-terrain capability.', 'photo-1609521263047-f8f205293f24', 'approved'],
            ['yisak', 'Audi R8 V10', 159999, 'A mid-engine supercar with a naturally aspirated V10, quattro AWD, and breathtaking 200+ mph top speed.', 'photo-1544636331-e26879cd4d9b', 'approved'],
            ['zach', 'Lamborghini Urus', 229999, "The world's most powerful SUV combines supercar DNA with everyday usability, twin-turbo V8, and jaw-dropping looks.", 'photo-1621135802920-133df287f89c', 'pending'],
        ];

        foreach ($catalogue as [$owner, $name, $price, $description, $photo, $status]) {
            Product::updateOrCreate(
                ['name' => $name],
                [
                    'user_id' => $owner === 'zach' ? $zach->id : $yisak->id,
                    'price' => $price,
                    'description' => $description,
                    'image' => "https://images.unsplash.com/{$photo}?w=500",
                    'status' => $status,
                ],
            );
        }
    }
}
