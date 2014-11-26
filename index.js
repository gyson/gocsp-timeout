
module.exports = exports = timeout

var thunk = require('gocsp-thunk')

function timeout(time) {
    var ref
    return thunk(function startTimeout(done) {
        if (time !== +time) {
            throw new TypeError(time + ' is not a number')
        }
        ref = setTimeout(done, time)
    }, function cancelTimeout() {
        clearTimeout(ref)
    })
}
exports.timeout = timeout
