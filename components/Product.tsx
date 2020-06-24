import { withRouter, Router } from 'next/router'

export interface IProduct {
  id: string
  name: string
  price: number
  url: string
  description: string
}

interface IProductProps {
  product: IProduct
  router: Router
}

const Product = (props: IProductProps) => {
  return (
    <div className='product'>
      <h2 className='product-title'>{props.product.name}</h2>
      <p className='product-description'>{props.product.description}</p>
      <div className='product-price-button'>
        <div className='product-price'>${props.product.price.toFixed(2)}</div>
        <button
          className='add-item product-button'
          data-item-id={props.product.id}
          data-item-name={props.product.name}
          data-item-price={props.product.price}
          data-item-url={props.router.pathname}>
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default withRouter(Product)
