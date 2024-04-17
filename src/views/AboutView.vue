<template>
  <div class="about">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">Homepage</el-breadcrumb-item>
      <el-breadcrumb-item>About</el-breadcrumb-item>
    </el-breadcrumb>
    <h3>
      This project is a work in progress. You can email me at
      <email>wargamelistbuilder@gmail.com</email>
    </h3>
    <h5>Upcoming features</h5>
    <ol>
      <li>Add List Printing</li>
    </ol>
    <h5>Release History</h5>
    <ul>
      <li>v1.0.1 - Fixing a few small bugs. Added ability to edit games.</li>
      <li>v1.0.0 - Initial release. All basic functions are completed.</li>
    </ul>
  </div>
</template>
