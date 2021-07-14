import React, { FC, useState } from 'react';

interface ISearch {
  make: string;
  setMake: (value: string) => void;
  setCurrentPage: (value: number) => void;
}

const Search: FC<ISearch> = ({
  make,
  setMake,
  setCurrentPage
}) => {
  const [searchValue, setSearchValue] = useState<string>(make);

  const onKeypressHandler = (event: any) => {
    if (event.key === 'Enter') {
      setMake(event.currentTarget.value);
      setCurrentPage(1);
    }
  };

  const onChangeHandler = (event: any) => {
    setSearchValue(event.currentTarget.value);
  }

  return (
    <input
      type="text"
      placeholder="Search"
      value={searchValue}
      onKeyPress={onKeypressHandler}
      onChange={onChangeHandler}
    />
  );
};

export default Search;