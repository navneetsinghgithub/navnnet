import React from 'react'

function TermCondition() {
  return (
    <>
    <div className="app-content content">
      <div className="content-wrapper container-xxl p-0">
        <div className="content-body">
          <section className="section">
            <div
              className="section-header rounded py-4 shadow"
              style={{ marginTop: "-48px", padding: "17px" }}
            >
              <h1 id="animated_box">Term & Condition</h1>
            </div>

            <div className="section-body">
              <form>
                <div className="row">
                  <div className="col-12">
                    <div className="card shadow">
                      <div className="card-body">
                        <div className="form-group row mb-4">
                          <div className="col-11">
                            <label
                              className="col-form-label text-dark font-weight-bold py-3"
                              style={{ float: "left" }}
                            >
                              Title
                            </label>
                            <input
                              id="title"
                              type="text"
                              className="form-control"
                              name="title"
                              value=""
                            />
                            <p className="m-0 error_text" style={{ color: "red" }}></p>
                          </div>
                        </div>

                        {/* Add your content or component inside this div if needed */}
                        <div className="App"></div>

                        <p className="m-0 error_text" style={{ color: "red" }}></p>

                        <div className="form-group row mb-4 py-4">
                          <div className="col-sm-12 col-md-7">
                            <button
                              className="btn btn-primary float-left"
                              type="submit"
                            >
                              Update
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  </>
  )
}

export default TermCondition