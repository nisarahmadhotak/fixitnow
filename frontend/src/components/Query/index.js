import React from "react";
import { useQuery } from "@apollo/react-hooks";

const Query = ({ children, query, id }) => {
  const { data, loading, error } = useQuery(query, {
    variables: { id: parseInt(id) }
  });

  if (loading) return <div className="loader">Loading...</div>;
  if (error)
    return (
      <div className="col-9 col-4">
        <p className="error text-capitalize">
          Could not fetch data from the server. Please refresh...
        </p>
      </div>
    );
  return children({ data });
};

export default Query;
