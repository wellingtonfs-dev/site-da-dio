import {MdEmail, MdLock} from 'react-icons/md'
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import {
  Column,
  Container,
  CriarText,
  EsqueciText,
  Row,
  SubLogin,
  Title,
  TitleLogin,
  Wrapper,
} from "./styles";
import { Input } from "../../components/Input";

const Login = () => {
  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
        <Wrapper>
          <TitleLogin>Faça seu cadastro</TitleLogin>
          <SubLogin>Faça seu Login e make the change._</SubLogin>
          <form>
            <Input placeholder="E-mail" leftIcon={<MdEmail/>}/>
            <Input placeholder="Senha" type="secondary" leftIcon={<MdLock/>}/>
            <Button title="Entrar" variant="secondary"/>
          </form>
          <Row>
            <EsqueciText>Esqueci meu e-mail</EsqueciText>
            <CriarText>Criar conta</CriarText>
          </Row>
        </Wrapper>
          
        </Column>
      </Container>
    </>
  );
};

export { Login };
