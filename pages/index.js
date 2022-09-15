import Mainlyout from "../Layout/Mainlyout";

export default function Home() {
  return (
    <Mainlyout>
      <div
        className="card"
        style={{
          width: "15%",
          margin: "auto",
          padding: "4px",
        }}
      >
        <img src="\280827263_1232011180877527_7288422444163068877_n.jpg"></img>
        <div>
          <h4>Natsuphat Thaumpan</h4>
          <p>
            สวัสดีครับผม ผมชื่อณัฐศุพัฒน์ เทียมปาน เรียนอยู่วิศวะคอมพิวเตอร์
            ภาคพิเศษ เรียนไม่ค่อยเก่งมาก แต่พยายามที่จะเข้าใจ
            และเรียนรู้อยู่เสมอ
          </p>
        </div>
      </div>
      <nav>
        <div
          class="row row-cols-1 row-cols-md-3 g-4"
          style={{
            margin: "25px",
          }}
        >
          <div className="card">
            <img src="\Best-free-video-editing-software-AU-Capterra-Header.png" />
            <h4>Video Editor</h4>
            <p>
              สมัยมัธยมผมได้เรียนรู้เกี่ยวกับการตัดต่อวีดีโอมาบ้างเพราะว่าผมอยากทำช่อง
              YouTube
            </p>
          </div>
          <div className="card">
            <img src="\Clio_2020-Blog_Image-Programming_for_Lawyers-750x375.png" />
            <h4>Programming</h4>
            <p>
              ผมเริ่มเรียนเขียนโปรแกรมตอนปี 1 ซึ่งไม่เก่งมาก
              แต่พอเข้าใจลักษณะของโปรแกรมดี จึงพยายามเรียนรู้มาตลอด
            </p>
          </div>
          <div className="card">
            <img src="\teo-zac-rH6WSz0KN7I-unsplash-1.jpg" />
            <h4>Drowing</h4>
            <p>
              สมัยเด็กๆผมชอบวาดรูปแล้วก็วาดเก่งด้วยไม่ได้อวดตัวเองนะแต่ณปัจจุบันอาจจะลดลงมาบ้างเพราะไม่ได้ฝึกมาประจำ
            </p>
          </div>
        </div>
      </nav>
    </Mainlyout>
  );
}
