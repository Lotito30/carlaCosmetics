const express = require("express")
const livereload = require('connect-livereload');
const PORT =  process.env.PORT || 3000;
const mainRoute = require('./routes/mainRoute')

const app = express();
// configura el middleware para procesar los datos enviados en el cuerpo de una solicitud HTTP
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// poder procesar los datos en ejs y la carpeta views
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

//hacer estatica la carpeta 'public'
app.use(express.static("public"));

app.use('/',mainRoute)

app.use(livereload({
    port: 35729 // Puerto por defecto de livereload
  }));

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));


