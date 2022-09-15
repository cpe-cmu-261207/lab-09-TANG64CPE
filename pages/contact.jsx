import React from "react";
import Mainlyout from "../Layout/Mainlyout";

export default function contact() {
  return (
    <Mainlyout>
      <div>
        <div
          className="card"
          style={{
            width: "15%",
            margin: "auto",
            padding: "4px",
          }}
        >
          <img src="\280827263_1232011180877527_7288422444163068877_n.jpg" />
          <h4 style={{ paddingTop: "5px" }}>Natsuphat Thaumpan</h4>
          <p>Nickname : Tang</p>
          <div>
            <p
              style={{
                paddingRight: "5px",
              }}
            >
              Facebook : &nbsp;
              <a
                href="https://web.facebook.com/profile.php?id=100022059703923"
                target="_blank"
                rel="noreferrer"
              >
                https://facebook.com/Natsuphat
              </a>
            </p>
          </div>
          <div>
            <p>
              Contact Mail : &nbsp;
              <a
                class="text-decoration-none"
                href="mailto:Natsuphat_th@cmu.ac.th"
                target="_blank"
                rel="noreferrer"
              >
                Natsuphat_th@cmu.ac.th
              </a>
            </p>
          </div>
          <p>Tel : 0832241830 </p>
        </div>
      </div>
    </Mainlyout>
  );
}
