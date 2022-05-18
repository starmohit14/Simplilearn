//Rest and Spread Operator

function add(a,b)
{
    console.log(a+b);
}
//add(1,2);
//add(2,2);
//add(3,2);

//Rest Operator

function addWithRest(...numbers)
{
    let sum = 0;
    for(let num of numbers)
    {
        sum+=num;
    }
    console.log(sum);
}

//addWithRest(1);
//addWithRest(1,2);
//addWithRest(1,2,3);
//addWithRest(1,2,3,4);

//Spread Operator

function addNames()
{
    const names = ["Mohit", "is", "Full", "Stack", "Developer"];
    const morenames = ["Mr.", ...names];
    console.log(morenames);
}
addNames();