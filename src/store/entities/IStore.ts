import { IUser } from "../../../modules/shared/entities/IUser";
import { IAppState } from "./IAppState";

export interface IStore {
    user: IUser,
    appState: IAppState,
};