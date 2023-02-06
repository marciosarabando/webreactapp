import logo from '../../assets/images/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`

const LogoImagem = styled.img`
  margin-right: 10px;
`

function Logo(){
    return (
        <LogoContainer>
          <LogoImagem src={logo} alt='logo da alura books' />
          <p><strong>Alura</strong> Books</p>
        </LogoContainer>
    )
}

export default Logo;
