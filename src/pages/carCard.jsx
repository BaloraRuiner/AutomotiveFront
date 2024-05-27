import {Button, Paper, Typography} from "@mui/material";

const CarCard = ({src, name, cost, createOrder}) => {
  return (
    <Paper elevation={3} sx={{
      width: '400px',
      height: '500px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '15px',
      background: '#E5E4E2'
    }} >
      <img
        src={src}
        alt={'error'}
        width={'400px'}
        height={'300px'}
      />
      <Typography
        variant={'h5'}
        fontWeight={'800'}
        align={'center'}
      >
        {name}
      </Typography>
      <Typography
        variant={'h4'}
        fontWeight={'800'}
        align={'center'}
      >
        {`${cost} РУБ`}
      </Typography>
      <Button variant="contained" sx={{width: '300px'}}>ЗАКАЗАТЬ</Button>
    </Paper>
  )
}

export default CarCard;