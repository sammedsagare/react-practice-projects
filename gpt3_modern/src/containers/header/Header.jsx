import peopleImage from "../../assets/people.png";
import aiImage from "../../assets/ai.png";

import "./header.css";

const Header = () => {
  return (
    <>
      <div className="header section__padding" id="home">
        <div className="header-content">
          <h1 className="gradient__text">
            Let&apos;s Build Something amazing with GPT-3 OpenAI
          </h1>
          <p>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>

          <div className="header-content-input">
            <input type="email" placeholder="Your Email Address" />
            <button type="button">Get Started</button>
          </div>

          <div className="header-content-people">
            <img src={peopleImage} />
            <p>1,600 people requested access a visit in the last 24 hours</p>
          </div>
        </div>
        <div className="header-image">
          <img src={aiImage} />
        </div>
      </div>
    </>
  );
};

export default Header;
