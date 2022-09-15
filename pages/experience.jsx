import React from "react";
import Mainlyout from "../Layout/Mainlyout";

export default function experience() {
  return (
    <Mainlyout>
      <div>
        <div
          className="card"
          style={{
            width: "30%",
            margin: "auto",
            padding: "4px",
          }}
        >
          <img src="\scratch2.jpg" />
          <h4>Scratch Project</h4>
          <p>
            โปรเจ็คของ Basic Com ในเทอมแรกของปี 1 ซึ่งต้องทำเป็นกลุ่มผ่าน
            Scratch เป็นการต่อคำสั่งง่ายๆ แต่ก็ยากพอสมควร และได้ทำโปรเจ็คชื่อว่า
            Space Shooter
          </p>
        </div>
        <p style={{ paddingTop: "20px" }}></p>
        <div
          className="card"
          style={{
            width: "30%",
            margin: "auto",
            padding: "4px",
          }}
        >
          <img src="\image1-10.png" />
          <h4>C++ Project</h4>
          <p>
            โปรเจ็คของ Com programming ในเทอม 2 ของปี 1 ซึ่งทำเป็นกลุ่มผ่าน VS
            code โดยทำโปรเจ็คชื่อ Hotel Reservation Project
          </p>
        </div>
      </div>
    </Mainlyout>
  );
}
