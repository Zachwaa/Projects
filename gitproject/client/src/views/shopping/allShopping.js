import { useEffect,useState } from "react"
import axios from "axios"
import ItemFrame from "../../components/itemFrame"
import styled from "styled-components"
//import { useSearchParams } from "react-router-dom"

export const Results = styled.div`
    display:grid;
    grid-template-columns: auto auto auto auto
` 

export const Block = styled.div`
    padding: 20px 80px;
    background-color:white
`

const Shop = () => {
    
    const [products,setProducts] = useState([])

    useEffect(() => {
        retrieveAll()
    },[])

   // const [ Params ] = useSearchParams()

    useEffect(() => {
        console.log(products)
    },[products])


    async function retrieveAll() {
     
        axios.get('api/productList',{ params : { category: "Shoes"}})
        .then((response) => {
            const res = response.data
            var data = []
            for (var i=0;i<res.length;i++){
                data.push(res[i])
            }
            setProducts(data)
        }) 
    }

    return (
        <Block>
            <Results>
                 {products.map((obj) => <ItemFrame text={obj.product_name} price={obj.product_price} picture={obj.product_img} key={obj.product_id}></ItemFrame>)}        
            </Results>
        
        </Block>
    )



}

export default Shop