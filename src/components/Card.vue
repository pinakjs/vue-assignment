<script setup lang="ts">

</script>

<template>
    <div class="card">
        <div class="card__header">
            <slot name="header">
                300 * 100
            </slot>
        </div>

        <div class="card__body">
            <h5>
                <slot name="title">
                    A sample title
                </slot>
            </h5>
            <slot name="body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae aspernatur voluptates soluta sunt debitis quae.</p>
            </slot>
        </div>

        <div class="card__footer">
            <slot name="footer">
                <button class="button" title="click for more info">More Info</button>
            </slot>
        </div>
    </div>    
</template>

<style scoped>
    .card {
        background: #fff;
        padding: 0.5rem;
        display: block;
        width: 100%;
        max-width: 180px;
        border-radius: 5px;
        margin: 0.8rem;
        box-shadow: 0 0 15px 2px rgba(0, 0, 0, 0.15);
    }

    .card__header {
        width: 100%;
        aspect-ratio: 3 / 2;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.4rem;
        font-weight: bold;
        background-color: rgb(249, 127, 255);
        color: #fff;
        border-radius: 5px;
    }

    .card__body {
        width: 100%;
    }
    
    .card__body h5 {
        font-size: 1.2rem;
        margin-top: 0.5rem;
        text-align: left;
        margin-bottom: 0.4rem;
    }

    .card__body p {
        font-size: 0.9rem;
        margin-top: 0.4rem;
        color: rgb(46, 54, 57);
    }

    .card__footer {
        width: 100%;
        margin-top: 0.6rem;
    }

    .card__footer button {
        font-size: 0.9rem;
        width: 100%;
        background-color: rgb(170, 78, 236);
        color: #fff;
        padding: 0.4rem 0.6rem;
    }
</style>