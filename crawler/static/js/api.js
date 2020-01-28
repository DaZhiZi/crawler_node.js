// const ajax = (request) => {
//     /*
//     request 是一个 object, 有如下属性const
//         method, 请求的方法, string
//         url, 请求的路径, string
//         data, 请求发送的数据, 如果是 GET 方法则没这个值, string
//         callback, 响应回调, function
//
//     本题不会就放弃, 本题带了一个用法在下方
//     */
//     let r = new XMLHttpRequest()
//     r.open(request.method, request.url, true)
//     if (request.contentType !== undefined) {
//         r.setRequestHeader('Content-Type', request.contentType)
//     }
//     r.onreadystatechange = (event) => {
//         if (r.readyState === 4) {
//             request.callback(r.response)
//         }
//     }
//     if (request.method === 'GET') {
//         r.send()
//     } else {
//         r.send(request.data)
//     }
// }

// api API
var api = {}

api.ajax = function (url, method, form, response) {
    var request = {
        url: url,
        type: method,
        contentType: 'application/json',
        success: function (r) {
            response(r);
        }
    }
    if (method === 'post') {
        var data = JSON.stringify(form);
        request.data = data
    }
    // jquery ajax 函数
    $.ajax(request)
}

api.get = function (url, response) {
    var method = 'get';
    var request = {
        url: url,
        type: method,
        contentType: 'application/json',
        success: function (r) {
            response(r);
        }
    }
    // jquery ajax 函数
    $.ajax(request)
}

api.fetchMovies = function(success) {
    var url = '/api/movie/all'
    this.get(url, success)
}