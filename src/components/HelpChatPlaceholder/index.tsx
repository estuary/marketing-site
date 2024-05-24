import * as React from 'react';
import helpChatBalloon from '../../images/help-chat-balloon.png';

const HelpChatPlaceholder = ({ onMouseEnter }: { onMouseEnter: React.MouseEventHandler<HTMLDivElement> }) => {
  return (
    <div
      onMouseEnter={onMouseEnter}
      style={{
        width: '50%',
        height: '50%',
        position: 'fixed',
        zIndex: 1,
        bottom: '0',
        right: '0',
      }}
    >
      <img
        src={helpChatBalloon}
        alt="help chat balloon icon"
        width={64}
        height={64}
        style={{
          position: 'absolute',
          zIndex: 1,
          bottom: '16px',
          right: '16px',
        }}
      />
    </div>
  );
};

export default HelpChatPlaceholder;
