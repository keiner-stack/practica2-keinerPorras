import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.static("public"));
app.get("/api/saludo", (req, res) => {
 res.json({ mensaje: "Hola desde el servidor Node.js!" });
});
app.listen(PORT, () => {
 console.log(`Servidor escuchando en http://localhost:${PORT}`);
});