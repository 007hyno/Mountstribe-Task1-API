# Mountstribe-Task1-API
API's for Mountstribe-Task1 to login, register and display data on site 

# Getting started:
### To install requier node packages 
> npm i
### To run the server locally 
> npm start

## Api Links:
#### Get All product list  
```http
localhost:8080/api/store
```
> [link](http://localhost:8080/api/register) `Get List of all products`


#### Get a Product data   
```http
localhost:8080/api/register
```
> [link](http://localhost:8080/api/product/:product_name) `Get a product data with name`


| Body Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Product_name` | `string` | **Required**.|
