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
    <h5>Upcoming features/updates</h5>
    <ol>
      <li>Add List Printing</li>
      <li>Add Position to option values for units so they can be sorted properly</li>
      <li>Add more details on the army unit like qty|options selected</li>
      <li>Add List Sharing</li>
    </ol>
    <h5>Release History</h5>
    <ul>
      <li>
        v1.1.2 - 4/30/24
        <ol>
          <li>Added update to existing army units when a unit type update happens.</li>
          <li>Added a profanity filter because some people...</li>
        </ol>
      </li>
      <li>
        v1.1.1 - 4/22/24
        <ol>
          <li>Fixed width on user armies.</li>
        </ol>
      </li>
      <li>
        v1.1.0 - 4/17/24
        <ol>
          <li>Added CRUD for Statistics.</li>
          <li>Fixed a few bugs.</li>
          <li>Added num of units for user armies.</li>
        </ol>
      </li>
      <li>v1.0.1 - 4/16/24 Fixing a few small bugs. Added ability to edit games.</li>
      <li>v1.0.0 - 4/12/24 Initial release. All basic functions are completed.</li>
    </ul>
  </div>
</template>
