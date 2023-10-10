import express, { Application } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'
import { UserModule } from './modules/users/user.module'

export const createApplication = ({ prefix = 'api' }: { prefix?: string }) => {
  const app: Application = express()

  app.use(morgan('dev'))

  app.use(cors())

  app.use(helmet())

  app.use(express.json())

  app.use(express.urlencoded({ extended: false }))

  app.use(`/${prefix}`, UserModule)

  return app
}
