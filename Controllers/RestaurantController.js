
const express = require("express");
const resturatntlist =require("../Models/Retaurantlist.json");

module.exports.getrestaurantlist = (request, response)=>{

    const senddata = {
        stauts:true,
        resturatntlist,
    };
    response.status(200).send(resturatntlist);

}

module.exports.getrestaurantdetails = (request,response)=>{
    const data = request.params;
    let result= resturatntlist.filter((restaurant)=>{
        return Number(restaurant.id) === Number(data.id);

    });

    const senddata = {
        status:true,
        result,
    };
    response.status(200).send(senddata);
}