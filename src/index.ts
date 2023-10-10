import { createApplication } from './application'
import { startConnection } from './connections/mongo-db-connection'

async function main () {
  const app = createApplication({ prefix: 'api' })

  app.listen(4000, async () => {
    console.log(`Server running on http://localhost:${4000}`)
    await startConnection({})
  })
}

main()
