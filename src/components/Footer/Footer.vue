<template>
    <footer class="footer pad-sm">
        <div>
            <span></span>
            <img
                class="footer__logo"
                src="../../assets/img/logo_ufc_horizontal.png"
                alt="ufc-logo"
            />
            <div class="footer__social">
                Midias Sociais
                <hr />
                <svg class="footer__social--icon">
                    <use xlink:href="@/assets/svg/sprites.svg#instagram" />
                </svg>
                <svg class="footer__social--icon">
                    <use xlink:href="@/assets/svg/sprites.svg#facebook" />
                </svg>
                <svg class="footer__social--icon">
                    <use xlink:href="@/assets/svg/sprites.svg#youtube" />
                </svg>
                <svg class="footer__social--icon">
                    <use xlink:href="@/assets/svg/sprites.svg#twitter" />
                </svg>
            </div>
            <div class="footer__legal">
                ©2020 - Universidade Federal do Ceará
                <br />Todos os direitos reservados.
            </div>
        </div>

        <div class="footer__contact">
            <div class="footer__contact--title">
                <svg class="left-arrow" @click="moveIndex(-1)">
                    <use
                        xlink:href="@/assets/svg/sprites.svg#right-arrow"
                    />
                </svg>
                <h1>{{ campi[index].name }}</h1>
                <svg class="right-arrow" @click="moveIndex(1)">
                    <use
                        xlink:href="@/assets/svg/sprites.svg#right-arrow"
                    />
                </svg>
            </div>

            <div class="footer__contact--campus-info">
                <div class="footer__contact--campus-info--icon-box">
                    <svg class="footer__contact--campus-info--icon">
                        <use xlink:href="@/assets/svg/sprites.svg#pin" />
                    </svg>
                </div>
                <div class="footer__contact--campus-info--text">
                    <h2>Local</h2>
                    {{ campi[index].address }}
                </div>
            </div>

            <div class="footer__contact--campus-info">
                <div class="footer__contact--campus-info--icon-box">
                    <svg class="footer__contact--campus-info--icon">
                        <use xlink:href="@/assets/svg/sprites.svg#call" />
                    </svg>
                </div>
                <div class="footer__contact--campus-info--text">
                    <h2>Telefone</h2>
                    {{ campi[index].phone }}
                </div>
            </div>
            <div class="footer__contact--campus-info">
                <div class="footer__contact--campus-info--icon-box">
                    <svg class="footer__contact--campus-info--icon">
                        <use xlink:href="@/assets/svg/sprites.svg#clock" />
                    </svg>
                </div>
                <div class="footer__contact--campus-info--text">
                    <h2>Horário</h2>
                    08:00h - 22:00h
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            index: 0,
            campi: [
                {
                    name: 'Fortaleza',
                    address:
                        'Av. da Universidade, 2853 - Benfica, Fortaleza - CE, 60020-181',
                    phone: '+55 (85) 3366-7300'
                },
                {
                    name: 'Quixadá',
                    address:
                        'Av. José de Freitas Queiroz, 5003, Quixadá - CE, 63902-580',
                    phone: '+55 (88) 3412-1256'
                },
                {
                    name: 'Crateús',
                    address:
                        'BR 226, KM 3 – Bairro Venâncios – Crateús – CE, 63700-000',
                    phone: '+55 (88) 3691-9700'
                },
                {
                    name: 'Sobral',
                    address:
                        'Rua Coronel Estanislau Frota, 563, Sobral - CE, 62010-560',
                    phone: '+55 (88) 3695-4601'
                }
            ]
        }
    },
    methods: {
        moveIndex(n) {
            this.index += n
            if (this.index < 0) {
                this.index = 3
            } else if (this.index > 3) {
                this.index = 0
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.footer {
    display: flex;
    justify-content: space-between;
    background-color: #eeeeee;
    padding-top: 3rem;
    padding-bottom: 2rem;
    margin-top: 15rem;

    &__social {
        width: 18.2rem;

        font-size: 1.4rem;
        font-weight: 500;
        text-transform: uppercase;
        color: rgba($black, 0.87);

        margin: 2rem 0;

        hr {
            background: rgba($black, 0.2);
            margin-top: 0.2rem;
        }

        &--icon {
            fill: rgba($black, 0.45);
            margin: 1rem;
            height: 2.4rem;
            width: 2.4rem;

            &:first-of-type {
                margin-left: 0;
            }
        }
    }

    &__legal {
        font-size: 1.8rem;
        line-height: 2rem;
        color: rgba($black, 0.45);
    }

    &__contact {
        display: flex;
        flex-direction: column;

        padding: 2rem;

        width: 39.3rem;
        height: 35.5rem;
        position: relative;
        top: -10rem;
        background-color: #fff;
        border-radius: 1.5rem;
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);

        &--title {
            display: flex;
            align-items: center;

            h1 {
                font-size: 2.4rem;
                font-weight: 700;
                color: rgba($black, 0.6);
                margin: 1rem 2rem;
            }

            svg {
                height: 2rem;
                width: 2rem;
                fill: rgba($black, 0.45);
                cursor: pointer;

                &.left-arrow {
                    transform: rotate(180deg);
                }
            }
        }

        &--campus-info {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin: 0.5rem 0;

            &--text {
                font-size: 1.8rem;
                color: rgba($black, 0.6);

                h2 {
                    font-size: 1.8rem;
                    font-weight: 500;
                    color: rgba($black, 0.8);
                }
            }

            &--icon-box {
                width: 8rem;
                height: 8rem;
            }

            &--icon {
                fill: rgba($black, 0.45);
                margin: 3rem;
                height: 2rem;
                width: 2rem;
            }
        }
    }
}
</style>
