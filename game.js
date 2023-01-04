


let startScene = {


  title: "Your day begins...",
  text: "",
  
};




const desk2Scene = {
  title: "Back at your desk...", // THIS SETS THE GAME SCENE TITLE
  text: "",

};

const underdeskScene = {
  title: "Under the desk",
  text: "",
  choices: [
    {
      text: "Go back to your desk",
      nextScene: 'desk2',
      action: incrementWrapLow,
      update: "yes"

    }
  ]
};

const onbreakScene = {
  title: "Nice try....",
  text: "",
  choices: [
    {
      text: "Go back to your desk",
      nextScene: 'desk2',
      action: incrementWrapLow,
      update: "yes"

    }
  ]
};

const mateScene = {
  title: "",
  text: "",
  
};

const mate2Scene = {
  title: "having a chat",
  text: "",
  choices: [
    {
      text: "Chat a little more",
      nextScene: 'mate3',
      action: incrementWrapHigh,
      update: "yes"

    },
    {
      text: "Go back to your desk",
      nextScene: 'desk2',
      action: incrementWrapLow,
      update: "yes"

    }
  ]
};

const mate3Scene = {
  title: "still chatting...",
  text: "",
  choices: [
    {
      text: "Talk even more",
      nextScene: 'mate4',
      action: incrementWrapHigh,
      update: "yes"

    },
    {
      text: "Go back to your desk",
      nextScene: 'desk2',
      action: incrementWrapLow,
      update: "yes"

    }
  ]
};

const mate4Scene = {
  title: "dragging it out...",
  text: "You talk about work for a bit and the astronomical price increase in 2023. Your wrap is continuing to increase and you should really, really get some work done,  Do you...",
  choices: [
    {
      text: "Keep Chatting",
      nextScene: 'mate5',
      action: incrementWrapHigh,
      update: "yes"

    },
    {
      text: "Go back to your desk",
      nextScene: 'desk2',
      action: incrementWrapLow,
      update: "yes"

    }
  ]
};

const mate5Scene = {
  title: "A kind gesture",
  text: "",
  choices: [
    {
      text: "Take the £2.50",
      nextScene: 'moneyitem',
      action: NoAction,
      update: "yes"

    }
  ]
};
const pretendScene = {
  title: "On a call?",
  text: ``,
  choices: [
    {
      text: "Make your way outside",
      nextScene: 'walkoff',
      action: incrementWrapLow,
      update: "yes"
    },
    {
      text: "Go to the toilet and have a vape",
      nextScene: 'toilet',
      action: incrementWrapMed,
      update: "yes"
    },

    {
      text: "Go to the break room and have a vape",
      nextScene: 'breakroom',
      action: incrementWrapLow,
      update: "yes"

    }
  ]
};
const walkoffScene = {
  title: "Which way?",
  text: "As you get up from your desk, you wonder which way to go. Do you take the stairs or the lift?",
  choices: [
    {
      text: "Take the stairs",
      nextScene: 'stairs',
      action: incrementWrapLow,
      update: "yes"
    },
    {
      text: "Take the lift",
      nextScene: 'lift',
      action: incrementWrapLow,
      update: "yes"

    }
  ]
};
const toiletScene = {
  title: "In the toilet",
  text: "",
  choices: [
    {
      text: "Go back to your desk",
      nextScene: 'filenote',
      action: addFilenote,
      update: "yes"

    }
  ]
};
const breakroomScene = {
  title: "The Break Room",
  text: "",
  choices: [
    {
      text: "Go back to your desk",
      nextScene: 'filenote',
      action: addFilenote,
      update: "yes"

    }
  ]
};
const stairsScene = {
  title: "In the stairwell?",
  text: "As the stairwell is closest to your desk, you figure that will be the best escape route.  You sneak off and start walking down the stairs and wonder if you could risk it and use the fire exit for an even quicker escape. What do you do?",
  choices: [
    {
      text: "Go through the fire exit",
      nextScene: 'fireexit',
      action: incrementWrapMed,
      update: "yes"

    },
    {
      text: "Go through the door",
      nextScene: 'floor1alt2',
      action: incrementWrapLow,
      update: "yes"
    }
  ]
};
const fireexitScene = {
  title: "You're free!",
  text: "You push the bar on the fire exit door and it opens. You're free at last!  Where now?",
  choices: [
    {
      text: "Go out of the barriers and leave the premises",
      nextScene: "barriers",
      action: incrementWrapMed,
      update: "yes"
    },
    {
      text: "Walk up to the fag shed",
      nextScene: "fagshed",
      action: incrementWrapMed,
      update: "yes"
    },
    {
      text: "Go towards the car park",
      nextScene: "carpark",
      action: incrementWrapMed,
      update: "yes"
    },
    {
      text: "Hide in a bush",
      nextScene: "bush",
      action: incrementWrapHigh,
      update: "yes"
    },

  ]
};
const barrierScene = {
  title: "Walking off....",
  text: "",
  choices: [
    {
      text: "Go back to your desk",
      nextScene: 'filenote',
      action: addFilenote,
      update: "yes"

    }
  ]
};
const fagshedScene = {
  title: "Up to the fag shed.",
  text: "",
  choices: [
    {
      text: "Go back to your desk",
      nextScene: 'filenote',
      action: addFilenote,
      update: "yes"

    }
  ]
};
const carparkScene = {
  title: "Down to the carpark.",
  text: "",
  choices: [
    {
      text: "Go back to your desk",
      nextScene: 'filenote',
      action: addFilenote,
      update: "yes"

    }
  ]
};
const bushScene = {
  title: "Hiding in a bush",
  text: "",
  choices: [
    {
      text: "Go back to your desk",
      nextScene: 'filenote',
      action: addFilenote,
      update: "yes"

    }
  ]
};
const liftScene = {
  title: "In the lift",
  text: "You step into the lift, press the button for the first floor and wait for the doors to close. It looks like no one noticed and you let out a sigh of relief. As you descend in the lift, suddenly you hear a groan from the lift shaft and an awful sound of metal on metal.  The lift grinds to a halt and a wave of panic washes over you. What do you do?",
  choices: [
    {
      text: "Press the emergency button",
      nextScene: 'alarm',
      action: incrementWrapLow,
      update: "yes"

    },
    {
      text: "Wait to see if it starts moving again",
      nextScene: 'wait1',
      action: incrementWrapLow,
      update: "yes"
    }
  ]
};
const alarmScene = {
  title: "You press the emergency button....",
  text: ``,
  choices: [
    {
      text: "Wait for Security",
      nextScene: 'waitsteve',
      action: incrementWrapLow,
      update: "yes"

    },
  ]
};
const waitsteveScene = {
  title: "You wait.....",
  text: "",
  choices: [
    {
      text: "Try again?",
      nextScene: 'start',
      action: reload,
      update: "yes"
    },

  ]
};
const wait1Scene = {
  title: "Still in the lift",
  text: "You wait and wait, but the lift doesn't start moving again.  You start to panic and wonder what to do.  You could press the emergency button, but you don't want to waste the Fire Brigade's time.  What do you do?",
  choices: [
    {
      text: "Press the emergency button",
      nextScene: 'alarm',
      action: incrementWrapLow,
      update: "yes"

    },
    {
      text: "Wait to see if it starts moving again",
      nextScene: 'wait2',
      action: incrementWrapLow,
      update: "yes"
    }
  ]
};
const wait2Scene = {
  title: "You wait longer..",
  text: "You carry on waiting and waiting, but the lift doesn't start moving again.  You really want to get out of here.  What do you do?",
  choices: [
    {
      text: "Press the emergency button",
      nextScene: 'alarm',
      action: incrementWrapLow,
      update: "yes"

    },
    {
      text: "Wait to see if it starts moving again",
      nextScene: 'wait3',
      action: incrementWrapMed,
      update: "yes"
    }
  ]
};
const wait3Scene = {
  title: "still waiting......",
  text: "You carry on waiting and waiting, and waiting, but the lift is not budging.  You start to feel a bit claustrophobic and you can't help but think that you should have taken the stairs.  Do you press the emergency button?",
  choices: [
    {
      text: "Press the emergency button",
      nextScene: 'alarm',
      action: incrementWrapLow,
      update: "yes"

    },
    {
      text: "Wait to see if it starts moving again",
      nextScene: 'wait4',
      action: incrementWrapMed,
      update: "yes"

    }
  ]
};
const wait4Scene = {
  title: "still waiting......",
  text: "You carry on waiting and waiting, and waiting, and waiting, but the lift is STILL not budging.  You are really worried now.  the claustrophobia is getting worse and your wrap is just increasing.  Do you press the emergency button?",
  choices: [
    {
      text: "Press the emergency button",
      nextScene: 'alarm',
      action: incrementWrapLow,
      update: "yes"

    },
    {
      text: "Wait to see if it starts moving again",
      nextScene: 'wait5',
      action: incrementWrapMed,
      update: "yes"
    }
  ]
};
const wait5Scene = {
  title: "still waiting......",
  text: "Sat on the floor of the lift, you almost fall asleep when suddenly you hear a loud bang and the lift starts moving again.  It creaks and groans until you hit the bottom with a thud and miraculously, the doors open.  You are so relieved that you almost cry.  The lift doors make a noise, then slowly creak open....",
  choices: [
    {
      text: "Walk out of the lift",
      nextScene: 'floor1',
      action: incrementWrapLow,
      update: "yes"
    },
  ]
};
const floor1Scene = {
  title: "Into Sitel territory...",
  text: "",
  choices: [
    {
      text: "Talk to Mick",
      nextScene: 'mick',
      action: incrementWrapHigh,
      update: "yes"
    },
    {
      text: "Go into the canteen",
      nextScene: 'canteen',
      action: incrementWrapLow,
      update: "yes"
    },
    {
      text: "Hide in the cinema room",
      nextScene: 'cinema',
      action: incrementWrapLow,
      update: "yes"
    },
    {
      text: "Head outside",
      nextScene: 'maindoor',
      action: incrementWrapLow,
      update: "yes"
    },
    {
      text: "Go Back To Your Desk.",
      nextScene: 'desk2',
      action: incrementWrapLow,
      update: "yes"
    }
  ]
};
const floor1alt2Scene = {
  title: "Into Sitel territory...",
  text: "",
  choices: [
    {
      text: "Talk to Mick",
      nextScene: 'mick',
      action: incrementWrapHigh,
      update: "yes"
    },
    {
      text: "Go into the canteen",
      nextScene: 'canteen',
      action: incrementWrapLow,
      update: "yes"
    },
    {
      text: "Hide in the cinema room",
      nextScene: 'cinema',
      action: incrementWrapLow,
      update: "yes"
    },
    {
      text: "Head outside",
      nextScene: 'maindoor',
      action: incrementWrapLow,
      update: "yes"
    },
    {
      text: "Go back to your desk",
      nextScene: 'start',
      action: NoAction,
      update: "yes"

    }
  ]
};

const mickScene = {
  title: "",
  text: "",
  choices: [
    {
      text: "carry on talking to Mick",
      nextScene: 'mick2',
      action: incrementWrapHigh,

      update: "yes"
    },
    {
      text: "carry on what you were doing",
      nextScene: 'floor1alt',
      action: incrementWrapLow,
      update: "yes"
    },
  ]
};
const mick2Scene = {
  title: "",
  text: "",
  choices: [
    {
      text: "carry on talking to Mick",
      nextScene: 'mick3',
      action: incrementWrapHigh,
      update: "yes"
    },
    {
      text: "carry on what you were doing",
      nextScene: 'floor1alt',
      action: incrementWrapLow,
      update: "yes"
    },
  ]
};
const mick3Scene = {
  title: "",
  text: "",
  choices: [
    {
      text: "Take the IT Ticket",
      nextScene: 'ITissueItem',
      action: NoAction,
      update: "yes"
    },
  ]
};
const floor1altScene = {
  title: "still waiting......",
  text: "",
  choices: [
    {
      text: "Go into the canteen",
      nextScene: 'canteen',
      action: incrementWrapLow,
      update: "yes"
    },
    {
      text: "Hide in the cinema room",
      nextScene: 'cinema',
      action: incrementWrapLow,
      update: "yes"
    },
    {
      text: "Head outside",
      nextScene: 'maindoor',
      action: incrementWrapLow,
      update: "yes"
    },
    {
      text: "Go back to your desk",
      nextScene: 'start',
      action: incrementWrapLow,
      update: "yes"
    }
  ]
};
const cinemaScene = {
  title: "In the cinema room",
  text: "You decide to duck into the cinema room and sit down. You put your feet up and chill in the darkness and the next thing you know, you're fast asleep.............",
  choices: [
    {
      text: "Zzzzzzz",
      nextScene: 'zzz',
      action: incrementWrapHigh,
      update: "yes"
    },
  ]
};
const zzzScene = {
  title: "Dreaming....",
  text: "",
  choices: [
    {
      text: "Back to your desk",
      nextScene: 'filenote',
      action: addFilenote,
      update: "yes"
    },
  ]
};
const canteenScene = {
  title: "In the canteen",
  text: "You're in the canteen, it's quite busy for a change. You see the vending machines to your left and Lindsay is smiling as she serves lunch. Some of your mates sat at a table.  What now?",
  choices: [
    {
      text: "Talk to Lindsay",
      nextScene: 'lindsay',
      action: incrementWrapMed,
      update: "yes"
    },
    {
      text: "Talk to your mates",
      nextScene: 'tablemates',
      action: incrementWrapHigh,
      update: "yes"
    },
    {
      text: "Go to the vending machines",
      nextScene: 'vending',
      action: incrementWrapLow,
      update: "yes"
    },
    {
      text: "Leave the canteen",
      nextScene: 'floor1',
      action: incrementWrapLow,
      update: "yes"
    },
  ]
};
const lindsayScene = {
  title: "Lindsay",
  text: "You say hi to Lindsay, exchange some pleasantries, but she looks busy and you don't want to hold her up.",
  choices: [
    {
      text: "Talk to your mates",
      nextScene: 'tablemates',
      action: incrementWrapHigh,
      update: "yes"
    },
    {
      text: "Go to the vending machines",
      nextScene: 'vending',
      action: incrementWrapLow,
      update: "yes"
    },
    {
      text: "Leave the canteen",
      nextScene: 'floor1',
      action: incrementWrapLow,
      update: "yes"
    },
  ]
};
const tablematesScene = {
  title: "At the lunch table",
  text: "You sit down with your mates and join in the conversation.  It's not very interesting, but you don't want to be rude and leave.  You're not sure how long you've been there, but you're starting to feel a bit hungry.",
  choices: [
    {
      text: "Stay at the table",
      nextScene: 'tablemates2',
      action: incrementWrapHigh,
      update: "yes"
    },
    {
      text: "Talk to Lindsay",
      nextScene: 'lindsay',
      action: incrementWrapMed,
      update: "yes"
    },
    {
      text: "Go to the vending machines",
      nextScene: 'vending',
      action: incrementWrapLow,
      update: "yes"
    },
    {
      text: "Leave the canteen",
      nextScene: 'floor1',
      action: incrementWrapLow,
      update: "yes"
    },
  ]
};
const tablemates2Scene = {
  title: "Still at the lunch table...",
  text: "Not wanting to be rude, you stay at the table and talk a bit longer.  One of your mates forgot their wallet and are just watching the others eat lunch.  He looks hungry.  But so are you.  The conversation gets about as stale as a week old pizza crust.",
  choices: [
    {
      text: "Lend your mate £2.50",  // I only want this choice to show if the player has money in their wallet
      nextScene: 'lend',
      action: RemoveMoney,
      update: "yes"
    },
    {
      text: "Go back",
      nextScene: 'canteen',
      action: incrementWrapLow,
      update: "yes"
    },
    {
      text: "Leave the canteen",
      nextScene: 'floor1',
      action: incrementWrapLow,
      update: "yes"
    },
  ]
};
const lendScene = {
  title: "Good deed for the day....",
  text: "Feeling sorry for your mate, you offer to lend him £2.50.  He takes it and goes to the vending machines.                      He didn't seem that grateful and you wonder if that was the right choice.  Now what?",
  choices: [
    {
      text: "Go back",
      nextScene: 'canteen',
      action: RemoveMoney,
      update: "yes"
    },
    {
      text: "Leave the canteen",
      nextScene: 'floor1',
      action: incrementWrapLow,
      update: "yes"
    },
  ]
};

const vendingScene = {
  title: "The vending machines",
  text: "You walk over to the vending machines. There's the coffee machine and the snack machine.  A large coffee sounds good, but so does a bag of Cheese and Onion McCoys. They are £2.50 each, What do you do?",
  choices: [
    {
      text: "Buy some crisps",
      nextScene: 'crisps',
      action: NoAction,
      update: "yes"
    },
    {
      text: "Buy a coffee",
      nextScene: 'coffee',
      action: NoAction,
      update: "yes"
    },
    {
      text: "Go back",
      nextScene: 'canteen',
      action: incrementWrapLow,
      update: "yes"
    },
  ]
};
const crispsScene = {
  title: "The vending machines",
  text: "You pull out your £2.50 and feed the coins into the slot. You press E5 and hope the bag of McCoys doesn't get stuck.  You're not sure if you should have bought the coffee, but you're hungry and you're not going to turn down a bag of crisps.",
  choices: [
    {
      text: "Go back",
      nextScene: 'canteen',
      action: AddCrispsItem,
      update: "yes"
    },
  ]
};
const coffeeScene = {
  title: "Large cappuccino please",
  text: "You pull out your £2.50 and feed the coins into the slot. Hoping there's milk in the machine, you press Large Cappuccino and wait.  You're not sure if you should have bought the crisps, but it's too late anyway.  Your coffee is ready so you take it, but it's too hot to drink now, so you put a lid on and take it with you.",
  choices: [
    {
      text: "Go back",
      nextScene: 'canteen',
      action: AddCoffeeItem,
      update: "yes"
    },
  ]
};
const nomoneyScene = {
  title: "You're skint pal...",
  text: "",
  choices: [
    {
      text: "Go back",
      nextScene: 'canteen',
      action: incrementWrapLow,
      update: "yes"
    },
  ]
};
const maindoorScene = {
  title: "You head towards the exit",
  text: "",
  choices: [
    {
      text: "Tell him you've been trying to skive off",
      nextScene: 'skive',
      action: NoAction,
      update: "yes"
    },
    {
      text: "Make up another excuse",
      nextScene: 'excuse',
      action: NoAction,
      update: "yes"
    },
    {
      text: "Tell him you went to buy him a coffee",  // need to only show this option if you have the coffee
      nextScene: 'bribe',
      action: NoAction,
      update: "yes"
    },
  ]
};


const skiveScene = {
  title: "The confession",
  text: "",
  choices: [
    {
      text: "Go back to your desk",
      nextScene: 'desk2',
      action: NoAction,
      update: "yes"
    }
  ]
};

const excuseScene = {
  title: "The excuse",
  text: "",
  choices: [
    {
      text: "Go back to your desk",
      nextScene: 'filenote',
      action: addFilenote,
      update: "yes"
    }
  ]
};
const bribeScene = {
  title: "The bribe",
  text: ``,
  choices: [
    {
      text: "Continue",
      nextScene: 'afterbribe',
      action: RemoveCoffee,
      update: "yes"
    },
  ]
};
const afterbribeScene = {
  title: "The bribe",
  text: ``,
  choices: [
    {
      text: "Carry on",
      nextScene: 'hallway',
      action: incrementWrapLow,
      update: "yes"
    },

  ]
};
const hallwayScene = {
  title: "In the hallway",
  text: ``,
  
};

const endScene = {
  title: "THE END",
  text: `That's currently the end of the game.  The game is still in development, so please check back soon for more chapters!`,
  choices: [
    {
      text: "Play again?",
      nextScene: 'start',
      action: reload,
      update: "yes"
    },
    {
      text: "Buy me a coffee?",

      action: () => {
        window.open('https://www.buymeacoffee.com/peterharpham');
      },
      update: "no"
    },
    {
      text: "Visit my other website",
      action: () => {
        window.open('https://www.memorymoons.com');
      },
      update: "yes"
    },
  ]
};
const outsideScene = {
  title: "Chapter 2 - Outside",
  text: `You've finally escaped the call centre!  The sun is shining and you feel good about yourself.  It doesn't take long for you to decide that you're not going back to work today so you give yourself the rest of the day off and will face the consequenses.  You are feeling adventurous and decide to go and find something interesting to do.   Where do you go next? `,
  choices: [
    {
      text: "Get in your car",
      nextScene: 'car',
      action: NoAction,
      update: "yes"
    },
    {
      text: "Go for a walk",
      nextScene: 'walk',
      action: NoAction,
      update: "yes"
    },
    {
      text: "Go back inside",
      nextScene: 'backinside',
      action: NoAction,
      update: "yes"
    },
  ]

};
const backinsideScene = {
  title: "Really?",
  text: `After all that you've gone through to get out of this place, you want to go back in????  No way!  You're not going back in there!`,
  choices: [
    {
      text: "Go back",
      nextScene: 'outside2',
      action: NoAction,
      update: "yes"
    },
  ]
};
const walkScene = {
  title: "Off you toddle",
  text: "",
  choices: [
    {
      text: "Give him your toolbox",
      nextScene: 'blueorred',
      action: NoAction,
      update: "yes"
    },
    {
      text: "Go back",
      nextScene: 'outside2',
      action: NoAction,
      update: "yes"
    },
  ]
};
const blueorredScene = {
  title: "An important decision",
  text: `You hand over your toolbox and the mysterious man takes it, ponders for a while and reaches into the pocket of his jacket and pulls out a small, velvet pouch. "Hey kid," he says, "interested in a little adventure?" He opens the pouch to reveal two small pills - one is blue and the other is red.  He extends his arm towards and says "This your last chance. After this there is no turning back. You take the blue pill, the story ends. You wake up in your bed and believe whatever you want to. You take the red pill, you stay in Wonderland, and I show you how deep the rabbit hole goes. Remember, all I'm offering is the truth. Nothing more." The scenario feels oddly familiar, almost like it's from a movie.  You hesitate for a moment, not sure what to do. The man seems shady, and you're not sure if you can trust him. On the other hand, the prospect of an adventure is tempting.`,
  choices: [
    {
      text: "Take the blue pill",
      nextScene: 'bluepill',
      action: NoAction,
      update: "yes"
    },
    {
      text: "Take the red pill",
      nextScene: 'redpill',
      action: NoAction,
      update: "yes"
    },
    {
      text: "Tell the weirdo to get lost",
      nextScene: 'getlost',
      action: NoAction,
      update: "yes"
    },
  ]
};
const getlostScene = {
  title: "a wise decision?",
  text: `You tell the fruitloop to get lost, and he looks at you with a mixture of anger and disappointment. "You're not going to take the red pill?" he asks. "I don't have time for this" you reply, and you turn and walk away. As you walk away, you hear the sound of footsteps behind you. The next thing you remember is waking up in hospital.  You Lose!`,
  choices: [
    {
      text: "End the game",
      nextScene: 'end',
      action: NoAction,
      update: "yes"
    },
  ]
};
const bluepillScene = {
  title: "The Blue Pill",
  text: `You take the blue pill and the story continues from here........`,
  choices: [
    {
      text: "End the game",
      nextScene: 'end',
      action: NoAction,
      update: "yes"
    },
  ]
};
const redpillScene = {
  title: "The Red Pill",
  text: `You take the red pill and the story continues from here........`,
  choices: [
    {
      text: "End the game",
      nextScene: 'end',
      action: NoAction,
      update: "yes"
    },
  ]
};
const outside2Scene = {
  title: "Outside",
  text: `You're back outside the call centre.  Where do you go next? `,
  choices: [
    {
      text: "Get in your car",
      nextScene: 'car',
      action: NoAction,
      update: "yes"
    },
    {
      text: "Go for a walk",
      nextScene: 'walk',
      action: NoAction,
      update: "yes"
    },
  ]
};
const carScene = {
  title: "In your car",
  text: `You jump in your car, turn the key and.................... Nothing.  You've left your lights on and the battery is flat.  You're going to have to walk.  Where do you go? `,
  choices: [
    {
      text: "search your car",
      nextScene: 'toolbox',
      action: NoAction,  //add battery toolbox to inventory
      update: "yes"
    },
    {
      text: "Go for a walk",
      nextScene: 'walk',
      action: NoAction,
      update: "yes"
    },
  ]
};
const toolboxScene = {
  title: "rummaging ",
  text: `You check the back seats of the car, find a couple of empty pepsi max cans, some old receipts and parking tickets.   You check the boot, and find your toolbox.  It's not going to get your car started, but you put toolbox in your pocket.  It's huge and you're already carrying loads of stuff.  Don't you ever wonder where video game characters keep all their stuff?`,
  choices: [
    {
      text: "Go for a walk",
      nextScene: 'walk',
      action: NoAction,
      update: "yes"
    },
  ]
};

const TakeACallScene = {
  title: "Agent : Hello , how can i help?",
  text: "going to the exit.....",
  choices: [
    {
      text: "not sure yet",
      nextScene: 'notdefinedyet',
      action: incrementWrapLow,
      update: "yes"
    },
  ]
};

const filenoteScene = {
  title: "YOU GOT A FILE NOTE!!!",
  text: "",
  choices: [
    {
      text: "Go back to your desk",
      nextScene: 'desk2',
      action: NoAction,
      update: "yes"

    }
  ]
};
const wrapfilenoteScene = {
  title: "YOU GOT A FILE NOTE!!!",
  text: "You've been dilly dallying your wrap and the managment had no choice but to file note you! They agreed they will wipe the slate clean on your wrap as you will improve this stat.",
  choices: [
    {
      text: "Go back to your desk",
      nextScene: 'desk2',
      action: FileNoteForWrap,
      update: "yes"

    }
  ]
};


const ITIssueItemScene = {
  title: "YOU GOT A NEW ITEM!!!",
  text: "You have got a an IT issue item. You can use this to persuade a TM that the high wrap was because of IT issues and they will magically remove your wrap! Use this carefully as you can only use it once",
  choices: [
    {
      text: "carry on what you were doing",
      nextScene: 'floor1alt',
      action: ITIssuesItem,
      update: "yes"

    }
  ]
};

const MoneyItemScene = {
  title: "YOU GOT A NEW ITEM!!!",
  text: "",
  choices: [
    {
      text: "Go back to your desk",
      nextScene: 'desk2',
      action: AddMoneyItem,
      update: "yes"

    }
  ]
};

const CleaningCupboardScene = {
  title: "Cleaning Cupboard",
  text: "You approach the cupboard but there is a pin?",
  choices: [
    {
      text: "Back",
      nextScene: 'hallway',
      action: cancelTimer,
      update: "yes"
    },
  ]
};
const incupboardScene = {
  title: "A dusty cupboard",
  text: "",
  choices: [
    {
      text: "Take the Glowing Potion",
      nextScene: 'potion',
      action: AddGlowingPotion,
      update: "yes"
    },
    {
      text: "Take the Chemicals",
      nextScene: 'Chemicals',
      action: AddChemical,
      update: "yes"
    },
    {
      text: "Take the screwdriver",
      nextScene: 'screwdriver',
      action: AddScrewDriver,
      update: "yes"
    },
    {
      text: "Leave the cupboard and never return",
      nextScene: 'hallway',
      action: NoAction,
      update: "yes"
    },

  ]
};

const screwdriverScene = {
  title: "YOU HAVE A NEW ITEM!!!",
  text: "",
  choices: [
    {
      text: "OK",
      nextScene: 'incupboard',
      action: NoAction,
      update: "yes"
    },

  ]
};
const potionScene = {
  title: "YOU HAVE A NEW ITEM!!!",
  text: "The potion looks like it's from a video game. It's a perfectly round glass potion bottle with a mysterious green and yellow liquid inside.  There's a cork in the top of the bottle and it seems to be glowing orange! ",
  choices: [
    {
      text: "OK",
      nextScene: 'incupboard',
      action: NoAction,
      update: "yes"
    },

  ]
};
const ChemicalsScene = {
  title: "YOU HAVE A NEW ITEM!!!",
  text: "It's a glass chemistry bottle with a cork in, there's some weird grey liquid inside and there's a sticker with a skull and crossbones on.  You have no idea what it is and should probably leave it in the cupboard, but you slip it into your pocket instead.",
  choices: [
    {
      text: "OK",
      nextScene: 'incupboard',
      action: NoAction,
      update: "yes"
    },

  ]
};
const leftcupboardScene = {
  title: "You left the cupboard",
  text: "And will never return again.........",
  choices: [
  ]
};

const wrongpinScene = {
  title: "GAME OVER",
  text: "",
  choices: [
    {
      text: "GAME OVER!",
      nextScene: 'end',
      action: NoAction,
      update: "yes"

    },
  ]
};




const CMUS = {
  title: "Pick an aid",
  text: "Pick carefully. You only get one. This will take you back to the start but all items and progress are saved",
  choices: [
    {
      text: "Reset Wrap",
      nextScene: "desk2",
      action: resetWrap,
      update: "yes"

    },
    {
      text: "Remove 1 File Note",
      nextScene: "desk2",
      action: RemoveFileNote,
      update: "yes"

    },
    {
      text: "Waste the help! ",
      nextScene: "desk2",
      action: NoAction,
      update: "yes"

    },
  ]
};

const gameoverScene = {
  title: "Uh-oh....",
  text: "",
  choices: [
    {
      text: "GAME OVER! Play Again!!",
      nextScene: 'end',
      action: reload,
      update: "yes"

    },
    {
      text: "Buy me a coffee?",

      action: () => {
        window.open('https://www.buymeacoffee.com/peterharpham');
      },
      update: "no"
    },
    {
      text: "Visit my other website",
      action: () => {
        window.open('https://www.memorymoons.com');
      },
      update: "yes"
    },
  ]
};



//#endregion
//#region Dev Menu
const testScene = {
  title: "DEV MENU ",
  text: "-------- Dev Configuration Utility --------",
  choices: [
    {
      text: "Start Scene",
      nextScene: "start",
      action: NoAction,
      update: "yes"
    },
    {
      text: "Pretend Scene",
      nextScene: "pretend",
      action: NoAction,
      update: "yes"
    },
    {
      text: "On Break Scene",
      nextScene: "onbreak",
      action: NoAction,
      update: "yes"
    },
    {
      text: "Underdesk Scene ",
      nextScene: "underdesk",
      action: NoAction,
      update: "yes"
    },
    {
      text: "Off To See A Mate",
      nextScene: "mate",
      action: NoAction,
      update: "yes"
    },
    {
      text: "Mate 2 scene",
      nextScene: "mate2",
      action: NoAction,
      update: "yes"
    },
    {
      text: "Mate 3 scene",
      nextScene: "mate3",
      action: NoAction,
      update: "yes"
    },
    {
      text: "Mate 4 scene",
      nextScene: "mate4",
      action: NoAction,
      update: "yes"
    },
    {
      text: "Mate 5 scene",
      nextScene: "mate5",
      action: NoAction,
      update: "yes"
    },
    {
      text: "Go To Desk2 Scene",
      nextScene: "desk2",
      action: NoAction,
      update: "yes"
    },
    {
      text: "Walkoff Scene",
      nextScene: "walkoff",
      action: NoAction,
      update: "yes"
    },
    {
      text: "Toilet Scene",
      nextScene: "toilet",
      action: NoAction,
      update: "yes"
    }, {
      text: "Breakroom Scene",
      nextScene: "breakroom",
      action: NoAction,
      update: "yes"
    },
    {
      text: "Stairs Scene",
      nextScene: "stairs",
      action: NoAction,
      update: "yes"
    },
    {
      text: "Go In Lift Scene",
      nextScene: "lift",
      action: NoAction,
      update: "yes"
    },
    {
      text: "Wait1 Scene",
      nextScene: "wait1",
      action: NoAction,
      update: "yes"
    },
    {
      text: "Wait2 Scene",
      nextScene: "wait1",
      action: NoAction,
      update: "yes"
    },
    {
      text: "Wait3 Scene",
      nextScene: "wait3",
      action: NoAction,
      update: "yes"
    },
    {
      text: "Wait4 Scene",
      nextScene: "wait4",
      action: NoAction,
      update: "yes"
    },
    {
      text: "Pressing the emergency button Scene",
      nextScene: "alarm",
      action: NoAction,
      update: "yes"
    },
    {
      text: "Waiting for Steve Scene",
      nextScene: "waitsteve",
      action: NoAction,
      update: "yes"
    },
    {
      text: "Fire Exit Scene",
      nextScene: "fireexit",
      action: NoAction,
      update: "yes"
    },
    {
      text: "Floor 1 Scene",
      nextScene: "floor1",
      action: NoAction,
      update: "yes"
    },
    {
      text: "Floor 1 alternative Scene",
      nextScene: "floor1alt",
      action: NoAction,
      update: "yes"
    },
    {
      text: "Mick Scene",
      nextScene: "mick",
      action: NoAction,
      update: "yes"
    },
    {
      text: "Mick2 Scene",
      nextScene: "mick2",
      action: NoAction,
      update: "yes"
    },
    {
      text: "Mick3 Scene",
      nextScene: "mick3",
      action: NoAction,
      update: "yes"
    },
    {
      text: "Cinema room Scene",
      nextScene: "cinema",
      action: NoAction,
      update: "yes"
    },
    {
      text: "canteen Scene",
      nextScene: "canteen",
      action: NoAction,
      update: "yes"
    },
    {
      text: "Talk to Lindsay Scene",
      nextScene: "lindsay",
      action: NoAction,
      update: "yes"
    },
    {
      text: "Vending machines Scene",
      nextScene: "vending",
      action: NoAction,
      update: "yes"
    },
    {
      text: "buy coffee Scene",
      nextScene: "coffee",
      action: NoAction,
      update: "yes"
    },
    {
      text: "crisps Scene",
      nextScene: "crisps",
      action: NoAction,
      update: "yes"
    },
    {
      text: "table mates Scene",
      nextScene: "tablemates",
      action: NoAction,
      update: "yes"
    },
    {
      text: "table mates 2 Scene",
      nextScene: "tablemates2",
      action: NoAction,
      update: "yes"
    },
    {
      text: "lend money Scene",
      nextScene: "lend",
      action: NoAction,
      update: "yes"
    },
    {
      text: "Head outside Scene",
      nextScene: "maindoor",
      action: NoAction,
      update: "yes"
    },
    {
      text: "End Scene",
      nextScene: "end",
      action: NoAction,
      update: "yes"
    },
    {
      text: "Outside Scene",
      nextScene: "outside",
      action: NoAction,
      update: "yes"
    },
    {
      text: "Cleaning Cupboard",
      nextScene: "CleaningCupboard",
      action: NoAction,
      update: "yes"
    },
    {
      text: "In Cleaning Cupboard",
      nextScene: "incupboard",
      action: NoAction,
      update: "yes"
    },

    {
      text: "Outside2 Scene",
      nextScene: 'outside2',
      action: NoAction,
      update: "no"
    },
    {
      text: "walk Scene",
      nextScene: 'walk',
      action: NoAction,
      update: "no"
    },
    {
      text: "blueorred Scene",
      nextScene: 'blueorred',
      action: NoAction,
      update: "no"
    },
    {
      text: "Car Scene",
      nextScene: 'car',
      action: NoAction,
      update: "no"
    },
    {
      text: "back inside Scene",
      nextScene: 'backinside',
      action: NoAction,
      update: "no"
    },
    {
      text: "toolbox Scene",
      nextScene: 'toolbox',
      action: NoAction,
      update: "no"
    },
    {
      text: "Add Wrap",
      nextScene: "dev",
      action: incrementWrapLow,
      update: "no"

    },
    {
      text: "Reset Wrap",
      nextScene: "dev",
      action: resetWrap,
      update: "no"

    },
    {
      text: "Add File Note",
      nextScene: "dev",
      action: addFilenote,
      update: "no"

    },
    {
      text: "Remove File Note",
      nextScene: "dev",
      action: RemoveFileNote,
      update: "no"

    },
    {
      text: "Reset File Notes",
      nextScene: "dev",
      action: ResetFileNotes,
      update: "no"
    },
    {
      text: "Add IT Issues",
      nextScene: "dev",
      action: ITIssuesItem,
      update: "yes"
    },

    {
      text: "Add Money",
      nextScene: 'dev',
      action: AddMoneyItem,
      update: "no"
    },
    {
      text: "Remove Money",
      nextScene: 'dev',
      action: RemoveMoney,
      update: "no"
    },
    {
      text: "Add Coffee Item",
      nextScene: 'dev',
      action: AddCoffeeItem,
      update: "no"
    },
    {
      text: "Remove Coffee Item",
      nextScene: 'dev',
      action: RemoveCoffee,
      update: "no"
    },
    {
      text: "Add Crisps Item",
      nextScene: 'dev',
      action: AddCrispsItem,
      update: "no"
    },
    {
      text: "Remove Crisps Item",
      nextScene: 'dev',
      action: RemoveCrispsItem,
      update: "no"
    },
    {
      text: "Pay For Coffee",
      nextScene: 'dev',
      action: AddCoffeeItem,
      update: "no"
    },
    {
      text: "Add Screwdriver",
      nextScene: 'dev',
      action: AddScrewDriver,
      update: "no"
    },
    {
      text: "Remove Screwdriver",
      nextScene: 'dev',
      action: RemoveScrewDriver,
      update: "no"
    },
    {
      text: "Add Chemicals",
      nextScene: 'dev',
      action: AddChemical,
      update: "no"
    },
    {
      text: "Remove Chemicals",
      nextScene: 'dev',
      action: RemoveChemical,
      update: "no"
    },
    {
      text: "Add Glowing Potion",
      nextScene: 'dev',
      action: AddGlowingPotion,
      update: "no"
    },
    {
      text: "Remove Glowing Potion",
      nextScene: 'dev',
      action: RemoveGlowingPotion,
      update: "no"
    },
    {
      text: "Generate Help Keys",
      nextScene: 'dev',
      action: createBlackoutPage,
      update: "no"
    },

  ]
};

//#endregion

const scenes = {
  start: startScene,
  desk2: desk2Scene,
  pretend: pretendScene,
  end: endScene,
  dev: testScene,
  onbreak: onbreakScene,
  underdesk: underdeskScene,
  mate: mateScene,
  mate2: mate2Scene,
  mate3: mate3Scene,
  mate4: mate4Scene,
  mate5: mate5Scene,
  walkoff: walkoffScene,
  toilet: toiletScene,
  breakroom: breakroomScene,
  stairs: stairsScene,
  fireexit: fireexitScene,
  barriers: barrierScene,
  carpark: carparkScene,
  fagshed: fagshedScene,
  bush: bushScene,
  lift: liftScene,
  alarm: alarmScene,
  waitsteve: waitsteveScene,
  wait1: wait1Scene,
  wait2: wait2Scene,
  wait3: wait3Scene,
  wait4: wait4Scene,
  wait5: wait5Scene,
  mick: mickScene,
  mick2: mick2Scene,
  mick3: mick3Scene,
  floor1: floor1Scene,
  floor1alt: floor1altScene,
  floor1alt2: floor1alt2Scene,
  canteen: canteenScene,
  lindsay: lindsayScene,
  tablemates: tablematesScene,
  tablemates2: tablemates2Scene,
  lend: lendScene,
  vending: vendingScene,
  crisps: crispsScene,
  coffee: coffeeScene,
  nomoney: nomoneyScene,
  maindoor: maindoorScene,
  cinema: cinemaScene,
  TakeACall: TakeACallScene,
  filenote: filenoteScene,
  zzz: zzzScene,
  ITissueItem: ITIssueItemScene,
  moneyitem: MoneyItemScene,
  CMU: CMUS,
  skive: skiveScene,
  excuse: excuseScene,
  bribe: bribeScene,
  gameover: gameoverScene,
  WrapFilenote: wrapfilenoteScene,
  CleaningCupboard: CleaningCupboardScene,
  incupboard: incupboardScene,
  screwdriver: screwdriverScene,
  potion: potionScene,
  Chemicals: ChemicalsScene,
  wrongpin: wrongpinScene,
  leftcupboard: leftcupboardScene,
  hallway: hallwayScene,
  outside: outsideScene,
  afterbribe: afterbribeScene,
  walk: walkScene,
  outside2: outside2Scene,
  car: carScene,
  backinside: backinsideScene,
  toolbox: toolboxScene,
  blueorred: blueorredScene,
  bluepill: bluepillScene,
  redpill: redpillScene,
  getlost: getlostScene,







};





// Game Setings


var currentScene = "start";
var removedChoices = [];

var setup = false;
var disclaimer = false;
var DMA = false;
var CP = false;
let sessionIdDisplayed = false;



let timer;
var annoyedfriend = false;
var Filenotes = 0;
var WrapCounter = 0;
let ITIssuesUsed = false;
var MaxWrap = 1000;
var MaxFileNotes = 3;
var HasWrap = false;
var HasFileNotes = false;
var KP = 0;
var CKP = false;
var LKP = false;


var HasCrisps = false;
var CanBuy = false;
var HasScrewDriver = false;
var HasCrisps = false;
var Hasmoney = false;
var HasUsedMoney = false;
var HasCoffeeItem = false;
var HasChemical = false;
var HasPotion = false;

const gameElem = document.getElementById("game");
const sceneElem = document.getElementById("scene");
const WrapCounterElem = document.getElementById("Wrap");
const WrapStyling = document.getElementById("Wrap-Container");
const filesNotesElem = document.getElementById("file-notes-container");
const FileNoteElem = document.getElementById("file-notes");
const titleElement = document.createElement("div");




function Selectbackground() {

  // FILTERS

  if (HasChemical) {
    scenes["incupboard"].choices = scenes["incupboard"].choices.filter(choice => {
      return choice.text !== "Take the Chemicals";
    });
  }

  if (HasScrewDriver) {
    scenes["incupboard"].choices = scenes["incupboard"].choices.filter(choice => {
      return choice.text !== "Take the screwdriver";
    });
  }

  if (HasPotion) {
    scenes["incupboard"].choices = scenes["incupboard"].choices.filter(choice => {
      return choice.text !== "Take the Glowing Potion";
    });
  }

  if (Hasmoney) {
    scenes["mate4"].choices = scenes["mate4"].choices.filter(choice => {
      return choice.text !== "Keep Chatting";
    });
  }




  // check if items have been used and to hide buttons if not. 
  /*
        scene.choices = scene.choices.filter(choice => {
          console.log("Do i have money ? : " + Hasmoney);
          return (choice.text !== "IT Issues" && !ITIssuesUsed) 
          && (choice.text === "Take Money" && !Hasmoney) 
          && (choice.text !== "Pay For Coffee" && !HasUsedMoney) 
          && (choice.text === "Tell him you went to buy him a coffee" && HasCoffeeItem) 
          && (choice.text === "Reset Wrap" && HasWrap) 
          && (choice.text === "Remove 1 File Note" && HasFileNotes) 
   
  
  
  
        });
  
        */


  //BACK GROUNDS AND SCENE TEXT ALTERATIONS

  /* ----------------------------------- NAME REFERENCES ------------------------------------------------
    yourName
    teamManagerName
    matesName
    securityName
    cleanerName
  */



  if (currentScene === "start") {
    startScene.text = "Another day at the office, " + yourName + ".....You sit at your desk contemplating life and trying to think of a way to skive off work. You've had an awful day and " + teamManagerName + " is coming to check on you. What do you do?",
      document.body.style.backgroundImage = "url('./images/start.png')";
    startScene.choices = [
      {
        text: "Hide under the desk",
        nextScene: "underdesk",
        action: incrementWrapLow,
        update: "yes",
  
      },
      {
        text: "Pretend you are on a call",
        nextScene: 'pretend',
        action: incrementWrapLow,
        update: "yes"
      },
      {
        text: "Walk off and pretend you are on a break",
        nextScene: 'onbreak',
        action: incrementWrapLow,
        update: "yes"
      },
      {
        text: "Go and talk to " + matesName + "",
        nextScene: 'mate',
        action: incrementWrapLow,
        update: "yes"
      }
    ]
  } else if (currentScene === "walk") {
    walkScene.text = "You decide to go for a walk.  You head down the road and take a left.  As you begin to make your way down the street, you notice a man in a long black leather jacket with round sunglasses and a rather shifty demeanour leaning over the bonnet of a battered old car. He's holding a spanner in one hand and muttering to himself as he tinkers with the battery. You approach cautiously, not wanting to startle the man. He looks up as you draw near, and you see a glint of recognition in his eyes as if he was expecting you. Ah, " + yourName + ", I've been expecting you he says in a deep, gravelly voice. You think about asking how he knows your name, but quickly decide that it's probably best not to ask, this guy is huge and you don't want to get on his bad side."
    document.body.style.backgroundImage = "url('./images/walk.jpg')";

  } else if (currentScene === "mick") {
    mickScene.title = "You talk to " + cleanerName + ", the cleaner"
    mickScene.text = `You talk to the cleaner and they tell you all about their day and the scum that work downstairs in Sitel.  They tell you that they've been working there for 20 years and hate it.  They says that they're going to retire in 2 years and is going to go and live in Spain.  They tell you that they're going to buy a house with a pool and will spend their days lounging by the pool.  They say that they're going to get a dog and call it 'Paco'. They say that they will get a motorbike and take it out for occasional rides. They will make some friends, but they aren't sure if they want to settle down yet. They say that they are going to take up golf and join a local club. They also tell you they will start a small business selling handmade crafts online. They are going to learn to speak Spanish fluently so they can impress the locals and say the first number is ${spokenWord1}. They are going to visit all the major cities in Spain, but not sure if they want to do any sightseeing.  They say that they will start a book club, but only if it's full of interesting people.  They say that they are going to join a local football team, but only if they have a good chance of winning and the second number is ${spokenWord2}. They might take up yoga and meditation classes, but only if the instructor is attractive.  They say that they will learn how to surf, but if the third number is ${spokenWord3} and there are waves high enough.  Then they tell you all about going to visit the local wineries and learning about wine making, but only if there's is red wine. They tell you that they are going to start a small business teaching English as a second language and will join a local gardening group, but only if there are some attractive green thumbs around. They say that they will go to visit all the local museums and art galleries, but only if there are some interesting artifacts to look at. They say that if the last number is ${spokenWord4} they will take up scuba diving lessons and explore the Mediterranean Sea, but only if there are some cute fish to swim with.`,
    document.body.style.backgroundImage = "url('./images/mickslide.gif')";
  } else if (currentScene === "incupboard") {
    document.body.style.backgroundImage = "url('./images/incupboard.jpg')";

    incupboardScene.text = "You're in " + cleanerName + "'s cupboard. The room is small and cramped, but it's packed full of all sorts of strange and interesting objects.  On the shelves, you see a collection of old, dusty bottles and jars. A couple of items peek your interest...";
    if (!HasChemical) {
      incupboardScene.text += " A musky jar filled with unknown chemicals. ";
    }
    if (!HasPotion) {
      incupboardScene.text += "One of them seems to contain some sort of glowing potion or elixir. ";
    }
    if (!HasScrewDriver) {
      incupboardScene.text += " An old rusty screwdriver. "
    }
    if (HasScrewDriver && HasPotion && HasChemical) {
      incupboardScene.text = "You search around the cupboard but can't see anything else of interest. I think I'm done here.";
    }

  } else if (currentScene === "pretend") {
    document.body.style.backgroundImage = "url('./images/onacall.jpg')";
    pretendScene.text = "You quickly pull up an account in iCare and say to absolutely no one, `I am sorry to hear that Mrs Collins, you will have this amount refunded from your next bill....` " + teamManagerName + " thinks you are working so walks off into the break room instead to warm up their salmon and asparagus. You are feeling cocky and try and sneak off for a quick vape, what do you do next?"
  } else if (currentScene === "underdesk") {
    document.body.style.backgroundImage = "url('./images/underdesk.png')";
    underdeskScene.text = "Thinking that no one can see you, you casually get off your chair, and crawl under the desk and hide.  " + teamManagerName + " walks right up to you and sees you under the desk. Do you really think they are that stupid?";
  } else if (currentScene === "walkoff") {
    document.body.style.backgroundImage = "url('./images/whichway.png')";
  } else if (currentScene === "lift") {
    document.body.style.backgroundImage = "url('./images/lift.gif')";
  } else if (currentScene === "start") {
    document.body.style.backgroundImage = "url('./images/start.png')";
  } else if (currentScene === "cleaningcupboard") {
   // DONT FORGET ME!
  } else if (currentScene === "mick2") {
    document.body.style.backgroundImage = "url('./images/micktalk.gif')";
    mick2Scene.title = "You carry on talking to " + cleanerName + "..."
    mick2Scene.text = "" + cleanerName + " waffles on about everything and anything and you are starting to get bored.  What do you do next?"
  } else if (currentScene === "mick3") {
    document.body.style.backgroundImage = "url('./images/mick2.gif')";
    mick3Scene.title = "You carry on talking to " + cleanerName + "..."
    mick3Scene.text = "You feel like you have no choice but to stand there and carry on listening to " + cleanerName + ",  when they suddenly stop telling you the story of the phantom shitter and pull out of their pocket a piece of paper and hands it to you.   I got this from another manager,  it's an IT Ticket.  Apparently you can use this to say you had IT issues and they just clear your wrap."
  } else if (currentScene === "onbreak") {
    document.body.style.backgroundImage = "url('./images/onbreak.jpg')";
    onbreakScene.text = teamManagerName + " wonders where you are going, goes back to their desk and checks Verint and realises your break is not due for another 45 minutes!";
  } else if (currentScene === "mate") {
    document.body.style.backgroundImage = "url('./images/mate.jpg')";
    mateScene.title = "Talking to " + matesName + "...";
    mateScene.text = "You walk over to speak to " + matesName + ".  They've just come off a call, so you talk about your day so far and what you're up to this weekend.  You should really get some work done, but you really don't feel up to it.  Do you..."
    mateScene.choices = [
      {
        text: "Carry on talking to " + matesName + "",
        nextScene: 'mate2',
        action: incrementWrapHigh,
        update: "yes"
  
      },
      {
        text: "Go back to your desk",
        nextScene: 'desk2',
        action: incrementWrapLow,
        update: "yes"
  
      }
    ]
  } else if (currentScene === "mate1") {
    document.body.style.backgroundImage = "url('./images/mate2.jpg')";
  } else if (currentScene === "mate2") {
    document.body.style.backgroundImage = "url('./images/mate.jpg')";
    mate2Scene.text = "You continue to chat to " + matesName + ".  You talk about the new God of War game and how you can't wait to get home and play it.  You should really get some work done, but you really don't feel up to it.  Do you..."
  } else if (currentScene === "mate3") {
    document.body.style.backgroundImage = "url('./images/mate2.jpg')";
    mate3Scene.text = "You chat to " + matesName + " for a bit longer.  You talk about the world cup, about how good a player Lionel Messi is.  Your wrap is going up and up.  Do you...";
  } else if (currentScene === "mate4") {
    document.body.style.backgroundImage = "url('./images/mate.jpg')";
  } else if (currentScene === "mate5") {
    document.body.style.backgroundImage = "url('./images/mate2.jpg')";
    mate5Scene.text = "You continue to chat to " + matesName + ".......   Suddenly, they remember they owe you some money for that pint you bought at the pub last week.  They reach into their pocket and pull out £2.50 and hand it to you. " + matesName + " has a meeting in 5 minutes, so they say they need to go."
  } else if (currentScene === "walk") {
    document.body.style.backgroundImage = "url('./images/walk.jpg')";
  } else if (currentScene === "stairs") {
    document.body.style.backgroundImage = "url('./images/stairs.jpg')";
  } else if (currentScene === "floor1") {
    document.body.style.backgroundImage = "url('./images/floor1.png')";
    floor1Scene.text = "You are on the first floor. " + cleanerName + " the cleaner is coming towards you and looks like they wants to tell you something. What do you do next?"
  } else if (currentScene === "floor1alt") {
    document.body.style.backgroundImage = "url('./images/floor1.jpg')";
    floor1altScene.text = "Feeling exhausted after your conversation with " + cleanerName + ", You realise you wrap has gone up massively and you still haven't been out for a vape.  What do you do next?"
  } else if (currentScene === "floor1alt2") {
    document.body.style.backgroundImage = "url('./images/floor1.png')";
    floor1alt2Scene.text = "You are on the first floor. " + cleanerName + " the cleaner is coming towards you and looks like they wants to tell you something. What do you do next?"
  } else if (currentScene === "maindoor") {
    document.body.style.backgroundImage = "url('./images/maindoor.gif')";
    maindoorScene.text = "You put your head down and walk past the canteen and towards the main exit.  As you turn the corner you bump into " + teamManagerName + ".  They ask what you've been doing....";
  } else if (currentScene === "cinema") {
    document.body.style.backgroundImage = "url('./images/cinema.jpg')";
  } else if (currentScene === "zzz") {
    document.body.style.backgroundImage = "url('./images/zzz.gif')";
    zzzScene.text = "Suddenly, you wake up to the sound of the cinema room door opening and you open your eyes and see " + teamManagerName + " stood in the doorway with their arms folded.  You've been gone for 4 hours!!  You've really gone and done it this time...";
  } else if (currentScene === "desk2") {
    document.body.style.backgroundImage = "url('./images/start.png')";
    desk2Scene.text = "You sheepishly go back to your chair and sit down. You really need a vape, but " + teamManagerName + " is still on the prowl. What do you do next ? "
    desk2Scene.choices = [
      {
        text: "Hide under the desk",        // this is the button text
        nextScene: "underdesk",             // this is the id of the next scene
        action: incrementWrapLow,
        update: "yes"
      },
      {
        text: "Pretend you are on a call",
        nextScene: 'pretend',
        action: incrementWrapLow,
        update: "yes"
      },
      {
        text: "Walk off and pretend you are on a break",
        nextScene: 'onbreak',
        action: incrementWrapLow,
        update: "yes"
      },
      {
        text: "Go and talk to " + matesName + "",
        nextScene: 'mate',
        action: incrementWrapLow,
        update: "yes"
      }
    ]
    
  } else if (currentScene === "canteen") {
    document.body.style.backgroundImage = "url('./images/canteen.jpg')";
  } else if (currentScene === "vending") {
    document.body.style.backgroundImage = "url('./images/vending.jpg')";
  } else if (currentScene === "moneyitem") {
    document.body.style.backgroundImage = "url('./images/gotmoney.gif')";
    MoneyItemScene.text = matesName + " gives you £2.50!"
  } else if (currentScene === "filenote") {
    document.body.style.backgroundImage = "url('./images/filenote.jpg')";
    filenoteScene.text = teamManagerName + " gives you a file note for being such an idiot. You silly sausage.  You can now go back to your desk and get on with your work.";
  } else if (currentScene === "ITissueItem") {
    document.body.style.backgroundImage = "url('./images/itticket.gif')";
  } else if (currentScene === "nomoney") {
    document.body.style.backgroundImage = "url('./images/skint.gif')";
    nomoneyScene.text = "You reach into your pocket, open your wallet and amidst the crumpled receipts and old tram tickets you find........... nothing.  You're skint.  It's a week to payday. " + matesName + " owes you £2.50 but you're not sure if you should ask them for it."
  } else if (currentScene === "fireexit") {
    document.body.style.backgroundImage = "url('./images/fireexit.jpg')";
  } else if (currentScene === "barriers") {
    document.body.style.backgroundImage = "url('./images/barrier.gif')";
    barrierScene.text = "With your head down,  you casually walk round the corner and through the barriers.  You've almost made it out of the building when you hear a familiar voice shout your name.    " + securityName + " the security guard was alerted by the fire exit alarm and saw you walk out on the CCTV.  That was a silly thing to do.  " + securityName + " tells you to go back to work and will be informing " + teamManagerName + " about what you've done.";
  } else if (currentScene === "fagshed") {
    document.body.style.backgroundImage = "url('./images/fagshed.gif')";
    fagshedScene.text = "You look round and no one seemed to see you come out of the fire exit.  You really need a vape, so you walk up to the fag shelter.  You walk round the corner and " + securityName + " the security guard is waiting for you.  They were alerted by the fire exit alarm and saw you walk out on the CCTV.  That was a silly thing to do.  " + securityName + " tells you to go back to work and will be informing " + teamManagerName + " about what you've done, "
  } else if (currentScene === "carpark") {
    document.body.style.backgroundImage = "url('./images/carpark.gif')";
    carparkScene.text = "You wisely walk down towards the car park as you are much less likely to be seen there.  You turn the corner and are greeted by " + securityName + " the security guard.  They were alerted by the fire exit alarm and saw you walk out on the CCTV.  That was a silly thing to do.  " + securityName + " tells you to go back to work and will be informing " + teamManagerName + " about what you've done, "
  } else if (currentScene === "bush") {
    document.body.style.backgroundImage = "url('./images/bush.gif')";
    bushScene.text = "Worried that you might have set off the alarm, you panic and don't know what to do,  so you find the nearest bush and hide in it.  Unfortunately, the bush you chose is only 2 feet tall and " + securityName + " the security guard easily sees you and wonders what on earth you are doing trying to hide in a very small bush. That was a silly thing to do.  " + securityName + " tells you to go back to work and will be informing " + teamManagerName + " about what you've done, "
  } else if (currentScene === "wait1") {
    document.body.style.backgroundImage = "url('./images/lift.jpg')";
  } else if (currentScene === "wait5") {
    document.body.style.backgroundImage = "url('./images/lift.gif')";

  } else if (currentScene === "coffee") {
    if (CanBuy) {
      document.body.style.backgroundImage = "url('./images/coffee.gif')";
    } else {
      document.body.style.backgroundImage = "url('./images/skint.gif')";
      coffeeScene.title = "Oh no.."
      coffeeScene.text = "You dont have any money to buy this item!."
    
    }

  } else if (currentScene === "hallway") {
    document.body.style.backgroundImage = "url('./images/hallway.png')";
    hallwayScene.text = "You are in the hallway near the main exit.  You can see the main door and the door to " + cleanerName + "'s cleaning cupboard."
    hallwayScene.choices = [
      {
        text: "Try " + cleanerName + "'s cleaning cupboard",
        nextScene: 'CleaningCupboard',
        action: incrementWrapLow,
        update: "yes"
      },
      {
        text: "Head Outside",
        nextScene: 'outside',
        action: incrementWrapLow,
        update: "yes"
      },
    ]
  } else if (currentScene === "alarm") {
    document.body.style.backgroundImage = "url('./images/alarm.gif')";
    alarmScene.text = "... and hear a loud `Dring`.  You wait for what seems like eternity and just as you are about to give it another press, you suddenly hear a voice saying `hello?` You recognise " + securityName + "'s voice and feel relieved that they are there.  They ask you what is wrong and you say that the lift has stopped.  They say they will be right there and you wait...."
  } else if (currentScene === "waitsteve") {
    document.body.style.backgroundImage = "url('./images/waitsteve.gif')";
    waitsteveScene.text = "After what seems like forever, " + securityName + " finally arrives with a crew of 41 Fire crew. They use their power tools to open the lift doors and you are finally free. You've been in the lift for so long that your shift has ended and you go home. All 41 of the Fire crew line up outside the centre and " + securityName + " makes you apologise to each one.  You'll probably get another file note for this, but you don't care.  Due to your poor decision making, you lose the game.  Better luck next time!"
  } else if (currentScene === "toilet") {
    document.body.style.backgroundImage = "url('./images/toilet.gif')";
    toiletScene.text = "You go into personal and walk to the toilet. Nobody else is here, so you pull out your mod and take a huge vape. Clouds of vapour come out through the door and fill the call centre.  Everyone thinks there is a fire and " + teamManagerName + " comes in and finds you. You do the walk of shame back to your desk and get a sneaky feeling you are going to get another file note for this"
  } else if (currentScene === "skive") {
    document.body.style.backgroundImage = "url('./images/skiveexcuse.gif')";
    skiveScene.text = "You be honest and tell " + teamManagerName + " you've been trying to skive off.  He's not happy, but appreciates your honesty and sends you back to your desk and decides not to give you a file note this time.";
  } else if (currentScene === "excuse") {
    document.body.style.backgroundImage = "url('./images/skiveexcuse.gif')";
    excuseScene.text = "You tell " + teamManagerName + " that you've been doing an errand for Hazel. You try and make something up about a first aid kit, but you fumble your words and " + teamManagerName + " sees right through your lie.  Lying to " + teamManagerName + " is a big no no.  As you walk back to your desk, you're pretty sure " + teamManagerName + " will be giving you a file note for this one.";
  } else if (currentScene === "lindsay") {
    document.body.style.backgroundImage = "url('./images/lindsay.gif')";
  } else if (currentScene === "tablemates") {
    document.body.style.backgroundImage = "url('./images/tablemates.png')";
  } else if (currentScene === "tablemates2") {
    document.body.style.backgroundImage = "url('./images/tablemates2.png')";
  } else if (currentScene === "blueorred") {
    document.body.style.backgroundImage = "url('./images/blueorred.jpg')";
  } else if (currentScene === "crisps") {
    if (CanBuy) {
      document.body.style.backgroundImage = "url('./images/crisps.gif')";
    } else {
      document.body.style.backgroundImage = "url('./images/skint.gif')";
      crispsScene.title = "Oh no.."
      crispsScene.text = "You dont have any money to buy this item!."
    
    }
  } else if (currentScene === "car") {
    document.body.style.backgroundImage = "url('./images/car.gif')";
  } else if (currentScene === "afterbribe") {
    document.body.style.backgroundImage = "url('./images/afterbribe.gif')";
    afterbribeScene.text = teamManagerName + " takes the coffee and goes back upstairs leaving you to it.  That was a close one!";
  } else if (currentScene === "bribe") {
    document.body.style.backgroundImage = "url('./images/bribe.gif')";
    bribeScene.text = "As you look at " + teamManagerName + ", you feel the hot coffee in your hand and have a genius plan. `Just went to get you a coffee, Boss...` you proudly say as you thrust out your hand and pass " + teamManagerName + " the coffee that you just bought from the canteen. ";
  } else if (currentScene === "outside") {
    document.body.style.backgroundImage = "url('./images/outside.gif')";
  } else if (currentScene === "toolbox") {
    document.body.style.backgroundImage = "url('./images/toolbox.gif')";
  } else if (currentScene === "lend") {
    document.body.style.backgroundImage = "url('./images/lend.gif')";
  } else if (currentScene === "wrongpin") {chemical
    document.body.style.backgroundImage = "url('./images/wrongpin.gif')";
    wrongpinScene.text = cleanerName + " caught you trying to get in their cupboard. They are not happy, and pushes you in the cupboard and locks the door.  You're stuck in there forever. " + cleanerName + " tells you some more stories about Spain, and you die a slow death of boredom. The end."
  } else if (currentScene === "backinside") {
    document.body.style.backgroundImage = "url('./images/backinside.gif')";
  } else if (currentScene === "outside2") {
    document.body.style.backgroundImage = "url('./images/outside2.jpg')";
  } else if (currentScene === "gameover") {
    gameover.text = "This many file notes means you're going down the disciplinary route. As you sit back down at your desk, you feel a sharp tap on your shoulder.  You turn around and see " + teamManagerName + ", Mark and James standing there.  You stand up and they walk you into the Brook meeting room and you know what's coming.  As you leave the building, you put your pass into the letter box and leave the building for the last time.   You are fired!!";
  } else if (currentScene === "breakroom") {
    document.body.style.backgroundImage = "url('./images/IMAGEFILE')";
    breakroomScene.text = "You walk in the break room and start vaping.  WHAT ARE YOU DOING VAPING INSIDE?  And you walked right into the break room where you I literally just told you " + teamManagerName + " went to.   Omg you suck at this."
  } else if (currentScene === "screwdriver") {
    document.body.style.backgroundImage = "url('./images/screwdriver.gif')";
    screwdriverScene.text = "You acquired " + cleanerName + "'s trusty screwdriver.  It's a Stanley with a crosshead.  there's a bit of green paint on the handle, but otherwise it's in good shape.  Who knows what you'll be able to do with this. "
  } else if (currentScene === "getlost") {
    document.body.style.backgroundImage = "url('./images/getlost.gif')";
  } else if (currentScene === "potion") {
    document.body.style.backgroundImage = "url('./images/potion.gif')";
  } else if (currentScene === "Chemicals") {
    document.body.style.backgroundImage = "url('./images/chemicals.gif')";
  } else if (currentScene === "SCENENAME") {
    document.body.style.backgroundImage = "url('./images/IMAGEFILE')";
  } else if (currentScene === "SCENENAME") {
    document.body.style.backgroundImage = "url('./images/IMAGEFILE')";
  } else if (currentScene === "SCENENAME") {
    document.body.style.backgroundImage = "url('./images/IMAGEFILE')";
  }
}
// DONT DELETE ME IM THE CLOSING FUNCTION CURLY

function render() {

  console.log(`Render of Variables: ${spokenWord1}`)
  console.log(`yourName: ${yourName}`);
  console.log(`teamManagerName: ${teamManagerName}`);
  console.log(`matesName: ${matesName}`);
  console.log(`securityName: ${securityName}`);
  console.log(`cleanerName: ${cleanerName}`);



  Selectbackground();




  let choiceText = "Tell him you went to buy him a coffee";
  if (!HasCoffeeItem) {
    const choicesToKeep = scenes["maindoor"].choices.filter(choice => {
      if (choice.text == choiceText) {
        removedChoices.push(choice);
        return false;
      }
      return true;
    });
    scenes["maindoor"].choices = choicesToKeep;
  } else if (HasCoffeeItem && removedChoices.length > 0) {
    // Only add the choices back if they have been removed previously
    scenes["maindoor"].choices = scenes["maindoor"].choices.concat(removedChoices);
    removedChoices = [];
  }
/*
  choiceText = "Lend your mate £2.50";
  if (!Hasmoney) {
    const choicesToKeep = scenes["tablemates2"].choices.filter(choice => {

      if (choice.text == choiceText) {
        removedChoices.push(choice);
        return false;
      }
      return true;
    });
    scenes["tablemates2"].choices = choicesToKeep;
  } else if (Hasmoney && removedChoices.length > 0) {
    // Only add the choices back if they have been removed previously
    scenes["tablemates2"].choices = scenes["tablemates2"].choices.concat(removedChoices);
    removedChoices = [];
  }
*/





  // Create the button


  // Append the button to the body element






  //set backgrounds for scenes



  /*
  if (DMA) {
     let heading = document.querySelector('#MainHeader h1');
     heading.innerHTML = 'THE DEV MENU WAS USED TO CHEAT AT THE GAME!!';
     const body = document.querySelector('body');
     document.body.style.backgroundImage = "url('./images/invalid.jpg')";
     document.body.style.backgroundRepeat = "repeat";
     document.body.style.backgroundPosition = "top left";
  }
*/

  if (CP) {
    currentScene = "CMU";
    CP = false;
  }

  if (currentScene === "CleaningCupboard") {
    KeyPadScene();
  } else {
    document.getElementById("keypad").style.display = "none";
    document.getElementById("led-container").style.display = "none";
  }

  if (Filenotes >= MaxFileNotes) {
    currentScene = "gameover"
  }

  if (WrapCounter > MaxWrap) {
    currentScene = "WrapFilenote"
    document.body.style.backgroundImage = "url('./images/filenote.jpg')";
  }

  const scene = scenes[currentScene];
  sceneElem.innerHTML = "";

  // set the colouring for the wrap box
  //#region wrap styling
  if (WrapCounter == null) {
    WrapStyling.style.backgroundColor = "green";
  } else if (WrapCounter < 600) {
    WrapStyling.style.backgroundColor = "green";
  } else if (WrapCounter < 1200) {
    WrapStyling.style.backgroundColor = "orange";
  } else {
    WrapStyling.style.backgroundColor = "red";
  }
  //#endregion


  //#region Filenotes Styling
  // set the colouring for the file note box
  if (Filenotes <= 1 || Filenotes == null) {
    filesNotesElem.style.backgroundColor = "green";
  } else if (Filenotes == 2) {
    filesNotesElem.style.backgroundColor = "orange";
  } else {
    filesNotesElem.style.backgroundColor = "red";
  }
  //#endregion

  // Update the title
  const titleBox = document.querySelector("#title-box");
  titleBox.innerHTML = scene.title;


  const outputElement = document.createElement("div");
  outputElement.id = "output";
  sceneElem.appendChild(outputElement);
  const delay = 1;
  let index = 0;

  const intervalId = setInterval(printCharacter, delay);
  function printCharacter() {

    outputElement.innerHTML += scene.text[index];
    index++;
    if (index >= scene.text.length) {
      clearInterval(intervalId);
      sceneElem.innerHTML += `<div id="choices">`;


      scene.choices.forEach(choice => {
        const button = document.createElement("button");  // dev button thing
        button.textContent = choice.text;
        button.classList.add("choice");
        if (currentScene === "dev") {
          DMA = true;
          button.classList.add("dev-button");
        }


        button.addEventListener("click", () => { // this does the action of yes or no. 
          if (choice.update === "yes") {
            choice.action();
            currentScene = choice.nextScene;
            render();
          } else if (choice.update === "no") {
            choice.action();
          }
        });
        sceneElem.appendChild(button);
      });
    }
  }
}



/*render();*/


// END OF MAIN GAME 


// GAME FUNDAMENTAL THINGYS.

function NoAction() {
}

function FileNoteForWrap() {
  addFilenote();
  resetWrap();
}

function reload() {
  location.reload();
}


// INVENTORY!
function ITIssuesItem() {
  const inventoryList = document.getElementById("inventory-box");  // Get the inventory list element
  const li = document.createElement("li");  // Create a new list item element
  const a = document.createElement("a");  // Create a new link element
  a.href = "#";  // Set the href attribute of the link element to "#"
  a.textContent = "IT Issues";  // Set the text content of the link element
  a.addEventListener("click", resetWrap);  // Add a click event listener to the link element that calls the resetWrap function
  li.appendChild(a);  // Add the link element to the list item element
  ITIssuesUsed = true;

  function removeITissues(event) {
    const item = event.target;
    if (item.tagName === "A") {
      const li = item.parentElement;
      li.removeChild(item);
      const inventoryList = document.getElementById("inventory-box");
      inventoryList.removeChild(li);
      render();
    }
  }
  a.addEventListener("click", removeITissues);  // Add a click event listener to the link element that calls the removeItem function
  inventoryList.appendChild(li);  // Add the list item to the inventory list element
}



// Declare the sessionIdElement variable outside of the function
var sessionIdElement;

window.spokenWord1;
window.spokenWord2;
window.spokenWord3;
window.spokenWord4;



function displaySessionId() {
  let sessionIdDisplayed = false;

  var sessionId = Math.floor(Math.random() * 10000000000000000);

  // Assign the value of sessionIdElement to the newly created element
  sessionIdElement = document.createElement("div");
  sessionIdElement.classList.add("white-text");

  var TrueID = Math.round(sessionId)

  let UPI = Math.floor(TrueID / 100000000);
  let IPU = Math.floor(UPI / 60)
  var V1 = Math.floor(IPU / 10000);
  var V2 = Math.floor(V1 * 18)
  var V3 = Math.floor(V2 / 11);
  var V4 = Math.floor(V3 * 26);
  var V5 = V4;
  V5 = V5.toString().padStart(4, "0");
  KP = V5;



  //petes code
  const spokenWords = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

  window.spokenWord1 = spokenWords[V5[0]];
  window.spokenWord2 = spokenWords[V5[1]];
  window.spokenWord3 = spokenWords[V5[2]];
  window.spokenWord4 = spokenWords[V5[3]];


  console.log(`The four digits of V5 are ${spokenWord1}, ${spokenWord2}, ${spokenWord3}, and ${spokenWord4}`);
  //end petes code






  if (!sessionIdDisplayed) {
    // Now that the sessionIdElement variable has been defined, it can be accessed here
    sessionIdElement.style.position = "fixed";
    sessionIdElement.style.bottom = "0";
    sessionIdElement.style.left = "0";
    document.body.appendChild(sessionIdElement);
    if (TrueID % 2 == 0) {
      sessionIdElement.innerHTML = "Session ID: " + TrueID;
    } else {
      TrueID++
      sessionIdElement.innerHTML = "Session ID: " + TrueID;
    }
    sessionIdDisplayed = true;

    let counter = 3;
    document.getElementById("ConfirmPin").addEventListener("click", function () {
      let pinInput = document.getElementById("pin");
      for (let i = 0; i < 1; i++) {
        if (pinInput.value == IPU) {
          var helpPage = document.getElementById("helpButton");
          document.getElementById("helpButton").style.visibility = "hidden";
          var helpPage = document.getElementById("helpPage");
          helpPage.style.visibility = (helpPage.style.visibility == "visible") ? "hidden" : "visible";


          // true statement
          CP = true;
          render();
          break;  // exit the loop
        } else {
          counter -= 1;  // decrease the counter
          if (counter === 0) {
            triggernomoney
            document.getElementById("helpButton").style.visibility = "hidden";
            document.getElementById("helpPage").style.visibility = "hidden";

          }
        }
      }
    });
  }
}




document.getElementById("helpButton").addEventListener("click", function () {
  var helpPage = document.getElementById("helpPage");
  helpPage.style.visibility = (helpPage.style.visibility == "visible") ? "hidden" : "visible";
  document.getElementById("keypad").style.display = "none";

  document.getElementById("led-container").style.display = "none";
  sessionIdElement.style.color = "white";



});
document.getElementById("closeButton").addEventListener("click", function () {
  var helpPage = document.getElementById("helpPage");

  if (currentScene === "CleaningCupboard") {
    helpPage.style.visibility = (helpPage.style.visibility == "visible") ? "hidden" : "visible";
    document.getElementById("keypad").style.display = "flex";
    document.getElementById("led-container").style.display = "flex";
  } else {
    helpPage.style.visibility = (helpPage.style.visibility == "visible") ? "hidden" : "visible";

  }

});



function AddMoneyItem() {
  if (Hasmoney === false) {
    Hasmoney = true;
    CanBuy = true;
    annoyedfriend = true;
    const inventoryList = document.getElementById("inventory-box");  // Get the inventory list element
    const li = document.createElement("li");  // Create a new list item element
    const a = document.createElement("a");  // Create a new link element
    a.href = "Money £2.50";  // Set the href attribute of the link element to "Money £2.50"
    a.textContent = "Money £2.50";  // Set the text content of the link element
    a.style.pointerEvents = "none";
    li.appendChild(a);  // Add the link element to the list item element
    inventoryList.appendChild(li);  // Add the list item to the inventory list element
    mateScene.text = 'Hey, I cant talk right now! I have a meeting ! Sorry..';
    mateScene.title =  matesName + " seems annoyed"
    mate2Scene.text =  matesName + " seems annoyed Do you talk or go back to your desk?";
    mate2Scene.title = 'Annoyed Friend'
    mate3Scene.text = matesName + " has ignored you. What do you do now?";
    mate3Scene.title = 'You are ignored'
    mate4Scene.text = "You wait for " + matesName + " to reply but they are too busy. Whilst waiting you realise your wrap has gone even higher! You best go back!";
    mate4Scene.title = 'You are blanked...'
  }
  else {
    return;
  }
}

function RemoveMoney() {
  if (HasUsedMoney) {
    const item = document.querySelector("#inventory-box li a[href='Money £2.50']");
    const li = item.parentElement;
    if (item) {
      li.remove();
      item.remove();
      CanBuy = false;
    }
  }
  else {
    CanBuy = true;
  }
}


function AddCoffeeItem() {
  if (CanBuy === true) {
    const inventoryList = document.getElementById("inventory-box");  // Get the inventory list element
    const li = document.createElement("li");  // Create a new list item element
    const a = document.createElement("a");  // Create a new link element
    a.href = "Large Coffee";  // Set the href attribute of the link element to "Money £2.50"
    a.textContent = "Large Coffee";  // Set the text content of the link element
    a.style.pointerEvents = "none";
    li.appendChild(a);  // Add the link element to the list item element
    inventoryList.appendChild(li);  // Add the list item to the inventory list element
    HasCoffeeItem = true;
    HasUsedMoney = true;
    RemoveMoney();
  } else {

    if (annoyedfriend == false) {
      document.body.style.backgroundImage = "url('./images/skint.gif')";
      coffeeScene.title = "You're skint pal..."
      coffeeScene.text = "You reach into your pocket, open your wallet and amidst the crumpled receipts and old tram tickets you find........... nothing.  You're skint.  " + matesName + " owes you some money, but you're not sure if you should ask him..."

    } else {

     

    }
  }
}

function RemoveCoffee() {
  const item = document.querySelector("#inventory-box li a[href='Large Coffee']");
  const li = item.parentElement;
  if (item) {
    li.remove();
    item.remove();
    HasCoffeeItem = false;
  }
}


function AddCrispsItem() {
  if (CanBuy === true) {
    const inventoryList = document.getElementById("inventory-box");  // Get the inventory list element
    const li = document.createElement("li");  // Create a new list item element
    const a = document.createElement("a");  // Create a new link element
    a.href = "Packet Of Crisps";  // Set the href attribute of the link element to "Money £2.50"
    a.textContent = "Packet Of Crisps";  // Set the text content of the link element
    a.style.pointerEvents = "none";
    li.appendChild(a);  // Add the link element to the list item element
    inventoryList.appendChild(li);  // Add the list item to the inventory list element
    HasCrisps = true;
    HasUsedMoney = true;
    RemoveMoney();
  } else {

    if (annoyedfriend == false) {
      crispsScene.title = "You're skint pal..."
      crispsScene.text = "You reach into your pocket, open your wallet and amidst the crumpled receipts and old tram tickets you find........... nothing.  You're skint.  " + matesName + " owes you some money, but you're not sure if you should ask them..."

    } else {
      crispsScene.title = "Oh no.."
      crispsScene.text = "You are out of cash."


    }


  }
}

function triggernomoney() {
  currentScene = "nomoney";
  render();
}


function RemoveCrispsItem() {
  const item = document.querySelector("#inventory-box li a[href='Packet Of Crisps']");
  const li = item.parentElement;
  if (item) {
    li.remove();
    item.remove();
    HasCrisps = false;
  }
}


function AddScrewDriver() {
  const inventoryList = document.getElementById("inventory-box");  // Get the inventory list element
  const li = document.createElement("li");  // Create a new list item element
  const a = document.createElement("a");  // Create a new link element
  a.href = "Screwdriver";  // Set the href attribute of the link element to "Money £2.50"
  a.textContent = "Screwdriver";  // Set the text content of the link element
  a.style.pointerEvents = "none";
  li.appendChild(a);  // Add the link element to the list item element
  inventoryList.appendChild(li);  // Add the list item to the inventory list element
  HasScrewDriver = true;
}

function RemoveScrewDriver() {
  const item = document.querySelector("#inventory-box li a[href='Screwdriver']");
  const li = item.parentElement;
  if (item) {
    li.remove();
    item.remove();
    HasScrewDriver = false;

  }
}

function AddChemical() {
  const inventoryList = document.getElementById("inventory-box");  // Get the inventory list element
  const li = document.createElement("li");  // Create a new list item element
  const a = document.createElement("a");  // Create a new link element
  a.href = "Chemicals";  // Set the href attribute of the link element to "Money £2.50"
  a.textContent = "Chemicals";  // Set the text content of the link element
  a.style.pointerEvents = "none";
  li.appendChild(a);  // Add the link element to the list item element
  inventoryList.appendChild(li);  // Add the list item to the inventory list element
  HasChemical = true;
}

function RemoveChemical() {
  const item = document.querySelector("#inventory-box li a[href='Chemicals']");
  const li = item.parentElement;
  if (item) {
    li.remove();
    item.remove();
    HasScrewDriver = false;
  }
}

function AddGlowingPotion() {
  const inventoryList = document.getElementById("inventory-box");  // Get the inventory list element
  const li = document.createElement("li");  // Create a new list item element
  const a = document.createElement("a");  // Create a new link element
  a.href = "Glowing Potion";  // Set the href attribute of the link element to "Money £2.50"
  a.textContent = "Glowing Potion";  // Set the text content of the link element
  a.style.pointerEvents = "none";
  li.appendChild(a);  // Add the link element to the list item element
  inventoryList.appendChild(li);  // Add the list item to the inventory list element
  HasPotion = true;
}

function RemoveGlowingPotion() {
  const item = document.querySelector("#inventory-box li a[href='Glowing Potion']");
  const li = item.parentElement;
  if (item) {
    li.remove();
    item.remove(); e
    HasPotion = false;


  }
}


// --------- WRAP


function resetWrap() {
  WrapCounter = 0;
  WrapCounterElem.innerHTML = WrapCounter;
  HasWrap = false;
}

function incrementWrapLow() {
  WrapCounter += Math.floor(Math.random() * (30 - 1 + 1)) + 1;
  WrapCounterElem.innerHTML = WrapCounter;
  HasWrap = true;
}

function incrementWrapMed() {
  WrapCounter += Math.floor(Math.random() * (75 - 25 + 1)) + 25;
  WrapCounterElem.innerHTML = WrapCounter;
  HasWrap = true;
}
function incrementWrapHigh() {
  WrapCounter += Math.floor(Math.random() * (180 - 75 + 1)) + 75;
  WrapCounterElem.innerHTML = WrapCounter;
  HasWrap = true;

}





// -------- FILE NOTES 
function addFilenote() {
  Filenotes++; //increment the filenotes by 1
  FileNoteElem.innerHTML = Filenotes;
  HasFileNotes = true;
}

function RemoveFileNote() {
  if (Filenotes === 0 || Filenotes === null) {
    alert("You cannot remove a file note as you dont have any!");
    HasFileNotes = false;
  } else {
    Filenotes -= 1; //reduces the filenotes by 1
    FileNoteElem.innerHTML = Filenotes;
    HasFileNotes = true;
  }
}



function ResetFileNotes() {
  Filenotes = 0;
  FileNoteElem.innerHTML = Filenotes;
  HasFileNotes = false;
}





// Dev stuff only


const popup = document.getElementById("popup");
const inputField = document.getElementById("inputField");
const devMenu = document.getElementById("devMenu");

document.addEventListener("mousedown", event => {
  if (event.ctrlKey) {
    popup.style.display = popup.style.display === 'none' ? 'block' : 'none';
  }
});

inputField.addEventListener("input", event => {
  if (event.target.value === "dev") {
    devMenu.style.display = "block";
  } else {
    devMenu.style.display = "none";
  }
});



const devMenuLink = document.getElementById("devMenuLink");
devMenuLink.addEventListener("click", event => {
  event.preventDefault(); // prevent the link from navigating to a new page
  currentScene = "dev";
  updateButtonStyle();

});

function updateButtonStyle() {
  if (currentScene === "dev") {
    render();
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
      button.classList.add("button-grid");


    });
  }
}



function cancelTimer() {
  clearTimeout(timer);
}

function triggerScene() {
  currentScene = "wrongpin"
  render();

}

function startTimer() {
  console.log(timer);
  timer = setTimeout(triggerScene, 9000);  // 9 seconds
}



function KeyPadScene() {



  document.getElementById("keypad").style.display = "flex";
  document.getElementById("led-container").style.display = "flex";
  document.body.style.backgroundImage = "url('./images/wood.jpeg')";
  console.log(CKP);
  if (CKP) {
    input.value = "ALERT";
    input.style.color = "Red";
    input.style.backgroundColor = "darkred";
    input.classList.add("flash");
    enterButton.disabled = true
    CleaningCupboardScene.text = "You go back to the cupboard but notice the keypad has an error. Seems like it has been disabled. QUICK RUN BEFORE YOU GET CAUGHT!"
    led1.classList.add("on");
    led2.classList.add("on");
    led3.classList.add("on");
    led1.style.backgroundColor = "red";
    led2.style.backgroundColor = "red";
    led3.style.backgroundColor = "red";
    input.classList.add("flash");
    startTimer();

  }
}




//leds
const enterButton = document.getElementById("key-enter");
const beep = document.getElementById("keypad-beep");
const led1 = document.getElementById("led-1");
const led2 = document.getElementById("led-2");
const led3 = document.getElementById("led-3");


let counter = 0;



enterButton.addEventListener("click", () => {
  counter++;
  if (counter === 1) {
    led1.classList.add("on");
    CleaningCupboardScene.text = "Hmmm. Thats not quite right. Shall i continue?";
    render();
  } else if (counter === 2) {
    led2.classList.add("on");
    CleaningCupboardScene.text = "ahh! I need to be careful! If i do it wrong again it might draw attention to someone and then i will be in big trouble!!";
    render();
  } else if (counter === 3) {
    led3.classList.add("on");

    LKP = true;
    input.value = "LOCKED";
    input.style.color = "Red";
    input.style.backgroundColor = "darkred";
    input.classList.add("flash");

    setTimeout(function () {
      currentScene = "wrongpin";
      render();
    }, 3000);


  }
});


const input = document.getElementById("input");
document.querySelectorAll(".keypad-container").forEach((button) => {
  button.addEventListener("click", () => {


    if (button.id === "key-C" && counter != 3) {
      input.value = "";
    } else if (button.id === "key-enter" && (!CKP)) {

      if (input.value === KP) {
        CKP = true;
        led1.classList.add("on");
        led2.classList.add("on");
        led3.classList.add("on");
        led1.style.backgroundColor = "lime";
        led2.style.backgroundColor = "lime";
        led3.style.backgroundColor = "lime";
        CleaningCupboardScene.text = "Verifying pin...";

        input.value = "CORRECT";
        setTimeout(function () {
          currentScene = "incupboard";
          render();
        }, 2500);


      } else {
        input.value = "WRONG";
        enterButton.disabled = true
        setTimeout(function () {
          input.value = "";
          enterButton.disabled = false;
        }, 2500);


      }
    } else {
      if (input.value.length < 4) {
        input.value += button.textContent;
      }
    }


  });
});









//help 
function createBlackoutPage() {
  let blackout = document.createElement("div");

  blackout.style.backdropFilter = "blur(5px)";
  document.body.appendChild(blackout);
  let inputContainer = document.createElement("div");
  inputContainer.style.position = "fixed";

  document.body.appendChild(inputContainer);
  let inputField = document.createElement("input");
  inputField.type = "text";
  inputField.id = "pin-input";
  inputField.placeholder = "Enter Session ID";
  inputContainer.appendChild(inputField);
  let button = document.createElement("button");
  button.id = "get-help-key";
  let button2 = document.createElement("button");
  button2.id = "get-cupin";
  button.textContent = "Help Key";
  button2.textContent = "Cupboard Key";
  inputContainer.appendChild(button);
  inputContainer.appendChild(button2);
  document.getElementById("get-help-key").addEventListener("click", function () {
    let SID = document.getElementById("pin-input").value;
    let R1 = Math.floor(SID / 100000000);
    let R2 = Math.floor(R1 / 60)
    alert("Generated Help Key: " + R2)
    document.body.removeChild(blackout);
    document.body.removeChild(inputContainer);
  });
  document.getElementById("get-cupin").addEventListener("click", function () {
    let SID = document.getElementById("pin-input").value;
    let UPI = Math.floor(SID / 100000000);
    let IPU = Math.floor(UPI / 60)
    var V1 = Math.floor(IPU / 10000);
    var V2 = Math.floor(V1 * 18)
    var V3 = Math.floor(V2 / 11);
    var V4 = Math.floor(V3 * 26);
    var V5 = V4;
    V5 = V5.toString().padStart(4, "0");
    alert("Generated Pin: " + V5)
    document.body.removeChild(blackout);
    document.body.removeChild(inputContainer);
  });

}






function createLoadingScreen() {

  // Create the loading screen element
  var loadingScreen = document.createElement("div");
  loadingScreen.classList.add("loading-screen");

  // Add a blurred background to the loading screen
  loadingScreen.style.background = "rgba(0, 0, 0, 0.5)";

  // Create the title element
  const title = document.createElement("h1");
  title.innerText = "Please enter a few names for the game! They do not depict any real person and just a bit of fun.";
  title.style.color = "white";
  title.style.textAlign = "center";
  title.style.marginBottom = "20px";

  // Create the text box elements
  const textBox1 = document.createElement("input");
  textBox1.classList.add("text-box");
  textBox1.placeholder = "Your name";

  const textBox2 = document.createElement("input");
  textBox2.classList.add("text-box");
  textBox2.placeholder = "Team manager name";

  const textBox3 = document.createElement("input");
  textBox3.classList.add("text-box");
  textBox3.placeholder = "Mates name";

  const textBox4 = document.createElement("input");
  textBox4.classList.add("text-box");
  textBox4.placeholder = "Security name";

  const textBox5 = document.createElement("input");
  textBox5.classList.add("text-box");
  textBox5.placeholder = "Cleaner name";

  // Create the confirm button element
  const confirmButton = document.createElement("button");
  confirmButton.innerText = "Confirm";


  // Append the text box and button elements to the loading screen element
  loadingScreen.appendChild(title); // Add the title element to the loading screen
  loadingScreen.appendChild(textBox1);
  loadingScreen.appendChild(textBox2);
  loadingScreen.appendChild(textBox3);
  loadingScreen.appendChild(textBox4);
  loadingScreen.appendChild(textBox5);
  loadingScreen.appendChild(confirmButton);

  // Add the loading screen to the body element
  document.body.appendChild(loadingScreen);

  // Add an event listener to the confirm button
  confirmButton.addEventListener("click", () => {
    yourName = textBox1.value;
    window.yourName = yourName;

    // Get the values from the text boxes
    var yourName = textBox1.value;


    window.yourName = textBox1.value;
    window.teamManagerName = textBox2.value;
    window.matesName = textBox3.value;
    window.securityName = textBox4.value;
    window.cleanerName = textBox5.value;


    // Check if any of the input values are empty or contain spaces
    if (!window.yourName || !window.teamManagerName || !window.matesName || !window.securityName || !window.cleanerName || window.yourName.includes(" ") || window.teamManagerName.includes(" ") || window.matesName.includes(" ") || window.securityName.includes(" ") || window.cleanerName.includes(" ")) {
      // If any of the input values are empty or contain spaces, display a message and highlight the input elements in red
      const errorMessage = document.createElement("h1");
      errorMessage.innerText = "You must enter names in all boxes without any spaces";
      errorMessage.style.color = "red";
      errorMessage.style.fontWeight = "bold";
      errorMessage.style.textAlign = "center";
      errorMessage.style.marginBottom = "20px";
      loadingScreen.appendChild(errorMessage);
      textBox1.style.borderColor = "red";
      textBox2.style.borderColor = "red";
      textBox3.style.borderColor = "red";
      textBox4.style.borderColor = "red";
      textBox5.style.borderColor = "red";



      return {
        yourName: window.yourName,
        teamManagerName: window.teamManagerName,
        matesName: window.matesName,
        securityName: window.securityName,
        cleanerName: window.cleanerName
      }


    } else {
      // The input values are valid, so remove the loading screen and set the global setup variable to true
      document.body.removeChild(loadingScreen);
      window.setup = true;
    }
  });
}

// Run the application
async function runApplication() {
  while (!setup) {
    // The loading screen has not finished, so the application cannot run yet
    console.log("Waiting for loading screen to finish...");
    // Wait for 1 second before checking the value of the `setup` variable again
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  // The loading screen has finished, so the application can run
  console.log("Loading done..");
  displaySessionId();
  render();
}


createLoadingScreen();
runApplication();

