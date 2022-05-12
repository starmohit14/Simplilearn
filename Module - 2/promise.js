function add()
{
    const data = {Name:"Mohit"};
    sub(data).then(
        (value)=>{
            console.log("Data is Printed");
        },
        (err)=>{
            console.log("Error Occured")
        }
    );

    doSomething();
    doSomething();
    doSomething();
    doSomething();
}

const promiseResolved = function (result)
{
    console.log(result);
}

function doSomething(){
    console.log("Doing Something");
}

function sub()
{
    return new Promise((resolve, reject)=>{
        setTimeout(resolve, 5000);
        /*if(err){
            reject("error");
        }
        else
        {
            resolve("sucess");
        }*/
    });
}
add();