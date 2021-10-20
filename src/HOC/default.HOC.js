//Transform component into another component
//Adding additional functionalities  to the existing component

import React from "react";
import { Route} from "react-router-dom";

//layouts
import DefaultLayout from "../layouts/default.layout" 

const DefaultHOC =({component:Component,...rest})=>{
    //component
    //props-path,exact
    return (
        <>
        <Route {...rest}
        component={(props)=>(
            <DefaultLayout>
                <Component {...props}/>
            </DefaultLayout>
        )
        }
        />
        </>
    );
};

export default DefaultHOC;