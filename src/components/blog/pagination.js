
import React, { useState, useEffect } from "react";
const Pagination = ({ posts, blogsPerPage, setCurrentPage, currentPage }) => {
    const [currentPagePagination, setCurrentPagePagination] = useState(1)
    const [pageIndex , setPageIndex ] = useState([])
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(posts / blogsPerPage); i++) {
        pageNumber.push(i)
    }
    useEffect(() => {
        setCurrentPage(1)
        setCurrentPagePagination(1)
        if (pageNumber.length <= 4) setPageIndex(pageNumber)
        else if (pageNumber.length > 4) setPageIndex([1,2,3,4])
    }, [posts])


    const goToNext = () => {
        const page = currentPagePagination + 1
        if (page <= Math.ceil(posts / blogsPerPage)) {
            setCurrentPagePagination(page)
            setCurrentPage(page)
        }
        if (pageNumber.length > 4 && page > 4){
          setPageIndex( pageNumber.slice(page - 4, page))
        }
    }
    const goToBack = () => {
        let page = currentPagePagination;
        if (pageNumber.length > 4 & page >= 4) {
            setPageIndex(pageNumber.slice(page - 4, page))
        }
        if (page > 1) {
            page = page - 1;
            setCurrentPage(page)
            setCurrentPagePagination(page)
        }
    }
    return (
        <>
            <nav aria-label="Page navigation example" className="pb-3">
                <ul className="pagination justify-content-center pt-md-4 pt-2">
                    <li className="page-item">
                        <a className="page-link" href="#top" disabled={currentPage === 1} onClick={goToBack}>
                            <i className="bx bx-chevron-left mx-n1"></i>
                        </a>
                    </li>
                    {
                        pageIndex.map((elem, index) => {
                            let activeClass = (elem === currentPage) ? 'active' : ''
                            return <li class={`page-item ${activeClass}`}>
                                <a href="#top" data-scroll className="page-link" onClick={() => {
                                    setCurrentPage(elem)
                                    setCurrentPagePagination(elem)
                                }}>{elem}</a>
                            </li>
                        })
                    }
                    <li className="page-item">
                        <a className="page-link" href="#top" disabled={Math.ceil(posts / blogsPerPage) == currentPage} onClick={goToNext}>
                            <i className="bx bx-chevron-right mx-n1"></i>
                        </a>
                    </li>
                </ul>
            </nav>


            {/* <div className="mt-5 mb-5">
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item" onClick={goToBack}>
                            <a href="#top" className="text-decoration-none" data-scroll>
                                <button className="page-link fw-lg" disabled={currentPage === 1} >
                                    Previous</button></a>
                        </li>
                        <li className="page-item active"> <span className="page-link fw-lg">{currentPagePagination}/{pageNumber.length}</span> </li>
                        <li className="page-item" onClick={goToNext}>
                            <a href="#top" className="text-decoration-none" data-scroll><button className="page-link fw-lg" disabled={Math.ceil(posts / blogsPerPage) == currentPage} >Next</button></a>
                        </li>
                    </ul>
                </nav>
            </div > */}
        </>
    )
}
export default Pagination