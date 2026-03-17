import React, { useEffect, useState } from 'react'
import { PDFViewer, Document, Page, View, Text } from '@react-pdf/renderer'

const PDFviewer = () => {
  const [product, setProduct] = useState([])
  const [productDetails, setProductDetails] = useState(null)

  async function featchlistOfProduct() {
    try {
      const respons = await fetch("https://dummyjson.com/products?limit=10&skip=0", {
        method: "GET"
      })

      const res = await respons.json()

      if (res && res.products && res.products.length > 0) {
        setProduct(res.products)
      }
    } catch (error) {
      console.log(error)
    }
  }

  async function handlefeatchprodutDetails(getId) {
    try {
      const respons = await fetch(`https://dummyjson.com/products/${getId}`, {
        method: "GET"
      })
      const res = await respons.json()
      if (res) {
        setProductDetails(res)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    featchlistOfProduct()
  }, [])

  console.log(product)

  return (
    <div>
      <h1 className="text-4xl">PDFviewer</h1>
      <ul>
        {
          product && product.length > 0 ?
            product.map((item, index) => {
              return (
                <div key={index}>

                  <li
                    onClick={() => handlefeatchprodutDetails(item.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    {item.title}
                  </li>
                </div>
              )
            }) : ""
        }
      </ul>
      <div className='pdf-viwer-page'>
        {productDetails && (
          <PDFViewer style={{ width: "100%", height: "300px" }}>
            <Document>
              <Page>
                <View>
                  <Text>{productDetails?.title}</Text>
                  <Text>{productDetails?.description}</Text>
                  <Text>{productDetails?.category}</Text>
                </View>
              </Page>
            </Document>
          </PDFViewer>
        )}
      </div>
    </div>
  )
}

export default PDFviewer
