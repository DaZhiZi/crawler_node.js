const movie = require('../model/movies')


const all = {
    path: '/api/movie/all',
    method: 'get',
    func: function(request, response) {
        let movies = movie.all()
        let r = JSON.stringify(movies)
        response.send(r)
    }
}


 
const routes = [
    all,
]

module.exports.routes = routes
