import Product, { IProduct } from './Product'

interface IProductListProps {
  products: IProduct[]
}

const ProductList = (props: IProductListProps) => {
  const { products } = props
  return (
    <div>
      <div className='product-list'>
        {products.map((product, index) => (
          <Product product={product} key={index} />
        ))}
      </div>
    </div>
  )
}

export default ProductList
