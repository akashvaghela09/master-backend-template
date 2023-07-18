const fs = require('fs');
const path = require('path');

// Path to the parent package.json file
const parentPackagePath = path.join(__dirname, 'package.json');

// Path to the submodule package.json files
const submodulePaths = [
  path.join(__dirname, 'apps', 'server1', 'package.json'),
  path.join(__dirname, 'apps', 'server2', 'package.json'),
  // Add more submodule paths as needed
];

// Function to read the dependencies from a package.json file
function readDependencies(packagePath) {
  const packageData = JSON.parse(fs.readFileSync(packagePath));
  return packageData.dependencies || {};
}

// Read the parent package.json
const parentPackageData = JSON.parse(fs.readFileSync(parentPackagePath));

// Merge the dependencies from the submodules into the parent package.json
submodulePaths.forEach((submodulePath) => {
  const submoduleDependencies = readDependencies(submodulePath);
  Object.assign(parentPackageData.dependencies, submoduleDependencies);
});

// Write the updated parent package.json
fs.writeFileSync(parentPackagePath, JSON.stringify(parentPackageData, null, 2));
