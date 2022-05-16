import { IStore } from "../../entities/IStore";

export const selectIsAuthorized = (store: IStore) => store.appState.isAuthorized;

export const selectIsAppLoaded = (store: IStore) => store.appState.isAppLoaded;

export const selectIsNetConnection = (store: IStore) => store.appState.netConnection;
