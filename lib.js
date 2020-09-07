const fetch = require('node-fetch');


const login = (username, password) => new Promise((resolve, reject) => {
    const url = 'https://api.x898xe.fun/api/login/login';
    const body = { "username": username, "password": password, "devicetype": "android", "version": 100 }

    fetch(url, {
        method: 'POST',
        headers: {
            'user-agent': 'Redmi Note 4(Android/6.0) (com.spsd.st/1.0.4) Weex/0.26.0 1080x1920',
            'language': 'en-US',
            'Content-Type': 'application/json; charset=utf-8',
            'Host': 'api.x898xe.fun',
            'Connection': 'Keep-Alive',
            'Accept-Encoding': 'gzip'
        },
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .then(result => resolve(result))
        .catch(err => reject(err))
});

const address = (token, no) => new Promise((resolve, reject) => {
    const url = 'https://api.x898xe.fun/api/user/addAddress';
    const body = { "isdefault": 1, "realname": "Real Name", "telephone": no, "region": "Porgal", "detail": "Porgak", "id": "" }

    fetch(url, {
        method: 'POST',
        headers: {
            'user-agent': 'Redmi Note 4(Android/6.0) (com.spsd.st/1.0.4) Weex/0.26.0 1080x1920',
            'token': token,
            'language': 'en-US',
            'Content-Type': 'application/json; charset=utf-8',
            'Host': 'api.x898xe.fun',
            'Connection': 'Keep-Alive',
            'Accept-Encoding': 'gzip'
        },
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .then(result => resolve(result))
        .catch(err => reject(err))
});

const mkorder = (token) => new Promise((resolve, reject) => {
    const url = 'https://api.x898xe.fun/api/order/mkorder';

    fetch(url, {
        method: 'POST',
        headers: {
            'user-agent': 'Redmi Note 4(Android/6.0) (com.spsd.st/1.0.4) Weex/0.26.0 1080x1920',
            'token': token,
            'language': 'en-US',
            'Content-Type': 'application/json; charset=utf-8',
            'Host': 'api.x898xe.fun',
            'Connection': 'Keep-Alive',
            'Accept-Encoding': 'gzip'
        },
        body: ""
    })
        .then(res => res.json())
        .then(result => resolve(result))
        .catch(err => reject(err))
});

const confirm = (token, orderid) => new Promise((resolve, reject) => {
    const url = 'https://api.x898xe.fun/api/order/confirm';
    const body = { "orderid": orderid, "status": 1 }

    fetch(url, {
        method: 'POST',
        headers: {
            'user-agent': 'Redmi Note 4(Android/6.0) (com.spsd.st/1.0.4) Weex/0.26.0 1080x1920',
            'token': token,
            'language': 'en-US',
            'Content-Type': 'application/json; charset=utf-8',
            'Host': 'api.x898xe.fun',
            'Connection': 'Keep-Alive',
            'Accept-Encoding': 'gzip'
        },
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .then(result => resolve(result))
        .catch(err => reject(err))
});



module.exports = {
    login,
    address,
    mkorder,
    confirm
}
