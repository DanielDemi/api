import { createAPI } from '../util'
import config from '../config'

const baseUrl = {
  mock: 'http://10.33.31.96:8899/mock/5a7163d192dd612bd4b82fb5/scpms',
  dev: '/',
  pre: '',
  prod: ''
}[config.env || 'mock']

export default createAPI(baseUrl)
