import React from 'react';

export const Navbar = ({ filterItem, MenuApi, setMenuData, menuList }) => {
    return (
        <>
            <nav className='navbar'>
                <div className='btn-group'>
                    {menuList.map((curElem,index) => {
                        return (
                            <button key={index} className='btn-group__item' onClick={() => filterItem(curElem)}>{curElem}</button>
                        )
                    })}

                    {/* Dont Reapeat Your Self */}
                    {/* <button className='btn-group__item' onClick={() => filterItem("Breakfast")}>Breakfast</button>
                    <button className='btn-group__item' onClick={() => filterItem("Lunch")}>Lunch</button>
                    <button className='btn-group__item' onClick={() => filterItem("Evening")}>Evening</button>
                    <button className='btn-group__item' onClick={() => filterItem("Dinner")}>Dinner</button>
                    <button className='btn-group__item' onClick={() => setMenuData(MenuApi)}>All</button> */}
                </div>
            </nav>
        </>
    );
};
