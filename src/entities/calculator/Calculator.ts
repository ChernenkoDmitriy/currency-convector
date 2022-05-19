import { IStorage, storage } from "../../libraries/storage";
import { MobXRepository } from "../../store/MobXRepository";
import { IRatesModel, ratesModel } from "../rates/Rates";
// import { IRate } from "./IRate";

export interface ICalculatorModal {
    firstOperandStore: number;
    secondOperandStore: number;
    operatorStore: any;
    readonly secondCalculatedRowStore: number;
}

class CalculatorModal implements ICalculatorModal {
    private firstOperandStore = new MobXRepository<number>(0);
    private secondOperandStore = new MobXRepository<number>(0);
    private operatorStore = new MobXRepository<string>('');

    constructor(private ratesModel: IRatesModel) {

    }

    get firstOperand() {
        return this.firstOperandStore.data;
    }

    set firstOperand(data: number | null) {
        this.firstOperandStore.save(data);
    }

    get secondOperand() {
        return this.secondOperandStore.data;
    }

    set secondOperand(data: number | null) {
        this.secondOperandStore.save(data);
    }

    get operator() {
        return this.operatorStore.data;
    }

    set operator(data: string | null) {
        this.operatorStore.save(data);
    }

    calculateResult() {
        const calculatedResult = this.firstOperand + this.operator + this.secondOperand;
        return calculatedResult
    }

    // get secondCalculatedRow() {
    //     return this.secondCalculatedRowStore.data;
    // }

    private calculateRate() {
        const calculatedAmount = this.firstCalculatedRow * this.ratesModel.rate
        return calculatedAmount
    }
}

export const calculatorModal = new CalculatorModal(ratesModel);
