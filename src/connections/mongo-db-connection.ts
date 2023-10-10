import { connect } from 'mongoose'

export const startConnection = async ({ uri = 'mongodb://localhost:27017/projects-app' }) => {
  try {
    const db = await connect(uri)
    console.log('Database is connected to:', db.connection.name)
  } catch (error) {
    console.error(error)
  }
}
