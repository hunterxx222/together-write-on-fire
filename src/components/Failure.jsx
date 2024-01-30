import React from "react";
import { Link } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import WriteButton from "./WriteButton";
import { withAppContext } from "./AppContext";

const TweetButton = ({ words }) => {
  const href = `https://twitter.com/intent/tweet?text=I+wrote+${words}+words+using+The+Most+Dangerous+Writing+App+-+until+it+deleted+everything+.+%23MDWA&url=https%3A%2F%2Fmaebert.github.io%2Fthemostdangerouswritingapp%2F`;
  const label = `I wrote ${words} words using The Most Dangerous Writing App - until it deleted everything.`;
  return (
    <a className="tweet" href={href}>
      {label}
    </a>
  );
};

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
