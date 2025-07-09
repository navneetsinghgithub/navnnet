import React from 'react';

function ChangePassword() {
  return (
    <>
      <div className="app-content content">
        <div className="content-wrapper container-xxl p-0">
          <div className="content-body">
            <section className="app-user-list">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <div className="card mt-5">
                      <div className="card-body">
                        <h2 className="card-title text-center">Change Password</h2>
                        <div className="section-body">
                          <div className="card mb-0 py-4 bg-transparent shadow-none">
                            <form action="" method="">
                              <div className="container">
                                <div className="row">
                                  <div className="col-lg-8">
                                    <div className="about-text go-to shadow p-3 rounded h-100 text-left card">
                                      <h6 className="theme-color lead"></h6>
                                      <div className="about-list">
                                        <div className="media pro_file_Set border-0">
                                          <label htmlFor="oldPassword" style={{ color: 'black' }}>
                                            Current Password:
                                          </label>
                                          <input
                                            id="oldPassword"
                                            type="password"
                                            className="form-control pwstrength"
                                            name="oldPassword"
                                          />
                                        </div>
                                        <div className="media pro_file_Set border-0">
                                          <label htmlFor="newPassword" style={{ color: 'black' }}>
                                            New Password:
                                          </label>
                                          <input
                                            id="newPassword"
                                            type="password"
                                            className="form-control pwstrength"
                                            name="newPassword"
                                          />
                                        </div>
                                        <div className="media pro_file_Set border-0">
                                          <label htmlFor="confirmPassword" style={{ color: 'black' }}>
                                            Confirm Password:
                                          </label>
                                          <input
                                            id="confirmPassword"
                                            type="password"
                                            className="form-control"
                                            name="confirmPassword"
                                          />
                                        </div>
                                        <button className="btn btn-outline-primary mx-auto" type="submit">
                                          Save
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>

  );
}

export default ChangePassword;
