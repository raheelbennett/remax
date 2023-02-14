import { useState } from 'react';
import { Slider, Row, Col, InputNumber } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';


const styles = {
    '--rs-slider-progress': '#409c72'
  }
const Range = ({category, cashback}) => {
  const [value, setValue] = useState(0);
  const savings = value * (cashback/100);
const formattedSavings =  `$${savings.toFixed(2)}`;
  return (
    <Row>
      <Col md={15}>
      <label>{category} ({cashback}% cash back)</label> 
      <br/>
        <div className='font-bold'>{formattedSavings} Saving</div>
        <Slider
          progress
          style={styles}
          value={value}
          onChange={value => {
            setValue(value);
          }}
          min={0}
          max={500}
          step={50}
   
        />
      </Col>
      <Col md={9}>
      <br/>
        <InputNumber
          prefix="$"
          min={0}
          max={(Infinity)}
          size="md"
          style={{ marginBottom: 10 }}
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