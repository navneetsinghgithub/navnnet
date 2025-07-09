import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Listing() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getCategory = async () => {
    try {
      const res = await axios.get("http://localhost:7890/getAllCategory");
      console.log(res.data.body, "Fetched Categories");
      setData(res.data.body);
    } catch (error) {
      console.log(error, "Error fetching categories");
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  const getImageUrl = (imgPath) => {
    if (!imgPath) return 'https://via.placeholder.com/40';
    return imgPath.startsWith('http') ? imgPath : `http://localhost:7890${imgPath}`;
  };

  return (
    <div className="app-content content">
      <div className="content-overlay"></div>
      <div className="header-navbar-shadow"></div>
      <div className="content-wrapper container-xxl p-0">
        <div className="content-header row"></div>
        <div className="content-body">
          <section className="app-user-list">
            <div className="card mt-3">

              {/* Header with Add and Search */}
              <div className="d-flex justify-content-between align-items-center mt-2 px-2">
                <h4 className="mb-0">Category Listing</h4>
                <div className="d-flex">

                  <input
                    className="form-control me-2"
                    style={{ width: "200px" }}
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button type="button" className="btn btn-primary">
                    Search
                  </button>

                </div>
              </div>
              <div>
                <button
                  className="btn btn-success me-2"
                  style={{ width: "100px" }}
                  onClick={() => navigate("/CategoryAdd")}
                >
                  Add
                </button>
              </div>
              {/* Table */}
              <table className="table mt-3">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data && data.length > 0 ? (
                    data.map((cate, index) => (
                      <tr key={cate.id}>
                        <td>{index + 1}</td>
                        <td>{cate.name}</td>
                        <td>
                          <img
                            src={getImageUrl(cate.image)}
                            alt="cate"
                            width={40}
                            height={40}
                            style={{ borderRadius: '50%', objectFit: 'cover' }}
                          />
                        </td>
                        <td>
                          <span className={`badge ${cate.status ? 'bg-success' : 'bg-secondary'}`}>
                            {cate.status ? 'Active' : 'Inactive'}
                          </span>
                        </td>
                        <td>
                          <button
                            className="btn btn-sm btn-primary me-1"
                            onClick={() => navigate(`/CategoryView/${cate.id}`)}
                          >
                            View
                          </button>
                          <button className="btn btn-sm btn-warning me-1"
                          onClick={() => navigate(`/CategoryEdit/${cate.id}`)}
                          >Edit</button>
                          <button className="btn btn-sm btn-danger">Delete</button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="text-center">No Data Found</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Listing;
