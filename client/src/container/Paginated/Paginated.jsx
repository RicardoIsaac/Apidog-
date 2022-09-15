import React from "react"
import "./Pagination.css"

export default function Paginated({ dogsPage, allDogs, paginated }) {
  const pages = [];
  const numberPages = Math.ceil(allDogs / dogsPage);

  for (let i = 0; i < numberPages; i++) {
    pages.push(i + 1);
  }
  return (
    <nav className="Buttonspag">

        {pages?.map((num) => (

              <button className="buttonpag" onClick={() => paginated(num)}>
                {num}
              </button>

        ))}

    </nav>
  );
}
{/*        <ul className="paged">
          {pageNumbers?.map((num) => (
           
              <button className="number" key={num}  onClick={() => dogsPerPage.paginado(num)}>
<button type="button" >{num}</button>
              </button>

          ))}
        </ul>
 */}