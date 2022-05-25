import React from 'react';

const LaunchStateContext = React.createContext<any>({isSecondLaunch: false});
const LaunchDispatchContext = React.createContext<any>(null);

function launchReducer(state: any, action: any) {
  switch (action.type) {
    case 'setSecondLaunch': {
      return {
        ...state,
        isSecondLaunch: action.isSecondLaunch,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function LaunchProvider({children}: any) {
  const [state, dispatch] = React.useReducer(launchReducer, {
    isSecondLaunch: false,
  });

  return (
    <LaunchStateContext.Provider value={state}>
      <LaunchDispatchContext.Provider value={dispatch}>{children}</LaunchDispatchContext.Provider>
    </LaunchStateContext.Provider>
  );
}

function useLaunchState() {
  const context = React.useContext(LaunchStateContext);
  if (context === undefined) {
    throw new Error('useCountState must be used within a CountProvider');
  }
  return context;
}

function useLaunchDispatch() {
  const context = React.useContext(LaunchDispatchContext);
  if (context === undefined) {
    throw new Error('useCountDispatch must be used within a CountProvider');
  }
  return context;
}

export {LaunchProvider, useLaunchState, useLaunchDispatch};
