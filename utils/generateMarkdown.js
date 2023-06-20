// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }



apache = [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

MIT = [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

GPLv2 = [![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)

GPLv3 = [![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)






// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string



function renderLicenseSection(license) {}
  license = "MIT"
    https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt

  license = "Apache"
    https://github.com/apache/.github/blob/main/LICENSE

  license = "GPLv2"
    https://github.com/systemd/systemd/blob/main/LICENSE.GPL2

  license = "GPLv3"
    https://github.com/Illumina/licenses/blob/master/gpl-3.0.txt

  license = "Unlicense"
    BLANK








// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` 
  ${data.projectTitle}  
  ${data.repoName}  
  _____________________
  Description:  
  ${data.description}  

  Installation Instructions:     
  ${data.install}  

  How to use this program:  
  ${data.usage}  

  Contributions:  
  ${data.contributionGuidlines}  

  Testing:  
  ${data.test}  

  License:  
  ${data.license}  

  Questions:  
  GitHub @ ${data.userName}  
  Email @ ${data.email}  
  `;
}

module.exports = generateMarkdown;
