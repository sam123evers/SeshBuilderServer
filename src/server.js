const mongoose = require("mongoose");
const db = require("./models");
const express = require("express");
const routes = require("./routes");
const bodyParser = require('body-parser'); 

const PORT = 3000;

mongoose
  .connect("mongodb://127.0.0.1:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {

    const app = express();
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true })); 
    
    app.use("/api", routes);
    
    app.listen(PORT, () => {
      console.log("Successfully connected to MongoDB.");
      console.log("Express App listening on", PORT);
    })
  })

  .catch(err => console.error("Connection error", err));

// const createTutorial = function(tutorial) {
//   return db.Tutorial.create(tutorial).then(docTutorial => {
//     console.log("\n>> Created Tutorial:\n", docTutorial);
//     return docTutorial;
//   });
// };

// const createTag = function(tag) {
//   return db.Tag.create(tag).then(docTag => {
//     console.log("\n>> Created Tag:\n", docTag);
//     return docTag;
//   });
// };

// const addTagToTutorial = function(tutorialId, tag) {
//   return db.Tutorial.findByIdAndUpdate(
//     tutorialId,
//     { $push: { tags: tag._id } },
//     { new: true, useFindAndModify: false }
//   );
// };

// const addTutorialToTag = function(tagId, tutorial) {
//   return db.Tag.findByIdAndUpdate(
//     tagId,
//     { $push: { tutorials: tutorial._id } },
//     { new: true, useFindAndModify: false }
//   );
// };

// const getTutorialWithPopulate = function(id) {
//   // return db.Tutorial.findById(id).populate("tags");
//   return db.Tutorial.findById(id).populate("tags", "-_id -__v -tutorials");
// };

// const getTagWithPopulate = function(id) {
//   // return db.Tag.findById(id).populate("tutorials");
//   return db.Tag.findById(id).populate("tutorials", "-_id -__v -tags");
// };

// const run = async function() {
//   var tut1 = await createTutorial({
//     title: "Tut #1",
//     author: "bezkoder"
//   });

//   var tagA = await createTag({
//     name: "tagA",
//     slug: "tag-a"
//   });

//   var tagB = await createTag({
//     name: "tagB",
//     slug: "tag-b"
//   });

//   var tutorial = await addTagToTutorial(tut1._id, tagA);
//   console.log("\n>> tut1:\n", tutorial);

//   var tag = await addTutorialToTag(tagA._id, tut1);
//   console.log("\n>> tagA:\n", tag);

//   tutorial = await addTagToTutorial(tut1._id, tagB);
//   console.log("\n>> tut1:\n", tutorial);

//   tag = await addTutorialToTag(tagB._id, tut1);
//   console.log("\n>> tagB:\n", tag);

//   var tut2 = await createTutorial({
//     title: "Tut #2",
//     author: "zkoder"
//   });

//   tutorial = await addTagToTutorial(tut2._id, tagB);
//   console.log("\n>> tut2:\n", tutorial);

//   tag = await addTutorialToTag(tagB._id, tut2);
//   console.log("\n>> tagB:\n", tag);

//   tutorial = await getTutorialWithPopulate(tut1._id);
//   console.log("\n>> populated tut1:\n", tutorial);

//   tag = await getTagWithPopulate(tag._id);
//   console.log("\n>> populated tagB:\n", tag);
// };



//run();
