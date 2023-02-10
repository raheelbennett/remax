import { useState } from 'react';
import { Slider, Row, Col, InputNumber } from 'rsuite';



const Range = ({category}) => {
  const [value, setValue] = useState(0);
  const savings = value * 0.045;
const formattedSavings =  savings.toFixed(2);
  return (
    <Row>
      <Col md={10}>
        
        <label>{category}   <br/> $ {formattedSavings} savings</label>
        <Slider
          progress
          style={{ marginTop: 16 }}
          value={value}
          onChange={value => {
            setValue(value);
          }}
        />
      </Col>
      <Col md={4}>
        <InputNumber
          min={0}
          max={100}
          value={value}
          onChange={value => {
            setValue(value);
          }}
        />
      </Col>
    </Row>
  );
}

export default Range;