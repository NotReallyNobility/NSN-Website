const characterIndex = Number(localStorage.getItem("selectedCharacter"));
console.log("Character Index: " + characterIndex);

const names = [
    "Alex Green",
    "Mallory Maladine"
]

const aliases = [
    "Tachyon",
    "Madam Malady"
]

const friends = [
    "Samuel Jones",
    "Formerly Henry Maladine, her husband. In her current state she can't form relationships"
]

const nemesi = [
    "Madam Malady, bearer of plague",
    "Tachyon, faster than light, faster than fear"
]

const personalities = [
    "[WIP] On the more humourous side, attempting to emulate the fictional heroes he wants to live up to. He's slow to anger, but just as slow to calm down, making the struggles of being a hero compound on him. He can struggle not to snap under it.",
    "[WIP] She suffers insanity due to her powers. She believes humanity to be a virus that needs to be cured. This is not malice, but a genuine break of her mental state. She will often gain moments of clarity as she struggles to be herself again, kind, compassionate, and intelligent."
]

const backgrounds = [
    "[WIP] He works at a car shop, grew up on a lot of pop culture, got into cars because of the batmobile, and is the first hero.",
    "[WIP] She was a successful doctor, was administering vaccines when she was cursed with her powers and broken mind, and is the first villain."
]


$(document).ready(function(){
    $("#name").text(names[characterIndex]);
    $("#alias").text(aliases[characterIndex]);
    $("#friend").text(friends[characterIndex]);
    $("#nemesis").text(nemesi[characterIndex]);
    $("#personality").text(personalities[characterIndex]);
    $("#background").text(backgrounds[characterIndex]);
});