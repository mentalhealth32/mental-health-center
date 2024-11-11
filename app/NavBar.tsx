const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "60px",
        padding: "50px 40px",
        alignItems: "center"
      }}
    className="navbar"
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <p className="logo">Червоноградське</p>
        <p className="logo">психоневрологічне відділення</p>
      </div>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "30px",
        }}
      >
        <li>Про нас</li>
        <li>Графік роботи</li>
        <li>Послуги</li>
        <li>Новини</li>
        <li>Контакти</li>
      </nav>
    </div>
  );
};

export default Navbar;
