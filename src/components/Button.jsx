export default function Button(props) {
  let btnClick = () => {
    props.onClick(props.val);
  };

  return (
    <>
      <button
        style={{
          minWidth: "100px",
          marginLeft: "2px",
          marginRight: "2px",
          marginBottom: "2px"
        }}
        onClick={btnClick}
      >
        {props.val}
      </button>
    </>
  );
}
