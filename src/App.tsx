import React, { useState, useEffect } from 'react';

import Search from './pages/Search';
import ListView from './pages/ListView';
import Pagination from './components/pagination';
import './App.css';

const baseUrl = 'https://www.autolist.com/search?latitude=30.3414&location=Austin%2C+TX&longitude=-97.7312&ads=web';
const pageSize = 20;

const App = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [pageCount, setPageCount] = useState<number>(0);
  const [make, setMake] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchAuto = () => {
      setIsLoading(true);
      const url = `${baseUrl}&make=${make}&page=${currentPage}`;
      fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          if (result.records) {
            setItems(result.records);
            setPageCount(Math.ceil(result.total_count / pageSize));
          } else {
            setItems([]);
            setPageCount(0);
            setCurrentPage(0);
          }
          setIsLoading(false);
        },
        (error) => {
          setItems([]);
          setPageCount(0);
          setCurrentPage(0);
          setIsLoading(false);
        }
      );
    };
    // Only search make for now.
    // debugger
    console.log(currentPage, make);
    if (make && currentPage) {
      fetchAuto();
    }
  }, [currentPage, make]);

  return (
    <div className="App">
      {
        isLoading ? (
          <p>Loading</p>
        ) : (
          <>
            <Search make={make} setMake={setMake} setCurrentPage={setCurrentPage}/>
            <ListView items={items}></ListView>
            <Pagination
              pageCount={pageCount}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </>
        )
      }
    </div>
  );
}

export default App;
