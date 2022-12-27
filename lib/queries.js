import { getClient } from './sanity.server'

export async function getPets(preview) {
  const pets = await getClient(preview).fetch(`*[_type == "pet"]`)
  return pets
}
