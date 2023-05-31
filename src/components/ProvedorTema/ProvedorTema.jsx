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
            a: '',
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
       s : '16',
       l : '32',
    }
};

export const ProvedorTema = ({ children }) => {
    return <ThemeProvider theme={tema}>
        { children }
    </ThemeProvider>
}