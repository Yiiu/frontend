export function injectProps (target: any, name: string, descriptor: any) {
  console.log(descriptor)
  const oldFunction = descriptor.value;
  descriptor.value = function propsInjectorFunction() {
    return oldFunction.bind(this)(this.props)
  };
  return descriptor
}

export function autobind (target: any, name: string, descriptor: any) {
  const keys = Object.getOwnPropertyNames(target.prototype)
  console.log(keys)
}