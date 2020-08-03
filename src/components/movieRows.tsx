import React from "react";

interface RowsProps {
  title: string;
  fetchUrl: string;
}

function MovieRows({ title, fetchUrl }: RowsProps) {
  return (
    <div>
      <h2>{title}</h2>
      {/*container-> posters*/}
    </div>
  );
}

export default MovieRows;
