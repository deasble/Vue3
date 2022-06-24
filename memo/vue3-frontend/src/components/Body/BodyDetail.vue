<template>
  <section class="bodydetail">
    <article class="todo_list">
      <ul class="todo_list_items">
        <li class="text-sm">
          <span>body</span>
          <div>
            <button class="btn update">수정</button>
            <button class="btn delete">삭제</button>
          </div>
        </li>
      </ul>
    </article>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/function.scss";

.bodydetail {
  display: block;
  margin-top: 10px;

  .todo_list {
    display: block;

    .todo_list_items {
      display: block;

      li {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>