import Logo from '../Logo' 
import OpcoesHeader from '../OpcoesHeader' 
import IconesHeader from '../IconesHeader' 
import styled from 'styled-components'

const HeaderContainer = styled.header`
    display: flex;
    background-color: white;
    padding: 10px;
    justify-content: center;
`

function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <OpcoesHeader />
            <IconesHeader />
        </HeaderContainer>
    )
}

export default Header