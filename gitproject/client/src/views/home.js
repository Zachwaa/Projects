import { useEffect } from "react"

const Home = () => {

    const [backendData,setBackendData] = ([{}])

    useEffect(()=> {
        fetch("/").then(
            response => {
                response.json()
            }
        ).then (
            data => {
                setBackendData(data)
            }
        )
    })

    return (
        <>
            <span>{backendData}</span>
            <div>Home Page</div>
        </>
        
    )
}   

export default Home