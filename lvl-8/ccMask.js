function maskify(cc) {
  return cc.replace(/.(?=.{4,}$)/g, '#');
}