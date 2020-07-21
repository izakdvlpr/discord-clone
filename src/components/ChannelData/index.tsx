import React, { useRef, useEffect } from "react";

import ChannelMessage, { Mention } from "../ChannelMessage";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>  
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            author="Cara aleatório"
            date="01/01/2077"
            content="MAN ME AJUDA A SAIR DO PRATA NÃO AGUENTO MAIS ISSO"                        
          />
        ))}  
        <ChannelMessage
          author="zevdvlpr"
          date="01/01/2077"
          content="Não sou obrigado a carregar criminoso. Que usa o flash no J"          
        />              
        <ChannelMessage
          author="zevdvlpr"
          date="01/01/2077"
          content="fy!ban @Cara aleatório VAZA DAQUI ;-;"          
        />
        <ChannelMessage
          author="Foxy"
          date="01/01/2077"
          content={
            <>
              <Mention>@zevdvlpr</Mention>, usuário banido com sucesso.
            </>
          }
          hasMention
          isBot          
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversarem #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
