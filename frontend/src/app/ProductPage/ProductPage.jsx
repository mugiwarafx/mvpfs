import React from 'react'
import { Header, Footer } from '../layout'
import { useSelector } from 'react-redux'

export function ProductPage() {
  const products = useSelector((state) => state.product)

  console.log(products)
  console.log(Object.values(products))

  products.map((product) => console.log(product))

  return (
    <>
      <Header />
      <main>
        <section>
          <h1>@the_place_to_be/our_products</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti cumque libero suscipit dolore. Vero suscipit assumenda ratione,
            perferendis eum tempore nulla, mollitia tempora ipsa quis neque. Ab provident eos iste!
          </p>
        </section>
        {products.map((product) => {
          return (
            <div id={'product' + product.id} key={product.id}>
              <p>
                <span>id: </span> {product.id}
              </p>
              <p>
                <span>sellerId: </span> {product.sellerId}
              </p>
              <p>
                <span>name: </span> {product.id}
              </p>
              <p>
                <span>amountAvailable: </span> {product.amountAvailable}
              </p>
              <p>
                <span>cost: </span> {product.cost}
              </p>
              <p>
                <span>createdAt: </span> {product.createdAt}
              </p>
            </div>
          )
        })}
      </main>
      <Footer />
    </>
  )
}
