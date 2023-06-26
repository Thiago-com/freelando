import { ThemeProvider } from "@emotion/react"

const tema = {
    cores: {
        branco: '',
        atencao: '',
        focus: '',
        primarias: {
            a: '#5754ED',
            b: '',
            c:''
        },
        secundarias: {
            a: '#EBEAF9',
            b: '',
            c:''
        },
        neutras: {
            a: '#373737',
            b: '',
            c:'',
            d:''
        },
        dark: {
            a: '',
            b: '',
            c: ''
        }
    },
    espacamentos: {
       xs: '8px',
       s : '16',
       m: '24',
       l : '32',
    },
    fontFamily: "'Montserrat', sans-serif"
    
};

export const ProvedorTema = ({ children }) => {
    return <ThemeProvider theme={tema}>
        { children }
    </ThemeProvider>
}