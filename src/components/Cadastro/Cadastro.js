import { useTheme} from 'styled-components';
import { Botao, Title } from "./Cadastro.styles";

// export const { Tilte } from "./Cadastro.styles";

export const Cadastro = () => {
    const theme = useTheme();
    console.log('Cadastro', theme);

    return (
        <>
        <Title primary ={true}>
            <p>Cadastro</p>
        </Title>
        <Title primary ={false}>
            <p>Cadastro2</p>
        </Title>

        <Botao>Teste</Botao>
        </>
        
    )
}

