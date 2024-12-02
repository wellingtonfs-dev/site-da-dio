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
import { IHeader } from './types';

const Header = ({autenticado}:IHeader) => {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate("/login");
  };

  const handleClick = () => {
    navigate("/cadastro");
  };

  const handleClickHome = () => {
    navigate("/");
  };

  return (
    <Wrapper>
      <Container>
        <Row>
            <img className='logo' onClick={handleClickHome} src={logo} alt='Logo da Dio' />
            {autenticado ? (
              <>
              <BuscarInputContainer>
                  <Input placeholder='Buscar' />                  
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>              
              </>
            ): null}
        </Row>
        <Row>
          {autenticado ? (
            <>
              <MenuRight href="/">Home</MenuRight>
              <Button title='Entrar' onClick={handleClickSignIn}/>
              <Button title='Cadastrar' onClick={handleClick}/>  
            </>
          ) : null}
        </Row>            
      </Container>
    </Wrapper>
  );
};

export { Header}
