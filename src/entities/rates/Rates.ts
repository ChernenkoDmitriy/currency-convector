import { IStorage, storage } from "../../libraries/storage";
import { MobXRepository } from "../../store/MobXRepository";
import { IRate } from "./IRate";

export interface IRatesModel {

}

class RatesModel implements IRatesModel {
    private firstRateStore = new MobXRepository<IRate>();
    private secondRateStore = new MobXRepository<IRate>();
    private ralesListStore = new MobXRepository<IRate[]>([]);

    constructor(private storage: IStorage) {
        this.load();
    }

    private persistRatesList = (data: IRate[]) => {
        Array.isArray(data) && this.storage.set('RATE_LIST', data);
    }

    private load = () => {
        this.storage.get('RATE_LIST')
            .then(data => { data && this.ralesListStore.save(data); })
            .catch(error => console.warn('RatesModel -> ralesList: ', error));
    }

    get ralesList() {
        return this.ralesListStore.data || [];
    }

    set ralesList(data: IRate[]) {
        this.ralesListStore.save(data);
        this.persistRatesList(data);
    }

}

export const ratesModel = new RatesModel(storage);
