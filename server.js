// Importa o módulo Express.
import express from "express";
// Importa a configuração do banco de dados.
import db from "./src/db/db.js";
// Importa as rotas
import usuarioRoutes from "./src/routes/UsuarioRoute.js";
import animalRoutes from "./src/routes/AnimalRoute.js"
import cors from 'cors'

// Cria uma instância do Express.
const app = express();


// Adiciona middleware para analisar o corpo das requisições como JSON.
app.use(express.json());

// Sincroniza o banco de dados e exibe uma mensagem no console.
db.sync(() => console.log(`Banco de dados conectado: ${process.env.DB_NAME}`));
app.use(cors());
app.use("/uploads", express.static("uploads"));

// Define as rotas
app.use("/api/usuario", usuarioRoutes);
app.use("/api/animal", animalRoutes);

// Inicia o servidor na porta 3000 e exibe uma mensagem no console.
app.listen(3002, () => console.log("Servidor iniciado na porta 3002"));
