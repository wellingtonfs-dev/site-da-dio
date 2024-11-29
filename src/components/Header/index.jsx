import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo-dio.png'
import {Button} from '../Button'

import {
  BuscarInputContainer,  
  Container,
  Input,
  Menu,
  MenuRight,
  Row,  
  Wrapper,
} from "./styles";

const Header = () => {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate("/login");
  };

  const handleClick = () => {
    navigate("/cadastro");
  };

  return (
    <Wrapper>
      <Container>
        <Row>
            <img src={logo} alt='Logo da Dio' />
            <BuscarInputContainer>
                <Input placeholder='Buscar' />
                <Button title='Buscar'/>
            </BuscarInputContainer>
            <Menu>Live Code</Menu>
            <Menu>Global</Menu>
        </Row>
        <Row>
            <MenuRight href="/">Home</MenuRight>
            <Button title='Entrar' onClick={handleClickSignIn}/>
            <Button title='Cadastrar' onClick={handleClick}/>  
        </Row>            
      </Container>
    </Wrapper>
  );
};

export { Header}
