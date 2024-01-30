import React, {useState, useEffect} from "react";
import WriteButton from "./WriteButton";
import Space from "./Space";
import classNames from "classnames";
import {Link} from "react-router-dom";

const Banner = () => {
  const [visible, setVisible] = useState(false);
  const [closed, setClosed] = useState(false);

  const innerClasses = classNames("inner", {closed, visible});

  useEffect(() => {
    if (!visible) {
      setTimeout(() => setVisible(true), 500);
    }
  }, [visible]);

  const handleClose = (e) => {
    e.preventDefault();
    setClosed(true);
  };
};

const Welcome = () => (
  <div className="Welcome">
    <Banner/>
    <Link to="/help" className="navButton helpButton">
      Giúp đỡ
    </Link>
    <Space xl/>
    <div>
      <div className="logo">
        <div className="mark"></div>
        <h1>
          <span>🔥Write🔥</span>
          <span>🔥on🔥</span>
          <span>🔥Fire🔥</span>
        </h1>
      </div>
      <Space m/>
      <h2>
        Thiếu dopamine? Ngừng viết, bạn sẽ mất tất cả ☠️
        <i className="caret icon-cursor"/>
      </h2>
      <Space xl/>
      <WriteButton ghost color="red"/>
    </div>
    <small className="footer"><em>Sản phẩm bổ trợ cho <a href="http://www.together.vn">www.together.vn</a></em></small>
  </div>
);

export default Welcome;