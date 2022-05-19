import { IStorage, storage } from "../../libraries/storage";
import { MobXRepository } from "../../store/MobXRepository";

export interface ISettingsModel {
    vibration: boolean;
}

class SettingsModel implements ISettingsModel {
    private vibrationStore = new MobXRepository<boolean | null>(false);

    constructor(private storage: IStorage) {
        this.load();
    }

    private persistSettings = (data: string[]) => {
        Array.isArray(data) && this.storage.set('SETTINGS', data);
    }

    private load = () => {
        this.storage.get('SETTINGS')
            .then(data => { })
            .catch(error => console.warn('SettingsModel -> load: ', error));
    }

    get vibration() {
        return this.vibrationStore.data || false;
    }

    set vibration(data: boolean) {
        this.vibrationStore.save(data);
        // this.persistSettings(data);
    }

}

export const settingsModel = new SettingsModel(storage);
