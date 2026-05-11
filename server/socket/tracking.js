let location = { lat: 12.9716, lng: 77.5946 }; // Initial location

const path = [
    { lat: 12.9716, lng: 77.5946 },
    { lat: 12.9726, lng: 77.5956 },
    { lat: 12.9736, lng: 77.5966 },
    { lat: 12.9746, lng: 77.5976 },
    { lat: 12.9756, lng: 77.5986 }
];

let i=0;

export default function startTracking(io) {
    setInterval(() => {
        
            location = path[i];
            console.log("sending location", location);
            io.emit("locationUpdate", location);
            i=(i + 1) % path.length; // Loop through the path
    }, 1000);
}