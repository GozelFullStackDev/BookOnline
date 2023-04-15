import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";
import ChangeQuantity from "../Cart/ChangeQuantity";

const Book = ({book}) => {
    const [quantity, setQuantity]= useState(1);
    const dispatch = useDispatch()
    return (
        <div>
            <img src={`${book.img}.jpg`} alt="bookName"/>
            <h2>{book.name}</h2>
            <p>$ {book.price}</p>

<ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
            <button onClick={()=>{dispatch(addItemToCart({book, quantity}));
        }}>Add to cart</button>
        </div>
    )
}

export default Book;