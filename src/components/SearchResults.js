import React from 'react';
import { Link } from 'react-router-dom';
import './SearchResults.css';

function SearchResults({ results }) {
  return (
    <div className="search-results">
      {results.map((result) => (
        <Link key={result.id} to={`/property/${result.id}`} className="result-card">
          <img src={result.image} alt={result.title} />
          <div className="result-details">
            <h3>{result.title}</h3>
            <p>{result.location}</p>
            <p>{result.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default SearchResults;
