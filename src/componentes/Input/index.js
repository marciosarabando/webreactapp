import styled from 'styled-components'

const Input = styled.input`
    order: 1px solid #FFF;
    background: transparent;
    border: 1px solid #FFF;
    padding: 20xp 140px;
    border-radius: 50px;
    width: 500px;
    height: 50px;
    color: #FFF;
    font-size: 16px;
    margin-bottom: 10px;
    text-align: center;


    &::placeholder {
        color: #FFF;
        font-size: 26px;
        text-align: center;
    }
`

export default Input