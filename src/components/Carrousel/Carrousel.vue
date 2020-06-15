<template>
    <div class="card-carousel-wrapper">
        <div class="card-carousel--nav-box left" @click="moveCarousel(-1)">
            <span class="card-carousel--nav__left" :disabled="atHeadOfList"></span>
        </div>

        <div class="card-carousel">
            <div class="card-carousel--overflow-container">
                <div
                    class="card-carousel-cards"
                    :style="{transform: 'translateX' + '(' + currentOffset + 'px' + ')'}"
                >
                    <!--Element that goes inside the carrousel -->
                    <slot></slot>
                </div>
            </div>
        </div>

        <div class="card-carousel--nav-box right" @click="moveCarousel(1)">
            <span class="card-carousel--nav__right" :disabled="atEndOfList"></span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        itemsQuantity: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            currentOffset: 0
        }
    },
    computed: {
        windowSize() {
            return 2
        },
        paginationFactor() {
            return 280
        },
        atEndOfList() {
            // prettier-ignore
            // eslint-disable-next-line max-len
            return this.currentOffset <= this.paginationFactor * -1 * (this.itemsQuantity - this.windowSize)
        },
        atHeadOfList() {
            return this.currentOffset === 0
        }
    },
    methods: {
        moveCarousel(direction) {
            if (direction === 1 && !this.atEndOfList) {
                this.currentOffset -= this.paginationFactor
            } else if (direction === -1 && !this.atHeadOfList) {
                this.currentOffset += this.paginationFactor
            }
        }
    }
}
</script>

<style lang="scss">
.card-carousel-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666a73;

    // @include respond(phone) {
    //     padding: 0 2rem;
    // }
}

.card-carousel {
    display: flex;
    justify-content: center;
    width: 880px;

    // @include respond(tab-port) {
    //     width: 100%;
    // }

    // @include respond(phone) {
    //     width: 100%;
    // }

    &--overflow-container {
        overflow: hidden;
    }

    // &--nav-box {
    //     display: flex;
    //     align-items: center;
    //     justify-content: center;
    //     // background-color: var(--tv-border);
    //     box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);
    //     border-radius: 8rem;
    //     height: 5rem;
    //     width: 5rem;
    //     cursor: pointer;

    //     &.right {
    //         margin-left: 1rem;

    //         // @include respond(phone) {
    //         //     margin-left: 0;
    //         //     // margin-right: 5rem;
    //         // }
    //     }

    //     &.left {
    //         margin-right: 1rem;

    //         // @include respond(phone) {
    //         //     // margin-left: 5rem;
    //         //     margin-right: 0;
    //         // }
    //     }
    // }

    &--nav__left,
    &--nav__right {
        display: inline-block;
        align-items: center;
        width: 15px;
        height: 15px;
        padding: 6px;
        box-sizing: border-box;
        border-top: 2px solid rgba($black, 0.45);
        border-right: 2px solid rgba($black, 0.45);
        cursor: pointer;
        margin: 0 20px;
        transition: transform 150ms linear;
        &[disabled] {
            opacity: 0.2;
            border-color: var(--text-color-1);
        }
    }

    &--nav__left {
        transform: rotate(-135deg);
        &:active {
            transform: rotate(-135deg) scale(0.9);
        }
    }

    &--nav__right {
        transform: rotate(45deg);
        &:active {
            transform: rotate(45deg) scale(0.9);
        }
    }
}

.card-carousel-cards {
    display: flex;
    transition: transform 150ms ease-out;
    transform: translatex(0px);
}
</style>
