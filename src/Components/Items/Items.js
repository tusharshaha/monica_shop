import React, { useEffect, useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import ReactStars from 'react-rating-stars-component';
import './Items.css';

const Items = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [activeBtn, setActiveBtn] = useState('Ice Creams')
    const btns = ["Ice Creams", "Snacks", "Coffee", "Sweet Cakes"]
    // useEffect for fetching items
    useEffect(() => {
        setLoading(true)
        fetch('/items.json')
            .then(res => res.json())
            .then(data => setItems(data))
            .finally(() => setLoading(false))
    }, [activeBtn])
    const rating = {
        size: 16,
        count: 1,
        color: "#C4C4C4",
        activeColor: "#FA5D5D",
        value: 0,
        emptyIcon: <AiOutlineHeart />,
        filledIcon: <AiFillHeart />,
        onChange: (newValue) => {
            console.log(`Example 2: new value is ${newValue}`);
        }
    };
    return (
        <div className='items_container'>
            <div className="cat_btns">
                {
                    btns.map((btn, i) => <button
                        key={i}
                        className={activeBtn === btn ? "active_btn" : ""}
                        onClick={() => setActiveBtn(btn)}
                    >{btn}</button>)
                }
            </div>
            {loading && <div className="loader"></div>}
            <div className='items'>
                {
                    items.map((item, i) => <div key={i} className='item'>
                        <div className="item_sec_1">
                            <img src={item.img} alt="" />
                            <div>
                                <p style={{ fontWeight: 700, margin: "0 0 4px 0" }}>{item.name}</p>
                                <div>
                                    <span style={{ color: "#747474", marginRight: "6px" }}>
                                        <del>&#36; {item.prevPrice}</del>
                                    </span>
                                    <span style={{ color: "#54A5DA", fontWeight: 700 }}>&#36; {item.curPrice}</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <ReactStars {...rating} />
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Items;