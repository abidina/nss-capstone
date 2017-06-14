app.factory("APIFactory", function ($q, $http) {
    let artGrid = () => {
        return $q(function (resolve, reject) {
            $http.get(`https://data.nashville.gov/resource/xakp-ess3.json`)
                .success(function(returnObject) {
                    resolve(returnObject);
        })
        .error(function(error){
            reject(error);
            });
        });
    };

    return { artGrid: artGrid };
});