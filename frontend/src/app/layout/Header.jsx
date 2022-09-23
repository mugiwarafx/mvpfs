import React, { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { logoutUser } from '../../reducers/userReducer'
import { initializeProducts } from '../../reducers/productReducer'
import { initializeUser } from '../../reducers/userReducer'

import styled from 'styled-components'
import './css/layout.css'

const HeaderStyled = styled.header`
  display: flex;
  justify-content: flex-end;
`

const Navbar = styled.nav`
  display: flex;
  padding-bottom: 2vh;
  align-items: self-end;
`

const NavbarLink = styled(NavLink)`
  color: white;
  margin-left: 10px;
  margin-right: 10px;
  text-decoration: none;
  border-bottom: 1px solid #03a9f4;
  &:hover {
    border-bottom: 1px solid yellow;
  }
  &[class*='active'] {
    border-bottom: 1px solid yellow;
  }
`

export function Header() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(initializeProducts())
    dispatch(initializeUser())
  }, [dispatch])

  const user = useSelector((state) => state.user)

  const handleLogout = (e, user) => {
    if (!user.id) {
      navigate('/')
    }
    e.preventDefault()
    dispatch(logoutUser(user))
    console.log('handleLogout', user, user.token)
  }

  return (
    <HeaderStyled style={{ borderBottom: '2px solid' }}>
      {!user.id ? (
        <Navbar>
          <NavbarLink to='/' end>
            Home
          </NavbarLink>
          <NavbarLink to='/products'>Products</NavbarLink>
          <NavbarLink to='/login'>Log In</NavbarLink>
        </Navbar>
      ) : (
        <Navbar>
          <NavbarLink to='/' end>
            Home
          </NavbarLink>
          <NavbarLink to='/products'>Products</NavbarLink>
          <NavbarLink to='/user'>Profile</NavbarLink>
          <NavbarLink
            id='logout'
            onClick={(e) => {
              handleLogout(e, user)
            }}
          >
            Logout
          </NavbarLink>
        </Navbar>
      )}
    </HeaderStyled>
  )
}
