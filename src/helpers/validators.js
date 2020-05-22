export function vimeoIdValid(vimeoId) {
  var regEx= /^[0-9]+$/
  return vimeoId.match(regEx)
}

export function hasFile(field, extension = "pdf") {
  return field && field.substr(-3,3).toLowerCase()===extension
}