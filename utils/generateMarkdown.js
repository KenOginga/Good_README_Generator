// function to generate markdown for README
function generateMarkdown(data) {
    return `
  # ${data.title}
    
       
  # Description
  ${data.projectDescription}


  # Table of Contents
  * [Project Description](#Description)
  * [Installation](#Installation)
  * [Licence](#License)
  * [Contributors](#Contributors)
  * [Questions](#questions)
  * 
      
  # Installation
  ${data.dependencies}


  # License
  ${data.license}


  # Contributors
  ${data.contributors}

  # Demo/Screenshot
    

  # Questions
    In case you have any questions, contact the project owner using the contacts below:

  #### Email address: ${data.emailAddress}
  #### GitHub Account: ${data.githubUsername}

    `;
    
  }
  
  module.exports = generateMarkdown;
  