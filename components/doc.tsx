/**
 * 
 * This is for to have some documentation on how to understand Taxomageia.
 * 
 */

const Doc = () => {
  const version = "0.9.7"
  return ( 
    <section id="documentation">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-gray-400">
        <div className="py-12 md:py-20 border-t border-gray-800">
    
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            {/* <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div> */}
            <h1 className="h2 mb-4">Documentation</h1>
            <p className="text-xl text-gray-400">
              This documentation is related to Taxomageia app {version} and first added taxomageia (the First).   
            </p>
          </div>

          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            {/* <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div> */}
            <h2 className="h2 mb-4">Table of Contents</h2>
            <div className="text-xl text-gray-400">
              <ul className="list-group text-left">
                <li className="list-group-item">
                  <a href="#what-is-taxomageia" role="pointer">
                    1. What is Taxomageia?</a></li>
                <li className="list-group-item">
                  <a href="#why" role="pointer">
                    2. Why?</a></li>
                <li className="list-group-item">
                  <a href="#current" role="pointer">
                    3. Concepts</a></li>
                <li className="list-group-item">
                  <a href="#taxons" role="pointer">
                    4. Taxons</a></li>
                <li className="list-group-item">
                  <a href="#future" role="pointer">
                    5. Future</a>
                 </li>
              </ul>
            </div>
          </div>
    
          {/* Items */}
          <div id="what-is-taxomageia" className="max-w-3xl mx-auto md:pb-16">
            <h3 className="h3 mb-3 text-gray-400">1. What is Taxomageia?</h3>
            <p>
              Taxomageia or Biomagical classification extends biological classification and adds magical, immortal, summoned, fantasy, undead and other creatures and monsters. Each Taxonomic rank inherits properties from parent ranks. 
            </p>
            <p>
              Taxomageia is not a game. It is information to build a magical ecosystem. Not yet. It just started. 
            </p>
          </div>

          <div id="why" className="max-w-3xl mx-auto md:pb-16">
            <h3 className="h3 mb-3 text-gray-400">2. Why Taxomageia?</h3>
            <p className="mb-3">
              Game developers may want to have believable living magical ecosystem. This is where Taxomageia comes in. Taxomageia can be used in any kinds of games including computer, fantasy roleplaying (Dungeons & Dragons, RuneQuest, Universal Game Engine, etc.), any kinds of (roleplaying) games with magical ecosystems, table-top games and live roleplaying as well! Or just enjoy it.
            </p>
            <p>
              This project was started when I was ordered to go programming course by finnish unemployment office in autumn 2023. <a className="text-white" role="button" href="https://fullstackopen.com/en/" target="_blank">Course</a> is amazing (i am still on it) and i started to use new skills to build computer roleplaying game. I started to do that but i recognized i need creatures and monsters and i wanted them to live. So i want to have magical artificial ecosystem. Thats why i started to build Taxomageia application in november 2023.
            </p>
          </div>

          <div id="current" className="max-w-3xl mx-auto md:pb-16 mb-6">
            <h3 className="h3 mt-6 mb-1 text-gray-400">3. Concepts</h3>
            <p>
              Some generic guidelines for the First taxomageia. Self made taxomageias may have different concepts. Future versions of the Taxomageia app may have different features.
            </p>
            <div>
              <h4 className="h4 mt-6 mb-1 text-gray-400">Inheritance</h4>
              <p>Taxons are created by inheriting properties from parent taxons. Properties may add, subtract, multiply, change local properties. Properties may also not be inherited - allowing local properties "mutate" to complitely new features.</p>

              <ul>
              <li className="my-3">Creature may have multiple ways to exists at different dimensions and planes. Creature may have for example physical and spirit form.</li>
              <li className="my-3">Each form may progress through set of stages and develop as time passes ( physical bodies grow when cells divide themselves at material dimension ). </li>
              <li className="my-3">Each metamorphose stage has its own body, properties and abilities. For example, young fire elemental may be summoned from the plane of fire and has not yet reached full potential. It may (or may not) grow if summoned to physical plane. There can be creatures with multiple bodies.</li>
              <li className="my-3">Bodies may have any number of attributes and skills.</li>
              <li className="my-3">Bodies have multiple segments, connected to each other.</li>
              <li className="my-3">Each segment may have any number of body parts which have a location i.e. ventral or dorsal.</li>
              <li className="my-3">Notocord or vertebrae may be inherited from parents. Bilateral creatures have center with two symmertic sides. Trilateral has three.</li>
              <li className="my-3">Attributes have minimum and maximum range as well as growth indicator. Attributes are calculated by inheriting parents, every rank may make attribute stronger or weaker.</li>
              <li className="my-3">Propertylists contains tokens with + and - signs. With + inherited property gets stronger and with - weaker at inheriting rank.</li>
              <li className="my-3">Propertylists have two different versions. Basic list is to show tokens which has positive value after all parents have been inherited. It declares that this species has or has not this ability. Weighted list calculates all + and - signs from properties. Output declares how strong or weak this species is at this property/ability/power.</li>
              </ul>


              <h4 className="h4 mt-6 mb-1 text-gray-400">Consciousness</h4>
              <p>
                Many creatures and monsters on the First are conscious. It means their true self is not their existences. This allows creatures to exists in many different forms having each form to have its own developing process. Different forms may exists on different dimensions (happening same time as time passes) or on different planes (i.e. Elemental planes).
              </p>
              <h4 className="h4 mt-6 mb-1 text-gray-400">Meditation</h4>
              <p>
                Most of the creatures are surviving with their existences in the dimension and plane where their existences are. This leads them to be blind to the fact that they are also conscious beings. Meditation is an ability and a skill which, if exists, allows creature to recognize this. 
              </p>

            

            </div>
          </div>
          <div id="taxons" className="max-w-3xl mx-auto md:pb-16">
            <h3 className="h3 mb-3">4. Taxons ( JSON )</h3>
            <div>
              <p>Taxons can be downloaded as json from /api/taxomageia/first. </p>
              <h4 className="h4 mt-6 mb-1">Taxon</h4>
              <table className="my-3">
                <tbody>
                <tr><td>Identifier</td><td className="pl-3">Unique identifier</td></tr>
                <tr>
                  <td className="w-20">Name/Description</td><td className="pl-3">Name and description in Finnish and English</td>
                </tr> 
                <tr><td>Taxon rank</td><td className="pl-3">Taxons are inherited from first taxons (domain) to the last (species).</td></tr>
                <tr><td>Taxon parent</td><td className="pl-3">Parent identifier for this taxon.</td></tr>
                <tr><td>Properties</td><td className="pl-3">Currently may contain "consciousness".</td></tr>
                <tr><td>Abilities</td><td className="pl-3"></td></tr>
                <tr><td>Existences</td><td className="pl-3">An array of existences.</td></tr>
                </tbody>
              </table>

              <h4 className="h4 mt-6 mb-1">Existence</h4>
              <p>Describes how individuals of this creature or monster type exists. This may include living material, energy, spiritual, fire, water, air, dead materia, etc. Whatever you want to and probably what is suitable for your game. </p>
              <table className="my-3">
                <tbody>
                <tr>
                  <td className="w-20">Name/Description</td><td className="pl-3">Name and description in Finnish and English</td>
                </tr> 
                <tr><td className="w-20">Type</td><td className="pl-3">Existence type (e.g. living material, energy, etc.). For fire elementals i use "Plane of Fire" and "Plane of Matter".</td></tr>
                </tbody>
              </table>

              <h4 className="h4 mt-6 mb-1">Metamorphose</h4>
              <p>Every existence has an array of metamorphoses describing how existence develops in time. Metamorphose may also exists out of time which makes it immortal.</p>
              <table className="my-3">
              <tbody>
                <tr>
                  <td className="w-20">Name/Description</td><td className="pl-3">Name and description in Finnish and English</td>
                </tr> 
                <tr>
                  <td className="w-20">Interval (hours?)</td><td className="pl-3">Numeric value to describe how ofter (in game time) this metamorphosis "activates". This is just a simple idea to make bodies grow different paces. Current values are abstact. I have however started to think that interval is a value in hours at game time.</td></tr>
                <tr>
                  <td className="w-20">Period</td><td className="pl-3">How long this metamorphosis lasts. After time has ran, next metamorphosis can be used. Value is numeric and abstract. I have started to think this as days in game time. When last metamorphosis is used the body of this metamorphosis dies of old age. It may have another existences or even another bodies on this existence. This allows to create beings without physical existence. They maybe ghosts or something else.</td></tr>
              </tbody>
              </table>

              <h4 className="h4 mt-6 mb-1">Body</h4>
              <table className="my-3">
              <tbody>
                <tr>
                  <td className="w-20">Name/Description</td>
                  <td className="pl-3">Name and description in Finnish and English</td>
                </tr>
                <tr>
                  <td className="w-20">Type</td><td className="pl-3">Body type. This similar as existence. There may be different types of bodies in existence.</td></tr>
                <tr><td className="w-20">Materia</td><td className="pl-3">This name of matter of this type of body. For example, type of Materia (Matter) can have materia of CELL, STONE, METAL etc. Energy bodies may have different materia types as well CHI, PRANA, KUNDALINI or something complitely new</td></tr>
                <tr><td className="w-20">Name/Description</td><td className="pl-3">Name and description in Finnish and English</td></tr>
                <tr><td className="w-20">Size</td><td className="pl-3">Size of this body. Look below.</td></tr>
                <tr><td className="w-20">Locomotion (array)</td><td className="pl-3">How this body moves? For example, RUNNING, SWIMMING, JUMPING, FLYING, HOPPING, SOARING, GLIDING, BRACHIATION, KNUCKLE_WALKING,   BIPEDALISM, CILIARY_MOVEMENT, PERISTALSIS (not at all final list!)</td></tr>
                <tr><td className="w-20">Diet</td><td className="pl-3">What kind of things keeps this body alive? CARNIVORE, HERBIVORE, MAGIC, BLOOD, FIRE, STORM, FLOWERS, RED DOTTED JUMPING SHAPESHIFTER BEETLES etc. Data is unfinished atm </td></tr>
                <tr><td className="w-20">Reproduction</td><td className="pl-3">How does this body reproduce? FISSION, BUDDING, ... Data is unfinished atm.</td></tr>
                <tr><td className="w-20">Body segments</td><td className="pl-3">List of body segments.</td></tr>
                <tr><td className="w-20">Powers</td><td className="pl-3">Object with keys properties, abilities, inputs and outputs. Properties are on/off value derived from inheritance chain. If value is positive at the end of inheritance, it is shown at the list. Inputs and outputs are similar. They represent what this creature body takes from the environment and what it gives. Abilities have values from negative to positive, they represent ability stregth in this body. These concepts and names may change.</td></tr>
                <tr>
                  <td className="w-20">Center, center segments and center sides</td>
                  <td className="pl-3">
                    Many creature bodies have center as a point or as a line (notochord or vertebrata). Bilateral creatures have then symmetric sides along the center. Center segments measure which segments are not multiplied when creature data is processed. Center sides is a numeric value determining how many sides creature has. It inherits. So, creatures inherited from trilateral taxon should have 0 sides locally if they are ment to be trilateral.
                  </td>
                  </tr>
                </tbody>
              </table>

              <h4 className="h4 mt-6 mb-1">BodySegment</h4>
              <p>
                Body segment may contain connected segments. Each segment may also contain body parts. See below.
              </p>
              <p>
                Segment may be a center segment (Body.centerSegments[]). In this case, it is not considered lateral. In other cases, it is lateral and it will be multiplied by the number of sides body has (Body.centerSides).
              </p>
              <p>
                Note: if a segment is not a center segment, its connections are not either.
              </p>
              <table className="my-3">
              <tbody>
                <tr>
                  <td className="w-20">Name/Description</td>
                  <td className="pl-3">Name and description in Finnish and English</td>
                </tr>
                <tr>
                  <td className="w-20">Name/Description</td><td className="pl-3">Name and description in Finnish and English</td>
                </tr>
                <tr>
                  <td className="w-20">Percentage</td><td className="pl-3">How big part this segment is from the whole body?</td>
                </tr>
                </tbody>
              </table>

              <h4 className="h4 mt-6 mb-1">BodyPart</h4>
              <p>Body part is connected to body segment. Body part has location information. For example, UPPERBODY segment may contain Body part CHEST and UPPERBACK where first has location VENTRAL and latter is DORSAL.</p>
              <table className="my-3">
              <tbody>
                <tr>
                  <td className="w-20">Name/Description</td>
                  <td className="pl-3">Name and description in Finnish and English</td>
                </tr>
                <tr>
                  <td className="w-20">Location</td>
                  <td className="pl-3">For example, DORSAL, VENTRAL, SUPERIOR, INFERIOR, ANTERIOR, POSTERIOR, LEFT, RIGHT, UPPER, LOWER</td>
                </tr>
               </tbody>
              </table>

              <h4 className="h4 mt-6 mb-1">Size</h4>
              <table className="my-3">
              <tbody>
                <tr>
                  <td className="w-20">Size values</td><td>Width, height and weight have minimum and maximum values. These are approximations of creature body size. Individuals have different sizes but in range of the species.</td>
                </tr>
                <tr>
                  <td className="w-20">Size units</td><td>Every size value have its own unit. Creature body size minimums may be in grams but maximums in tons.</td>
                </tr>
              </tbody>
              </table>

              <h4 className="h4 mt-6 mb-1">Mins, Maxes, Growths, Skills</h4>
              <p>Numeric values for attributes with key and values.</p>
              <p>Growths are numeric values to describe how much actual value changes when metamorphosis evolves (using interval and period).</p>
              <table className="my-3">
              <tbody>
                <tr>
                  <td className="w-20">Key</td><td>I use basic keys from D&D/RQ/Universal Game engine. For example, str, int, wis, pow, dex, con, chr, ... can be anything.</td></tr>
                <tr>
                  <td className="w-20">Value</td>
                  <td>Numeric value. I use values which i divided by 1000 if i use them in game. This means a value of 10000 would be 10 and 17890 would be 17.89 rounded to 18 in D&D/RQ/UGE. Can be anything.
                  </td>
                </tr>
                </tbody>
              </table>
            </div>

          </div>
          <div id="future" className="max-w-3xl mx-auto md:pb-16">
            <h3 className="h3 mb-3">5. Future</h3>
            <div>
              <h4 className="h4 mt-6 mb-1">User interface</h4>
              <ul>
                <li className="my-3">
                  Ability to add and share self made taxomageias ( needs sign up, sign in etc. ). 
                </li>
                <li className="my-3">Templates. No need to create from scratch.</li>
                <li className="my-3">
                  Filter creatures and mosters.
                </li>
                <li className="my-3">
                  When more taxomageias present, ability to search with keywords.
                </li>
              </ul>

              <h4 className="h4 mt-6 mb-1 mb-1">Server</h4>
              <ul>
                <li className="my-3">
                  Information how creatures are created. By magic? How? Using what components or what kind tools? Environment?
                  What skills are needed from magic-user or summoner?
                </li>
                <li className="my-3">
                  Body segments or parts could hold "muscle mass" and similar information which would add up to 
                  the creature's strength.
                </li>
                <li className="my-3">
                  Strength of an segment or part could be calculated from amount of muscle cells and quality of muscle cells. 
                  Calculation could be enchanced by different magical factors. Also, bodies without living cells could have a method to measure strength more precisely.
                </li>
                <li className="my-3">
                  Inseminators and breeders. How fast and with what methods reproduction happens?
                </li>
                <li className="my-3">
                  Body Systems for material body. Skeletal, muscular, nervous, cardiovascular, respiratory, digestive, lymphatic, endocrine, urinary. Other systems may exists as well. Maybe some spirits have a system to grow stronger in spiritual strength and control energy better. This would guide them to the areas where they found what they seek for in their "life".
                </li>
                <li className="my-3">
                  Body segments without body. Then there could be cursed body segments and parts working together separately without connection to body or themselves.
                </li>
                <li className="my-3">
                  (Bi/tri/etc.)lateral creatures should have their generated body segments body parts to have locations (LEFT, RIGHT, X, ...). Currently their identifier is only name differently i.e. leg_1, leg_2.
                </li>
              </ul>
            </div>          
          </div>
        </div>
      </div>
    </section>
  )
}

export default Doc