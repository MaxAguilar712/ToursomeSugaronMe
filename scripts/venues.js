import { getVenues } from "./database.js"
import { getBookings } from "./database.js"
import { getBands } from "./database.js"

const bookings = getBookings()
const bands = getBands()

const venues = getVenues()

export const Venues = () => {
    let html = "<ul>"

    for (const venue of venues) {
        html += `<li id="venue--${venue.id}">${venue.name}</li>`
    }

    html += "</ul>"

    return html
}

const venueBookings = (venue) => {
    let fulfilledBookings = 0
    for (const booking of bookings) {
        if (booking.venueId === venue.id) {
            fulfilledBookings++
        }
    }
    return fulfilledBookings
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("venue")) {
            const [, venueId] = itemClicked.id.split("--")
            for (const venue of venues) {
                if (venue.id === parseInt(venueId)) {
                    const bookingCount = venueBookings(venue)
                    window.alert(` ${venue.name} has ${bookingCount} shows booked. `)
                }
            } 
        }
    }
)



// document.addEventListener(
//     "click",
//     (clickEvent) => {
//         const itemClicked = clickEvent.target
//         if (itemClicked.id.startsWith("venue")) {
//             const [, venueId] = itemClicked.id.split("--")
            
//             for (const venue of venues) {
//                 if (venue.id === parseInt(venueId)) {
//                     window.alert(` ${venue.name} is ${venue.squarefeet} square feet `)
//                 }
//             }
//         }
//     }
// )