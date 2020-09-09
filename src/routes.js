const express = require("express");
const Session = require("./models/Session");
//const Pose = require("./models/Pose");
const router = express.Router();

//GET ALL SESSIONS
router.get("/session", async (req, res) => {
    const sessions = await Session.find()
    res.send(sessions);
});

//GET ONE SESSION
router.get("/session/:sessionId", async (req, res) => {
    const sessionId = req.params.sessionId;
    const session = await Session.findById(sessionId);
    res.send(session);
});

// POST SESSION...done
// WITH POSE LIST...done
// WITH AUTHORSHIP... done
// CAN SHARE WITH... done

router.post("/session", async (req, res) => {
    var sesh = req.body;
    const session = new Session(sesh);
    try {
        await session.save();
        res.send({
            "Message": "You saved a session!",
            session
        });
    }
    catch(err) {
        res.send(err.message);
    }
});

// PUT SESSION...
router.put("/session", async (req, res) => {
    const sesh = await Session.updateOne({_id: req.body._id}, { $push: { sharedWith : req.body.sharedWith }}, {new: true});
    
    console.log(sesh);
    res.send(sesh);
});

module.exports = router;