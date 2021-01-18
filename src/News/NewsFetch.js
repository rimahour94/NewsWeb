import react,{useState,useEffect} from "react"
import axios from "axios"
import "./style.css"
import svg from "./news.svg"





function NewsFetch(){

    const [isLoading, setLoading]=useState(true)
    const [news,setNews]= useState([])
    const [err, seterr] = useState('')

    useEffect(()=>{
        fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=2cf734afaea34b3783fc22e3f48b4f01")
        .then((res)=>{
           console.log(res.data.articles) 
           setLoading(false)
           setNews(res.data.articles)
     })
        .catch((err)=>{
            
                setLoading(false)
                seterr("Something went wrong!")   
        })
    
    },[])

    return(
        <div className="ContainerNews">
            

             {
               isLoading?

                 <p  style={{ color:"white",textAlign:"center",fontFamily:'sans-serif'}}>Loading...</p>:

                 news.map((post)=>{
                    return(
                        <div className="details">
                        <img  alt="Oops try again" src={post.urlToImage}/> <br/>
                        <a className="post" href={post.url} >{post.title}</a>
                      
                    </div>
                    )
                })
             }
             {err && <p style={{color:"white",fontFamily:'sans-serif'}}>{err}</p> }
             
            </div>
    )
}

export default NewsFetch
