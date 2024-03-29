import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const data = [
  { date: "2022-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-02", views: 150, article: "Article 2" },

  { date: "2023-09-02", views: 120, article: "Article 3" },

  { date: "2020-09-03", views: 200, article: "Article 4" },
];
function App() {
  const [tBodyJSXData, setTBodyJSXData] = useState(() => dataJSX(data));

  function dataJSX(data) {
    let tBodyJSX = [];
    for (let i of data) {
      tBodyJSX.push(
        <tr>
          <td>{i.date}</td>
          <td>{i.views}</td>
          <td>{i.article}</td>
        </tr>
      );
    }
    return tBodyJSX;
  }

  function handleDateSort() {
    let sortedByDateData = data.sort((a, b) => {
      if (new Date(b.date) - new Date(a.date) === 0) {
        return b.views - a.views;
      }
      return new Date(b.date) - new Date(a.date);
    });
    let sortedByDateDataJSX = dataJSX(sortedByDateData);
    setTBodyJSXData(sortedByDateDataJSX);
  }

  function handleViewsSort() {
    let sortedByViewsData = data.sort((a, b) => {
      if (b.views - a.views === 0) {
        return new Date(b.date) - new Date(a.date);
      }
      return b.views - a.views;
    });
    let sortedByViewsDataJSX = dataJSX(sortedByViewsData);
    setTBodyJSXData(sortedByViewsDataJSX);
  }
  return (
    <>
      <h1>Date and Views Table</h1>
      <button onClick={handleDateSort}>Sort by Date</button>
      <button onClick={handleViewsSort}>Sort by Views</button>
      <table>
        <thead>
          <th>Date</th>
          <th>Views</th>
          <th>Article</th>
        </thead>
        <tbody>{tBodyJSXData}</tbody>
      </table>
    </>
  );
}

export default App;
