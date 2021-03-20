import {INC_COUNTER, RESET_COUNTER, DEC_COUNTER} from '../action-types';

export const incCounter = () => ({type: INC_COUNTER});
export const decCounter = () => ({type: DEC_COUNTER});
export const resetCounter = () => ({type: RESET_COUNTER});
