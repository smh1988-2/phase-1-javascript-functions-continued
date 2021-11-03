// Your code here
function saturdayFun (activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

// function mondayWork (activity = "go to the office") {
//     return `This Monday, I will ${activity}.`;
// }

const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
};

function wrapAdjective(wrap = "*") {
    return function (adj = "special") {
        return `You are ${wrap}${adj}${wrap}!`;
    }
    
}

wrapAdjective("*")("a hard worker");
wrapAdjective("|||")("a dedicated programmer");