import { Sequelize } from "sequelize";
import db from "../db/db.js";

export default db.define(adocao, {
    id: {
        type: Sequelize.INTEGER,
        validate: {
        min: 0 // Garante que o valor seja sempre maior ou igual a 0
    },
    }
})

