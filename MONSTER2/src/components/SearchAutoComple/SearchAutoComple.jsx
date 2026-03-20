import React, { useEffect, useState } from "react";

const SearchAutoComple = () => {
  const [load, setLoad] = useState(false);
  const [users, setUsers] = useState([]);
  const [er, setEr] = useState(null);
  const [showDropdown, setShowDropdwon] = useState(false);
  const [filteruser, setFilteruser] = useState([]);

  const [searchparam, setSearchParama] = useState("");

  function handelChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParama(query);
    if (query.length > 1) {
      const filtereddata =
        users && users.length
          ? users.filter((item) => item.toLowerCase().includes(query))
          : [];

      setFilteruser(filtereddata);
      setShowDropdwon(true);
    } else {
      setShowDropdwon(false);
    }
  }

  async function featchList() {
    try {
      setLoad(true);
      const res = await fetch("https://dummyjson.com/users");

      const data = await res.json();
      console.log(data);

      if (data && data.users && data.users.length > 0) {
        setLoad(false);
        setEr(null);
        setUsers(data.users.map((username) => username.firstName));
      }
    } catch (error) {
      console.log(error);
      setEr(error);
    }
  }

  useEffect(() => {
    featchList();
  }, []);

  console.log(users, filteruser);

  if(load){
    return <div>loading</div>
  }

  return (
    <div>
      <h1>search</h1>
      <input
        value={searchparam}
        onChange={(e) => handelChange(e)}
        type="text"
      />
      {showDropdown && (
        <p>
          {filteruser.map((user) => {
            return (
              <>
                <p
                  onClick={() => setSearchParama(user.toLowerCase())}
                  key={user}
                >
                  {user.toLowerCase()}
                </p>
              </>
            );
          })}
        </p>
      )}
      {er}
    </div>
  );
};

export default SearchAutoComple;
