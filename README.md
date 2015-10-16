
       _____       _           _    __          __            
       |  __ \     | |         | |   \ \        / /            
       | |__) |___ | |__   ___ | |_   \ \  /\  / /_ _ _ __ ___ 
       |  _  // _ \| '_ \ / _ \| __|   \ \/  \/ / _` | '__/ __|
       | | \ \ (_) | |_) | (_) | |_     \  /\  / (_| | |  \__ \
       |_|  \_\___/|_.__/ \___/ \__|     \/  \/ \__,_|_|  |___/
       --------------------------------------------------------
       By Andrew Sheppard

Welcome to my OpenTable technical test attempt based upon Robot Wars.

As no technologies were stated in the requirements of this test, I am assuming that I have the creative freedom to choose the technologies myself, provided that I still meet the minimum requirements.

It is quite clear that this tecnhical test is about the use of test driven development techniques to demonstrate good programming discipline as well as writing clean, efficient and working code. However, I have the desire (I hope...) to demonstrate a little bit a little bit more than that to OpenTable.

This robot wars example showcases how to use `socket.io` with a static `express` server and `angular.js` on the client-side.

## Running the server

From the root directory:
* Launch the web server by executing the following commands using the Terminal or Command Prompt.

        $ node server.js

* Once the server is running, use your preferred web browser and navigate to your localhost on port 4994

        http://localhost:4994

## Playing Robot Wars

OK, there will be no collision detection, health bars or explosions, etc... 

**However**, you will be able to direct your robot around the arena and witness other robots being controlled by other clients who may also be connected.

***

https://www.gitignore.io/