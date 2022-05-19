import { MobXRepository } from "../../store/MobXRepository";
import { IRatesModel, ratesModel } from "../rates/Rates";

export interface ICalculatorModal {
    firstRateRow: string;
    operator: string;
    readonly secondRateRow: string;
    calculateResult: () => void;
}

class CalculatorModal implements ICalculatorModal {
    private firstRateRowStore = new MobXRepository<string>('0');
    private secondRateRowStore = new MobXRepository<string>('0');
    private operandStore = new MobXRepository<string>('0');
    private operatorStore = new MobXRepository<string>('');

    constructor(private ratesModel: IRatesModel) {

    }

    get firstRateRow() {
        return this.firstRateRowStore.data || '0';
    }

    set firstRateRow(data: string) {
        this.firstRateRowStore.save(data);
        this.calculateRate();
    }

    get secondRateRow() {
        return this.secondRateRowStore.data || '0';
    }

    get operator() {
        return this.operatorStore.data || '';
    }

    set operator(data: string) {
        this.operatorStore.save(data);
        this.operandStore.save(this.firstRateRow);
        this.firstRateRow = '0';
    }

    calculateResult() {
        if (this.operator) {
            const calculatedResult = this.operandStore.data + this.operator + this.firstRateRow;
            const result = eval(calculatedResult);
            this.firstRateRow = String(Math.trunc(result * 100) / 100);
        }
    }

    calculateClear() {
        this.firstRateRow = '0';
        this.operandStore.save('0');
        this.operator = '';
    }

    calculateDelete() {
        if (this.firstRateRow.length === 1) {
            this.firstRateRow = '0';
        } else {
            this.firstRateRow = this.firstRateRow.slice(0, -1);
        }

    }

    calculateRate() {
        const calculatedAmount = Number(this.firstRateRow) * this.ratesModel.rate;
        this.secondRateRowStore.save(String(Math.trunc(calculatedAmount * 100) / 100));
    }
}

export const calculatorModal = new CalculatorModal(ratesModel);