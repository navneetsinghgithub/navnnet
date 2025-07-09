import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function Edit() {
  const [data, setData] = useState({ name: '', image: '' });
  const { id } = useParams();
  const Navigate = useNavigate();


  const getData = async () => {
    try {
      const res = await axios.get(`http://localhost:7890/getSingleCategory/${id}`);
      console.log(res.data, 'Fetched category');
      setData(res.data.body);
    } catch (error) {
      console.log(error, 'Error fetching category');
    }
  };

  useEffect(() => {
    getData();
  }, []);


  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:7890/updateCategory/${id}`, data);
      console.log(res.data, 'Category updated');
      alert('Category updated successfully');
      Navigate("/CategoryListing")
    } catch (error) {
      console.log(error, 'Error updating category');
      alert('Update failed');
    }
  };

  return (
    <div className="app-content content">
      <div className="content-overlay" />
      <div className="header-navbar-shadow" />
      <div className="content-wrapper container-xxl p-0">
        <div className="content-header row" />
        <div className="content-body">
          <div className="col-md-12" style={{ width: '100%' }}>
            <div className="card">
              <div className="card-body">
                <form className="mt-2" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="mb-2">
                      <label className="form-label">Image</label>
                      <br />
                      <img
                        src={
                          data.image
                            ? data.image.startsWith('http')
                              ? data.image
                              : `http://localhost:7890${data.image}`
                            : 'https://via.placeholder.com/80'
                        }
                        alt="category"
                        width={80}
                        height={80}
                        style={{ borderRadius: '10px', objectFit: 'cover' }}
                      />
                    </div>

                    <div className="col-12 col-sm-6">
                      <div className="mb-1 row">
                        <label className="form-label col-sm-3" htmlFor="name">
                          Name
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={data.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 mt-2">
                    <button type="submit" className="btn btn-primary">
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;
