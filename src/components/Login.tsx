import React from 'react';
import {createClient} from '@supabase/supabase-js';
import {SUPABASE_URL, SUPABASE_KEY} from '../lib/constants.ts';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const LoginPage: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

  const loginWithEmailAndPassword = async (event: React.FormEvent) => {
    event.preventDefault();
    
    
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (data) {
        console.log("Success:", data);
      }
  
      if (error) { 
        
        // Manejar el error en caso de que ocurra
        console.log("Error:", error.message);
        return null;
      }
  
      // Obtener el token de acceso
      const accessToken = data?.session?.access_token;
      return accessToken;
    } catch (error) {
      // Manejar el error en caso de que ocurra
      console.log("Error:", error.message);
      return null;
    }
  };

 
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-2xl font-bold mb-4">Iniciar sesión</h1>
        <form onSubmit={loginWithEmailAndPassword}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="text"
              placeholder="Usuario"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Contraseña
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder="Contraseña"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Iniciar sesión
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;