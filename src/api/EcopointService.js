import axios from "axios";

const baseURL = 'http://localhost:8080/api/ecopoints'

export const ecopointService = {
    getEcopointById: async (id) => {
        const response = await axios.get(`${baseURL}/${id}`);
        return response.data
    },
    getEcopointsInBounds: async (userBounds, ecopointTypes, fractionTypes) => {
        const params = createEcopointsInBoundsParam(userBounds, ecopointTypes, fractionTypes);
      /*  const response = await axios.get(baseURL, {
            params: {...params}
        });*/

        return point;
    },
    getEcopointsInBoundsPagination: async (userBounds, ecopointTypes, fractionTypes, page, size) => {
        const params = createEcopointsInBoundsParam(userBounds, ecopointTypes, fractionTypes);
       /* return await axios.get(`${baseURL}/pagination`, {
            params: {...params, page, size}
        });*/
        return point.filter(p=> p.id <= 10);
    },
    searchEcopointsByName: async (name) => {
        const response = await axios.get(baseURL, {
            params: {name}
        })
        return response.data;
    }
};

const createEcopointsInBoundsParam = (userBounds, ecopointTypes, fractionTypes) => {
    const lowerLeftCoordinates = userBounds[1].join(",");
    const upperRightCoordinates = userBounds[0].join(",");
    const params = {};
    if (ecopointTypes && ecopointTypes.length === 1 && fractionTypes.length > 0) {
        params[ecopointTypes[0].type] = fractionTypes.join(",");
    } else if (ecopointTypes && ecopointTypes.length > 0) {
        params.ecopointTypes = ecopointTypes.map(ecopointType => ecopointType.id).join(",");
    }
    return {lowerLeftCoordinates, upperRightCoordinates, ...params}
}

const point = [
    {
        "id": 1,
        "address": "ул. Передовиков, 16к2",
        "position": {
            "type": "Point",
            "coordinates": [
                30.45883089,
                59.94542376
            ]
        },
        "name": "Квадрат",
        "ecopointTypes": [
            {
                "id": 1,
                "name": "Пункт сдачи"
            },
            {
                "id": 2,
                "name": "Экомагазин"
            },
            {
                "id": 3,
                "name": "Экомероприятие"
            }
        ]
    },
    {
        "id": 2,
        "address": "пр. Металлистов, д. 19/30",
        "position": {
            "type": "Point",
            "coordinates": [
                30.41503707,
                59.96486417
            ]
        },
        "name": "Фактура",
        "ecopointTypes": [
            {
                "id": 1,
                "name": "Пункт сдачи"
            },
            {
                "id": 3,
                "name": "Экомероприятие"
            }
        ]
    },
    {
        "id": 3,
        "address": "Большеохтинский пр., д. 19",
        "position": {
            "type": "Point",
            "coordinates": [
                30.41064907,
                59.9520745
            ]
        },
        "name": "Измерение",
        "ecopointTypes": [
            {
                "id": 1,
                "name": "Пункт сдачи"
            },
            {
                "id": 3,
                "name": "Экомероприятие"
            }
        ]
    },
    {
        "id": 4,
        "address": "пр. Энергетиков, д. 70, к.3",
        "position": {
            "type": "Point",
            "coordinates": [
                30.43487888,
                59.95199594
            ]
        },
        "name": "НЕО",
        "ecopointTypes": [
            {
                "id": 1,
                "name": "Пункт сдачи"
            },
            {
                "id": 2,
                "name": "Экомагазин"
            }
        ]
    },
    {
        "id": 5,
        "address": "Дегтярёва, 4А",
        "position": {
            "type": "Point",
            "coordinates": [
                30.43002154,
                59.95112892
            ]
        },
        "name": "Вкуссвил",
        "ecopointTypes": [
            {
                "id": 1,
                "name": "Пункт сдачи"
            }
        ]
    },
    {
        "id": 6,
        "address": "Уманский пер., 74",
        "position": {
            "type": "Point",
            "coordinates": [
                30.449851,
                59.9682623
            ]
        },
        "name": "Вкуссвил",
        "ecopointTypes": [
            {
                "id": 1,
                "name": "Пункт сдачи"
            },
            {
                "id": 2,
                "name": "Экомагазин"
            }
        ]
    },
    {
        "id": 7,
        "address": "ул. Ворошилова, 2АБ",
        "position": {
            "type": "Point",
            "coordinates": [
                30.45353123,
                59.92814888
            ]
        },
        "name": "Крышечки доброТЫ",
        "ecopointTypes": [
            {
                "id": 1,
                "name": "Пункт сдачи"
            }
        ]
    },
    {
        "id": 8,
        "address": "Партизанская ул., 11Г",
        "position": {
            "type": "Point",
            "coordinates": [
                30.43404002,
                59.94635941
            ]
        },
        "name": "Второй шанс",
        "ecopointTypes": [
            {
                "id": 1,
                "name": "Пункт сдачи"
            }
        ]
    },
    {
        "id": 9,
        "address": "Проспект Маршака 24к1",
        "position": {
            "type": "Point",
            "coordinates": [
                30.469519,
                59.95449367
            ]
        },
        "name": "Экошанс",
        "ecopointTypes": [
            {
                "id": 1,
                "name": "Пункт сдачи"
            }
        ]
    },
    {
        "id": 10,
        "address": "просп. Энергетиков, 59",
        "position": {
            "type": "Point",
            "coordinates": [
                30.438176,
                59.97153356
            ]
        },
        "name": "NAME",
        "ecopointTypes": [
            {
                "id": 1,
                "name": "Пункт сдачи"
            }
        ]
    },
    {
        "id": 11,
        "address": "ш. Революции, 69",
        "position": {
            "type": "Point",
            "coordinates": [
                30.46562,
                59.9623293
            ]
        },
        "name": "NAME",
        "ecopointTypes": [
            {
                "id": 1,
                "name": "Пункт сдачи"
            }
        ]
    },
    {
        "id": 12,
        "address": "Пискарёвский проспект, 37",
        "position": {
            "type": "Point",
            "coordinates": [
                30.420735,
                59.97776693
            ]
        },
        "name": "NAME",
        "ecopointTypes": [
            {
                "id": 2,
                "name": "Экомагазин"
            }
        ]
    },
    {
        "id": 13,
        "address": "Адресс ",
        "position": {
            "type": "Point",
            "coordinates": [
                30.42867789,
                59.95296132
            ]
        },
        "name": "NAME",
        "ecopointTypes": [
            {
                "id": 2,
                "name": "Экомагазин"
            }
        ]
    },
    {
        "id": 14,
        "address": "Адресс ",
        "position": {
            "type": "Point",
            "coordinates": [
                30.43121299,
                59.95202818
            ]
        },
        "name": "NAME",
        "ecopointTypes": [
            {
                "id": 2,
                "name": "Экомагазин"
            }
        ]
    },
    {
        "id": 15,
        "address": "Адресс ",
        "position": {
            "type": "Point",
            "coordinates": [
                30.42757821,
                59.952016
            ]
        },
        "name": "NAME",
        "ecopointTypes": [
            {
                "id": 2,
                "name": "Экомагазин"
            }
        ]
    },
    {
        "id": 16,
        "address": "Адресс ",
        "position": {
            "type": "Point",
            "coordinates": [
                30.42101369,
                59.951311
            ]
        },
        "name": "NAME",
        "ecopointTypes": [
            {
                "id": 3,
                "name": "Экомероприятие"
            }
        ]
    },
    {
        "id": 17,
        "address": "Адресс ",
        "position": {
            "type": "Point",
            "coordinates": [
                30.41954134,
                59.9511916
            ]
        },
        "name": "NAME",
        "ecopointTypes": [
            {
                "id": 3,
                "name": "Экомероприятие"
            }
        ]
    },
    {
        "id": 18,
        "address": "Адресс ",
        "position": {
            "type": "Point",
            "coordinates": [
                30.4156926,
                59.95239498
            ]
        },
        "name": "NAME",
        "ecopointTypes": [
            {
                "id": 3,
                "name": "Экомероприятие"
            }
        ]
    },
    {
        "id": 19,
        "address": "Адресс ",
        "position": {
            "type": "Point",
            "coordinates": [
                30.41425069,
                59.95202295
            ]
        },
        "name": "NAME",
        "ecopointTypes": [
            {
                "id": 3,
                "name": "Экомероприятие"
            }
        ]
    },
    {
        "id": 20,
        "address": "ул. Передовиков, 16к2",
        "position": {
            "type": "Point",
            "coordinates": [
                30.46883089,
                59.95542376
            ]
        },
        "name": "Квадрат",
        "ecopointTypes": []
    },
    {
        "id": 21,
        "address": "пр. Металлистов, д. 19/30",
        "position": {
            "type": "Point",
            "coordinates": [
                30.41403707,
                59.99486417
            ]
        },
        "name": "Фактура",
        "ecopointTypes": []
    },
    {
        "id": 22,
        "address": "Большеохтинский пр., д. 19",
        "position": {
            "type": "Point",
            "coordinates": [
                30.41364907,
                59.9220745
            ]
        },
        "name": "Измерение",
        "ecopointTypes": []
    },
    {
        "id": 23,
        "address": "пр. Энергетиков, д. 70, к.3",
        "position": {
            "type": "Point",
            "coordinates": [
                30.45487888,
                59.98199594
            ]
        },
        "name": "НЕО",
        "ecopointTypes": []
    },
    {
        "id": 24,
        "address": "Дегтярёва, 4А",
        "position": {
            "type": "Point",
            "coordinates": [
                30.43442154,
                59.92312892
            ]
        },
        "name": "Вкуссвил",
        "ecopointTypes": []
    },
    {
        "id": 25,
        "address": "Уманский пер., 74",
        "position": {
            "type": "Point",
            "coordinates": [
                30.432851,
                59.93423262
            ]
        },
        "name": "Вкуссвил",
        "ecopointTypes": []
    },
    {
        "id": 26,
        "address": "ул. Ворошилова, 2АБ",
        "position": {
            "type": "Point",
            "coordinates": [
                30.45342312,
                59.96514888
            ]
        },
        "name": "Крышечки доброТЫ",
        "ecopointTypes": []
    },
    {
        "id": 27,
        "address": "Партизанская ул., 11Г",
        "position": {
            "type": "Point",
            "coordinates": [
                30.44644002,
                59.96546359
            ]
        },
        "name": "Второй шанс",
        "ecopointTypes": []
    },
    {
        "id": 28,
        "address": "Проспект Маршака 24к1",
        "position": {
            "type": "Point",
            "coordinates": [
                30.4343519,
                59.95464494
            ]
        },
        "name": "Экошанс",
        "ecopointTypes": []
    },
    {
        "id": 29,
        "address": "просп. Энергетиков, 59",
        "position": {
            "type": "Point",
            "coordinates": [
                30.4326176,
                59.97343336
            ]
        },
        "name": "NAME",
        "ecopointTypes": []
    },
    {
        "id": 30,
        "address": "ш. Революции, 69",
        "position": {
            "type": "Point",
            "coordinates": [
                30.465122,
                59.94523293
            ]
        },
        "name": "NAME",
        "ecopointTypes": []
    },
    {
        "id": 31,
        "address": "Пискарёвский проспект, 37",
        "position": {
            "type": "Point",
            "coordinates": [
                30.443735,
                59.93476693
            ]
        },
        "name": "NAME",
        "ecopointTypes": []
    },
    {
        "id": 32,
        "address": "Адресс ",
        "position": {
            "type": "Point",
            "coordinates": [
                30.34867789,
                59.92396132
            ]
        },
        "name": "NAME",
        "ecopointTypes": []
    },
    {
        "id": 35,
        "address": "Адресс ",
        "position": {
            "type": "Point",
            "coordinates": [
                30.42450137,
                59.9651311
            ]
        },
        "name": "NAME",
        "ecopointTypes": []
    },
    {
        "id": 36,
        "address": "Адресс ",
        "position": {
            "type": "Point",
            "coordinates": [
                30.47854134,
                59.95651916
            ]
        },
        "name": "NAME",
        "ecopointTypes": []
    },
    {
        "id": 37,
        "address": "Адресс ",
        "position": {
            "type": "Point",
            "coordinates": [
                30.47872598,
                59.9789498
            ]
        },
        "name": "NAME",
        "ecopointTypes": []
    },
    {
        "id": 39,
        "address": "ул. Передовиков, 16к2",
        "position": {
            "type": "Point",
            "coordinates": [
                30.41230892,
                59.91223762
            ]
        },
        "name": "Квадрат",
        "ecopointTypes": []
    },
    {
        "id": 40,
        "address": "пр. Металлистов, д. 19/30",
        "position": {
            "type": "Point",
            "coordinates": [
                30.41443404,
                59.94364171
            ]
        },
        "name": "Фактура",
        "ecopointTypes": []
    },
    {
        "id": 41,
        "address": "Большеохтинский пр., д. 19",
        "position": {
            "type": "Point",
            "coordinates": [
                30.43464907,
                59.9234745
            ]
        },
        "name": "Измерение",
        "ecopointTypes": []
    },
    {
        "id": 43,
        "address": "Дегтярёва, 4А",
        "position": {
            "type": "Point",
            "coordinates": [
                30.34421536,
                59.93412892
            ]
        },
        "name": "Вкуссвил",
        "ecopointTypes": []
    },
    {
        "id": 44,
        "address": "Уманский пер., 74",
        "position": {
            "type": "Point",
            "coordinates": [
                30.433451,
                59.93343262
            ]
        },
        "name": "Вкуссвил",
        "ecopointTypes": []
    },
    {
        "id": 45,
        "address": "ул. Ворошилова, 2АБ",
        "position": {
            "type": "Point",
            "coordinates": [
                30.43442312,
                59.94348877
            ]
        },
        "name": "Крышечки доброТЫ",
        "ecopointTypes": []
    },
    {
        "id": 46,
        "address": "Партизанская ул., 11Г",
        "position": {
            "type": "Point",
            "coordinates": [
                30.43444002,
                59.96346359
            ]
        },
        "name": "Второй шанс",
        "ecopointTypes": []
    },
    {
        "id": 47,
        "address": "Проспект Маршака 24к1",
        "position": {
            "type": "Point",
            "coordinates": [
                30.4378519,
                59.95754494
            ]
        },
        "name": "Экошанс",
        "ecopointTypes": []
    },
    {
        "id": 48,
        "address": "просп. Энергетиков, 59",
        "position": {
            "type": "Point",
            "coordinates": [
                30.43278,
                59.93443336
            ]
        },
        "name": "NAME",
        "ecopointTypes": []
    },
    {
        "id": 49,
        "address": "ш. Революции, 69",
        "position": {
            "type": "Point",
            "coordinates": [
                30.464353,
                59.94543195
            ]
        },
        "name": "NAME",
        "ecopointTypes": []
    },
    {
        "id": 50,
        "address": "Пискарёвский проспект, 37",
        "position": {
            "type": "Point",
            "coordinates": [
                30.4344,
                59.95654265
            ]
        },
        "name": "NAME",
        "ecopointTypes": []
    },
    {
        "id": 51,
        "address": "Адресс ",
        "position": {
            "type": "Point",
            "coordinates": [
                30.45467789,
                59.95464613
            ]
        },
        "name": "NAME",
        "ecopointTypes": []
    },
    {
        "id": 54,
        "address": "Адресс ",
        "position": {
            "type": "Point",
            "coordinates": [
                30.44531369,
                59.987811
            ]
        },
        "name": "NAME",
        "ecopointTypes": []
    },
    {
        "id": 55,
        "address": "Адресс ",
        "position": {
            "type": "Point",
            "coordinates": [
                30.42321343,
                59.9231916
            ]
        },
        "name": "NAME",
        "ecopointTypes": []
    },
    {
        "id": 56,
        "address": "Адресс ",
        "position": {
            "type": "Point",
            "coordinates": [
                30.4235979,
                59.9569498
            ]
        },
        "name": "NAME",
        "ecopointTypes": []
    }
]