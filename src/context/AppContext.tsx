import { createContext, useContext, useReducer, ReactNode, useEffect } from 'react';
import { lockScroll, unlockScroll } from '../lib/overflowManager';

// Types
export interface User {
  id: string;
  name: string;
  email: string;
  membershipType: 'basic' | 'premium' | 'elite';
}

export interface ClassBooking {
  id: string;
  className: string;
  date: string;
  time: string;
  instructor: string;
}

export interface AppState {
  user: User | null;
  isLoggedIn: boolean;
  bookings: ClassBooking[];
  selectedMembership: string | null;
  isDarkMode: boolean;
  isNavigationOpen: boolean;
}

// Actions
type AppAction =
  | { type: 'LOGIN'; payload: User }
  | { type: 'LOGOUT' }
  | { type: 'ADD_BOOKING'; payload: ClassBooking }
  | { type: 'REMOVE_BOOKING'; payload: string }
  | { type: 'SELECT_MEMBERSHIP'; payload: string }
  | { type: 'TOGGLE_DARK_MODE' }
  | { type: 'SET_DARK_MODE'; payload: boolean }
  | { type: 'TOGGLE_NAVIGATION' }
  | { type: 'SET_NAVIGATION'; payload: boolean };

// Initial state
const initialState: AppState = {
  user: null,
  isLoggedIn: false,
 bookings: [],
  selectedMembership: null,
  isDarkMode: false, // Light theme as default
  isNavigationOpen: false,
};

// Reducer
function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
      };
    
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isLoggedIn: false,
        bookings: [],
      };
    
    case 'ADD_BOOKING':
      return {
        ...state,
        bookings: [...state.bookings, action.payload],
      };
    
    case 'REMOVE_BOOKING':
      return {
        ...state,
        bookings: state.bookings.filter(booking => booking.id !== action.payload),
      };
    
    case 'SELECT_MEMBERSHIP':
      return {
        ...state,
        selectedMembership: action.payload,
      };
    
    case 'TOGGLE_DARK_MODE':
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    
    case 'TOGGLE_NAVIGATION':
      return {
        ...state,
        isNavigationOpen: !state.isNavigationOpen,
      };

    case 'SET_DARK_MODE':
      return {
        ...state,
        isDarkMode: action.payload,
      };

    case 'SET_NAVIGATION':
      return {
        ...state,
        isNavigationOpen: action.payload,
      };
    
    default:
      return state;
  }
}

// Context
interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
  login: (user: User) => void;
  logout: () => void;
  addBooking: (booking: ClassBooking) => void;
  removeBooking: (bookingId: string) => void;
  selectMembership: (membershipType: string) => void;
  toggleDarkMode: () => void;
  toggleNavigation: () => void;
  setNavigation: (isOpen: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider component
export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Load theme preference from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('afroheat-theme');
    if (savedTheme === 'dark') {
      dispatch({ type: 'SET_DARK_MODE', payload: true });
    }
  }, []);

  // Apply theme class to body and persist theme preference
  useEffect(() => {
    if (state.isDarkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('afroheat-theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('afroheat-theme', 'light');
    }
  }, [state.isDarkMode]);
  useEffect(() => {
    console.log('Theme changed:', state.isDarkMode ? 'dark' : 'light');
    if (state.isDarkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('afroheat-theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('afroheat-theme', 'light');
    }
  }, [state.isDarkMode]);

  // Prevent body scroll when mobile navigation is open
  useEffect(() => {
    if (state.isNavigationOpen) {
      lockScroll();
    } else {
      unlockScroll();
    }
  }, [state.isNavigationOpen]);

  const login = (user: User) => {
    dispatch({ type: 'LOGIN', payload: user });
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  const addBooking = (booking: ClassBooking) => {
    dispatch({ type: 'ADD_BOOKING', payload: booking });
  };

  const removeBooking = (bookingId: string) => {
    dispatch({ type: 'REMOVE_BOOKING', payload: bookingId });
  };

  const selectMembership = (membershipType: string) => {
    dispatch({ type: 'SELECT_MEMBERSHIP', payload: membershipType });
  };

  const toggleDarkMode = () => {
    dispatch({ type: 'TOGGLE_DARK_MODE' });
  };

  const toggleNavigation = () => {
    dispatch({ type: 'TOGGLE_NAVIGATION' });
  };

  const setNavigation = (isOpen: boolean) => {
    dispatch({ type: 'SET_NAVIGATION', payload: isOpen });
  };

  const value: AppContextType = {
    state,
    dispatch,
    login,
    logout,
    addBooking,
    removeBooking,
    selectMembership,
    toggleDarkMode,
    toggleNavigation,
    setNavigation,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

// Hook to use the context
export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}