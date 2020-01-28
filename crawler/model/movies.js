let fs = require('fs')


let movieFilePath = 'db/movie.json'


const loadMovies = function() {
    // 确保文件有内容, 这里就不用处理文件不存在或者内容错误的情况了
    // 注意, 一般都是这样不处理的
    var content = fs.readFileSync(movieFilePath, 'utf8')
    var movies = JSON.parse(content)
    return movies
}

/*
b 这个对象是我们要导出给别的代码用的对象
它有一个 data 属性用来存储所有的 movies 对象
它有 all 方法返回一个包含所有 movie 的数组

*/
const b = {
    data: loadMovies()
}

b.all = function() {
    let movies = this.data
    return movies
}

// 导出一个对象的时候用 module.exports = 对象 的方式
// 这样引用的时候就可以直接把模块当这个对象来用了(具体看使用方法)
module.exports = b
