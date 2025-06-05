import './App.css';
import { useState, useEffect } from 'react';
import spellsData from './spells.json';
import Modal from "./Modal";

const App = () => {
  const [spells, setSpells] = useState([]); 
  const [spellSearch, setSpellSearch] = useState("");
  const [spellClass, setSpellClass] = useState("All");
  const [spellLevel, setSpellLevel] = useState("All"); 


  const spellSchoolColors = {
  abjuration: "text-blue-700",
  conjuration: "text-orange-400",
  divination: "text-purple-700",
  enchantment: "text-pink-400",
  evocation: "text-red-500",
  illusion: "text-teal-400",
  necromancy: "text-green-600",
  transmutation: "text-yellow-500",
};

  const spellSchoolGradients = {
  abjuration: "hover:bg-gradient-to-l hover:from-white hover:to-blue-300",
  conjuration: "hover:bg-gradient-to-l hover:from-white hover:to-orange-300",
  divination: "hover:bg-gradient-to-l hover:from-white hover:to-purple-300",
  enchantment: "hover:bg-gradient-to-l hover:from-white hover:to-pink-300",
  evocation: "hover:bg-gradient-to-l hover:from-white hover:to-red-300",
  illusion: "hover:bg-gradient-to-l hover:from-white hover:to-teal-300",
  necromancy: "hover:bg-gradient-to-l hover:from-white hover:to-green-300",
  transmutation: "hover:bg-gradient-to-l hover:from-white hover:to-amber-300",
};

const boldConcentration = (text) => {
  return text.replace("Concentration", "<strong>Concentration</strong>");
};

  useEffect(() => {
    setSpells(spellsData);
  }, []);

  console.log("spells:", spells);
  const search = spellSearch || "";
  const filteredSpells = spells.filter((spell) => spell.name.toLowerCase().includes(search.toLowerCase()))
  .filter((spell) => spellClass === "All" ? true : spell.classes.includes(spellClass.toLowerCase()))
  .filter((spell) => spellLevel === "All" ? true : spell.level === (spellLevel));


  return (
    <div>
      <header class="text-white body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Character
          </button>
        </div>
      </header>
  <section class="text-white body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-12">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4">5.5E Spellbook</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
      </div>
      <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
        <div class="relative flex-grow w-full">
          <label for="full-name" class="leading-7 text-sm">Spell Name</label>
          <input type="text" placeholder="Search Spells" value={spellSearch} onChange={(e) => setSpellSearch(e.target.value)} id="spell-name" name="spell-name" class="w-full h-8 bg-white bg-opacity-50 rounded border border-gray-300 focus:border-violet-950 focus:bg-violet-200 focus:text-cyan-700 focus:ring-2 focus:ring-violet-400 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
        </div>
        <div class="relative flex-grow w-full">
          <label for="spell-class" class="leading-7 text-sm">Class</label>
          <select  id="spell-class" name="spell-class" value={spellClass} onChange={(e) => setSpellClass(e.target.value)} class="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-violet-950  focus:ring-2 focus:ring-violet-400 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          <option>All</option>
          <option>Bard</option>
          <option>Cleric</option>
          <option>Druid</option>
          <option>Paladin</option>
          <option>Ranger</option>
          <option>Sorcerer</option>
          <option>Warlock</option>
          <option>Wizard</option>
          </select>
        </div>
        <div class="relative flex-grow w-full">
          <label for="spell-level" class="leading-7 text-sm">Spell Level</label>
          <select id="spell-level" name="spell-level" value={spellLevel} onChange={(e) => setSpellLevel(e.target.value)} class="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-violet-950 focus:ring-2 focus:ring-violet-400 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          <option>All</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          </select>
        </div>
      </div>
    </div>
  </section>
  <section id="spells" class="text-black capitalize">
    <div class="container px-5 mx-auto bg-transparent rounded">
          {filteredSpells.map((spell, index) => {
            const schoolColors = spellSchoolColors[spell.school];
            const schoolGradient = spellSchoolGradients[spell.school];
            return (
              <div key={index} class={`bg-white p-4 rounded shadow mb-4 hover:scale-105 flex justify-between items-start ${schoolGradient} transition duration-300 ease-in-out animate-fadeIn cursor-pointer`}>
                <div class="flex-col text-left">
                  <h2 class="text-xl font-bold">{spell.name}</h2>
                  <p>Level: {spell.level}</p>
                  <p>{spell.classes.join(", ")}</p>
                </div>
                <div class="flex-col text-right">
                  <p class={`${schoolColors} font-bold`}>{spell.school}</p>
                  <p>{spell.casting_time}</p>
                  <p dangerouslySetInnerHTML={{__html: boldConcentration(spell.duration)}}></p>
                </div>
              </div>
            );
          })}
        </div>
  </section>
      </div>
  )
}

export default App