import * as React from 'react'

export interface IStatelesLayoutProps {

}

export const Layout: React.StatelessComponent<IStatelesLayoutProps> = ({
  children
}) => (
  <section>
    {children}
  </section>
)