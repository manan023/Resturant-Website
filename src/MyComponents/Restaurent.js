import React, { useState } from 'react';
import "./style.css";
import MenuApi from "./MenuApi";
import { MenuCard } from "./MenuCard";
import { Navbar } from "./Navbar";

const uniqueList = [
    ...new Set(
        MenuApi.map((CurElem) => {
            return CurElem.category;
        })
    ),
    "All",
]
console.log(uniqueList);

export const Restaurent = () => {

    const [menuData, setMenuData] = useState(MenuApi);
    const [menuList, setmenuList] = useState(uniqueList);
    // console.log(menuData);
    const filterItem = (category) => {
        if (category === "All") {
            setMenuData(MenuApi);
            return;
        } else {
            const updatedList = MenuApi.filter((curElem) => {
                return curElem.category === category;
            })
            setMenuData(updatedList);
        }
    }

    return (
        <>
            <Navbar filterItem={filterItem} MenuApi={MenuApi} setMenuData={setMenuData} menuList={menuList} />
            <MenuCard menuData={menuData} />
        </>
    );
};

