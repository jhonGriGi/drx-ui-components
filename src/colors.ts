export type ColorVariant = {
    primary: string;
    two: string;
    three: string;
    four: string;
    five: string;
    six: string;
    seven: string;
    eight: string;
    nine: string;
    ten: string;
};

export type ColorsPalette = Record<string, ColorVariant>

export const COLORS_PALETTE: ColorsPalette = {
    violet: {
        primary: "#6C22FF",
        two: "#5206E9",
        three: "#7B38FF",
        four: "#8A4FFF",
        five: "#9C6AFF",
        six: "#AE85FF",
        seven: "#C0A0FF",
        eight: "#D4BEFF",
        nine: "#D4BEFF",
        ten: "#F4EEFF",
    },
    green: {
        primary: "#0DED8F",
        two: "#00CF78",
        three: "#29FAA2",
        four: "#4AFFB3",
        five: "#5BFFBA",
        six: "#82FFCA",
        seven: "#99FFD4",
        eight: "#B0FFDE",
        nine: "#D0FFEB",
        ten: "#E6FFF4",
    },
    yellow: {
        primary: "#FFD911",
        two: "#F6CE00",
        three: "#FFDE33",
        four: "#FFE350",
        five: "#FFE666",
        six: "#FFEB81",
        seven: "#FFEF99",
        eight: "#FFF3B2",
        nine: "#FFF6C5",
        ten: "#FFF9D6",
    },
    red: {
        primary: "#D80000",
        two: "#BD0404",
        three: "#ED1313",
        four: "#EF3434",
        five: "#FA5151",
        six: "#FF6B6B",
        seven: "#FF8787",
        eight: "#FFA8A8",
        nine: "#FFBBBB",
        ten: "#FFDEDE",
    },
    orange: {
        primary: "#FF9900",
        two: "#EC8E00",
        three: "#FEA115",
        four: "#FFAF37",
        five: "#FFC061",
        six: "#FFC979",
        seven: "#FFD28F",
        eight: "#FFDCA7",
        nine: "#FFE5BF",
        ten: "#FFECCF",
    },
    black: {
        primary: "#222222",
        two: "#121212",
        three: "#393939",
        four: "#4E4E4E",
        five: "#696868",
        six: "#838383",
        seven: "#9B9B9B",
        eight: "#B4B4B4",
        nine: "#D9D8D8",
        ten: "#E7E7E7",
    },
};
