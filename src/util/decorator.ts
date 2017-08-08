export function injectProps (target: any, name: 'string', descriptor: any) {
  const oldFunction = descriptor.value;
  descriptor.value = function propsInjectorFunction() {
    return oldFunction.bind(this)(this.props)
  };
  return descriptor
}
