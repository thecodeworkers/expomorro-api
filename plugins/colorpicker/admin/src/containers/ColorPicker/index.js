
import React, { useState, useEffect } from 'react';
import { ChromePicker } from 'react-color';
import styled from 'styled-components';

const Title = styled.h5`

  margin-bottom: 1rem;

  color: #333740;

`;


const ColorWindow = styled.div`

  background-color: ${(props) => props.color};
  width: 100%;
  height: 30px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: ${(props) => props.color === '#FFFFFF' && '1px solid #5B5F65'};

`;


const PopOver = styled.div`

  position: absolute;

  z-index: 2;

  top: 70px;

`;

const Cover = styled.div`

  position: fixed;

  top: 0px;

  right: 0px;

  bottom: 0px;

  left: 0px;

`;


const ColorPicker = ({ name, onChange, value }) => {

  const [showPicker, setShowPicker] = useState(false);
  const [color, setColor] = useState(value);

  useEffect(()=>{
    setColor(value)
  },[value])

  /**

   * Handle color change from the the color picker

   * @param {string} color - in hex format

   */

  const handleChangeComplete = (newColor) => {
    onChange({ target: { name, value: newColor.hex } });
  };


  return (

    <div>

      <Title>{name}</Title>

      <ColorWindow color={color || '#FFFFF'} onClick={() => setShowPicker(true)} />

      {showPicker ? (

        <PopOver>

          <Cover onClick={() => setShowPicker(false)} />

          <ChromePicker color={color || '#FFFFF'} onChange={handleChangeComplete} />

        </PopOver>

      ) : null}

    </div>

  );

};

export default ColorPicker;