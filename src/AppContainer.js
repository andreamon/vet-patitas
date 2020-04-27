import React from 'react'
import Pets from './ListTest';
// import {Provider} from 'react-redux'
// import generateStore from './store'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faTrashAlt, faPencilAlt, faPlusSquare, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
library.add(fab, faTrashAlt, faPencilAlt, faPlusSquare, faPlusCircle);
export default function App (){
    // const store = generateStore();
    return(
        // <Provider store={store}>
            <Pets />
        // </Provider>
    )
}