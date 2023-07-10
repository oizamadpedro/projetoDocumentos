import express from "express";
import url from "url";
import path from "path";
import http from "http";
import { Server } from "socket.io";
import "./db/dbConnect.js"
const app = express();
const port = process.env.PORT || 3000;

const caminhoAtual = url.fileURLToPath(import.meta.url); // isso vai me dar o caminho atual de onde estamos
const diretorioPublico = path.join(caminhoAtual, "../..", "public"); // navegamos até a pasta public
app.use(express.static(diretorioPublico)); // utilizamos o método express.static utilizar a pasta public como static

const servidorHttp = http.createServer(app); // criamos um servidor http

servidorHttp.listen(port, () => console.log(`servidor escutando na porta ${port}`));

const io = new Server(servidorHttp) // criamos um servidor socket.io utilizando o http

export default io;