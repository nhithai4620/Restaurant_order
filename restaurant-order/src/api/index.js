// import axios from "axios";

// const BASE_URL = 'http://localhost:53688/api/';

// export const ENDPIONTS = {
//     CUSTOMER: 'Customer',
//     FOODITEM: 'FoodItem',
//     ORDER: 'Order'
// }

// export const createAPIEndpoint = endpoint => {

//     let url = BASE_URL + endpoint + '/';
//     return {
//         fetchAll: () => axios.get(url),
//         fetchById: id => axios.get(url + id),
//         create: newRecord => axios.post(url, newRecord),
//         update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
//         delete: id => axios.delete(url + id)
//     }
// }

export const customersdata = [
    {
        "customerID": 1,
        "customerName": "Hoàng Minh"
    },
    {
        "customerID": 2,
        "customerName": "Hoàng Thuận"
    },
    {
        "customerID": 3,
        "customerName": "Quốc Trọng"
    },
    {
        "customerID": 4,
        "customerName": "Thành Long"
    },
    {
        "customerID": 5,
        "customerName": "Nhĩ Thái"
    },
    {
        "customerID": 6,
        "customerName": "Quốc Bảo"
    },
    {
        "customerID": 7,
        "customerName": "Lan Vy"
    },
    

]

export const fooditemsdata = [
    {
        "foodItemId": 1,
        "foodItemName": "Chickend Tenders",
        "price": 3.5
    },
    {
        "foodItemId": 2,
        "foodItemName": "Chickend Tenders w/ fries",
        "price": 4.99
    },
    {
        "foodItemId": 3,
        "foodItemName": "Chickend Tenders w/ Onion",
        "price": 5.99
    },
    {
        "foodItemId": 4,
        "foodItemName": "Grilled Chesses Sandwich",
        "price": 2.5
    },
    {
        "foodItemId": 5,
        "foodItemName": "Grilled Chesses Sandwich w/ fries",
        "price": 3.99
    },
    {
        "foodItemId": 6,
        "foodItemName": "Soup",
        "price": 2.99
    }, 
    {
        "foodItemId": 7,
        "foodItemName": "Hambuger",
        "price": 6
    }, 
    {
        "foodItemId": 8,
        "foodItemName": "Spaghetti",
        "price": 10.99
    }, 
]