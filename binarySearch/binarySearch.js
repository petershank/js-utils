console.log('hello world')

function binary_search_leftmost(array, target) {
    console.log(array.length)
    let L = 0
    let R = array.length
    let m  = undefined
    while (L < R) {
        m = Math.floor((L + R) / 2 )
        if (array[m] < target) {
                L = m + 1
        } else {
            R = m
        }

    }
return L
}

console.log(binary_search_leftmost([1, 2, 3], 4))


// binary_search_leftmost([1, 2, 3,    ], "foo")

/*
function binary_search_leftmost(A, n, T):
    L := 0
    R := n
    while L < R:
        m := floor((L + R) / 2)
        if A[m] < T:
            L := m + 1
        else:
            R := m
    return L
*/