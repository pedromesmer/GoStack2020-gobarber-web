import React from 'react';
import { useTransition } from 'react-spring';

import Toast from './Toast';

import { Container } from './style';
import { ToastMessage } from '../../hooks/toast';

interface ToastContainerProps {
  messages: ToastMessage[];
}

// {
//   from: { right: '-120%' },
//   enter: { right: '0%' },
//   leave: { right: '-120%' },
// }

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(messages, {
    keys: message => message.id,
    from: { right: '-120%', opacity: 0 },
    enter: { right: '0%', opacity: 1 },
    leave: { right: '-120%', opacity: 0 },
  });

  return (
    <Container>
      {/* {messagesWithTransitions.map(({ item, key, props }) => (
        <Toast key={key} message={item} style={props} />
      ))} */}
      {messagesWithTransitions((style, item) => (
        <Toast key={item.id} message={item} style={style} />
      ))}
    </Container>
  );
};

export default ToastContainer;
