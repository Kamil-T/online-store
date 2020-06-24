import Header from '../components/Header'
import ProductList from '../components/ProductList'
import { IProduct } from '../components/Product'

interface IIndexProps {
  products: IProduct[]
}

const Index = (props: IIndexProps) => {
  return (
    <div className='app'>
      <Header />
      <main className='main'>
        <ProductList products={props.products} />
      </main>
    </div>
  )
}

Index.getInitialProps = async ({ req }) => {
  return {
    products: [
      {
        id: '1',
        name: 'product1',
        price: 2,
        description: 'something',
      } as IProduct,
      {
        id: '2',
        name: 'product2',
        price: 2,
        description: 'nothing',
      } as IProduct,
      {
        id: '3',
        name: 'product3',
        price: 2,
        description: 'everything',
      } as IProduct,
    ],
  }
}

export default Index
