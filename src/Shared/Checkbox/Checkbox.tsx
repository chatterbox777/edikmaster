import React, { useState } from 'react';
import styled from 'styled-components';

type CheckboxProps = {
  label: string;
  id: string;
  checkboxValue: boolean;
};

const Checkbox = ({ label, id, checkboxValue }: CheckboxProps) => {
  return (
    <>
      <CheckboxContainer readOnly checked={checkboxValue} id={id} type="checkbox" />
      <Label htmlFor={id}>{label}</Label>
    </>
  );
};

export default Checkbox;

const CheckboxContainer = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
  &::before {
    content: '';
    display: inline-block;
    width: 1em;
    height: 1em;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #adb5bd;
    border-radius: 0.15em;
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }
  &:checked + label::before {
    border-color: #0b76ef;
    background-color: white;
    background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.28571 8L0 4.16123L1.20857 3.0787L4.28571 5.82726L10.7914 0L12 1.09021L4.28571 8Z' fill='%232196F3'/%3E%3C/svg%3E%0A");
  }
`;

const Label = styled.label`
  display: flex;
  align-items: flex-end;
  margin-left: 10px;
  pointer-events: none;
  &::before {
    content: '';
    display: inline-block;
    width: 1em;
    height: 1em;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #adb5bd;
    border-radius: 0.25em;
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 68% 60%;
  }
`;
