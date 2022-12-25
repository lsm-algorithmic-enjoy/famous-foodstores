import styles from "./ModalBase.module.css";

export default function Modalbase({
  thumb,
  name,
  description,
  url,
  onCloseModal,
}) {
  return (
    <div className={styles.container}>
      <h1>{name}</h1>
      <p>{description}</p>
      <img src={thumb} alt="썸네일" />
      <div>
        <a href={url}>{url}</a>
      </div>
      <button className={styles.end} onClick={onCloseModal}>
        X
      </button>
    </div>
  );
}

// props-drilling을 통해 전달받은 함수, 데이터를 통해 팝업 기능 구현
