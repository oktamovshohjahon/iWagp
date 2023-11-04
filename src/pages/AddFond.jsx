import React from "react";

function AddFond() {
  return (
    <div className="container">
      <div className="addfond-section">
        <h1 className="text-center">Fond qo'shing</h1>
        <form action="">
          <div className="addfond-main-datas">
            <div className="input-addfond">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Sarlavhani kiriting</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword">
                  Investitsiya miqdorini kiriting ($)
                </label>
              </div>
            </div>
            <div className="input-addfond input-addfond2">
              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword">
                  Investitsiya davrini kiriting (kun)
                </label>
              </div>
              <div className="form-floating">
                <input
                  type="number"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword">
                  Kunlik daromadni kiriting ($)
                </label>
              </div>
            </div>
          </div>
          <div className="submit-buton">
            <button type="button" className="btn btn-success">
              O'zgartirish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddFond;
