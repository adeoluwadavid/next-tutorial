import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
export default function NotFound(){
    const router = useRouter();
    useEffect(()=>{
       setTimeout(()=>{
        router.push("/")
       },3000)
    },[router]) // [] to fire once
    return(
        <div className="not-found">
            <h1>Ooops...</h1>
            <h2>That page cannot be found</h2>
            <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
        </div>
    )
}