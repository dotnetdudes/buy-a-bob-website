import { useParams } from "react-router-dom";
import { useEffect } from "react";

const DetailPage = () => {
  const { id } = useParams();

    return (
      <div>
        <h2>detail</h2>
      </div>
    );
}

export default DetailPage;
