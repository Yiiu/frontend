export type WrappedForm = {
  getFieldDecorator(id: string, options?: any): (node: React.ReactNode) => React.ReactNode;
}