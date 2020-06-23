import React from 'react';

import ChannelButton from '../ChannelButton'

import { Container, Category, AddCategoryIcon } from "./styles";

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>
      
      <ChannelButton channelName="chat-livrin" />
      <ChannelButton channelName="trabalhin" />
      <ChannelButton channelName="lolzi" />
      <ChannelButton channelName="cszin" />
      <ChannelButton channelName="valorantzin" />      
    </Container>
  );
}

export default ChannelList;