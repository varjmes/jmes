import Link from 'next/link'
import styled from 'styled-components'

import Navigation from './Navigation'

const PageWrapper = styled.div`
  width: 100%;
  color: #333;
  padding-top: 7em;
`

export default ({ children }) => (
  <main>
    <Navigation />
    <PageWrapper>{children}</PageWrapper>
  </main>
)
