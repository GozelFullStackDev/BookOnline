import Filter from "./Filter";

const AllCategories = () => {
    return(
        <div>
            <h1>What kind of genre do you like to choose?</h1>
            {['MYSTERY', 'NOVEL', 'DETECTIVE', 'ALL']
            .map(category => <Filter category={category}/> )
            
            }
            
        </div>
    )
}

export default AllCategories;
