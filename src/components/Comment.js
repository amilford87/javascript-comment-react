import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Comment.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

import Avatar from './img.jpg';

const authorStyle = {
  'fontWeight': 600,
  'fontSize': '10px',
  'marginLeft': '8px',
}

const comment = {
  name: "Brad",
  author: true,
  message: "So what the German automaker is likely to focus on today is the bigger picture. This will be the first time we see the Taycan free from any prototype bodywork.",
  minutesAgo: 2,
  replies: 21,
  upVotes: 123,
  downVotes: 0
};

const author = comment.author === true ? "AUTHOR" : "";
      
// const upVotes = comment.upVotes;

// const downVotes = comment.downVotes;

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      upVotes: comment.upVotes ? comment.upVotes : 0,
      downVotes: comment.downVotes ? comment.downVotes: 0 
    };
  }     
      // Function to show replies on click
      replyClick = () => {
        alert("This is where you would reply");
      }
      
      
      // Function to show replies on click
      repliesClick = () => {
        alert("This is where you would see the replies");
      }
      
      
      // Functions to add or takeaway a new up or down vote
      upVotesClick = () => {
            if (this.state.upVotes === comment.upVotes) {
              this.setState({
                upVotes: this.state.upVotes + 1
              });
              if (this.state.downVotes !== comment.downVotes) {
                this.setState({
                  downVotes: this.downVotes
                });
                }
              } else {
                this.setState({
                  upVotes: comment.upVotes? comment.upVotes : ""
                })
              }
      };
      
      downVotesClick = () => {
        if (this.state.downVotes === comment.downVotes) {
          this.setState({
            downVotes: this.state.downVotes + 1
          });
          if (this.state.upVotes !== comment.upVotes) {
            this.setState({
              upVotes: comment.upVotes
            });
            }
          } else {
            this.setState({
              downVotes: comment.downVotes
            })
          }
  };

  
  render(){
    console.log(this.state.downVotes);
        return (
            <div>
        <p> &nbsp;</p>
    <div id="container">
        <img id="avatar" alt="avatar" src={Avatar}/>
    <table id="comment">
      <tbody>
        <tr>
            <td><span id="name">{comment.name}</span>
            <span className="badge badge-pill badge-dark" style={authorStyle}>{author}</span>
            <span id="posted"><strong>&#183;</strong> {comment.minutesAgo} MINUTES AGO`</span></td>
        </tr>
        <tr>
            <td id="message" colSpan="6"><p>{comment.message}</p></td>
        </tr>
        <tr>
            <td><button id="reply" className="button" onClick={this.replyClick}>REPLY</button>
            <button id="replies" className="button"> <span id="reply-num" onClick={this.repliesClick}></span><strong>{comment.replies}</strong> REPLIES</button>
            <button id="up-votes" className="button" onClick={this.upVotesClick}><FontAwesomeIcon icon={faAngleUp}/> {this.state.upVotes !== 0? this.state.upVotes : ""}</button>
            <button id="down-votes" className="button" onClick={this.downVotesClick}><FontAwesomeIcon icon={faAngleDown}/> {this.state.downVotes !== 0? this.state.downVotes : ""}</button></td>
        </tr>
        </tbody>
    </table>
    </div>
    </div>
        )
    }
}

  export default Comment