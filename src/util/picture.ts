const pictureType = {
  shrink: 'imageView2/1/w/500/h/500/format/jpg/q/75|imageslim'
}

export function pictureUrl(key: string, type: string = '') {
  return `http://yu7er.qiniudn.com/${key}?${pictureType[type]}`
}