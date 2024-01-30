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

          {/*<h1>Giúp đỡ</h1>*/}
          <h2>Write on Fire là gì?</h2>
          <p>
            Bạn luôn suy nghĩ cần phải làm gì?
            Write on Fire sẽ giúp bạn bắt đầu. <br/><br/>
            Lên kế hoạch trong ngày?<br/>
            Viết tất cả suy nghĩ trong đầu?<br/>
            Viết nhật ký? <br />
            Bắt đầu một chiến dịch TikTok marketing?<br/>
            Thay đổi thế giới, đàm phán hoà bình, chữa ung thư, góp phần đưa Việt Nam trở thành cường quốc với 5 châu?
          </p>
          <p>
            <em>Bắt đầu thôi. Đừng suy nghĩ nữa vì nếu bạn dừng viết trong 5 giây, tất cả sẽ bị xoá hết, đốt trong biển lửa 🔥 của sự trì hoãn.</em>
          </p>

          <Space m/>
          <WriteButton ghost color="red"/>

          <h2>Có ai đọc bài của tôi không?</h2>
          <p>
            Không.
          </p>
          <h4>Giấy phép</h4>
          <small>GPL-v3 GNU GENERAL PUBLIC LICENSE. <br/> GitHub: https://github.com/hunterxx222/together-write-on-fire</small>
          <Space l/>
        </div>
      </div>
    );
  }
};

