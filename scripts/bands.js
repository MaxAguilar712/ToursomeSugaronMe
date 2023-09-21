import { getBands } from "./database.js"
import { getBookings } from "./database.js"

const bands = getBands()
const bookings = getBookings()

export const Bands = () => {
    let html = "<ul>"

    for (const band of bands) {
        html += `<li id="band--${band.id}">${band.name}</li>`
    }

    html += "</ul>"

    return html
}


const bandBookings = (band) => {
    let fulfilledBookings = 0
    for (const booking of bookings) {
        if (booking.bandId === band.id) {
            fulfilledBookings++
        }
    }
    return fulfilledBookings
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("band")) {
            const [, bandId] = itemClicked.id.split("--")
            for (const band of bands) {
                if (band.id === parseInt(bandId)) {
                    const bookingCount = bandBookings(band)
                    window.alert(` ${band.name} is playing ${bookingCount} shows. ${band.name} is a ${band.genre} band, has ${band.members} members. and was formed in ${band.year}. `)
                }
            } 
        }
    }
)

