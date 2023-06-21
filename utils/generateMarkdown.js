// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://github.com/apache/.github/blob/main/LICENSE)"

    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt)"

    case "GPLv2":
      return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://github.com/systemd/systemd/blob/main/LICENSE.GPL2)"

    case "GPLv3":
      return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://github.com/Illumina/licenses/blob/master/gpl-3.0.txt)"

    default:
      return ""
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` 


# **${data.repoName}**  
### Created by:  
### ${data.name}  
_________________________
### Table of Contents
  - [Description](#description)
  - [Installation Instructions](#installation-instructions)
  - [How to use this program](#how-to-use-this-program)
  - [Contributions](#contributions)
  - [Testing](#testing)
  - [License](#license)
  - [Questions](#questions)



## **Description:**  
${data.description}  


## **Installation Instructions:**     
${data.install}  
  

## **How to use this program:**  
${data.usage}  


## **Contributions:**  
${data.contributionGuidlines}  


## **Testing:**  
${data.test}  


## **License:**  
${renderLicenseBadge(data.license)}



To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

   
![alt text](assets/images/screenshot.png)




## Questions:  
EMAIL: [${data.email}](mailto:${data.email})  
GitHub: [${data.userName}](https://github.com/${data.userName})
  `;
}

module.exports = generateMarkdown;
// ${renderLicenseLink(data.license)}  