const aFunction = (done) => {

    if (done)
        return Promise.resolve('oke done!')
    else
        return Promise.reject('sorry')


}
// aFunction(false).
//     then(d => console.log(d)).
//     catch(error => console.log(error))

const aFunction2 = async (done) => {
    if (done)
        return 'oke done!'
    else
        return 'sorry'
}

// aFunction2(false).
//     then(d => console.log(d))

async function testFuntion() {
    var result = await  aFunction(true);
    console.log('waitting!')
    console.log(result)
}
testFuntion()