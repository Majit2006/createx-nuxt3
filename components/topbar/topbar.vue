<template>
    <div class="bg-dark">
      <div class="container text-center text-light">
        <div class="row align-items-center">
          <div class="col">
            <span class="font-Lato">Available 24/7 at (405) 555-0128</span>
          </div>
          <div class="col-auto d-flex justify-content-between pt-3">
            <ul class="d-flex justify-content-between list-unstyled">
              <li class="px-2 text-opacity">Delivery & returns</li>
              <li class="px-2 text-opacity">Track order</li>
              <li class="px-2 text-opacity">Blog</li>
              <li class="px-2 text-opacity">Contacts</li>
            </ul>
            <ul class="list-unstyled px-2">
              <li>
                <select class="border-0 bg-transparent text-light text-opacity">
                  <option class="border-0 bg-none font-Lato">Eng / $</option>
                </select>
              </li>
            </ul>
          </div>
          <div class="col">
            <i class="bi bi-person text-opacity"></i>
            <router-link
              to="/"
              class="text-decoration-none text-white text-opacity"
              >Log in /</router-link
            >
            <router-link
              to="/"
              class="text-decoration-none text-white text-opacity"
              >Register</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </template>
  