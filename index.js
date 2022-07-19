const requestURL = 'https://jsonplaceholder.typicode.com/todos'
// // GET
function sendRequst1(method, url) {
    return fetch(url).then(response => response.json())
}
sendRequst1('GET', requestURL)
.then(data => console.log(data, 'Get'))

function sendRequst2(method, url, body = null) {
    const headers = {
        'Content-type': 'application/json'
    }
    return fetch(url, {
        method,
        body: JSON.stringify(body),
        headers
    }).then(response => response.json())}
const body = {
    name: 'Egor',
    user: 123
}
sendRequst2('POST', requestURL, body)
    .then(data => console.log(data,'Post'))


function sendRequst3 (method, url, body = null){
    return fetch(requestURL, {
        method: 'DELETE',
        body: JSON.stringify({id: 1})
    })

}
sendRequst3('PATCH', 'https://jsonplaceholder.typicode.com/todos/1')
    .then(response => console.log(response, 'DELETE'))

