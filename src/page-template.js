  // export function to generate entire page
  module.exports = templateData => {
    // destructure page data by section
    const { projects, about, ...header } = templateData;
  
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
      <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
      <header>
        <div class=" ">
          <h1 class=" ">My Team by OOP</h1>
        </div>
      </header>
      <main class="container">
        ${generateAbout(about)}
        ${generateProjects(projects)}
      </main>
    </body>
    </html>
    `;
  };  