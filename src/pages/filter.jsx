import Select from "../shared/Select.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {
  brandList,
  externalColorList,
  innerColorList,
  statusList,
  transmissionList,
  yearOfRealise
} from "../dataType.js";


const Filter = ({setCars}) => {
  // debugger;
  const [brand, setBrand] = useState([]);
  const [status, setStatus] = useState([]);
  const [dateOfRealise, setDateOfRealise] = useState([]);
  const [innerColor, setInnerColor] = useState([]);
  const [externalColor, setExternalColor] = useState([]);
  const [transmission, setTransmission] = useState([]);

  useEffect(() => {
    (async () => {
      const {data} = await axios.post('http://localhost:3000/getCarsList', {
        brand: brand.map(({value}) => value),
        status: status.map(({value}) => value),
        dateOfRealise: dateOfRealise.map(({value}) => value),
        innerColor: innerColor.map(({value}) => value),
        externalColor: externalColor.map(({value}) => value),
        transmission: transmission.map(({value}) => value),
      });

      setCars(data);
    })()
  }, [brand, status, dateOfRealise, innerColor, externalColor, transmission, setCars])

  return (
    <div style={{display: 'flex', gap: '10px'}} >
      <Select placeHolder={'Марка'} selected={brand} elements={brandList} onChange={setBrand} />
      <Select placeHolder={'Статус'} selected={status} elements={statusList} onChange={setStatus} />
      <Select placeHolder={'Год выпуска'} selected={dateOfRealise} elements={yearOfRealise} onChange={setDateOfRealise} />
      <Select placeHolder={'Цвет салона'} selected={innerColor} elements={innerColorList} onChange={setInnerColor} />
      <Select placeHolder={'Цвет кузова'} selected={externalColor} elements={externalColorList} onChange={setExternalColor} />
      <Select placeHolder={'Коробка'} selected={transmission} elements={transmissionList} onChange={setTransmission} />
    </div>
  )
}

export default Filter;