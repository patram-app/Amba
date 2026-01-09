
export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "JewelryStore",
        name: "Amba Jewellers",
        image: "https://www.ambajewellershisar.com/og-image.jpg",
        "@id": "https://www.ambajewellershisar.com",
        url: "https://www.ambajewellershisar.com",
        telephone: "+919996767888",
        address: {
            "@type": "PostalAddress",
            streetAddress: "Petrol Pump, opp. PLA, Jai Dev Nagar",
            addressLocality: "Hisar",
            addressRegion: "Haryana",
            postalCode: "125001",
            addressCountry: "IN",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: 29.1492, // Approximate for Hisar PLA area
            longitude: 75.7217,
        },
        openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
            ],
            opens: "10:00",
            closes: "20:00",
        },
        sameAs: [
            "https://www.instagram.com/ambajewellers", // Placeholder, user can update
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
