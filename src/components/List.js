import React from 'react';
import './list.css';

const List = (props) => {
  const { data } = props;

  const dataToShow = data.map((item) => {
    console.log(item.urls.full);
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          height: '200px',
          marginBottom: '20px',
        }}>
        <img src={item.urls.full}></img>
        <div>{item.user.instagram_username}</div>
      </div>
    );
  });

  return (
    <div style={{ minHeight: '90vh', width: '100%' }} className="list">
      {dataToShow}
    </div>
  );
};

export default List;
