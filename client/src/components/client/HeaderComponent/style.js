import { styled } from 'styled-components'
import { mobile } from '../../../utilities/responsive'
import { Popover } from 'antd'
// import { mobile } from "../../utilities/responsive"

export const Header = styled.div`
    background-color: white;
    width: 100%;
    height: 80px;
    // position: fixed;
`

export const HeaderContent = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 0 135px;
`

export const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    height: 100%;
    font-size: 14px;
    font-weight: bold;
    padding: 0px 20px;
`

export const LinkHeader = styled.div`
    cursor: pointer;
    text-decoration: none;
    color: black;
    height: 100%;
    padding: 0 20px;
    display: flex;
    align-items: center;
    &:hover{
        color: white;
        background-color: black;
    }
`

export const LinkPopover = styled(Popover)`
    color: black;
    height: 100%;
    padding: 0 20px;
    display: flex;
    align-items: center;
    &:hover{
        color: white;
        background-color: black;
    }
`
export const MenuItem = styled.div`
    font-size: 18px;
    cursor: pointer;
    // margin-left: 10px;
    position: relative;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`


export const LinkNavbar = styled.div`
    cursor: pointer;
    font-size: 30px;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    position: relative;
    &:hover{
        color: white;
        background-color: black;
    }
`

export const NavBar = styled.div`
    display: flex;
    gap: 60px;
    margin-left: 60px;
`

export const PopUpBox = styled.div`
  position: absolute;
  right: -10px;
  background-color: #fff;
  box-shadow: rgba(112, 112, 120, 0.2) 0px 7px 29px 0px;
  width: 140px;
  height: 138px;
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 2px;
  z-index: 999;
`

export const PopUpBoxProduct = styled.div`
  position: absolute;
  right: -20px;
  top: 50px;
  background-color: #fff;
  box-shadow: rgba(112, 112, 120, 0.2) 0px 7px 29px 0px;
  width: 145px;
  height: 138px;
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 2px;
  z-index: 999;
`

export const Avatar = styled.img`
  object-fit: cover;
  border-radius: 50%;
  width: 35px;
  height: 35px;
`

export const Button = styled.button`
  border: none;
  width: 100%;
  padding: 10px 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  background-color: transparent;
  font-size: 16px;
  &:hover {
    cursor: pointer;
    background-color: #f5eeee;
  }
`