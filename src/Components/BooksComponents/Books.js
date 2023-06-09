import dataBooks from "../../data/dataBooks";
import Book from "./Book";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/booksSlice";

const Books = () => {

    const selectedCategory = useSelector(getSelectedCategory);

    return ( 
        <div>
            {dataBooks
            .filter( book => {
                if (selectedCategory ==='ALL') return true;
                return selectedCategory === book.category;
            } )
            .map(book => <Book book={book}/>)}
            
            </div>
    )
}

 export default Books;
