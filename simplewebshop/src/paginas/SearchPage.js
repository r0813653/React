import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FilterBar from "../components/filterBar";


const SearchPage = () => {
    return <div className="container mt-5">
        <div className="row">
            <div className="col-4">
                <FilterBar/>
            </div>
            <div className="col-8">
            </div>
        </div>
    </div>
}

export default SearchPage;
