//===================================================================================================================
function p1 () { return new Promise((resolve, reject) => {
    setTimeout(() => resolve('p1'), 2000);
  });
}
function p2 () { return  new Promise((resolve, reject) => {
    setTimeout(() => reject('p2'), 2000);
  });
}
function p3 () { return new Promise((resolve, reject) => {
    setTimeout(() => resolve('p3'), 2000);
  });
}
// p1().then(res1 =>{
//         console.log(res1);
//         p2().then(res2 => {
//             console.log(res2);
//             p3().then(res3 => {
//                 console.log(res3);
//                })
//                .catch(()=>console.log('inside p3 catch'))
//           })
//           .catch(()=>console.log('inside p2 catch'))
//    })
//    .catch(e => console.log('inside p1 catch'))

// (async function () {
//     let res1 = await p1().then(res => console.log('p1:',res)).catch(e => console.log('inside p1 catch :',e));
//     let res2 = await p2().then(res => console.log('p2:',res)).catch(e => console.log('inside p2 catch :',e));
//     let res3 = await p3().then(res => console.log('p3:',res)).catch(e => console.log('inside p3 catch :',e));
// })();

//===================================================================================================================
function promise3() {
    return(
        new Promise((resolve, reject) => {
            console.log("1");
            setTimeout(() => resolve(1), 1000);
        })
    )
}
function f1(param) {
    console.log('f1: ', param);
    return param+2;
}
function f2(param) { 
    console.log("f2: ", param);
    return param * 2;
}
function f3(param) {
    console.log("f3: ", param);
    return param - 7;   
}
// promise3()
//     .then(res => f1(res))
//     .then(res => f2(res))
//     .then(res => f3(res))
//     .catch(e => console.log(e));

// (async function () {
//     try {
//         const res = await promise3();
//         const res_1 = f1(res);
//         const res_2 = f2(res_1);
//         return f3(res_2);
//     } catch (e) {
//         return console.log(e);
//     }
// })()

//================================================================================================================
function p4 () { 
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('p4');
        resolve(5)
    });
  });
}
function p5 (param) { 
    return  new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('p5:', param);
        resolve(param*10)
    });
  });
}
function p6 (param) { 
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('p6:', param);
        resolve(param*20)
    });
  });
}
// p4()
// .then(res => p5(res))
// .then(res => p6(res))
// .then(res => console.log(res))
// .catch(e => console.log(e))


// (async function () {
//     const r1 = await p4();
//     const r2 = await p5(r1);
//     const r3 = await p6(r2);
//     console.log('r1', r1);
//     console.log('r2', r2);
//     console.log('r3', r3);
// })()
//=================================================================================================================
