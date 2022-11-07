import logo from '../assets/Logonetflix.png'
import styled from 'styled-components'



function NavBar () {
  return (
    <Nav> 
      <Img src={logo} alt=''/>
      <Input/>
      <button  >getMeta</button>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #040404;
  color: #CC2216;
`

const Img = styled.img`
  max-height: 2rem;
`

const Input = styled.input`
  border-radius: 20px;
  border: 1px solid #bbb;
  color: #bbb;
  background-color: #040404;
  padding: 0.5rem;
`

export default NavBar;