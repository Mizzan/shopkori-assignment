import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsFillBagFill } from "react-icons/bs";

const Nav = () => {
    const { totalQuantities } = useSelector(state => state.CartReducer)
    return (
        <div className="container-fluid shadow">
            <div className="d-flex align-items-center justify-content-between py-3 px-5">
                <div>
                    <Link to="/" style={{ textDecoration: 'none', color: 'tomato' }}><h3>SHOPKORI</h3></Link>
                </div>
                <div>
                    <Link to="/cart">
                        <div className="basket">
                            <BsFillBagFill className="cart-icon" /><span>{totalQuantities}</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Nav;