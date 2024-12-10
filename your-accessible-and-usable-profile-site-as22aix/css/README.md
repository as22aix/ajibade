/* General Styles */
body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  margin: 0;
  padding: 0;
  background: blue;
  color: red;
}

.container {
  max-width: 100px;
  max-width: 100px;
  margin: auto;
  padding: 20px;
  text-align: center;
}

/* Header */
header {
  background: linear-gradient(90deg, green, gray);
  color: blue;
  padding: 1rem 0;
  text-align: center;
}

header h1 {
  font-size: 2.5rem;
}

header nav ul {
  list-style: none;
  padding: 0;
}

header nav ul li {
  display: inline;
  margin: 0 10px;
}

header nav ul li a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}

header nav ul li a:hover {
  text-decoration: underline;
}

/* Sections */
section {
  margin: 2rem 0;
  padding: 2rem 1rem;
  border-radius: 10px;
}

/* About Section */
#about {
  background: #e3f2fd;
}

#about .profile-img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
}
}

/* Interests Section */
#interests {
  background: #f5f5f5;
}

.interests-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.interest {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

/* Portfolio Section */
#portfolio {
  background: #e1f5fe;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.project img {
  max-width: 100%;
  border-radius: 5px;
}

.project {
  background: blue;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

/* Footer */
footer {
  background: blue;
  color: yellow;
  padding: 1rem 0;
}

