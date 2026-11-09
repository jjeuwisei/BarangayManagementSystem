const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

const ResidentRoutes = require("./routes/ResidentRoutes");

app.use("/api/residents", ResidentRoutes);
// app.get("/api/residents", 
// (req, res) =>
// {
//   res.json(residents);
// });
//
// app.get("/api", 
//   (req, res) => 
//   {
//     res.json
//     ({
//       message: "Barangay Management System API",
//       status: "Running"
//     });
//   });
//
app.listen(PORT, () => 
  {
    console.log(`server running at localhost: ${PORT}`);
  });
