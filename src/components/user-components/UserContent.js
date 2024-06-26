import BookDetails from "components/pages/user/BookDetails";
import BrowseLibrary from "components/pages/user/BrowseLibrary";
import CheckoutPage from "components/pages/user/CheckoutPage";
import GenrePage from "components/pages/user/GenrePage";
import Home from "components/pages/user/Home";
import OrderSummary from "components/pages/user/OrderSummary";
import OverdueBooks from "components/pages/user/OverdueBooks";
import Profile from "components/pages/user/Profile";
import ReadingList from "components/pages/user/ReadingList";
import Results from "components/pages/user/Results";
import React from "react";
import { Route, Routes } from "react-router-dom";

function UserContent() {
  return (
    <div className="screens-container flex flex-grow">
      <div className="contentDiv px-8 py-16 flex flex-col flex-grow min-h-screen min-w-full bg-[#EDEDED] gap-y-6 overflow-auto">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/results" element={<Results />} />
          <Route path="/reading-list" element={<ReadingList />} />
          <Route path="/order-summary/:id" element={<OrderSummary />} />
          <Route path="/checkout-page" element={<CheckoutPage />} />
          <Route path="/browse-library" element={<BrowseLibrary />} />
          <Route path="/overdue-books" element={<OverdueBooks />} />
          <Route path="/search-results/:search" element={<Results />} />
          <Route path="/browse-library/:genre" element={<GenrePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default UserContent;
