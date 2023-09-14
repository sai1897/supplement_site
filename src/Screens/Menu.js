import React from "react";
import "../App.css";
const Menu = () => {
  return (
    <div>
      <div className="h2 mt-3 " style={{ width: 270 }}>
        <div className="h-75">
          <div>
            <div class="dropdown show d-flex flex-row p-3 border m-1">
              <img
                src="./Dashboard/ic_sharp-dashboard.png"
                style={{ width: 35, height: 35 }}
              />
              <a
                style={{ width: 250 }}
                class="btn "
                href="/dashboard"
                role="button"
             
              >
                Dashboard{" "}
              </a>

              {/* <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div> */}
            </div>
          </div>
          <div style={{ marginTop: 10 }}>
            <div class="dropdown show d-flex flex-row p-3 border m-1">
              <img
                src="./Dashboard/Group.png"
                style={{ width: 35, height: 35 }}
              />

              <a
                style={{ width: 250 }}
                class="btn  "
                href="/customers"
                role="button"
               
              >
                Customers{" "}
              </a>
              {/* <div
                class="dropdown-menu"
                aria-labelledby="dropdownMenuLink"
                style={{ width: 200 }}
              >
                <a class="dropdown-item" href="/customers">
                  Customer List
                </a>
              </div> */}
            </div>
          </div>
          <div style={{ marginTop: 10 }}>
            <div class="dropdown show d-flex flex-row p-3 border m-1">
              <img
                src="./Dashboard/eos-icons_cluster-management.png"
                style={{ width: 35, height: 35 }}
              />

              <a
                style={{ width: 250 }}
                class="btn  dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                User Management
              </a>

              <div
                class="dropdown-menu"
                aria-labelledby="dropdownMenuLink"
                style={{ width: 200 }}
              >
                <a class="dropdown-item" href="#">
                  Add Agent
                </a>
                <a class="dropdown-item" href="#">
                  List of Users
                </a>
                <a class="dropdown-item" href="#">
                  Agent History
                </a>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 10 }}>
            <div class="dropdown show d-flex flex-row p-3 border m-1">
              <img
                src="./Dashboard/Vector(9).png"
                style={{ width: 35, height: 35 }}
              />
              <a
                style={{ width: 250 }}
                class="btn dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Orders
              </a>

              <div
                class="dropdown-menu"
                aria-labelledby="dropdownMenuLink"
                style={{ width: 200 }}
              >
                <a class="dropdown-item" href="/orders">
                  Order History
                </a>
                <a class="dropdown-item" href="#">
                  To be Dispatch
                </a>
                <a class="dropdown-item" href="#">
                  Upcomming Orders
                </a>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 10 }}>
            <div class="dropdown show d-flex flex-row p-3 border m-1 ">
              <img
                src="./Dashboard/iconoir_reports.png"
                style={{ width: 35, height: 35 }}
              />
              <a
                style={{ width: 250 }}
                class="btn dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Reports{" "}
              </a>

              <div
                class="dropdown-menu"
                aria-labelledby="dropdownMenuLink"
                style={{ width: 200 }}
              >
                <a class="dropdown-item" href="#">
                  Sales Report{" "}
                </a>
                <a class="dropdown-item" href="#">
                  Customer Report{" "}
                </a>
                <a class="dropdown-item" href="#">
                  Product Report{" "}
                </a>
                <a class="dropdown-item" href="#">
                  Financial Report{" "}
                </a>
                <a class="dropdown-item" href="#">
                  Inventory Report{" "}
                </a>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 10 }}>
            <div class="dropdown show d-flex flex-row p-3 border m-1 ">
              <img
                src="./Dashboard/gridicons_refund.png"
                style={{ width: 35, height: 35 }}
              />
              <h1
                style={{ width: 250 }}
                class="btn dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Refunds
              </h1>

              <div
                class="dropdown-menu"
                aria-labelledby="dropdownMenuLink"
                style={{ width: 200 }}
              >
                <a class="dropdown-item" href="#">
                  Refund Tracking
                </a>
                <a class="dropdown-item" href="#">
                  Refund Analytics
                </a>
                <a class="dropdown-item" href="#">
                  Refund Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Menu;