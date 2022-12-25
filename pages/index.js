import { useState, useEffect } from "react";
import Modalbase from "../components/Modalbase/Modalbase";

export default function Home() {
  const [storedata, setStoreData] = useState([]); // store 데이터 상태관리
  const [isLoading, setIsLoading] = useState(false); //로딩 상태 관리
  const [error, setError] = useState(null); // error 상태 관리
  const [modalStart, setModalStart] = useState(false); // modal이 보이게 할지 말지 결정
  const [showModalIndex, setShowModalIndex] = useState(-1); //클릭한 이미지 index를 통해 props-drilling으로 모달에 보여지기 원하는 데이터를 Modalbase에 전달, 가짜 인덱스값은 -1로 설정
  const onShowModal = () => {
    setModalStart(true);
  };
  const onCloseModal = () => {
    setModalStart(false);
    setShowModalIndex(-1);
  };
  const dataIndexHandler = (index) => {
    onShowModal();
    setShowModalIndex(index);
  };

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const data = await fetch("http://localhost:9000/stores").then((res) =>
          res.json()
        );
        setStoreData(data);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!isLoading && error) return <p>Error!</p>;
  if (storedata.length === 0) return null;

  return (
    <>
      {modalStart && (
        <Modalbase
          onCloseModal={onCloseModal}
          name={storedata[showModalIndex].name}
          thumb={storedata[showModalIndex].thumb}
          description={storedata[showModalIndex].description}
          url={storedata[showModalIndex].url}
        />
      )}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous"
      />
      <div className="listitems">
        {storedata?.map((item, index) => (
          <div key={item.id}>
            <img
              src={item.image}
              style={{ margin: "10px", cursor: "pointer" }}
              onClick={() => dataIndexHandler(index)}
              alt="이미지"
            />
          </div>
        ))}
      </div>
    </>
  );
}
