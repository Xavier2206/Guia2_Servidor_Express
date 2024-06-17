const express = require('express')
const path = require('path')

const startServer = (options) =>{
    const{ port, public_Path = 'public' } = options
    
    const app = express()
    // para poder usar middewares se usa la palabra use (express)
    app.use(express.static(public_Path))// contenido estatico que ponemos desponible

    app.get('*', (req, res) => {
        const indexPath = path.join(__dirname + `../../../${public_Path}/index.html`)
        res.sendFile(indexPath)
        
    })
    app.listen(port, () => {
        console.log(`escuchado el puerto ${port}`)
        
    })


}
module.exports = {
    startServer
}