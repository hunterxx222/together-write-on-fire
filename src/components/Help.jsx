import React from "react";
import WriteButton from "./WriteButton";
import Space from "./Space";
import {Link} from "react-router-dom";

const renderQuote = ({text, author, url}) => {
  return (
    <blockquote cite={url} key={author}>
      <p>
        <i className="icon-quote-left"/>
        {text}
        <i className="icon-quote-right"/>
      </p>
      <p className="author">
        &mdash; <a href={url}>{author}</a>
      </p>
    </blockquote>
  );
};

export default class Help extends React.Component {
  componentDidMount() {
    if (window.plausible) window.plausible('Help')
  }

  render() {
    return (
      <div className="Help">
        <Link to="/" className="navButton backButton">
          Back
        </Link>
        <Space l/>
        <div className="content">

          <h1>Giúp đỡ</h1>
          <h2>What's the point?</h2>
          <p>
            Bạn đang suy nghĩ cần phải làm gì trong đầu? Bạn muốn thực hiện nó nhưng không muốn bắt đầu?
            🔥Write on Fire 🔥 được thiết kế để giúp bạn bắt đầu. <br/>
            Lên kế hoạch trong ngày?<br/>
            Viết tất cả những gì trong đầu?<br/>
            Bắt đầu một chiến dịch marketing mới?<br/>
            Bắt đầu viết nhé

          </p>
          <p>
            Because 'tis better to have written and lost, than never to have
            written at all.
          </p>

          <Space m/>
          <WriteButton ghost color="red"/>

          <h2>Có ai đọc được những gì tôi viết không?</h2>
          <p>
            Không có ai đọc được những gì bạn viết.
          </p>
          <h4>Giấy phép</h4>
          <small>GPL-v3 GNU GENERAL PUBLIC LICENSE. <br/> GitHub: https://github.com/hunterxx222/together-write-on-fire</small>
          <Space l/>
        </div>
      </div>
    );
  }
};

