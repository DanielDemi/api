import { createAPI } from '../util'
import config from '../config'

const baseUrl = {
  mock: 'http://10.33.31.96:8899/mock/5a6f023d92dd612bd4b81e1c/visitor',
  dev: '',
  pre: '',
  prod: ''
}[config.env || 'mock']

export default createAPI(baseUrl)
