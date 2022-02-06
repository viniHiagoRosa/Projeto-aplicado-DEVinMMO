/* eslint-disable react/jsx-no-target-blank */
import {FooterDiv, Img} from './Footer.styled'

export const Footer = () => {
    return(
        <FooterDiv >

            <a href="https://www.linkedin.com/in/vinicius-hiago/" target="_blank">
                <Img src="https://cdn-icons-png.flaticon.com/512/49/49408.png" alt="Linkedin" />
            </a>

            <h3>Desenvolvido por Vinicius Hiago</h3>

            <a href="https://github.com/viniHiagoRosa" target="_blank">
                <Img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />
            </a>

        </FooterDiv>
    )
}       