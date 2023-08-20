import { useRouter } from "next/router";

const Product = ({product}) => {
    const router = useRouter()
    if(router.isFallback) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <h2>
                {product.id} {product.title} {product.price}
            </h2>
            <p>{product.description}</p>
            <hr />
        </div>
    )
}

export default Product;


export const getStaticPaths = async () => {
    // const response = await fetch('http://localhost:4000/products')
    // const data = await response.json()
    // const paths = data.map(product => {
    //     return {
    //         params: { productId: `${product.id}` }
    //     }
    // })
    return {
        paths: [{ params: { productId: '1' } }],
        fallback: true
    }
}

export const getStaticProps = async (context) => {
    const { params } = context;
    const response = await fetch(`http://localhost:4000/products/${params.productId}`)
    const data = await response.json()
    if(!data.id){
        return {
            notFound: true
        }
    }
    return {
        props: {
            product: data
        },
        
    }
}