const exp = require("express")
const app = exp()

app.get("/",(req,res)=>
{
    res.send("Hello Server");
})
app.listen(2000);
