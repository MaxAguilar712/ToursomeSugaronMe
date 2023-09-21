const database = {
    bands: [{
        id: 1,
        name: "Type O Negative",
        genre: "Gothic Rock",
        members: 4,
        year: 1989,

    },{
        id: 2,
        name: "The Cure",
        genre: "Alternative",
        members: 5,
        year: 1978,

    },{
        id: 3,
        name: "Megadeth",
        genre: "Thrash Metal",
        members: 4,
        year: 1983,

    },{
        id: 4,
        name: "Joy Division",
        genre: "Post-punk",
        members: 4,
        year: 1976,

    },{
        id: 5,
        name: "Tool",
        genre: "Progressive Rock",
        members: 4,
        year: 1990,

    },{
        id: 6,
        name: "Nine Inch Nails",
        genre: "Industrial Rock",
        members: 5,
        year: 1988,

    }],
    venues: [{
        id: 1, name: "The Korn Field", address: "94 oildale California", squarefeet: 19940,
    }, {
        id: 2, name: "The Dark Side of the Moon", address: 6.00, squarefeet: 1973,
    },{
        id: 3, name: "the Red Hot Chili Pepper", address: 6.00, squarefeet: 69420,
    },{
        id: 4, name: "Hotel California", address: 6.00, squarefeet: 5318008,
    },{
        id: 5, name: "The Skinny Puppy", address: 6.00, squarefeet: 1986,
    }],
    bookings: [{
        id: 1, venueId: 2, bandId: 5, date: "07/14/24"
    }, {
        id: 2, venueId: 1, bandId: 1, date: "08/18/24"
    }, {
        id: 3, venueId: 5, bandId: 6, date: "01/02/24"
    }]
}

export const getBands = () => {
    return database.bands.map(bands => ({...bands}))
}

export const getVenues = () => {
    return database.venues.map(venues => ({...venues}))
}

export const getBookings = () => {
    return database.bookings.map(bookings => ({...bookings}))
}

