# MongoDB - Mongoose SeshBuilderServer

## About
Sesh Builder allows the practitioner to upload poses, build a session, and share that session with other practitioners. When uploading the 

## Project setup
```
npm install
```

### Run
```
npm run start
```

## To-Do / User Stories
A generic user can:
    -view a list of available poses
    -view a list of available sessions
    -add poses to db.poses
    -create a new session
    -poses can have variable reps and sets

        *eg: 
            Jumping Jacks
                isBilateral: false
                reps: 1
                sets: 1
                minutes: 0
            Sitting Meditation
                isBilateral: false
                reps: 1
                sets: 1
                minutes: 30
            Jump Rope
                isBilateral: false
                reps:1
                sets: 2
                minutes: 2
            One Leg Standing
                isBilateral: true
                reps:1
                sets: 1
                minutes: 3
            // if(isBilateral) { doItOnBothSides() }
            
            
            


