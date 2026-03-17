import React from 'react';

const Filter = () => {
  const [loading, setLoading] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const [currentslectedcategory, setCurrentslectedcategory] = React.useState([]);
  const [filtereditem, setFiltereditems] = React.useState([]);

  async function Featch() {
    try {
      setLoading(true);
      const api = await fetch('https://dummyjson.com/products', {
        method: 'GET',
      });
      const result = await api.json();
      if (result?.products) {
        setLoading(false);
        setProducts(result.products);
        setFiltereditems(result.products);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  React.useEffect(() => {
    Featch();
  }, []);

  React.useEffect(() => {
    let cpyprodcts = [...products];
    // console.log(cpyprodcts, 'cpyprodcts');
    setFiltereditems(
      currentslectedcategory !== ''
        ? cpyprodcts.filter((productitems) => {
            return productitems.category.toLowerCase() === currentslectedcategory.toLowerCase();
          })
        : cpyprodcts,
    );
  }, [currentslectedcategory]);


  const uniqueCategories =
    products && products.length > 0
      ? [
          ...new Set(
            products.map((item) => {
              return item.category;
            }),
          ),
        ]
      : [];
  // console.log(uniqueCategories, 'uniqueCategories');

  if (loading) {
    return <h3>Featching products pleace waity waity</h3>;
  }

  return (
    <div>
      <h1 className="text-4xl">filter Product BY Category</h1>

      <div className="">
        {uniqueCategories && uniqueCategories.length > 0 ? (
          <>
            {uniqueCategories.map((item, index) => {
              return (
                <>
                  <div className="" key={index}>
                    <button
                      onClick={() => {
                        setCurrentslectedcategory(currentslectedcategory !== '' ? '' : item);
                      }}
                      className=""
                    >
                      {item}
                    </button>
                  </div>
                </>
              );
            })}
          </>
        ) : (
          ''
        )}
      </div>
      <ul>
        {filtereditem && filtereditem.length > 0 ? (
          <>
            {filtereditem.map((item, index) => {
              return (
                <>
                  <div className="flex flex-wrap gap-4" key={index}>
                    <div className="">
                      {item?.images ? <img src={item.images} height={50} width={50} alt="" /> : ''}
                    </div>
                    <div className="text-[10px]">
                      {item?.description?.length > 100
                        ? item.description.slice(0, 50) + '...'
                        : item.description}
                    </div>
                  </div>
                </>
              );
            })}
          </>
        ) : null}
      </ul>
    </div>
  );
};

export default Filter;
