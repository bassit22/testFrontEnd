import React from 'react'
import { useRouter } from 'next/router'
import Home from '../../module/home'



export default   () => {

    const router = useRouter()
    const { id } = router.query
    return (
        <div>
            <Home />
            <h1>HELLO {id} </h1>
        </div>
    )
}
