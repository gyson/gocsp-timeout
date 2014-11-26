
var go = require('gocsp-go')
var timeout = require('./index')
var select = require('gocsp-select')

go(function* () {

    yield timeout(1000) // sleep for a while

    yield select(function (s) {
        s(go(function* () {
            yield timeout(50)
        }), function () {
            console.log('should reach here')
        })
        ||
        s(timeout(100), function () {
            console.log('should not reach here')
        })
    })
})
