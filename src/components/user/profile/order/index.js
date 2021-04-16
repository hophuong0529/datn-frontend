import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import Bread from "../layouts/Bread";
import Left from "../layouts/Left";
import Table from "./table/Table";

export default function Order() {
  const [user] = useContext(UserContext);
  return (
    <main className="mains main-user sty-none">
      <div className="container">
        <div className="row">
          <div className="col-breadcrumb col-md-12">
            <Bread title={"Lịch sử mua hàng"} />
          </div>
          <div className="blk-user col-md-12">
            <div className="row">
              <div className="col-md-3 col-sm-12">
                <Left user={user} />
              </div>
              <div className="col-md-9 col-sm-12">
                <Table />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
