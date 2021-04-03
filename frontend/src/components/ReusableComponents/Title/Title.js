import React from "react";
{
  /* mx-auto makes sure title stays in center in sm-dev  */
}

export default function Title({ name, title }) {
  return (
    <div className="row">
      <div className="col-10 mx-auto my-2 text-center ">
        <h1 className="text-capitalize font-weight-bold text-title">
          {name} <strong className="text-bright">{title}</strong>
        </h1>
      </div>
    </div>
  );
}
