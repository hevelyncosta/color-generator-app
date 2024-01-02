import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Values from 'values.js';

import Form from './assets/components/Form';
import ColorList from './assets/components/ColorList';

const App = () => {
  const [colors, setColors] = useState(new Values('#f15025').all(10));

  const addColor = (color) => {
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position="top-center" />
    </main>
  );
};
export default App;
