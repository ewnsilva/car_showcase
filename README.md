<div align='center'>
<h1>:red_car: Car Showcase Website :red_car:</h1>
</div>
<div align='center'>
<img src='https://github.com/user-attachments/assets/49ae60df-a7c3-418f-a5e1-06bab96635b2' width='720px'>
</div>
<br />

<div align='justify'>
This is a Next.js-based website that showcases a variety of cars with detailed information. The application features a responsive design, advanced filtering, and pagination to enhance the user experience.
</div>
<br />
<h2 name='technologies'>:scroll: Table of Contents</h2>
<div align='justify'>

  <ul>
      <li><a href='#technologies'>:computer: Technologies Used</a></li>
      <li><a href='#features'>:battery: Features</a></li>
      <li><a href='#instalation'>:hammer_and_wrench: Installation and Setup</a></li>
      <li><a href='#informations'>:star: Additional Informations:</a></li>
    </ul>
</div>
<h2 name='technologies'>:computer: Technologies Used</h2>
<div align='justify'>

  <ul>
        <li>TypeScript</li>
        <li>React.js</li>
        <li>Next.js</li>
        <li>Tailwind CSS</li>
    </ul>
</div>
<div align='center'>

</div>
<br />
<h2 name='features'>:battery: Features</h2>
<div align='justify'>
<ul>
        <li>Display a collection of cars retrieved from an external API.</li>
        <li>Filter by model, manufacturer, year, and fuel type.</li>
        <li>Server-side rendering for better performance.</li>
        <li>Pagination for easy navigation.</li>
        <li>SEO optimization for better search visibility.</li>
        <li>TypeScript for robust type safety and improved code quality.</li>
        <li>Fully responsive design for seamless usage across different devices.</li>
    </ul>
</div>
<br/>
<div align='center'>
<img src='https://github.com/user-attachments/assets/c0833b32-eec9-4371-aaa4-a45c3b8f1b51' width='720px'>
</div>
<br />
<div align='center'>

</div>
<br />
<h2 name='instalation'>:hammer_and_wrench: Installation and Setup</h2>

<h3>Prerequisites:</h3>
<div align='justify'>
<ul>
   <li>Git</li>
   <li>Node.js</li>
   <li>npm</li>
</ul>
</div>
<br />
<h3>Prerequisites:</h3>
<div align='justify'>
<ol>
   <li>Clone the repository:
      <pre><code>git clone https://github.com/adrianhajdin/project_next13_car_showcase.git
cd project_next13_car_showcase</code></pre>
   </li>
   <li>Install dependencies:
      <pre><code>npm install</code></pre>
   </li>
      <li>Set up environment variables:<br>
Create a <code>.env-cmdrc</code> file in the project root and add the following properties:
        <pre><code>{
  "development": {
    "NEXT_PUBLIC_URL_CARS": "https://cars-by-api-ninjas.p.rapidapi.com",
    "NEXT_PUBLIC_XRapidAPIKey": "(your key)",
    "NEXT_PUBLIC_XRapidAPIHost": "cars-by-api-ninjas.p.rapidapi.com",
    "NEXT_PUBLIC_URL_IMAGES": "https://cdn.imagin.studio/getImage",
    "NEXT_PUBLIC_IMAGES_KEY": "(your key)"
  },
  "production": {
    "NEXT_PUBLIC_URL_CARS": "https://cars-by-api-ninjas.p.rapidapi.com",
    "NEXT_PUBLIC_XRapidAPIKey": "(your key)",
    "NEXT_PUBLIC_XRapidAPIHost": "cars-by-api-ninjas.p.rapidapi.com",
    "NEXT_PUBLIC_URL_IMAGES": "https://cdn.imagin.studio/getImage",
    "NEXT_PUBLIC_IMAGES_KEY": "(your key)"
  }
}</code>
</pre>
Replace the placeholders with your actual API keys.
   </li>
   <li>Start the development server:
      <pre><code>npm run dev</code></pre>
   </li>
</ol>

Access [http://localhost:3000](http://localhost:3000) in your browser to view the project.

<h2 name='informations'>:star: Additional Informations:</h2>
<div align='justify'>
<ul>
   <li>The project is structured to ensure code reusability and maintainability.</li>
   <li>The UI is optimized for performance and accessibility.</li>
   <li>SEO techniques are implemented to improve search engine ranking.</li>
</ul>
<p align='justify'>
Enjoy building and exploring the Car Showcase Website! 🚀
</p>
<h3>Reference:</h3>
<ul>
   <li><a href="https://api-ninjas.com/api/cars">API for search cars</a></li>
   <li><a href="https://www.imaginstudio.com/pt">API for car's images</a></li>
   <li><a href="https://github.com/adrianhajdin/project_next13_car_showcase?tab=readme-ov-file">Original Car Showcase Project</a></li>
</ul>
</div>
