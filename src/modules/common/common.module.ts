import { Router } from 'express'
import { Controller } from './common.controller'

export const ModuleFactory = (
  router: Router,
  prefix: string,
  controller: Controller
) => {
  router.get(`/${prefix}`, controller.list.bind(controller))
  router.get(`/${prefix}/:id`, controller.find.bind(controller))
  router.post(`/${prefix}`, controller.create.bind(controller))

  return router
}
