import { filter, liveFilter, reset } from "../action/actionType"

import Data from "../Content/productData"

export const View = (state=Data,action) => {
    state=Data
    if(action.type===filter){
        //geting date of input
        var d2 = new Date(action.payload.InputValue.movingdate);
        // console.log(typeof(String(action.payload.InputValue.name)))
        console.log(action.payload.InputValue.propertyType)
        //Filtering all condition as per given Task
        // &&  Number(x.price) > Number(action.payload.InputValue.minprice) && Number(x.price) < Number(action.payload.InputValue.maxprice)
        // && new Date(x.moveInDate) > d2
        let result = state.filter((x)=>{
            //console.log(x.propertyType)
            return(
                String(x.city) === String(action.payload.InputValue.name)  && x.propertyType.toLowerCase() === String(action.payload.InputValue.propertyType)
                &&  Number(x.price) > Number(action.payload.InputValue.minprice) && Number(x.price) < Number(action.payload.InputValue.maxprice)
                && new Date(x.moveInDate) > d2
            )
        })
        
        console.log(result)
        return (state,result)
    }
    //for living searching
    if(action.type === liveFilter){
        state=Data
        const filteredData = state.filter((item) => item.name.toLowerCase().includes(action.payload.InputValue.live.toLowerCase()))
        
        return (state,filteredData)
        
    }
    //reseting for product to default
    if(action.type === reset){
        
        
        return (state,Data)
        
    }
    
    return state


}

