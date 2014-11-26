
var test = require('tape')
var timeout = require('./index')

test('order of timeout', function (t) {
    t.plan(3)

    var x = 0

    timeout(50)(function () {
        t.equal(x, 0)
        x += 1
    })

    timeout(100)(function () {
        t.equal(x, 1)
        x += 1
    })

    timeout(150)(function () {
        t.equal(x, 2)
    })
})

test('cancel timeout', function (t) {
    t.plan(1)

    var th = timeout(100)

    setTimeout(function () {
        th() // cancel
    }, 50)

    var cancelled = true
    th(function () {
        cancelled = false
    })

    setTimeout(function () {
        t.assert(cancelled)
    }, 150)
})
