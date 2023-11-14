import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CallApi } from '../utils/CallApi';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState(null);

  const getSearchResults = ()=> {
    const searchTerm = searchParams.get("searchTerm")
    const category = searchParams.get("category")
    CallApi(`data/search.json`)
    .then(()=> {
      const categoryResults = SearchResults(category);
      if (searchTerm) {
        const results = categoryResults.filter(product => product.title.toLowerCase()
        .includes(searchTerm.toLowerCase()) );
        setProducts(results)
      } else {
        setProducts(categoryResults);
      }
    })
  };

  useEffect(()=> {
    getSearchResults()
  },[searchParams])

  return (
    <div>SearchResults</div>
  )
}

export default SearchResults