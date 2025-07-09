import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Listing() {
  const [data, setData] = useState();
  const navigate = useNavigate()

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const res = await axios.get('http://localhost:7890/getAllUser');
      setData(res.data.body);
      console.log(res.data.body, "Fetched Users");
    } catch (err) {
      console.error('Error fetching users:', err);
    }
  };

  // Helper to handle image URLs
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
            <div className="card mt-3 p-2">
              <div className="d-flex justify-content-end align-items-center gap-2 mt-2">
                <input
                  className="form-control w-25"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button type="button" className="btn btn-primary">
                  Search
                </button>
              </div>

              <table className="table mt-3">
                <thead className="table-light">
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Image</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data && data.length > 0 ? (
                    data.map((user, index) => (
                      <tr key={index}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>
                          <img
                            src={getImageUrl(user.image)}
                            alt="User"
                            width={40}
                            height={40}
                            style={{ borderRadius: '50%', objectFit: 'cover' }}
                          />
                        </td>
                        <td>
                          <span className={`badge ${user.status ? 'bg-success' : 'bg-secondary'}`}>
                            {user.status ? 'Active' : 'Inactive'}
                          </span>
                        </td>
                        <td>
                          <button
                            className="btn btn-sm btn-primary me-1"
                            onClick={() =>
                              navigate(`/View/${user.id}`)
                            }
                          >
                            View
                          </button>
                          {/* <button className="btn btn-sm btn-warning me-1">Edit</button> */}
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
