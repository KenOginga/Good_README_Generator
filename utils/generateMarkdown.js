// function to generate markdown for README
function generateMarkdown(data) {
    return `
  # ${data.title}
    
       
  # Description
  ${data.projectDescription}

  # Demonstration

  
  # Table of Contents
  * [Project Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Licence](#License)
  * [Contributors](#Contributors)
  * [Contacts](#Contacts)
  
      
  # Installation
  Run ${data.dependencies} to install dependencies.

  # Usage
  Run ${data.usage} in the terminal to start the application.

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
  