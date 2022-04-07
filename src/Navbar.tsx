import React from 'react'
import { Button } from '@material-ui/core'
import styled from 'styled-components'

function Navbar() {
  return (
    <>
      <NavbarContainer>
      <nav className="navbar">
        <div className="navbar-brand">
          Martian <span className=''>Madness</span>
        </div>
      </nav>
      </NavbarContainer>
    </>
  )
}

export default Navbar

const NavbarContainer = styled.nav`
  background-color: #000;
  color: #fff;
  padding: 0.5rem;
  height: 3rem;

  .navbar-brand {
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: camelCase;
    font-family: 'Roboto', sans-serif;
  }

`;