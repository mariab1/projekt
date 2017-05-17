<?php

namespace Tests\Unit;

use App\Project;
use Faker\Factory as Faker;
use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testCanCreateIdeaViaAPI()
    {
        $project = factory(Project::class)->create();
        $faker = Faker::create();
        $link = $faker->domainName;
        $price = $faker->randomNumber(4);

        $response = $this->json('POST', '/api/ideas', [
            'link' => $link,
            'price' => $price,
            'notes' => 'Idea notes',
            'user_id' => $project->user_id,
            'project_id' => $project->id,
            'file' => 'test'
        ]);

        $response
            ->assertStatus(200)
            ->assertJson([
                'link' => $link,
                'price' => $price,
                'user_id' => $project->user_id
            ]);
    }
}
