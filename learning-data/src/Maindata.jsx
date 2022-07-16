import React from "react";
import Propimage from "./new/image 12.svg"
import star from "./new/star 1.png"
import data from "./data"
export default function Maindata(prop) {
    let badgeText
    if (prop.openSpots===0) {
        badgeText="Sold out"
    }else if(prop.location=== "Online") {
        badgeText="Online"   
    }
 return(
    <div className="flex flex-col">
       <div className="relative"> <img src={Propimage} alt="sarah drasner" />{badgeText&&<div className="absolute top-2 left-2 bg-gray-200 px-2 py-0.5 rounded">{badgeText}</div>}</div>
        <div className="flex gap-1 mt-2 mb-1"><img src={star} alt="rating" /><div>{prop.rating}</div><span className=" text-gray-600">({props.stats.reviewCount})+USA</span></div>
        <div>{prop.title}</div>
        <div><span className="font-bold">From{prop.price}$</span>/person </div>
    </div>
 )   
}