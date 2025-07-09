import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function ContView() {
    const [data, setData] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    const getData = async () => {
        try {
            const res = await axios.get(`http://localhost:7890/getSingleContact/${id}`);
            console.log(res, "contact us view successfully");
            setData(res.data.body);
        } catch (error) {
            console.log(error, "error");
        }
    };

    useEffect(() => {
        getData();
    }, []);

    if (!data) return <div className="text-center mt-5">Loading...</div>;

    return (
        <div className="app-content content">
            <div className="content-overlay" />
            <div className="header-navbar-shadow" />
            <div className="content-wrapper container-xxl p-0">
                <div className="content-body">
                    <div className="col-md-9" style={{ width: "100%" }}>
                        <div className="card mt-2">
                            <div className="card-body">
                                <h4>ContactUs Details</h4>
                                <form className="validate-form mt-2">
                                    <div className="row">
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
                                                <label className="form-label" htmlFor="email">Email</label>
                                                <input
                                                    type="text"
                                                    value={data.email}
                                                    className="form-control"
                                                    id="email"
                                                    readOnly
                                                />
                                            </div>
                                            <div className="mb-1">
                                                <label className="form-label" htmlFor="phone">Phone</label>
                                                <input
                                                    type="text"
                                                    value={data.phone}
                                                    className="form-control"
                                                    id="phone"
                                                    readOnly
                                                />
                                            </div>
                                            <div className="mb-1">
                                                <label className="form-label" htmlFor="message">Message</label>
                                                <input
                                                    type="text"
                                                    value={data.message}
                                                    className="form-control"
                                                    id="message"
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

export default ContView;
