import {makeTheme} from "dripsy";

export const theme = makeTheme({
    colors: {
        // $primary: '#1D3557',
        // $secondary: '#457B9D',
        // $light:'#F1FAEE',
        // $red:'#E63946',
        // $background:'#FFFFFF',
        // $primaryTransparent:"rgba(29,53,87,0.7)",
        // $grey:"#A6A6A6",
        // $lightGrey:'#D9D9D9',
        $primary: '#380B58',
        $secondary: '#D678F1',
        $blueLight:"rgba(215, 120, 241, 0.21)",
        $light:'#FFFFFF',
        $red:'#E63946',
        $background:'#f6f6f6ff',
        $primaryTransparent:"rgba(29,53,87,0.7)",
        $grey:"#A6A6A6",
        $lightGrey:'#D9D9D9',
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