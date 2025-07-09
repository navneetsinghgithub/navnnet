import React from 'react'
import { Route, Routes } from "react-router-dom"
import Layout from "./Components/Common/Layout"
import Dashboard from "./Components/Common/Dashboard"
import Login from "./Components/Admin/Login"
import EditProfile from "./Components/Admin/EditProfile"
import ViewProfile from "./Components/Admin/ViewProfile"
import ChangePassword from "./Components/Admin/ChangePassword"
import Listing from "./Components/Users/Listing"
import View from "./Components/Users/View"
import TermCondition from "./Components/Cms/TermCondition"
import PrivacyPolicy from "./Components/Cms/PrivacyPolicy"
import AboutUs from './Components/Cms/AboutUs'
import CategoryAdd from './Components/Category/Add'
import CategoryEdit from "./Components/Category/Edit"
import CategoryListing from "./Components/Category/Listing"
import CategoryView from "./Components/Category/View"
import SubCategoryAdd from "./Components/SubCategry/SubCateAdd"
import SubCategoryEdit from "./Components/SubCategry/SubCateEdit"
import SubCategoryListing from "./Components/SubCategry/SubCateListing"
import SubCategoryView from "./Components/SubCategry/SubCateView"
import ContactListing from "./Components/ContactUs/ContListing"
import ContactView from "./Components/ContactUs/ContView"

function App() {

  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="/Dashboard" element={<Dashboard />} />

          {/* //////////////////////ADMIN///////////////// */}
          <Route path="/EditProfile" element={<EditProfile />} />
          <Route path="/ViewProfile" element={<ViewProfile />} />
          <Route path="/ChangePassword" element={<ChangePassword />} />

          {/* ////////////////////USERS///////////// */}
          <Route path="/Listing" element={<Listing />} />
          <Route path="/View/:id" element={<View />} />

          {/* ////////////////////CMS///////////// */}
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/TermCondition" element={<TermCondition />} />

          {/* //////////////////// CATEGORY ///////////// */}
          <Route path="/CategoryAdd" element={<CategoryAdd />} />
          <Route path="/CategoryEdit/:id" element={<CategoryEdit />} />
          <Route path="/CategoryListing" element={<CategoryListing />} />
          <Route path="/CategoryView/:id" element={<CategoryView />} />

          {/* //////////////////// SUB CATEGORY ///////////// */}
          <Route path="/SubCategoryAdd" element={<SubCategoryAdd />} />
          <Route path="/SubCategoryEdit" element={<SubCategoryEdit />} />
          <Route path="/SubCategoryListing" element={<SubCategoryListing />} />
          <Route path="/SubCategoryView" element={<SubCategoryView />} />

          {/* //////////////////// CONTACTUS ///////////// */}
          <Route path="/ContactListing" element={<ContactListing />} />
          <Route path="/ContactView/:id" element={<ContactView />} />





        </Route>
      </Routes>
    </>
  )
}

export default App
