<template>
    <div class="user-card">
        <div class="user-card__top">
            <h1>Victor Camargo</h1>
            <h2>Campus de Quixadá</h2>
            <hr />
        </div>
        <div class="user-card__bottom">
            <div class="user-card__bottom--attr">
                <h2>Ações</h2>
                <h3>3 Unidades</h3>
            </div>

            <div class="user-card__bottom--attr">
                <h2>Produções</h2>
                <h3>1 Unidades</h3>
            </div>

            <div class="user-card__bottom--attr">
                <h2>Necessidades</h2>
                <h3>2 Unidades</h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.user-card {
    display: grid;
    grid-template-rows: 40% 60%;
    padding: 2rem;
    width: 287px;
    height: 367px;
    border-radius: 1.5rem;
    overflow: hidden;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);

    &__top {
        display: flex;
        flex-direction: column;
        align-items: center;

        h1 {
            font-size: 1.8rem;
            font-weight: 500;
            color: rgba($black, 0.6);
        }

        h2 {
            font-size: 1.4rem;
            font-weight: 400;
            color: rgba($black, 0.45);
            margin-bottom: 2rem;
        }

        & hr {
            border: 0;
            width: 100%;
            height: 1px;
            background-image: linear-gradient(
                to right,
                rgba(120, 120, 120, 0),
                rgba(120, 120, 120, 0.75),
                rgba(120, 120, 120, 0)
            );
        }
    }

    &__bottom {
        &--attr {
            h2 {
                font-weight: 400;
                font-size: 1.8rem;
                color: rgba($black, 0.45);
            }

            h3 {
                font-weight: 700;
                font-size: 1.4rem;
                color: rgba($black, 0.6);
            }
        }
    }
}
</style>
