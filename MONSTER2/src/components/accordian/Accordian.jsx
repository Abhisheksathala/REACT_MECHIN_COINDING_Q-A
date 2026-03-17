import React from "react";
import { useState } from "react";

const data = [
  {
    id: "1",
    question: "What are accordion components?",
    answer:
      "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.",
  },
  {
    id: "2",
    question: "What are they used for?",
    answer:
      "They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options.",
  },
  {
    id: "3",
    question: "Accordion as a musical instrument",
    answer:
      "The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres.",
  },
  {
    id: "4",
    question: "Can I create an accordion component with a different framework?",
    answer:
      "Yes of course, it is very possible to create an accordion component with another framework.",
  },
];

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function singleselection(getcurrentId) {
    setSelected(getcurrentId === selected ? null : getcurrentId);
  }

  function handlemultiselection(getcurrentid) {
    let copymultipul = [...multiple];
    const findindexOfcurrentid = copymultipul.indexOf(getcurrentid);
    if (findindexOfcurrentid === -1) {
      copymultipul.push(getcurrentid);
    } else {
      copymultipul.splice(findindexOfcurrentid, 1);
    }
    setMultiple(copymultipul);
  }

  return (
    <div>
      <div className="wrapper">
        <h1 className="text-4xl">Accordian</h1>

        <h1
          className="text-4xl py-4"
          onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        >
          enable mulitselection
        </h1>

        {data && data.length > 0 ? (
          <div>
            {data.map((item, index) => {
              return (
                <>
                  <div key={item.id || index}>
                    <h1 className="text-2xl">{item.question}</h1>
                    <h1
                      className="text-2xl cursor-pointer"
                      onClick={() => {
                        enableMultiSelection
                          ? handlemultiselection(item.id)
                          : singleselection(item.id);
                      }}
                    >
                      +
                    </h1>
                    {
                      // selected === item.id ? <div className='content'>{item.answer}</div> : ""
                      enableMultiSelection
                        ? multiple.indexOf !== -1 && (
                            <div className="content">{item.answer}</div>
                          )
                        : selected === item.id && (
                            <div className="content">{item.answer}</div>
                          )
                    }
                  </div>
                </>
              );
            })}
          </div>
        ) : (
          <h1>no data</h1>
        )}
      </div>
    </div>
  );
};

export default Accordian;
