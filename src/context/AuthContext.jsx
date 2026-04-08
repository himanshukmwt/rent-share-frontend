import { createContext, useContext, useState, useEffect } from 'react';
import { getProfile } from '../services/api';
import API from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const loggedOut = localStorage.getItem('loggedOut');
  //   if (loggedOut) {
  //     setUser(null);
  //     setLoading(false);
  //     return;
  //   }
  //   getProfile()
  //     .then(res => setUser(res.data))
  //     .catch(() => setUser(null))
  //     .finally(() => setLoading(false));
  // }, []);
useEffect(() => {
  const token = localStorage.getItem('token');
   const savedUser = localStorage.getItem('user');
  if (!token || localStorage.getItem('loggedOut')) {
    setUser(null);
    setLoading(false);
    return;
  }

   if (savedUser) {
    setUser(JSON.parse(savedUser));
    setLoading(false);
  }

//   getProfile()
//     .then(res => setUser(res.data))
//     .catch((err) => {
//       // Sirf 401 pe token hatao, network error pe nahi
//       if (err.response?.status === 401) {
//         localStorage.removeItem('token');
//       }
//       setUser(null);
//     })
//     .finally(() => setLoading(false));
// }, []);

  getProfile()
    .then(res => {
      setUser(res.data);
      localStorage.setItem('user', JSON.stringify(res.data)); // ✅ update karo
    })
    .catch((err) => {
      if (err.response?.status === 401) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
      }
      // ✅ Network error pe user null mat karo
    })
    .finally(() => setLoading(false));
}, []);

  const login = (userData,token) => {
    localStorage.setItem("token", token);
    localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
    localStorage.removeItem('loggedOut');
  };

  const logout = async () => {
    setUser(null);
    localStorage.setItem('loggedOut', 'true');
    window.location.href = '/';
    // Call API in background to clear session
    API.post('/users/logout', {}).catch(() => {});
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);


