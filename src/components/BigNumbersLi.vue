<template>
  <div class="big-numbers-li">
    <div class="title">
      <div class="number">
      </div>
      <li>
        <h3>{{ title }}</h3>
      </li>
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
img {
  display: block;
  margin: 1em 0;
  width: 100%;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  display: flex;
  align-items: top;
}

li {
  display: block;
  list-style: none;
  font-size: 1.1em;
  /*font-weight: 500;*/
  margin-left: -.6em;
  padding-top: 1.3em;
}

h3 {
  font-size: 1.2em;
  font-weight: 500;
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

<script>
export default {
  props: ['title'],
};
</script>
