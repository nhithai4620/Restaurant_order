
import React, { useState, useEffect } from 'react';
import {fooditemsdata} from "../../api/index.js";
import { List, ListItem, ListItemText, Paper, InputBase, IconButton, makeStyles, ListItemSecondaryAction } from '@material-ui/core';
// import { createAPIEndpoint, ENDPIONTS } from "../../api";

const Searchfooditems = () => {
    const [foodItems, setFoodItems] = useState(fooditemsdata);
    const [searchList, setSearchList] = useState([]);
  
    // useEffect(() => {
    //     createAPIEndpoint(ENDPIONTS.FOODITEM).fetchAll()
    //         .then(res => {
    //             setFoodItems(res.data);
    //             setSearchList(res.data);
    //         })
    //         .catch(err => console.log(err))

    // }, [])

    // useEffect(() => {
    //     let x = [...foodItems];
    //     x = x.filter(y => {
    //         return y.foodItemName.toLowerCase().includes(searchKey.toLocaleLowerCase())
    //             && orderedFoodItems.every(item => item.foodItemId != y.foodItemId)
    //     });
    //     setSearchList(x);
    // }, [searchKey, orderedFoodItems])
    return (
        <>
            <List>
                {
                    foodItems.map((item, idx) =>(
                        <ListItem
                            key={idx}>
                            <ListItemText
                                primary={item.foodItemName}/>
                    
                        </ListItem>
                    ))
                }
            </List>
        </>
        
    );
}

export default Searchfooditems;
