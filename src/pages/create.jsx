import {Button, Typography} from "@mui/material";
import Select from "../shared/Select.jsx";
import {
  brandList,
  externalColorList,
  innerColorList,
  statusList,
  transmissionList,
  yearOfRealise
} from "../dataType.js";
import {useEffect, useState} from "react";
import {MuiFileInput} from "mui-file-input";
import axios from "axios";


const Create = () => {
  const [brand, setBrand] = useState([]);
  const [status, setStatus] = useState([]);
  const [dateOfRealise, setDateOfRealise] = useState([]);
  const [innerColor, setInnerColor] = useState([]);
  const [externalColor, setExternalColor] = useState([]);
  const [transmission, setTransmission] = useState([]);
  const [photo, setPhoto] = useState();

  const [create, setCreate] = useState(false);

  useEffect(() => {
    if (!create) {
      return
    }

    try {
      const a = async () => {
        await axios.post('http://localhost:3000/createCar', {
          brand: brand[0].title,
          status: status[0].value,
          dateOfRealise: dateOfRealise[0].value,
          innerColor: innerColor[0].value,
          externalColor: externalColor[0].value,
          transmission: transmission[0].value,
        });
      }

      a();
    } catch (e) {
      alert(e);
    }

  }, [create])

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column'
    }}>
      <Typography variant={'h2'}>Создать машину</Typography>
      <div style={{display: 'flex', gap: '10px', flexDirection: 'column', width: '200px'}}>
        <Select placeHolder={'Модель'} selected={brand} elements={brandList} onChange={setBrand}/>
        <Select placeHolder={'Статус'} selected={status} elements={statusList} onChange={setStatus}/>
        <Select placeHolder={'Год выпуска'} selected={dateOfRealise} elements={yearOfRealise}
                onChange={setDateOfRealise}/>
        <Select placeHolder={'Цвет салона'} selected={innerColor} elements={innerColorList} onChange={setInnerColor}/>
        <Select placeHolder={'Цвет кузова'} selected={externalColor} elements={externalColorList}
                onChange={setExternalColor}/>
        <Select placeHolder={'Коробка'} selected={transmission} elements={transmissionList} onChange={setTransmission}/>
        <MuiFileInput
          value={photo}
          label='Фото машины'
          hideSizeText
          name='image'
          sx={{ width: '210px', name: 'image' }}
          onChange={(photo) => setPhoto(photo)}
        />
        <Button variant="contained" onClick={() => setCreate((create) => !create)}>Создать</Button>
        {!!photo &&
            <img
              src={URL.createObjectURL(photo)}
              alt={'error'}
              width={'700px'}
              height={'500px'}
              style={{position: "absolute", top: '300px', left: '0px'}}
            />
        }
      </div>
    </div>
  )
}

export default Create;