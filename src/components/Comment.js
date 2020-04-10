import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Comment.css';

import Avatar from './img.jpg';

class Comment extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }

    comment = {
        name: "Brad",
        author: true,
        message: "So what the German automaker is likely to focus on today is the bigger picture. This will be the first time we see the Taycan free from any prototype bodywork.",
        minutesAgo: 2,
        replies: 21,
        upVotes: 123
      };
      
      author = this.comment.author === true ? `<span class="badge badge-pill badge-dark" style="font-weight:500; font-size:10px; margin-left:2px;">AUTHOR</span>` : "";
      
      upVotes = this.comment.upVotes? this.comment.upVotes : "";
      
      downVotes = this.comment.downVotes? this.comment.downVotes : "";
      
      // Function to show replies on click
      // eslint-disable-next-line no-undef
      replyClick = () => {
        alert("This is where you would reply");
      }
      
      
      // Function to show replies on click
      repliesClick = () => {
        alert("This is where you would see the replies");
      }
      
      
      // Functions to add or takeaway a new up or down vote
      upVotesClick = () => {
            // if (this.upVotes === this.comment.upVotesComment) {
            //     this.upVotes = this.upVotes + 1;
            //     if (document.getElementById("down-votes").innerHTML === this.downVotes + 1) {
            //         document.getElementById("down-votes").innerHTML = this.downVotes
            //     }
            // } else {
            //     document.getElementById("up-votes").innerHTML = this.upVotes;
            // }
      };
      
      downVotesClick = () => {
        // if (document.getElementById("down-votes").innerHTML === `<i class="fa fa-angle-down"></i> ${downVotes}`){
        //     document.getElementById("down-votes").innerHTML = `<i class="fa fa-angle-down"></i> ${downVotes + 1}`;
        //     if (document.getElementById("up-votes").innerHTML === `<i class="fa fa-angle-up"></i> ${upVotes + 1}`){
        //         document.getElementById("up-votes").innerHTML = `<i class="fa fa-angle-up"></i> ${upVotes}`
        //     }
        // } else {
        //     document.getElementById("down-votes").innerHTML = `<i class="fa fa-angle-down"></i> ${downVotes}`
        // }
      };
  
    render(){
        return (
            <div>
        <p> &nbsp;</p>
    <div id="container">
        <img id="avatar" alt="avatar" src={Avatar}/>
    <table id="comment">
      <tbody>
        <tr>
            <td><span id="name">{this.comment.name}</span>
            <span className="badge badge-pill badge-dark">AUTHOR</span>
            <span id="posted"><strong>&#183;</strong> {this.comment.minutesAgo} MINUTES AGO`</span></td>
        </tr>
        <tr>
            <td id="message" colSpan="6"><p>{this.comment.message}</p></td>
        </tr>
        <tr>
            <td><button id="reply" className="button" onClick={this.replyClick}>REPLY</button>
            <button id="replies" className="button"> <span id="reply-num" onClick={this.repliesClick}></span>{this.comment.replies} REPLIES</button>
            <button id="up-votes" className="button" onClick={this.upVotesClick}>`<i class="fa fa-angle-up"></i> {this.upVotes}</button>
            <button id="down-votes" className="button" onClick={this.downVotesClick}>`<i class="fa fa-angle-down"></i> {this.downVotes}</button></td>
        </tr>
        </tbody>
    </table>
    </div>
    </div>
        )
    }
}

  export default Comment