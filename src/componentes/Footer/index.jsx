import styled from "styled-components"

const RodapeEstilo = styled.footer`



    background: var(--cor-fundo);
    border-radius: 0px 0px 10px 10px;
    text-align: center;
    padding: 2em 0;

    .rodape__tabela {
        width: 85%;
        border-collapse: collapse;
        margin: auto;
    }

    .rodape__tabela tr {
        display: flex;
        align-items: center;
        margin: 1em 0;
    }

    .rodape__tabela tr td {
        display: block;
        min-width: 17%;
        max-width: 66%;
    }
`

const Footer = () => {
    return (
        <RodapeEstilo id="rodape">
            <h2 className="contato-titulo titulos">Contatos</h2>
            <table className="rodape__tabela">
                <tbody>
                    <tr>
                        <td><p className="rodape__titulo-contato">telefone</p></td>
                        <td><img src="./img/icone-telefone.svg" alt="" /></td>
                        <td><p>(31) 9 9399-3167</p></td>
                    </tr>
                    <tr>
                        <td><p className="rodape__titulo-contato">email</p></td>
                        <td><img src="./img/icone-email.svg" alt="" /></td>
                        <td><p>leonardowederveiga@yahoo.com</p></td>
                    </tr>
                    <tr>
                        <td><p className="rodape__titulo-contato">local</p></td>
                        <td><img src="./img/icone-local.svg" alt="" /></td>
                        <td><p>Belo Horizonte, Lagoinha 100</p></td>
                    </tr>
                </tbody>
            </table>
        </RodapeEstilo>
    )
}

export default Footer