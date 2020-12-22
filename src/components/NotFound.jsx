import React from 'react';
import {Image} from 'react-bootstrap';

const NotFound = ()=>{
    return(
        <div>
            <h2 style={{color:"#E82D00"}}>Error 404</h2>
            <h3>La página a la que intenta acceder no existe</h3>
            <Image src="img/work.jpeg" style={{height:"250px"}} rounded />
        </div>
    )
}

export default NotFound;