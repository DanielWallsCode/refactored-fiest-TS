"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ususarios_1 = require("../controllers/ususarios");
const router = (0, express_1.Router)();
router.get('/', ususarios_1.getUsuarios);
router.get('/:id', ususarios_1.getUsuario);
router.post('/', ususarios_1.postUsuario);
router.put('/:id', ususarios_1.putUsuario);
router.delete('/:id', ususarios_1.deleteUsuario);
exports.default = router;
//# sourceMappingURL=usuario.js.map