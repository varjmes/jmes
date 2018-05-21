import styled from 'styled-components'

const Nav = styled.nav`
  text-align: left;
  background-color: #000;
  color: #fff;
  padding: 1em;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
`
const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
`

const NavLink = styled.a`
  font-size: 1.5em;
  color: #ffffff;
  text-decoration: none;
`

const NavItem = ({ href, label }) => (
  <li>
    <NavLink href={href}>{label}</NavLink>
  </li>
)

const Navigation = () => (
  <Nav>
    <NavList>
      <NavItem href={'/'} label={'JMES'} />
      {['reading', 'watching', 'writing', 'contact'].map(link => (
        <NavItem key={link} href={`#${link}`} label={link.toLowerCase()} />
      ))}
    </NavList>
  </Nav>
)

export default Navigation
