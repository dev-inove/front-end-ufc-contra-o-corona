<template>
    <div class="switch">
        Modo Leitura
        <label class="switch-light">
            <input type="checkbox" />
            <span class="slider round"></span>
        </label>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.switch {
    display: flex;
    align-items: center;

    margin: 1rem 0;

    font-family: 'Raleway', sans-serif;
    text-transform: uppercase;
    font-size: 1.6rem;
    font-weight: 400;
}

/* The switch - the box around the slider */
.switch-light {
    margin: 0 1rem;
    position: relative;
    display: inline-block;
    width: 30px;
    height: 17px;
}

/* Hide default HTML checkbox */
.switch-light input {
    opacity: 0;
    width: 0;
    height: 0;
}

/* The slider */
.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #4e4e4e;
    -webkit-transition: 0.4s;
    transition: 0.4s;
}

.slider:before {
    position: absolute;
    content: '';
    height: 14px;
    width: 14px;
    left: 2px;
    bottom: 2px;
    background-color: #c4c4c4;
    -webkit-transition: 0.4s;
    transition: 0.4s;
}

input:checked + .slider {
    background-color: rgba($white, 0.45);
}

input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
    -webkit-transform: translateX(12px);
    -ms-transform: translateX(12px);
    transform: translateX(12px);
}

/* Rounded sliders */
.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    /* background-color: red; */
    border-radius: 50%;
}
</style>
