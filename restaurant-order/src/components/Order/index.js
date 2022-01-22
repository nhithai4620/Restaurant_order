import React from 'react';
import OrderForm from './OrderForm';
import {useForm} from '../../hooks/useForm';



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

    return (
        <div>
            <OrderForm {...{values, errors, handleInputChange}}/>
        </div>
    );
}

export default Order;
