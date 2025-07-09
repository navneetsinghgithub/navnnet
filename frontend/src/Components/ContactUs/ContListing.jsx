import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ContListing() {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const navigate = useNavigate();

    const getData = async () => {
        try {
            const res = await axios.get("http://localhost:7890/getContact");
            setData(res.data.body);
            setFilteredData(res.data.body);
            console.log(res, "contact us get successfully");
        } catch (error) {
            console.log(error, "error");
        }
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        const lowerSearch = searchTerm.toLowerCase();
        const filtered = data.filter(
            item =>
                item.name.toLowerCase().includes(lowerSearch) ||
                item.email.toLowerCase().includes(lowerSearch) ||
                item.message.toLowerCase().includes(lowerSearch)
        );
        setFilteredData(filtered);
    }, [searchTerm, data]);

    return (
        <>
            <div className="app-content content">
                <div className="content-overlay"></div>
                <div className="header-navbar-shadow"></div>
                <div className="content-wrapper container-xxl p-0">
                    <div className="content-header row"></div>
                    <div className="content-body">
                        <section className="app-user-list">
                            <div className="card mt-3">
                                <div className="d-flex justify-content-between align-items-center mt-2 px-2">
                                    <h4 className="mb-0">ContactUs Listing</h4>
                                    <div className="d-flex">
                                        <input
                                            className="form-control me-2"
                                            style={{ width: "200px" }}
                                            type="search"
                                            placeholder="Search"
                                            aria-label="Search"
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <table className="table mt-3">
                                    <thead>
                                        <tr>
                                            <th>S.No</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Message</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredData && filteredData.length > 0 ? (
                                            filteredData.map((item, index) => (
                                                <tr key={item.id}>
                                                    <td>{index + 1}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.phone}</td>
                                                    <td>{item.message}</td>
                                                    <td>
                                                        <button
                                                            className="btn btn-sm btn-primary me-1"
                                                            onClick={() =>
                                                                navigate(`/ContactView/${item.id}`)
                                                            }
                                                        >
                                                            View
                                                        </button>
                                                        <button className="btn btn-sm btn-danger">Delete</button>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="6" className="text-center">
                                                    No Data Found
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContListing;
