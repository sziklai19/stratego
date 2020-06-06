import React from 'react';

export function Layout(props){
    return(
        <>
            <img src="./assets/logo.png" alt="logo" className="mx-auto my-3 w-50 d-block" />
            {props.children}
        </>
    );
}