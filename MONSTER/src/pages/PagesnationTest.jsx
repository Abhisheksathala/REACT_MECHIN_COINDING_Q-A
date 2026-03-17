import React from 'react';
import Pagenation from './Pagenation';

const PagesnationTest = () => {
  const dummyData = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `product${index + 1}`,
  }));

  const itemsperpage = 10;
  const [curruntpage, setCurruntpage] = React.useState(1);
  const indexofLastitem = curruntpage * itemsperpage;
  const indexoffirstitem = indexofLastitem - itemsperpage;
  const currentListItems = dummyData.slice(indexoffirstitem, indexofLastitem);
  console.log(currentListItems);

  const handelchange = (pagenumber) => {
    setCurruntpage(pagenumber);
  };
  
  return (
    <div>
      <div className="bg-red-600">
        {currentListItems.map((items, index) => (
          <li className="px-3" key={items.id || index}>
            {items?.name}
          </li>
        ))}
        <Pagenation
          totalpages={Math.ceil(dummyData.length / itemsperpage)}
          currentpage={curruntpage}
          onpagechnage={handelchange}
        />
      </div>
    </div>
  );
};

export default PagesnationTest;
