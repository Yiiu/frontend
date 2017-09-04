import * as React from 'react'

export interface IFieldOption {
  defaultValue?: any
}

export function form (target: any) {
  return class Form extends React.Component<any, any> {
    public instances = {}
    public store = new Store()
    constructor (props: any) {
      super(props)
    }

    initProps = (oldProps: any) => {
      const props = {
        ...oldProps,
        form: {
          getFieldDecorator: this.getFieldDecorator,
          getFieldValue: this.getFieldValue,
          getFieldsValue: this.getFieldsValue
        }
      }
      return props
    }

    bindFn = (name: string, value: string, fn: any) => {
      return (arg: any) => fn(name, arg)
    }

    bindChange = (name: string, arg: any) => {
      const meta = this.store.getField(name)
      const value = getValueFromEvent(arg)
      const newMeta = {
        ...meta,
        value
      }
      this.setField(name, newMeta)
    }

    setField = (name: string, meta: any) => {
      this.store.setField(name, meta)
      this.setState({})
    }

    bindRef = (name: string, component: any) => {
      this.instances[name] = component;
    }

    getFieldValue = (name: string) => {
      const meta = this.store.getField(name)
      return meta.value
    }

    getFieldsValue = (arr: [string]) => {
      const data = {}
      if (arr) {
        for (let i of arr) {
          const name = arr[i]
          const { value } = this.store.meta[name]
          data[name] = value
        }
      } else {
        Object
          .keys(this.store.meta)
          .forEach((name: string) => {
            const { value } = this.store.meta[name]
            data[name] = value
          })
      }
      return data
    }

    getFieldProps = (name: string, fieldOption: any) => {
      const { trigger } = fieldOption
      const inputProps = {
        ...this.store.getFieldValueProps(fieldOption),
        ref: this.bindFn(name, trigger, this.bindRef),
        [trigger]: this.bindFn(name, trigger, this.bindChange)
      }
      return inputProps
    }
    
    getFieldDecorator = (name: string, fieldOption?: IFieldOption) => {
      const option = {
        name: name,
        valuePropName: 'value',
        trigger: 'onChange',
        ...fieldOption
      }
      const props = this.getFieldProps(name, option)
      return (Ele: React.DetailedReactHTMLElement<any, any>) => {
        return React.cloneElement(Ele, {
          ...props,
          ...this.store.getFieldValueProps({name: name, ...option})
        })
      }
    }

    render () {
      const { props } = this
      return React.createElement(target, this.initProps(props))
    }
  }
}

class Store {
  public meta = {}

  getField = (name: string) => {
    if (!this.meta[name]) {
      this.meta[name] = {};
    }
    return this.meta[name];
  }

  setField = (name: string, meta: any) => {
    this.meta[name] = meta
  }
  
  getFieldValueProps = (option: any) => {
    const { defaultValue } = option
    const meta = this.getField(option.name)
    let value = meta.value
    if (value === undefined && defaultValue) {
      value = defaultValue
      this.setField(option.name, {
        value,
        ...meta
      })
    }
    return {
      [option.valuePropName]: value ? value : ''
    }
  }
}

export function getValueFromEvent(e: any) {
  // support custom element
  if (!e || !e.target) {
    return e;
  }
  const { target } = e;
  return target.type === 'checkbox' ? target.checked : target.value;
}
