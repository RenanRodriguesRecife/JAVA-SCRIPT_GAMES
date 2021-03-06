import { Fighter } from './Fighter.js';

export class Ken extends Fighter{
    constructor(x, y, velocity){
        super('Ken', x, y, velocity);
        this.image = document.querySelector('img[alt="ken"');
        this.frames = new Map([
            ['forwards-1', [[8, 872, 53, 83],[27,81]]],
            ['forwards-2', [[78, 867, 60, 80],[35,86]]],
            ['forwards-3', [[140, 866, 64, 90],[35,87]]],
            ['forwards-4', [[215, 865, 63, 89],[29,88]]],
            ['forwards-5', [[288, 866, 54, 89],[25,87]]],
            ['forwards-6', [[357, 867, 50, 89],[25,86]]],
        ]);
    }
}