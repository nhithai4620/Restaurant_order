import React,{useState} from 'react';
import Form from "../../layouts/Form";
import { ButtonGroup, Grid, InputAdornment, makeStyles, Button as MuiButton } from '@material-ui/core';
import {Input, Select, Button} from "../../controls";
import ReplayIcon from '@material-ui/icons/Replay';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';


const pMethods = [
    { id: 'none', title: 'Select' },
    { id: 'Cash', title: 'Cash' },
    { id: 'Card', title: 'Card' },
]

const useStyle = makeStyles(theme =>({
    adornmentText: {
        '& .MuiTypography-root': {
            color: '#f3b33d',
            fontWeight: 'bolder',
            fontSize: '1.5em'
        }
    },

}))

const Orderform = (props) => {
    
    const {values, errors, handleInputChange} = props;
    const classes = useStyle();

    return (
        <Form>
          <Grid container>
            <Grid item xs={6}>
                <Input 
                    disabled = {true}
                    label="Order Number"
                    name="orderNumber"
                    value={values.orderNumber}
                    InputProps ={{
                        startAdornment : <InputAdornment
                            className={classes.adornmentText}
                            position='start' 
                        >#</InputAdornment>
                    }}
                />
                <Select label="Customer"
                        name="customerId"
                        onChange = {handleInputChange}
                        options={[
                            {id:0, title: "Select"},
                            {id:1, title: "Customer 1"},
                            {id:2, title: "Customer 2"},
                            {id:3, title: "Customer 3"},
                            {id:4, title: "Customer 4"},
                        ]}
                />
            </Grid>
            <Grid item xs={6}>
                <Select label="Payment Method"
                        name="pMethod"
                        value={values.pMethod}
                        options={pMethods}
                        onChange = {handleInputChange}
                />
                <Input 
                    disabled = {true}
                    label="Grand total"
                    name="gTotal"
                    onChange = {handleInputChange}
                    value={values.gTotal}
                    InputProps ={{
                        startAdornment : <InputAdornment
                            className={classes.adornmentText}
                            position='start' 
                        >$</InputAdornment>
                    }}
                />
                <ButtonGroup>
                    <MuiButton 
                        size="large"
                        type="submit"
                        startIcon={<RestaurantMenuIcon/>}
                        >
                        Submit
                    </MuiButton>
                    <MuiButton 
                        size="small"
                        startIcon={<ReplayIcon/>}
                        >
                    </MuiButton>
                </ButtonGroup>
            </Grid>
          </Grid>
        </Form>
    );
}

export default Orderform;
