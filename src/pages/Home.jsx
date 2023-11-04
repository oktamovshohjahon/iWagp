import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      {/* Home headers section */}
      <div className="home-headers">
        <div>
          <a href="#" className="home-header fs-5 text-decoration-none">
            To'ldirish
          </a>

          <a href="#" className="home-header fs-5 text-decoration-none">
            Pul olish
          </a>
          <a href="#" className="home-header fs-5 text-decoration-none">
            Buyurtma
          </a>
          <a href="#" className="home-header fs-5 text-decoration-none">
            Yuklab olish
          </a>
        </div>
        <div>
          <a href="#" className="home-header fs-5 text-decoration-none">
            Taklif qilish
          </a>
          <a href="#" className="home-header fs-5 text-decoration-none">
            Guruh
          </a>
          <a
            href="#"
            className="home-header fs-5 text-center text-decoration-none"
          >
            Hizmat ko'rsatuvchi
          </a>
          <a href="#" className="home-header fs-5 text-decoration-none">
            Taqdimot
          </a>
        </div>
      </div>

      {/* Fonds section */}
      <h3 className="fonds-title title">O'zgaruvchan fondlar</h3>
      <div className="fonds">
        <div className="fond">
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
        <div className="fond">
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
        <div className="fond">
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

export default Home;
