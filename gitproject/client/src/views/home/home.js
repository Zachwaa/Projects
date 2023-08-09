//import { useEffect } from "react"

import { Mug,shopBanner,Tshirts,Bottle,Makeup } from "../../assets"
import Container  from "../../components/Container"
import Frame from "../../components/Frame"


const Home = () => {

    const Frames = [{
        Text: "Mugs",
        Picture: Mug
    },
    {Text: "T-shirts",
    Picture: Tshirts},
    {Text: "Bottle",
    Picture: Bottle},
    {Text: "Make-up",
    Picture: Makeup}
]

    function addtoWishlist(){
        

    }

    return (
        <>  
            <Container direction="column" color="#028090" textColor="white">
                <span> Enjoy our new Items on sale using this discount code 34FF42552! </span> 
            </Container>
            <Container direction="column">
                <Container direction="row">
                    {Frames.map((obj) => <Frame Text ={obj.Text} Picture={obj.Picture} Width={"200"} onClick={addtoWishlist}></Frame>)}
                </Container>
               
                <div>
                    <img src={shopBanner} alt ="Shop Banner" width="100%"/>
                </div>

            </Container>
           
            
        </>
        
    )
}   

export default Home