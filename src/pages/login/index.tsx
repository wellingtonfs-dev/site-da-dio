import { MdEmail, MdLock } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
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
import { IFormData } from "./types";
import { useContext } from "react";
import { AuthContext } from "../../context/auth";

const schema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email("email não é valido")
      .required("O campo e-mail é obrigatório."),
    password: yup
      .string()
      .min(3, "No minimo 3 caracteres")
      .required("O campo senha é obrigatório."),
  })
  .required();

const Login = () => {
  const {handleLogin} = useContext(AuthContext)

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/cadastro");
  };
 

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (formData: IFormData) => {
    handleLogin(formData)
  };

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="email"
                errorMessage={errors?.email?.message}
                control={control}
                placeholder="E-mail"
                leftIcon={<MdEmail />}
              />
              <Input
                name="password"
                errorMessage={errors?.password?.message}
                control={control}
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock />}
              />
              <Button title="Entrar" variant="secondary" type="submit" />
            </form>
            <Row>
              <EsqueciText>Esqueci meu e-mail</EsqueciText>
              <CriarText><span onClick={handleClick}>Criar conta</span></CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Login };
