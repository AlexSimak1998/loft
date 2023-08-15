<template>
  <div>
    <button
      class="btn flex items-center justify-center font-sans flex items-start rounded-full text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"
    >
      <slot></slot>
    </button>
  </div>
</template>

<style scoped>
.btn {
  color: white;
  background: rgb(206,174,160);
  font-size: 16px;
  font-weight: 600;
  width: 180px;
  height: 50px;
  border-radius:20px ;
}
.btn:hover {
  color: rgb(95, 95, 95);
  transition: color 0.3s ease;
}
</style>