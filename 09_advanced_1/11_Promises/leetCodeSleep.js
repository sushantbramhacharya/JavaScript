/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve()
        },millis)
    })
}

//This is done because setTimeout doesnt return promise it just callbacks


/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */