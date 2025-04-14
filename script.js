const messages = [
" Tvoje srdce je čisté a plné lásky, ktorú rozdávaš každému, koho stretneš. 💖",
" Si silnejšia, než si kedy dokázala veriť, a stále sa stávaš lepšou verziou seba samej. 💪",
" Tvoje slová sú ako med, vždy dokážu rozohriať moju dušu. 🍯",
" Tvoj smiech je to najkrajšie zvonenie, ktoré by som chcel počúvať navždy. 🎶",
" Tvoje schopnosti ma fascinujú každý deň viac a viac. Si neuveriteľne talentovaná. 🎨",
" S tebou sa cítim ako najšťastnejší človek na svete. 🌍",
" Tvoje oči sú zrkadlom tvojej duše, a v nich vidím iba krásu a dobrotu. 👀",
" Si mojím slnkom, ktoré rozjasňuje aj tie najtemnejšie dni. 🌞",
" Keď hovoríš, všetci ťa počúvajú, pretože tvoje slová sú plné múdrosti. 🧠",
" Tvoja prítomnosť napĺňa každý priestor harmóniou a láskou. 🕊️",
" Tvoje schopnosti učiť sa a rásť sú jednoducho neuveriteľné. 📚",
" V tvojom objatí nájdem pokoj, ktorý je ťažké opísať slovami. 🤗",
" Si mojím inšpiratívnym vzorom a ukazuješ mi, ako byť lepším človekom každý deň. 🌟",
" Tvoje slová ma vždy povzbudia, aj keď sa cítim slabý. 🗣️",
" Tvoja trpezlivosť je nekonečná a ja to obdivujem. 🕰",
" Vždy sa staráš o tých, ktorých miluješ, s nezištnou oddanosťou. 💕",
" Tvoj úsmev je ako nádej v tme, vždy rozjasní každý deň. 😊",
" Keď sa na teba pozriem, vidím niekoho, kto je silnejší, než si kedy myslela. 💪",
" Tvoja úprimnosť a otvorenosť sú jedny z najkrajších vecí, ktoré na tebe obdivujem. 🗣",
" Každý moment s tebou je dar, ktorý si vážim viac než slová dokážu vyjadriť. 🎁",
" Tvoja vytrvalosť je niečo, čo by si mal obdivovať každý, kto ťa pozná. 🚀",
" Keď prejdeš okolo, celý svet akoby na chvíľu spomalil, pretože tvoja energia je nezameniteľná. ⚡",
" Tvoje vernosti a oddanosť sú najkrajšími darmi, aké som kedy dostal. 🎁",
" Tvoje dotyky sú plné lásky a starostlivosti, ktoré sa nedajú vyjadriť slovami. 🤲",
" Si ako svetielko, ktoré nikdy neprestáva žiariť, aj keď sa zdá, že je okolo tmy. ✨",
" Tvoja odvaha postaviť sa životným výzvam je pre mňa obrovským povzbudením. 🦸‍♀️",
" Tvoje ticho je rovnako krásne ako tvoje slová, pretože každý okamih strávený s tebou je naplnený pokojom. 🌙",
" Si niekto, kto rozumie hlboko nielen iným, ale aj sám sebe. 💭",
" Tvoje myšlienky sú plné lásky a empatie, čo robí svet lepším miestom. 🌍",
" Si môj najväčší poklad a každý deň sa z teba teším ešte viac. 💎",
" Tvoj vnútorný pokoj je niečo, čo ma neustále upokojuje a dáva mi silu. 🕊️",
" Tvoj smiech je najkrajší zvuk, ktorý chcem počúvať každý deň. 🎤"
];

const feelBadBtn = document.getElementById('feelBadBtn');
const messageEl = document.getElementById('message');

// Funkcia na náhodnú správu
function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

// Po kliknutí zobraz správu
feelBadBtn.addEventListener('click', () => {
    messageEl.textContent = getRandomMessage();
});