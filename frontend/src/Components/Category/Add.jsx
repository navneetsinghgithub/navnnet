import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Add() {
  const Navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const sendData = new FormData();
      sendData.append('name', formData.name);
      sendData.append('image', formData.image);

      const res = await axios.post('http://localhost:7890/createCategory', sendData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(res.data, 'Category created successfully');

      setFormData({ name: '', image: null });
      Navigate("/CategoryListing")
    } catch (error) {
      console.log(error, 'Error creating category');
    }
  };

  return (
    <div className="app-content content">
      <div className="content-overlay"></div>
      <div className="header-navbar-shadow"></div>
      <div className="content-wrapper container-xxl p-0">
        <div className="content-header row">
          <div className="content-header-left">
            <div className="row breadcrumbs-top">
              <section id="basic-horizontal-layouts">
                <div className="row">
                  <div className="col-md-5 col-10 w-50">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Add Category Form</h4>
                      </div>
                      <div className="card-body">
                        <form onSubmit={handleSubmit}>
                          <div className="row">
                            <div className="col-12">
                              <div className="mb-1 row">
                                <div className="col-sm-3">
                                  <label className="col-form-label" htmlFor="name">
                                    Name
                                  </label>
                                </div>
                                <div className="col-sm-9">
                                  <input
                                    type="text"
                                    id="name"
                                    className="form-control"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="mb-1 row">
                                <div className="col-sm-3">
                                  <label htmlFor="image" className="form-label">
                                    Image
                                  </label>
                                </div>
                                <div className="col-sm-9">
                                  <input
                                    type="file"
                                    id="image"
                                    className="form-control"
                                    name="image"
                                    onChange={handleChange}
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-9 offset-sm-3">
                              <button type="submit" className="btn btn-primary me-1">
                                Submit
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add;
