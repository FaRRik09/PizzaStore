import { Box, Button, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function Details({ deletePizza, getPizzas, getOneProduct, oneProduct }) {
  let params = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    getOneProduct(params.id);
  }, []);

  const handleDelete = () => {
    deletePizza(params.id);
    navigate('/');
  }
  return (
    <div>
      <Box>
        <img width={400} src={oneProduct?.url} alt={oneProduct?.title} />
        <Box>
          <Typography>{oneProduct?.title}</Typography>
          <Typography>{oneProduct?.info}</Typography>
          <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, natus?</Typography>
          <Button variant='contained' sx={{background: '#ff0505', color: 'white'}}>В корзину</Button>
          <Button onClick={handleDelete} variant='contained' sx={{background: '#ff0505', color: 'white'}}>Удалить продукт</Button>
          <Button variant='contained' sx={{background: '#fe5f1e', color: 'white'}}>Редактировать продукт</Button>
        </Box>
      </Box>
    </div>
  );
}
