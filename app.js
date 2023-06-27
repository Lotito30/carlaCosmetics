const express = require("express")
const PORT =  process.env.PORT || 3000;

const app = express();


// poder procesar los datos en ejs y la carpeta views
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

//hacer estatica la carpeta 'public'
app.use(express.static("public"));

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));