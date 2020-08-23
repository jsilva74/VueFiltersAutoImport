import { filter, forEach, includes } from 'lodash'

export default class VueFiltersAutoImport {
  constructor (proto, ignore) {
    if (!ignore) ignore = []
    this.ignore = ['constructor', 'getMethods', 'install', ...ignore]
    this.filtersMethods = []
    this.getMethods(proto)
  }

  install (Vue, options) {
    forEach(this.filtersMethods, filtersMethod => Vue.filter(filtersMethod, this[filtersMethod]))
  }

  getMethods (proto) {
    this.filtersMethods = [...filter(Object.getOwnPropertyNames(proto), filtersMethod => !includes(this.ignore, filtersMethod))]
  }
}
