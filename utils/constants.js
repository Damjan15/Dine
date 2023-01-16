// Highlights
import salmonMobile from "../public/images/homepage/salmon-mobile.jpg";
import salmonLarge from "../public/images/homepage/salmon-desktop-tablet.jpg";
import beefMobile from "../public/images/homepage/beef-mobile.jpg";
import beefLarge from "../public/images/homepage/beef-desktop-tablet.jpg";
import chocolateMobile from "../public/images/homepage/chocolate-mobile.jpg";
import chocolateLarge from "../public/images/homepage/chocolate-desktop-tablet.jpg";

// Slides
import familyGatheringMobile from "../public/images/homepage/family-gathering-mobile.jpg";
import familyGatheringTablet from "../public/images/homepage/family-gathering-tablet.jpg";
import familyGatheringDesktop from "../public/images/homepage/family-gathering-desktop.jpg";
import specialEventsMobile from "../public/images/homepage/special-events-mobile.jpg";
import specialEventsTablet from "../public/images/homepage/special-events-tablet.jpg";
import specialEventsDesktop from "../public/images/homepage/special-events-desktop.jpg";
import socialEventsMobile from "../public/images/homepage/social-events-mobile.jpg";
import socialEventsTablet from "../public/images/homepage/social-events-tablet.jpg";
import socialEventsDesktop from "../public/images/homepage/social-events-desktop.jpg";


export const highlights = [
    {
        id: "salmon-fillet",
        mobileThumbnail: salmonMobile,
        largeThumbnail: salmonLarge,
        title: "Seared Salmon Fillet",
        description: "Our locally sourced salmon served with a refreshing buckwheat summer salad.",
        isLast: false,
    },
    {
        id: "filet-mignon",
        mobileThumbnail: beefMobile,
        largeThumbnail: beefLarge,
        title: "Rosemary Filet Mignon",
        description: "Our prime beef served to your taste with a delicious choice of seasonal sides.",
        isLast: false,
    },
    {
        id: "chocolate-mousse",
        mobileThumbnail: chocolateMobile,
        largeThumbnail: chocolateLarge,
        title: "Summer Fruit Chocolate Mousse",
        description: "Creamy mousse combined with summer fruits and dark chocolate shavings.",
        isLast: true

    }
]

export const slides = [
    {
        id: "family-gathering",
        title: "Family Gathering",
        mobileThumbnail: familyGatheringMobile,
        tabletThumbnail: familyGatheringTablet,
        desktopThumbnail: familyGatheringDesktop,
        description: "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all."
    },
    {
        id: "special-events",
        title: "Special Events",
        mobileThumbnail: specialEventsMobile,
        tabletThumbnail: specialEventsTablet,
        desktopThumbnail: specialEventsDesktop,
        description: "Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal."
    },
    {
        id: "social-events",
        title: "Social Events",
        mobileThumbnail: socialEventsMobile,
        tabletThumbnail: socialEventsTablet,
        desktopThumbnail: socialEventsDesktop,
        description: "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone."
    },
]

export const footerAddresses = [
    {
        id: "address",
        title: "Marthwaite, Sedbergh"
    },
    {
        id: "cumbria",
        title: "Cumbria"
    },
    {
        id: "phone",
        title: "+00 44 123 4567"
    }
]

export const footerOpenTimes = [
    {
        id: "open-times",
        title: "Open Times"
    },
    {
        id: "weekday-open-time",
        title: "Mon - Fri: 09:00 AM - 10:00 PM"
    },
    {
        id: "weekend-open-time",
        title: "SAT - SUN: 09:00 AM - 11:30 PM"
    }
]