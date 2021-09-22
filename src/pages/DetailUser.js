import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

// import necessary hooks from react-router-dom
import { useParams } from 'react-router-dom';

const DetailUser = () => {
  const [data, setData] = useState(null);

  // call that hooks here and store to variable
  let { id } = useParams();

  // don't worry about this, we'll cover later
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((json) => setData(json));
    return () => {
      setData(null);
    };
  }, []);

  console.log(data);

  return (
    // code element inside Container
    // display information that stored in data
    // console.log first to see what information that you get from fetching
    <Container className="text-center">
      <h1>Data user with parameter {id} is</h1>
      <div className="h2">{data?.name}</div>
      <div>{data?.username}</div>
      <div>{data?.email}</div>
      <div>{data?.phone}</div>
      <div>{data?.website}</div>
    </Container>
  );
};

export default DetailUser;
