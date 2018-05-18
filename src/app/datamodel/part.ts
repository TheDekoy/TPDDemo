import { Money } from "./money";

export interface Part {

    code: string;
    description: string;
    unit: string;
    price: Money;
}