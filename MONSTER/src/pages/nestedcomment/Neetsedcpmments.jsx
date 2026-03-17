import React, { useState } from 'react';
import Commet from './Commet';
const Neetsedcpmments = () => {
  const [inputValue, setInputValue] = useState('');

  const [comments, setComments] = useState([
    {
      id: 1,
      title: 'This is first comment',
      children: [
        {
          id: 2,
          title: 'This is child comment one',
          children: [],
        },
        {
          id: 3,
          title: 'This is child comment two',
          children: [],
        },
        {
          id: 4,
          title: 'This is child comment three',
          children: [],
        },
      ],
    },
  ]);

  function handleaddreplie(getcurrentid, getcurrentreplie) {
    let updatedComments = [...comments];

    handlenewcomment(
      updatedComments,
      getcurrentid,
      getcurrentreplie);
    setComments(updatedComments);
  }

  function newcomments(text) {
    return {
      id: new Date().getTime(),
      title: text,
      children: [],
    };
  }

  function handlenewcomment(
    updatedcomets,
    getcurrentid,
    getcurrentreplie
  ) {
    for (let i = 0; i < updatedcomets.length; i++) {
      let comment = updatedcomets[i];
      if (comment.id == getcurrentid) {
        comment.children.unshift(
          newcomments(getcurrentreplie)
        );
        return;
      }
    }

    for (let i = 0; i < updatedcomets.length; i++) {
      let comment = updatedcomets[i];
      if (comment.children && comment.children.length > 0) {
        handlenewcomment(comment.children, getcurrentid, getcurrentreplie);
      }
    }
  }

  return (
    <div>
      <h1 className="text-4xl">netsed commet</h1>
      <textarea
        className="border"
        rows={5}
        cols={100}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></textarea>
      <button
        onClick={() => {
          setComments([newcomments(inputValue), ...comments]);
          setInputValue('');
        }}
        className="bg-red-400"
      >
        add commet
      </button>
      <ul>
        {comments.map((comment) => (
          <Commet handleaddreplie={handleaddreplie} key={comment.id} comment={comment} />
        ))}
      </ul>
    </div>
  );
};

export default Neetsedcpmments;
