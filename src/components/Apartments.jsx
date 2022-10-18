import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'

export default function Apartments() {
          const [products, setProducts] = React.useState([])
        
          const fetchData = () => {
           fetch("https://dummyjson.com/products?limit=10")
             .then(response => {
                return response.json()
              })
              .then(data => {
               setProducts(data)
              })
          }
        
          React.useEffect(() => {
            fetchData()
          }, [])
          console.log(products)
  return (
    <div className='px-8 mt-5'>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {
                products?.products?.map((product, i)=>(
            <div className="flex-col w-full rounded-t-xl">
                <Carousel showArrows={true} showThumbs={false} showStatus={false}>
                    {
                        product.images.map((img, i)=>(
                            <img src={img} alt="" className='object-cover object-center shadow rounded-xl h-72' />
                        ))
                    }
                </Carousel>
            </div>
                ))
            }
        </div>
    </div>
  )
}
