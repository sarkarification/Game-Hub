function HeaderDetail(props) {
  return (
    <div className="header-detail">
      <img src={props.imgURL} />
      <p>{props.text}</p>
    </div>
  );
}

export default HeaderDetail;
