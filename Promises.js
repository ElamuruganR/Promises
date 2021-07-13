function Promise_all(promises) {
    return new Promise(async(resolve, reject) => {
       //Your code here.
      //  resolve(Promise.all(promises)); 
      let length = promises.length;
      if(length <= 0) {
        resolve([]);
      } else {
          let result = [];
          
          for(let i=0; i<promises.length; i++) {
             promises[i]
                  .then(res => {
                    result[i]=res; 
                    length--;
                    length===0 && resolve(result)
                  })
                  .catch((err)=>reject(err));
          }        
      }
    });
  }
  
  // Test code.
  Promise_all([]).then(array => {
    console.log("This should be []:", array);
  });
  function soon(val) {
    return new Promise(resolve => {
      setTimeout(() => resolve(val), Math.random() * 500);
    });
  }
  Promise_all([soon(1), soon(2), soon(3)]).then(array => {
    console.log("This should be [1, 2, 3]:", array);
  }).catch(err => console.log(err));
  Promise_all([soon(1), Promise.reject("X"), soon(3)])
    .then(array => {
      console.log("We should not get here");
    })
    .catch(error => {
      if (error !== "X") {
        console.log("Unexpected failure:", error);
      }
    });
