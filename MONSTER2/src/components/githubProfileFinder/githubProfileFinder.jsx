import React, { useEffect, useState } from "react";

const GithubProfileFinder = () => {
  const [val, setVal] = useState("abhishek");
  const [d, setD] = useState(null);

  const search = async () => {
    const res = await fetch(`https://api.github.com/users/${val}`);
    const data = await res.json();
    if (data) {
      setD(data);
    }
    console.log(data);
  };

  useEffect(() => {
    search();
  }, []);

  if (!d) return <div>Loading....</div>;

  const { created_at, followers, location, name } = d ;

  console.log(created_at, followers, location, name)
  return (
    <div className="git profile container ">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="search git user name"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <button onClick={search}>search</button>
    </div>
  );
};

export default GithubProfileFinder;
