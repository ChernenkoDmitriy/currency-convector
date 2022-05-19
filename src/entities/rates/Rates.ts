import { IStorage, storage } from "../../libraries/storage";
import { MobXRepository } from "../../store/MobXRepository";
import { IRate } from "./IRate";

export interface IRatesModel {
    firstRate: IRate | null;
    secondRate: IRate | null;
    ralesList: string[];
    rate: number;
}

class RatesModel implements IRatesModel {
    private firstRateStore = new MobXRepository<IRate | null>();
    private secondRateStore = new MobXRepository<IRate>();
    private ralesListStore = new MobXRepository<string[]>([]);

    constructor(private storage: IStorage) {
        this.load();
    }

    private persistRatesList = (data: string[]) => {
        Array.isArray(data) && this.storage.set('RATE_LIST', data);
    }

    private load = () => {
        this.storage.get('RATE_LIST')
            .then(data => { data && this.ralesListStore.save(data); })
            .catch(error => console.warn('RatesModel -> ralesList: ', error));
    }

    get firstRate() {
        return this.firstRateStore.data;
    }

    set firstRate(data: IRate | null) {
        this.firstRateStore.save(data);
    }

    get secondRate() {
        return this.secondRateStore.data;
    }

    set secondRate(data: IRate | null) {
        this.secondRateStore.save(data);
    }

    get ralesList() {
        return this.ralesListStore.data || [];
    }

    set ralesList(data: string[]) {
        this.ralesListStore.save(data);
        this.persistRatesList(data);
    }

    get rate() {
        return this.firstRate?.rates[this.secondRate?.base_code]
    }

}

export const ratesModel = new RatesModel(storage);
