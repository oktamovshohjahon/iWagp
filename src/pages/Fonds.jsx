import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Fonds() {
  const [all, setAll] = useState(false);
  const [selling, setSelling] = useState(false);
  const [selled, setSelled] = useState(false);

  return (
    <div className="container fonds-section">
      <ul className="fonds-filters">
        <li
          className="fond-filter"
          onClick={() => {
            setAll(false);
            setSelling(false);
            setSelled(false);
          }}
        >
          Hammasi
        </li>
        <li
          className="fond-filter"
          onClick={() => {
            setAll(true);
            setSelling(false);
            setSelled(true);
          }}
        >
          Sotishda
        </li>
        <li
          className="fond-filter"
          onClick={() => {
            setAll(true);
            setSelling(true);
            setSelled(false);
          }}
        >
          Sotib olingan
        </li>
      </ul>
      <div className="fonds">
        <div className={all ? "d-none" : "fond"}>
          <div
            className="card mb-3"
            style={{ width: "98%", backgroundColor: "#EAEFF7" }}
          >
            <div className="card-body">
              <h5 className="card-title mb-3">
                Innovotsiyon Vzlet Fondi 60/90
              </h5>
              <h6 className="card-subtitle mb-3 text-body-secondary fs-12">
                Foydalanuvchini taklif qilmasdan xarid qilish mumkin
              </h6>
              <p className="card-text mb-1">investitsiyasi miqdori: 60$</p>
              <p className="card-text mb-1">investitsiyasi davri: 90kun</p>
              <p className="card-text ">investitsiyasi daromadi: 0.9$</p>
              <button className="btn btn-success text-decoration-none">
                <NavLink to="#" className="text-decoration-none text-white">
                  Investitsiya
                </NavLink>
              </button>
            </div>
          </div>
        </div>
        <div className={all ? "d-none" : "fond"}>
          <div
            className="card mb-3"
            style={{ width: "98%", backgroundColor: "#EAEFF7" }}
          >
            <div className="card-body">
              <h5 className="card-title mb-3">
                Innovotsiyon Vzlet Fondi 60/90
              </h5>
              <h6 className="card-subtitle mb-3 text-body-secondary fs-12">
                Foydalanuvchini taklif qilmasdan xarid qilish mumkin
              </h6>
              <p className="card-text mb-1">investitsiyasi miqdori: 60$</p>
              <p className="card-text mb-1">investitsiyasi davri: 90kun</p>
              <p className="card-text ">investitsiyasi daromadi: 0.9$</p>
              <button className="btn btn-success text-decoration-none">
                <NavLink to="#" className="text-decoration-none text-white">
                  Investitsiya
                </NavLink>
              </button>
            </div>
          </div>
        </div>
        <div className={all ? "d-none" : "fond"}>
          <div
            className="card mb-3"
            style={{ width: "98%", backgroundColor: "#EAEFF7" }}
          >
            <div className="card-body">
              <h5 className="card-title mb-3">
                Innovotsiyon Vzlet Fondi 60/90
              </h5>
              <h6 className="card-subtitle mb-3 text-body-secondary fs-12">
                Foydalanuvchini taklif qilmasdan xarid qilish mumkin
              </h6>
              <p className="card-text mb-1">investitsiyasi miqdori: 60$</p>
              <p className="card-text mb-1">investitsiyasi davri: 90kun</p>
              <p className="card-text ">investitsiyasi daromadi: 0.9$</p>
              <button className="btn btn-success text-decoration-none">
                <NavLink to="#" className="text-decoration-none text-white">
                  Investitsiya
                </NavLink>
              </button>
            </div>
          </div>
        </div>
        <div className={selling ? "d-none" : "fond"}>
          <div
            className="card mb-3"
            style={{ width: "98%", backgroundColor: "#EAEFF7" }}
          >
            <div className="card-body">
              <h5 className="card-title mb-3">
                Innovotsiyon Vzlet Fondi 60/90
              </h5>
              <h6 className="card-subtitle mb-3 text-body-secondary fs-12">
                Foydalanuvchini taklif qilmasdan xarid qilish mumkin
              </h6>
              <p className="card-text mb-1">investitsiyasi miqdori: 60$</p>
              <p className="card-text mb-1">investitsiyasi davri: 90kun</p>
              <p className="card-text ">investitsiyasi daromadi: 0.9$</p>
              <button className="btn btn-success text-decoration-none">
                <NavLink to="#" className="text-decoration-none text-white">
                  Investitsiya
                </NavLink>
              </button>
            </div>
          </div>
        </div>
        <div className={selling ? "d-none" : "fond"}>
          <div
            className="card mb-3"
            style={{ width: "98%", backgroundColor: "#EAEFF7" }}
          >
            <div className="card-body">
              <h5 className="card-title mb-3">
                Innovotsiyon Vzlet Fondi 60/90
              </h5>
              <h6 className="card-subtitle mb-3 text-body-secondary fs-12">
                Foydalanuvchini taklif qilmasdan xarid qilish mumkin
              </h6>
              <p className="card-text mb-1">investitsiyasi miqdori: 60$</p>
              <p className="card-text mb-1">investitsiyasi davri: 90kun</p>
              <p className="card-text ">investitsiyasi daromadi: 0.9$</p>
              <button className="btn btn-success text-decoration-none">
                <NavLink to="#" className="text-decoration-none text-white">
                  Investitsiya
                </NavLink>
              </button>
            </div>
          </div>
        </div>
        <div className={selling ? "d-none" : "fond"}>
          <div
            className="card mb-3"
            style={{ width: "98%", backgroundColor: "#EAEFF7" }}
          >
            <div className="card-body">
              <h5 className="card-title mb-3">
                Innovotsiyon Vzlet Fondi 60/90
              </h5>
              <h6 className="card-subtitle mb-3 text-body-secondary fs-12">
                Foydalanuvchini taklif qilmasdan xarid qilish mumkin
              </h6>
              <p className="card-text mb-1">investitsiyasi miqdori: 60$</p>
              <p className="card-text mb-1">investitsiyasi davri: 90kun</p>
              <p className="card-text ">investitsiyasi daromadi: 0.9$</p>
              <button className="btn btn-success text-decoration-none">
                <NavLink to="#" className="text-decoration-none text-white">
                  Investitsiya
                </NavLink>
              </button>
            </div>
          </div>
        </div>
        <div className={selled ? "d-none" : "fond"}>
          <div
            className="card mb-3"
            style={{ width: "98%", backgroundColor: "#EAEFF7" }}
          >
            <div className="card-body">
              <h5 className="card-title mb-3">
                Innovotsiyon Vzlet Fondi 60/90
              </h5>
              <h6 className="card-subtitle mb-3 text-body-secondary fs-12">
                Foydalanuvchini taklif qilmasdan xarid qilish mumkin
              </h6>
              <p className="card-text mb-1">investitsiyasi miqdori: 60$</p>
              <p className="card-text mb-1">investitsiyasi davri: 90kun</p>
              <p className="card-text ">investitsiyasi daromadi: 0.9$</p>
              <button className="btn btn-success text-decoration-none">
                <NavLink to="#" className="text-decoration-none text-white">
                  Investitsiya
                </NavLink>
              </button>
            </div>
          </div>
        </div>
        <div className={selled ? "d-none" : "fond"}>
          <div
            className="card mb-3"
            style={{ width: "98%", backgroundColor: "#EAEFF7" }}
          >
            <div className="card-body">
              <h5 className="card-title mb-3">
                Innovotsiyon Vzlet Fondi 60/90
              </h5>
              <h6 className="card-subtitle mb-3 text-body-secondary fs-12">
                Foydalanuvchini taklif qilmasdan xarid qilish mumkin
              </h6>
              <p className="card-text mb-1">investitsiyasi miqdori: 60$</p>
              <p className="card-text mb-1">investitsiyasi davri: 90kun</p>
              <p className="card-text ">investitsiyasi daromadi: 0.9$</p>
              <button className="btn btn-success text-decoration-none">
                <NavLink to="#" className="text-decoration-none text-white">
                  Investitsiya
                </NavLink>
              </button>
            </div>
          </div>
        </div>
        <div className={selled ? "d-none" : "fond"}>
          <div
            className="card mb-3"
            style={{ width: "98%", backgroundColor: "#EAEFF7" }}
          >
            <div className="card-body">
              <h5 className="card-title mb-3">
                Innovotsiyon Vzlet Fondi 60/90
              </h5>
              <h6 className="card-subtitle mb-3 text-body-secondary fs-12">
                Foydalanuvchini taklif qilmasdan xarid qilish mumkin
              </h6>
              <p className="card-text mb-1">investitsiyasi miqdori: 60$</p>
              <p className="card-text mb-1">investitsiyasi davri: 90kun</p>
              <p className="card-text ">investitsiyasi daromadi: 0.9$</p>
              <button className="btn btn-success text-decoration-none">
                <NavLink to="#" className="text-decoration-none text-white">
                  Investitsiya
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fonds;
