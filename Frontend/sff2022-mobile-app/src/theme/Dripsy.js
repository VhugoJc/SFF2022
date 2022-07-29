import {makeTheme} from "dripsy";

export const theme = makeTheme({
    colors: {
        $primary: '#1D3557',
        $secondary: '#457B9D',
        $blueLight:'#A8DADC',
        $light:'#F1FAEE',
        $red:'#E63946',
        $background:'#FFFFFF'
    },
    space: {
        // recommended: set 0 first, then double for consistent nested spacing
        $0: 0,
        $1: 4,
        $2: 8,
        $3: 16,
        $4: 32,
        $5: 64,
        $6: 128,
        $7: 256,
    },
    fontSizes: {
        $0: 11,
        $1: 15,
        $2: 17,
        $3: 22,
    },
    text: {
        h1: {
            fontSize: '$2', 
        },
        p: {
            fontSize: '$0',
            mb: '$3',
        },
    },
})