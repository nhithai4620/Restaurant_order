import React from 'react'
import { List, ListItemText, Paper, ListItem, ListItemSecondaryAction, IconButton, ButtonGroup, Button, makeStyles } from '@material-ui/core';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';


const useStyles = makeStyles(theme => ({
    paperRoot: {
        margin: '15px 0px',
        '&:hover': {
            cursor: 'pointer'
        },
        '&:hover $deleteButton': {
            display: 'block'
        }
    },
    buttonGroup: {
        backgroundColor: '#E3E3E3',
        borderRadius: 8,
        '& .MuiButtonBase-root ': {
            border: 'none',
            minWidth: '25px',
            padding: '1px'
        },
        '& button:nth-child(2)': {
            fontSize: '1.2em',
            color: '#000'
        }
    },
    deleteButton: {
        display: 'none',
        '& .MuiButtonBase-root': {
            color: '#E81719'
        },
    },
    totalPerItem: {
        fontWeight: 'bolder',
        fontSize: '1.2em',
        margin: '0px 10px'
    }
}))

const Orderedfooditems = (props) => {

    const classes = useStyles();
    const {Orderedfooditems, removeFoodItem} = props;

    return (
        <>
            <List>
                {
                    Orderedfooditems.map((item,idx) =>(
                        <Paper key={idx}>
                            <ListItem>
                                <ListItemText 
                                primary={item.foodItemName}
                                primaryTypographyProps={{
                                    component: 'h1',
                                    style: {
                                        fontWeight: '500',
                                        fontSize: '1.2em'
                                    }
                                }}
                                secondary={
                                    <>
                                        <ButtonGroup
                                            className={classes.buttonGroup}
                                            size="small">
                                            <Button
                                                
                                            >-</Button>
                                            <Button
                                                disabled
                                            >{item.quantity}</Button>
                                            <Button
                                               
                                            >+</Button>
                                        </ButtonGroup>
                                    </>
                                }
                                secondaryTypographyProps={{
                                    component: 'div'
                                }} 
                                 
                                 />
                            <ListItemSecondaryAction>
                                <IconButton
                                    disableRipple
                                    onClick={ e => removeFoodItem(idx, item.orderDetailId)}
                                >
                                    <DeleteTwoToneIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                            </ListItem>
                        </Paper>
                    ))
                }
            </List>
        </>
    );
}

export default Orderedfooditems;
