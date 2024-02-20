
<template>
  <div id="layout-vertical">
    <aside>
      <Sidebar></Sidebar>
    </aside>
    <main>
      <header class="p-4 sm:ml-64">
        <Breadcrumb></Breadcrumb>
      </header>
      <div class="p-4 sm:ml-64 bg-slate-100 min-h-90">
        <slot/>
      </div>
    </main>
  </div>
</template>