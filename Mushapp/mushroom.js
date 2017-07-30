'use strict';
    
mushApp.factory("MushroomFactory", function($q, $http, FirebaseUrl, FBgetter) {

    var config = {
        apiKey: FBgetter.key,
        authDomain: FBgetter.authDomain

    };

    firebase.initializeApp(config);

        let getMushrooms = () => {
            return $q((resolve, reject) => {
                $http.get(`./mushroominfo.json`)
                    .then((mushrooms) => {
                        
                        resolve(mushrooms);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            return { getMushrooms };
            });
        };
    });
    


mushApp.controller("MushroomController", function($scope, MushroomFactory) {
    MushroomFactory.getMushrooms()
        .then((MushroomData) => {
            $scope.mushroomList = MushroomData.mushroom;
        });
});

