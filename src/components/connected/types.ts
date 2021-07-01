import store from "../../store";

export type Dispatch = typeof store.dispatch;

export interface TodoOwnProps {
    id: number;
}