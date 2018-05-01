import { Boat, DispatchTime } from './Boat';

export const BOATS: Boat[] = [
    new Boat('1', 'Crystal 1'),
    new Boat('2', 'Crystal 2'),
    new Boat('3', 'Crystal 3'),
];

export const DISPATCHTIMES: DispatchTime[] = [
    new DispatchTime(
        1,
        { hours: 7, minutes: 0 },
        { hours: 11, minutes: 30 },
        'Morning boat'),
    new DispatchTime(
        2,
            { hours: 12, minutes: 0 },
            { hours: 17, minutes: 0 },
            'Afternoon boat'),
    new DispatchTime(
        3,
        { hours: 18, minutes: 0 },
        { hours: 20, minutes: 0 },
        'Nigth boat'),
    new DispatchTime(
        4,
        null,
        null,
        'Custom Dispatch time')
];
