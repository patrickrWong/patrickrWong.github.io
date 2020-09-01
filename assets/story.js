// STORY TEXT
const storyText = [
    {
        id: 1,
        text: "You awaken in a bed that you've now spent weeks in. The air is clean and quiet, and yet a mild odor lofts in the room like old fabric. It is bright out, and you feel the warmth of the sun piercing through the window in your room. It is now 11am. You realize you've spent the morning confinded to your quarters.",
        choices: [
            {
                text: "Lay in bed longer. You dont have the strength to move.",
                nextText: 2
            },
            {
                text: "Look out of the window",
                nextText: 3
            },
            {
                text: "Get out of bed.",
                nextText: 4
            },
        ]
    },
    {
        id: 2,
        text: "Perhaps it is time you get up. The day is young!",
        choices: [
            {
                text: "Look out of the window",
                nextText: 3
            },
            {
                text: "Get out of bed.",
                nextText: 4
            },
        ]
    },
    {
        id: 3,
        text: "Outside is the courtyard where there are a handful of familiar faces partaking in a yoga class. You don't have much better to do, but you have more interesting plans for the day than that.",
        choices: [
            {
                text: "Get out of bed.",
                nextText: 4
            },
        ]
    },
    {
        id: 4,
        text: "You step slowly out of bed. Your body is slightly weak, but that shouldn't stop you. There isn't much in the room-- a small desk, a chair, and the door leading out into a brightly lit hallway.",
        choices: [
            {
                text: "Approach the desk.",
                nextText: 5
            },
            {
                text: "Head out the door.",
                nextText: 6
            },
        ]
    },
    {
        id: 5,
        text: "A photo and some art supplies. Mom and Dad look happy as always. You see yourself-- you looked handsome that day. There is a fourth person in the picture. Enough of that... you're more focused on the art supplies your father dropped by a week ago.",
        choices: [
            {
                text: "Grab the art supplies and head out the door",
                setState: { draw: true },
                nextText: 6
            },  
            {
                text: "Head out the door. You'll draw later.",
                nextText: 6
            },
        ]
    },
    {
        id: 6,
        text: "The hallway is emptier than normal except for the few usual suspects. Perhaps the sun has everyone outside after all. Now would be good time to explore the area a little.",
        choices: [
            {
                text: "Sit outside the room and draw",
                requiredState: (currentState) => currentState.draw,
                //setState: { plane: false },
                nextText: 7
            }, 
            {
                text: "Go outside after all. The sunlight will feel good.",
                nextText: 8
            },
            {
                text: "The library is down the hall. You should pick up a new book.",
                nextText: 9
            },
        ]
    },
    {
        id: 7,
        text: "Slumped down on the floor, you begin to draw a beautiful bird. One you recall seeing the other day out the window. Halfway into your drawing and a woman approaches you. She asks you of the drawing.",
        choices: [
            {
                text: "Ignore her.",
                nextText: 10
            },
            {
                text: "Explain the bird.",
                nextText: 11
            },
        ]
    },
    {
        id: 8,
        text: "The sun is beating down, but the shade is still cool on your body. It's a beautiful day. Maybe you can be inspired to do something good today.",
        choices: [
            {
                text: "Sit and draw.",
                requiredState: (currentState) => currentState.draw,
                nextText: 12
            },
            {
                text: "Join the yoga class.",
                nextText: 13
            },
        ]
    },
    {
        id: 9,
        text: "There is a sign on the door. 'Library is closed for the day'. Best you come back tomorrow, and think of another way to spend the day.",
        choices: [
            {
                text: "Sit outside the room and draw",
                requiredState: (currentState) => currentState.draw,
                //setState: { plane: false },
                nextText: 7
            }, 
            {
                text: "Go outside after all. The sunlight will feel good.",
                nextText: 8
            },
        ]
    },
    {
        id: 10,
        text: "'You know, it isn't polite to ignore someone when youre having a bad day, Oliver'. She is calm despite your sudden rudeness. She reminds you that your next session is in an hour.",
        choices: [
            {
                text: "Head to your session.",
                setState: { rude: true },
                nextText: 14
            },
        ]
    },
    {
        id: 11,
        text: "You begin to explain the bird visitor. How you believe it has come to check on you, and make sure you're okay. You joke to the nurse that perhaps you've made a friend here.",
        choices: [
            {
                text: "Continue chatting.",
                nextText: 15
            },
        ]
    },
    {
        id: 12,
        text: "You begin to draw the people doing yoga on the lawn. They look quite happy with themselves. You remember that you have a session in an hour, but the coolness of the shade and the medications are taking a toll on your body.",
        choices: [
            {
                text: "Take a nap",
                nextText: 16
            },
            {
                text: "Join the yoga class.",
                nextText: 13
            },
        ]
    },
    {
        id: 13,
        text: "The yoga class commences.",
        choices: [
            {
                text: "Do yoga.",
                nextText: 30
            }, 
            {
                text: "Pause. Breathe. Refresh the page.",
                nextText: 30
            },
        ]
    },
    {
        id: 14,
        text: "The doctor stares at you. He is a kind looking man, and he is jotting down notes in his book.",
        choices: [
            {
                text: "Apologize for being rude earlier",
                requiredState: (currentState) => currentState.rude,
                nextText: 30
            }, 
            {
                text: "Ignore the doctor too.",
                requiredState: (currentState) => currentState.rude,
                nextText: 30
            },
            {
                text: "Show the doctor the drawing",
                requiredState: (currentState) => currentState.painting,
                setState: { painting: false },
                nextText: 30
            }, 
            {
                text: "Start a conversation.",
                nextText: 30
            }, 
        ]
    },
    {
        id: 15,
        text: "'You're remarkably good, Oliver'. She suggests bringing it to the next session which is actually in the next hour.",
        choices: [
            {
                text: "Head to your session.",
                setState: { painting: true },
                nextText: 14
            },
        ]
    },
    {
        id: 16,
        text: "'Arise!', you hear. You open your eyes to a small fire burning in the dusk of the evening. 'Sit up slowly, your body will be tired.' The voice is now clearer. It is an older woman's voice. She sounds comforting yet stern.",
        choices: [
            {
                text: "Sit up slowly.",
                nextText: 17
            },
        ]
    },
    {
        id: 17,
        text: "The woman helps you up. You look around and see people carrying out their normal tasks. The earth around you is barren, frozen, yet it is not alarming to you. It feels familiar.",
        choices: [
            {
                text: "Where am I?",
                nextText: 18
            }, 
            {
                text: "Who are you?",
                nextText: 19
            },
        ]
    },
    {
        id: 18,
        text: "'Why, you are home, my dear. You have just taken the final ritual in our tribe's coronation for our future shaman. Your body and mind will feel worn out, but you should be proud of surviving the serum's vemon.'",
        choices: [
            {
                text: "Shaman?",
                nextText: 22
            }, 
            {
                text: "Ritual?",
                nextText: 22
            },
        ]
    },
    {
        id: 19,
        text: "'I am your predecessor. You have just taked the final ritual that has been passed on for generations. I understand sometimes the serum causes a bit of amnesia. Hopefully, my child, you remember who you are.'",
        choices: [
            {
                text: "Who am I?",
                nextText: 22
            }, 
            {
                text: "I remember.",
                nextText: 22
            },
            {
                text: "Ritual?",
                nextText: 22
            }, 
        ]
    },
]

