import React from 'react';

import { Container, Role, User, Avatar } from "./styles";

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''}/>
      
      <strong>{nickname}</strong>
      
      {isBot && <span>Bot</span>}
    </User>
  )
}

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      
      <UserRow nickname="Zev"/>
      
      <Role>Offline - 1</Role>
      <UserRow nickname="NK" isBot />
      <UserRow nickname="Cavalo voador"/>
      <UserRow nickname="Proerd"/>
      <UserRow nickname="Godofredo" isBot/>
    </Container>
  );
}

export default UserList;