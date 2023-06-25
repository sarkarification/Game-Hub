import HeaderDetail from "./headerDetail";

function Header(props) {
  return (
    <>
      <section className="header-section">
        <div>
          <HeaderDetail imgURL={"/assets/flag.png"} text={props.phone} />
          <HeaderDetail
            imgURL={"/assets/telephone.png"}
            text={props.flagText}
          />
        </div>
        <h5
          onClick={() => {
            props.setToggleCart((prevState) => !prevState);
          }}
        >{`Basket (${props.count})`}</h5>
      </section>
      <div
        className="header"
        style={{
          background: `url(${"/assets/hero.jpg"}) left 10% top 20% / cover
    no-repeat border-box`,
        }}
      >
        <div className="image">
          <img src={"/assets/logo.png"} />
        </div>
        <div className="overlay"></div>
      </div>
    </>
  );
}

export default Header;
