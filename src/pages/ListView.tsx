import { FC } from 'react';

interface IListView {
  items: { [key: string]: string }[]
}

const ListView: FC<IListView> = ({ items }) => {
  const listItems = items.map((item, index) => {
    return (
      <li key={index}>
        <img src={item.thumbnail_url} alt="missing"></img>
        {`${item.year} ${item.make} ${item.model}`}
      </li>
    );
  });
  return (
    <ul>
      {listItems}
    </ul>
  );
};

export default ListView;
