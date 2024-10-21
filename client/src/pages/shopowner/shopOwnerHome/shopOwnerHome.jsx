import React, { useEffect, useState, useMemo } from "react";
import AdminNavBar from "../../../components/admin/adminNavbar/AdminNavBar";
import "./shopOwnerHome.scss";
import LatestTransactions from "../../../components/admin/latestTransactions/LatestTransactions";
import FeaturedItem from "../../../components/admin/featuredItems/FeaturedItem";
import Chart from "../../../components/admin/chart/Chart";
import { userRequest } from "../../../utilities/requestMethod";
import ShopOwnerLeftBar from "../shopownerLeftBar/shopOwnerLeftBar";

function ShopOwnerHome() {
  const [userStats, setUserStats] = useState([]);

  const MONTHS = useMemo(() => [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ], []);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/users/stats");
        const stats = res.data.map((item) => ({
          name: MONTHS[item._id - 1],
          "New User": item.total,
        }));
        setUserStats(stats);
      } catch (error) {
        console.error("Error fetching user stats:", error);
      }
    };
    getStats();
  }, [MONTHS]);

  return (
    <div className="admin-home-container">
      <AdminNavBar />
      <div className="bottom">
      <ShopOwnerLeftBar></ShopOwnerLeftBar>
        <div className="bottom-right">
          <FeaturedItem />
          <Chart data={userStats} title="User Analytics" grid dataKey="New User" />
          <div className="data">
            <LatestTransactions />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopOwnerHome;
