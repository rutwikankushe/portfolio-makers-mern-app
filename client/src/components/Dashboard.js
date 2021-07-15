import React from 'react';
import {Helmet} from "react-helmet";
import { useSelector, useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import {
	REDIRECT_FALSE,
	REMOVE_MESSAGE,
	SET_LOADER,
	CLOSE_LOADER,
	SET_MESSAGE,
} from '../store/types/PostTypes';
export const Dashboard = () => {
    const { redirect,message } = useSelector(
		(state) => state.PostReducer
	);
	
    const dispatch = useDispatch();
    useEffect(() => {
		if (redirect) {
			dispatch({ type: REDIRECT_FALSE });
		}
		if (message) {
			toast.success(message);
			dispatch({ type: REMOVE_MESSAGE });
		}
	}, [message]);
    return ( 
        < >
            <Helmet>
                <title>Dashboard-PORTFOLIO MAKER'S</title>
                <meta name='description' content="Portfolio Maker Free" ></meta>
            </Helmet>
            <Toaster
				position='top-center'
				reverseOrder={false}
				toastOptions={{
					style: {
						fontSize: '14px',
					},
				}}
			/>
        <p>WELCOM</p>
        <h1>This is Dashboard Page</h1>
        </>
    )
}

export default Dashboard