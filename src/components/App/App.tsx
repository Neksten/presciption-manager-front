import { BrowserRouter, Route, Routes } from 'react-router';
import { Home } from '../../pages/Home';
import { Auth } from '../../pages/Auth';
import { Register } from '../../pages/Register';
import { Recipe } from '../../pages/Recipe';
import { Provider } from 'react-redux';
import store from '../../store';
import { AuthLayout } from '../../Layouts/AuthLayout';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AuthLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/register" element={<Register />} />
            <Route path="/recipe/:id" element={<Recipe />} />
          </Routes>
        </AuthLayout>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
