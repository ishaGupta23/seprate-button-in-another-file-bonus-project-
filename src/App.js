import React from 'react';
import Button from './components/Button';

export default function App() {
  return (
    <div>
      <Button buttonName={"Create"} />
      <Button buttonName={"Delete"} />
      <Button buttonName={"Submit"} />
      <Button buttonName={"Buy"} />

      {/* <Button buttonFirstName={'Create'} />
      <Button buttonSecondName={'Delete'} />
      <Button buttonThirdName={'Submit'} />
      <Button buttonFourthName={'Buy'} /> */}
    </div>
  );
}
