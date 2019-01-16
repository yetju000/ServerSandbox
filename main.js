/**
 * My API Sandbox
 * 
 */

// A basic route returning a canned response
Sandbox.define('/hello', 'get', function(req, res) {
    // send 'Hello world' response
    res.send('Hello world');
});


// Using stateful behaviour to simulate creating users
Sandbox.define('/users', 'POST', function(req, res) {
    // retrieve users or, if there are none, init to empty array
    state.users = state.users || [];
    
    // persist user by adding to the state object
    state.users.push(req.body);

    return res.json({status: "ok"});
});

// Using stateful behaviour to simulate getting all users
Sandbox.define('/users', 'GET', function(req, res){
    // retrieve users or, if there are none init, to empty array
    //state.users = state.users || [];
    state.users = [{"name":"Janet"}];
    
    return res.json(state.users);
});

// Using named route parameters to simulate getting a specific user
Sandbox.define('/users/{username}', 'GET', function(req, res) {
    // retrieve users or, if there are none, init to empty array
    state.users = state.users || [];

    // route param {username} is available on req.params
    var username = req.params.username;

    // log it to the console
    console.log("Getting user " + username + " details");

    // use lodash to find the user in the array
    var user = _.find(state.users, { "username": username});
    
    return res.json(user);
});

Sandbox.define('/friends','GET', function(req, res){
    // Check the request, make sure it is a compatible type
    
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    state.users = [{
        "avatar": "assets/5.jpg",
        "name": "Janet",
        "lastname": "Weaver",
        "gamesExchanged": 5
    }, {
        "avatar": "assets/4.jpg",
        "name": "George",
        "lastname": "Bluth",
        "gamesExchanged": 2
    }, {
        "avatar": "assets/3.jpg",
        "name": "Emma",
        "lastname": "Wong",
        "gamesExchanged": 8
    }, {
        "avatar": "assets/2.jpg",
        "name": "Donald",
        "lastname": "Trampek",
        "gamesExchanged": 13
    }, {
        "avatar": "assets/1.jpg",
        "name": "Santa",
        "lastname": "Claus",
        "gamesExchanged": 21
    }];
    
    // Send the response body.
    res.json(state.users);
})

Sandbox.define('/wall','GET', function(req, res){
    // Check the request, make sure it is a compatible type
    
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    state.games = [{
        "avatar": "assets/5.jpg",
        "name": "Janet",
        "lastname": "Weaver",
        "from": "Call of Duty",
        "to": "Assassin's Creed",
        "fromImage": "assets/g1.jpg",
        "toImage": "assets/g2.jpg",
        "id":1
    }, {
        "avatar": "assets/4.jpg",
        "name": "George",
        "lastname": "Bluth",
        "from": "Medal of Honor",
        "to": "Far Cry",
        "fromImage": "assets/g3.jpg",
        "toImage": "assets/g4.jpg",
        "id":2
    }, {
        "avatar": "assets/3.jpg",
        "name": "Emma",
        "lastname": "Wong",
        "from": "Thief",
        "to": "Wiedzmin",
        "fromImage": "assets/g5.jpg",
        "toImage": "assets/g6.jpg",
        "id":3
    }, {
        "avatar": "assets/2.jpg",
        "name": "Donald",
        "lastname": "Trampek",
        "from": "Tomb Raider",
        "to": "Hitman",
        "fromImage": "assets/g7.jpg",
        "toImage": "assets/g8.jpg",
        "id":4
    }, {
        "avatar": "assets/1.jpg",
        "name": "Santa",
        "lastname": "Claus",
        "from": "GTA",
        "to": "L.A. Noire",
        "fromImage": "assets/g9.jpg",
        "toImage": "assets/g10.jpg",
        "id":5
    }];
    
    // Send the response body.
    res.json(state.games);
})

Sandbox.define('/games/users/{id}','GET', function(req, res){
    // Check the request, make sure it is a compatible type
    
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    state.games = [{
        "game": "Assassin's Creed",
        "image": "assets/g2.jpg"
    }, {
        "game": "Far Cry",
        "image": "assets/g4.jpg"
    }, {
        "game": "Wiedzmin",
        "image": "assets/g6.jpg"
    }, {
        "game": "Hitman",
        "image": "assets/g8.jpg"
    }, {
        "game": "L.A. Noire",
        "image": "assets/g10.jpg"
    }];
    
    // Send the response body.
    res.json(state.games);
})

Sandbox.define('/games','GET', function(req, res){
    // Check the request, make sure it is a compatible type
    
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    state.games = [{
        "game": "Call of Duty",
        "photo": "assets/g1.jpg",
        "id" : 1
    }, {
        "game": "Medal of Honor",
        "photo": "assets/g3.jpg",
        "id" : 2
    }, {
        "game": "Thief",
        "photo": "assets/g5.jpg",
        "id" : 3
    }, {
        "game": "Tomb Raider",
        "photo": "assets/g7.jpg",
        "id" : 4
    }, {
        "game": "GTA",
        "photo": "assets/g9.jpg",
        "id" : 5
    }, {
        "game": "Assassin's Creed",
        "photo": "assets/g2.jpg",
        "id" : 6
    }, {
        "game": "Medal of Honor",
        "game": "Far Cry",
        "photo": "assets/g4.jpg",
        "id" : 7
    }, {
        "game": "Wiedzmin",
        "photo": "assets/g6.jpg",
        "id" : 8
    }, {
        "game": "Hitman",
        "photo": "assets/g8.jpg",
        "id" : 9
    }, {
        "game": "L.A. Noire",
        "photo": "assets/g10.jpg",
        "id" : 10
    }];
    
    // Send the response body.
    res.json(state.games);
})

Sandbox.define('/games/{gameId}/users/{userId}', 'POST', function(req, res){
    // Check the request, make sure it is a compatible type
    
    
    // Set the type of response, sets the content type.
    res.type('application/json');
    game = null;
    
    // Set the status code of the response.
    res.status(200);
    if (req.params["gameId"] == 1) {
        game = {
            "name": "Call of Duty",
            "image": "assets/g1.jpg"
        }
    }
    if (req.params["gameId"] == 6) {
        game = {
            "name": "Assassin's Creed",
            "image": "assets/g2.jpg"
        }
    }
    if (req.params["gameId"] == 2) {
        game = {
            "name": "Medal of honor",
            "image": "assets/g3.jpg"
        }
    }
    if (req.params["gameId"] == 7) {
        game = {
            "name": "Far Cry",
            "image": "assets/g4.jpg"
        }
    }
    if (req.params["gameId"] == 3) {
        game = {
            "name": "Thief",
            "image": "assets/g5.jpg"
        }
    }
    if (req.params["gameId"] == 8) {
        game = {
            "name": "Wiedzmin",
            "image": "assets/g6.jpg"
        }
    }
    if (req.params["gameId"] == 4) {
        game = {
            "name": "Tomb Raider",
            "image": "assets/g7.jpg"
        }
    }
    if (req.params["gameId"] == 9) {
        game = {
            "name": "Hitman",
            "image": "assets/g8.jpg"
        }
    }
    if (req.params["gameId"] == 5) {
        game = {
            "name": "GTA",
            "image": "assets/g9.jpg"
        }
    }
    if (req.params["gameId"] == 10) {
        game = {
            "name": "L.A. Noire",
            "image": "assets/g10.jpg"
        }
    }
    // Send the response body.
    res.json(game);
})

Sandbox.define('/games/exchange/{id}', 'GET', function(req, res){
    // Check the request, make sure it is a compatible type
    
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    if (req.params["gameId"] == 1) {
        game = {
            "name": "Call of Duty",
            "image": "assets/g1.jpg"
        }
    }
    if (req.params["gameId"] == 6) {
        game = {
            "name": "Assassin's Creed",
            "image": "assets/g2.jpg"
        }
    }
    if (req.params["gameId"] == 2) {
        game = {
            "name": "Medal of honor",
            "image": "assets/g3.jpg"
        }
    }
    if (req.params["gameId"] == 7) {
        game = {
            "name": "Far Cry",
            "image": "assets/g4.jpg"
        }
    }
    if (req.params["gameId"] == 3) {
        game = {
            "name": "Thief",
            "image": "assets/g5.jpg"
        }
    }
    if (req.params["gameId"] == 8) {
        game = {
            "name": "Wiedzmin",
            "image": "assets/g6.jpg"
        }
    }
    if (req.params["gameId"] == 4) {
        game = {
            "name": "Tomb Raider",
            "image": "assets/g7.jpg"
        }
    }
    if (req.params["gameId"] == 9) {
        game = {
            "name": "Hitman",
            "image": "assets/g8.jpg"
        }
    }
    if (req.params["gameId"] == 5) {
        game = {
            "name": "GTA",
            "image": "assets/g9.jpg"
        }
    }
    if (req.params["gameId"] == 10) {
        game = {
            "name": "L.A. Noire",
            "image": "assets/g10.jpg"
        }
    }
    // Send the response body.
    res.json(game);
})