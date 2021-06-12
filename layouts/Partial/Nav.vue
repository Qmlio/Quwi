<template>
    <header>
        <nuxt-link to="/" class="logo">Nuxt link</nuxt-link>
    <nav>
        <ul>
<li>
    <nuxt-link to="/">
Home
    </nuxt-link>
    <nuxt-link to="about">
About
    </nuxt-link>
    <nuxt-link to="services">
Services
    </nuxt-link>
    <nuxt-link to="contact">
Contact
    </nuxt-link>
</li>
</ul>
    </nav>
    </header>
</template>
<style scoped>
header{
    background:rgba(0, rgb(132, 255, 132), rgb(142, 142, 233), 1);
    display: grid;
    grid-template-columns: repeat(2,auto);
}
.logo, li, a{
    padding: 1em 2em;
    display: block;
    text-transform: uppercase;
    color:white;
    font-size: .9em;
}
nav{
    justify-self: right;
}
ul{
    list-style-type: none;
}
li{
    display: inline;
}
li a{
    padding: 1em 2em;
    display: inline-block;
    background-color: black;
}
</style>