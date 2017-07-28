import React from 'react'

export function StyleComponent (styles) {
  return Component =>
    <Component styles={ styles }/>
}
