import React, { useState } from "react";
import Card from "../../card/Card";
import { useEffect } from "react";
import API from "../../../../API";
import Btn from "../../Btn";
import "./sectioncard.css";
import Serch from "../../prodect/Serch";
import Companycard from "../companycard/Companycard";

export default function SectionCard() {
  const [items, setitems] = useState([]);
  const [search, setsearch] = useState({
    brand: "",
    model: "",
  });
  useEffect(() => {
    API.get(`/Company/getCompanies`)
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
       
        <div
          className=""
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            paddingLeft: "20px",
            paddingRight: "20px",
            marginTop: "20px",
          }}
        >
          
          <span className="">
            <h3>Company</h3>
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
                  
                 <Companycard  name={index.name} img={index.image} address={index.address} id={index.id}/>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
