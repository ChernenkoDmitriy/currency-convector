import { INetInfoState } from "../../../../libs/netinfo";

export const setIsAuthorized = (payload: boolean) => ({ type: 'SET_IS_AUTHORIZE', payload });

export const setIsAppLoaded = (payload: boolean) => ({ type: 'SET_IS_APP_LOADED', payload });

export const updateNetConnection = (payload: INetInfoState) => ({ type: 'UPDATE_NET_CONNECTION', payload });