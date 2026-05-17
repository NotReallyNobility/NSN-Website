const groupIndex = Number(localStorage.getItem("selectedGroup"));
console.log("Group Index: " + groupIndex);

const leaders = [
    "Jeremiah Macabre, the Ringmaster, also known as The Rotten Wretch"
]

const seconds = [
    "Klonzy the metal jawed clown, the oldest of the troupe, excluding The Ringmaster himself"
]

const moralities = [
    "Chaotic Evil"
]

const enemies = [
    "Veteran Ghost: a dead soldier who chose to come back to protect his old world from supernatural threats entering through the portals, the Circus being a prime example. "
    +"Cryptid: a failed recruit, someone the Ringmaster sought out, seeing him as more food for B'Toth, but Cryptid came to his senses and began to fight the circus head on."
]

const missions = [
    "Though the other members of the circus believe themselves to be saving the downtrodden and mistreated, the truth is that they are slow sacrifices offered by the Ringmaster. "
    +"Their souls and eventually bodies are to be fed to the heart of the circus, an elder god known as B'Toth. In exchange for his service, Jeremiah is granted eternal life and enhanced abilities. Don't let his rotting flesh deceive you, he is the most powerful one there."
]

const backgrounds = [
    "Each of the circus performers was someone hated by their family due to deformities outside of their control, someone desperate for escape. "
    +"The Circus Heart is drawn to these souls, for their sorrow is the sweetest of delicacies, and their happiness in being accepted the most savory of foods. " 
    +"Though they cannot recall, the pact to join the circus was sealed in blood, for how could they join this new family if the old one lives still?"
]

const roles = [
    "The Ringmaster serves as the head of the group, the one to think out any plans and determine what is and isn't a threat. Klonzy serves as the face, a more comforting person to welcome in new recruits. The twins are agile, and often work as the eyes and ears of the physical world."
]

$(document).ready(function(){
    $("#leader").text(leaders[groupIndex]);
    $("#second").text(seconds[groupIndex]);
    $("#morality").text(moralities[groupIndex]);
    $("#enemies").text(enemies[groupIndex]);
    $("#mission").text(missions[groupIndex]);
    $("#background").text(backgrounds[groupIndex]);
    $("#roles").text(roles[groupIndex]);
});