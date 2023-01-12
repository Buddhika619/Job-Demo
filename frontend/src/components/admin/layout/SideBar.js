import React from "react";

export default function SideBar() {
  return (
    <>
      <aside id="sidebar" class="sidebar">
        <ul class="sidebar-nav" id="sidebar-nav">
          <li class="nav-item">
            <a class="nav-link" href="">
              <i class="fa-solid fa-plus"></i>
              <span>Create</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">
              <i class="bi bi-house"></i>
              <span>Home</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">
              <i class="fa-solid fa-calendar-days"></i>
              <span>Schedule</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">
              <i class="fa-solid fa-address-book"></i>
              <span>Clients</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">
              <i class="bi bi-ui-checks"></i>
              <span>Requests</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">
              <i class="bi bi-paragraph"></i>
              <span>Quotes</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">
              <i class="bi bi-diagram-3-fill"></i>
              <span>Jobs</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">
              <i class="bi bi-receipt"></i>
              <span>Invoices</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">
              <i class="bi bi-clipboard2-data"></i>
              <span>Reports</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">
              <i class="fa-regular fa-clock"></i>
              <span>Time Sheet</span>
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}
