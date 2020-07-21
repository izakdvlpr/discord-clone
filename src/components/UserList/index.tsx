import React from "react";

import { Container, Role, User, Avatar } from "./styles";

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? "bot" : ""} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Pessoas Legais - 4</Role>
      <UserRow nickname="zevdvlpr" />      
      <UserRow nickname="Foxy" isBot />
      
      <Role>Gente esquecida - 4</Role>      
      <UserRow nickname="sla man" />                  

      <Role>Offline - 20</Role>
      <UserRow nickname="Cavalo Voador" isBot />
      <UserRow nickname="Bot Lixo" isBot />    
      <UserRow nickname="Bot Lerdo" isBot />
      <UserRow nickname="Bot Burro" isBot />
      <UserRow nickname="Bot Hacker" isBot />
      <UserRow nickname="Bot Criminoso" isBot />
      <UserRow nickname="Bot Mula" isBot />
      <UserRow nickname="Bot Anta" isBot />
    </Container>
  );
};

export default UserList;
