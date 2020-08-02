import React from "react";

interface RowsProps {
  title: string;
}

function MovieRows({ title }: RowsProps) {
  return (
    <div>
      <h2>{title}</h2>
      {/*container-> posters*/}
    </div>
  );
}

export default MovieRows;
