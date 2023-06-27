import styled from "@emotion/styled";

const LinkPrimario = styled.a`
    color: ${props => props.theme.cores.branco};
    cursor: pointer;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    text-decoration: none;
    &:hover {
        color: ${props => props.theme.cores.dark.a};
    }
`

const LinkSecundario = styled.a`
    color: ${props => props.theme.cores.primarias.b};
    cursor: pointer;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    &:hover {
        border-bottom: 1px solid ${props => props.theme.cores.primarias.b}
        font-weight: bold;
    }
`

export const Link = ({ children, variante = 'primario' }) => {
    if (variante === 'primario') {
        return <LinkPrimario variante={variante}>
            {children}
        </LinkPrimario>
    }
    return <LinkSecundario variante={variante}>
        {children}
    </LinkSecundario>
}