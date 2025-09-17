import ChatBot from "./Components/chatBot";
import { FaChevronDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";
const App = () => {
  return (
    <div className="container">
      <div className="chatbot-popup">
        <div className="chat-header">
          <div className="header-info">
            <div className="text-logo">
              <h2>Chat Bot Ai</h2>
              <ChatBot />
            </div>
            <button className="down-Arrow">
              <FaChevronDown />
            </button>
          </div>
        </div>
        {/* chatbot body */}
        <div className="chat-bot-body">
          <div className="message bot-message">
            <ChatBot />
            <p className="paragraph">
              Hey 👋 <br /> how can I help you today?
            </p>
          </div>
          <div className="message user-message">
            <p className="text-message">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellendus est quo ut et libero porro totam, obcaecati tempore
              exercitationem ex nesciunt aliquam saepe facere voluptatibus
              consequuntur corporis magnam eum rem?
            </p>
          </div>
        </div>
        {/* chat bot footer */}
        <div className="chat-footer">
          <form action="#" className="chat-form">
            <input
              type="text"
              placeholder="Message..."
              className="message-input"
              required
            />
            <button className="upward-arrow">
              <FaArrowUp />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
