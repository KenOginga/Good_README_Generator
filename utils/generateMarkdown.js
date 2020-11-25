// function to generate markdown for README
function generateMarkdown(data) {
    return `
    # **${data.title}**
    
       
    # Project Description
        ${data.projectDescription}


    # Table of Contents
      * [Project Description](#projectDescription)

      * [Installation](#dependecies)

      * [Licence](#license)
      
    # Installation
        ${data.dependencies}


    # License
        ${data.license}


    # Contributor(s)
        ${data.contributors}

    # Demo/Screenshot
    

    # Questions
    In case you have any questions, contact the project owner using the contacts below:

    #### Email address: ${data.emailAddress}
    #### GitHub Account: ${data.githubUsername}

    `;
    
  }
  
  module.exports = generateMarkdown;
  