import "../styles.css";

export default function Button(props) {
  let btnClick = () => {
    props.onClick(props.val);
  };

  return (
    <>
      <button onClick={btnClick}>{props.val}</button>
    </>
  );
}
