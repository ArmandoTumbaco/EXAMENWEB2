import { IBus } from ".";

const buses: IBus[] = [
    {
        id: 1,
        busNumber: 101,
        brand: "Mercedes",
        model: "Sprinter",
        capacity: 40,
        routes: [
            { id: 1, start: "Punto A", destination: "Punto B", distance: 100, busId: 1 },
            { id: 2, start: "Punto B", destination: "Punto C", distance: 100, busId: 1 },
            { id: 3, start: "Punto C", destination: "Punto D", distance: 120, busId: 1 }
        ]
    },
    {
        id: 2,
        busNumber: 102,
        brand: "HINO",
        model: "Thunder",
        capacity: 40,
        routes: [
            { id: 4, start: "Punto X", destination: "Punto Y", distance: 200, busId: 2 },
            { id: 5, start: "Punto Y", destination: "Punto Z", distance: 180, busId: 2 },
            { id: 6, start: "Punto Z", destination: "Punto W", distance: 160, busId: 2 }
        ]
    },
    {
        id: 3,
        busNumber: 103,
        brand: "Ford",
        model: "Transit",
        capacity: 25,
        routes: [
            { id: 7, start: "Punto M", destination: "Punto N", distance: 80, busId: 3 },
            { id: 8, start: "Punto N", destination: "Punto O", distance: 90, busId: 3 },
            { id: 9, start: "Punto O", destination: "Punto P", distance: 110, busId: 3 }
        ]
    }
];

