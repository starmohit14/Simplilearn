const cbPrint = function pront()
{
    console.log("Data is Added");
}
function node_Add()
{
    const data = {Name : "Emp01"};
    db_Add(data, cbPrint);
}
function db_Add(data, cb)
{
    cb();
}
node_Add();