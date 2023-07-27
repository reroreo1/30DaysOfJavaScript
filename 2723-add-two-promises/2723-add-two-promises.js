/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    var a ;
    await promise1.then((v) =>{                     
        a = v
    })
     await promise2.then((v) =>{                     
        a += v
    })
     var p = new Promise(function(resolve) {
        resolve(a);
    });
    
    return p;
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */