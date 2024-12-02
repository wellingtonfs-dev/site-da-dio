import { MdEmail, MdLock, MdPerson } from "react-icons/md";
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
  Log,
  Row,
  SubLogin,
  Title,
  TitleLogin,
  Wrapper,
} from "./styles";
import { Input } from "../../components/Input";


const schema = yup
  .object()
  .shape({
    name: yup
      .string()
      .min(3, "No minimo 3 caracteres")
      .required("O campo nome é obrigatório."),
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

const Cadastro = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };
 

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

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
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubLogin>Crie sua conta e make the change._</SubLogin>
            <form>
              <Input
                name="name"
                errorMessage={errors?.name?.message}
                control={control}
                placeholder="Nome Completo"
                leftIcon={<MdPerson />}
              />
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
              <Button
                title="Criar minha conta"
                variant="secondary"
                type="submit"
              />
            </form>
            <Row>
              <SubLogin>
                Ao clicar em "criar minha conta grátis", declaro que aceito as
                Políticas de Privacidade e os Termos de Uso da DIO.
              </SubLogin>
            </Row>
            <Log onClick={handleClick}>
              Já tenho conta. <span>Fazer login</span>
            </Log>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Cadastro };
