import React from "react";
import { Link } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import WriteButton from "./WriteButton";
import { withAppContext } from "./AppContext";

const FacebookButton = ({ words }) => {
const href = `https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwrite.together.vn`;
const label = `Chia sẻ trên Facebook về việc tôi đã viết được ${words} từ trên Write on Fire cho đến khi nó xoá hết công sức của tôi!`;
  return (
    <a className="facebook" href={href} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );
};

const Failure = ({ limit, type, lost, words }) => {
  return (
    <TransitionGroup>
      {lost && (
        <CSSTransition classNames="failure" timeout={{ enter: 500, exit: 100 }}>
          <div className="failure" key="failScreen">
            <Link to="/help" className="navButton helpButton white">
              Help
            </Link>
            <div className="inner">
              <h3>Bạn thất bại.</h3>
              <FacebookButton words={words} />
              <WriteButton
                ghost
                noPanel
                color="white"
                label="Thử lại"
                type={type}
                limit={limit}
              />
            </div>
          </div>
        </CSSTransition>
      )}
    </TransitionGroup>
  );
};

export default withAppContext(Failure);
