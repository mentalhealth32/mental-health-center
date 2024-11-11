import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <div>
      <div className="containerStyl">
        <Image
          src="./foro.jpg"
          alt="Лікарня"
          priority
          width={100}
          height={100}
          style={{
            width: "100%",
            height: "100vh",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
            filter: "brightness(0.9)", // затемнюємо зображення
          }}
          unoptimized={true}
        />
        <div className="overlayStyle"></div>
        <div className="boxStyle">
          <h2 className="boxHeader">
            ЧЕРВОНОГРАДСЬКЕ ПСИХОНЕВРОЛОГІЧНЕ ВІДДІЛЕННЯ
          </h2>

          <p className="desc">
            Комунальне некомерційне підприємство Червоноградської міської ради
          </p>
          <p>&quot;ЦЕНТР ПСИХІЧНОГО ЗДОРОВ&apos;Я&quot;</p>
          <p>м.Червоноград, в.Клюківська, 8а</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 100px",
          gap: "160px",
          marginBottom: "50px",
        }}
      >
        <div style={{ flex: "1" }}>
          <h2 className="partheader">ЦЕНТР ПСИХІЧНОГО ЗДОРОВ&apos;Я</h2>
          <p style={{ color: "#2b468b", marginBottom: "40px" }}>
            Порядок запису на прийом до лікаря в &quot;ПСИХОНЕВРОЛОГІЧНЕ ВІДДІЛЕННЯ&quot;
          </p>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <li className="list">
              <span className="span">Реєстратура: </span>
              Спершу пацієнту необхідно звернутися до реєстратури для
              попереднього запису. Реєстратор допоможе обрати зручний час та
              відділення для консультації з лікарем.
            </li>

            <li>
              Первинне звернення: Після реєстрації відбудеться первинний огляд,
              де лікар ознайомиться з анамнезом пацієнта та проведе попередню
              діагностику, щоб визначити подальші кроки лікування.
            </li>
            <li>
              Медична карта: Після первинного звернення необхідно оформити
              медичну карту, яка буде зберігати всю інформацію про обстеження,
              лікування та рекомендації лікарів.
            </li>
            <li>
              Додаткова інформація: Для отримання додаткової інформації або
              уточнення деталей щодо запису, звертайтеся за телефоном: +380 (00)
              000 00 00. Наші адміністратори з радістю допоможуть вам з усіма
              питаннями.
            </li>
          </div>
        </div>

        <div style={{ flex: "1" }}>
          <h2 className="partheader" style={{ marginBottom: "40px" }}>
            КОНТАКТИ
          </h2>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div
              style={{
                display: "flex",
                gap: "30px",
                alignItems: "center",
                color: "#2b468b",
              }}
            >
              <FaLocationDot size={20} /> <p>іваіваіва</p>
            </div>
            <div
              style={{
                display: "flex",
                gap: "30px",
                alignItems: "center",
                color: "#2b468b",
              }}
            >
              <FaPhoneAlt size={20} /> <p>+38073465837846</p>
            </div>
            <div
              style={{
                display: "flex",
                gap: "30px",
                alignItems: "center",
                color: "#2b468b",
                marginBottom: "30px",
                borderRadius: "8px",
              }}
            >
              <MdEmail size={20} /> <p>example@hmail.com</p>
            </div>
            <div>
              {/* <Image src="./map.png" alt="map" unoptimized={true}/> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
