import React, { useEffect, useState} from "react";
import ReactPaginate from "react-paginate";
import "../styles/StudentPortal.css" ;
import { Helmet } from "react-helmet";
const User =() => {

    <Helmet>
        <title> Our Students </title>
      </Helmet>
const [users, setUsers] = useState([]);
const [pageNumber, setPageNumber] = useState(0);
const [loading, setLoading] = useState(false)

 const usersPerPage = 3
 const pagesVisited = pageNumber * usersPerPage

    const pageCount = Math.ceil(users.length / usersPerPage);

    const changePage =({selected}) => {
        setPageNumber(selected);
    };
    useEffect(() =>{
        fetch("https://randomuser.me/api/?results=50").then(
            (response) => response.json()).then((result) =>
            setUsers(result.results),
            setLoading(true)
        );
            }, []);

 return (
 <div className ="App">
    {loading ? users.slice(pagesVisited, pagesVisited + usersPerPage)
 .map((user) => {
    return (
        
        <div className="student">
            <h3>{user.name.first}</h3>
            <h3>{user.name.last}</h3>
            <h3>{user.email}</h3>
    </div>
     );
     }) : <h1>loading...</h1>
}
    
<ReactPaginate
previousLabel={"Previous"}
nextLabel={"Next"}
pageCount={pageCount} 
onPageChange={changePage}
containerClassName={"paginationBttns"}
previousLinkClassName={"previousBttn"}
nextLinkClassName={"nextBttn"}
disabledClassName={"paginationDisabled"}
activeClassName={"paginationActive"}
/>
</div>
 );
};
export default User;