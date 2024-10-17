
import { Button, Input, Space } from 'antd'
import styled from 'styled-components'

export const Footer = styled.div`
    margin-top: 80px;
    height: 400px;
    background-color: var(--grey);
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
`

export const LogoBranch = styled.div`
    margin-top: 50px;
`

export const FooterContainer = styled.div`
    margin-top: 50px;
    width: 80%;
    display: flex;
    justify-content: space-between;
`

export const FooterTitle = styled.div`
    font-size: 32px;
    font-weight: bold;
`

export const FooterItem = styled.div`
    margin-top: 20px;
    font-size: 24px;
`
export const FooterInfo = styled.div`

`

export const LinkFooterInfo = styled.a`
    color: black;
`
export const FooterInfoLast = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const LinkFooterInfoLast = styled.a`
    color: black;
`

export const FooterSearch = styled(Space.Compact)`
    width: 370px;
    display: flex;
`

export const InputFooterSearch = styled(Input)`
    padding: 5px 10px;
    width: 253px;
    height: 58px;
    border: none;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
`

export const LinkFooterSearch = styled(Button)`
    width: 117px;
    height: 58px;
    background-color: var(--blue);
    border: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
`

export const FooterItemSocial = styled.div`
    display: flex;
    font-size: 30px;
    gap: 20px;
`
