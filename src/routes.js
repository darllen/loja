const router = require('express').Router();
const useController = require('./controller');



// incluir produtos
router.post('/create', useController.create);

// todos os produtos
router.get('/soli', useController.getAll);

// pegar produto por ID
router.get('/soli/:id', useController.getProduct);

// atualizar produto
router.put('/soli/update/:id', useController.update); 

// deletar produto por ID
router.delete('/soli/delete/:id', useController.delete);


module.exports = router;
