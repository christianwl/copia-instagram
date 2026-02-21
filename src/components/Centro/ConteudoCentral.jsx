import Stories from "./Stories";
import Feed from "./Feed";

import "./conteudoCentral.css";

export default function ConteudoCentral() {
  return (
    <>
      <div className="conteudoCentral">
        <Stories></Stories>
        <Feed></Feed>
        {/* <div className="Feed">
                    O Conteúdo do Feed virá aqui
                </div> */}
      </div>
    </>
  );
}
