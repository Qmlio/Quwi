<template>
  <footer>
    <div>
      <nuxt-link to="https://quwi.com/"> QUWI </nuxt-link>
    </div>
    <div>
      <p>v1.0.0</p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  width: 100%;
  height: 56px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  align-content: space-around;
  align-items: stretch;
}
div {
  display: flex;
  justify-content: center;
  align-items: center;
}
p,
a {
  margin: auto;
  font-weight: bold;
  letter-spacing: 4px;
  font-size: 0.8rem;
  flex-grow: 6;
  color: #04152b;
}
</style>