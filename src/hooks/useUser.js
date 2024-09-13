// src/hooks/useUser.js
import { useContext } from 'react';
import { UserContext } from '../context/UserContext'; // Ensure the correct path

export const useUser = () => useContext(UserContext);