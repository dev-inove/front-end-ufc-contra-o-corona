<template>
    <div class="action-page">
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
                        <use
                            xlink:href="@/assets/svg/sprites.svg#facebook-1"
                        />
                    </svg>
                    <svg class="social-icon">
                        <use
                            xlink:href="@/assets/svg/sprites.svg#twitter-1"
                        />
                    </svg>
                    <svg class="social-icon">
                        <use
                            xlink:href="@/assets/svg/sprites.svg#whatsapp"
                        />
                    </svg>
                    <svg class="social-icon">
                        <use
                            xlink:href="@/assets/svg/sprites.svg#pinterest"
                        />
                    </svg>
                </div>
            </div>

            <hr />

            <SwitchLight />

            <div>PHOTO</div>

            <div class="post__content">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Soluta doloremque necessitatibus minima voluptatibus. Non
                delectus, id tenetur autem repudiandae vel eveniet voluptas
                facere eius quo repellendus omnis deleniti natus. Harum?
            </div>
            <SectionTitle title="Recomendadas para você"></SectionTitle>
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Header/Navbar.vue'
import SectionTitle from '../utils/SectionTitle.vue'
import SwitchLight from '../utils/SwitchLight.vue'
import Footer from '../Footer/Footer.vue'

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
        Footer
    }
}
</script>

<style lang="scss">
.post {
    margin: 3rem 0;

    &__title {
        font-family: 'Raleway', sans-serif;
        font-size: 6.4rem;
        font-weight: 700;
        line-height: 8rem;
    }

    &__subtitle {
        font-family: 'Merriweather', sans-serif;
        font-size: 2rem;
        font-weight: lighter;
        color: rgba($black, 0.6);
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
                color: rgba($black, 0.6);
            }

            h4 {
                font-size: 1.8rem;
                font-weight: 400;
                color: rgba($black, 0.45);
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
    }
}
</style>
