import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "uandr",
    name: "Embeddable House",
    chainId: "galileo-4",
    createdDate: "2024-12-30T19:01:01.148Z",
    modifiedDate: "2024-12-30T19:01:01.148Z",
    id: "andromeda",
    collections: [
        {
            exchange:
                "andr103r4y4q3tugz52xvptewncufvdsmnrwlge4qn8ljma22k6cxy3kqp5zl0w",
            cw20: "andr1f2exx552sm62gnxxjpe7v850mqwjyyccfa3z9dnjflqh5aq64lvs2ed976",
            name: "CAN Exchange",
            type: ICollectionType.EXCHANGE,
            id: "embeddables-exchange-1",
        },
    ],
};

export default CONFIG;
