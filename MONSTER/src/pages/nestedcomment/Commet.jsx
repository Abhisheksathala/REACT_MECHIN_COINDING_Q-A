import React, { useState } from 'react';

const Commet = ({ comment, handleaddreplie }) => {
  const [reply, setReply] = useState('');
  const [showReplyCommentBox, setShowReplyCommentBox] = useState(false);

  return (
    <li>
      <span>{comment.title}</span>
      {!showReplyCommentBox ? (
        <button
          onClick={() => {
            setShowReplyCommentBox((prev) => !prev);
          }}
        >
          Add Reply
        </button>
      ) : null}

      {showReplyCommentBox ? (
        <div>
          <textarea rows={2} cols={20} value={reply} onChange={(e) => setReply(e.target.value)} />
          <br />
          <div className="reply-buttons-container">
            <button
              onClick={() => {
                handleaddreplie(comment.id, reply);
                setShowReplyCommentBox(false);
                setReply('');
              }}
            >
              Submit
            </button>
            <button
              onClick={() => {
                setShowReplyCommentBox(false);
                setReply('');
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : null}

      {comment.children && comment.children.length > 0 ? (
        <ul>
          {comment.children.map((childComment) => (
            <Commet key={childComment.id} comment={childComment} handleaddreplie={handleaddreplie} />

          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default Commet;
