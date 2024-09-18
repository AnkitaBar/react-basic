// import { Card, CardActionArea, CardContent, CardMedia, Grid2, Typography } from '@mui/material'
// import axios from 'axios'
// import React, { useEffect, useReducer } from 'react'
// import { Link } from 'react-router-dom'

// const reducerFn = (state,action)=>{

//     switch(action.type){

//         case 'success':
//             return {
//                 products:action.payload.products,
//                 isLoading:false,
//                 error:null
//             }

//         case 'error':
//             return {
//                 products:[],
//                 isLoading:false,
//                 error:action.payload
//             }

//         default:
//             return state
//     }
// }

// const ProductListings = () => {
//     let initialState = {
//         products:[],
//         isLoading:true,
//         error:null,
//     }
//     const [data,dispatch] = useReducer(reducerFn,initialState);
//     useEffect(()=>{
//         axios.get('https://dummyjson.com/products?limit=200').then(res=>dispatch({type:'success',payload:res.data})).catch(err=>dispatch({type:'error',payload:err}))
//     },[])
//   return (
//     <>
//         <Typography variant='h3' sx={{textAlign:'center'}}>Product Listings</Typography>
//         <div style={{display:'flex',justifyContent:'center'}}>
//         {data.isLoading?<div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'80vh'}}><Typography variant='h4' color='color.primary'>Loading...</Typography></div>:
//             <Grid2 container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} padding={'2rem'} maxWidth={'100rem'}>
//                 {Array.isArray(data.products) && data.products.length!==0 && 
//                     data?.products?.map((item, index) => (
//                     <Grid2 key={index} size={{ xs: 2, sm: 4, md: 4 }} sx={{display:'flex',justifyContent:'center'}}>
//                             <Card sx={{ maxWidth: 345 }}>
//                                 <Link to={`/product/${item.id}`} style={{textDecoration:'none'}}>
//                                 <CardActionArea>
//                                     <CardMedia
//                                     component="img"
//                                     height="auto"
//                                     image={item.thumbnail}
//                                     alt="green iguana"
//                                     style={{
//                                         objectFit:'contain',
//                                     }}
//                                     />
//                                     <CardContent>
//                                     <Typography gutterBottom variant="h5" color="text.primary" component="div">
//                                         {item.title}
//                                     </Typography>
//                                     <Typography gutterBottom variant="h6" color="text.secondary" component="div">
//                                         Price - ${item.price}
//                                     </Typography>
//                                     <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//                                         {item.description.substring(0,50)+'...'}
//                                     </Typography>
//                                     </CardContent>
//                                 </CardActionArea>
//                                 </Link>
//                             </Card>
//                     </Grid2>
//                 ))}
//             </Grid2>
//         }
//         </div>
//     </>
//   )
// }

// export default ProductListings







import React, { useEffect, useReducer, useRef } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import axios from 'axios';
import { Card, CardActionArea, CardContent, CardMedia, CircularProgress, Grid2, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


const reducerFn = (state, action) => {
    switch(action.type) {
        case 'setData':
            let currData = state.data;
            return {
                ...state,
                data: [...currData,...action.payload]
            }
        case 'setError':
            return {
                ...state,
                error: action.payload
            }
        case 'setInitialFetch':
            return {
                ...state,   
                isInitialFetch: action.payload
            }
        case 'setHasMore':
            return {
                ...state,
                hasMore: action.payload
            }
        case 'setIsLoading':
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state
    }
}
const limit = 9;
const ProductListings = () => {
    let initialState = {
        data: [],
        error: false,
        isInitialFetch: false,
        hasMore:false,
        isLoading:true,
    }
    const [state, dispatch] = useReducer(reducerFn,initialState);

    const pageRef = useRef(1);
    const fetchProducts = async ({ page, isFetchingFirstTime }) => {
        
        try{
            
            dispatch({type:'setError', payload: false});
            
            isFetchingFirstTime && dispatch({type:'setInitialFetch', payload: true});
            const {data} = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${(page - 1) * limit}`);
            // console.log('first');
            // console.log(isFetchingFirstTime);
            // console.log(data);
            if(data.products){
                let newDataLength = data.products.length+state.data.length;
                console.log(newDataLength)
                console.log(data.total)
                if(newDataLength < data.total){
                    dispatch({type:'setHasMore', payload: true});
                }else{
                    dispatch({type:'setHasMore', payload: false});
                }
                dispatch({type:'setData', payload: data.products});
                dispatch({type:'setIsLoading', payload: false});
            }else{
                dispatch({type:'setHasmore', payload: false});
            }
        }
        catch(err) {
            // console.log(err)
            dispatch({type:'setHasMore', payload: false});
            dispatch({type:'setError', payload: err});
        }finally{
            dispatch({type:'setInitialFetch', payload: false});
        }
    }

    useEffect(() => {
        fetchProducts({ page: pageRef.current, isFetchingFirstTime: true });
        
    }, []);
    const [targetRef, isIntersecting] = useIntersectionObserver({ threshold: 0.5 });
    useEffect(() => {
        if(state.hasMore && isIntersecting) {
            console.log('second')

            pageRef.current = pageRef.current + 1;
            fetchProducts({ page: pageRef.current });
        }
    }, [isIntersecting,state.hasMore])

    return (
        <>  
            <Typography variant='h3' sx={{textAlign:'center'}}>Product Listings</Typography>
            {
                state.isLoading? <h1 style={{display:'flex',justifyContent:'center',alignItems:'center',height:'80vh'}}><CircularProgress /> Loading</h1> :
                <div style={{display:'flex',justifyContent:'center'}}>
            
                <Grid2 container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} padding={'2rem'} maxWidth={'100rem'}>
                    {Array.isArray(state.data) && state.data.length!==0 && 
                        state?.data?.map((item, index) => (
                        <Grid2 key={index} size={{ xs: 2, sm: 4, md: 4 }} sx={{display:'flex',justifyContent:'center'}}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <Link to={`/product/${item.id}`} style={{textDecoration:'none'}}>
                                    <CardActionArea>
                                        <CardMedia
                                        component="img"
                                        height="auto"
                                        image={item.thumbnail}
                                        alt="green iguana"
                                        style={{
                                            objectFit:'contain',
                                        }}
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" color="text.primary" component="div">
                                            {item.title}
                                        </Typography>
                                        <Typography gutterBottom variant="h6" color="text.secondary" component="div">
                                            Price - ${item.price}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            {item.description.substring(0,50)+'...'}
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    </Link>
                                </Card>
                        </Grid2>
                    ))}
                </Grid2>
            
            </div>
            }
            
            

            {state.hasMore && (
            <div ref={targetRef} style={{display:'flex',justifyContent:'center'}}>
                <h1><CircularProgress /> Loading</h1>
            </div>
            )}
        </>
    )
}

export default ProductListings;