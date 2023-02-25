import React, { useEffect } from "react";
import { brands, models, prices } from "../../../fakejson";
import API from "../../../API";

const Serch = (props) => {
  const [brand, setbrand] = React.useState([]);
  const [model, setmodel] = React.useState([]);
  useEffect(() => {
    API.get(`Brand/Get?page=1&PageSize=9999`)
      .then((res) => {
        const item = res.data.data.brands;
        setbrand(item);
        console.log(item);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  function handleBrand(e) {
    const value = e.target.value;
    props.hndlModel({ target: { value: "" }});
    props.hndlBrand(e);
    API.get(`Model/getModels?brandId=${value}&page=1&PageSize=9999`)
      .then((res) => {
        const item = res.data.data.models;
        setmodel(item);
        console.log(item);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="row justify-content-center">
      <div className=" serch-div row" dir="ltr">
        <span className="col-2  m-3 p-0">
          <select
            class="form-select "
            aria-label="Default select example"
            onChange={handleBrand}
          >
            <option value="" selected>All brands</option>
            {brand.map((index) => (
              <option key={index.id} value={index.id}>
                {index.name}
              </option>
            ))}
          </select>
        </span>
        <span className="col-2  m-3 p-0">
          <select
            class="form-select "
            aria-label="Default select example"
            
            onChange={props.hndlModel}
          >
            <option value= "" selected>All models</option>
            {model.map((index) => (
              <option key={index.id} value={index.id}>
                {index.name}
              </option>
            ))}
          </select>
        </span>
        <span className="col-2 m-3 p-0">
          <select
            class="form-select"
            placeholder="price"
            aria-label="Default select example"
          >
            <option hidden selected>
              All price
            </option>
            <option value="1">0$ - 50$</option>
            <option value="2">50$ - 100$</option>
            <option value="3">100$ - 200$</option>
          </select>
        </span>
      </div>
    </div>
  );
};

export default Serch;
