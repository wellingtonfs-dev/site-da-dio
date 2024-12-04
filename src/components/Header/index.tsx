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
import { AuthContext } from '../../context/auth';
import { useContext } from 'react';
import { UserPicture } from '../UserInfo/styles';


const Header = () => {

  const {user, handleLogout} = useContext(AuthContext);

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
            {user.id ? (
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
          {user.id ? (
            <>
            <UserPicture src='https://avatars.githubusercontent.com/u/176322856?v=4' />
            <a onClick={handleLogout} href="/">Sair</a>              
            </>
          ) : (
            <>
              <MenuRight href="/">Home</MenuRight>
              <Button title='Entrar' onClick={handleClickSignIn}/>
              <Button title='Cadastrar' onClick={handleClick}/>  
            </>
          )}
        </Row>            
      </Container>
    </Wrapper>
  );
};

export { Header}
