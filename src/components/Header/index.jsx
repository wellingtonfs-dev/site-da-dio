import logo from '../../assets/logo-dio.png'
import {Button} from '../Button'

import {
  BuscarInputContainer,
  Column,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper,
} from "./styles";

const Header = () => {
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
            <MenuRight href="#">Home</MenuRight>
            <Button title='Entrar'/>
            <Button title='Cadastrar'/>  
        </Row>            
      </Container>
    </Wrapper>
  );
};

export { Header}
