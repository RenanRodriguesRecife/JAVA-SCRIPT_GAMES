import { Fighter } from './Fighter.js';

export class Ryu extends Fighter{
    constructor(x, y, velocity){
        super('Ryu', x, y, velocity);
        this.image = document.querySelector('img[alt="ryu"');
        this.frames = new Map([ 
            ['forwards-1', [[9, 136, 53, 83],[27,81]]],
            ['forwards-2', [[78, 131, 60, 89],[35,86]]],
            ['forwards-3', [[152, 128, 64, 92],[35,87]]],
            ['forwards-4', [[229, 130, 63, 90],[29,88]]],
            ['forwards-5', [[307, 128, 54, 91],[25,87]]],
            ['forwards-6', [[371, 128, 50, 89],[25,86]]],
        ]);
    }
    
}
