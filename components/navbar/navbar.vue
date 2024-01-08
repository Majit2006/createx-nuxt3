<template>
  <div>
    <topbar />
    <nav class="navbar navbar-expand-lg bg-body-white justifu-content-around">
      <div class="container">
        <div class="logo">
          <a class="navbar-brand font-Lato" href="#"
            >CREATE<span class="text-dark-green">X</span>
          </a>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="/">Women</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">Men</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">Girls</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">Boys</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-danger" href="/">Sale</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2 border-green"
              type="search"
              placeholder="Search for products..."
              aria-label="Search"
            />
          </form>
          <div class="toolbar mx-3">
            <i class="bi bi-heart" style="font-size: 18px"></i>
            <span class="heart-count">2</span>
            <div class="vr mx-1 mt-2"></div>
            <i class="bi bi-cart2" style="font-size: 20px"></i>
            <span class="card-count">2</span>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import topbar from "../topbar/topbar.vue";
export default {
  components: { topbar },
};
</script>
