import React, { useContext } from 'react'
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

import { Header } from '../../components/Header';

import { Container, Column, Title, TitleHighlight } from './styles';
import { AuthContext } from '../../context/auth';

const Feed = () => {
  return (
    <>
        <Header/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
              <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
                <UserInfo name="Pablo Henrique" image="https://avatars.githubusercontent.com/u/45184516?v=" percentual={25}/>
                <UserInfo name="Pablo Henrique" image="https://avatars.githubusercontent.com/u/45184516?v=" percentual={65}/>
                <UserInfo name="Pablo Henrique" image="https://avatars.githubusercontent.com/u/45184516?v=" percentual={45}/>
                <UserInfo name="Pablo Henrique" image="https://avatars.githubusercontent.com/u/45184516?v=" percentual={72}/>
            </Column>
        </Container>
    </>
  )
}

export { Feed }; 