const express = require("express")
const app = express()

app.use('/app', express.static('kama'))


app.listen(3000, () => {
    console.log(`Started Server`)
});