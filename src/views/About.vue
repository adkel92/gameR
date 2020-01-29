<template>
  <div>
    <Header />
    <div class="about">
      <h1>This is an about page</h1>
      <p>This is only here to show that multiple pages/views can be used</p>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Header from "@/components/Header";

export default {
  name: "about",
  components: {
    Header
  }
};
</script>
