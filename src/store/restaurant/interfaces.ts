export interface ISiteConfig {
    id: number;
    venueId: number;
    bannerImage: string;
    backgroundColour: string;
    primaryColour: string;
    primaryColourHover: string;
    navBackgroundColour: string;
}
export interface IRestaurantData {
    id: number;
    name: string;
    internalName: string;
    description: string | null;
    liveFlag: number;
    demoFlag: number;
    address1: string;
    address2: string;
    address3: string | null;
    city: string;
    county: string;
    postcode: string;
    country: string;
    timezoneOffset: string;
    locale: string;
    timeZone: string;
    webSettings: ISiteConfig;
    ccy: string;
    ccySymbol: string;
    currency: string;
}
