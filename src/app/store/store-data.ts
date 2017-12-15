import { Participant } from "../../../shared/model/participant";
import { Thread } from "../../../shared/model/thread";
import { Message } from "../../../shared/model/message";

export const INITIAL_STOREDATA: StoreData = {
    participants: {},
    threads: {},
    messages: {}
};

export interface StoreData {
    participants: {[key: number]: Participant};
    threads: {[key: number]: Thread};
    messages: {[key: number]: Message};
};

