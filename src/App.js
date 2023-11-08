import React from "react";

//импортируемые стили
import "./app/global/global.scss";

//импортируемые компоненты
import { Header } from "./widgets/Header";
import { Sort } from "./widgets/Sort";
import { Pagination } from "./widgets/Pagination";
import { Footer } from "./widgets/Footer";
import { NewsList } from "./widgets/NewsList";

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <div className="_container">
          <Sort />
          <div className="main__content">
            <NewsList />
            <Pagination />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
