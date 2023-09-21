import { getVenues, getBands, getBookings } from "./database.js"

const venues = getVenues()
const bands = getBands()
const bookings = getBookings()

const findVenue = (booking, allVenues) => {
    let bookingVenue = ""

    for (const venue of allVenues) {
        if (venue.id === booking.venueId) {
            bookingVenue = venue
        }
    }

    return bookingVenue
}

const findBand = (booking, allBands) => {
    let bookingBand = ""

    for (const band of allBands) {
        if (band.id === booking.bandId) {
            bookingBand = band
        }
    }

    return bookingBand
}

export const Bookings = () => {
    let html = ""
    html = "<ul>"

    for (const booking of bookings) {
        const band = findBand(booking, bands)
        const venue = findVenue(booking, venues)

        html += `<li>${band.name} is playing at ${venue.name} on ${new Date(booking.date).toLocaleDateString()}</li>`
    }

    html += "</ul>"

    return html
}


