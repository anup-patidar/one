import React from 'react'
import './css/post.css';
import { Avatar } from '@material-ui/core';
import {
  ArrowDownwardOutlined,
  ArrowUpwardOutlined,
  ChatBubbleOutlined,
  MoreHorizOutlined,
  RepeatOneOutlined,
  ShareOutlined,
} from "@material-ui/icons";
import CloseIcon from "@material-ui/icons/Close";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import ReactTimeAgo from "react-time-ago";
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css'
import ReactTimeAgo from 'react-time-ago'
import axios from 'axios';
import ReactHtmlParser from "html-react-parser";

function LastSeen({ date }) {
  return (
    <div>
      <ReactTimeAgo date={date} locale="en-US" timeStyle="round" />
    </div>
  )
}
function Post({ post }) {


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFollowing, setFollowing] = useState(false);
  const [answer, setAnswer] = useState("");
  const Close = <CloseIcon />;
  const handleQuill = (value) => {
    setAnswer(value);
  };
  const handleSubmit = async () => {
    if (post?._id && answer !== "") {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = {
        answer: answer,
        questionId: post?._id
      };
      await axios
        .post("/api/answers", body, config)
        .then((res) => {
          console.log(res.data);
          alert("Answer added succesfully");
          setIsModalOpen(false);
          window.location.href = "/";
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  return (
    <div className='post'>
      <div className='post-info'>
        <Avatar />
        <h4>UserName</h4>

        <small>
          <LastSeen date={post?.createdAt} />

        </small>
        <span className="post-info-follow" style={{
          paddingTop: '2px', marginLeft: 'auto', fontSize: '13px', cursor: 'pointer',
          textDecoration: isFollowing ? 'underline' : 'none',
          color: isFollowing ? 'blue' : 'gray',

        }} onClick={() => setFollowing(prevState => !prevState)}>{isFollowing ? 'Following' : 'Follow'}  </span>
      </div>

      <div className='post-body'>
        <div className='post-question'>
          <p>{post?.questionName}</p>

          <button onClick={() => setIsModalOpen(true)} className='post-answerbtn'>Answer</button>
          <Modal
            open={isModalOpen}
            closeIcon={Close}
            onClose={() => setIsModalOpen(false)}
            closeOnEsc
            center
            closeOnOverlayClick={false}
            styles={{
              overlay: {
                height: "auto",
              },
            }}


          >
            <div className="modal-question">
              <h1>{post?.questionName}</h1>
              <p>
                asked by <span className="name">username</span>  on{" "}
                <span className="name">
                  {new Date(post?.createdAt).toLocaleString()}
                </span>
              </p>
            </div>
            <div className="modal-answer">
              <ReactQuill
                value={answer}
                onChange={handleQuill}
                placeholder="Enter your answer"
              />
            </div>
            <div className="modal-button">
              <button className="cancle" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button onClick={handleSubmit} type="submit" className="add">
                Add Answer
              </button>
            </div>
          </Modal>
        </div>

        {post.questionUrl !== "" && <img src={post.questionUrl} alt="url" />}
      </div>
      <div className='post-footer'>
        <div className='post-footer-activity'>
          <ArrowUpwardOutlined />
          <ArrowDownwardOutlined />

        </div>
        <div className='post-footer-feature'>
          <RepeatOneOutlined />
          <ChatBubbleOutlined />
        </div>


        <div className='post-footer-right'>
          <ShareOutlined />
          <MoreHorizOutlined />
        </div>

      </div>
      <p style={{
        color: 'gray',
        fontSize: "14px",
        paddingTop: "15px",
        paddingLeft: "20px",
      }}>
        {post?.allAnswers.length} Answer(s)
      </p>

      {/* <div
        style={{
          margin: "5px 0px 0px 0px ",
          padding: "5px 0px 0px 20px",
          borderTop: "1px solid lightgray",
        }}
        className="post__answer"
      ></div> */}
      {post?.allAnswers?.map((_a) => (
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              padding: "10px 5px",
              borderTop: "1px solid lightgray",
            }}
            className="post-answer-container"
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
                fontSize: "12px",
                fontWeight: 600,
                color: "#888",
              }}
              className="post-answered"
            >
              <Avatar src={_a?.user?.photo} />
              <div
                style={{
                  margin: "0px 10px",
                }}
                className="post-info"
              >
                <p>{_a?.user?.userName}</p>
                <span>
                  <LastSeen date={_a?.createdAt} />
                </span>
              </div>
            </div>
            <div className="post-answer">{ReactHtmlParser(_a?.answer)}</div>
          </div>
        </div>
      ))}
    </div>
    // </div>
  )
}

export default Post
