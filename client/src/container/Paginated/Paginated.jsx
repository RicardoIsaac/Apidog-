import React from "react"

export default function Paginated({dogsPerPage,alldogs,paginado}) {
    const pageNumbers=[]
    for(let i=1; i<=Math.ceil(alldogs/dogsPerPage); i++){
      pageNumbers.push(i) 
    }
    return(

        <ul className="paged">
          {pageNumbers&& pageNumbers.map((num) => (
           
              <li className="number" key={num}  onClick={() => paginado(num)}>
<button type="button" >{num}</button>
              </li>

          ))}
        </ul>

    )

}
