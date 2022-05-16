import { INetInfoState } from "../../../../libs/netinfo";
import { IAction } from "../../entities/IAction";
import { IAppState } from "../../entities/IAppState";

const initialState: IAppState = {
	isAuthorized: false,
	isAppLoaded: false,
	netConnection: {} as INetInfoState,
};

export const appState = (state = initialState, action: IAction<boolean | INetInfoState>) => {
	const { type, payload } = action;

	switch (type) {
		case 'UPDATE_NET_CONNECTION':
			if (typeof payload === 'object') {
				state.netConnection = payload;
			};
			return { ...state };
		case 'SET_IS_AUTHORIZE':
			if (typeof payload === 'boolean') {
				state.isAuthorized = payload;
			};
			return { ...state };
		case 'SET_IS_APP_LOADED':
			if (typeof payload === 'boolean') {
				state.isAppLoaded = payload;
			};
			return { ...state };
		default:
			return state;
	}
};