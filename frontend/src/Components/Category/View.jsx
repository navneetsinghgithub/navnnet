import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function View() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({});

    const getCategoryView = async () => {
        try {
            const res = await axios.get(`http://localhost:7890/getSingleCategory/${id}`);
            console.log(res.data, 'Fetched category');
            setData(res.data.body);
        } catch (error) {
            console.log(error, "error");
        }
    };

    useEffect(() => {
        getCategoryView();
    }, []);

    return (
        <div className="app-content content">
            <div className="content-overlay" />
            <div className="header-navbar-shadow" />
            <div className="content-wrapper container-xxl p-0">
                <div className="content-body">
                    <div className="col-md-9" style={{ width: "100%" }}>
                        <div className="card mt-2">
                            <div className="card-body">
                                <h4>Category Details</h4>
                                <form className="validate-form mt-2">
                                    <div className="row">
                                        <div className="mb-1">
                                            <label className="form-label">Image</label><br />
                                            <img
                                                src={data.image?.startsWith('http') ? data.image : `http://localhost:7890${data.image}`}
                                                alt="user"
                                                width={80}
                                                height={80}
                                                style={{ borderRadius: '10px', objectFit: 'cover' }}
                                            />
                                        </div>

                                        <div className="col-12 col-sm-6">
                                            <div className="mb-1">
                                                <label className="form-label" htmlFor="name">Name</label>
                                                <input
                                                    type="text"
                                                    value={data.name}
                                                    className="form-control"
                                                    id="name"
                                                    readOnly
                                                />
                                            </div>


                                            <div className="mb-1">
                                                <label className="form-label">Status</label>
                                                <input
                                                    type="text"
                                                    value={data.status ? 'Active' : 'Inactive'}
                                                    className="form-control"
                                                    readOnly
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 mt-2">
                                            <button
                                                type="button"
                                                className="btn btn-primary"
                                                onClick={() => navigate(-1)}
                                            >
                                                Back
                                            </button>
                                        </div>
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

export default View;
