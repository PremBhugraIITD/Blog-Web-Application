import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

let blogs = [
  {
    id: 1,
    title: "Welcome to My Blog",
    content:
      "This is the first blog post on this platform, and I am so excited to share it with you! Blogging has been a passion of mine, and I created this space to connect with like-minded individuals who enjoy reading, learning, and sharing knowledge. In this blog, you can expect a variety of topics ranging from personal development, technology trends, and lifestyle tips to thought-provoking insights and creative ideas. My goal is to create a vibrant and engaging community where readers can feel inspired and empowered. So, grab a cup of coffee, sit back, and enjoy the journey as we explore fascinating subjects together. I welcome your feedback and suggestions, so don't hesitate to reach out!",
    author: "Prem Bhugra",
    date: "14/12/2024, 9:58:30 pm",
  },
  {
    id: 2,
    title: "Tips for Writing Better Blogs",
    content:
      "Writing blogs can be a rewarding experience, but it also requires consistent effort and creativity to keep readers engaged. To write better blogs, start by identifying your target audience and understanding their interests and needs. This will help you tailor your content and choose topics that resonate with your readers. Always outline your posts before writing to ensure they have a clear structure and flow. Use captivating headlines to grab attention and organize your content with subheadings, bullet points, and visuals to make it easy to read. Write in a conversational tone to make your posts relatable and engaging. Don't forget to proofread your posts carefully to eliminate errors and improve clarity. Lastly, always encourage readers to interact with your blog by leaving comments or sharing their views, fostering a sense of community.",
    author: "Yati Singh",
    date: "14/12/2024, 11:50:21 pm",
  },
  {
    id: 3,
    title: "Understanding JavaScript Closures",
    content:
      "Closures are one of the most intriguing and essential concepts in JavaScript, and mastering them can significantly improve your coding skills. At their core, closures allow a function to access variables from its outer scope, even after the outer function has executed. This makes closures particularly useful for creating private variables, implementing data encapsulation, and writing modular code. For instance, consider a scenario where you want to create a function that generates unique IDs for each user. By using a closure, you can store the last generated ID in a private variable, ensuring it cannot be accessed or modified directly from the outside. Closures are also widely used in event handlers, callbacks, and functional programming paradigms. Understanding how closures work and experimenting with them in different contexts will help you unlock their full potential in your JavaScript projects.",
    author: "Khushi Jain",
    date: "15/12/2024, 1:30:45 am",
  },
  {
    id: 4,
    title: "Mastering Asynchronous JavaScript",
    content:
      "Asynchronous JavaScript is a key skill for modern web development. Understanding how to handle asynchronous operations is crucial for creating responsive and efficient applications. In JavaScript, asynchronous operations can be handled using callbacks, promises, and async/await syntax. Callbacks are the oldest way to handle asynchronous operations. A callback is a function passed as an argument to another function, which is then executed after the completion of an asynchronous operation. While callbacks are simple to use, they can lead to callback hell, a situation where callbacks are nested within other callbacks, making the code difficult to read and maintain.",
    author: "Alex Brown",
    date: "20/12/2024, 2:45:30 pm",
  },
];

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(morgan("tiny"));

let lastId = 4;

app.get("/", (req, res) => {
  console.log("User wants to see all the blogs.");
  console.log(blogs);
  res.render("home.ejs", { blogs: blogs });
});

app.get("/add", (req, res) => {
  res.render("update.ejs", { pageTitle: "Create" });
});

app.post("/add", (req, res) => {
  const newTitle = req.body.title;
  const newContent = req.body.content;
  const newAuthor = req.body.author;
  if (!newTitle || !newContent || !newAuthor) {
    res.send("Please provide all the required fields.");
  } else {
    const newBlog = {
      id: lastId + 1,
      title: newTitle,
      content: newContent,
      author: newAuthor,
      date: new Date().toLocaleString(),
    };
    blogs.push(newBlog);
    console.log("New blog added successfully!");
    console.log(newBlog);
    lastId++;
    res.redirect("/");
  }
});

app.post("/view/:id", (req, res) => {
  console.log(req.params);
  const viewID = parseInt(req.params.id);
  const viewBlog = blogs.find((blog) => {
    return blog.id === viewID;
  });
  console.log("Blog displayed for viewing.");
  console.log(viewBlog);
  res.render("view.ejs", { blog: viewBlog });
});

app.post("/edit/:id", (req, res) => {
  console.log(req.params);
  const editID = parseInt(req.params.id);
  const editBlog = blogs.find((blog) => {
    return blog.id === editID;
  });
  console.log("Blog displayed for editing.");
  console.log(editBlog);
  res.render("update.ejs", { pageTitle: "Edit", blog: editBlog });
});

app.post("/update/:id", (req, res) => {
  const updateId = parseInt(req.params.id);
  const updatedTitle = req.body.title;
  const updatedContent = req.body.content;
  const updatedAuthor = req.body.author;
  if (!updatedTitle || !updatedContent || !updatedAuthor) {
    res.send("Please provide all the required fields.");
  } else {
    const updatedBlog = {
      id: updateId,
      title: updatedTitle,
      content: updatedContent,
      author: updatedAuthor,
      date: new Date().toLocaleString(),
    };
    blogs = blogs.map((blog) => {
      if (blog.id === updateId) {
        return updatedBlog;
      } else {
        return blog;
      }
    });
    console.log("Blog updated successfully!");
    console.log(updatedBlog);
    res.redirect("/");
  }
});

app.delete("/delete/:id", (req, res) => {
  console.log(req.params);
  const deleteId = parseInt(req.params.id);
  blogs = blogs.filter((blog) => {
    return blog.id !== deleteId;
  });
  console.log("Blog deleted successfully!");
  res.json({ message: "Blog deleted successfully!" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
