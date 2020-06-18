<template>
    <div class="action-page" :theme="this.$store.state.dark ? 'dark' : 'light'">
        <Navbar />
        <div class="post pad-sm">
            <h1 class="post__title">Confecções de Máscaras</h1>
            <h2 class="post__subtitle">
                Produção de máscaras descartaveis e outras substancias
                essenciais para a atual crise viral.
            </h2>

            <div class="post__info">
                <div class="post__info--headers">
                    <h3>Responsavel Diego Cunha Machado</h3>
                    <h4>05 de abril de 2020 - 12h15</h4>
                    <h4>Última Atualizalição há uma hora</h4>
                </div>
                <div class="post__info--social">
                    <svg class="social-icon">
                        <use xlink:href="@/assets/svg/sprites.svg#facebook-1" />
                    </svg>
                    <svg class="social-icon">
                        <use xlink:href="@/assets/svg/sprites.svg#twitter-1" />
                    </svg>
                    <svg class="social-icon">
                        <use xlink:href="@/assets/svg/sprites.svg#whatsapp" />
                    </svg>
                    <svg class="social-icon">
                        <use xlink:href="@/assets/svg/sprites.svg#pinterest" />
                    </svg>
                </div>
            </div>

            <hr />

            <SwitchLight />

            <div>PHOTO</div>

            <div class="post__content">
                Lorem Ipsum é simplesmente uma simulação de texto da
                indústria tipográfica e de impressos, e vem sendo utilizado
                desde o século XVI, quando um impressor desconhecido pegou
                uma bandeja de tipos e os embaralhou para fazer um livro de
                modelos de tipos. Lorem Ipsum sobreviveu não só a cinco
                séculos, como também ao salto para a editoração eletrônica,
                permanecendo essencialmente inalterado. Se popularizou na
                década de 60, quando a Letraset lançou decalques contendo
                passagens de Lorem Ipsum, e mais recentemente quando passou
                a ser integrado a softwares de editoração eletrônica.
                <br />
                <br />Ao contrário do que se acredita, Lorem Ipsum não é
                simplesmente um texto randômico. Com mais de 2000 anos,
                suas raízes podem ser encontradas em uma obra de literatura
                latina clássica datada de 45 AC. Richard McClintock, um
                professor de latim do Hampden-Sydney College na Virginia,
                pesquisou uma das mais obscuras palavras em latim,
                consectetur, oriunda de uma passagem de Lorem Ipsum.
            </div>

            <SectionTitle title="Recomendadas para você"></SectionTitle>
            <div class="post__recommended">
                <ActionCard />
                <ActionCard />
                <ActionCard />
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Header/Navbar.vue'
import SectionTitle from '../utils/SectionTitle.vue'
import SwitchLight from '../utils/SwitchLight.vue'
import Footer from '../Footer/Footer.vue'
import ActionCard from './ActionCard.vue'

// titulo
// subtitulo
// autor
// hora do post
// ultima atualização

export default {
    components: {
        Navbar,
        SectionTitle,
        SwitchLight,
        Footer,
        ActionCard
    }
}
</script>

<style lang="scss">
/* Color Variables & Theme Definitions */
[theme*='light'] {
    --post-background: var(--white-1);

    --post-title: var(--black-1);
    --post-sub: var(--black-4);

    --post-author: var(--black-4);
    --post-headers: var(--black-5);

    --content: var(--black-4);
}

[theme*='dark'] {
    --post-background: var(--grey-1);

    --post-title: var(--white-1);
    --post-sub: var(--white-2);

    --post-author: var(--white-1);
    --post-headers: var(--white-2);

    --content: var(--white-2);
}

* {
    transition: 0.2s ease-out;
}

/* Elements Styling */
.post {
    background-color: var(--post-background);
    margin: 3rem 0;

    &__title {
        font-family: 'Raleway', sans-serif;
        font-size: 6.4rem;
        font-weight: 700;
        line-height: 8rem;
        color: var(--post-title);
    }

    &__subtitle {
        font-family: 'Merriweather', sans-serif;
        font-size: 2rem;
        font-weight: lighter;
        color: var(--post-sub);
    }

    &__info {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-top: 3rem;
        margin-bottom: 1rem;

        &--headers {
            h3 {
                font-size: 1.8rem;
                font-weight: 500;
                color: var(--post-author);
            }

            h4 {
                font-size: 1.8rem;
                font-weight: 400;
                color: var(--post-headers);
            }
        }

        &--social {
            .social-icon {
                height: 2.5rem;
                width: 2.5rem;
                margin-left: 1.5rem;
            }
        }
    }

    &__content {
        font-family: 'Merriweather', sans-serif;
        font-size: 1.8rem;
        color: var(--content);
    }

    &__recommended {
        display: flex;
    }
}
</style>
