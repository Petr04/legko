<template>
  <div class="big-numbers-li-container">
    <div class="number">
    </div>
    <li>
      <slot />
    </li>
  </div>
</template>

<style scoped>
.big-numbers-li-container {
  display: flex;
  align-items: top;
}

li {
  display: block;
  list-style: none;
  font-size: 1.2em;
  font-weight: 400;
  margin-left: -.5em;
  padding-top: 1.2em;
}

.number::before {
  counter-increment: counter;
  content: counter(counter);
}
.number {
  line-height: 1.3em;
  display: block;
  color: var(--color);
  font-size: 3.1em;
  font-weight: 900;
}
</style>
