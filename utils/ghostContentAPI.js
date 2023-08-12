import GhostContentAPI from '@tryghost/content-api'
import { GHOSTURL, GHOSTKEY, GHOSTVERSION } from '@/config'

export const api = new GhostContentAPI({
  url: GHOSTURL,
  key: GHOSTKEY,
  version: GHOSTVERSION
})
