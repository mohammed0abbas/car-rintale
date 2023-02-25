import React, { useState } from "react";
import Card from "../../card/Card";
import { useEffect } from "react";
import API from "../../../../API";
import Btn from "../../Btn";
import "./sectioncard.css";
import Serch from "../../prodect/Serch";

export default function SectionCard() {
  const [items, setitems] = useState([]);
  const [search, setsearch] = useState({
    brand: "",
    model: "",
  });
  useEffect(() => {
    API.get(`/Car/Get?brand=${search.brand}&model=${search.model}`)
      .then((res) => {
        const item = res.data.data;
        setitems(item);
        console.log(item);
      })
      .catch((err) => {
        console.log(err);
      });
      
  }, [search]);

  function handleModel(e) {
    const value = e.target.value;
    setsearch((srch) => {
      return {
        ...srch,
        "model" : value,
      };
    });
  }
  function handleBrand(e) {
        const value = e.target.value;
        setsearch((srch) => {
            return {
                ...srch,
               "brand": value,
            };
        });
    }

  return (
    <div>
      <section className="section-card container p-0  ">
        <Serch hndlModel={handleModel} hndlBrand={handleBrand} />
        <div
          className=""
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          <span>
            <Btn value=" More" link="/prodect" />
          </span>
          <span>
            <h3>المنتجات</h3>
          </span>
        </div>

        <div className="container justify-content-center">
          <div className="row d-flex justify-content-center">
            {items.map((index) => {
              return (
                <div
                  key={index.id}
                  className="col-xl-4  d-flex justify-content-center p-0 m-0 col-lg-4 col-sm-6 col-12 mt-4 "
                >
                  <Card data={index} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
