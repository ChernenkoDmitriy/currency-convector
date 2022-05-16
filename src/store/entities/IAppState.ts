import { INetInfoState } from "../../../libs/netinfo";

export interface IAppState {
    isAuthorized: boolean,
    isAppLoaded: boolean,
    netConnection: INetInfoState;
};