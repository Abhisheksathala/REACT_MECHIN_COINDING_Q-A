import React, { useEffect, useState } from "react";

const Sscrollindecater = ({ url }) => {
  const [d, setD] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [errorM, setErrorM] = useState();
  const [scrollPer, setScrollPer] = useState();

  const fetchData = async (geturl) => {
    try {
      setLoading(true);
      const res = await fetch(geturl);
      const data = await res.json();
      if (data) {
        setD(data.products);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setErrorM(error.message);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handscrollpersentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  function handscrollpersentage() {
    // console.log(
    //   document.body.scrollTop,
    //   document.documentElement.scrollTop,
    //   document.documentElement.scrollHeight,
    //   document.documentElement.clientHeight,
    // );

    const HowMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPer((HowMuchScrolled / height) * 100);
  }

  console.log("scrollPer", scrollPer);
  return (
    <div className="data-container relative ">
      <div className=" fixed top-0 bg-red-500 w-full">
        <h1>Custom Scroll indecator</h1>
        <div className="scroll-progress ">
          <div
            className="sroller bg-green-500 h-5 "
            style={{ width: `${scrollPer}%` }}
          ></div>
        </div>
      </div>
      {d && d.length > 0 ? (
        d.map((text, i) => {
          return (
            <React.Fragment key={i}>
              <p className="text-black text-2xl">{text.title}</p>
            </React.Fragment>
          );
        })
      ) : (
        <>
          <p>{errorM}</p>
        </>
      )}
    </div>
  );
};

export default Sscrollindecater;
