import React from 'react';
import OrderForm from './OrderForm';
import {useForm} from '../../hooks/useForm';
import {Grid } from '@material-ui/core';
import Searchfooditems from './SearchFoodItems';
import Orderedfooditems from './OrderedFoodItems';



const generateOrderNumber = () => Math.floor(100000 + Math.random() * 900000).toString();

const getFreshModelObject = () => ({
    orderMasterId: 0,
    orderNumber: generateOrderNumber(),
    customerId: 0,
    pMethod: 'none',
    gTotal: 0,
    deletedOrderItemIds: '',
    orderDetails: []
})

const Order = () => {
    const  {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetFormControls
    } = useForm(getFreshModelObject);

    const removeFoodItem = (index, id) =>{
        let x = {...values};
        x.orderDetails= x.orderDetails.filter((_,i) => i != index);
        setValues({...x});
    }

    return (
        
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <OrderForm {...{values, errors, handleInputChange}}/>
            </Grid>
            <Grid item xs={6}>
                <Searchfooditems
                    {...{
                        values,
                        setValues,
                        Orderedfooditems: values.orderDetails
                    }}
                />
            </Grid>
            <Grid item xs={6}>
                <Orderedfooditems
                    {...{Orderedfooditems: values.orderDetails, removeFoodItem}}
                />
            </Grid>
        </Grid>
    );        
            
}

export default Order;
