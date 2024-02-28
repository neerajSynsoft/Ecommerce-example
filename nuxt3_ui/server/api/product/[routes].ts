import { createRouter, defineEventHandler, useBase } from 'h3'
import product from '~/server/controllers/productController'

const router = createRouter()

router.get('/getAll', defineEventHandler(product.getAll))
router.get('/test2', defineEventHandler(product.handler2))
router.get('/test3', defineEventHandler(() => 'Hello World 3'))
router.get('/test3/test', defineEventHandler(() => 'Hello World test3/test'))
// router.post('/test4', defineEventHandler(product.handler2))
router.get('/*', defineEventHandler((event:any) => { throw createError({
    statusCode: 400,
    statusMessage: 'Page not found',
    stack: "Page not found",
  })}));
router.post('/save', defineEventHandler(product.save))

export default useBase('/api/product', router.handler)