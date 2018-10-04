angular
    .module("myapp")
    .factory('apiFactory', function ($http, $q, $httpParamSerializerJQLike) {
        return {
            //getting all post 
            getallpost: function () {
                var getAllPost =
                    $http({
                        method: "GET",
                        url: "http://localhost:60219/api/allpost"
                    });
                return getAllPost;
            },
            //geting post details by Id
            getPostdetails: function (id) {
                var deferred = $q.defer();
                $http({
                    method: "GET",
                    url: "http://localhost:60219/api/allpost?id=" + id,
                }).then(function mySuccess(response) {
                    deferred.resolve(response);
                }, function myError(response) {
                    deferred.reject(response);

                });
                return deferred.promise;
            },
            //getting comments 
            getComments: function (id) {
                var deferred = $q.defer();
                $http({
                    method: "GET",
                    url: "http://localhost:60219/api/PostComments?id=" + id

                }).then(function mySuccess(response) {
                    deferred.resolve(response);
                }, function myError(response) {
                    deferred.resolve(response);

                });
                return deferred.promise;
            },
            //getting my post
            getmypost: function (username) {
                var getMyPost =
                    $http({
                        method: "GET",
                        headers: {
                            'Authorization': 'Bearer '
                                + sessionStorage.getItem("accessToken")
                        },
                        url: "http://localhost:60219/api/mypost?author=" + username
                    })
                return getMyPost;
            },
            //getting author post
            getauthorpost: function (author) {
                var authorpost = $http({
                    method: "GET",
                    url: "http://localhost:60219/api/allpost?author=" + author
                })
                return authorpost
            },
            //adding post
            postAdd: function (postData) {
                var postdata = $http({
                    method: 'POST',
                    url: 'http://localhost:60219/api/AllPost',
                    headers: {
                        'Authorization': 'Bearer '
                            + sessionStorage.getItem("accessToken")
                    },
                    data: postData
                })
                return postdata;
            },
            //posting comments
            postComments: function (postCommentsData) {
                var postComment = $http({
                    method: 'POST',
                    url: 'http://localhost:60219/api/PostComments',
                    header: { 'Content-Type': 'application/json' },
                    data: postCommentsData
                })
                return postComment;
            },
            //deleting my post 
            deleteMypost: function (id) {
                var deleteMyPost = $http({
                    method: "Delete",
                    headers: {
                        'Authorization': 'Bearer '
                            + sessionStorage.getItem("accessToken")
                    },
                    url: "http://localhost:60219/api/mypost/" + id
                })
                return deleteMyPost;
            },
            //posting login 
            postlogin: function (loginData) {
                var loginPost = $http({
                    method: 'POST',
                    url: '/token',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    //header: { 'Content-Type': 'application/json' },

                    data: $httpParamSerializerJQLike(loginData)
                })
                return loginPost
            },
            postregister: function (registerdata) {
                var register = $http({
                    method: 'POST',
                    url: '/api/account/register',
                    header: { 'Content-Type': 'application/json' },
                    data: registerdata
                })
                return register;
            },
            editpostforrating: function (id, datasforrank) {
                var editranking = $http({
                    method: 'PUT',
                    url: "http://localhost:60219/api/AllPost?id=" + id,
                    header: { 'Content-Type': 'application/json' },
                    data: datasforrank
                })
                return editranking;
            },

        }
    })