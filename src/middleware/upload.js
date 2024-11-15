// src/middleware/upload.js
const multer = require('multer');
const path = require('path');

// Definir o armazenamento para o arquivo
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');  // Pasta onde o arquivo será salvo
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));  // Nome único para o arquivo
    }
});

// Filtrar os tipos de arquivos aceitos
const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Tipo de arquivo não permitido'), false);
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 }  // Limite de tamanho do arquivo (5MB)
});

module.exports = upload;
