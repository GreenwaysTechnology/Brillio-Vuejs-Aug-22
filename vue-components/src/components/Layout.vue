<script setup>
</script>
<template>
    <h1>Layout</h1>
    <hr />
    <div class="container">
        <header>
            <slot name="header">
                <h1>default Header</h1>
            </slot>
        </header>
        <main>
            <!-- <slot name="main">
                <p>default content</p>
            </slot> -->
            <!-- Slot without name : called default slot -->
             <slot>
                <p>default content</p>
            </slot>
        </main>
        <footer>
            <slot name="footer">
                <h2>default footer</h2>
            </slot>
        </footer>
    </div>
</template>