// function to generate markdown for README
function generateMarkdown(data) {
    return `
  # ${data.title}
    
       
  # Description
  ${data.projectDescription}

  # Demonstration



  # Output Readme


  # Table of Contents
  * [Project Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Licence](#License)
  * [Contributors](#Contributors)
  * [Contacts](#Contacts)
  
      
  # Installation
  ${data.dependencies}

  # Usage
  ${data.usage}

  # License
  This repository is licensed under the ${data.license} license.


  # Contributors
  ${data.contributors}

  
    

  # Contacts
  ###### Email address: ${data.emailAddress}
  ###### GitHub Account: ${data.githubUsername}

    `;
    
  }
  
  module.exports = generateMarkdown;
  