import React from 'react';
import "./index.css";


const ChatWindow: React.FC = () => {


  return (
    <div className="layout-column align-items-center justify-content-start" data-testid="ai-assistant">
      <div className="card w-200 pt-20 pb-20">
        <section className="layout-row mt-20 mr-20 ml-20 message-area">
          
        </section>
        <section className="layout-row mt-20 mr-20 ml-20">
          <section className="layout-row">
              <textarea
                placeholder="Type your message here..."
                value={''}
                data-testid="form-textarea"
                className="form-textarea pa-20 mr-10"
              />
            </section>
            <section className="layout-row">
              <button 
                className='ma-0'
                data-testid="form-submit-button"
                type="submit"
                onClick={() => { console.log('send message...')}}
              >
                Send
              </button>
            </section>
        </section>
      </div>
    </div>
  );
};

export default ChatWindow;
