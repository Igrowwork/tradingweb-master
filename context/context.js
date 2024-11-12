// context/RouteContext.js

import axiosInstance from '@/utils/axiosInstance'; // Ensure correct path
import { useRouter } from 'next/router';
import { createContext, useState, useEffect } from 'react';

const RouteContext = createContext();

const RouteProvider = ({ children }) => {
  const router = useRouter();
  // Initialize token state
  const [token, setToken] = useState(null);

  // Initialize isLoggedIn state based on the presence of a token
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Popup States
  const [isPopup, setIsPopup] = useState(false);
  const [livePopup, setLivePopup] = useState(false);
  const [loginPopup, setLoginPopup] = useState(false);
  const [register, setRegister] = useState(false);

  // Drawer State
  const [isDrawer, setIsDrawer] = useState(false);

  // Component State
  const [isCompStat, setIsCompStat] = useState(0);

  // Profile State
  const [profileCheck, setProfileCheck] = useState(null);

  // Effect to load token from localStorage on initial mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedToken = localStorage.getItem('Token');
      if (storedToken) {
        setToken(storedToken);
        setIsLoggedIn(true);
      }
    }
  }, []);

  /**
   * Custom function to handle setting the token.
   * This ensures that whenever the token is updated,
   * it's also stored in localStorage and the isLoggedIn state is updated accordingly.
   */
  const handleSetToken = (newToken) => {
    if (newToken) {
      localStorage.setItem('Token', newToken);
      setToken(newToken);
      setIsLoggedIn(true);
    } else {
      localStorage.removeItem('Token');
      setToken(null);
      setIsLoggedIn(false);
    }
  };

  // Popup Handlers
  const PopupOpen = () => setIsPopup(true);
  const PopupClose = () => setIsPopup(false);

  const LivePopupOpen = () => {
    setLivePopup(true);
    setLoginPopup(false);
  };
  const LivePopupClose = () => setLivePopup(false);

  const LoginPopupOpen = () => {
    setLivePopup(false);
    setLoginPopup(true);
  };
  const LoginPopupClose = () => setLoginPopup(false);

  // Register Handlers
  const registerOpen = () => setRegister(true);
  const registerClose = () => setRegister(false);

  // Drawer Handlers
  const DrawerOpen = () => setIsDrawer(true);
  const DrawerClose = () => setIsDrawer(false);




  
  const [namevalid, setnameValid] = useState(null);
  const [amountvalid, setamountValid] = useState(null);
  // Profile Fetch Function
  // const isFetch = async () => {
  //   try {
  //     const token = localStorage.getItem('Token'); // Correct token retrieval
  //     if (!token) {
  //       console.log("No token found");
  //       return;
  //     }

  //     const headers = {
  //       Authorization: `Bearer ${token}`,
  //     };

  //     const res = await axiosInstance.get('/api/auth/profile', { headers }); // Pass headers
  //     setProfileCheck(res.data.user.isAdmin);
  //     setnameValid(res.data.user.name);
  //     setamountValid(res.data.user.amount)
  //     console.log(res.data.user, "Profile data from API"); // Log response directly
  //   } catch (error) {
  //     console.log(error, "Error fetching profile");
  //   }
  // };

  // Fetch profile whenever the token changes
  // useEffect(() => {
  //   isFetch();
  // }, [token]); // Add token as dependency


  const handleLogout = () => {
    localStorage.removeItem("Token")
    localStorage.removeItem("token")
    setToken("")
    router.push("/")
    setIsLoggedIn(false)
  }

  return (
    <RouteContext.Provider
      value={{
        namevalid,
        amountvalid,
        handleLogout,
        isPopup,
        PopupOpen,
        PopupClose,
        livePopup,
        LivePopupOpen,
        LivePopupClose,
        loginPopup,
        LoginPopupOpen,
        LoginPopupClose,
        register,
        registerOpen,
        registerClose,
        isLoggedIn,
        // setIsLoggedIn, // Consider removing to avoid unintended state changes
        isDrawer,
        DrawerOpen,
        DrawerClose,
        isCompStat,
        setIsCompStat,
        token,
        setToken: handleSetToken, // Use the custom setter
        setLoginPopup,
        setLivePopup,
        profileCheck, // Expose profileCheck
        setProfileCheck, // Optionally expose setter
      }}
    >
      {children}
    </RouteContext.Provider>
  );
};

export { RouteProvider, RouteContext };
