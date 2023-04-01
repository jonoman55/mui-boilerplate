import {
  Home as HomeIcon,
  People as UsersIcon,
  AccountCircle as ProfileIcon,
  Login as LoginIcon,
  Logout as LogoutIcon
} from '@mui/icons-material';

import type { LinkItem } from '../types';

/**
 * App Navigation Link Items
 */
export const linkItems: LinkItem[] = [
  { id: 0, name: 'home', description: 'Home Page', to: '/', icon: <HomeIcon /> },
  { id: 1, name: 'users', description: 'Users Page', to: '/users', icon: <UsersIcon /> },
  { id: 2, name: 'profile', description: 'Account Profile Page', to: '/profile', icon: <ProfileIcon /> },
];

/**
 * App Authentication Link Items
 */
export const authItems: LinkItem[] = [
  { id: 3, name: 'login', description: 'Login', to: '/login', icon: <LoginIcon /> },
  { id: 4, name: 'logout', description: 'Logout', to: '/login', icon: <LogoutIcon /> },
];