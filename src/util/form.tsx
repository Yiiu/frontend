import * as React from 'react'

export function form (target: any) {
  return class Form extends React.Component<any, any> {
    constructor (props: any) {
      super(props)
    }

    initProps = (oldProps: any) => {
      const props = {
        ...oldProps
      }
      props.form = new FormClass()
      return props
    }

    render () {
      const { props } = this
      return React.createElement(target, this.initProps(props))
    }

  }
}

class FormClass {
  public _value: object
  constructor () {
    this._value = {}
  }

  onChange (e: any, name: string) {
    const value = e.target.value
    this._value[name].value = value
  }

  setProps = (name: string, fieldOption?: object) => {
    return {
      form_data: {},
      value: this._value[name].value,
      onChange: (e: any) => this.onChange(e, name),
      ref: `${name}-form`
    }
  }

  getFieldDecorator = (name: string, fieldOption?: any) => {
    this._value[name] = {
      value: fieldOption ? fieldOption.defaultValue : ''
    }
    return (Ele: React.DetailedReactHTMLElement<any, any>) => {
      return React.cloneElement(Ele, this.setProps(name, fieldOption))
    }
  }
}