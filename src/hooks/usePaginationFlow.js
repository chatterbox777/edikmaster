import { useEffect, useState } from "react";
import * as axios from "axios";

export const usePaginationFlow = () => {
  debugger;
  const [limit, setLimit] = useState(20);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterUsers, setFilterUsers] = useState([]);
  const [pagesArr, setPagesArr] = useState([]);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  function handleCurrentPageNumber(pageNumber) {
    setCurrentPageNumber(pageNumber);
  }

  function createPagesArr(totalPagesCount) {
    const pagesArr = [];
    for (let i = 0; i < totalPagesCount; i++) {
      pagesArr.push(i + 1);
    }
    setPagesArr(pagesArr);
  }

  function getTotalPagesCount(usersLength) {
    return Math.ceil(usersLength / limit);
  }

  function filterUsersSize(users) {
    const searchRadiusEndNumber = limit * currentPageNumber;
    const searchRadiusStartNumber = searchRadiusEndNumber - limit;
    const copyUsersArr = users.filter((_, i) => {
      return i + 1 >= searchRadiusStartNumber && i + 1 <= searchRadiusEndNumber;
    });
    return copyUsersArr;
  }
  useEffect(() => {
    setLoading(true);
    console.log(loading);
    let result;
    let totalPagesCount;
    (async function fetchData() {
      let usersData = await axios.get("data.json");
      result = usersData.data;
      totalPagesCount = getTotalPagesCount(result.length);
      setUsers(result);
      setFilterUsers(filterUsersSize(result));
      createPagesArr(totalPagesCount);
    })();
    setLoading(false);
  }, [currentPageNumber]);

  return {
    currentPageNumber,
    loading,
    filterUsers,
    pagesArr,
    handleCurrentPageNumber,
  };
};
