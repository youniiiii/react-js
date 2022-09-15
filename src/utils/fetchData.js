let ok = true;
let fetchData = (time , data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(ok){
                resolve(data);
            }else{
                reject("error");
            }
        },time);
    })
}
export default fetchData