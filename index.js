import Vue from 'vue'
import { filter, forEach, includes } from 'lodash'

export default class VueFiltersAutoImport {
  constructor (proto, ignore) {
    if (!ignore) ignore = []
    this.ignore = ['constructor', 'getMethods', ...ignore]
    this.getMethods(proto)
  }

  getMethods (proto) {
    const filtersMethods = filter(Object.getOwnPropertyNames(proto), filtersMethod => !includes(this.ignore, filtersMethod))
    forEach(filtersMethods, filtersMethod => Vue.filter(filtersMethod, this[filtersMethod]))
  }
}
