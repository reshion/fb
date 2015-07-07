<?php

    /*
     * To change this license header, choose License Headers in Project Properties.
     * To change this template file, choose Tools | Templates
     * and open the template in the editor.
     */

    /**
     * Description of HomeTest
     *
     * @author rico
     */
    class HomeTest extends TestCase
        {
            public function testHomeController() {
                 $response = $this->call('GET', 'home');


                    return $this->assertEquals('Fishbook', $response->getContent());
                    
                }
        }
    