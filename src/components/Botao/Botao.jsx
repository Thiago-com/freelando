import styled from "@emotion/styled";

const BotaoPrimarioEstilizado = styled.button`
    background: ${props => props.theme.cores.primarias.b};
    border: none;
    border-radius: ${props => props.theme.espacamentos.s};
    box-sizing: border-box;
    color: ${props => props.theme.cores.branco};
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    padding: ${props => props.theme.espacamentos.xs} ${props => props.theme.espacamentos.s};
    line-height: 20px;
    text-align: center;
    &:hover {
        background: ${props => props.theme.cores.dark.b};
    }

    &:focus {
        outline-color: ${props => props.theme.cores.dark.b};
    }
`

const BotaoSecundarioEstilizado = styled.button`
    background: transparent;
    border: 2px solid ${props => props.theme.cores.primarias.b};
    border-radius: ${props => props.theme.espacamentos.s};
    box-sizing: border-box;
    color: ${props => props.theme.cores.primarias.b};
    cursor: pointer;
    font-size:16px;
    font-weight:700;
    line-height: 20px;
    padding: ${props => props.theme.espacamentos.xs}}
    text-align-center;
    &:hover {
        border-color: ${props => props.theme.cores.dark.b};
        color: ${props => props.theme.cores.dark.b};
    }
    &:focus {
        outline-color: ${props => props.theme.cores.focus};
    }
`

export const Botao = ( { children, variante = 'primaria' }) => {
    if(variante === 'primaria') {
        return <BotaoPrimarioEstilizado>
            {children}
        </BotaoPrimarioEstilizado>
    }
    return <BotaoSecundarioEstilizado>
        {children}
    </BotaoSecundarioEstilizado>
}

