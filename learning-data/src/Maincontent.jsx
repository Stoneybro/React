import React from "react";
import images from "./new/group 77.svg"
export default function Maincontent(prop) {
    console.log();
    return(
        <div className="flex flex-col mt-8 px-8 gap-4">
            <img src={images} alt="airbnb images"className="w-1/2 self-center" />
            <h1 className="text-5xl font-bold mt-16">Online experiences</h1>
            <p className="text-lg ">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
        </div>
    )
}